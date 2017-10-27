import "./rxjs-operater"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { FormsModule } from "@angular/forms"
import { MdlModule } from "angular2-mdl"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { HttpModule } from "@angular/http"


import { AppComponent } from "./app.component"
import { HandleData } from "./handle-data"
import { Item } from './item.component';
import { List } from "./list.component"
import { Data } from "./dataInterface"



@NgModule({
    imports:[BrowserModule,FormsModule,MdlModule,NgbModule,HttpModule],
    declarations:[AppComponent,Item,List],
    providers:[HandleData],
    bootstrap:[AppComponent]
})

export class AppModule{}