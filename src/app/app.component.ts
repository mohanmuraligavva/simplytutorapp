import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { FirebaseService } from './firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplytutorapp';

  user: UserModel = new UserModel();
  constructor(private firebaseService: FirebaseService) {


  }

  login(): void {
    this.firebaseService.GetDocument("users_1").subscribe(usersRes => {
      // let isLoginSuccess = false;
      // for (var i = 0; i < usersRes.length; i++) {
      //   if (this.user.userName == usersRes[i]['username'] && this.user.password == usersRes[i]['password']) {
      //     isLoginSuccess = true;
      //     break;
      //   }
      //   else {
      //     isLoginSuccess = false;
      //   }
      // }
      

      // if (isLoginSuccess) {
      //   alert("login Success");
      // }
      // else{
      //   alert("login Failure");
      // }

      const filterUsers = usersRes.filter(user => this.user.userName == user['username'] &&  this.user.password == user['password']);
      if(filterUsers.length == 1) // matched 
      {
        alert("login Success");
      }
      else{
        alert("login failure");
      }
    });
  }
}

export class UserModel {
  userName: string = '';
  password: string = '';
}
