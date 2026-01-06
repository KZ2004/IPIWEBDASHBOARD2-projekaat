import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    ime: '',
    email: '',
    pass: ''
  };

  currentTheme = 'blue-theme';

  promjeniTemu(boja: string) {
    this.currentTheme = boja;
  }

  registrujSe() {
    console.log('Korisnik registrovan:', this.user);
    window.open('/dashboard', '_blank');
  }
}