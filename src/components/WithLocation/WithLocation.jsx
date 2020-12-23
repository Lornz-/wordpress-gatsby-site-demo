import React from 'react';
import { Location, Redirect } from '@reach/router';
import queryString from 'query-string';

/**
 * Return the passing component if search query strings present
 * otherwise redirect to the root path
 * @param {React.ReactNode} ComponentToWrap — React component we want to pass the current location parameters
 * and search query strings
 * @param {...Object} props — Spread the rest of React props applied to the wrapped component
 */
const WithLocation = (ComponentToWrap) => (props) => (
  <Location>
    {({ location, navigate }) => (
      <>
        {location.search ? (
          <ComponentToWrap
            location={location}
            navigate={navigate}
            search={queryString.parse(location.search)}
            {...props}
          />
        ) : (
          <Redirect to='/' noThrow />
        )}
      </>
    )}
  </Location>
);

export default WithLocation;
