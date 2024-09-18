import React, { useContext, useState } from 'react'
import { FaHamburger, FaSpinner } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'
import AuthContextComponent, { authContext } from './AuthContextComponent'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const parentVariant = {
    hidden: {opacity:0, x:0, y:-200},
    visible: {opacity:1, x:0, y:0,
    transition:{staggerChildren: 0.2, duration:0.3,
        repeatType:'reverse',
     }}
} 

const childVariant = {
    visible: { opacity: 1, x:0, 
    transition:{stagger:0.5}},
    hidden: { opacity: 0, x:20},    
}

export default function MainHeader() {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [errorReg, setErrorReg] = useState(null);
    const [successReg, setSuccessReg] = useState(null);
    const [showModal, setShowModal] = useState(false); // State for the modal visibility
    const [storedUser, setStoredUser] = useState(JSON.parse(localStorage.getItem('currentUser')))
    const { authUser, setAuthUser } = useContext(authContext)

    const closeModal = () => {
        setShowModal(false);
      };
      

    var timerId_one, timerId_two;

  const sideAction = () => {
    return new Promise((res, rej) => {
        timerId_one = setTimeout(res, 3000)
    }).then((res)=>setShowModal(true))
    .then((res)=>{timerId_two = setTimeout(()=>{setShowModal(false); 
    clearTimeout(timerId_one); clearTimeout(timerId_two)}, 6000); }) 
}

    const handlelogout = async() => {
        
        setErrorReg(''||null)
        setSuccessReg(''||null)
        setLoading(true)
        await sideAction();
        var timerId;
        try{
            const response = await axios.get('http://localhost:8000/auth/logout', {withCredentials: true})
            console.log(response.data?.success)
            
            setSuccessReg(`${authUser?.username}`+ response.data.success)
           localStorage.removeItem('currentUser')
           setStoredUser(null)
           setAuthUser(null)
            // setShowModal(true);
            navigate(response?.data?.path || '/auth/login-user/'); 
            // timerId = setTimeout(()=>{navigate(response?.data?.path); clearTimeout(timerId)}, 3000)
        }   
        catch(err){
            setSuccessReg(err.response.data.error)
            console.error("Unable to logout")
        }
        finally{
            setLoading(false)
        }
    }

  return (
    <header className='max-w-full flex justify-between items-center text-white text-xl container
    bg-[#1e4548] py-3 px-8 z-20 sticky top-0'>
        {/* <Image
        className='container max-w-[60px] w-[30%] h-[30%]'
        width={44}
        height={44}
        src='/images/logo.png' 
        alt='logo'/> */}

        <nav className={`uppercase container max-w-full flex items-center justify-evenly gap-4
        xsm:max-sm:hidden`}>
            <Link 
            // className={`${pathname==='/' && 'active animate-bounce'}`}
            to={'/'}>
                Home
            </Link>
            
            <button 
            onClick={(authUser || localStorage.getItem('currentUser')) && handlelogout}
            className={`uppercase ${loading && ' transition-all duration-200 ease-in-out animate-bounce bg-transparent font-semibold '}`}
            >
            {/* // {(!authUser || !localStorage.getItem('currentUser')) && '/auth/login-user'}> */}
            {
            // <Skeleton height={'auto'} width={100} className='animate-pulse m-auto'/>
            // <FaSpinner fill='white' size={30} className='animate-spin m-auto w-max'/>  */}
            //  : 
            authUser || localStorage.getItem('currentUser') ? 'Logout' : 'Login'
            }
            </button>
            
            <Link 
            // className={`${pathname==='/product' && 'active animate-bounce'}`}
            to={'/auth/register'}>
                Sign Up
            </Link>
            <Link 
            // className={`${pathname==='/about' && 'active animate-bounce'}`}
            to={'/chat'}>
                Chat
            </Link>
            <Link 
            // className={`${pathname==='/contact' && 'active animate-bounce'}`}
            to={'/inbox'}>
               Inbox
            </Link>
        </nav>
        <nav 
        onClick={handleToggle}
        className='hamburger-menu relative max-w-full flex flex-col md:max-2xl:hidden hover:cursor-pointer'>
            {/* <Image width={50} height={50} src={'/images/hamburger.png'} alt={'hamburger menu'}/> */}
            {/* <FaHamburger fill='white' size={30}/> */}
            {toggle && 
                <motion.nav 
                initial='hidden'
                animate='visible'
                variants={parentVariant}
                className='min-w-[350px] px-2 overflow-hidden max-w-full mx-auto flex flex-col absolute -right-[30%] pb-16  top-[65px] max-h-[270px] bg-white  text-black'>
                    <motion.a
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/'}>Home</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/product'}>Product</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/about'}>About</motion.a>
                    <motion.a 
                    transition={{stagger:0.3, duration:1}}
                    variants={childVariant}
                    className='min-w-[420px] max-w-full mx-auto py-4  text-xl hover:bg-slate-500 hover:text-white transition-all duration-200 ease-in-out' href={'/contact'}>Contact</motion.a>
                </motion.nav>
            }
        </nav>
        {/* Modal for displaying errors */}
        
        <Modal isOpen={showModal} onClose={closeModal}>
            <p className="text-red-600 mx-auto w-auto">{ successReg || errorReg || 'Loading...'}</p>
        </Modal>
    </header>
  )
}