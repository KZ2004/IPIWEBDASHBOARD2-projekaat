import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface JournalEntry {
  dan: string;
  tekst: string;
  vrijeme: Date;
}

@Component({
  selector: 'app-journal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent {
  dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];
  
  odabraniDan = this.getDanasnjiDan();
  unosTekst = '';
  
  dnevnik: JournalEntry[] = [];

  dodajZapis() {
    if (this.unosTekst.trim()) {
      const noviZapis: JournalEntry = {
        dan: this.odabraniDan,
        tekst: this.unosTekst,
        vrijeme: new Date()
      };
      this.dnevnik.unshift(noviZapis);
      this.unosTekst = ''; // Resetuj polje
    }
  }

  obrisiZapis(index: number) {
    this.dnevnik.splice(index, 1);
  }

  getDanasnjiDan(): string {
    const daniSedmice = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
    return daniSedmice[new Date().getDay()];
  }
}