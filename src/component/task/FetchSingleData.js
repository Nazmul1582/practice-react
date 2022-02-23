import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FetchSingleData() {
  const [data, setData] = useState({});
  const [id, setId] = useState('');

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      setData(res.data)
    }
    fetchData();
  }, [id])
  return (
    <div>
      <h1>Show user by putting a user id</h1>
      <input 
        type="number"
        value={id}
        onChange={e => setId(e.target.value)}
        placeholder='Enter a user id'
      />
      <h1>Users name : {data.name} </h1>
    </div>
  )
}
