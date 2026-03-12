import { Component, signal, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <section class="section about" id="about">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot"></span>
            About Me
          </div>
          <h2 class="section-title">Know Me Better</h2>
          <p class="section-subtitle">A quick overview of who I am and what drives me</p>
        </div>

        <div class="about-grid">
          <div class="about-card glass-card main-card">
            <div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
            <h3>Who Am I?</h3>
            <p>
              I'm <strong>Zaid Shaikh</strong>, a Data Science and Full-Stack Developer based in
              <span class="highlight">Mumbai, India</span>. Currently pursuing my B.Sc. in Data Science
              and Artificial Intelligence at Ramniranjan Jhunjhunwala College, I bridge the gap between
              data intelligence and full-stack development.
            </p>
          </div>

          <div class="about-card glass-card">
            <div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg></div>
            <h3>My Approach</h3>
            <p>
              I believe in building end-to-end solutions — from data analysis and machine learning models
              to scalable cloud deployments. I thrive in agile environments and love turning complex
              problems into elegant, user-friendly applications.
            </p>
          </div>

          <div class="about-card glass-card">
            <div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
            <h3>What I Do</h3>
            <p>
              From crafting .NET Web APIs & Angular dashboards to building ML pipelines with Python,
              I deliver complete solutions. My work includes QR-based enterprise systems, customer
              churn prediction, and cloud-deployed applications on Azure.
            </p>
          </div>

          <div class="about-card glass-card">
            <div class="card-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg></div>
            <h3>My Vision</h3>
            <p>
              I'm passionate about leveraging technology to solve real-world problems. Whether it's
              optimizing business processes with data science or building scalable web applications,
              I'm always eager to learn and grow.
            </p>
          </div>
        </div>

        <div class="about-highlights">
          @for (item of highlights; track item.label) {
            <div class="highlight-item glass-card">
              <div class="highlight-icon" [style.background]="item.gradient" [innerHTML]="item.icon | safeHtml"></div>
              <div class="highlight-info">
                <span class="highlight-value">{{ item.value }}</span>
                <span class="highlight-label">{{ item.label }}</span>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about {
      background: var(--bg-surface);
      position: relative;

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 200px;
        height: 2px;
        background: var(--gradient-1);
        border-radius: 2px;
      }
    }

    .about-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-bottom: 48px;
    }

    .about-card {
      padding: 32px;

      .card-icon {
        margin-bottom: 16px;
        display: flex;
        align-items: center;
      }

      h3 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 12px;
        color: var(--text-primary);
      }

      p {
        color: var(--text-secondary);
        font-size: 0.95rem;
        line-height: 1.8;
      }

      .highlight {
        color: var(--accent);
        font-weight: 600;
      }

      strong {
        color: var(--primary-light);
      }

      &.main-card {
        grid-column: 1 / -1;

        @media (min-width: 769px) {
          grid-column: 1 / 2;
          grid-row: 1 / 3;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }

    .about-highlights {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
    }

    .highlight-item {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 24px;

      .highlight-icon {
        width: 52px;
        height: 52px;
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }

      .highlight-info {
        display: flex;
        flex-direction: column;
      }

      .highlight-value {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--text-primary);
      }

      .highlight-label {
        font-size: 0.8rem;
        color: var(--text-muted);
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    }

    @media (max-width: 768px) {
      .about-grid {
        grid-template-columns: 1fr;
      }

      .about-highlights {
        grid-template-columns: 1fr 1fr;
      }
    }

    @media (max-width: 480px) {
      .about-highlights {
        grid-template-columns: 1fr;
      }

      .about-card {
        padding: 24px;

        h3 {
          font-size: 1.05rem;
        }

        p {
          font-size: 0.85rem;
        }
      }

      .highlight-item {
        padding: 20px;
      }
    }
  `]
})
export class AboutComponent {
  highlights = [
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b83ff" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg>', value: 'B.Sc DS & AI', label: 'Education', gradient: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(0,212,255,0.2))' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>', value: 'Intern', label: 'Experience', gradient: 'linear-gradient(135deg, rgba(0,255,136,0.2), rgba(0,212,255,0.2))' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" stroke-width="2"><path d="M2 20h20"/><path d="M5 20V10l7-6 7 6v10"/><path d="M9 20v-6h6v6"/></svg>', value: '3+ Projects', label: 'Built', gradient: 'linear-gradient(135deg, rgba(255,107,157,0.2), rgba(255,159,67,0.2))' },
    { icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff9f43" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>', value: 'Mumbai', label: 'Location', gradient: 'linear-gradient(135deg, rgba(255,159,67,0.2), rgba(108,99,255,0.2))' },
  ];
}
