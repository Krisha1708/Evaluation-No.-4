import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FormStyled } from "../Styles";


const Login = ()=>{
    const [username, setUsername] = useState("");
    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = ()=>{
        if(username.trim()) {
            login({name:username});
            navigate("/dashboard");
        }
    };

    return (
        <FormStyled>
            <h2>Login</h2>
            <input type="text" placeholder="Username" onChange={(e)=> setUsername(e.target.value)}/>
            <button onClick={handleLogin}>Login</button>
            <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </FormStyled>
    );
};

export default Login;