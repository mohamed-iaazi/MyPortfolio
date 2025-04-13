// contact.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Import here

import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule], // Add ReactiveFormsModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.messageForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.messageForm.valid) {
      const templateParams = {
        name: this.messageForm.value.name,
        email: this.messageForm.value.email,
        message: this.messageForm.value.message
      };

      emailjs.send('service_42npztl', 'template_jkn4zsa', templateParams, 'bg_MfpuJFsYLgrqeU')
        .then(() => {
          alert('Message sent successfully!');
          this.messageForm.reset();
        })
        .catch((error: any) => {
          console.error('Email sending error:', error);
          alert('Oops! Something went wrong.');
        });
    }
  }
}
