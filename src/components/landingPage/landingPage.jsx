import { Button } from "../ui/button";
import FeatureCards from "../uiComponents/renderFeatureCards";
import TopCourses from "./topCourses";

export default function LandingPage() {
    return(
        <>  
            {/* Intro Section */}
            <div className="flex p-10 max-w-fit max-h-full">
                <div className="" id="content">
                    <h1 className="text-3xl font-semibold">Start learning new skill <br /> with your <span className="text-[#0D018F]">Buddies</span></h1>
                    <p className="mt-3">Building a community of people who want to <br />develop their skills by providing best content on <br />the web for free in one place.</p>

                    <Button className="bg-transparent mt-6 text-black hover:text-white">Start learning now</Button>
                </div>
            </div>
            
            {/* Features & Top Courses Section */}
            <div className="p-32 bg-[#F4F7FA]">
                <FeatureCards/>
                <TopCourses/>
            </div>
        </>
    );
}