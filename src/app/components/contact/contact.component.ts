import { Component, signal, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section contact" id="contact">
      <div class="container">
        <div class="section-header">
          <div class="section-badge">
            <span class="badge-dot"></span>
            Contact
          </div>
          <h2 class="section-title">Let's Connect</h2>
          <p class="section-subtitle">Have a project in mind or want to chat? I'd love to hear from you</p>
        </div>

        <div class="contact-grid">
          <div class="contact-info">
            <div class="info-card glass-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:zaid83560&#64;gmail.com">zaid83560&#64;gmail.com</a>
              </div>
            </div>

            <div class="info-card glass-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div>
                <h4>Instagram</h4>
                <a href="https://instagram.com/zz.normie" target="_blank">&#64;zz.normie</a>
              </div>
            </div>

            <div class="info-card glass-card">
              <div class="info-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <h4>Location</h4>
                <span>Mumbai, India</span>
              </div>
            </div>

            <div class="social-links">
              <a href="https://github.com/onyxfuzzx" target="_blank" class="social-card glass-card">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/zaiddddd" target="_blank" class="social-card glass-card">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div class="contact-form-wrapper glass-card">
            <!-- Status Toast -->
            @if (statusMessage()) {
              <div class="status-toast" [class.success]="status() === 'success'" [class.error]="status() === 'error'">
                <div class="toast-icon">
                  @if (status() === 'success') {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                  } @else {
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  }
                </div>
                <span>{{ statusMessage() }}</span>
              </div>
            }

            <form class="contact-form" (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Your Name</label>
                  <input type="text" id="name" [(ngModel)]="formData.name" name="name" placeholder="John Doe" required #nameInput="ngModel"
                    [class.invalid]="nameInput.invalid && (nameInput.dirty || submitted())">
                  @if (nameInput.invalid && (nameInput.dirty || submitted())) {
                    <span class="field-error">Name is required</span>
                  }
                </div>
                <div class="form-group">
                  <label for="email">Your Email</label>
                  <input type="email" id="email" [(ngModel)]="formData.email" name="email" placeholder="john&#64;example.com" required email #emailInput="ngModel"
                    [class.invalid]="emailInput.invalid && (emailInput.dirty || submitted())">
                  @if (emailInput.invalid && (emailInput.dirty || submitted())) {
                    <span class="field-error">Valid email is required</span>
                  }
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" [(ngModel)]="formData.subject" name="subject" placeholder="Project Inquiry">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" [(ngModel)]="formData.message" name="message" rows="5" placeholder="Tell me about your project..." required #messageInput="ngModel"
                  [class.invalid]="messageInput.invalid && (messageInput.dirty || submitted())"></textarea>
                @if (messageInput.invalid && (messageInput.dirty || submitted())) {
                  <span class="field-error">Message is required</span>
                }
              </div>
              <button type="submit" class="btn-primary submit-btn"
                [class.sent]="status() === 'success'"
                [class.sending]="status() === 'sending'"
                [disabled]="status() === 'sending'">
                @if (status() === 'sending') {
                  <div class="spinner"></div>
                  Sending...
                } @else if (status() === 'success') {
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                  Message Sent!
                } @else {
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  Send Message
                }
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .contact-grid {
      display: grid;
      grid-template-columns: 1fr 1.5fr;
      gap: 32px;
      align-items: start;
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .info-card {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 20px 24px;

      .info-icon {
        width: 48px;
        height: 48px;
        border-radius: 14px;
        background: rgba(108, 99, 255, 0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--primary);
        flex-shrink: 0;
      }

      h4 {
        font-family: 'Space Grotesk', sans-serif;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--text-primary);
        margin-bottom: 4px;
      }

      a, span {
        color: var(--text-secondary);
        font-size: 0.9rem;
      }
    }

    .social-links {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-top: 8px;
    }

    .social-card {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      padding: 24px;
      text-align: center;
      color: var(--text-secondary);
      text-decoration: none;

      svg {
        color: var(--primary);
      }

      span {
        font-size: 0.85rem;
        font-weight: 500;
      }

      &:hover {
        color: var(--primary);
      }
    }

    .contact-form-wrapper {
      padding: 36px;
      position: relative;
    }

    .status-toast {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 14px 20px;
      border-radius: 12px;
      margin-bottom: 20px;
      font-size: 0.9rem;
      font-weight: 500;
      animation: slideDown 0.4s cubic-bezier(0.16, 1, 0.3, 1);

      &.success {
        background: rgba(0, 255, 136, 0.1);
        border: 1px solid rgba(0, 255, 136, 0.3);
        color: #00ff88;

        .toast-icon {
          background: rgba(0, 255, 136, 0.15);
          color: #00ff88;
        }
      }

      &.error {
        background: rgba(255, 68, 68, 0.1);
        border: 1px solid rgba(255, 68, 68, 0.3);
        color: #ff4444;

        .toast-icon {
          background: rgba(255, 68, 68, 0.15);
          color: #ff4444;
        }
      }
    }

    .toast-icon {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-12px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 8px;

      label {
        font-size: 0.85rem;
        font-weight: 500;
        color: var(--text-secondary);
      }

      input, textarea {
        padding: 14px 18px;
        border-radius: 12px;
        border: 1px solid var(--border);
        background: rgba(10, 10, 26, 0.6);
        color: var(--text-primary);
        font-family: 'Inter', sans-serif;
        font-size: 0.95rem;
        transition: all 0.3s ease;
        outline: none;

        &::placeholder {
          color: var(--text-muted);
        }

        &:focus {
          border-color: var(--primary);
          box-shadow: 0 0 20px rgba(108, 99, 255, 0.15);
        }

        &.invalid {
          border-color: #ff4444;
          box-shadow: 0 0 20px rgba(255, 68, 68, 0.1);
        }
      }

      textarea {
        resize: vertical;
        min-height: 120px;
      }

      .field-error {
        font-size: 0.78rem;
        color: #ff4444;
        margin-top: -4px;
      }
    }

    .submit-btn {
      width: 100%;
      justify-content: center;
      padding: 16px;
      font-size: 1.05rem;
      position: relative;

      &.sent {
        background: linear-gradient(135deg, #00ff88, #00d4ff) !important;
      }

      &.sending {
        opacity: 0.85;
        cursor: wait;
      }

      &:disabled {
        pointer-events: none;
      }
    }

    .spinner {
      width: 20px;
      height: 20px;
      border: 2.5px solid rgba(255, 255, 255, 0.3);
      border-top-color: #fff;
      border-radius: 50%;
      animation: spin 0.7s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @media (max-width: 768px) {
      .contact-grid {
        grid-template-columns: 1fr;
      }

      .form-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 480px) {
      .contact-form-wrapper {
        padding: 20px;
      }

      .info-card {
        padding: 16px;

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        h4 {
          font-size: 0.85rem;
        }

        a, span {
          font-size: 0.82rem;
        }
      }

      .social-links {
        gap: 10px;
      }

      .social-card {
        padding: 16px;

        svg {
          width: 24px;
          height: 24px;
        }
      }

      .form-group {
        input, textarea {
          padding: 12px 14px;
          font-size: 0.9rem;
        }
      }

      .submit-btn {
        padding: 14px;
        font-size: 0.95rem;
      }

      .status-toast {
        padding: 12px 16px;
        font-size: 0.82rem;
      }
    }
  `]
})
export class ContactComponent {
  // ── EmailJS credentials ──
  // Sign up free at https://www.emailjs.com and replace these:
  private readonly SERVICE_ID  = 'service_ay2i9dn';   // e.g. 'service_abc123'
  private readonly TEMPLATE_ID = 'template_qn8oh0i';  // e.g. 'template_xyz789'
  private readonly PUBLIC_KEY  = 'gbwL-O873OwdBOTys';    // e.g. 'aBcDeFgHiJkLmN'

  @ViewChild('contactForm') contactForm!: NgForm;

  status = signal<'idle' | 'sending' | 'success' | 'error'>('idle');
  statusMessage = signal('');
  submitted = signal(false);

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  async onSubmit() {
    this.submitted.set(true);

    // Basic validation
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      this.showStatus('error', 'Please fill in all required fields.');
      return;
    }

    this.status.set('sending');
    this.statusMessage.set('');

    try {
      await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        {
          from_name: this.formData.name,
          from_email: this.formData.email,
          subject: this.formData.subject || 'Portfolio Contact',
          message: this.formData.message,
          to_name: 'Zaid',
        },
        this.PUBLIC_KEY
      );

      this.showStatus('success', 'Message sent successfully! I\'ll get back to you soon.');
      this.formData = { name: '', email: '', subject: '', message: '' };
      this.submitted.set(false);
      this.contactForm.resetForm();
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      this.showStatus('error', 'Failed to send message. Please try again or email me directly.');
    }
  }

  private showStatus(type: 'success' | 'error', message: string) {
    this.status.set(type);
    this.statusMessage.set(message);
    setTimeout(() => {
      this.status.set('idle');
      this.statusMessage.set('');
    }, 5000);
  }
}
