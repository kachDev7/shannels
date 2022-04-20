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
        category: "Politics",
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
        category: "Politics",
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
        category: "Politics",
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
        category: "Entertainment",
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
        category: "Entertainment",
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
        category: "Entertainment",
        id: 4,
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
        category: "Business",
        id: 4,
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
        category: "Business",
        id: 4,
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
        category: "Business",
        id: 4,
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
        category: "Foreign",
        id: 4,
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
        category: "Foreign",
        id: 4,
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
        category: "Foreign",
        id: 4,
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
        category: "Foreign",
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
        <div className="my-3 my-sm-5 d-grid" id='more'>
            <div className='' id='more2'>
                <Image src={post.img1} height={100} width={150} />
            </div>
            <div className='mx-1 d-flex jac column' id='more3'>
                <p className="fw-bold font-small">{post.title} <br />
               <small className='text-secondary'>Date: {post.date}</small></p>
            </div>
        </div>
        )
    }

    const MoreNews = () => {
        return(
            <section className='br-20 round-boda container my-5'>
                <Heading text="Trending" />
                <div className="my-5">
                    {posts.map((post) => {
                        return(
                            <News post={post} />
                        )
                    })}
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


    return(
        <div class="contain">
            <div className="holder">
              {/* Page Details Main */}
                <main className="">
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
                            <MoreNews />
                        </div>
                     </div>   
                </aside>
           </div>
        </div>
    )
}

export default Page;