import {createSlice, PayloadAction} from "@reduxjs/toolkit";





interface IFriend{
    name:string
    surname:string,
    id:number
}

export interface DMeil{
    nameFrom?:string,
    text?:string,
    idFrom?:number,
    dateHours?:string,
    dateMinutes?:string,
    dateTime:number
}

export interface OnePerson{
    name:string
    surname:string,
    birthday:string,
    password:string,
    login:string,
    id?:number
    mainPicture?:string
    friends:IFriend[]
    messages:DMeil[]
}

export interface PersonList {
    personList:OnePerson[]
}

const initialState:PersonList = {
    personList:[
        {name:'Akaza',surname:'Awesome',birthday:'11.01.1999',
            password:'24317',login:'akazaJS',id:1111,
            mainPicture:'https://i.pinimg.com/550x/8b/f4/16/8bf41622e4c327f9f93dbe6e087187fa.jpg',
            friends:[],messages:[]
        },
        {name:'Rengoku',surname:'Kyojuro',birthday:'09.08.1996',
            password:'12345',login:'nickvinel',id:2222,mainPicture:'https://sportshub.cbsistatic.com/i/2021/10/08/ac368aaa-5b41-45c8-9644-f816b8dd1809/demon-slayer-season-2-rengoku.jpg',
            friends:[],messages:[]
        },
        {name:'Zenitsu',surname:'Agatsuma',birthday:'sometime',
            password:'11223',login:'poliack',id:3333,mainPicture:'https://gamerwall.pro/uploads/posts/2022-03/1646764381_1-gamerwall-pro-p-zenitsu-agatsuma-art-krasivie-oboi-3.jpg',
            friends:[],messages:[]
        },
    ],
}

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        signUpName(state,action:PayloadAction<any>){
           state.personList.push({
               name:action.payload.name,
               surname:action.payload.surname,
               birthday:action.payload.birthday,
               password:action.payload.password,
               login:action.payload.login,
               id:action.payload.id,
               friends:[],
               messages:[]
           })
        },
        addToFriends(state,action:PayloadAction<any>){
            state.personList
                .filter(item=>{
                    if(item.id === action.payload.added && !state.personList[action.payload.addedIndex].friends
                        .map(fr=>fr.id)
                        .includes(action.payload.id)){
                            item.friends.push({
                                name:action.payload.name,
                                surname:action.payload.surname,
                                id:action.payload.id
                            })
                    }
                })
        },

        sendDMeil(state, action: PayloadAction<any>) {
            state.personList.map(item=>{
                if (item.id===action.payload.recipient){
                    item.messages.push({
                        nameFrom:action.payload.name,
                        text:action.payload.text,
                        idFrom:action.payload.idFrom,
                        dateHours:action.payload.dateHours,
                        dateMinutes: action.payload.dateMinutes,
                        dateTime:action.payload.dateTime
                    })
                }
            })

        }
    }
})


export const {signUpName,addToFriends,sendDMeil} = usersSlice.actions
export default usersSlice.reducer