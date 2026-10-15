"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/lib/site-content";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container header-inner"><a className="brand" href="#" aria-label="Renato Saverio — início" onClick={() => setOpen(false)}><span className="brand-mark">RS<span>.</span></span><span className="brand-name">RENATO SAVERIO<small>ADVOCACIA CRIMINAL</small></span></a><button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" aria-label={open ? "Fechar menu" : "Abrir menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button><nav id="main-navigation" className={`header-nav${open ? " is-open" : ""}`} aria-label="Navegação principal" onKeyDown={event => { if (event.key === "Escape") { setOpen(false); document.querySelector<HTMLButtonElement>(".menu-toggle")?.focus(); } }}><a href="#atuacao" onClick={() => setOpen(false)}>Atuação</a><a href="#escritorio" onClick={() => setOpen(false)}>O advogado</a><a href="#publicacoes" onClick={() => setOpen(false)}>Publicações</a><a className="header-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Entre em contato <ArrowUpRight size={16} /></a></nav></div></header>;
}
