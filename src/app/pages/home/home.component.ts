import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imagem1: string = "/assets/p3.jpg"
  imagem2: string = "/assets/p4.jpg"
  btn: string = '/assets/btn.jpg'

  constructor() { }

  ngOnInit(): void {
  }

}
