import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/Logo.svg' ;
import { toast } from 'react-hot-toast';

const Navbar = (props) => {

  let isLoggedIn = props.isLoggedIn ;
  let setIsLoggedIn = props.setIsLoggedIn ;

  return (
    <div className='flex justify-between w-11/12 max-w-[1160px] py-4 mx-auto'>

      <Link to="/">
        <img src={logo} alt='' width={160} height={32} loading='lazy' />
      </Link>

      <nav>
        <ul className='flex gap-x-6 text-slate-100'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav> 

      <div className='flex gap-4 '>

        { !isLoggedIn &&
          <Link to="/login">
            <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-slate-700'>
              Login
            </button>
          </Link> 
        }

        { !isLoggedIn &&
          <Link to="/signup">
          <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-slate-700'>
              Sign Up
            </button>
          </Link> 
        }

        { isLoggedIn &&
          <Link to="/">
            <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-slate-700'
             onClick={() => {
              setIsLoggedIn(false) ;
              toast.success("Logged out") ;
            }}>
              Log Out
            </button>
          </Link> 
        }

        { isLoggedIn &&
          <Link to="/dashboard">
          <button className='bg-slate-800 text-slate-100 py-[8px] px-[12px] rounded-[8px] border-slate-700'>
              Dashboard
            </button>
          </Link> 
        }

      </div>

    </div>
  )
}

export default Navbar