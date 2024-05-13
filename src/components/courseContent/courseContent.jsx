import CourseModules from "../uiComponents/courseModules";
import MainCard from "../uiComponents/mainCard";
import { courseContentData } from "./courseContentData";

export default function CourseContent() {
    return(
        <>
            <div className="px-28 pt-20">
                <MainCard 
                    title={courseContentData[0].title}
                    desc={courseContentData[0].desc} 
                    subtitle={courseContentData[0].subtitle}
                />
                <CourseModules />
            </div>
        </>
    );
}