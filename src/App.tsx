import React, {useState} from 'react';

import Facial from "./components/registrationWindow/facial";
import SignUp from "./components/registrationWindow/signUp";
import UserPage from "./components/userPage/userPage";
import {Route, Routes} from "react-router-dom";
import LoginWindow from "./components/logInWindow/loginWindow";

const App = () => {



  return (
     <div className='App'>
         <Routes>
             <Route path={'/sign_in'} element={<LoginWindow/>}/>
             <Route path={'/'} element={<Facial/>}/>
             <Route path={'/sign_up'} element={<SignUp/>}/>
             <Route path={'/user_page'} element={<UserPage/>}/>
         </Routes>
     </div>
  );
}

export default App