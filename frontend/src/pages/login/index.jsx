import React, { useEffect } from 'react'
import InputComponent from '../../components/common/InutComponent';
import ButtonComponent from '../../components/common/ButtonComponent';
import { NavLink, useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { resetUserState, setUserKey } from '../../store/User/userSlice';
import { useLoginUserMutation } from '../../store/User/UserApi/loginUserApi';
import { userSelector } from '../../store/User/UserSelector';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [triggerLogin] = useLoginUserMutation();
  const user = useSelector(userSelector)

  const handleChange=(key, value)=>{
    dispatch(setUserKey({key,value})); 
  }
  const handleResetClick=()=>{
  }


  const handleLogin = async()=>{
    try{
      await triggerLogin(user);
      navigate("/user/dashboard");
    }
    catch(error){
      console.log("There was an error in Logging in",error);
    }
  }

  useEffect(()=>{
    dispatch(resetUserState());
  },[]);
  
  return (
    <div className='bg-gray-400 w-full h-screen flex justify-center items-center'>
      <div className='border-blue-50 bg-blue-200 w-100 h-120 rounded-2xl flex flex-col justify-top items-center gap-2'>
        <h1 className='flex justify-center items-center h-15 font-bold text-2xl mt-10'>Login</h1>

        <div className='border w-90 h-60 flex flex-col gap-4 pt-4 rounded-xl'>
          <InputComponent 
            id="email"
            label="Email"
            placeholder="Enter your Email"
            onChange={(e)=>handleChange("email", e.target.value)}
          />
          
          <InputComponent 
            id="password" 
            label="Password"
            placeholder="Enter your Password"
            onChange={(e)=>handleChange("password", e.target.value)}            
          />
          <NavLink to={"/register"}>
            <div className='w-full text-center'>A new user? Register here.</div>
          </NavLink>
        
        </div>


        <ButtonComponent onClick={handleLogin} ButtonName="Login" />

      </div>
    </div>
  )
}

export default Login;
