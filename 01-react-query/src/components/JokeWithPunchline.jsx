const JokeWithPunchline = ({ joke }) => {
	return (
		<div className="text-center my-5">
			<p className="h3">{joke.setup}</p>
			<p className="h4">{joke.punchline}</p>
		</div>
	)
}

export default JokeWithPunchline
