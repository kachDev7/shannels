import Image from 'next/image'

const posts = [
    {
        title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
        body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
        body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
        preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
        img1: "/images/buhari1.webp",
        img2: "/images/buhari2.webp",
        author: " Almadu Salim",
        date: "April 15, 2022",
        id: 1,
        comments: [
            {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
            {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
            {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
            {name: "Iete Kabir", comment: 'What a news.', id: 4}
        ]
    },
    {
        title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
        body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
        body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
        preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
        img1: "/images/buhari1.webp",
        img2: "/images/buhari2.webp",
        author: " Almadu Salim",
        date: "April 15, 2022",
        id: 2,
        comments: [
            {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
            {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
            {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
            {name: "Iete Kabir", comment: 'What a news.', id: 4}
        ]
    },
    {
        title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
        body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
        body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
        preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
        img1: "/images/buhari1.webp",
        img2: "/images/buhari2.webp",
        author: " Almadu Salim",
        date: "April 15, 2022",
        id: 3,
        comments: [
            {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
            {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
            {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
            {name: "Iete Kabir", comment: 'What a news.', id: 4}
        ]
    },
    {
        title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
        body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
        body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
        preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
        img1: "/images/buhari1.webp",
        img2: "/images/buhari2.webp",
        author: " Almadu Salim",
        date: "April 15, 2022",
        id: 4,
        comments: [
            {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
            {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
            {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
            {name: "Iete Kabir", comment: 'What a news.', id: 4}
        ]
    }
]

const Page = () => {

    const news =
    {
        title: "Buhari Govt Negotiating With Terrorists To Free Abducted Abuja-Kaduna Train Passengers",
        body1: "Recall that bandits had in March 2022 attacked a Abuja-Kaduna abducting many passengers and killing many others including Dr Chinelo, which drew widespread condemnation. Families and friends of those abducted by the terrorists have called on government to do every possible to rescue their loved ones after the terrorists released a video threatening to kill all captives. Speaking to newsmen on Friday in Kaduna, Dr Jimoh Fatai, who has been designated as chairman of the group, said the Buhari government has told them that a channel of discussion with the terrorists has been established. ",
        body2: "Fatai said: “After the Federal Executive Council (FEC) meeting on Wednesday, we heard from the Federal Government through the Minister of Information, Lai Mohammed that the government is in dialogue. That government is already discussing with the abductors of our relatives. “We are happy about it, we note it, we acknowledge it and we appreciate the efforts of the government in that regard. What we are now appealing for is that government should speed up the process.” ",
        preview: "The Muhammadu Buhari-led Federal Government has started negotiating with bandit terrorists to secure the release of passengers abducted on a Abuja-Kaduna bound train.",
        img1: "/images/buhari1.webp",
        img2: "/images/buhari2.webp",
        author: " Almadu Salim",
        date: "April 15, 2022",
        comments: [
            {name: "Ike Chisom", comment: 'Hi! this is interesting.', id: 1},
            {name: "Udo Haede", comment: 'We Thank God for you.', id: 2},
            {name: "Seud Barnhn", comment: 'Gets me going always.', id: 3},
            {name: "Iete Kabir", comment: 'What a news.', id: 4}
        ]
    }

    const Heading = ({ text }) => {
        return(
            <div className="container d-flex jac">
              <h3 className="fw-bold py-3 text-center myboda">{text}</h3>
            </div>
        )
    }

    const Comments = () => {
        return(
            <section>
                <div className="text-center">
                    <Heading text="Comments" />
                </div>
                <div className="container">
                    {news.comments.map((comment) => {
                        return(
                            <div className='container d-flex px-3 comment-box'>
                                <div className="comment-icon d-flex">
                                    <i className="bi bi-person-circle h1 text-secondary"></i>
                                    <p className="text-secondary mb-3 m-3">{comment.name}</p>
                                </div>
                                <div className="mx-1">
                                    <p className="comment-text mx-5">{comment.comment}</p>
                                    <p className="comment-text mx-5 text-secondary">{"Date here..."}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }

    const MoreNews = () => {
        return(
            <section className='br-20 round-boda'>
                <Heading text="People Also Like" />
                <div className="my-5">
                    {posts.map((post) => {
                        return(
                            <div className="container">
                                <div>
                                    <Image src={post.img1} height={100} width={150} />
                                </div>
                                <div>
                                    <p className="fw-bold">{post.title}</p>
                                    <div>
                                        <p>Author: {post.author} Date: {post.date}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        )
    }


    return(
        <div class="contain">
            <section class="holder">
              {/* Page Details Main */}
              <main class="boda2">
                <div className="main">
                    <section className='py-3 cat'>
                        <div className="px-md-3 w-25 bg-primary jac catDiv">
                            <p className="fw-bold mt-3 text-light text-center">Category</p>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            {/* Title */}
                            <div className="text-center">
                                <h1>{news.title}</h1>
                            </div>
                            {/* Info */}
                            <div className='d-flex jaa'>
                                <p><span className="fw-bold">Author: </span> {news.author}</p> 
                                <p><span className="fw-bold">Date: </span> {news.date}</p> 
                            </div>
                            {/* Image 0ne */}
                            <div className='d-flex jac my-3'>
                                <Image className='br-10' src={news.img1} height={400} width={700} />
                            </div>
                            {/* Preview */}
                            <div>
                                <h5 className="fw-bold">{news.preview}</h5>
                            </div>
                            {/* Body 0ne */}
                            <div className='p-3'>
                                <p className="lead">{news.body1}</p>
                            </div>
                            {/* Image two */}
                            <div className='d-flex jac my-4'>
                                <Image className='br-10' src={news.img2} height={400} width={700} />
                            </div>
                            {/* Body Two */}
                            <div className='p-3'>
                                <p className="lead">{news.body2}</p>
                            </div>
                        </div>
                    </section>
                    {/* COMMENTS SECTION */}
                    <section>
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
                    <Comments />
                </div>
              </main>
              {/* Page Side Bar Divs */}
              <div id="sidebar" class="boda3">Sidebar
                  <div class="p-3 m-3 lead boda1">
                    <MoreNews />
                  </div>
                  <div class="p-3 m-3 lead boda1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi consequuntur quidem rem earum, fugiat dolorum eligendi veritatis accusamus doloribus quaerat quos ipsum in? Neque quam sint error nam dolorem suscipit, ex quos aperiam, modi nisi nihil delectus praesentium ducimus. Pariatur voluptatibus error reprehenderit quia in nemo modi, ut illum!</div>
                  <div class="p-3 m-3 lead boda1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi consequuntur quidem rem earum, fugiat dolorum eligendi veritatis accusamus doloribus quaerat quos ipsum in? Neque quam sint error nam dolorem suscipit, ex quos aperiam, modi nisi nihil delectus praesentium ducimus. Pariatur voluptatibus error reprehenderit quia in nemo modi, ut illum!</div>
                  <div class="p-3 m-3 lead boda1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed commodi consequuntur quidem rem earum, fugiat dolorum eligendi veritatis accusamus doloribus quaerat quos ipsum in? Neque quam sint error nam dolorem suscipit, ex quos aperiam, modi nisi nihil delectus praesentium ducimus. Pariatur voluptatibus error reprehenderit quia in nemo modi, ut illum!</div>
              </div>
              {/* Page Contents Divs */}
              <div id="content1" class="boda4">Content 1</div>
              <div id="content2" class="boda6">Content 2</div>
           </section>
        </div>
    )
}

export default Page;