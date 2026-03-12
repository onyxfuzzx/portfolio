import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section experience" id="experience">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot"></span>
            Experience
          </div>
          <h2 class="section-title">My Journey</h2>
          <p class="section-subtitle">Work experience and education that shaped my career</p>
        </div>

        <div class="timeline">
          <!-- Work Experience -->
          <div class="timeline-section">
            <div class="timeline-section-header">
              <span class="section-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg></span>
              <h3>Work Experience</h3>
            </div>

            <div class="timeline-items-wrapper">
            <div class="timeline-item">
              <div class="timeline-dot-wrapper">
                <div class="timeline-dot active"></div>
              </div>
              <div class="timeline-content glass-card">
                <div class="timeline-header">
                  <div class="timeline-company">
                    <div class="company-logo">
                      <span>P</span>
                    </div>
                    <div>
                      <h4 class="company-name">Prism Cybersoft Pvt. Ltd</h4>
                      <span class="company-type">Technology Company • IT Services</span>
                    </div>
                  </div>
                  <div class="timeline-meta">
                    <span class="timeline-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Nov 2025 — Feb 2026
                    </span>
                    <span class="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Mumbai, India
                    </span>
                  </div>
                </div>
                <h3 class="role-title">Software Developer Intern</h3>
                <ul class="timeline-points">
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Developed full-stack applications using <strong>.NET Web API</strong> and <strong>Angular</strong> in a production environment</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Built scalable REST APIs and integrated them with responsive front-end dashboards</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Delivered QR-based enterprise solutions for attendance tracking and event management</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Deployed applications on <strong>Microsoft Azure</strong> and <strong>Cloudflare Pages</strong></span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Gained hands-on exposure to real-world SDLC, agile collaboration, and deployment workflows</span>
                  </li>
                </ul>
                <div class="timeline-tech">
                  @for (tech of internTech; track tech) {
                    <span class="tech-tag">{{ tech }}</span>
                  }
                </div>
              </div>
            </div>
            </div>
          </div>

          <!-- Education -->
          <div class="timeline-section">
            <div class="timeline-section-header">
              <span class="section-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 6 3 6 3s6-1 6-3v-5"/></svg></span>
              <h3>Education</h3>
            </div>

            <div class="timeline-items-wrapper">

            <div class="timeline-item">
              <div class="timeline-dot-wrapper">
                <div class="timeline-dot"></div>
              </div>
              <div class="timeline-content glass-card">
                <div class="timeline-header">
                  <div class="timeline-company">
                    <div class="company-logo edu">
                      <span>RJ</span>
                    </div>
                    <div>
                      <h4 class="company-name">Ramniranjan Jhunjhunwala College</h4>
                      <span class="company-type">Mumbai University</span>
                    </div>
                  </div>
                  <div class="timeline-meta">
                    <span class="timeline-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Jul 2023 — Present
                    </span>
                    <span class="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Mumbai, India
                    </span>
                  </div>
                </div>
                <h3 class="role-title">B.Sc. Data Science and Artificial Intelligence</h3>
                <ul class="timeline-points">
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Studying core concepts in Data Science, Machine Learning, and AI</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Building strong foundations in Python, SQL, and Statistical Analysis</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Applying classroom knowledge to real-world projects and internships</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="timeline-item">
              <div class="timeline-dot-wrapper">
                <div class="timeline-dot"></div>
              </div>
              <div class="timeline-content glass-card">
                <div class="timeline-header">
                  <div class="timeline-company">
                    <div class="company-logo edu">
                      <span>CS</span>
                    </div>
                    <div>
                      <h4 class="company-name">Chandrabhan Sharma College</h4>
                      <span class="company-type">HSC Board</span>
                    </div>
                  </div>
                  <div class="timeline-meta">
                    <span class="timeline-date">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      Jul 2021 — Mar 2023
                    </span>
                    <span class="timeline-location">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      Mumbai, India
                    </span>
                  </div>
                </div>
                <h3 class="role-title">HSC — 12th Commerce with Maths</h3>
                <ul class="timeline-points">
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Completed Higher Secondary Certificate in Commerce stream with Mathematics</span>
                  </li>
                  <li>
                    <span class="point-icon">▹</span>
                    <span>Built a strong analytical foundation through Commerce and Maths coursework</span>
                  </li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .experience {
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

    .timeline {
      max-width: 800px;
      margin: 0 auto;
    }

    .timeline-section {
      margin-bottom: 56px;
      position: relative;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .timeline-items-wrapper {
      position: relative;
      padding-left: 32px;
    }

    .timeline-items-wrapper::before {
      content: '';
      position: absolute;
      left: 7px;
      top: 40px;
      bottom: 40px;
      width: 2px;
      background: linear-gradient(to bottom, var(--primary), rgba(108, 99, 255, 0.2));
      box-shadow: 0 0 8px rgba(108, 99, 255, 0.4), 0 0 16px rgba(108, 99, 255, 0.2);
      z-index: 0;
    }

    .timeline-section-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 32px;

      .section-icon {
        display: flex;
        align-items: center;
      }

      h3 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.3rem;
        font-weight: 600;
        color: var(--text-primary);
      }
    }

    .timeline-item {
      position: relative;
      margin-bottom: 24px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .timeline-dot-wrapper {
      position: absolute;
      left: -32px;
      top: 32px;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;
    }

    .timeline-dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--primary);
      border: 3px solid var(--primary);
      flex-shrink: 0;
      position: relative;
      box-shadow: 0 0 16px rgba(108, 99, 255, 0.5);

      &::before {
        content: '';
        position: absolute;
        inset: -6px;
        border-radius: 50%;
        border: 2px solid rgba(108, 99, 255, 0.3);
        animation: pulse-dot 2s ease-in-out infinite;
      }

      &.active {
        box-shadow: 0 0 24px rgba(108, 99, 255, 0.7);

        &::after {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          border: 1.5px solid rgba(108, 99, 255, 0.15);
          animation: pulse-dot 2s ease-in-out infinite 0.5s;
        }
      }
    }

    .timeline-content {
      flex: 1;
      padding: 32px;
      transition: transform 0.3s ease;

      &:hover {
        transform: translateY(-2px);
      }
    }

    .timeline-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 16px;
      margin-bottom: 20px;
    }

    .timeline-company {
      display: flex;
      align-items: center;
      gap: 14px;
    }

    .company-logo {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: var(--gradient-1);
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.1rem;
      color: white;
      flex-shrink: 0;

      &.edu {
        background: var(--gradient-3);
      }
    }

    .company-name {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.05rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .company-type {
      font-size: 0.8rem;
      color: var(--text-muted);
    }

    .timeline-meta {
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: flex-end;
    }

    .timeline-date, .timeline-location {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.8rem;
      color: var(--text-muted);

      svg {
        color: var(--primary);
      }
    }

    .role-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.15rem;
      font-weight: 600;
      background: var(--gradient-1);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 20px;
    }

    .timeline-points {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 12px;
      margin-bottom: 24px;

      li {
        display: flex;
        gap: 10px;
        color: var(--text-secondary);
        font-size: 0.9rem;
        line-height: 1.7;

        .point-icon {
          color: var(--primary);
          flex-shrink: 0;
          margin-top: 2px;
        }

        strong {
          color: var(--primary-light);
        }
      }
    }

    .timeline-tech {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tech-tag {
      padding: 4px 14px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 500;
      background: rgba(108, 99, 255, 0.1);
      color: var(--primary-light);
      border: 1px solid rgba(108, 99, 255, 0.15);
    }

    @media (max-width: 768px) {
      .timeline-items-wrapper {
        padding-left: 24px;
      }

      .timeline-items-wrapper::before {
        left: 7px;
      }

      .timeline-dot-wrapper {
        left: -24px;
      }

      .timeline-header {
        flex-direction: column;
      }

      .timeline-meta {
        align-items: flex-start;
      }
    }

    @media (max-width: 480px) {
      .timeline-items-wrapper {
        padding-left: 20px;
      }

      .timeline-items-wrapper::before {
        left: 5px;
      }

      .timeline-dot-wrapper {
        left: -20px;
        top: 24px;
        width: 12px;
        height: 12px;
      }

      .timeline-dot {
        width: 12px;
        height: 12px;
        border-width: 2.5px;
      }

      .timeline-content {
        padding: 18px;
      }

      .timeline-header {
        gap: 12px;
        margin-bottom: 14px;
      }

      .company-logo {
        width: 36px;
        height: 36px;
        font-size: 0.75rem;
        border-radius: 10px;
      }

      .company-name {
        font-size: 0.92rem;
      }

      .company-type {
        font-size: 0.72rem;
      }

      .role-title {
        font-size: 1rem;
        margin-bottom: 14px;
      }

      .timeline-points {
        gap: 8px;
        margin-bottom: 16px;

        li {
          font-size: 0.82rem;
          line-height: 1.6;
          gap: 8px;
        }
      }

      .timeline-date, .timeline-location {
        font-size: 0.72rem;
      }

      .timeline-tech {
        gap: 6px;
      }

      .tech-tag {
        padding: 3px 10px;
        font-size: 0.7rem;
      }

      .timeline-section-header {
        margin-bottom: 20px;

        h3 {
          font-size: 1.1rem;
        }
      }

      .timeline-section {
        margin-bottom: 40px;
      }

      .timeline-item {
        margin-bottom: 16px;
      }
    }
  `]
})
export class ExperienceComponent {
  internTech = ['.NET Web API', 'Angular', 'Azure', 'Cloudflare', 'REST APIs', 'QR Systems', 'Agile'];
}
