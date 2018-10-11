import types from './types'
import axios from 'axios'

export const signUp = (userInfo) => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signup', userInfo);
            console.log('Sign Up Response: ', resp)
            localStorage.setItem('token', resp.data.token)
            dispatch({
                type: types.SIGN_UP
            })
        } catch(err){
            dispatch({
                type: types.SIGN_UP_ERROR,
                error: 'Error creating account'
            })
            // console.log('Sign Up Error: ', err.message)
        }
    }
}

// export const signIn = userInfo => async dispatch => {
//     try {
//         const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);
//         console.log('Sign In Response: ', resp)
//         localStorage.setItem('token', resp.data.token)

//         dispatch({
//             type: types.SIGN_IN
//         })
//     } catch(err){
//         console.log('Sign In Error: ', err.message)
//     }
// }

export const signIn = userInfo => {
    return async (dispatch) => {
        try {
            const resp = await axios.post('http://api.reactprototypes.com/signin', userInfo);
            console.log('Sign In Response: ', resp)
            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: types.SIGN_IN
            })
        } catch(err){
            dispatch({
                type: types.SIGN_IN_ERROR,
                error: 'Invalid Email and/or Password'
            })
            // console.log('Sign In Error: ', err.message)
        }
    }
}


export const signOut = () => {
    localStorage.removeItem('token')
    return {
        type: types.SIGN_OUT
    }
}
