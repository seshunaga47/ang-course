import { Component, Input, Output, OnInit, ContentChild, AfterViewInit, TemplateRef } from '@angular/core';
import { Course } from '../model/course';
import { EventEmitter } from '@angular/core';
import { CourseImageComponent } from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input({ required: true }) course: Course
  @Input() cardindex: number;
  @Output("courseSelected")
  courseEmitter = new EventEmitter<Course>();

  @ContentChild(CourseImageComponent)
  contentChild;


  @Input()
  inputBlankImgTemplate:TemplateRef<any>;

  /**
   *
   */
  constructor() {

  }
  ngAfterViewInit(): void {
    console.log(this.contentChild);
  }

  ngOnInit(): void {

  }
  onCourseViewed() {
    console.log("Component level - card component clicked");
    this.courseEmitter.emit(this.course);
  }

  isImageAvailable() {
    return (this.course.iconUrl != null && this.course.iconUrl != undefined)
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return 'beginner';
    }
    // return {
    //   'beginner': (this.course.category == 'BEGINNER'),
    //   'beginner2': (this.course.category != 'BEGINNER')
    // }
  }

  cardStyles() {
    return { 'text-decoration': 'underline' };
  }

  cardStyleImage() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }
}
