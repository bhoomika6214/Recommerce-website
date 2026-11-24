// A tiny class-name joiner: cn("a", cond && "b") -> "a b"
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
