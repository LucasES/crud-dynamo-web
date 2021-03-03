import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {

  currentPerson: Person = {
    firstName: '',
    lastName: '',
    age: undefined,
    documentNumber: '',
    gender: ''
  };

  message = '';

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    console.log(this.route.snapshot.params.documentNumber);
    this.getPerson(this.route.snapshot.params.documentNumber);
  }

  getPerson(documentNumber: string): void {
    this.personService.getByDocumentNumber(documentNumber)
      .subscribe(
        data => {
          this.currentPerson = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePerson(): void {
    this.personService.update(this.currentPerson.documentNumber, this.currentPerson)
      .subscribe(
        response => {
          console.log(response);
          this.message = "The person was updated with success!";
        },
        error => {
          console.log(error);
        });
  }

  deletePerson(): void {

    this.personService.delete(this.currentPerson.documentNumber)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/person-list']);
        },
        error => {
          console.log(error);
        });
  }
}
