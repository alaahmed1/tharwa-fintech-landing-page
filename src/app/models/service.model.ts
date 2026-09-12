// Restricts service icons to the supported icon names.
export type ServiceIcon =
  | 'payment'
  | 'transfer'
  | 'merchant'
  | 'bill'
  | 'wallet'
  | 'gateway';

// Restricts each service to an approved Tharwa colour treatment.
export type ServiceTone = 'forest' | 'lime' | 'yellow' | 'orange';

// Defines the structure that every financial service must follow.
export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  icon: ServiceIcon;
  tone: ServiceTone;
}