import React, { useState, useEffect } from "react";
import { api } from './Utils/api';
import axios from 'axios'
import styled from 'styled-components'

const DIV = styled.div`
border: 1px solid black;
`
const SUBDIV = styled.div`
border: 1px solid black;
width: 300px;
margin: 20px auto;
`

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
        <DIV>
            {/* {Object.keys(posts).map((project, i) => (
                <li key={project}>{posts.name}</li>
            ))} */}
         {Object.keys(posts).map((project, i) => (
<SUBDIV key={i}> NAME: {posts[project].name} <br/> DESCRIPTION: {posts[project].description}</SUBDIV> 

))}
          
    </DIV>
    )
}

export default PostCard