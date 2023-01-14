import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosPost } from '../../Api/Api'
export const Signin = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  let navigate =  useNavigate()
  const [formData, setFormData] = useState({
    email : '',
    password : ''
  })
  
  // destraction of e.target => {target}
  function getFormData({target}) {
    setFormData ({
      ...formData,
      [target.name] : target.value
    })
   
  }
  // console.log(formData);
  async function sendData(e){
    setLoading(false);
    e.preventDefault();
 let result=  await axiosPost(formData, 'signin');
 console.log(result);
 if(result.message === 'success'){
  // data in local storage from token when login successful
  localStorage.setItem('token', result.token);
  //login by navigate
  navigate('/home');
  // console.log(result);
  }
  else{
    // show error message
    setLoading(true);
    setErrorMessage(result.message);
   
  }
//  console.log(errorMessage);
}
  return (
  <>
  {errorMessage?<>
    <div className="alert alert-danger">
    {errorMessage}
  </div></>:''}
    <h1>Login In</h1>
    <form className='myForm' onSubmit={sendData}>
      <label htmlFor="email">Email</label>
      <input onChange={getFormData} type="email" className='form-control my-3' name='email' id='email' />
      <label htmlFor="password"> Password</label>
      <input onChange={getFormData} type="password" className='form-control my-3' name='password' id='password' />
      <button type='submit' className='btn btn-primary float-end mt-2 fw-light fs-5'>{loading?'Login in' :  <i className="fas fa-spinner fa-spin "></i>}</button>
    </form>
  </>
  )
}
