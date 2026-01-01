import * as React from "react"

import { Progress } from "@/components/ui/progress"

export function CourseProgressBar
() {
  const [progress, setProgress] = React.useState(13)

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex items-center gap-8">
        <Progress value={progress} className="" />
        <p className="font-bold text-sky-600">66%</p>
    </div>
  )
}
