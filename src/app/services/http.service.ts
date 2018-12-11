import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProdOrder} from '../library/prod-order.lib';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs';
import { map } from 'rxjs/operators';
  
@Injectable()
export class HttpService{
    //private test:ProdOrder[];
    constructor(private http: HttpClient){ }
    
    getData() : Observable<ProdOrder[]> {
        return this.http.get('testdata.json').pipe(
            map(data=>{
                let orderList = data["queryResult"];
                return orderList.map(
                    function(order:any) {
                        return {
                            dateStart: order.dateStart, 
                            dateEnd: order.dateEnd, 
                            operation: order.operation, 
                            quest: order.quest, 
                            area: order.area
                        };
                    }
                );
            })
        );
    }

    getDataNew(){
        return this.http.post(
            'http://localhost/local_app/test.aspx', 
            '21',
            {responseType: 'text'}
        );
    }
}