import React, { useState, useEffect } from 'react'
import { Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const SingleBlog = (props) => {
    
    const [blog, setBlog] = useState([])
    // const navigate = useNavigate()
    
    const fetchSingleData = async() => {
        // let blogId = props.blogId;
        await fetch('http://localhost:4000/api/blogs/latest', {
            method:'GET',
            headers:{
                'Accept':'Content-Type',  
            }
        }).then(response => {
            return response.json()
        }).then(data => {
            setBlog(data)
        })
    }

   
    

    useEffect(() => {
        fetchSingleData()
    })
  return (
    <div>
       
        {blog.length > 0 && (
            <div>
                {blog.map(b => (
                    <div key={uuidv4()}>
                        <h2 className='text-dark lead'>{b.title}</h2>
                        <p>{(b.body).substring(0, 200)}...</p>
                        {/* <a className="btn" href={`/blogs/${b._id}/${b.createdAt}/${b.slug}`}>Read More</a> */}
                        <Link 
                            to={`/blogs/${b._id}/${b.createdAt}/${b.slug}`}
                            state={{id:b._id, createdAt:b.createdAt, slug:b.slug, title:b.title, body:b.categories}}
                        className='btn' >Read More</Link>
                    </div>
                ))}
            </div>
         )}
    </div>
  )
}

export default SingleBlog