import { Component, OnInit } from '@angular/core';
import { prodOrder } from 'src/app/library/prod-order.lib';
import { HttpService } from 'src/app/services/http.service';
  
@Component({
    selector: 'month-app',
    templateUrl: './monthTpl.html',
    providers: [HttpService]
})
export class MonthComponent implements OnInit {
    
    private orders: prodOrder[]=[];
    //private http: HttpService;
    
    constructor(private http: HttpService){}

    ngOnInit(){
        this.http.getData('testdata.json').subscribe(data => this.orders=data["queryResult"]);
        console.log(this.orders);
    }
 }