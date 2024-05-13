import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function CourseModules() {
    return (
        <div className="my-14">
            <Accordion type="single" collapsible className="w-full">

                <AccordionItem value="item-1">
                    <AccordionTrigger>Media/ Audio/ Folder Import</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>
            
                <AccordionItem value="item-2">
                    <AccordionTrigger>Handling H.255 & H.256</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3">
                    <AccordionTrigger>Know More about your Media</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>Timeline</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>Customise your Keyboard Shortcuts</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>Cutting, Merging, Basic Transition</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>Media Export</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>Assignment 1</AccordionTrigger>
                    <AccordionContent>
                        Course Module Video/Content would be shown here.
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    );
}