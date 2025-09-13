import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { written } from "../API/API";

function UpdatePage() {
    const { id } = useParams(); // Get blog ID from URL
    const navigate = useNavigate();
    const { products, updateBlog, fetchBlogs } = written();
    
    const [blogData, setBlogData] = useState({
        Title: "",
        Info: ""
    });
    const [loading, setLoading] = useState(false);
    const [originalBlog, setOriginalBlog] = useState(null);

    // Fetch blogs if not already loaded
    useEffect(() => {
        if (products.length === 0) {
            fetchBlogs();
        }
    }, [fetchBlogs, products.length]);

    // Find and load the specific blog when products or id changes
    useEffect(() => {
        if (id && products.length > 0) {
            const foundBlog = products.find(blog => blog._id === id);
            if (foundBlog) {
                setBlogData({
                    Title: foundBlog.Title,
                    Info: foundBlog.Info
                });
                setOriginalBlog(foundBlog);
            }
        }
    }, [id, products]);

    const handleUpdate = async () => {
        if (!blogData.Title.trim() || !blogData.Info.trim()) {
            alert("Please fill in both title and content");
            return;
        }

        setLoading(true);
        try {
            const result = await updateBlog(id, blogData);
            if (result.success) {
                alert("Blog updated successfully!");
                navigate("/"); // Go back to home page
            } else {
                alert(result.message || "Failed to update blog");
            }
        } catch (error) {
            console.error("Error updating blog:", error);
            alert("Error updating blog: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleCancel = () => {
        // Reset to original data
        if (originalBlog) {
            setBlogData({
                Title: originalBlog.Title,
                Info: originalBlog.Info
            });
        }
        navigate("/"); // Go back to home
    };

    if (!originalBlog && products.length > 0) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h2 className="text-2xl mb-4">Notes not found</h2>
                    <button 
                        onClick={() => navigate("/")}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Go Back Home
                    </button>
                </div>
            </div>
        );
    }

    if (!originalBlog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-xl">Loading blog...</div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto p-6 mt-20">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Notes</h1>
                
                {/* Title Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Notes Title
                    </label>
                    <input
                        type="text"
                        value={blogData.Title}
                        onChange={(e) => setBlogData({...blogData, Title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Enter your Notes title"
                        disabled={loading}
                    />
                </div>

                {/* Content Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                       Notes Content
                    </label>
                    <textarea
                        value={blogData.Info}
                        rows="12"
                        onChange={(e) => setBlogData({...blogData, Info: e.target.value})}
                        className="w-full 2px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                        placeholder="Write your Notes here..."
                        disabled={loading}
                    />
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center">
                    <button 
                        onClick={handleCancel}
                        disabled={loading}
                        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                    >
                        Cancel
                    </button>
                    
                    <div className="space-x-3">
                 
                        
                        <button 
                            onClick={handleUpdate}
                            disabled={loading}
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
                        >
                            {loading ? "Updating..." : "Save Changes"}
                        </button>
                    </div>
                </div>

                {/* Show changes indicator */}
                {originalBlog && (
                    (blogData.Title !== originalBlog.Title || blogData.Info !== originalBlog.Info) && (
                        <div className="mt-4 p-3 bg-yellow-100 border border-yellow-400 rounded-lg">
                            <p className="text-yellow-800 text-sm">
                                ⚠️ You have unsaved changes
                            </p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default UpdatePage;