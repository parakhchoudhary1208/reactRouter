import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const gitData = useLoaderData()
    // const [gitData, setGitData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/parakhchoudhary1208')
    //     .then( (res) => res.json())
    //     .then((gitData) => {
    //         console.log(gitData)
    //         setGitData(gitData)
    //     })
    // }, [])
    
    return (
        <div className='text-center m-4 text-3xl bg-gray-600 text-white p-4'>
            Github followers: {gitData.followers} 
            <img src={gitData.avatar_url} alt="Git Picture" width={300}/>
        </div>
    )
}

export default Github

export const gitDataLoader = async() => {
    const resGitData = await fetch('https://api.github.com/users/parakhchoudhary1208')
    return resGitData.json();
}