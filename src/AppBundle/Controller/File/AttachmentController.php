<?php

namespace AppBundle\Controller\File;

use AppBundle\Controller\BaseController;
use Topxia\Service\Common\ServiceKernel;
use AppBundle\Util\UploaderToken;
use Symfony\Component\HttpFoundation\Request;

class AttachmentController extends BaseController
{
    public function uploadAction(Request $request)
    {
        $query = $request->query->all();
        $useSeajs = $request->query->get('useSeajs', false);
        $parser = new UploaderToken();
        $params = $parser->parse($query['token']);

        if (!$params) {
            return $this->createJsonResponse(array('error' => '上传授权码不正确，请重试！'));
        }

        $template = 'attachment/upload-modal.html.twig';
        if ($useSeajs) {
            $template = 'attachment/seajs-upload-modal.html.twig';
        }

        return $this->render($template, array(
            'token' => $query['token'],
            'idsClass' => $query['idsClass'],
            'listClass' => $query['listClass'],
            'targetType' => $params['targetType'],
            'targetId' => $params['targetId'],
        ));
    }

    public function formFieldsAction(Request $request, $targetType, $targetId)
    {
        $targets = explode('.', $targetType);
        $type = 'attachment';
        $attachments = $this->getUploadFileService()->findUseFilesByTargetTypeAndTargetIdAndType($targetType, $targetId, $type);

        return $this->render('attachment/form-fields.html.twig', array(
            'target' => array_shift($targets),
            'targetType' => $targetType,
            'fileType' => array_pop($targets),
            'type' => 'attachment',
            'useType' => $request->query->get('useType', false),
            'showLabel' => $request->query->get('showLabel', true),
            'useSeajs' => $request->query->get('useSeajs', false),
            'attachments' => $attachments,
        ));
    }

    public function listAction(Request $request, $targetType, $targetId)
    {
        $type = 'attachment';

        return $this->render('attachment/list.html.twig', array(
            'attachments' => $this->getUploadFileService()->findUseFilesByTargetTypeAndTargetIdAndType($targetType, $targetId, $type),
        ));
    }

    public function previewAction(Request $request, $id)
    {
        $user = $this->getUser();
        if (!$user->isLogin()) {
            throw $this->createAccessDeniedException();
        }
        $previewType = $request->query->get('type', 'attachment');
        if ($previewType == 'attachment') {
            $attachment = $this->getUploadFileService()->getUseFile($id);
            $file = $this->getUploadFileService()->getFile($attachment['fileId']);
        } else {
            $file = $this->getUploadFileService()->getFile($id);
        }

        if ($file['storage'] == 'cloud') {
            return $this->forward('AppBundle:Admin/CloudFile:preview', array(
                'request' => $request,
                'globalId' => $file['globalId'],
            ));
        }

        return $this->render('material-lib/Web/preview.html.twig', array(
            'file' => $file,
        ));
    }

    public function downloadAction(Request $request, $id)
    {
        $user = $this->getUser();
        if (!$user->isLogin()) {
            throw $this->createAccessDeniedException();
        }
        $attachment = $this->getUploadFileService()->getUseFile($id);

        if (empty($attachment)) {
            throw $this->createNotFoundException();
        }

        if ($attachment['type'] != 'attachment') {
            return $this->createMessageResponse('error', $this->trans('无权下载该资料'));
        }

        $file = $this->getUploadFileService()->getFile($attachment['fileId']);

        return $this->forward('AppBundle:UploadFile:download', array(
            'request' => $request,
            'fileId' => $file['id'],
        ));
    }

    public function fileShowAction(Request $request, $fileId)
    {
        $file = $this->getUploadFileService()->getFile($fileId);
        $attachment = array('file' => $file);

        return $this->render('attachment/file-item.html.twig', array(
            'attachment' => $attachment,
        ));
    }

    public function deleteAction(Request $request, $id)
    {
        $previewType = $request->query->get('type', 'attachment');
        if ($previewType == 'attachment') {
            $this->getUploadFileService()->deleteUseFile($id);
        } else {
            if ($this->getUploadFileService()->canManageFile($id)) {
                $this->getUploadFileService()->deleteFile($id);
            } else {
                throw $this->createAccessDeniedException('opteration forbiddened');
            }
        }

        return $this->createJsonResponse(array('msg' => 'ok'));
    }

    protected function getUploadFileService()
    {
        return $this->createService('File:UploadFileService');
    }

    protected function getServiceKernel()
    {
        return ServiceKernel::instance();
    }
}