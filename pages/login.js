import '../styles/form.module.css'
import Nav from './components/nav';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';
import axios from 'axios';

export default function Login() {

 const {register, formState: {errors}, handleSubmit} = useForm();

 const onsubmit = async(data) => {
     var genToken = "";
    await axios.post("http://localhost:8000/api/user/login", {
        email: data.email,
        password: data.password
    }).then(res => {
        if(res.data.success === false) alert(res.data.message)
        genToken = res.data.refreshToken;
    }).catch(err => {
        alert(err.message);
    });

    await axios.put("http://localhost:8000/api/user/token", {
        refreshToken: genToken,
        username: data.username,
        email: data.email
    }).then(res => {
        localStorage.setItem("accessToken", res.data.accessToken);
        alert('user logged in!')
    });
 }

  return (
    <>
    <div className="container">

        <Nav type="banner" purpose="Login"/>

        <div className="container">
        <form onSubmit={handleSubmit(onsubmit)}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="username" className="form-control" name="username"
                         id="username" aria-describedby="usernameHelp" 
                         placeholder="Enter your username here" 
                         style={{width: '40%', padding: '10px'}}
                         {...register('username')}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" style={{marginTop: '15px'}}>Email address</label>
                        <input type="email" className="form-control" name="email"
                         id="email" aria-describedby="emailHelp" 
                         placeholder="Enter your email here" 
                         style={{width: '40%', padding: '10px'}}
                         {...register('email')}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" style={{marginTop: '15px'}}>Password</label>
                        <input type="password" className="form-control" name="password"
                         id="password" placeholder="Enter your password here"
                          style={{width: '40%', padding: '10px'}}
                          {...register('password')}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '15px'}}>Log me in</button>
        </form>
        </div>
    </div>
    </>
  )
}
