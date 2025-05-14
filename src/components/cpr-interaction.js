 AFRAME.registerComponent('cpr-interaction', {
    schema: {
      chestTarget: {type: 'selector'},
      headTarget: {type: 'selector'},
      pulseTarget: {type: 'selector'}
    },
    
    init: function() {
      // Set up event listeners for the interaction points
      if(this.data.chestTarget) {
        this.data.chestTarget.addEventListener('click', () => {
          this.handleChestCompression();
        });
      }
      
      if(this.data.headTarget) {
        this.data.headTarget.addEventListener('click', () => {
          this.handleAirwayCheck();
        });
      }
      
      if(this.data.pulseTarget) {
        this.data.pulseTarget.addEventListener('click', () => {
          this.handlePulseCheck();
        });
      }
    },
    
    handleChestCompression: function() {
      // Play click sound
      const clickSound = document.querySelector('#clickSound');
      if (clickSound) clickSound.components.sound.playSound();
      
      // Emit success event for animation
      this.el.sceneEl.emit('cpr-success');
      
      // Additional logic for CPR training could go here
      console.log('Chest compression performed');
    },
    
    handleAirwayCheck: function() {
      // Play instruction sound
      const instructionSound = document.querySelector('#instructionSound');
      if (instructionSound) instructionSound.components.sound.playSound();
      
      console.log('Airway check performed');
    },
    
    handlePulseCheck: function() {
      console.log('Pulse check performed');
    }
  });
