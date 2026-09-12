import { Component } from '@angular/core';

// Defines the information required for every process step.
interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  // The ordered steps are displayed in sequence in the template.
  readonly steps: readonly ProcessStep[] = [
    {
      number: '01',
      title: 'Choose what you need',
      description:
        'Explore financial services designed for individuals, merchants and growing businesses.',
    },
    {
      number: '02',
      title: 'Connect securely',
      description:
        'Create your secure access and select the tools that support your financial goals.',
    },
    {
      number: '03',
      title: 'Move forward',
      description:
        'Manage payments, transfers and everyday financial activity through one clear experience.',
    },
  ];
}