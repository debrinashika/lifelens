  // Component to make the chest button blink
  AFRAME.registerComponent('chest-blinker', {
    init: function() {
      this.blinking = false;
      this.originalColor = '#FF0000';
      this.blinkColor = '#FFFF00';
      this.blinkInterval = null;
      this.compressionCount = 0;
      
      // Listen for click events on the chest button
      this.el.addEventListener('click', this.performCompression.bind(this));
      
      // Start blinking automatically
      this.startBlinking();
    },
    
    performCompression: function() {
      // Create compression visual feedback
      this.el.emit('click-animation');
      this.el.emit('cpr-success');
      
      // Update counter
      this.compressionCount++;
      var counterEl = document.querySelector('#cpr-counter');
      if (counterEl) {
        counterEl.setAttribute('text', 'value', 'Compressions: ' + this.compressionCount);
      }
      
      // Play success sound
      var successSound = document.querySelector('#successSound');
      if (successSound && successSound.components.sound) {
        successSound.components.sound.playSound();
      }
    },
    
    startBlinking: function() {
      if (this.blinkInterval) return;
      
      this.blinking = true;
      var el = this.el;
      var originalColor = this.originalColor;
      var blinkColor = this.blinkColor;
      
      this.blinkInterval = setInterval(function() {
        var currentColor = el.getAttribute('material').color;
        var nextColor = (currentColor === originalColor) ? blinkColor : originalColor;
        el.setAttribute('material', 'color', nextColor);
      }, 500); // Blink every 500ms
    },
    
    stopBlinking: function() {
      if (this.blinkInterval) {
        clearInterval(this.blinkInterval);
        this.blinkInterval = null;
      }
      
      this.blinking = false;
      this.el.setAttribute('material', 'color', this.originalColor);
    },
    
    remove: function() {
      this.stopBlinking();
    }
  });
  

  