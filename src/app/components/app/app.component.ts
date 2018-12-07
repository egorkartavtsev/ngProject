import { Component} from '@angular/core';
import { Router} from '@angular/router';
// import {ActivatedRoute} from '@angular/router';
// import {Subscription} from 'rxjs';
  
@Component({
    selector: 'root-app',
    templateUrl: './rootApp.html'
})
export class AppComponent {
    private year:string;
    private month:string;
    private date:string;
    
    constructor(private router:Router){
        let date = new Date();
        this.year = date.getFullYear().toString();
    }

    goTo(report:string){

        let queryParam = {};

        switch(report){
            case 'year':
                queryParam = {
                    query:this.year
                }
            break;
            case 'month':
                queryParam = {
                    query:this.year+'-'+this.month
                }
            break;
            case 'week':
                queryParam = {
                    query:this.date
                }
            break;
        }

        this.router.navigate(
            [report],
            {
                queryParams:queryParam
            }
        );
    }

}