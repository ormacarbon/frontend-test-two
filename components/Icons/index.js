import {
  faBars,
  faDownload,
  faMoon,
  faSun,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export function DownloadIcon() {
  return <FontAwesomeIcon icon={faDownload} />;
}

export function MenuIcon() {
  return <FontAwesomeIcon icon={faBars} size='2x' />;
}

export function CloseIcon() {
  return <FontAwesomeIcon icon={faXmark} size='lg' />;
}
export function MoonIcon() {
  return <FontAwesomeIcon icon={faMoon} />;
}

export function SunIcon() {
  return <FontAwesomeIcon icon={faSun} />;
}
