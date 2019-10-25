import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import {Item} from '../../item';
import {Observable} from 'rxjs/observable';
import {HoldableDirective} from '../../holdable.directive'
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
})
export class ItemsComponent implements OnInit {
 
  items : Item[];
  spinnner:any
  editState:boolean=false;
  itemTOEdit:Item;
  showSpinner: boolean = true;
  i:any[];
  constructor(private itemService:ItemService) { }
     
  progress: number;

   ngOnInit() { //Promise<Observable<Item[]>>
    this.itemService.getItem().subscribe(items =>{

      this.items=items
      console.log(items)
      this.showSpinner=false;
    })

  
  }
  
  deleteItem(event,item:Item){
    this.clearState()
     this.itemService.delete(item)
  
}
  editItem(event,item:Item){
    this.editState=true;
    this.itemTOEdit=item;
  }
  clearState(){
    this.editState=false;
    this.itemTOEdit=null;
  }
  update(item:Item)
  {
   
    this.itemService.updateItem(item);
    this.clearState();
  }

}
