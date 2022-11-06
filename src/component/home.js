import img1 from "../images/logo.png"
import Announcement from "./announcement"

const Home = () => {
    return (
        <>
            <div className="home">
                <div className="wellcomeMsg">
                    <img src={img1} alt="DIGIPPLUS"></img>
                    <h1 className="heading">Welcome To Digipplus</h1>
                </div>
                <Announcement page="home" />
                <div className="mainContent">
                    <div>
                        <h1 className="title">Work Action</h1>
                        <button className="boxShadow btn">View Intern Data</button>
                    </div>
                    <h1 className="title">Internships</h1>
                    <div className="box boxShadow">
                        <h1 className="title">Solution Writing</h1>
                        <h4>Write Solution</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;