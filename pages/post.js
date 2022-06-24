import { useState } from "react";


const Post = () => {

    const [title, setTitle] = useState("");
    const [body1, setBody1] = useState("");
    const [body2, setBody2] = useState("");
    const [preview, setPreview] = useState("");
    const [image1, setImage1] = useState("");
    const [image2, setImage2] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    
    const handlePost = async () => {
        // event.preventDefault();
        // console.log(title, id, image1, date);

        // news post request: MongoDb
        try {
            fetch(process.env.URL, {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify({
                    "title": title,
                    "body1": body1,
                    "body2": body2,
                    "preview": preview,
                    "author": author,
                    "category": category
                })
            })
        } catch (err) {
            return({message: err})
        }
     }

    return (
        <div className="d-flex jac">
            <form className='form-width br-20 p-5 my-3 round-boda' action="http://localhost:8081/post" method="POST" encType="multipart/form-data">
                <label htmlFor="" className='form-label'>Title</label>
                <input type="text" name="title" onChange={(e) => { setTitle(e.target.value)}} className='form-control mb-3 input-width'/>

                <label htmlFor="" className='form-label'>News Part 1</label>
                <textarea name="body1" onChange={(e) => { setBody1(e.target.value)}} className='form-control mb-3 input-width mb-4' ></textarea>

                <label htmlFor="" className='form-label'>News Part 2</label>
                <textarea name="body2" onChange={(e) => { setBody2(e.target.value)}} className='form-control mb-3 input-width mb-4' ></textarea>

                <label htmlFor="" className='form-label'>News Preview</label>
                <input type="text" name="preview" onChange={(e) => { setPreview(e.target.value)}} className='form-control mb-3 input-width mb-4'  />
                
                <label htmlFor="image1" className='form-label'>First Image</label>
                <input type="file" name="image1"  className='form-control mb-3 input-width mb-4' />

                <label htmlFor="image2" className='form-label'>Second Image</label>
                <input type="file" name="image1"  className='form-control mb-3 input-width mb-4'  />

                <label htmlFor="" className='form-label'>Author</label>
                <input type="text" name="author" onChange={(e) => { setAuthor(e.target.value)}} className='form-control mb-3 input-width mb-4'  />

                <label htmlFor="" className='form-label'>Category</label>
                <input type="text" name="category" onChange={(e) => { setCategory(e.target.value)}} className='form-control mb-3 input-width mb-4'  />
            
                <div className="text-center button">
                    <button type="submit" className="btn btn-primary mb-3  text-light input-width">Post</button>
                </div>
            </form>
        </div>
    )
}

export default Post;