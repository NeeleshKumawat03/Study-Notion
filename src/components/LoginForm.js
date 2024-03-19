import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" ;
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate() ;

    const [formData, setFormData] = useState({
        email:"", password:""
    })

    const [showPassword, setShowPassword] = useState(false) ;

    function changeHandler(event) {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault() ;
        setIsLoggedIn(true) ;
        toast.success("Logged In") ;
        navigate("../dashboard") ;

    }

  return (
    <form 
        onSubmit={submitHandler}
        className='flex flex-col w-full gap-y-4 mt-6'
    >

        <label className='w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
                Email Address<sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type='email'
                value={formData.email}
                onChange={changeHandler}
                placeholder='Enter Email Id'
                name='email'
                className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />  
        </label>

        <label className='relative w-full'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>
                Password<sup className='text-red-600'>*</sup>
            </p>
            <input
                required
                type={showPassword ? ("text") : ("password")}
                value={formData.password}
                onChange={changeHandler}
                placeholder='Enter Password'
                name='password'
                className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />  

            <span 
                className='absolute right-3 top-[38px] cursor-pointer'
                onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 
                (<AiOutlineEyeInvisible fontSize={24} fill='#AFb2BF'/>) : 
                (<AiOutlineEye fontSize={24} fill='#AFb2BF'/>)}
            </span>

            <Link to="#">
                <p className='text-right texl-xs text-blue-400 mt-1'>
                    Forgot Password
                </p>
            </Link>
        </label>

        <button className='bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px]'>
            Sign In
        </button>
    </form>
  )
}

export default LoginForm