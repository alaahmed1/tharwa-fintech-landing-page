import { Component } from '@angular/core';
import { ProsperityEcosystem } from '../prosperity-ecosystem/prosperity-ecosystem';

@Component({
  selector: 'app-hero',
  imports: [ProsperityEcosystem],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {}