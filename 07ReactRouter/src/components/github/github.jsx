import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => 
    //     {
    //         fetch('https://api.github.com/users/MrBarman')
    //         .then((res) => res.json())
    //         .then(data => setData(data))
    //     },[])
  return (
    <div className='text-center m-4 bg-slate-300 p-4 text-black-500'>Github followers:{data.followers}
    <img src={data.avatar_url} alt="Git profile pic" width={108}/>
    </div>
    
  );
}
  export const githubInfoLoader = async () => {
    const response = await  fetch('https://api.github.com/users/MrBarman')
    return response.json()
  }

