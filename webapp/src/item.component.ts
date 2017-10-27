import { Component,Input,Output,EventEmitter,ElementRef} from "@angular/core"


@Component({
    moduleId:module.id,
    selector:"todo-item",
    templateUrl:"item.component.html",
    styleUrls:["item.component.css"]
})

export class Item{
    @Input() item:Item
    // @Output() updateItemData:EventEmitter<Item> = new EventEmitter();
    @Output() removeItemNum:EventEmitter<number> = new EventEmitter()
    
    content:string=""
    status:boolean = false
    id:number=1
    constructor(){}
    
    toggleItemStatus(item:Item){
        console.log(item)
        return item.status=!item.status
    }

    removeItem(id:number){
        this.removeItemNum.emit(id)
    }

    // updateItemContent(item:Item){
    //     this.updateItemData.emit(item)
    // }
}