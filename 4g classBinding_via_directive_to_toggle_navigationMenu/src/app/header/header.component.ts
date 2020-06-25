import { Component, Output,EventEmitter} from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'

})

export class HeaderComponent{
    collapsed = true;
    @Output() featureEmitter = new EventEmitter<string>();

    onSelect(link:string)
    {
        this.featureEmitter.emit(link);
    }
}