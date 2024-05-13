import FeatureCardUi from "./featureCard";

const featureCardsData = [
    { title: 'Well Structured Courses', description: 'Building a community of people who want to develop their skills' },
    { title: 'Get Certificates', description: 'Building a community of people who want to develop their skills' },
    { title: 'Learn form Best Teachers out There', description: 'Building a community of people who want to develop their skill' },
];


export default function FeatureCards() {
    return(
        <>
            {featureCardsData.map((card, index) => (
                <FeatureCardUi key={index} title={card.title} description={card.description} />
            ))}
        </>
    );
}