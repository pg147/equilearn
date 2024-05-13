const { Card } = require("../ui/card");

export default function MainCard(props) {
    return(
        <>
            <Card className="flex p-8 max-w-full">
                <div className="">

                </div>
                <div className="">
                    <h5 className="">{props.title}</h5>
                    <h2 className="font-semibold text-3xl">{props.desc}</h2>
                    <h5 className="">{props.subtitle}</h5>
                </div>
                <div className="">

                </div>
            </Card>
        </>
    );
}