import { NavLink } from 'react-router-dom';

type ISidenav = {
  title: string;
  src?: string;
  to?: string;
  isNavLink?: boolean;
};

const SidenavItem = ({ title, src, to, isNavLink }: ISidenav) => {
  return (
    <li>
      <span>
        <img src={src} alt="" />
      </span>
      {isNavLink && to && <NavLink to={to}>{title}</NavLink>}
      {!isNavLink && <a>{title}</a>}
    </li>
  );
};

export default SidenavItem;
