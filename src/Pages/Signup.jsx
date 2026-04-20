import React from 'react'
import { Formik, useFormik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      cPassword: ''
    },
    onSubmit: (values) => {
      console.log(values)
      axios.post('https://mongodb-bqfr.onrender.com', values)
        .then(response => {
          alert('Form submitted successfully')
          navigate('/login')
        })
        .catch(error => {
          console.error('Error submitting form:', error)
        })
    },
    validationSchema: yup.object({
      firstName: yup.string().required('First name is required'),
      lastName: yup.string().required('Last name is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      cPassword: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required')
    })
  })
  return (
    <form onSubmit={formik.handleSubmit}>
      <p>Register </p>
      <p>Signup now and get full access to our app. </p>



      <label className='d-block mb-1' htmlFor='firstName'>Firstname</label>
      <input required type="text" name='firstName' value={formik.values.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.touched.firstName ? <p className='text-danger'>{formik.errors.firstName}</p> : ""}



      <label className='d-block mb-1' htmlFor='lastName'>Lastname</label>
      <input required type="text" name='lastName' value={formik.values.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.touched.lastName ? <p className='text-danger'>{formik.errors.lastName}</p> : ""}


      <label className='d-block mb-1' htmlFor='email'>Email</label>
      <input required type="email" name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.touched.email ? <p className='text-danger'>{formik.errors.email}</p> : ""}


      <label className='d-block mb-1' htmlFor='password'>Password</label>
      <input required type="password" name='password' value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.touched.password ? <p className='text-danger'>{formik.errors.password}</p> : ""}


      <label className='d-block mb-1' htmlFor='cPassword'>Confirm Password</label>
      <input required type="password" name='cPassword' value={formik.values.cPassword} onChange={formik.handleChange} onBlur={formik.handleBlur} />
      {formik.touched.cPassword ? <p className='text-danger'>{formik.errors.cPassword}</p> : ""}

      <br />


      <button className="submit" type="submit">Submit</button>
      <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
    </form>

  )
}

export default Signup