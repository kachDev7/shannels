import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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

const NewsLarge = ({ post }) => {
    return (
    <div className="my-3 my-sm-5" id='more-lg'>
        <div className='' id='more2-lg'>
            <Image src={post.img1} height={200} width={350} />
        </div>
        <div className='mx-sm-3 d-flex jac column' id='more3-lg'>
            <p className="fw-bold">{post.title} <br />
           <small className='text-secondary'>Date: {post.date}</small></p>
           <p>{post.preview}..<Link href={"#"}><a className='text-primary'>Read more</a></Link></p>
        </div>
    </div>
    )
}

const Heading = ({ text }) => {
    return(
        <div className="container d-flex jac">
          <h3 className="fw-bold py-3 text-center myboda">{text}</h3>
        </div>
    )
}

const Block = () => {
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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe consequuntur repudiandae exercitationem iure, sit blanditiis repellendus fuga tenetur quaerat vel! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum quasi corrupti modi fuga. A exercitationem voluptates consequuntur, omnis laborum delectus.</p>
            </div>
        </section>
    )
}

export default function Home() {
  return (
        <div class="contain">
            <section class="holder">
                <main class="boda2">
                    <Block />
                </main>
                <aside id="sidebar" class="boda3">Sidebar
                    <div class="p-3 m-3 lead boda1">
                        <Card />
                    </div>
                </aside>
           </section>
        </div>
  )
}
