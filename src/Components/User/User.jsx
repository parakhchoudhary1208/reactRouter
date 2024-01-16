import React from 'react'
import { useParams } from "react-router-dom";

function User() {
    const {userid} = useParams()
    return (
        <div className='text-center font-regular p-8 bg-gray-600 text-white text-3xl'>User: {userid}</div>
    )
}

export default User