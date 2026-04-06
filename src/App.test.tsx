import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-scroll', () => ({
  Link: ({ children, to, onClick }: any) => (
    <a href={`#${to}`} onClick={onClick}>
      {children}
    </a>
  ),
}));

describe('App', () => {
  it('renders primary sections', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /^Andres Parra Arze$/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /About/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Skills and Experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Projects/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Contact/i })).toBeInTheDocument();
  });

  it('toggles the mobile menu button state', () => {
    render(<App />);

    const menuButton = screen.getByRole('button', { name: /open mobile menu/i });
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(menuButton);
    expect(screen.getByRole('button', { name: /close mobile menu/i })).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders social links with safe external attributes', () => {
    render(<App />);

    const githubLink = screen.getByRole('link', { name: /github/i });
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noreferrer'));
    expect(githubLink).toHaveAttribute('rel', expect.stringContaining('noopener'));
  });
});
