import { Badge } from "@/components/ui/badge";

interface Props {
  active?: boolean;
}

export default function LessonItem({ active }: Props) {
  return (
    <div
      className={`flex items-center justify-between rounded-md p-3 text-sm cursor-pointer ${
        active
          ? "bg-muted font-medium"
          : "hover:bg-muted/60"
      }`}
    >
      <span>JavaScript Introduction</span>

      <Badge variant="secondary">
        Preview
      </Badge>
    </div>
  );
}
