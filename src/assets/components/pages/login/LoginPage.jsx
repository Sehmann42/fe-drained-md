import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login/login.css'
import {Pages} from '../../../enums/EnumsPages'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../services/AuthenticationServices"
import { useState, useRef } from 'react';
import { GetSessionToken, SetSessionToken } from '../../services/TokenStorage';
import { useEffect } from 'react';


function LoginPage (){
    const navigate = useNavigate()

    const formRef = useRef(null)

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const handleLogin = (event) => {
        event.preventDefault()
        const form = formRef.current

        if (!form.checkValidity()){
            form.classList.add("was-validated")
            return
        }

        form.classList.add("was-validated")
        
        let loginUsername = username
        let loginPassword = password

        if (loginUsername == undefined || loginPassword == undefined){
            loginUsername = usernameRef.current.value
            loginPassword = passwordRef.current.value
        }

        const response = LoginUser(loginUsername,loginPassword)

        response.then((data) => {
            //console.log(data)

            if (data.success != true){
                //Backend Error
                console.log(data.error)
                return
            }

            //Safe Session in Local Storage
            
            const session = data.data.session

            //console.log(session)
            SetSessionToken(session)
            //console.log(GetSessionToken())

            navigate(Pages.CAMPAIGNS)
        })
    }

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
        setPassword(event.target.value)
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                handleLogin(event);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return <>
        <div className=" d-flex justify-content-center h-100 main-background">
            <div className='p-5 function-background'>
                <h1>Washed Master Duel Sim</h1>

                <div className=' login-form'>
                    <form ref={formRef} className=' row g-3'>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">User Name</label>
                            <input value={username} 
                                 ref={usernameRef}
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
                                 ref={passwordRef}
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