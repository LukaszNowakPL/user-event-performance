import React from 'react';
import {headerButton, headerButtonSelected, headerContainer, headerMenu} from './Header.style';
import {NavLink} from 'react-router-dom';
import {ROUTES} from '../../helpers/routes';
import Grid from '@material-ui/core/Grid/Grid';
import {Card} from '@material-ui/core';

export const Header: React.FC = () => {
    return (
        <Card className={headerContainer}>
            <Grid container className={headerMenu} spacing={2}>
                <Grid item xs={6}>
                    <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.USING_RAW_HTML_ELEMENTS}>
                        Raw HTML elements
                    </NavLink>
                </Grid>
                <Grid item xs={6}>
                    <NavLink className={headerButton} activeClassName={headerButtonSelected} to={ROUTES.USING_MATERIAL_UI}>
                        Using material ui
                    </NavLink>
                </Grid>
            </Grid>
        </Card>
    );
};
