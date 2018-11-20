import { Component} from '@angular/core';
  
@Component({
    selector: 'root-app',
    templateUrl: './rootApp.html',
    styles: [`
        .active{
            color: #ea0404;
            background-color: rgba(193, 42, 42, 0.8);
        }
    `]
})
export class AppComponent {}