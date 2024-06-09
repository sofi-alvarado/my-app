import React from 'react';
import InputField from '../components/InputField';
import Button from '../components/Button';

const LogIn = () => {
  return (
	<form className='d-flex flex-column align-items-center'>
		<div className='mt-5'>
			<label>SIGN IN</label>
		</div>
		<div className="form-group w-25">
			<InputField 
				labelFor='email' 
				labelText='Email'
				idInput='emailInput'
				inputType='email'
			/>
		</div>
  <div className="form-group w-25">
		<InputField 
			labelFor='password' 
			labelText='Password'
			idInput='passwordInput'
			inputType='password'
		/>
  </div>
	<div className='form-group w-25 my-4'>
		<Button 
			btnType='button' 
			btnClass='btn btn-secondary'
			btnText='Sign In'
		/>
	</div>
	</form>
  )
};

export default LogIn;