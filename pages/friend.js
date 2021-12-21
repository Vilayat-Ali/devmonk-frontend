import Nav from './components/nav';
import {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import axios from 'axios';
import {useForm} from 'react-hook-form';

export default function Friend() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = async(data) => {

    const token = localStorage.getItem("accessToken");
        await axios.put("http://localhost:8000/api/friend/create",{
            friendname: data.username,
            friendemail: data.email,
            favourite_language: data.language
        },{
            headers: {
                'authorization': `Bearer ${token}`
            }
        }).then(res => {
            if(res.data.success === true) alert(res.data.message);
            else alert(res.data.message);
        })
       }
        
      return (
        <>
              <div className="container">
    
              <Nav type="banner" purpose="Add a Friend"/>
    
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
                    <label For="language" style={{marginTop: '15px'}}>language</label>
                    <input type="language" className="form-control" id="language" name="language"
                     placeholder="Enter your friend's favourite language" style={{width: '40%', padding: '10px'}}
                     {...register('language')}/>
                </div>
                <button type="submit" className="btn btn-success" style={{ marginTop: '15px'}}>Add friend</button>
    </form>
    </div>
    </div>
        </>
      )
    }
    