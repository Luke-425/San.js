import * as THREE from 'three';

import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Resources from './Utils/Resources.js';
import Debug from './Utils/Debug.js';

import sources from './sources.js';

import Camera from './Camera.js';
import Renderer from './Renderer.js';

import World from './World/World.js';

let instance = null;

export default class Experience {
  constructor(canvas) {
    // SINGLETON pattern SOLUTION
    if (instance) {
      return instance;
    }

    instance = this;

    // Glabal access for console usage
    window.experience = this;

    // Options
    this.canvas = canvas;

    // Setup
    this.debug = new Debug();

    this.sizes = new Sizes();
    this.time = new Time();

    this.scene = new THREE.Scene();
    this.resources = new Resources(sources);
    this.camera = new Camera();
    this.renderer = new Renderer();

    this.world = new World();

    // Sizes' resize event
    this.sizes.on('resized', () => {
      this.resize();
    });

    // Time's tick event
    this.time.on('tick', () => {
      this.update();
    });
  }

  resize() {
    // Listen to the resize event and then propagate to the other classes
    this.camera.resize();
    this.renderer.resize();
  }

  update() {
    this.camera.update();
    this.world.update();
    this.renderer.update();
  }

  // For bigger projects, create a destroy method for each class
  destroy() {
    // Remove every event listener with that name
    this.sizes.off('resize');
    this.time.off('tick');

    // Traverse the whole scene
    this.scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.geometry.dispose();

        for (const key in child.material) {
          const value = child.material[key];

          if (value && typeof value.dispose === 'function') {
            value.dispose();
          }
        }
      }
    });

    this.camera.controls.dispose();
    this.renderer.instance.dispose();

    if (this.debug.active) {
      this.debug.ui.destroy();
    }

    // ... remove the canvas, event listeners etc.
  }
}
