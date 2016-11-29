/* jquery-Snowfall v1.0 | h4wldev@gmail.com | http://github.com/h4wldev */

(function($) {
	$.snowfall = {
        intervals: [],
        $wrapper: null,
        start: function(options, $wrapper) {
            var options = $.extend({}, {
                size: {
                    min: 10,
                    max: 20
                },
                interval: 500,
                color: '#fff',
                content: '&#10052;',
                disappear: 'linear'
            }, options);

            if ($wrapper == undefined) {
                $('body').append('<div id="snowfall-wrapper" />');
                $wrapper = $('#snowfall-wrapper');

                $wrapper.css({
                    'overflow': 'hidden',
                    'height': '100%',
                    'width': '100%',
                    'position': 'absolute',
                    'top': '0',
                    'left': '0'
                });
            }

            var $snowfall = $('<div class="flake" />').css({'position': 'absolute', 'top': '-50px'}).html(options.content);

            $.snowfall.$wrapper = $wrapper;
            $.snowfall.$wrapper.show();

            $.snowfall.intervals.push(setInterval(function() {
                var wrapperWidth = $wrapper.width(),
                    wrapperHeight = $wrapper.height(),
                    flakeSize = options.size.min + (Math.random() * options.size.max),
                    duration = (wrapperHeight * 10) + (Math.random() * 2000),
                    startPosition = (Math.random() * wrapperWidth) - 100;

                $snowfall.clone().appendTo($wrapper).css({
                    'left': startPosition,
                    'opacity': 0.5 + Math.random(),
                    'font-size': flakeSize,
                    'color': options.color
                }).animate({
                    top: wrapperHeight - 40,
                    left: (startPosition - 100) + (Math.random() * 200),
                    opacity: 0.2
                }, duration, options.disappear, function() {
                    $(this).remove();
                });
            }, options.interval));
        },
        stop: function() {
            $.snowfall.intervals.forEach(function(interval) {
                $.snowfall.$wrapper.hide();
                $.snowfall.$wrapper.children('div').each(function() {
                    $(this).remove();
                });
                clearInterval(interval);
            });
        }
    };
})(jQuery);
