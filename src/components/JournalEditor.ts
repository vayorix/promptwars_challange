import { stateManager, mockScenarios } from '../data/state';
import { analyzeJournal } from '../ai/engine';

export class JournalEditor {
  private container: HTMLElement;
  private isAnalyzing: boolean = false;

  constructor(container: HTMLElement) {
    this.container = container;
    stateManager.subscribe(() => this.render());
  }

  public render() {
    const state = stateManager.getState();
    const hasEnvKey = !!((import.meta as any).env.VITE_GEMINI_API_KEY);

    this.container.innerHTML = `
      <section class="journal-editor-card glass-panel" aria-labelledby="journal-heading">
        <div class="card-header">
          <h2 id="journal-heading" class="gradient-text">✍️ Student Journal</h2>
          <p class="card-sub">Reflect on your academic day, exams, sleep, or family expectations.</p>
        </div>

        <div class="api-key-container">
          ${hasEnvKey ? `
            <div class="header-badge" role="status" style="justify-content: center; width: 100%;">
              <span class="badge-dot" style="display:inline-block; width:8px; height:8px; background:var(--success-color); border-radius:50%; margin-right:6px;"></span>
              Gemini AI Engine Live (Loaded)
            </div>
          ` : `
            <label for="gemini-key" class="input-label">Gemini API Key (Optional for live AI):</label>
            <div class="api-input-wrapper">
              <input 
                type="password" 
                id="gemini-key" 
                value="${state.apiKey}" 
                placeholder="Paste AI API key..." 
                aria-describedby="api-desc"
              />
              <button id="save-key-btn" class="secondary-btn">Save Key</button>
            </div>
            <span id="api-desc" class="helper-text">If left empty, CalmScholar utilizes a smart clinical heuristic engine for local analysis.</span>
          `}
        </div>

        <div class="presets-section">
          <h3 class="preset-title">Test Demo Scenarios (One-Click Verification)</h3>
          <div class="presets-deck" role="radiogroup" aria-label="Demo scenarios">
            ${Object.values(mockScenarios).map(sc => `
              <button 
                class="preset-card ${state.currentScenario.id === sc.id ? 'active' : ''}" 
                data-id="${sc.id}"
                role="radio"
                aria-checked="${state.currentScenario.id === sc.id}"
                aria-label="Load scenario for ${sc.name}"
              >
                <span class="preset-avatar" aria-hidden="true">${sc.avatar}</span>
                <span class="preset-info">
                  <strong class="preset-name">${sc.name}</strong>
                  <span class="preset-tagline">${sc.tagline}</span>
                </span>
              </button>
            `).join('')}
          </div>
        </div>

        <div class="editor-area">
          <label for="journal-textarea" class="sr-only">Write your journal entry here</label>
          <textarea 
            id="journal-textarea" 
            placeholder="How are you feeling about your studies, exams, or workload today? Write freely..."
            rows="6"
            ${this.isAnalyzing ? 'disabled' : ''}
          >${state.currentScenario.journalText}</textarea>
          
          <div class="editor-footer">
            <span id="word-count" class="word-count">0 words | 0 characters</span>
            <button 
              id="analyze-btn" 
              class="primary-btn ${this.isAnalyzing ? 'loading' : ''}"
              ${this.isAnalyzing ? 'disabled' : ''}
            >
              ${this.isAnalyzing ? '<span class="spinner"></span> Analyzing...' : 'Analyze Academic Mindset'}
            </button>
          </div>
        </div>
        
        ${this.isAnalyzing ? `
          <div class="loading-overlay" role="alert" aria-busy="true" aria-live="polite">
            <div class="loading-spinner"></div>
            <p>Decoding cognitive patterns & calculating burnout risks...</p>
          </div>
        ` : ''}
      </section>
    `;

    this.bindEvents();
    this.updateCounters();
  }

  private bindEvents() {
    const textarea = this.container.querySelector('#journal-textarea') as HTMLTextAreaElement;
    const saveKeyBtn = this.container.querySelector('#save-key-btn') as HTMLButtonElement;
    const apiInput = this.container.querySelector('#gemini-key') as HTMLInputElement;
    const analyzeBtn = this.container.querySelector('#analyze-btn') as HTMLButtonElement;
    const presetCards = this.container.querySelectorAll('.preset-card');

    if (textarea) {
      textarea.addEventListener('input', () => this.updateCounters());
    }

    if (saveKeyBtn && apiInput) {
      saveKeyBtn.addEventListener('click', () => {
        stateManager.setApiKey(apiInput.value.trim());
        const notification = document.createElement('div');
        notification.className = 'toast success';
        notification.textContent = 'API Key saved successfully!';
        document.body.appendChild(notification);
        setTimeout(() => notification.remove(), 2500);
      });
    }

    if (analyzeBtn && textarea) {
      analyzeBtn.addEventListener('click', async () => {
        const text = textarea.value.trim();
        if (!text) {
          alert('Please write something in your journal first!');
          return;
        }

        this.isAnalyzing = true;
        this.render();

        try {
          const state = stateManager.getState();
          const scenario = await analyzeJournal(text, state.apiKey);
          stateManager.updateScenario(scenario);
        } catch (error: any) {
          console.error(error);
          alert(`Analysis Failed: ${error.message}`);
        } finally {
          this.isAnalyzing = false;
          this.render();
        }
      });
    }

    presetCards.forEach(card => {
      card.addEventListener('click', () => {
        const id = card.getAttribute('data-id');
        if (id && mockScenarios[id]) {
          stateManager.updateScenario({ ...mockScenarios[id] });
        }
      });
    });
  }

  private updateCounters() {
    const textarea = this.container.querySelector('#journal-textarea') as HTMLTextAreaElement;
    const wordCountSpan = this.container.querySelector('#word-count');
    if (!textarea || !wordCountSpan) return;

    const text = textarea.value.trim();
    const chars = text.length;
    const words = text ? text.split(/\s+/).length : 0;
    wordCountSpan.textContent = `${words} words | ${chars} characters`;
  }
}
