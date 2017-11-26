import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  //to attach a class say open we use hostbinding and property is class with name as open
  @HostBinding('class.open') isOpen = false;
  
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
   }

}
