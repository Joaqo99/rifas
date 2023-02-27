import './RegisterPageStyles.css'

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

export const RegisterPage = () => {
    return (
      <div className="tab-content mt-4">
          <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form>
              <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" placeholder='Nombre'/>
              </div>
              <div className="form-outline mb-4">
                <input type="text" id="registerUsername" className="form-control" placeholder='Nombre de usuario'/>
              </div>
              <div className="form-outline mb-4">
                <input type="email" id="registerEmail" className="form-control" placeholder='Email'/>
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="registerPassword" className="form-control" placeholder='Contraseña'/>
              </div>
              <div className="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" className="form-control" placeholder='Confirmar contraseña'/>
              </div>
              <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" aria-describedby="registerCheckHelpText" />
                <label className="form-check-label" forhtml="registerCheck">
                  Leí y acepto los términos y condiciones
                </label>
              </div>
              <button style={buttonStyle} type="submit" className="btn btn-primary btn-block mb-3 register-button">Registrarse</button>
            </form>
          </div>
        </div>
    );
}