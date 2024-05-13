import { default as MainCard } from "../uiComponents/mainCard";
import Cards from "../uiComponents/renderSubCards";
import { courseData } from "./courseLayoutData";

export default function CourseLayout() {
    return(
        <>
            <div className="px-28 pt-20">
                {/* Title Card for Course */}
                <MainCard 
                    title={courseData[0].title}
                    desc={courseData[0].desc} 
                    subtitle={courseData[0].subtitle}    
                />
                {/* Card for Modules of the Course  */}
                <Cards />
            </div>
        </>
    );
}