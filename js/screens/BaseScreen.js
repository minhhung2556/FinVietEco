import React from 'react';
import App from 'FinVietEco/js/app';
import LAF from 'FinVietEco/js/LAF';
import {NavigationActions} from 'react-navigation';

export default class BaseScreen extends React.Component {
    constructor(props) {
        super(props)
    }

    _navigateToTop(routeName) {
        const actionToDispatch = NavigationActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName })]
        })
        this.props.navigation.dispatch(actionToDispatch)
    }

    _navigateTo(routeName) {
        NavigationActions.navigate({ routeName })
    }
}