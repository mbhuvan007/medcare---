'use server';

/**
 * @fileOverview This file defines a Genkit flow for analyzing symptoms, providing a condition summary, and suggesting next steps.
 *
 * - analyzeSymptoms - A function that analyzes user-provided symptoms and returns a condition summary and suggested next steps.
 * - AnalyzeSymptomsInput - The input type for the analyzeSymptoms function, which includes the user's symptoms as a string.
 * - AnalyzeSymptomsOutput - The return type for the analyzeSymptoms function, which includes a condition summary, severity level, and suggested next steps.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeSymptomsInputSchema = z.object({
  symptoms: z.string().describe('The symptoms described by the user.'),
});
export type AnalyzeSymptomsInput = z.infer<typeof AnalyzeSymptomsInputSchema>;

const AnalyzeSymptomsOutputSchema = z.object({
  conditionSummary: z.string().describe('A simple summary of the possible condition.'),
  severityLevel: z.enum(['Normal', 'Moderate', 'Critical']).describe('The severity level of the condition.'),
  suggestedNextSteps: z.string().describe('Suggested next steps for the user (e.g., drink water, visit doctor, take medication).'),
});
export type AnalyzeSymptomsOutput = z.infer<typeof AnalyzeSymptomsOutputSchema>;

export async function analyzeSymptoms(input: AnalyzeSymptomsInput): Promise<AnalyzeSymptomsOutput> {
  return analyzeSymptomsFlow(input);
}

const analyzeSymptomsPrompt = ai.definePrompt({
  name: 'analyzeSymptomsPrompt',
  input: {schema: AnalyzeSymptomsInputSchema},
  output: {schema: AnalyzeSymptomsOutputSchema},
  prompt: `You are an AI medical assistant. Analyze the following symptoms provided by the user, provide a simple condition summary, a severity level (Normal, Moderate, or Critical), and suggest the next steps the user should take.

Symptoms: {{{symptoms}}}

Respond using simple terms that an elderly person or someone with limited education can understand.

Condition Summary: 
Severity Level: 
Suggested Next Steps:`,
});

const analyzeSymptomsFlow = ai.defineFlow(
  {
    name: 'analyzeSymptomsFlow',
    inputSchema: AnalyzeSymptomsInputSchema,
    outputSchema: AnalyzeSymptomsOutputSchema,
  },
  async input => {
    const {output} = await analyzeSymptomsPrompt(input);
    return output!;
  }
);
