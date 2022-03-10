import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pasword: '',
    password2: ''
  })

  const {name, email, password, password2} = formData

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
        <FaUser /> Register
      </h1>
      <p>Please Create an Account</p>
    </section>
  <section className="form">
    <form onSubmit={onSubmit}>
    <div className="form-group">
      <input type="text" className="form-control" id='name' name='name'
      value={name} placeholder='Enter Your Name' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="email" className="form-control" id='email' name='email'
      value={email} placeholder='Enter Your email' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="password" className="form-control" id='password' name='password'
      value={password} placeholder='Enter Password' onChange={onChange} />
      </div>

      <div className="form-group">
      <input type="password" className="form-control" id='password2' name='password2'
      value={password2} placeholder='Confirm Password' onChange={onChange} />
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

export default Register