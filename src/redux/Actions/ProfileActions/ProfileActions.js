
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


export const UpdateUserProfile = (data) => dispatch =>{
    let s_code;

    let update_form = new FormData()

    for(let dt_k in data){
        update_form.append(dt_k , data[dt_k])
    }

    fetch(
        apiBaseURL + profile,
        {
            method : 'PUT',
            headers:{
                Authorization : `Token ${Cookies.get('auth_token')}`
            },
            body : update_form
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