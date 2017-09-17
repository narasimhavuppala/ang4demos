import { Event } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  color = 'green';
  courseName = 'C#';

  twdb = 'test user';

  studentName = 'Raja';

  hobbies = ['Cricket', 'Tennis', 'Foot Ball', 'Golf'];

  imageUrl = 'https://avatars0.githubusercontent.com/u/2546295?v=4';

  isActive = true;

  getCourseName() {
    return 'Java';
  }

  buttonClicked(event: Event) {
    console.log(this.studentName);

    this.isActive = false;
    //alert('Button is Clcked' + event.toString());
  }
}
