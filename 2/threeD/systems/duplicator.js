import { MathUtils } from "../../../node_modules/three/build/three.module.js";

class Duplicator {
  constructor(count, pos = [], posoff = [], rot = [], rotoff = [], mesh) {
    this.count = count;
    this.pos = pos;
    this.posoff = posoff;
    this.rot = rot;
    this.rotoff = rotoff;
    this.mesh = mesh;
  }

  duplicate() {
    const cubearr = [];
    let posx = this.pos[0],
      posy = this.pos[1],
      posz = this.pos[2],
      posoffx = this.posoff[0],
      posoffy = this.posoff[1],
      posoffz = this.posoff[2],
      rotx = this.rot[0],
      roty = this.rot[1],
      rotz = this.rot[2],
      rotoffx = MathUtils.degToRad(this.rotoff[0]),
      rotoffy = MathUtils.degToRad(this.rotoff[1]),
      rotoffz = MathUtils.degToRad(this.rotoff[2]);

    //sets initial rotation
    this.mesh.position.set(posx, posy, posz);
    this.mesh.rotation.set(posx, posy, posz);

    for (let i = 0; i < this.count; i++) {
      cubearr[i] = this.mesh.clone();

      posx = posx + posoffx;
      posy = posy + posoffy;
      posz = posz + posoffz;

      rotx = rotx + rotoffx;
      roty = roty + rotoffy;
      rotz = rotz + rotoffz;

      cubearr[i].position.set(posx, posy, posz);
      cubearr[i].rotation.set(rotx, roty, rotz);
    }

    return cubearr;
  }
}

export { Duplicator };
