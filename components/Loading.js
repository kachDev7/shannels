const Loading = () => {
    return(
        <div className="d-flex jac spin-holder">
            <div className="d-flex col jac container spin-box round-20 column py-3">
                <div className="loader"></div>
                <h1 className="text-center text-primary">Loading...</h1>
            </div>
        </div>
    )
}

export default Loading