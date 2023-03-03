/* eslint-disable no-global-assign */
/* eslint-disable no-restricted-globals */
import React, {  useState} from 'react'
import { useNavigate } from 'react-router-dom'
// import { signin} from '../../auth/api-auth'
import auth from '../../auth/auth-helper'
// import axios from 'axios'
import Header from '../core/Header'
import Footer from '../core/Footer'
import { signin } from '../../auth/api-auth'

export default function Signin(props) {

    
    
    const [values, setValues] = useState({
        email:'',
        password:'',
        error:'',
        redirectToReferer: false
    })
    const handleChange =  event => {
      const value =  event.target.value 
      setValues({  value:value})
    }
    // const { setAuth } = useContext(AuthContext)
    const navigate = useNavigate()

    const clickSubmit = async(e) => {
      e.preventDefault()
      const user = {
        email: values.email || undefined,
        password:values.password || undefined
      }
      signin(user).then((data) => {
        if(data && data.error){
            setValues({ ...values, error: data.error})
        } else {
            auth.authenticate(data, () => {
                setValues({ ...values, error: '', redirectToReferer: true})
            })
        }
      })
     
    }
    const { from } =props.location || {
        from: {
            pathname: '/admin'
        }
    }
    const { redirectToReferer } = values 
    if(redirectToReferer){
        navigate(from)
    }
    const gotoRegister = () => navigate('/user/signup')
   
  return (
    <>
    
    <Header />
      <section >
       <div className='container flex'>
        <div className='login__container'>      
          <h2 className="text-center">Sign In </h2>
        <form className='login__form' onSubmit={clickSubmit}>
       
          <input
              value={values.email}
              onChange={handleChange}
              type="email"
              className="form-control"
              placeholder="Type your email"
              style={{width:'250px'}}
          />
      
          <br />
     
          <input
              value={values.password}
              onChange={handleChange}
              type="password"
              className="form-control"
              placeholder="Type your password"
              style={{width:'250px'}}
          />
          <br />
     
          <button type='submit' className='btn btn-primary' >Login</button>
          
              <p style={{color:'green'}}>Don't have an account?{" "} <span className="link" style={{color:'red', cursor:'pointer'}} onClick={gotoRegister}>Sign Up</span></p>
            {/* <Link >
                <a href="/auth/password/forgot" className="btn btn-outline-danger btn-sm">Forgot password</a>
            </Link> */}
        </form>
             &nbsp;&nbsp;
      </div>
       </div>
      </section>
   <Footer />
    </>
     
  
  )
}