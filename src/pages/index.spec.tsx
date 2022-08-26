import { render, screen } from '@testing-library/react';
import Home from './index.page';

describe('Index Page', () => {
  it('should create index page', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', { name: /hello world/i });

    expect(heading).toBeInTheDocument();
  });
});
