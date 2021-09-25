import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
//import { ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
 
  userExist=false;
  
  constructor(private register: RegisterService,private router:Router) { }

  ngOnInit(): void {
  }
  
  SignIn= new FormGroup({
    email:new FormControl(),
    password: new FormControl() 
  })


  save(data:any ){
    //let data=this.SignUp.value;
    
    this.register.checkData(data).subscribe((res)=>{
      this.userExist=true;
      console.log(res);
      if(this.userExist){
        console.log(this.userExist);
        this.router.navigate(["/home"]);
  }
  else{
    alert('not registered :-(');
  }
    });
  }
}


