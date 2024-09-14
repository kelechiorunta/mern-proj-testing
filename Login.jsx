import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import Modal from './Modal'; // Import the Modal component
import { FaSpinner } from "react-icons/fa";

function Login() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [errorReg, setErrorReg] = useState(null);
  const [successReg, setSuccessReg] = useState(null);
  const [showModal, setShowModal] = useState(false); // State for the modal visibility
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await axios.post("http://localhost:8000/auth/login-user", {
        email: credentials.email,
        password: credentials.password,
      });
      console.log(response.data);
      setSuccessReg(response.data?.success);
      navigate("/");
    } catch (err) {
      console.error(err?.response?.data?.error);
      setErrorReg(err?.response?.data?.error);
      setShowModal(true); // Show the modal when there is an error
    }
    finally{
      setLoading(false)
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <form 
        onSubmit={handleLogin}
        className="container max-w- shadow-2xl rounded flex 
        overflow-hidden flex-col items-center px-7 py-20 mx-auto w-full text-xl bg-white max-w-[480px]">
        
       <div className="text-5xl tracking-tight leading-none text-blue-950">
         Login
       </div>
       <div className="mt-7 text-2xl font-medium tracking-tight leading-none text-blue-950">
         Please sign in...
       </div>
       <div className="w-full flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border shadow-pink-500 shadow-sm border-solid text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
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
      <div className="w-full flex gap-8 self-center py-0 pl-2 mt-8 ml-3.5 tracking-normal leading-none whitespace-nowrap bg-[#ec4899] rounded-2xl border shadow-pink-500 shadow-sm text-blue-950 text-opacity-80 xsm:max-[400px]:mx-auto">
    {/* //   className="flex gap-10 self-center py-3.5 pr-52 pl-7 mt-16 -mr-1 ml-3 tracking-normal leading-none whitespace-nowrap bg-white rounded-2xl border border-pink-500 border-solid text-blue-950 text-opacity-80"> */}
      <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ed0a7cf8e2cb7184adbc566c6524b5190e2f81e03807f00f9d92b6e8cfa2539?apiKey=661e1fa212c74d1c94d19e320025bbf6&"
          className="bg-white rounded-full h-[30px] m-auto object-contain shrink-0 aspect-[1.11] w-[30px]"
          //   className="object-contain shrink-0 aspect-[1.18] w-[47px]"
        />
        {/* <div className="mr-auto basis-auto">Username</div> */}
        <input 
        className="my-auto mr-auto w-full p-2 -ml-4 text-xl basis-auto bg-white rounded-2xl"
        name="password"
        placeholder="Password" 
        value={credentials.password}
        onChange={handleChange}
        type="password"/>
      </div>
        
        <button 
          type="submit"
          className="w-max self-stretch px-16 py-3 mt-8 mx-auto
           text-xl text-white bg-pink-500 rounded-[33px]
           hover:bg-[rgba(232,240,254,0.5)] hover:text-pink-500 hover:border-pink-500 border-2 hover:transition-all duration-500 ease-in-out">
          {loading ?
                    <FaSpinner fill='pink' size={30} className='animate-spin m-auto' />
                    :
            'Log in'
          }
        </button>

        <Link className="p-2 italic text-xl mt-4 text-black" to={'/auth/register'}>
          Register as a New User
        </Link>
        <Link className="p-2 italic text-xl text-black" to={'/auth/forgot-password'}>
          Forgot Password
        </Link>
      </form>

      {/* Modal for displaying errors */}
      <Modal isOpen={showModal} onClose={closeModal}>
        <p className="text-red-600 mx-auto w-auto">{errorReg}</p>
      </Modal>
    </>
  );
}

export default Login;
