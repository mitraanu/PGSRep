import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('renders Greeting', () => {
    render(<Greeting />);
    const helloElement = screen.getByText('Hello Jest');
    expect(helloElement).toBeInTheDocument();
  });

  test('renders Happy', () => {
    render(<Greeting />);
    const paraElement = screen.getByText('happy',{exact:false});
    expect(paraElement).toBeInTheDocument();
  });

  test('renders Changed', () => {
    render(<Greeting />);
    const buttonelement=screen.getByRole('button');
    userEvent.click(buttonelement);
    const paraElement = screen.getByText('Changed');
    expect(paraElement).toBeInTheDocument();
  });