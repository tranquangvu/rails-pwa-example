require('@rails/ujs').start()
require('turbolinks').start()
require('@rails/activestorage').start()
require('channels')

const images = require.context('../images', true)
const imagePath = (name) => images(name, true)

import '../styles/application.scss';

if (navigator.serviceWorker) {
  navigator.serviceWorker
    .register('/service-worker.js', { scope: './' })
    .then(function(reg) {
      console.log('[Companion]', 'Service worker registered!');
      console.log(reg);
    });
}
