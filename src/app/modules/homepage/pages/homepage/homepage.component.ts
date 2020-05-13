import {Component, OnInit} from '@angular/core';
import {LayoutService} from '../../../layout/services/layout.service';
import {HomepageSubheaderComponent} from '../../components/homepage-subheader/homepage-subheader.component';
import {DocumentService} from '../../../document/services/document.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private layoutService: LayoutService, private documentService: DocumentService) {}

  ngOnInit(): void {
    this.documentService.changeListType(false);
    this.layoutService.setSubheaderContent(HomepageSubheaderComponent);
  }
}
