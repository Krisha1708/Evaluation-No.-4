import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FormStyled } from "../Styles";


const Signup = ()=>{
    const [username, setUsername] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignup = ()=>{
        if(username.trim()){
            login({name:username});
            navigate("/dashboard");  // Redirect to dashboard after signup
        };
    };

    return (
        <FormStyled>
            <h2>Signup</h2>
            <input type="text" placeholder="Enter a username" onChange={(e)=> setUsername(e.target.value)}/>
            <button onClick={handleSignup}>Sign Up</button>
            <p>Already have an account? <a href="/login">Login</a></p>
        </FormStyled>
    );
};

export default Signup