import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
	componentWillMount() {
	//componentDidMount() {
		this.props.fetchPosts();
	}

	renderPosts() {
		return _.map(this.props.posts, post => {
			const url = `/posts/${post.id}`;
			return (
				<li className="list-group-item" key={post.id}>
					<Link to={url}>
						<h5>{post.title}</h5>
						{post.content}
					</Link>
				</li>
			);
		});
	}

	render() {
		return (
			<div>
				<div className="text-xs-right">
					<Link className="btn btn-primary" to="/posts/new">
						New Post
					</Link>
				</div>

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