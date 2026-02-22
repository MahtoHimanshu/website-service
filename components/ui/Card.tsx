import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return <article className="h-full rounded-md border border-slate-200 bg-white p-5">{children}</article>;
}