import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { FaSpinner, FaUserSecret } from 'react-icons/fa'
import Modal from './Modal'

export default function ForgotPassword() {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ name: '', email: '' });
    const [errorReg, setErrorReg] = useState(null);
    const [successReg, setSuccessReg] = useState(null);
    const [token, setToken] = useState('');
    const [tokenSent, setTokenSent] = useState(false);
    const [loading, setLoading] = useState(false); // State to manage the spinner
    const [loadingConfirmation, setLoadingConfirmation] = useState(false); // State to manage the spinner
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    }

    var timerId_one, timerId_two;

    const sideAction = () => {
        return new Promise((res, rej) => {
            timerId_one = setTimeout(res, 3000)
        }).then((res)=>setShowModal(true))
        .then((res)=>{timerId_two = setTimeout(()=>{setShowModal(false); 
            clearTimeout(timerId_one); clearTimeout(timerId_two)}, 6000); })
        // .then((res)=>clearTimeout(timerId_two))
        
    }

    const closeModal = () => {
        setShowModal(false);
      };

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setErrorReg('')
        setSuccessReg('')
        setLoading(true); // Start the spinner
        await sideAction()
        try {
            const response = await axios.post(
                `http://localhost:${process.env.REACT_APP_BACKEND_PORT}/auth/verifyUser/`, // Use email directly in URL
                {
                    email: credentials.email, // You can include this in the body if required by the server
                },
                {
                    withCredentials:true,
                    // headers: {
                    //     'Cache-Control': 'no-cache', // Optional, if caching is an issue
                    // },
                }
            );

            console.log(response.data);
            setSuccessReg(response.data?.success);
            setTokenSent(true);
        } catch (err) {
            console.error(err);
            setErrorReg(err?.response?.data?.error);
        } finally {
            setLoading(false); // Stop the spinner
        }
    };

    const handleConfirmToken = async (e) => {
        e.preventDefault()
        setErrorReg('')
        setSuccessReg('')
        setLoadingConfirmation(true); // Start the spinner
        await sideAction()
        var timerId;
        try {
          const response = await axios.post(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/auth/confirm-token`, { email: credentials.email, token }, {withCredentials:true});
            console.log('Token validated! You can now reset your password.');
            setSuccessReg(response.data?.success);
            // await sideAction().then((res)=>
            timerId = setTimeout(()=>{navigate('/auth/reset-password'); clearTimeout(timerId)}, 3000)
        } catch (err) {
            setErrorReg(err.response?.data?.error || 'Failed to validate token');
        }
        finally {
            setLoadingConfirmation(false); // Stop the spinner
        }
      };

    return (
        <div className='container max-w-[480px] bg-white text-black'>
           
        <form 
            onSubmit={handleForgotPassword}
            className="container max-w- shadow-2xl rounded flex 
            overflow-hidden flex-col items-center px-7 py-20 mx-auto w-full text-xl bg-white max-w-[480px] xsm:max-[400px]:p-2">
            
            {errorReg && 
                    <>
                    <p className='p-4 text-black text-center'>{errorReg}</p>
                    </>}
                    {successReg && 
                    <>
                    <p className='p-4 text-black text-center'>{successReg}</p>
                    </>}
            
            <div className="text-5xl tracking-tight leading-none text-blue-950">
                Forgot Password...
            </div>
            <div className="mt-7 text-2xl font-medium tracking-tight leading-none text-blue-950">
                Please enter email...
            </div>
            <div className="w-full flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
            {/* //   className="flex gap-10 self-center py-3.5 pr-52 pl-7 mt-16 -mr-1 ml-3 tracking-normal leading-none whitespace-nowrap bg-white rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80"> */}
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f276a93c2bbbbf41ef0cc62b0cbcb9dc3cfc03a7c6e6dcfa937e7afa66c6358?apiKey=661e1fa212c74d1c94d19e320025bbf6&"
                className="bg-white rounded-full h-[30px] m-auto object-contain shrink-0 aspect-[1.11] w-[30px]"
                />
                {/* <div className="mr-auto basis-auto">Username</div> */}
                <input 
                className="my-auto mr-auto p-2 w-full -ml-4 text-xl basis-auto bg-white rounded-2xl"
                name="email"
                placeholder="Email" 
                value={credentials.email}
                onChange={handleChange}
                type="email"/>
                
            </div>

            {tokenSent && 
            <>
            <div className="w-full flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
            {/* //   className="flex gap-10 self-center py-3.5 pr-52 pl-7 mt-16 -mr-1 ml-3 tracking-normal leading-none whitespace-nowrap bg-white rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80"> */}
                <FaUserSecret size={30} fill='white' className='m-auto rounded-full'/>
                {/* <div className="mr-auto basis-auto">Username</div> */}
                <input 
                className="my-auto mr-auto p-2 w-full -ml-4 text-xl basis-auto bg-white rounded-2xl"
                name="token"
                placeholder="Enter Token" 
                value={token}
                onChange={(e) => setToken(e.target.value)}
                // onChange={handleChange}
                type="text"/>
            </div>

            <button 
            onClick={handleConfirmToken}
            type="button"
            className="w-1/2 self-stretch px-4 py-3 mt-4 mx-auto text-xl text-white bg-pink-500 rounded-[33px]
            hover:bg-[rgba(232,240,254,0.5)] hover:text-pink-500 hover:border-pink-500 border-2 hover:transition-all duration-500 ease-in-out">
                {loadingConfirmation ?
                    <FaSpinner fill='blue' size={30} className='animate-spin m-auto' />
                : 'Confirm Token'}
            </button>
            </>
            }

            <button 
            type="submit"
            className="w-1/2 self-stretch px-4 py-3 mt-4 mx-auto text-xl text-white bg-pink-500 rounded-[33px]
            hover:bg-[rgba(232,240,254,0.5)] hover:text-pink-500 hover:border-pink-500 border-2 hover:transition-all duration-500 ease-in-out">
                {loading ?
                    <FaSpinner fill='white' size={30} className='animate-spin m-auto' />
                : 'Forgot Password'}
            </button>
            </form>

            {/* {tokenSent && (
                <>
                <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter the token" />
                <button onClick={handleConfirmToken}>Confirm Token</button>
                </>
            )} */}

            <Modal isOpen={showModal} onClose={closeModal}>
                <p className="text-red-600 mx-auto w-auto">{successReg || errorReg || 'Loading...'}</p>
            </Modal>
        </div>
    )
}

