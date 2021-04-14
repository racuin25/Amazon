import { auth } from "../../firebase";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(err => {
                alert(err.message);
            })
    }

    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/");
            })
            .catch(err => {
                alert(err.message);
            })
    }

    return(
        <div className="login">
            <Link to="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" className="login__logo"/>
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email:</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />

                    <h5>Password:</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>

                    <button type="submit" onClick={signIn}  className="login__signInBtn">sign in</button>
                    <p>
                        By signing in you agree to Amazon terms and condition. Please see our privacy notice, our cookies notice and our interest based ad notice. 
                    </p>
                    <button onClick={register} className="login__registerBtn">create your amazon account</button>
                </form>
            </div>
        </div>
    );
}

export default Login;