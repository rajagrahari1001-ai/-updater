import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
import { useNavigate } from "react-router";

const Feed = () => {
  const [posts, setPost] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPost(res.data.posts)
    })
  }, [])
  
  const navigate = useNavigate()
  return (
    <section className="h-screen bg-slate-800 items-center justify-center flex flex-col">
      <nav className="py-4 px-3   w-full flex justify-between bg-slate-900 ">
        <h1 className="text-xl font-bold text-white font-Open-Sans  ">रोज़updater🛀🏻</h1>
        
        <button 
        onClick={() => navigate("./Creat-Post")}
        className=" bg-violet-700 py-1 px-2 font-medium text-sm rounded-md active:scale-95 cursor-pointer ">
          Upload your post 🫶🏻
        
        </button>
      </nav>
      <div className="flex-1 mt-8 pr-2 overflow-y-auto minimal-scrollbar">
        {posts.map((post)=>(
          <div key={post._id} className=" w-70 aspect-[5/6] mb-6 ">
          <img
            src={post.image}
            alt="img"
            className="w-full aspect-auto rounded-sm "
          />
          <h3 className="px-2 font-medium text-white">{post.caption}</h3>
        </div>
        ))}
        
        
        
      </div>
    </section>
  );
};

export default Feed;
