import Link from "next/link";
export default function Navbar() {
  return <nav className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md">
    <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
      <Link
        href="/"
        className="text-sm font-semibold tracking-tight text-white"
      >
        Learn GSAP
      </Link>
      <div className="flex items-center gap-6">
        <Link
          href="/"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          Home
        </Link>
        <Link
          href="/animation"
          className="text-sm text-zinc-400 transition-colors hover:text-white"
        >
          Animations
        </Link>
      </div>
    </div>
  </nav>;
}
