import { render, screen } from '@testing-library/react';
import from './App';
import Header from './Header';
import userEvent from '@testing-library/user-event';

test('renders a heading', () => {
    render(<Header />);
    const headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
});

test('handles clicks on the navigation link', () => {
    render(<Header />);
    const navLink = screen.getByRole('link', { name: 'About' });
    userEvent.click(navLink);
    // Aquí puedes verificar si se ha disparado algún evento o si se ha navegado a otra página
});
