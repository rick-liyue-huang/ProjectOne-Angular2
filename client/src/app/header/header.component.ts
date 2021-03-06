import { Component, OnInit } from '@angular/core';
import {SocketService} from "./socket.service";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = environment.appTitle;

  messageCount: number = 0;

  constructor(public socketService: SocketService) { }

  ngOnInit() {

    this.socketService.createObservableSocket("ws://localhost:3008")
      .map(event => JSON.parse(event))
      .subscribe(
        event => this.messageCount = event.messageCount
      )
  }

}
