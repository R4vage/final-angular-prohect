import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondTrackMusic',
})
export class SecondTrackMusicPipe implements PipeTransform {
  transform(seconds: number): string {
    let secondInteger = (Math.ceil(seconds) % 60).toString();
    let minutesInteger = Math.floor(seconds / 60).toString();
    secondInteger = secondInteger.length === 1 ? `0${secondInteger}` : secondInteger;
    minutesInteger = minutesInteger.length === 1 ? `0${minutesInteger}` : minutesInteger;
    return `${minutesInteger}:${secondInteger}`;
  }
}
