import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the application', () => {
    const fixture = TestBed.createComponent(App);

    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the Tharwa hero heading', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h1');

    expect(heading?.textContent).toContain('Grow money.');
    expect(heading?.textContent).toContain('Move freely.');
  });

  it('should render all main landing-page sections', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const sectionIds = [
      'about',
      'services',
      'impact',
      'how-it-works',
      'contact',
    ];

    // Confirms that every required page section is present.
    sectionIds.forEach((sectionId) => {
      expect(compiled.querySelector(`#${sectionId}`)).not.toBeNull();
    });
  });
});