import React from 'react'
import { useForm } from 'react-hook-form';

const SignUp = () => {

    const {
      register,
      handleSubmit,
      formState: { errors,isSubmitting },
    } = useForm();

    function onSubmit(data){
      console.log(data);
    }

  return (
    <div>
      <button className='ml-45 pl-2 pr-2'>x</button>
      <h2 className='mb-2 ml-16 text-xl'>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="text-sm" htmlFor="username">Username</label>
          <br />
          <input {...register('username',
            { required: true,
            minLength:{value:3,message:'Minimum length of username is 3'},
             maxLength: 10 })}
             className="border rounded-sm" id='username'/>
          {errors.username && <p className='text-red-500 text-sm'>{errors.username.message}</p>}
        </div>

        <div>
          <label className="text-sm" htmlFor="email">Email</label>
          <br />
          <input {...register('email',{ required: true, pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Improved regex
            message: 'Invalid email address',
          }})} className="border rounded-sm" id='email'/>
          {errors.email && <p className='text-red-500 text-sm'>{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm" htmlFor="password">Password</label>
          <br />
          <input {...register('password',{ required: true,
          minLength: {
            value: 8,
            message: 'Password must be at least 8 characters',
          },
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/, //regex
            message:
              'Password must contain at least one letter, one number, and one special character',
          }})} className="border rounded-sm" type="password" id='password'/>
          {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
        </div>

        <input className='border border-black-100 ml-16 mt-1 rounded-sm pl-2 pr-2' disabled={isSubmitting}
          value={isSubmitting?"Submitting":"Submit"} 
          type='submit'/>
      </form>
    </div>
  )
}

export default SignUp
