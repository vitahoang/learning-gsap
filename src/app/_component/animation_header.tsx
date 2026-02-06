export default function AnimationHeader(headerText: { text?: string }) {
    return (
      <h1 className="text-6xl font-bold">{headerText.text ?? "Basic Tween Animation"}</h1>
    );
  }