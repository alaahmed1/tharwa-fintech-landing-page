import { Component } from '@angular/core';

// Defines the structure of every footer navigation link.
interface FooterLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  // Generates the year automatically instead of hard-coding it.
  readonly currentYear = new Date().getFullYear();

  readonly navigationLinks: readonly FooterLink[] = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Impact', href: '#impact' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];
}