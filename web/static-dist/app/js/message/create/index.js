webpackJsonp(["app/js/message/create/index"],{fdd49ae184e009c89e63:function(t,e,o){e=t.exports=o("e7f1add7f34e416618de")(),e.push([t.id,".xdsoft_autocomplete{display:inline;position:relative;word-spacing:normal;text-transform:none;text-indent:0;text-shadow:none;text-align:start}.xdsoft_autocomplete .xdsoft_input{position:relative;z-index:2}.xdsoft_autocomplete .xdsoft_autocomplete_dropdown{position:absolute;border:1px solid #ccc;border-top-color:#d9d9d9;box-shadow:0 2px 4px rgba(0,0,0,.2);-webkit-box-shadow:0 2px 4px rgba(0,0,0,.2);cursor:default;display:none;z-index:1001;margin-top:-1px;background-color:#fff;min-width:100%;overflow:auto;border-radius:4px}.xdsoft_autocomplete .xdsoft_autocomplete_hint{position:absolute;z-index:1;color:#ccc!important;-webkit-text-fill-color:#ccc!important;text-fill-color:#ccc!important;overflow:hidden!important;white-space:pre!important}.xdsoft_autocomplete .xdsoft_autocomplete_hint span{color:transparent;opacity:0}.xdsoft_autocomplete .xdsoft_autocomplete_dropdown>.xdsoft_autocomplete_copyright{color:#ddd;font-size:10px;text-decoration:none;right:5px;position:absolute;margin-top:-15px;z-index:1002}.xdsoft_autocomplete .xdsoft_autocomplete_dropdown>div{background:#fff;white-space:nowrap;cursor:pointer;line-height:1.5em;padding:2px 0}.xdsoft_autocomplete .xdsoft_autocomplete_dropdown>div.active{background:#616161;color:#fff}",""])},0:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var n=o("3cdaa5dc9ec8f889a529"),a=i(n),r=$("#message-create-form");r.validate({rules:{"message[receiver]":{required:!0,es_remote:{}},"message[content]":{required:!0,maxlength:500}}});(0,a.default)({element:"#message_receiver"})},"3cdaa5dc9ec8f889a529":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),o("8d4e7d6381fa97065d13"),o("fdd49ae184e009c89e61");var i=function(t){var e=t.element,o=t.valueKey,i=t.url,n=$(e);n.autocomplete({appendMethod:"replace",valueKey:o||"nickname",source:[function(t,e){var o=this;if(t){var a=[],r=i||n.data("auto-url");$.get(r+"?q="+t,function(t){t&&t.map(function(t){a.push(t[o.valueKey])}),e(a)})}}]})};e.default=i},"8d4e7d6381fa97065d13":function(t,e){"use strict";!function(t){function e(t){if(!t)return"";var e,o="";for(e=0;e<t.length;e+=1)o+=F[t.charAt(e)]||t.charAt(e);return o}function o(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function i(t){if(t){if(t.selectionStart)return t.selectionStart;if(document.selection){t.focus();var e=document.selection.createRange(),o=document.selection.createRange().text.length;return e.moveStart("character",-t.value.length),e.text.length-o}}}function n(t,e){if(t.setSelectionRange)t.focus(),t.setSelectionRange(e,e);else if(t.createTextRange){var o=t.createTextRange();o.collapse(!0),o.moveEnd("character",e),o.moveStart("character",e),o.select()}}function a(t){return void 0!==t}function r(e,o,i,n){return a(e)&&!t.isArray(e)?t.isFunction(e)?e.apply(this,o):n:a(i)?r.call(this,i,o):n}function s(t,e,o,i){var n;return r.call(this,a(this.source[e])&&Object.prototype.hasOwnProperty.call(this.source[e],t)?this.source[e][t]:n,o,function(){return r.call(this,a(this[t][e])?this[t][e]:a(this[t][0])?this[t][0]:Object.prototype.hasOwnProperty.call(this,t)?this[t]:n,o,P[t][e]||P[t][0]||P[t],i)},i)}function c(e,o){return a(o)||(o=0),t.isArray(this.source)&&a(this.source[o])&&a(this.source[o][e])?this.source[o][e]:a(this[e])?t.isArray(this[e])?a(this[e][o])?this[e][o]:a(this[e][0])?this[e][0]:null:this[e]:null}function l(e,o,i,n){o.xhr&&o.xhr.abort(),o.xhr=t.ajax(t.extend(!0,{url:e,type:"GET",async:!0,cache:!1,dataType:"json"},o.ajax)).done(function(e){i&&i.apply(this,t.makeArray(arguments))}).fail(function(t,e){})}function u(t,e){var o,i=!1;for(o=0;o<t.length;o+=1)if(i=s.call(this,"findRight",o,[t[o],e,o]))return{right:i,source:o};return!1}function d(t,e){var o;for(p.call(this,t,e),o=0;o<t.length;o+=1)t[o]=s.call(this,"filter",o,[t[o],e,o],t[o])}function f(e,o,i){var n,c=this;if(t.isFunction(c.source))c.source.apply(c,[e,function(t){o=[t],r.call(c,i,[e])},o,0]);else for(n=0;n<c.source.length;n+=1)if(t.isArray(c.source[n]))o[n]=c.source[n];else if(t.isFunction(c.source[n]))!function(n){c.source[n].apply(c,[e,function(a){if(o[n]||(o[n]=[]),a&&t.isArray(a))switch(c.appendMethod){case"replace":o[n]=a;break;default:o[n]=o[n].concat(a)}r.call(c,i,[e])},o,n])}(n);else switch(c.source[n].type){case"remote":if(a(c.source[n].url)&&(!a(c.source[n].minLength)||e.length>=c.source[n].minLength)){var u=s.call(c,"replace",n,[c.source[n].url,e],"");o[n]||(o[n]=[]),function(t){l(u,c.source[t],function(n){o[t]=n,r.call(c,i,[e])},c.debug)}(n)}break;default:a(c.source[n].data)?o[n]=c.source[n].data:o[n]=c.source[n]}r.call(c,i,[e])}function p(t,e){for(var o=0;o<t.length;o++)t[o]=s.call(this,"preparse",o,[t[o],e],t[o])}function h(e,o){var i,n,a,r=[];for(i=0;i<e.length;i+=1)for(n=0;n<e[i].length&&!(r.length>=this.limit);n+=1)a=t(s.call(this,"render",i,[e[i][n],i,n,o],"")),a.data("source",i),a.data("pid",n),a.data("item",e[i][n]),r.push(a);return r}function g(t,e){return!!(a(t.data("source"))&&a(t.data("pid"))&&a(e[t.data("source")])&&a(e[t.data("source")][t.data("pid")]))&&e[t.data("source")][t.data("pid")]}function m(t,e){var o=g(t,e);return o?s.call(this,"getValue",t.data("source"),[o,t.data("source")]):a(t.data("value"))?decodeURIComponent(t.data("value")):t.html()}function v(e,o){function r(){if(P.val()!=V)return V=P.val(),V.length<o.minLength?void P.trigger("close.xdsoft"):void f.call(o,V,F,function(t){if(t==V){var e;if(d.call(o,F,t),P.trigger("updateContent.xdsoft"),o.showHint&&V.length&&V.length<=P.prop("size")&&(e=u.call(o,F,V))){var i=s.call(o,"getTitle",e.source,[e.right,e.source]);i=t+i.substr(t.length),v.val(i)}else v.val("")}})}function c(t){var e,n=t.keyCode;switch(n){case H:case j:case T:case W:case L:if(t.shiftKey||t.ctrlKey)return!0;break;case C:case z:return!0;case b:case y:return!!(A||K||t.shiftKey||t.ctrlKey)||(q=P.val(),D=i(P[0]),n!==b||D!==q.length||((e=u.call(o,F,q))?P.trigger("pick.xdsoft",[s.call(o,"getValue",e.source,[e.right,e.source])]):P.trigger("pick.xdsoft"),t.preventDefault(),!1));case _:return!0;case S:return!I||(P.trigger("pick.xdsoft"),t.preventDefault(),!1);case R:return P.val(V).trigger("close.xdsoft"),t.preventDefault(),!1;case k:case w:if(!I)return P.trigger("open.xdsoft"),P.trigger("updateContent.xdsoft"),t.preventDefault(),!1;E=p.find("div.active");var a=n==k?"next":"prev",r=!0;return E.length?(E.removeClass("active"),E[a]().length?E[a]().addClass("active"):(P.val(V),r=!1)):p.children().eq(n==k?0:-1).addClass("active"),r&&P.trigger("timepick.xdsoft"),p.trigger("updatescroll.xdsoft"),t.preventDefault(),!1}}if(!t(e).hasClass("xdsoft_input")){var l=t('<div class="xdsoft_autocomplete"></div>'),p=t('<div class="xdsoft_autocomplete_dropdown"></div>'),v=t('<input readonly class="xdsoft_autocomplete_hint"/>'),P=t(e),O=0,F=[],I=!1,q="",V="",B="",E=null,D=0;P.data("autocomplete_options",o),p.on("mousedown",function(t){t.preventDefault(),t.stopPropagation()}).on("updatescroll.xdsoft",function(){var t=p.find(".active");if(t.length){var e=t.position().top,o=t.outerHeight(!0),i=p.scrollTop(),n=p.height();e<0?p.scrollTop(i-Math.abs(e)):e+o>n&&p.scrollTop(i+e+o-n)}}),l.css({display:P.css("display"),width:P.css("width")}),o.style&&l.css(o.style),P.addClass("xdsoft_input").attr("autocomplete","off"),p.on("mousemove","div",function(){return!!t(this).hasClass("active")||(p.find("div").removeClass("active"),void t(this).addClass("active"))}).on("mousedown touchstart","div",function(){p.find("div").removeClass("active"),t(this).addClass("active"),P.trigger("pick.xdsoft")}),P.data("xdsoft_autocomplete",F).after(l).on("pick.xdsoft",function(t,e){P.trigger("timepick.xdsoft",e),B=V=P.val(),P.trigger("close.xdsoft"),E=p.find("div.active").eq(0),E.length||(E=p.children().first()),P.trigger("selected.xdsoft",[g(E,F)])}).on("timepick.xdsoft",function(t,e){E=p.find("div.active"),E.length||(E=p.children().first()),E.length&&(a(e)?P.val(e):P.val(m.call(o,E,F)),P.trigger("autocompleted.xdsoft",[g(E,F)]),v.val(""),n(P[0],P.val().length))}).on("keydown.xdsoft input.xdsoft cut.xdsoft paste.xdsoft",function(t){var e=c(t);return e===!1||e===!0?e:(setTimeout(function(){r()},1),void r())}).on("change.xdsoft",function(t){V=P.val()}),V=P.val(),f.call(o,P.val(),F,function(t){d.call(o,F,t)}),o.openOnFocus&&P.on("focusin.xdsoft",function(){P.trigger("open.xdsoft"),P.trigger("updateContent.xdsoft")}),o.closeOnBlur&&P.on("focusout.xdsoft",function(){P.trigger("close.xdsoft")}),l.append(P).append(p);var M=!1,U=0;P.on("updateHelperPosition.xdsoft",function(){clearTimeout(U),U=setTimeout(function(){if(l.css({display:P.css("display"),width:P.css("width")}),p.css(t.extend(!0,{left:P.position().left,top:P.position().top+parseInt(P.css("marginTop"))+parseInt(P[0].offsetHeight),marginLeft:P.css("marginLeft"),marginRight:P.css("marginRight"),width:"100%"==o.dropdownWidth?P[0].offsetWidth:o.dropdownWidth},o.dropdownStyle)),o.showHint){var e=getComputedStyle(P[0],"");v[0].style.cssText=e.cssText,v.css({"box-sizing":e.boxSizing,borderStyle:"solid",borderCollapse:e.borderCollapse,borderLeftWidth:e.borderLeftWidth,borderRightWidth:e.borderRightWidth,borderTopWidth:e.borderTopWidth,borderBottomWidth:e.borderBottomWidth,paddingBottom:e.paddingBottom,marginBottom:e.marginBottom,paddingTop:e.paddingTop,marginTop:e.marginTop,paddingLeft:e.paddingLeft,marginLeft:e.marginLeft,paddingRight:e.paddingRight,marginRight:e.marginRight,maxHeight:e.maxHeight,minHeight:e.minHeight,maxWidth:e.maxWidth,minWidth:e.minWidth,width:e.width,letterSpacing:e.letterSpacing,lineHeight:e.lineHeight,outlineWidth:e.outlineWidth,fontFamily:e.fontFamily,fontVariant:e.fontVariant,fontStyle:P.css("fontStyle"),fontSize:P.css("fontSize"),fontWeight:P.css("fontWeight"),flex:e.flex,justifyContent:e.justifyContent,borderRadius:e.borderRadius,"-webkit-box-shadow":"none","box-shadow":"none"}),P.css("font-size",P.css("fontSize")),v.innerHeight(P.innerHeight()),v.css(t.extend(!0,{position:"absolute",zIndex:"1",borderColor:"transparent",outlineColor:"transparent",left:P.position().left,top:P.position().top,background:P.css("background")},o.hintStyle)),M!==!1?v.css("background",M):M=P.css("background");try{P[0].style.setProperty("background","transparent","important")}catch(t){P.css("background","transparent")}l.append(v)}},o.timeoutUpdate||1)}),P.is(":visible")?P.trigger("updateHelperPosition.xdsoft"):x=setInterval(function(){P.is(":visible")&&(P.trigger("updateHelperPosition.xdsoft"),clearInterval(x))},100),t(window).on("resize",function(){l.css({width:"auto"}),P.trigger("updateHelperPosition.xdsoft")}),P.on("close.xdsoft",function(){I&&(p.hide(),v.val(""),o.autoselect||P.val(V),I=!1)}).on("updateContent.xdsoft",function(){var e=h.call(o,F,P.val()),i=10;return e.length?(P.trigger("open.xdsoft"),t(e).each(function(){this.css(t.extend(!0,{paddingLeft:P.css("paddingLeft"),paddingRight:P.css("paddingRight")},o.itemStyle))}),p.html(e),i=o.visibleHeight?o.visibleHeight:o.visibleLimit*((e[0]?e[0].outerHeight(!0):0)||o.defaultHeightItem)+5,void p.css("maxHeight",i+"px")):void P.trigger("close.xdsoft")}).on("open.xdsoft",function(){I||(p.show(),I=!0)}).on("destroy.xdsoft",function(){P.removeClass("xdsoft"),l.after(P),l.remove(),clearTimeout(O),P.data("xdsoft_autocomplete",null),P.off(".xdsoft")})}}var x,y=37,b=39,w=38,k=40,_=9,z=17,C=16,S=13,R=27,H=65,j=67,T=86,W=90,L=89,P={},A=!1,K=!1,O={},F={"ẚ":"a","Á":"a","á":"a","À":"a","à":"a","Ă":"a","ă":"a","Ắ":"a","ắ":"a","Ằ":"a","ằ":"a","Ẵ":"a","ẵ":"a","Ẳ":"a","Ẫ":"a","ẫ":"a","Ẩ":"a","ẩ":"a","Ǎ":"a","ǎ":"a","Å":"a","å":"a","Ǻ":"a","ǻ":"a","Ä":"a","ä":"a","Ǟ":"a","ǟ":"a","Ã":"a","ã":"a","Ȧ":"a","ȧ":"a","Ǡ":"a","ǡ":"a","Ą":"a","ą":"a","Ā":"a","ā":"a","Ả":"a","ả":"a","Ȁ":"a","ȁ":"a","Ȃ":"a","ȃ":"a","Ạ":"a","ạ":"a","Ặ":"a","ặ":"a","Ậ":"a","ậ":"a","Ḁ":"a","ḁ":"a","Ⱥ":"a","ⱥ":"a","Ǽ":"a","ǽ":"a","Ǣ":"a","ǣ":"a","Ḃ":"b","ḃ":"b","Ḅ":"b","ḅ":"b","Ḇ":"b","ḇ":"b","Ƀ":"b","ƀ":"b","ᵬ":"b","Ɓ":"b","ɓ":"b","Ƃ":"b","ƃ":"b","Ć":"c","ć":"c","Ĉ":"c","ĉ":"c","Č":"c","č":"c","Ċ":"c","ċ":"c","Ç":"c","ç":"c","Ḉ":"c","ḉ":"c","Ȼ":"c","ȼ":"c","Ƈ":"c","ƈ":"c","ɕ":"c","Ď":"d","ď":"d","Ḋ":"d","ḋ":"d","Ḑ":"d","ḑ":"d","Ḍ":"d","ḍ":"d","Ḓ":"d","ḓ":"d","Ḏ":"d","ḏ":"d","Đ":"d","đ":"d","ᵭ":"d","Ɖ":"d","ɖ":"d","Ɗ":"d","ɗ":"d","Ƌ":"d","ƌ":"d","ȡ":"d","ð":"d","É":"e","Ə":"e","Ǝ":"e","ǝ":"e","é":"e","È":"e","è":"e","Ĕ":"e","ĕ":"e","Ê":"e","ê":"e","Ế":"e","ế":"e","Ề":"e","ề":"e","Ễ":"e","ễ":"e","Ể":"e","ể":"e","Ě":"e","ě":"e","Ë":"e","ë":"e","Ẽ":"e","ẽ":"e","Ė":"e","ė":"e","Ȩ":"e","ȩ":"e","Ḝ":"e","ḝ":"e","Ę":"e","ę":"e","Ē":"e","ē":"e","Ḗ":"e","ḗ":"e","Ḕ":"e","ḕ":"e","Ẻ":"e","ẻ":"e","Ȅ":"e","ȅ":"e","Ȇ":"e","ȇ":"e","Ẹ":"e","ẹ":"e","Ệ":"e","ệ":"e","Ḙ":"e","ḙ":"e","Ḛ":"e","ḛ":"e","Ɇ":"e","ɇ":"e","ɚ":"e","ɝ":"e","Ḟ":"f","ḟ":"f","ᵮ":"f","Ƒ":"f","ƒ":"f","Ǵ":"g","ǵ":"g","Ğ":"g","ğ":"g","Ĝ":"g","ĝ":"g","Ǧ":"g","ǧ":"g","Ġ":"g","ġ":"g","Ģ":"g","ģ":"g","Ḡ":"g","ḡ":"g","Ǥ":"g","ǥ":"g","Ɠ":"g","ɠ":"g","Ĥ":"h","ĥ":"h","Ȟ":"h","ȟ":"h","Ḧ":"h","ḧ":"h","Ḣ":"h","ḣ":"h","Ḩ":"h","ḩ":"h","Ḥ":"h","ḥ":"h","Ḫ":"h","ḫ":"h",H:"h","̱":"h","ẖ":"h","Ħ":"h","ħ":"h","Ⱨ":"h","ⱨ":"h","Í":"i","í":"i","Ì":"i","ì":"i","Ĭ":"i","ĭ":"i","Î":"i","î":"i","Ǐ":"i","ǐ":"i","Ï":"i","ï":"i","Ḯ":"i","ḯ":"i","Ĩ":"i","ĩ":"i","İ":"i",i:"i","Į":"i","į":"i","Ī":"i","ī":"i","Ỉ":"i","ỉ":"i","Ȉ":"i","ȉ":"i","Ȋ":"i","ȋ":"i","Ị":"i","ị":"i","Ḭ":"i","ḭ":"i",I:"i","ı":"i","Ɨ":"i","ɨ":"i","Ĵ":"j","ĵ":"j",J:"j","̌":"j","ǰ":"j","ȷ":"j","Ɉ":"j","ɉ":"j","ʝ":"j","ɟ":"j","ʄ":"j","Ḱ":"k","ḱ":"k","Ǩ":"k","ǩ":"k","Ķ":"k","ķ":"k","Ḳ":"k","ḳ":"k","Ḵ":"k","ḵ":"k","Ƙ":"k","ƙ":"k","Ⱪ":"k","ⱪ":"k","Ĺ":"a","ĺ":"l","Ľ":"l","ľ":"l","Ļ":"l","ļ":"l","Ḷ":"l","ḷ":"l","Ḹ":"l","ḹ":"l","Ḽ":"l","ḽ":"l","Ḻ":"l","ḻ":"l","Ł":"l","ł":"l","̣":"l","Ŀ":"l","ŀ":"l","Ƚ":"l","ƚ":"l","Ⱡ":"l","ⱡ":"l","Ɫ":"l","ɫ":"l","ɬ":"l","ɭ":"l","ȴ":"l","Ḿ":"m","ḿ":"m","Ṁ":"m","ṁ":"m","Ṃ":"m","ṃ":"m","ɱ":"m","Ń":"n","ń":"n","Ǹ":"n","ǹ":"n","Ň":"n","ň":"n","Ñ":"n","ñ":"n","Ṅ":"n","ṅ":"n","Ņ":"n","ņ":"n","Ṇ":"n","ṇ":"n","Ṋ":"n","ṋ":"n","Ṉ":"n","ṉ":"n","Ɲ":"n","ɲ":"n","Ƞ":"n","ƞ":"n","ɳ":"n","ȵ":"n",N:"n","̈":"n",n:"n","Ó":"o","ó":"o","Ò":"o","ò":"o","Ŏ":"o","ŏ":"o","Ô":"o","ô":"o","Ố":"o","ố":"o","Ồ":"o","ồ":"o","Ỗ":"o","ỗ":"o","Ổ":"o","ổ":"o","Ǒ":"o","ǒ":"o","Ö":"o","ö":"o","Ȫ":"o","ȫ":"o","Ő":"o","ő":"o","Õ":"o","õ":"o","Ṍ":"o","ṍ":"o","Ṏ":"o","ṏ":"o","Ȭ":"o","ȭ":"o","Ȯ":"o","ȯ":"o","Ȱ":"o","ȱ":"o","Ø":"o","ø":"o","Ǿ":"o","ǿ":"o","Ǫ":"o","ǫ":"o","Ǭ":"o","ǭ":"o","Ō":"o","ō":"o","Ṓ":"o","ṓ":"o","Ṑ":"o","ṑ":"o","Ỏ":"o","ỏ":"o","Ȍ":"o","ȍ":"o","Ȏ":"o","ȏ":"o","Ơ":"o","ơ":"o","Ớ":"o","ớ":"o","Ờ":"o","ờ":"o","Ỡ":"o","ỡ":"o","Ở":"o","ở":"o","Ợ":"o","ợ":"o","Ọ":"o","ọ":"o","Ộ":"o","ộ":"o","Ɵ":"o","ɵ":"o","Ṕ":"p","ṕ":"p","Ṗ":"p","ṗ":"p","Ᵽ":"p","Ƥ":"p","ƥ":"p",P:"p","̃":"p",p:"p","ʠ":"q","Ɋ":"q","ɋ":"q","Ŕ":"r","ŕ":"r","Ř":"r","ř":"r","Ṙ":"r","ṙ":"r","Ŗ":"r","ŗ":"r","Ȑ":"r","ȑ":"r","Ȓ":"r","ȓ":"r","Ṛ":"r","ṛ":"r","Ṝ":"r","ṝ":"r","Ṟ":"r","ṟ":"r","Ɍ":"r","ɍ":"r","ᵲ":"r","ɼ":"r","Ɽ":"r","ɽ":"r","ɾ":"r","ᵳ":"r","ß":"s","Ś":"s","ś":"s","Ṥ":"s","ṥ":"s","Ŝ":"s","ŝ":"s","Š":"s","š":"s","Ṧ":"s","ṧ":"s","Ṡ":"s","ṡ":"s","ẛ":"s","Ş":"s","ş":"s","Ṣ":"s","ṣ":"s","Ṩ":"s","ṩ":"s","Ș":"s","ș":"s","ʂ":"s",S:"s","̩":"s",s:"s","Þ":"t","þ":"t","Ť":"t","ť":"t",T:"t","ẗ":"t","Ṫ":"t","ṫ":"t","Ţ":"t","ţ":"t","Ṭ":"t","ṭ":"t","Ț":"t","ț":"t","Ṱ":"t","ṱ":"t","Ṯ":"t","ṯ":"t","Ŧ":"t","ŧ":"t","Ⱦ":"t","ⱦ":"t","ᵵ":"t","ƫ":"t","Ƭ":"t","ƭ":"t","Ʈ":"t","ʈ":"t","ȶ":"t","Ú":"u","ú":"u","Ù":"u","ù":"u","Ŭ":"u","ŭ":"u","Û":"u","û":"u","Ǔ":"u","ǔ":"u","Ů":"u","ů":"u","Ü":"u","ü":"u","Ǘ":"u","ǘ":"u","Ǜ":"u","ǜ":"u","Ǚ":"u","ǚ":"u","Ǖ":"u","ǖ":"u","Ű":"u","ű":"u","Ũ":"u","ũ":"u","Ṹ":"u","ṹ":"u","Ų":"u","ų":"u","Ū":"u","ū":"u","Ṻ":"u","ṻ":"u","Ủ":"u","ủ":"u","Ȕ":"u","ȕ":"u","Ȗ":"u","ȗ":"u","Ư":"u","ư":"u","Ứ":"u","ứ":"u","Ừ":"u","ừ":"u","Ữ":"u","ữ":"u","Ử":"u","ử":"u","Ự":"u","ự":"u","Ụ":"u","ụ":"u","Ṳ":"u","ṳ":"u","Ṷ":"u","ṷ":"u","Ṵ":"u","ṵ":"u","Ʉ":"u","ʉ":"u","Ṽ":"v","ṽ":"v","Ṿ":"v","ṿ":"v","Ʋ":"v","ʋ":"v","Ẃ":"w","ẃ":"w","Ẁ":"w","ẁ":"w","Ŵ":"w","ŵ":"w",W:"w","̊":"w","ẘ":"w","Ẅ":"w","ẅ":"w","Ẇ":"w","ẇ":"w","Ẉ":"w","ẉ":"w","Ẍ":"x","ẍ":"x","Ẋ":"x","ẋ":"x","Ý":"y","ý":"y","Ỳ":"y","ỳ":"y","Ŷ":"y","ŷ":"y",Y:"y","ẙ":"y","Ÿ":"y","ÿ":"y","Ỹ":"y","ỹ":"y","Ẏ":"y","ẏ":"y","Ȳ":"y","ȳ":"y","Ỷ":"y","ỷ":"y","Ỵ":"y","ỵ":"y","ʏ":"y","Ɏ":"y","ɏ":"y","Ƴ":"y","ƴ":"y","Ź":"z","ź":"z","Ẑ":"z","ẑ":"z","Ž":"z","ž":"z","Ż":"z","ż":"z","Ẓ":"z","ẓ":"z","Ẕ":"z","ẕ":"z","Ƶ":"z","ƶ":"z","Ȥ":"z","ȥ":"z","ʐ":"z","ʑ":"z","Ⱬ":"z","ⱬ":"z","Ǯ":"z","ǯ":"z","ƺ":"z","２":"2","６":"6","Ｂ":"B","Ｆ":"F","Ｊ":"J","Ｎ":"N","Ｒ":"R","Ｖ":"V","Ｚ":"Z","ｂ":"b","ｆ":"f","ｊ":"j","ｎ":"n","ｒ":"r","ｖ":"v","ｚ":"z","１":"1","５":"5","９":"9","Ａ":"A","Ｅ":"E","Ｉ":"I","Ｍ":"M","Ｑ":"Q","Ｕ":"U","Ｙ":"Y","ａ":"a","ｅ":"e","ｉ":"i","ｍ":"m","ｑ":"q","ｕ":"u","ｙ":"y","０":"0","４":"4","８":"8","Ｄ":"D","Ｈ":"H","Ｌ":"L","Ｐ":"P","Ｔ":"T","Ｘ":"X","ｄ":"d","ｈ":"h","ｌ":"l","ｐ":"p","ｔ":"t","ｘ":"x","３":"3","７":"7","Ｃ":"C","Ｇ":"G","Ｋ":"K","Ｏ":"O","Ｓ":"S","Ｗ":"W","ｃ":"c","ｇ":"g","ｋ":"k","ｏ":"o","ｓ":"s","ｗ":"w","ẳ":"a","Â":"a","â":"a","Ấ":"a","ấ":"a","Ầ":"a","ầ":"a"};void 0===window.getComputedStyle&&(window.getComputedStyle=function(){function t(e,o,i,n){var a,r=o[i],s=parseFloat(r),c=r.split(/\d/)[0];return n=null!==n?n:/%|em/.test(c)&&e.parentElement?t(e.parentElement,e.parentElement.currentStyle,"fontSize",null):16,a="fontSize"===i?n:/width/i.test(i)?e.clientWidth:e.clientHeight,"em"===c?s*n:"in"===c?96*s:"pt"===c?96*s/72:"%"===c?s/100*a:s}function e(t,e){var o="border"===e?"Width":"",i=e+"Top"+o,n=e+"Right"+o,a=e+"Bottom"+o,r=e+"Left"+o;t[e]=(t[i]===t[n]===t[a]===t[r]?[t[i]]:t[i]===t[a]&&t[r]===t[n]?[t[i],t[n]]:t[r]===t[n]?[t[i],t[n],t[a]]:[t[i],t[n],t[a],t[r]]).join(" ")}function o(o){var i,n=o.currentStyle,a=this,r=t(o,n,"fontSize",null);for(i in n)Object.prototype.hasOwnProperty.call(n,i)&&(/width|height|margin.|padding.|border.+W/.test(i)&&"auto"!==a[i]?a[i]=t(o,n,i,r)+"px":"styleFloat"===i?a.float=n[i]:a[i]=n[i]);return e(a,"margin"),e(a,"padding"),e(a,"border"),a.fontSize=r+"px",a}function i(t){return new o(t)}return o.prototype={constructor:o,getPropertyPriority:function(){},getPropertyValue:function(t){return this[t]||""},item:function(){},removeProperty:function(){},setProperty:function(){},getPropertyCSSValue:function(){}},i}(this)),t(document).on("keydown.xdsoftctrl",function(t){t.keyCode===z&&(A=!0),t.keyCode===C&&(A=!0)}).on("keyup.xdsoftctrl",function(t){t.keyCode===z&&(A=!1),t.keyCode===C&&(A=!1)}),P={minLength:0,valueKey:"value",titleKey:"title",highlight:!0,showHint:!0,dropdownWidth:"100%",dropdownStyle:{},itemStyle:{},hintStyle:!1,style:!1,debug:!0,openOnFocus:!1,closeOnBlur:!0,autoselect:!1,accents:!0,replaceAccentsForRemote:!0,limit:20,visibleLimit:20,visibleHeight:0,defaultHeightItem:30,timeoutUpdate:10,get:function(t,e){return c.call(this,t,e)},replace:[function(t,o){return this.replaceAccentsForRemote&&(o=e(o)),t.replace("%QUERY%",encodeURIComponent(o))}],equal:function(t,e){return e.toLowerCase()==t.substr(0,e.length).toLowerCase()},findRight:[function(t,e,o){var i,n="";if(t)for(i=0;i<t.length;i+=1)if(n=s.call(this,"getValue",o,[t[i],o]),s.call(this,"equal",o,[n,e,o],!1))return t[i];return!1}],valid:[function(t,o){return this.accents&&(t=e(t),o=e(o)),t.toLowerCase().indexOf(o.toLowerCase())!=-1}],filter:[function(t,e,o){var i,n=[],r="";if(t)for(i=0;i<t.length;i+=1)r=a(t[i][this.get("valueKey",o)])?t[i][this.get("valueKey",o)]:t[i].toString(),s.call(this,"valid",o,[r,e])&&n.push(t[i]);return n}],preparse:function(t){return t},getValue:[function(t,e){return a(t[this.get("valueKey",e)])?t[this.get("valueKey",e)]:t.toString()}],getTitle:[function(t,e){return a(t[this.get("titleKey",e)])?t[this.get("titleKey",e)]:t.toString()}],render:[function(t,i,n,a){var r,c,l,u=s.call(this,"getValue",i,[t,i],P.getValue[0].call(this,t,i)),d=s.call(this,"getTitle",i,[t,i],P.getTitle[0].call(this,t,i)),f="",p="",h="",g="",m=0;if(this.highlight)if(this.accents){for(p=e(d).toLowerCase().replace(/[<>]+/g,""),f=e(a).toLowerCase().replace(/[<>]+/g,""),h=p.replace(new RegExp(o(f),"g"),"<"+f+">"),l=0;l<h.length;l+=1)r=d.charAt(m),c=h.charAt(l),"<"===c?g+="<b>":">"===c?g+="</b>":(m+=1,g+=r);d=g}else d=d.replace(new RegExp("("+o(a)+")","i"),"<b>$1</b>");return"<div "+(u==a?'class="active"':"")+' data-value="'+encodeURIComponent(u)+'">'+d+"</div>"}],appendMethod:"concat",source:[]},O={destroy:function(){return this.trigger("destroy.xdsoft")},update:function(){return this.trigger("updateHelperPosition.xdsoft")},options:function(e){return this.data("autocomplete_options")&&t.isPlainObject(e)&&this.data("autocomplete_options",t.extend(!0,this.data("autocomplete_options"),e)),this},setSource:function(e,o){if(this.data("autocomplete_options")&&(t.isPlainObject(e)||t.isFunction(e)||t.isArray(e))){var i=this.data("autocomplete_options"),n=this.data("xdsoft_autocomplete"),a=i.source;void 0===o||isNaN(o)?t.isFunction(e)?this.data("autocomplete_options").source=e:t.extend(!0,a,e):t.isPlainObject(e)||t.isArray(e)?a[o]=t.extend(!0,t.isArray(e)?[]:{},e):a[o]=e,f.call(i,this.val(),n,function(t){d.call(i,n,t)})}return this},getSource:function(t){if(this.data("autocomplete_options")){var e=this.data("autocomplete_options").source;return void 0!==t&&!isNaN(t)&&e[t]?e[t]:e}return null}},t.fn.autocomplete=function(e,o,i){return"string"===t.type(e)&&O[e]?O[e].call(this,o,i):this.each(function(){var o=t.extend(!0,{},P,e);v(this,o)})}}(jQuery)},fdd49ae184e009c89e61:function(t,e,o){var i=o("fdd49ae184e009c89e63");"string"==typeof i&&(i=[[t.id,i,""]]);o("bdf3ee7433c7d244da7e")(i,{insertAt:"top"});i.locals&&(t.exports=i.locals)}});