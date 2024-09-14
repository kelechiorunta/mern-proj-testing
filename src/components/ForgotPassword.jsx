import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { FaSpinner } from 'react-icons/fa'

export default function ForgotPassword() {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState({ name: '', email: '' });
    const [errorReg, setErrorReg] = useState(null);
    const [successReg, setSuccessReg] = useState(null);
    const [token, setToken] = useState('');
    const [tokenSent, setTokenSent] = useState(false);
    const [loading, setLoading] = useState(false); // State to manage the spinner

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials(prev => ({ ...prev, [name]: value }));
    }

    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setLoading(true); // Start the spinner
        try {
            const response = await axios.post(
                `http://localhost:8000/auth/verifyUser/`, // Use email directly in URL
                {
                    email: credentials.email, // You can include this in the body if required by the server
                },
                {
                    headers: {
                        'Cache-Control': 'no-cache', // Optional, if caching is an issue
                    },
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

    const handleConfirmToken = async () => {
        try {
          const response = await axios.post('http://localhost:8000/auth/confirm-token', { email: credentials.email, token });
            console.log('Token validated! You can now reset your password.');
            setSuccessReg(response.data?.success);
            navigate('/auth/reset-password')
        } catch (err) {
            setErrorReg(err.response?.data?.error || 'Failed to validate token');
        }
      };

    return (
        <div className='container max-w-[480px] bg-white text-black'>
           
        <form 
            onSubmit={handleForgotPassword}
            className="container max-w- shadow-2xl rounded flex 
            overflow-hidden flex-col items-center px-7 py-36 mx-auto w-full text-xl bg-white max-w-[480px] xsm:max-[400px]:p-2">
            
            {errorReg && 
                    <>
                    <p className='p-4 text-black'>{errorReg}</p>
                    </>}
                    {successReg && 
                    <>
                    <p className='p-4 text-black'>{successReg}</p>
                    </>}
            
            <div className="text-5xl tracking-tight leading-none text-blue-950">
                Forgot Password...
            </div>
            <div className="mt-7 text-2xl font-medium tracking-tight leading-none text-blue-950">
                Please enter email...
            </div>
            <div className="w-max flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
            {/* //   className="flex gap-10 self-center py-3.5 pr-52 pl-7 mt-16 -mr-1 ml-3 tracking-normal leading-none whitespace-nowrap bg-white rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80"> */}
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f276a93c2bbbbf41ef0cc62b0cbcb9dc3cfc03a7c6e6dcfa937e7afa66c6358?apiKey=661e1fa212c74d1c94d19e320025bbf6&"
                className="bg-white rounded-full h-[30px] m-auto object-contain shrink-0 aspect-[1.11] w-[30px]"
                />
                {/* <div className="mr-auto basis-auto">Username</div> */}
                <input 
                className="my-auto mr-auto w-full -ml-4 text-xl basis-auto bg-white rounded-2xl"
                name="email"
                placeholder="Email" 
                value={credentials.email}
                onChange={handleChange}
                type="email"/>
            </div>
            
            <button 
            type="submit"
            className="w-max self-stretch px-16 py-3 mt-4 mx-auto text-3xl text-white bg-pink-500 rounded-[33px]">
                {loading ?
                    <FaSpinner fill='blue' size={30} className='animate-spin m-auto' />
                : 'Forgot Password'}
            </button>
            </form>

            {tokenSent && (
                <>
                <input type="text" value={token} onChange={(e) => setToken(e.target.value)} placeholder="Enter the token" />
                <button onClick={handleConfirmToken}>Confirm Token</button>
                </>
            )}
        </div>
    )
}

