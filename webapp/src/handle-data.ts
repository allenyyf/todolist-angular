import { Injectable } from "@angular/core"
import { Http,Response,Headers,RequestOptions } from "@angular/http"
import { List } from "./list.component"
import { Observable } from "rxjs/Observable"
import { Data } from "./dataInterface"


@Injectable()

export class HandleData{
    private url="/data"
    
    constructor(private http:Http){}

    updateData(data:Data){
        let header = new Headers({"Content-type":"application/json"})
        let options = new RequestOptions({headers:header})
        let Data = JSON.stringify(data)
        console.log(Data)
        this.http.post(this.url,Data,options)
                 .subscribe((r:Response)=>{console.log(r)})
        }
                 
                        
                        

    // :Observable< Response>

    // getData():Observable{

    // }

    // err(){
    //     console.log("error")
    // }

}