import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getUser } from 'app/user/selectors';
import { getLemons } from '../selectors';
import LemonsActionCreators from '../actions';
import LemonsCounter from '../components/LemonsCounter';

function LemonsPageComponent(props) {
  let salutation;

  if (props.children) return props.children;

  if (props.user) {
    salutation = (
      <h2>
        Hi <strong>{props.user.first_name} {props.user.last_name}!</strong>
      </h2>
    );
  } else {
    salutation = null;
  }

  return (
    <div>
      {salutation}
      <button
        onClick={props.resetLemons}
        role="button"
      >
        reset
      </button>
      <LemonsCounter
        count={props.lemons.length}
        onTickFunction={props.addLemon}
      />
    </div>
  );
}

LemonsPageComponent.displayName = 'LemonsPageComponent';

LemonsPageComponent.propTypes = {
  children: PropTypes.node,
  user: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  lemons: PropTypes.arrayOf(PropTypes.object).isRequired,
  addLemon: PropTypes.func.isRequired,
  resetLemons: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  user: getUser(state),
  lemons: getLemons(state),
});

const mapDispatchToProps = dispatch => ({
  addLemon: () => dispatch(LemonsActionCreators.addLemon()),
  resetLemons: () => dispatch(LemonsActionCreators.resetLemons()),
});

// Use named export for unconnected component (for tests)
export { LemonsPageComponent };

// Use default export for the connected component (for app)
export default connect(mapStateToProps, mapDispatchToProps)(LemonsPageComponent);
