import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public faculdets = [
    {
      faculdetName: 'Տուրիզմի ֆակուլտետ',
      img: 'Tourism.png'
    },
    {
      faculdetName: 'Տեղեկատվական տեխնոլոգիաների ֆակուլտետ',
      img: 'Information-technology.png'
    },
    {
      faculdetName: 'Լեզվաբանության ֆակուլտետ',
      img: 'Translate.png'
    },
    {
      faculdetName: 'Տնտեսագիտության և կառավարման ֆակուլտետ',
      img: 'Economy.png'
    },
    {
      faculdetName: 'Միջազգային հարաբերությունների ֆակուլտետ',
      img: 'Diplomacy.png'
    },
    {
      faculdetName: 'Իրավաբանական ֆակուլտետ',
      img: 'Law.png'
    }
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
