import { RoundedBoxGeometry } from "../../../node_modules/three/examples/jsm/geometries/RoundedBoxGeometry.js";
import {
  BoxBufferGeometry,
  InstancedMesh,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  ExtrudeBufferGeometry,
  Shape,
} from "../../../node_modules/three/build/three.module.js";

function roundCubeInstance(count) {
  let geometry = new RoundedBoxGeometry(1, 1, 1, 4, 0.05);

  const material = new MeshStandardMaterial();

  const cubeInstance = new InstancedMesh(geometry, material, count);

  return cubeInstance;
}

export { roundCubeInstance };
