import type { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  title: string;
}

export function SectionHeading({ icon: Icon, title }: Props) {
  return (
    <div className="mb-10 flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-mint-soft">
        <Icon className="h-5 w-5 text-mint" />
      </span>
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
