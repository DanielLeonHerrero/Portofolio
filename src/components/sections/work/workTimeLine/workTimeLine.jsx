import { useState } from "react";
import Button from "../../../button/buton";
import WorkTimeLineElement from "../workTimeLineElement/workTImeLineElement"
import { useTranslation } from "react-i18next";

const WorkTimeLine = () => {
    const [expanded, setExpanded] = useState(false)
    const { t } = useTranslation()
    const workList = t('workSection.list', { returnObjects: true });
    const reversedWorkList = workList.slice().reverse()

    return (
        <div className="flex flex-col items-center">
            {
                reversedWorkList
                    .map((work, index) => {
                        return (
                            <div key={work.id} className={`flex w-full transition-all duration-1000 ease-in-out overflow-hidden ${index < 2 || expanded ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
                                <div className="flex w-full items-center h-96 flex-col">
                                    <div className="relative flex justify-center h-full w-3 bg-black dark:bg-white">
                                        <div className="absolute rounded-md bg-black p-3 w-24 text-sm font-bold z-10 text-white dark:bg-white dark:text-black">{work.date}</div>
                                        <WorkTimeLineElement data={work} />
                                    </div>
                                </div>
                            </div>
                        )
                    })
            }
            <div>
                <Button variant="primary" text={"Mas Trabajos"} className={"mt-16"} onClick={() => { setExpanded(!expanded) }} />
            </div>
        </div>
    )
}

export default WorkTimeLine