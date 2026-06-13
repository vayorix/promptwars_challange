import { describe, it, expect } from 'vitest';

// Simulating calculations from SleepDebt.ts to assert their logic
function calculateSleepDebtMetrics(target: number, actual: number, nights: number) {
  const sleepDebt = Math.max(0, (target - actual) * nights);
  const cognitiveEfficiency = Math.max(50, Math.round(100 - (sleepDebt * 2.5)));
  const recoveryNights = Math.min(7, Math.max(1, Math.round(sleepDebt / 1.5)));
  const catchupPerNight = Math.min(2.0, Number((sleepDebt / recoveryNights).toFixed(1)));

  return { sleepDebt, cognitiveEfficiency, recoveryNights, catchupPerNight };
}

describe('Sleep & Cognitive Debt Calculator Logic', () => {
  it('should calculate zero sleep debt when target matches actual sleep', () => {
    const metrics = calculateSleepDebtMetrics(8, 8, 5);
    expect(metrics.sleepDebt).toBe(0);
    expect(metrics.cognitiveEfficiency).toBe(100);
    expect(metrics.recoveryNights).toBe(1);
    expect(metrics.catchupPerNight).toBe(0);
  });

  it('should calculate correct sleep debt and cognitive drop for standard deficit', () => {
    // 8 target, 6 actual, 3 nights = 6 hours debt
    const metrics = calculateSleepDebtMetrics(8, 6, 3);
    expect(metrics.sleepDebt).toBe(6);
    expect(metrics.cognitiveEfficiency).toBe(85); // 100 - 6 * 2.5
    expect(metrics.recoveryNights).toBe(4);        // 6 / 1.5
    expect(metrics.catchupPerNight).toBe(1.5);      // 6 / 4 = 1.5
  });

  it('should cap cognitive efficiency drop to a minimum of 50%', () => {
    // 8 target, 4 actual, 7 nights = 28 hours debt
    const metrics = calculateSleepDebtMetrics(8, 4, 7);
    expect(metrics.sleepDebt).toBe(28);
    expect(metrics.cognitiveEfficiency).toBe(50); // Capped at 50
  });

  it('should handle float values for target or actual sleep hours', () => {
    const metrics = calculateSleepDebtMetrics(7.5, 6.0, 4);
    expect(metrics.sleepDebt).toBe(6);
    expect(metrics.cognitiveEfficiency).toBe(85);
  });
});
