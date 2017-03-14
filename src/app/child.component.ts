import { Component , Input ,EventEmitter,Output,OnInit } from '@angular/core';
import { PersonService } from './service/info.service';
@Component({
    selector: 'child-div',
    template: `<div class="child-container">我是子组件<h1>Hello {{name}}</h1>
  			<p>{{haha}}</p>
  			<button type="button" (click) = "btnAction()">给父元素传递数据</button>
  			<p>
				<button type="button" (click)="setAttr()">修改服务属性</button>
			</p>
			</div>
  			`,
	styleUrls:['app/child-div.css']
})
export class ChildComponent implements OnInit {
	 private name = 'Angular'; 
	 // 父组件给子组件传递数据
	 @Input() public haha:string;
	 // 子组件给父组件通过触发事件传递数据
	 @Output() btnClick:EventEmitter<any> = new EventEmitter();
	 btnAction(name:any):void{
	 	this.btnClick.emit(this.name);
	 }
	 constructor(private personService:PersonService){}
	 ngOnInit(){
	 	console.log(this.personService.serviceCon);
	 	// 初始化时修改了服务的属性
	 	this.personService.serviceCon = '组件传值，通过服务共同的实例，我修改了服务共同的属性';
	 }
	 // 按钮改变服务实例共同的属性，借此可以传值
	 setAttr(){
	 	this.personService.serviceCon = '组件传值，通过服务共同的实例，我修改了服务共同的属性22';
	 }
}