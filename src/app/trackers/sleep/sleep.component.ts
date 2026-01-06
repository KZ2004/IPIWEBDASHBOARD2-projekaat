import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface SleepEntry {
  dan: string;
  sati: number;
  datum: Date;
}

@Component({
  selector: 'app-sleep',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sleep.component.html',
  styleUrls: ['./sleep.component.css']
})
export class SleepComponent {
  dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];
  
  odabraniDan = this.getDanasnjiDan();
  uneseniSati: number = 8;
  
  logSpavanja: SleepEntry[] = [];

  dodajZapis() {
    if (this.uneseniSati > 0 && this.uneseniSati <= 24) {
      const noviZapis: SleepEntry = {
        dan: this.odabraniDan,
        sati: this.uneseniSati,
        datum: new Date()
      };
      this.logSpavanja.unshift(noviZapis);
    } else {
      alert('Molimo unesite realan broj sati (1-24).');
    }
  }

  obrisiZapis(index: number) {
    this.logSpavanja.splice(index, 1);
  }

  getDanasnjiDan(): string {
    const daniSedmice = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
    return daniSedmice[new Date().getDay()];
  }
}