import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import {useState} from "react";
import {signUpName} from "../peopleStore/peopleSlices";
import {Link} from "react-router-dom";
import {passIndex} from "../peopleStore/indexSlice";



const SignUp:FC= () => {

    const peopleList = useAppSelector(state => state.counter.personList)
    const pesronIndex = useAppSelector(state => state.index)

    const dispatch = useAppDispatch()

    const [name, setName] = useState<string>('');
    const [dirtyName,setDirtyName] = useState<boolean>(false)
    const [errorName,setErrorName] = useState<string>('Name must not be empty')

    const [surname, setSurname] = useState<string>('');
    const [dirtySurname,setDirtySurname] = useState<boolean>(false)
    const [errorSurname,setErrorSurname] = useState<string>('Surname must not be empty')

    const [birthday, setBirthday] = useState<string>('');
    const [dirtyBirthday,setDirtyBirthday] = useState<boolean>(false)
    const [errorBirthday,setErrorBirthday] = useState<string>('Birthday must not be empty')

    const [password, setPassword] = useState<string>('');
    const [dirtyPassword,setDirtyPassword] = useState<boolean>(false)
    const [errorPassword,setErrorPassword] = useState<string>('Password must not be empty')

    const [login, setLogin] = useState<string>('');
    const [dirtyLogin,setDirtyLogin] = useState<boolean>(false)
    const [errorLogin,setErrorLogin] = useState<string>('Login must not be empty')

    const [passButton,setPassButton] = useState<boolean>(false)

    useEffect(()=>{
        if(name === '' || surname === '' || birthday === '' || password === '' || login === ''){
            setPassButton(true)
        } else {
            setPassButton(false)
        }

        console.log(pesronIndex)

    },[name,surname,birthday,password,login])

    const blurHandler = (e:React.FocusEvent<HTMLInputElement>) =>{

            if (e.target.name === 'name' && e.target.value ==='') {
                setDirtyName(true)
            } else if (e.target.name === 'name' && e.target.value !== '') {
                setDirtyName(false)
            }

            if (e.target.name === 'surname' && e.target.value ==='') {
                setDirtySurname(true)
            } else if (e.target.name === 'surname' && e.target.value !=='') {
                setDirtySurname(false)
            }

            if (e.target.name === 'birthday'  && e.target.value ==='') {
                setDirtyBirthday(true)
            } else if (e.target.name === 'birthday' && e.target.value !== '' ) {
                setDirtyBirthday(false)
            }

            if (e.target.name === 'password' && e.target.value ==='') {
                setDirtyPassword(true)
            } else if (e.target.name === 'password' && e.target.value !== '') {
                setDirtyPassword(false)
            }

            if (e.target.name === 'login' && e.target.value ==='') {
                setDirtyLogin(true)
            } else if (e.target.name === 'login' && e.target.value !== '') {
                setDirtyLogin(false)
            }
    }




    return (
        <div className={'borderRegistrationWindow'}>
            <h3 className={'borderRegistrationWindow_greetings'}>
                create new account
            </h3>
            <div className={'borderRegistrationWindow_greetings_DLA'}><h1>DLA</h1></div>
            <div >
                <form name="regForm" className={'borderRegistrationWindow_personData'} >
                    {(dirtyName && errorName) && <div className={'error'}>{errorName}</div>}
                    <input
                            onChangeCapture={blurHandler}
                            placeholder={'name'}
                            name='name'
                            onChange={(e)=>setName(e.target.value)}
                            value={name}
                    />
                    {(dirtySurname && errorSurname) && <div className={'error'}>{errorSurname}</div>}
                    <input
                        onChangeCapture={blurHandler}
                        placeholder={'surname'}
                        name='surname' onChange={(e)=>setSurname(e.target.value)}
                        value={surname}
                    />
                    {(dirtyBirthday && errorBirthday) && <div className={'error'}>{errorBirthday}</div>}
                    <input
                        onChangeCapture={blurHandler}
                        placeholder={'birthday'}
                        name='birthday'
                        onChange={(e)=>setBirthday(e.target.value)}
                        value={birthday}
                    />
                    {(dirtyPassword && errorPassword) && <div className={'error'}>{errorPassword}</div>}
                    <input
                        onChangeCapture={blurHandler}
                        placeholder={'password'}
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        value={password}
                    />
                    {(dirtyLogin && errorLogin) && <div className={'error'}>{errorLogin}</div>}
                    <input
                        onChangeCapture={blurHandler}
                        placeholder={'login'}
                        name='login'
                        onChange={(e)=>setLogin(e.target.value)}
                        value={login}
                    />
                </form>
            </div>
            <button
                disabled={passButton}
                className={'borderRegistrationWindow_crBut'}
                onClick={()=>{
                    dispatch(signUpName({
                        name: name,
                        surname: surname,
                        birthday: birthday,
                        password: password,
                        login: login,
                        id:Math.floor(Math.random() * (10000 - 1000) + 1000)
                    }))
                    setTimeout(()=>{
                        setName('')
                        setSurname('')
                        setBirthday('')
                        setPassword('')
                        setLogin('')
                    },2000)
            }}
            >
              <Link
                  className={'link'}
                  to={`/sign_in`}>create new account</Link>
            </button>
        </div>
    );
};

export default SignUp;