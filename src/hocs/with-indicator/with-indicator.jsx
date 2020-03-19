import React, {PureComponent} from 'react';

const withIndicator = (Component) => {
  return class WithIndicator extends PureComponent {
    constructor(props) {
      super(props)
      console.log(this.props.showFilmCard)
      this.state = {
        isLoading: true
      };
    }

    // componentDidUpdate(prevProps) {
    //   console.log(prevProps)
    //   if (prevProps.showFilmCard !== this.props.showFilmCard) {
    //     this.setState({isLoading: false})
    //   }
    // };

    render() {
      if(this.props.showFilmCard) {
        this.setState({isLoading: false})
      }
      if (this.state.isLoading) {
        return <div>Загрузка...</div>
      }
      return <Component {...this.props}/>
    }
  };
};


export default withIndicator;
