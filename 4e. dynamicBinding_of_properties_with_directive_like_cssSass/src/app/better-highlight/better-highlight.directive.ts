import { OnInit,
     Directive, 
     ElementRef, 
     Renderer2, 
     HostListener, 
     HostBinding, 
     Input} from '@angular/core';

@Directive({
    selector:'[appBetterHighLight]'
})
export class betterHighLightDirective implements OnInit{

    @Input('appBetterHighLight') defaultHighlighter:string = 'blue';
    @Input() Highlighter:string = 'yellow';
    //set default color
    @HostBinding('style.backgroundColor') backgroundColor:string = this.defaultHighlighter;
    
    constructor(private ele:ElementRef, private renderer:Renderer2 )
    {}

    ngOnInit(){
        this.backgroundColor  =  'yellow';
    }

    //change the properties on mouseover
    @HostListener('mouseenter') mouseover(eventData:Event){
        this.backgroundColor  =  this.Highlighter;
    }

    //change the properties on mouseleave
    @HostListener('mouseleave') mouseleave(eventData:Event){
        this.backgroundColor  =  this.defaultHighlighter;
    }
}