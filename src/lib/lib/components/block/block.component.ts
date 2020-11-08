import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Block, BlockArea } from '@igloo15/block-drop';
import { BlockDropService } from '../../services/block-drop.service';

@Component({
  selector: 'bd-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() parent: BlockArea;
  @Input() name: string;
  @Input() data: any;

  public block: Block;

  constructor(private elRef: ElementRef, private blockService: BlockDropService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.block = new Block(this.name, this.elRef.nativeElement, this.data);
  }

  ngOnDestroy() {
    this.blockService.removeBlock(this.block);
  }

}
