import { useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

const navStyles={
    background: '#24da48',
    minHeight: '55px',
    color: '#000617',
}

const linkStyles= (isActive)=>{
    return {
        margin: '0 30px',
        color: '#000617',
        borderBottom: isActive ? '2px solid #000617' : '1px solid transparent',
        fontSize: '20px',
        pading: '5px'
    }
}

export const Navbar = ()=> {

    const [showRespNav, setShowRespNav] = useState(false)

    const onBtnClick = ()=>{
        setShowRespNav(!showRespNav)
        console.log(showRespNav)
    }

    return (
        <nav style={navStyles} className="navbar navbar-expand-lg">
            <div className="container-fluid justify-content-between d-flex">
                <div className="contenedor-tit-btn">
                    <span>Rifas</span>
                    <button onClick={onBtnClick} className="navbar-toggler nav-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02">{showRespNav ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-bars"></i>}</button>
                </div>
                    
                <div className={`${showRespNav ? "collapse navbar-collapse active" : "collapse navbar-collapse"}`}>
                    <ul className="navbar-nav ms-auto nav-menu">
                        <li className="nav-item">
                            <NavLink
                                style={ ({isActive}) => linkStyles(isActive)}
                                to="home"
                                className="router-link"
                            >
                                <i className="fa-solid fa-house"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={ ({isActive}) => linkStyles(isActive)}
                                to="exploracion"
                                className="router-link"
                            >
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={ ({isActive}) => linkStyles(isActive)}
                                to="missorteos"
                                className="router-link"
                            >
                                <i className="fa-solid fa-rectangle-list"></i>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                style={ ({isActive}) => linkStyles(isActive)}
                                to="ajustes"
                                className="router-link"
                            >
                                <i className="fa-solid fa-user-gear"></i>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};