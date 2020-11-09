import { BlockPoint, IConnectorOptions, IBlockAreaOptions, IBlockOptions } from '@igloo15/block-drop';

export interface IConnectorExtOptions extends IConnectorOptions {
    loc?: BlockPoint;
    className?: string;
}

export interface IBlockExtOptions extends IBlockOptions {
    connectors?: IConnectorExtOptions[];
    className?: string;
}

export interface IBlockAreaExtOptions extends IBlockAreaOptions {
    className?: string;
    blocks?: IBlockExtOptions[];
}