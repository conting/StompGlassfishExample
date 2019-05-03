import { Component } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private rxStompService: RxStompService){
      rxStompService.connected();
  }
}
