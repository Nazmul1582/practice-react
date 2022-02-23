import React, { useEffect, useState } from 'react';
import axios from 'axios'

export default function FetchDataWithUseEffect() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users')
      setData(res.data);
    }

    fetchData()
  }, [])

  // const fetchDataHandler = async() => {
  //   const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  //   setData(res.data)
  // }

  return (
    <div>
      <h1>Show all users name</h1>
      <h3>===================================================</h3>
      {/* <button onClick={fetchDataHandler}>Show Data</button> */}
      {
        !!data.length ? <div>
          {data.map(ele => (
            <h1 key={ele.id}> {ele.name}</h1>
          ))}
        </div>
        : 
        <h1>Loading ...................... </h1>
      }
    </div>
  )
}
