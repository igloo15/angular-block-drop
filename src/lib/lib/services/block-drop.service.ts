import { Injectable } from '@angular/core';
import { Block, BlockArea } from '@igloo15/block-drop';

@Injectable({
  providedIn: 'root'
})
export class BlockDropService {

  public blocks: Block[];
  public area: BlockArea;

  constructor() { }

  public removeBlock(block: Block) {
    const index = this.blocks.findIndex(b => b.internalId === block.internalId);
    this.blocks.splice(index, 1);
    block.delete();
  }
}
