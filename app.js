if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js').then(function(reg) {
        console.log('Service Worker registered successfully', reg);
    }).catch(function(err) {
        console.warn('Service Worker registration failed', err);
    });
}

document.getElementById('notify-btn').addEventListener('click', function() {
    if ('Notification' in window && navigator.serviceWorker) {
        Notification.requestPermission().then(function(result) {
            if (result === 'granted') {
                navigator.serviceWorker.ready.then(function(reg) {
                    reg.showNotification('Hello from My PWA!');
                });
            }
        });
    }
});
