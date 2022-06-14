import Image from 'next/image'
import Link from 'next/link'
// import {collection, getDocs} from 'firebase/firestore'
// import { dbase } from './firebase-config'
import Share from '../components/share'

export const getStaticPaths = async() =>{
    const res = await fetch('http://localhost:8081/post');
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
    const res = await fetch('http://localhost:8081/post/' + id);
    const datum = await res.json();
    console.log(datum);

    const resAll = await fetch('http://localhost:8081/post');
    const data =  await resAll.json();
    

    return {
        props:{
            posts : data,
            post: datum
        }
    }
}






const Page = ({ posts, post }) => {
    
    // const [posts, setPosts] = useState([]);


    // useEffect(() => {
    //     const getPosts = async (context) => {
    //         const id = context.params.id;
    //         const res = await getDocs(userRef);
    //         setPosts(res.docs.map((e) => ({...e.data(), id: e.id})));
    //     }
    //     getPosts(context);
    // })
    // const news =
    // {
    //     title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
    //     body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
    //     body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
    //     preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
    //     img1: "/images/buhari1.webp",
    //     img2: "/images/buhari2.webp",
    //     author: "Almadu Salim",
    //     date: "April 15, 2022",
    //     comments: [
    //         {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
    //         {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
    //         {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
    //         {name: "Iete Kabir", comment: 'What a news.', id: 4}
    //     ]
    // }

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
            <Link href={'/' + post.id}>
                <div className="my-3 my-sm-5 d-grid" id='more'>
                    <div className='' id='more2'>
                        <Image src={post.image1} height={100} width={150} />
                    </div>
                    <div className='mx-1 d-flex jac column' id='more3'>
                        <p className="fw-bold font-small">{post.title} <br />
                    <small className='text-secondary'>Date: {post.date}</small></p>
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


    return(
        <div class="contain">
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
                                    <p><span className="fw-bold">Date: </span> {post.date}</p> 
                                </div>
                                {/* Image 0ne */}
                                <div className='d-flex jac my-3'>
                                    <Image className='br-10' src={post.image1} height={400} width={700} />
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
                                    <Image className='br-10' src={post.image2} height={400} width={700} />
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