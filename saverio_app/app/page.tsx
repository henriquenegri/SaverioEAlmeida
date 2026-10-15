import Image from "next/image";
import { ArrowDown, ArrowUpRight, Scale, ShieldCheck, Landmark, FileText, KeyRound, Handshake, MessageCircle, Check } from "lucide-react";
import { Header } from "@/components/header";
import { Reveal } from "@/components/reveal";
import BlurText from "@/components/react-bits/blur-text";
import { contact, practiceAreas, articles } from "@/lib/site-content";

const areaIcons = [Handshake, Scale, FileText, KeyRound, Landmark];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow"><span /> DIREITO PENAL · DEFESA CRIMINAL</p>
              <h1 id="hero-title">Sua liberdade.<br /><em>Nossa dedicação.</em></h1>
              <BlurText text="Coragem, ética e responsabilidade na defesa dos seus direitos." className="hero-description" delay={65} direction="bottom" stepDuration={0.25} />
              <div className="hero-actions">
                <a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Fale com o advogado <ArrowUpRight size={18} /></a>
                <a className="text-link" href="#atuacao">Conheça a atuação <ArrowDown size={16} /></a>
              </div>
              <div className="hero-note"><ShieldCheck size={20} /><span>Atendimento individualizado.<br /><strong>Compromisso com cada história.</strong></span></div>
            </div>
            <div className="hero-art">
              <span className="art-label">ÉTICA. TÉCNICA. DEFESA.</span>
              <Image src="/src/imagemComprida.jpeg" alt="Renato Saverio em seu escritório" width={1600} height={900} sizes="(max-width: 760px) 100vw, 68vw" preload className="hero-photo" />
              <div className="art-caption"><span>01 /</span> A justiça começa com uma defesa.</div>
            </div>
          </div>
          <div className="hero-bottom container"><span>RENATO SAVERIO · OAB/SP 244.018</span><a href="#atuacao">EXPLORE O ESCRITÓRIO <ArrowDown size={14} /></a></div>
        </section>
        <section className="section practice-section" id="atuacao" aria-labelledby="practice-title">
          <div className="container">
            <Reveal className="section-heading"><div><p className="eyebrow">01 — ÁREAS DE ATUAÇÃO</p><h2 id="practice-title">Defesa em cada etapa.<br /><em>Atenção a cada detalhe.</em></h2></div><p>Uma atuação técnica e próxima, da investigação ao processo criminal.</p></Reveal>
            <div className="practice-grid">{practiceAreas.map((area, index) => {
              const Icon = areaIcons[index];
              return <Reveal key={area.title} delay={index * 0.06} className="practice-card"><div className="card-top"><Icon size={29} strokeWidth={1.3} /><span>0{index + 1}</span></div><h3>{area.title}</h3><p>{area.description}</p><a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label={`Conversar sobre ${area.title}`}>Conversar sobre o caso <ArrowUpRight size={17} /></a></Reveal>;
            })}</div>
          </div>
        </section>
        <section className="section about-section" id="escritorio" aria-labelledby="about-title">
          <div className="container about-grid">
            <Reveal className="portrait-wrap"><Image src="/src/imagemPessoal.webp" alt="Dr. Renato Saverio Souza Costa" width={1145} height={1373} sizes="(max-width: 760px) 90vw, 40vw" className="portrait" /><div className="portrait-caption"><span>RENATO SAVERIO</span><span>ADVOGADO · OAB/SP 244.018</span></div></Reveal>
            <Reveal className="about-copy"><p className="eyebrow">02 — O ADVOGADO</p><h2 id="about-title">Uma defesa técnica.<br /><em>Um olhar humano.</em></h2><p className="about-intro">Dr. Renato Saverio Souza Costa</p><p>A defesa dos direitos e garantias fundamentais exige preparo, responsabilidade e escuta. É com esse compromisso que Renato Saverio conduz sua atuação na área penal.</p><p>Cada caso recebe atenção individualizada e uma estratégia própria, com respeito à ampla defesa e ao devido processo legal.</p><div className="about-values">{["Ética e responsabilidade", "Clareza em cada etapa", "Atenção individualizada"].map(value => <span key={value}><Check size={16} />{value}</span>)}</div><a className="text-link" href={contact.whatsapp} target="_blank" rel="noopener noreferrer">Converse com Renato <ArrowUpRight size={18} /></a></Reveal>
          </div>
        </section>
        <section className="section principles-section" aria-labelledby="principles-title"><div className="container"><Reveal className="section-heading"><div><p className="eyebrow">03 — NOSSO COMPROMISSO</p><h2 id="principles-title">Confiança se constrói<br /><em>com presença.</em></h2></div><p>Você merece compreender seu caso e contar com uma defesa comprometida.</p></Reveal><div className="principles-grid">{[{ icon: ShieldCheck, title: "Ética", text: "Responsabilidade e respeito aos seus direitos em todas as decisões." }, { icon: FileText, title: "Transparência", text: "Comunicação clara sobre o andamento e as etapas do seu caso." }, { icon: MessageCircle, title: "Proximidade", text: "Escuta atenta e atendimento voltado à sua realidade." }].map(({ icon: Icon, title, text }, index) => <Reveal className="principle" key={title} delay={index * 0.08}><Icon size={26} strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p></Reveal>)}</div></div></section>
        <section className="section articles-section" id="publicacoes" aria-labelledby="articles-title"><div className="container"><Reveal className="section-heading"><div><p className="eyebrow">04 — LEITURAS JURÍDICAS</p><h2 id="articles-title">Direito em <em>perspectiva.</em></h2></div><p>Uma seleção de publicações para acompanhar temas da área penal.</p></Reveal><div className="articles-grid">{articles.map((article, index) => <Reveal key={article.href} delay={index * 0.08}><a className="article-card" href={article.href} target="_blank" rel="noopener noreferrer"><div className="article-image"><Image src={article.image} alt={article.alt} width={640} height={400} sizes="(max-width: 760px) 90vw, 30vw" /></div><span className="article-source">{article.source} <ArrowUpRight size={16} /></span><h3>{article.title}</h3><span className="article-read">Ler publicação</span></a></Reveal>)}</div></div></section>
        <section className="contact-section" id="contato" aria-labelledby="contact-title"><Reveal className="container contact-inner"><p className="eyebrow">VAMOS CONVERSAR</p><h2 id="contact-title">O primeiro passo é<br /><em>ser ouvido.</em></h2><p>Entre em contato para apresentar seu caso e conhecer o atendimento.</p><a className="button button-gold" href={contact.whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} /> Iniciar conversa no WhatsApp <ArrowUpRight size={18} /></a><a className="contact-phone" href={contact.phoneHref}>{contact.phoneLabel}</a></Reveal></section>
      </main>
      <footer className="site-footer"><div className="container footer-top"><a className="brand" href="#"><span className="brand-mark">RS<span>.</span></span><span className="brand-name">RENATO SAVERIO<small>ADVOCACIA CRIMINAL</small></span></a><nav aria-label="Navegação do rodapé"><a href="#atuacao">Atuação</a><a href="#escritorio">O advogado</a><a href="#contato">Contato</a></nav></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Renato Saverio. Todos os direitos reservados.</span><span>OAB/SP 244.018</span></div></footer>
      <a className="floating-contact" href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Renato Saverio pelo WhatsApp"><MessageCircle size={24} /></a>
    </>
  );
}

