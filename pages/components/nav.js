import axios from 'axios';

export default function Nav(props){

    const logout = async() => {
        const token = localStorage.getItem("accessToken");
        await axios.put("http://localhost:8000/api/user/logout", {}, {
            headers: {
                "authorization": "Bearer "+token
            }
        });
        locaStorage.removeItem("accessToken");
    }


    if(props.type === 'info'){
        return(
            <>
            <div className="container" style={{padding: '15px'}}>
                <h1>INFO: <span className="text-secondary font-italic">{props.title}</span></h1>
                <hr/>
            </div>
            </>
        )
    }else if(props.type === 'welcome'){
        return(
            <>
            <nav className="d-flex p-2">
            <div className="container d-flex justify-content-around" style={{padding: '15px'}}>
                <h1><span className="text-secondary">Welcome </span>{props.username}</h1>
                <p className="text-secondary">{props.email}</p>
            </div>
            <div className="container d-flex justify-content-around">
                <button className="btn btn-danger" style={{height: '60px'}} onClick={logout}>Log me Out</button>
            </div>
            </nav>
            <hr/>
            </>
        )
    }else if(props.type === 'banner'){
        return(
            <>
            <div className="container" style={{padding: '15px'}}>
                <h1>{props.purpose}</h1>
                <hr/>
            </div>
            </>
        )
    }

}