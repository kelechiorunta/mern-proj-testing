import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Counter from './components/Counter';
import ResetPassword from './components/ResetPassword';
import Login from './components/Login';
import { useParams } from 'react-router-dom';
import ForgotPassword from './components/ForgotPassword';
import Signup from './components/Signup';
import SuggestedTailor from './components/SuggestedTailor';
import OptimizedSuggestedTailor from './components/OptimizedSuggestedTailor';
import AuthProvider from 'react-auth-kit/AuthProvider';
import store from '../src/react-auth-kit/store'
import ChatInbox from './components/ChatInbox';
import SelectedChat from './components/SelectedChat';
import ProtectedRoute from './components/ProtectedRoute';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {
  const { token } = useParams()
  return (
    <>
    <div className="bg-black text-white container flex flex-col min-w-full max-w-full min-h-screen items-center justify-center p-4 m-auto">
      <AuthProvider store={store}>
        <GoogleOAuthProvider clientId={process.env.OAUTH_CLIENT_ID}>
          {console.log(process.env.OAUTH_CLIENT_ID)}
          <Routes>
            <Route path='/auth/forgot-password' element={<ForgotPassword/>} />
            <Route path='/auth/register' element={<Signup/>} />
            <Route path={`/auth/reset-password/`} element={<ResetPassword/>} />
            <Route path='/auth/login-user/' element={<Login/>} />
            <Route path='/tailors/' element={<SuggestedTailor/>} />
            
            <Route element={<ProtectedRoute />}>
                <Route path='/inbox/' element={<ChatInbox/>} />
                <Route path='/chat/' element={<SelectedChat/>} />
              </Route>
            
            <Route path='/contact' element={<OptimizedSuggestedTailor/>} />
            <Route path='/' element={<Counter/>} />
          </Routes>
        </GoogleOAuthProvider>
      </AuthProvider>
      {/* <Counter/> */}
    </div>
    </>
  );
}

export default App;
