import React from 'react'

import { connect } from 'react-redux'

const MainPage = ({state}) => (
  <>

  </>
)

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => {
  return dispatch({ type: 'LIST' })
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)