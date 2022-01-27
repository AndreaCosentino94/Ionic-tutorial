import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myfilter'
})
export class MyfilterPipe implements PipeTransform {

  transform(arr: any[],
            text: string,
            column: string): any[] {

    if(text === ''){
      return arr
    }
    text = text.toLowerCase();

    return arr.filter(item => {
      return item[column].toLowerCase()
              .includes(text);
    });
  }
}
