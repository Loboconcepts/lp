for(window.addEventListener("load",function(){for(var t=document.getElementsByTagName("img"),e=0;e<t.length;e++)t[e].getAttribute("data-src")&&(t[e].setAttribute("src",t[e].getAttribute("data-src")),t[e].addEventListener("load",function(t){t.target.classList.add("show")}))},!1),i=0;i<document.querySelectorAll(".custClickEvent").length;i++)document.querySelectorAll(".custClickEvent")[i].addEventListener("click",function(){window.scrollTo({behavior:"smooth",left:0,top:getPosition(document.querySelector(this.name))}),event.preventDefault()});function getPosition(t){for(var e=0;t;)e+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return e-(document.querySelector("nav").offsetHeight-50)}!function(t,e){if("function"==typeof define&&define.amd)define([],e);else if("object"==typeof module&&module.exports)module.exports=e();else{var o=e();t.Alert=o.Alert,t.Button=o.Button,t.Carousel=o.Carousel,t.Collapse=o.Collapse,t.Dropdown=o.Dropdown,t.Modal=o.Modal,t.Popover=o.Popover,t.ScrollSpy=o.ScrollSpy,t.Tab=o.Tab,t.Tooltip=o.Tooltip}}(this,function(){"use strict";var t="undefined"!=typeof global?global:this||window,e=document,o=e.documentElement,i=t.BSN={},a=i.supports=[],n="data-toggle",r="active",l="left",c="top",s="onmouseleave"in e?["mouseenter","mouseleave"]:["mouseover","mouseout"],d=/\b(top|bottom|left|right)+/,u=0,h="WebkitTransition"in o.style||"Transition".toLowerCase()in o.style,f="WebkitTransition"in o.style?"Webkit".toLowerCase()+"TransitionEnd":"Transition".toLowerCase()+"end",g="WebkitDuration"in o.style?"Webkit".toLowerCase()+"TransitionDuration":"Transition".toLowerCase()+"Duration",p=function(t){t.focus?t.focus():t.setActive()},v=function(t,e){t.classList.add(e)},m=function(t,e){t.classList.remove(e)},b=function(t,e){return t.classList.contains(e)},y=function(t,e){return[].slice.call(t.getElementsByClassName(e))},w=function(t,o){return"object"==typeof t?t:(o||e).querySelector(t)},x=function(t,o){var i=o.charAt(0),a=o.substr(1);if("."===i){for(;t&&t!==e;t=t.parentNode)if(null!==w(o,t.parentNode)&&b(t,a))return t}else if("#"===i)for(;t&&t!==e;t=t.parentNode)if(t.id===a)return t;return!1},T=function(t,e,o){t.addEventListener(e,o,!1)},A=function(t,e,o){t.removeEventListener(e,o,!1)},k=function(t,e,o){T(t,e,function i(a){o(a),A(t,e,i)})},C=function(e){var o=h?t.getComputedStyle(e)[g]:0;return(o="number"!=typeof(o=parseFloat(o))||isNaN(o)?0:1e3*o)+50},S=function(t,e){var o=0,i=C(t);h&&k(t,f,function(t){e(t),o=1}),setTimeout(function(){!o&&e()},i)},P=function(t,e,o){var i=new CustomEvent(t+".bs."+e);i.relatedTarget=o,this.dispatchEvent(i)},N=function(){return{y:t.pageYOffset||o.scrollTop,x:t.pageXOffset||o.scrollLeft}},E=function(t,i,a,n){var r,s,u,h,f,g,p=i.offsetWidth,v=i.offsetHeight,m=o.clientWidth||e.body.clientWidth,y=o.clientHeight||e.body.clientHeight,x=t.getBoundingClientRect(),T=n===e.body?N():{x:n.offsetLeft+n.scrollLeft,y:n.offsetTop+n.scrollTop},A=x.right-x.left,k=x.bottom-x.top,C=b(i,"popover"),S=w(".arrow",i),P=x.top+k/2-v/2<0,E=x.left+A/2-p/2<0,D=x.left+p/2+A/2>=m,L=x.top+v/2+k/2>=y,q=x.top-v<0,M=x.left-p<0,H=x.top+v+k>=y,W=x.left+p+A>=m;a="right"===(a=(a="bottom"===(a=(a=(a===l||"right"===a)&&M&&W?c:a)===c&&q?"bottom":a)&&H?c:a)===l&&M?"right":a)&&W?l:a,-1===i.className.indexOf(a)&&(i.className=i.className.replace(d,a)),f=S.offsetWidth,g=S.offsetHeight,a===l||"right"===a?(s=a===l?x.left+T.x-p-(C?f:0):x.left+T.x+A,P?(r=x.top+T.y,u=k/2-f):L?(r=x.top+T.y-v+k,u=v-k/2-f):(r=x.top+T.y-v/2+k/2,u=v/2-(C?.9*g:g/2))):a!==c&&"bottom"!==a||(r=a===c?x.top+T.y-v-(C?g:0):x.top+T.y+k,E?(s=0,h=x.left+A/2-f):D?(s=m-1.01*p,h=p-(m-x.left)+A/2-f/2):(s=x.left+T.x-p/2+A/2,h=p/2-f/2)),i.style.top=r+"px",i.style.left=s+"px",u&&(S.style.top=u+"px"),h&&(S.style.left=h+"px")};i.version="2.0.25";var D=function(t){t=w(t);var e=this,o=x(t,".alert"),i=function(i){o=x(i.target,".alert"),(t=w('[data-dismiss="alert"]',o))&&o&&(t===i.target||t.contains(i.target))&&e.close()},a=function(){P.call(o,"closed","alert"),A(t,"click",i),o.parentNode.removeChild(o)};this.close=function(){o&&t&&b(o,"show")&&(P.call(o,"close","alert"),m(o,"show"),o&&(b(o,"fade")?S(o,a):a()))},"Alert"in t||T(t,"click",i),t.Alert=e};a.push(["Alert",D,'[data-dismiss="alert"]']);var L=function(t){t=w(t);var o=!1,i="checked",a=function(e){var a="LABEL"===e.target.tagName?e.target:"LABEL"===e.target.parentNode.tagName?e.target.parentNode:null;if(a){var n=e.target,l=y(n.parentNode,"btn"),c=a.getElementsByTagName("INPUT")[0];if(c){if("checkbox"===c.type&&(c.checked?(m(a,r),c.getAttribute(i),c.removeAttribute(i),c.checked=!1):(v(a,r),c.getAttribute(i),c.setAttribute(i,i),c.checked=!0),o||(o=!0,P.call(c,"change","button"),P.call(t,"change","button"))),"radio"===c.type&&!o&&!c.checked){v(a,r),c.setAttribute(i,i),c.checked=!0,P.call(c,"change","button"),P.call(t,"change","button"),o=!0;for(var s=0,d=l.length;s<d;s++){var u=l[s],h=u.getElementsByTagName("INPUT")[0];u!==a&&b(u,r)&&(m(u,r),h.removeAttribute(i),h.checked=!1,P.call(h,"change","button"))}}setTimeout(function(){o=!1},50)}}};"Button"in t||(T(t,"click",a),w("[tabindex]",t)&&T(t,"keyup",function(t){32===(t.which||t.keyCode)&&t.target===e.activeElement&&a(t)}),T(t,"keydown",function(t){32===(t.which||t.keyCode)&&t.preventDefault()}));for(var n=y(t,"btn"),l=n.length,c=0;c<l;c++)!b(n[c],r)&&w("input:checked",n[c])&&v(n[c],r);t.Button=this};a.push(["Button",L,'[data-toggle="buttons"]']);var q=function(i,a){a=a||{};var n=(i=w(i)).getAttribute("data-interval"),c=a.interval,d="false"===n?0:parseInt(n),u="hover"===i.getAttribute("data-pause")||!1,g="true"===i.getAttribute("data-keyboard")||!1;this.keyboard=!0===a.keyboard||g,this.pause=!("hover"!==a.pause&&!u)&&"hover",this.interval="number"==typeof c?c:!1===c||0===d||!1===d?0:isNaN(d)?5e3:d;var p=this,x=i.index=0,A=i.timer=0,C=!1,S=y(i,"carousel-item"),N=S.length,E=this.direction=l,D=y(i,"carousel-control-prev")[0],L=y(i,"carousel-control-next")[0],q=w(".carousel-indicators",i),M=q&&q.getElementsByTagName("LI")||[];if(!(N<2)){var H=function(){!1===p.interval||b(i,"paused")||(v(i,"paused"),!C&&(clearInterval(A),A=null))},W=function(){!1!==p.interval&&b(i,"paused")&&(m(i,"paused"),!C&&(clearInterval(A),A=null),!C&&p.cycle())},I=function(t){if(t.preventDefault(),!C){var e=t.currentTarget||t.srcElement;e===L?x++:e===D&&x--,p.slideTo(x)}},O=function(t){for(var e=0,o=M.length;e<o;e++)m(M[e],r);M[t]&&v(M[t],r)};this.cycle=function(){A&&(clearInterval(A),A=null),A=setInterval(function(){var e,a;e=i.getBoundingClientRect(),a=t.innerHeight||o.clientHeight,e.top<=a&&e.bottom>=0&&(x++,p.slideTo(x))},this.interval)},this.slideTo=function(t){if(!C){var o,a=this.getActiveIndex();a!==t&&(a<t||0===a&&t===N-1?E=p.direction=l:(a>t||a===N-1&&0===t)&&(E=p.direction="right"),t<0?t=N-1:t>=N&&(t=0),x=t,o=E===l?"next":"prev",P.call(i,"slide","carousel",S[t]),C=!0,clearInterval(A),A=null,O(t),h&&b(i,"slide")?(v(S[t],"carousel-item-"+o),S[t].offsetWidth,v(S[t],"carousel-item-"+E),v(S[a],"carousel-item-"+E),k(S[t],f,function(n){var l=n.target!==S[t]?1e3*n.elapsedTime+100:20;C&&setTimeout(function(){C=!1,v(S[t],r),m(S[a],r),m(S[t],"carousel-item-"+o),m(S[t],"carousel-item-"+E),m(S[a],"carousel-item-"+E),P.call(i,"slid","carousel",S[t]),e.hidden||!p.interval||b(i,"paused")||p.cycle()},l)})):(v(S[t],r),S[t].offsetWidth,m(S[a],r),setTimeout(function(){C=!1,p.interval&&!b(i,"paused")&&p.cycle(),P.call(i,"slid","carousel",S[t])},100)))}},this.getActiveIndex=function(){return S.indexOf(y(i,"carousel-item active")[0])||0},"Carousel"in i||(p.pause&&p.interval&&(T(i,s[0],H),T(i,s[1],W),T(i,"touchstart",H),T(i,"touchend",W)),L&&T(L,"click",I),D&&T(D,"click",I),q&&T(q,"click",function(t){if(t.preventDefault(),!C){var e=t.target;if(!e||b(e,r)||!e.getAttribute("data-slide-to"))return!1;x=parseInt(e.getAttribute("data-slide-to"),10),p.slideTo(x)}}),!0===p.keyboard&&T(t,"keydown",function(t){if(!C){switch(t.which){case 39:x++;break;case 37:x--;break;default:return}p.slideTo(x)}})),p.getActiveIndex()<0&&(S.length&&v(S[0],r),M.length&&O(0)),p.interval&&p.cycle(),i.Carousel=p}};a.push(["Carousel",q,'[data-ride="carousel"]']);var M=function(t,e){t=w(t),e=e||{};var o,i,a,n,r,l=null,c=null,s=this,d=t.getAttribute("data-parent"),u=function(t,e){P.call(t,"hide","collapse"),t.isAnimating=!0,t.style.height=t.scrollHeight+"px",m(t,"collapse"),m(t,"show"),v(t,"collapsing"),t.offsetWidth,t.style.height="0px",S(t,function(){t.isAnimating=!1,t.setAttribute("aria-expanded","false"),e.setAttribute("aria-expanded","false"),m(t,"collapsing"),v(t,"collapse"),t.style.height="",P.call(t,"hidden","collapse")})};this.toggle=function(t){t.preventDefault(),b(c,"show")?s.hide():s.show()},this.hide=function(){c.isAnimating||(u(c,t),v(t,"collapsed"))},this.show=function(){var e,a;l&&(o=w(".collapse.show",l),i=o&&(w('[data-toggle="collapse"][data-target="#'+o.id+'"]',l)||w('[data-toggle="collapse"][href="#'+o.id+'"]',l))),(!c.isAnimating||o&&!o.isAnimating)&&(i&&o!==c&&(u(o,i),v(i,"collapsed")),a=t,P.call(e=c,"show","collapse"),e.isAnimating=!0,v(e,"collapsing"),m(e,"collapse"),e.style.height=e.scrollHeight+"px",S(e,function(){e.isAnimating=!1,e.setAttribute("aria-expanded","true"),a.setAttribute("aria-expanded","true"),m(e,"collapsing"),v(e,"collapse"),v(e,"show"),e.style.height="",P.call(e,"shown","collapse")}),m(t,"collapsed"))},"Collapse"in t||T(t,"click",s.toggle),a=t.href&&t.getAttribute("href"),n=t.getAttribute("data-target"),r=a||n&&"#"===n.charAt(0)&&n,(c=r&&w(r)).isAnimating=!1,l=w(e.parent)||d&&x(t,d),t.Collapse=s};a.push(["Collapse",M,'[data-toggle="collapse"]']);var H=function(t,o){t=w(t),this.persist=!0===o||"true"===t.getAttribute("data-persist")||!1;var i=this,a=t.parentNode,n=null,r=w(".dropdown-menu",a),l=function(){for(var t=r.children,e=[],o=0;o<t.length;o++)t[o].children.length&&"A"===t[o].children[0].tagName&&e.push(t[o].children[0]),"A"===t[o].tagName&&e.push(t[o]);return e}(),c=function(t){(t.href&&"#"===t.href.slice(-1)||t.parentNode&&t.parentNode.href&&"#"===t.parentNode.href.slice(-1))&&this.preventDefault()},s=function(){var o=t.open?T:A;o(e,"click",d),o(e,"keydown",h),o(e,"keyup",f)},d=function(e){var o=e.target,a=o&&("Dropdown"in o||"Dropdown"in o.parentNode);(o!==r&&!r.contains(o)||!i.persist&&!a)&&(n=o===t||t.contains(o)?t:null,y(),c.call(e,o))},u=function(e){n=t,g(),c.call(e,e.target)},h=function(t){var e=t.which||t.keyCode;38!==e&&40!==e||t.preventDefault()},f=function(o){var a=o.which||o.keyCode,c=e.activeElement,s=l.indexOf(c),d=c===t,u=r.contains(c),h=c.parentNode===r||c.parentNode.parentNode===r;(h||d)&&(s=d?0:38===a?s>1?s-1:0:40===a&&s<l.length-1?s+1:s,l[s]&&p(l[s])),(l.length&&h||!l.length&&(u||d)||!u)&&t.open&&27===a&&(i.toggle(),n=null)},g=function(){P.call(a,"show","dropdown",n),v(r,"show"),v(a,"show"),t.setAttribute("aria-expanded",!0),P.call(a,"shown","dropdown",n),t.open=!0,A(t,"click",u),setTimeout(function(){p(r.getElementsByTagName("INPUT")[0]||t),s()},1)},y=function(){P.call(a,"hide","dropdown",n),m(r,"show"),m(a,"show"),t.setAttribute("aria-expanded",!1),P.call(a,"hidden","dropdown",n),t.open=!1,s(),p(t),setTimeout(function(){T(t,"click",u)},1)};t.open=!1,this.toggle=function(){b(a,"show")&&t.open?y():g()},"Dropdown"in t||(!1 in r&&r.setAttribute("tabindex","0"),T(t,"click",u)),t.Dropdown=i};a.push(["Dropdown",H,'[data-toggle="dropdown"]']);var W=function(i,a){var n,r=(i=w(i)).getAttribute("data-target")||i.getAttribute("href"),l=w(r),c=b(i,"modal")?i:l;if(b(i,"modal")&&(i=null),c){a=a||{},this.keyboard=!1!==a.keyboard&&"false"!==c.getAttribute("data-keyboard"),this.backdrop="static"!==a.backdrop&&"static"!==c.getAttribute("data-backdrop")||"static",this.backdrop=!1!==a.backdrop&&"false"!==c.getAttribute("data-backdrop")&&this.backdrop,this.content=a.content;var s,d,f,g,x=this,k=null,N=y(o,"fixed-top").concat(y(o,"fixed-bottom")),E=function(){var o,i=t.getComputedStyle(e.body),a=parseInt(i.paddingRight,10);if(s&&(e.body.style.paddingRight=a+f+"px",N.length))for(var n=0;n<N.length;n++)o=t.getComputedStyle(N[n]).paddingRight,N[n].style.paddingRight=parseInt(o)+f+"px"},D=function(){var i,a,n;s=e.body.clientWidth<(i=o.getBoundingClientRect(),t.innerWidth||i.right-Math.abs(i.left)),d=c.scrollHeight>o.clientHeight,(n=e.createElement("div")).className="modal-scrollbar-measure",e.body.appendChild(n),a=n.offsetWidth-n.clientWidth,e.body.removeChild(n),f=a},L=function(){c.style.paddingLeft=!s&&d?f+"px":"",c.style.paddingRight=s&&!d?f+"px":""},q=function(){(g=w(".modal-backdrop"))&&null!==g&&"object"==typeof g&&(u=0,e.body.removeChild(g),g=null),P.call(c,"hidden","modal")},M=function(){b(c,"show")?T(e,"keydown",B):A(e,"keydown",B)},H=function(){b(c,"show")?T(t,"resize",x.update):A(t,"resize",x.update)},W=function(){b(c,"show")?T(c,"click",R):A(c,"click",R)},I=function(){H(),W(),M(),p(c),P.call(c,"shown","modal",k)},O=function(){c.style.display="",i&&p(i),y(e,"modal show")[0]||(c.style.paddingLeft="",c.style.paddingRight="",function(){if(e.body.style.paddingRight="",N.length)for(var t=0;t<N.length;t++)N[t].style.paddingRight=""}(),m(e.body,"modal-open"),g&&b(g,"fade")?(m(g,"show"),S(g,q)):q(),H(),W(),M())},B=function(t){x.keyboard&&27==t.which&&b(c,"show")&&x.hide()},R=function(t){var e=t.target;b(c,"show")&&("modal"===e.parentNode.getAttribute("data-dismiss")||"modal"===e.getAttribute("data-dismiss")||e===c&&"static"!==x.backdrop)&&(x.hide(),k=null,t.preventDefault())};this.toggle=function(){b(c,"show")?this.hide():this.show()},this.show=function(){P.call(c,"show","modal",k);var t=y(e,"modal show")[0];t&&t!==c&&t.modalTrigger.Modal.hide(),this.backdrop&&!u&&function(){u=1;var t=e.createElement("div");null===(g=w(".modal-backdrop"))&&(t.setAttribute("class","modal-backdrop fade"),g=t,e.body.appendChild(g))}(),g&&u&&!b(g,"show")&&(g.offsetWidth,n=C(g),v(g,"show")),setTimeout(function(){c.style.display="block",D(),E(),L(),v(e.body,"modal-open"),v(c,"show"),c.setAttribute("aria-hidden",!1),b(c,"fade")?S(c,I):I()},h&&g?n:0)},this.hide=function(){P.call(c,"hide","modal"),g=w(".modal-backdrop"),n=g&&C(g),m(c,"show"),c.setAttribute("aria-hidden",!0),setTimeout(function(){b(c,"fade")?S(c,O):O()},h&&g?n:0)},this.setContent=function(t){w(".modal-content",c).innerHTML=t},this.update=function(){b(c,"show")&&(D(),E(),L())},!i||"Modal"in i||T(i,"click",function(t){var e=t.target;(e=e.hasAttribute("data-target")||e.hasAttribute("href")?e:e.parentNode)!==i||b(c,"show")||(c.modalTrigger=i,k=i,x.show(),t.preventDefault())}),x.content&&x.setContent(x.content),i&&(i.Modal=x)}};a.push(["Modal",W,'[data-toggle="modal"]']);var I=function(o,i){i=i||{};var a=(o=w(o)).getAttribute("data-trigger"),n=o.getAttribute("data-animation"),r=o.getAttribute("data-placement"),l=o.getAttribute("data-dismissible"),d=o.getAttribute("data-delay"),u=o.getAttribute("data-container"),h='<button type="button" class="close">×</button>',f=w(i.container),g=w(u),p=x(o,".modal"),y=x(o,".fixed-top"),k=x(o,".fixed-bottom");this.template=i.template?i.template:null,this.trigger=i.trigger?i.trigger:a||"hover",this.animation=i.animation&&"fade"!==i.animation?i.animation:n||"fade",this.placement=i.placement?i.placement:r||c,this.delay=parseInt(i.delay||d)||200,this.dismissible=!(!i.dismissible&&"true"!==l),this.container=f||(g||(y||(k||(p||e.body))));var C=this,N=o.getAttribute("data-title")||null,D=o.getAttribute("data-content")||null;if(D||this.template){var L=null,q=0,M=this.placement,H=function(t){null!==L&&t.target===w(".close",L)&&C.hide()},W=function(i){"click"!=C.trigger&&"focus"!=C.trigger||!C.dismissible&&i(o,"blur",C.hide),C.dismissible&&i(e,"click",H),i(t,"resize",C.hide)},I=function(){W(T),P.call(o,"shown","popover")},O=function(){W(A),C.container.removeChild(L),q=null,L=null,P.call(o,"hidden","popover")};this.toggle=function(){null===L?C.show():C.hide()},this.show=function(){clearTimeout(q),q=setTimeout(function(){null===L&&(M=C.placement,function(){N=o.getAttribute("data-title"),D=o.getAttribute("data-content"),L=e.createElement("div");var t=e.createElement("div");if(t.setAttribute("class","arrow"),L.appendChild(t),null!==D&&null===C.template){if(L.setAttribute("role","tooltip"),null!==N){var i=e.createElement("h3");i.setAttribute("class","popover-header"),i.innerHTML=C.dismissible?N+h:N,L.appendChild(i)}var a=e.createElement("div");a.setAttribute("class","popover-body"),a.innerHTML=C.dismissible&&null===N?D+h:D,L.appendChild(a)}else{var n=e.createElement("div");n.innerHTML=C.template,L.innerHTML=n.firstChild.innerHTML}C.container.appendChild(L),L.style.display="block",L.setAttribute("class","popover bs-popover-"+M+" "+C.animation)}(),E(o,L,M,C.container),!b(L,"show")&&v(L,"show"),P.call(o,"show","popover"),C.animation?S(L,I):I())},20)},this.hide=function(){clearTimeout(q),q=setTimeout(function(){L&&null!==L&&b(L,"show")&&(P.call(o,"hide","popover"),m(L,"show"),C.animation?S(L,O):O())},C.delay)},"Popover"in o||("hover"===C.trigger?(T(o,s[0],C.show),C.dismissible||T(o,s[1],C.hide)):"click"!=C.trigger&&"focus"!=C.trigger||T(o,C.trigger,C.toggle)),o.Popover=C}};a.push(["Popover",I,'[data-toggle="popover"]']);var O=function(e,o){e=w(e);var i=w(e.getAttribute("data-target")),a=e.getAttribute("data-offset");if((o=o||{}).target||i){for(var n,l=o.target&&w(o.target)||i,c=l&&l.getElementsByTagName("A"),s=parseInt(a||o.offset)||10,d=[],u=[],h=e.offsetHeight<e.scrollHeight?e:t,f=h===t,g=0,p=c.length;g<p;g++){var x=c[g].getAttribute("href"),A=x&&"#"===x.charAt(0)&&"#"!==x.slice(-1)&&w(x);A&&(d.push(c[g]),u.push(A))}var k=function(t){var o=d[t],i=u[t],a=o.parentNode.parentNode,l=b(a,"dropdown")&&a.getElementsByTagName("A")[0],c=f&&i.getBoundingClientRect(),h=b(o,r)||!1,g=(f?c.top+n:i.offsetTop)-s,p=f?c.bottom+n-s:u[t+1]?u[t+1].offsetTop-s:e.scrollHeight,w=n>=g&&p>n;if(!h&&w)b(o,r)||(v(o,r),l&&!b(l,r)&&v(l,r),P.call(e,"activate","scrollspy",d[t]));else if(w){if(!w&&!h||h&&w)return}else b(o,r)&&(m(o,r),l&&b(l,r)&&!y(o.parentNode,r).length&&m(l,r))};this.refresh=function(){!function(){n=f?N().y:e.scrollTop;for(var t=0,o=d.length;t<o;t++)k(t)}()},"ScrollSpy"in e||(T(h,"scroll",this.refresh),T(t,"resize",this.refresh)),this.refresh(),e.ScrollSpy=this}};a.push(["ScrollSpy",O,'[data-spy="scroll"]']);var B=function(t,e){var o=(t=w(t)).getAttribute("data-height");e=e||{},this.height=!!h&&(e.height||"true"===o);var i,a,c,s,d,u,f,g=this,p=x(t,".nav"),A=!1,k=p&&w(".dropdown-toggle",p),C=function(){A.style.height="",m(A,"collapsing"),p.isAnimating=!1},N=function(){A?u?C():setTimeout(function(){A.style.height=f+"px",A.offsetWidth,S(A,C)},50):p.isAnimating=!1,P.call(i,"shown","tab",a)},E=function(){A&&(c.style.float=l,s.style.float=l,d=c.scrollHeight),v(s,r),P.call(i,"show","tab",a),m(c,r),P.call(a,"hidden","tab",i),A&&(f=s.scrollHeight,u=f===d,v(A,"collapsing"),A.style.height=d+"px",A.offsetHeight,c.style.float="",s.style.float=""),b(s,"fade")?setTimeout(function(){v(s,"show"),S(s,N)},20):N()};if(p){p.isAnimating=!1;var D=function(){var t,e=y(p,r);return 1!==e.length||b(e[0].parentNode,"dropdown")?e.length>1&&(t=e[e.length-1]):t=e[0],t},L=function(){return w(D().getAttribute("href"))};this.show=function(){s=w((i=i||t).getAttribute("href")),a=D(),c=L(),p.isAnimating=!0,m(a,r),v(i,r),k&&(b(t.parentNode,"dropdown-menu")?b(k,r)||v(k,r):b(k,r)&&m(k,r)),P.call(a,"hide","tab",i),b(c,"fade")?(m(c,"show"),S(c,E)):E()},"Tab"in t||T(t,"click",function(t){var e=t.target.getAttribute("href");t.preventDefault(),i="tab"===t.target.getAttribute(n)||e&&"#"===e.charAt(0)?t.target:t.target.parentNode,!p.isAnimating&&!b(i,r)&&g.show()}),g.height&&(A=L().parentNode),t.Tab=g}};a.push(["Tab",B,'[data-toggle="tab"]']);var R=function(o,i){i=i||{};var a=(o=w(o)).getAttribute("data-animation"),n=o.getAttribute("data-placement"),r=o.getAttribute("data-delay"),l=o.getAttribute("data-container"),d=w(i.container),u=w(l),h=x(o,".modal"),f=x(o,".fixed-top"),g=x(o,".fixed-bottom");this.animation=i.animation&&"fade"!==i.animation?i.animation:a||"fade",this.placement=i.placement?i.placement:n||c,this.delay=parseInt(i.delay||r)||200,this.container=d||(u||(f||(g||(h||e.body))));var p=this,y=0,k=this.placement,C=null,N=o.getAttribute("title")||o.getAttribute("data-title")||o.getAttribute("data-original-title");if(N&&""!=N){var D=function(){T(t,"resize",p.hide),P.call(o,"shown","tooltip")},L=function(){A(t,"resize",p.hide),p.container.removeChild(C),C=null,y=null,P.call(o,"hidden","tooltip")};this.show=function(){clearTimeout(y),y=setTimeout(function(){if(null===C){if(k=p.placement,0==function(){if(!(N=o.getAttribute("title")||o.getAttribute("data-title")||o.getAttribute("data-original-title"))||""==N)return!1;(C=e.createElement("div")).setAttribute("role","tooltip");var t=e.createElement("div");t.setAttribute("class","arrow"),C.appendChild(t);var i=e.createElement("div");i.setAttribute("class","tooltip-inner"),C.appendChild(i),i.innerHTML=N,p.container.appendChild(C),C.setAttribute("class","tooltip bs-tooltip-"+k+" "+p.animation)}())return;E(o,C,k,p.container),!b(C,"show")&&v(C,"show"),P.call(o,"show","tooltip"),p.animation?S(C,D):D()}},20)},this.hide=function(){clearTimeout(y),y=setTimeout(function(){C&&b(C,"show")&&(P.call(o,"hide","tooltip"),m(C,"show"),p.animation?S(C,L):L())},p.delay)},this.toggle=function(){C?p.hide():p.show()},"Tooltip"in o||(o.setAttribute("data-original-title",N),o.removeAttribute("title"),T(o,s[0],p.show),T(o,s[1],p.hide)),o.Tooltip=p}};a.push(["Tooltip",R,'[data-toggle="tooltip"]']);var F=function(t,e){for(var o=0,i=e.length;o<i;o++)new t(e[o])},U=i.initCallback=function(t){t=t||e;for(var o=0,i=a.length;o<i;o++)F(a[o][1],t.querySelectorAll(a[o][2]))};return e.body?U():T(e,"DOMContentLoaded",function(){U()}),{Alert:D,Button:L,Carousel:q,Collapse:M,Dropdown:H,Modal:W,Popover:I,ScrollSpy:O,Tab:B,Tooltip:R}});var lookDirection=120,eyeShadow=5,mouthOpen=20,eyebrowExcite=140,eyeUpDown=85,shirtColor="rgb("+Math.floor(125*Math.random())+","+Math.floor(125*Math.random())+","+Math.floor(125*Math.random())+")",mouthRand=Math.floor(50*Math.random()),W=H=1e3,canvas=document.getElementById("face");canvas.width=W-120,canvas.height=H,canvas.style.position="relative",canvas.style.width="410px",canvas.style.backgroundColor="#41466b",canvas.style.height="auto";var ctx=canvas.getContext("2d");function drawFace(){ctx.rect(0,0,canvas.width,canvas.height),ctx.save(),ctx.translate(canvas.width/2,canvas.height/2),ctx.beginPath(),ctx.fillStyle="#6A4E42",ctx.strokeStyle="#000000",ctx.lineWidth=5,ctx.moveTo(-270,-330),ctx.bezierCurveTo(-350,300,350,300,270,-330),ctx.quadraticCurveTo(0,-600,-270,-330),ctx.fill(),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.fillStyle=shirtColor,ctx.moveTo(0,300),ctx.quadraticCurveTo(-300,300,-420,500),ctx.lineTo(420,500),ctx.quadraticCurveTo(300,300,-0,300),ctx.fill(),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.fillStyle="#DDA8A0",ctx.moveTo(-160,0),ctx.lineTo(-160,350),ctx.quadraticCurveTo(0,600,160,350),ctx.lineTo(160,0),ctx.fill(),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.moveTo(-50,-320),ctx.quadraticCurveTo(-270,-320,-270,-100),ctx.quadraticCurveTo(-310,225,-100,300),ctx.quadraticCurveTo(0,350,100,300),ctx.quadraticCurveTo(310,225,270,-100),ctx.quadraticCurveTo(270,-320,-50,-320),ctx.fill(),ctx.stroke(),ctx.clip(),ctx.closePath(),ctx.beginPath(),ctx.fillStyle="#6A4E42",ctx.moveTo(-280,0),ctx.quadraticCurveTo(-310,225,-100,300),ctx.quadraticCurveTo(0,350,100,300),ctx.quadraticCurveTo(310,225,280,0),ctx.bezierCurveTo(250,180,-250,180,-280,0),ctx.stroke(),ctx.fill(),ctx.beginPath(),ctx.moveTo(20,-50),ctx.quadraticCurveTo(60,0,60,120),ctx.lineTo(0,120),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.fillStyle="#000000",ctx.strokeStyle="#DDA8A0",ctx.lineWidth=5,ctx.moveTo(-100,150+mouthRand),ctx.quadraticCurveTo(0,220,100,150+mouthRand),ctx.quadraticCurveTo(0,220+mouthOpen,-100,150+mouthRand),ctx.fill(),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.strokeStyle="#6A4E42",ctx.lineWidth=15,ctx.moveTo(-200,-140),ctx.quadraticCurveTo(-100,-160,-50,-eyebrowExcite),ctx.moveTo(200,-140),ctx.quadraticCurveTo(100,-160,50,-eyebrowExcite),ctx.stroke(),ctx.closePath(),ctx.beginPath(),ctx.strokeStyle="#000000",ctx.lineWidth=5,ctx.moveTo(-200-eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(-100-eyeShadow,-160-eyeShadow,-50+eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(-80,-30+eyeShadow,-200-eyeShadow,-80+eyeShadow),ctx.moveTo(200+eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(100+eyeShadow,-160-eyeShadow,50-eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(80,-30+eyeShadow,200+eyeShadow,-80+eyeShadow),ctx.fill(),ctx.closePath(),ctx.fillStyle="#ffffff",ctx.beginPath(),ctx.moveTo(-200,-80),ctx.quadraticCurveTo(-100,-160,-50,-80),ctx.quadraticCurveTo(-100,-30,-200,-80),ctx.moveTo(200,-80),ctx.quadraticCurveTo(100,-160,50,-80),ctx.quadraticCurveTo(100,-30,200,-80),ctx.fill(),ctx.clip(),ctx.closePath(),ctx.beginPath(),ctx.fillStyle="#786060",ctx.arc(lookDirection-225,-eyeUpDown,30,0,2*Math.PI,!0),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.arc(lookDirection,-eyeUpDown,30,0,2*Math.PI,!0),ctx.fill(),ctx.stroke(),ctx.closePath(),ctx.restore()}function getMousePos(t,e){return{x:e.clientX,y:e.clientY}}var origOrientation=[];function deviceOrientation(t){origOrientation=[5*-t.gamma,5*-t.beta],window.removeEventListener("deviceorientation",deviceOrientation,!1)}function handleOrientation(t){return{x:5*-t.gamma-(origOrientation[0]-window.innerWidth/2),y:5*-t.beta-(origOrientation[1]-window.innerHeight/2)}}function resetOrientation(){window.addEventListener("deviceorientation",deviceOrientation,!1)}resetOrientation();var m,targetPos={x:window.innerWidth/2,y:window.innerHeight/2};function excite(){mouthOpen<=20&&(m=1),mouthOpen>=190&&(m=-20),mouthOpen+=m,eyebrowExcite+=m/4}window.addEventListener("mousemove",function(t){targetPos=getMousePos(window,t)},!1),window.addEventListener("deviceorientation",function(t){targetPos={x:handleOrientation(t).x,y:handleOrientation(t).y}},!1),drawFace();var oldTargetPos=targetPos,FPS=5;function runFace(){ctx.clearRect(-600,-600,600,600),lookDirection=60+100*targetPos.x/window.innerWidth,(eyeUpDown=105-100*(targetPos.y-(canvas.offsetTop-window.pageYOffset))/window.innerHeight)>112&&(eyeUpDown=112),eyeUpDown<52&&(eyeUpDown=52),(Math.abs(oldTargetPos.x-targetPos.x)>2||Math.abs(oldTargetPos.y-targetPos.y)>2)&&excite(),drawFace(),oldTargetPos=targetPos,window.setTimeout(runFace,1e3/FPS)}runFace();for(var fps_select=document.getElementsByClassName("fps_select"),i=0;i<fps_select.length;i++)fps_select[i].addEventListener("mouseup",function(t){FPS=parseInt(t.target.name),console.log(FPS)},!1);var faceRender=new Image;faceRender.src=canvas.toDataURL(),document.querySelector("#brandFace").src=faceRender.src;