export default {
  children: 'My Button',
  theme: 'danger',
  id: 'special',
  disabled: false,
  outline: false,
  fullWidth: false,
  onClick: () => {
    console.log('Button was clicked');
  },
};
