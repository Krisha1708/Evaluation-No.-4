import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { NavbarStyled } from "../Styles";


const Navbar = ()=>{
    const {user, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    return(
        <NavbarStyled>
            <h2>Task Manager</h2>
            {user && (
                <button onClick={()=>{logout(); navigate("/login");}}>Logout</button>
            )}
        </NavbarStyled>
    );
};

export default Navbar;