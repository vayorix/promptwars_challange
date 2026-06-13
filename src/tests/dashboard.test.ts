import { describe, it, expect } from 'vitest';
import { Dashboard } from '../components/Dashboard';

describe('Dashboard Component Rendering Tests', () => {
  it('should initialize and render metric gauges correctly', () => {
    const container = document.createElement('div');
    const dashboard = new Dashboard(container);
    dashboard.render();

    // Verify gauges exist
    const cards = container.querySelectorAll('.metric-card');
    expect(cards.length).toBe(5);

    // Verify stress title
    const stressTitle = container.querySelector('.metric-title');
    expect(stressTitle?.textContent).toContain('Stress Index');

    // Verify CBT reframer section is present
    const reframer = container.querySelector('.cognitive-reframer');
    expect(reframer).toBeDefined();

    // Verify resilience history timeline is present
    const timeline = container.querySelector('.resilience-timeline-container');
    expect(timeline).toBeDefined();
    
    const timelineTitle = container.querySelector('.resilience-timeline-container h3');
    expect(timelineTitle?.textContent).toContain('Resilience History Timeline');
  });
});
