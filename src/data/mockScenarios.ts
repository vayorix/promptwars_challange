export interface Trigger {
  name: string;
  category: 'Academic' | 'Parental' | 'Social' | 'Sleep' | 'Other';
  impact: 'High' | 'Medium' | 'Low';
}

export interface CognitiveReframing {
  originalThought: string;
  distortionType: string;
  reframedThought: string;
}

export interface CopingMechanism {
  title: string;
  description: string;
  duration: string;
  type: 'Breathing' | 'CBT' | 'Habit' | 'Action';
}

export interface Scenario {
  id: string;
  name: string;
  tagline: string;
  avatar: string;
  journalText: string;
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

export const mockScenarios: Record<string, Scenario> = {
  'exam-anxiety': {
    id: 'exam-anxiety',
    name: 'Sarah (Exam Anxiety)',
    tagline: 'Paralyzed by upcoming final exams',
    avatar: '📚',
    journalText: 'The finals are next week. I can\'t sleep, my hands shake when I think about the math exam. What if I fail and fail the whole course? My mind goes completely blank when I look at practice questions. I\'ve been studying for 10 hours a day but it feels like nothing is staying in my head.',
    sentiment: 'High Anxiety & Academic Panic',
    stressLevel: 88,
    burnoutRisk: 45,
    confidenceLevel: 30,
    studyPressure: 90,
    sleepQuality: 35,
    triggers: [
      { name: 'Math final exam', category: 'Academic', impact: 'High' },
      { name: 'Practice tests', category: 'Academic', impact: 'Medium' },
      { name: 'Time pressure', category: 'Academic', impact: 'High' }
    ],
    cognitiveDistortions: [
      {
        originalThought: 'If I fail this math exam, I fail the whole course and my career is over.',
        distortionType: 'Catastrophizing',
        reframedThought: 'A single exam is a checkpoint, not a final verdict. Even if I fail, I have options to retake it, adjust my schedule, or seek help. I am more than my exam grades.'
      },
      {
        originalThought: 'Nothing is staying in my head, I know I will go completely blank.',
        distortionType: 'Predicting the Future',
        reframedThought: 'I am currently anxious, which makes recall feel harder. As I calm down and use structured recall, my memory will function. I have prepared and will recall what I need.'
      }
    ],
    copingMechanisms: [
      {
        title: 'Calm Box Breathing',
        description: 'Paced breathing to reduce autonomic nervous system arousal. Resets your fight-or-flight reflex before studying.',
        duration: '4 minutes',
        type: 'Breathing'
      },
      {
        title: '5-Minute Brain Dump',
        description: 'Write down every single worry on a scrap sheet of paper, then crumple it up and throw it away to externalize your anxiety.',
        duration: '5 minutes',
        type: 'CBT'
      },
      {
        title: 'Chunked Recall Study Method',
        description: 'Study in 25-minute blocks followed by 5 minutes of quiet eyes-closed reflection (no phone) to consolidate memory.',
        duration: '30 minutes',
        type: 'Habit'
      }
    ],
    motivationAlert: 'Sarah, remember that your brain is a muscle that needs recovery to perform. Anxiety is just an alarm system running too high; you have the tools to tune it down. Take one breath and one problem at a time.'
  },
  'burnout': {
    id: 'burnout',
    name: 'Alex (Severe Burnout)',
    tagline: 'Depleted by non-stop academic grind',
    avatar: '🔋',
    journalText: 'I don\'t care about my grades anymore. I am so tired all the time. I\'ve been working on this research project for six months without a single day off, and now even looking at my computer screen makes me feel physically sick. I can\'t concentrate. I feel completely hollow inside.',
    sentiment: 'Severe Burnout & Emotional Exhaustion',
    stressLevel: 75,
    burnoutRisk: 92,
    confidenceLevel: 40,
    studyPressure: 85,
    sleepQuality: 40,
    triggers: [
      { name: '6 months without breaks', category: 'Academic', impact: 'High' },
      { name: 'Computer screen fatigue', category: 'Sleep', impact: 'Medium' },
      { name: 'Research project milestones', category: 'Academic', impact: 'High' }
    ],
    cognitiveDistortions: [
      {
        originalThought: 'I must finish this paper perfectly right now or I am a complete failure.',
        distortionType: 'All-or-Nothing Thinking',
        reframedThought: 'Writing an imperfect draft is a normal part of the process. I am a human being who needs rest, and taking a break does not make me a failure; it makes me sustainable.'
      },
      {
        originalThought: 'I\'ll never recover my energy or care about my studies again.',
        distortionType: 'Overgeneralization',
        reframedThought: 'I am currently in an acute state of burnout, which is a physiological response to prolonged stress. With rest and boundaries, my energy and motivation will return.'
      }
    ],
    copingMechanisms: [
      {
        title: 'Digital Curfew & Screens-Off',
        description: 'Turn off all electronic devices for a designated block. Engage in sensory-soothing activities (bath, walk, reading paper book).',
        duration: '2 hours',
        type: 'Habit'
      },
      {
        title: 'Rest without Guilt Exercise',
        description: 'Set a timer for 30 minutes where your ONLY job is to do absolutely nothing productive. If guilt arises, acknowledge it and refocus on resting.',
        duration: '30 minutes',
        type: 'CBT'
      },
      {
        title: 'Somatic Grounding Walk',
        description: 'Walk outside without headphones. Focus strictly on identifying 5 things you can see, 4 things you can feel, 3 things you can hear.',
        duration: '15 minutes',
        type: 'Action'
      }
    ],
    motivationAlert: 'Alex, burnout is your body\'s check-engine light. It is not a sign of weakness; it is a sign that you have been strong for too long. Give yourself permission to pause today. The project can wait.'
  },
  'low-confidence': {
    id: 'low-confidence',
    name: 'David (Low Confidence)',
    tagline: 'Struggling with Imposter Syndrome',
    avatar: '😔',
    journalText: 'Everyone else in my computer science class seems to understand the concepts so easily. I spend hours trying to debug a single function, while they finish the lab in 20 minutes. I feel like an imposter. Maybe I\'m just not cut out for this field.',
    sentiment: 'Severe Imposter Syndrome & Inadequacy',
    stressLevel: 65,
    burnoutRisk: 50,
    confidenceLevel: 15,
    studyPressure: 70,
    sleepQuality: 60,
    triggers: [
      { name: 'Lab debugging sessions', category: 'Academic', impact: 'High' },
      { name: 'Social comparison in class', category: 'Social', impact: 'High' }
    ],
    cognitiveDistortions: [
      {
        originalThought: 'Everyone else is smarter and coding is easy for them; I\'m the only one struggling.',
        distortionType: 'Mind Reading & Filter Bias',
        reframedThought: 'I only see others\' final outputs, not their struggles, preparation, or private failures. Coding is difficult for everyone learning it. My struggle is standard learning, not incompetence.'
      },
      {
        originalThought: 'Struggling with this lab means I am not cut out to be a software engineer.',
        distortionType: 'Labeling & Labeling',
        reframedThought: 'Difficulty debugging a lab is an opportunity to learn. It does not dictate my long-term aptitude. Engineers solve hard problems; struggling is just doing the work.'
      }
    ],
    copingMechanisms: [
      {
        title: 'Imposter Syndrome Reframing',
        description: 'Remind yourself that being in a room where you feel challenged means you are growing. Write down 3 things you successfully coded this week.',
        duration: '10 minutes',
        type: 'CBT'
      },
      {
        title: 'The "Wins Log" Routine',
        description: 'Keep a small notebook. Every time you fix a bug, solve an equation, or understand a concept, write it down. Review it when confidence drops.',
        duration: '5 minutes',
        type: 'Habit'
      },
      {
        title: 'Timed Debugging Limit',
        description: 'Set a rule: if you are stuck on a bug for more than 25 minutes, you MUST step away for 5 minutes or ask a peer/instructor. Do not bang your head against the wall.',
        duration: '30 minutes',
        type: 'Action'
      }
    ],
    motivationAlert: 'David, imposter syndrome is highly common among high achievers. The fact that you care so much shows your potential. You are not an imposter; you are a learner, and learning is supposed to feel challenging.'
  },
  'parental-pressure': {
    id: 'parental-pressure',
    name: 'Maya (Parental Pressure)',
    tagline: 'Overwhelmed by high family expectations',
    avatar: '👨‍👩‍👧',
    journalText: 'My dad called today and asked if I\'m still on track for a 4.0 GPA. He keeps telling everyone in the family that I\'m going to be a top surgeon. I feel like a fraud. I\'m struggling in organic chemistry, and I\'m terrified of letting them down. Their love feels like it\'s conditional on my GPA.',
    sentiment: 'High External Pressure & Fear of Rejection',
    stressLevel: 92,
    burnoutRisk: 60,
    confidenceLevel: 35,
    studyPressure: 98,
    sleepQuality: 45,
    triggers: [
      { name: 'Dad\'s calls about GPA', category: 'Parental', impact: 'High' },
      { name: 'Organic chemistry grades', category: 'Academic', impact: 'High' },
      { name: 'Family comparisons', category: 'Parental', impact: 'Medium' }
    ],
    cognitiveDistortions: [
      {
        originalThought: 'I must get a 4.0 GPA to be worthy of my parents\' love and support.',
        distortionType: 'Should Statements & Conditional Worth',
        reframedThought: 'My parents\' pride is their own emotion, which I cannot control. My value as a person is inherent and not tied to a decimal point. I deserve care regardless of my grades.'
      },
      {
        originalThought: 'Struggling in organic chemistry means I am failing my entire family.',
        distortionType: 'Overgeneralization',
        reframedThought: 'Organic chemistry is a notoriously difficult filter class. Struggling in it is a normal academic challenge, not a betrayal of my family. I can seek tutoring.'
      }
    ],
    copingMechanisms: [
      {
        title: 'Communication Script Prep',
        description: 'Write down and practice a boundary-setting script: "Dad, I am working extremely hard, but discussing my GPA increases my stress. I\'d love to talk about what I\'m learning instead."',
        duration: '15 minutes',
        type: 'CBT'
      },
      {
        title: 'Self-Compassion Meditation',
        description: 'Close your eyes. Place a hand on your heart and repeat: "May I be kind to myself. My worth is not defined by external expectations."',
        duration: '5 minutes',
        type: 'Breathing'
      },
      {
        title: 'Academic Separator Walk',
        description: 'Walk somewhere that has nothing to do with school. Engage with a hobby, art, or nature to remind yourself that the academic world is just one sliver of life.',
        duration: '20 minutes',
        type: 'Action'
      }
    ],
    motivationAlert: 'Maya, you are living your life, not your parents\'. It is okay to set boundaries and protect your peace. You are allowed to be an imperfect human being who is doing their best.'
  },
  'sleep-deprived': {
    id: 'sleep-deprived',
    name: 'Ethan (Sleep Deprived)',
    tagline: 'Wired and tired from consecutive all-nighters',
    avatar: '☕',
    journalText: 'I\'ve been pulling all-nighters for three days straight to finish my engineering portfolio. I survived on four energy drinks and two cups of coffee today. My head is pounding, my eyes are blurry, and I can\'t remember what I read five minutes ago. I feel wired but completely useless.',
    sentiment: 'Acute Sleep Deprivation & Caffeine Overload',
    stressLevel: 85,
    burnoutRisk: 78,
    confidenceLevel: 50,
    studyPressure: 80,
    sleepQuality: 10,
    triggers: [
      { name: 'Engineering portfolio deadline', category: 'Academic', impact: 'High' },
      { name: 'Four energy drinks', category: 'Sleep', impact: 'High' },
      { name: 'All-nighters', category: 'Sleep', impact: 'High' }
    ],
    cognitiveDistortions: [
      {
        originalThought: 'Sleep is a luxury I cannot afford right now. If I sleep, I will fail the deadline.',
        distortionType: 'Minimizing Physical Needs',
        reframedThought: 'My brain is severely impaired by lack of sleep. 4 hours of sleep will double my cognitive processing speed and eliminate simple mistakes, meaning I will finish faster and better.'
      },
      {
        originalThought: 'I can offset my lack of sleep with more caffeine.',
        distortionType: 'Delusion of Control',
        reframedThought: 'Caffeine blocks adenosine receptors but does not restore cognitive function, memory consolidation, or motor speed. I need actual sleep, not more chemical stimulation.'
      }
    ],
    copingMechanisms: [
      {
        title: '20-Minute Power Nap',
        description: 'Set an alarm for exactly 25 minutes. Lie in a dark room. Even if you do not fall asleep, closed-eye rest restores motor performance and focus.',
        duration: '25 minutes',
        type: 'Action'
      },
      {
        title: 'Caffeine Washout Protocol',
        description: 'Stop all caffeine consumption. Drink 500ml of water immediately to flush toxins and combat caffeine-induced dehydration and headaches.',
        duration: '10 minutes',
        type: 'Habit'
      },
      {
        title: 'Progressive Muscle Relaxation',
        description: 'Help release the nervous "wired" feeling from caffeine and exhaustion. Tense and release each muscle group starting from toes to face.',
        duration: '10 minutes',
        type: 'Breathing'
      }
    ],
    motivationAlert: 'Ethan, your engineering portfolio is important, but a sleep-deprived brain makes 3x more errors. Rest is not a reward for work; it is the fuel that makes work possible. Go sleep, even if just for a few hours.'
  }
};
