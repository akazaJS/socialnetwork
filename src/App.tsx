import React, {useState} from 'react';
import RegistrationWindow from "./components/registrationWindow/registrationWindow";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/registrationWindow/signUp";
import UserPage from "./components/userPage/userPage";
import LoginWindow from "./components/logInWindow/loginWindow";

const App = () => {



  return (
     <div className='App'>
         <Routes>
             <Route path={'/sign_in'} element={<LoginWindow/>}/>
             <Route path={'/'} element={<RegistrationWindow/>}/>
             <Route path={'/sign_up'} element={<SignUp/>}/>
             <Route path={'/user_page'} element={<UserPage/>}/>
         </Routes>
     </div>
  );
}

export default App