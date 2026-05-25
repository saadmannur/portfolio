import {
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Palette,
  Server,
} from "lucide-react";

const iconMap = {
  FileCode2,
  Layers,
  Server,
  Palette,
  Database,
  GitBranch,
};

export default function SkillIcon({ name, className = "h-6 w-6 text-accent" }) {
  const Icon = iconMap[name] || Code2;
  return <Icon className={className} strokeWidth={1.75} />;
}
