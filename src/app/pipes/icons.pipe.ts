import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'icons'})
export class IconsPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/<(lore|influence|investigators|observation|reckoning|strength|will)>/g, '<span class="icon icon-$1"></span>')
      .replace(/<(health|sanity)>/g, '$1');
  }
}
