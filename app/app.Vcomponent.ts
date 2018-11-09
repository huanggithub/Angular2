import { ElementRef, Directive, Input } from '@angular/core';


@Directive({
    selector: '[beauty]'
})
export class VappComponent {


    // 单一的绑定背景颜色
      // constructor(element:ElementRef){
      //   element.nativeElement.style.backgroundColor='green';
      // }


    // 可编辑的背景颜色
    private _defaultColor = 'green';
    private el: HTMLElement;
    @Input('beauty')
    set backgroundColor(cloorName: string) {
        this.setStyle(cloorName);
    };
    constructor(element: ElementRef) {
        this.el = element.nativeElement;
        this.setStyle(this._defaultColor);
    }
    private setStyle(color: string) {
        this.el.style.backgroundColor = color;
    }

    

}

