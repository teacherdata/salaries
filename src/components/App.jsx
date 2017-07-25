import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import PrimaryAppBar from './PrimaryAppBar'
import Report from './Report/'
import Page from './Page/'
import Promo from './Promo/'
import Footer from './Footer/'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import META from '../data/meta'
import * as CONTENT from '../content/text'
import '../styles/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div className="App">
            <PrimaryAppBar style={{backgroundColor: META.colors.primary}} />
            <Route path="/" component={Report} />
            <Page
              headline={CONTENT.headline}
              subhead={CONTENT.subhead}
              source={CONTENT.source}
              disclaimer={CONTENT.disclaimer}
            />
            <Promo
              callToAction={CONTENT.callToAction}
              ctaButtonText={CONTENT.ctaButtonText}
            />
            <Footer
              copyright={CONTENT.copyright}
              overview={CONTENT.overview}
              quoteText={CONTENT.quote.text}
              quoteCite={CONTENT.quote.cite}
            />
          </div>
        </MuiThemeProvider>
      </Router>
    )
  }
}

export default App
