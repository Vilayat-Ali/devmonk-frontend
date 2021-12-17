import Nav from './components/nav';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';

export default function Home() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
          axios.post('http://localhost:8000/api/user/me', {})
               .then(res => {
                 setUsername(res.data.user.username);
                 setEmail(res.data.user.email);
               }).catch(err => {
                 useRouter.push('/');
               })
  });

  return(
    <>
      <Nav username="John Winkins" email="johnwinkis@gmail.com" type="welcome"/>
      <div className="container">
        <h1 className="d-flex justify-content-center">lorem</h1>
      </div>
    </>
  )
}
