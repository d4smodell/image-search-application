import React from 'react'
import { Field, reduxForm } from 'redux-form'
import './Form.css'

let ContactForm = props => {
  const { handleSubmit } = props
  return <form onSubmit={handleSubmit} className='form'>
      <Field className='input' type='text' component={'input'} name={'valueSearch'} placeholder={'Search for Images...'}/>
      <button className='btn'>Search</button>
  </form>
}

ContactForm = reduxForm({
  form: 'contact'
})(ContactForm)

export default ContactForm