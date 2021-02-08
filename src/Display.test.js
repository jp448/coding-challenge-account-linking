import { render, screen } from '@testing-library/react';
import Display from './Display';

test('displays the correct title', () => {
    const setLastUpdate = jest.fn();
    const accounts = [];
    render(<Display updateHandle={setLastUpdate} accountData={accounts} />);
    const title = screen.getByText(/Account Linking/i);
    expect(title).toBeInTheDocument();
});