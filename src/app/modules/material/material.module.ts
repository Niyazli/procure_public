import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {PortalModule} from '@angular/cdk/portal';
import {MatRippleModule} from '@angular/material/core';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatProgressBarModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSidenavModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatBottomSheetModule,
    MatTabsModule,
    MatTooltipModule,
    PortalModule,
    MatRippleModule,
    MatChipsModule
  ],
})
export class MaterialModule {}
