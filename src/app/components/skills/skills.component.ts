import { Component, signal, OnInit, AfterViewInit, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';

interface SkillCategory {
  title: string;
  icon: string;
  gradient: string;
  skills: { name: string; level: number; icon: string }[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe],
  template: `
    <section class="section skills" id="skills">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot"></span>
            Skills
          </div>
          <h2 class="section-title">My Tech Arsenal</h2>
          <p class="section-subtitle">Technologies and tools I use to bring ideas to life</p>
        </div>

        <div class="skills-categories">
          @for (category of categories; track category.title) {
            <div class="category-card glass-card">
              <div class="category-header">
                <div class="category-icon" [style.background]="category.gradient" [innerHTML]="category.icon | safeHtml">
                </div>
                <h3 class="category-title">{{ category.title }}</h3>
              </div>
              <div class="category-skills">
                @for (skill of category.skills; track skill.name) {
                  <div class="skill-item">
                    <div class="skill-header">
                      <span class="skill-icon" [innerHTML]="skill.icon | safeHtml"></span>
                      <span class="skill-name">{{ skill.name }}</span>
                      <span class="skill-percent">{{ skill.level }}%</span>
                    </div>
                    <div class="skill-bar">
                      <div class="skill-fill" [style.width.%]="skill.level" [style.background]="category.gradient"></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }
        </div>

        <div class="tools-section">
          <h3 class="tools-title">Tools & Platforms I Work With</h3>
          <div class="tools-grid">
            @for (tool of tools; track tool.name) {
              <div class="tool-chip glass-card">
                <span class="tool-icon" [innerHTML]="tool.icon | safeHtml"></span>
                <span class="tool-name">{{ tool.name }}</span>
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .skills-categories {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(min(340px, 100%), 1fr));
      gap: 24px;
      margin-bottom: 64px;
    }

    .category-card {
      padding: 32px;
    }

    .category-header {
      display: flex;
      align-items: center;
      gap: 16px;
      margin-bottom: 28px;
    }

    .category-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .category-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.15rem;
      font-weight: 600;
      color: var(--text-primary);
    }

    .category-skills {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    .skill-item {
      .skill-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
      }

      .skill-icon {
        display: flex;
        align-items: center;
        width: 16px;
        height: 16px;
      }

      .skill-name {
        font-size: 0.9rem;
        font-weight: 500;
        color: var(--text-primary);
        flex: 1;
      }

      .skill-percent {
        font-family: 'JetBrains Mono', monospace;
        font-size: 0.8rem;
        color: var(--text-muted);
      }
    }

    .skill-bar {
      height: 6px;
      background: rgba(108, 99, 255, 0.1);
      border-radius: 3px;
      overflow: hidden;
    }

    .skill-fill {
      height: 100%;
      border-radius: 3px;
      transition: width 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
        animation: shimmer 2s ease-in-out infinite;
      }
    }

    @keyframes shimmer {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }

    .tools-section {
      text-align: center;
    }

    .tools-title {
      font-family: 'Space Grotesk', sans-serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--text-primary);
      margin-bottom: 32px;
    }

    .tools-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      justify-content: center;
    }

    .tool-chip {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 50px;
      font-size: 0.9rem;
      font-weight: 500;
      color: var(--text-primary);

      .tool-icon {
        display: flex;
        align-items: center;
        width: 16px;
        height: 16px;
      }

      &:hover {
        transform: translateY(-2px);
      }
    }

    @media (max-width: 768px) {
      .skills-categories {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .skills-categories {
        grid-template-columns: 1fr;
      }

      .category-card {
        padding: 20px;
      }

      .skill-item {
        .skill-header {
          font-size: 0.85rem;
        }
      }

      .tools-grid {
        gap: 8px;
      }

      .tool-chip {
        padding: 8px 14px;
        font-size: 0.78rem;
      }
    }
  `]
})
export class SkillsComponent {
  private svg(d: string, color = 'currentColor') {
    return `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  }

  private catSvg(d: string, color = 'currentColor') {
    return `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
  }

  categories: SkillCategory[] = [
    {
      title: 'Programming & Frameworks',
      icon: this.catSvg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', '#8b83ff'),
      gradient: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(0,212,255,0.3))',
      skills: [
        { name: 'Python', level: 90, icon: this.svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', '#00d4ff') },
        { name: 'Angular', level: 85, icon: this.svg('<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>', '#ff6b9d') },
        { name: 'C# / .NET Web API', level: 80, icon: this.svg('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>', '#8b83ff') },
        { name: 'JavaScript', level: 85, icon: this.svg('<path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/><path d="M12 8v8"/><path d="M8 12h8"/>', '#ff9f43') },
        { name: 'SQL', level: 82, icon: this.svg('<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>', '#00ff88') },
      ]
    },
    {
      title: 'Data Science & ML',
      icon: this.catSvg('<path d="M12 2a4 4 0 0 0-4 4c0 2 1 3 2 4l-5 7h14l-5-7c1-1 2-2 2-4a4 4 0 0 0-4-4z"/><line x1="12" y1="18" x2="12" y2="22"/>', '#00ff88'),
      gradient: 'linear-gradient(135deg, rgba(0,255,136,0.3), rgba(0,212,255,0.3))',
      skills: [
        { name: 'Pandas / NumPy', level: 88, icon: this.svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', '#00d4ff') },
        { name: 'Scikit-learn', level: 82, icon: this.svg('<rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><path d="M9 9h6v6H9z"/>', '#00ff88') },
        { name: 'XGBoost', level: 75, icon: this.svg('<line x1="12" y1="20" x2="12" y2="10"/><polyline points="18 14 12 10 6 14"/><line x1="12" y1="10" x2="12" y2="4"/><polyline points="18 8 12 4 6 8"/>', '#ff6b9d') },
        { name: 'EDA & Feature Engineering', level: 85, icon: this.svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>', '#ff9f43') },
        { name: 'Power BI / Tableau', level: 78, icon: this.svg('<line x1="12" y1="20" x2="12" y2="10"/><polyline points="18 16 12 10 6 16"/>', '#8b83ff') },
      ]
    },
    {
      title: 'Web & Cloud',
      icon: this.catSvg('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>', '#ff6b9d'),
      gradient: 'linear-gradient(135deg, rgba(255,107,157,0.3), rgba(255,159,67,0.3))',
      skills: [
        { name: 'REST APIs / ASP.NET Core', level: 82, icon: this.svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>', '#00d4ff') },
        { name: 'Flask', level: 75, icon: this.svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>', '#00ff88') },
        { name: 'Microsoft Azure and AWS', level: 78, icon: this.svg('<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>', '#00d4ff') },
        { name: 'Tailwind CSS / HTML', level: 88, icon: this.svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>', '#ff6b9d') },
        { name: 'Cloudflare Pages', level: 80, icon: this.svg('<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>', '#ff9f43') },
      ]
    },
  ];

  tools = [
    { name: 'Git', icon: this.svg('<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>', '#ff9f43') },
    { name: 'GitHub', icon: this.svg('<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>', '#8b83ff') },
    { name: 'Postman', icon: this.svg('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>', '#ff6b9d') },
    { name: 'VS Code', icon: this.svg('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', '#00d4ff') },
    { name: 'Visual Studio', icon: this.svg('<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>', '#8b83ff') },
    { name: 'Jupyter Notebook', icon: this.svg('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>', '#ff9f43') },
    { name: 'Matplotlib', icon: this.svg('<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>', '#00ff88') },
    { name: 'Seaborn', icon: this.svg('<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>', '#00d4ff') },
  ];
}
