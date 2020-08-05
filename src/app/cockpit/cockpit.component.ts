import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: false}) serverContentInput: ElementRef;
  @Output("srvCreated") serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  
  
  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverNameInput:  HTMLInputElement){
    // console.log(serverNameInput.value)
    this.serverCreated.emit({serverName: serverNameInput.value,
    serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(serverNameInput: HTMLInputElement){
    this.blueprintCreated.emit({serverName: serverNameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
}
