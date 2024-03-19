import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vterisk',
  templateUrl: './vterisk.component.html',
  styleUrls: ['./vterisk.component.css']
})
export class VTERiskComponent implements AfterViewInit {
  constructor(private elements :ElementRef){}
  ngAfterViewInit(): void {
    let scores = this.elements.nativeElement.querySelectorAll(".VTEValueSpace");
  //   let VTE = [
  //     true, false, true, false, false, true, true, false, true,
  //     true, false, false, true, true, false, true, false, true,
  //     false, true, false, true, true, true, false, false, true
  // ];
    for(let i = 1;i<scores.length;i++)
    {
      // scores[i].parentElement.nextElementSibling.nextElementSibling.checked = VTE[i];
      let checked:Boolean = scores[i].parentElement.nextElementSibling.nextElementSibling.checked;
      if(checked){this.VTEScore+= +scores[i].innerText}
    }

  }
  VTEScore : number = 0;

  checkValue(e:Event)
  {
    let element:HTMLInputElement = e.currentTarget as HTMLInputElement
    this.VTEScore += element.checked ? 1 : -1;
  }
}
