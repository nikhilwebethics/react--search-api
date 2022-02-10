import { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import NavBar from '../components/navbar';


function Posts(){

  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const [query, setQuery] = useState("")
  const url = `https://renemorozowich.com/wp-json/wp/v2/posts?filter[posts_per_page]=${perPage}&page=${page}&search=${query}&_embed`;

  useEffect(() => {
      getData(); 
      
    },[page]); 

    async function getData() {
      const response = await fetch(`${url}`);
      const data = await response.json();
      setPost([...post,...data]);
      setIsLoading(false);
      setIsLoaded(false);
      
      if(page==3){
        var element = document.getElementById("myDIV");
        element.remove();
        var nomore =   document.getElementById("noposts").style.display = '';
        nomore.show();
      }
    }

    const LoadMore = () =>{
    setPage(page + 1)
    setIsLoaded(true);
    }

    const search = (e) => {
      setQuery(e.target.value)
      getData();
     

     
    }

    console.log(query + 'query')
  

return(

<Fragment>
<NavBar/>
 <h1> POSTS:</h1> <br/>

  <div className='searchbar' style={{ padding:13}}>
    <label>Search Posts : </label>
    <input placeholder="Enter Post Title" onChange={search} />
  </div>
    
  {isLoading? (<div className="text-center mt-10">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
             </div>) : (
        <div className="apiposts">
          {
            post.filter(item => {
              if (query === '') {
                return item;
              } else if (item.title.rendered.toLowerCase().includes(query.toLowerCase())) {
                return item;
              }

            }).map((item, index) => (
              <div className="box" key={index} >
                  <div className='Lists' style={{ padding:13}}>
                    <Link 
                    to={`/singleposts/${item.id}`}
                    >
                      <h3> {item.title.rendered}  </h3>
                    </Link>
                    <p>{item.date}</p>
                    <p>Category : {item.categories}</p> 
                    <p>{item.uagb_excerpt}</p><br/>
                  </div> 
              </div>
            ))
          }

        
        {isLoaded?(<div className="text-center mt-10">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
        </div>):( <> <button id="myDIV" className="load-more" onClick={LoadMore}>Load More</button><button className='nopost ' id='noposts' style={{display: "none"}}>....Noposts</button> </>)}  
    </div>
  )}
</Fragment>
  );
}
export default Posts;