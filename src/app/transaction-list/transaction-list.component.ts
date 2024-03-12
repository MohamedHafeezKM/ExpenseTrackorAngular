import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit{
  transactions:any
  count:any
  constructor(private service:TransactionService){

      this.service.reloadRequired.subscribe(data=>{
        this.ngOnInit()
      })
      
      }

ngOnInit(){
  this.service.getTransactions().subscribe(data=>{
    this.transactions=data
    this.count=this.transactions.length
  })
}
removeTransaction(id:number){
  this.service.destoryTransaction(id).subscribe(data=>{
    console.log(data);
    this.ngOnInit()
  })

  }

emitTransactionID(id:number){
  this.service.dispatchTransactionId(id)
 }
}
