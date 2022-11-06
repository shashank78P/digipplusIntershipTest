import { useContext } from "react"
import OurOwnContext from "../store/createContext"

const SideNav = (props) => {
    const dataFromContext = useContext(OurOwnContext);
    return (
        <>
            <ul className="sideBar">
                {
                    props.data.map((ele, i) => {
                        return (
                            <li key={i}>
                                <h1 className="title">{ele.title}</h1>
                                {
                                    ele.content.map((item, j) => {
                                        return (<div key={j} className={
                                            "sideBarDiv title " +  `${((dataFromContext.selectedOption === i && dataFromContext.selectedOptionSubOption === j && props.page === "payment") ||
                                                (dataFromContext.selectedOption === i && props.page === "job")
                                                || (dataFromContext.selectedOptionSubOption === j && props.page === "payment")
                                            ) ? "activeSideBar" : ""}`
                                        }
                                            //here adding a className activeSideBar base on useClick : 
                                            //here selectedOption is assumed to be row(main option) and 
                                            //selectedOptionSubOption is assumed to be column (sub option)
                                            onClick={() => {
                                                //and updating context when ever event occurs...
                                                dataFromContext.updateSelectedOption(i);
                                                dataFromContext.updateSelectedOptionSubOption(j);
                                            }}>{item}</div>
                                        )
                                    })
                                }

                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default SideNav;