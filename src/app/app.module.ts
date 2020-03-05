import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { EditorComponent } from './editor/editor.component';
import { ChildFormPersonalComponent } from './child-form-personal/child-form-personal.component';
import { ChildFormFamilyComponent } from './child-form-family/child-form-family.component';
import { ChildFormSingleComponent } from './child-form-single/child-form-single.component';

@NgModule({
  declarations: [AppComponent, FormComponent, EditorComponent, ChildFormPersonalComponent, ChildFormFamilyComponent, ChildFormSingleComponent],
  imports: [BrowserModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
