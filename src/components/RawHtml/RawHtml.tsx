import React from 'react';

export const RawHtml: React.FC = () => {
    return (
        <div>
            <div>
                <input type={'checkbox'} id={'checkbox-input'} value={'any'} onChange={() => {}} />
                <label htmlFor="checkbox-input">checkbox input</label>
            </div>
            <div>
                <input type={'radio'} id={'radio-input'} value={'any'} />
                <label htmlFor="radio-input">radio input</label>
            </div>
            <div>
                <label htmlFor="text-input">text input</label>
                <input type={'text'} id={'text-input'} value={''} onChange={() => {}} />
            </div>
            <div>
                <input type={'button'} id={'button-input'} value={'send'} />
            </div>
        </div>
    );
};
