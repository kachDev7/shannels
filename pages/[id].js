import Image from 'next/image'
import Link from 'next/link'
import Share from '../components/share'

export const getStaticPaths = async() =>{
    const res = await fetch(process.env.URL);
    const data =  await res.json();

    const paths = data.map((post) => {
        return{
            params: { id: post._id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;

    // Test with Json
    const res = await fetch(process.env.URL + "/" + id);
    const datum = await res.json();

    const resAll = await fetch(process.env.URL);
    const data =  await resAll.json();
    

    return {
        props:{
            posts : data,
            post: datum
        }
    }
}






const Page = ({ posts, post }) => {
    
    const Heading = ({ text }) => {
        return(
            <div className="container d-flex jac">
              <h3 className="fw-bold py-3 text-center myboda">{text}</h3>
            </div>
        )
    }

    // const Comments = () => {
    //     return(
    //         <section>
    //             <div className="text-center">
    //                 <Heading text="Comments" />
    //             </div>
    //             <div className="container">
    //                 {news.comments.map((comment) => {
    //                     return(
    //                         <div className='container d-flex px-3 comment-box'>
    //                             <div className="comment-icon d-flex">
    //                                 <i className="bi bi-person-circle h1 text-secondary"></i>
    //                                 <p className="text-secondary mb-3 m-3">{comment.name}</p>
    //                             </div>
    //                             <div className="mx-1">
    //                                 <p className="comment-text mx-5">{comment.comment}</p>
    //                                 <p className="comment-text mx-5 text-secondary">{"Date here..."}</p>
    //                             </div>
    //                         </div>
    //                     )
    //                 })}
    //             </div>
    //         </section>
    //     )
    // }

    const News = ({ post }) => {

        
        return (
            <Link href={"/" + post._id}>
                <div className="my-3 my-sm-5 d-grid" id='more' key={post._id}>
                    <div className='' id='more2'>
                        <Image src={post.image1} height={100} width={150} alt="Image" />
                    </div>
                    <div className='mx-1 d-flex jac column' id='more3'>
                        <p className="fw-bold font-small">{post.title} <br />
                    <small className='text-secondary'>Date: {formatDate(new Date(post.date).toString())}</small></p>
                    </div>
                </div>
            </Link>
        )
    }

    const MoreNews = ({ posts, post }) => {
        const postCat = post.category;
        let row = [];
        posts.map((dispost) => {
            if(dispost.category === postCat){
                row.push(<News post={dispost} />);
            }
        })
        return(
            <section className='br-20 round-boda container my-5'>
                <Heading text="Trending" />
                <div className="my-5">
                    {row}
                </div>
            </section>
        )
    }



    const Category = ({ cat }) => {
        return(
            <div className="px-md-3 w-25 bg-primary jac catDiv">
                <p className="fw-bold mt-3 text-light text-center">{cat}</p>
            </div>
        )
    }

    // format Date of post
    const formatDate = (postDate) => {
        let formattedDate = ""
        for(let i=0; i < 16; i++){
            formattedDate += postDate[i]
        }
        return formattedDate
    }


    return(
        <div className="contain">
            <div className="holder">
              {/* Page Details Main */}
                <main className="">
                    <div className="main">
                        <section className='py-3 cat'>
                            <Category cat={post.category} />
                        </section>
                        <section>
                            <div className="container">
                                {/* Title */}
                                <div className="text-center">
                                    <h1>{post.title}</h1>
                                </div>
                                {/* Info */}
                                <div className='d-flex jaa'>
                                    <p><span className="fw-bold">Author: </span> {post.author}</p> 
                                    <p><span className="fw-bold">Date: </span> {formatDate(new Date(post.date).toString())}</p> 
                                </div>
                                {/* Image 0ne */}
                                <div className='d-flex jac my-3'>
                                    <Image className='br-10' src={post.image1} height={400} width={700} alt="Image" />
                                </div>
                                {/* Preview */}
                                <div>
                                    <h5 className="fw-bold">{post.preview}</h5>
                                </div>
                                {/* Body 0ne */}
                                <div className='p-3'>
                                    <p className="lead">{post.body1}</p>
                                </div>
                                {/* Image two */}
                                <div className='d-flex jac my-4'>
                                    <Image className='br-10' src={post.image2} height={400} width={700} alt="Image" />
                                </div>
                                {/* Body Two */}
                                <div className='p-3'>
                                    <p className="lead">{post.body2}</p>
                                </div>
                            </div>
                        </section>
                        {/* COMMENTS SECTION */}
                        {/* <section>
                            <div className="container">
                                
                                <Heading text="Let's talk about it!" />
                                
                                <div className="d-flex jac">
                                    <form className='form-width br-20 p-5 my-3 round-boda'>
                                        <label htmlFor="" className='form-label'>Name</label>
                                        <input type="text" className='form-control mb-3 input-width' placeholder="Let's know your name"/>
                                        <label htmlFor="" className='form-label'>Comment</label>
                                        <input type="text" className='form-control mb-3 input-width mb-4' placeholder='Your comment here...' />
                                        <div className="text-center button">
                                            <button className="btn btn-primary mb-3  text-light input-width">Comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                        <Comments /> */}
                        <section>
                            <Share />
                        </section>
                    </div>
                </main>
                {/* Page Side Bar Divs */}
                <aside id="sidebar" className="">
                    <div className="aside-ruler">
                        <div className="container my-3">
                            <MoreNews posts={posts} post={post} />
                        </div>
                    </div>   
                </aside>
           </div>
        </div>
    )
}

export default Page;