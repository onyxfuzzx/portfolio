import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

interface Project {
  title: string;
  description: string;
  icon: string;
  date: string;
  gradient: string;
  tags: string[];
  features: string[];
  github?: string;
  live?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <section class="section projects" id="projects">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot"></span>
            Projects
          </div>
          <h2 class="section-title">Featured Work</h2>
          <p class="section-subtitle">Real-world applications I've built from scratch</p>
        </div>

        <div class="projects-grid">
          @for (project of projects; track project.title; let i = $index) {
            <div class="project-card glass-card" [class.featured]="i === 0">
              <div class="project-header">
                <div class="project-icon" [style.background]="project.gradient">
                  <span [innerHTML]="project.icon | safeHtml"></span>
                </div>
                <div class="project-meta">
                  <span class="project-date">{{ project.date }}</span>
                  <div class="project-links">
                    @if (project.github) {
                      <a [href]="project.github" target="_blank" class="project-link" aria-label="GitHub">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      </a>
                    }
                    @if (project.live) {
                      <a [href]="project.live" target="_blank" class="project-link" aria-label="Live Demo">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                    }
                  </div>
                </div>
              </div>

              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-desc">{{ project.description }}</p>

              <div class="project-features">
                @for (feature of project.features; track feature) {
                  <div class="feature-item">
                    <span class="feature-bullet">▹</span>
                    {{ feature }}
                  </div>
                }
              </div>

              <div class="project-tags">
                @for (tag of project.tags; track tag) {
                  <span class="tag">{{ tag }}</span>
                }
              </div>

              <div class="project-shine"></div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
  styles: [`
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
      gap: 24px;
    }

    .project-card {
      padding: 32px;
      position: relative;
      overflow: hidden;

      &.featured {
        grid-column: 1 / -1;

        @media (min-width: 769px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto auto;
          gap: 0 40px;

          .project-header {
            grid-column: 1;
          }

          .project-title {
            grid-column: 1;
          }

          .project-desc {
            grid-column: 1;
          }

          .project-features {
            grid-column: 2;
            grid-row: 1 / 4;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .project-tags {
            grid-column: 1 / -1;
          }
        }
      }

      &:hover {
        .project-shine {
          transform: translateX(100%);
        }
      }
    }

    .project-shine {
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(108, 99, 255, 0.05), transparent);
      transition: transform 0.8s ease;
      pointer-events: none;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    .project-icon {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .project-meta {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 8px;
    }

    .project-date {
      font-size: 0.8rem;
      color: var(--text-muted);
      font-family: 'JetBrains Mono', monospace;
    }

    .project-links {
      display: flex;
      gap: 8px;
    }

    .project-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      border: 1px solid var(--border);
      color: var(--text-secondary);
      transition: all 0.3s ease;

      &:hover {
        border-color: var(--primary);
        color: var(--primary);
        background: rgba(108, 99, 255, 0.1);
        transform: translateY(-2px);
      }
    }

    .project-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.35rem;
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 12px;
    }

    .project-desc {
      color: var(--text-secondary);
      font-size: 0.95rem;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .project-features {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: 24px;
    }

    .feature-item {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: var(--text-secondary);
      font-size: 0.9rem;
      line-height: 1.6;

      .feature-bullet {
        color: var(--accent-green);
        flex-shrink: 0;
        margin-top: 3px;
      }
    }

    .project-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag {
      padding: 5px 14px;
      border-radius: 50px;
      font-size: 0.75rem;
      font-weight: 500;
      background: rgba(108, 99, 255, 0.08);
      color: var(--primary-light);
      border: 1px solid rgba(108, 99, 255, 0.12);
      transition: all 0.3s ease;

      &:hover {
        background: rgba(108, 99, 255, 0.15);
      }
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .projects-grid {
        grid-template-columns: 1fr;
        gap: 16px;
      }

      .project-card {
        padding: 20px;
      }

      .project-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 12px;
      }

      .project-title {
        font-size: 1.1rem;
      }

      .project-description {
        font-size: 0.85rem;
      }

      .project-features li {
        font-size: 0.82rem;
      }

      .project-tech {
        gap: 6px;
      }

      .tech-tag {
        padding: 4px 10px;
        font-size: 0.72rem;
      }
    }
  `]
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'QR Watchman Attendance System',
      description: 'A comprehensive QR-based attendance tracking system for real-time staff monitoring and enterprise-level workforce management.',
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b83ff" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
      date: 'Dec 2025 — Jan 2026',
      gradient: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(0,212,255,0.3))',
      tags: ['.NET Web API', 'Angular', 'Azure', 'Cloudflare', 'QR Code', 'REST API'],
      features: [
        'Built QR-based attendance system for real-time staff monitoring',
        'Developed secure REST APIs for attendance logging and validation',
        'Designed Angular dashboard for scanning, monitoring, and reporting',
        'Deployed backend on Azure and frontend via Cloudflare Pages',
      ],
      github: 'https://github.com/onyxfuzzx/QR-Watchman-Attendance-System',
    },
    {
      title: 'QR Event Ticket Manager',
      description: 'Event ticket management platform utilizing QR codes for secure ticket generation and real-time verification at events.',
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" stroke-width="2"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"/><path d="M4 6v12c0 1.1.9 2 2 2h14v-4"/><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"/></svg>',
      date: 'Jan 2026 — Feb 2026',
      gradient: 'linear-gradient(135deg, rgba(255,107,157,0.3), rgba(255,159,67,0.3))',
      tags: ['.NET Web API', 'Angular', 'Azure', 'Cloudflare', 'QR Verification'],
      features: [
        'Developed QR-powered event ticketing and validation platform',
        'Implemented secure ticket generation and real-time verification',
        'Built admin dashboard for event operations and attendee tracking',
        'Deployed full-stack system on Azure and Cloudflare',
      ],
      github: 'https://github.com/onyxfuzzx/QR-Event-Ticket-Manager',
    },
    {
      title: 'Customer Churn Prediction & Web App',
      description: 'End-to-end ML pipeline to predict telecom customer churn, with a Flask web app for real-time prediction.',
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00ff88" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-5 7h14l-5-7c1-1 2-2 2-4a4 4 0 0 0-4-4z"/><line x1="12" y1="18" x2="12" y2="22"/></svg>',
      date: 'Apr 2025',
      gradient: 'linear-gradient(135deg, rgba(0,255,136,0.3), rgba(0,212,255,0.3))',
      tags: ['Python', 'XGBoost', 'Flask', 'Scikit-learn', 'SMOTE', 'Matplotlib'],
      features: [
        'Built end-to-end ML pipeline to predict telecom customer churn',
        'Performed EDA, feature engineering, and imbalance handling with SMOTE',
        'Trained and evaluated models including XGBoost',
        'Developed Flask web app for real-time churn prediction',
        'Visualized insights using Matplotlib and Seaborn',
      ],
      github: 'https://github.com/onyxfuzzx/customer-churn-prediction',
    },
    {
      title: 'The AI Chronicle — AI News Analyzer',
      description: 'An intelligent Flask web app that analyzes news articles using AI. Paste any URL and instantly get a structured summary, sentiment analysis, authenticity verification, and related coverage.',
      icon: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#a855f7" stroke-width="2"><path d="M4 4h16v16H4z"/><path d="M8 8h8"/><path d="M8 12h5"/><path d="M8 16h8"/><circle cx="17" cy="13" r="3" fill="rgba(168,85,247,0.3)"/><path d="M19.5 15.5l2 2"/></svg>',
      date: 'Mar 2026',
      gradient: 'linear-gradient(135deg, rgba(168,85,247,0.3), rgba(236,72,153,0.3))',
      tags: ['Python', 'Flask', 'Groq', 'LangChain', 'BeautifulSoup4', 'LLM'],
      features: [
        'Paste any article URL to get AI-powered summary, sentiment & authenticity analysis',
        'Uses Groq free-tier LLMs (Llama 3.3 70B) for bullet-point summarization & sentiment detection',
        'LangChain agent with DuckDuckGo search for cross-reference authenticity verification',
        'Parallel execution via ThreadPoolExecutor for fast results',
        'Dark modern UI with responsive design and purple accents',
      ],
      github: 'https://github.com/onyxfuzzx/pro_news',
    },
  ];
}
