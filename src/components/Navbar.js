import React, { useState, useEffect } from "react";
import { firebase } from "../config/config";

const Navbar = () => {
  const [time, setTime] = useState("");
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  //SET TIME
  const renderTime = () => {
    let date = new Date();
    let hours = date.getHours();

    if (hours >= 1 && hours < 12) {
      {
        setTime("Good Morning");
      }
    } else if (hours >= 12 && hours < 17) {
      {
        setTime("Good Afternoon");
      }
    } else {
      {
        setTime("Good Evening");
      }
    }
  };

  //AUTHENTICATE USERS
  const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;

        // ...
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //LOG OUT FUNCTION
  const handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log("signed out");
        setIsLoggedOut(true);
      })
      .catch((error) => {
        //Sign-out unsuccessfull
      });
  };

  useEffect(() => {
    renderTime();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var uid = user.uid;
        setIsLoggedIn(true);
        setName(user.displayName);
        setPhoto(user.photoURL);
      } else {
        console.log("no user signed in");
      }
    });
  }, []);

  return (
    <div>
      <div className="nav">
        <div>
          <h3>{time}</h3>
        </div>

        {/* CHECK IF USER IS SIGNED IN */}
        {isLoggedin === false ? (
          <div>
            <button className="sign-in" onClick={handleSignIn}>
              Sign in with google
            </button>
          </div>
        ) : (
          <>
            <div>
              {/* CHECK IF USER IS LOGGED OUT */}
              {isLoggedOut === true ? (
                <button className="sign-in" onClick={handleSignIn}>
                  Sign in with google
                </button>
              ) : (
                <>
                  <img src={photo} />
                  <button className="sign-in" id="name-display">
                    Hello {name}
                  </button>

                  <button className="sign-out" onClick={handleLogout}>
                    Log out
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
