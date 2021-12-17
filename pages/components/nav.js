export default function Nav(props){
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
            <div className="container" style={{padding: '15px'}}>
                <h1><span className="text-secondary">Welcome </span>{props.username}</h1>
                <p className="text-secondary">{props.email}</p>
                <hr/>
            </div>
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