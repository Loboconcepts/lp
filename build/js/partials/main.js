for(i=0;i<document.querySelectorAll(".custClickEvent").length;i++)document.querySelectorAll(".custClickEvent")[i].addEventListener("click",function(){window.scrollTo({behavior:"smooth",left:0,top:getPosition(document.querySelector(this.name))}),event.preventDefault()});function getPosition(t){for(var e=0;t;)e+=t.offsetTop-t.scrollTop+t.clientTop,t=t.offsetParent;return e-(document.querySelector("header").offsetHeight+10)}!function(t,e){if("function"==typeof define&&define.amd)define([],e);else if("object"==typeof module&&module.exports)module.exports=e();else{var i=e();t.Alert=i.Alert,t.Button=i.Button,t.Carousel=i.Carousel,t.Collapse=i.Collapse,t.Dropdown=i.Dropdown,t.Modal=i.Modal,t.Popover=i.Popover,t.ScrollSpy=i.ScrollSpy,t.Tab=i.Tab,t.Tooltip=i.Tooltip}}(this,function(){"use strict";var t="undefined"!=typeof global?global:this||window,e=document,i=e.documentElement,o=t.BSN={},n=o.supports=[],a="data-toggle",r="active",l="left",c="top",s="onmouseleave"in e?["mouseenter","mouseleave"]:["mouseover","mouseout"],d=/\b(top|bottom|left|right)+/,u=0,h="WebkitTransition"in i.style||"Transition".toLowerCase()in i.style,f="WebkitTransition"in i.style?"Webkit".toLowerCase()+"TransitionEnd":"Transition".toLowerCase()+"end",p="WebkitDuration"in i.style?"Webkit".toLowerCase()+"TransitionDuration":"Transition".toLowerCase()+"Duration",g=function(t){t.focus?t.focus():t.setActive()},v=function(t,e){t.classList.add(e)},m=function(t,e){t.classList.remove(e)},b=function(t,e){return t.classList.contains(e)},y=function(t,e){return[].slice.call(t.getElementsByClassName(e))},w=function(t,i){return"object"==typeof t?t:(i||e).querySelector(t)},x=function(t,i){var o=i.charAt(0),n=i.substr(1);if("."===o){for(;t&&t!==e;t=t.parentNode)if(null!==w(i,t.parentNode)&&b(t,n))return t}else if("#"===o)for(;t&&t!==e;t=t.parentNode)if(t.id===n)return t;return!1},T=function(t,e,i){t.addEventListener(e,i,!1)},A=function(t,e,i){t.removeEventListener(e,i,!1)},k=function(t,e,i){T(t,e,function o(n){i(n),A(t,e,o)})},C=function(e){var i=h?t.getComputedStyle(e)[p]:0;return(i="number"!=typeof(i=parseFloat(i))||isNaN(i)?0:1e3*i)+50},S=function(t,e){var i=0,o=C(t);h&&k(t,f,function(t){e(t),i=1}),setTimeout(function(){!i&&e()},o)},N=function(t,e,i){var o=new CustomEvent(t+".bs."+e);o.relatedTarget=i,this.dispatchEvent(o)},E=function(){return{y:t.pageYOffset||i.scrollTop,x:t.pageXOffset||i.scrollLeft}},P=function(t,o,n,a){var r,s,u,h,f,p,g=o.offsetWidth,v=o.offsetHeight,m=i.clientWidth||e.body.clientWidth,y=i.clientHeight||e.body.clientHeight,x=t.getBoundingClientRect(),T=a===e.body?E():{x:a.offsetLeft+a.scrollLeft,y:a.offsetTop+a.scrollTop},A=x.right-x.left,k=x.bottom-x.top,C=b(o,"popover"),S=w(".arrow",o),N=x.top+k/2-v/2<0,P=x.left+A/2-g/2<0,D=x.left+g/2+A/2>=m,L=x.top+v/2+k/2>=y,q=x.top-v<0,M=x.left-g<0,H=x.top+v+k>=y,W=x.left+g+A>=m;n="right"===(n=(n="bottom"===(n=(n=(n===l||"right"===n)&&M&&W?c:n)===c&&q?"bottom":n)&&H?c:n)===l&&M?"right":n)&&W?l:n,-1===o.className.indexOf(n)&&(o.className=o.className.replace(d,n)),f=S.offsetWidth,p=S.offsetHeight,n===l||"right"===n?(s=n===l?x.left+T.x-g-(C?f:0):x.left+T.x+A,N?(r=x.top+T.y,u=k/2-f):L?(r=x.top+T.y-v+k,u=v-k/2-f):(r=x.top+T.y-v/2+k/2,u=v/2-(C?.9*p:p/2))):n!==c&&"bottom"!==n||(r=n===c?x.top+T.y-v-(C?p:0):x.top+T.y+k,P?(s=0,h=x.left+A/2-f):D?(s=m-1.01*g,h=g-(m-x.left)+A/2-f/2):(s=x.left+T.x-g/2+A/2,h=g/2-f/2)),o.style.top=r+"px",o.style.left=s+"px",u&&(S.style.top=u+"px"),h&&(S.style.left=h+"px")};o.version="2.0.25";var D=function(t){t=w(t);var e=this,i=x(t,".alert"),o=function(o){i=x(o.target,".alert"),(t=w('[data-dismiss="alert"]',i))&&i&&(t===o.target||t.contains(o.target))&&e.close()},n=function(){N.call(i,"closed","alert"),A(t,"click",o),i.parentNode.removeChild(i)};this.close=function(){i&&t&&b(i,"show")&&(N.call(i,"close","alert"),m(i,"show"),i&&(b(i,"fade")?S(i,n):n()))},"Alert"in t||T(t,"click",o),t.Alert=e};n.push(["Alert",D,'[data-dismiss="alert"]']);var L=function(t){t=w(t);var i=!1,o="checked",n=function(e){var n="LABEL"===e.target.tagName?e.target:"LABEL"===e.target.parentNode.tagName?e.target.parentNode:null;if(n){var a=e.target,l=y(a.parentNode,"btn"),c=n.getElementsByTagName("INPUT")[0];if(c){if("checkbox"===c.type&&(c.checked?(m(n,r),c.getAttribute(o),c.removeAttribute(o),c.checked=!1):(v(n,r),c.getAttribute(o),c.setAttribute(o,o),c.checked=!0),i||(i=!0,N.call(c,"change","button"),N.call(t,"change","button"))),"radio"===c.type&&!i&&!c.checked){v(n,r),c.setAttribute(o,o),c.checked=!0,N.call(c,"change","button"),N.call(t,"change","button"),i=!0;for(var s=0,d=l.length;s<d;s++){var u=l[s],h=u.getElementsByTagName("INPUT")[0];u!==n&&b(u,r)&&(m(u,r),h.removeAttribute(o),h.checked=!1,N.call(h,"change","button"))}}setTimeout(function(){i=!1},50)}}};"Button"in t||(T(t,"click",n),w("[tabindex]",t)&&T(t,"keyup",function(t){32===(t.which||t.keyCode)&&t.target===e.activeElement&&n(t)}),T(t,"keydown",function(t){32===(t.which||t.keyCode)&&t.preventDefault()}));for(var a=y(t,"btn"),l=a.length,c=0;c<l;c++)!b(a[c],r)&&w("input:checked",a[c])&&v(a[c],r);t.Button=this};n.push(["Button",L,'[data-toggle="buttons"]']);var q=function(o,n){n=n||{};var a=(o=w(o)).getAttribute("data-interval"),c=n.interval,d="false"===a?0:parseInt(a),u="hover"===o.getAttribute("data-pause")||!1,p="true"===o.getAttribute("data-keyboard")||!1;this.keyboard=!0===n.keyboard||p,this.pause=!("hover"!==n.pause&&!u)&&"hover",this.interval="number"==typeof c?c:!1===c||0===d||!1===d?0:isNaN(d)?5e3:d;var g=this,x=o.index=0,A=o.timer=0,C=!1,S=y(o,"carousel-item"),E=S.length,P=this.direction=l,D=y(o,"carousel-control-prev")[0],L=y(o,"carousel-control-next")[0],q=w(".carousel-indicators",o),M=q&&q.getElementsByTagName("LI")||[];if(!(E<2)){var H=function(){!1===g.interval||b(o,"paused")||(v(o,"paused"),!C&&(clearInterval(A),A=null))},W=function(){!1!==g.interval&&b(o,"paused")&&(m(o,"paused"),!C&&(clearInterval(A),A=null),!C&&g.cycle())},O=function(t){if(t.preventDefault(),!C){var e=t.currentTarget||t.srcElement;e===L?x++:e===D&&x--,g.slideTo(x)}},I=function(t){for(var e=0,i=M.length;e<i;e++)m(M[e],r);M[t]&&v(M[t],r)};this.cycle=function(){A&&(clearInterval(A),A=null),A=setInterval(function(){var e,n;e=o.getBoundingClientRect(),n=t.innerHeight||i.clientHeight,e.top<=n&&e.bottom>=0&&(x++,g.slideTo(x))},this.interval)},this.slideTo=function(t){if(!C){var i,n=this.getActiveIndex();n!==t&&(n<t||0===n&&t===E-1?P=g.direction=l:(n>t||n===E-1&&0===t)&&(P=g.direction="right"),t<0?t=E-1:t>=E&&(t=0),x=t,i=P===l?"next":"prev",N.call(o,"slide","carousel",S[t]),C=!0,clearInterval(A),A=null,I(t),h&&b(o,"slide")?(v(S[t],"carousel-item-"+i),S[t].offsetWidth,v(S[t],"carousel-item-"+P),v(S[n],"carousel-item-"+P),k(S[t],f,function(a){var l=a.target!==S[t]?1e3*a.elapsedTime+100:20;C&&setTimeout(function(){C=!1,v(S[t],r),m(S[n],r),m(S[t],"carousel-item-"+i),m(S[t],"carousel-item-"+P),m(S[n],"carousel-item-"+P),N.call(o,"slid","carousel",S[t]),e.hidden||!g.interval||b(o,"paused")||g.cycle()},l)})):(v(S[t],r),S[t].offsetWidth,m(S[n],r),setTimeout(function(){C=!1,g.interval&&!b(o,"paused")&&g.cycle(),N.call(o,"slid","carousel",S[t])},100)))}},this.getActiveIndex=function(){return S.indexOf(y(o,"carousel-item active")[0])||0},"Carousel"in o||(g.pause&&g.interval&&(T(o,s[0],H),T(o,s[1],W),T(o,"touchstart",H),T(o,"touchend",W)),L&&T(L,"click",O),D&&T(D,"click",O),q&&T(q,"click",function(t){if(t.preventDefault(),!C){var e=t.target;if(!e||b(e,r)||!e.getAttribute("data-slide-to"))return!1;x=parseInt(e.getAttribute("data-slide-to"),10),g.slideTo(x)}}),!0===g.keyboard&&T(t,"keydown",function(t){if(!C){switch(t.which){case 39:x++;break;case 37:x--;break;default:return}g.slideTo(x)}})),g.getActiveIndex()<0&&(S.length&&v(S[0],r),M.length&&I(0)),g.interval&&g.cycle(),o.Carousel=g}};n.push(["Carousel",q,'[data-ride="carousel"]']);var M=function(t,e){t=w(t),e=e||{};var i,o,n,a,r,l=null,c=null,s=this,d=t.getAttribute("data-parent"),u=function(t,e){N.call(t,"hide","collapse"),t.isAnimating=!0,t.style.height=t.scrollHeight+"px",m(t,"collapse"),m(t,"show"),v(t,"collapsing"),t.offsetWidth,t.style.height="0px",S(t,function(){t.isAnimating=!1,t.setAttribute("aria-expanded","false"),e.setAttribute("aria-expanded","false"),m(t,"collapsing"),v(t,"collapse"),t.style.height="",N.call(t,"hidden","collapse")})};this.toggle=function(t){t.preventDefault(),b(c,"show")?s.hide():s.show()},this.hide=function(){c.isAnimating||(u(c,t),v(t,"collapsed"))},this.show=function(){var e,n;l&&(i=w(".collapse.show",l),o=i&&(w('[data-toggle="collapse"][data-target="#'+i.id+'"]',l)||w('[data-toggle="collapse"][href="#'+i.id+'"]',l))),(!c.isAnimating||i&&!i.isAnimating)&&(o&&i!==c&&(u(i,o),v(o,"collapsed")),n=t,N.call(e=c,"show","collapse"),e.isAnimating=!0,v(e,"collapsing"),m(e,"collapse"),e.style.height=e.scrollHeight+"px",S(e,function(){e.isAnimating=!1,e.setAttribute("aria-expanded","true"),n.setAttribute("aria-expanded","true"),m(e,"collapsing"),v(e,"collapse"),v(e,"show"),e.style.height="",N.call(e,"shown","collapse")}),m(t,"collapsed"))},"Collapse"in t||T(t,"click",s.toggle),n=t.href&&t.getAttribute("href"),a=t.getAttribute("data-target"),r=n||a&&"#"===a.charAt(0)&&a,(c=r&&w(r)).isAnimating=!1,l=w(e.parent)||d&&x(t,d),t.Collapse=s};n.push(["Collapse",M,'[data-toggle="collapse"]']);var H=function(t,i){t=w(t),this.persist=!0===i||"true"===t.getAttribute("data-persist")||!1;var o=this,n=t.parentNode,a=null,r=w(".dropdown-menu",n),l=function(){for(var t=r.children,e=[],i=0;i<t.length;i++)t[i].children.length&&"A"===t[i].children[0].tagName&&e.push(t[i].children[0]),"A"===t[i].tagName&&e.push(t[i]);return e}(),c=function(t){(t.href&&"#"===t.href.slice(-1)||t.parentNode&&t.parentNode.href&&"#"===t.parentNode.href.slice(-1))&&this.preventDefault()},s=function(){var i=t.open?T:A;i(e,"click",d),i(e,"keydown",h),i(e,"keyup",f)},d=function(e){var i=e.target,n=i&&("Dropdown"in i||"Dropdown"in i.parentNode);(i!==r&&!r.contains(i)||!o.persist&&!n)&&(a=i===t||t.contains(i)?t:null,y(),c.call(e,i))},u=function(e){a=t,p(),c.call(e,e.target)},h=function(t){var e=t.which||t.keyCode;38!==e&&40!==e||t.preventDefault()},f=function(i){var n=i.which||i.keyCode,c=e.activeElement,s=l.indexOf(c),d=c===t,u=r.contains(c),h=c.parentNode===r||c.parentNode.parentNode===r;(h||d)&&(s=d?0:38===n?s>1?s-1:0:40===n&&s<l.length-1?s+1:s,l[s]&&g(l[s])),(l.length&&h||!l.length&&(u||d)||!u)&&t.open&&27===n&&(o.toggle(),a=null)},p=function(){N.call(n,"show","dropdown",a),v(r,"show"),v(n,"show"),t.setAttribute("aria-expanded",!0),N.call(n,"shown","dropdown",a),t.open=!0,A(t,"click",u),setTimeout(function(){g(r.getElementsByTagName("INPUT")[0]||t),s()},1)},y=function(){N.call(n,"hide","dropdown",a),m(r,"show"),m(n,"show"),t.setAttribute("aria-expanded",!1),N.call(n,"hidden","dropdown",a),t.open=!1,s(),g(t),setTimeout(function(){T(t,"click",u)},1)};t.open=!1,this.toggle=function(){b(n,"show")&&t.open?y():p()},"Dropdown"in t||(!1 in r&&r.setAttribute("tabindex","0"),T(t,"click",u)),t.Dropdown=o};n.push(["Dropdown",H,'[data-toggle="dropdown"]']);var W=function(o,n){var a,r=(o=w(o)).getAttribute("data-target")||o.getAttribute("href"),l=w(r),c=b(o,"modal")?o:l;if(b(o,"modal")&&(o=null),c){n=n||{},this.keyboard=!1!==n.keyboard&&"false"!==c.getAttribute("data-keyboard"),this.backdrop="static"!==n.backdrop&&"static"!==c.getAttribute("data-backdrop")||"static",this.backdrop=!1!==n.backdrop&&"false"!==c.getAttribute("data-backdrop")&&this.backdrop,this.content=n.content;var s,d,f,p,x=this,k=null,E=y(i,"fixed-top").concat(y(i,"fixed-bottom")),P=function(){var i,o=t.getComputedStyle(e.body),n=parseInt(o.paddingRight,10);if(s&&(e.body.style.paddingRight=n+f+"px",E.length))for(var a=0;a<E.length;a++)i=t.getComputedStyle(E[a]).paddingRight,E[a].style.paddingRight=parseInt(i)+f+"px"},D=function(){var o,n,a;s=e.body.clientWidth<(o=i.getBoundingClientRect(),t.innerWidth||o.right-Math.abs(o.left)),d=c.scrollHeight>i.clientHeight,(a=e.createElement("div")).className="modal-scrollbar-measure",e.body.appendChild(a),n=a.offsetWidth-a.clientWidth,e.body.removeChild(a),f=n},L=function(){c.style.paddingLeft=!s&&d?f+"px":"",c.style.paddingRight=s&&!d?f+"px":""},q=function(){(p=w(".modal-backdrop"))&&null!==p&&"object"==typeof p&&(u=0,e.body.removeChild(p),p=null),N.call(c,"hidden","modal")},M=function(){b(c,"show")?T(e,"keydown",B):A(e,"keydown",B)},H=function(){b(c,"show")?T(t,"resize",x.update):A(t,"resize",x.update)},W=function(){b(c,"show")?T(c,"click",R):A(c,"click",R)},O=function(){H(),W(),M(),g(c),N.call(c,"shown","modal",k)},I=function(){c.style.display="",o&&g(o),y(e,"modal show")[0]||(c.style.paddingLeft="",c.style.paddingRight="",function(){if(e.body.style.paddingRight="",E.length)for(var t=0;t<E.length;t++)E[t].style.paddingRight=""}(),m(e.body,"modal-open"),p&&b(p,"fade")?(m(p,"show"),S(p,q)):q(),H(),W(),M())},B=function(t){x.keyboard&&27==t.which&&b(c,"show")&&x.hide()},R=function(t){var e=t.target;b(c,"show")&&("modal"===e.parentNode.getAttribute("data-dismiss")||"modal"===e.getAttribute("data-dismiss")||e===c&&"static"!==x.backdrop)&&(x.hide(),k=null,t.preventDefault())};this.toggle=function(){b(c,"show")?this.hide():this.show()},this.show=function(){N.call(c,"show","modal",k);var t=y(e,"modal show")[0];t&&t!==c&&t.modalTrigger.Modal.hide(),this.backdrop&&!u&&function(){u=1;var t=e.createElement("div");null===(p=w(".modal-backdrop"))&&(t.setAttribute("class","modal-backdrop fade"),p=t,e.body.appendChild(p))}(),p&&u&&!b(p,"show")&&(p.offsetWidth,a=C(p),v(p,"show")),setTimeout(function(){c.style.display="block",D(),P(),L(),v(e.body,"modal-open"),v(c,"show"),c.setAttribute("aria-hidden",!1),b(c,"fade")?S(c,O):O()},h&&p?a:0)},this.hide=function(){N.call(c,"hide","modal"),p=w(".modal-backdrop"),a=p&&C(p),m(c,"show"),c.setAttribute("aria-hidden",!0),setTimeout(function(){b(c,"fade")?S(c,I):I()},h&&p?a:0)},this.setContent=function(t){w(".modal-content",c).innerHTML=t},this.update=function(){b(c,"show")&&(D(),P(),L())},!o||"Modal"in o||T(o,"click",function(t){var e=t.target;(e=e.hasAttribute("data-target")||e.hasAttribute("href")?e:e.parentNode)!==o||b(c,"show")||(c.modalTrigger=o,k=o,x.show(),t.preventDefault())}),x.content&&x.setContent(x.content),o&&(o.Modal=x)}};n.push(["Modal",W,'[data-toggle="modal"]']);var O=function(i,o){o=o||{};var n=(i=w(i)).getAttribute("data-trigger"),a=i.getAttribute("data-animation"),r=i.getAttribute("data-placement"),l=i.getAttribute("data-dismissible"),d=i.getAttribute("data-delay"),u=i.getAttribute("data-container"),h='<button type="button" class="close">×</button>',f=w(o.container),p=w(u),g=x(i,".modal"),y=x(i,".fixed-top"),k=x(i,".fixed-bottom");this.template=o.template?o.template:null,this.trigger=o.trigger?o.trigger:n||"hover",this.animation=o.animation&&"fade"!==o.animation?o.animation:a||"fade",this.placement=o.placement?o.placement:r||c,this.delay=parseInt(o.delay||d)||200,this.dismissible=!(!o.dismissible&&"true"!==l),this.container=f||(p||(y||(k||(g||e.body))));var C=this,E=i.getAttribute("data-title")||null,D=i.getAttribute("data-content")||null;if(D||this.template){var L=null,q=0,M=this.placement,H=function(t){null!==L&&t.target===w(".close",L)&&C.hide()},W=function(o){"click"!=C.trigger&&"focus"!=C.trigger||!C.dismissible&&o(i,"blur",C.hide),C.dismissible&&o(e,"click",H),o(t,"resize",C.hide)},O=function(){W(T),N.call(i,"shown","popover")},I=function(){W(A),C.container.removeChild(L),q=null,L=null,N.call(i,"hidden","popover")};this.toggle=function(){null===L?C.show():C.hide()},this.show=function(){clearTimeout(q),q=setTimeout(function(){null===L&&(M=C.placement,function(){E=i.getAttribute("data-title"),D=i.getAttribute("data-content"),L=e.createElement("div");var t=e.createElement("div");if(t.setAttribute("class","arrow"),L.appendChild(t),null!==D&&null===C.template){if(L.setAttribute("role","tooltip"),null!==E){var o=e.createElement("h3");o.setAttribute("class","popover-header"),o.innerHTML=C.dismissible?E+h:E,L.appendChild(o)}var n=e.createElement("div");n.setAttribute("class","popover-body"),n.innerHTML=C.dismissible&&null===E?D+h:D,L.appendChild(n)}else{var a=e.createElement("div");a.innerHTML=C.template,L.innerHTML=a.firstChild.innerHTML}C.container.appendChild(L),L.style.display="block",L.setAttribute("class","popover bs-popover-"+M+" "+C.animation)}(),P(i,L,M,C.container),!b(L,"show")&&v(L,"show"),N.call(i,"show","popover"),C.animation?S(L,O):O())},20)},this.hide=function(){clearTimeout(q),q=setTimeout(function(){L&&null!==L&&b(L,"show")&&(N.call(i,"hide","popover"),m(L,"show"),C.animation?S(L,I):I())},C.delay)},"Popover"in i||("hover"===C.trigger?(T(i,s[0],C.show),C.dismissible||T(i,s[1],C.hide)):"click"!=C.trigger&&"focus"!=C.trigger||T(i,C.trigger,C.toggle)),i.Popover=C}};n.push(["Popover",O,'[data-toggle="popover"]']);var I=function(e,i){e=w(e);var o=w(e.getAttribute("data-target")),n=e.getAttribute("data-offset");if((i=i||{}).target||o){for(var a,l=i.target&&w(i.target)||o,c=l&&l.getElementsByTagName("A"),s=parseInt(n||i.offset)||10,d=[],u=[],h=e.offsetHeight<e.scrollHeight?e:t,f=h===t,p=0,g=c.length;p<g;p++){var x=c[p].getAttribute("href"),A=x&&"#"===x.charAt(0)&&"#"!==x.slice(-1)&&w(x);A&&(d.push(c[p]),u.push(A))}var k=function(t){var i=d[t],o=u[t],n=i.parentNode.parentNode,l=b(n,"dropdown")&&n.getElementsByTagName("A")[0],c=f&&o.getBoundingClientRect(),h=b(i,r)||!1,p=(f?c.top+a:o.offsetTop)-s,g=f?c.bottom+a-s:u[t+1]?u[t+1].offsetTop-s:e.scrollHeight,w=a>=p&&g>a;if(!h&&w)b(i,r)||(v(i,r),l&&!b(l,r)&&v(l,r),N.call(e,"activate","scrollspy",d[t]));else if(w){if(!w&&!h||h&&w)return}else b(i,r)&&(m(i,r),l&&b(l,r)&&!y(i.parentNode,r).length&&m(l,r))};this.refresh=function(){!function(){a=f?E().y:e.scrollTop;for(var t=0,i=d.length;t<i;t++)k(t)}()},"ScrollSpy"in e||(T(h,"scroll",this.refresh),T(t,"resize",this.refresh)),this.refresh(),e.ScrollSpy=this}};n.push(["ScrollSpy",I,'[data-spy="scroll"]']);var B=function(t,e){var i=(t=w(t)).getAttribute("data-height");e=e||{},this.height=!!h&&(e.height||"true"===i);var o,n,c,s,d,u,f,p=this,g=x(t,".nav"),A=!1,k=g&&w(".dropdown-toggle",g),C=function(){A.style.height="",m(A,"collapsing"),g.isAnimating=!1},E=function(){A?u?C():setTimeout(function(){A.style.height=f+"px",A.offsetWidth,S(A,C)},50):g.isAnimating=!1,N.call(o,"shown","tab",n)},P=function(){A&&(c.style.float=l,s.style.float=l,d=c.scrollHeight),v(s,r),N.call(o,"show","tab",n),m(c,r),N.call(n,"hidden","tab",o),A&&(f=s.scrollHeight,u=f===d,v(A,"collapsing"),A.style.height=d+"px",A.offsetHeight,c.style.float="",s.style.float=""),b(s,"fade")?setTimeout(function(){v(s,"show"),S(s,E)},20):E()};if(g){g.isAnimating=!1;var D=function(){var t,e=y(g,r);return 1!==e.length||b(e[0].parentNode,"dropdown")?e.length>1&&(t=e[e.length-1]):t=e[0],t},L=function(){return w(D().getAttribute("href"))};this.show=function(){s=w((o=o||t).getAttribute("href")),n=D(),c=L(),g.isAnimating=!0,m(n,r),v(o,r),k&&(b(t.parentNode,"dropdown-menu")?b(k,r)||v(k,r):b(k,r)&&m(k,r)),N.call(n,"hide","tab",o),b(c,"fade")?(m(c,"show"),S(c,P)):P()},"Tab"in t||T(t,"click",function(t){var e=t.target.getAttribute("href");t.preventDefault(),o="tab"===t.target.getAttribute(a)||e&&"#"===e.charAt(0)?t.target:t.target.parentNode,!g.isAnimating&&!b(o,r)&&p.show()}),p.height&&(A=L().parentNode),t.Tab=p}};n.push(["Tab",B,'[data-toggle="tab"]']);var R=function(i,o){o=o||{};var n=(i=w(i)).getAttribute("data-animation"),a=i.getAttribute("data-placement"),r=i.getAttribute("data-delay"),l=i.getAttribute("data-container"),d=w(o.container),u=w(l),h=x(i,".modal"),f=x(i,".fixed-top"),p=x(i,".fixed-bottom");this.animation=o.animation&&"fade"!==o.animation?o.animation:n||"fade",this.placement=o.placement?o.placement:a||c,this.delay=parseInt(o.delay||r)||200,this.container=d||(u||(f||(p||(h||e.body))));var g=this,y=0,k=this.placement,C=null,E=i.getAttribute("title")||i.getAttribute("data-title")||i.getAttribute("data-original-title");if(E&&""!=E){var D=function(){T(t,"resize",g.hide),N.call(i,"shown","tooltip")},L=function(){A(t,"resize",g.hide),g.container.removeChild(C),C=null,y=null,N.call(i,"hidden","tooltip")};this.show=function(){clearTimeout(y),y=setTimeout(function(){if(null===C){if(k=g.placement,0==function(){if(!(E=i.getAttribute("title")||i.getAttribute("data-title")||i.getAttribute("data-original-title"))||""==E)return!1;(C=e.createElement("div")).setAttribute("role","tooltip");var t=e.createElement("div");t.setAttribute("class","arrow"),C.appendChild(t);var o=e.createElement("div");o.setAttribute("class","tooltip-inner"),C.appendChild(o),o.innerHTML=E,g.container.appendChild(C),C.setAttribute("class","tooltip bs-tooltip-"+k+" "+g.animation)}())return;P(i,C,k,g.container),!b(C,"show")&&v(C,"show"),N.call(i,"show","tooltip"),g.animation?S(C,D):D()}},20)},this.hide=function(){clearTimeout(y),y=setTimeout(function(){C&&b(C,"show")&&(N.call(i,"hide","tooltip"),m(C,"show"),g.animation?S(C,L):L())},g.delay)},this.toggle=function(){C?g.hide():g.show()},"Tooltip"in i||(i.setAttribute("data-original-title",E),i.removeAttribute("title"),T(i,s[0],g.show),T(i,s[1],g.hide)),i.Tooltip=g}};n.push(["Tooltip",R,'[data-toggle="tooltip"]']);var z=function(t,e){for(var i=0,o=e.length;i<o;i++)new t(e[i])},U=o.initCallback=function(t){t=t||e;for(var i=0,o=n.length;i<o;i++)z(n[i][1],t.querySelectorAll(n[i][2]))};return e.body?U():T(e,"DOMContentLoaded",function(){U()}),{Alert:D,Button:L,Carousel:q,Collapse:M,Dropdown:H,Modal:W,Popover:O,ScrollSpy:I,Tab:B,Tooltip:R}});var lookDirection=120,eyeShadow=5,mouthOpen=20,eyebrowExcite=140,eyeUpDown=85,shirtColor="rgb("+Math.floor(125*Math.random())+","+Math.floor(125*Math.random())+","+Math.floor(125*Math.random())+")",mouthRand=Math.floor(50*Math.random()),W=H=1e3,canvas=document.getElementById("face");canvas.width=W-120,canvas.height=H,canvas.style.position="relative",canvas.style.width="400px",canvas.style.height="auto";var ctx=canvas.getContext("2d");function drawFace(){ctx.rect(0,0,canvas.width,canvas.height),ctx.save(),ctx.translate(canvas.width/2,canvas.height/2),ctx.beginPath(),ctx.fillStyle="#6A4E42",ctx.strokeStyle="#000000",ctx.lineWidth=5,ctx.moveTo(-270,-330),ctx.bezierCurveTo(-350,300,350,300,270,-330),ctx.quadraticCurveTo(0,-600,-270,-330),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.fillStyle=shirtColor,ctx.moveTo(0,300),ctx.quadraticCurveTo(-300,300,-420,500),ctx.lineTo(420,500),ctx.quadraticCurveTo(300,300,-0,300),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.fillStyle="#DDA8A0",ctx.moveTo(-160,0),ctx.lineTo(-160,350),ctx.quadraticCurveTo(0,600,160,350),ctx.lineTo(160,0),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.moveTo(-50,-320),ctx.quadraticCurveTo(-270,-320,-270,-100),ctx.quadraticCurveTo(-310,225,-100,300),ctx.quadraticCurveTo(0,350,100,300),ctx.quadraticCurveTo(310,225,270,-100),ctx.quadraticCurveTo(270,-320,-50,-320),ctx.fill(),ctx.stroke(),ctx.clip(),ctx.beginPath(),ctx.fillStyle="#6A4E42",ctx.moveTo(-280,0),ctx.quadraticCurveTo(-310,225,-100,300),ctx.quadraticCurveTo(0,350,100,300),ctx.quadraticCurveTo(310,225,280,0),ctx.bezierCurveTo(250,180,-250,180,-280,0),ctx.stroke(),ctx.fill(),ctx.beginPath(),ctx.moveTo(20,-50),ctx.quadraticCurveTo(60,0,60,120),ctx.lineTo(0,120),ctx.stroke(),ctx.beginPath(),ctx.fillStyle="#000000",ctx.strokeStyle="#DDA8A0",ctx.lineWidth=5,ctx.moveTo(-100,150+mouthRand),ctx.quadraticCurveTo(0,220,100,150+mouthRand),ctx.quadraticCurveTo(0,220+mouthOpen,-100,150+mouthRand),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle="#6A4E42",ctx.lineWidth=15,ctx.moveTo(-200,-140),ctx.quadraticCurveTo(-100,-160,-50,-eyebrowExcite),ctx.moveTo(200,-140),ctx.quadraticCurveTo(100,-160,50,-eyebrowExcite),ctx.stroke(),ctx.beginPath(),ctx.strokeStyle="#000000",ctx.lineWidth=5,ctx.moveTo(-200-eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(-100-eyeShadow,-160-eyeShadow,-50+eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(-80,-30+eyeShadow,-200-eyeShadow,-80+eyeShadow),ctx.moveTo(200+eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(100+eyeShadow,-160-eyeShadow,50-eyeShadow,-80-eyeShadow),ctx.quadraticCurveTo(80,-30+eyeShadow,200+eyeShadow,-80+eyeShadow),ctx.fill(),ctx.fillStyle="#ffffff",ctx.beginPath(),ctx.moveTo(-200,-80),ctx.quadraticCurveTo(-100,-160,-50,-80),ctx.quadraticCurveTo(-100,-30,-200,-80),ctx.moveTo(200,-80),ctx.quadraticCurveTo(100,-160,50,-80),ctx.quadraticCurveTo(100,-30,200,-80),ctx.fill(),ctx.clip(),ctx.beginPath(),ctx.fillStyle="#786060",ctx.arc(lookDirection-225,-eyeUpDown,30,0,2*Math.PI,!0),ctx.fill(),ctx.stroke(),ctx.beginPath(),ctx.arc(lookDirection,-eyeUpDown,30,0,2*Math.PI,!0),ctx.fill(),ctx.stroke(),ctx.restore()}function getMousePos(t,e){return{x:e.clientX,y:e.clientY}}var origOrientation=[];function deviceOrientation(t){origOrientation=[5*-t.gamma,5*-t.beta],window.removeEventListener("deviceorientation",deviceOrientation,!1)}function handleOrientation(t){return{x:5*-t.gamma-(origOrientation[0]-window.innerWidth/2),y:5*-t.beta-(origOrientation[1]-window.innerHeight/2)}}function resetOrientation(){window.addEventListener("deviceorientation",deviceOrientation,!1)}resetOrientation();var m,targetPos={x:window.innerWidth/2,y:window.innerHeight/2};function excite(){mouthOpen<=20&&(m=1),mouthOpen>=190&&(m=-20),mouthOpen+=m,eyebrowExcite+=m/4}window.addEventListener("mousemove",function(t){targetPos=getMousePos(window,t)},!1),window.addEventListener("deviceorientation",function(t){targetPos={x:handleOrientation(t).x,y:handleOrientation(t).y}},!1),drawFace();var oldTargetPos=targetPos,faceTiming=setInterval(function(){return function(){lookDirection=60+100*targetPos.x/window.innerWidth,eyeUpDown=105-100*(targetPos.y-(canvas.offsetTop-window.pageYOffset))/window.innerHeight,(Math.abs(oldTargetPos.x-targetPos.x)>2||Math.abs(oldTargetPos.y-targetPos.y)>2)&&excite(),drawFace(),oldTargetPos=targetPos}}(),20);