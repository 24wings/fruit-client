import { Component, OnInit ,OnDestroy} from '@angular/core';
import {FruitClientService} from '../fruit-client.service';
enum Views{
  Login,
}
@Component({
  selector: 'app-fruit-client-signin-page',
  templateUrl: './fruit-client-signin-page.component.html',
  styleUrls: ['./fruit-client-signin-page.component.css']
})
export class FruitClientSigninPageComponent implements OnInit,OnDestroy {
  user:FruitUser={nickname:'',phone:'',password:''}
  Views=Views;
  state:Views=Views.Login;
  constructor(public fruitClient:FruitClientService) { }

  async ngOnInit() {
   this.setBody();
  }
  setBody(){
    document.body.style.backgroundImage='url(/assets/login.jpg)'
    document.body.style.backgroundSize='cover';
    document.body.style.backgroundRepeat='repeat-y';
  }
  clearBody(){
    document.body.style.backgroundImage='none';
  }

  async login(){
   let user = await this.fruitClient.userLogin(this.user.phone,this.user.password);
   if(user){
      this.fruitClient.user=user;
      this.fruitClient.router.navigateByUrl('/')
   }
  }

  async ngOnDestroy(){
    this.clearBody();
  }

 
}
