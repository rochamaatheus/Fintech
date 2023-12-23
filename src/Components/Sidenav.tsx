import resumo from '../assets/icons/resumo.svg';
import vendas from '../assets/icons/vendas.svg';
import webhooks from '../assets/icons/webhooks.svg';
import configuracoes from '../assets/icons/configuracoes.svg';
import contato from '../assets/icons/contato.svg';
import sair from '../assets/icons/sair.svg';
import FintechSVG from '../assets/FintechSVG';
import SidenavItem from './SidenavItem';

const Sidenav = () => {
  return (
    <nav className="sidenav box bg-3">
      <FintechSVG title="Fintech Logo" />
      <ul>
        <SidenavItem title="Resumo" to="/" src={resumo} isNavLink={true} />
        <SidenavItem
          title="Vendas"
          to="/vendas"
          src={vendas}
          isNavLink={true}
        />
        <SidenavItem title="WebHooks" src={webhooks} />
        <SidenavItem title="Configurações" src={configuracoes} />
        <SidenavItem title="Contato" src={contato} />
        <SidenavItem title="Sair" src={sair} />
      </ul>
    </nav>
  );
};

export default Sidenav;
