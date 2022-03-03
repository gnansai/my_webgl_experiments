import {
  BoxBufferGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
} from "../../../node_modules/three/build/three.module.js";

function createCube(x, y, z, rotx, roty, rotz, col, seed) {
  const geometry = new BoxBufferGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({ color: col });
  const cube = new Mesh(geometry, material);
  cube.position.set(x, y, z);

  cube.rotation.set(
    MathUtils.degToRad(rotx),
    MathUtils.degToRad(roty),
    MathUtils.degToRad(rotz)
  );

  const radiansPerSecond = MathUtils.degToRad(50);

  // this method will be called once per frame
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
