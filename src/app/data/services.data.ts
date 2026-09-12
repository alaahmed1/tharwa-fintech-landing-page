import { Service } from '../models/service.model';

// Static service content is shared by the hero ecosystem and Services section.
export const SERVICES: readonly Service[] = [
  {
    id: 'digital-payments',
    title: 'Digital Payments',
    shortDescription: 'Pay securely from anywhere.',
    description:
      'Make fast and secure digital payments with a simple experience designed for everyday life.',
    icon: 'payment',
    tone: 'lime',
  },
  {
    id: 'money-transfers',
    title: 'Money Transfers',
    shortDescription: 'Move money with confidence.',
    description:
      'Send and receive money through a reliable transfer experience with clear transaction details.',
    icon: 'transfer',
    tone: 'forest',
  },
  {
    id: 'merchant-solutions',
    title: 'Merchant Solutions',
    shortDescription: 'Tools that help businesses grow.',
    description:
      'Accept payments, understand activity, and manage everyday business transactions in one place.',
    icon: 'merchant',
    tone: 'yellow',
  },
  {
    id: 'bill-payments',
    title: 'Bill Payments',
    shortDescription: 'Keep essential payments organised.',
    description:
      'Review and pay everyday bills through one clear and convenient digital experience.',
    icon: 'bill',
    tone: 'forest',
  },
  {
    id: 'digital-wallet',
    title: 'Digital Wallet',
    shortDescription: 'Your money, always within reach.',
    description:
      'Store payment methods securely and manage everyday spending from a single digital wallet.',
    icon: 'wallet',
    tone: 'lime',
  },
  {
    id: 'payment-gateway',
    title: 'Payment Gateway',
    shortDescription: 'Reliable payments for digital businesses.',
    description:
      'Give customers a secure and consistent checkout experience across digital channels.',
    icon: 'gateway',
    tone: 'orange',
  },
];