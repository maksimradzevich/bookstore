import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookstoreSharedModule } from 'app/shared/shared.module';
import { SaleComponent } from './sale.component';
import { SaleDetailComponent } from './sale-detail.component';
import { SaleUpdateComponent } from './sale-update.component';
import { SaleDeleteDialogComponent } from './sale-delete-dialog.component';
import { saleRoute } from './sale.route';

@NgModule({
  imports: [BookstoreSharedModule, RouterModule.forChild(saleRoute)],
  declarations: [SaleComponent, SaleDetailComponent, SaleUpdateComponent, SaleDeleteDialogComponent],
  entryComponents: [SaleDeleteDialogComponent]
})
export class BookstoreSaleModule {}
