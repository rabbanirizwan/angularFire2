import { Directive,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter} from '@angular/core';

  import { Sortable } from '@shopify/draggable';

@Directive({
  selector: '[appSortable]'
})
export class SortableDirective implements AfterViewInit  {
  @Input()
  data: any[];

  @Output()
  stop = new EventEmitter();

  sortable: Sortable;
  constructor(private el: ElementRef) { }

  ngAfterViewInit() {
    this.sortable = new Sortable(this.el.nativeElement, {
      draggable: 'li'
    });

    this.sortable.on('sortable:stop', e => this.handleStop(e));
  }
  handleStop(e) {
    console.log(e);
    const { newIndex, oldIndex } = e;
    const next = this.data;
    const moved = next.splice(oldIndex, 1);
    next.splice(newIndex, 0, moved[0]);

    this.stop.emit();
  }
}



