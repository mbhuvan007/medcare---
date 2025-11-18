import { Bell, Zap, Vibrate } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MedicationClientList } from '@/components/medication-client-list';
import { medicationSchedule } from '@/lib/data';

export default function MedicationPage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <Card className="shadow-lg mb-6">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center font-headline">Today's Medication Schedule</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center items-center gap-6 p-4 border-t">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Bell size={20} />
            <span className="text-sm">Regular</span>
          </div>
          <div className="flex items-center gap-2 text-orange-500">
            <Zap size={20} />
            <span className="text-sm">Urgent</span>
          </div>
          <div className="flex items-center gap-2 text-purple-500">
            <Vibrate size={20} />
            <span className="text-sm">Silent</span>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        <MedicationClientList schedule={medicationSchedule} />
      </div>
    </div>
  );
}
