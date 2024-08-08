/*! jQuery UI - v1.14.0 - 2024-08-05
* https://jqueryui.com
* Includes: widget.js, data.js, scroll-parent.js, widgets/draggable.js, widgets/mouse.js
* Copyright OpenJS Foundation and other contributors; Licensed MIT */

!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(b){b.ui=b.ui||{};b.ui.version="1.14.0";var o,s=0,r=Array.prototype.hasOwnProperty,a=Array.prototype.slice,n=(b.cleanData=(o=b.cleanData,function(t){for(var e,s,i=0;null!=(s=t[i]);i++)(e=b._data(s,"events"))&&e.remove&&b(s).triggerHandler("remove");o(t)}),b.widget=function(t,s,e){var i,o,n,r={},a=t.split(".")[0],l=a+"-"+(t=t.split(".")[1]);return e||(e=s,s=b.Widget),Array.isArray(e)&&(e=b.extend.apply(null,[{}].concat(e))),b.expr.pseudos[l.toLowerCase()]=function(t){return!!b.data(t,l)},b[a]=b[a]||{},i=b[a][t],o=b[a][t]=function(t,e){if(!this||!this._createWidget)return new o(t,e);arguments.length&&this._createWidget(t,e)},b.extend(o,i,{version:e.version,_proto:b.extend({},e),_childConstructors:[]}),(n=new s).options=b.widget.extend({},n.options),b.each(e,function(e,i){function o(){return s.prototype[e].apply(this,arguments)}function n(t){return s.prototype[e].apply(this,t)}r[e]="function"!=typeof i?i:function(){var t,e=this._super,s=this._superApply;return this._super=o,this._superApply=n,t=i.apply(this,arguments),this._super=e,this._superApply=s,t}}),o.prototype=b.widget.extend(n,{widgetEventPrefix:i&&n.widgetEventPrefix||t},r,{constructor:o,namespace:a,widgetName:t,widgetFullName:l}),i?(b.each(i._childConstructors,function(t,e){var s=e.prototype;b.widget(s.namespace+"."+s.widgetName,o,e._proto)}),delete i._childConstructors):s._childConstructors.push(o),b.widget.bridge(t,o),o},b.widget.extend=function(t){for(var e,s,i=a.call(arguments,1),o=0,n=i.length;o<n;o++)for(e in i[o])s=i[o][e],r.call(i[o],e)&&void 0!==s&&(b.isPlainObject(s)?t[e]=b.isPlainObject(t[e])?b.widget.extend({},t[e],s):b.widget.extend({},s):t[e]=s);return t},b.widget.bridge=function(n,e){var r=e.prototype.widgetFullName||n;b.fn[n]=function(s){var t="string"==typeof s,i=a.call(arguments,1),o=this;return t?this.length||"instance"!==s?this.each(function(){var t,e=b.data(this,r);return"instance"===s?(o=e,!1):e?"function"!=typeof e[s]||"_"===s.charAt(0)?b.error("no such method '"+s+"' for "+n+" widget instance"):(t=e[s].apply(e,i))!==e&&void 0!==t?(o=t&&t.jquery?o.pushStack(t.get()):t,!1):void 0:b.error("cannot call methods on "+n+" prior to initialization; attempted to call method '"+s+"'")}):o=void 0:(i.length&&(s=b.widget.extend.apply(null,[s].concat(i))),this.each(function(){var t=b.data(this,r);t?(t.option(s||{}),t._init&&t._init()):b.data(this,r,new e(s,this))})),o}},b.Widget=function(){},b.Widget._childConstructors=[],b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=b(e||this.defaultElement||this)[0],this.element=b(e),this.uuid=s++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=b(),this.hoverable=b(),this.focusable=b(),this.classesElementLookup={},e!==this&&(b.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=b(e.style?e.ownerDocument:e.document||e),this.window=b(this.document[0].defaultView||this.document[0].parentWindow)),this.options=b.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:b.noop,_create:b.noop,_init:b.noop,destroy:function(){var s=this;this._destroy(),b.each(this.classesElementLookup,function(t,e){s._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:b.noop,widget:function(){return this.element},option:function(t,e){var s,i,o,n=t;if(0===arguments.length)return b.widget.extend({},this.options);if("string"==typeof t)if(n={},t=(s=t.split(".")).shift(),s.length){for(i=n[t]=b.widget.extend({},this.options[t]),o=0;o<s.length-1;o++)i[s[o]]=i[s[o]]||{},i=i[s[o]];if(t=s.pop(),1===arguments.length)return void 0===i[t]?null:i[t];i[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];n[t]=e}return this._setOptions(n),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,s,i;for(e in t)i=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&i&&i.length&&(s=b(i.get()),this._removeClass(i,e),s.addClass(this._classes({element:s,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(o){var n=[],r=this;function t(t,e){for(var s,i=0;i<t.length;i++)s=r.classesElementLookup[t[i]]||b(),s=o.add?(function(){var s=[];o.element.each(function(t,e){b.map(r.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||s.push(e)}),r._on(b(s),{remove:"_untrackClassesElement"})}(),b(b.uniqueSort(s.get().concat(o.element.get())))):b(s.not(o.element).get()),r.classesElementLookup[t[i]]=s,n.push(t[i]),e&&o.classes[t[i]]&&n.push(o.classes[t[i]])}return(o=b.extend({element:this.element,classes:this.options.classes||{}},o)).keys&&t(o.keys.match(/\S+/g)||[],!0),o.extra&&t(o.extra.match(/\S+/g)||[]),n.join(" ")},_untrackClassesElement:function(s){var i=this;b.each(i.classesElementLookup,function(t,e){-1!==b.inArray(s.target,e)&&(i.classesElementLookup[t]=b(e.not(s.target).get()))}),this._off(b(s.target))},_removeClass:function(t,e,s){return this._toggleClass(t,e,s,!1)},_addClass:function(t,e,s){return this._toggleClass(t,e,s,!0)},_toggleClass:function(t,e,s,i){var o="string"==typeof t||null===t,e={extra:o?e:s,keys:o?t:e,element:o?this.element:t,add:i="boolean"==typeof i?i:s};return e.element.toggleClass(this._classes(e),i),this},_on:function(o,n,t){var r,a=this;"boolean"!=typeof o&&(t=n,n=o,o=!1),t?(n=r=b(n),this.bindings=this.bindings.add(n)):(t=n,n=this.element,r=this.widget()),b.each(t,function(t,e){function s(){if(o||!0!==a.options.disabled&&!b(this).hasClass("ui-state-disabled"))return("string"==typeof e?a[e]:e).apply(a,arguments)}"string"!=typeof e&&(s.guid=e.guid=e.guid||s.guid||b.guid++);var t=t.match(/^([\w:-]*)\s*(.*)$/),i=t[1]+a.eventNamespace,t=t[2];t?r.on(i,t,s):n.on(i,s)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=b(this.bindings.not(t).get()),this.focusable=b(this.focusable.not(t).get()),this.hoverable=b(this.hoverable.not(t).get())},_delay:function(t,e){var s=this;return setTimeout(function(){return("string"==typeof t?s[t]:t).apply(s,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(b(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(b(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(b(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(b(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,s){var i,o,n=this.options[t];if(s=s||{},(e=b.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],o=e.originalEvent)for(i in o)i in e||(e[i]=o[i]);return this.element.trigger(e,s),!("function"==typeof n&&!1===n.apply(this.element[0],[e].concat(s))||e.isDefaultPrevented())}},b.each({show:"fadeIn",hide:"fadeOut"},function(n,r){b.Widget.prototype["_"+n]=function(e,t,s){var i,o=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||r:n;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),i=!b.isEmptyObject(t),t.complete=s,t.delay&&e.delay(t.delay),i&&b.effects&&b.effects.effect[o]?e[n](t):o!==n&&e[o]?e[o](t.duration,t.easing,s):e.queue(function(t){b(this)[n](),s&&s.call(e[0]),t()})}}),b.widget,b.extend(b.expr.pseudos,{data:b.expr.createPseudo(function(e){return function(t){return!!b.data(t,e)}})}),b.fn.scrollParent=function(t){var e=this.css("position"),s="absolute"===e,i=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=b(this);return(!s||"static"!==t.css("position"))&&i.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:b(this[0].ownerDocument||document)},!1);b(document).on("mouseup",function(){n=!1}),b.widget("ui.mouse",{version:"1.14.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(t){if(!0===b.data(t.target,e.widgetName+".preventClickEvent"))return b.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){var e,s,i;if(!n)return this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),s=1===(this._mouseDownEvent=t).which,i="string"==typeof(e=this).options.cancel&&b(t.target).closest(this.options.cancel).length,s&&!i&&this._mouseCapture(t)&&(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?t.preventDefault():(!0===b.data(t.target,this.widgetName+".preventClickEvent")&&b.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),n=!0)),!0},_mouseMove:function(t){if(this._mouseMoved&&!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t);return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&b.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,n=!1,t.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),b.ui.plugin={add:function(t,e,s){var i,o=b.ui[t].prototype;for(i in s)o.plugins[i]=o.plugins[i]||[],o.plugins[i].push([e,s[i]])},call:function(t,e,s,i){var o,n=t.plugins[e];if(n&&(i||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0;o<n.length;o++)t.options[n[o][0]]&&n[o][1].apply(t.element,s)}},b.widget("ui.draggable",b.ui.mouse,{version:"1.14.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<b(t.target).closest(".ui-resizable-handle").length||(this.handle=this._getHandle(t),!this.handle)||(this._blurActiveElement(t),this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=b(this);return b("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=this.document[0].activeElement;b(t.target).closest(e).length||b(e).trigger("blur")},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),b.ui.ddmanager&&(b.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===b(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),b.ui.ddmanager&&!e.dropBehaviour&&b.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),b.ui.ddmanager&&b.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){e=this._uiHash();if(!1===this._trigger("drag",t,e))return this._mouseUp(new b.Event("mouseup",t)),!1;this.position=e.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",b.ui.ddmanager&&b.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,s=!1;return b.ui.ddmanager&&!this.options.dropBehaviour&&(s=b.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||!0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,s)?b(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),b.ui.ddmanager&&b.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.trigger("focus"),b.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new b.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!b(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(t){var e=this.options,s="function"==typeof e.helper,t=s?b(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return t.parents("body").length||t.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),s&&t[0]===this.element[0]&&this._setPositionRelative(),t[0]===this.element[0]||/(fixed|absolute)/.test(t.css("position"))||t.css("position","absolute"),t},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),"left"in(t=Array.isArray(t)?{left:+t[0],top:+t[1]||0}:t)&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&b.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),{top:(t=this._isRootNode(this.offsetParent[0])?{top:0,left:0}:t).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){var t,e;return"relative"!==this.cssPosition?{top:0,left:0}:(t=this.element.position(),e=this._isRootNode(this.scrollParent[0]),{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())})},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e=this.options,s=this.document[0];this.relativeContainer=null,e.containment?"window"===e.containment?this.containment=[b(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,b(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,b(window).scrollLeft()+b(window).width()-this.helperProportions.width-this.margins.left,b(window).scrollTop()+(b(window).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:"document"===e.containment?this.containment=[0,0,b(s).width()-this.helperProportions.width-this.margins.left,(b(s).height()||s.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:e.containment.constructor===Array?this.containment=e.containment:("parent"===e.containment&&(e.containment=this.helper[0].parentNode),(e=(s=b(e.containment))[0])&&(t=/(scroll|auto)/.test(s.css("overflow")),this.containment=[(parseInt(s.css("borderLeftWidth"),10)||0)+(parseInt(s.css("paddingLeft"),10)||0),(parseInt(s.css("borderTopWidth"),10)||0)+(parseInt(s.css("paddingTop"),10)||0),(t?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(s.css("borderRightWidth"),10)||0)-(parseInt(s.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(s.css("borderBottomWidth"),10)||0)-(parseInt(s.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=s)):this.containment=null},_convertPositionTo:function(t,e){e=e||this.position;var t="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*t+this.offset.parent.top*t-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*t,left:e.left+this.offset.relative.left*t+this.offset.parent.left*t-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*t}},_generatePosition:function(t,e){var s,i=this.options,o=this._isRootNode(this.scrollParent[0]),n=t.pageX,r=t.pageY;return o&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),{top:(r=e&&(this.containment&&(s=this.relativeContainer?(e=this.relativeContainer.offset(),[this.containment[0]+e.left,this.containment[1]+e.top,this.containment[2]+e.left,this.containment[3]+e.top]):this.containment,t.pageX-this.offset.click.left<s[0]&&(n=s[0]+this.offset.click.left),t.pageY-this.offset.click.top<s[1]&&(r=s[1]+this.offset.click.top),t.pageX-this.offset.click.left>s[2]&&(n=s[2]+this.offset.click.left),t.pageY-this.offset.click.top>s[3])&&(r=s[3]+this.offset.click.top),i.grid&&(e=i.grid[1]?this.originalPageY+Math.round((r-this.originalPageY)/i.grid[1])*i.grid[1]:this.originalPageY,r=!s||e-this.offset.click.top>=s[1]||e-this.offset.click.top>s[3]?e:e-this.offset.click.top>=s[1]?e-i.grid[1]:e+i.grid[1],t=i.grid[0]?this.originalPageX+Math.round((n-this.originalPageX)/i.grid[0])*i.grid[0]:this.originalPageX,n=!s||t-this.offset.click.left>=s[0]||t-this.offset.click.left>s[2]?t:t-this.offset.click.left>=s[0]?t-i.grid[0]:t+i.grid[0]),"y"===i.axis&&(n=this.originalPageX),"x"===i.axis)?this.originalPageY:r)-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:o?0:this.offset.scroll.top),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:o?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,s){return s=s||this._uiHash(),b.ui.plugin.call(this,t,[e,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),b.Widget.prototype._trigger.call(this,t,e,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),b.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,s){var i=b.extend({},t,{item:s.element});s.sortables=[],b(s.options.connectToSortable).each(function(){var t=b(this).sortable("instance");t&&!t.options.disabled&&(s.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,i))})},stop:function(e,t,s){var i=b.extend({},t,{item:s.element});s.cancelHelperRemoval=!1,b.each(s.sortables,function(){var t=this;t.isOver?(s.cancelHelperRemoval=!(t.isOver=0),t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,i))})},drag:function(s,i,o){b.each(o.sortables,function(){var t=!1,e=this;e.positionAbs=o.positionAbs,e.helperProportions=o.helperProportions,e.offset.click=o.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,b.each(o.sortables,function(){return this.positionAbs=o.positionAbs,this.helperProportions=o.helperProportions,this.offset.click=o.offset.click,t=this!==e&&this._intersectsWith(this.containerCache)&&b.contains(e.element[0],this.element[0])?!1:t})),t?(e.isOver||(e.isOver=1,o._parent=i.helper.parent(),e.currentItem=i.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return i.helper[0]},s.target=e.currentItem[0],e._mouseCapture(s,!0),e._mouseStart(s,!0,!0),e.offset.click.top=o.offset.click.top,e.offset.click.left=o.offset.click.left,e.offset.parent.left-=o.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=o.offset.parent.top-e.offset.parent.top,o._trigger("toSortable",s),o.dropped=e.element,b.each(o.sortables,function(){this.refreshPositions()}),o.currentItem=o.element,e.fromOutside=o),e.currentItem&&(e._mouseDrag(s),i.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",s,e._uiHash(e)),e._mouseStop(s,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),i.helper.appendTo(o._parent),o._refreshOffsets(s),i.position=o._generatePosition(s,!0),o._trigger("fromSortable",s),o.dropped=!1,b.each(o.sortables,function(){this.refreshPositions()}))})}}),b.ui.plugin.add("draggable","cursor",{start:function(t,e,s){var i=b("body"),s=s.options;i.css("cursor")&&(s._cursor=i.css("cursor")),i.css("cursor",s.cursor)},stop:function(t,e,s){s=s.options;s._cursor&&b("body").css("cursor",s._cursor)}}),b.ui.plugin.add("draggable","opacity",{start:function(t,e,s){e=b(e.helper),s=s.options;e.css("opacity")&&(s._opacity=e.css("opacity")),e.css("opacity",s.opacity)},stop:function(t,e,s){s=s.options;s._opacity&&b(e.helper).css("opacity",s._opacity)}}),b.ui.plugin.add("draggable","scroll",{start:function(t,e,s){s.scrollParentNotHidden||(s.scrollParentNotHidden=s.helper.scrollParent(!1)),s.scrollParentNotHidden[0]!==s.document[0]&&"HTML"!==s.scrollParentNotHidden[0].tagName&&(s.overflowOffset=s.scrollParentNotHidden.offset())},drag:function(t,e,s){var i=s.options,o=!1,n=s.scrollParentNotHidden[0],r=s.document[0];n!==r&&"HTML"!==n.tagName?(i.axis&&"x"===i.axis||(s.overflowOffset.top+n.offsetHeight-t.pageY<i.scrollSensitivity?n.scrollTop=o=n.scrollTop+i.scrollSpeed:t.pageY-s.overflowOffset.top<i.scrollSensitivity&&(n.scrollTop=o=n.scrollTop-i.scrollSpeed)),i.axis&&"y"===i.axis||(s.overflowOffset.left+n.offsetWidth-t.pageX<i.scrollSensitivity?n.scrollLeft=o=n.scrollLeft+i.scrollSpeed:t.pageX-s.overflowOffset.left<i.scrollSensitivity&&(n.scrollLeft=o=n.scrollLeft-i.scrollSpeed))):(i.axis&&"x"===i.axis||(t.pageY-b(r).scrollTop()<i.scrollSensitivity?o=b(r).scrollTop(b(r).scrollTop()-i.scrollSpeed):b(window).height()-(t.pageY-b(r).scrollTop())<i.scrollSensitivity&&(o=b(r).scrollTop(b(r).scrollTop()+i.scrollSpeed))),i.axis&&"y"===i.axis||(t.pageX-b(r).scrollLeft()<i.scrollSensitivity?o=b(r).scrollLeft(b(r).scrollLeft()-i.scrollSpeed):b(window).width()-(t.pageX-b(r).scrollLeft())<i.scrollSensitivity&&(o=b(r).scrollLeft(b(r).scrollLeft()+i.scrollSpeed)))),!1!==o&&b.ui.ddmanager&&!i.dropBehaviour&&b.ui.ddmanager.prepareOffsets(s,t)}}),b.ui.plugin.add("draggable","snap",{start:function(t,e,s){var i=s.options;s.snapElements=[],b(i.snap.constructor!==String?i.snap.items||":data(ui-draggable)":i.snap).each(function(){var t=b(this),e=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,s){for(var i,o,n,r,a,l,h,p,c,f=s.options,u=f.snapTolerance,d=e.offset.left,g=d+s.helperProportions.width,m=e.offset.top,_=m+s.helperProportions.height,v=s.snapElements.length-1;0<=v;v--)l=(a=s.snapElements[v].left-s.margins.left)+s.snapElements[v].width,p=(h=s.snapElements[v].top-s.margins.top)+s.snapElements[v].height,g<a-u||l+u<d||_<h-u||p+u<m||!b.contains(s.snapElements[v].item.ownerDocument,s.snapElements[v].item)?(s.snapElements[v].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,b.extend(s._uiHash(),{snapItem:s.snapElements[v].item})),s.snapElements[v].snapping=!1):("inner"!==f.snapMode&&(i=Math.abs(h-_)<=u,o=Math.abs(p-m)<=u,n=Math.abs(a-g)<=u,r=Math.abs(l-d)<=u,i&&(e.position.top=s._convertPositionTo("relative",{top:h-s.helperProportions.height,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a-s.helperProportions.width}).left),r)&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l}).left),c=i||o||n||r,"outer"!==f.snapMode&&(i=Math.abs(h-m)<=u,o=Math.abs(p-_)<=u,n=Math.abs(a-d)<=u,r=Math.abs(l-g)<=u,i&&(e.position.top=s._convertPositionTo("relative",{top:h,left:0}).top),o&&(e.position.top=s._convertPositionTo("relative",{top:p-s.helperProportions.height,left:0}).top),n&&(e.position.left=s._convertPositionTo("relative",{top:0,left:a}).left),r)&&(e.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left),!s.snapElements[v].snapping&&(i||o||n||r||c)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,b.extend(s._uiHash(),{snapItem:s.snapElements[v].item})),s.snapElements[v].snapping=i||o||n||r||c)}}),b.ui.plugin.add("draggable","stack",{start:function(t,e,s){var i,s=s.options,s=b.makeArray(b(s.stack)).sort(function(t,e){return(parseInt(b(t).css("zIndex"),10)||0)-(parseInt(b(e).css("zIndex"),10)||0)});s.length&&(i=parseInt(b(s[0]).css("zIndex"),10)||0,b(s).each(function(t){b(this).css("zIndex",i+t)}),this.css("zIndex",i+s.length))}}),b.ui.plugin.add("draggable","zIndex",{start:function(t,e,s){e=b(e.helper),s=s.options;e.css("zIndex")&&(s._zIndex=e.css("zIndex")),e.css("zIndex",s.zIndex)},stop:function(t,e,s){s=s.options;s._zIndex&&b(e.helper).css("zIndex",s._zIndex)}}),b.ui.draggable});