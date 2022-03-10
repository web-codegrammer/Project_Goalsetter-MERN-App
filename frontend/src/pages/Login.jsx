import {useState, useEffect} from 'react'
import {FaSignInAlt} from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    pasword: '',
  })

  const {email, password} = formData

  const onChange = (e) => {
    setFormData((prevstate) =>({
      ...prevstate,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return  <>
    <section className='heading'> 
      <h1>
        <FaSignInAlt /> Login
      </h1>
      <p>Login And Start Setting Goals</p>
    </section>
  <section className="form">
    <form onSubmit={onSubmit}>

      <div className="form-group">
      <input type="email" className="form-control" id='email' name='email'
      value={email} placeholder='Enter Your email' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="password" className="form-control" id='password' name='password'
      value={password} placeholder='Enter Password' onChange={onChange} />
      </div>

      <div className="form-group">
        <button type="submit" className='btn btn-block'>
          Submit
        </button>
      </div>
    </form>
  </section>
  
  </> 
}

export default Login