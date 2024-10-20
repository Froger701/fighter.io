import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Menu from "./Menu/Menu.js";
import Cross from "./Cross/Cross.js";
import Player from "./Player/Player.js";
import Cross2 from "./Cross2/Cross2.js";
import Sprite1 from "./Sprite1/Sprite1.js";
import Comp from "./Comp/Comp.js";
import Comp2 from "./Comp2/Comp2.js";
import Comp3 from "./Comp3/Comp3.js";
import Comp4 from "./Comp4/Comp4.js";
import Sprite2 from "./Sprite2/Sprite2.js";
import Comp5 from "./Comp5/Comp5.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Menu: new Menu({
    x: 35,
    y: 8,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 86.97481946971112,
    visible: true,
    layerOrder: 11,
  }),
  Cross: new Cross({
    x: 511,
    y: 10,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2,
  }),
  Player: new Player({
    x: 6,
    y: -83,
    direction: -37.251401435429955,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 1,
  }),
  Cross2: new Cross2({
    x: 46.08951678357164,
    y: -3.6532835399031,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3,
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10,
  }),
  Comp: new Comp({
    x: -23,
    y: -178,
    direction: 16.975499467929737,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 7,
  }),
  Comp2: new Comp2({
    x: -168,
    y: 80,
    direction: 150.66333822121572,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 8,
  }),
  Comp3: new Comp3({
    x: -107,
    y: -90,
    direction: 86.45523354440512,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 6,
  }),
  Comp4: new Comp4({
    x: 134,
    y: 87,
    direction: -143.0224036473275,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 5,
  }),
  Sprite2: new Sprite2({
    x: 36,
    y: 28,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9,
  }),
  Comp5: new Comp5({
    x: -15,
    y: 121,
    direction: 174.12260739335687,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 300,
    visible: false,
    layerOrder: 4,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
