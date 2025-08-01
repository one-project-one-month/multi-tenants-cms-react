import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@cms/ui/components/accordion";
import { courseData } from "../api/mockVedios";
import { useVideoStore } from "../store/videoStore";

export const VideoLists = () => {
  const setSelectedVideo = useVideoStore((state) => state.setSelectedVideo);

  return (
    <div className="max-w-xl mx-auto mt-8">
      <Accordion
        type="single"
        collapsible
        defaultValue="section-1"
        className="w-full"
      >
        {courseData.map((section) => (
          <AccordionItem
            key={section.id}
            value={`section-${section.id}`}
            className="mb-4 shadow"
          >
            <AccordionTrigger className="px-4 py-3 border-black bg-white font-semibold text-gray-800">
              {section.title}
            </AccordionTrigger>
            <AccordionContent className="bg-white px-6 py-3 text-gray-800 transition-all data-[state=open]:animate-slide-down data-[state=closed]:animate-slide-up">
              <ul>
                {section.lessons.map((lesson) => (
                  <li
                    key={lesson.id}
                    className="py-3 border-b last:border-b-0 cursor-pointer hover:font-semibold"
                    onClick={() => setSelectedVideo(lesson)}
                  >
                    {lesson.title}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};


