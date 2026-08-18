export default function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
      }}
    />
  );
}