import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ActionCreators from '@actions'
import { Image, StatusBar } from 'react-native'
import { Container } from 'native-base'
import { Images, Colors, Constants } from '@common'
import styles from './styles'

class Splash extends React.Component {
  render = () => (
        <Container style={styles().container}>
          <StatusBar barStyle="light-content" backgroundColor={Colors.SafaricomGreen} />
          <Image style={styles().img_splash_logo} source={Images.AppLogo} resizeMode="contain" />
        </Container>
  )

  componentDidMount = () => {
    const { navigation } = this.props
    const navigator = navigation.dangerouslyGetParent() || navigation
    setTimeout(() => navigator.replace(Constants.Routes.Tabs), 1000)
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ActionCreators, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(Splash)
