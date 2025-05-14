 AFRAME.registerComponent('cursor-listener', {
    init: function () {
      var el = this.el;
      
      // Make sure element is clickable not grabbable
      el.setAttribute('static-body', '');  // Make it static for physics
      el.setAttribute('clickable', '');    // Mark as clickable
      
      // Change cursor appearance on hover
      el.addEventListener('mouseenter', function () {
        el.sceneEl.querySelector('#cursor').setAttribute('material', 'color', '#4CAF50');
        el.sceneEl.querySelector('#cursor').setAttribute('scale', '1.2 1.2 1.2');
      });
      
      el.addEventListener('mouseleave', function () {
        el.sceneEl.querySelector('#cursor').setAttribute('material', 'color', '#FFFFFF');
        el.sceneEl.querySelector('#cursor').setAttribute('scale', '1 1 1');
      });

      // Handle clicks
      el.addEventListener('click', function (evt) {
        console.log('Element clicked:', el.id);
        el.emit('element-clicked', {elementId: el.id}, false);
        
        // Emit specific event based on which element was clicked
        if (el.id === 'chest-button' || el.id === 'chest-hit-area') {
          el.sceneEl.emit('cpr-success');
          
          // Play click sound
          const clickSound = document.querySelector('#clickSound');
          if (clickSound && clickSound.components.sound) clickSound.components.sound.playSound();
        }
      });
    }
  });