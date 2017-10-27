import { Component } from "@angular/core"
import { Item } from "./item.component"
import { HandleData } from "./handle-data"
import { Data } from "./dataInterface"

@Component({
    moduleId:module.id,
    selector:"items-list",
    templateUrl:"list.component.html",
    styleUrls:["list.component.css"]
})

export class List{
    newItem:Item = new Item()
    items:Item[]=[]
    showItems:Item[]=[]  
    id:number = 0
    clickTab:string="all"

      
    constructor(private handleData:HandleData){
        this.showItems = this.items
    }
    
    addItem(){
        if(this.newItem.content!==""){
            this.setId(this.newItem)
            this.items.push(this.newItem)
            this.getListItem()
            this.newItem = new Item()
            console.log(this.items)
            this.updateData()
        }
    }

    removeItem(id:Number){
        this.items = this.items.filter((item)=>{ return item.id!==id})
        this.getListItem()
        this.updateData()       
    }

    // updateItem(updateItem:Item){
    //     let num = this.items.findIndex((item)=>{ return item.id == updateItem.id})
    //     this.items[num].content = updateItem.content
    // }

    setId(item:Item){
        if(!this.items.length){
            item.id = 1
        }else{
            item.id = this.items[this.items.length - 1].id +1
        }
    }

    getListItem(){
        if(this.clickTab === "all"){
            this.showAllItems()
        }else if(this.clickTab === "todo"){
            this.showTodoItems()
        }else if(this.clickTab === "done"){
            this.showDoneItems()
        }
    }

    showAllItems(){
        this.showItems = this.items
        this.clickTab= "all"
        this.updateData()
    }

    showTodoItems(){
        this.showItems = this.items.filter((item)=>{ return item.status == false})
        this.clickTab = "todo"
        this.updateData()
    }
    showDoneItems(){
        this.showItems = this.items.filter((item)=>{ return item.status == true })
        this.clickTab = "done"
        this.updateData()
    }
    clearDoneItems(){
        this.items = this.items.filter((item)=>{ return item.status == false})
        this.getListItem()
        this.updateData()
    }

    updateData(){
        let data:Data={
            tabName:"",
            Items:[]
        }
        let DataItems:any[]=[]
        data.tabName = this.clickTab
        this.items.forEach((item)=>{
            let data = {
                content:item.content,
                id:item.id,
                status:item.status }
            DataItems.push(data)
        })
        data.Items = DataItems
        
        this.handleData.updateData(data)
    }

    // getTodoData(){
    //     let Data = this.handleData.getData()
    //     this.items = Data.item
    //     this.clickTab = Data.tabName
    // }

}