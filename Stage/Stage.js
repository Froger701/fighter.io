/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 380.2237237237237,
        y: 281.03078078078084,
      }),
      new Costume("backdrop3", "./Stage/costumes/backdrop3.svg", {
        x: 380.2237237237237,
        y: 278.0277777777778,
      }),
      new Costume("backdrop2", "./Stage/costumes/backdrop2.svg", {
        x: 379.3791299999999,
        y: 284.033785,
      }),
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
