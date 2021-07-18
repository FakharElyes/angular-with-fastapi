import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:UsersService) { }

  UsersList:any=[];

  ModalTitle:string;
  ActivateAddEditUsrComp:boolean=false;
  usr:any;

  UserIdFilter:string="";
  UserNameFilter:string="";
  UserListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshUsrList();
  }

  refreshUsrList(){
    this.service.findAllUsers().subscribe(data=>{
      this.UsersList=data;
      this.UserListWithoutFilter=data;
      console.log("this.UsersList:",this.UsersList)
    });
  }

  addClick(){
    this.usr={
      id:0,
      name:""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditUsrComp=true;
  }

  editClick(item){
    this.usr=item;
    this.ModalTitle="Edit User";
    this.ActivateAddEditUsrComp=true;
  }


  deleteClick(item){
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshUsrList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditUsrComp=false;
    this.refreshUsrList();
  }


  FilterFn(){
    var UserIdFilter = this.UserIdFilter;
    var UserNameFilter = this.UserNameFilter;

    this.UsersList = this.UserListWithoutFilter.filter(function (el){
        return el.id.toString().toLowerCase().includes(
          UserIdFilter.toString().trim().toLowerCase()
        )&&
        el.UserName.toString().toLowerCase().includes(
          UserNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop,asc){
    this.UsersList = this.UserListWithoutFilter.sort(function(a,b){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
