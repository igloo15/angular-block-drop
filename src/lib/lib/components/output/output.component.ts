import { AfterViewInit, Component, ElementRef, Input, OnInit } from '@angular/core';
import { Block, BlockArea, Connector, ConnectorOptions } from '@igloo15/block-drop';

@Component({
  selector: 'bd-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit, AfterViewInit {

  @Input() parent: Block;
  @Input() area: BlockArea;
  @Input() connectorOptions: ConnectorOptions;
  @Input() data: any;

  public connector: Connector;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.connectorOptions.isInput = false;
    this.connector = new Connector(this.elRef.nativeElement, this.area, this.connectorOptions, this.data);
    this.parent.addInput(this.connector);
  }

}
