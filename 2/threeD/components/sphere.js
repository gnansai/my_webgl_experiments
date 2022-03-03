import {
  SphereGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
} from "../../../node_modules/three/build/three.module.js";

function createSphere() {
  const geometry = new SphereGeometry(1, 32, 16);
  const material = new MeshStandardMaterial();
  const sphere = new Mesh(geometry, material);

  return sphere;
}

export { createSphere };
