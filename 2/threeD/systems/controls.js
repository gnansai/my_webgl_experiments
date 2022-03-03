import { OrbitControls } from "../../../node_modules/three/examples/jsm/controls/OrbitControls.js";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);
  return controls;
}

export { createControls };
