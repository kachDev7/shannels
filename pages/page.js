import Image from 'next/image'


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
                            <div className="container d-flex jac">
                                <h3 className="fw-bold py-3 text-center myboda">Let's talk about it!</h3>
                            </div>
                            <div className="d-flex jac">
                                <form className='form-width br-20 p-5'>
                                    <label htmlFor="" className='form-label'>Name</label>
                                    <input type="text" className='form-control mb-3 input-width' placeholder="Let's know your name"/>
                                    <label htmlFor="" className='form-label'>Comment</label>
                                    <input type="text" className='form-control mb-3 input-width' placeholder='Your comment here...' />
                                    <div className="text-center">
                                        <button className="btn btn-primary p-3 mb-3  text-light">Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
              </main>
              {/* Page Side Bar Divs */}
              <div id="sidebar" class="boda3">Sidebar
                  <div class="p-3 m-3 lead boda1">

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