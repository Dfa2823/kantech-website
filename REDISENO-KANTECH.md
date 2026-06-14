# Brief de Rediseño — KANTECH (Evolución Premium)

> Documento de trabajo generado por la auditoría multi-agente del 2026-06-13.
> Objetivo: rediseño "evolución premium" del sitio, sección por sección, usando el **MCP de Google Stitch** como motor de diseño.
> **Preservar el 100% del copy en español** (con acentos correctos).

---

## Decisiones del usuario

- **Alcance:** Evolución premium — mantener la esencia de marca, elevar la ejecución (NO identidad desde cero).
- **Flujo:** Todo de corrido — generar todos los diseños con Stitch, presentar el conjunto, luego implementar.
- **Tema:** Que Stitch proponga la dirección (la auditoría recomienda mantener el dark elevándolo a premium).

---

## Quién es KANTECH (resumen de marca)

Estudio de software lean basado en Cali (Colombia) que construye **agentes de IA, automatizaciones N8N, mejoras de proceso y software a medida (CRM/ERP)** para PYMEs en crecimiento de LatAm (Colombia, Ecuador, Perú, México — 100% remoto).

**Público:** dueños/operadores de PYME no técnicos que pierden +20 h/semana en trabajo manual y temen a las agencias "caja negra". **Posicionamiento:** socio tecnológico a largo plazo, calidad enterprise a fracción del costo ("eficientes, no baratos"), resultados en semanas, diagnóstico gratis, sin permanencia, garantía del primer sprint. **Canal principal de conversión:** WhatsApp (`wa.me/573194436045`) + formulario.

---

## Dirección visual propuesta — "Quiet Premium / Operational Aurora"

Mantener la base navy oscura, pero subirla de "dark SaaS genérico" a "estudio premium confiable para empresas" con 5 movimientos:

1. **Sistema de tokens + profundidad:** refactor a CSS custom properties con escala de elevación real (surface-0 `#080B16` → surface-1 `#0F1525` → surface-2 `#161E33` → surface-3 `#1E2942`), sombras en capas y receta de glassmorphism.
2. **Aurora, no puntos:** reemplazar la cuadrícula de puntos plana por un mesh de gradiente animado de baja opacidad + grano sutil; hairline de gradiente en las costuras de sección.
3. **Prueba sobre afirmación:** cada número se vuelve un stat block diseñado (numeral grande esmeralda) respaldado por evidencia real (screenshot, chip de commits/deploys de GitHub, ciudad del cliente).
4. **Un camino focal por pantalla:** un CTA primario "magnético" dominante, secundarios fantasma, microcopy de reversión de riesgo (Diagnóstico gratis · Sin permanencia · Respuesta en <24h).
5. **Tipografía editorial fluida:** escala `clamp()`, Space Grotesk display con numerales gigantes fantasma, Inter body con `text-wrap:balance` (eliminar los `<br/>` forzados).

### Paleta refinada

| Rol | Hex |
|-----|-----|
| surface-0 (canvas) | `#080B16` |
| surface-1 | `#0F1525` |
| surface-2 (cards) | `#161E33` |
| surface-3 (raised) | `#1E2942` |
| border | `#243049` |
| text | `#F4F6FF` |
| muted (subido a AA) | `#A9B6CC` |
| primary / electric blue | `#1E3BFF` |
| accent / cyan (uso escaso) | `#00D4FF` |
| brand-gradient violet (solo gradiente) | `#6C2FD9` |
| success / emerald (SOLO prueba/ROI) | `#00E887` |

**Tipografías:** Space Grotesk (display) + Inter (body).

---

## Problemas transversales detectados

1. **Arquitectura bilingüe rota:** ES + EN en un solo DOM con toggle por CSS, sin ruta `/en`, sin `hreflang`, el `<select>` de contacto no tiene opciones en EN. Migrar a i18n real preservando el ES verbatim.
2. **Inconsistencia de marca/confianza:** Gmail personal, LinkedIn/GitHub personales, dominio Railway por defecto, y acentos faltantes en meta/JSON-LD. Mover a email de dominio propio, redes de empresa, dominio custom, arreglar acentos.
3. **Afirmaciones sin evidencia:** stats del hero, claims en pesos, "6x ROI", testimonios — casi sin artefactos de prueba (¡los datos de GitHub ya existen en el array de Portfolio pero no se renderizan!).
4. **Brechas de motion + accesibilidad:** shimmer infinito no controlado por `prefers-reduced-motion`, SVG decorativos sin `aria-hidden`, toggles sin `aria-expanded`/focus trap/ESC.
5. **Jerarquía visual débil:** grids uniformes, superficies casi idénticas, sombras monótonas — "todo brilla, nada destaca".
6. **Sin datos estructurados / SEO:** sin FAQPage/Organization/LocalBusiness JSON-LD, sin logo real, precio obsoleto hardcodeado.
7. **Fugas de conversión:** el formulario solo abre WhatsApp (se puede bloquear el popup → lead perdido), pricing sin CTA por tier, Process sin CTA, escasez del FinalCTA con fecha vencida ("Abril 2026").
8. **Token drift:** rgba/hex duplicados por todos lados en vez de una fuente única.

---

## Plan por sección (14 bloques) con prompts de Stitch

Orden de página: Navbar → Hero → Services → WhyUs → Portfolio → Testimonials → Process → Engagement → FAQ → FinalCTA → Contact → Footer → WhatsAppFloat. (+ Design System base. TechStack existe pero no se renderiza — opcional reintroducir.)

Cada bloque incluye su **prompt listo para pegar en Stitch**.

---

### 0. Design System & Tokens — `src/styles/global.css`, `tailwind.config.mjs`

**Objetivo:** refactor a capa de tokens CSS-variables (roles de color, 4 superficies de elevación, escala de sombras/radios/spacing/duración), sistema de glass, botón primario magnético (shimmer/glow solo en hover, gated por reduced-motion), fallback sólido del gradient-text, muted a WCAG AA, esmeralda solo para prueba.

**Prompt Stitch:**
> Design a premium design-system style guide / component sheet for a dark-themed B2B software studio called KANTECH (Spanish-language, LatAm SMB audience). Background: near-black navy canvas (#080B16) with a faint animated aurora gradient mesh (electric blue #1E3BFF, cyan #00D4FF, violet #6C2FD9 at very low opacity) and subtle film grain. Show: (1) a color token grid with semantic roles — surface-0 #080B16, surface-1 #0F1525, surface-2 #161E33 (cards), surface-3 #1E2942 (raised), border #243049, text #F4F6FF, muted #A9B6CC, primary/electric-blue #1E3BFF, accent/cyan #00D4FF, brand-gradient violet #6C2FD9, success/emerald #00E887, plus danger/warning/info chips; (2) an elevation scale (4 cards floating with layered ambient+key shadows and a glassmorphism card with backdrop blur and a 1px top inset highlight); (3) typography specimens: display font Space Grotesk (huge fluid H1, oversized ghosted numeral '01'), body font Inter, with a brand gradient-text sample reading 'tareas manuales.' and its solid-blue fallback; (4) buttons: a dominant 'magnetic' primary CTA with subtle gradient border and glow-on-hover labeled 'Quiero mi diagnóstico gratis', and a quiet ghost secondary 'Ver casos de éxito reales'; (5) a radius scale (8/12/16/24/full), pills (a section-label pill 'SERVICIOS' uppercase tracked, an emerald success pill 'Diagnóstico gratis'), and a stat block component (oversized emerald numeral '500+' over muted label 'Horas/mes automatizadas'). Tone: confident, premium, enterprise-trustworthy, restrained — depth and quality over neon noise. Reserve emerald only for proof/success. Provide a cohesive, modern token sheet, not a busy neon dashboard.

---

### 1. Navbar — `src/components/Navbar.astro`

**Copy a preservar:** Wordmark `KANTECH`. Links: `Servicios`, `Portafolio`, `Precios`, `Proceso`, `Contacto`. Toggle `ES`/`EN`. CTA `Hablar con experto` → `wa.me/573194436045`.

**Objetivo:** nav fija glassmorphic con blur-on-scroll por clase de estado, barra de progreso de scroll en gradiente, scrollspy con indicador deslizante, switch ES/EN accesible que actualiza `<html lang>`, CTA WhatsApp magnético con punto de estado, drawer móvil con scrim/lock/focus-trap/ESC. Logo SVG real.

**Prompt Stitch:**
> Design a premium fixed top navigation bar for a dark B2B software studio 'KANTECH'. Two states side by side: (A) transparent over a dark navy aurora hero; (B) scrolled state — glassmorphic with backdrop blur, a hairline gradient bottom border (blue→cyan), and a thin 2px gradient scroll-progress bar across the very top. Layout: left = gradient rounded-lg logo tile with a white 'K' glyph + wordmark 'KANTECH' in Space Grotesk bold; center = nav links 'Servicios', 'Portafolio', 'Precios', 'Proceso', 'Contacto' in muted slate (#A9B6CC) with the active link highlighted by a sliding pill/animated underline in electric blue; right = an accessible segmented ES|EN language switch with a sliding indicator (ES active), and a prominent 'magnetic' WhatsApp CTA pill 'Hablar con experto' in electric blue #1E3BFF with a WhatsApp glyph and a small pulsing emerald status dot + tiny 'respondemos en minutos' label. Include a mobile version: hamburger that opens a full-height animated drawer with a dark scrim, stacked links, the language switch, and a full-width 'Hablar con experto' CTA at top. Colors: canvas #080B16, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, accent cyan #00D4FF, success emerald #00E887. Fonts: Space Grotesk display, Inter body. Tone: sleek, premium, trustworthy, alive (scrollspy + progress) but not cluttered.

---

### 2. Hero — `src/components/Hero.astro`

**Copy a preservar:** Badge `Nuestros clientes ahorran $3-5M COP/mes · Diagnóstico gratis`. Titular `Deja de perder horas en tareas manuales.` (`en tareas manuales.` en gradiente). Subtítulo `Tu equipo pierde +20 horas semanales copiando datos, enviando reportes y apagando incendios. Lo solucionamos con IA y automatizaciones — desde $500.000 COP, con resultados visibles en semanas.` Tags: `Agentes de IA`, `Automatizaciones`, `Mejoras de Proceso`, `Desarrollo a Medida`. CTA primaria `Quiero mi diagnóstico gratis`. Secundaria `Ver casos de éxito reales`. Stats: `500+` / `4` / `10+` / `98%`.

**Objetivo:** hero de showcase creíble — layout asimétrico 2 columnas (copy izq, mockup de dashboard/agente WhatsApp animado der) sobre aurora-mesh + grano; sin `<br/>`; CTA primario magnético + secundario fantasma; tags visibles en móvil; stat blocks esmeralda con strip de logos; contadores animan solo en vista.

**Prompt Stitch:**
> Design a premium, conversion-focused hero section for a dark B2B AI/automation software studio 'KANTECH' (Spanish, LatAm SMB audience). Full-height, asymmetric two-column layout on a near-black navy canvas (#080B16) with a slow animated aurora gradient mesh (electric blue #1E3BFF, violet #6C2FD9, cyan #00D4FF, very low opacity) and faint film grain. LEFT column (text): a small pill badge with a pulsing emerald dot reading 'Nuestros clientes ahorran $3-5M COP/mes · Diagnóstico gratis'; a large bold Space Grotesk headline 'Deja de perder horas en tareas manuales.' where the phrase 'en tareas manuales.' uses a blue→cyan→violet gradient (let it wrap naturally, balanced, no forced line break); a concise muted subheadline 'Tu equipo pierde +20 horas semanales copiando datos, enviando reportes y apagando incendios. Lo solucionamos con IA y automatizaciones — desde $500.000 COP, con resultados visibles en semanas.'; a scrollable row of 4 chips 'Agentes de IA', 'Automatizaciones', 'Mejoras de Proceso', 'Desarrollo a Medida' (visible on mobile too); a CTA row with a DOMINANT magnetic primary button 'Quiero mi diagnóstico gratis' (electric blue, WhatsApp glyph, soft glow) and a quiet ghost secondary 'Ver casos de éxito reales' with a play/arrow icon; small risk-reversal microcopy under the buttons 'Sin compromiso · Respuesta en minutos'. RIGHT column: a realistic floating product visual — a glassmorphic dashboard / automation-flow mockup OR a WhatsApp AI-agent chat thread showing a bot qualifying a lead, framed in a subtle device/browser chrome with depth shadows and a glow. BELOW the columns, full width: a 4-up stat row using oversized emerald (#00E887) Space Grotesk numerals over muted labels — '500+ Horas/mes automatizadas', '4 Países en producción', '10+ Sistemas en producción', '98% Clientes satisfechos' — plus a thin row of grayscale client/industry logos for proof. Fonts: Space Grotesk display, Inter body. Text #F4F6FF, muted #A9B6CC. Tone: premium, credible, outcome-driven, alive but elegant — show the product, don't just describe it.

---

### 3. Services — `src/components/Services.astro`

**Copy a preservar:** Label `Servicios`. Título `Todo lo que tu empresa necesita, bajo un mismo techo.` (`techo.` gradiente). Sub `No vendemos herramientas. Entregamos soluciones completas que generan resultados desde el primer mes.` 4 cards (Agentes de IA / Automatizaciones / Mejoras de Proceso / Desarrollo a Medida) con su descripción y claims en pesos. Helper `¿No sabes cuál necesitas? Te ayudamos a decidir.` Botón `Recibir asesoría gratis`.

**Objetivo:** layout bento — `Agentes de IA` como card flagship grande con mockup de chat WhatsApp animado; las otras 3 como trío de apoyo; cada claim en chip-métrica con micro-prueba; CTA WhatsApp por card con mensaje pre-llenado; tags técnicos detrás de toggle `Tecnologías`.

**Prompt Stitch:**
> Design a premium 'Services' section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16) with a faint gradient mesh and a hairline gradient divider at the top seam. Centered header: small uppercase pill 'SERVICIOS', a bold Space Grotesk title 'Todo lo que tu empresa necesita, bajo un mismo techo.' (the word 'techo.' in a blue→cyan→violet gradient), and a muted subtitle 'No vendemos herramientas. Entregamos soluciones completas que generan resultados desde el primer mes.' Use a BENTO/asymmetric layout, not a uniform grid: ONE large flagship glass card for 'Agentes de IA' spanning more width, containing a gradient-bordered icon tile, the description 'Un asistente que atiende a tus clientes 24/7, califica leads y agenda citas — sin contratar a nadie más. Nuestros clientes ahorran $3-5M COP/mes en personal solo con este servicio.', a highlighted emerald metric chip '$3-5M COP/mes ahorrados', a small animated WhatsApp chat-thread mockup of an AI agent qualifying a lead, and a per-card CTA 'Quiero un agente →'. Then three supporting glass cards: 'Automatizaciones' — 'Eliminamos las tareas que tu equipo odia: copiar datos entre sistemas, enviar reportes, actualizar inventarios. Un flujo que ahorra 15 horas/semana cuesta desde $500.000 COP.' with metric chip '15 h/semana ahorradas' and CTA 'Automatizar mi proceso →'; 'Mejoras de Proceso' — 'Encontramos dónde tu empresa pierde tiempo y dinero. Un diagnóstico de procesos puede revelar +$5M COP/mes en ineficiencias ocultas. El diagnóstico es gratis.' with emerald badge 'Diagnóstico gratis' and CTA 'Pedir diagnóstico →'; 'Desarrollo a Medida' — 'Tu propio CRM, ERP o sistema web. Construido exactamente como lo necesitas, sin pagar por funciones que nunca usas. Desde $2M COP. Entrega en 4-12 semanas.' with chip 'Entrega 4-12 semanas' and CTA 'Construir mi sistema →'. Each card has a small 'Tecnologías' toggle revealing stack tags. Below the grid: a thin trust strip (client count / sectors / '+30 procesos automatizados') then a centered helper line '¿No sabes cuál necesitas? Te ayudamos a decidir.' with a primary button 'Recibir asesoría gratis'. Colors: surfaces #0F1525/#161E33, border #243049, text #F4F6FF, muted #A9B6CC, primary blue #1E3BFF, emerald #00E887 reserved for metrics. Fonts Space Grotesk + Inter. Tone: premium, proof-driven, clear hierarchy with a hero card guiding the eye.

---

### 4. WhyUs — `src/components/WhyUs.astro`

**Copy a preservar:** Label `Por qué KANTECH`. Título `El socio tecnológico que tu empresa necesita.` Sub `No somos solo desarrolladores. Somos el puente entre tu negocio y la tecnología que lo transforma.` 6 razones (Resultados en semanas / Equipo local en Colombia / Tecnología que escala / ROI medible desde el día 1 / Integración con lo que ya tienes / Soporte continuo). CTA `Conocer cómo trabajamos`.

**Objetivo:** bento asimétrico que eleva los 2 mata-objeciones más fuertes (`Equipo local en Colombia` con motivo de mapa/zona horaria; `Resultados en semanas` con stat de entrega) como tiles grandes; el resto compactas; anclar cada claim en prueba; banda de prueba social real; CTA primario `Agenda una llamada` + fantasma `Ver casos de éxito`.

**Prompt Stitch:**
> Design a premium 'Why choose us' / differentiators section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16) with subtle aurora glow. Centered header: uppercase pill 'POR QUÉ KANTECH', bold Space Grotesk title 'El socio tecnológico que tu empresa necesita.', muted subtitle 'No somos solo desarrolladores. Somos el puente entre tu negocio y la tecnología que lo transforma.' Use an ASYMMETRIC BENTO grid (not 6 equal cards). Two LARGE feature tiles: (1) 'Equipo local en Colombia' — 'Misma zona horaria, mismo idioma, misma cultura de negocio. Sin fricciones de comunicación ni malentendidos culturales.' illustrated with a stylized LatAm map / Colombia pin and a 'misma zona horaria' clock motif plus an emerald badge 'Respondemos en < 1h'; (2) 'Resultados en semanas' — 'No meses ni años. Entregamos soluciones funcionales rápido, con iteraciones cortas para que veas valor desde el inicio.' with a large emerald stat numeral (e.g. delivery time) count-up. Four compact glass cards for the rest: 'Tecnología que escala' — 'Construimos sobre stacks modernos y probados. Lo que hacemos hoy puede crecer con tu empresa mañana sin reescribir todo.'; 'ROI medible desde el día 1' — 'Cada proyecto se define con métricas claras: horas ahorradas, procesos eliminados, ventas incrementadas. Sabemos exactamente qué estamos mejorando.'; 'Integración con lo que ya tienes' — 'Trabajamos con tus sistemas actuales. No necesitas tirar lo que ya funciona. Conectamos, mejoramos y ampliamos.'; 'Soporte continuo' — 'Después de entregar, seguimos. Mantenimiento, mejoras, nuevas funcionalidades. Una relación a largo plazo, no un proyecto y adiós.' Each card has a distinct bespoke duotone icon in a gradient-bordered tile. Add a real social-proof band (a row of grayscale client logos + a 5-star average + 'X proyectos entregados'). End with a CTA row: dominant primary 'Agenda una llamada' and ghost secondary 'Ver casos de éxito' (keep the original label 'Conocer cómo trabajamos' available as the primary if preferred). Colors: surfaces #0F1525/#161E33, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, emerald #00E887 for proof only. Fonts Space Grotesk + Inter. Tone: confident, comparison-winning, premium, evidence-backed.

---

### 5. Portfolio — `src/components/Portfolio.astro`

**Copy a preservar:** Label `Portafolio`. Título `Casos de éxito reales.` (`reales.` gradiente). Sub `Estas empresas tenían el mismo problema que tú...`. 4 casos: CRM Comercial Integral (Salud & Estética, crm-sanavit · 90 commits · 85 deploys), DYV Command Center (6h → 45min), SOFY ERP Industrial (258 commits, 264 deploys), Automatizaciones N8N (+30 flujos, ~500 h/mes). CTA `¿Tienes un proyecto en mente?` + `Cuéntanos tu reto`.

**Objetivo:** portafolio visual real — screenshots/mockups en frames de browser/laptop; cada métrica titular como stat block grande; **exponer los datos de GitHub/commits/deploys** ya existentes como chips de credibilidad; SOFY ERP como flagship ancho; cards clicables a detalle/modal enlazado al testimonio; barra de filtro por sector; mini before→after; trust strip agregado.

**Prompt Stitch:**
> Design a premium 'Portfolio / case studies' section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16). Centered header: uppercase pill 'PORTAFOLIO', bold title 'Casos de éxito reales.' ('reales.' in blue→cyan→violet gradient), muted subtitle 'Estas empresas tenían el mismo problema que tú: procesos lentos, datos dispersos y equipos ahogados en tareas manuales.' Add a sector filter chip row: 'Todos · Salud & Estética · Contabilidad · Manufactura · Automatización'. Use a BENTO layout with one WIDE flagship card: 'SOFY — ERP Industrial a Medida' (sector 'Producción / Manufactura') showing a realistic ERP dashboard screenshot in a browser frame, a big emerald stat block 'Control total de producción', and mono 'activity' credibility chips '258 commits · 264 deploys' with a GitHub icon; clickable 'Ver caso →'. Three standard glass case cards each with a product screenshot/mockup, a sector pill, a title, and a LARGE emerald metric as the focal point: (1) 'CRM Comercial Integral' (Salud & Estética) — big metric '~15 h/semana ahorradas', supporting line 'Pipeline 100% visible en tiempo real.', mono chip 'github.com/Dfa2823/crm-sanavit · 90 commits · 85 deploys'; (2) 'DYV Command Center' (Estética / Contabilidad) — big before→after metric '6h → 45min por cierre contable', line 'Carga automática a Odoo sin intervención manual.'; (3) 'Automatizaciones N8N' (Múltiples Sectores) — big metrics '+30 flujos activos' and '~500 h/mes eliminadas'. Each card is clickable, with a subtle hover tilt/lift and a 'Ver caso' affordance; keep narrative body text in neutral muted (#A9B6CC) and reserve emerald (#00E887) only for the big numbers. Above or below the grid add a thin aggregate trust strip ('proyectos entregados · horas/mes automatizadas · 4 sectores'). Bottom: centered '¿Tienes un proyecto en mente?' with a primary button 'Cuéntanos tu reto'. Surfaces #0F1525/#161E33, text #F4F6FF, primary #1E3BFF. Fonts Space Grotesk + Inter. Tone: credible, proof-heavy, 'real shipping engineering team', premium.

---

### 6. Testimonials — `src/components/Testimonials.astro`

**Copy a preservar:** Label `Clientes`. Título `Lo que dicen quienes ya lo vivieron.` Sub `No te lo contamos nosotros...`. T1 Juan Sebastián R. (Dir. Comercial, Clínica de Estética, Quito). T2 María Victoria M. (Gerente Admin., Laboratorio Cosmético, Cali). T3 Ricardo P. (Gerente de Producción, Laboratorio Industrial, Cali). CTA `¿Quieres resultados como estos en tu empresa?` + `Agenda tu diagnóstico gratis`.

**Objetivo:** prueba social premium — 1 testimonio destacado grande + 2 de apoyo; pull-quote del remate por card; ratings 5 estrellas; chip de ciudad prominente; badge de métrica que refleja el caso de Portfolio + link a ese caso; glifo de comilla de marca; header de prueba agregada.

**Prompt Stitch:**
> Design a premium testimonials / social-proof section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16). Centered header: uppercase pill 'CLIENTES', bold title 'Lo que dicen quienes ya lo vivieron.' (let it wrap naturally, balanced, no forced break), muted subtitle 'No te lo contamos nosotros. Te lo cuentan quienes ya dejaron de perder tiempo y dinero en procesos manuales.' Add a small aggregate proof row above the cards (5-star average + number of clients + sectors served). Layout: ONE large featured testimonial card plus two supporting cards. Each card: a single elegant brand quote glyph, 5 gold/emerald stars, a PULL-QUOTE punchline in larger Space Grotesk highlighting the win, then the full quote in muted body, an author row (gradient-initials avatar OR headshot placeholder + full name + role + a prominent city chip), and a small emerald metric badge mirroring the case with a 'Ver caso →' link. Featured card = T1: punchline 'Cerramos más citas con visibilidad total', full quote 'KANTECH transformó nuestra operación de agendamiento. Pasamos de gestionar todo en WhatsApp y hojas de Excel a tener un CRM completo adaptado exactamente a cómo trabajamos. El equipo de ventas ahora tiene visibilidad total y cerramos más citas.', author 'Juan Sebastián R. — Dir. Comercial, Clínica de Estética' city chip 'Quito', metric badge '~15 h/semana ahorradas'. Card 2 = T2: punchline 'Pagó su inversión en el primer mes', quote 'La automatización contable que implementaron nos ahorró horas de trabajo manual cada semana. El flujo de N8N conecta nuestros sistemas y genera los reportes automáticamente. Pagó su inversión en el primer mes.', author 'María Victoria M. — Gerente Admin., Laboratorio Cosmético' city 'Cali', metric '6h → 45min'. Card 3 = T3: punchline 'El resultado superó lo que esperábamos', quote 'Desarrollaron nuestro ERP de producción desde cero. No es una herramienta genérica — conoce exactamente nuestro proceso de manufactura, el manejo de inventario y la integración con facturación electrónica. El resultado superó lo que esperábamos.', author 'Ricardo P. — Gerente de Producción, Laboratorio Industrial' city 'Cali'. Use curly/angular quotes, not straight quotes. End with centered '¿Quieres resultados como estos en tu empresa?' and a primary button 'Agenda tu diagnóstico gratis'. Surfaces #0F1525/#161E33, text #F4F6FF, muted #A9B6CC, accent cyan #00D4FF, emerald #00E887 for metrics. Fonts Space Grotesk + Inter. Tone: trustworthy, localized for LatAm, premium, skimmable.

---

### 7. Process — `src/components/Process.astro`

**Copy a preservar:** Label `Nuestro Proceso`. Título `Cómo trabajamos.` (`trabajamos.` gradiente). Sub `Un proceso claro, transparente y orientado a resultados...`. Pasos 01 Diagnóstico / 02 Diseño de Solución / 03 Implementación / 04 Evolución Continua.

**Objetivo:** timeline real — conector horizontal que se rellena en scroll (desktop) y espina vertical (móvil); numerales gigantes fantasma 01–04; chip de tiempo/entregable por paso; check-badges de promesas concretas; progresión de acento blue→emerald; **agregar el CTA de cierre faltante** `Empieza por el Diagnóstico — gratis` → WhatsApp.

**Prompt Stitch:**
> Design a premium 4-step process / timeline section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16). Centered header: uppercase pill 'NUESTRO PROCESO', bold title 'Cómo trabajamos.' ('trabajamos.' in blue→cyan→violet gradient), muted subtitle 'Un proceso claro, transparente y orientado a resultados. Sin sorpresas, sin retrasos inexplicables.' Render a TRUE timeline: on desktop a horizontal connector line with a gradient that visually 'fills' from blue to emerald across the four steps (animated on scroll); on mobile a vertical spine. Each step is a node with an OVERSIZED ghosted numeral (faint '01'–'04') behind a gradient-bordered duotone icon tile, a title, a description, a small time/deliverable chip, and scannable check-badges. Step 01 'Diagnóstico' — 'Entendemos tu negocio en profundidad: procesos actuales, dolores, objetivos y restricciones. Sin asumir nada antes de escucharte.' chip 'Sesión 60 min · gratis', badge '✓ Sin compromiso'. Step 02 'Diseño de Solución' — 'Proponemos la arquitectura técnica óptima, el alcance del proyecto, los tiempos y el costo. Todo por escrito antes de empezar.' chip 'Propuesta escrita', badge '✓ Todo por escrito'. Step 03 'Implementación' — 'Desarrollamos en sprints cortos con entregables visibles. Iteras con nosotros en tiempo real. Sin cajas negras ni sorpresas al final.' chip 'Sprints 1-2 semanas', badge '✓ Sin cajas negras'. Step 04 'Evolución Continua' — 'Lanzamos, medimos, mejoramos. Tu sistema crece con tu negocio. Soporte, nuevas funcionalidades y optimización constante.' chip 'Soporte continuo', badge '✓ Largo plazo'. End the timeline with a closing CTA card: 'Empieza por el Diagnóstico — gratis' with a primary WhatsApp button. Accent progression blue #1E3BFF → cyan #00D4FF → violet #6C2FD9 → emerald #00E887. Surfaces #0F1525/#161E33, text #F4F6FF, muted #A9B6CC. Fonts Space Grotesk + Inter. Tone: transparent, reassuring, premium, momentum toward launch.

---

### 8. Engagement (Pricing) — `src/components/Engagement.astro`

**Copy a preservar:** Label `Modelos de trabajo`. Título `Elige cómo quieres trabajar con nosotros.` Sub `Tres formas de colaborar...`. Tier1 Proyecto Puntual (`Desde $500.000 COP`, anchor `$3-8M`, ROI 6x). Tier2 Equipo Dedicado (POPULAR, `Desde $2.000.000 COP/mes`, anchor `$6-10M/mes`). Tier3 Socio Tecnológico (`Desde $5.000.000 COP/mes`, anchor `$15-30M/mes`). Garantía + CTA `Conversemos sobre tu proyecto`.

**Objetivo:** arreglar jerarquía y conversión — precio real como elemento más grande; anchor demotado a chip `vs. alternativa` (honesto, no descuento falso); **CTA por tier** (la del tier recomendado dominante); garantía promovida a ribbon de confianza junto al header; matriz comparativa expandible; toggle COP/USD; tier "Popular" con glow/gradient-border premium.

**Prompt Stitch:**
> Design a premium 3-tier pricing / engagement-models section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16). Centered header: uppercase pill 'MODELOS DE TRABAJO', bold title 'Elige cómo quieres trabajar con nosotros.', muted subtitle 'Tres formas de colaborar, adaptadas a tu etapa y presupuesto.' Directly under the header, a prominent trust ribbon / badge row: 'Diagnóstico gratis · Propuesta escrita · Sin permanencia · Garantía primer sprint'. Add a small COP/USD currency toggle. Three pricing cards; the MIDDLE one is clearly recommended (premium gradient border glow, scaled up, a 'Popular' pill, and a rationale line 'Recomendado para la mayoría'). For each card emphasize the REAL price as the LARGEST element (big Space Grotesk), with the competitor anchor demoted to a small muted chip clearly labeled 'vs. alternativa' (not a misleading discount), an emerald ROI line, a checkmark feature list, an 'Ideal para' footer, optional micro social proof, and a PER-TIER CTA button. Tier 1 'Proyecto Puntual': big price 'Desde $500.000 COP', chip 'vs. Consultora típica: $3-8M COP', ROI 'ROI típico: 6x en el primer mes', desc 'Alcance definido, precio fijo, entrega en semanas. Ideal para automatizaciones, MVPs o herramientas específicas.', features 'Alcance y precio cerrado / Entrega en 2-8 semanas / Soporte post-entrega incluido', footer 'Ideal para: Automatizaciones, landing pages, integraciones API', CTA 'Empezar proyecto'. Tier 2 'Equipo Dedicado' (POPULAR, dominant CTA): big price 'Desde $2.000.000 COP/mes', chip 'vs. Dev senior en nómina: $6-10M COP/mes', ROI 'Ahorra $3-5M/mes vs. contratar un dev interno', desc 'Horas mensuales con iteración continua. Para proyectos que evolucionan y necesitan atención constante.', features 'Horas mensuales flexibles / Sprints semanales con demos / Comunicación directa por Slack/WA', footer 'Ideal para: CRM, ERP, plataformas web complejas', CTA 'Hablar con el equipo'. Tier 3 'Socio Tecnológico': big price 'Desde $5.000.000 COP/mes', chip 'vs. Depto. tech interno: $15-30M COP/mes', ROI 'Un CTO + equipo tech por una fracción del costo', desc 'Relación a largo plazo. Nos convertimos en tu departamento de tecnología con soporte, mejoras continuas y visión estratégica.', features 'Roadmap tecnológico trimestral / Soporte prioritario 24/7 / Optimización continua de procesos', footer 'Ideal para: Empresas en crecimiento sin equipo tech interno', CTA 'Agendar diagnóstico'. Below the cards, an expandable 'Comparar planes en detalle' comparison matrix and a prominent restated guarantee element 'Todos los planes incluyen diagnóstico gratis y propuesta escrita antes de pagar un peso. Sin contratos de permanencia. Si no ves resultados en el primer sprint, no sigues pagando.' plus a final primary button 'Conversemos sobre tu proyecto'. Surfaces #0F1525/#161E33, recommended card #1E2942, border #243049, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, emerald #00E887 for ROI/guarantee. Fonts Space Grotesk + Inter. Tone: confident, honest anchoring, clear price hierarchy, strong steer toward the recommended tier.

---

### 9. FAQ — `src/components/FAQ.astro`

**Copy a preservar:** Label `FAQ`. Título `¿Todo lo que necesitas saber antes de dar el primer paso` (`dar el primer paso` gradiente). 8 Q&A verbatim. Cierre `¿Tu pregunta no está aquí? Pregúntanos directamente — sin compromiso.` Botón `Resolver mi duda ahora`.

**Objetivo:** acordeón premium animado (grid-rows 0fr→1fr, single-open) reemplazando `<details>`; reordenar con la pregunta de precio primero; chips de categoría con filtro; ícono por pregunta; respuesta de reversión de riesgo tintada en esmeralda + badge `Sin permanencia`; emitir FAQPage JSON-LD; CTA de cierre con 2 opciones + chip `respuesta en <1h`.

**Prompt Stitch:**
> Design a premium FAQ / objection-handling section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16), narrow centered column. Header: uppercase pill 'FAQ', bold title '¿Todo lo que necesitas saber antes de dar el primer paso' with 'dar el primer paso' in a blue→cyan→violet gradient. A row of category filter chips: 'Todas · Precio · Tiempos · Proceso · Cobertura · Garantía · Integraciones'. Below, a vertical stack of premium accordion items (animated open/close, single-open), each row: a leading category icon, the question in clear medium-large weight, and a rotating chevron; the open answer is slightly smaller muted body text with a divider. Order with the pricing question first. Items: '¿Cuánto cuesta un proyecto con KANTECH?' / 'Cada proyecto es diferente. Tenemos servicios desde $500.000 COP para automatizaciones puntuales, hasta sistemas completos a medida (CRM, ERP). Siempre entregamos una propuesta clara con alcance y precio antes de empezar.'; '¿Qué pasa si no funciona o no me gusta el resultado?' (HIGHLIGHT this answer with a subtle emerald tint and a 'Sin permanencia' badge) / 'Trabajamos en sprints cortos con demos semanales. Ves avances reales desde la primera semana y puedes pedir cambios en cualquier momento. Si después del primer sprint no estás convencido, no sigues pagando. Sin letra pequeña, sin contratos de permanencia.'; '¿Cuánto tiempo tarda un proyecto?' / 'Las automatizaciones pueden estar listas en 1-2 semanas. Un sistema completo (CRM, ERP) puede tomar entre 4 y 12 semanas según el alcance. Entregamos en sprints visibles.'; '¿Por qué es tan económico comparado con otras empresas de tecnología?' / 'Somos un equipo lean basado en Cali, Colombia. No tenemos oficinas costosas ni burocracia corporativa. Eso nos permite ofrecer la misma calidad técnica que una consultora grande a una fracción del costo. Nuestro modelo funciona porque somos eficientes, no baratos.'; '¿Necesito saber de tecnología para trabajar con ustedes?' / 'No. Nos encargamos de toda la parte técnica. Tú nos explicas el problema de negocio y nosotros lo traducimos en tecnología. Solo necesitas saber qué quieres lograr.'; '¿Qué pasa después de que entregan el proyecto?' / 'Ofrecemos soporte continuo, mantenimiento y evolución del sistema. No desaparecemos después del lanzamiento — somos tu socio tecnológico a largo plazo.'; '¿Trabajan solo con empresas en Colombia?' / 'No. Trabajamos con empresas en Colombia, Ecuador, Perú, México y cualquier país de LatAm. Todos los proyectos pueden gestionarse de forma 100% remota.'; '¿Pueden integrar sistemas que ya tenemos (Siigo, Odoo, WhatsApp)?' / 'Sí. La integración entre sistemas es uno de nuestros puntos fuertes. Conectamos Siigo, Odoo, WhatsApp Business, Google Workspace y prácticamente cualquier plataforma con API.' End with a closing block: '¿Tu pregunta no está aquí? Pregúntanos directamente — sin compromiso.' with two CTAs — primary 'Resolver mi duda ahora' (WhatsApp) and a quiet secondary 'Agendar diagnóstico' — plus a small emerald chip 'Respuesta en < 1h'. Surfaces #0F1525/#161E33, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, emerald #00E887. Fonts Space Grotesk + Inter. Tone: reassuring, scannable, premium.

---

### 10. FinalCTA — `src/components/FinalCTA.astro`

**Copy a preservar:** Badge urgencia (HACER DINÁMICO — reemplazar `Abril 2026: 2 cupos`). Titular `Tu competencia ya se está automatizando.` (`automatizando.` gradiente). Subhead `Cada semana sin automatizar...`. CTA primaria `Agendar diagnóstico gratis`. Secundaria `Ver resultados reales`.

**Objetivo:** escasez dinámica y consistente (mes/año actual; reconciliar las dos afirmaciones en `Solo 3 proyectos nuevos al mes` con visualizador de cupos); fondo animado hero-grade (aurora/mesh/grano); subhead denso → línea punchy + chips escaneables; jerarquía clara de CTA; contador de prueba social; titular fluido sin `<br/>`.

**Prompt Stitch:**
> Design a high-impact final call-to-action section for a dark B2B software studio 'KANTECH' (Spanish). Full-width band on near-black navy (#080B16) with a LIVE animated aurora/mesh gradient (electric blue #1E3BFF, violet #6C2FD9, cyan #00D4FF), a soft radial glow, and faint grain — a premium hero-grade moment. Centered max-width column. An emerald urgency pill with a pulsing dot 'Solo 3 cupos este mes para proyectos nuevos' accompanied by a small slot visualizer (3 dots, 1 filled) — make it feel dynamic/evergreen, not a fixed date. A large fluid Space Grotesk headline 'Tu competencia ya se está automatizando.' with 'automatizando.' in a blue→cyan→violet gradient (natural balanced wrap, no forced break). A short punchy lead 'Cada semana sin automatizar, tu equipo pierde +20 horas en tareas repetitivas.' followed by a row of scannable proof chips 'Diagnóstico gratis · Propuesta en menos de 24 horas · Sin compromiso'. CTA row with clear hierarchy: a DOMINANT glowing primary 'Agendar diagnóstico gratis' (electric blue, WhatsApp glyph, subtle animated glow/shimmer-on-hover) and a quiet ghost secondary 'Ver resultados reales'; small trust microcopy under the buttons. Add a thin animated social-proof counter strip ('+X proyectos entregados'). Text #F4F6FF, muted #A9B6CC, emerald #00E887 for urgency. Fonts Space Grotesk + Inter. Tone: urgent but premium and honest, loss-aversion + FOMO without looking cheap.

---

### 11. Contact — `src/components/Contact.astro`

**Copy a preservar:** Label `Contacto`. Título `¿Listo para transformar tu empresa?` Subhead `Cuéntanos tu reto...`. Canales WhatsApp `+57 319 443 6045`, Email (subir a dominio propio), LinkedIn. Badge `Disponible para nuevos proyectos · Colombia · LatAm`. Form `Cuéntanos tu proyecto` con campos Nombre/Empresa/Servicio de interés (select)/¿Cuál es tu reto? Submit (era `Enviar por WhatsApp`).

**Objetivo:** que el formulario CAPTURE leads de verdad — backend/serverless que envíe email al estudio, WhatsApp como handoff SECUNDARIO; validación inline; estado de éxito; checkbox de consentimiento + honeypot; arreglar el `<select>` bilingüe; floating labels; focus-visible glow ring; click-to-copy con toast; opción de calendario/booking.

**Prompt Stitch:**
> Design a premium contact / lead-capture section for a dark B2B software studio 'KANTECH' (Spanish). Dark navy canvas (#080B16). Centered header: uppercase pill 'CONTACTO', bold title '¿Listo para transformar tu empresa?', muted subtitle 'Cuéntanos tu reto. En menos de 24 horas te respondemos con una propuesta inicial.' Two-column layout. LEFT rail: three elegant channel cards with icon tiles and click-to-copy affordance — WhatsApp '+57 319 443 6045', Email (use a brand-domain style like 'hola@kantech.co' as the premium target, keep 'diegoalpala422@gmail.com' as fallback), LinkedIn 'Diego Alpala — KANTECH'; plus an emerald availability pill with a pulsing dot 'Disponible para nuevos proyectos · Colombia · LatAm'; optionally a small embedded calendar/booking widget labeled 'Agenda tu diagnóstico'. RIGHT: a glass card form titled 'Cuéntanos tu proyecto' with premium floating-label fields: 'Nombre' (placeholder 'Tu nombre', required), 'Empresa' (placeholder 'Tu empresa', optional) in a 2-col row; a full-width custom-styled select with chevron 'Servicio de interés' with options 'Selecciona un servicio...', 'Agentes de IA', 'Automatizaciones N8N', 'Mejoras de Proceso', 'Desarrollo a Medida', 'Otro / No sé aún'; a full-width textarea '¿Cuál es tu reto?' (placeholder 'Describe brevemente el problema que quieres resolver...', required); a consent checkbox with a privacy-policy link; a full-width DOMINANT submit button 'Enviar' (and show that on success it can also hand off to WhatsApp). Include inline validation states, a success confirmation card 'Gracias — te responderemos en menos de 24h', and a trust row under the button 'Respuesta en 24h · Sin compromiso'. Inputs: dark fields (#0F1525) with focus-visible electric-blue glow ring. Surfaces #161E33, border #243049, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, emerald #00E887 for availability/success. Fonts Space Grotesk + Inter. Tone: premium, low-friction, trustworthy, conversion-optimized.

---

### 12. Footer — `src/components/Footer.astro`

**Copy a preservar:** Wordmark `KANTECH` + tagline. `Navegación` (Servicios/Portafolio/Proceso/Nosotros/Contacto). `Contacto directo` (tel/email/`Cali, Colombia · Disponible LatAm`). Bottom `© {year} KANTECH...` + `Hecho con precisión en Colombia 🇨🇴`. Socials LinkedIn/GitHub/WhatsApp.

**Objetivo:** convertir el footer en cierre de conversión + confianza — banda final de CTA/captura; links legales reales (Privacidad/Términos) + `Volver arriba` + toggle de idioma; ubicación como link a Google Maps; emitir Organization + LocalBusiness JSON-LD; subir identidad (email de dominio, redes de empresa); hairline superior de gradiente; glifos sociales más grandes; chip `Responde en <1h`.

**Prompt Stitch:**
> Design a premium site footer for a dark B2B software studio 'KANTECH' (Spanish). Dark navy (#080B16) with a thin top gradient hairline (blue→cyan→violet) and a faint background glow. Top of footer: a compact final conversion band — a short line 'Empieza por tu diagnóstico gratis' with a primary button 'Agenda tu diagnóstico' and a small emerald 'Responde en < 1h' chip. Below, a 4-column layout: (1) Brand column — gradient rounded logo mark + wordmark 'KANTECH' in Space Grotesk, tagline 'Agentes de IA, automatizaciones y desarrollo a medida para empresas en crecimiento.', and a row of larger social icon buttons (LinkedIn, GitHub, WhatsApp) with hover fill + lift. (2) 'Navegación' — links 'Servicios', 'Portafolio', 'Proceso', 'Nosotros', 'Contacto'. (3) 'Contacto directo' — '+57 319 443 6045', email (brand-domain target like 'hola@kantech.co' with personal fallback), and 'Cali, Colombia · Disponible LatAm' as a Google Maps link with a pin icon. (4) 'Legal' — 'Política de privacidad', 'Términos', plus a language toggle (ES/EN) and a 'Volver arriba' control. Bottom bar: a single tasteful signature line '© {year} KANTECH. Todos los derechos reservados. · Hecho con precisión en Colombia 🇨🇴'. Surfaces #0F1525, border #243049, text #F4F6FF, muted #A9B6CC, primary #1E3BFF, emerald #00E887 for accents. Fonts Space Grotesk + Inter. Tone: premium, trustworthy, not a dead end — a final low-friction path to convert.

---

### 13. WhatsAppFloat — `src/components/WhatsAppFloat.astro`

**Copy a preservar:** Header `KANTECH` / status `Responde en menos de 1 hora`. Saludo `Hola! ¿Qué te gustaría resolver hoy?`. Quick actions `Quiero un diagnóstico gratis`, `Necesito una cotización`, `Tengo una pregunta`. Footer `Lun-Vie 8am-7pm COT`. Mensajes pre-llenados (diagnóstico/cotización/duda). Número 573194436045.

**Objetivo:** panel animado (scale/opacity/translateY); reemplazar el badge falso "1" por peek bubble honesto y descartable (`Hola 👋 ¿te ayudo?`); estado real abierto/cerrado según horario COT (`En línea` vs `Fuera de horario`); metáfora WhatsApp (chat claro + typing-indicator + avatar); a11y completa (role=dialog, focus trap, ESC); ring de respiración en el FAB; fallback `<a>` real.

**Prompt Stitch:**
> Design a premium floating WhatsApp chat widget for a dark B2B software studio 'KANTECH' (Spanish), overlaying a dark site. A round 56px floating action button in WhatsApp green at bottom-right with a subtle idle 'breathing' glow ring and the WhatsApp glyph. Instead of a fake unread badge, show a small dismissible peek bubble that slides out after a delay: 'Hola 👋 ¿te ayudo?'. When opened, an animated chat panel (scale + fade + slide up from bottom-right) styled like a familiar WhatsApp chat: a green header with a circular agent avatar 'K', name 'KANTECH', and a LIVE status — 'En línea' with a green dot during business hours, or 'Fuera de horario · respondemos pronto' otherwise (truthful, derived from 'Lun-Vie 8am-7pm COT'); a light chat body with a brief typing-indicator animation before a greeting bubble 'Hola! ¿Qué te gustaría resolver hoy?'; then three large tappable quick-reply chips 'Quiero un diagnóstico gratis', 'Necesito una cotización', 'Tengo una pregunta'; and a small footer 'Lun-Vie 8am-7pm COT'. Make the panel feel native and premium with proper depth shadow and rounded corners. Use WhatsApp green for the chat metaphor while keeping the surrounding site dark. Text legible, accessible focus states on all chips. Tone: friendly, human, trustworthy, polished — honest engagement cue, no dark patterns.

---

## Siguiente paso

1. **Reiniciar Claude Code** para activar el MCP de Stitch (`mcp__stitch__*`).
2. Generar los 14 diseños de corrido con Stitch usando estos prompts.
3. Presentar el conjunto y luego implementar en Astro/Tailwind preservando el copy en español.
