export const dynamicValueDescription = (description, options) => {
  const newOptions = options.map((option) => `<span className='custom-code'>'${option}'</span>`);
  return `${description} Available options: <span className='custom-code-container'>${newOptions.join(
    ' '
  )}</span>`;
};
