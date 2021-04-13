import {Redirect, Route, Switch} from 'react-router';
import {ROUTES} from '../../helpers/routes';
import {NotFoundPage} from '../NotFoundPage/NotFoundPage';
import React from 'react';
import {RawHtml} from '../RawHtml/RawHtml';
import {MaterialUi} from '../MaterialUi/MaterialUi';

export const MainRouter: React.FC = () => {
    return (
        <Switch>
            <Route path={ROUTES.HOME} exact>
                <Redirect to={ROUTES.USING_MATERIAL_UI} />
            </Route>
            <Route path={ROUTES.USING_MATERIAL_UI}>
                <MaterialUi />
            </Route>
            <Route path={ROUTES.USING_RAW_HTML_ELEMENTS}>
                <RawHtml />
            </Route>
            <Route>
                <NotFoundPage />
            </Route>
        </Switch>
    );
};
