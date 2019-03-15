export function isValid(year, month, day) {
  if (month < 1 || month > 12 || year > 2019 || day < 1 || day > 31) {
    return false;
  } else if (day > 30 && (month == 2 || month == 4 || month == 6 || month == 9 || month == 11)) {
    return false;
  } else if ((day > 28 && month == 2) && (!(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) ))) {
    return false;
  } else if (year == 2019 && (month > 3 || (month == 3 && day > 15))) {
    return false;
  } else {
    return true;
  }
}

export class Age {
  constructor(birthday) {
    this.birthday = birthday;
    this.earth = (((Date.now() - (new Date(birthday).getTime())) / 31557600000).toPrecision(5) * 1);
    this.rates = [["Mercury",0.241],["Venus",0.615],["Mars",1.881],["Jupiter",11.86]];
  }

  convertAge() {
    let strOut = `<p>You have been alive for:</p>
                  <p>${this.earth} Earth years</p>`;
    for (let i = 0; i < this.rates.length; i++) {
      let thisPlanet = this.rates[i][0];
      let thisAge = (this.earth / this.rates[i][1]).toPrecision(5) * 1;
      strOut += `<p>${thisAge} ${thisPlanet} years</p>`;
    }
    return strOut;
  }

  timeLeft() {
    if (80 - this.earth > 0) {
      const earthTimer = (80 - this.earth);
      let strOut = `<p>You will die in approximately:</p>
      <p>${earthTimer} Earth years</p>`;
      for (let i = 0; i < this.rates.length; i++) {
        let thisPlanet = this.rates[i][0];
        let thisTimeLeft = (earthTimer / this.rates[i][1]).toPrecision(5) * 1;
        strOut += `<p>${thisTimeLeft} ${thisPlanet} years</p>`;
      }
      return strOut;
    } else {
      const earthPast = (-1 * (80 - this.earth)).toPrecision(3);
      let strOut = `<p>Good job, old timer! You've lived approximately:</p>
      <p>${earthPast} Earth years past your expected lifespan</p>`;
      for (let i = 0; i < this.rates.length; i++) {
        let thisPlanet = this.rates[i][0];
        let thisTimePast = (earthPast / this.rates[i][1]).toPrecision(3) * 1;
        strOut += `<p>${thisTimePast} ${thisPlanet} years past your expected lifespan</p>`;
      }
      return strOut;
    }
  }

  toNextBirthday() {
    let toNextEarthBirthday = 1 - ((this.earth) % 1);
    toNextEarthBirthday *= 31557600000;
    toNextEarthBirthday += Date.now();
    toNextEarthBirthday = new Date(toNextEarthBirthday).toDateString();
    let strOut = `<p>Your next birthday will be on:</p>
    <p>${toNextEarthBirthday} on Earth</p>`;

    for (let i=0; i < this.rates.length; i++)  {
      let toNextBirthday = 1 - ((this.earth / this.rates[i][1]) % 1);
      toNextBirthday *= 31557600000 * this.rates[i][1];
      toNextBirthday += Date.now();
      toNextBirthday = new Date(toNextBirthday).toDateString();
      strOut += `<p>${toNextBirthday} on ${this.rates[i][0]}</p>`;
    }

    return strOut;
  }

  toMercury() {
    return ((this.earth / 0.241)).toPrecision(5) * 1;
  }

  toVenus() {
    return ((this.earth / 0.615)).toPrecision(5) * 1;
  }

  toMars() {
    return ((this.earth / 1.881)).toPrecision(5) * 1;
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
      return ((80 - this.earth) / 0.241).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.241).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

  toVenusDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 0.615).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 0.615).toPrecision(5);
      return (`${past} past the expected lifespan!`);
    }
  }

  toMarsDeath() {
    if (80 - this.earth > 0) {
      return ((80 - this.earth) / 1.881).toPrecision(5) * 1;
    } else {
      const past = ((-1 * (80 - this.earth)) / 1.881).toPrecision(5);
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

  nextEarthBirthday() {
    let toNextBirthday = 1 - (this.earth % 1);
    toNextBirthday *= 31557600000;
    toNextBirthday += Date.now();
    toNextBirthday = new Date(toNextBirthday).toDateString();
    return toNextBirthday;
  }

  nextMercuryBirthday() {
    let toNextBirthday = 1 - ((this.earth / 0.241) % 1);
    toNextBirthday *= 31557600000 * 0.241;
    toNextBirthday += Date.now();
    toNextBirthday = new Date(toNextBirthday).toDateString();
    return toNextBirthday;
  }

  nextVenusBirthday() {
    let toNextBirthday = 1 - ((this.earth / 0.615) % 1);
    toNextBirthday *= 31557600000 * 0.615;
    toNextBirthday += Date.now();
    toNextBirthday = new Date(toNextBirthday).toDateString();
    return toNextBirthday;
  }

  nextMarsBirthday() {
    let toNextBirthday = 1 - ((this.earth / 1.881) % 1);
    toNextBirthday *= 31557600000 * 1.881;
    toNextBirthday += Date.now();
    toNextBirthday = new Date(toNextBirthday).toDateString();
    return toNextBirthday;
  }

  nextJupiterBirthday() {
    let toNextBirthday = 1 - ((this.earth / 11.86) % 1);
    toNextBirthday *= 31557600000 * 11.86;
    toNextBirthday += Date.now();
    toNextBirthday = new Date(toNextBirthday).toDateString();
    return toNextBirthday;
  }

  keith() {
    const keithJupiterFutureDogYears = (((new Date("2073-01-01").getTime() - (new Date("1943-12-18").getTime())) / 31557600000) * 7 / 11.86).toPrecision(5) * 1;
    return `Keith Richards, legendary rock god and generous lover, will be ${keithJupiterFutureDogYears} Jovian-Dog-years old in 2073.`;
  }

  mayfly() {
    const mayflyLives = (((Date.now() - (new Date(this.birthday).getTime())) / 300000).toPrecision(5) * 1);
    return `You, the eternal one, have lived the equivalent of ${mayflyLives} mayfly lives.`;
  }

}
