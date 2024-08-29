import WorkList from "../../../../utils/workList/workList";
import WorkTimeLineElement from "../workTimeLineElement/workTImeLineElement"


console.log(WorkList);
const WorkTimeLine = () => {
    return (
        <div>
            {
                WorkList
                    .slice()
                    .reverse()
                    .map(work => {
                        let isEven = work.id % 2 === 0 ? 'lg:right-20' : 'lg:left-20'
                        return (
                            <div key={work.id} className="flex w-full">

                                <div className="flex w-full items-center h-96 flex-col">
                                    <div className="relative flex justify-center h-full w-3 bg-black">
                                        <div className="absolute rounded-md bg-black p-3 w-24 text-sm font-bold z-10 text-white">{work.date}</div>
                                        <WorkTimeLineElement data={work} />
                                    </div>
                                </div>
                            </div>
                        )

                    })
            }
        </div>
    )
}

export default WorkTimeLine


