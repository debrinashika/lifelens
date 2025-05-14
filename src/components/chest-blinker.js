AFRAME.registerComponent('chest-blinker', {
    init: function() {
      this.el.addEventListener('click', () => {
        // Provide visual feedback when clicked
        const material = this.el.getAttribute('material');
        const originalColor = material.color;
        
        // Flash to white briefly
        this.el.setAttribute('material', 'color', '#FFFFFF');
        
        // Return to original color
        setTimeout(() => {
          this.el.setAttribute('material', 'color', originalColor);
        }, 100);
      });
    }
  });