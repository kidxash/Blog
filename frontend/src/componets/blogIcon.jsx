import { written } from "../API/API";

function BlogIcon({blog}) {
    const {deleteBlog, updateBlog} = written();

    const handleDelete = async(id) => {
        await deleteBlog(id);
    }

    const handleUpdate = async (id, blogs) => {
        await updateBlog(id, blogs);
    };

    return (
        <>            
            <div className ="bg-yellow-800 text-white p-4 m-4 mt-25 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 w-1/2 mx-auto ">
                <h1 className="text-lg font-bold">{blog.Title}</h1>
                <h3 className="text-sm">Click here to continue</h3>
                <button onClick={() => handleDelete(blog._id)}>Delete</button>
                <button onClick={() => handleUpdate(blog._id, blog)}>Update</button>
            </div>
        </>
    );
}

export default BlogIcon;
