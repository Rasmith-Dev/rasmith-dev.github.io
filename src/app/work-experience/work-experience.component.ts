import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Senior Project Engineer',
      company: 'Wipro',
      duration: 'Oct 2022 - present',
      description: [
        'Worked Everestre & BNYM Account',
        'worked as a Full Stack Developer.', 
        'Involved in team to develop Applications using SpringBoot and Angular',
      ],
    },
    {
      role: 'Project Engineer',
      company: 'Wipro',
      duration: 'sept 2020 - Oct 2022',
      description: [
        'Worked Citi Account',
        'worked as a Springboot & Microservices Developer.', 
        'Used SpringBoot and Micro services',
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
