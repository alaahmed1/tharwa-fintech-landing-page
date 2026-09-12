import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProsperityEcosystem } from './prosperity-ecosystem';

describe('ProsperityEcosystem', () => {
  let component: ProsperityEcosystem;
  let fixture: ComponentFixture<ProsperityEcosystem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProsperityEcosystem],
    }).compileComponents();

    fixture = TestBed.createComponent(ProsperityEcosystem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
