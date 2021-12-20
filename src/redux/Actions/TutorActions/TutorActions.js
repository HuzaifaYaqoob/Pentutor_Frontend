

import { GET_ALL_TUTORS } from "../../ActionsTypes/TutorsTypes";
import { apiBaseURL, get_all_tutors } from "../../apiURLs";


export const getAllTutors = () => dispatch =>{
    let s_code;

    fetch(
        apiBaseURL + get_all_tutors,
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
                    type : GET_ALL_TUTORS,
                    payload : result.data
                }
            )
        }
    })
    .catch(err =>{
        console.log('TUTOR getting ERROR ::: ' , err)
    })
}