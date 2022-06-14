import Heading from "../components/heading";
import Link from 'next/link'

const Contacts = () => {
    return (
        <div className="container contact">
            <Heading text="Contact Us" />
            <p className="my-3">You can easily contact us via our stipulated social media handles listed below. Note that we are always available at all times to respond to any of your reach-outs. Any effort to contact us will be appreciated gracefully, hence we look forward to seeing your hit ups as it is crucial for serving you better. 
In case of any complaint, we are very reachable and accessible any time any day. Please be assured we’ll love to hear from you via our social media handles as stipulated below.
<br />To contact us, kindly us any of our social media gateways below:
</p>
                <div className="d-flex column contact-contain">
                    <div className="d-flex mt-3 contact-box">
                        <p className="fw-bold">Email: <span className="mx-sm-3 mx-1"><Link href='#'><a className="text-primary">info@shannels.com</a></Link> </span></p>
                    </div>
                    <div className="d-flex mt-3 contact-box">
                        <p className="fw-bold">Telephone: <span className="mx-sm-3 mx-1"><Link href='#'><a className="text-primary">+2349138236128</a></Link> </span></p>
                    </div>
                    <div className="d-flex mt-3 contact-box">
                        <p className="fw-bold">Facebook: <span className="mx-sm-3 mx-1"><Link href='#'><a className="text-primary">https://fb.com/shannels</a></Link> </span></p>
                    </div>
                    <div className="d-flex mt-3  contact-box">
                        <p className="fw-bold">Instagram: <span className="mx-sm-3 mx-1"><Link href='#'><a className="text-primary">@shannels</a></Link> </span></p>
                    </div>
                </div>
        </div>
    )
}

export default Contacts;