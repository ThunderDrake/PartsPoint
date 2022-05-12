import GraphModal from 'graph-modal';
const modal = new GraphModal({
  isOpen: (modal) => {
    if(modal.modalContainer.querySelector('.modal__video')) {
      const modalVideo = modal.modalContainer.querySelector('.modal__video').getAttribute('data-video');
      const iframe = modal.modalContainer.querySelector('iframe');

      iframe.setAttribute('src', modalVideo)
    }
  },
  isClose: (modal) => {
    if(modal.modalContainer.querySelector('iframe')) {
      const iframe = modal.modalContainer.querySelector('iframe');

      iframe.setAttribute('src', '')
    }
  }
});
