import Nav from './components/nav';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import cookie from "js-cookie"

export default function Home() {

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");

  const apiCall = async(token) => {
    await axios.post("http://localhost:8000/api/user/me", {}, {
      headers: {
        'authorization': 'Bearer '+token
      }
    })
               .then(res => {
                 setUsername(res.data.user.username);
                 setEmail(res.data.user.email);
               }).catch(err => {
                 useRouter.push('/login');
               });
  }

  useEffect(()=>{
    const token = cookie.get("accessToken");
    apiCall(token);
  })

  return(
    <>
      <Nav username={username} email={email} type="welcome"/>
      <div className="container">
        <h1 className="d-flex justify-content-center">My App</h1>
      </div>
    </>
  )
}
