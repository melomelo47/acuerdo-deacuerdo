import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-urna',
  templateUrl: './urna.component.html',
  styleUrls: ['./urna.component.css']
})
export class UrnaComponent implements OnInit {
   
  @Output() voto = new EventEmitter();
  public yaVoto:boolean;
  @Input() nombreVotante;

  ngOnInit() {
      this.yaVoto = false;
  }

  votar(votacion:boolean){
      this.voto.emit(votacion);
      this.yaVoto = true;
  }


  
}