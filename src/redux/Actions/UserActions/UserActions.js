



export const LoginUser = () => dispatch => {
    let rs_code;
    fetch(
        'http://127.0.0.1:8000/api/authentication/login/'
    )
        .then(response => {
            rs_code = response.status
            if (rs_code == 200) {
                return response.json()
            }
        })
        .then(result => {
            if (rs_code == 200) {
                console.log(result)
                dispatch({
                    type: 'ACTION_TYPE_HERE',
                    payload: result
                })
            }
        })
        .catch(err => {
            console.log('ERROR :::: ', err)
        })
}