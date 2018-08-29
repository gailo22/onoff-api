import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  taskTypeAreas: any[] = [{name: "a"}, {name: "b"}];

  selectedOptions: any[];

  constructor() { }

  ngOnInit() {
  }

  onNgModelChange(event) {
    console.log(this.selectedOptions);
  }

}
