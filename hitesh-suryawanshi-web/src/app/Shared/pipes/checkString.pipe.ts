import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkString'
})
export class CheckStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
   if(/^\d+$/.test(value)){
     return value
   }else{
     return 'NA'
   }
  }

}
