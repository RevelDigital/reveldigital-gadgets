/* malihu custom scrollbar plugin - http://manos.malihu.gr */
(function ($) {
    var defaultOptions = {
	scrollType		: "vertical",
	animSpeed		: 500,
	easeType		: "easeOutCirc",
	bottomSpace		: 1,
	draggerDimType		: "fixed",
	mouseWheelSupport	: "yes",
	scrollBtnsSupport	: "no",
	scrollBtnsSpeed		: 0
    };
    var methods = {
	//init : function(options) {
	init: function (scrollType, animSpeed, easeType, bottomSpace, draggerDimType, mouseWheelSupport, scrollBtnsSupport, scrollBtnsSpeed) {
	    var elem = $(this);
	    var id = $(this).attr("id");
	    var $customScrollBox=$("#"+id+" > .customScrollBox");
	    var $customScrollBox_container=$("#"+id+" > .customScrollBox > .container");
	    var $customScrollBox_content=$("#"+id+" > .customScrollBox >.container > .content");
	    var $dragger_container=$("#"+id+" > .customScrollBox > .dragger_wrapper .dragger_container");
	    var $dragger=$("#"+id+" > .customScrollBox > .dragger_wrapper .dragger");
	    var $scrollUpBtn=$("#"+id+" > .customScrollBox .scrollUpBtn");
	    var $scrollDownBtn=$("#"+id+" > .customScrollBox .scrollDownBtn");
	    var $customScrollBox_horWrapper=$("#"+id+" .customScrollBox .horWrapper");
	    var options = {
		scrollType		: scrollType,
		animSpeed		: animSpeed,
		easeType		: easeType,
		bottomSpace		: bottomSpace,
		draggerDimType		: draggerDimType,
		mouseWheelSupport	: mouseWheelSupport,
		scrollBtnsSupport	: scrollBtnsSupport,
		scrollBtnsSpeed		: scrollBtnsSpeed
	    };
	    
	    options = $.extend(defaultOptions, options);
	    elem.data("options", options);
	    
	    //get & store minimum dragger height & width (defined in css)
	    if(!$customScrollBox.data("minDraggerHeight")){
		    $customScrollBox.data("minDraggerHeight",$dragger.height());
	    }
	    if(!$customScrollBox.data("minDraggerWidth")){
		    $customScrollBox.data("minDraggerWidth",$dragger.width());
	    }
	    
	    //get & store original content height & width
	    if(!$customScrollBox.data("contentHeight")){
		    $customScrollBox.data("contentHeight",$customScrollBox_container.height());
	    }
	    if(!$customScrollBox.data("contentWidth")){
		    $customScrollBox.data("contentWidth",$customScrollBox_container.width());
	    }
	    
	    CustomScroller();
	    
	    function CustomScroller(reloadType){
		    //horizontal scrolling ------------------------------
		    if(options.scrollType=="horizontal"){
			    var visibleWidth=$customScrollBox.width();
			    //set content width automatically
			    $customScrollBox_horWrapper.css("width",999999); //set a rediculously high width value ;)
			    $customScrollBox.data("totalContent",$customScrollBox_container.width()); //get inline div width
			    $customScrollBox_horWrapper.css("width",$customScrollBox.data("totalContent")); //set back the proper content width value
			    
			    if($customScrollBox_container.width()>visibleWidth){ //enable scrollbar if content is long
				    $dragger.css("display","block");
				    if(reloadType!="resize" && $customScrollBox_container.width()!=$customScrollBox.data("contentWidth")){
					    $dragger.css("left",0);
					    $customScrollBox_container.css("left",0);
					    $customScrollBox.data("contentWidth",$customScrollBox_container.width());
				    }
				    $dragger_container.css("display","block");
				    $scrollDownBtn.css("display","inline-block");
				    $scrollUpBtn.css("display","inline-block");
				    var totalContent=$customScrollBox_content.width();
				    var minDraggerWidth=$customScrollBox.data("minDraggerWidth");
				    var draggerContainerWidth=$dragger_container.width();
		    
				    function AdjustDraggerWidth(){
					    if(options.draggerDimType=="auto"){
						    var adjDraggerWidth=Math.round(totalContent-((totalContent-visibleWidth)*1.3)); //adjust dragger width analogous to content
						    if(adjDraggerWidth<=minDraggerWidth){ //minimum dragger width
							    $dragger.css("width",minDraggerWidth+"px");
						    } else if(adjDraggerWidth>=draggerContainerWidth){
							    $dragger.css("width",draggerContainerWidth-10+"px");
						    } else {
							    $dragger.css("width",adjDraggerWidth+"px");
						    }
					    }
				    }
				    AdjustDraggerWidth();
		    
				    var targX=0;
				    var draggerWidth=$dragger.width();
				    $dragger.draggable({ 
					    axis: "x", 
					    containment: "parent", 
					    drag: function(event, ui) {
						    ScrollX();
					    }, 
					    stop: function(event, ui) {
						    DraggerRelease();
					    }
				    });
			    
				    $dragger_container.click(function(e) {
					    var $this=$(this);
					    var mouseCoord=(e.pageX - $this.offset().left);
					    if(mouseCoord<$dragger.position().left || mouseCoord>($dragger.position().left+$dragger.width())){
						    var targetPos=mouseCoord+$dragger.width();
						    if(targetPos<$dragger_container.width()){
							    $dragger.css("left",mouseCoord);
							    ScrollX();
						    } else {
							    $dragger.css("left",$dragger_container.width()-$dragger.width());
							    ScrollX();
						    }
					    }
				    });
    
				    //mousewheel
				    $(function($) {
					    if(options.mouseWheelSupport=="yes"){
						    $customScrollBox.unbind("mousewheel");
						    $customScrollBox.bind("mousewheel", function(event, delta) {
							    var vel = Math.abs(delta*10);
							    $dragger.css("left", $dragger.position().left-(delta*vel));
							    ScrollX();
							    if($dragger.position().left<0){
								    $dragger.css("left", 0);
								    $customScrollBox_container.stop();
								    ScrollX();
							    }
							    if($dragger.position().left>$dragger_container.width()-$dragger.width()){
								    $dragger.css("left", $dragger_container.width()-$dragger.width());
								    $customScrollBox_container.stop();
								    ScrollX();
							    }
							    return false;
						    });
					    }
				    });
				    
				    //scroll buttons
				    if(options.scrollBtnsSupport=="yes"){
					    $scrollDownBtn.mouseup(function(){
						    BtnsScrollXStop();
					    }).mousedown(function(){
						    BtnsScrollX("down");
					    });
				    
					    $scrollUpBtn.mouseup(function(){
						    BtnsScrollXStop();
					    }).mousedown(function(){
						    BtnsScrollX("up");
					    });
				    
					    $scrollDownBtn.click(function(e) {
						    e.preventDefault();
					    });
					    $scrollUpBtn.click(function(e) {
						    e.preventDefault();
					    });
				    
					    btnsScrollTimerX=0;
				    
					    function BtnsScrollX(dir){
						    if(dir=="down"){
							    var btnsScrollTo=$dragger_container.width()-$dragger.width();
							    var scrollSpeed=Math.abs($dragger.position().left-btnsScrollTo)*(100/options.scrollBtnsSpeed);
							    $dragger.stop().animate({left: btnsScrollTo}, scrollSpeed,"linear");
						    } else {
							    var btnsScrollTo=0;
							    var scrollSpeed=Math.abs($dragger.position().left-btnsScrollTo)*(100/options.scrollBtnsSpeed);
							    $dragger.stop().animate({left: -btnsScrollTo}, scrollSpeed,"linear");
						    }
						    clearInterval(btnsScrollTimerX);
						    btnsScrollTimerX = setInterval( ScrollX, 20);
					    }
				    
					    function BtnsScrollXStop(){
						    clearInterval(btnsScrollTimerX);
						    $dragger.stop();
					    }
				    }
    
				    //scroll
				    var scrollAmount=(totalContent-visibleWidth)/(draggerContainerWidth-draggerWidth);
				    function ScrollX(){
					    var draggerX=$dragger.position().left;
					    var targX=-draggerX*scrollAmount;
					    var thePos=$customScrollBox_container.position().left-targX;
					    $customScrollBox_container.stop().animate({left: "-="+thePos}, options.animSpeed, options.easeType);
				    }
			    } else { //disable scrollbar if content is short
				    $dragger.css("left",0).css("display","none"); //reset content scroll
				    $customScrollBox_container.css("left",0);
				    $dragger_container.css("display","none");
				    $scrollDownBtn.css("display","none");
				    $scrollUpBtn.css("display","none");
			    }
		    //vertical scrolling ------------------------------
		    } else {
			    var visibleHeight=$customScrollBox.height();
			    if($customScrollBox_container.height()>visibleHeight){ //enable scrollbar if content is long
				    $dragger.css("display","block");
				    if(reloadType!="resize" && $customScrollBox_container.height()!=$customScrollBox.data("contentHeight")){
					    $dragger.css("top",0);
					    $customScrollBox_container.css("top",0);
					    $customScrollBox.data("contentHeight",$customScrollBox_container.height());
				    }
				    $dragger_container.css("display","block");
				    $scrollDownBtn.css("display","inline-block");
				    $scrollUpBtn.css("display","inline-block");
				    var totalContent=$customScrollBox_content.height();
				    var minDraggerHeight=$customScrollBox.data("minDraggerHeight");
				    var draggerContainerHeight=$dragger_container.height();
		    
				    function AdjustDraggerHeight(){
					    if(options.draggerDimType=="auto"){
						    var adjDraggerHeight=Math.round(totalContent-((totalContent-visibleHeight)*1.3)); //adjust dragger height analogous to content
						    if(adjDraggerHeight<=minDraggerHeight){ //minimum dragger height
							    $dragger.css("height",minDraggerHeight+"px").css("line-height",minDraggerHeight+"px");
						    } else if(adjDraggerHeight>=draggerContainerHeight){
							    $dragger.css("height",draggerContainerHeight-10+"px").css("line-height",draggerContainerHeight-10+"px");
						    } else {
							    $dragger.css("height",adjDraggerHeight+"px").css("line-height",adjDraggerHeight+"px");
						    }
					    }
				    }
				    AdjustDraggerHeight();
		    
				    var targY=0;
				    var draggerHeight=$dragger.height();
				    $dragger.draggable({ 
					    axis: "y", 
					    containment: "parent", 
					    drag: function(event, ui) {
						    Scroll();
					    }, 
					    stop: function(event, ui) {//This executes only when finished dragging.
						    DraggerRelease();
					    }
				    });
				    
				    $dragger_container.click(function(e) {
					    var $this=$(this);
					    var mouseCoord=(e.pageY - $this.offset().top);

					    if(mouseCoord<$dragger.position().top || mouseCoord>($dragger.position().top+$dragger.height())){
						    var targetPos=mouseCoord+$dragger.height();
						    if(targetPos<$dragger_container.height()){
							    $dragger.css("top",mouseCoord);
							    Scroll();
						    } else {
							    $dragger.css("top",$dragger_container.height()-$dragger.height());
							    Scroll();
						    }
					    }
				    });
    
				    //mousewheel
				    $(function($) {
					    if(options.mouseWheelSupport=="yes"){
						    $customScrollBox.unbind("mousewheel");
						    $customScrollBox.bind("mousewheel", function(event, delta) {
							    var vel = Math.abs(delta*10);
							    $dragger.css("top", $dragger.position().top-(delta*vel));
							    Scroll();
							    if($dragger.position().top<0){
								    $dragger.css("top", 0);
								    $customScrollBox_container.stop();
								    Scroll();
							    }
							    if($dragger.position().top>$dragger_container.height()-$dragger.height()){
								    $dragger.css("top", $dragger_container.height()-$dragger.height());
								    $customScrollBox_container.stop();
								    Scroll();
							    }
							    return false;
						    });
					    }
				    });
    
				    //scroll buttons
				    if(options.scrollBtnsSupport=="yes"){
					    $scrollDownBtn.mouseup(function(){
						    BtnsScrollStop();
					    }).mousedown(function(){
						    BtnsScroll("down");
					    });
				    
					    $scrollUpBtn.mouseup(function(){
						    BtnsScrollStop();
					    }).mousedown(function(){
						    BtnsScroll("up");
					    });
				    
					    $scrollDownBtn.click(function(e) {
						    e.preventDefault();
					    });
					    $scrollUpBtn.click(function(e) {
						    e.preventDefault();
					    });
				    
					    btnsScrollTimer=0;
				    
					    function BtnsScroll(dir){
						    if(dir=="down"){
							    var btnsScrollTo=$dragger_container.height()-$dragger.height();
							    var scrollSpeed=Math.abs($dragger.position().top-btnsScrollTo)*(100/options.scrollBtnsSpeed);
							    $dragger.stop().animate({top: btnsScrollTo}, scrollSpeed,"linear");
						    } else {
							    var btnsScrollTo=0;
							    var scrollSpeed=Math.abs($dragger.position().top-btnsScrollTo)*(100/options.scrollBtnsSpeed);
							    $dragger.stop().animate({top: -btnsScrollTo}, scrollSpeed,"linear");
						    }
						    clearInterval(btnsScrollTimer);
						    btnsScrollTimer = setInterval( Scroll, 20);
					    }
				    
					    function BtnsScrollStop(){
						    clearInterval(btnsScrollTimer);
						    $dragger.stop();
					    }
				    }
				    
				    //scroll
				    if(options.bottomSpace<1){
					    options.bottomSpace=1; //minimum bottomSpace value is 1
				    }
    
				    var scrollAmount=(totalContent-(visibleHeight/options.bottomSpace))/(draggerContainerHeight-draggerHeight);
				    function Scroll(){
					    var draggerY=$dragger.position().top;
					    var targY=-draggerY*scrollAmount;
					    var thePos=$customScrollBox_container.position().top-targY;
					    $customScrollBox_container.stop().animate({top: "-="+thePos}, options.animSpeed, options.easeType, function() {
						elem.trigger("manual-scroll-y", [$(this).css("top")]);
					    });
				    }
			    } else { //disable scrollbar if content is short
				    $dragger.css("top",0).css("display","none"); //reset content scroll
				    $customScrollBox_container.css("top",0);
				    $dragger_container.css("display","none");
				    $scrollDownBtn.css("display","none");
				    $scrollUpBtn.css("display","none");
			    }
		    }
		    
		    $dragger.mouseup(function(){
			    DraggerRelease();
		    }).mousedown(function(){
			    DraggerPress();
		    });
    
		    function DraggerPress(){
			    $dragger.addClass("dragger_pressed");
		    }
    
		    function DraggerRelease(){
			    $dragger.removeClass("dragger_pressed");
		    }
	    }
	    
	    $(window).resize(function() {
		    if(options.scrollType=="horizontal"){
			    if($dragger.position().left>$dragger_container.width()-$dragger.width()){
				    $dragger.css("left", $dragger_container.width()-$dragger.width());
			    }
		    } else {
			    if($dragger.position().top>$dragger_container.height()-$dragger.height()){
				    $dragger.css("top", $dragger_container.height()-$dragger.height());
			    }
		    }
		    CustomScroller("resize");
	    });
	},
	scrollToY : function(destY, onScrolled) {
	    var destTop;
	    var id = $(this).attr("id");
	    var $scrollContainer = $("#" + id);
	    var $customScrollBox_container = $("#" + id + " > .customScrollBox > .container");
	    var $dragger_container = $("#" + id + " > .customScrollBox > .dragger_wrapper .dragger_container");
	    var $dragger = $("#" + id + " > .customScrollBox > .dragger_wrapper .dragger");
	    var maxHeight = $customScrollBox_container.height();
	    var visibleHeight = $scrollContainer.height();	    
	    var percentScrolled = destY / (maxHeight - visibleHeight);
	    var dragMaxY = $dragger_container.height() - $dragger.height();
	    var options = $(this).data("options");
	    console.log(options);
	    //Calculate position of drag handle.
	    destY = percentScrolled * dragMaxY;
	    
	    if (destY < 0) {
		destY = 0;
	    }
	    else if (destY > dragMaxY) {
		destY = dragMaxY;
	    }

	    $dragger.css("top", destY);
	    
	    //Calculate position of scrollContainer.
	    $customScrollBox_container.scrollTop(0);
	    percentScrolled = destY / dragMaxY;
	    destTop = -percentScrolled * (maxHeight - visibleHeight);
	    				
	    $customScrollBox_container.stop().animate({top: destTop}, options.animSpeed, options.easeType, function() {
		//$(this).trigger("scroll-y");
		if (onScrolled) {
		    onScrolled();
		}
	    });
	}
    };

    $.fn.mCustomScrollbar = function(method) {
	// Method calling logic.
	//if (methods[method]) {
	if ((method == "init") || (method == "scrollToY")) {
	  return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	}
	else {
	    return methods.init.apply(this, arguments);
	}
	/*else if (typeof method === 'object' || !method) {
	    return methods.init.apply(this, arguments);
	}
	else {
	    $.error("Method " +  method + " does not exist on jQuery.mCustomScrollbar");
	}  */ 
    };
})(jQuery);

$.fx.prototype.cur = function() {
    if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null)) {
      return this.elem[this.prop];
    }
    
    var r = parseFloat(jQuery.css(this.elem, this.prop));
    return typeof r == "undefined" ? 0 : r;
}