import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
// import { read } from '../admin/blog/api-blog';
import { useParams } from 'react-router-dom';
import { Suggestions } from './Suggestions';
const Blog = () => {
  const [blogs, setBlogs ] = useState()
  const [suggestions, setSuggestions] =useState([])
  const {_id} = useParams()

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal 
    fetch(`http://localhost:4000/api/blogs/by`, signal, {
      method:'GET',
      headers:{
        'Accept':'Content-Type'
      }
    })
    .then((data)=>{
      if(data.error){
        console.log(data.error)
      } else{
        setBlogs(data)
      }
    })
  }, [_id])

  useEffect(()=>{
    const abortController = new AbortController()
    const signal = abortController.signal

    fetch(`http://localhost:4000/api/blogs/related/${_id}`, signal,
    {
     
      headers:'GET',
      'Accept':'Content-Type'
    }).then((data)=>{
      if(data && data.error){
        console.log(data.error)
      } else {
        setSuggestions(data)
      }
    })
    return function cleanup(){
      abortController.abort()
    }
  }, [_id])
  return (
    <>
    {blogs && blogs.length > 0 && (
      <div>
        {blogs.map(blog =>(
          <div key={uuidv4()}>
            <p><a href={`/blogs/${blog.createdAt}/${blog._id}/${blog.slug}`}>{blog.title}</a></p>
          </div>
        ))}
      </div>
    )}
    <Suggestions blog={suggestions} title={'Related'} />
    </>
  )
}

export default Blog