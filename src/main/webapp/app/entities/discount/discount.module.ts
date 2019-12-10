import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BookstoreSharedModule } from 'app/shared/shared.module';
import { DiscountComponent } from './discount.component';
import { DiscountDetailComponent } from './discount-detail.component';
import { DiscountUpdateComponent } from './discount-update.component';
import { DiscountDeleteDialogComponent } from './discount-delete-dialog.component';
import { discountRoute } from './discount.route';

@NgModule({
  imports: [BookstoreSharedModule, RouterModule.forChild(discountRoute)],
  declarations: [DiscountComponent, DiscountDetailComponent, DiscountUpdateComponent, DiscountDeleteDialogComponent],
  entryComponents: [DiscountDeleteDialogComponent]
})
export class BookstoreDiscountModule {}
