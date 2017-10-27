
import { Component } from "@angular/core"
import { Item } from "./item.component"

@Component({
    moduleId:module.id,
    selector:"app-start",
    template:`
        <h1>ToDo List</h1>
        <items-list></items-list>`,
    styleUrls:["app.component.css"]
    
})

export class AppComponent{

}
