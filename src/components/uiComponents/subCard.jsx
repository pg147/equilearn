import { Card } from "../ui/card";

export default function SubCard({title, description}) {
    return(
        <>
            <Card className="bg-[#bbcdf3] duration-700 transition-all hover:bg-white max-w-fit max-h-fit p-6 flex">
                <div>

                </div>
                <div>
                    <h3 className=" text-xl font-semibold">{title}</h3>
                    <h4 className="">{description}</h4>
                </div>
            </Card>
        </>
    );
}