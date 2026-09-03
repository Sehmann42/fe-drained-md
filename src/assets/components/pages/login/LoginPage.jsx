import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login/login.css'
import {Pages} from '../../../enums/EnumsPages'
import { useNavigate } from 'react-router-dom';
import { LoginUser } from "../../services/AuthenticationServices"
import { useState, useRef } from 'react';
import { GetSessionToken, SetSessionToken } from '../../services/TokenStorage';
import { useEffect } from 'react';
import LoadingPage from "../../loading_blocks/LoadingPage"


function LoginPage (){
    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState(false)

    const formRef = useRef(null)

    const usernameRef = useRef(null)
    const passwordRef = useRef(null)
    const [username,setUsername] = useState()
    const [password,setPassword] = useState()

    const handleLogin = async (event) => {
        event.preventDefault()

        const form = formRef.current
        setIsLoading(true)

        if (!form.checkValidity()) {
            form.classList.add("was-validated")
            return
        }

        form.classList.add("was-validated")

        let loginUsername = username
        let loginPassword = password

        if (loginUsername === undefined || loginPassword === undefined) {
            loginUsername = usernameRef.current.value
            loginPassword = passwordRef.current.value
        }

        try {
            const data = await LoginUser(loginUsername, loginPassword)

            if (data.success !== true) {
                console.log(data.error)
                return
            }

            const session = data.data.session

            SetSessionToken(session)

            navigate(Pages.CAMPAIGNS)

        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
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

                {
                    isLoading ? <LoadingPage /> : 

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
                }

                      

                <div>
                    <h3 className=' login-footer'>Powered by unemployed Tears ;-;</h3>
                </div>          
            </div>
        </div>
    </>
}


export default LoginPage