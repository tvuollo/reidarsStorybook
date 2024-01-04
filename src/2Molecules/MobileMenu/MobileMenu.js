import { LogoHtml } from './../../1Atoms/Logo/Logo';
import { MenuTogglerCloseHtml } from './../../1Atoms/MenuToggler/MenuToggler';

const MobileMenuHtml = `<div id="mobilemenu" class="mobilemenu mobilemenu--open">
    <a href="#" class="mobilemenu__logo">${LogoHtml}</a>
    <div class="mobilemenu__toggler">${MenuTogglerCloseHtml}</div> 
    <div class="mobilemenu__inner">
        <nav class="mobilenav">
            <ul class="mobilenav__list">
                <li class="mobilenav__listitem">
                    <a href="#" class="mobilenav__link">Uutiset</a>
                </li>
                <li class="mobilenav__listitem">
                    <a href="#" class="mobilenav__link">Joukkue</a>
                </li>
                <li class="mobilenav__listitem">
                    <a href="#" class="mobilenav__link">Pelit</a>
                </li>
                <li class="mobilenav__listitem">
                    <a href="#" class="mobilenav__link">Reidars TV</a>
                </li>
            </ul>
        </nav>
    </div>
</div>`;

export { MobileMenuHtml };