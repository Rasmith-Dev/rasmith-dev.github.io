import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: 'National Institute of Science and Technology',
      course: 'Electronics and Communication Engineering',
      duration: '2017-2020',
      score: '7.72',
    },
    {
      institute: 'M.B.T.S Government Polytechnic, Guntur',
      course: 'Diploma in Electronics and Communication Engineering',
      duration: '2014-2017',
      score: '8.2',
    },
    {
      institute: 'Gnana Bharathi English Medium School',
      course: 'CBSE',
      duration: '2007-2014',
      score: '8.6',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
