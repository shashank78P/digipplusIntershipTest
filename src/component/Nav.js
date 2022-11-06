import { NavLink, Outlet } from "react-router-dom"
import img1 from "../images/logo.png"
import img2 from "../images/image.png"

const Nav = () => {
    return (
        <>
            <ul className="topnav">
            <input id="displayNone" type="checkbox"></input>
            <label className="menu" htmlFor="displayNone">
                <div>
                    Menu
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                    <div className="arrow"></div>
                </div>
            </label>
                <ul className="startUl">
                    <li className="center">
                        <img src={img1} alt="logo"></img>
                        <h3><span>DIGI</span><span>PPLUS</span></h3>
                    </li>
                </ul>
                <ul className="center middleUl">
                    <li><NavLink to="/" className="navA" activeClassName="active" >Home</NavLink></li>
                    <li><NavLink to="/myJobs" className="navA" activeClassName="active">My Jobs</NavLink></li>
                    <li><NavLink to="/myPayments" className="navA" activeClassName="active">My Payment</NavLink></li>
                    <li><NavLink to="/myOffersLetter" className="navA" activeClassName="active">My Offerletter</NavLink></li>
                    <li><NavLink to="/myCertificate" className="navA" activeClassName="active">My Certificate</NavLink></li>
                </ul>
                <ul>
                    <li><img src={img2} alt="Image1"></img></li>
                </ul>
            </ul>

        </>
    )
}

export default Nav;