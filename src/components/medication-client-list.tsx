'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PillShape } from '@/components/pill-shape';
import { Sun, CloudSun, Moon, Volume2, Bot } from 'lucide-react';
import type { medicationSchedule } from '@/lib/data';
import { Button } from './ui/button';

const icons = {
  Sun: Sun,
  CloudSun: CloudSun,
  Moon: Moon,
};

type Schedule = typeof medicationSchedule;

export function MedicationClientList({ schedule }: { schedule: Schedule }) {
  
  const handleSpeak = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US'; // Can be made dynamic
      window.speechSynthesis.cancel(); // Stop any previous speech
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <>
      {schedule.map((period) => {
        const Icon = icons[period.icon as keyof typeof icons] || Bot;
        return (
          <Card key={period.time} className="shadow-lg overflow-hidden">
            <CardHeader className={`${period.color} text-white`}>
              <CardTitle className="flex items-center gap-3 text-xl font-headline">
                <Icon size={24} /> {period.time}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
              <div className="space-y-4">
                {period.medicines.map((med) => {
                  const speechText = `Take ${med.name}, dosage ${med.dosage}, during the ${period.time}.`;
                  return (
                    <div
                      key={med.name}
                      className="flex items-center gap-4 p-3 bg-secondary rounded-lg"
                    >
                      <PillShape shape={med.shape as 'round' | 'capsule' | 'oval'} color={med.color} />
                      <div className="flex-1">
                        <p className="font-bold text-lg">{med.name}</p>
                        <p className="text-sm text-muted-foreground">{med.dosage}</p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSpeak(speechText)}
                        aria-label={`Read details for ${med.name}`}
                      >
                        <Volume2 className="h-6 w-6 text-primary" />
                      </Button>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
