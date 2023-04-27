import React, {useEffect, useState} from 'react';
import './registrationWindow.css'
import {Link} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {passIndex} from "../peopleStore/indexSlice";



const Facial = () => {

    const [aboutUs,setAboutUs] = useState<boolean>(false)

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
        <div className={'facialPage'}>
            <div className={'facialPageHeader'}>
                <button
                    onClick={()=>{
                        aboutUs?setAboutUs(false):
                        setAboutUs(true)}}
                    className={'facialPageHeaderButton'}
                >
                    About us
                </button>
                <div className={'facialPageHeaderLoginAndRegistration'}>
                    <button className={'facialPageHeaderButton'}>
                        <Link className={'link'} to={'/sign_up'}>Sign up</Link>
                    </button>
                </div>
            </div>
            <div className={'facialPagePromo'}>
                <div className={'facialPagePromoAndPromoAddition'}>
                    <div className={'facialPagePromo_PromoDiv'}>
                        <h1 className={'facialPagePromo_Promo'}>
                            Daily & Leading Available
                        </h1>
                    </div>
                    <div className={'facialPagePromo_PromoAddition'}>
                        <h3>
                            Why should you choose DLA?
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus explicabo illum laboriosam totam. Accusamus aperiam, eaque eveniet molestiae molestias nostrum numquam possimus quos sapiente sed tempore ut? Adipisci architecto corporis cupiditate deserunt dolorum eaque enim eos, error et harum hic impedit iste maiores natus, nihil nisi non officiis quasi quo quod ratione rerum similique soluta tempora ut, vitae voluptas voluptate? Accusantium animi aperiam at atque consequatur corporis cupiditate debitis dignissimos dolorem eius eos fugiat illo inventore itaque laboriosam magni maxime nam nobis numquam obcaecati odit optio perferendis possimus quasi quisquam, quo, quod ratione reprehenderit soluta tempora vel, veniam vitae voluptatem!
                        </p>
                    </div>
                </div>
            </div>
            <div className={'facialPageFooter'}>
                <div className={'facialPageCreateAccount'}>
                    <p className={'facialPagePromo_PromoAddition'}>
                        Only safe and verified messages
                    </p>
                    {loginButtonClickValue ?
                        <div className={'login_window_form'}>
                            {loginError ? <div className={'error'}>Incorrect login</div>:<div  className={'errorNO'}>Enter login</div>}
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
                            <div className={'buttonAndAdd'}>
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
                                    className={'facialPageCreateAccountButton'}
                                >
                                    continue
                                </button>
                                <button className={'facialPageCreateAccountAddition'}>Forgot your password?</button>
                            </div>
                        </div>
                        :
                        <div className={'login_window_form'}>
                            {passwordError? <div className={'error'}>Incorrect password</div>:
                                <div className={'errorNO'}>Enter password</div>}
                            <input
                                value={password}
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                    setPasswordError(false)
                                }
                                }
                                placeholder={'password'}
                                className={'facialPageCreateAccountLogPas'}
                            />
                            <div className={'buttons'}>
                                {passwordButtonClickValue?
                                    <div className={'buttonAndAdd'}>
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
                                        <button className={'facialPageCreateAccountAddition'}>Forgot your password?</button>
                                    </div>
                                    :
                                    <div className={'facialPageCreateAccountButton'}>
                                        {passwordButtonClickValue ?
                                            <Link to={'/sign_up'} className={'facialPageCreateAccountButtonLink'}>Registration</Link>
                                            :
                                            <Link to={'/user_page'} className={'facialPageCreateAccountButtonLink'}>Sign in</Link>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>

            </div>

        </div>
    );
};
export default Facial;