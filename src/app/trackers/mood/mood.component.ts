import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface MoodEntry {
  emoji: string;
  label: string;
  vrijeme: Date;
}

@Component({
  selector: 'app-mood',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mood.component.html',
  styleUrls: ['./mood.component.css']
})
export class MoodComponent {

  dostupniMoods = [
    { emoji: '😊', label: 'Sretan' },
    { emoji: '😔', label: 'Tužan' },
    { emoji: '😫', label: 'Umoran' },
    { emoji: '🤩', label: 'Uzbuđen' },
    { emoji: '😡', label: 'Ljut' }
  ];

  dnevnikRaspolozenja: MoodEntry[] = [];

  dodajMood(emoji: string, label: string) {
    const noviUnos: MoodEntry = {
      emoji: emoji,
      label: label,
      vrijeme: new Date()
    };
    this.dnevnikRaspolozenja.unshift(noviUnos);
  }
} 