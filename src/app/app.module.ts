import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CourseCardComponent } from './course-card/course-card.component';
// import { DYNAMIC_VALUE_TOKEN, dynamicValueFactory } from './model/constants';
import { InjectionToken } from '@angular/core';
import { CourseImageComponent } from './course-image/course-image.component';

export const DYNAMIC_VALUE_TOKEN = new InjectionToken<string>('dynamic_value_token');

export function dynamicValueFactory() {
    // Perform some dynamic calculations or fetch the value from an API
    return 'dynamic_value'; 
  }


@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    CourseImageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: DYNAMIC_VALUE_TOKEN, useFactory : dynamicValueFactory
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
