import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Arasada Rasmith Patnaik'],
    ['DOB', '16/03/1998'],
    ['Work Exp', '4.6 Years'],
    ['Education', 'B.Tech (2020)'],
    ['Interests', 'Developing and Deploying Solutions'],
  ];

  aboutMe: string[] = [
    'Hi, I am a Java Full Stack Developer with more than 4.6 years of experience in software industry.',
    'Day-to-Day involves creating modular and scalable microservice systems. Responsible for Developing code for software components and applications',
    'Delivered all Projects withing deadlines. Always eager to learn new technologies.',
    'Currently, working as Application Developer at Thoughtworks',
  ];

  constructor() {}

  ngOnInit(): void {}
}
