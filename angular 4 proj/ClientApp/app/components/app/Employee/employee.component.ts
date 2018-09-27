import { Component } from "../../../../../node_modules/@angular/core";


@Component({
    
        selector: 'My-employee',
    templateUrl:'./employee.component.html',
   
        
})

export class employeeComponent {

    firstname: string = "chandra";
    lastname: string = "talluri";
    gender: string = "m";
    age: string = "28";

}