import CourseCards from "../uiComponents/courseCard";

const topCoursesData = [
    {
        title: "Video Editing",
        description: "Learn Video Editing on Davinci Resolve from scratch",
    },
    {
        title: "Advanced Web Development",
        description: "Master your basics and become a professional fullstack developer",
    },
    {
        title: "Introduction to C++",
        description: "Learn the basic logic and structures of C++ from scratch",
    },
    {
        title: "Introduction to Python",
        description: "Learn Python from basic to advanced",
    },
    
];  

export default function TopCourses() {
    return(
        <>
            <div className="text-center mt-16" id="heading">
                <h1 className="text-3xl font-semibold">Top Courses</h1>
                <p>The preferred courses with trending market & industry requirements</p>
            </div>
            <div className="flex gap-10 justify-around items-center mt-10 px-24" id="courses">
                <CourseCards 
                    title={topCoursesData[0].title}
                    description={topCoursesData[0].description}
                />
                <CourseCards 
                    title={topCoursesData[1].title}
                    description={topCoursesData[1].description}
                />
                <CourseCards 
                    title={topCoursesData[2].title}
                    description={topCoursesData[2].description}
                />
                <CourseCards 
                    title={topCoursesData[3].title}
                    description={topCoursesData[3].description}
                />
            </div>
        </>
    );
}