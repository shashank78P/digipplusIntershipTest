import { useContext, useEffect, useState } from "react";
import { classList } from "../store/dataObject"
import OurOwnContext from "../store/createContext";


const Announcement = (props)=>{
    const dataFromContext = useContext(OurOwnContext);
    useEffect(()=>{
        (props.page==="home") ? dataFromContext.updateAnnouncementIconShow(0) : dataFromContext.updateAnnouncementIconShow(1);
    },[props])
    return(
        <>
            <div className={(dataFromContext.announcementIconShow)? classList[1][0] : classList[0][0]}>
                <h3>Announcements📢{(dataFromContext.announcementIconShow)? "📢" : ""}</h3>
                <div className={(dataFromContext.announcementIconShow)? classList[1][1] : classList[0][1]}>
                    <p>We are working on adding Project and Internship Details , So just fill up profile only</p>
                </div>
            </div>
        </>
    )
}

export default Announcement;