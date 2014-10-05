var tracker = new RiceTracker();

window.onload = function() {
    var img = document.getElementById('img');

    var plot = function(x, y, w, h) {
        var rect = document.createElement('div');
        document.querySelector('body').appendChild(rect);
        rect.classList.add('rect');
        rect.style.width = w + 'px';
        rect.style.height = h + 'px';
        rect.style.left = (img.offsetLeft + x) + 'px';
        rect.style.top = (img.offsetTop + y) + 'px';
    };

    tracker.on('track', function(event) {
        event.data.forEach(function(rect) {
            plot(rect.x, rect.y, rect.width, rect.height);
        });
    });

    tracking.track('#img', tracker);
};