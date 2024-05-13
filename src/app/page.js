import CourseContent from "@/components/courseContent/courseContent";
import CourseLayout from "@/components/courseLayout/courseLayout";
import LandingPage from "@/components/landingPage/landingPage";
import Navbar from "@/components/navbar/navbar";
import CourseModules from "@/components/uiComponents/courseModules";

export default function Home() {
  return (
    <>
      {/* <CourseLayout />     */}
      <Navbar />
      <LandingPage />
      {/* <CourseContent /> */}
    </>
  );
}
