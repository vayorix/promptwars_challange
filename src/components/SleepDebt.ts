import { stateManager } from '../data/state';

export class SleepDebt {
  private container: HTMLElement;
  
  // Local state for calculations
  private targetSleep: number = 8;
  private actualSleep: number = 6;
  private poorNights: number = 3;

  constructor(container: HTMLElement) {
    this.container = container;
    
    // Subscribe to state, but we also handle local changes dynamically
    stateManager.subscribe(() => this.render());
  }

  public render() {
    // Calculate metrics
    const sleepDebt = Math.max(0, (this.targetSleep - this.actualSleep) * this.poorNights);
    
    // Cognitive efficiency impact
    // 0 debt = 100% efficiency, 20+ debt = 50% efficiency
    const cognitiveEfficiency = Math.max(50, Math.round(100 - (sleepDebt * 2.5)));
    
    // Recovery duration suggestion
    // standard recovery suggestion: add 1-1.5 hrs per night over next N nights
    const recoveryNights = Math.min(7, Math.max(1, Math.round(sleepDebt / 1.5)));
    const catchupPerNight = Math.min(2.0, Number((sleepDebt / recoveryNights).toFixed(1)));

    this.container.innerHTML = `
      <section class="sleep-debt-card glass-panel" aria-labelledby="sleep-heading">
        <div class="card-header">
          <h2 id="sleep-heading" class="gradient-text">💤 Sleep & Cognitive Debt Tracker</h2>
          <p class="card-sub">Calculate your physiological sleep deficit and see its estimated impact on your academic capabilities.</p>
        </div>

        <div class="sleep-calculator-layout">
          
          <!-- Input Sliders -->
          <div class="calculator-inputs">
            <div class="slider-group">
              <div class="slider-header">
                <label for="target-sleep-range">Target Sleep per Night</label>
                <span class="slider-val">${this.targetSleep} hours</span>
              </div>
              <input 
                type="range" 
                id="target-sleep-range" 
                min="6" 
                max="10" 
                step="0.5" 
                value="${this.targetSleep}"
              />
            </div>

            <div class="slider-group">
              <div class="slider-header">
                <label for="actual-sleep-range">Actual Sleep Last Night</label>
                <span class="slider-val">${this.actualSleep} hours</span>
              </div>
              <input 
                type="range" 
                id="actual-sleep-range" 
                min="3" 
                max="10" 
                step="0.5" 
                value="${this.actualSleep}"
              />
            </div>

            <div class="slider-group">
              <div class="slider-header">
                <label for="nights-range">Consecutive Poor Sleep Nights</label>
                <span class="slider-val">${this.poorNights} nights</span>
              </div>
              <input 
                type="range" 
                id="nights-range" 
                min="1" 
                max="14" 
                step="1" 
                value="${this.poorNights}"
              />
            </div>
          </div>

          <!-- Visual Outcome Panel -->
          <div class="calculator-outputs">
            <div class="output-row">
              <div class="output-stat">
                <span class="stat-value warning-color">${sleepDebt} hrs</span>
                <span class="stat-desc">Accumulated Sleep Debt</span>
              </div>
              
              <div class="output-stat">
                <span class="stat-value" style="color: ${cognitiveEfficiency > 80 ? 'var(--success-color)' : cognitiveEfficiency > 65 ? 'var(--warning-color)' : 'var(--danger-color)'}">
                  ${cognitiveEfficiency}%
                </span>
                <span class="stat-desc">Cognitive Efficiency</span>
              </div>
            </div>

            <div class="cognitive-warning-message">
              ${sleepDebt > 10 ? `
                <div class="warning-alert alert-critical" role="alert">
                  <strong>⚠️ Critical Sleep Deficit:</strong> Your current sleep debt exceeds 10 hours. Your memory consolidation, focus, and reaction times are severely compromised. Do not study late tonight.
                </div>
              ` : sleepDebt > 4 ? `
                <div class="warning-alert alert-warning" role="alert">
                  <strong>⚠️ Moderate Sleep Deficit:</strong> Your attention span and cognitive recall are slightly reduced. Avoid excessive caffeine to mask fatigue.
                </div>
              ` : `
                <div class="warning-alert alert-healthy" role="alert">
                  <strong>✅ Healthy Sleep Reserves:</strong> Your cognitive functioning is optimal. Keep maintaining consistent sleep windows.
                </div>
              `}
            </div>

            <div class="restoration-plan">
              <h3 class="plan-title">🌙 Sleep Restoration Plan</h3>
              <p class="plan-summary">To pay back your sleep debt safely without disrupting your circadian rhythm:</p>
              <ul class="plan-steps">
                <li>
                  <strong>Target Adjustment:</strong> Sleep an extra 
                  <span class="highlight-text">+${catchupPerNight} hrs</span> 
                  per night for the next 
                  <span class="highlight-text">${recoveryNights} nights</span>.
                </li>
                <li><strong>Circadian Cutoff:</strong> Stop caffeine intake by <strong>1:00 PM</strong>. Dehydrate caffeine from system.</li>
                <li><strong>Digital Curfew:</strong> Turn off all mobile screens by <strong>10:00 PM</strong> to allow melatonin production.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    `;

    this.bindEvents();
  }

  private bindEvents() {
    const targetRange = this.container.querySelector('#target-sleep-range') as HTMLInputElement;
    const actualRange = this.container.querySelector('#actual-sleep-range') as HTMLInputElement;
    const nightsRange = this.container.querySelector('#nights-range') as HTMLInputElement;

    if (targetRange) {
      targetRange.addEventListener('input', () => {
        this.targetSleep = parseFloat(targetRange.value);
        this.render();
      });
    }

    if (actualRange) {
      actualRange.addEventListener('input', () => {
        this.actualSleep = parseFloat(actualRange.value);
        this.render();
      });
    }

    if (nightsRange) {
      nightsRange.addEventListener('input', () => {
        this.poorNights = parseInt(nightsRange.value, 10);
        this.render();
      });
    }
  }
}
export default SleepDebt;
