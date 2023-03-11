
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebse-messaging.js');


const firebaseConfig = {
    apiKey: "AIzaSyD2LGR_JF2Sj_BUwzRyNFJ99BPnJtrOGh0",
    authDomain: "parcelstar-66cb8.firebaseapp.com",
    projectId: "parcelstar-66cb8",
    storageBucket: "parcelstar-66cb8.appspot.com",
    messagingSenderId: "221268885701",
    appId: "1:221268885701:web:2604b15896c4d1fcd3b0ac"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
})