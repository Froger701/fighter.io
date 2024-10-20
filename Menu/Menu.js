/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Menu extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Menu/costumes/costume1.svg", {
        x: 370.96471471471466,
        y: 289.7897897897898,
      }),
    ];

    this.sounds = [new Sound("pop", "./Menu/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
    ];
  }

  *whenthisspriteclicked() {
    this.broadcast("gamestart");
    this.visible = false;
  }

  *whenGreenFlagClicked() {
    this.moveAhead();
    this.visible = true;
  }
}
