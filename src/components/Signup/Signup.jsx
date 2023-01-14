import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { axiosPost } from '../../Api/Api'
export const Signup = () => {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('')
  let navigate =  useNavigate()
  const [formData, setFormData] = useState({
    first_name : "",
    last_name : "",
    age :'',
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
  console.log(formData);
  async function sendData(e){
    setLoading(false);
    e.preventDefault();
 let result=  await axiosPost(formData, 'signup');
 console.log(result);
 if(result.message === 'success'){
  //login by navigate
  navigate('/signin')
  // console.log(result);
  }
  else{
    // show error message
    setErrorMessage(result.errors);
    setLoading(true);
  }
//  console.log(errorMessage);
}
  return (
  <>
  {errorMessage?<>
    <div className="alert alert-danger">
    {errorMessage?.email?.message}
  </div></>:''}
    <h1>Registration Form </h1>
    <form className='myForm' onSubmit={sendData}>
      <label htmlFor="first_name">First Name</label>
      <input onChange={getFormData} type="text" className='form-control my-3' name='first_name' id='first_name' />
      <label htmlFor="last_name">Last Name</label>
      <input onChange={getFormData} type="text" className='form-control my-3' name='last_name' id='last_name' />
      <label htmlFor="age">Age</label>
      <input onChange={getFormData} type="number" className='form-control my-3' name='age' id='age' />
      <label htmlFor="email">Email</label>
      <input onChange={getFormData} type="email" className='form-control my-3' name='email' id='email' />
      <label htmlFor="password"> Password</label>
      <input onChange={getFormData} type="password" className='form-control my-3' name='password' id='password' />
      <button type='submit' className='btn btn-primary float-end mt-2 fw-light fs-5'>{loading?'Sign Up' :  <i className="fas fa-spinner fa-spin "></i>}</button>
    </form>
  </>
  )
}
