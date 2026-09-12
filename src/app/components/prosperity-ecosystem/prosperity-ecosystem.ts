import { Component } from '@angular/core';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-prosperity-ecosystem',
  imports: [],
  templateUrl: './prosperity-ecosystem.html',
  styleUrl: './prosperity-ecosystem.scss',
})
export class ProsperityEcosystem {
  // The same service data will also power the main Services section.
  protected readonly services = SERVICES;
}