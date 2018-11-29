import { Component } from '@angular/core';
import { FilterService }        from '../../services/filter.service';
import { FilterModel }          from '../../library/filter-model';
  
@Component({
    selector: 'month-app',
    templateUrl: './monthTpl.html'
})
export class MonthComponent {
    private filter: FilterModel;
    constructor (private filterService: FilterService){
        console.log('Month start');
        this.filterService.filter.subscribe(filt => {
            this.filter = filt;
        });
        console.log('Это сабж в лямбде-МЕСЯЦА: '+this.filter.areaFilter+' '+this.filter.machinesFilter+' '+this.filter.dateFilter+' ');
    }
 }