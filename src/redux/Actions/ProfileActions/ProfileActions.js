
import Cookies from "js-cookie"
import { apiBaseURL, profile } from "../../apiURLs"

import { GET_USER_PROFILE } from "../../ActionsTypes/ProfileActionTypes";

export const getUserProfile = (data , success, fail) => dispatch =>{
    let s_code;

    fetch(
        apiBaseURL + profile,
        {
            headers:{
                Authorization : `Token ${Cookies.get('auth_token')}`
            }
        }
    )
    .then(response =>{
        s_code = response.status
        if(s_code == 200){
            return response.json()
        }
    })
    .then(result =>{
        if(s_code == 200){
            alert('DOne')
            dispatch(
                {
                    type : GET_USER_PROFILE,
                    payload : result
                }
            )
        }
    })
    .catch(err =>{
        console.log('Profile ERROR :  ', err)
    })


}