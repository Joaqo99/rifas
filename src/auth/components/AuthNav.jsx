import { NavLink } from "react-router-dom";

const liStyles={
    width: '45%'
}

export const AuthNav = () => {

    const linkStyles = (isActive) => {
        return {
            color: isActive ? '#000617' : '#24da48',
            backgroundColor: isActive ? '#24da48' : '#000617',
            border:  isActive ? 'none' : '2px solid #24da48'
        }
    }

    return ( 
        <div className='mt-5'>
            <ul className="nav nav-pills mb-3 justify-content-between text-center" id="ex1" role="tablist">
                <li style={liStyles} className="nav-item m-2" role="presentation">
                    <NavLink style={ ({isActive}) => linkStyles(isActive)} to="login" className="nav-link linkk" data-mdb-toggle="pill" role="tab" aria-controls="pills-register" aria-selected="false">Ingresar</NavLink>
                </li>
                <li style={liStyles} className="nav-item m-2" role="presentation">
                    <NavLink style={ ({isActive}) => linkStyles(isActive)} to="register" className="nav-link linkk" data-mdb-toggle="pill" role="tab" aria-controls="pills-register" aria-selected="false">Registrarse</NavLink>
                </li>
            </ul>
        </div>
    );
}