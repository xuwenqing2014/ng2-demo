import { Injectable,OnInit } from "@angular/core";
import { person } from "../mock/mockPerson";


@Injectable()

export class PersonService implements OnInit{
	getPerson(){
		return person;
	};
	serviceCon:string = '我是服务的属性';
	ngOnInit(){
		
	}
}