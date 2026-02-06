import fs from "node:fs";
import path from "node:path";
import Link from "next/link";

function getAnimations() {
  const animationDir = path.join(process.cwd(), "src/app/animation");
  const entries = fs.readdirSync(animationDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => ({
      slug: entry.name,
      label: entry.name
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" "),
    }));
}

export default function Home() {
  const animations = getAnimations();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-8xl font-bold">Hello, GSAP!</h1>
      </div>
      <div>
        <ul className="flex flex-row gap-4">
          {animations.map((anim) => (
            <li key={anim.slug}>
              <Link
                href={`/animation/${anim.slug}`}
                className="text-2xl font-medium underline decoration-dotted"
              >
                {anim.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
