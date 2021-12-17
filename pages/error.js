import {useEffect, useState} from 'react';

export default function Home() {

  const [error, setError] = useState("User cannot be verified...");

  return (
    <>
    
        <div className="container" style={{padding: '15px'}}>
            <h1><span className="text-warning">Error </span>{error}</h1>
            <hr/>
        </div>
      <div className="container">
        <h1 className="d-flex justify-content-center">Forbidden</h1>
      </div>
    </>
  )
}
