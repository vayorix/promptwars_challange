var M=Object.defineProperty;var E=(o,e,t)=>e in o?M(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var c=(o,e,t)=>E(o,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();const m={"exam-anxiety":{id:"exam-anxiety",name:"Sarah (Exam Anxiety)",tagline:"Paralyzed by upcoming final exams",avatar:"📚",journalText:"The finals are next week. I can't sleep, my hands shake when I think about the math exam. What if I fail and fail the whole course? My mind goes completely blank when I look at practice questions. I've been studying for 10 hours a day but it feels like nothing is staying in my head.",sentiment:"High Anxiety & Academic Panic",stressLevel:88,burnoutRisk:45,confidenceLevel:30,studyPressure:90,sleepQuality:35,triggers:[{name:"Math final exam",category:"Academic",impact:"High"},{name:"Practice tests",category:"Academic",impact:"Medium"},{name:"Time pressure",category:"Academic",impact:"High"}],cognitiveDistortions:[{originalThought:"If I fail this math exam, I fail the whole course and my career is over.",distortionType:"Catastrophizing",reframedThought:"A single exam is a checkpoint, not a final verdict. Even if I fail, I have options to retake it, adjust my schedule, or seek help. I am more than my exam grades."},{originalThought:"Nothing is staying in my head, I know I will go completely blank.",distortionType:"Predicting the Future",reframedThought:"I am currently anxious, which makes recall feel harder. As I calm down and use structured recall, my memory will function. I have prepared and will recall what I need."}],copingMechanisms:[{title:"Calm Box Breathing",description:"Paced breathing to reduce autonomic nervous system arousal. Resets your fight-or-flight reflex before studying.",duration:"4 minutes",type:"Breathing"},{title:"5-Minute Brain Dump",description:"Write down every single worry on a scrap sheet of paper, then crumple it up and throw it away to externalize your anxiety.",duration:"5 minutes",type:"CBT"},{title:"Chunked Recall Study Method",description:"Study in 25-minute blocks followed by 5 minutes of quiet eyes-closed reflection (no phone) to consolidate memory.",duration:"30 minutes",type:"Habit"}],motivationAlert:"Sarah, remember that your brain is a muscle that needs recovery to perform. Anxiety is just an alarm system running too high; you have the tools to tune it down. Take one breath and one problem at a time."},burnout:{id:"burnout",name:"Alex (Severe Burnout)",tagline:"Depleted by non-stop academic grind",avatar:"🔋",journalText:"I don't care about my grades anymore. I am so tired all the time. I've been working on this research project for six months without a single day off, and now even looking at my computer screen makes me feel physically sick. I can't concentrate. I feel completely hollow inside.",sentiment:"Severe Burnout & Emotional Exhaustion",stressLevel:75,burnoutRisk:92,confidenceLevel:40,studyPressure:85,sleepQuality:40,triggers:[{name:"6 months without breaks",category:"Academic",impact:"High"},{name:"Computer screen fatigue",category:"Sleep",impact:"Medium"},{name:"Research project milestones",category:"Academic",impact:"High"}],cognitiveDistortions:[{originalThought:"I must finish this paper perfectly right now or I am a complete failure.",distortionType:"All-or-Nothing Thinking",reframedThought:"Writing an imperfect draft is a normal part of the process. I am a human being who needs rest, and taking a break does not make me a failure; it makes me sustainable."},{originalThought:"I'll never recover my energy or care about my studies again.",distortionType:"Overgeneralization",reframedThought:"I am currently in an acute state of burnout, which is a physiological response to prolonged stress. With rest and boundaries, my energy and motivation will return."}],copingMechanisms:[{title:"Digital Curfew & Screens-Off",description:"Turn off all electronic devices for a designated block. Engage in sensory-soothing activities (bath, walk, reading paper book).",duration:"2 hours",type:"Habit"},{title:"Rest without Guilt Exercise",description:"Set a timer for 30 minutes where your ONLY job is to do absolutely nothing productive. If guilt arises, acknowledge it and refocus on resting.",duration:"30 minutes",type:"CBT"},{title:"Somatic Grounding Walk",description:"Walk outside without headphones. Focus strictly on identifying 5 things you can see, 4 things you can feel, 3 things you can hear.",duration:"15 minutes",type:"Action"}],motivationAlert:"Alex, burnout is your body's check-engine light. It is not a sign of weakness; it is a sign that you have been strong for too long. Give yourself permission to pause today. The project can wait."},"low-confidence":{id:"low-confidence",name:"David (Low Confidence)",tagline:"Struggling with Imposter Syndrome",avatar:"😔",journalText:"Everyone else in my computer science class seems to understand the concepts so easily. I spend hours trying to debug a single function, while they finish the lab in 20 minutes. I feel like an imposter. Maybe I'm just not cut out for this field.",sentiment:"Severe Imposter Syndrome & Inadequacy",stressLevel:65,burnoutRisk:50,confidenceLevel:15,studyPressure:70,sleepQuality:60,triggers:[{name:"Lab debugging sessions",category:"Academic",impact:"High"},{name:"Social comparison in class",category:"Social",impact:"High"}],cognitiveDistortions:[{originalThought:"Everyone else is smarter and coding is easy for them; I'm the only one struggling.",distortionType:"Mind Reading & Filter Bias",reframedThought:"I only see others' final outputs, not their struggles, preparation, or private failures. Coding is difficult for everyone learning it. My struggle is standard learning, not incompetence."},{originalThought:"Struggling with this lab means I am not cut out to be a software engineer.",distortionType:"Labeling & Labeling",reframedThought:"Difficulty debugging a lab is an opportunity to learn. It does not dictate my long-term aptitude. Engineers solve hard problems; struggling is just doing the work."}],copingMechanisms:[{title:"Imposter Syndrome Reframing",description:"Remind yourself that being in a room where you feel challenged means you are growing. Write down 3 things you successfully coded this week.",duration:"10 minutes",type:"CBT"},{title:'The "Wins Log" Routine',description:"Keep a small notebook. Every time you fix a bug, solve an equation, or understand a concept, write it down. Review it when confidence drops.",duration:"5 minutes",type:"Habit"},{title:"Timed Debugging Limit",description:"Set a rule: if you are stuck on a bug for more than 25 minutes, you MUST step away for 5 minutes or ask a peer/instructor. Do not bang your head against the wall.",duration:"30 minutes",type:"Action"}],motivationAlert:"David, imposter syndrome is highly common among high achievers. The fact that you care so much shows your potential. You are not an imposter; you are a learner, and learning is supposed to feel challenging."},"parental-pressure":{id:"parental-pressure",name:"Maya (Parental Pressure)",tagline:"Overwhelmed by high family expectations",avatar:"👨‍👩‍👧",journalText:"My dad called today and asked if I'm still on track for a 4.0 GPA. He keeps telling everyone in the family that I'm going to be a top surgeon. I feel like a fraud. I'm struggling in organic chemistry, and I'm terrified of letting them down. Their love feels like it's conditional on my GPA.",sentiment:"High External Pressure & Fear of Rejection",stressLevel:92,burnoutRisk:60,confidenceLevel:35,studyPressure:98,sleepQuality:45,triggers:[{name:"Dad's calls about GPA",category:"Parental",impact:"High"},{name:"Organic chemistry grades",category:"Academic",impact:"High"},{name:"Family comparisons",category:"Parental",impact:"Medium"}],cognitiveDistortions:[{originalThought:"I must get a 4.0 GPA to be worthy of my parents' love and support.",distortionType:"Should Statements & Conditional Worth",reframedThought:"My parents' pride is their own emotion, which I cannot control. My value as a person is inherent and not tied to a decimal point. I deserve care regardless of my grades."},{originalThought:"Struggling in organic chemistry means I am failing my entire family.",distortionType:"Overgeneralization",reframedThought:"Organic chemistry is a notoriously difficult filter class. Struggling in it is a normal academic challenge, not a betrayal of my family. I can seek tutoring."}],copingMechanisms:[{title:"Communication Script Prep",description:`Write down and practice a boundary-setting script: "Dad, I am working extremely hard, but discussing my GPA increases my stress. I'd love to talk about what I'm learning instead."`,duration:"15 minutes",type:"CBT"},{title:"Self-Compassion Meditation",description:'Close your eyes. Place a hand on your heart and repeat: "May I be kind to myself. My worth is not defined by external expectations."',duration:"5 minutes",type:"Breathing"},{title:"Academic Separator Walk",description:"Walk somewhere that has nothing to do with school. Engage with a hobby, art, or nature to remind yourself that the academic world is just one sliver of life.",duration:"20 minutes",type:"Action"}],motivationAlert:"Maya, you are living your life, not your parents'. It is okay to set boundaries and protect your peace. You are allowed to be an imperfect human being who is doing their best."},"sleep-deprived":{id:"sleep-deprived",name:"Ethan (Sleep Deprived)",tagline:"Wired and tired from consecutive all-nighters",avatar:"☕",journalText:"I've been pulling all-nighters for three days straight to finish my engineering portfolio. I survived on four energy drinks and two cups of coffee today. My head is pounding, my eyes are blurry, and I can't remember what I read five minutes ago. I feel wired but completely useless.",sentiment:"Acute Sleep Deprivation & Caffeine Overload",stressLevel:85,burnoutRisk:78,confidenceLevel:50,studyPressure:80,sleepQuality:10,triggers:[{name:"Engineering portfolio deadline",category:"Academic",impact:"High"},{name:"Four energy drinks",category:"Sleep",impact:"High"},{name:"All-nighters",category:"Sleep",impact:"High"}],cognitiveDistortions:[{originalThought:"Sleep is a luxury I cannot afford right now. If I sleep, I will fail the deadline.",distortionType:"Minimizing Physical Needs",reframedThought:"My brain is severely impaired by lack of sleep. 4 hours of sleep will double my cognitive processing speed and eliminate simple mistakes, meaning I will finish faster and better."},{originalThought:"I can offset my lack of sleep with more caffeine.",distortionType:"Delusion of Control",reframedThought:"Caffeine blocks adenosine receptors but does not restore cognitive function, memory consolidation, or motor speed. I need actual sleep, not more chemical stimulation."}],copingMechanisms:[{title:"20-Minute Power Nap",description:"Set an alarm for exactly 25 minutes. Lie in a dark room. Even if you do not fall asleep, closed-eye rest restores motor performance and focus.",duration:"25 minutes",type:"Action"},{title:"Caffeine Washout Protocol",description:"Stop all caffeine consumption. Drink 500ml of water immediately to flush toxins and combat caffeine-induced dehydration and headaches.",duration:"10 minutes",type:"Habit"},{title:"Progressive Muscle Relaxation",description:'Help release the nervous "wired" feeling from caffeine and exhaustion. Tense and release each muscle group starting from toes to face.',duration:"10 minutes",type:"Breathing"}],motivationAlert:"Ethan, your engineering portfolio is important, but a sleep-deprived brain makes 3x more errors. Rest is not a reward for work; it is the fuel that makes work possible. Go sleep, even if just for a few hours."}},R={apiKey:localStorage.getItem("calmscholar_api_key")||"",currentScenario:{...m["exam-anxiety"]},history:JSON.parse(localStorage.getItem("calmscholar_history")||"[]")};class j{constructor(){c(this,"state",{...R});c(this,"listeners",new Set);this.state.history.length===0&&(this.state.history=[{...m["exam-anxiety"]},{...m.burnout},{...m["low-confidence"]}],this.saveHistory())}getState(){return this.state}setApiKey(e){this.state.apiKey=e,localStorage.setItem("calmscholar_api_key",e),this.notify()}updateScenario(e){this.state.currentScenario=e,this.state.history.find(a=>a.id===e.id||a.journalText===e.journalText&&a.id.startsWith("custom"))||(this.state.history=[e,...this.state.history.slice(0,19)],this.saveHistory()),this.notify()}clearHistory(){this.state.history=[],this.saveHistory(),this.notify()}saveHistory(){localStorage.setItem("calmscholar_history",JSON.stringify(this.state.history))}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e())}}const d=new j,H=`You are CalmScholar.AI, an empathetic AI Clinical Psychology Research Assistant and Student Wellness Coach.
Your task is to analyze a student's journal entry and output a structured JSON analysis of their mental wellness, stress levels, burnout risk, confidence, and cognitive distortions.

You must follow these rules strictly:
1. Output ONLY a valid JSON object. Do not include markdown code block formatting (like \`\`\`json ... \`\`\`) or any text outside the JSON.
2. The JSON structure MUST match the following interface:
{
  "sentiment": string,              // Summary of the emotional tone (e.g. "Anxious & Overwhelmed")
  "stressLevel": number,             // Score from 0 to 100
  "burnoutRisk": number,             // Score from 0 to 100
  "confidenceLevel": number,         // Score from 0 to 100
  "studyPressure": number,           // Score from 0 to 100
  "sleepQuality": number,            // Score from 0 to 100
  "triggers": Array<{
    "name": string,                  // Short name of the stress trigger (e.g., "Organic chemistry final")
    "category": "Academic" | "Parental" | "Social" | "Sleep" | "Other",
    "impact": "High" | "Medium" | "Low"
  }>,
  "cognitiveDistortions": Array<{
    "originalThought": string,       // The raw negative thought expressed by the student
    "distortionType": string,        // e.g. Catastrophizing, Should Statements, All-or-Nothing, Mind Reading, Labeling
    "reframedThought": string        // A compassionate, realistic reframing of the thought based on CBT principles
  }>,
  "copingMechanisms": Array<{
    "title": string,                 // Title of the exercise/action (e.g. "Box Breathing Reset")
    "description": string,           // How to perform it and why it helps the student's specific situation
    "duration": string,              // e.g. "5 minutes", "10 minutes"
    "type": "Breathing" | "CBT" | "Habit" | "Action"
  }>,
  "motivationAlert": string          // A short (1-2 sentences), highly empathetic, motivating, and personalized message
}

3. Be clinically sound. Focus on Cognitive Behavioral Therapy (CBT) for reframing.
4. Calculate scores objectively based on indicators in the text:
   - High study hours or grade talk -> High studyPressure.
   - Fatigue, cynicism, loss of interest -> High burnoutRisk.
   - Shakey hands, exam panic, racing thoughts -> High stressLevel.
   - Imposter thoughts, self-deprecation -> Low confidenceLevel.
   - Coffee/caffeine talk, all-nighters, insomnia -> Low sleepQuality.
5. Provide exactly 2 or 3 high-value cognitive reframing cards.
6. Provide exactly 3 actionable coping mechanisms. At least one must be a 'Breathing' or 'CBT' exercise.
`;function D(o){return`Analyze the following student journal entry:
---
${o}
---
Ensure you return ONLY the JSON object. Do not explain. Do not wrap in markdown. Validate that it parses as JSON.`}async function O(o,e){var n,r,l,u,h;const t=`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${e}`,a=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:H+`

`+D(o)}]}],generationConfig:{responseMimeType:"application/json"}})});if(!a.ok){const p=await a.text();throw new Error(`Gemini API Error (${a.status}): ${p}`)}const i=(h=(u=(l=(r=(n=(await a.json()).candidates)==null?void 0:n[0])==null?void 0:r.content)==null?void 0:l.parts)==null?void 0:u[0])==null?void 0:h.text;if(!i)throw new Error("Empty response from Gemini API");try{return JSON.parse(i.trim())}catch{throw console.error("Failed to parse Gemini output as JSON. Raw output:",i),new Error("AI returned invalid JSON formatting. Please try again.")}}function L(o){const e=o.toLowerCase(),t=["exam","test","final","grade","pressure","shake","anxious","panic","fear","fail","worry","stress","scared"],a=["tired","exhausted","burnout","hollow","care","screen","break","concentrate","motivation","depleted","empty"],s=["imposter","smart","worse","slower","better","others","compare","fraud","useless","fool","stupid","unable"],i=["dad","mom","parent","family","expectation","gpa","conditional","phone","call","surgeon","doctor","let down"],n=["sleep","night","all-nighter","insomnia","coffee","caffeine","energy drink","bed","awake","tired","rest"],r=C=>C.reduce((k,T)=>{const P=new RegExp(`\\b${T}\\b`,"gi"),B=e.match(P);return k+(B?B.length:0)},0),l=r(t),u=r(a),h=r(s),p=r(i),A=r(n);let b=Math.min(40+l*12+p*8,98),w=Math.min(30+u*15+A*8,98),S=Math.max(80-h*20-l*5,10),$=Math.min(50+l*10+p*10,98),I=Math.max(90-A*25-u*5,5);o.trim().split(/\s+/).length<5&&(b=30,w=20,S=75,$=40,I=80);let x="Calm & Balanced";const y=[],f=[],g=[];let v="You are taking a positive step by journaling today. Keep tracking your mental state.";for(b>75&&(x="High Anxiety & Academic Panic",y.push({name:"Upcoming assessments",category:"Academic",impact:"High"}),f.push({originalThought:"I must pass everything perfectly, or I am a failure.",distortionType:"All-or-Nothing Thinking",reframedThought:"Academic checkpoints do not define my human value. Making mistakes is how I learn."}),g.push({title:"Academic Box Breathing",description:"Slow down your heart rate. Inhale for 4 seconds, hold for 4, exhale for 4, hold for 4. Repeat 4 times.",duration:"4 minutes",type:"Breathing"})),w>75&&(x="Chronic Academic Fatigue & Depletion",y.push({name:"Prolonged studying without rest",category:"Academic",impact:"High"}),f.push({originalThought:"I can't afford to take a break. Breaks are lazy.",distortionType:"Minimizing Physical Needs",reframedThought:"Rest is not a reward; it is a physiological necessity. Taking a break restores my cognitive capability."}),g.push({title:"Digital Curfew Block",description:"Turn off your phone and laptop. Do something screen-free to let your eyes and brain rest.",duration:"1 hour",type:"Habit"})),S<35&&(x="Severe Imposter Syndrome & Doubt",y.push({name:"Comparing self with peers",category:"Social",impact:"High"}),f.push({originalThought:"Everyone else is smarter and doesn't struggle like I do.",distortionType:"Mind Reading",reframedThought:"I am comparing my internal struggles with other people's external highlights. Learning takes time for everyone."}),g.push({title:"CBT Daily Wins Log",description:"Write down three small things you successfully completed today, no matter how small they seem.",duration:"5 minutes",type:"CBT"})),p>0&&(y.push({name:"External family expectations",category:"Parental",impact:"High"}),f.push({originalThought:"I will disappoint my family if I do not achieve perfect grades.",distortionType:"Should Statements",reframedThought:"I will perform best when I focus on my own learning journey. My worth to my family transcends my GPA."})),I<40&&(y.push({name:"Restless schedule & high caffeine",category:"Sleep",impact:"High"}),g.push({title:"Digital Sunset Pacing",description:"Turn off screens 30 minutes before bed. Let your brain natural produce melatonin.",duration:"30 minutes",type:"Action"}));g.length<3;){const k=[{title:"5-Minute Mind Dump",description:"Write down all current thoughts, then throw the paper away to physically let them go.",duration:"5 minutes",type:"CBT"},{title:"Grounding Walk",description:"Step outside. Find 5 things you can see, 4 things you can touch, and 3 things you can hear.",duration:"10 minutes",type:"Action"},{title:"Paced Breathing Reset",description:"Inhale deeply for 5 seconds, exhale slowly for 5 seconds. Repeat 10 times to calm your nervous system.",duration:"3 minutes",type:"Breathing"}].find(T=>!g.some(P=>P.title===T.title));if(k)g.push(k);else break}return w>80?v="Your energy reserves are extremely low. It is time to prioritize rest. Take a small step away from studying.":b>80?v="You are experiencing high levels of academic stress. Try the Box Breathing reset to calm your mind before your next task.":S<30?v="You are feeling unsure of yourself. Remember that learning is a process of small, consistent steps. You are capable.":v="Good job writing down your thoughts. Journaling regularly helps reduce cognitive clutter and builds academic resilience.",{sentiment:x,stressLevel:b,burnoutRisk:w,confidenceLevel:S,studyPressure:$,sleepQuality:I,triggers:y,cognitiveDistortions:f,copingMechanisms:g,motivationAlert:v}}async function N(o,e){for(const s of Object.values(m))if(o.trim()===s.journalText.trim())return{...s};const t=e||void 0||"";let a;if(t&&t.trim()!=="")try{a=await O(o,t)}catch(s){console.warn("Live Gemini call failed, falling back to heuristic engine:",s),a=L(o)}else a=L(o);return{id:`custom-${Date.now()}`,name:"Custom Journal Entry",tagline:"Dynamically analyzed from your writing",avatar:"✍️",journalText:o,...a}}class z{constructor(e){c(this,"container");c(this,"isAnalyzing",!1);this.container=e,d.subscribe(()=>this.render())}render(){const e=d.getState();this.container.innerHTML=`
      <section class="journal-editor-card glass-panel" aria-labelledby="journal-heading">
        <div class="card-header">
          <h2 id="journal-heading" class="gradient-text">✍️ Student Journal</h2>
          <p class="card-sub">Reflect on your academic day, exams, sleep, or family expectations.</p>
        </div>

        <div class="api-key-container">
          ${`
            <label for="gemini-key" class="input-label">Gemini API Key (Optional for live AI):</label>
            <div class="api-input-wrapper">
              <input 
                type="password" 
                id="gemini-key" 
                value="${e.apiKey}" 
                placeholder="Paste AI API key..." 
                aria-describedby="api-desc"
              />
              <button id="save-key-btn" class="secondary-btn">Save Key</button>
            </div>
            <span id="api-desc" class="helper-text">If left empty, CalmScholar utilizes a smart clinical heuristic engine for local analysis.</span>
          `}
        </div>

        <div class="presets-section">
          <h3 class="preset-title">Test Demo Scenarios (One-Click Verification)</h3>
          <div class="presets-deck" role="radiogroup" aria-label="Demo scenarios">
            ${Object.values(m).map(t=>`
              <button 
                class="preset-card ${e.currentScenario.id===t.id?"active":""}" 
                data-id="${t.id}"
                role="radio"
                aria-checked="${e.currentScenario.id===t.id}"
                aria-label="Load scenario for ${t.name}"
              >
                <span class="preset-avatar" aria-hidden="true">${t.avatar}</span>
                <span class="preset-info">
                  <strong class="preset-name">${t.name}</strong>
                  <span class="preset-tagline">${t.tagline}</span>
                </span>
              </button>
            `).join("")}
          </div>
        </div>

        <div class="editor-area">
          <label for="journal-textarea" class="sr-only">Write your journal entry here</label>
          <textarea 
            id="journal-textarea" 
            placeholder="How are you feeling about your studies, exams, or workload today? Write freely..."
            rows="6"
            ${this.isAnalyzing?"disabled":""}
          >${e.currentScenario.journalText}</textarea>
          
          <div class="editor-footer">
            <span id="word-count" class="word-count">0 words | 0 characters</span>
            <button 
              id="analyze-btn" 
              class="primary-btn ${this.isAnalyzing?"loading":""}"
              ${this.isAnalyzing?"disabled":""}
            >
              ${this.isAnalyzing?'<span class="spinner"></span> Analyzing...':"Analyze Academic Mindset"}
            </button>
          </div>
        </div>
        
        ${this.isAnalyzing?`
          <div class="loading-overlay" role="alert" aria-busy="true" aria-live="polite">
            <div class="loading-spinner"></div>
            <p>Decoding cognitive patterns & calculating burnout risks...</p>
          </div>
        `:""}
      </section>
    `,this.bindEvents(),this.updateCounters()}bindEvents(){const e=this.container.querySelector("#journal-textarea"),t=this.container.querySelector("#save-key-btn"),a=this.container.querySelector("#gemini-key"),s=this.container.querySelector("#analyze-btn"),i=this.container.querySelectorAll(".preset-card");e&&e.addEventListener("input",()=>this.updateCounters()),t&&a&&t.addEventListener("click",()=>{d.setApiKey(a.value.trim());const n=document.createElement("div");n.className="toast success",n.textContent="API Key saved successfully!",document.body.appendChild(n),setTimeout(()=>n.remove(),2500)}),s&&e&&s.addEventListener("click",async()=>{const n=e.value.trim();if(!n){alert("Please write something in your journal first!");return}this.isAnalyzing=!0,this.render();try{const r=d.getState(),l=await N(n,r.apiKey);d.updateScenario(l)}catch(r){console.error(r),alert(`Analysis Failed: ${r.message}`)}finally{this.isAnalyzing=!1,this.render()}}),i.forEach(n=>{n.addEventListener("click",()=>{const r=n.getAttribute("data-id");r&&m[r]&&d.updateScenario({...m[r]})})})}updateCounters(){const e=this.container.querySelector("#journal-textarea"),t=this.container.querySelector("#word-count");if(!e||!t)return;const a=e.value.trim(),s=a.length,i=a?a.split(/\s+/).length:0;t.textContent=`${i} words | ${s} characters`}}class W{constructor(e){c(this,"container");this.container=e,d.subscribe(()=>this.render())}render(){const t=d.getState().currentScenario,a=(i,n=!1)=>{const r=n?100-i:i;return r>75?"var(--danger-color)":r>45?"var(--warning-color)":"var(--success-color)"},s=i=>{const n=100-i;return n>75?"🔋":n>40?"🪫":"⚠️"};this.container.innerHTML=`
      <section class="dashboard-section" aria-labelledby="dashboard-heading">
        <!-- Motivation Alert Banner -->
        <div class="motivation-banner glass-panel" role="alert">
          <div class="motivation-icon" aria-hidden="true">🧠</div>
          <div class="motivation-content">
            <h3 class="motivation-title">Academic Coach Notes</h3>
            <p class="motivation-text">"${t.motivationAlert}"</p>
          </div>
        </div>

        <!-- Metric Grid -->
        <div class="metrics-grid">
          
          <!-- Stress Gauge -->
          <div class="metric-card glass-panel" style="--accent: ${a(t.stressLevel)}">
            <div class="metric-header">
              <span class="metric-icon">📈</span>
              <h3 class="metric-title">Stress Index</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2*Math.PI*40}; stroke-dashoffset: ${2*Math.PI*40*(1-t.stressLevel/100)}; stroke: ${a(t.stressLevel)}">
                </circle>
              </svg>
              <div class="gauge-val">${t.stressLevel}%</div>
            </div>
            <p class="metric-status">State: <strong>${t.stressLevel>75?"Critical":t.stressLevel>45?"Moderate":"Stable"}</strong></p>
          </div>

          <!-- Burnout Risk Card -->
          <div class="metric-card glass-panel" style="--accent: ${a(t.burnoutRisk)}">
            <div class="metric-header">
              <span class="metric-icon">${s(t.burnoutRisk)}</span>
              <h3 class="metric-title">Burnout Risk</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2*Math.PI*40}; stroke-dashoffset: ${2*Math.PI*40*(1-t.burnoutRisk/100)}; stroke: ${a(t.burnoutRisk)}">
                </circle>
              </svg>
              <div class="gauge-val">${t.burnoutRisk}%</div>
            </div>
            <p class="metric-status">Depletion: <strong>${t.burnoutRisk>75?"Severe Exhaustion":t.burnoutRisk>45?"Warning Stage":"Healthy Reserves"}</strong></p>
          </div>

          <!-- Confidence Tracking Card -->
          <div class="metric-card glass-panel" style="--accent: ${a(t.confidenceLevel,!0)}">
            <div class="metric-header">
              <span class="metric-icon">🛡️</span>
              <h3 class="metric-title">Confidence Level</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2*Math.PI*40}; stroke-dashoffset: ${2*Math.PI*40*(1-t.confidenceLevel/100)}; stroke: ${a(t.confidenceLevel,!0)}">
                </circle>
              </svg>
              <div class="gauge-val">${t.confidenceLevel}%</div>
            </div>
            <p class="metric-status">Self-Belief: <strong>${t.confidenceLevel<30?"Low (Imposter)":t.confidenceLevel<60?"Moderate":"Resilient"}</strong></p>
          </div>

          <!-- Study Pressure Card -->
          <div class="metric-card glass-panel" style="--accent: ${a(t.studyPressure)}">
            <div class="metric-header">
              <span class="metric-icon">⏳</span>
              <h3 class="metric-title">Study Pressure</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2*Math.PI*40}; stroke-dashoffset: ${2*Math.PI*40*(1-t.studyPressure/100)}; stroke: ${a(t.studyPressure)}">
                </circle>
              </svg>
              <div class="gauge-val">${t.studyPressure}%</div>
            </div>
            <p class="metric-status">Workload: <strong>${t.studyPressure>75?"Overloaded":t.studyPressure>45?"Elevated":"Manageable"}</strong></p>
          </div>

          <!-- Sleep Quality Card -->
          <div class="metric-card glass-panel" style="--accent: ${a(t.sleepQuality,!0)}">
            <div class="metric-header">
              <span class="metric-icon">🌙</span>
              <h3 class="metric-title">Sleep Quality</h3>
            </div>
            <div class="gauge-container">
              <svg viewBox="0 0 100 100" class="gauge">
                <circle class="gauge-bg" cx="50" cy="50" r="40"></circle>
                <circle class="gauge-fill" cx="50" cy="50" r="40" 
                  style="stroke-dasharray: ${2*Math.PI*40}; stroke-dashoffset: ${2*Math.PI*40*(1-t.sleepQuality/100)}; stroke: ${a(t.sleepQuality,!0)}">
                </circle>
              </svg>
              <div class="gauge-val">${t.sleepQuality}%</div>
            </div>
            <p class="metric-status">Recovery: <strong>${t.sleepQuality<30?"Critically Deprived":t.sleepQuality<60?"Disturbed Sleep":"Fully Rested"}</strong></p>
          </div>

        </div>

        <!-- CBT Cognitive Reframer Section -->
        <div class="cognitive-reframer glass-panel">
          <div class="section-header">
            <h3 class="gradient-text">🧠 Cognitive Behavioral Therapy (CBT) Reframer</h3>
            <p class="section-sub">Cognitive distortions detected in your journal, reframed into healthier perspectives.</p>
          </div>
          
          <div class="reframer-cards-container">
            ${t.cognitiveDistortions.length===0?`
              <div class="empty-reframer">
                <p>No major cognitive distortions detected. Great job keeping a balanced perspective!</p>
              </div>
            `:t.cognitiveDistortions.map(i=>`
              <div class="reframer-card">
                <div class="reframer-col original">
                  <span class="col-tag distortion-tag">${i.distortionType}</span>
                  <p class="thought-text">"${i.originalThought}"</p>
                </div>
                <div class="reframer-arrow" aria-hidden="true">➡️</div>
                <div class="reframer-col reframed">
                  <span class="col-tag reframed-tag">CBT Reframing</span>
                  <p class="thought-text">"${i.reframedThought}"</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `}}class q{constructor(e){c(this,"container");this.container=e,d.subscribe(()=>this.render())}render(){const a=d.getState().currentScenario.triggers,s={Academic:[],Parental:[],Social:[],Sleep:[],Other:[]};a.forEach(l=>{s[l.category]?s[l.category].push(l):s.Other.push(l)});const i=l=>l==="High"?"impact-high":l==="Medium"?"impact-medium":"impact-low",n=a.length,r=a.filter(l=>l.impact==="High").length;this.container.innerHTML=`
      <section class="trigger-analyzer-card glass-panel" aria-labelledby="triggers-heading">
        <div class="card-header">
          <h2 id="triggers-heading" class="gradient-text">🎯 Stress Trigger Map</h2>
          <p class="card-sub">AI-extracted factors contributing to your stress, sorted by category and impact level.</p>
        </div>

        <div class="trigger-stats">
          <div class="stat-badge">
            <span class="stat-num">${n}</span>
            <span class="stat-label">Identified Stressors</span>
          </div>
          <div class="stat-badge danger">
            <span class="stat-num">${r}</span>
            <span class="stat-label">High Impact Stressors</span>
          </div>
        </div>

        <div class="triggers-grid">
          ${Object.entries(s).map(([l,u])=>`
            <div class="category-lane">
              <h3 class="lane-title">${this.getCategoryIcon(l)} ${l}</h3>
              <div class="lane-cards">
                ${u.length===0?`
                  <p class="empty-lane-text">No stressors identified.</p>
                `:u.map(h=>`
                  <div class="trigger-card ${i(h.impact)}">
                    <span class="trigger-name">${h.name}</span>
                    <span class="trigger-impact-badge">${h.impact} Impact</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `).join("")}
        </div>
      </section>
    `}getCategoryIcon(e){switch(e){case"Academic":return"📖";case"Parental":return"👨‍👩‍👧";case"Social":return"👥";case"Sleep":return"💤";default:return"🔍"}}}class F{constructor(e){c(this,"container");c(this,"intervalId",null);c(this,"isPlaying",!1);c(this,"timerSeconds",0);c(this,"currentPhase","Inhale");c(this,"phaseSecondsLeft",4);this.container=e,d.subscribe(()=>this.render())}render(){const t=d.getState().currentScenario.copingMechanisms;this.container.innerHTML=`
      <section class="copetool-section" aria-labelledby="cope-heading">
        <div class="copetool-grid">
          
          <!-- AI Actionable Coping Cards -->
          <div class="coping-cards-panel glass-panel">
            <h2 id="cope-heading" class="gradient-text">🛡️ Custom Coping Prescriptions</h2>
            <p class="card-sub">AI-recommended mental and physical strategies tailored to your current cognitive state.</p>
            
            <div class="copes-list">
              ${t.map((a,s)=>`
                <div class="cope-item-card type-${a.type.toLowerCase()}">
                  <div class="cope-item-header">
                    <span class="cope-type-badge">${a.type}</span>
                    <span class="cope-duration">⏳ ${a.duration}</span>
                  </div>
                  <h3 class="cope-item-title">${s+1}. ${a.title}</h3>
                  <p class="cope-item-desc">${a.description}</p>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Interactive Breath Pacer (WCAG Compliant) -->
          <div class="breath-pacer-panel glass-panel">
            <h2 class="gradient-text">🧘 Interactive Box Breathing</h2>
            <p class="card-sub">Regulate your autonomic nervous system using clinical 4-4-4-4 box breathing.</p>
            
            <div class="pacer-widget">
              <div class="pacer-circle-outer">
                <div id="breath-circle" class="pacer-circle-inner state-rest">
                  <div id="pacer-text" class="pacer-text">Ready</div>
                  <div id="pacer-timer" class="pacer-timer">--</div>
                </div>
              </div>
              
              <div class="pacer-controls">
                <button id="pacer-start-btn" class="primary-btn">${this.isPlaying?"Pause":"Start Breathing"}</button>
                <button id="pacer-reset-btn" class="secondary-btn">Reset</button>
              </div>

              <div class="box-breathing-legend">
                <span class="legend-step ${this.isPlaying&&this.currentPhase==="Inhale"?"active":""}">💨 Inhale (4s)</span>
                <span class="legend-step ${this.isPlaying&&this.currentPhase==="Hold"?"active":""}">🛑 Hold (4s)</span>
                <span class="legend-step ${this.isPlaying&&this.currentPhase==="Exhale"?"active":""}">💨 Exhale (4s)</span>
                <span class="legend-step ${this.isPlaying&&this.currentPhase==="Rest"?"active":""}">🛑 Hold/Rest (4s)</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    `,this.bindEvents(),this.updatePacerUI()}bindEvents(){const e=this.container.querySelector("#pacer-start-btn"),t=this.container.querySelector("#pacer-reset-btn");e&&e.addEventListener("click",()=>{this.isPlaying?this.pausePacer():this.startPacer()}),t&&t.addEventListener("click",()=>{this.resetPacer()})}startPacer(){this.isPlaying=!0;const e=this.container.querySelector("#pacer-start-btn");e&&(e.textContent="Pause"),this.intervalId&&clearInterval(this.intervalId),this.intervalId=window.setInterval(()=>{this.tickPacer()},1e3),this.updatePacerUI()}pausePacer(){this.isPlaying=!1;const e=this.container.querySelector("#pacer-start-btn");e&&(e.textContent="Resume"),this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null);const t=this.container.querySelector("#breath-circle");t&&(t.style.animationPlayState="paused")}resetPacer(){this.isPlaying=!1,this.currentPhase="Inhale",this.phaseSecondsLeft=4,this.timerSeconds=0,this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null);const e=this.container.querySelector("#pacer-start-btn");e&&(e.textContent="Start Breathing"),this.updatePacerUI()}tickPacer(){if(this.phaseSecondsLeft--,this.timerSeconds++,this.phaseSecondsLeft<=0)switch(this.currentPhase){case"Inhale":this.currentPhase="Hold",this.phaseSecondsLeft=4;break;case"Hold":this.currentPhase="Exhale",this.phaseSecondsLeft=4;break;case"Exhale":this.currentPhase="Rest",this.phaseSecondsLeft=4;break;case"Rest":this.currentPhase="Inhale",this.phaseSecondsLeft=4;break}this.updatePacerUI()}updatePacerUI(){const e=this.container.querySelector("#breath-circle"),t=this.container.querySelector("#pacer-text"),a=this.container.querySelector("#pacer-timer"),s=this.container.querySelectorAll(".legend-step");if(!(!e||!t||!a)){if(!this.isPlaying&&this.timerSeconds===0){t.textContent="Begin",a.textContent="4s",e.className="pacer-circle-inner state-rest",e.style.transform="scale(1.0)";return}if(t.textContent=this.currentPhase,a.textContent=`${this.phaseSecondsLeft}s`,e.className=`pacer-circle-inner state-${this.currentPhase.toLowerCase()}`,this.currentPhase==="Inhale"){const n=1+(4-this.phaseSecondsLeft)/4*.6;e.style.transform=`scale(${n})`}else if(this.currentPhase==="Hold")e.style.transform="scale(1.6)";else if(this.currentPhase==="Exhale"){const n=1.6-(4-this.phaseSecondsLeft)/4*.6;e.style.transform=`scale(${n})`}else this.currentPhase==="Rest"&&(e.style.transform="scale(1.0)");s.forEach((i,n)=>{let r=!1;this.currentPhase==="Inhale"&&n===0&&(r=!0),this.currentPhase==="Hold"&&n===1&&(r=!0),this.currentPhase==="Exhale"&&n===2&&(r=!0),this.currentPhase==="Rest"&&n===3&&(r=!0),r?i.classList.add("active"):i.classList.remove("active")})}}}class G{constructor(e){c(this,"container");c(this,"targetSleep",8);c(this,"actualSleep",6);c(this,"poorNights",3);this.container=e,d.subscribe(()=>this.render())}render(){const e=Math.max(0,(this.targetSleep-this.actualSleep)*this.poorNights),t=Math.max(50,Math.round(100-e*2.5)),a=Math.min(7,Math.max(1,Math.round(e/1.5))),s=Math.min(2,Number((e/a).toFixed(1)));this.container.innerHTML=`
      <section class="sleep-debt-card glass-panel" aria-labelledby="sleep-heading">
        <div class="card-header">
          <h2 id="sleep-heading" class="gradient-text">💤 Sleep & Cognitive Debt Tracker</h2>
          <p class="card-sub">Calculate your physiological sleep deficit and see its estimated impact on your academic capabilities.</p>
        </div>

        <div class="sleep-calculator-layout">
          
          <!-- Input Sliders -->
          <div class="calculator-inputs">
            <div class="slider-group">
              <div class="slider-header">
                <label for="target-sleep-range">Target Sleep per Night</label>
                <span class="slider-val">${this.targetSleep} hours</span>
              </div>
              <input 
                type="range" 
                id="target-sleep-range" 
                min="6" 
                max="10" 
                step="0.5" 
                value="${this.targetSleep}"
              />
            </div>

            <div class="slider-group">
              <div class="slider-header">
                <label for="actual-sleep-range">Actual Sleep Last Night</label>
                <span class="slider-val">${this.actualSleep} hours</span>
              </div>
              <input 
                type="range" 
                id="actual-sleep-range" 
                min="3" 
                max="10" 
                step="0.5" 
                value="${this.actualSleep}"
              />
            </div>

            <div class="slider-group">
              <div class="slider-header">
                <label for="nights-range">Consecutive Poor Sleep Nights</label>
                <span class="slider-val">${this.poorNights} nights</span>
              </div>
              <input 
                type="range" 
                id="nights-range" 
                min="1" 
                max="14" 
                step="1" 
                value="${this.poorNights}"
              />
            </div>
          </div>

          <!-- Visual Outcome Panel -->
          <div class="calculator-outputs">
            <div class="output-row">
              <div class="output-stat">
                <span class="stat-value warning-color">${e} hrs</span>
                <span class="stat-desc">Accumulated Sleep Debt</span>
              </div>
              
              <div class="output-stat">
                <span class="stat-value" style="color: ${t>80?"var(--success-color)":t>65?"var(--warning-color)":"var(--danger-color)"}">
                  ${t}%
                </span>
                <span class="stat-desc">Cognitive Efficiency</span>
              </div>
            </div>

            <div class="cognitive-warning-message">
              ${e>10?`
                <div class="warning-alert alert-critical" role="alert">
                  <strong>⚠️ Critical Sleep Deficit:</strong> Your current sleep debt exceeds 10 hours. Your memory consolidation, focus, and reaction times are severely compromised. Do not study late tonight.
                </div>
              `:e>4?`
                <div class="warning-alert alert-warning" role="alert">
                  <strong>⚠️ Moderate Sleep Deficit:</strong> Your attention span and cognitive recall are slightly reduced. Avoid excessive caffeine to mask fatigue.
                </div>
              `:`
                <div class="warning-alert alert-healthy" role="alert">
                  <strong>✅ Healthy Sleep Reserves:</strong> Your cognitive functioning is optimal. Keep maintaining consistent sleep windows.
                </div>
              `}
            </div>

            <div class="restoration-plan">
              <h3 class="plan-title">🌙 Sleep Restoration Plan</h3>
              <p class="plan-summary">To pay back your sleep debt safely without disrupting your circadian rhythm:</p>
              <ul class="plan-steps">
                <li>
                  <strong>Target Adjustment:</strong> Sleep an extra 
                  <span class="highlight-text">+${s} hrs</span> 
                  per night for the next 
                  <span class="highlight-text">${a} nights</span>.
                </li>
                <li><strong>Circadian Cutoff:</strong> Stop caffeine intake by <strong>1:00 PM</strong>. Dehydrate caffeine from system.</li>
                <li><strong>Digital Curfew:</strong> Turn off all mobile screens by <strong>10:00 PM</strong> to allow melatonin production.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    `,this.bindEvents()}bindEvents(){const e=this.container.querySelector("#target-sleep-range"),t=this.container.querySelector("#actual-sleep-range"),a=this.container.querySelector("#nights-range");e&&e.addEventListener("input",()=>{this.targetSleep=parseFloat(e.value),this.render()}),t&&t.addEventListener("input",()=>{this.actualSleep=parseFloat(t.value),this.render()}),a&&a.addEventListener("input",()=>{this.poorNights=parseInt(a.value,10),this.render()})}}class Y{constructor(e){c(this,"container");c(this,"activeTab","bubbles");c(this,"poppedBubbles",Array(24).fill(!1));c(this,"poppedBalloons",[]);c(this,"activeBalloons",[]);c(this,"animationFrameId",null);this.container=e,d.subscribe(()=>{this.syncBalloonsWithScenario(),this.render()}),this.syncBalloonsWithScenario()}syncBalloonsWithScenario(){const e=d.getState().currentScenario,t=["hsl(25, 60%, 80%)","hsl(140, 25%, 80%)","hsl(190, 40%, 80%)","hsl(45, 50%, 80%)"];this.activeBalloons=e.cognitiveDistortions.map((a,s)=>({id:`balloon-${s}`,text:a.originalThought,reframed:a.reframedThought,color:t[s%t.length],speed:.5+Math.random()*.4,x:10+s*35+Math.random()*10,y:80+Math.random()*15}))}render(){this.container.innerHTML=`
      <section class="stress-buster-card glass-panel" aria-labelledby="playroom-heading">
        <div class="card-header">
          <h2 id="playroom-heading" class="gradient-text">🍃 The Mindful Playroom</h2>
          <p class="card-sub">Take a cognitive break with tactile stress-relief activities designed to ground your focus.</p>
        </div>

        <!-- Tab Controls -->
        <div class="playroom-tabs">
          <button id="tab-bubbles-btn" class="tab-btn ${this.activeTab==="bubbles"?"active":""}">🫧 Zen Bubble Popper</button>
          <button id="tab-balloons-btn" class="tab-btn ${this.activeTab==="balloons"?"active":""}">🎈 Worry Balloon Popper</button>
        </div>

        <div class="playroom-content">
          ${this.activeTab==="bubbles"?this.renderBubbles():this.renderBalloons()}
        </div>
      </section>
    `,this.bindEvents(),this.activeTab==="balloons"?this.startBalloonAnimation():this.stopBalloonAnimation()}renderBubbles(){return`
      <div class="bubble-game-layout">
        <div class="game-instructions">
          <h3>Zen Bubble Popper</h3>
          <p>Tap bubbles to pop them. Enjoy the satisfying tactile feedback. Reset when done.</p>
          <div class="game-meta">
            <span>Popped: <strong>${this.poppedBubbles.filter(t=>t).length} / 24</strong></span>
            <button id="reset-bubbles-btn" class="secondary-btn btn-sm">Reset Bubble Wrap</button>
          </div>
        </div>

        <div class="bubbles-wrap-grid">
          ${this.poppedBubbles.map((t,a)=>`
            <button 
              class="bubble-wrap-cell ${t?"popped":""}" 
              data-idx="${a}"
              aria-label="Bubble ${a+1}, ${t?"popped":"unpopped"}"
            >
              <span class="bubble-inner"></span>
            </button>
          `).join("")}
        </div>
      </div>
    `}renderBalloons(){return`
      <div class="balloon-game-layout">
        <div class="game-instructions">
          <h3>Worry Balloon Popper</h3>
          <p>Your academic worries are floating up. Click a balloon to pop the negative thought and release its CBT reframing.</p>
        </div>

        <div class="balloon-floating-arena" id="balloon-arena">
          <!-- Balloons will be positioned dynamically here via style.left/bottom -->
          ${this.activeBalloons.map(e=>this.poppedBalloons.includes(e.id)?"":`
              <button 
                class="worry-balloon" 
                id="${e.id}"
                style="background-color: ${e.color}; left: ${e.x}%; bottom: ${e.y}%;"
                aria-label="Worry balloon: ${e.text}. Click to pop."
              >
                <span class="balloon-text">${e.text}</span>
                <span class="balloon-string"></span>
              </button>
            `).join("")}

          ${this.activeBalloons.length===0?`
            <div class="empty-arena-message">
              <p>No worries floating today. Academic mind is clear!</p>
            </div>
          `:""}
        </div>

        <div class="garden-reframed-container">
          <h4>🍂 Garden of Resilient Thoughts</h4>
          <div class="reframed-leaves-list" id="reframed-leaves-list">
            ${this.poppedBalloons.length===0?`
              <p class="empty-garden-text">Pop worry balloons above to harvest reframed thoughts here.</p>
            `:this.activeBalloons.filter(e=>this.poppedBalloons.includes(e.id)).map(e=>`
              <div class="garden-leaf-card anim-drift-in">
                <span class="leaf-icon">🍃</span>
                <div class="leaf-content">
                  <span class="leaf-label">Reframed Mindset:</span>
                  <p class="leaf-text">"${e.reframed}"</p>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `}bindEvents(){const e=this.container.querySelector("#tab-bubbles-btn"),t=this.container.querySelector("#tab-balloons-btn");if(e&&e.addEventListener("click",()=>{this.activeTab="bubbles",this.render()}),t&&t.addEventListener("click",()=>{this.activeTab="balloons",this.render()}),this.activeTab==="bubbles"){const a=this.container.querySelectorAll(".bubble-wrap-cell"),s=this.container.querySelector("#reset-bubbles-btn");a.forEach(i=>{i.addEventListener("click",()=>{const n=parseInt(i.getAttribute("data-idx")||"0",10);this.poppedBubbles[n]||(this.poppedBubbles[n]=!0,this.synthesizePopSound(600,.05),this.render())})}),s&&s.addEventListener("click",()=>{this.poppedBubbles=Array(24).fill(!1),this.synthesizePopSound(300,.15),this.render()})}this.activeTab==="balloons"&&this.container.querySelectorAll(".worry-balloon").forEach(s=>{s.addEventListener("click",()=>{const i=s.getAttribute("id");i&&!this.poppedBalloons.includes(i)&&(this.poppedBalloons.push(i),this.synthesizePopSound(450,.1),this.render())})})}startBalloonAnimation(){this.stopBalloonAnimation();const e=()=>{let t=!1;this.activeBalloons.forEach(a=>{this.poppedBalloons.includes(a.id)||(a.y+=a.speed,a.y>105&&(a.y=-15,a.x=10+Math.random()*80),t=!0)}),t&&this.activeBalloons.forEach(a=>{const s=this.container.querySelector(`#${a.id}`);s&&(s.style.bottom=`${a.y}%`,s.style.left=`${a.x}%`)}),this.animationFrameId=requestAnimationFrame(e)};this.animationFrameId=requestAnimationFrame(e)}stopBalloonAnimation(){this.animationFrameId!==null&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null)}synthesizePopSound(e,t){try{const a=new(window.AudioContext||window.webkitAudioContext),s=a.createOscillator(),i=a.createGain();s.type="sine",s.frequency.setValueAtTime(e,a.currentTime),s.frequency.exponentialRampToValueAtTime(80,a.currentTime+t),i.gain.setValueAtTime(.08,a.currentTime),i.gain.exponentialRampToValueAtTime(.001,a.currentTime+t),s.connect(i),i.connect(a.destination),s.start(),s.stop(a.currentTime+t)}catch{console.log("Audio feedback postponed until user interaction.")}}}document.addEventListener("DOMContentLoaded",()=>{const o=document.getElementById("journal-editor-container"),e=document.getElementById("sleep-debt-container"),t=document.getElementById("dashboard-container"),a=document.getElementById("trigger-analyzer-container"),s=document.getElementById("copetool-container"),i=document.getElementById("stress-buster-container");if(o&&e&&t&&a&&s&&i){const n=new z(o),r=new G(e),l=new W(t),u=new q(a),h=new F(s),p=new Y(i);n.render(),r.render(),l.render(),u.render(),h.render(),p.render(),console.log("CalmScholar.AI successfully initialized.")}else console.error("Failed to locate mount containers in index.html")});
