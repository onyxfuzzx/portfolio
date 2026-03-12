import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero" id="home">
      <div class="particles">
        @for (p of particles; track p.id) {
          <div class="particle"
            [style.left.%]="p.x"
            [style.top.%]="p.y"
            [style.width.px]="p.size"
            [style.height.px]="p.size"
            [style.animationDuration.s]="p.duration"
            [style.animationDelay.s]="p.delay"
            [style.opacity]="p.opacity">
          </div>
        }
      </div>

      <div class="hero-grid-bg"></div>

      <div class="hero-glow hero-glow-1"></div>
      <div class="hero-glow hero-glow-2"></div>
      <div class="hero-glow hero-glow-3"></div>

      <div class="container hero-content">
        <div class="hero-left">
          <div class="hero-badge">
            <span class="badge-status"></span>
            Available for opportunities
          </div>

          <h1 class="hero-title">
            Hi, I'm
            <span class="hero-name">Zaid Shaikh</span>
          </h1>

          <div class="hero-role">
            <span class="role-prefix">I build</span>
            <span class="typed-text">{{ displayText() }}</span>
            <span class="cursor" [class.blink]="!isTyping()">|</span>
          </div>

          <p class="hero-description">
            Data Science and Full-Stack Developer with hands-on experience in
            developing real-world applications across machine learning,
            cloud deployment, and modern web stacks.
          </p>

          <div class="hero-stats">
            <div class="stat">
              <span class="stat-value">3+</span>
              <span class="stat-label">Projects</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">6+</span>
              <span class="stat-label">Technologies</span>
            </div>
            <div class="stat-divider"></div>
            <div class="stat">
              <span class="stat-value">B.Sc</span>
              <span class="stat-label">DS & AI</span>
            </div>
          </div>

          <div class="hero-actions">
            <a href="#projects" class="btn-primary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              View Projects
            </a>
            <a href="#contact" class="btn-outline">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Get In Touch
            </a>
          </div>

          <div class="hero-socials">
            <a href="https://github.com/onyxfuzzx" target="_blank" class="social-link" aria-label="GitHub">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://linkedin.com/in/zaiddddd" target="_blank" class="social-link" aria-label="LinkedIn">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:zaid83560@gmail.com" class="social-link" aria-label="Email">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
            <a href="https://instagram.com/zz.normie" target="_blank" class="social-link" aria-label="Instagram">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
        </div>

        <div class="hero-right">
          <div class="hero-visual">
            <div class="code-window">
              <div class="window-header">
                <div class="window-dots">
                  <span class="dot red"></span>
                  <span class="dot yellow"></span>
                  <span class="dot green"></span>
                </div>
                <span class="window-title">zaid.ts</span>
              </div>
              <div class="code-content">
                <div class="code-line">
                  <span class="line-number">1</span>
                  <span class="keyword">const</span> <span class="variable">developer</span> <span class="operator">=</span> <span class="bracket">&#123;</span>
                </div>
                <div class="code-line">
                  <span class="line-number">2</span>
                  <span class="indent"></span><span class="property">name</span><span class="operator">:</span> <span class="string">"Zaid Shaikh"</span><span class="operator">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">3</span>
                  <span class="indent"></span><span class="property">role</span><span class="operator">:</span> <span class="string">"Full-Stack Dev"</span><span class="operator">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">4</span>
                  <span class="indent"></span><span class="property">skills</span><span class="operator">:</span> <span class="bracket">[</span>
                </div>
                <div class="code-line">
                  <span class="line-number">5</span>
                  <span class="indent2"></span><span class="string">"Angular"</span><span class="operator">,</span> <span class="string">"Python"</span><span class="operator">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">6</span>
                  <span class="indent2"></span><span class="string">".NET"</span><span class="operator">,</span> <span class="string">"Azure"</span><span class="operator">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">7</span>
                  <span class="indent2"></span><span class="string">"AWS"</span>
                </div>
                <div class="code-line">
                  <span class="line-number">8</span>
                  <span class="indent"></span><span class="bracket">]</span><span class="operator">,</span>
                </div>
                <div class="code-line">
                  <span class="line-number">9</span>
                  <span class="indent"></span><span class="property">passion</span><span class="operator">:</span> <span class="string">"Building cool stuff"</span>
                </div>
                <div class="code-line">
                  <span class="line-number">10</span>
                  <span class="bracket">&#125;</span><span class="operator">;</span>
                </div>
              </div>
            </div>

            <div class="floating-badge badge-1">
              <span class="badge-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span> Angular
            </div>
            <div class="floating-badge badge-2">
              <span class="badge-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d4ff" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg></span> Python
            </div>
            <div class="floating-badge badge-3">
              <span class="badge-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></span> Azure
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" (click)="scrollTo('about')">
        <div class="mouse">
          <div class="mouse-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      padding-top: 80px;
    }

    .particles {
      position: absolute;
      inset: 0;
      z-index: 0;
    }

    .particle {
      position: absolute;
      background: var(--primary);
      border-radius: 50%;
      animation: float-particle linear infinite;
    }

    @keyframes float-particle {
      0% { transform: translateY(0) rotate(0deg); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100vh) rotate(720deg); opacity: 0; }
    }

    .hero-grid-bg {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(108, 99, 255, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(108, 99, 255, 0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      z-index: 0;
    }

    .hero-glow {
      position: absolute;
      border-radius: 50%;
      filter: blur(120px);
      z-index: 0;

      &.hero-glow-1 {
        width: 500px;
        height: 500px;
        background: rgba(108, 99, 255, 0.15);
        top: -100px;
        right: -100px;
      }

      &.hero-glow-2 {
        width: 400px;
        height: 400px;
        background: rgba(0, 212, 255, 0.1);
        bottom: -50px;
        left: -100px;
      }

      &.hero-glow-3 {
        width: 300px;
        height: 300px;
        background: rgba(0, 255, 136, 0.08);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: center;
      position: relative;
      z-index: 1;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 20px;
      border-radius: 50px;
      background: rgba(0, 255, 136, 0.08);
      border: 1px solid rgba(0, 255, 136, 0.2);
      color: var(--accent-green);
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 24px;
      animation: fadeInUp 0.8s ease forwards;

      .badge-status {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: var(--accent-green);
        animation: pulse-dot 2s ease-in-out infinite;
      }
    }

    .hero-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: clamp(2.5rem, 5vw, 4rem);
      font-weight: 800;
      line-height: 1.1;
      margin-bottom: 16px;
      color: var(--text-primary);
      animation: fadeInUp 0.8s ease 0.1s both;
    }

    .hero-name {
      display: block;
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      background-size: 200% 200%;
      animation: gradient-shift 4s ease infinite;
    }

    .hero-role {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 1.3rem;
      margin-bottom: 20px;
      animation: fadeInUp 0.8s ease 0.2s both;

      .role-prefix {
        color: var(--text-secondary);
        font-weight: 400;
      }

      .typed-text {
        color: var(--accent);
        font-weight: 600;
        font-family: 'JetBrains Mono', monospace;
      }

      .cursor {
        color: var(--primary);
        font-weight: 300;
        animation: none;

        &.blink {
          animation: blink 0.8s step-end infinite;
        }
      }
    }

    @keyframes blink {
      50% { opacity: 0; }
    }

    .hero-description {
      color: var(--text-secondary);
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 32px;
      max-width: 520px;
      animation: fadeInUp 0.8s ease 0.3s both;
    }

    .hero-stats {
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 32px;
      animation: fadeInUp 0.8s ease 0.4s both;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;

      .stat-value {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.5rem;
        font-weight: 700;
        background: var(--gradient-1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .stat-label {
        color: var(--text-muted);
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    .stat-divider {
      width: 1px;
      height: 40px;
      background: var(--border);
    }

    .hero-actions {
      display: flex;
      gap: 16px;
      margin-bottom: 32px;
      animation: fadeInUp 0.8s ease 0.5s both;
      flex-wrap: wrap;
    }

    .hero-socials {
      display: flex;
      gap: 12px;
      animation: fadeInUp 0.8s ease 0.6s both;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      border-radius: 12px;
      border: 1px solid var(--border);
      color: var(--text-secondary);
      background: rgba(17, 17, 40, 0.5);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary);
        color: var(--primary);
        transform: translateY(-4px);
        box-shadow: 0 8px 25px rgba(108, 99, 255, 0.2);
      }
    }

    .hero-right {
      display: flex;
      justify-content: center;
      animation: fadeInRight 1s ease 0.4s both;
    }

    .hero-visual {
      position: relative;
      width: 100%;
      max-width: 480px;
    }

    .code-window {
      background: rgba(13, 13, 36, 0.95);
      border: 1px solid var(--border);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--shadow-lg), 0 0 60px rgba(108, 99, 255, 0.1);
      animation: glow-pulse 4s ease-in-out infinite;
    }

    .window-header {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 18px;
      background: rgba(17, 17, 40, 0.8);
      border-bottom: 1px solid var(--border);
    }

    .window-dots {
      display: flex;
      gap: 6px;

      .dot {
        width: 12px;
        height: 12px;
        border-radius: 50%;

        &.red { background: #ff5f57; }
        &.yellow { background: #febc2e; }
        &.green { background: #28c840; }
      }
    }

    .window-title {
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .code-content {
      padding: 20px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 0.85rem;
      line-height: 2;
    }

    .code-line {
      display: flex;
      align-items: center;
      gap: 16px;

      .line-number {
        color: var(--text-muted);
        min-width: 20px;
        text-align: right;
        font-size: 0.75rem;
        user-select: none;
      }

      .keyword { color: #c678dd; }
      .variable { color: #e06c75; }
      .operator { color: var(--text-muted); }
      .bracket { color: #e5c07b; }
      .property { color: #e06c75; }
      .string { color: #98c379; }
      .indent { padding-left: 24px; }
      .indent2 { padding-left: 48px; }
    }

    .floating-badge {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 10px 18px;
      border-radius: 12px;
      background: rgba(17, 17, 40, 0.9);
      border: 1px solid var(--border);
      backdrop-filter: blur(10px);
      font-size: 0.85rem;
      font-weight: 600;
      color: var(--text-primary);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

      .badge-icon {
        display: flex;
        align-items: center;
      }

      &.badge-1 {
        top: -10px;
        right: -10px;
        animation: float 6s ease-in-out infinite;
      }

      &.badge-2 {
        bottom: 80px;
        left: -30px;
        animation: float 6s ease-in-out 1s infinite;
      }

      &.badge-3 {
        bottom: -10px;
        right: 40px;
        animation: float 6s ease-in-out 2s infinite;
      }
    }

    .scroll-indicator {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      animation: fadeInUp 1s ease 1s both;
      z-index: 1;

      span {
        font-size: 0.75rem;
        color: var(--text-muted);
        letter-spacing: 2px;
        text-transform: uppercase;
      }
    }

    .mouse {
      width: 24px;
      height: 38px;
      border: 2px solid var(--text-muted);
      border-radius: 12px;
      display: flex;
      justify-content: center;
      padding-top: 8px;
    }

    .mouse-wheel {
      width: 3px;
      height: 8px;
      border-radius: 3px;
      background: var(--primary);
      animation: scroll-wheel 2s ease-in-out infinite;
    }

    @keyframes scroll-wheel {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(10px); opacity: 0; }
    }

    @media (max-width: 968px) {
      .hero-content {
        grid-template-columns: 1fr;
        text-align: center;
        gap: 40px;
      }

      .hero-description {
        margin: 0 auto 32px;
      }

      .hero-stats {
        justify-content: center;
      }

      .hero-actions {
        justify-content: center;
      }

      .hero-socials {
        justify-content: center;
      }

      .hero-role {
        justify-content: center;
      }

      .hero-badge {
        margin: 0 auto 24px;
      }

      .hero-right {
        order: -1;
      }

      .hero-visual {
        max-width: 380px;
      }

      .floating-badge.badge-2 {
        left: 0;
      }
    }

    @media (max-width: 480px) {
      .hero {
        padding-top: 80px;
      }

      .hero-title {
        font-size: 1.75rem;
        line-height: 1.2;
      }

      .hero-name {
        font-size: 2rem;
      }

      .hero-role {
        font-size: 0.9rem;
        flex-wrap: wrap;
        gap: 6px;
      }

      .hero-description {
        font-size: 0.9rem;
        max-width: 100%;
      }

      .hero-visual {
        max-width: 100%;
      }

      .code-window {
        .code-content {
          font-size: 0.7rem;
          padding: 16px;
        }
      }

      .floating-badge {
        display: none;
      }

      .hero-stats {
        gap: 16px;

        .stat-number {
          font-size: 1.5rem;
        }

        .stat-label {
          font-size: 0.7rem;
        }
      }

      .hero-actions {
        flex-direction: column;
        align-items: stretch;
        gap: 12px;

        .btn-primary, .btn-outline {
          justify-content: center;
          width: 100%;
        }
      }

      .hero-socials {
        gap: 12px;

        .social-link {
          width: 40px;
          height: 40px;
        }
      }

      .scroll-indicator {
        display: none;
      }

      .hero-glow {
        &.glow-1 { width: 250px; height: 250px; }
        &.glow-2 { width: 200px; height: 200px; }
        &.glow-3 { width: 150px; height: 150px; }
      }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  displayText = signal('');
  isTyping = signal(true);

  particles: { id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }[] = [];

  private texts = [
    'Full-Stack Applications',
    'Machine Learning Pipelines',
    'Cloud-Native Solutions',
    'Data-Driven Products',
    'Scalable REST APIs',
  ];
  private textIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private typingTimeout: any;

  ngOnInit() {
    this.generateParticles();
    this.typeEffect();
  }

  ngOnDestroy() {
    clearTimeout(this.typingTimeout);
  }

  generateParticles() {
    this.particles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100 + 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.5 + 0.1,
    }));
  }

  typeEffect() {
    const currentText = this.texts[this.textIndex];
    const speed = this.isDeleting ? 30 : 80;

    if (!this.isDeleting) {
      this.isTyping.set(true);
      this.displayText.set(currentText.substring(0, this.charIndex + 1));
      this.charIndex++;

      if (this.charIndex === currentText.length) {
        this.isTyping.set(false);
        this.typingTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.typeEffect();
        }, 2000);
        return;
      }
    } else {
      this.isTyping.set(true);
      this.displayText.set(currentText.substring(0, this.charIndex - 1));
      this.charIndex--;

      if (this.charIndex === 0) {
        this.isDeleting = false;
        this.textIndex = (this.textIndex + 1) % this.texts.length;
      }
    }

    this.typingTimeout = setTimeout(() => this.typeEffect(), speed);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
