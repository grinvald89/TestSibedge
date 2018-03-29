import { Injectable } from '@angular/core';

@Injectable()
export class DateTimeService {

  constructor() { }

  DateTimeToString(date: Date): string {
    let year = date.getFullYear(),
        month = (date.getMonth() < 10 ? "0" : "") + date.getMonth(),
        day = (date.getDate() < 10 ? "0" : "") + date.getDate(),
        hours = (date.getHours() < 10 ? "0" : "") + date.getHours(),
        minutes = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes(),
        seconds = (date.getSeconds() < 10 ? "0" : "") + date.getSeconds();

    return ((year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds).toString());
  }

  StringToDateTime(str: string): Date {
    let year = str.substr(str.search(/^[0-9]{4}\-/), 4),
        month = str.substr(str.search(/\-[0-9]{2}\-/) + 1, 2),
        date = str.substr(str.search(/\-[0-9]{2}\s/) + 1, 2);

    let sTime = str.substr(str.search(/\s[0-9\:]+$/) + 1),
        hours = sTime.substr(0, sTime.indexOf(":")),
        minutes = sTime.substr(sTime.search(/\:[0-9]{2}\:/) + 1, 2),
        seconds = sTime.substr(sTime.search(/\:[0-9]{2}$/) + 1, 2);
    
    return new Date(parseInt(year),
      parseInt(month),
      parseInt(date),
      parseInt(hours),
      parseInt(minutes),
      parseInt(seconds));
  }
}
