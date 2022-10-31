import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData:any = {
    username:"",
    password:"",
  }
  constructor(private _data:DataService) { }

  handleLogin(data:any){
    if (data.valid){
      this._data.loginUser(this.userData).subscribe(
        result=>{
          console.log(result)
        }
      )
    }
    
  }

  ngOnInit(): void {
  }

}
