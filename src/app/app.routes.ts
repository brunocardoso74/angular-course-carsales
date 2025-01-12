import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { NgModule } from '@angular/core';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { HomeComponent } from './views/home/home.component';
import { CustomerListComponent } from './views/customer-list/customer-list.component';
import { CustomerEditComponent } from './views/customer-edit/customer-edit.component';

export const routes: Routes = [
    { path: '', component: LoginComponent },
    { 
        path: 'home', 
        component: HomeComponent, 
        canActivate: [AuthGuardService],
        children: [
            { path: 'dashboard', loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'users', loadChildren: () => import('./views/user-list/user-list.module').then(m => m.UserListModule) },
            { path: 'customers', component: CustomerListComponent },
            { path: 'customers/add', component: CustomerEditComponent },
            { path: 'customers/edit/:id', component: CustomerEditComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}