import { Component, OnInit} from '@angular/core';
import { FilterService }        from '../../services/filter.service';
import { FilterModel }          from '../../library/filter-model';
import { HttpService }          from '../../services/http.service';
import { ProdOrder }          from '../../library/prod-order.lib';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
  
@Component({
    selector: 'year-app',
    templateUrl: './yearTpl.html'
})
export class YearComponent { 
    
    private title:string;
    private routeSubscription: Subscription;
    private querySubscription: Subscription;

    constructor (
        private filterService: FilterService, 
        private http: HttpService, 
        private route: ActivatedRoute
    ){
        console.log('Week start');
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.title = queryParam['query'];
            }
        );
    }
}