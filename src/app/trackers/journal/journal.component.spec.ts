import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JournalComponent } from './journal.component';
import { FormsModule } from '@angular/forms';

describe('JournalComponent', () => {
  let component: JournalComponent;
  let fixture: ComponentFixture<JournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JournalComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

