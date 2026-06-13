import { stateManager } from '../data/state';

export class Dashboard {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    stateManager.subscribe(() => this.render());
  }

  public render() {
    const state = stateManager.getState();
    const sc = state.currentScenario;

    // Helper functions for dynamic styling based on scores
    const getLevelColor = (val: number, inverse: boolean = false) => {
      // If inverse is true, high is good (e.g. sleep, confidence), low is bad
      // If inverse is false, high is bad (e.g. stress, burnout), low is good
      const normalized = inverse ? 100 - val : val;
      if (normalized > 75) return 'var(--danger-color)'; // Red-ish
      if (normalized > 45) return 'var(--warning-color)'; // Orange/Yellow-ish
      return 'var(--success-color)'; // Green/Teal-ish
    };

    const getBatteryIcon = (risk: number) => {
      const left = 100 - risk;
      if (left > 75) return '🔋';
      if (left > 40) return '🪫';
      return '⚠️';
    };

    this.container.innerHTML = `
      <section class="dashboard-section" aria-labelledby="dashboard-heading">
        <!-- Motivation Alert Banner -->
        <div class="motivation-banner glass-panel" role="alert">
          <div class="motivation-icon" aria-hidden="true">🧠</div>
          <div class="motivation-content">
            <h3 class="motivation-title">Academic Coach Notes</h3>
            <p class="motivation-text">"${sc.motivationAlert}"</p>
          </div>
        </div>

        <!-- Metric Grid -->
        <div class="metrics-grid">
          
          <!-- Stress Gauge -->
          <div class="metric-card glass-panel" style="--accent: ${getLevelColor(sc.stressLevel)}">
            <div class="metric-header">
              <span class="metric-icon">📈</span>
              <h3 class="metric-title">Stress Index</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2 * Math.PI * 40}; stroke-dashoffset: ${2 * Math.PI * 40 * (1 - sc.stressLevel / 100)}; stroke: ${getLevelColor(sc.stressLevel)}">
                </circle>
              </svg>
              <div class="gauge-val">${sc.stressLevel}%</div>
            </div>
            <p class="metric-status">State: <strong>${sc.stressLevel > 75 ? 'Critical' : sc.stressLevel > 45 ? 'Moderate' : 'Stable'}</strong></p>
          </div>

          <!-- Burnout Risk Card -->
          <div class="metric-card glass-panel" style="--accent: ${getLevelColor(sc.burnoutRisk)}">
            <div class="metric-header">
              <span class="metric-icon">${getBatteryIcon(sc.burnoutRisk)}</span>
              <h3 class="metric-title">Burnout Risk</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2 * Math.PI * 40}; stroke-dashoffset: ${2 * Math.PI * 40 * (1 - sc.burnoutRisk / 100)}; stroke: ${getLevelColor(sc.burnoutRisk)}">
                </circle>
              </svg>
              <div class="gauge-val">${sc.burnoutRisk}%</div>
            </div>
            <p class="metric-status">Depletion: <strong>${sc.burnoutRisk > 75 ? 'Severe Exhaustion' : sc.burnoutRisk > 45 ? 'Warning Stage' : 'Healthy Reserves'}</strong></p>
          </div>

          <!-- Confidence Tracking Card -->
          <div class="metric-card glass-panel" style="--accent: ${getLevelColor(sc.confidenceLevel, true)}">
            <div class="metric-header">
              <span class="metric-icon">🛡️</span>
              <h3 class="metric-title">Confidence Level</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2 * Math.PI * 40}; stroke-dashoffset: ${2 * Math.PI * 40 * (1 - sc.confidenceLevel / 100)}; stroke: ${getLevelColor(sc.confidenceLevel, true)}">
                </circle>
              </svg>
              <div class="gauge-val">${sc.confidenceLevel}%</div>
            </div>
            <p class="metric-status">Self-Belief: <strong>${sc.confidenceLevel < 30 ? 'Low (Imposter)' : sc.confidenceLevel < 60 ? 'Moderate' : 'Resilient'}</strong></p>
          </div>

          <!-- Study Pressure Card -->
          <div class="metric-card glass-panel" style="--accent: ${getLevelColor(sc.studyPressure)}">
            <div class="metric-header">
              <span class="metric-icon">⏳</span>
              <h3 class="metric-title">Study Pressure</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2 * Math.PI * 40}; stroke-dashoffset: ${2 * Math.PI * 40 * (1 - sc.studyPressure / 100)}; stroke: ${getLevelColor(sc.studyPressure)}">
                </circle>
              </svg>
              <div class="gauge-val">${sc.studyPressure}%</div>
            </div>
            <p class="metric-status">Workload: <strong>${sc.studyPressure > 75 ? 'Overloaded' : sc.studyPressure > 45 ? 'Elevated' : 'Manageable'}</strong></p>
          </div>

          <!-- Sleep Quality Card -->
          <div class="metric-card glass-panel" style="--accent: ${getLevelColor(sc.sleepQuality, true)}">
            <div class="metric-header">
              <span class="metric-icon">🌙</span>
              <h3 class="metric-title">Sleep Quality</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2 * Math.PI * 40}; stroke-dashoffset: ${2 * Math.PI * 40 * (1 - sc.sleepQuality / 100)}; stroke: ${getLevelColor(sc.sleepQuality, true)}">
                </circle>
              </svg>
              <div class="gauge-val">${sc.sleepQuality}%</div>
            </div>
            <p class="metric-status">Recovery: <strong>${sc.sleepQuality < 30 ? 'Critically Deprived' : sc.sleepQuality < 60 ? 'Disturbed Sleep' : 'Fully Rested'}</strong></p>
          </div>

        </div>

        <!-- CBT Cognitive Reframer Section -->
        <div class="cognitive-reframer glass-panel">
          <div class="section-header">
            <h3 class="gradient-text">🧠 Cognitive Behavioral Therapy (CBT) Reframer</h3>
            <p class="section-sub">Cognitive distortions detected in your journal, reframed into healthier perspectives.</p>
          </div>
          
          <div class="reframer-cards-container">
            ${sc.cognitiveDistortions.length === 0 ? `
              <div class="empty-reframer">
                <p>No major cognitive distortions detected. Great job keeping a balanced perspective!</p>
              </div>
            ` : sc.cognitiveDistortions.map(cd => `
              <div class="reframer-card">
                <div class="reframer-col original">
                  <span class="col-tag distortion-tag">${cd.distortionType}</span>
                  <p class="thought-text">"${cd.originalThought}"</p>
                </div>
                <div class="reframer-arrow" aria-hidden="true">➡️</div>
                <div class="reframer-col reframed">
                  <span class="col-tag reframed-tag">CBT Reframing</span>
                  <p class="thought-text">"${cd.reframedThought}"</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }
}
