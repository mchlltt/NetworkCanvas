var Menu=function n(o){function t(n,o){for(var t in o)o.hasOwnProperty(t)&&(n[t]=o[t]);return n}var e={},i=[],s=!1,a=$(".menu-container");return e.options={onBeforeOpen:function(){$(".arrow-right").transition({right:-550}),$(".arrow-left").transition({left:-550}),$(".content").addClass("pushed")},onAfterOpen:function(){return!1},onBeforeClose:function(){$(".content").removeClass("pushed")},onAfterClose:function(){$(".arrow-right").transition({right:0},1e3),$(".arrow-left").transition({left:0},1e3)}},e.getMenus=function(){return i},e.closeMenu=function(n){n.items.find(".icon-close").trigger("click")},e.toggle=function(n){var o=n.button[0].getBoundingClientRect();console.log(o);var t=$("."+n.name+"-menu"),i=$("."+n.name+"-menu-container");return console.log(t),t.addClass("no-transition"),t[0].style.left="auto",t[0].style.top="auto",s===!0?(console.log("already isAnimating"),!1):(s=!0,n.expanded===!0?(console.log("closing"),e.options.onBeforeClose(),i.removeClass("active"),e.options.onAfterClose(),s=!1):($(".menu-btn").transition({opacity:0}),$(".menu-btn").hide(),console.log("opening"),e.options.onBeforeOpen(),i.addClass("active"),e.options.onAfterOpen(),s=!1),void setTimeout(function(){t[0].style.left=o.left+"px",t[0].style.top=o.top+"px",n.expanded===!0?(console.log("expanded already"),t.removeClass("no-transition"),i.removeClass("open"),n.expanded=!1,$(".menu-btn").transition({opacity:1})):setTimeout(function(){t.removeClass("no-transition"),i.addClass("open"),n.expanded=!0},25)},25))},e.addMenu=function(n,o){var t={};t.name=n,t.expanded=!1,t.button=$('<span class="hi-icon menu-btn '+n+'" style="opacity:0"></span>'),t.button.addClass(o).html(n),a.append(t.button),t.button.css({top:-300});var s=n+"-menu",r=n+"-menu-container";return t.items=$('<div class="morph-button morph-button-sidebar morph-button-fixed '+r+'"><div class="morph-content '+s+'"><div><div class="content-style-sidebar"><span class="icon icon-close">Close the overlay</span><h2>'+n+"</h2><ul></ul></div></div></div></div>"),t.button.after(t.items),t.button.on("click",function(){e.toggle(t)}),console.log(t.items.find(".icon-close")),t.items.find(".icon-close").on("click",function(){$(".menu-btn").show(),e.toggle(t)}),i.push(t),t.button.transition({top:0,opacity:1},1e3),t},e.removeMenu=function(n){console.log("removing menu"),n.button.transition({top:-300,opacity:0},1e3,function(){$(n.button).remove(),$(n.items).remove()})},e.addItem=function(n,o,t,i){var s=$('<li><a class="icon icon-server '+t+'" href="#">'+o+"</a></li>");n.items.find("ul").append(s),s.on("click",function(){i(),e.closeMenu(n)})},e.init=function(){t(e.options,o)},e.init(),e};
//# sourceMappingURL=./menu-min.map