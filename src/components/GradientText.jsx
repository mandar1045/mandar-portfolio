import "../App.css";
export default function GradientText({
  children,
  className = "",
  colors = ["#ffffff", "#666666", "#ffffff", "#888888", "#ffffff"], // Default colors
  animationSpeed = 8, // Default animation speed in seconds
  showBorder = false, // Default overlay visibility
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      style={{ fontFamily: "Krone One" }}
      className={`animated-gradient-text ${className}`}
    >
      {showBorder && (
        <div className="gradient-overlay" style={gradientStyle}></div>
      )}
      <div className="text-content " style={gradientStyle}>
        {children}
      </div>
    </div>
  );
}
