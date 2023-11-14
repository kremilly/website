"use strict";var devto=function(){fetch("https://dev.to/api/articles?username=kremilly").then(function(e){return e.json()}).then(function(e){var n;""==e?(El.append("#body-articles",'\n                <div class="no-articles">No articles yet</div>\n            '),El.hide("#blog-button")):(n=0,e.forEach(function(e){var t;"article"==e.type_of&&n<9&&(t="",null!=e.cover_image&&(t='<img src="'.concat(e.cover_image,'" alt="cover image for ').concat(e.title,'"/>')),El.append("#body-articles",'\n                        <a href="'.concat(e.url,'" class="article">\n                            ').concat(t,'\n                            <div class="title">').concat(e.title,'</div>\n                            <div class="description">').concat(e.description,"</div>\n                        </a>\n                    "))),n+=1}),El.show("#blog-button"))})},gh_pinned_api=(devto(),function(){fetch("https://gh-pinned-api.vercel.app/api?user=kremilly").then(function(e){return e.json()}).then(function(e){e.forEach(function(e){El.append("#pinned-repos",'\n                <div class="project">\n                    <div class="name">\n                        '.concat(e.name,'\n                        \n                        <div class="stats">\n                            <a class="stars">\n                                ').concat(Numbers.format(e.stars),'\n                                <div class="fas fa-star"></div>\n                            </a>\n                            \n                            <a class="forks">\n                                ').concat(Numbers.format(e.forks),'\n                                <div class="fas fa-code-fork"></div>\n                            </a>\n                        </div>\n                    </div>\n                    <div class="description">').concat(e.description,'</div>\n                    <div class="languages">\n                        ').concat(Array.isArray(e.languages)?e.languages.map(function(e){return"<div class='lang'>".concat(e,"</div>")}).join(""):"",'\n                    </div>\n                    \n                    <a href="').concat(e.url,'" target="_blank" class="link">GitHub project</a>\n                </div>\n            '))})})}),github=(gh_pinned_api(),function(){fetch("https://api.github.com/users/Kremilly").then(function(e){return e.json()}).then(function(e){Image.set("#user-info-avatar",{url:e.avatar_url,alt:"Avatar of GitHub"}),El.text("#user-info-bio",e.bio),El.text("#user-info-name",e.name),Attr.set("#blog-button","href",e.blog),Attr.set("#user-info-blog","href",e.blog),Attr.set("#user-info-github","href",e.html_url),Attr.set("#pinned-repos-button","href",e.html_url),Attr.set("#user-info-twitter","href","https://twitter.com/"+e.twitter_username)})}),public_apis=(github(),function(){var e="",e="localhost"==window.location.host||"127.0.0.1"==window.location.host?window.location.origin+"/"+window.location.pathname.split("/")[1]+"/":window.location.origin+"/";fetch("".concat(e,"json/public-apis.json")).then(function(e){return e.json()}).then(function(e){e.forEach(function(e){El.append("#body-public-apis",'\n                <a href="'.concat(e.url,'" target="_blank" class="api">\n                    ').concat(e.name,'\n                    <div class="fas fa-external-link"></div>\n                </a>\n            '))})})}),mask=(public_apis(),".mask"),modal=".modal",actived="actived",confirm_modal="#confirm-mdl",user_box="#user-box",account_box="#account-box",products_btn="#products-btn",user_box_btn="#user-box-btn",products_box="#products-box",account_avatar="#account-avatar",page_content=".content",products_h1=".content > .index > .slogan",products_list=".content > .index > .products > .products-area",cover_box="#cover-box",cover_sidebar="#cover-sidebar",account_sidebar="#account-sidebar",page_account_content="#page-account-content",filter_box=".filter-options",filter_license_btn=".filter-license-btn",filter_license_box=".filter-license-box",Classes={_remove:function(e,t){Classes.has(e,t)&&El.get(e).classList.remove(t)},_add_class:function(t,e){/\s/.test(e)?e.split(" ").forEach(function(e){El.get(t).classList.add(e)}):El.get(t).classList.add(e)},_remove_class:function(t,e){/\s/.test(e)?e.split(" ").forEach(function(e){Classes._remove(t,e)}):Classes._remove(t,e)},get:function(e){return El.get(e).classList},add:function(e,t){Array.isArray(e)?e.forEach(function(e){Classes._add_class(e,t)}):Classes._add_class(e,t)},remove:function(e,t){if(2<arguments.length&&void 0!==arguments[2]&&arguments[2])for(var n=El.get(e,"selectorAll"),r=0;r<n.length;r++)El.hide(n[0].className);else Array.isArray(e)?e.forEach(function(e){Classes._remove_class(e,t)}):Classes._remove_class(e,t)},toggle:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:act_class;Classes.has(e,t)?Classes.remove(e,t):Classes.add(e,t)},change:function(e,t,n){Classes.remove(e,t),Classes.add(e,n)},has:function(e,t){return El.get(e).classList.contains(t)},replace:function(e,t,n){El.get(e).classList.replace(t,n)},is_visible:function(e){e=El.get(e);return 0<e.offsetWidth&&0<e.offsetHeight}},GUI={toggle_boxes:function(e){Classes.toggle(e,act_class),Attr.has(e,"hide")&&Attr.get(e,"hide").split(",").forEach(function(e){El.hide("#"+e.replace(/\s/g,""))}),Attr.has(e,"rem-act")&&Attr.get(e,"rem-act").split(",").forEach(function(e){Classes.hide("#."+e.replace(/\s/g,""))}),El.show("#"+Attr.get(e,"toggle"))},get_func_checked:function(e){return 1==Classes.has(element,1<arguments.length&&void 0!==arguments[1]?arguments[1]:"fa-check")},message:function(t,e){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:2500;3<arguments.length&&void 0!==arguments[3]||anim_time;t="#"+t.replace(/\s/g,""),El.empty(t),El.text(t,e),El.show(t),setTimeout(function(e){El.hide(t)},n)}},Modals={show:function(e){Attr.has(e,"modal")&&(e=Attr.get(e,"modal")),El.show([mask,e])},close:function(e){El.hide([mask,e])},all_modals:function(){return[modal,confirm_modal]},close_all:function(){var e,t=!(0<arguments.length&&void 0!==arguments[0])||arguments[0],n=!(1<arguments.length&&void 0!==arguments[1])||arguments[1];1==t&&(e=Str.slice(Find.replace(URL.get_url(),"localhost/",""),"/",3),Queries.remove(["i"]),Storage.delete(["cc-item","cc-list","cc-list2","ise-keyword","ise-editor-selection"])),Find.search(URL.get_url(),"account")&&1!=Find.in_array(Params.get_last(),["licenses","devices","settings","orders","cloud","hashes","diagrams","settings","table-models"])&&Params.remove_last(),1==n&&El.hide(mask),El.hide(this.all_modals()),1==t&&Find.in_array(e,["login","signup","forget","telemetry"])&&Home.go_page()}},Copy={input:function(e){El.select(e),Events.command("copy")},content:function(e){var t=document.createElement("input");return document.body.appendChild(t),t.setAttribute("value",e),t.select(),1==Events.command("copy")?(document.body.removeChild(t),!0):(document.body.removeChild(t),!1)}},Misc={platform:function(){return Str.slice(Str.slice(Find.replace_all(navigator.userAgent,";",""),"(",1)," ",0).toLowerCase()},gravatar:function(e){if(1==Storage.has("gravatar"))return Storage.get("gravatar");Encoder.toDataURL(Apis.gravatar(e),function(e){return Storage.save("gravatar",e),e})},error_code:function(e){switch(e){case"error-email":return"Email invalid";case"error-otp-invalid":return"OTP Code invalid";case"error-otp-expired":return"OTP Code expired";case"error-created-db":return"Data not registered in DB";case"error-email-exists":return"The email already exists";case"error-pass-matched":return"Passwords are not the same";case"error-login-auth":return"Email or password are incorrect"}},download:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,n=document.createElement("a");n.href=e,n.style.display="none",t&&(n.download=t),document.body.appendChild(n),n.click()},change_type_input:function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"toggle-type-input";"password"==Attr.get(e,"type")?(Attr.set(e,"type","text"),Classes.change(t,"fa-eye-slash","fa-eye")):(Attr.set(e,"type","password"),Classes.change(t,"fa-eye","fa-eye-slash"))}},Attr={_set:function(e,t,n){El.has(e)&&El.get(e).setAttribute(t,n)},set:function(e,t,n){var r=this;Array.isArray(e)?e.forEach(function(e){r._set(e,t,n)}):this._set(e,t,n)},get:function(e,t){return El.get(e).getAttribute(t)},remove:function(e,t){El.get(e).removeAttribute(t)},toggle:function(e,t){El.get(e).setAttribute(t,"true"==El.get(e,t)?"false":"true")},has:function(e,t){return El.get(e).hasAttribute(t)},setData:function(e,t,n){El.get(e).dataset[t]=n},getData:function(e,t){return El.get(e).dataset[t]},removeData:function(e,t){delete El.get(e).dataset[t]},toggleData:function(e,t){El.setData(e,t,"true"==El.getData(e,t)?"false":"true")},hasData:function(e,t){return El.get(e).dataset.hasOwnProperty(t)}},El={_text:function(e,t){if(this.has(e)){if(null==t)return El.get(e).innerText;El.get(e).innerText=t}},get:function(e){switch(1<arguments.length&&void 0!==arguments[1]?arguments[1]:null){case"id":return document.getElementById(e);case"class":return document.getElementsByClassName(e);case"tag":return document.getElementsByTagName(e);case"name":return document.getElementsByName(e);case"selector":return document.querySelector(e);case"child":return document.querySelector(e).childNodes;case"selectorAll":return document.querySelectorAll(e);default:return document.querySelector(e)}},show:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)El.get(e[t]).style.display="block";else El.get(e).style.display="block"},hide:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)El.get(e[t]).style.display="none";else El.get(e).style.display="none"},html:function(e){return El.get(e).innerHTML},toggle:function(t){var n,r=setInterval(function(e){n?clearInterval(r):(n=El.get(t).style.display,El.get(t).style.display="none"==n?"block":"none")},1)},append:function(e,t){El.get(e).innerHTML+=t},prepend:function(e,t){El.get(e).innerHTML=t+El.get(e).innerHTML},remove:function(e){El.has(e)&&El.get(e).remove()},removeChild:function(e){El.has(e)&&El.get(e).removeChild(El.get(e).childNodes[0])},removeChilds:function(e){if(El.has(e))for(;0<El.get(e).childNodes.length;)El.get(e).removeChild(El.get(e).childNodes[0])},text:function(e){var t=this,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;Array.isArray(e)?e.forEach(function(e){t._text(e,n)}):this._text(e,n)},select:function(e){El.get(e).select()},empty:function(e){if(Array.isArray(e))for(var t=0;t<e.length;t++)El.get(e[t]).innerHTML="";else El.get(e).innerHTML=""},has:function(e){return null!=El.get(e)},is_visible:function(e){return"block"==El.get(e).style.display},is_hidden:function(e){return"none"==El.get(e).style.display},is_empty:function(e){return""==El.get(e).innerHTML},count:function(e){return El.get(e,"selectorAll").length},contains:function(e,t){return El.get(e).contains(El.get(t))},value:function(e){var t;if(null==(t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null))return El.get(e).value;El.get(e).value=t},transition:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:500;El.get(e).style.transition=t,El.get(e).style.transitionDuration=n+"ms"}},Events={command:function(e){document.execCommand(e)},setPageTitle:function(e){document.title=e},click:function(e,t){El.get(e).addEventListener("click",t)},dblclick:function(e,t){El.get(e).addEventListener("dblclick",t)},keydown:function(e,t){El.get(e).addEventListener("keydown",t)},keyup:function(e,t){El.get(e).addEventListener("keyup",t)},keypress:function(e,t){El.get(e).addEventListener("keypress",t)},mouseover:function(e,t){El.get(e).addEventListener("mouseover",t)},mouseout:function(e,t){El.get(e).addEventListener("mouseout",t)},mousemove:function(e,t){El.get(e).addEventListener("mousemove",t)},mousedown:function(e,t){El.get(e).addEventListener("mousedown",t)},mouseup:function(e,t){El.get(e).addEventListener("mouseup",t)},scroll:function(e,t){("body"!=e?El.get(e):document).addEventListener("scroll",t)},select:function(e,t){El.get(e).addEventListener("select",t)},change:function(e,t){El.get(e).addEventListener("change",t)},submit:function(e,t){El.get(e).addEventListener("submit",t)},reset:function(e,t){El.get(e).addEventListener("reset",t)},focus:function(e,t){El.get(e).addEventListener("focus",t)},blur:function(e,t){El.get(e).addEventListener("blur",t)},load:function(e,t){El.get(e).addEventListener("load",t)},unload:function(e,t){El.get(e).addEventListener("unload",t)},beforeunload:function(e,t){El.get(e).addEventListener("beforeunload",t)},resize:function(e,t){El.get(e).addEventListener("resize",t)},error:function(e,t){El.get(e).addEventListener("error",t)},abort:function(e,t){El.get(e).addEventListener("abort",t)},readystatechange:function(e,t){El.get(e).addEventListener("readystatechange",t)},loadstart:function(e,t){El.get(e).addEventListener("loadstart",t)},progress:function(e,t){El.get(e).addEventListener("progress",t)},loadend:function(e,t){El.get(e).addEventListener("loadend",t)},timeout:function(e,t){El.get(e).addEventListener("timeout",t)},loadeddata:function(e,t){El.get(e).addEventListener("loadeddata",t)},loadedmetadata:function(e,t){El.get(e).addEventListener("loadedmetadata",t)},canplay:function(e,t){El.get(e).addEventListener("canplay",t)},canplaythrough:function(e,t){El.get(e).addEventListener("canplaythrough",t)},on:function(e,t,n){El.get(e).addEventListener(t,n)}},Image={set:function(e,t){Attr.set(e,"src",t.url),t.width&&Attr.set(e,"width",t.width),t.height&&Attr.set(e,"width",t.height),t.title&&Attr.set(e,"title",t.title),t.alt_text&&Attr.set(e,"alt",t.alt_text)},background:function(e,t){Attr.set(e,"style","background-image: url('".concat(t,"')"))}},Navigator={ua:function(){return navigator.userAgent},browser:function(){var e,t=navigator.userAgent,n=t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(n[1])?"IE "+((e=/\brv[ :]+(\d+)/g.exec(t)||[])[1]||""):"Chrome"===n[1]&&null!=(e=t.match(/\b(OPR|Edge)\/(\d+)/))?e.slice(1).join(" ").replace("OPR","Opera"):(n=n[2]?[n[1],n[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(e=t.match(/version\/(\d+)/i))&&n.splice(1,1,e[1]),n.join(" "))},language:function(){return navigator.language},platform:function(){return navigator.platform},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(this.ua())},isTablet:function(){return/iPad|iPod|Tablet/i.test(this.ua())},isDesktop:function(){return!this.isMobile()&&!this.isTablet()}},Page={title:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null;return null!=e?document.title=!(1<arguments.length&&void 0!==arguments[1])||arguments[1]?document.title+" "+e:e:document.title},keywords:function(){var e;return null!=(e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:null)?El.get('meta[name="keywords"]').content=e:El.get('meta[name="keywords"]').content}},Params={set:function(e){URL.push_url(URL.get_url().replace(/^(.+?)\/*?$/,"$1")+"/"+e.replace(/\//g,""))},get_last:function(e){return(e||window.location.pathname).split("/").slice(-1)[0]},remove_last:function(){URL.push_url(URL.get_url().substring(0,URL.get_url().length-this.get_last().length-2))}},Queries={_base:function(){return URL.get_url().replace(/^(.+?)\/*?$/,"$1")+"?"},_search_params:function(e){return new URLSearchParams(e).toString()},_queries:function(){return 0<arguments.length&&void 0!==arguments[0]&&arguments[0]?window.location.search.replace("?","")+"&":""},_push:function(e){window.history.pushState(1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e)},clean:function(){URL.push_url(URL.get_url().replace(/^(.+?)\/*?$/,"$1"))},has:function(e){return null!=this.get(e)},get:function(e){for(var t,n=[],r=new RegExp("(?:\\?|&)"+e+"=(.*?)(?=&|$)","gi");null!==(t=r.exec(document.location.search));)n.push(t[1]);return n[0]},remove:function(e){var t=new URLSearchParams(window.location.search);Array.isArray(e)?e.forEach(function(e){t.delete(e)}):t.delete(e),URL.change_url(this._base()+this._search_params(t)),""==window.location.search&&this.clean()},add:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];history.pushState&&URL.change_url(this._base()+this._queries(t)+this._search_params(e))},update:function(e,t){var n;this.has(e)?(n=Find.replace(window.location.href,Queries.get(e),t),URL.change_url(this._base()+Str.slice(n,"?",1))):this.add(e,t,!0)}},URL={get_url_base:function(){return"localhost"==window.location.host?window.location.origin+"/"+window.location.pathname.split("/")[1]+"/":window.location.origin+"/"},change_url:function(e){this.push_url(e.split(".").slice(-1)[0])},get_url:function(e){return e?"/"!=Params.get_last()?window.location.origin+window.location.pathname+"/":window.location.origin+window.location.pathname.replace(/^(.+?)\/*?$/,"$1"):window.location.origin+window.location.pathname.replace(/^(.+?)\/*?$/,"$1")+"/"},open_url:function(e){window.location.href=1==(!(1<arguments.length&&void 0!==arguments[1])||arguments[1])?this.get_url_base()+e:e},push_url:function(e){window.history.pushState(1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e)}},Find={search:function(e,t){return-1!=e.search(t)},in_array:function(e,t){for(var n=0;n<e.length;n++)if(t[n]==e)return!0;return!1},array_remove_item:function(e,t){t=e.indexOf(t);return-1<t&&e.splice(t,1),e},replace_all:function(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)},replace_multiple:function(e,t,n){for(var r=0;r<t.length;r++)e=e.replace(new RegExp(t[r],"g"),n[r]);return e},replace:function(e,t,n){return e.replace(t,n)}},Numbers={month:function(e){switch(e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December"}},float:function(e){for(var t=0,n="",r=e.toString(),a=r.length;0<a;a--)n+=r.substr(a-1,1)+(2==t&&1!=a?".":""),t=2==t?0:t+1;return n.split("").reverse().join("")},discount:function(e,t){return e-e*(t/100)},bytes:function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:2;return 0===(e=parseInt(e))?"0 Bytes":(n=n<0?0:n,t=Math.floor(Math.log(e)/Math.log(1024)),parseFloat((e/Math.pow(1024,t)).toFixed(n))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][t])},percent:function(e,t){return(e*(2<arguments.length&&void 0!==arguments[2]?arguments[2]:100)/t).toFixed(3<arguments.length&&void 0!==arguments[3]?arguments[3]:1)+"%"},currency:function(e,t){return e.toLocaleString(2<arguments.length&&void 0!==arguments[2]?arguments[2]:"en-US",{style:"currency",currency:t})},format:function(e){return 1e3<=e?e/1e3+"k":e.toString()}},Str={capitalize:function(e){return"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},slug:function(e){var t,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"-",r={c:/\xE7/g,C:/\xC7/g,n:/\xF1/g,N:/\xD1/g,a:/[\xE0-\xE6]/g,A:/[\xC0-\xC6]/g,e:/[\xE8-\xEB]/g,E:/[\xC8-\xCB]/g,i:/[\xEC-\xEF]/g,I:/[\xCC-\xCF]/g,o:/[\xF2-\xF6]/g,O:/[\xD2-\xD6]/g,u:/[\xF9-\xFC]/g,U:/[\xD9-\xDC]/g};for(t in r)e=Find.replace(e,r[t],t);return e=e.toLowerCase(),e=Find.replace(e,/[^a-z0-9\-]/g," "),e=(e=Find.replace(e,/ {2,}/g," ")).trim(),e=Find.replace(e,/\s/g,n)},cut:function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"...";return e.length>t?e.substring(0,t-n.length)+n:e},parse:function(e){return JSON.parse(e)},slice:function(e,t,n){return e.split(t)[n]},stringify:function(e){return JSON.stringify(e,null,1<arguments.length&&void 0!==arguments[1]?arguments[1]:4)}},Validation={ip:function(e){return/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)},ip_v6:function(e){return/(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/.test(e)},email:function(e){return/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(e)},int:function(e){return/^\d+$/.test(e)},bool:function(e){return/^\w+$/.test(e)},not_empty:function(e){return/\S+/.test(e)},float:function(e){return/\-?\d+\.\d+/g.test(e)},hash:function(e){return/^[a-f0-9]{128}/gm.test(e)},url:function(e){return/^(ftp|http|https):\/\/[^ "]+$/.test(e)},base64:function(e){return/^[-A-Za-z0-9+=]{1,50}|=[^=]|={3,}$/.test(e)},phone:function(e){return/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(e)},date:function(e){return/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(e)}},Encoder={hex2bin:function(e){for(var t="",n=0;n<e.length;n+=2){var r=parseInt(e.substr(n,2),16);r&&(t+=String.fromCharCode(r))}return t},bin2hex:function(e){for(var t="",n=0;n<e.length;n++)t+=e[n].charCodeAt(0).toString(16);return t},toDataURL:function(e,n){var r=new XMLHttpRequest;r.onload=function(e){var t=new FileReader;t.onloadend=function(e){n(t.result)},t.readAsDataURL(r.response)},r.open("GET",e),r.responseType="blob",r.send()},base64_encode:function(e){return btoa(e)},base64_decode:function(e){return atoa(e)},toTimestamp:function(e){return Date.parse(e)/1e3}},Session={get:function(e){return Str.parse(sessionStorage.getItem(e))},has:function(e){return null!=this.get(e)},delete:function(e){return 1!=Array.isArray(e)?!!sessionStorage.removeItem(e):(e.forEach(function(e){sessionStorage.removeItem(e)}),!0)},save:function(e,t){return!!sessionStorage.setItem(e,Str.stringify(t))}},Storage={get:function(e){return Str.parse(localStorage.getItem(e))},has:function(e){return null!=this.get(e)||null!=this.get(e)},delete:function(e){return 1!=Array.isArray(e)?!!localStorage.removeItem(e):(e.forEach(function(e){localStorage.removeItem(e)}),!0)},save:function(e,t){return!!localStorage.setItem(e,Str.stringify(t))}};