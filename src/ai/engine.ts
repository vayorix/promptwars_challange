import { mockScenarios, Scenario, Trigger, CognitiveReframing, CopingMechanism } from '../data/mockScenarios';
import { SYSTEM_PROMPT, createUserPrompt } from './prompts';

export interface AnalysisResult {
  sentiment: string;
  stressLevel: number;
  burnoutRisk: number;
  confidenceLevel: number;
  studyPressure: number;
  sleepQuality: number;
  triggers: Trigger[];
  cognitiveDistortions: CognitiveReframing[];
  copingMechanisms: CopingMechanism[];
  motivationAlert: string;
}

/**
 * Call the live Gemini API with structured JSON output configurations.
 */
async function callGemini(journalText: string, apiKey: string): Promise<AnalysisResult> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [
            { text: SYSTEM_PROMPT + '\n\n' + createUserPrompt(journalText) }
          ]
        }
      ],
      generationConfig: {
        responseMimeType: 'application/json'
      }
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) {
    throw new Error('Empty response from Gemini API');
  }

  try {
    const parsed: AnalysisResult = JSON.parse(rawText.trim());
    return parsed;
  } catch (err) {
    throw new Error('AI returned invalid JSON formatting. Please try again.');
  }
}

/**
 * Smart heuristic analyzer that generates a clinical wellness dashboard state locally
 * when no API key is available. It prevents the app from breaking.
 */
function analyzeHeuristically(text: string): AnalysisResult {
  const lowercase = text.toLowerCase();
  
  // Keyword mapping
  const stressWords = ['exam', 'test', 'final', 'grade', 'pressure', 'shake', 'anxious', 'panic', 'fear', 'fail', 'worry', 'stress', 'scared'];
  const burnoutWords = ['tired', 'exhausted', 'burnout', 'hollow', 'care', 'screen', 'break', 'concentrate', 'motivation', 'depleted', 'empty'];
  const confidenceWords = ['imposter', 'smart', 'worse', 'slower', 'better', 'others', 'compare', 'fraud', 'useless', 'fool', 'stupid', 'unable'];
  const parentalWords = ['dad', 'mom', 'parent', 'family', 'expectation', 'gpa', 'conditional', 'phone', 'call', 'surgeon', 'doctor', 'let down'];
  const sleepWords = ['sleep', 'night', 'all-nighter', 'insomnia', 'coffee', 'caffeine', 'energy drink', 'bed', 'awake', 'tired', 'rest'];

  const countMatches = (words: string[]) => {
    return words.reduce((acc, word) => {
      const regex = new RegExp(`\\b${word}\\b`, 'gi');
      const matches = lowercase.match(regex);
      return acc + (matches ? matches.length : 0);
    }, 0);
  };

  const stressCount = countMatches(stressWords);
  const burnoutCount = countMatches(burnoutWords);
  const confidenceCount = countMatches(confidenceWords);
  const parentalCount = countMatches(parentalWords);
  const sleepCount = countMatches(sleepWords);

  // Math-based metric calibration
  let stressLevel = Math.min(40 + (stressCount * 12) + (parentalCount * 8), 98);
  let burnoutRisk = Math.min(30 + (burnoutCount * 15) + (sleepCount * 8), 98);
  let confidenceLevel = Math.max(80 - (confidenceCount * 20) - (stressCount * 5), 10);
  let studyPressure = Math.min(50 + (stressCount * 10) + (parentalCount * 10), 98);
  let sleepQuality = Math.max(90 - (sleepCount * 25) - (burnoutCount * 5), 5);

  // If input is very short or empty, provide defaults
  if (text.trim().split(/\s+/).length < 5) {
    stressLevel = 30;
    burnoutRisk = 20;
    confidenceLevel = 75;
    studyPressure = 40;
    sleepQuality = 80;
  }

  // Determine primary state
  let sentiment = 'Calm & Balanced';
  const triggers: Trigger[] = [];
  const cognitiveDistortions: CognitiveReframing[] = [];
  const copingMechanisms: CopingMechanism[] = [];
  let motivationAlert = 'You are taking a positive step by journaling today. Keep tracking your mental state.';

  if (stressLevel > 75) {
    sentiment = 'High Anxiety & Academic Panic';
    triggers.push({ name: 'Upcoming assessments', category: 'Academic', impact: 'High' });
    cognitiveDistortions.push({
      originalThought: 'I must pass everything perfectly, or I am a failure.',
      distortionType: 'All-or-Nothing Thinking',
      reframedThought: 'Academic checkpoints do not define my human value. Making mistakes is how I learn.'
    });
    copingMechanisms.push({
      title: 'Academic Box Breathing',
      description: 'Slow down your heart rate. Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat 4 times.',
      duration: '4 minutes',
      type: 'Breathing'
    });
  }

  if (burnoutRisk > 75) {
    sentiment = 'Chronic Academic Fatigue & Depletion';
    triggers.push({ name: 'Prolonged studying without rest', category: 'Academic', impact: 'High' });
    cognitiveDistortions.push({
      originalThought: 'I can\'t afford to take a break. Breaks are lazy.',
      distortionType: 'Minimizing Physical Needs',
      reframedThought: 'Rest is not a reward; it is a physiological necessity. Taking a break restores my cognitive capability.'
    });
    copingMechanisms.push({
      title: 'Digital Curfew Block',
      description: 'Turn off your phone and laptop. Do something screen-free to let your eyes and brain rest.',
      duration: '1 hour',
      type: 'Habit'
    });
  }

  if (confidenceLevel < 35) {
    sentiment = 'Severe Imposter Syndrome & Doubt';
    triggers.push({ name: 'Comparing self with peers', category: 'Social', impact: 'High' });
    cognitiveDistortions.push({
      originalThought: 'Everyone else is smarter and doesn\'t struggle like I do.',
      distortionType: 'Mind Reading',
      reframedThought: 'I am comparing my internal struggles with other people\'s external highlights. Learning takes time for everyone.'
    });
    copingMechanisms.push({
      title: 'CBT Daily Wins Log',
      description: 'Write down three small things you successfully completed today, no matter how small they seem.',
      duration: '5 minutes',
      type: 'CBT'
    });
  }

  if (parentalCount > 0) {
    triggers.push({ name: 'External family expectations', category: 'Parental', impact: 'High' });
    cognitiveDistortions.push({
      originalThought: 'I will disappoint my family if I do not achieve perfect grades.',
      distortionType: 'Should Statements',
      reframedThought: 'I will perform best when I focus on my own learning journey. My worth to my family transcends my GPA.'
    });
  }

  if (sleepQuality < 40) {
    triggers.push({ name: 'Restless schedule & high caffeine', category: 'Sleep', impact: 'High' });
    copingMechanisms.push({
      title: 'Digital Sunset Pacing',
      description: 'Turn off screens 30 minutes before bed. Let your brain natural produce melatonin.',
      duration: '30 minutes',
      type: 'Action'
    });
  }

  // Populate generic fallbacks to ensure exactly 3 coping mechanisms
  while (copingMechanisms.length < 3) {
    const defaultCopes: CopingMechanism[] = [
      {
        title: '5-Minute Mind Dump',
        description: 'Write down all current thoughts, then throw the paper away to physically let them go.',
        duration: '5 minutes',
        type: 'CBT'
      },
      {
        title: 'Grounding Walk',
        description: 'Step outside. Find 5 things you can see, 4 things you can touch, and 3 things you can hear.',
        duration: '10 minutes',
        type: 'Action'
      },
      {
        title: 'Paced Breathing Reset',
        description: 'Inhale deeply for 5 seconds, exhale slowly for 5 seconds. Repeat 10 times to calm your nervous system.',
        duration: '3 minutes',
        type: 'Breathing'
      }
    ];
    
    // Add non-duplicate
    const candidate = defaultCopes.find(dc => !copingMechanisms.some(cm => cm.title === dc.title));
    if (candidate) {
      copingMechanisms.push(candidate);
    } else {
      break;
    }
  }

  // Set alert
  if (burnoutRisk > 80) {
    motivationAlert = 'Your energy reserves are extremely low. It is time to prioritize rest. Take a small step away from studying.';
  } else if (stressLevel > 80) {
    motivationAlert = 'You are experiencing high levels of academic stress. Try the Box Breathing reset to calm your mind before your next task.';
  } else if (confidenceLevel < 30) {
    motivationAlert = 'You are feeling unsure of yourself. Remember that learning is a process of small, consistent steps. You are capable.';
  } else {
    motivationAlert = 'Good job writing down your thoughts. Journaling regularly helps reduce cognitive clutter and builds academic resilience.';
  }

  return {
    sentiment,
    stressLevel,
    burnoutRisk,
    confidenceLevel,
    studyPressure,
    sleepQuality,
    triggers,
    cognitiveDistortions,
    copingMechanisms,
    motivationAlert
  };
}

/**
 * Analyzes a student's journal entry. First matches against pre-seeded scenarios for
 * instantaneous verification, otherwise calls the live Gemini API (if key is provided)
 * or falls back to a smart heuristic mental wellness analysis model.
 * 
 * @param text The raw journal entry text written by the student.
 * @param apiKey Optional API key passed from the UI. Falls back to environment variables.
 * @returns A promise resolving to the final Scenario analysis state.
 */
export async function analyzeJournal(text: string, apiKey?: string): Promise<Scenario> {
  // Check if this text matches any of the preseeded mock scenarios
  for (const scenario of Object.values(mockScenarios)) {
    if (text.trim() === scenario.journalText.trim()) {
      return { ...scenario };
    }
  }

  const activeKey = apiKey || import.meta.env.VITE_GEMINI_API_KEY || '';

  let result: AnalysisResult;
  if (activeKey && activeKey.trim() !== '') {
    try {
      result = await callGemini(text, activeKey);
    } catch (e) {
      result = analyzeHeuristically(text);
    }
  } else {
    result = analyzeHeuristically(text);
  }

  return {
    id: `custom-${Date.now()}`,
    name: 'Custom Journal Entry',
    tagline: 'Dynamically analyzed from your writing',
    avatar: '✍️',
    journalText: text,
    ...result
  };
}
