/*
 *  Author: @donnapep
 *  License: MIT
 */
;(function ($, window, document, undefined) {
	"use strict";

	var pluginName = "autoScroll",
		defaults = {
			by: "continuous",
			speed: "medium",
			pause: 5
		},
		isLoading = true,
		draggable = null,
		tween = null,
		resumeTween = null;

	function Plugin(element, options) {
		this.element = element;
		this.page = $(element).find(".scroll");
		this.options = $.extend({}, defaults, options);
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function () {
			var speed, duration;
			var self = this;
			var calculateProgress = null;
			var scrollComplete = null;
			var pageComplete = null;
			var elementHeight = $(this.element).outerHeight(true);
			var pauseHeight = elementHeight;
			var max = this.element.scrollHeight - this.element.offsetHeight;

			if (this.canScroll()) {
				// Set scroll speed.
				if (this.options.by === "page") {
					if (this.options.speed === "fastest") {
						speed = 0.4;
					}
					else if (this.options.speed === "fast") {
						speed = 0.8;
					}
					else if (this.options.speed === "medium") {
						speed = 1.2;
					}
					else if (this.options.speed === "slow") {
						speed = 1.6;
					}
					else {
						speed = 2;
					}

					duration = this.page.outerHeight(true) /
						$(this.element).outerHeight(true) * speed;
				}
				else {	// Continuous or by row
					if (this.options.speed === "fastest") {
						speed = 60;
					}
					else if (this.options.speed === "fast") {
						speed = 50;
					}
					else if (this.options.speed === "medium") {
						speed = 40;
					}
					else if (this.options.speed === "slow") {
						speed = 30;
					}
					else {
						speed = 20;
					}

					duration = Math.abs((this.page.outerHeight(true) -
						$(this.element).outerHeight(true)) / speed);
				}

				Draggable.create(this.element, {
					type: "scrollTop",
					throwProps: true,
					edgeResistance: 0.75,
					onPress: function() {
						tween.pause();

						TweenLite.killDelayedCallsTo(calculateProgress);
						TweenLite.killDelayedCallsTo(scrollComplete);
						TweenLite.killDelayedCallsTo(resumeTween);
						// Only used when scrolling by page.
						TweenLite.killDelayedCallsTo(pageComplete);
					},
					onRelease: function() {
						if (self.options.by !== "none") {
							/* Figure out what the new scroll position is and
							 translate that into the progress of the tween (0-1)
							 so that we can calibrate it; otherwise, it'd jump
							 back to where it paused when we resume(). */
							TweenLite.delayedCall(self.options.pause,
								calculateProgress = function() {
									// Set pauseHeight to new value.
									pauseHeight = $(self.element).scrollTop() +
									elementHeight;

									tween.progress($(self.element).scrollTop() / max)
										.play();
								}
							);
						}
					}
				});

				draggable = Draggable.get(this.element);

				tween = TweenLite.to(draggable.scrollProxy, duration, {
					scrollTop: max,
					ease: Linear.easeNone,
					delay: this.options.pause,
					paused: true,
					onUpdate: (this.options.by === "page" ? function() {
						if (Math.abs(draggable.scrollProxy.top()) >= pauseHeight) {
							tween.pause();

							// Next height at which to pause scrolling.
							pauseHeight += elementHeight;

							TweenLite.delayedCall(self.options.pause,
								pageComplete = function() {
									tween.resume();
								}
							);
						}
					} : undefined),
					onComplete: function() {
						TweenLite.delayedCall(self.options.pause,
							scrollComplete = function() {
								TweenLite.to(self.page, 1, {
									autoAlpha: 0,
									onComplete: function() {
										tween.seek(0).pause();

										if (self.options.by === "page") {
											pauseHeight = elementHeight;
										}

										$(self.element).trigger("done");
									}
								});
							}
						);
					}
				});

				// Hide scrollbar.
				TweenLite.set(this.element, { overflowY: "hidden" });
			}
		},
		// Check if content is larger than viewable area and if the scroll settings is set to actually scroll.
		canScroll: function() {
			return this.options && (this.page.height() > $(this.element).height());
		}
	};

	Plugin.prototype.play = function() {
		if (this.options.by !== "none") {
			if (tween) {
				if (isLoading) {
					tween.play();
					isLoading = false;
				}
				else {
					TweenLite.to(this.page, 1, {autoAlpha: 1});
					TweenLite.delayedCall(this.options.pause,
							resumeTween = function() {
						tween.play();
						}
					);
				}
			}
		}
	};

	Plugin.prototype.pause = function() {
		if (tween) {
			tween.pause();
		}
	};

	Plugin.prototype.stop = function() {
		if (tween) {
			tween.kill();
		}

		this.element = null;
		this.page = null;
	};

	// A lightweight plugin wrapper around the constructor that prevents
	// multiple instantiations.
	$.fn.autoScroll = function(options) {
		return this.each(function() {
			if (!$.data(this, "plugin_" + pluginName)) {
				$.data(this, "plugin_" + pluginName, new Plugin(this, options));
			} else {
        $.data(this, "plugin_" + pluginName).stop();
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
		});
	};
})(jQuery, window, document);
