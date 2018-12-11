import { Component, OnInit} from '@angular/core';
import { FilterService }        from '../../services/filter.service';
import { FilterModel }          from '../../library/filter-model';
import { HttpService }          from '../../services/http.service';
import { ProdOrder }          from '../../library/prod-order.lib';
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
  
@Component({
    selector: 'week-app',
    templateUrl: './weekTpl.html'
})
export class WeekComponent implements OnInit {

    private filter: FilterModel;
    totalData: ProdOrder[] = [];
    data: ProdOrder[] = [];
    private title:string;
    private titleFor:string;
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
                let tmp = new Date(queryParam['query']);
                tmp.setDate(tmp.getDate() + 6);
                this.titleFor = tmp.getFullYear()+'-'+tmp.getMonth()+'-'+tmp.getDate();
            }
        );
    }
    
    ngOnInit(){
        this.filterService.filter.subscribe(filt => {
            
            this.filter = filt;
            let allow = true;

            this.data = [];

            this.totalData.forEach(element => {
                allow = true;
                if(filt.areaFilter.length>0 && filt.areaFilter!==element.area){
                    allow = false;
                }
                if(filt.machinesFilter.length>0 && filt.machinesFilter!==element.operation){
                    allow = false;
                }
                if(filt.dateFilter!==undefined){
                    let tmpFiltDate = new Date(this.filter.dateFilter).valueOf();
                    let tmpStartDate = new Date(element.dateStart).valueOf();
                    let tmpEndDate = new Date(element.dateEnd).valueOf();
                    if(tmpFiltDate<tmpStartDate || tmpFiltDate>tmpEndDate){
                        allow = false;
                    }
                }

                if(allow){
                    this.data.push(element);
                }

            });
        });
        
        //this.data = this.http.getDataNew();

        this.http.getData().subscribe(data => {
            console.log('Week data start'); 
            this.data = this.totalData = data;
        });

        this.http.getDataNew().subscribe(
            data => {
                console.log(data);
            },
            error => console.log(error)
        )

    }

 }
