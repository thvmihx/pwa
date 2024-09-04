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

// No arquivo principal
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.active.postMessage({ type: 'MESSAGE_TYPE', data: 'example' });
    });
  }
  
  // No Service Worker
  self.addEventListener('message', event => {
    if (event.data.type === 'MESSAGE_TYPE') {
      // Processa a mensagem
      console.log(event.data.data);
    }
  });
  
