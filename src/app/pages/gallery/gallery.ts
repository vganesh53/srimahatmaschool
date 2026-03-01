import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  activeTab: 'images' | 'videos' = 'images';

  setActiveTab(tab: 'images' | 'videos') {
    this.activeTab = tab;
  }
}
