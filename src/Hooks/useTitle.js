

import React , {useEffect} from 'react'

const useTitle = (props) =>{
    useEffect(()=>{
        const titleTag  = document.querySelector('title')
        titleTag.innerText = props ? props : 'Pen Tutor'
    },[])
}

export default useTitle