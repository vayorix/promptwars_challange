import { describe, it, expect } from 'vitest';
import { StressBusterGame } from '../components/StressBusterGame';

describe('Mindful Playroom / StressBusterGame Tests', () => {
  it('should initialize and render the bubble grid correctly', () => {
    const container = document.createElement('div');
    const game = new StressBusterGame(container);
    game.render();

    // Verify container loaded tabs
    const tabs = container.querySelectorAll('.tab-btn');
    expect(tabs.length).toBe(2);
    expect(tabs[0].textContent).toContain('Zen Bubble Popper');
    expect(tabs[1].textContent).toContain('Worry Balloon Popper');

    // Verify 24 bubbles are rendered
    const bubbles = container.querySelectorAll('.bubble-wrap-cell');
    expect(bubbles.length).toBe(24);
  });

  it('should pop a bubble when clicked and record popped count', () => {
    const container = document.createElement('div');
    const game = new StressBusterGame(container);
    game.render();

    const bubbles = container.querySelectorAll('.bubble-wrap-cell');
    
    // Select first bubble and click it
    const firstBubble = bubbles[0] as HTMLButtonElement;
    expect(firstBubble.classList.contains('popped')).toBe(false);
    
    firstBubble.click();

    // Popping trigger state re-render
    const updatedBubbles = container.querySelectorAll('.bubble-wrap-cell');
    expect(updatedBubbles[0].classList.contains('popped')).toBe(true);
  });
});
