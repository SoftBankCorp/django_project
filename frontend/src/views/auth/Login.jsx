import React, {useState, useEffet}from 'react'
import {login}from '../../utils/auth'
import {useNavigate, Link}from 'react-router-dom'
import {useAuthStore} from '../../store/auth'

function Login(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const isLoggedIn = useAuthStore((state)=> state.isLoggedIn)

    useEffect(()=>{
        if(isLoggedIn()){
            navigate('/')
        }
    })

    const resetForm = () => {
        setUsername("")
        setPassword("")
    }

    console.log(username);

    navigate=useNavigate()
    return (
        <div>
            <h2>Welcome Back</h2>
            <p>Login TO Continue</p>
        </div>
    )
}

export default Login