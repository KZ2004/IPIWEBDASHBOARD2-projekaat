import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-water',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {
  
  popijenoLitara: number = 0;
  ciljLitara: number = 5;

  
  dodajVodu(kolicina: number) {
    if (this.popijenoLitara + kolicina <= this.ciljLitara) {
      this.popijenoLitara += kolicina;
    } else {
      this.popijenoLitara = this.ciljLitara;
    }
  }

  
  resetujVodu() {
    this.popijenoLitara = 0;
  }

  
  get procenat(): number {
    return (this.popijenoLitara / this.ciljLitara) * 100;
  }
}