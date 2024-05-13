import { Card } from "../ui/card";

export default function FeatureCardUi(props) {
    return(
        <>
            <Card className="grid grid-cols-2 my-8 p-8">
                <div className="featureImage">
                    
                </div>
                <div className="feature">
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </Card>
        </>
    );
}