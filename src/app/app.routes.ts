import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'booking',
        component: BookingComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: 'my-bookings',
        component: MyBookingComponent
    }
];
