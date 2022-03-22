import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BindingTask';
// name:string='Aishwarya';
 //@Input() name: string;
  name="Aishwarya kote";
  //bgColor='grey';
color='grey';
errcolor=true;
today=Date.now();
src1='https://images.unsplash.com/photo-1532623845879-6b65ced3eb93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80';
width1=200;
changeColor(){
    this.errcolor=!this.errcolor;
    this.color="blue";
    
    //this.today;
    //this.name="Hi this is aK";
  }
}
