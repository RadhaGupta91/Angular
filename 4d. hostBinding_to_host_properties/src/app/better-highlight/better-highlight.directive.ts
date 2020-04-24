import { OnInit,
     Directive, 
     ElementRef, 
     Renderer2, 
     HostListener, 
     HostBinding } from '@angular/core';

@Directive({
    selector:'[appBetterHighLight]'
})
export class betterHighLightDirective implements OnInit{
    //set default color
    @HostBinding('style.backgroundColor') backgroundColor:string = 'orange';
    
    constructor(private ele:ElementRef, private renderer:Renderer2 )
    {}

    ngOnInit(){
        // this.renderer.setStyle(this.ele.nativeElement,'background-color',"yellow")
        // this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        // this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        // this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px")
    }

    //change the properties on mouseover
    @HostListener('mouseenter') mouseover(eventData:Event){
        this.backgroundColor  = "yellow";
        // this.renderer.setStyle(this.ele.nativeElement,'background-color',"yellow")
        this.renderer.setStyle(this.ele.nativeElement,'color',"black")
        this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px") 
    }

    //change the properties on mouseleave
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor  = "blue";
        // this.renderer.setStyle(this.ele.nativeElement,'background-color',"blue")
        this.renderer.setStyle(this.ele.nativeElement,'color',"white")
        this.renderer.setStyle(this.ele.nativeElement,'padding',"10px")
        this.renderer.setStyle(this.ele.nativeElement,'fontSize',"20px")
        this.renderer.setStyle(this.ele.nativeElement,'margin-top',"20px") 
    }
}