import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public acuerdo:number;
  public desacuerdo:number;
  public votantes:string[];

  constructor(){
      this.acuerdo=0;
      this.desacuerdo =0;
      this.votantes = ['bat', 'necr', 'another']
  }

  public conteoVotos(deAcuerdo:boolean){
      deAcuerdo ? this.acuerdo++ : this.desacuerdo++;
  }
}
