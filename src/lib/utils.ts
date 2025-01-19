import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}

export function extractHeadings(content: string) {
  const headings: { id: string; title: string; level: number }[] = [];
  const lines = content.split('\n\n');

  lines.forEach((line) => {
    if (line.startsWith('# ')) {
      const title = line.replace('# ', '');
      headings.push({ id: slugify(title), title, level: 2 });
    } else if (line.startsWith('## ')) {
      const title = line.replace('## ', '');
      headings.push({ id: slugify(title), title, level: 3 });
    }
  });

  return headings;
}