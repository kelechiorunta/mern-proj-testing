import React, { useContext, useState } from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from '../services/api';
import { useNavigate } from 'react-router';
import { authContext } from './AuthContextComponent';

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
          timerId_one = setTimeout(res, 3000)
      }).then((res)=>setShowModal(true))
      .then((res)=>{timerId_two = setTimeout(()=>{setShowModal(false); 
          clearTimeout(timerId_one); clearTimeout(timerId_two)}, 6000); })
      // .then((res)=>clearTimeout(timerId_two))   
  }

  const responseGoogle = async (authResult) => {
	// e.preventDefault()
		try {
			if (authResult["code"]) {
				console.log(authResult.code);
				const result = await googleAuth(authResult.code);
				props.setUser(result.data.data.user);
				setAuthUser(result.data.data.user)
				setAuthUserToken(result.data.token)
				alert(`${result.data.data.user?.username} successfuly logged in`);
				navigate('/')
				console.log(authUser, authUserToken)
			} else {
				console.log(authResult);
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
		<button
			// style={{
			// 	padding: "10px 20px",
			// }}
			onClick={googleLogin}
		>
			Sign in with Google
		</button>
	);
}
