import React, {useEffect, useState} from 'react';
import './registrationWindow.css'
import {Link} from "react-router-dom";

const RegistrationWindow = () => {



    return (

        <div className={'borderRegistrationWindow'}>
            <h1 className={'borderRegistrationWindow_greetings'}>
                Welcome  to
                <div className={'borderRegistrationWindow_greetings_DLA'}>DLA</div>
            </h1>
            <div className={'borderRegistrationWindow_buttons'}>
                <button
                    className={'borderRegistrationWindow_buttons_button'}>
                    <Link className={'link'} to={'/sign_in'}>sign in</Link>
                </button>
                <button
                    className={'borderRegistrationWindow_buttons_button'}>
                    <Link className={'link'} to={'/sign_up'}>sign up</Link>
                </button>
            </div>
        </div>

    );
};

export default RegistrationWindow;