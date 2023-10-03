import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, AfterContentInit,
  AfterContentChecked, AfterViewChecked {



  courses = COURSES;
  startDate = new Date(2000, 0, 1);
  title = COURSES[0].description;
  price = 9.99423349;

  @ViewChild('myCardRef1')
  myCard1: CourseCardComponent

  @ViewChild('myCardRef2', { read: ElementRef })
  myCard2: CourseCardComponent

  @ViewChild('myDivContainer')
  myDiv: ElementRef

  @ViewChildren(CourseCardComponent,{read:ElementRef})
  cards: QueryList<ElementRef>;
  counter: number = 0;
  
  onCourseSelected(course: Course) {
    // console.log("App Root level - card component clicked", course);
    console.log('card1', this.myCard1);
    console.log('card2', this.myCard2);
    console.log('container', this.myDiv)
  }

  printmessage(data) {
    console.log(data);
  }

  ngAfterContentInit(): void {
    console.log(this.counter++ + 'fromContentInit', this.cards);

  }

  ngAfterContentChecked(): void {
    console.log(this.counter + '-fromContentchecked', this.cards);
    this.counter = this.counter + 1;
  }

  ngAfterViewInit(): void {
    // console.log('containerdev', this.myCard2);
    console.log(this.counter + 'From View Init: myChildren', this.cards);
    console.log(this.counter + 'From View Init: myChildren', this.cards.first);

    this.cards.changes.subscribe(
      cad => console.log(cad)
    );
    this.counter++;
  }

  ngAfterViewChecked(): void {
    console.log(this.counter + '-From ngAfterViewChecked', this.cards);
    this.counter++;
  }

  onCoursesEdited() {

    this.courses.push(
      {
        id: 12,
        // description: "Angular Core Deep Dive",
        description: "New course",
        iconUrl: 'https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png',
        longDescription: "A detailed walk-through of the most important part of Angular - the Core and Common modules",
        category: 'BEGINNER',
        lessonsCount: 10
      }
    );

  }


}
