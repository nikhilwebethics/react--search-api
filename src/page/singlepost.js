import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from "../components/navbar";

const SinglePost = () => {

    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const {id} = useParams();

    {console.log(id + "id of product")}
    
    const url = `https://renemorozowich.com/wp-json/wp/v2/posts/${id}`;


    useEffect(() => {
        getData();
          async function getData() {
          const response = await fetch(`${url}`);
          const data = await response.json();
          setPost(data) ;
          setIsLoading(false);
        }
      }, []); 
    return (
    <>
    <NavBar/>
    
    {isLoading? (<div class="text-center mt-10">
                <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>
             </div>) : (
    <div className="md:container md:mx-auto pt-10">
    {post && (
      <div className="posts" style={{ padding:15}}>
            <h3 className="text-4xl font-bold leading-7 text-red-900 ">{post.title.rendered}:</h3> <br/>
            <img src={post.uagb_featured_image_src.medium[0]} alt="icons" /><br/>
            <div className='authordetail'>
                <h1 className='text-2xl'>Author Details:</h1><br/>
                <h2 className='font-bold'>{post.uagb_author_info.display_name}:</h2>
                <p>~ {post.uagb_excerpt}</p>
            </div>

        </div>
        )}
    </div>
    )}
    </>
    
    );
}
export default SinglePost;