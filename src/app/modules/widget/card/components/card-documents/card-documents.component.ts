import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DocumentModel} from '../../../../document/models/document.model';

@Component({
  selector: 'app-card-documents',
  template: `
    <ng-container *ngIf="document">
      <div class="row">
        <div class="col-12">
          <mat-card class="my-2 py-0 px-3 mat-elevation-z4 document-card">
            <aside class="document-card--logo">
              <img [src]="document.imgUrl" [alt]="document.eventName" />
            </aside>
            <main class="document-card--content">
              <div class="row">
                <div class="col-lg-7 my-2 d-flex flex-column justify-content-center">
                  <h4 class="font-weight-bold">{{ document.organizationName }}</h4>
                  <p>{{ document.eventName }}</p>
                  <footer>
                    <span>{{ document.eventType }}</span>
                    <span><mat-icon class="text-success">fiber_manual_record</mat-icon> {{ document.status }}</span>
                    <span>{{ document.paymentFee }} {{ document.currency }}</span>
                    <span>
                      <mat-icon class="mx-2" color="primary" *ngFor="let category of document.organization.categories">{{ category }}</mat-icon>
                    </span>
                  </footer>
                </div>
                <div class="col-lg-5 my-2">
                  <ul class="document-card--content__date">
                    <li>
                      <span>Event start date and time:</span>
                      <span class="date">{{ document.startDate | date: 'short' }}</span>
                    </li>
                    <li>
                      <span>End date and time of Q&A/Complaint session:</span>
                      <span class="date">{{ document.complianceDate | date: 'short' }}</span>
                    </li>
                    <li>
                      <span>End date and End time of event:</span>
                      <span class="date">{{ document.endDate | date: 'short' }}</span>
                    </li>
                    <li>
                      <span>Opening date and time of the envelopes:</span>
                      <span class="date">{{ document.envelopDate | date: 'short' }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </main>
            <footer class="document-card--action">
              <button mat-button color="primary" (click)="$action.emit(document.id)">
                <mat-icon>input</mat-icon>
              </button>
            </footer>
          </mat-card>
        </div>
      </div>
    </ng-container>
  `,
  styleUrls: ['./card-documents.component.scss'],
})
export class CardDocumentsComponent implements OnInit {
  @Input() document: DocumentModel;
  @Output() $action: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
