import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FiltercityPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param search search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], search: string): any[] {
    if (!items) {
      return [];
    }
    if (!search) {
        return items;
      }
      search = search.toLocaleLowerCase();
  
      return items.filter(it => {
        return it.toLocaleLowerCase().includes(search);
      });
    }
  }