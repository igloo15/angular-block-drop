import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { BlockArea, IBlockAreaOptions } from '@igloo15/block-drop';
import { BlockOptions } from '../../models/blockOptions';
import { BlockDropService } from '../../services/block-drop.service';

@Component({
  selector: 'bd-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit, AfterViewInit {

  public blocks: BlockOptions[];
  public area: BlockArea;

  @Input() blockOptions: IBlockAreaOptions;

  @ViewChild('innerElem') innerElem: ElementRef;
  @ViewChild('containerElem') containerElem: ElementRef

  constructor(private blockService: BlockDropService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.area = new BlockArea(this.innerElem.nativeElement, this.containerElem.nativeElement, this.blockOptions);
    this.blockService.area = this.area;
  }
}
