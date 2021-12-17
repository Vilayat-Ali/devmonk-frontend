import '../styles/form.module.css'
import Nav from './components/nav';
import {useForm} from 'react-hook-form';
import {useRouter} from 'next/router';

export default function Home() {

 const {register, formState: {errors}, handleSubmit} = useForm();

 const handlesubmit = async(data) => {
    const token = cookieCutter.get('appAccessToken'); // fetch cookie with token
    await axios.post("http://localhost:8000/api/user/login", {
        username: data.username,
        email: data.email,
        password: data.password
    }, {
        headers: {
            'authorization': 'Bearer '+token,
            'content-type': 'application/json'
        }
    }).then(res => {
        useRouter.push('/');
    });
 }

  return (
    <>
    <div className="container">

        <Nav type="banner" purpose="Login"/>

        <div className="container">
        <form onSubmit={handleSubmit(handlesubmit)}>
                    <div className="form-group">
                        <label For="email">Email address</label>
                        <input type="email" className="form-control"
                         id="email" aria-describedby="emailHelp" 
                         placeholder="Enter your email here" 
                         style={{width: '40%', padding: '10px'}}
                         {...register('email')}/>
                    </div>
                    <div className="form-group">
                        <label For="password" style={{marginTop: '15px'}}>Password</label>
                        <input type="password" className="form-control"
                         id="password" placeholder="Enter your password here"
                          style={{width: '40%', padding: '10px'}}
                          {...register('email')}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ marginTop: '15px'}}>Log me in</button>
        </form>
        </div>
    </div>
    </>
  )
}
