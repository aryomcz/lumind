"use client";

export default function PieChart({ data = [], size = 160 }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;

  let cumulative = 0;
  const center = size / 2;
  const radius = size / 2 - 2;

  function polarToCartesian(cx, cy, r, angle) {
    const rad = ((angle - 90) * Math.PI) / 180;
    return {
      x: cx + r * Math.cos(rad),
      y: cy + r * Math.sin(rad),
    };
  }

  const slices = data.map((d, i) => {
    const startAngle = (cumulative / total) * 360;
    cumulative += d.value;
    const endAngle = (cumulative / total) * 360;

    const start = polarToCartesian(center, center, radius, endAngle);
    const end = polarToCartesian(center, center, radius, startAngle);

    const largeArc = endAngle - startAngle <= 180 ? "0" : "1";

    const path = `
      M ${center} ${center}
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 ${largeArc} 0 ${end.x} ${end.y}
      Z
    `;

    return {
      path,
      color: d.color,
      key: i,
    };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {slices.map((s) => (
        <path
          key={s.key}
          d={s.path}
          fill={s.color}
          stroke="#fff"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}
