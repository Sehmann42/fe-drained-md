import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login/login.css'
import {Pages} from '../../../enums/EnumsPages'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../services/AuthenticationServices"
import { useState, useRef } from 'react';

function LoginPage (){
    const navigate = useNavigate()

    const formRef = useRef(null)
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")

    const handleLogin = (event) => {
        event.preventDefault()
        const form = formRef.current

        if (!form.checkValidity()){
            form.classList.add("was-validated")
            return
        }

        form.classList.add("was-validated")
        
        const response = LoginUser(username,password)

        if (!response.success){
            //Backend Error
            console.log(response.error)
            return
        }

        //Safe Session in Local Storage

        Cookies.set(StorageCookies.SESSION, 
            response.data, 
            {expires: 200000})

        navigate(Pages.COLLECTION)
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    return <>
        <div className=" d-flex justify-content-center h-100 main-background">
            <div className='p-5'>
                <h1>Washed Master Duel Sim</h1>

                <div className=' login-form'>
                    <form ref={formRef} className=' row g-3'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input value={username} 
                                 onChange={handleChangeUsername}
                                 type="text"
                                 className="form-control" 
                                 id="exampleInputEmail1" 
                                 aria-describedby="emailHelp" 
                                 placeholder="Enter Username" />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your Pfanne with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input value={password} 
                                 onChange={handleChangePassword} 
                                 type="password" 
                                 className="form-control" 
                                 id="exampleInputPassword1" 
                                 placeholder="Password" />
                        </div>
                        <div>
                            <button className=' btn btn-success' onClick={handleLogin} type="button">Login!</button>
                        </div>
                    </form>
                </div>      

                <div>
                    <h3 className=' login-footer'>Powered by unemployed Tears ;-;</h3>
                </div>          
            </div>
        </div>
    </>
}


export default LoginPage