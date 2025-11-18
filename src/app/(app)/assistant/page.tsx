'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mic, Loader2, Send, Thermometer, AlertCircle, Sparkles, Lightbulb } from 'lucide-react';
import { analyzeSymptoms, type SymptomAnalysisState } from './actions';
import { CoughIcon, DizzinessIcon, HeadacheIcon } from '@/components/icons';
import { useState } from 'react';

const initialState: SymptomAnalysisState = {
  status: 'idle',
};

const commonSymptoms = [
  { name: 'Fever', icon: Thermometer },
  { name: 'Headache', icon: HeadacheIcon },
  { name: 'Cough', icon: CoughIcon },
  { name: 'Dizziness', icon: DizzinessIcon },
];

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Analyze Symptoms
        </>
      )}
    </Button>
  );
}

export default function AssistantPage() {
  const [state, formAction] = useFormState(analyzeSymptoms, initialState);
  const [symptomText, setSymptomText] = useState('');

  const addSymptom = (symptom: string) => {
    setSymptomText(prev => prev ? `${prev}, ${symptom}` : symptom);
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Voice Assistant Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-headline">
              <Mic size={20} /> Voice Assistant
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center flex flex-col items-center justify-center min-h-[300px]">
            <div className="p-6 bg-primary/10 rounded-full mb-4">
              <Mic className="w-12 h-12 text-primary" />
            </div>
            <p className="text-lg font-semibold text-slate-700">
              "Press the speaker icon on the medication page to hear instructions."
            </p>
            <p className="text-muted-foreground mt-2">
              Our voice assistant can read your medication details out loud.
            </p>
          </CardContent>
        </Card>

        {/* Symptom Checker Section */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl font-headline">
              <Sparkles size={20} /> AI Symptom Checker
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={formAction} className="space-y-4">
              <div>
                <label htmlFor="symptoms" className="font-semibold mb-2 block">
                  Speak or type your symptoms:
                </label>
                <div className="relative">
                  <Textarea
                    id="symptoms"
                    name="symptoms"
                    placeholder="e.g., 'I have a headache and a slight fever'"
                    rows={4}
                    value={symptomText}
                    onChange={(e) => setSymptomText(e.target.value)}
                    className="pr-10"
                  />
                  <Button variant="ghost" size="icon" className="absolute top-2 right-2 text-muted-foreground" type="button">
                    <Mic size={20} />
                  </Button>
                </div>
                 <div className="mt-2 text-sm text-muted-foreground">Or tap to add common symptoms:</div>
                 <div className="flex flex-wrap gap-2 mt-2">
                    {commonSymptoms.map(({ name, icon: Icon }) => (
                        <Button key={name} variant="outline" size="sm" onClick={() => addSymptom(name)} type="button">
                            <Icon className="mr-2 h-4 w-4" />
                            {name}
                        </Button>
                    ))}
                 </div>
              </div>
              <SubmitButton />
            </form>

            {state.status === 'success' && state.data && (
              <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-500 rounded-r-lg">
                <h4 className="font-bold text-lg flex items-center gap-2"><Sparkles className="text-green-600" /> Analysis Complete</h4>
                <p className="mt-2 text-slate-700">{state.data.summary}</p>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-semibold">Severity:</span>
                  <Badge
                    className={
                      state.data.severity === 'Critical' ? 'bg-red-500' :
                      state.data.severity === 'Moderate' ? 'bg-yellow-500' : 'bg-green-500'
                    }
                  >
                    {state.data.severity}
                  </Badge>
                </div>
                <div className="mt-4">
                  <h5 className="font-semibold flex items-center gap-2"><Lightbulb className="text-blue-600"/> Next Steps:</h5>
                  <ul className="list-disc list-inside text-slate-600 mt-1">
                    {state.data.nextSteps.map((step, i) => <li key={i}>{step}</li>)}
                  </ul>
                </div>
              </div>
            )}
            
            {state.status === 'error' && (
              <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-lg text-red-800 flex items-center gap-2">
                <AlertCircle />
                <p><span className="font-bold">Error:</span> {state.message}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
