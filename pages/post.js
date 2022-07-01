import { useState } from "react";
import { useRouter } from "next/router";




const Post = () => {

    const router = useRouter()

    // State Variables From the inputs
    const [title, setTitle] = useState("");
    const [body1, setBody1] = useState("");
    const [body2, setBody2] = useState("");
    const [preview, setPreview] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    
    // upload image to cloudinary
    const postImage = async (image) => {
        const formData = new FormData()
        formData.append("file", image)
        formData.append('upload_preset', 'sha-upload');
        const data = await fetch('https://api.cloudinary.com/v1_1/dgiqiys8o/image/upload', {
            method: 'POST',
            body: formData
        });

        // image object from cloudinary
        return data.json()
    }
    
    // Handle Blog Post Upload
    const handlePost = async (event) => {
        event.preventDefault();
        // First save images to cloudinary...
        Promise.all([postImage(image1), postImage(image2)])
        // then return response object of the saved image: Array
        .then(imageObjResponses => {
            console.log(imageObjResponses)
            // Make a post request to api with set values
            const url = process.env.URL;
            fetch("https://bloc-eh-81008.herokuapp.com/post", {
                    method: 'POST',
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        "title": title,
                        "body1": body1,
                        "body2": body2,
                        "preview": preview,
                        // urls to the images are saved in the DB 
                        "image_one": imageObjResponses[0].secure_url,
                        "image_two": imageObjResponses[1].secure_url,
                        "author": author,
                        "category": category
                    })
                }).then(res => {
                    if(!res.ok){
                        alert(" Sorry! Blog Post not successful.");
                    }else{
                        alert("Blog Posted Successful!");
                        router.push('/');
                    }
                    
                })
        })
    }

    return (
        <div className="d-flex jac">
            <form className='form-width br-20 p-5 my-3 round-boda' onSubmit={handlePost}  encType="multipart/form-data">
                <label htmlFor="" className='form-label'>Title</label>
                <input type="text" name="title" onChange={(e) => { setTitle(e.target.value)}} className='form-control mb-3 input-width'/>

                <label htmlFor="" className='form-label'>News Part 1</label>
                <textarea name="body1" onChange={(e) => { setBody1(e.target.value)}} className='form-control mb-3 input-width mb-4' ></textarea>

                <label htmlFor="" className='form-label'>News Part 2</label>
                <textarea name="body2" onChange={(e) => { setBody2(e.target.value)}} className='form-control mb-3 input-width mb-4' ></textarea>

                <label htmlFor="" className='form-label'>News Preview</label>
                <input type="text" name="preview" onChange={(e) => { setPreview(e.target.value)}} className='form-control mb-3 input-width mb-4'  />
                
                <label htmlFor="image1" className='form-label'>First Image</label>
                <input type="file" name="image1" onChange={(e) => { setImage1(e.target.files[0])}} className='form-control mb-3 input-width mb-4' />

                <label htmlFor="image2" className='form-label'>Second Image</label>
                <input type="file" name="image2" onChange={(e) => { setImage2(e.target.files[0])}} className='form-control mb-3 input-width mb-4'  />

                <label htmlFor="" className='form-label'>Author</label>
                <input type="text" name="author" onChange={(e) => { setAuthor(e.target.value)}} className='form-control mb-3 input-width mb-4'  />

                <label htmlFor="" className='form-label'>Category</label>
                <input type="text" name="category" onChange={(e) => { setCategory(e.target.value)}} className='form-control mb-3 input-width mb-4'  />
            
                <div className="text-center button">
                    <button type="submit"  className="btn btn-primary mb-3  text-light input-width">Post</button>
                </div>
            </form>
        </div>
    )
}

export default Post;