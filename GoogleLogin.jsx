import React, { useContext, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from '../services/api';
import { useNavigate } from 'react-router';
import { authContext } from './AuthContextComponent';
import Modal from './Modal';
import { FaSpinner } from 'react-icons/fa6';

export default function GoogleLogin(props) {
	const navigate = useNavigate()
	const {authUser, authUserToken, setAuthUser, setAuthUserToken} = useContext(authContext)
	const [errorReg, setErrorReg] = useState(null);
  	const [successReg, setSuccessReg] = useState(null);
  	const [showModal, setShowModal] = useState(false);

	  const closeModal = () => {
		setShowModal(false);
	  };

	var timerId_one, timerId_two;

    const sideAction = () => {
      return new Promise((res, rej) => {
          timerId_one = setTimeout(res, 1000)
      }).then((res)=>setShowModal(true))
      .then((res)=>{timerId_two = setTimeout(()=>{setShowModal(false); 
          clearTimeout(timerId_one); clearTimeout(timerId_two)}, 6000); })
      // .then((res)=>clearTimeout(timerId_two))   
  }

  const responseGoogle = async (authResult) => {
	// e.preventDefault()
	var timerId
	setSuccessReg('')
	setErrorReg('')
	await sideAction()
		try {
			if (authResult["code"]) {
				console.log(authResult.code);
				const result = await googleAuth(authResult.code);
				props.setUser(result.data.data.user);
				setAuthUser(result.data.data.user)
				setAuthUserToken(result.data.token)
				localStorage.setItem('signedInUser', JSON.stringify(result.data.data.user))
				// alert(`${result.data.data.user?.username || result.data.data.user?.name } successfuly logged in`);
				setSuccessReg(`${result.data.data.user?.username || result.data.data.user?.name } successfuly logged in`);
      			timerId = setTimeout(()=>{navigate('/'); clearTimeout(timerId)}, 3000)
				//navigate('/')
				
			} else {
				console.log(authResult);
				setErrorReg(`Failed log in`);
				throw new Error(authResult);
				
			}
		} catch (e) {
			console.log(e);
		}
	};

	const googleLogin = useGoogleLogin({
		onSuccess: responseGoogle,
		onError: responseGoogle,
		flow: "auth-code",
	});

	return (
		<>
		<div className='absolute'>
			<Modal isOpen={showModal} onClose={closeModal}>
				<p className="text-red-600 mx-auto w-auto">{ successReg || errorReg || <FaSpinner fill='pink' size={30} className='animate-spin m-auto'/>}</p>
			</Modal>
		</div>

		<button
			// style={{
			// 	padding: "10px 20px",
			// }}
			onClick={googleLogin}
		>
			Sign in with Google
		</button>
		</>
	);
}
