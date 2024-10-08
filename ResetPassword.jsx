import React, {useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { FaSpinner } from "react-icons/fa6";

function ResetPassword() {

    const { token } = useParams()
    const navigate = useNavigate()
    const [loadingReset, setLoadingReset] = useState(false); // State to manage the spinner
    const [showModal, setShowModal] = useState(false);
    const [errorReg, setErrorReg] = useState(null);
    const [successReg, setSuccessReg] = useState(null);
    // const [showModal, setShowModal] = useState(false);

    const [credentials, setCredentials] = useState({email:'', changePassword:'', confirmPassword:''})

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials(prev => ({...prev, [name]:value}))
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

    const handleResetPassword = async(e) => {
        e.preventDefault();
        setErrorReg('')
        setSuccessReg('')
        setLoadingReset(true); // Start the spinner
        await sideAction()
        var timerId;
        try{
            const response = await axios.post(`http://localhost:${process.env.REACT_APP_BACKEND_PORT}/auth/reset-password/`, {
                
                email: credentials.email,
                changePassword: credentials.changePassword,
                confirmPassword: credentials.confirmPassword
            },
            { withCredentials: true,
            // headers: {
            //     'Authorization': `Bearer ${token}` // Send the token in the Authorization header
            //   }
            })
            console.log(response.data)
            // navigate('/auth/login-user')
            setSuccessReg(response.data?.success)
            timerId = setTimeout(()=>{navigate('/auth/login-user'); clearTimeout(timerId)}, 3000)
        }
        catch(err){
            console.error("Failed")
            setErrorReg(err?.response?.data?.error)
            timerId = setTimeout(()=>{navigate(err?.response?.data?.path); clearTimeout(timerId)}, 3000)
        }
        finally {
          setLoadingReset(false); // Stop the spinner
      }
    }
  return (
    <form 
    onSubmit={handleResetPassword}
    className="container max-w- shadow-2xl rounded flex 
    overflow-hidden flex-col items-center px-7 py-36 mx-auto w-full text-xl bg-white max-w-[480px] xsm:max-[400px]:p-2">
      <div className="text-5xl tracking-tight leading-none text-blue-950">
        Reset Password
      </div>
      <div className="mt-7 text-2xl font-medium tracking-tight leading-none text-blue-950">
        Kindly enter a new password
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
        className="my-auto mr-auto w-full p-2 -ml-4 text-xl basis-auto bg-white rounded-2xl"
        name="email"
        placeholder="Email" 
        value={credentials.email}
        onChange={handleChange}
        type="email"/>
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
        className="my-auto mr-auto w-full p-2 -ml-4 text-xl basis-auto bg-white rounded-2xl"
        name="changePassword"
        placeholder="Enter New Password" 
        value={credentials.changePassword}
        onChange={handleChange}
        type="password"/>
      </div>
      <div className="w-full flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed0a7cf8e2cb7184adbc566c6524b5190e2f81e03807f00f9d92b6e8cfa2539?apiKey=661e1fa212c74d1c94d19e320025bbf6&"
          className="bg-white rounded-full h-[30px] m-auto object-contain shrink-0 aspect-[1.11] w-[30px]"
          //   className="object-contain shrink-0 aspect-[1.18] w-[47px]"
        />
        <input 
        className="my-auto mr-auto w-full p-2 -ml-4 text-xl basis-auto bg-white rounded-2xl"
        placeholder="Confirm Password"
        value={credentials.confirmPassword}
        onChange={handleChange}
        name="confirmPassword" 
        type="password"/>
      </div>
      {/* <div className="flex gap-2.5 mt-1.5 max-w-full text-base w-[261px]">
        <div className="grow text-pink-500">Don’t have an account?</div>
        <div className="font-semibold text-blue-950">Sign up</div>
      </div> */}
      <button 
      type="submit"
      className="w-1/2 self-stretch px-4 py-3 mt-4 mx-auto text-xl text-white bg-pink-500 rounded-[33px]
      hover:bg-[rgba(232,240,254,0.5)] hover:text-pink-500 hover:border-pink-500 border-2 hover:transition-all duration-500 ease-in-out">
        {loadingReset ?
                    <FaSpinner fill='white' size={30} className='animate-spin m-auto' />
          : 'Reset Password'}
      </button>
      {/* <div className="flex gap-2 mt-4 max-w-full tracking-normal leading-none w-[175px]">
        <div className="grow text-blue-950">Forgot </div>
        <div className="grow shrink text-pink-500 w-[92px]">Password? </div>
      </div> */}

            <Modal isOpen={showModal} onClose={closeModal}>
                <p className="text-red-600 mx-auto w-auto">{successReg || errorReg || 'Loading...'}</p>
            </Modal>
    </form>
  );
}
export default ResetPassword
