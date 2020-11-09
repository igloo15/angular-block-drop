import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BlockArea, IBlockAreaOptions, IBlockOptions } from '@igloo15/block-drop';
import { IBlockAreaExtOptions } from '../../models/extOptions';
import { BlockDropService } from '../../services/block-drop.service';

@Component({
  selector: 'bd-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, AfterViewInit {

  public area: BlockArea;

  @Input() options: IBlockAreaExtOptions = {};

  @ViewChild('innerElem') innerElem: ElementRef;
  @ViewChild('containerElem') containerElem: ElementRef

  constructor(private blockService: BlockDropService) { }

  get blocks() {
    return this.blockService.blockOptions;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.blockService.areaElem = this;
    this.area = new BlockArea(this.innerElem.nativeElement, this.containerElem.nativeElement, this.options);
    this.blockService.area$.next(this.area);
    if (this.options.blocks) {
      this.options.blocks.forEach(b => {
        this.blockService.addBlock(b);
      });
    }
  }
}
