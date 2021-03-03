import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  person: Person = {
    firstName: '',
    lastName: '',
    age: undefined,
    documentNumber: '',
    gender: ''
  };

  submitted = false;

  genderList = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' }
  ];

  constructor(private personService: PersonService) { }

  ngOnInit(): void {
  }

  savePerson(): void {
    const data = {
      firstName: this.person.firstName,
      lastName: this.person.lastName,
      age: this.person.age,
      documentNumber: this.person.documentNumber,
      gender: this.person.gender
    };

    console.log(JSON.stringify(data));
    this.personService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  resetValues(): void {
    this.submitted = false;
    this.person = {
      firstName: '',
      lastName: '',
      age: undefined,
      documentNumber: '',
      gender: ''
    };
  }
}
