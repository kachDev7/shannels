import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Heading from '../components/heading'





export const getStaticProps = async () => {
    const url = process.env.URL
    const res = await fetch(url);
    const posts = await res.json();

    return{
        props: {
            posts
        }
    }
}


export default function Home({ posts }) {


const NewsLarge = ({ post }) => {
    return (
    <div className="my-3 my-sm-5" id='more-lg'>
        <div className='' id='more2-lg'>
            <Image src={post.image1} height={200} width={350} alt="Image" />
        </div>
        <div className='mx-md-3 d-flex jac column' id='more3-lg'>
            <p className="fw-bold">{post.title} <br />
           <small className='text-secondary'>Date: {formatDate(new Date(post.date).toString())}</small></p>
           <p>{post.preview}..<Link href={'/' + post._id}><a className='text-primary'>Read more</a></Link></p>
        </div>
    </div>
    )
}



const Block = ({ posts }) => {
  let lastCategory = null;
  let brew = [];
  posts.forEach((post) => {
    if(post.category !== lastCategory){
      brew.push(<Heading text={post.category} />)
    }
    brew.push(<NewsLarge post={post} />)
    lastCategory = post.category;
  })
  return(
    <section className="container">
      {brew}
    </section>
  )
}

const Card = () => {
    return (
        <section className="container br-20 round-boda">
            <h1 className="text-center fw-bold my-3">SHANNELS</h1>
            <div className="lead container text-center">
            <p className="my-3">Shannels is poised to enrich you with trending news in your local country, continent and the world at large at the slightest browsing time in the site. At Shannels, we strive to update you daily and in time without delay, with us you can be rest assured that the latest happening in Business, Politics, Entertainment, Sports, even Foreign arena is at your finger tip.
It’s also important to know that news at Shannels are from trusted sources as we strongly frown at the vile of spreading rumors and unsubstantiated news. Hence our news can be trusted to be from worthy sources. 
We do not have any newsletter on print for now, thus any material posing as our hardcopy newsletter should be shunned and reported immediately via any of our contacts in the contact page.
Happy browsing!!!
</p>
            </div>
        </section>
    )
}

const Share = () => {
    return(
        <div className="container">
            <Heading text="Follow us on" />
            <div className="container text-center mb-3 d-flex jac share-box">
                <div className='round-boda br-20 m-3 p-3'><i className='bi bi-facebook h1'></i></div>
                <div className='round-boda br-20 m-3 p-3'><i className='bi bi-instagram h1'></i></div>
                <div className='round-boda br-20 m-3 p-3'><i className='bi bi-twitter h1'></i></div>
            </div>
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
    return (
        <div className="contain">
            <section className="holder">
                <main className="">
                    <Block posts={posts} />
                    <Share />
                    <p>{posts.map((e) => {e.title})}</p>
                </main>
                <aside id="sidebar" className="">
                    <div className="aside-ruler">
                        <div className="p-3 m-3 leadnpm ">
                            <Card />
                        </div>
                    </div>
                </aside>
           </section>
        </div>
  )
}

