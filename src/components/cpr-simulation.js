
AFRAME.registerComponent('cpr-simulation', {
  schema: {
    active: {type: 'boolean', default: false}
  },
  
  init: function() {
    this.compressionCount = 0;
    this.counterEl = document.querySelector('#cpr-counter');
    this.counterEl2 = document.querySelector('#cpr-counter2');
    this.colorIndex = 0;
    this.colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF'];
    
    // Listen for compression events
    console.log("MASUKKKK")
    this.el.sceneEl.addEventListener('cpr-compression', this.handleCompression.bind(this));
    console.log("compress:",this.compressionCount)
    
  },
  
  handleCompression: function() {

    this.compressionCount++;
    this.updateCounter();
    
    this.el.sceneEl.setAttribute('cpr', 'count', this.compressionCount);

    // Trigger success animation and sound
    this.el.sceneEl.emit('cpr-success');
   
    // Change color after successful compression
    this.changeColor();
   
    // Play success sound
    const successSound = document.querySelector('#successSound');
    if (successSound) {
      successSound.components.sound.playSound();
    }
  },
  
  updateCounter: function() {
    if (this.counterEl) {
      this.counterEl.setAttribute('text', 'value', `Compressions: ${this.compressionCount}`);
    }
    if (this.counterEl2) {
      this.counterEl2.setAttribute('text', 'value', `Compressions: ${this.compressionCount} / 30`);
    }
  },
  
  changeColor: function() {
    const indicator = document.querySelector('#chest-indicator');
    if (indicator) {
      this.colorIndex = (this.colorIndex + 1) % this.colors.length;
      const nextColor = this.colors[this.colorIndex];
      indicator.setAttribute('material', 'color', nextColor);
      
      // Also update the button background color
      const buttonBg = document.querySelector('#chest-button-background');
      if (buttonBg) {
        buttonBg.setAttribute('material', 'color', nextColor);
      }
    }
  },
  
  resetCounter: function() {
    this.compressionCount = 0;
    this.updateCounter();
    this.colorIndex = 0;
    
    // Reset colors
    const indicator = document.querySelector('#chest-indicator');
    const buttonBg = document.querySelector('#chest-button-background');
    if (indicator) indicator.setAttribute('material', 'color', '#FF0000');
    if (buttonBg) buttonBg.setAttribute('material', 'color', '#FF0000');
  },
  
  update: function(oldData) {
    if (this.data.active !== oldData.active) {
      if (this.data.active) {
        this.resetCounter();
      }
    }
  }
});