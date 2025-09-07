import { useEffect } from "react";
import { written } from "../API/API";
import BlogIcon from "../componets/blogIcon";

function HomePage(){
    const {products, fetchBlogs} = written();
    useEffect(() => {
        fetchBlogs();

    },[fetchBlogs]);
    
    



    return(
<>

    <h1 style={{
    textAlign: "center", 
    marginTop: "80px", 
    color: "white",
    

    }}>Welcome to My Personal Blog Page</h1>


    {products.map((blog) =>(
        
        <BlogIcon key={blog._id} blog={blog} />
    ))};







</>
)

}
export default HomePage;