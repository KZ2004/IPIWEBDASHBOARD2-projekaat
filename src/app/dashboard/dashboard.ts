import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Putanje koje izlaze iz dashboard foldera u trackers folder
import { WaterComponent } from '../trackers/water/water.component';
import { SleepComponent } from '../trackers/sleep/sleep.component';
import { JournalComponent } from '../trackers/journal/journal.component';
import { GymComponent } from '../trackers/gym/gym.component';
import { MoodComponent } from '../trackers/mood/mood.component';
import { FoodComponent } from '../trackers/food/food.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    WaterComponent,
    SleepComponent,
    JournalComponent,
    GymComponent,
    MoodComponent,
    FoodComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard { 
  
}