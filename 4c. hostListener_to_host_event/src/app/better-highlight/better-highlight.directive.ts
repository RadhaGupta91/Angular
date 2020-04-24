import { OnInit, Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
    selector:'[appBetterHighLight]'
})
export class betterHighLightDirective implements OnInit{

    constructor(private ele:ElementRef, private renderer:Renderer2 ){
    }

    @HostListener('mouseenter') mouseover(eventData:Event){
        this.renderer.setStyle(this.ele.nativeElement,'background-color',"yellow")
        this.renderer.setStyle(this.ele.nativeElement,'color',"black")
        this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px") 
    }
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.renderer.setStyle(this.ele.nativeElement,'background-color',"blue")
        this.renderer.setStyle(this.ele.nativeElement,'color',"white")
        this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px") 
    }

    ngOnInit(){
        // this.renderer.setStyle(this.ele.nativeElement,'background-color',"yellow")
        // this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        // this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        // this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px")
    }
}