import {
  BoxBufferGeometry,
  InstancedMesh,
  MeshStandardMaterial,
} from "../../../node_modules/three/build/three.module.js";

function createCubeInstance(count) {
  const geometry = new BoxBufferGeometry(1, 1, 1);

  const material = new MeshStandardMaterial({ color: 0xffff88 });
  const cubeInstance = new InstancedMesh(geometry, material, count);

  return cubeInstance;
}

export { createCubeInstance };
