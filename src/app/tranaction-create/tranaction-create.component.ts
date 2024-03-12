import { Component } from '@angular/core';
import { FormGroup,FormControl,Validator, Validators } from '@angular/forms';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-tranaction-create',
  templateUrl: './tranaction-create.component.html',
  styleUrls: ['./tranaction-create.component.css']
})
export class TranactionCreateComponent {

  isEdit=false
  categories=['food','fuel','entertainment','bills','rent',"emi",'miscellaneous']
  transactionID:any
  transactionForm= new FormGroup({
   title:new FormControl('',Validators.required),
   type:new FormControl('',Validators.required),
   category:new FormControl('',Validators.required),
   amount:new FormControl('',[Validators.required,Validators.pattern(/^\d+$/)]),
   user:new FormControl('',Validators.required),

  })

  constructor(private service:TransactionService){
    this.service.editTransactionSub.subscribe((id:any)=>{
      this.transactionID=id
      this.isEdit=true
      this.service.retrivieTransaction(id).subscribe(data=>{
        this.transactionForm.patchValue(data)
      })
      
    })
  }



   get title(){
    return this.transactionForm.get('title')
   }
   get type(){
    return this.transactionForm.get('type')
   }
   get category(){
    return this.transactionForm.get('category')
   }
   get amount(){
    return this.transactionForm.get('amount')
   }
   get user(){
    return this.transactionForm.get('user')
   }

   createTransaction(){
    let data=this.transactionForm.value
    console.log(data);
    if (this.isEdit==false){
      this.service.addTransaction(data).subscribe(data=>{
        console.log(data);
        
      })
    }
    else{
      this.service.updateTransaction(this.transactionID,data).subscribe(data=>{
        console.log(data);
      })
    
    }

   }
  
}
