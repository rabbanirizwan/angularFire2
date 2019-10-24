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

  //delete(e) {
    
    
    //  this.firestore.doc(`customers/bob`).delete()
    //}
  //}
   ngOnInit() { //Promise<Observable<Item[]>>
    this.itemService.getItem().subscribe(items =>{
      this.items=items
      this.showSpinner=false;
    })

  
  //  
    // this.spinnner = this.itemService.getItem({limitToLast: 5})
    // this.spinnner.subscribe((items) => {this.showSpinner = false,this.items=items})
    //this.itemService
  }
  // GetData(){
  //   this.items=this.itemService.all() 
   
  // }
  deleteItem(event,item:Item){
    this.clearState()
   
  
   // if (this.progress === 100) {
    this.itemService.delete(item)
  //}
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
    console.log(item)
    this.itemService.updateItem(item);
    this.clearState();
  }

}
