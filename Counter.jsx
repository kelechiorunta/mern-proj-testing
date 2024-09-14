import React, { useCallback, useMemo, memo, useEffect, useState, useRef } from 'react'
import { updatedValue, increment, decrement, asyncIncrementByAmount, getApiService } from '../redux/sliceReducer'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import axios from 'axios';
import socket from '../socket';

// import { useGetPokemonByNameQuery } from '../redux/sliceReducer';

function Counter() {
    
    const dispatch = useDispatch();
    const counterValue = useSelector((state) => state.counter.value);
    const modulusValue = useSelector((state) => state.counter.modulusVal);
    // const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
    const apiData = useSelector((state) => state.counter.api.data, shallowEqual);
    const [apiresult, setApiResult] = useState([])
    const [credentials, setCredentials] = useState({name:'', email:'', password:''})
    const [errorReg, setErrorReg] = useState(null)
    const [successReg, setSuccessReg] = useState(null)
    const activeRef = useRef(null)

    // socket.on('connect', () => {
    //     console.log('Connected to server');
    //   });
      
    //   socket.on('message', (message) => {
    //     console.log('Message from server:', message);
    //   });
      
    //   socket.on('disconnect', () => {
    //     console.log('Disconnected from server');
    //   });

    const fetchAPI = async() => {
        try{
            const response = await axios.get('http://localhost:8000/auth/allusers')
            setApiResult((response.data?.foundUsers))
        }
        catch(err){
            console.error(err)
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
        <div className='container p-2 shadow-md rounded-md flex flex-col gap-2
        bg-gradient-to-r from-slate-500 via-slate-200 to-slate-900'>
            <h1 className='p-2 font-medium text-2xl'>Counter</h1>
            <p className='p-3 text-white text-xl font-medium'>{counterValue}</p>
            <p className='p-3 text-white text-xl font-medium'>{modulusValue}</p>
            {console.log(apiresult)}
            <ul className='p-3 text-white text-xl font-medium'>
                {apiresult.map((user)=>{
                    return (
                        <li key={user._id}>{user?.username}</li>
                    )
                })}
            </ul>
                {/* if (isLoading) return <div>Loading...</div>;
                if (error) return <div>Error fetching Pokemon data.</div>;

                return <div>{data && data.name}</div>; */}
            {/* {errorReg && 
            <>
             <p className='text-white p-2'>{errorReg}</p>
            </>}
            {successReg && 
            <>
             <p className='text-white p-2'>{successReg}</p>
            </>}
            <form 
            onSubmit={handleRegister}
            className='flex flex-col p-2 bg-black gap-2 text-black'>
                <div className='flex items-end gap-y-2 gap-x-8'>
                    <label className='w-12 text-white' htmlFor='name'>Name:</label>
                    <input ref={activeRef}
                    type='text' name='name' placeholder='Name' onChange={handleChange}/>
                </div>
                <div className='flex items-end gap-y-2 gap-x-8'>
                    <label className='w-12 text-white' htmlFor='name'>Email:</label>
                    <input type='email' name='email' placeholder='Email' onChange={handleChange}/>
                </div>
                <div className='flex items-end gap-y-2 gap-x-8'>
                    <label className='w-12 text-white' htmlFor='name'>Password:</label>
                    <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
                </div>
               <button
               aria-haspopup='dialog' 
               type='submit'
            //    onClick={handleRegister}
                className='text-white w-max border-2 p-2 rounded
                hover:bg-white hover:text-black transition-all 
                duration-500 ease-in-out'>
                    Register
                </button>
            </form> */} 


            

            {/* {memoizedApi.map((items, index) => {
                return (
                    <ul 
                    key={items.id}
                    className='flex p-2 bg-white text-black flex-col gap-2'>
                        <li className='font-medium p-2'>{items.id}</li>
                    </ul>
                );
            })} */}

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
        </div>
    )
}

export default memo(Counter);
