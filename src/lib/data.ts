import { PlaceHolderImages } from './placeholder-images';

export const patientData = {
  photo: PlaceHolderImages.find(img => img.id === 'patient-photo')?.imageUrl || 'https://picsum.photos/seed/patient1/200/200',
  photoHint: PlaceHolderImages.find(img => img.id === 'patient-photo')?.imageHint || 'portrait elderly woman',
  name: 'Maria Santos',
  age: 72,
  gender: 'Female',
  bloodGroup: 'O+',
  medical: {
    conditions: ['Hypertension', 'Diabetes Type 2'],
    symptoms: ['Occasional dizziness', 'Fatigue'],
    allergies: ['Penicillin'],
  },
  contact: {
    phone: '+63 917 123 4567',
    email: 'maria.santos@example.com',
  },
  doctor: {
    name: 'Dr. Jose Rizal',
    hospital: 'Manila Medical Center',
    lastConsultation: '2024-07-15',
    nextConsultation: '2024-10-15',
  },
};

export const medicationSchedule = [
  {
    time: 'Morning',
    icon: 'Sun',
    color: 'bg-yellow-400',
    medicines: [
      { name: 'Metformin', dosage: '500mg', shape: 'oval', color: 'bg-white' },
      { name: 'Losartan', dosage: '50mg', shape: 'round', color: 'bg-blue-200' },
    ],
  },
  {
    time: 'Afternoon',
    icon: 'CloudSun',
    color: 'bg-sky-400',
    medicines: [
      { name: 'Aspirin', dosage: '81mg', shape: 'round', color: 'bg-orange-300' },
    ],
  },
  {
    time: 'Night',
    icon: 'Moon',
    color: 'bg-indigo-500',
    medicines: [
      { name: 'Simvastatin', dosage: '20mg', shape: 'capsule', color: 'bg-pink-300' },
      { name: 'Vitamin D', dosage: '1000 IU', shape: 'oval', color: 'bg-yellow-200' },
    ],
  },
];
