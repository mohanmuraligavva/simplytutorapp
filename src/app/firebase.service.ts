import { Injectable } from "@angular/core";
import { CollectionReference, DocumentData, Firestore, collection, collectionData } from "@angular/fire/firestore";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
   })
export class FirebaseService
{
    constructor(private firestore: Firestore)
    {
        
    }
    public GetDocument(documentName : string) : Observable<DocumentData[]>
    {
        const itemCollection = collection(this.firestore, documentName);
        var collectiondataResult = collectionData(itemCollection);
        return collectiondataResult;
    }
}