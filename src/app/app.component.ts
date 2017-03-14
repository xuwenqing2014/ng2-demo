import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { PersonService } from './service/info.service';

@Component({
  selector: 'my-app',
  templateUrl: '../views/head.html',
  styles:[`.product{border:1px solid #f00;}.product2{border:1px solid #0f0;}`]
})

export class AppComponent implements OnInit {
 	public head:string = 'Angular'; 
 	private list:any;
 	// 从数据到view的单向绑定
 	private product:any;
 	// 给构造器注入服务
   private msg:any;
 	constructor(private personService:PersonService){
 		//不在构造器写各种逻辑，因为里面使用的变量尚未初始化，会不存在，要在ngOninit里面写
 	};
 	// 给dom元素绑定事件
 	private add(name1:string,age1:string){
 		if(name1.length > 0 && age1.length > 0){
 			this.list.push({name:name1,age:Number(age1)});
 		}
 	};
 	getPerson():void{
 		this.list = this.personService.getPerson();
 	};
 	ngOnInit(): void {
	    this.getPerson();
	    this.product = 'product';
      this.msg = '双向绑定';
  	};
  	// 接收来自子组件的数据
  	btnAction(msg:any): void{
  		alert(msg);
  	}
  	// 切换边框颜色
  	changeAction(){
  		if(this.product === 'product'){
  			this.product = 'product2';
  		}else{
  			this.product = 'product';
  		}
  	}
  	// 获取服务的属性
  	getAttr(){
  		alert(this.personService.serviceCon);
  	}

}
