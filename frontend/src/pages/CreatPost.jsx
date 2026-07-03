import React from "react";
import { useNavigate } from "react-router";
import { useRef, useState } from "react";
import axios from "axios";

const CreatPost = () => {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  
   const handleSubmit = async (e)=>{
    e.preventDefault()
    const formData = new FormData(e.target)
    await axios.post("http://localhost:3000/create-post",formData )
    .then((res)=>{
      navigate("/");
      alert("post created successfully")
      setSelectedFile(null);
      fileRef.current.value = "";
      e.target.reset();
    })
    .catch((err)=>{
      console.log(err)
      alert("error creating post")
    })
  }

  return (
    <section className=" h-screen flex flex-col">
      <div className="p-4 flex flex-col gap-3">
        <nav className="flex justify-between">
          <h1 className=" font-medium  ">Upload your post🫶🏻</h1>
          <button 
          onClick={()=>navigate("/")}
          className="bg-violet-700 px-3 py-1 rounded-lg active:scale-95 cursor-pointer ">Cancel</button>
        </nav>
        <div className="border rounded-b-2xl"></div>
      </div>

      <form className="flex gap-4 flex-1 pb-2"
       onSubmit={handleSubmit}
       
      >
        <div className="w-1/3  h-full flex flex-col items-center justify-center gap-4 mx-4 border-[1.5px] 
         border-purple-600 rounded-2xl ">
          <input
            type="file"
            ref={fileRef}
            required
            className="hidden"
            name="image"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <div className="relative inline-block mt-2">
            
            {selectedFile ? (
              <img
                src={URL.createObjectURL(selectedFile)}
                alt="Preview"
                className="w-60 h-80 object-cover rounded-lg"
              />
            ) : (
              <p className="text-xl text-slate-900">Select your post</p>
            )}

            {selectedFile && (
              <button
                type="button"
                onClick={() => {
                  setSelectedFile(null);
                  fileRef.current.value = "";
                }}
                className="absolute  top-0 right-0 text-white font-semibold text-[8px] h-5 w-5 justify-center items-center bg-red-600 rounded-full shadow-xl cursor-pointer "
              >
                ✕
              </button>
            )}
          </div>
          {!selectedFile && (
            <button
            onClick={() => fileRef.current.click()}
            className="bg-violet-700 px-2 py-1 rounded-xl cursor-pointer w-36 active:scale-95"
          >
            Select File
          </button>
          )}
          
        </div>

        <div className="w-2/3 bg-white flex flex-col p-5 gap-6 items-center justify-center  ">
          <h4>Caption</h4>
          <input
            className=" border border-gray-500 w-full rounded-xl py-1 px-2 outline-none "
            type="text"
            name="caption"
            required
            placeholder="Enter your post caption"
          />
          <button 
          className=" bg-violet-700 rounded-lg w-1/4 py-2 cursor-pointer active:scale-95 "
          type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatPost;
