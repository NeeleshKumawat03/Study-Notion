import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai" ;
import { useNavigate } from 'react-router-dom';

const SignupForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate() ;

  const [formData, setFormData] = useState({
    firstName:'',
    lastName:'',
    password:'',
    confirmPassword:''
  })

  const [showPassword, setShowPassword] = useState(false) ;
  const [showConfirmPassword, setShowConfirmPassword] = useState(false) ;
  const [accountType, setAccountType] = useState("student") ;

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
        if(formData.password !== formData.confirmPassword) {
            toast.error("Password do not Match") ;
            return ;
        }
        setIsLoggedIn(true) ;
        toast.success("Account Created") ;
        const accountData = {
          ...formData
        };
        const finalData = {
          ...accountData,
          accountType
        }
        navigate("/dashboard") ;
    }



  return (
    <div>

      <div className='bg-slate-800 flex flex-row rounded-full p-1 gap-x-1 my-6 max-w-max'>

        <button 
          className={`${accountType === "student" ? 
          "bg-slate-900 text-slate-100":
          "bg-transparent text-slate-200"} py-2 px-5 rounded-full tranisition-all duration-200` }
          onClick={() => {
            setAccountType("student") ;
          }}
        >
          Student
        </button>

        <button 
          className={`${accountType === "instructor" ? 
          "bg-slate-900 text-slate-100":
          "bg-transparent text-slate-200"} py-2 px-5 rounded-full tranisition-all duration-200` }
          onClick={() => {
            setAccountType("instructor") ;
          }}
        >
          Instructor
        </button>

      </div>

      <form onSubmit={submitHandler}>
        <div className='flex gap-x-10 mt-10'>
          <label>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>First Name<sup className='text-red-600'>*</sup></p>
            <input
              required
              type='text'
              name='firstName'
              onChange={changeHandler}
              placeholder='Enter First Name'
              value={formData.firstName}
              className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />
          </label>

          <label>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Last Name<sup className='text-red-600'>*</sup></p>
            <input
              required
              type='text'
              name='lastName'
              onChange={changeHandler}
              placeholder='Enter Last Name'
              value={formData.lastName}
              className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />
          </label>
        </div>
        <br/>
        <label>
          <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Email Address<sup className='text-red-600'>*</sup></p>
          <input
            required
            type='email'
            name='email'
            onChange={changeHandler}
            placeholder='Enter Email Address'
            value={formData.email}
            className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
          />
        </label>
        <br/>
        <br/>
        <div className='flex gap-x-10'>

          <label className='relative'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-600'>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name='password'
              onChange={changeHandler}
              placeholder='Enter Password'
              value={formData.password}
              className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />
            <span 
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFb2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFb2BF'/>)}
            </span>
          </label>

          <label className='relative'>
            <p className='text-[0.875rem] text-slate-50 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-red-600'>*</sup></p>
            <input
              required
              type={showPassword ? ("text") : ("password")}
              name='confirmPassword'
              onChange={changeHandler}
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              className='w-full bg-slate-800 rounded-[0.5rem] text-slate-500 p-[12px] border-b-2 border-b-slate-500'
            />
            <span 
              className='absolute right-3 top-[38px] cursor-pointer'
              onClick={() => setShowConfirmPassword((prev) => !prev)}>
                {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFb2BF'/>) : (<AiOutlineEye fontSize={24} fill='#AFb2BF'/>)}
            </span>

          </label>
        </div>

        <button className='w-full bg-yellow-400 rounded-[8px] font-medium text-black px-[12px] py-[8px] mt-10'>
          Create Account
        </button>
        
      </form>

    </div>
  )
}

export default SignupForm