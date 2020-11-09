import { AfterViewInit, Component } from '@angular/core';
import { IBlockAreaExtOptions } from 'src/lib/lib/models/extOptions';
import { BlockDropService } from 'src/lib/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'base-angular-lib';
  areaOptions: IBlockAreaExtOptions;

  constructor(private blockService: BlockDropService) {
    this.areaOptions = {
      gridBackground: true,
      connectionAlternative: false,
      lockToArea: true,
      blocks: [
        { className:'my-block', id: 'whatever', loc: {x: 600, y: 1031}, data: {bill:'myname'}, connectors: [
            {className: 'block-output', isInput: false, alternateConnCurve: true}
          ]
        },
        { className:'my-block', id: 'whatever2', loc: {x: 600, y: 500}, data: {bill:'myname'}, connectors: [
            {className: 'block-input', isInput: true, alternateConnCurve: false},
            {className: 'block-output', isInput: false, alternateConnCurve: true}
          ]
        }
      ]
    }
  }

  ngAfterViewInit(): void {
    // this.blockService.addBlock({className:'my-block', id: 'whatever', loc: {x: 600, y: 1031}, data: {bill:'myname'}, connectors: [
    //   {className: 'block-output', isInput: false, alternateConnCurve: true}
    // ]}).then(b => {
    //   console.log(b);
    //   const data = b.getData<{bill:string}>();
    //   console.log(data.bill);
    // });
  }
}
