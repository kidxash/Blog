import { written } from "../API/API";


  function BlogIcon({blog}) {
    const {deleteBlog, updateBlog,} = written();

    const handleDelete = async(id) => {
      await deleteBlog(id)
      
    }

    const handleUpdate = async (id, blogs) => {
      await updateBlog(id, blogs)
    };
    return(  <>
        <div style = {{
           padding:"10px"
        }}>
          <h1> {blog.Title}</h1>
          <h3>Click here to continue </h3>
          <button onClick ={ () =>handleDelete(blog._id)}>Delete</button>
          <button onClick ={ () =>handleUpdate(blog._id, blog)}>Update</button>
        </div>
          </>
          
        
        )
      
    

         
    
}
export default BlogIcon;
