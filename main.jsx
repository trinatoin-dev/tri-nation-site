import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, Download, Globe2, Landmark, Menu, MessageCircle, Shield, Swords, Plane, Coins, Handshake, Map, ChevronDown, X, ExternalLink } from 'lucide-react';
import './styles.css';

const DISCORD = 'https://discord.gg/pWvfUZdAw';
const LAUNCHER = 'https://drive.google.com/file/d/1Q5JAgj9dGBd68JkHZijohIIigHCPlJ-n/view?usp=sharing';

const features = [
  { icon: Coins, number: '01', title: 'Экономика', text: 'Развивай производство, управляй ресурсами и участвуй в экономической жизни мира.' },
  { icon: Landmark, number: '02', title: 'Страны и политика', text: 'Создавай государство, принимай решения и определяй направление его развития.' },
  { icon: Handshake, number: '03', title: 'Дипломатия', text: 'Строй отношения с другими странами, договаривайся и заключай союзы.' },
  { icon: Plane, number: '04', title: 'Техника и авиация', text: 'Используй военную технику и авиацию в рамках игрового мира.' },
  { icon: Swords, number: '05', title: 'Военные системы', text: 'Военная составляющая влияет на стратегию, безопасность и баланс сил.' },
  { icon: Globe2, number: '06', title: 'Общий мир', text: 'Каждая страна — часть большой системы, где решения соседей имеют значение.' },
];
const faq = [
  { q: 'Какая версия Minecraft нужна?', a: 'Для проекта указана версия Minecraft 1.21.1 с NeoForge. Дополнительные инструкции по установке можно опубликовать здесь после подготовки администрацией.' },
  { q: 'Где скачать лаунчер?', a: 'Нажми «Скачать лаунчер» — кнопка ведёт на предоставленную ссылку Google Drive.' },
  { q: 'Как вступить в сообщество?', a: 'Присоединяйся к Discord-серверу TRI-NATION. Актуальные новости и инструкции можно разместить там.' },
  { q: 'Где прочитать правила?', a: 'Полный текст правил пока не предоставлен. Раздел подготовлен и будет заполнен после получения официальных правил сервера.' },
];
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const nav = [{href:'#about',label:'О сервере'}, {href:'#features',label:'Возможности'}, {href:'#rules',label:'Правила'}, {href:'#faq',label:'FAQ'}, {href:'#map',label:'Карта мира'}];
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="topline"><span className="status-dot"/> ОТКРЫТЫЙ МИР · ОБЩИЕ ИНТЕРЕСЫ · БОЛЬШАЯ ПОЛИТИКА</div>
    <header className="header">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="TRI-NATION — главная"><span className="brand-mark"><span/><span/><span/></span><span className="brand-copy"><b>TRI<span>-</span>NATION</b><small>BUILD YOUR STATE</small></span></a>
      <nav className={menuOpen ? 'nav nav-open' : 'nav'}>{nav.map(n=><a key={n.href} href={n.href} onClick={closeMenu}>{n.label}</a>)}<a className="nav-mobile-download" href={LAUNCHER} target="_blank" rel="noreferrer">Скачать лаунчер <ExternalLink size={14}/></a></nav>
      <div className="header-actions"><a className="discord-link" href={DISCORD} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Discord <ExternalLink size={13}/></a><a className="button button-small" href={LAUNCHER} target="_blank" rel="noreferrer"><Download size={15}/> Скачать</a></div>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Закрыть меню':'Открыть меню'}>{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid" aria-hidden="true"/><div className="hero-glow" aria-hidden="true"/>
        <div className="hero-content">
          <div className="eyebrow"><span className="eyebrow-line"/> НЕ ПРОСТО СЕРВЕР. ЦЕЛЫЙ МИР.</div>
          <h1>ТВОЯ СТРАНА.<br/><span>ТВОИ ПРАВИЛА.</span></h1>
          <p className="hero-lead">Мир, где экономика формирует силу, дипломатия меняет границы возможностей, а каждое решение влияет на будущее.</p>
          <p className="hero-description">TRI-NATION — Minecraft-проект о странах, экономическом и политическом взаимодействии.</p>
          <div className="hero-buttons"><a className="button button-primary" href={LAUNCHER} target="_blank" rel="noreferrer"><Download size={18}/> Скачать лаунчер <ArrowRight size={17}/></a><a className="button button-outline" href={DISCORD} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Войти в Discord</a></div>
          <div className="hero-meta"><span><i/> MINECRAFT 1.21.1</span><span className="meta-sep"/><span>NEOFORGE</span><span className="meta-sep"/><span>TRI-NATION UNIVERSE</span></div>
        </div>
        <div className="hero-visual" aria-label="Абстрактная визуализация мира TRI-NATION">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="planet"><div className="planet-grid"/><div className="continent continent-a"/><div className="continent continent-b"/><div className="continent continent-c"/><div className="planet-shade"/></div>
          <div className="map-pin pin-one"><span/> <b>ДИПЛОМАТИЯ</b><small>Отношения между странами</small></div>
          <div className="map-pin pin-two"><span/> <b>ЭКОНОМИКА</b><small>Развитие государства</small></div>
          <div className="map-pin pin-three"><span/> <b>СТРАТЕГИЯ</b><small>Решения имеют значение</small></div>
          <div className="visual-caption"><span>01 / 03</span><div/><span>WORLD SYSTEM</span></div>
        </div>
        <a className="scroll-cue" href="#about"><ArrowDown size={16}/> ПРОКРУТИ, ЧТОБЫ УЗНАТЬ БОЛЬШЕ</a>
      </section>

      <section className="intro section" id="about"><div className="section-kicker">01 / О ПРОЕКТЕ</div><div className="intro-layout"><h2>МИР НЕ ДЕЛИТСЯ<br/>НА <span>ЧЁРНОЕ И БЕЛОЕ.</span></h2><div className="intro-copy"><p>Он состоит из интересов, решений и договорённостей. В TRI-NATION ты становишься частью мира, в котором страны взаимодействуют, развиваются и выстраивают собственный путь.</p><p>Здесь важны не только ресурсы, но и то, как ты ими распорядишься — и с кем решишь сотрудничать.</p><a className="text-link" href={DISCORD} target="_blank" rel="noreferrer">СТАТЬ ЧАСТЬЮ СООБЩЕСТВА <ArrowRight size={16}/></a></div></div><div className="stats-row"><div><strong>01</strong><span>ТВОЁ ГОСУДАРСТВО</span></div><div><strong>∞</strong><span>ПУТИ РАЗВИТИЯ</span></div><div><strong>1.21.1</strong><span>ВЕРСИЯ MINECRAFT</span></div><div><strong>NEO</strong><span>NEOFORGE</span></div></div></section>

      <section className="features-section section" id="features"><div className="section-heading"><div><div className="section-kicker">02 / ВОЗМОЖНОСТИ</div><h2>БОЛЬШЕ, ЧЕМ <span>ВЫЖИВАНИЕ.</span></h2></div><p>Создавай собственную историю в мире, где технологии, политика и экономика работают вместе.</p></div><div className="feature-grid">{features.map(f=><article className="feature-card" key={f.number}><div className="feature-top"><span>{f.number}</span><f.icon size={23} strokeWidth={1.6}/></div><h3>{f.title}</h3><p>{f.text}</p><div className="feature-line"/></article>)}</div></section>

      <section className="download-section" id="download"><div className="download-bg-grid"/><div className="download-content"><div className="section-kicker">03 / НАЧНИ СВОЮ ИСТОРИЮ</div><h2>ТВОЙ СЛЕДУЮЩИЙ<br/><span>МИР НАЧИНАЕТСЯ ЗДЕСЬ.</span></h2><p>Установи лаунчер и присоединяйся к TRI-NATION.</p><div className="download-details"><span><Shield size={17}/> Minecraft 1.21.1</span><span><Globe2 size={17}/> NeoForge</span></div><a className="button button-primary button-large" href={LAUNCHER} target="_blank" rel="noreferrer"><Download size={19}/> Скачать лаунчер <ArrowRight size={18}/></a><small className="download-note">Ссылка ведёт на Google Drive. Инструкция по установке будет добавлена отдельно.</small></div><div className="download-stamp"><div className="stamp-ring">TN · TRI-NATION · TN · TRI-NATION ·</div><div className="stamp-center"><span className="brand-mark large"><span/><span/><span/></span><b>TN</b><small>ESTABLISH YOUR LEGACY</small></div></div></section>

      <section className="rules-section section" id="rules"><div className="section-kicker">04 / ПРАВИЛА СЕРВЕРА</div><div className="rules-layout"><div><h2>СИЛА — ЭТО<br/><span>ОТВЕТСТВЕННОСТЬ.</span></h2><p>Чтобы мир оставался интересным для всех, правила сервера должны быть понятными и едиными.</p></div><div className="notice-card"><div className="notice-icon"><Shield size={22}/></div><div><h3>Официальные правила готовятся</h3><p>Полный текст правил не был предоставлен для этого сайта. Мы не публикуем выдуманные ограничения — здесь появится официальная версия от администрации.</p><a href={DISCORD} target="_blank" rel="noreferrer" className="text-link">УТОЧНИТЬ В DISCORD <ArrowRight size={15}/></a></div></div></div></section>

      <section className="faq-section section" id="faq"><div className="section-heading"><div><div className="section-kicker">05 / FAQ</div><h2>ЕСТЬ <span>ВОПРОСЫ?</span></h2></div><p>Коротко о том, что уже известно о проекте.</p></div><div className="faq-list">{faq.map((item,i)=><div className={'faq-item '+(openFaq===i?'faq-active':'')} key={item.q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span className="faq-index">0{i+1}</span><b>{item.q}</b><ChevronDown size={19}/></button>{openFaq===i&&<p>{item.a}</p>}</div>)}</div></section>

      <section className="map-section section" id="map"><div className="map-copy"><div className="section-kicker">06 / КАРТА МИРА</div><h2>ОДИН МИР.<br/><span>МНОГО СТРАН.</span></h2><p>Карта мира TRI-NATION станет точкой отсчёта для границ, государств и международных отношений.</p><div className="map-status"><span className="status-dot"/> ИНТЕРАКТИВНАЯ КАРТА БУДЕТ ДОБАВЛЕНА</div></div><div className="map-preview"><div className="map-grid-lines"/><svg className="world-shape" viewBox="0 0 650 340" role="img" aria-label="Схематичный контур карты мира"><path d="M45 91 L71 66 111 57 137 73 164 64 185 82 210 77 228 102 208 122 190 129 177 153 155 164 148 189 127 197 112 179 93 170 79 143 58 132 51 109Z"/><path d="M175 197 L199 204 216 231 211 257 229 283 219 315 202 299 191 268 181 248 166 221Z"/><path d="M271 91 L294 77 317 83 333 71 358 80 376 71 402 83 419 78 442 92 468 89 488 105 512 105 532 124 557 131 566 150 545 163 523 157 506 176 482 174 469 193 447 198 437 221 415 223 402 202 386 193 375 170 357 159 346 137 327 128 311 144 292 132 279 112Z"/><path d="M340 176 L363 178 380 198 394 223 389 249 374 274 362 301 344 292 335 265 320 243 319 220 330 201Z"/><path d="M494 219 L520 209 542 221 551 241 536 256 515 250 501 238Z"/><path d="M576 277 L592 269 607 279 602 293 585 296Z"/></svg><div className="map-overlay"><Map size={28}/><b>КАРТА МИРА TRI-NATION</b><span>Предварительный макет · не игровая карта</span></div><div className="map-coord coord-a">54°N 25°E</div><div className="map-coord coord-b">41°N 12°E</div><div className="map-coord coord-c">35°N 139°E</div></div></section>

      <section className="community-cta"><div className="cta-mark"><MessageCircle size={27}/></div><div><div className="section-kicker">СООБЩЕСТВО TRI-NATION</div><h2>МИР СТРОИТСЯ <span>ВМЕСТЕ.</span></h2><p>Следи за обновлениями и общайся с игроками в Discord.</p></div><a className="button button-primary" href={DISCORD} target="_blank" rel="noreferrer">Присоединиться <ArrowRight size={17}/></a></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span/><span/><span/></span><span className="brand-copy"><b>TRI<span>-</span>NATION</b><small>BUILD YOUR STATE</small></span></a><span className="footer-copy">Minecraft 1.21.1 · NeoForge</span><div className="footer-links"><a href="#rules">Правила</a><a href="#faq">FAQ</a><a href={DISCORD} target="_blank" rel="noreferrer">Discord <ExternalLink size={12}/></a></div><span className="copyright">© TRI-NATION</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
