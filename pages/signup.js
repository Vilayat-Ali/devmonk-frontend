import Nav from './components/nav';
import {useForm} from 'react-hook-form';
import axios from 'axios';
import {useRouter} from 'next/router';

export default function Home() {

   const {register, handleSubmit, formState: {errors}} = useForm();

   const router = useRouter();

   const onSubmit = async(data) => {
    await axios.post("http://localhost:8000/api/user/signup", {
        username: data.username,
        email: data.email,
        password: data.password
    }).then(res => {
        const token = res.data.acessToken;
        cookieCutter.set('appAccessToken', token); //setting up the cookie
        router.push('/')
    }).catch(err => {
        alert(err.message);
    })
   }
    
  return (
    <>
          <div className="container">

          <Nav type="banner" purpose="Sign up"/>

<div className="container">
<form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label For="username">Username</label>
                <input type="text" className="form-control" id="username" name="username"
                 aria-describedby="usernameHelp" placeholder="Enter your username here"
                  style={{width: '40%', padding: '10px'}}
                  {...register('username')}/>
            </div>
            <div className="form-group">
                <label For="email" style={{marginTop: '15px'}}>Email address</label>
                <input type="email" className="form-control" id="email" name="email"
                 aria-describedby="emailHelp" placeholder="Enter your email here"
                  style={{width: '40%', padding: '10px'}}
                  {...register('email')}/>
            </div>
            <div className="form-group">
                <label For="password" style={{marginTop: '15px'}}>Password</label>
                <input type="password" className="form-control" id="password" name="password"
                 placeholder="Enter your password here" style={{width: '40%', padding: '10px'}}
                 {...register('password')}/>
            </div>
            <button type="submit" className="btn btn-primary" style={{ marginTop: '15px'}}>Sign me up</button>
</form>
</div>
</div>
    </>
  )
}
