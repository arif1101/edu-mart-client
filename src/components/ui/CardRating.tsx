import { useId } from "react"

import { Label } from "@/components/ui/label"
import { Star } from "lucide-react"

export default function CardRating() {
  const id = useId()
  return (
    <div defaultValue="all">
      <div className="flex items-center gap-2">
        <Label htmlFor={`${id}-2`} className="inline-flex items-center gap-1">
          <span
            className="inline-flex items-center text-amber-500"
            aria-hidden="true"
          >
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
            <Star size={16} />
          </span>
          <span className="sr-only">5 stars</span>{" "}
          <span className="text-muted-foreground text-xs leading-[inherit] font-normal">
            (5,168)
          </span>
        </Label>
      </div>
    </div>
  )
}
