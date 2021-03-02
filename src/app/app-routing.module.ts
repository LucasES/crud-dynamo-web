import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonDetailComponent } from './components/person-detail/person-detail.component';
import { AddPersonComponent } from './components/add-person/add-person.component';


const routes: Routes = [
  { path: '', redirectTo: 'people', pathMatch: 'full' },
  { path: 'person-list', component: PersonListComponent },
  { path: 'person/:id', component: PersonDetailComponent },
  { path: 'add', component: AddPersonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
