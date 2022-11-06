import { Outlet } from "react-router-dom";
import Nav from "./component/Nav";
import "./App.css"

const Home = ()=>{
  return(
      <>
          <Nav />
          <Outlet />
      </>
  )
}

export default Home;