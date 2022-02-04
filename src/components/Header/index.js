import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons'; 
// import { capitalizeFirstLetter } from "../../utils/helpers";


function Header(props) {
 
  const {
    //   navElements = [],
      setCurrentNavEl,
      currentNavEl,
    } = props;

    // useEffect(() => {
    //     document.title = currentNavEl.name;
    // }, [currentNavEl]);

  return (
    <header className='flex-row px-1' >
        <a href='/'>
            <span role='img' aria-label='code'>
                {' '}
                <FontAwesomeIcon icon={faCode} />
            </span>
        </a>
        <nav>
            <ul className='flex-row'>
                {/* {navElements.map ((navElement) => (
                    <li
                        className={`mx-2 ${
                        currentNavEl.name === navElement.name && 'navActive'
                        }`} key={navElement.name}
                        >
                            <span onClick={() => {
                                setCurrentNavEl(navElement)
                            }} 
                            >
                                <a href={navElement.href}>
                                    <span>{capitalizeFirstLetter(navElement.name)}</span>
                                </a>
                            </span>
                        </li>
                ))} */}
                <li className={currentNavEl === 'About Me' ? 'mx-2 navActive' : 'mx-2'}>
                    <span onClick={() => setCurrentNavEl('About Me')}>About Me</span>
                </li>
                <li className={currentNavEl === 'Portfolio' ? 'mx-2 navActive' : 'mx-2'}>
                    <span onClick={() => setCurrentNavEl('Portfolio')}>Portfolio</span>
                </li>
                <li className={currentNavEl === 'Resume' ? 'mx-2 navActive' : 'mx-2'}>
                <span onClick={() => setCurrentNavEl('Resume')}>Resume</span>
                </li>
                <li className={currentNavEl === 'Contact Me' ? 'mx-2 navActive' : 'mx-2'}>
                <span onClick={() => setCurrentNavEl('Contact Me')}>Contact Me</span>
                </li>

            </ul>
        </nav>
    </header>
  );
}

export default Header;