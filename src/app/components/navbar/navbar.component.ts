import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <nav class="navbar" [class.scrolled]="isScrolled()">
      <div class="nav-container">
        <a href="#home" class="nav-logo">
          <span class="logo-bracket">&lt;</span>
          <span class="logo-text">ZS</span>
          <span class="logo-bracket">/&gt;</span>
        </a>

        <div class="nav-links" [class.active]="menuOpen()">
          @for (item of navItems; track item.id) {
            <a
              [href]="'#' + item.id"
              class="nav-link"
              [class.active]="activeSection() === item.id"
              (click)="scrollTo(item.id); menuOpen.set(false)">
              <span class="nav-link-icon" [innerHTML]="item.icon | safeHtml"></span>
              {{ item.label }}
            </a>
          }
        </div>

        <button class="nav-toggle" (click)="menuOpen.set(!menuOpen())" [class.active]="menuOpen()">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: 20px 0;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &.scrolled {
        padding: 10px 0;
        background: rgba(10, 10, 26, 0.9);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid var(--border);
      }
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .nav-logo {
      font-family: 'JetBrains Mono', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 2px;

      .logo-bracket {
        color: var(--primary);
      }

      .logo-text {
        color: var(--text-primary);
        background: var(--gradient-1);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 8px;

      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: -100%;
        width: 280px;
        height: 100vh;
        background: rgba(10, 10, 26, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 80px 32px;
        gap: 8px;
        transition: right 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border-left: 1px solid var(--border);

        &.active {
          right: 0;
        }
      }
    }

    .nav-link {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 8px 16px;
      border-radius: 8px;
      color: var(--text-secondary);
      font-size: 0.9rem;
      font-weight: 500;
      text-decoration: none;
      transition: all 0.3s ease;

      .nav-link-icon {
        display: flex;
        align-items: center;
        width: 16px;
        height: 16px;
      }

      &:hover, &.active {
        color: var(--primary-light);
        background: rgba(108, 99, 255, 0.1);
      }

      &.active {
        color: var(--primary);
      }

      @media (max-width: 768px) {
        width: 100%;
        padding: 14px 20px;
        font-size: 1rem;
      }
    }

    .nav-toggle {
      display: none;
      flex-direction: column;
      gap: 5px;
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      z-index: 1001;

      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--text-primary);
        border-radius: 2px;
        transition: all 0.3s ease;
      }

      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translateY(7px);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: rotate(-45deg) translateY(-7px);
        }
      }

      @media (max-width: 768px) {
        display: flex;
      }
    }
  `]
})
export class NavbarComponent {
  isScrolled = signal(false);
  menuOpen = signal(false);
  activeSection = signal('home');

  navItems = [
    { id: 'home', label: 'Home', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' },
    { id: 'about', label: 'About', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>' },
    { id: 'skills', label: 'Skills', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>' },
    { id: 'experience', label: 'Experience', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>' },
    { id: 'projects', label: 'Projects', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>' },
    { id: 'contact', label: 'Contact', icon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>' },
  ];

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);

    const sections = this.navItems.map(item => item.id);
    for (const section of sections.reverse()) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          this.activeSection.set(section);
          break;
        }
      }
    }
  }

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
