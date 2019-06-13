import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConverterFormComponent } from './converter-form/converter-form.component';

const routes: Routes = [
  { path: "", component: ConverterFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
