import { describe, it, expect } from 'vitest';
import { analyzeJournal } from '../ai/engine';
import { mockScenarios } from '../data/mockScenarios';

describe('AI Reasoning Engine Tests', () => {
  
  it('should resolve pre-seeded mock scenarios by matching text', async () => {
    const input = mockScenarios['exam-anxiety'].journalText;
    const result = await analyzeJournal(input);
    
    expect(result.id).toBe('exam-anxiety');
    expect(result.stressLevel).toBe(88);
    expect(result.burnoutRisk).toBe(45);
    expect(result.confidenceLevel).toBe(30);
    expect(result.studyPressure).toBe(90);
    expect(result.sleepQuality).toBe(35);
    expect(result.triggers.length).toBeGreaterThan(0);
    expect(result.cognitiveDistortions.length).toBeGreaterThan(0);
  });

  it('should fall back to heuristic analyzer for custom text when no API key is provided', async () => {
    const customText = 'I am so tired. I have been studying all night for my math exam. My parents keep asking for my GPA. I feel like an imposter.';
    const result = await analyzeJournal(customText);

    expect(result.id).toContain('custom-');
    // Heuristic math rules:
    // "tired" -> burnout words
    // "exam", "math" -> stress words
    // "imposter" -> confidence words
    // "parents", "gpa" -> parental words
    // "all-nighter", "sleep" -> sleep words
    
    expect(result.stressLevel).toBeGreaterThan(50);
    expect(result.burnoutRisk).toBeGreaterThan(30);
    expect(result.confidenceLevel).toBeLessThan(70);
    expect(result.studyPressure).toBeGreaterThan(50);
    expect(result.sleepQuality).toBeLessThan(85);
  });

  it('should generate structured triggers, CBT reframing, and coping mechanisms locally', async () => {
    const customText = 'My dad called and pressured me about organic chemistry. I am terrified of failing my exam.';
    const result = await analyzeJournal(customText);

    // Triggers
    const parentalTrigger = result.triggers.find(t => t.category === 'Parental');
    expect(parentalTrigger).toBeDefined();
    expect(parentalTrigger?.name).toContain('expectations');

    // CBT cards
    expect(result.cognitiveDistortions.length).toBeGreaterThan(0);
    expect(result.cognitiveDistortions[0].distortionType).toBe('Should Statements');

    // Coping
    expect(result.copingMechanisms.length).toBe(3);
    const breathingCope = result.copingMechanisms.find(c => c.type === 'Breathing');
    expect(breathingCope).toBeDefined();
  });

  it('should handle short or empty text input gracefully', async () => {
    const emptyText = '   ';
    const result = await analyzeJournal(emptyText);

    // Should return default safe scores rather than throwing errors
    expect(result.stressLevel).toBe(30);
    expect(result.burnoutRisk).toBe(20);
    expect(result.confidenceLevel).toBe(75);
    expect(result.studyPressure).toBe(40);
    expect(result.sleepQuality).toBe(80);
    expect(result.copingMechanisms.length).toBe(3);
  });
});
