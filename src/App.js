import React, { Component } from 'react'
import axios from 'axios'
import Loader from './components/Loader'
import ScatterChart from './components/ScatterChart'
import StyledSection from './components/StyledSection'
class App extends Component {
	state = {
		isFetching: false,
		data: null,
		error: null
	}

	componentDidMount() {
		this.setState(prevState => ({
			isFetching: true
		}))

		axios
			.get(
				'https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json'
			)
			.then(resp =>
				this.setState(prevState => ({
					data: resp.data.map((v, i, a) => ({
						...v,
						SecondsDelta: v.Seconds - a[0].Seconds
					})),
					isFetching: false
				}))
			)
			.catch(error =>
				this.setState(prevState => ({
					error: 'Sorry an error occured while fetching data',
					isFetching: false
				}))
			)
	}
	render() {
		const { isFetching, data, error } = this.state
		return (
			<StyledSection>
				{isFetching && <Loader>Fetching data</Loader>}
				{data && <ScatterChart data={data} />}
				<p>
					Source of data :
					https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/cyclist-data.json
				</p>
				{error && <p>{error}</p>}
			</StyledSection>
		)
	}
}

export default App
