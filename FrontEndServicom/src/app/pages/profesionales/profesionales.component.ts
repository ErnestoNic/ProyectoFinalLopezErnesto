import { Component, Input, OnInit } from '@angular/core';




@Component({
  selector: 'app-profesionales',
  templateUrl: './profesionales.component.html',
  styleUrls: ['./profesionales.component.css']
})
export class ProfesionalesComponent implements OnInit {

  @Input() valor:any=[];

  constructor() { 
   
  }


  ngOnInit(): void {
  }

}
