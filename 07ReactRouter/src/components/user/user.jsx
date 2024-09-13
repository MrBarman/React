import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
    const {userId} = useParams()
  return (
    <div className='bg-blue-500 text-white
    text-3xl text-center'>User: {userId}</div>
  )
}
