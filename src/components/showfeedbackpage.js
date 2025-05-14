// Add to your component definitions
AFRAME.registerComponent('showfeedbackpage', {
  init: function() {
    this.el.addEventListener('click', () => {
      this.el.sceneEl.emit('showfeedbackpage');
    });
  }
});

AFRAME.registerComponent('hidefeedbackpage', {
  init: function() {
    this.el.addEventListener('click', () => {
      this.el.sceneEl.emit('hidefeedbackpage');
    });
  }
});

AFRAME.registerComponent('repeatactivity', {
  init: function() {
    this.el.addEventListener('click', () => {
      this.el.sceneEl.emit('repeatactivity');
      // Add logic to restart the activity
    });
  }
});