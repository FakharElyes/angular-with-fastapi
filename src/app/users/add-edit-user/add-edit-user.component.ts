import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:UsersService) { }

  @Input() usr:any;
  id:string;
  name:string;
  email:string;
  password:string;

  ngOnInit(): void {
    console.log("usr:",this.usr)
    this.id=this.usr.id;
    this.name=this.usr.name;
    this.email=this.usr.email;
    this.password=this.usr.password;
  }

  addUser(){
    var val = {name:this.name,
      email:this.email,
      password:this.password
    };
    console.log("val:",val)
    this.service.createUser(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateUser(){
    var val = {name:this.name,
      email:this.email,
      password:this.password};
    this.service.updateUser(this.id,val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
