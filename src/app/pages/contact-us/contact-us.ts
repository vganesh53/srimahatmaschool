import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  imports: [],
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.scss',
})
export class ContactUs {
  onSubmit(event: Event) {
    event.preventDefault();
    alert('Thank you for contacting Sri Mahatma Public School. We will get back to you soon.');
    (event.target as HTMLFormElement).reset();
  }
}
