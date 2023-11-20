import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
   const captchaRef = useRef(null);
   const [disable, setDisable] = useState(true)
    // useEffect(() =>{
    //     loadCaptchaEnginge(6); 
    // },[])


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    // const handlevalidateCaptch = (event) => {
    //     const user_captcha_value = event.target.value
    //     if (validateCaptcha(user_captcha_value)) {
    //         setDisable(false);
    //     } else {
    //         setDisable(true)
    //     }
    // }
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md: w-1/2 lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                               
                            </div>
                            {/* <div className="form-control">
                                <label className="label">
                                     <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handlevalidateCaptch} name='captcha' type="text" placeholder="Type the captcha above" className="input input-bordered" required />
                                
                               
                            </div> */}
                            <div className="form-control mt-6">
                                <button  className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p><small>New Here? <Link to={"/signup"}>Create account</Link> </small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;