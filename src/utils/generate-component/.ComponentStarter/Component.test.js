import Component from './Component';
import fixtures from './fixtures';

describe('<Component />', () => {
  const render = (props) => {
    const { container } = render(<Component {...props} />);
    return { container };
  };

  it('matches snapshot', () => {
    const { container } = render(fixtures);

    expect(container).toMatchSnapshot();
  });
});
