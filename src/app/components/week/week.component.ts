import { Component, OnInit, ViewContainerRef} from '@angular/core';
import { FilterService }        from '../../services/filter.service';
import { FilterModel }          from '../../library/filter-model';
import { HttpService }          from '../../services/http.service';
import { ProdOrder }          from '../../library/prod-order.lib';
  
@Component({
    selector: 'week-app',
    templateUrl: './weekTpl.html'
})
export class WeekComponent implements OnInit {

    private filter: FilterModel;
    totalData: ProdOrder[] = [];
    data: ProdOrder[] = [];
    private test: any;

    constructor (private filterService: FilterService, private http: HttpService, private renderer: ViewContainerRef){
        console.log('Week start');
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
            this.data = this.totalData = data;
        });

    }

 }
