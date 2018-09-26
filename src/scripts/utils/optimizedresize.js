class OptimizedResize {
  constructor() {
    this.callbacks = [];
    this.running = false;

    this.resize = this.resize.bind(this);
    this.runCallbacks = this.runCallbacks.bind(this);

    window.addEventListener('resize', this.resize);
  }

  resize() {
    if (!this.running) {
      this.running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(this.runCallbacks);
      } else {
        setTimeout(this.runCallbacks, 66);
      }
    }
  }

  runCallbacks() {
    this.callbacks.forEach(callback => callback());
    this.running = false;
  }

  addCallback(callback) {
    if (callback && typeof callback === 'function') {
      this.callbacks.push(callback);
    }
  }
}

export default new OptimizedResize();
