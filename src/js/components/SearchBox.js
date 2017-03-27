import React from 'react';
import Classnames from 'Classnames';
import {debounce} from 'throttle-debounce';
import apiConnect from '../services/ApiConnect';
import SearchResults from './SearchResults';
import Styles from '../../css/SearchBox.pcss';
import enhanceWithClickOutside from 'react-click-outside';

class SearchBox extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.callAjax = debounce(300, this.callAjax);
    this.state = {
      searchResults: '',
    }
  }

  componentWillMount() {
    apiConnect.getConfig().then(config => {
      this.setState({ config });
    });
    apiConnect.getGenres().then(genres => {
      this.setState({ genres });
    });
  }

  handleChange(e) {
    this.callAjax(e.target.value);
  }

  callAjax(value) {
        console.log(value);
    apiConnect.Search(value).then(searchResults => {
      this.setState({
        searchResults,
      });
    });
  }

  handleClickOutside(e, a) {
    this.props.collapsed && this.props.toggleSearchBox();
  }

  submit(e) {
    console.log('submit');
    console.log(e);
  }

  render() {
    this.props.collapsed && this.textInput.focus();

    let searchBoxClasses = Classnames({
      [Styles.searchbox]: true,
      [Styles.collapsed]: this.props.collapsed,
    });

    return (
      <div className={searchBoxClasses}>
        <div className="container">
          <form onSubmit={this.submit}>
            <input
              placeholder="Search for movie..."
              className={Styles.input}
              type="text"
              onChange={this.handleChange}
              ref={(input) => { this.textInput = input; }} />
          </form>
          {this.state.searchResults && this.state.genres && this.state.config && <SearchResults results={this.state.searchResults} genres={this.state.genres} config={this.state.config} collapsed={this.props.collapsed} />}
        </div>
      </div>
    );
  }
}

export default enhanceWithClickOutside(SearchBox)
