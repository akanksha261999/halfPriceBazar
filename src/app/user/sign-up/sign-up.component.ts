import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/register.service';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  isRegistered=false;
  constructor(private register: RegisterService,private router: Router) { }
  
  SignUp=new FormGroup({
    firstName:new FormControl(),
    lastName:new FormControl(),
    email:new FormControl(),
    password:new FormControl(),
    mobile:new FormControl()
   

  })

  ngOnInit(): void {
    
  }
  
  onSubmit(){
    //console.log(this.SignUp.value);
  }

  sendPostRequest(data:any ){
    //let data=this.SignUp.value;
    
    this.register.sendData(data).subscribe((res)=>{
      this.isRegistered=true;
      console.log(res);
      if(this.isRegistered){
        console.log(this.isRegistered);
        this.router.navigate(["/login"]);
  }
  else{
    alert('not registered :-(');
  }
    });
  }
}
  /*
  isRegister(){
    if(this.isRegistered){
          console.log(this.isRegistered);
          this.router.navigate(["/login"]);
    }
    else{
      alert('not registered :-(');
    }
  }
}
*/
