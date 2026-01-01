import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Lock, Radio } from "lucide-react"

type CurriculumProps = {
  curriculum: {
    _id: string
    title: string
    contents: string[]
  }[]
}

export default function Curriculum({ curriculum }: CurriculumProps) {
  return (
    <div className="w-full mx-auto">
      <Accordion type="multiple">
        {curriculum.map((section) => (
          <AccordionItem key={section._id} value={section._id}>
            <AccordionTrigger className="font-semibold text-[20px]">{section.title}</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {section.contents.map((content, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-[16px]">
                    <Lock className="h-4 w-4 text-red-500" />
                    <Radio className="h-4 w-4 text-blue-500" />
                    {content}
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
