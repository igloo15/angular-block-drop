import { Injectable } from '@angular/core';
import { Block, BlockArea, IConnectorOptions, IBlockOptions } from '@igloo15/block-drop';
import { BehaviorSubject, Subject } from 'rxjs';
import { take } from 'rxjs/operators';
import { AreaComponent } from '../components/area/area.component';
import { BlockComponent } from '../components/block/block.component';
import { IConnectorExtOptions, IBlockExtOptions } from '../models/extOptions';

interface BlockPair {
  component: BlockComponent;
  block: Block;
}

@Injectable({
  providedIn: 'root'
})
export class BlockDropService {

  public areaElem: AreaComponent;
  public blocks: BlockPair[] = [];
  public blockOptions: IBlockOptions[] = [];
  public block$: Subject<BlockPair> = new Subject<BlockPair>();
  public area$: BehaviorSubject<BlockArea> = new BehaviorSubject<BlockArea>(null);
  public area: BlockArea;

  constructor() {
    this.area$.subscribe(a => {
      this.area = a;
    });
    this.block$.subscribe(b => {
      b.component.remove = block => this.innerRemoveBlock(block);
      this.blocks.push(b);
    });
  }

  private innerRemoveBlock(block: Block) {
    const index = this.blocks.findIndex(b => b.block.internalId === block.internalId);
    this.blocks.splice(index, 1);
    block.delete();
  }

  private getInnerBlockPair(id: string) {
    return this.blocks.find(b => b.block.internalId === id);
  }

  public removeBlock(block: Block) {
    if (this.area) {
      const optionIndex = this.areaElem.blocks.findIndex(b => b.id === block.id);
      this.areaElem.blocks.splice(optionIndex, 1);
    }
  }

  public addBlock(options: IBlockExtOptions): Promise<Block> {
    const p = new Promise<Block>((resolve, reject) => {
      this.block$.pipe(take(1)).subscribe(b => {
        resolve(b.block);
      })
    });
    this.blockOptions.push(options);
    return p;
  }

  public addConnectorToBlock(block: Block, options: IConnectorExtOptions) {
    this.addConnector(block.internalId, options);
  }

  public addConnector(id: string, options: IConnectorExtOptions) {
    const block = this.getInnerBlockPair(id);
    if(block) {
      if(options.isInput) {
        block.component.inputs.push(options);
      } else {
        block.component.outputs.push(options);
      }
    }
  }

  public getBlock(internalId: string) {
    const foundBlock = this.blocks.find(b => b.block.internalId === internalId);
    if (foundBlock) {
      return foundBlock.block;
    }
    return foundBlock;
  }

}
