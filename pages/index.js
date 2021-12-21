/* eslint-disable react/jsx-key */
import Nav from './components/nav';
import {useEffect, useState, useMemo} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import ReactTable, { useTable } from 'react-table'

export default function Home() {

  const[username, setUsername] = useState("");
  const[email, setEmail] = useState("");
  const[data, setData] = useState([]);
  const[page, setPage] = useState(1);
  var isAuth = true;

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
               });
  }

  useEffect(()=>{
    const token = localStorage.getItem("accessToken");

    apiCall(token);

      const pageCount = 5;
      axios.get(`http://localhost:8000/api/friend/get/${page}/${pageCount}`, {
        headers: {
          'authorization': 'Bearer '+token
        }
      }).then(res => {
                   setData(res.data.friends);
      }).catch(err => {
      })
  }, []);


  if(isAuth===true){
    return(
      <>
        <Nav username={username} email={email} type="welcome"/>
        <div className="container">
          <h1 className="d-flex justify-content-center">Meet your developer friends!</h1>
          
          <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">USERNAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">FAVOURITE LANGUAGE</th>
        </tr>
      </thead>
      <tbody>

      {data.map(friend => {
        return (
          <tr>
          <th scope="row">{friend._id}</th>
          <td>{friend.f_username}</td>
          <td>{friend.f_email}</td>
          <td>{friend.favourite_language}</td>
        </tr>
        )
      })}
      </tbody>
    </table>

        </div>
      </>
    )
  }
  }
  
