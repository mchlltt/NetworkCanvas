"use strict";var Canvas=function e(t){function o(e,t,o){for(;1.1*e.width()<t.width()-2*o;)e.fontSize(1.1*e.fontSize()),e.y((t.height()-e.height())/2);e.setX(t.getX()-e.getWidth()/2),e.setY(t.getY()-e.getHeight()/1.8)}var n,i,r,d,a,s={},c,l=[],g,f=!1,w=!1,v=!1,u={blue:"#0174DF",placidblue:"#83b5dd",violettulip:"#9B90C8",hemlock:"#9eccb3",paloma:"#aab1b0",freesia:"#ffd600",cayenne:"#c40000",celosiaorange:"#f47d44",sand:"#ceb48d",dazzlingblue:"#006bb6",edge:"#e85657",selected:"gold"},h={defaultNodeSize:35,defaultNodeColor:u.blue,defaultEdgeColor:u.edge,concentricCircleColor:"#ffffff",concentricCircleNumber:4,criteria:{from:network.getNodes({type_t0:"Ego"})[0].id},nodeTypes:[{name:"Person",color:u.blue},{name:"OnlinePerson",color:u.hemlock},{name:"Organisation",color:u.cayenne},{name:"Professional",color:u.violettulip}]},p=function(e){s.addNode(e.detail)},m=function(e){"undefined"!=typeof e.detail.from&&e.detail.from!==network.getNodes({type_t0:"Ego"})[0].id&&s.addEdge(e.detail)},y=function(e){s.removeNode(e.detail)},k=function(e){s.removeEdge(e.detail)},E=function(){var e=$(".info-button").offset(),t=$(".canvas-title").offset();$(".canvas-title").data("oldPos",t),$(".canvas-title").css({position:"absolute"}),$(".canvas-title").offset(t),$(".canvas-title").children().hide(),$(".canvas-title").addClass("closed"),$(".canvas-title").offset(e),setTimeout(function(){$(".canvas-popover").hide(),$(".info-button").css("visibility","visible")},500)},b=function(){$(".info-button").css("visibility","hidden"),$(".canvas-popover").show(),$(".canvas-title").offset($(".canvas-title").data("oldPos")),$(".canvas-title").removeClass("closed"),setTimeout(function(){$(".canvas-title").children().show()},500)},C=function(e){if(!w&&(f||($(".new-node-form").addClass("node-form-open"),$(".content").addClass("blurry"),f=!0,$(".name-box").focus()),8!==e.which||$(e.target).is("input, textarea, div")||e.preventDefault(),13===event.which)){$(".new-node-form").removeClass("node-form-open"),$(".content").removeClass("blurry"),f=!1;var t={label:$(".name-box").val()};network.addNode(t),$(".name-box").val("")}},N=function(){s.destroy()};return s.init=function(){notify("Canvas initialising.",1),extend(h,t),$('<div class="canvas-title"><h3>'+h.heading+'</h3><p class="lead">'+h.subheading+"</p></div>").insertBefore("#kineticCanvas"),s.initKinetic(),window.addEventListener("nodeAdded",p,!1),window.addEventListener("edgeAdded",m,!1),window.addEventListener("nodeRemoved",y,!1),window.addEventListener("edgeRemoved",k,!1),window.addEventListener("changeStageStart",N,!1),$(".close-popover").on("click",E),$(".info-button").on("click",b);for(var e=network.getEdges(h.criteria),o=0;o<e.length;o++){var n=network.getEdges({from:e[o].from,to:e[o].to,type:"Dyad"})[0],i=s.addNode(n);if("Select"===h.mode)if(h.variable){var r={from:network.getNodes({type_t0:"Ego"})[0].id,to:e[o].to};r[h.variable]=1,network.getEdges(r).length>0&&(i.children[0].stroke(u.selected),d.draw())}else network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e[o].to,type:h.edgeType}).length>0&&(i.children[0].stroke(u.selected),d.draw())}setTimeout(function(){s.drawUIComponents()},0);var a,c;"Edge"===h.mode?(c={type:h.edgeType},a=network.getEdges(c,function(e){var t=[];return $.each(e,function(e,o){o.from!==network.getNodes({type_t0:"Ego"})[0].id&&o.to!==network.getNodes({type_t0:"Ego"})[0].id&&t.push(o)}),t}),$.each(a,function(e,t){s.addEdge(t)})):"Select"===h.mode?(c={},c=h.showEdge?{type:h.showEdge}:{type:"Dyad"},a=network.getEdges(c,function(e){var t=[];return $.each(e,function(e,o){o.from!==network.getNodes({type_t0:"Ego"})[0].id&&o.to!==network.getNodes({type_t0:"Ego"})[0].id&&t.push(o)}),t}),$.each(a,function(e,t){s.addEdge(t)})):"Position"===h.mode},s.destroy=function(){$(".new-node-form").remove(),window.removeEventListener("nodeAdded",p,!1),window.removeEventListener("edgeAdded",m,!1),window.removeEventListener("nodeRemoved",y,!1),window.removeEventListener("edgeRemoved",k,!1),window.removeEventListener("changeStageStart",N,!1),$(document).off("keypress",C),$(".close-popover").off("click",E),$(".info-button").off("click",b)},s.resetPositions=function(){for(var e=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,type:"Dyad"}),t=0;t<e.length;t++)network.updateEdge(e[t].id,{coords:[]})},s.addNode=function(e){notify("Canvas is creating a node.",2);for(var t,n=0;network.getNode(n)!==!1;)n++;var i=!1;("Position"===h.mode||"Edge"===h.mode)&&(i=!0),e.label=e.nname_t0;var a={coords:[$(window).width()+50,100],id:n,label:"Undefined",size:h.defaultNodeSize,color:"rgb(0,0,0)",strokeWidth:4,draggable:i,dragDistance:20};extend(a,e),a.id=parseInt(a.id,10),a.type="Person",a.x=a.coords[0],a.y=a.coords[1];var f=new Kinetic.Group(a);switch(a.type){case"Person":t=new Kinetic.Circle({radius:a.size,fill:a.color,stroke:"white",strokeWidth:a.strokeWidth});break;case"Organisation":t=new Kinetic.Rect({width:2*a.size,height:2*a.size,fill:a.color,stroke:s.calculateStrokeColor(a.color),strokeWidth:a.strokeWidth});break;case"OnlinePerson":t=new Kinetic.RegularPolygon({sides:3,fill:a.color,radius:1.2*a.size,stroke:s.calculateStrokeColor(a.color),strokeWidth:a.strokeWidth});break;case"Professional":t=new Kinetic.Star({numPoints:6,fill:a.color,innerRadius:a.size-a.size/3,outerRadius:a.size+a.size/3,stroke:s.calculateStrokeColor(a.color),strokeWidth:a.strokeWidth})}var w=new Kinetic.Text({text:a.label,fontFamily:"Lato",fill:"white",align:"center",fontStyle:500});if(notify("Putting node "+a.label+" at coordinates x:"+a.coords[0]+", y:"+a.coords[1],2),f.on("dragstart",function(){if(v===!1){var e={stage:session.currentStage(),timestamp:new Date};g=new CustomEvent("log",{detail:{eventType:"taskComprehended",eventObject:e}}),window.dispatchEvent(g),v=!0}notify("dragstart",1),this.attrs.oldx=this.attrs.x,this.attrs.oldy=this.attrs.y,this.moveToTop(),d.draw()}),f.on("dragmove",function(){if(v===!1){var e={stage:session.currentStage(),timestamp:new Date};g=new CustomEvent("log",{detail:{eventType:"taskComprehended",eventObject:e}}),window.dispatchEvent(g),v=!0}notify("Dragmove",0);var t=a.id;$.each(r.children,function(e,o){if(o.attrs.from.id===t||o.attrs.to.id===t){var n=[s.getNodeByID(o.attrs.from.id).getX(),s.getNodeByID(o.attrs.from.id).getY(),s.getNodeByID(o.attrs.to.id).getX(),s.getNodeByID(o.attrs.to.id).getY()];o.attrs.points=n}}),r.draw()}),f.on("tap click",function(){if(v===!1){var e={stage:session.currentStage(),timestamp:new Date};g=new CustomEvent("log",{detail:{eventType:"taskComprehended",eventObject:e}}),window.dispatchEvent(g),v=!0}g=new CustomEvent("log",{detail:{eventType:"nodeClick",eventObject:this.attrs.id}});var t=this;if(window.dispatchEvent(g),"Select"===h.mode){var o;if(h.variable){var n={},i=network.getEdge(t.attrs.id)[h.variable];0===i||"undefined"==typeof i?(n[h.variable]=1,t.children[0].stroke(u.selected)):(n[h.variable]=0,t.children[0].stroke("white")),network.setProperties(network.getEdge(t.attrs.id),n)}else network.getEdges({type:h.edgeType,from:network.getNodes({type_t0:"Ego"})[0].id,to:this.attrs.to}).length>0?(this.children[0].stroke("white"),network.removeEdge(network.getEdges({type:h.edgeType,from:network.getNodes({type_t0:"Ego"})[0].id,to:this.attrs.to})[0])):(o={from:network.getNodes({type_t0:"Ego"})[0].id,to:this.attrs.to,type:h.edgeType},"undefined"!=typeof h.variables&&$.each(h.variables,function(e,t){o[t.label]=t.value}),this.children[0].stroke(u.selected),network.addEdge(o))}else if("Edge"===h.mode){if(l[0]===this)return!1;if(l.push(this),2===l.length){l[1].children[0].stroke("white"),l[0].children[0].stroke("white");var r={from:l[0].attrs.to,to:l[1].attrs.to,type:h.edgeType};r[h.variables[0]]="perceived",network.addEdge(r)===!1&&(notify("Canvas removing edge.",2),network.removeEdge(network.getEdges(r))),l=[],d.draw()}else this.children[0].stroke(u.selected),d.draw()}this.moveToTop(),d.draw()}),f.on("dbltap dblclick",function(){if(v===!1){var e={stage:session.currentStage(),timestamp:new Date};g=new CustomEvent("log",{detail:{eventType:"taskComprehended",eventObject:e}}),window.dispatchEvent(g),v=!0}"Edge"===h.mode&&(notify("double tap",1),c=this)}),f.on("dragend",function(){notify("dragend",1);var e={},t={};e.x=this.attrs.oldx,e.y=this.attrs.oldy,t.x=this.attrs.x,t.y=this.attrs.y;var o={from:e,to:t},n=this;g=new CustomEvent("log",{detail:{eventType:"nodeMove",eventObject:o}}),window.dispatchEvent(g),network.setProperties(network.getEdge(n.attrs.id),{coords:[n.attrs.x,n.attrs.y]}),delete this.attrs.oldx,delete this.attrs.oldy}),o(w,t,10),f.add(t),f.add(w),d.add(f),setTimeout(function(){d.draw()},0),!e.coords||0===e.coords.length){var p=new Kinetic.Tween({node:f,x:$(window).width()-150,y:100,duration:.7,easing:Kinetic.Easings.EaseOut});p.play(),network.setProperties(network.getNode(a.id),{coords:[$(window).width()-150,100]})}return f},s.addEdge=function(e){notify("Canvas is adding an edge.",2);var t=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e.to,type:"Dyad"})[0],o=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e.from,type:"Dyad"})[0],n=[o.coords[0],o.coords[1],t.coords[0],t.coords[1]],i=new Kinetic.Line({strokeWidth:4,opacity:1,stroke:h.defaultEdgeColor,from:o,to:t,points:n});return r.add(i),setTimeout(function(){r.draw()},0),d.draw(),notify("Created Edge between "+o.label+" and "+t.label,"success",2),!0},s.removeEdge=function(e){var t=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e.to,type:"Dyad"})[0],o=network.getEdges({from:network.getNodes({type_t0:"Ego"})[0].id,to:e.from,type:"Dyad"})[0];notify("Removing edge."),$.each(s.getKineticEdges(),function(e,n){(n.attrs.from===o&&n.attrs.to===t||n.attrs.from===t&&n.attrs.to===o)&&(r.children[e].remove(),r.draw())})},s.clearGraph=function(){r.removeChildren(),r.clear(),d.removeChildren(),d.clear()},s.initKinetic=function(){n=new Kinetic.Stage({container:"kineticCanvas",width:window.innerWidth,height:window.innerHeight}),i=new Kinetic.Layer,d=new Kinetic.Layer,r=new Kinetic.Layer,a=new Kinetic.Layer,n.add(i),n.add(r),n.add(d),n.add(a),notify("Kinetic stage initialised.",1)},s.drawUIComponents=function(){for(var e,t,o=h.concentricCircleColor,n=window.innerHeight-h.defaultNodeSize,r=.1,d=0;d<h.concentricCircleNumber;d++){var s=1-d/h.concentricCircleNumber,c=n/2*s;t=new Kinetic.Circle({x:window.innerWidth/2,y:window.innerHeight/2,radius:c,stroke:"white",strokeWidth:1.5,opacity:0}),e=new Kinetic.Circle({x:window.innerWidth/2,y:window.innerHeight/2,radius:c,fill:o,opacity:r,strokeWidth:0}),r+=(.3-r)/h.concentricCircleNumber,i.add(e),i.add(t)}i.draw(),a.draw(),notify("User interface initialised.",1)},s.initNewNodeForm=function(){var e=$('<div class="new-node-form"></div>'),t=$('<div class="new-node-inner"></div>');e.append(t),t.append("<h1>Add a new contact</h1>"),t.append("<p>Some text accompanying the node creation box.</p>"),t.append('<input type="text" class="form-control name-box"></input>'),$(".content").after(e),$(document).on("keypress",C)},s.getKineticNodes=function(){return d.children},s.getKineticEdges=function(){return r.children},s.getSimpleNodes=function(){var e={},t=s.getKineticNodes();return $.each(t,function(t,o){e[o.attrs.id]={},e[o.attrs.id].x=o.attrs.x,e[o.attrs.id].y=o.attrs.y,e[o.attrs.id].name=o.attrs.name,e[o.attrs.id].type=o.attrs.type,e[o.attrs.id].size=o.attrs.size,e[o.attrs.id].color=o.attrs.color}),e},s.getSimpleEdges=function(){var e={},t=0;return $.each(r.children,function(o,n){e[t]={},e[t].from=n.attrs.from.attrs.id,e[t].to=n.attrs.to.attrs.id,t++}),e},s.getSimpleEdge=function(e){var t=s.getSimpleEdges();if(!e)return!1;var o=t[e];return o},s.getEdgeLayer=function(){return r},s.getNodeByID=function(e){var t={},o=s.getKineticNodes();return $.each(o,function(o,n){n.attrs.id===e&&(t=n)}),t},s.getNodeColorByType=function(e){var t=null;return $.each(h.nodeTypes,function(o,n){n.name===e&&(t=n.color)}),t?t:!1},s.init(),s};