import React, {PureComponent} from 'react';

const withMovieCardReviews = (Component) => {
  class WithMovieCardReviews extends PureComponent {
    constructor(props) {
      super(props);
      this.leftColumn = [];
      this.rightColumn = [];

      this.state = {
        isLoading: true
      };
    }

    splittingArray() {
      this.props.reviews.forEach((it, i) => {
        if(i % 2 === 0){
          this.leftColumn.push(it);
        } else {
          this.rightColumn.push(it)
        }
      })
    };

    componentDidUpdate(prevProps) {
      console.log(prevProps.film.id)
      console.log(this.props.film.id)
      if (this.props.film.id) {
        if (prevProps.film.id !== this.props.film.id) {
          this.setState({isLoading: false},console.log(this.state));
        }
      }
    }

    componentDidMount() {
      this.leftColumn = [];
      this.rightColumn = [];

      const {
        film,
        getAllReviews
      } = this.props;

      const {id} = film;

      getAllReviews(id);

      if (this.props.film.id) {
        this.setState({isLoading: false});
      }
    }

    render() {
      console.log(this.props)
      this.splittingArray();
      if (this.state.isLoading) {
        return <div>Loading...</div>;
      }
      return <Component
       {...this.props}
       leftColumn={this.leftColumn}
       rightColumn={this.rightColumn}
       />;
    }
  }

  return WithMovieCardReviews;
};

export default withMovieCardReviews;
