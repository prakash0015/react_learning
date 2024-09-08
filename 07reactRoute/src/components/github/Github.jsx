import React, { useDebugValue, useEffect, useState } from 'react'

function Github() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/prakash0015')
        .then(response => response.json())
        .then(d => {setData(d)});
    }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-whitep-4 text-3xl'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="prakash" width={300} className='border-r-8'></img>
    </div>
  )
}

export default Github
