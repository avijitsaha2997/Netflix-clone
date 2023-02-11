import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { auth } from './firebase';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import { useNavigate } from "react-router-dom";

function App() {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {

        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email
          })
        );
      } else {
        //Logged out
        dispatch(logout())
        navigate("/")
      }
    });
    return unsubscribe;

  }, [dispatch])




  return (
    <div className="app">
      <Routes>
        {!user ? (
          <Route path="/" element={<LoginScreen />} />

        ) : (
          <>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/" element={<HomeScreen />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
