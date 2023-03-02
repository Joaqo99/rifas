import { useFormik } from 'formik';
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
};

const validate = (values)=> {
  let errors = {};

  if(values.email.length < 5 && !values.email.includes("@")){
    errors.email = 'No es una dirección de correo valida'
  }

  if(values.displayName.length < 3){
    errors.displayName = 'El nombre de usuario debe tener al menos 3 caracteres'
  }
  
  if(values.fullName.length < 2){
    errors.fullName = 'Requerido'
    console.log(errors.fullName)
  }

  if(values.password.length <= 5){
    errors.password = 'La contraseña debe tener al menos 6 caracteres'
  }

  if(values.repeatPassword != values.password){
    errors.password = 'Las contraseñas no coinciden'
    errors.repeatPassword = 'Las contraseñas no coinciden'
  }

  if(values.repeatPassword.length <= 5){
    errors.repeatPassword = 'La contraseña debe tener al menos 6 caracteres'
  }

  if(!values.condicionesAceptadas){
    errors.condicionesAceptadas = 'Para continuar debe aceptar los terminos y condiciones'
  }

  return errors;
};

export const RegisterPage = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      displayName: '',
      fullName: '',
      repeatPassword: '',
      condicionesAceptadas: false,
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    }
  })

    return (
      <div className="tab-content mt-4">
          <div className="tab-pane fade show active" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
            <form onSubmit={formik.handleSubmit} noValidate>

              <div className="form-outline mb-4">
                <input 
                  type="text" 
                  id="fullName" 
                  name="fullName" 
                  className={`form-control ${formik.errors.fullName ? "is-invalid" : ""}`}
                  placeholder='Nombre completo' 
                  value={formik.values.fullName} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.fullName ? <div className='invalid-feedback'>{formik.errors.fullName}</div> : null}
              </div>

              <div className="form-outline mb-4">
                <input 
                  type="text" id="displayName" 
                  name="displayName" 
                  className={`form-control ${formik.errors.displayName ? "is-invalid" : ""}`}
                  placeholder='Nombre de usuario' 
                  value={formik.values.displayName} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.displayName ? <div className='invalid-feedback'>{formik.errors.displayName}</div> : null}
              </div>

              <div className="form-outline mb-4">
                <input 
                  type="email" 
                  id="email" 
                  name='email' 
                  className={`form-control ${formik.errors.email ? "is-invalid" : ""}`}
                  placeholder='Email' 
                  value={formik.values.email} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email ? <div className='invalid-feedback'>{formik.errors.email}</div> : null}
              </div>

              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  id="password" 
                  name="password" 
                  className={`form-control ${formik.errors.password ? "is-invalid" : ""}`}
                  placeholder='Contraseña' 
                  value={formik.values.password} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password ? <div className='invalid-feedback'>{formik.errors.password}</div> : null}
              </div>

              <div className="form-outline mb-4">
                <input 
                  type="password" 
                  id="repeatPassword" 
                  name="repeatPassword" 
                  className={`form-control ${formik.errors.repeatPassword ? "is-invalid" : ""}`}
                  placeholder='Confirmar contraseña' 
                  value={formik.values.repeatPassword} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.repeatPassword ? <div className='invalid-feedback'>{formik.errors.repeatPassword}</div> : null}
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input 
                  className={`form-check-input me-2 ${formik.errors.condicionesAceptadas ? "is-invalid" : ""} `}
                  type="checkbox" 
                  id="condicionesAceptadas" 
                  name='condicionesAceptadas'
                  aria-describedby="registerCheckHelpText"
                  value={formik.values.condicionesAceptadas} 
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.condicionesAceptadas ? <div className='invalid-feedback'>{formik.errors.condicionesAceptadas}</div> :                 <label className="form-check-label" forhtml="registerCheck">
                  Leí y acepto los términos y condiciones
                </label>}
              </div>
              <button style={buttonStyle} type="submit" className="btn btn-primary btn-block mb-3 register-button">Registrarse</button>
            </form>
          </div>
        </div>
    );
}