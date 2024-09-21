import React, { useCallback, useMemo, memo, useEffect, useState, useRef, useContext } from 'react'
import { updatedValue, increment, decrement, asyncIncrementByAmount, getApiService } from '../redux/sliceReducer'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import axios from 'axios';
import socket from '../socket';
import  useAuthUser  from 'react-auth-kit/hooks/useAuthUser'
import useAuth from './custom_hooks/useAuth';
import { authContext } from './AuthContextComponent';
import { useNavigate } from 'react-router';
import Modal from './Modal';
import GoogleLogin from './GoogleLogin';

// import { useGetPokemonByNameQuery } from '../redux/sliceReducer';

function Counter() {
    
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);
    const modulusValue = useSelector((state) => state.counter.modulusVal);
    // const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
    const apiData = useSelector((state) => state.counter.api.data, shallowEqual);
    const [apiresult, setApiResult] = useState([])
    const [credentials, setCredentials] = useState({name:'', email:'', password:''})
    const [errorReg, setErrorReg] = useState(null)
    const [successReg, setSuccessReg] = useState(null)
    const [loading, setLoading] = useState(false)
    const activeRef = useRef(null)
    const currentUser = useAuthUser();
    const { loggedInUser, error, handleAuthLogin } = useAuth()
    const {authUser, setAuthUser} = useContext(authContext)
    const [showModal, setShowModal] = useState(false); // State for the modal visibility
    const [user, setUser] = useState();
    
    
    const closeModal = () => {
        setShowModal(false);
      };
    
    const getStoredUser = () => {
        const storedUser = localStorage.getItem('currentUser');
        return storedUser?  JSON.parse(storedUser) : null;
    }
    
    const getStoredToken = () => {
        const storedToken = localStorage.getItem('token');
        return storedToken?  JSON.parse(storedToken) : null;
    }

    // socket.on('connect', () => {
    //     console.log('Connected to server');
    //   });
      
    //   socket.on('message', (message) => {
    //     console.log('Message from server:', message);
    //   });
      
    //   socket.on('disconnect', () => {
    //     console.log('Disconnected from server');
    //   });

    var timerId_one, timerId_two;

  const sideAction = () => {
    return new Promise((res, rej) => {
        timerId_one = setTimeout(res, 3000)
    })
    .then((res)=>{timerId_two = setTimeout(()=>{setShowModal(false); 
        clearTimeout(timerId_one); clearTimeout(timerId_two)}, 6000); })
    // .then((res)=>clearTimeout(timerId_two))   
}

    const fetchAPI = async() => {
        const storedUser = localStorage.getItem('currentUser');
        setErrorReg(''||null)
        setSuccessReg(''||null)
        
        if (!storedUser){
            setLoading(true)
            await sideAction();
        } 
        var timerId;
        try{
            // setLoading(false)
            const response = await axios.get('http://localhost:8000/auth/allusers',{ withCredentials: true })
            setApiResult((response.data?.foundUsers))
            localStorage.setItem('currentUser', JSON.stringify(response.data));
            setLoading(false)
        }
        catch(err){
            // await sideAction();
            setLoading(true)
            console.error(err)
            setErrorReg(err?.response?.data?.error);
            setShowModal(true);
            timerId = setTimeout(()=>{navigate(err?.response?.data?.path); clearTimeout(timerId)}, 3000)
            localStorage.removeItem('currentUser')
            // navigate(err?.response?.data?.path)
            
            
        }
        finally{
            //  setLoading(false)
        }
    }

    useEffect(() => {
        

        socket.on('connect', () => {
            console.log('Connected to socket.io server');
        });
        
        // socket.on('disconnect', () => {
        //     console.log('Disconnected from socket.io server');
        // });
        
        
        
        fetchAPI()
        // activeRef.current.focus()

        socket.on('userAdded', (data) => {
            console.log('New user added:', data);
            // Optionally, you can re-fetch the user list or update the UI here
            fetchAPI();
        });
    
        // Cleanup when the component unmounts
        return () => {
            // socket.off('userAdded');
        };
    },[])

    const memoizedApi = useMemo(() => {
        return apiData;  // Return the value to memoize
    }, [apiData]);  // Add apiData as a dependency so it re-memoizes when apiData changes

    const handleIncrement = useCallback(() => {
        dispatch(increment());
    }, [dispatch]);

    const handleDecrement = useCallback(() => {
        dispatch(decrement());
    }, [dispatch]);

    const asyncAddition = useCallback((value) => {
        dispatch(asyncIncrementByAmount(value));
    }, [dispatch]);  // Remove `apiData` from the dependency array

    const handleApiService = useCallback((endpoint) => {
        dispatch(getApiService(endpoint));
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target
        setCredentials(prev => ({...prev, [name]:value }))

    }

    const handleRegister = async(e) => {
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:8000/auth/register', {
                username: credentials.name,
                email: credentials.email,
                password: credentials.password,
              },{
                headers: {
                    'Cache-Control': 'no-cache' // Make sure caching is disabled in request
                }
        })
              
            console.log(response.data)
            setSuccessReg(response.data?.success)
        }
        catch(err){
            console.error(err)
            setErrorReg(err?.response?.data?.error)
        }
        
    }


    return (
        <div className='bg-white container mx-auto max-w-[98%] p-2 shadow-md rounded-md flex flex-col gap-2
        bg-gradient-to-r from-slate-500 via-slate-200 to-slate-900'>

            <Modal isOpen={showModal} onClose={closeModal}>
                <p className="text-red-600 mx-auto w-auto">{ successReg || errorReg || 'Loading...'}</p>
            </Modal>

            {loading ? (
                        <div className='container max-w-full'>
                            <Skeleton height={100} width={200} className='animate-pulse m-auto' /> {/* Skeleton for name */}
                            <Skeleton height={100} width={250} className='animate-pulse m-auto' /> {/* Skeleton for email */}
                            <Skeleton circle={false} height={50} width={50} className='animate-pulse m-auto'/> {/* Circle Skeleton */}
                            <Skeleton count={10} className='animate-pulse m-auto'/> {/* Display multiple lines */}
                        </div>
                ) : (
                    <>
                        <h1 className='p-2 font-medium text-2xl'>Counter</h1>
                        {console.log(getStoredUser() && getStoredUser()?.username)}
                        <h1 className='p-2 font-medium text-2xl'>{getStoredUser() && getStoredUser()?.username}</h1>
                        {/* <h1 className='p-2 font-medium text-2xl'>{getStoredToken() && getStoredToken()}</h1> */}
                        <p className='p-3 text-white text-xl font-medium'>{counterValue}</p>
                        <p className='p-3 text-white text-xl font-medium'>{modulusValue}</p>
                        
                        {/* <div className='bg-blue-600 text-white container m-auto max-w-full'>
                            <GoogleLogin setUser={setUser}></GoogleLogin>
                            {user && user.name}
				            {user && user.email}
                        </div> */}


                        {console.log(apiresult)}
                        <ul className='p-3 text-white text-xl font-medium'>
                            {apiresult.map((user)=>{
                                return (
                                    <li key={user._id}>{user?.username}</li>
                                )
                            })}
                        </ul>
                        <div className='border-white min-h-2'
                        style={{width: 10 + modulusValue + `px`, backgroundColor: 'black'}}></div>
                        <button 
                        className='p-2 shadow-md rounded-md bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600'
                        onClick={handleIncrement}>
                            +
                        </button>
                        <button 
                        className='p-2 shadow-md rounded-md bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600'
                        onClick={handleDecrement}>
                            -
                        </button>
                        <button 
                        className='p-2 shadow-md rounded-md bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600'
                        onClick={() => asyncAddition(1)}>
                            asyncAdditionBy1
                        </button>
                        <button 
                        className='p-2 shadow-md rounded-md bg-gradient-to-r from-slate-600 via-slate-400 to-slate-600'
                        onClick={() => handleApiService('https://jsonplaceholder.typicode.com/posts')}>
                            API
                        </button>
                    </>
                    )}
        </div>
    )
}

export default memo(Counter);
