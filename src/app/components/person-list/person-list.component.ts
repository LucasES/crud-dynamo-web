import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  peopleList?: Person[];
  currentPerson?: Person;
  currentIndex = -1;
  documentNumber = '';

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
    this.retrievePeopleList();
  }

  retrievePeopleList(): void {
    this.personService.getAll()
      .subscribe(
        data => {
          this.peopleList = data;
        },
        error => {
          console.log(error);
        });
  }

  searchByDocumentNumber(): void {
    this.refreshValues();
    this.personService.getByDocumentNumber(this.documentNumber)
      .subscribe(
        data => {
          this.peopleList = [data];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrievePeopleList();
    this.refreshValues();
  }

  refreshValues(): void {
    this.currentPerson = undefined;
    this.currentIndex = -1;
  }

  setActivePerson(person: Person, index: number): void {
    this.currentPerson = person;
    this.currentIndex = index;
  }
}
