import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-event-subheader',
  template: `
    <main>
      <h2>EVENTS</h2>
      <p>
        PROCURE.AZ platform allows not only types of purchases such as RFP (Request for Proposal), RFQ (Request for Quotation), RFI (Request for
        Information) RFP PP (Request for Proposal Per Position) but also for non-governmental organizations to conduct the procurement process
        according to the state process. Using the below filter, you can search for any event existing on the platform according to your preferences.
      </p>
    </main>
  `,
  styles: [
    `
      main {
        max-width: 1000px;
        text-align: center;
        margin: auto;
      }
    `
  ],
})
export class EventSubheaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
