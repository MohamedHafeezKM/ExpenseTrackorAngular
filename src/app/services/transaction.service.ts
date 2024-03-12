import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  reloadRequired=new Subject()
  editTransactionSub=new Subject()
  baseUrl='http://127.0.0.1:8000/api/v1/transactions/'
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get(this.baseUrl)
  }

  addTransaction(data:any){
    return this.http.post(this.baseUrl,data).pipe(tap(data=>this.reloadRequired.next(true)))
  }

  destoryTransaction(id:any){
    return this.http.delete(`${this.baseUrl}${id}/`)
  }
  dispatchTransactionId(id:number){ // for editing basically
    this.editTransactionSub.next(id)
  }

  retrivieTransaction(id:number){
    return this.http.get(`${this.baseUrl}${id}/`)
  }

  updateTransaction(id:number,data:any){
    return this.http.put(`${this.baseUrl}${id}/`,data).pipe(tap(data=>this.reloadRequired.next(true)))
  }
}
