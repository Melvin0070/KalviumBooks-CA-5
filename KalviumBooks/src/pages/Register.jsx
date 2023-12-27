import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import "../App.css"


function Register() {
    const { register, watch, handleSubmit, formState: { errors }} = useForm();

    const [submit, setSubmit] = useState(false)

    const onSubmit =  (data) => {
        localStorage.setItem('userRegistration', JSON.stringify(data));
        setSubmit(true)
        console.log(data)
    }
      

    
  return (
    <div className='wrpper'>
        <form action="">

        {submit 
        && !errors.firstName && !errors.email && !errors.password && !errors.confirm
        ? <h1>Registration Successful ! <hr /></h1>:<h1>Register to use Kalvium Books <hr /></h1>}

            <input placeholder='First Name' 
            type="text"             
            {...register("firstName", {
                required: "First Name is required!", 
                minLength: {
                    value: 3,
                    message: 'Name should be more than 3 characters'
                    }, 
                maxLength:{
                    value: 30,
                    message: 'Name should be less than 30 characters'
                    }
            })}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <input placeholder='Email' 
            {...register("email", {
                required: "Email is required!",
                pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email"
                }  
            })}
            />
            {errors.email && <p>{errors.email.message}</p>}

            <input type='password' placeholder='Password'
            {...register("password", {
                required: "Password is required!",
                pattern:{
                    value: /.*[\W]+.*/i,
                    message: "Password must contain at least one special character"
                    },
                minLength: {
                    value: 10,
                    message: "Password must have at least 10 characters"
                }
            })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <input type='password' placeholder='Confirm Password'
            {...register('confirm',{
                required: "Confirm Your Password",
                validate: (value) => value === watch('password') || "Passwords don't match"
                })}
            />
            {errors.confirm && <p>{errors.confirm.message}</p>}
            
            <button onClick={handleSubmit(onSubmit)}>Submit</button>
        </form>
    </div>
  )
}

    export default Register
