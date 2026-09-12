import { Component } from '@angular/core';
import { SERVICES } from '../../data/services.data';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  // Exposes the shared service data to the component template.
  readonly services = SERVICES;
}