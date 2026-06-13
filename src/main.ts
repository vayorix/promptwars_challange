import { JournalEditor } from './components/JournalEditor';
import { Dashboard } from './components/Dashboard';
import { TriggerAnalyzer } from './components/TriggerAnalyzer';
import { Copetool } from './components/Copetool';
import { SleepDebt } from './components/SleepDebt';
import { StressBusterGame } from './components/StressBusterGame';

document.addEventListener('DOMContentLoaded', () => {
  // Mount containers
  const editorContainer = document.getElementById('journal-editor-container');
  const sleepContainer = document.getElementById('sleep-debt-container');
  const dashboardContainer = document.getElementById('dashboard-container');
  const triggerContainer = document.getElementById('trigger-analyzer-container');
  const copetoolContainer = document.getElementById('copetool-container');
  const stressBusterContainer = document.getElementById('stress-buster-container');

  // Verify mounts exist
  if (
    editorContainer && 
    sleepContainer && 
    dashboardContainer && 
    triggerContainer && 
    copetoolContainer && 
    stressBusterContainer
  ) {
    // Instantiate components
    const journalEditor = new JournalEditor(editorContainer);
    const sleepDebt = new SleepDebt(sleepContainer);
    const dashboard = new Dashboard(dashboardContainer);
    const triggerAnalyzer = new TriggerAnalyzer(triggerContainer);
    const copetool = new Copetool(copetoolContainer);
    const stressBuster = new StressBusterGame(stressBusterContainer);

    // Initial renders
    journalEditor.render();
    sleepDebt.render();
    dashboard.render();
    triggerAnalyzer.render();
    copetool.render();
    stressBuster.render();

    console.log('CalmScholar.AI successfully initialized.');
  } else {
    console.error('Failed to locate mount containers in index.html');
  }
});
