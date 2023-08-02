import { Component, OnInit } from '@angular/core';
import { Shibe } from '../interfaces/shibe';
import { ShibesService } from '../services/shibes.service';

@Component({
  selector: 'app-shibes',
  templateUrl: './shibes.component.html',
  styleUrls: ['./shibes.component.scss']
})
export class ShibesComponent implements OnInit {
  isLoading: boolean = true;
  shibes: Shibe[] = [];

  constructor(private shibesService: ShibesService){  }

  ngOnInit(): void{

  
    this.shibesService.getShibes().subscribe((response:any) => {
      if (response!==null) {
        setTimeout(()=>{
          this.shibes = response;
          this.isLoading = false;

        },1500);
        
        
      }
      
    });

    
  }


 
}
