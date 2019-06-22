import React from 'react';
import PropTypes from 'prop-types';
import Authenticate from '../Authenticate/AuthenticateContainer';
import DataFetcher from '../DataFetcher/DataFetcherContainer';
import Navigation from '../Navigation/Navigation';
import Loader from '../Loader/LoaderContainer';
import ErrorDisplay from '../ErrorDisplay/ErrorDisplayContainer';

const AuthenticatedApp = () => (
    <>
        <DataFetcher />
        <Navigation />
        <Loader />
        <ErrorDisplay />
    </>
);

const Main = ({
    isAuthenticated,
}) => (
    isAuthenticated ? <AuthenticatedApp /> : <Authenticate />
);
Main.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
};

export default Main;
