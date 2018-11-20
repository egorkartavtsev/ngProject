import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
 
import {Routes, RouterModule} from '@angular/router';
 
import { AppComponent }     from './components/app/app.component';
import { FilterComponent}   from './components/filter/filter.component';
import { WeekComponent }    from './components/week/week.component';
import { YearComponent }    from './components/year/year.component';
import { MonthComponent }   from './components/month/month.component';
 
// определение маршрутов
const appRoutes: Routes =[
    { path: '', component: WeekComponent},
    { path: 'year', component: YearComponent},
    { path: 'month', component: MonthComponent},
    { path: '**', redirectTo: '/' }
];
 
@NgModule({
    imports:      [ BrowserModule, HttpClientModule, RouterModule.forRoot(appRoutes)],
    declarations: [ AppComponent, FilterComponent, WeekComponent, MonthComponent, YearComponent],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }