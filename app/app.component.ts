import { Component,ComponentFactoryResolver,NgModule,ViewChild,Renderer2,ElementRef,AfterViewInit,OnInit,Directive, ViewChildren, ViewContainerRef, ViewChildDecorator, QueryList } from '@angular/core';

@NgModule({
  declarations:[
    AppComponent
  ]
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  boolValue:boolean = false;

  constructor(private render2:Renderer2,private element:ElementRef){

  }
  // 定义子视图
  @ViewChild("dia") dia:ElementRef;
  ngOnInit(){
    console.dir(this.dia);
    this.dia.nativeElement.innerHTML = "这是一个测试案例";
    let ul = this.element.nativeElement.querySelector("p");
    this.render2.listen(ul,"click",()=>{
      this.render2.setStyle(ul,"background","blue");
    })


  }
  
}
