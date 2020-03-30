import React, {PureComponent} from 'react';

const withMovieInfo = (Component) => {
  class WithMovieInfo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePage: `overview`,
      };

      this.handleTabClick = this.handleTabClick.bind(this);
    }

    handleTabClick(activeTab) {
      this.setState({
        activePage: activeTab,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          onTabClick={this.handleTabClick}
          activePage={this.state.activePage}
        />
      );
    }
  }

  return WithMovieInfo;
};

export default withMovieInfo;
