 AFRAME.registerComponent('cpr-event-handler', {
    init: function() {
      var sceneEl = this.el;
      
      // Listen for CPR-related events
      sceneEl.addEventListener('cpr-compression', function() {
        console.log('CPR Compression performed');
        
        // Play sound
        var successSound = document.querySelector('#successSound');
        if (successSound && successSound.components.sound) {
          successSound.components.sound.playSound();
        }
        
        // Trigger avatar animation
        sceneEl.emit('cpr-success');
      });
      
      sceneEl.addEventListener('cpr-airway', function() {
        console.log('Airway check performed');
        
        // Play sound
        var instructionSound = document.querySelector('#instructionSound');
        if (instructionSound && instructionSound.components.sound) {
          instructionSound.components.sound.playSound();
        }
      });
      
      sceneEl.addEventListener('cpr-pulse', function() {
        console.log('Pulse check performed');
      });
    }
  });