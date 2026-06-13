import { stateManager } from '../data/state';
import { escapeHTML } from '../utils/sanitize';

export class TriggerAnalyzer {
  private container: HTMLElement;

  constructor(container: HTMLElement) {
    this.container = container;
    stateManager.subscribe(() => this.render());
  }

  public render() {
    const state = stateManager.getState();
    const sc = state.currentScenario;
    const triggers = sc.triggers;

    // Group triggers by category
    const categories: Record<string, typeof triggers> = {
      Academic: [],
      Parental: [],
      Social: [],
      Sleep: [],
      Other: []
    };

    triggers.forEach(t => {
      if (categories[t.category]) {
        categories[t.category].push(t);
      } else {
        categories.Other.push(t);
      }
    });

    const getImpactClass = (impact: string) => {
      if (impact === 'High') return 'impact-high';
      if (impact === 'Medium') return 'impact-medium';
      return 'impact-low';
    };

    const totalTriggers = triggers.length;
    const highImpactCount = triggers.filter(t => t.impact === 'High').length;

    this.container.innerHTML = `
      <section class="trigger-analyzer-card glass-panel" aria-labelledby="triggers-heading">
        <div class="card-header">
          <h2 id="triggers-heading" class="gradient-text">🎯 Stress Trigger Map</h2>
          <p class="card-sub">AI-extracted factors contributing to your stress, sorted by category and impact level.</p>
        </div>

        <div class="trigger-stats">
          <div class="stat-badge">
            <span class="stat-num">${totalTriggers}</span>
            <span class="stat-label">Identified Stressors</span>
          </div>
          <div class="stat-badge danger">
            <span class="stat-num">${highImpactCount}</span>
            <span class="stat-label">High Impact Stressors</span>
          </div>
        </div>

        <div class="triggers-grid">
          ${Object.entries(categories).map(([category, list]) => `
            <div class="category-lane">
              <h3 class="lane-title">${this.getCategoryIcon(category)} ${category}</h3>
              <div class="lane-cards">
                ${list.length === 0 ? `
                  <p class="empty-lane-text">No stressors identified.</p>
                ` : list.map(t => `
                  <div class="trigger-card ${getImpactClass(t.impact)}">
                    <span class="trigger-name">${escapeHTML(t.name)}</span>
                    <span class="trigger-impact-badge">${escapeHTML(t.impact)} Impact</span>
                  </div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }

  private getCategoryIcon(cat: string): string {
    switch (cat) {
      case 'Academic': return '📖';
      case 'Parental': return '👨‍👩‍👧';
      case 'Social': return '👥';
      case 'Sleep': return '💤';
      default: return '🔍';
    }
  }
}
