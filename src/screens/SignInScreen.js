import React, { useRef } from 'react'
import "./SignInScreen.css"
import { auth } from '../firebase';


function SignInScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const signIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
            .then((authUser) => {
                console.log(authUser)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    return (
        <div className='signInScreen'>

            <form action="">
                <h1>Sign In</h1>
                <input ref={emailRef} type="email" placeholder='Email' />
                <input ref={passwordRef} type="password" placeholder='Password' />
                <button
                    onClick={signIn}
                    type='submit'>Sign In</button>

                <h4>
                    <span className='signInScreen__gray'>New to Netflix? </span>
                    <span
                        onClick={register}
                        className='signInScreen__link'>Sign Up now.</span>
                </h4>
            </form>

        </div>
    )
}

export default SignInScreen