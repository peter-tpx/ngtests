export class RangeSliderFilter {

  constructor(

    public min: number,
    public max: number,
    public start: number,
    public end: number,

    public value: [number, number],

    public showRange: boolean,
    public label: any,

    public tooltip: any,
    public behavior: any,

    public onValueChanged: (ev) => void,
    public bindingOptions: any

  ) {}
}

interface IPosition {
  visible: true;
  format: (value) => string;
  position: string;
}

interface ITooltip {
  visible: true;
  format: (value) => string;
  showMode: boolean;
  position: string;
}
