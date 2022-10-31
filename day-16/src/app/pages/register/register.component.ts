import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerFrom = new FormGroup({
    fn:new FormControl("",[Validators.required]),
    ln:new FormControl("",[Validators.required]),
    email:new FormControl("",[Validators.required,Validators.email]),
    username:new FormControl("",[Validators.required]),
    age:new FormControl("",[Validators.required]),
    password:new FormControl("",[Validators.required]),

  })
  constructor(private _data:DataService) { }
  

  ngOnInit(): void {
  }

  get fn(){return this.registerFrom.get('fn')}
  get ln(){return this.registerFrom.get('ln')}
  get email(){return this.registerFrom.get('email')}
  get age(){return this.registerFrom.get('age')}
  get username(){return this.registerFrom.get('username')}
  get password(){return this.registerFrom.get('password')}

  handleRegister (){
    console.log(this.registerFrom.value)
  }

  

  // handleRegister (data:any){
  //   if (data.valid){
  //     this._data.registerUser(this.userData).subscribe(
  //       result=>{
  //         console.log(result)
  //       }
  //     )
  //   }
    
  }

