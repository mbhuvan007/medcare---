'use server';

export interface SymptomAnalysisState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  data?: {
    summary: string;
    severity: 'Normal' | 'Moderate' | 'Critical';
    nextSteps: string[];
  };
}

// Mock AI analysis function
export async function analyzeSymptoms(
  prevState: SymptomAnalysisState,
  formData: FormData
): Promise<SymptomAnalysisState> {
  const symptoms = formData.get('symptoms') as string;

  if (!symptoms || symptoms.trim().length < 5) {
    return { status: 'error', message: 'Please describe your symptoms in more detail.' };
  }

  // Simulate network delay and AI processing
  await new Promise(resolve => setTimeout(resolve, 1500));

  try {
    // Mock logic to determine severity and response
    const lowerCaseSymptoms = symptoms.toLowerCase();
    let summary = "Based on your symptoms, this appears to be a minor issue.";
    let severity: 'Normal' | 'Moderate' | 'Critical' = 'Normal';
    let nextSteps = ["Rest and drink plenty of water.", "Monitor your symptoms."];

    if (lowerCaseSymptoms.includes('fever') && lowerCaseSymptoms.includes('cough')) {
      summary = "Your symptoms suggest a possible respiratory infection, like a common cold or flu.";
      severity = 'Moderate';
      nextSteps = ["Isolate yourself to prevent spreading.", "Take over-the-counter medication for fever.", "Consult a doctor if symptoms worsen in 48 hours."];
    } else if (lowerCaseSymptoms.includes('dizziness') && (lowerCaseSymptoms.includes('headache') || lowerCaseSymptoms.includes('pain'))) {
       summary = "Dizziness combined with pain could indicate several issues, from dehydration to something more serious.";
       severity = 'Moderate';
       nextSteps = ["Sit or lie down immediately.", "Avoid driving or operating heavy machinery.", "If it persists, seek medical advice."];
    }

    if (lowerCaseSymptoms.includes('chest pain') || lowerCaseSymptoms.includes('breathing difficulty')) {
       summary = "Symptoms like chest pain or difficulty breathing are serious and require immediate attention.";
       severity = 'Critical';
       nextSteps = ["Call emergency services (e.g., 911) immediately.", "Do not attempt to drive yourself to the hospital."];
    }

    return {
      status: 'success',
      data: { summary, severity, nextSteps },
    };

  } catch (error) {
    return { status: 'error', message: 'An unexpected error occurred during analysis.' };
  }
}
