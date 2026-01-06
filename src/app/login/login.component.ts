import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from '@angular/fire/auth'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userData = {
    email: '',
    ime: '',
    password: ''
  };

  currentTheme = 'blue-theme';

  private auth = inject(Auth);
  private router = inject(Router);

  setTheme(theme: string) {
    this.currentTheme = theme;
  }

  // Funkcija za PRIJAVU (Login)
  async onSubmit() {
    try {
      await signInWithEmailAndPassword(
        this.auth, 
        this.userData.email, 
        this.userData.password
      );
      alert('Uspješna prijava!');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Greška:', error);
      alert('Greška pri prijavi: ' + error.message);
    }
  }

  async onRegister() {
    try {
      await createUserWithEmailAndPassword(
        this.auth,
        this.userData.email,
        this.userData.password
      );
      alert('Nalog uspješno kreiran!');
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Greška:', error);
      alert('Greška pri registraciji: ' + error.message);
    }
  }
}