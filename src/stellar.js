export class Age {
  constructor(birthday) {
    this.earth = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(5) * 1);
    this.rates = [["Mercury",0.24],["Venus",0.62],["Mars",1.88],["Jupiter",11.86]];
  }

  convertAge() {
    let strOut = `You have been alive for:
                  ${this.earth} Earth years
                  `;
    for (let i = 0; i < this.rates.length; i++) {
      let thisPlanet = this.rates[i][0];
      let thisAge = (this.earth / this.rates[i][1]).toPrecision(5) * 1;
      strOut += `${thisAge} ${thisPlanet} years
                `;
    }
    return strOut;
  }

  timeLeft() {
    if (80 - this.earth > 0) {
      const earthTimer = (80 - this.earth);
      let strOut = `You will die in approximately:
      ${earthTimer} Earth years
      `;
      for (let i = 0; i < this.rates.length; i++) {
        let thisPlanet = this.rates[i][0];
        let thisTimeLeft = (earthTimer / this.rates[i][1]).toPrecision(5) * 1;
        strOut += `${thisTimeLeft} ${thisPlanet} years
        `;
      }
      return strOut;
    } else {
      const earthPast = (-1 * (80 - this.earth)).toPrecision(3);
      let strOut = `Good job, old timer! You've lived approximately:
      ${earthPast} Earth years past your expected lifespan
      `;
      for (let i = 0; i < this.rates.length; i++) {
        let thisPlanet = this.rates[i][0];
        let thisTimePast = (earthPast / this.rates[i][1]).toPrecision(3) * 1;
        strOut += `${thisTimePast} ${thisPlanet} years past your expected lifespan
        `;
      }
      return strOut;
    }
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

  toJupiter() {
    return ((this.earth / 11.86)).toPrecision(5) * 1;
  }

  toEarthDeath() {
    if (80 - this.earth > 0) {
      return (80 - this.earth).toPrecision(5) * 1;
    } else {
      const past = (-1 * (80 - this.earth)).toPrecision(1);
      return (`${past} past the expected lifespan!`);
    }
  }

  toMercuryDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 0.24).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.24).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

  toVenusDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 0.62).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.62).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

  toMarsDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 1.88).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 1.88).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

  toJupiterDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 11.86).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 11.86).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

}
