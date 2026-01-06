import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DnevniUnos {
  dan: string;
  jela: string[];
}

@Component({
  selector: 'app-food',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  novoJelo: string = '';
  odabraniDan: string = this.getDanasnjiDan();

  sedmica: DnevniUnos[] = [
    { dan: 'Ponedjeljak', jela: [] },
    { dan: 'Utorak', jela: [] },
    { dan: 'Srijeda', jela: [] },
    { dan: 'Četvrtak', jela: [] },
    { dan: 'Petak', jela: [] },
    { dan: 'Subota', jela: [] },
    { dan: 'Nedjelja', jela: [] }
  ];

  dodajJelo() {
    if (this.novoJelo.trim()) {
      const danUnosa = this.sedmica.find(d => d.dan === this.odabraniDan);
      if (danUnosa) {
        danUnosa.jela.push(this.novoJelo);
        this.novoJelo = ''; // Resetuj polje
      }
    }
  }

  getDanasnjiDan(): string {
    const dani = ['Nedjelja', 'Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota'];
    return dani[new Date().getDay()];
  }
}