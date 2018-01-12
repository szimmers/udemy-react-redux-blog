import React, {Component} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
	//componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			return (
				<li className="list-group-item" key={post.id}>
					<h5>{post.title}</h5>
					{post.content}
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<h3>Posts</h3>
				<ul className="list-group">
					{this.renderPosts()}
				</ul>
			</div>
		);
	}
}

/**
 * for getting app state into component
 * @param state
 * @returns {{posts: *|Function}}
 */
function mapStateToProps(state) {
	return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);