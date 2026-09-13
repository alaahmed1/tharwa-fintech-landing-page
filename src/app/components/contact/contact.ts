import { Component, inject, signal } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly formBuilder = inject(FormBuilder);

  // Controls whether the success confirmation is displayed.
  readonly isSubmitted = signal(false);

  // Reactive Forms stores and validates all contact-form values.
  readonly contactForm = this.formBuilder.nonNullable.group({
    fullName: [
      '',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(80),
      ],
    ],
    email: [
      '',
      [
        Validators.required,
        Validators.email,
        Validators.maxLength(120),
      ],
    ],
    company: ['', [Validators.maxLength(100)]],
    message: [
      '',
      [
        Validators.required,
        Validators.minLength(20),
        Validators.maxLength(1000),
      ],
    ],
  });

  submitContactForm(): void {
    this.isSubmitted.set(false);

    if (this.contactForm.invalid) {
      // Displays validation messages for every invalid field.
      this.contactForm.markAllAsTouched();
      return;
    }

    // This assignment has no backend, so submission is demonstrated locally.
    this.isSubmitted.set(true);
    this.contactForm.reset();
  }
}