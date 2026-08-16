import type { ReactNode } from "react";
import { useReveal } from "../hooks/use-reveal";

export function RevealCard({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, revealProps } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      {...revealProps}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}
