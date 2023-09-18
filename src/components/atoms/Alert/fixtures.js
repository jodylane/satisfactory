export default {
  children:
    'This is my super awesome & super legitimate alert for alerting folks with. Some people could be jealous of such fine alerts.',
  theme: 'danger',
  duration: 6,
  expire: true,
  onClick: () => {
    console.log('Alert was closed');
  },
};
