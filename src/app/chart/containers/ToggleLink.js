import { connect } from 'react-redux'
import { toggleUnit } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.units === state.chart.units
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(toggleUnit(ownProps.units))
    }
  }
}

const ToggleLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default ToggleLink