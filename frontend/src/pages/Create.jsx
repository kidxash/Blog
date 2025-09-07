import { written } from "../API/API";
import { useState } from "react";


function CreatePage(){
    const {createBlogs } = written();
    const [blog, newBlog] = useState({
        Title: "",
        Info: "",
    });




    const  Add = async () => {
        console.log("Add function called");
        console.log("Blog data:", blog);
        
        try {
            const res = await createBlogs(blog);
            console.log("Response:", res);
            
            if(res.success) {
                alert("Blog has been submitted");
                // Clear the form after successful submission
                newBlog({ Title: "", Info: "" });
            } else {
                alert(res.message);
            }
        } catch (error) {
            console.error("Error in Add function:", error);
            alert("Error submitting blog: " + error.message);
        }
    }


return(<>
<div> 
    <div style={{
     textAlign: "center", 
     }}>

    <u style={{color: "white"}}>
    <textarea type="text" 
    placeholder="Click Here To Create Title" 
    value={blog.Title}
    onChange={(e) => newBlog({...blog,  Title:e.target.value})}
    style={{
    textAlign: "center", 
    marginTop: "90px", 
    color: "white",
    backgroundColor: "darksalmon",
    outline: "none",
    border:"none",
    width: "500px",
    height: "40px",
    fontSize: "1.5rem", 
    }}

    />

   </u>
</div>

   <div style={{
     textAlign: "center", 
     }}>
  <textarea type="text" placeholder="start typing here" style={{
    width: "80%",
    height: "500px",
    fontSize: "1.2rem",
    background: "beige"
  }}
  value={blog.Info}
  onChange={(e) => newBlog({...blog, Info:e.target.value})}
  />


</div> 
<div style={{textAlign: "center", }}>

<button style={{    
    textAlign: "center"
}}
onClick  ={() => {Add()} }
  >Submit Blog </button>
</div>
</div>

</>
)

}
export default CreatePage;