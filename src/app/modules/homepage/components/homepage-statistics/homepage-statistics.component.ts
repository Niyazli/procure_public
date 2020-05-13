import {Component, OnInit} from '@angular/core';
import {IHomepageStatistic} from '../../models/homepage-statistic.interface';
import {HOMEPAGE_STATISTIC} from '../../const/homepage-statistic.const';

@Component({
  selector: 'app-homepage-statistics',
  template: `
    <main class="statistic">
      <div class="statistic-box" *ngFor="let statistic of statistics">
        <div class="statistic-count">
          <h2>{{ statistic.eventCount }}</h2>
          <p>
            {{ statistic.eventType }}
            <span class="statistic-new">+ {{ statistic.newEvents }} TODAY</span>
          </p>
        </div>
      </div>
    </main>
  `,
  styleUrls: ['./homepage-statistics.component.scss'],
})
export class HomepageStatisticsComponent implements OnInit {
  statistics: IHomepageStatistic[] = HOMEPAGE_STATISTIC;
  constructor() {}

  ngOnInit(): void {}
}
