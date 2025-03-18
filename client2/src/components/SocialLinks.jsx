import artstationIcon from '../assets/icons/artstation_icon.svg';
import instagramIcon from '../assets/icons/instagram_icon.svg';
import linkedinIcon from '../assets/icons/linkedin_icon.svg';
import githubIcon from '../assets/icons/github_icon.svg';

const SocialLinks = () => {
  return (
    <div>
      <ul className="flex space-x-8 capitalize text-[14px]">
        <li className="hover:text-accent cursor-pointer">
          <a
            className="transition-all duration-300"
            href="https://www.artstation.com/oxiprojekt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={artstationIcon} alt="ArtStation" className="w-5 h-5 invert" />
          </a>
        </li>
        <li className="hover:text-accent cursor-pointer">
          <a
            className="transition-all duration-300"
            href="https://www.instagram.com/oxiprojekt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 invert" />
          </a>
        </li>
        <li className="hover:text-accent cursor-pointer">
          <a
            className="transition-all duration-300"
            href="https://www.linkedin.com/oxiprojekt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5 invert" />
          </a>
        </li>
        <li className="hover:text-accent cursor-pointer">
          <a
            className="transition-all duration-300"
            href="https://www.github.com/oxiprojekt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" className="w-5 h-5 invert" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialLinks;
