import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import Logo from '../images/logos/logo.png';
import './Login.css';
import googleIcon from '../images/google.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../App';

firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedUser, setLoggedUser] = useContext(userContext);
    const provider = new firebase.auth.GoogleAuthProvider();
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/dashboard/my-profile" } };

    const googleLogin = () => {
        firebase.auth().signInWithPopup(provider).then(function (result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            const newUser = { ...loggedUser }
            newUser.email = user.email;
            newUser.name = user.displayName;
            newUser.pic = user.photoURL;
            setLoggedUser(newUser);
            history.replace(from)
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            const credential = error.credential;
            // ...
        });

    }

    return (
        <div style={{ minHeight: "100vh" }} className="d-flex justify-content-center align-items-center">
            <div className="loginForm text-center">
                <Link to="/"><img className="mb-5" style={{ maxWidth: "250px" }} src={Logo} alt="" /></Link>
                <div className="form d-flex justify-content-center align-items-center">
                    <div>
                        <h3 className="font-weight-bold mb-4">Login With</h3>
                        <button onClick={googleLogin} className="loginBtn"> <img style={{ maxWidth: "30px" }} src={googleIcon} alt="" />&nbsp; &nbsp;  continue with google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;