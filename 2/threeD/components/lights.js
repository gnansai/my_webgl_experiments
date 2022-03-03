import { DirectionalLight } from "../../../node_modules/three/build/three.module.js";
function createLight() {
  const light = new DirectionalLight(0xffffff, 5);
  light.position.set(10, 10, 10);
  return light;
}

export { createLight };
