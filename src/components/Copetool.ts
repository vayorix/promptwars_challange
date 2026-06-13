import { stateManager } from '../data/state';

export class Copetool {
  private container: HTMLElement;
  private intervalId: number | null = null;
  private isPlaying: boolean = false;
  private timerSeconds: number = 0;
  private currentPhase: 'Inhale' | 'Hold' | 'Exhale' | 'Rest' = 'Inhale';
  private phaseSecondsLeft: number = 4;

  constructor(container: HTMLElement) {
    this.container = container;
    stateManager.subscribe(() => this.render());
  }

  public render() {
    const state = stateManager.getState();
    const copes = state.currentScenario.copingMechanisms;

    this.container.innerHTML = `
      <section class="copetool-section" aria-labelledby="cope-heading">
        <div class="copetool-grid">
          
          <!-- AI Actionable Coping Cards -->
          <div class="coping-cards-panel glass-panel">
            <h2 id="cope-heading" class="gradient-text">🛡️ Custom Coping Prescriptions</h2>
            <p class="card-sub">AI-recommended mental and physical strategies tailored to your current cognitive state.</p>
            
            <div class="copes-list">
              ${copes.map((c, i) => `
                <div class="cope-item-card type-${c.type.toLowerCase()}">
                  <div class="cope-item-header">
                    <span class="cope-type-badge">${c.type}</span>
                    <span class="cope-duration">⏳ ${c.duration}</span>
                  </div>
                  <h3 class="cope-item-title">${i + 1}. ${c.title}</h3>
                  <p class="cope-item-desc">${c.description}</p>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Interactive Breath Pacer (WCAG Compliant) -->
          <div class="breath-pacer-panel glass-panel">
            <h2 class="gradient-text">🧘 Interactive Box Breathing</h2>
            <p class="card-sub">Regulate your autonomic nervous system using clinical 4-4-4-4 box breathing.</p>
            
            <div class="pacer-widget">
              <div class="pacer-circle-outer">
                <div id="breath-circle" class="pacer-circle-inner state-rest">
                  <div id="pacer-text" class="pacer-text">Ready</div>
                  <div id="pacer-timer" class="pacer-timer">--</div>
                </div>
              </div>
              
              <div class="pacer-controls">
                <button id="pacer-start-btn" class="primary-btn">${this.isPlaying ? 'Pause' : 'Start Breathing'}</button>
                <button id="pacer-reset-btn" class="secondary-btn">Reset</button>
              </div>

              <div class="box-breathing-legend">
                <span class="legend-step ${this.isPlaying && this.currentPhase === 'Inhale' ? 'active' : ''}">💨 Inhale (4s)</span>
                <span class="legend-step ${this.isPlaying && this.currentPhase === 'Hold' ? 'active' : ''}">🛑 Hold (4s)</span>
                <span class="legend-step ${this.isPlaying && this.currentPhase === 'Exhale' ? 'active' : ''}">💨 Exhale (4s)</span>
                <span class="legend-step ${this.isPlaying && this.currentPhase === 'Rest' ? 'active' : ''}">🛑 Hold/Rest (4s)</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `;

    this.bindEvents();
    this.updatePacerUI();
  }

  private bindEvents() {
    const startBtn = this.container.querySelector('#pacer-start-btn') as HTMLButtonElement;
    const resetBtn = this.container.querySelector('#pacer-reset-btn') as HTMLButtonElement;

    if (startBtn) {
      startBtn.addEventListener('click', () => {
        if (this.isPlaying) {
          this.pausePacer();
        } else {
          this.startPacer();
        }
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        this.resetPacer();
      });
    }
  }

  private startPacer() {
    this.isPlaying = true;
    const startBtn = this.container.querySelector('#pacer-start-btn') as HTMLButtonElement;
    if (startBtn) startBtn.textContent = 'Pause';

    if (this.intervalId) clearInterval(this.intervalId);
    
    this.intervalId = window.setInterval(() => {
      this.tickPacer();
    }, 1000);

    this.updatePacerUI();
  }

  private pausePacer() {
    this.isPlaying = false;
    const startBtn = this.container.querySelector('#pacer-start-btn') as HTMLButtonElement;
    if (startBtn) startBtn.textContent = 'Resume';

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    
    const circle = this.container.querySelector('#breath-circle') as HTMLElement;
    if (circle) {
      circle.style.animationPlayState = 'paused';
    }
  }

  private resetPacer() {
    this.isPlaying = false;
    this.currentPhase = 'Inhale';
    this.phaseSecondsLeft = 4;
    this.timerSeconds = 0;

    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }

    const startBtn = this.container.querySelector('#pacer-start-btn') as HTMLButtonElement;
    if (startBtn) startBtn.textContent = 'Start Breathing';

    this.updatePacerUI();
  }

  private tickPacer() {
    this.phaseSecondsLeft--;
    this.timerSeconds++;

    if (this.phaseSecondsLeft <= 0) {
      // Transition phase
      switch (this.currentPhase) {
        case 'Inhale':
          this.currentPhase = 'Hold';
          this.phaseSecondsLeft = 4;
          break;
        case 'Hold':
          this.currentPhase = 'Exhale';
          this.phaseSecondsLeft = 4;
          break;
        case 'Exhale':
          this.currentPhase = 'Rest';
          this.phaseSecondsLeft = 4;
          break;
        case 'Rest':
          this.currentPhase = 'Inhale';
          this.phaseSecondsLeft = 4;
          break;
      }
    }

    this.updatePacerUI();
  }

  private updatePacerUI() {
    const circle = this.container.querySelector('#breath-circle') as HTMLElement;
    const text = this.container.querySelector('#pacer-text') as HTMLElement;
    const timerVal = this.container.querySelector('#pacer-timer') as HTMLElement;
    const steps = this.container.querySelectorAll('.legend-step');

    if (!circle || !text || !timerVal) return;

    if (!this.isPlaying && this.timerSeconds === 0) {
      text.textContent = 'Begin';
      timerVal.textContent = '4s';
      circle.className = 'pacer-circle-inner state-rest';
      circle.style.transform = 'scale(1.0)';
      return;
    }

    // Set text and count
    text.textContent = this.currentPhase;
    timerVal.textContent = `${this.phaseSecondsLeft}s`;

    // Apply scale and classes dynamically based on phase
    circle.className = `pacer-circle-inner state-${this.currentPhase.toLowerCase()}`;
    
    // Smooth custom scaling to animate expand/contract
    if (this.currentPhase === 'Inhale') {
      const percentage = (4 - this.phaseSecondsLeft) / 4;
      const scale = 1.0 + (percentage * 0.6); // grow from 1.0 to 1.6
      circle.style.transform = `scale(${scale})`;
    } else if (this.currentPhase === 'Hold') {
      circle.style.transform = 'scale(1.6)';
    } else if (this.currentPhase === 'Exhale') {
      const percentage = (4 - this.phaseSecondsLeft) / 4;
      const scale = 1.6 - (percentage * 0.6); // shrink from 1.6 to 1.0
      circle.style.transform = `scale(${scale})`;
    } else if (this.currentPhase === 'Rest') {
      circle.style.transform = 'scale(1.0)';
    }

    // Update legend highlights
    steps.forEach((step, idx) => {
      let active = false;
      if (this.currentPhase === 'Inhale' && idx === 0) active = true;
      if (this.currentPhase === 'Hold' && idx === 1) active = true;
      if (this.currentPhase === 'Exhale' && idx === 2) active = true;
      if (this.currentPhase === 'Rest' && idx === 3) active = true;
      
      if (active) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }
}
export default Copetool;
