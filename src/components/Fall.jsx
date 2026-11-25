import { useEffect, useRef } from "react";

// Fon animatsiyasi: "snow" (qor) yoki "rain" (yomg'ir). Xohlasangiz shu yerda almashtiring.
const STYLE = { light: "snow", dark: "rain" };
const COUNT = { snow: 450, rain: 150 };

export default function Fall({ theme }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = ref.current, ctx = c.getContext("2d");
    const type = STYLE[theme];
    let w, h, raf;

    const size = () => {
      const d = window.devicePixelRatio || 1;
      w = window.innerWidth; h = window.innerHeight;
      c.width = w * d; c.height = h * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    };
    const make = (anywhere) => ({
      x: Math.random() * w,
      y: anywhere ? Math.random() * h : -20,
      s: type === "rain" ? 7 + Math.random() * 7 : 0.5 + Math.random() * 1.2,
      r: type === "rain" ? 10 + Math.random() * 14 : 1 + Math.random() * 2.5,
      p: Math.random() * 6.28,
    });

    size();
    const ps = Array.from({ length: COUNT[type] }, () => make(true));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(170,150,230,.28)";
      ctx.fillStyle = "white";
      for (const p of ps) {
        if (type === "rain") {
          ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x - p.r * 0.2, p.y + p.r); ctx.stroke();
          p.y += p.s; p.x -= p.s * 0.2;
        } else {
          p.p += 0.01;
          ctx.beginPath(); ctx.arc(p.x + Math.sin(p.p) * 15, p.y, p.r, 0, 6.28); ctx.fill();
          p.y += p.s;
        }
        if (p.y > h + 20 || p.x < -20) Object.assign(p, make(false));
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    window.addEventListener("resize", size);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", size); };
  }, [theme]);

  return <canvas ref={ref} className="fall" aria-hidden="true" />;
}
