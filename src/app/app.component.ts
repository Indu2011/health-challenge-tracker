import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Workout {
  id: number;
  name: string;
  workout: string;
  time: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('myModal') modal: ElementRef | undefined;
  title = 'Workout Tracker';
  searchTerm: string = '';
  filterType: string = '';
  workouts: Workout[] = [];
  paginatedWorkouts: Workout[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 5;
  modalVisible: boolean = false;
  workoutObj: Workout = { id: 0, name: '', workout: '', time: 0 };

  ngOnInit(): void {
    const localData = localStorage.getItem('workouts');
    if (localData != null) {
      this.workouts = JSON.parse(localData);
    }
    this.paginate();
  }

  search(): void {
    this.paginate();
  }

  filter(): void {
    this.paginate();
  }

  paginate(): void {
    let filteredWorkouts = this.workouts;
    if (this.searchTerm) {
      filteredWorkouts = filteredWorkouts.filter(workout =>
        workout.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
    if (this.filterType) {
      filteredWorkouts = filteredWorkouts.filter(workout => workout.workout === this.filterType);
    }
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedWorkouts = filteredWorkouts.slice(start, end);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.paginate();
    }
  }

  changeItemsPerPage(event: Event): void {
    this.itemsPerPage = +(event.target as HTMLSelectElement).value;
    this.currentPage = 1;
    this.paginate();
  }

  openModal(): void {
    this.modalVisible = true;
  }

  closeModal(): void {
    this.workoutObj = { id: 0, name: '', workout: '', time: 0 };
    this.modalVisible = false;
  }

  onEdit(workout: Workout): void {
    this.workoutObj = { ...workout };
    this.openModal();
  }

  onDelete(workout: Workout): void {
    const isDelete = confirm("Are you sure you want to delete?");
    if (isDelete) {
      this.workouts = this.workouts.filter(w => w.id !== workout.id);
      localStorage.setItem('workouts', JSON.stringify(this.workouts));
      this.paginate();
    }
  }

  saveWorkout(): void {
    const existingWorkout = this.workouts.find(w => w.name === this.workoutObj.name && w.workout === this.workoutObj.workout);
    if (existingWorkout) {
      // Update existing workout
      existingWorkout.time += this.workoutObj.time;
    } else {
      // New Workout
      const newId = this.workouts.length ? Math.max(...this.workouts.map(w => w.id)) + 1 : 1;
      const newWorkout: Workout = {
        id: newId,
        name: this.workoutObj.name,
        workout: this.workoutObj.workout,
        time: this.workoutObj.time
      };
      this.workouts.push(newWorkout);
    }
    localStorage.setItem('workouts', JSON.stringify(this.workouts));
    this.paginate();
    this.closeModal();
  }

  get totalPages(): number {
    return Math.ceil(this.workouts.length / this.itemsPerPage);
  }

  get uniqueUserNames(): string[] {
    const names = this.workouts.map(workout => workout.name);
    return [...new Set(names)];
  }

  getNumberOfWorkouts(name: string): number {
    return this.workouts.filter(workout => workout.name === name).length;
  }

  getTotalWorkoutMinutes(name: string): number {
    return this.workouts.filter(workout => workout.name === name).reduce((total, workout) => total + workout.time, 0);
  }

  getWorkoutsByName(name: string): string[] {
    return this.workouts
      .filter(workout => workout.name === name)
      .map(workout => workout.workout);
  }
}
