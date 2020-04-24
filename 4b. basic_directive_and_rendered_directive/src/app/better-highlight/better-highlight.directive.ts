import { OnInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
    selector:'[appBetterHighLight]'
})
export class betterHighLightDirective implements OnInit{

    constructor(private ele:ElementRef, private renderer:Renderer2 ){
    }

    ngOnInit(){
        this.renderer.setStyle(this.ele.nativeElement,'background-color',"yellow")
        this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px")
    }
}