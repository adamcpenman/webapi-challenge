import React, { useState, useEffect } from "react";
import { api } from './Utils/api';
import axios from 'axios'

function PostCard(props, id) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //  api()
           axios.get('http://localhost:8080/api/projects', { headers: {
               Accept: 'application/json',
    'Content-Type': 'application/json',
    // "Access-Control-Allow-Origin": "*"
           }})
            .then(response => {
                console.log(response.data)
                setPosts(response.data)
            })
            .catch(error => {
                console.log(error, "error")
            })
    }, [])
    return (
        <div>
            {/* {Object.keys(posts).map((project, i) => (
                <li key={project}>{posts.name}</li>
            ))} */}
         {Object.keys(posts).map((project, i) => (
<div key={i}>{posts[project].name}</div>
                
            ))}
            {posts && (
                <div> 
                <h1>{posts.name}</h1>
                </div>
            )}
{/* <div>{posts.name}</div> */}
    </div>
    )
}

export default PostCard