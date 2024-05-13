import { default as SubCard } from "./subCard";

const cardsData = [
    { title: 'Media Handling & Editing', description: 'Media Pool, Timeline, Cuts, etc.' },
    { title: 'Audio Handling & Editing', description: 'Audio Cuts, Overlays, Use of Sound Effects, etc.' },
    { title: 'Color Grading & Graphics', description: 'Color Wheel, Curves, Animation, Framing, etc.' },
    { title: 'Advance Editing 1', description: 'Beat Sync, B rolls, etc.' },
];

export default function Cards() {
    return (
        <div className="grid grid-cols-3 justify-items-center mt-14 gap-14">
            {cardsData.map((card, index) => (
                <SubCard key={index} title={card.title} description={card.description} />
            ))}
        </div>
    );
};