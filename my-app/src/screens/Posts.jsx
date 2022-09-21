import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Posts = () => {

    const params = useParams()
    const[posts, setPosts] = useState([])

    const fetchPosts = async() => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json() 
        setPosts(data)  
    
    }
    
    useEffect(() => {
        fetchPosts()
    },[])

    const arrPosts = posts.filter(post => post.userId === Number(params.id))

    return (
        <div>
            {
                arrPosts.map(post => {
                    return(
                        <div key={post.id} className='post'>
                            <h4>Post {post.id}</h4>
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </div>    
    )
}

export default Posts;