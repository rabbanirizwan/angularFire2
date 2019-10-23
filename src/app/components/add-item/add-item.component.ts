import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import {Item} from '../../item';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  items:Item={
    name:'',
    description:''
  }
  constructor(public itemService:ItemService) { }

  ngOnInit() {
  }
  onSubmit(){
    if(this.items.name!=='' && this.items.description!==''){
      this.itemService.addItem(this.items);
      this.items.name=" ";
      this.items.description=""
    }
  }
}
