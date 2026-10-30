import { Brain, Workflow, Code2, GraduationCap, type LucideIcon } from "lucide-react";
import type { Dict } from "./translations";

// Les textes des services sont dans translations.ts (rubrique « pillars »).
// Ici, on associe seulement une icône à chaque domaine.
const icons: Record<string, LucideIcon> = {
  automatisation: Workflow,
  "solutions-ia": Brain,
  developpement: Code2,
  formation: GraduationCap,
};

export type Pillar = Dict["pillars"][number] & { icon: LucideIcon };

export function getPillars(t: Dict): Pillar[] {
  return t.pillars.map((p) => ({ ...p, icon: icons[p.id] ?? Brain }));
}

export function getContactSubjects(t: Dict): string[] {
  return [...t.pillars.flatMap((p) => p.items.map((i) => i.title)), t.contact.other];
}