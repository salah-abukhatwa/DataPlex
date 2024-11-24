import { Component, output } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add = output<{ title: string; text: string }>();
  onSubmit(title: string, ticketText: string, form: HTMLFormElement) {
    this.add.emit({ title: title, text: ticketText });
    form.reset;
  }
}
