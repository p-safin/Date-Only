export default class DateOnly {
  private _date: Date;
  private _day: string;
  
  constructor(date?: Date | string) {
    const _date = date ? new Date(date) : new Date(); 
    this._day = _date.toLocaleDateString('en-CA');
    this._date = new Date(this._day);
  }
  
  date() {
    return this._date;
  }
  
  addYears(period: number) {
    return new DateOnly(DateOnly.dateAddYears(this._date, period));
  }
  
  toString() {
    return this._day;
  }
  
  static dateAddYears(date: Date, period: number) {
    const _date = new Date(date);
    _date.setFullYear(_date.getFullYear() + period)
    return _date;
  }
}