import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createCubeInstance } from "./components/cubeInstance.js";
import { createScene } from "./components/scene.js";
import { createSphere } from "./components/sphere.js";
import { createLight } from "./components/lights.js";
import { Duplicator } from "./systems/duplicator.js";

import { createControls } from "./systems/controls.js";
import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { roundCubeInstance } from "./components/roundCubeInstance.js";

import {
  Object3D,
  Color,
  DynamicDrawUsage,
  Clock,
} from "../../node_modules/three/build/three.module.js";

// These variables are module-scoped: we cannot access them
// from outside the module
let camera;
let renderer;
let scene;
let loop;
let anim;
let deltaa;
let lightanim;

class World {
  constructor(container) {
    let time;
    camera = createCamera();

    scene = createScene();
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const light = createLight();
    const clock = new Clock();

    scene.add(light);

    const controls = createControls(camera, renderer.domElement);

    //color
    const color = new Color();

    //OurCode

    const cube3 = createCube(1, 1, 1, 0, 0, 0, 0xff5518);

    const dummy = new Object3D();
    const dummy2 = new Object3D();
    const dummy3 = new Object3D();
    const dummy4 = new Object3D();
    const dummy5 = new Object3D();
    const count = 300;
    // const testmesh = createCubeInstance(count);
    const testmesh = roundCubeInstance(count);

    testmesh.instanceMatrix.setUsage(DynamicDrawUsage);

    testmesh.position.set(-40, -30, 0);

    for (let i = 0; i < count; i++) {
      testmesh.setColorAt(i, color.setHSL(Math.sin(i * 0.05), 1, 0.5));
    }

    scene.add(testmesh);

    testmesh.instanceColor.needsUpdate = true;

    const cube4 = createCube(0, 1, 0, 0, 0, 0, 0xff0011);
    // loop.updatables.push(cube4);

    //scene.add(cube4);

    let x, y, a, b, h, k, dum;

    a = 2;
    h = 2;
    b = 5;
    k = 0;

    let arr = [];
    let newcount = 0;
    console.log(newcount);
    let maxcount = 4;
    for (let i = 0; i <= maxcount; i++) {
      arr.push(newcount);
      newcount += parseInt(count / maxcount);
    }

    console.log(arr);

    //animates

    //Light Follow Camera

    //CubesAnim
    anim = function () {
      deltaa = clock.getDelta();
      time = clock.elapsedTime;

      //testmesh.rotation.x += time;

      if (testmesh) {
        for (let i = arr[0]; i >= arr[0] && i <= arr[1]; i++) {
          dum = dummy;
          x = dum.position.x;
          y = dum.position.y;

          //dummy.position.x = a * Math.sin((y - h) / b) + k;

          dum.rotation.x = (time + i) * 0.2;
          //dummy.rotation.y = Math.sin(time + i * 0.1) * 3;

          dum.scale.z = Math.sin(time + i * 0.1) * 10;
          dum.scale.y = Math.sin(time + i * 0.1) * 10;

          dum.position.x = i * 1.1;
          dum.position.y = 50;
          dum.updateMatrix();
          testmesh.setMatrixAt(i, dum.matrix);
        }

        for (let i = arr[1]; i >= arr[1] && i <= arr[2]; i++) {
          dum = dummy2;
          x = dum.position.x;
          y = dum.position.y;

          dum.position.y = a * Math.sin((x - h) / b) + k;
          dum.rotation.x = (time * 5 + i * 0.5) * 0.2;
          //dummy.rotation.y = Math.sin(time + i * 0.1) * 3;

          dum.scale.z = 5;
          dum.scale.y = 5;

          dum.position.y = 35;
          dum.position.x = i * 1.1 - arr[1] * 1.1;
          dum.updateMatrix();
          testmesh.setMatrixAt(i, dum.matrix);
        }

        for (let i = arr[2]; i >= arr[2] && i <= arr[3]; i++) {
          dum = dummy3;
          x = dum.position.x;
          y = dum.position.y;

          //dum.position.y = a * Math.sin((x - h) / b) + k;

          dum.rotation.x = Math.sin(time + i * 0.1) * 3;

          dum.scale.z = Math.abs(Math.sin(time + i * 0.0) * 8) + 2;
          dum.scale.y = 5;

          dum.position.y = 20;
          dum.position.x = i * 1.1 - arr[2] * 1.1;
          dum.updateMatrix();
          testmesh.setMatrixAt(i, dum.matrix);
        }

        for (let i = arr[3]; i >= arr[3] && i <= arr[4]; i++) {
          dum = dummy4;
          x = dum.position.x;
          y = dum.position.y;

          dum.scale.z = i * 0.02;
          dum.scale.y = Math.abs(8 * Math.sin((x - time * 5) / 5) + k) + 1;

          dum.position.y = 5;
          //dum.position.y += a * Math.sin((x - time * 5) / b) + k;
          dum.position.x = i * 1.1 - arr[3] * 1.1;

          dum.updateMatrix();
          testmesh.setMatrixAt(i, dum.matrix);
        }

        testmesh.instanceMatrix.needsUpdate = true;
      }
    };

    //Resizer
    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }

  render() {
    renderer.render(scene, camera);
    renderer.setAnimationLoop(function () {
      renderer.render(scene, camera);
      anim();
    });
  }

  start() {
    // loop.start();
    renderer.render(scene, camera);
  }

  stop() {
    loop.stop();
  }
}

export { World };
