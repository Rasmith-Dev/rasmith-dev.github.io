import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Everestre Insurence Project',
      technologies: 'Java 8, Springboot, Angular, Angular Material',
      description: [
        'this is a Guide Wire based Insurence application.Risk Management Work Station and SA Pinnacle are insurance based applications.',
        'I am a part of development team. Worked as Full stack developer on Enhancements',
        'and new requirements in this Project in both Front end (Angular) and Back end (Spring Boot).',
        'Got to learn About Azure Devops, Azure Storage Explorer, AQL Server Management System',
        'Learnt Angular and got Exposure in the Front-End',
      ],
    },
    {
      title: 'BNYM Account Project',
      technologies: 'advamced Java, Spring',
      description: [
        'Development and implementation of small to medium components of a project module.',
        'Work on problems of limited scope, through usage of standard software development concepts and principles.',
        ],
    },
    {
      title: 'CITI Account Project',
      technologies: 'Core Java, J2EE, Springboot, Microservices',
      description: [
        'Migration of a Tibco-Bw application to Spring Boot Application.',
        'Used Spring to create Micro services.',
        'Work on problems of limited scope, through usage of standard software development concepts and principles.',
        'Learned multiple technologies to build the product.',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
