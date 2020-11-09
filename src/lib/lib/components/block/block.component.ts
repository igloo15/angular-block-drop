import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Block, BlockArea, IConnectorOptions, IBlockOptions } from '@igloo15/block-drop';
import { IConnectorExtOptions, IBlockExtOptions } from '../../models/extOptions';
import { BlockDropService } from '../../services/block-drop.service';

@Component({
  selector: 'bd-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() parent: BlockArea;
  @Input() options: IBlockExtOptions;

  @ViewChild('blockMain') blockMain: ElementRef;

  public block: Block;
  public outputs: IConnectorExtOptions[] = [];
  public inputs: IConnectorExtOptions[] = [];
  public remove: (block: Block) => void;

  constructor(private blockService: BlockDropService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.block = new Block(this.blockMain.nativeElement, this.options);
    this.blockService.block$.next({ component: this, block: this.block});
    if(this.options.connectors) {
      this.options.connectors.forEach(co => {
        if (co.isInput) {
          this.inputs.push(co);
        } else {
          this.outputs.push(co);
        }
      })
    }
  }

  ngOnDestroy() {
    this.remove(this.block);
  }

}
