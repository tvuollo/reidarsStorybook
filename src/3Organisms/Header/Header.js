import { LogoHtml } from './../../1Atoms/Logo/Logo';
import { MenuTogglerOpenHtml } from './../../1Atoms/MenuToggler/MenuToggler';

const HeaderHtml = `<header class="header container">
    <div class="headertop">
        <p class="headertop__left">Reidars Hockey Team | EST 2011</p>
        <p class="headertop__right">
            <a class="headertop__link" href="#">Offside Reidars</a>
            <a class="headertop__link" href="#">Materiaalisalkku</a>
            <a class="headertop__link" href="#">Linkit</a>
        </p>
    </div>
    <nav class="navigation">
        <div class="navigation__cutout navigation__cutout--left"></div>
        <a href="#" class="navigation__logo">${LogoHtml}</a>
        <div class="navigation__toggler">${MenuTogglerOpenHtml}</div>
        <ul class="navigation__list">
            <li class="navigation__listitem">
                <a href="#" class="navigation__link">Uutiset</a>
            </li>
            <li class="navigation__listitem">
                <a href="#" class="navigation__link">Joukkue</a>
            </li>
            <li class="navigation__listitem">
                <a href="#" class="navigation__link">Pelit</a>
            </li>
            <li class="navigation__listitem">
                <a href="#" class="navigation__link">Reidars TV</a>
            </li>
        </ul>
        <div class="navigation__cutout navigation__cutout--right"></div>
    </nav>
</header>`;

export { HeaderHtml };