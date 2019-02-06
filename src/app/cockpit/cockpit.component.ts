import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() servercreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintrcreated = new EventEmitter<{serverName: string, serverContent: string}>();
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit() {
  }
  onAddServer() {
  this.servercreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  })
  }

  onAddBlueprint() {
  this.blueprintrcreated.emit({
    serverName: this.newServerName,
    serverContent: this.newServerContent
  })
  }

}
