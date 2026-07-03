const express = require("express");
const multer  = require('multer');
const uploadFile = require("./services/storage.services")
const postModel = require("./model/post.model")
const cors = require("cors")

const upload = multer({ storage:multer.memoryStorage() })

const app = express();
app.use(cors())
app.use(express.json());


app.post("/create-post", upload.single("image") ,async (req, res) => {
    const result = await uploadFile(req.file.buffer, req.file.originalname)
    const post = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })
    res.status(201).json({
        message: "successfully posted",
        post
    })
    
} );
app.get("/posts", async(req, res) => {
    const posts = await postModel.find()
    res.status(201).json({
        message:"posts are fetched successfully",
        posts
    })
})

module.exports = app;
