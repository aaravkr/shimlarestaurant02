//{
//
///* ========================
//  Variables
//======================== */
//
// const FIREBASE_AUTH = firebase.auth();
// const FIREBASE_MESSAGING = firebase.messaging();
// const FIREBASE_DATABASE = firebase.database();
// 
// const subscribeButton = document.getElementById('Subscribe');
// const sendNotificationForm = document.getElementById('send-notification-form');
//// 
////const buttoncheck = document.getElementById('send');    
//    /* 
//    const signOutButton = document.getElementById('sign-out');
//    
//    
//    
// ========================
//  Event Listeners
//======================== */
//   
//    
//    subscribeButton.addEventListener('click', subscribeToNotifications);
//    FIREBASE_MESSAGING.onTokenRefresh(handleTokenRefresh);
//     sendNotificationForm.addEventListener("submit", sendNotification);
//   
//     
//    function subscribeToNotifications(){
//       console.log("scribe notifications");
//       FIREBASE_MESSAGING.requestPermission()
//       .then(() =>handleTokenRefresh())
//       .catch(() => console.log("user denied"));
//       
//} 
//    function handleTokenRefresh(){
//       return FIREBASE_MESSAGING.getToken()
//       .then((token) => {
//         FIREBASE_DATABASE.ref('/token').push({
//              token : token
//           });
//       });
//      
//    }
//    
//    function sendNotification(e){
//         e.preventDefault();
//            if(e.isDefaultPrevented()){
//    
//
//            const notificationMessage = document.getElementById('notification-message').value;
//             FIREBASE_DATABASE.ref('/pushnotification').push({
//             message: notificationMessage
//            
//            })
//            .then(()=> {
//             document.getElementById('notification-message').value=" ";
//            })
//            .catch(()=> {
//                console.log("error sending message : ")
//            });      
//        }
//        else{
//    e.returnValue = false;
//}
//    
//    }
//    
//    
//    
//
//}