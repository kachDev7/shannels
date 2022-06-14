import Heading from "./heading";

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

export default Share;