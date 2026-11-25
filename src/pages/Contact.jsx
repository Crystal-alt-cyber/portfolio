import { useState } from "react";
import Icon from "../components/Icon.jsx";
import { profile } from "../data.js";
import { useLang } from "../i18n.js";

export default function Contact() {
  const { t } = useLang();
  const [f, setF] = useState({ name: "", message: "" });
  const change = (e) => setF({ ...f, [e.target.name]: e.target.value });
  const send = () => {
    const s = encodeURIComponent("Message from " + (f.name || "portfolio"));
    window.location.href = `mailto:${profile.email}?subject=${s}&body=${encodeURIComponent(f.message)}`;
  };
  const rows = [
    { icon: "mail", label: "Email", href: profile.email && "mailto:" + profile.email, text: profile.email },
    { icon: "github", label: "GitHub", href: profile.github, text: profile.github },
    { icon: "send", label: "Telegram", href: profile.telegram, text: profile.telegram },
    { icon: "instagram", label: "Instagram", href: profile.instagram, text: profile.instagram },
    { icon: "facebook", label: "Facebook", href: profile.facebook, text: profile.facebook },
  ];
  return (
    <section className="page wide">
      <h1>{t("contact")}</h1>
      <p className="lead">{t("contactLead")}</p>
      <div className="contact">
        <div className="box card">
          <label>{t("yourName")}<input name="name" value={f.name} onChange={change} /></label>
          <label>{t("message")}<textarea name="message" rows="5" value={f.message} onChange={change} /></label>
          <button className="btn primary" onClick={send}>{t("send")}</button>
        </div>
        <ul className="links">
          {rows.map((r) => (
            <li key={r.label}>
              <Icon name={r.icon} />
              <div>
                <span>{r.label}</span>
                {r.href ? <a href={r.href} target="_blank" rel="noreferrer">{r.text}</a> : <em>{t("notAdded")}</em>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
