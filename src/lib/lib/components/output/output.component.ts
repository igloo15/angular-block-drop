import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Block, BlockArea, Connector } from '@igloo15/block-drop';
import { IConnectorExtOptions } from '../../models/extOptions';

@Component({
  selector: 'bd-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() parent: Block;
  @Input() area: BlockArea;
  @Input() options: IConnectorExtOptions;
  @ViewChild('connector') connectorElem: ElementRef;

  public connector: Connector;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.options.isInput = false;
    this.connector = new Connector(this.connectorElem.nativeElement, this.area, this.options);
    this.parent.addInput(this.connector);
  }

  ngOnDestroy() {
    this.parent.removeConnector(this.connector);
  }

}
