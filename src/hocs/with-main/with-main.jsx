import React, {PureComponent} from 'react'

const withMain = (Component) => {
  class WithMain extends PureComponent {
    constructor(props){
      super(props)

      this.state = {
        count: 8,
        isShowBtn: true
      }

      this.changeCountFilms = this.changeCountFilms.bind(this);
    }

    componentDidUpdate() {
      if (this.state.count >= 25) {
        this.setState({
          count: this.props.films.length,
          isShowBtn:false
        })
      }
    }

    changeCountFilms() {
      if (this.state.count >= this.props.films.length) {
        this.setState({
          count: this.props.films.length,
        })
      }

      this.setState({
        count: this.state.count +8
      })

    }

    render() {
      return(
        <Component
          {...this.props}
          onChangeCountFilms={this.changeCountFilms}
          count={this.state.count}
          isShowBtn={this.state.isShowBtn}
        />
      )
    }
  }

  return WithMain;
}

export default withMain;
