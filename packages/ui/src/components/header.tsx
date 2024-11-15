import { cn } from "../utils/cn";

export function TighterText({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={cn("tracking-tighter", className)}>{children}</p>;
}
