const firebaseConfig = {
    apiKey: "AIzaSyDwGNnr89LQuf5X4T84vRUsFWRa5rAjU34",
    authDomain: "shopeasy-00021.firebaseapp.com",
    projectId: "shopeasy-00021",
    storageBucket: "shopeasy-00021.appspot.com",
    messagingSenderId: "571722682332",
    appId: "1:571722682332:web:cea4a3cac463b0ad22c919",
    measurementId: "G-MXGEGHRB7Q"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.database();

auth.onAuthStateChanged(user => {
    if (user) {
        console.log("User is signed in:", user);
        const storeRef = db.ref('grocery_stores/' + user.uid);
        storeRef.once('value')
            .then(snapshot => {
                const storeData = snapshot.val();
                console.log("Store Data:", storeData);
            })
            .catch(error => {
                console.error("Error fetching store data:", error);
            });
    } else {
        console.log("User is not signed in");
    }
});