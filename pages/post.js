import { useState } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";




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
    const [isLoading, setIsLoading] = useState(false);
    const [failInfo, setFailInfo] = useState(false);
    const [failBtn, setFailBtn] = useState(false);
    const [successInfo, setSuccessInfo] = useState(false);
    const [successBtn, setSuccessBtn] = useState(false);

    
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
        if(!data.ok){
            alert("Error Posting: Check Image")
        }else{
            return data.json()
        }
    }
    
    // Handle Blog Post Upload
    const handlePost = async (event) => {
        event.preventDefault();
        console.log("Started Posting...")
        console.log("1. saving images...")
        setIsLoading(true)
        setFailBtn(false)
        setFailInfo(false)
        setSuccessBtn(false)
        setSuccessInfo(false)
        
        // First save images to cloudinary...
        Promise.all([postImage(image1), postImage(image2)])
        // then return response object of the saved image: Array
        .then(imageObjResponses => {
        console.log("> images saved successfully...")
        console.log(imageObjResponses)
        // Make a post request to api with set values
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
                setIsLoading(false);
                if(!res.ok){
                    setFailInfo(true)
                    setFailBtn(true)
                    console.log("Failed!");                        
                }else{
                    console.log("Successful!")
                    setSuccessInfo(true)
                    setSuccessBtn(true)
                    // router.push('/');
                }
                
            })
        })
    }

    return (
        <div className="d-flex jac dim">
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
                    <button type="submit"  className="btn btn-primary mb-3  text-light input-width" data-bs-toggle="modal" data-bs-target="#exampleModal">Post</button>
                </div>
            </form>

            {/* Modal */}

            
            {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
            </button> */}


            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title text-secondary" id="exampleModalLabel">Please Wait</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {isLoading && <Loading/>}
                    {failInfo && <h1 className="text-center text-danger">Failed!</h1>}
                    {successInfo && <h1 className="text-center text-primary">Successful!</h1>}
                </div>
                <div className="modal-footer">
                   {failBtn && <button type="button" className="btn btn-secondary" onClick={handlePost}>Retry</button>}
                    {successBtn && <button type="button" className="btn btn-primary text-light" data-bs-dismiss="modal" onClick={()=> router.push('/')}>Home</button>}
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Post;