import 'isomorphic-fetch'
import React from 'react'
import Header from '../components/Header';
import MissionSection from '../components/MissionSection';
import ArmsSection from '../components/ArmsSection';
import TestimonySection from '../components/TestimonySection';

const Index = () => (
	<React.Fragment>
		<Header />
		<MissionSection />
		<ArmsSection />
		<TestimonySection />
	</React.Fragment>
)

// Index.getInitialProps = async () => {
// 	const res = await fetch(
// 		'https://api.github.com/repos/ooade/NextSimpleStarter'
// 	)
// 	const json = await res.json()
// 	return { stars: json.stargazers_count }
// }

export default Index
