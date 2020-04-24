import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector:'[appBasicHighLight]'
})
export class basicHighLightDirective implements OnInit{

    constructor(private ele:ElementRef){
    }

    ngOnInit(){
        this.ele.nativeElement.style.backgroundColor="green";
        this.ele.nativeElement.style.color="white";
        this.ele.nativeElement.style.padding="10px";
        this.ele.nativeElement.style.fontSize="20px";
    }
}