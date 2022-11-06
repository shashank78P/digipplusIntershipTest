import { screeningTasksContent } from "../store/dataObject"

const ScreeningTasks = () => {
    return (
        <>
            {
                screeningTasksContent.map((ele, i) => {
                    return (
                        <div key={i} className="jobPgContentBox">
                            <h3 className="">{ele.title}</h3>
                            <p>{ele.content}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ScreeningTasks;