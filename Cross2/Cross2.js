/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cross2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Cross2/costumes/costume1.svg", {
        x: 286.0625,
        y: 187,
      }),
    ];

    this.sounds = [new Sound("pop", "./Cross2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.touching(this.sprites["Player"].andClones())) {
        this.stage.costumeNumber++;
        yield* this.wait(1);
      }
      yield;
    }
  }
}
