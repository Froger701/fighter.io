/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Comp4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("New Piskel", "./Comp4/costumes/New Piskel.png", {
        x: 17,
        y: 35,
      }),
      new Costume("New Piskel copy", "./Comp4/costumes/New Piskel copy.png", {
        x: 22,
        y: 26,
      }),
      new Costume("New Piskel copy2", "./Comp4/costumes/New Piskel copy2.png", {
        x: 18,
        y: 31,
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
      new Trigger(
        Trigger.BROADCAST,
        { name: "gamestart" },
        this.whenIReceiveGamestart2
      ),
      new Trigger(Trigger.BROADCAST, { name: "punch" }, this.whenIReceivePunch),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked3),
      new Trigger(Trigger.CLONE_START, this.startAsClone),
    ];
  }

  *whenGreenFlagClicked() {
    this.costume = "New Piskel";
    this.goto(-15, 121);
    this.visible = false;
  }

  *whenIReceiveGamestart() {
    this.visible = true;
  }

  *whenGreenFlagClicked2() {}

  *whenIReceiveGamestart2() {
    while (true) {
      yield* this.glide(2, this.random(-240, 240), this.random(-180, 180));
      if (this.touching(this.sprites["Player"].andClones())) {
        this.costume = "New Piskel copy";
        yield* this.wait(1);
        this.broadcast("enemypunch");
        this.costume = "New Piskel";
      }
      yield;
    }
  }

  *whenIReceivePunch() {
    if (this.touching(this.sprites["Player"].andClones())) {
      this.createClone();
      this.visible = false;
    }
  }

  *whenGreenFlagClicked3() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    while (true) {
      this.direction = this.radToScratch(
        Math.atan2(
          this.sprites["Player"].y - this.y,
          this.sprites["Player"].x - this.x
        )
      );
      yield;
    }
  }

  *startAsClone() {
    this.goto(this.random(-240, 240), this.random(-180, 180));
    while (true) {
      yield* this.glide(2, this.random(-240, 240), this.random(-180, 180));
      if (this.touching(this.sprites["Player"].andClones())) {
        this.costume = "New Piskel copy";
        yield* this.wait(1);
        this.broadcast("enemypunch");
        this.costume = "New Piskel";
      }
      yield;
    }
  }
}
