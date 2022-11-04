import {useState, useEffect} from 'react'
import {FaUser} from 'react-icons'

function Register() {
    const [formData, setFormData] = useState({
      name: '',
      email:'',
      password:'',
      password2:'',
    })
const {name, email, password, password2} = formData
  
const onChange = () => {}
return <>
  <section className="heading">
    <h1>
      <FaUser/> Register
    </h1>
    <p>Please create an account</p>
  </section>

  <section className="form">
    <form action="">
      <input type="text" 
        className='form-control'
        id='name'
        name='name'
        value={name}
        placeholder='Enter your name'
        onChange={onChange}
      />
    </form>
  </section>
</>
}
export default Register
