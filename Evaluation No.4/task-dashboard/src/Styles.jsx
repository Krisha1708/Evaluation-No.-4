import styled from "styled-components";

export const NavbarStyled = styled.nav`
    background: linear-gradient(to right, #ff416c, #ff4b2b);
    color: white;
    padding: 10px;
    display:flex;
    justify-content: space-between;
`;

export const DashboardStyled = 
styled.div`
    text-align: center;
    padding: 20px;
`;

export const TaskFormStyled = styled.div`
    margin: 20px;
    input{
        paddin: 10px;
        width: 250px;
    }
    button{
        background : #4caf50;
        color: white;
        padding: 10px;
        margin-left: 10px;
    }
`;

export const TaskListStyled = styled.div`
    .task{
        display: flex;
        justify-content: space-between;
        background: #eee;
        margin: 5px;
        padding: 10px;
    }
`;


export const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient (to tight, #ff9a9e, #fad0c4);
    h2{
        color: #333;
    }

    input{
        width: 300px;
        padding: 10px;
        margin: 10px;
        border: 2px solid #ff758c;
        border-radius: 5px;
        font-size: 16px;
    }

    button{
        width: 320px;
        padding: 12px;
        background: #ff758c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: 0.3s;
    }

    button:hover{
        background: #ff5e78;
    }

    p{
        margin-top: 10px;
        font-size: 14px;
    }

    a{
        color: #ff3d68;
        font-weight: bold;
        text-decoration: none;
    }
`;