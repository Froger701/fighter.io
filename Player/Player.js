/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel", "./Player/costumes/New Piskel.png", {
        x: 17,
        y: 35,
      }),
      new Costume("New Piskel copy", "./Player/costumes/New Piskel copy.png", {
        x: 22,
        y: 26,
      }),
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamestart" },
        this.whenIReceiveGamestart
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamestart" },
        this.whenIReceiveGamestart2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamestart" },
        this.whenIReceiveGamestart3
      ),
      new Trigger(
        Trigger.KEY_PRESSED,
        { key: "space" },
        this.whenKeySpacePressed
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked4),
      new Trigger(
        Trigger.BROADCAST,
        { name: "enemypunch" },
        this.whenIReceiveEnemypunch
      ),
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(6, -83);
    this.visible = false;
  }

  *whenIReceiveGamestart() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {
    this.costume = "New Piskel";
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(this.mouse.y - this.y, this.mouse.x - this.x)
      );
      yield;
    }
  }

  *whenGreenFlagClicked3() {}

  *whenIReceiveGamestart2() {
    while (true) {
      yield* this.glide(2, this.mouse.x, this.mouse.y);
      yield;
    }
  }

  *whenIReceiveGamestart3() {}

  *whenKeySpacePressed() {
    this.costume = "New Piskel copy";
    this.broadcast("punch");
    yield* this.wait(0.5);
    this.costume = "New Piskel";
  }

  *whenGreenFlagClicked4() {}

  *whenIReceiveEnemypunch() {
    this.broadcast("gameover");
  }
}
