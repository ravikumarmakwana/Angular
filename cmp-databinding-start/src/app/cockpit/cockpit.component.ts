import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"],
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  // newServerName = "";
  // newServerContent = "";

  @ViewChild("newServerContent") newServerContent: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(newServerName: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      // serverName: this.newServerName
      serverContent: this.newServerContent.nativeElement.value,
      // serverContent: this.newServerContent,
    });
  }

  onAddBlueprint(newServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      // serverName: this.newServerName
      serverContent: this.newServerContent.nativeElement.value,
      // serverContent: this.newServerContent,
    });
  }
}
