import { PerspectiveCamera } from "../../../node_modules/three/build/three.module.js";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View
    1, // aspect ratio (dummy value)
    0.1, // near clipping plane
    1000 // far clipping plane);
  );

  camera.position.set(0, 0, 100);
  return camera;
}
export { createCamera };
