import app from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBvOOZn0ZGLkU12X8927REYEJRTFQVjRNk",
  authDomain: "marvel-quiz-9fd94.firebaseapp.com",
  databaseURL: "https://marvel-quiz-9fd94.firebaseio.com",
  projectId: "marvel-quiz-9fd94",
  storageBucket: "marvel-quiz-9fd94.appspot.com",
  messagingSenderId: "418055938541",
  appId: "1:418055938541:web:3427a2659bccedeebc47e4"
};

class Firebase {
  constructor() {
    app.initializeApp(config)
    this.auth = app.auth()
  }

  //inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)

  // Connection

  loginUser = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password)

  //deconnection
  signoutUser = () => this.auth.signOut()
}

export default Firebase
