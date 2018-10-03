import React from 'react'
import { Container } from 'semantic-ui-react'
import TagForm from './TagForm'
import { connect } from 'react-redux'

const Tags = () => (
	<Container>
		<TagForm />
	</Container>
)

const mapStateToProps = state => {
	return {
		tags: state.tags,
	}
}

export default connect(mapStateToProps)(Tags)
