import {FETCHDATA_ACTION} from './constants'

export const initListAction=(jsondata)=>({
    type:FETCHDATA_ACTION,
    data:jsondata
});


export const getEventList=()=>{
    return (dispatch)=>{
         return fetch('https://s3-ap-southeast-2.amazonaws.com/studiobravo/FED+Project/events.json')
            .then((res)=>{
                return res.json();       
            }).then((json)=>{
                dispatch(initListAction(json))
            })
            
 
    }
};

