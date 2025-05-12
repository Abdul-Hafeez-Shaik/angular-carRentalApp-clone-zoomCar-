import { Routes } from '@angular/router';
import { BookingComponent } from './pages/booking/booking.component';
import { SearchComponent } from './pages/search/search.component';
import { MyBookingComponent } from './pages/my-booking/my-booking.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
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
