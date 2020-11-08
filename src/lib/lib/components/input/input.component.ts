import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { Block, BlockArea, Connector, ConnectorOptions } from '@igloo15/block-drop';

@Component({
  selector: 'bd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() parent: Block;
  @Input() area: BlockArea;
  @Input() connectorOptions: ConnectorOptions;
  @Input() data: any;

  public connector: Connector;

  constructor(private elRef: ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.connectorOptions.isInput = true;
    this.connector = new Connector(this.elRef.nativeElement, this.area, this.connectorOptions, this.data);
    this.parent.addInput(this.connector);
  }

  ngOnDestroy() {
    this.parent.re
  }
}
