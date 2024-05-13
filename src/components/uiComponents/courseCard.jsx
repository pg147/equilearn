import { Card } from "../ui/card";

export default function CourseCards(props) {
    return(
        <>
            <Card className="px-6 h-[300px] w-[400px]">
                <h1 className="text-center mt-8 font-semibold">{props.title}</h1>
                <p>{props.description}</p>
            </Card>
        </>
    );
}