import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Droplets,
  HeartPulse,
  FileText,
  AlertTriangle,
  Phone,
  Mail,
  Stethoscope,
  Hospital,
  CalendarDays,
  History,
} from 'lucide-react';
import { patientData } from '@/lib/data';

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <div className="grid gap-6 md:grid-cols-3">
        {/* Left Column: Patient Identity */}
        <div className="md:col-span-1 space-y-6">
          <Card className="shadow-lg overflow-hidden">
            <CardHeader className="bg-primary/10 flex flex-col items-center text-center p-6">
              <div className="relative w-32 h-32 mb-4">
                 <Image
                    src={patientData.photo}
                    alt="Patient Photo"
                    width={128}
                    height={128}
                    className="rounded-full border-4 border-white shadow-md object-cover"
                    data-ai-hint={patientData.photoHint}
                  />
              </div>
              <CardTitle className="text-2xl font-bold font-headline">{patientData.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-6 grid grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-sm text-muted-foreground">Age</p>
                <p className="font-semibold text-lg">{patientData.age}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Gender</p>
                <p className="font-semibold text-lg">{patientData.gender}</p>
              </div>
              <div className="col-span-2">
                 <p className="text-sm text-muted-foreground">Blood Group</p>
                <p className="font-bold text-2xl text-red-600 flex items-center justify-center gap-2">
                  <Droplets size={24} /> {patientData.bloodGroup}
                </p>
              </div>
            </CardContent>
          </Card>

           <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <Phone size={20} /> Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone Number</p>
                  <p className="font-medium">{patientData.contact.phone}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{patientData.contact.email}</p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>

        {/* Right Column: Medical Details */}
        <div className="md:col-span-2 space-y-6">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <HeartPulse size={20} /> Medical Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2"><FileText size={16} className="text-primary"/> Existing Conditions</h3>
                <div className="flex flex-wrap gap-2">
                  {patientData.medical.conditions.map((condition) => (
                    <Badge key={condition} variant="secondary" className="text-base py-1 px-3">{condition}</Badge>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold flex items-center gap-2 mb-2"><FileText size={16} className="text-primary"/> Current Symptoms</h3>
                 <div className="flex flex-wrap gap-2">
                  {patientData.medical.symptoms.map((symptom) => (
                    <Badge key={symptom} variant="secondary" className="text-base py-1 px-3">{symptom}</Badge>
                  ))}
                </div>
              </div>
              {patientData.medical.allergies && (
                <div>
                  <h3 className="font-semibold flex items-center gap-2 mb-2 text-destructive"><AlertTriangle size={16}/> Allergies</h3>
                   <div className="flex flex-wrap gap-2">
                     <Badge variant="destructive" className="text-base py-1 px-3">{patientData.medical.allergies}</Badge>
                   </div>
                </div>
              )}
            </CardContent>
          </Card>
          
          <Card className="shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-xl font-headline">
                <Stethoscope size={20} /> Doctor & Hospital
              </CardTitle>
              <Badge variant="outline" className="flex items-center gap-2 cursor-pointer hover:bg-accent">
                <History size={14} /> Prescription History
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="flex items-start gap-3">
                <Stethoscope size={18} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Doctor's Name</p>
                  <p className="font-semibold text-lg">{patientData.doctor.name}</p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <Hospital size={18} className="text-muted-foreground mt-1" />
                <div>
                  <p className="text-sm text-muted-foreground">Hospital / Clinic</p>
                  <p className="font-semibold text-lg">{patientData.doctor.hospital}</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                 <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                  <CalendarDays size={20} className="text-primary mt-1"/>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Consultation</p>
                    <p className="font-semibold">{new Date(patientData.doctor.lastConsultation).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3 p-3 bg-secondary rounded-lg">
                  <CalendarDays size={20} className="text-primary mt-1"/>
                  <div>
                    <p className="text-sm text-muted-foreground">Next Consultation</p>
                    <p className="font-semibold">{new Date(patientData.doctor.nextConsultation).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
