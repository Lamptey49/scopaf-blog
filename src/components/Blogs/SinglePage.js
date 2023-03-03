import React from 'react'
// import { read } from '../admin/blog/api-blog'
import Footer from '../core/Footer'
import Header from '../core/Header'
import { v4 as uuidv4 } from 'uuid';

export const SinglePage = (props) => {

    
    const {title, body, createdAt, tags, categories, image} = props.blog
   
  return (
    <>
    
    <Header />
    <main>
        <section>
           
            <div className='blog'>
            
                <div className='container'>
                    <div className='site-content'>
                        <div className='posts' key={uuidv4()}>
                        <div className="post-content" data-aos="zoom-in" data-aos-delay="200">
                            <div className="post-image">
                                <div>
                                    <img src={image} className="img" alt="blog1" />
                                </div>
                                <div className="post-info flex-row">
                                    <span><i className="fas fa-user text-gray"></i>&nbsp;&nbsp;{(createdAt)}</span>
                                    <span><i className="fas fa-calendar-alt text-gray"></i>&nbsp;&nbsp;January 14, 2019</span>
                                
                                </div>
                            </div>
                            <div className="post-title">
                                <a href="/">{title}</a>
                                <p>{body}
                                </p>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                    <aside className='sidebar'>
                    <div className="category">
                            <h2>Category</h2>
                            <ul className="category-list">
                                
                                <li className="list-items" data-aos="fade-left" data-aos-delay="400">
                                   <p>{categories}</p>
                                    <span>(01)</span>
                                </li>
                                <li className="list-items" data-aos="fade-left" data-aos-delay="500">
                                    <p>{tags}</p>
                                    <span>(08)</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
          
            </div>

        </section>
           
    </main>
    <Footer />
    </>
  )
}
