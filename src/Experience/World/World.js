import Experience from '../Experience.js';

import Environment from './Environment.js';
import Floor from './Floor.js';
import Fox from './Fox.js';

export default class World {
  constructor() {
    this.experience = new Experience();

    this.scene = this.experience.scene;
    this.resources = this.experience.resources;

    // Wait for resources being fully loaded
    this.resources.on('ready', () => {
      // Setup

      // Be careful of the order! (the floor is part of the scene)
      this.floor = new Floor();
      this.fox = new Fox();
      this.environment = new Environment();
    });
  }

  update() {
    if (this.fox) {
      this.fox.update();
    }
  }
}
