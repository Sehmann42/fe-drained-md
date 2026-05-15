import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../css/Login/login.css'

function LoginPage (handleLogin){

    const login = () => {
        handleLogin()
    }

    return <>
        <div className=" d-flex justify-content-center h-100 main-background">
            <div className='p-5'>
                <h1>Washed Master Duel Sim</h1>

                <div className=' login-form'>
                    <form className=' row g-3'>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div>
                            <button type="button" className=' btn btn-success' onClick={login} type="submit">Login!</button>
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