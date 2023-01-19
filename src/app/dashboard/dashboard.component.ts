import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

constructor(private ds:DataService,private fb:FormBuilder){
  this.user=this.ds.currentuser
}
  // acno=''
  // psw=''
  // amnt=''

  // acno1=''
  // psw1=''
  // amnt1=''

  user=''

depositForm=this.fb.group({acno:[''],psw:[''],amnt:['']})

withdrawForm=this.fb.group({acno1:[''],psw1:[''],amnt1:['']})

deposit(){
var acno=this.depositForm.value.acno
var psw=this.depositForm.value.psw
var amnt=this.depositForm.value.amnt

const result=this.ds.deposit(acno,psw,amnt)

if(result){
  alert(`${amnt} credited to your account and the available balance is ${result}`)


}
else{
  alert('incorrect acno or password')
}
}
withdraw(){

  var acno1=this.withdrawForm.value.acno1
  var psw1=this.withdrawForm.value.psw1
  var amnt1=this.withdrawForm.value.amnt1

  const result=this.ds.withdraw(acno1,psw1,amnt1)
  if(result){
    alert(`${amnt1} is debited and the balance is ${result}`)
  }
}




}
