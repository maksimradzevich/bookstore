import { Component } from '@angular/core';

import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager } from 'ng-jhipster';

import { IRating } from 'app/shared/model/rating.model';
import { RatingService } from './rating.service';

@Component({
  templateUrl: './rating-delete-dialog.component.html'
})
export class RatingDeleteDialogComponent {
  rating: IRating;

  constructor(protected ratingService: RatingService, public activeModal: NgbActiveModal, protected eventManager: JhiEventManager) {}

  clear() {
    this.activeModal.dismiss('cancel');
  }

  confirmDelete(id: number) {
    this.ratingService.delete(id).subscribe(() => {
      this.eventManager.broadcast({
        name: 'ratingListModification',
        content: 'Deleted an rating'
      });
      this.activeModal.dismiss(true);
    });
  }
}
