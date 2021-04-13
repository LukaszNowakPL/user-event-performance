import React from 'react';
import {Button, Checkbox, FormControlLabel, Radio, TextField} from '@material-ui/core';

export const MaterialUi: React.FC = () => {
    return (
        <div>
            <div>
                <FormControlLabel control={<Checkbox />} label={'checkbox input'} />
            </div>
            <div>
                <FormControlLabel control={<Radio />} label={'radio input'} />
            </div>
            <div>
                <FormControlLabel control={<TextField />} label="text input" />
            </div>
            <div>
                <Button variant={'contained'} color={'primary'} type={'button'}>
                    send
                </Button>
            </div>
        </div>
    );
};
