import Link from "next/link";


const Navbar = () => {
    let menu = "closed";
    const toggleLinks = () => {
        
        if(menu === "closed"){
            document.getElementById("navmenu").style.display = "block";
            menu = "open";
        }else{
            document.getElementById("navmenu").style.display = "none";
            menu = "closed";
        }
    }

    // Component Return
    return (
        <nav className="navbar navbar-expand-md bg-dark navbar-dark mynav">
        <div className="container">
            {/* <!-- Brand --> */}
            <h1 className="text-primary">SHANNELS</h1>
            {/* Nav Icons  */}
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-icon">
                        <Link href='#'><a className="nav-link"><i className="bi bi-facebook"></i></a></Link>   
                    </li>
                    <li className="nav-icon mx-3">
                        <Link href='#'><a className="nav-link"><i className="bi bi-whatsapp"></i></a></Link>
                    </li>
                    <li className="nav-icon">
                        <Link href='#'><a className="nav-link"><i className="bi bi-linkedin"></i></a></Link>
                    </li>
                    <li className="nav-icon mx-3">
                        <Link href='#'><a className="nav-link"><i className="bi bi-instagram"></i></a></Link>
                    </li>
                </ul>
            </div>
            {/* <!-- Hambuger menu : visible @md --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu" onClick={toggleLinks}>
                 <span className="navbar-toggler-icon"></span>
            </button>
            {/* <!-- Nav links --> */}
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link href='/'><a className="nav-link fw-bold">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/about'><a className="nav-link fw-bold">About</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link href='/contact'><a className="nav-link fw-bold">Contacts</a></Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;