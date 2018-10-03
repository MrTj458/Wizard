import React from 'react'
import {
	Container,
	List,
	Header,
} from 'semantic-ui-react'
import TagForm from './TagForm'
import { connect } from 'react-redux'
import { getTags, deleteTag } from '../reducers/tags'

class Tags extends React.Component {
	componentDidMount() {
		this.props.dispatch(getTags())
	}
	
	render() {
		const { tags, dispatch } = this.props
		return (
			<Container>
				<TagForm />
				{ tags.length > 0 &&
					<>
						<Header as="h3" textAlign="center">Tags</Header>
						<List divided horizontal>
							{ tags.map (tag => {
									const { id, name } = tag
									return (
										<List.Item key={id} style={{ backgroundColor: 'aliceblue' }}>
											<List.Icon
												name="cancel"
												style={{ cursor: 'pointer' }}
												onClick={ () => dispatch(deleteTag(id)) }
											/>
											<List.Content>
												<List.Header>
													#{name}
												</List.Header>
											</List.Content>
										</List.Item>
									)
								})
							}
						</List>
					</>
				}
			</Container>
		)
	}
}

const mapStateToProps = state => {
	return {
		tags: state.tags,
	}
}

export default connect(mapStateToProps)(Tags)
