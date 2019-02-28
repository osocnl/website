import React from 'react';
// import PropTypes from 'prop-types';
import { ButtonLink } from '../UI/Buttons';
import Header from './Header';
import Team from './Team';
import Partners from './Partners';

const Project = () => {
  return (
    <React.Fragment>
      <Header />
      <Team />
      <Partners />
      {/* <!-- call to action --> */}
      <div className="grid-x grid-padding-x u-margin-large--tb">
        <div className="small-12 cell text-center">
          <ButtonLink className="success u-margin-large--t" to="/2018">
            View other projects
          </ButtonLink>
        </div>
      </div>
    </React.Fragment>
  );
};

/* Project.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}; */
export default Project;
