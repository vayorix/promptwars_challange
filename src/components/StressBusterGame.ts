import { stateManager } from '../data/state';

export class StressBusterGame {
  private container: HTMLElement;
  private activeTab: 'bubbles' | 'balloons' = 'bubbles';
  
  // Bubble Game State
  private poppedBubbles: boolean[] = Array(24).fill(false);
  
  // Balloon Game State
  private poppedBalloons: string[] = []; // Stores IDs of popped distortions
  private activeBalloons: Array<{ id: string; text: string; reframed: string; color: string; speed: number; x: number; y: number }> = [];
  private animationFrameId: number | null = null;

  constructor(container: HTMLElement) {
    this.container = container;
    stateManager.subscribe(() => {
      this.syncBalloonsWithScenario();
      this.render();
    });
    this.syncBalloonsWithScenario();
  }

  private syncBalloonsWithScenario() {
    const sc = stateManager.getState().currentScenario;
    
    // Create floating balloon objects for each cognitive distortion
    const colors = [
      'hsl(25, 60%, 80%)',  // Warm Clay tint
      'hsl(140, 25%, 80%)', // Sage tint
      'hsl(190, 40%, 80%)', // Light teal tint
      'hsl(45, 50%, 80%)'   // Warm Ochre tint
    ];

    this.activeBalloons = sc.cognitiveDistortions.map((cd, index) => {
      // Map to balloon coordinate state if not already popped
      return {
        id: `balloon-${index}`,
        text: cd.originalThought,
        reframed: cd.reframedThought,
        color: colors[index % colors.length],
        speed: 0.5 + Math.random() * 0.4,
        x: 10 + (index * 35) + Math.random() * 10,
        y: 80 + Math.random() * 15 // Starts at the bottom of the container
      };
    });
  }

  public render() {
    this.container.innerHTML = `
      <section class="stress-buster-card glass-panel" aria-labelledby="playroom-heading">
        <div class="card-header">
          <h2 id="playroom-heading" class="gradient-text">🍃 The Mindful Playroom</h2>
          <p class="card-sub">Take a cognitive break with tactile stress-relief activities designed to ground your focus.</p>
        </div>

        <!-- Tab Controls -->
        <div class="playroom-tabs">
          <button id="tab-bubbles-btn" class="tab-btn ${this.activeTab === 'bubbles' ? 'active' : ''}">🫧 Zen Bubble Popper</button>
          <button id="tab-balloons-btn" class="tab-btn ${this.activeTab === 'balloons' ? 'active' : ''}">🎈 Worry Balloon Popper</button>
        </div>

        <div class="playroom-content">
          ${this.activeTab === 'bubbles' ? this.renderBubbles() : this.renderBalloons()}
        </div>
      </section>
    `;

    this.bindEvents();
    if (this.activeTab === 'balloons') {
      this.startBalloonAnimation();
    } else {
      this.stopBalloonAnimation();
    }
  }

  private renderBubbles(): string {
    const poppedCount = this.poppedBubbles.filter(b => b).length;
    
    return `
      <div class="bubble-game-layout">
        <div class="game-instructions">
          <h3>Zen Bubble Popper</h3>
          <p>Tap bubbles to pop them. Enjoy the satisfying tactile feedback. Reset when done.</p>
          <div class="game-meta">
            <span>Popped: <strong>${poppedCount} / 24</strong></span>
            <button id="reset-bubbles-btn" class="secondary-btn btn-sm">Reset Bubble Wrap</button>
          </div>
        </div>

        <div class="bubbles-wrap-grid">
          ${this.poppedBubbles.map((isPopped, idx) => `
            <button 
              class="bubble-wrap-cell ${isPopped ? 'popped' : ''}" 
              data-idx="${idx}"
              aria-label="Bubble ${idx + 1}, ${isPopped ? 'popped' : 'unpopped'}"
            >
              <span class="bubble-inner"></span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  }

  private renderBalloons(): string {
    return `
      <div class="balloon-game-layout">
        <div class="game-instructions">
          <h3>Worry Balloon Popper</h3>
          <p>Your academic worries are floating up. Click a balloon to pop the negative thought and release its CBT reframing.</p>
        </div>

        <div class="balloon-floating-arena" id="balloon-arena">
          <!-- Balloons will be positioned dynamically here via style.left/bottom -->
          ${this.activeBalloons.map(b => {
            const isPopped = this.poppedBalloons.includes(b.id);
            if (isPopped) return '';
            return `
              <button 
                class="worry-balloon" 
                id="${b.id}"
                style="background-color: ${b.color}; left: ${b.x}%; bottom: ${b.y}%;"
                aria-label="Worry balloon: ${b.text}. Click to pop."
              >
                <span class="balloon-text">${b.text}</span>
                <span class="balloon-string"></span>
              </button>
            `;
          }).join('')}

          ${this.activeBalloons.length === 0 ? `
            <div class="empty-arena-message">
              <p>No worries floating today. Academic mind is clear!</p>
            </div>
          ` : ''}
        </div>

        <div class="garden-reframed-container">
          <h4>🍂 Garden of Resilient Thoughts</h4>
          <div class="reframed-leaves-list" id="reframed-leaves-list">
            ${this.poppedBalloons.length === 0 ? `
              <p class="empty-garden-text">Pop worry balloons above to harvest reframed thoughts here.</p>
            ` : this.activeBalloons.filter(b => this.poppedBalloons.includes(b.id)).map(b => `
              <div class="garden-leaf-card anim-drift-in">
                <span class="leaf-icon">🍃</span>
                <div class="leaf-content">
                  <span class="leaf-label">Reframed Mindset:</span>
                  <p class="leaf-text">"${b.reframed}"</p>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  private bindEvents() {
    const tabBubblesBtn = this.container.querySelector('#tab-bubbles-btn') as HTMLButtonElement;
    const tabBalloonsBtn = this.container.querySelector('#tab-balloons-btn') as HTMLButtonElement;

    if (tabBubblesBtn) {
      tabBubblesBtn.addEventListener('click', () => {
        this.activeTab = 'bubbles';
        this.render();
      });
    }

    if (tabBalloonsBtn) {
      tabBalloonsBtn.addEventListener('click', () => {
        this.activeTab = 'balloons';
        this.render();
      });
    }

    // Bubbles events
    if (this.activeTab === 'bubbles') {
      const bubbleCells = this.container.querySelectorAll('.bubble-wrap-cell');
      const resetBtn = this.container.querySelector('#reset-bubbles-btn') as HTMLButtonElement;

      bubbleCells.forEach(cell => {
        cell.addEventListener('click', () => {
          const idx = parseInt(cell.getAttribute('data-idx') || '0', 10);
          if (!this.poppedBubbles[idx]) {
            this.poppedBubbles[idx] = true;
            this.synthesizePopSound(600, 0.05); // Play high-pitched pop
            this.render();
          }
        });
      });

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.poppedBubbles = Array(24).fill(false);
          this.synthesizePopSound(300, 0.15); // Play low confirmation sound
          this.render();
        });
      }
    }

    // Balloons events
    if (this.activeTab === 'balloons') {
      const balloons = this.container.querySelectorAll('.worry-balloon');
      balloons.forEach(bal => {
        bal.addEventListener('click', () => {
          const id = bal.getAttribute('id');
          if (id && !this.poppedBalloons.includes(id)) {
            this.poppedBalloons.push(id);
            this.synthesizePopSound(450, 0.1); // Play popping sound
            this.render();
          }
        });
      });
    }
  }

  private startBalloonAnimation() {
    this.stopBalloonAnimation();
    
    const animate = () => {
      let changed = false;

      this.activeBalloons.forEach(b => {
        if (!this.poppedBalloons.includes(b.id)) {
          b.y += b.speed;
          // Loop balloon back to bottom if it floats out of view
          if (b.y > 105) {
            b.y = -15;
            b.x = 10 + Math.random() * 80;
          }
          changed = true;
        }
      });

      if (changed) {
        // Update DOM element positions directly for performance (60fps)
        this.activeBalloons.forEach(b => {
          const el = this.container.querySelector(`#${b.id}`) as HTMLElement;
          if (el) {
            el.style.bottom = `${b.y}%`;
            el.style.left = `${b.x}%`;
          }
        });
      }

      this.animationFrameId = requestAnimationFrame(animate);
    };

    this.animationFrameId = requestAnimationFrame(animate);
  }

  private stopBalloonAnimation() {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  private synthesizePopSound(frequency: number, duration: number) {
    try {
      const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(frequency, ctx.currentTime);
      // Quickly ramp pitch down to simulate pop closure
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + duration);

      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      // AudioContext fallback for browsers blocking auto-play audio
      console.log('Audio feedback postponed until user interaction.');
    }
  }
}
export default StressBusterGame;
