import { Component, OnInit} from '@angular/core';
import { FilterService }        from '../../services/filter.service';
import { FilterModel }          from '../../library/filter-model';
import { HttpService }          from '../../services/http.service';
import { ProdOrder }          from '../../library/prod-order.lib';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
  
@Component({
    selector: 'month-app',
    templateUrl: './monthTpl.html'
})
export class MonthComponent {
    private filter: FilterModel;
    private title:string;
    private routeSubscription: Subscription;
    private querySubscription: Subscription;
    constructor (private filterService: FilterService, private route: ActivatedRoute){
        console.log('Month start');
        this.filterService.filter.subscribe(filt => {
            this.filter = filt;
        });
        this.querySubscription = route.queryParams.subscribe(
            (queryParam: any) => {
                this.title = queryParam['query'];
            }
        );
        console.log('Это сабж в лямбде-МЕСЯЦА: '+this.filter.areaFilter+' '+this.filter.machinesFilter+' '+this.filter.dateFilter+' ');
    }
 }