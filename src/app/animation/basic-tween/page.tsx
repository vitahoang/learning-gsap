import AnimationHeader from "~/app/_component/animation_header";
import Image from "next/image";

export default function BasicTween() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10">
      <AnimationHeader text="Basic Tween Animation" />
      {/* Animation content goes here */}
      <div className="flex flex-row gap-4">
          <Image src="/icon/Tomato.svg" alt="Tomato Icon" width={80} height={80} />
          <Image src="/icon/Banana.svg" alt="Banana Icon" width={80} height={80} />
          <Image src="/icon/Bacon.svg" alt="Bacon Icon" width={80} height={80} />
          <Image src="/icon/Birthday Cake.svg" alt="Birthday Cake Icon" width={80} height={80} />
          <Image src="/icon/Carrot.svg" alt="Carrot Icon" width={80} height={80} />
      </div>
    </main>
  );
}
