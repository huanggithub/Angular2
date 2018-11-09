import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VappComponent } from './app.Vcomponent';
import { MyUnless } from './app.myUnless';


@NgModule({
  declarations: [
    AppComponent,
    VappComponent,
    MyUnless
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
