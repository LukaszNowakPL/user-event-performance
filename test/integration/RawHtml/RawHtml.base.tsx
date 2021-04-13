import React from 'react';
import {RawHtml} from '../../../src/components/RawHtml/RawHtml';
import {render, screen} from '@testing-library/react';

export const performRawHtmlTests = (userEvent: any) => {
    describe('RawHtml', () => {
        it('clicks and types all elements', () => {
            render(<RawHtml />);
            userEvent.click(screen.getByRole('checkbox', {name: /checkbox input/i}));
            userEvent.click(screen.getByRole('radio', {name: /radio input/i}));
            userEvent.type(screen.getByRole('textbox', {name: /text input/i}), 'test value');
            userEvent.clear(screen.getByRole('textbox', {name: /text input/i}));
            userEvent.click(screen.getByRole('button', {name: /send/i}));
        });
    });
};
