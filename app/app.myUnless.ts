import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
// TemplateRef 访问组件的模板
// ViewContainerRef 视图内容渲染器
@Directive({
    selector: '[myUnless]'
})
export class MyUnless {

    @Input('myUnless')
    set condition(newCondition:boolean){
        if(newCondition){
            this.viewContainer.createEmbeddedView(this.tempalteRef);
        }else{
            this.viewContainer.clear();
        }
    }
    constructor(private tempalteRef:TemplateRef<any>,private viewContainer:ViewContainerRef){

    }


}

