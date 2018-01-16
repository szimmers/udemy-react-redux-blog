import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index';

class PostsShow extends Component {
	componentDidMount() {
		if (!this.props.post) {
			const {id} = this.props.match.params;
			this.props.fetchPost(id);
		}
	}

	deletePost() {
		const {id} = this.props.match.params;
		this.props.deletePost(id, () => {
			this.props.history.push('/');
		});
	}

	render() {
		const {post} = this.props;

		if (!post) {
			return <div>Loading...</div>;
		}

		return (
			<div>
				<Link to="/" className="btn btn-primary">Home</Link>

				<button
					onClick={this.deletePost.bind(this)}
					className="btn btn-danger pull-xs-right"
				>
					Delete
				</button>

				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		);
	}
}

function mapStateToProps({posts}, ownProps) {
	const {id} = ownProps.match.params;

	return {
		post: posts[id]
	}
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);