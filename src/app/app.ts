import { Component } from '@angular/core';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Hero } from './components/hero/hero';
import { HowItWorks } from './components/how-it-works/how-it-works';
import { Services } from './components/services/services';
import { Statistics } from './components/statistics/statistics';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    About,
    Services,
    Statistics,
    HowItWorks,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}