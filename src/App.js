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

function App() {
  const { token } = useParams()
  return (
    <>
    <div className="bg-black text-white container flex flex-col min-w-full max-w-full min-h-screen items-center justify-center p-4 m-auto">
      <Routes>
        <Route path='/auth/forgot-password' element={<ForgotPassword/>} />
        <Route path='/auth/register' element={<Signup/>} />
        <Route path={`/auth/reset-password/`} element={<ResetPassword/>} />
        <Route path='/auth/login-user/' element={<Login/>} />
        <Route path='/tailors/' element={<SuggestedTailor/>} />
        <Route path='/' element={<Counter/>} />
      </Routes>
      {/* <Counter/> */}
    </div>
    </>
  );
}

export default App;
