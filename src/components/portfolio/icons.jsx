import {
  Atom,
  BookOpen,
  Code2,
  Compass,
  Database,
  Layers,
  MessageSquare,
  Plug,
  Puzzle,
  Server,
  Shield,
  Shuffle,
  Smartphone,
  Users,
  Wrench,
} from "lucide-react";

export const iconMap = {
  layers: Layers,
  server: Server,
  plug: Plug,
  atom: Atom,
  database: Database,
  smartphone: Smartphone,
  code: Code2,
  wrench: Wrench,
  shield: Shield,
  puzzle: Puzzle,
  message: MessageSquare,
  users: Users,
  compass: Compass,
  shuffle: Shuffle,
  book: BookOpen,
};

export function Icon({ name, className }) {
  const Cmp = iconMap[name] ?? Code2;
  return <Cmp className={className} aria-hidden="true" />;
}
