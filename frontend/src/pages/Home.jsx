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

    <h1 className="text-center text-4xl font-bold">Note-Taker</h1>
    {products.map((blog) =>(
        
        <BlogIcon key={blog._id} blog={blog} />
    ))};







</>
)

}
export default HomePage;