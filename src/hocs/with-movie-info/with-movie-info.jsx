import React, {PureComponent} from 'react';

const withMovieInfo = (Component) => {
  class WithMovieInfo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activePage: `overview`,
      };

      this.changeActivePage = this.changeActivePage.bind(this);
    }

    changeActivePage(activeTab) {
      this.setState({
        activePage: activeTab,
      });
    }

    render() {

      return (
        <Component
          {...this.props}
          onTabClick={this.changeActivePage}
          activePage={this.state.activePage}
        />
      );
    }
  }

  return WithMovieInfo;
};

export default withMovieInfo;
