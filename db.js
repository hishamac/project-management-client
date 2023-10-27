var firebase = require("firebase/app");
var firebasedb = require("firebase/database");

/**
 * Update your Firebase Project
 * Credentials and Firebase Database
 * URL
 */

const firebaseConfig = {
  apiKey: "AIzaSyCCCsaS6LkSXXJUGznFeVLB2pKJ0VKjWQ8",
  authDomain: "project-management-f341a.firebaseapp.com",
  databaseURL: "https://project-management-f341a-default-rtdb.firebaseio.com",
  projectId: "project-management-f341a",
  storageBucket: "project-management-f341a.appspot.com",
  messagingSenderId: "267368504630",
  appId: "1:267368504630:web:408cd923d98b7953872797",
  measurementId: "G-7Y70LXSC1N",
}; //by adding your credentials, you get authorized to read and write from the database

var app = firebase.initializeApp(firebaseConfig);
/**
 * Loading Firebase Database and refering
 * to user_data Object from the Database
 */
var db = firebasedb.getDatabase(app);
var a = {
  "/notification": [
    {
      sender_id: 1,
      reciever_id: 2,
      message: "hello",
      message_id: 1234,
      isRead: false,
    },
    {
      sender_id: 14,
      reciever_id: 2,
      message: "hello",
      message_id: 124,
      isRead: false,
    },
  ],
};
// firebasedb.update(firebasedb.ref(db), a);

firebasedb.onValue(
  firebasedb.child(firebasedb.ref(db), "notificaion"),
  (snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  }
);
const sendMessage = (message) => {
  firebasedb
    .get(firebasedb.child(firebasedb.ref(db), "notification"))
    .then((snapshot) => {
      console.log(snapshot.val());
      const newValue = {
        "/notification": [
          ...snapshot.val(),
          {
            sender_id: 1,
            reciever_id: 2,
            message: message,
            message_id: new Date().getTime(),
            isRead: false,
          },
        ],
      };
      firebasedb.update(firebasedb.ref(db), newValue);
    })
    .catch((error) => {
      console.error(error);
    });
};

const getMessagesBySenderId = (
  id_type = null,
  sender_id = null,
  message_id = null,
  reciever_id = null
) => {
  const checkId = sender_id
    ? sender_id
    : message_id
    ? message_id
    : reciever_id
    ? reciever_id
    : null;
  firebasedb
    .get(firebasedb.child(firebasedb.ref(db), "notification"))
    .then((snapshot) => {
      snapshot.val().map((value) => {
        if (value[id_type] == checkId) {
          console.log(value);
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateMessage = (message_id, new_message) => {
  firebasedb
    .get(firebasedb.child(firebasedb.ref(db), "notification"))
    .then((snapshot) => {
      const messages = snapshot.val();
      messages.map((value, index) => {
        if (value.message_id == message_id) {
          console.log(messages[index].message);
          messages[index].message = new_message;
          firebasedb.update(firebasedb.ref(db), {
            "/notification": messages,
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteMessage = (message_id) => {
  firebasedb
    .get(firebasedb.child(firebasedb.ref(db), "notification"))
    .then((snapshot) => {
      const messages = snapshot.val();
      messages.map((value, index) => {
        if (value.message_id == message_id) {
          delete messages[index];
          firebasedb.update(firebasedb.ref(db), {
            "/notification": messages,
          });
        }
      });
    })
    .catch((error) => {
      console.error(error);
    });
};

// sendMessage("hashim");
// getMessagesBySenderId((id_type = "message_id"),(message_id = 1698429268764));
// updateMessage(1234, "helloaaa");
// deleteMessage(1234);
