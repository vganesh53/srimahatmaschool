import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.scss',
})
export class Home {
    currentSlide = 0;
    banners = [
        {
            image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=2000',
            title: 'Welcome to Sri Mahatma Public',
            subtitle: 'Where Learning Meets Fun & Excellence!'
        },
        {
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2000',
            title: 'Igniting Young Minds',
            subtitle: 'Empowering future leaders through modern education.'
        },
        {
            image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=2000',
            title: 'A Vibrant Community',
            subtitle: 'Join a family dedicated to scholastic and personal growth.'
        }
    ];

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.banners.length;
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.banners.length) % this.banners.length;
    }

    setSlide(index: number) {
        this.currentSlide = index;
    }
}
