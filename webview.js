module.exports = (Franz) => {
  const getMessages = function getMessages() {
    let count = document.querySelectorAll('.group-unread').length;
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);

  if (typeof Franz.onNotify === 'function') {
    Franz.onNotify((notification) => {
      if (typeof notification.title !== 'string') {
        notification.title = ((notification.title.props || {}).content || [])[0] || 'Taskade';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body = (((notification.options.body || {}).props || {}).content || [])[0] || '';
      }

      return notification;
    });
  }
};
