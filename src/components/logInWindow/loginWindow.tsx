import React, {FC, useEffect, useState} from 'react';
import './loginWindow.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {passIndex} from "../peopleStore/indexSlice";



const LoginWindow:FC= () => {

    const peopleList = useAppSelector(state => state.counter.personList)
    const dispatch = useAppDispatch()
    const pesronIndex = useAppSelector(state => state.index)

    const [login,setLogin] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [passedLogin,setPassedLogin] = useState<boolean>(false)
    const [passedPassword,setPassedPassword] = useState<boolean>(false)
    const [index,setIndex] = useState<number | null>(null)
    const [loginButtonClickValue,setLoginButtonClickValue] = useState<boolean>(true)
    const [loginError,setLoginError] = useState<boolean>(false)
    const [passwordError,setPasswordError] =useState<boolean>(false)
    const [passwordButtonClickValue,setPasswordButtonClickValue] = useState<boolean>(true)


    useEffect(()=>{

        const personLogin = peopleList.findIndex(e => e.login === login);

        if (personLogin !== -1) {
            setPassedLogin(true)
            setIndex(personLogin)
        }
        if(index !== null && password === peopleList[index].password){
            setPassedPassword(true)
        }


    },[login,password,index])

    return (
        <div className={'login_window'}>
            <div className={'facialPageCreateAccount'}>
                {loginButtonClickValue ?
                    <div className={'login_window_form'}>
                        {loginError ? <div className={'error'}>Incorrect login</div>:<div></div>}
                        <input
                            value={login}
                            onChange={(e)=> {
                                setLogin(e.target.value)
                                setLoginError(false)
                            }
                        }
                            placeholder={'login'}
                            className={'facialPageCreateAccountLogPas'}
                        />
                        <button
                            onClick={()=>{
                               if(passedLogin && index !==null && login === peopleList[index].login)
                               {
                                   setLoginButtonClickValue(false)
                                   dispatch(passIndex(index))
                                   console.log(pesronIndex.index)
                               }else {
                                   setLoginError(true)
                               }
                            }}
                            className={'facialPageCreateAccountButton'}>continue</button>
                    </div>
                         :
                    <div className={'login_window_form'}>
                        {passwordError? <div className={'error'}>Incorrect password</div>:<div></div>}
                        <input
                        value={password}
                        onChange={(e)=>{
                            setPassword(e.target.value)
                            setPasswordError(false)
                            }
                        }
                        placeholder={'password'}
                        className={'login_window_form_password'}
                        />
                        <button
                            onClick={()=>{
                                if(passedPassword && index !==null && password === peopleList[index].password){
                                   setPasswordButtonClickValue(false)
                                }else {
                                    setPasswordError(true)
                                }
                            }
                            }
                            className={'facialPageCreateAccountButton'}>
                            continue
                        </button>
                    </div>}
            </div>
            {passwordButtonClickValue ?
                <h3 className={'login_window_greetings'}>
                    or register if you don't have an account
                </h3>
                :
                <div></div>
            }
            <div className={'login_window_buttons'}>
                {passwordButtonClickValue ?
                    <Link to={'/sign_up'} className={'login_window_buttons_button'}>back to registration</Link>
                         :
                    <Link to={'/user_page'} className={'login_window_buttons_button'}>sign in</Link>
                }
            </div>
        </div>
    );
};

export default LoginWindow;