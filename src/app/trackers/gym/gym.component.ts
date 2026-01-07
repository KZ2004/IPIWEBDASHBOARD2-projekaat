import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface TreningUnos {
  dan: string;
  kategorija: string;
  vjezba: string;
  serije: number;
}

@Component({
  selector: 'app-gym',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gym.component.html',
  styleUrls: ['./gym.component.css']
})
export class GymComponent {
  dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];
  

  vjezbePoKategorijama: { [key: string]: string[] } = {
    'Noge': ['Čučanj', 'Leg Press', 'Iskorak', 'Mrtvo dizanje'],
    'Ruke': ['Biceps pregib', 'Triceps ekstenzija', 'Potisak za ramena', 'Hammer pregib'],
    'Core': ['Plank', 'Trbušnjaci', 'Russian Twist', 'Leg Raise']
  };

  odabraniDan = 'Ponedjeljak';
  odabranaKategorija = 'Noge';
  odabranaVjezba = 'Čučanj';
  brojSerija = 3;

  listaTreninga: TreningUnos[] = [];

 
  get trenutneVjezbe(): string[] {
    return this.vjezbePoKategorijama[this.odabranaKategorija] || [];
  }

  promijeniKategoriju() {
   
    const vjezbe = this.trenutneVjezbe;
    if (vjezbe.length > 0) {
      this.odabranaVjezba = vjezbe[0];
    }
  }

  dodajTrening() {
    const noviTrening: TreningUnos = {
      dan: this.odabraniDan,
      kategorija: this.odabranaKategorija,
      vjezba: this.odabranaVjezba,
      serije: this.brojSerija
    };
    this.listaTreninga.unshift(noviTrening);
  }

  obrisiTrening(index: number) {
    this.listaTreninga.splice(index, 1);
  }
}
