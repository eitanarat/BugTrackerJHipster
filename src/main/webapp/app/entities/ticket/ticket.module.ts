import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BugTrackerJHipsterSharedModule } from 'app/shared/shared.module';
import { TicketComponent } from './ticket.component';
import { TicketDetailComponent } from './ticket-detail.component';
import { TicketUpdateComponent } from './ticket-update.component';
import { TicketDeleteDialogComponent } from './ticket-delete-dialog.component';
import { ticketRoute } from './ticket.route';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';

@NgModule({
  imports: [BugTrackerJHipsterSharedModule, RouterModule.forChild(ticketRoute)],
  declarations: [TicketComponent, TicketDetailComponent, TicketUpdateComponent, TicketDeleteDialogComponent, MyTicketsComponent],
  entryComponents: [TicketDeleteDialogComponent]
})
export class BugTrackerJHipsterTicketModule {}
