const gitHub: string = require("../images/github-mark-white.svg").default;
const telegram: string = require("../images/telegram.svg").default;
const linkedin: string = require('../images/linkedin.svg');

export function Footer(): JSX.Element {
	return (
		<footer className='footer'>
			<h5>Made by: Albina Rybanchuk</h5>
			<ul className='social-list'>
				<li>
					<span>Telegram: </span>
					<a href='https://t.me/aaalbinaaaa' target='_blank' rel="noreferrer">
						<img src={telegram} alt='Telegram'/>
					</a>
				</li>
				<li>
					<span>GitHup: </span>
					<a href='https://github.com/Albinaaaaa' target='_blank' rel="noreferrer">
						<img src={gitHub} alt='GitHub'/>
					</a>
				</li>
				<li>
					<span>LinkedIn: </span>
					<a href='https://www.linkedin.com/in/albina-rybanchuk-838019236/' target='_blank' rel="noreferrer">
						<img src={linkedin} alt='LinkedIn'/>
					</a>
				</li>
			</ul>
		</footer>
	)
}