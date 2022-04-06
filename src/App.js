import React,{Component} from 'react';
import './App.css';
import Main from './components/mainComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
// import { initializeApp} from 'https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js';
// // import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { getAuth } from "firebase/auth";
// // TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyC_VoCR0JhYsGiZFXXrohpehk0tF8iICNU",
//     authDomain: "angular-internship-e81b7.firebaseapp.com",
//     projectId: "angular-internship-e81b7",
//     storageBucket: "angular-internship-e81b7.appspot.com",
//     messagingSenderId: "778128304817",
//     appId: "1:778128304817:web:319b4860ac726c4b3fd090"
// };

// const app = initializeApp(firebaseConfig);
// console.log(app);
// const auth = getAuth(app);
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
