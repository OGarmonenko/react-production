import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar';
import { renderWithTranslation } from '@/shared/lib/test/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
    test('should be renders Sidebar', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('should be sidebar toggle after click on toggle button', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
