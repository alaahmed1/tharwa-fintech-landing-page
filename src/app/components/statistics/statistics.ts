import { Component } from '@angular/core';

// Defines the information required for every impact statistic.
interface ImpactStatistic {
  value: string;
  label: string;
  description: string;
}

@Component({
  selector: 'app-statistics',
  imports: [],
  templateUrl: './statistics.html',
  styleUrl: './statistics.scss',
})
export class Statistics {
  // Static readonly data keeps the template clean and prevents accidental changes.
  readonly statistics: readonly ImpactStatistic[] = [
    {
      value: '250K+',
      label: 'People supported',
      description:
        'Individuals using accessible financial services across the region.',
    },
    {
      value: '1.8M',
      label: 'Secure transactions',
      description:
        'Digital payments and transfers processed through the Tharwa ecosystem.',
    },
    {
      value: '500+',
      label: 'Business partners',
      description:
        'Merchants and growing businesses connected through our services.',
    },
    {
      value: '99.9%',
      label: 'Platform availability',
      description:
        'Reliable access designed to keep everyday financial activity moving.',
    },
  ];
}