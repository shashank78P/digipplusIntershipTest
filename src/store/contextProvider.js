import React , { useState } from "react";
import OurOwnContext from "./createContext";

const OurOwnContextProvider = (props) =>{
    const [announcementIconShow,setAnnouncementIconShow] = useState(-1);    //in home pg only one icon have to be shown and two icons in jobs pg
    
    const updateAnnouncementIconShow = (i) =>{
        setAnnouncementIconShow(i);
    }
    
    const [selectedOption,setSelectedOption] = useState(0);

    const updateSelectedOption = (i) =>{
        setSelectedOption(i);
    }

    const [selectedOptionSubOption,setSelectedOptionSubOption] = useState(0);

    const updateSelectedOptionSubOption = (i) =>{
        setSelectedOptionSubOption(i);
    }
    return(
        <OurOwnContext.Provider value={{
            updateAnnouncementIconShow,
            announcementIconShow,
            updateSelectedOption,
            selectedOption,
            updateSelectedOptionSubOption,
            selectedOptionSubOption
        }}>
            {props.children}
        </OurOwnContext.Provider>
    )
}

export default OurOwnContextProvider;
