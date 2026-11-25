const P = {
  home: "M3 11l9-8 9 8v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1z",
  user: "M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0",
  file: "M6 2h9l5 5v15H6zM14 2v6h6M9 13h7M9 17h7",
  folder: "M3 6h6l2 2h10v11H3z",
  image: "M3 4h18v16H3zM3 16l5-5 4 4 3-3 6 6M8 9h.01",
  pen: "M4 20l4-1 11-11-3-3L5 16zM14 6l3 3",
  mail: "M3 5h18v14H3zM3 6l9 7 9-7",
  sun: "M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5",
  moon: "M21 13A9 9 0 1111 3a7 7 0 0010 10z",
  instagram: "M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8zM17 7h.01",
  facebook: "M14 8h3V4h-3a4 4 0 00-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z",
  github: "M9 19c-4 1-4-2-6-2m12 4v-3a3 3 0 00-1-2c3 0 6-2 6-6a5 5 0 00-1-3 5 5 0 000-3s-1 0-3 1a10 10 0 00-6 0C7 4 6 4 6 4a5 5 0 000 3 5 5 0 00-1 3c0 4 3 6 6 6a3 3 0 00-1 2v3",
  send: "M22 2L11 13M22 2l-7 20-4-9-9-4z",
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={P[name]} />
    </svg>
  );
}
