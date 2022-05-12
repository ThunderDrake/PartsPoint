import GraphModal from 'graph-modal';
const modal = new GraphModal({
  isOpen: (modal) => {
    const modalVideo = modal.modalContainer.querySelector('.modal__video').getAttribute('data-video');
    const iframe = modal.modalContainer.querySelector('iframe');

    iframe.setAttribute('src', modalVideo)
  },
  isClose: (modal) => {
    const iframe = modal.modalContainer.querySelector('iframe');

    iframe.setAttribute('src', '')
  }
});
