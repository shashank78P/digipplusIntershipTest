import { useContext, useEffect, useState } from "react";
import SideNav from "./sideNav";
import Announcement from "./announcement"
import { sideBarContentOfJobPage } from "../store/dataObject";
import ScreeningTasks from "./screeningTasks";
import OurOwnContext from "../store/createContext";
import NoRecordFound from "./noRecordFound"

const MyJobs = () => {
    const dataFromContext = useContext(OurOwnContext)
    function controller(i) {
        switch (i) {
            case 0:
                return <NoRecordFound />
            case 1:
                return <ScreeningTasks />
            case 2:
                return <NoRecordFound />
            default:
                return <NoRecordFound />
        }
    }


    return (
        <>
            <div className="section">
                <div className="block sideBarFrame">
                        <SideNav data={sideBarContentOfJobPage} page="job" />
                    </div>
                <div className="block jobPageContent">
                    {
                        controller(dataFromContext.selectedOption)
                    }
                </div>
                <div className="block">
                    <Announcement page="job" />
                </div>
            </div>
        </>
    )
}

export default MyJobs;