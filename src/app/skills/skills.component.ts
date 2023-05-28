import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Core Java',
      level: 'Intermidiate',
      rating: 80,
    },
    {
      name: 'JAVA J2ee',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Spring, Spring MVC, Springboot',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'SQL, DBMS, RDBMS',
      level: 'Intermediate',
      rating: 75,
    },
    {
      name: 'HTML, CSS',
      level: 'Expert',
      rating: 80,
    },
    {
      name: 'Angular, Angular Material, TypeScript',
      level: 'Intermediate',
      rating: 45,
    }, 
    {
      name: 'Azure Devops, Git, Jira',
      level: 'Expert',
      rating: 80,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
