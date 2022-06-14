import Heading from "../components/heading";
import Share from "../components/share";

const About = () => {
    return (
        <div className="container about">
            <Heading text="About Shannels" />
            <p className="my-3">Shannels is poised to enrich you with trending news in your local country, continent and the world at large at the slightest browsing time in the site. At Shannels, we strive to update you daily and in time without delay, with us you can be rest assured that the latest happening in Business, Politics, Entertainment, Sports, even Foreign arena is at your finger tip.
It’s also important to know that news at Shannels are from trusted sources as we strongly frown at the vile of spreading rumors and unsubstantiated news. Hence our news can be trusted to be from worthy sources. 
We do not have any newsletter on print for now, thus any material posing as our hardcopy newsletter should be shunned and reported immediately via any of our contacts in the contact page.
Happy browsing!!!
</p>
            <Share />
        </div>
    )
}

export default About;