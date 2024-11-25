import { Routes } from '@angular/router';
import { TimelineComponent } from './timeline/timeline.component';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "search", component: SearchComponent },
    { path: "profile", component: ProfileComponent },
    { path: "timeline", component: TimelineComponent },
    { path: "", redirectTo: "/home", pathMatch: 'full' },
    { path: "**",  component: HomeComponent }
];
