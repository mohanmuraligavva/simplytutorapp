import { Component } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simplytutorapp';
  users: any[] =[];
  constructor(private firestore: Firestore)
  {
    const itemCollection = collection(this.firestore, 'users_1');
    var users = collectionData(itemCollection);
    users.subscribe(usersRes =>
      {
 this.users = usersRes;
      });
    
  }
}
