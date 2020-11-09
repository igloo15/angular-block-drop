import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Block, BlockArea, Connector } from '@igloo15/block-drop';
import { IConnectorExtOptions } from '../../models/extOptions';

@Component({
  selector: 'bd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() parent: Block;
  @Input() area: BlockArea;
  @Input() options: IConnectorExtOptions;
  @Input() data: any;
  @ViewChild('connector') connectorElem: ElementRef;

  public connector: Connector;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.options.isInput = true;
    this.connector = new Connector(this.connectorElem.nativeElement, this.area, this.options);
    this.parent.addInput(this.connector);
  }

  ngOnDestroy() {
    this.parent.removeConnector(this.connector);
  }
}
