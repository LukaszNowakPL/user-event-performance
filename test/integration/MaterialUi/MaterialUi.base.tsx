import React from 'react';
import {MaterialUi} from '../../../src/components/MaterialUi/MaterialUi';
import {render, screen} from '@testing-library/react';

export const performMaterialUiTests = (userEvent: any) => {
    describe('MaterialUi', () => {
        it('clicks and types all elements', () => {
            render(<MaterialUi />);
            userEvent.click(screen.getByRole('checkbox', {name: /checkbox input/i}));
            userEvent.click(screen.getByRole('radio', {name: /radio input/i}));
            userEvent.type(screen.getByRole('textbox', {name: /text input/i}), 'test value');
            userEvent.clear(screen.getByRole('textbox', {name: /text input/i}));
            userEvent.click(screen.getByRole('button', {name: /send/i}));
        });
    });
};
