function Events() {
    var prefs = new gadgets.Prefs(),
	defaultLayout = "",
	defaultStyle = "";
	
    this.visualOption = prefs.getString("visualOption");
    this.isTabbed = this.visualOption == "tab" ? true : false;
    defaultLayout = this.isTabbed ? "http://reveldigital-gadgets.googlecode.com/svn/trunk/layouts/events-tabs.xml" : "http://reveldigital-gadgets.googlecode.com/svn/trunk/layouts/events-list.xml";
    defaultStyle = this.isTabbed ? "http://reveldigital-gadgets.googlecode.com/svn/trunk/styles/events-tabs.css" : "http://reveldigital-gadgets.googlecode.com/svn/trunk/styles/events-list.css";
    this.daysCount = prefs.getInt("daysCount");
    this.autoScroll = prefs.getBool("autoScroll");
    this.scrollBy = prefs.getString("scrollBy");
    this.duration = prefs.getInt("duration") * 1000;
    this.interactivityTimeout = prefs.getInt("interactivityTimeout") * 1000;
    this.showDate = prefs.getBool("showDate");
    this.scrollbarThickness = prefs.getInt("scrollbarThickness");
    this.scrollbarColor = prefs.getString("scrollbarColor");
    this.layoutURL = prefs.getString("layoutURL") ? prefs.getString("layoutURL") : defaultLayout;
    this.styleURL = prefs.getString("styleURL") ? prefs.getString("styleURL") : defaultStyle;
    this.url = "http://www.google.com/calendar/feeds/" + prefs.getString("calendarID") + "/public/full";
    this.isLoading = true;
    this.isPaused = true;
    this.service = null;
    this.layout = null;
    this.scrollTimerID = null;
    this.interactivityTimerID = null;
    this.eventsCount = 0;
    this.isScrolling = null;
    
    if (this.daysCount <= 0) {
	this.daysCount = 1;
    }
    else if (this.daysCount > 7) {
	this.daysCount = 7;
    }
    
    if (this.isTabbed) {
	this.tabs = null;
    }
}
//Load the layout and CSS files.
Events.prototype.initialize = function() {
    var self = this;
    var params = {};
    var link = $("<link>");
    
    //Load CSS file as specified in the Gadget settings.
    if (this.styleURL) {
	link.attr({
	    type: "text/css",
	    rel: "stylesheet",
	    href: this.styleURL
	});
	$("head").append(link);
    }
    
    params[gadgets.io.RequestParameters.CONTENT_TYPE] = gadgets.io.ContentType.DOM;
    gadgets.io.makeRequest(this.layoutURL, function(obj) {
	var data = obj.data;
	var index = 0;
    
	//Set the navigation structure.
	if (data.getElementsByTagName("Navigation").length > 0) {
	    self.navigation = data.getElementsByTagName("Navigation")[0].childNodes[1].nodeValue;
	}
    
	//Save the Event layout.
	self.layout = data.getElementsByTagName("Content")[0].childNodes[1].nodeValue;

	if (self.isTabbed) {
	    loadJS("http://reveldigital-gadgets.googlecode.com/svn/trunk/scripts/events.js", function() {
		$("#container").append(self.navigation);
		self.tabs = new Tabs();
		self.tabs.initTabs(self.daysCount);
		self.getCalendar();
	    });
	}
	else {	//List or custom layout.
	    $("#container").append(self.navigation);
	    self.initDays();
	    self.getCalendar();
	}
    }, params);
}
Events.prototype.initDays = function() {
    var i = 0,
	currentDay = Date.today();
	    
    for (; i < this.daysCount; i++) {
	var $day = $(".day").eq(i);
	
	$day.empty();
	
	if (i == 0) {
	    $day.text("Today");
	}
	else {
	    $day.text(currentDay.toString("dddd"));
	}
	
	currentDay.setDate(currentDay.getDate() + 1);
    }
    
    //Remove any days that are not needed.
    for (i = 6; i >= this.daysCount; i--) {
	$(".content > ul > li").eq(i).remove();	//This should be changed to be generic.
    }
}
Events.prototype.setupService = function() {
    this.service = new google.gdata.calendar.CalendarService("");
}
Events.prototype.getCalendar = function() {
    var query = new google.gdata.calendar.CalendarEventQuery(this.url); 
    var today = Date.today();
    var lastDay = Date.today().set({ hour: 23, minute: 59, second: 59 });
    var self = this;
    
    lastDay.add({ days: this.daysCount - 1 });
    
    //Only return events for the next 7 days.
    query.setOrderBy("starttime");
    query.setSortOrder("ascending");
    query.setMinimumStartTime(new google.gdata.DateTime(today)); 
    query.setMaximumStartTime(new google.gdata.DateTime(lastDay));
    query.setMaxResults(100);
    query.setSingleEvents(true);
    
    this.setupService();
    this.service.getEventsFeed(query, function(result) {
	self.showEvents(result);
	self.scrollerHeight = $("#scroller").height();
	
	if (self.isLoading) {
	    if (self.isTabbed) {
		self.tabs.setScrollContainerTop();
	    }
	    
	    self.configureScrolling();
	    self.isLoading = false;
	}
	else {
	    if (!self.isTabbed) {
		self.configureScrolling();
	    }
	    
	    if (!self.isPaused) {
		self.setScroll();
	    }
	}
	
	setTimeout(function() {
	    clearInterval(self.scrollTimerID);
	    
	    if (self.isTabbed) {
		self.tabs.stopTimer();
		self.tabs.initTabs(self.daysCount);
	    }
	    
	    self.isScrolling = null;
	    self.getCalendar();
	}, 300000);	//5 minutes
	readyEvent();
    }, function(e) {
	setTimeout(function() {
	    clearInterval(self.scrollTimerID);
	    
	    if (self.isTabbed) {
		self.tabs.initTabs(self.daysCount);
	    }
	    
	    self.isScrolling = null;
	    self.getCalendar();
	}, 300000);	//5 minutes
	console.log(e);
    }); 
}
Events.prototype.configureScrolling = function() {
    var self = this;
    
    //Style the scrollbar.
    $(".dragger_wrapper").css({
	"height": $(".customScrollBox").height() + "px",
	"width": this.scrollbarThickness + "px"
    });
    $(".dragger_container").css({
	"height": $(".customScrollBox").height() - this.scrollbarThickness + "px",
	"margin-top": this.scrollbarThickness / 2 + "px",
	"margin-right": "0px",
	"margin-bottom": "0px",
	"border-left-color": this.scrollbarColor
    });
    $(".dragger").css({
	"background": this.scrollbarColor,
	"width" : this.scrollbarThickness + "px",
	"height": this.scrollbarThickness + "px",
	"margin-left": - Math.ceil(this.scrollbarThickness / 2) + "px",
	"-webkit-border-radius": (this.scrollbarThickness * 2) + "px",
	"-moz-border-radius": (this.scrollbarThickness * 2) + "px",
	"border-radius": (this.scrollbarThickness * 2) + "px"
    });
    
    $(".dragger_pressed").css("background", this.scrollbarColor);
    $(".scrollContainer .dragger_container").show();
    $(".scrollContainer").mCustomScrollbar("init", "vertical", 500, "easeOutCirc", 1, "fixed", "yes", "no", 0);
    $(".scrollContainer").each(function (i) {
	$(this).bind("manual-scroll-y", function(e, top) {
	    //Cancel auto-scrolling and interactivity timeout when user is manually scrolling.
	    if (self.isTabbed) {
		self.tabs.stopTimer();
	    }
	    
	    clearInterval(self.scrollTimerID);
	    clearTimeout(self.interactivityTimerID);
	    self.interactivityTimerID = setTimeout(function() {
		//Scroll back to top and resume auto-scrolling, if applicable.
		$(".scrollContainer").mCustomScrollbar("scrollToY", 0, function() {
		    self.setScroll();
		});
	    }, self.interactivityTimeout);
	});
    });
}
Events.prototype.showEvents = function(result) {
    var entries = result.feed.entry;
    var today = Date.today();
   
    if (this.isTabbed) {
	this.tabs.clear();
    }
    else {
	$("#container").empty();
	$("#container").append(this.navigation);
	this.initDays();
    }
    
    for (var i = 0; i < entries.length; i++) {
	var eventEntry = entries[i];
	var eventTitle = eventEntry.getTitle().getText();
	var locations = eventEntry.getLocations();
	var location = locations.length > 0 ? locations[0].valueString : "";
	var times = eventEntry.getTimes();
	var $content = null;

	//Recurring events will return an array of times.
	for (var j = 0; j < times.length; j++) {
	    var startTime = times[j].getStartTime();
	    var isAllDay = false;

	    if (startTime.isDateOnly()) {	//All Day event
		isAllDay = true;
	    }
	
	    if (this.isTabbed) {
		$content = this.tabs.addEvent(this.layout, startTime);
	    }
	    else {
		var self = this,
		    currentDay = Date.today();

		//Add event to appropriate day.
		$(".day").each(function (i) {
		    if (currentDay.compareTo(startTime.getDate().clone().clearTime()) == 0) {
			$content = $(".events").eq(i);
			$content.append(self.layout);
		    }
		    
		    currentDay.setDate(currentDay.getDate() + 1);
		});
	    }

	    //Add event.
	    if ($content) {
		$content.find(".title:last").html($content.find(".title:last").html() + eventTitle);
		
		if (this.showDate) {
		    $content.find(".date:last").html($content.find(".date:last").html() + startTime.getDate().toString("dddd"));
		}
		
		if (isAllDay) {
		    $content.find(".time:last").html(" - All Day");
		}
		else {
		    if (this.showDate) {
			$content.find(".time:last").html($content.find(".time:last").html() + startTime.getDate().toString("h:mmtt").toLowerCase());
		    }
		    else {
			$content.find(".time:last").html(startTime.getDate().toString("h:mmtt").toLowerCase());
		    }
		}
		
		if (location == "") {
		    $content.find(".location:last").html(location);
		}
		else {
		    $content.find(".location:last").html($content.find(".location:last").html() + location);
		}
		
		$content.find(".description:last").html(eventEntry.getContent().getText());
	    }
	}	
    }
}
Events.prototype.play = function() {
    if (this.isPaused) {
	this.isPaused = false;
	this.setScroll();
    }
}
Events.prototype.pause = function() {
    clearInterval(this.scrollTimerID);
    this.isPaused = true;
}
Events.prototype.setScroll = function() {
    var self = this;
    
    if (this.autoScroll) {
	this.scrollTimerID = setInterval(function() {
	    if (self.scrollBy == "row") {
		self.scrollByRow();
	    }
	    else {
		self.scrollByPage();
	    }
	}, this.duration);
    }
}
Events.prototype.scrollByRow = function() {
    var self = this;
    
    if (this.isTabbed) {
	clearInterval(this.scrollTimerID);
	this.tabs.scrollByRow();
    }
    else {
	var $clone = null,
	    $eventsContainer = $(".eventsContainer:first"),
	    $day = $eventsContainer.find(".day"),
	    $events = $eventsContainer.find(".events"),
	    $event = $events.find(".event:first"),
	    $scroller = $("#scroller"),
	    scrollerTop = parseInt($scroller.css("margin-top")),
	    top = 0;
	    
	if (this.scrollerHeight > $("#container").height()) {
	    //If it's the last one, top should be height of eventsContainer to prevent jerky scroll.
	    if ($events.find(".event").length > 0) {
		if ($events.find(".event").length == 1) {
		    top = $eventsContainer.offset().top + $eventsContainer.outerHeight(true);
		}
		else {
		    top = $event.offset().top + $event.outerHeight(true);
		}
	    }
	    else if ($events.find(".day").length > 0) {
		top = $day.offset().top + $day.outerHeight(true);
	    }
	    else {
		top = $eventsContainer.offset().top + $eventsContainer.outerHeight(true);
	    }
	    
	    //1st event for that day scrolls.
	    if (this.eventsCount <= 0) {
		this.eventsCount = $events.find(".event").length;
		$clone = $eventsContainer.clone();
		$clone.find(".event").slice(1).remove();	//Remove all events except the first one.
		$scroller.append($clone);
		$scroller.animate({"margin-top": scrollerTop - top + "px"}, "slow", function() {
		    $scroller.css("margin-top", "0px");
		    $day.remove();
		    $event.remove();
		    self.eventsCount--;
		    
		    if (self.eventsCount <= 0) {
			$eventsContainer.remove();
		    }
		});
	    }
	    else {
		$clone = $event.clone();
		$scroller.find(".events:last").append($clone);
		$scroller.animate({"margin-top": scrollerTop - top + "px"}, "slow", function() {
		    $scroller.css("margin-top", "0px");
		    $event.remove();
		    self.eventsCount--;
		    
		    if (self.eventsCount == 0) {
			$eventsContainer.remove();
		    }
		});
	    }
	}
    }
}
Events.prototype.scrollByPage = function() {
    var self = this;
    
    if (this.isTabbed) {
	clearInterval(this.scrollTimerID);
	this.tabs.scrollByPage();
    }
    else {
	var $scroller = $("#scroller"),
	    scrollerTop = parseInt($scroller.css("margin-top")),
	    containerHeight = $("#container").height(),
	    count = 0;
	    
	if (this.isScrolling == null) {
	    //Not all events are visible. Duplicate all events to ensure that the Placeholder is always filled.
	    if (this.scrollerHeight > containerHeight) {
		var $clone = $scroller.children().clone();
		
		$scroller.append($clone);
		this.isScrolling = true;
	    }
	    else {	//Scrolling is not necessary.
		this.isScrolling = false;
	    }
	}
	
	if (this.isScrolling) {
	    //Scroll by the height of the container.
	    $scroller.animate({"margin-top": scrollerTop - containerHeight + "px"}, "slow", function() {
		//Remove event if it is outside of the visible area.
		for (var i = $(".eventsContainer").length - 1; i >= 0; i--) {
		    var $eventsContainer = $(".eventsContainer").eq(i);
		    var top = $eventsContainer.offset().top;
		    var height = $eventsContainer.outerHeight(true);	    
			
		    //Day has scrolled off-screen, so remove it and add a new one at the bottom.
		    if ((top + height) < 0) {		
			var $clone = $eventsContainer.clone();
			
			if (count == 0) {
			    $scroller.append($clone);
			}
			else {
			    var $elem;
			    
			    if (count == 1) {
				$elem = $scroller.find(".eventsContainer:last");
			    }
			    else {
				$elem = $scroller.find(".eventsContainer").slice(-count, -count + 1);
			    }
			    
			    $clone.insertBefore($elem);			    
			}
			
			$eventsContainer.remove();
			scrollerTop = parseInt($scroller.css("margin-top"));
			$scroller.css("margin-top", scrollerTop + height);
			count++;
		    }
		}
	    });
	}
    }
}
