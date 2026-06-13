import { Scenario, mockScenarios } from './mockScenarios';

export interface AppState {
  apiKey: string;
  currentScenario: Scenario;
  history: Scenario[];
}

const DEFAULT_STATE: AppState = {
  apiKey: localStorage.getItem('calmscholar_api_key') || '',
  currentScenario: { ...mockScenarios['exam-anxiety'] }, // Seed with default
  history: JSON.parse(localStorage.getItem('calmscholar_history') || '[]')
};

class StateManager {
  private state: AppState = { ...DEFAULT_STATE };
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Save initial history if empty
    if (this.state.history.length === 0) {
      this.state.history = [
        { ...mockScenarios['exam-anxiety'] },
        { ...mockScenarios['burnout'] },
        { ...mockScenarios['low-confidence'] }
      ];
      this.saveHistory();
    }
  }

  public getState(): AppState {
    return this.state;
  }

  public setApiKey(key: string) {
    this.state.apiKey = key;
    localStorage.setItem('calmscholar_api_key', key);
    this.notify();
  }

  public updateScenario(scenario: Scenario) {
    this.state.currentScenario = scenario;
    
    // Add to history (avoid duplicates)
    const exists = this.state.history.find(h => h.id === scenario.id || (h.journalText === scenario.journalText && h.id.startsWith('custom')));
    if (!exists) {
      this.state.history = [scenario, ...this.state.history.slice(0, 19)]; // Keep last 20
      this.saveHistory();
    }
    this.notify();
  }

  public clearHistory() {
    this.state.history = [];
    this.saveHistory();
    this.notify();
  }

  private saveHistory() {
    localStorage.setItem('calmscholar_history', JSON.stringify(this.state.history));
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach(listener => listener());
  }
}

export const stateManager = new StateManager();
export type { Scenario };
export { mockScenarios };
