import React from 'react'
import {useAuth} from '../Login/Login'

const Dashboard = () => {
    const {authUser,
    setAuthUser,
    isLoggedIn,
    setIsLoggedIn} = useAuth()

        const logIn = (e) => {
            e.preventDefault()
            setIsLoggedIn(true)
            setAuthUser({
                Name: "John Doe"
            })
        }

        const logOut = (e) => {
            e.preventDefault()
            setIsLoggedIn(false)
            setAuthUser(null)
        }

    return (
        <>
            <span> User is currently: {isLoggedIn ? 'Logged-In' : 'Logged Out'}</span>
            {isLoggedIn ? (<span>Username: {authUser.name}</span>) : null}
            <br />
            {isLoggedIn
            ?   <button onClick={(e)=>{logIn(e)}}> Log in</button>
            : <button onClick={(e)=>{logOut(e)}}>Log out</button>}
            
        </>
    )
}

export default Dashboard