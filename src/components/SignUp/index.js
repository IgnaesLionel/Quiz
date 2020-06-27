import React, {useState, useContext} from 'react'
import {FirebaseContext} from '../Firebase'

const SignUp = () => {

  const firebase = useContext(FirebaseContext)

  const data = {
    pseudo: '',
    email: '',
    password: '',
    confirmPassword: ''
  }
  //copie de data dans loginData pour le garder vide
  const [loginData, setLoginData] = useState (data)
  const [error, setError] = useState('')

  const handleChange = e => {
    setLoginData({...loginData, [e.target.id]: e.target.value})
  }

  const { pseudo, email, password, confirmPassword } = loginData;

  const handleSubmit = e => {
    e.preventDefault();
    firebase.signupUser(email, password)
    .then(user => {
      setLoginData({...data})  //on vide setLoginData;
    })
    .catch(error => {
      setError(error)
      setLoginData({...data})
    })
  }

const btn = pseudo === '' || email === "" || password === '' || password !== confirmPassword ?
 <button disabled> Inscription </button> : <button>Inscription</button>
//gestion d'erreur
const errorMsg = error !== '' && <span>{error.message} </span>

  return (
    <div className="signUpLoginBox">
      <div className="slContainer">
        <div className="formBoxLeftSignup">
        </div>
        <div className='formBoxRight'>
          <div className='formContent'>
            {errorMsg}
              <h2> Inscription </h2>
            <form onSubmit={handleSubmit}>
              <div className="inputBox">
                <input onChange={handleChange} value={pseudo} autoComplete="on" type='text' id="pseudo" required/>
                <label htmlFor="pseudo"> Pseudo </label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={email} autoComplete="on" type='email' id="email" required/>
                <label htmlFor="email"> Email </label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={password} autoComplete="on" type='password' id="password" required/>
                <label htmlFor="password"> Mot de passe </label>
              </div>

              <div className="inputBox">
                <input onChange={handleChange} value={confirmPassword} autoComplete="on" type='password' id="confirmPassword" required/>
                <label htmlFor="confirmPassword"> confirmer le mot de passe </label>
              </div>
              {btn}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp
