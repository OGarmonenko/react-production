import { fireEvent, screen } from '@testing-library/react';

import { Sidebar } from './Sidebar';

import { componentRender } from '@/shared/lib/test/componentRender';

describe('Sidebar', () => {
    test('should be renders Sidebar', () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should be sidebar toggle after click on toggle button', () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
