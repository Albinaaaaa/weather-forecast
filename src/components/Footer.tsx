const gitHub: string = require("../images/github-mark-white.svg").default;
const telegram: string = require("../images/telegram.svg").default;
const linkedin: string = require('../images/linkedin.svg').default;

export function Footer(): JSX.Element {
	return (
		<footer className='footer'>
			<h5 className='footer__text'>Albina Rybanchuk</h5>
			<div className="footer__social">
				<h5 className='footer__text'>My social: </h5>
				<ul className='social-list'>
					<li className='social-list__item'>
						<a className='social-list__link' href='https://t.me/aaalbinaaaa' target='_blank' rel="noreferrer">
							<img className='social-list__icon' src={telegram} alt='Telegram'/>
						</a>
					</li>
					<li className='social-list__item'>
						<a className='social-list__link' href='https://github.com/Albinaaaaa' target='_blank' rel="noreferrer">
							<img className='social-list__icon' src={gitHub} alt='GitHub'/>
						</a>
					</li>
					<li className='social-list__item'>
						<a className='social-list__link' href='https://www.linkedin.com/in/albina-rybanchuk-838019236/' target='_blank' rel="noreferrer">
							<img className='social-list__icon' src={linkedin} alt='LinkedIn'/>
						</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}