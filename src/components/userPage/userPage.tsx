import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/hooks";
import './userPage.css'
import {Link} from "react-router-dom";
import {addToFriends, sendDMeil} from "../peopleStore/peopleSlices";


const UserPage:FC =()=>{

    const peopleList = useAppSelector(state => state.counter.personList)
    const pesronIndex = useAppSelector(state => state.index)
    const dispatch = useAppDispatch()

    const [index,setIndex] = useState<number>(0)
    const [search,setSearch ] =useState<string>('')
    const [messenger,setMessenger] = useState<number>(0)
    const [activeMessenger,setActiveMessenger] = useState<boolean>(false)
    const [typedMessage,setTypedMessage] = useState<string>('')
    const [minutesValue,setMinutesValue] = useState<boolean>(true)
    const [mainPicture,setMainPicture] = useState<boolean>(true)


    let date:Date = new Date

    const attractorField = ()=>{
        return peopleList
            .filter(pers=>pers.id===messenger || pers.id === peopleList[index].id)
            .map(pers=>pers.messages)
            .flat()
            .sort((a,b)=>a.dateTime-b.dateTime)
    }

    const lastMessage = ()=>{
        if(attractorField().length>0){
            return attractorField()[attractorField().length-1].nameFrom}
        }

    const lastMessageText = ()=>{
        if(attractorField().length>0){
            return attractorField()[attractorField().length-1].text}
    }


    useEffect(()=>{

        if(pesronIndex.index !== null){
            setIndex(pesronIndex.index)
        }

        console.log(attractorField())

        if(peopleList[index].mainPicture === undefined){
          setMainPicture(false)
        }

    },[typedMessage,messenger,minutesValue,index])


    return (
        <div className={'UserPage'}>
            <div className={'UserPage_Header'}>
                <div className={'UserPage_Header_Search_and_PI'}>
                    <div className={'UserPage_Header_Search'}>
                        <div className={'UserPage_Header_Search_Dropdown'}>
                            <input
                                onChange={(e)=>{setSearch(e.target.value)}}
                                value={search}
                                className={'UserPage_Header_Search_Dropdown_Input'}
                                placeholder={'search...'}
                            />
                            <div className={'UserPage_Header_Dropdown_List'}>
                                {peopleList
                                    .filter(e=>e.login === search)
                                    .map(e=>
                                        <div
                                            onClick={() => {
                                                if(e.id !== peopleList[index].id){
                                                        dispatch(addToFriends({
                                                            addedIndex:index,
                                                            added:peopleList[index].id,
                                                            name: e.name,
                                                            id: e.id,
                                                            surname: e.surname
                                                        }))
                                                    }
                                                setSearch('')
                                            }}
                                            className={'UserPage_Header_Dropdown_Content'}
                                            key={e.id}
                                        >
                                            <img
                                                style={{width:'30px',height:'30px',borderRadius:'50%',objectFit:'cover'}}
                                                src={e.mainPicture}
                                            />
                                           <div className={'c'}> {e.name} {e.surname}</div>
                                        </div>)
                                }
                            </div>
                        </div>
                        <div
                            className={'UserPage_Header_Search_Inscription'}
                        >
                           looking for
                        </div>
                    </div>
                    <div className={'UserPage_userPicture_and_userInfo'}>
                        <div className={'UserPage_userPicture'}>
                            {mainPicture ?
                                <img
                                    className={'UserPage_userPicture_Picture'}
                                    src={peopleList[index].mainPicture}
                                />
                                :
                                <div className={'UserPage_userPicture_Picture_2'}>
                                    <h3>
                                        { peopleList[index].name[0].toString().toUpperCase()}
                                        {peopleList[index].surname[0].toString().toUpperCase()}
                                    </h3>
                                </div>
                            }
                        </div>
                        <div className={'UserPage_userInfo'}>
                            <h3>
                                {peopleList[index].name} {peopleList[index].surname}
                            </h3>
                        </div>
                    </div>
                </div>
                <div className={'UserPage_Header_Logo_Link'}>
                    <div className={'UserPage_Header_Logo'}>
                        <img
                            style={{width:'170px',marginTop:'15px'}}
                            src={'logo2.png'}/>
                    </div>
                    <Link
                       className={'UserPage_Header_Link'}
                       to={'/'} >log out
                    </Link>
                </div>
            </div>
            <div className={'UserPage_main'}>
                <div className={'UserPage_UserFriends_and_SearchButton'}>
                    <div className={'UserPage_UserFriends'}>
                        <div className={'UserPage_UserFriends_and_SearchButton_Header'}>
                            Chats
                        </div>
                        <div className={'UserPage_UserFriends_FriendList'}>
                            {peopleList[index].friends.map(fr=>
                                <div
                                    onClick={()=>{
                                        setActiveMessenger(true)
                                        setMessenger(fr.id)
                                    }}
                                    className={'UserPage_UserFriends_FriendList_Friend'}
                                    key={fr.id}
                                >
                                    <img style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}}
                                        src={peopleList
                                        .filter(pers=>pers.id === fr.id)
                                        .map(pers=>pers.mainPicture)
                                        .toString()}
                                    />
                                    <div  className={'UserPage_UserFriends_FriendList_Friend_NameAndLastMessage'}>
                                        <div className={'UserPage_UserFriends_FriendList_Friend_Name'}>
                                            {fr.name}  {fr.surname}
                                        </div>
                                        <div  className={'UserPage_UserFriends_FriendList_Friend_LastMessage'}>
                                            {lastMessage()}:{lastMessageText()}
                                        </div>
                                    </div>
                                </div>)}
                        </div>
                    </div>
                </div>


                {activeMessenger?
                    <div className={'UserPage_Messenger'}>
                        <button
                            onClick={()=>{setActiveMessenger(false)}}
                            style={{border:'none',background:' #34449f',
                                borderBottomLeftRadius:'7px',
                                borderBottomRightRadius:'7px',
                                width:'150px',
                                color:'white'}}
                        >
                            close
                        </button>
                        <div className={'UserPage_Messenger_Header'}>
                            {peopleList.filter(e=>e.id===messenger)
                                .map(e=>
                                    <div
                                        key={e.id}
                                        className={'UserPage_Messenger_Header'} >
                                        <h3 className={'UserPage_Messenger_Header_Destination'}><img style={{width:'40px',height:'40px',borderRadius:'50%',objectFit:'cover'}} src={e.mainPicture}/>{e.name} {e.surname}</h3>
                                    </div>
                                )}
                        </div>
                        <div className={'UserPage_Messenger_Messages'}>
                            {attractorField()
                                    .flat(10)
                                    .map(mess=>{
                                                return (
                                                    <div
                                                        key={mess.dateTime}
                                                        className={'UserPage_Messenger_Messages_One'}>
                                                        <div><b>{mess.nameFrom}</b>:<p style={{fontSize:"small",width:'400px',color:"white"}}>{mess.text}</p></div>
                                                        <p style={{color:'whitesmoke',fontSize:'smaller'}}>{mess.dateHours}:{mess.dateMinutes}</p>
                                                    </div>
                                                )
                                        }
                                    )
                            }
                        </div>
                        <div className={'UserPage_Messenger_Footer'}>
                            <textarea
                                placeholder={'write a message'}
                                onChange={event => setTypedMessage(event.target.value)}
                                className={'UserPage_Messenger_Footer_PFM'}
                                value={typedMessage}
                            />
                            <button
                                className={'UserPage_Messenger_Footer_PFM_Button'}
                                onClick={()=>{
                                setTypedMessage('')
                                if(date.getMinutes()<10 )
                                {
                                    if (typedMessage !== '')
                                    dispatch(sendDMeil({
                                            recipient:messenger,
                                            name:peopleList[index].name,
                                            text:typedMessage,
                                            idFrom:peopleList[index].id,
                                            dateHours:date.getHours(),
                                            dateMinutes:'0'+date.getMinutes(),
                                            dateTime:date.getTime()
                                        }
                                    ))
                                }else{
                                    if (typedMessage !== '')
                                    dispatch(sendDMeil({
                                            recipient:messenger,
                                            name:peopleList[index].name,
                                            text:typedMessage,
                                            idFrom:peopleList[index].id,
                                            dateHours:date.getHours(),
                                            dateMinutes:date.getMinutes(),
                                            dateTime:date.getTime()
                                        }
                                    ))
                                }
                            }}>
                                send
                            </button>
                        </div>
                    </div>
                        :
                    <div></div>
                }
                <div className={'UserPage_UserGroups'}>
                    <div className={'UserPage_UserGroups_Header'}>
                        Groups
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserPage;
