import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { checkingAuthentication, startFacebookLogin, startGoogleLogin } from '../../store/auth/thunks';
import './LoginPageStyles.css';

const iconButtonStyle = {
    width: '50px',
    height: '50px',
    color: '#24da48',
    borderRadius: '50%'
};

const buttonStyle = {
    width: '100%',
    height: '45px',
    color: '#24da48',
    backgroundColor: 'transparent',
    border: '2px solid transparent',
}


export const LoginPage = () => {

    const {status} = useSelector(state => state.auth);

    const isAuthenticating = useMemo(()=> status === 'checking', [status])

    const dispatch = useDispatch();

    const {email, password, onInputChange} = useForm({
        email: 'joaqo@gmail.com',
        password: '123456'
    });

    const onSubmit = (e) => {
        e.preventDefault();

        console.log({email, password});
        dispatch(checkingAuthentication());
    };

    const onGoogleLogin = () => {
        dispatch(startGoogleLogin());
        
    };

    const onFacebookLogin = () => {
        console.log('onFacebookLogin');
        dispatch(startFacebookLogin());
    };


    return (
        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
            <form onSubmit={onSubmit}>
                <div className="text-center mb-3">
                    <p>Ingresar con:</p>
                    <button disabled={isAuthenticating} onClick={onFacebookLogin} style={iconButtonStyle} type="button" className="btn btn-link btn-floating mx-2 icon-button">
                        <i className="fab fa-facebook-f"></i>
                    </button>
                    <button disabled={isAuthenticating} onClick={onGoogleLogin} style={iconButtonStyle} type="button" className="btn btn-link btn-floating mx-2 icon-button">
                        <i className="fab fa-google"></i>
                    </button>
                </div>
                <p className="text-center">o con:</p>
                <div className="form-outline mb-4">
                    <input 
                        type="email" 
                        id="loginName" 
                        className="form-control" 
                        placeholder="Email"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    />
                </div>
                <div className="form-outline mb-4">
                    <input 
                        type="password"
                        id="loginPassword" 
                        className="form-control" 
                        placeholder="Contraseña"
                        name='password'
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <div className="row mb-4">
                    <div className="col-md-6 d-flex justify-content-center">
                        <div className="form-check mb-3 mb-md-0">
                            <input className="form-check-input" type="checkbox" value="" id="loginCheck" />
                            <label className="form-check-label" forhtml="loginCheck"> Recuerdame</label>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <a href="#!">Olvidó su contraseña?</a>
                    </div>
                </div>
                <button type="submit" style={buttonStyle} className="btn btn-block mb-4 login-button mt-4">Ingresar</button>
            </form>
        </div>
    );
}