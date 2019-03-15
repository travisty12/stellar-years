export class Age {
  constructor(birthday) {
    this.earth = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(5) * 1);
  }

  toMercury() {
    return ((this.earth / 0.24)).toPrecision(5) * 1;
  }

  toVenus() {
    return ((this.earth / 0.62)).toPrecision(5) * 1;
  }

  toMars() {
    return ((this.earth / 1.88)).toPrecision(5) * 1;
  }

}
