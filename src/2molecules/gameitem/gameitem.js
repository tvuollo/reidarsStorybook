import { GamescorePast, GamescoreUpcoming } from './../../1atoms/gamescore/gamescore';

const GameitemPast = `<div class="gameitem">
    <p class="gameitem__header">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GamescorePast}
    </div>
    <ul class="gameitem__list">
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Otteluraportti
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Poytakirja
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Kokoonpano
            </a>
        </li>
    </ul>
</div>`;

const GameitemUpcoming = `<div class="gameitem">
    <p class="gameitem__header gameitem__header--upcoming">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GamescoreUpcoming}
    </div>
    <ul class="gameitem__list">
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Poytakirja
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Kokoonpano
            </a>
        </li>
    </ul>
</div>`;

const GameitemNext = `<div class="gameitem">
    <p class="gameitem__header gameitem__header--upcoming">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <p class="gameitem__badge">Seuraava peli</p>
    <div class="gameitem__score">
        ${GamescoreUpcoming}
    </div>
    <ul class="gameitem__list">
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Poytakirja
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Kokoonpano
            </a>
        </li>
    </ul>
</div>`;

const GameitemReport = `<div class="gameitem gameitem--report">
    <p class="gameitem__header">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GamescorePast}
    </div>
    <p class="gameitem__scorers">
        Maalintekijat: Mikkola 6, Juotasniemi, Reijonen
    </p>
    <ul class="gameitem__list">
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Otteluraportti
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Poytakirja
            </a>
        </li>
        <li class="gameitem__listitem">
            <a class="gameitem__listlink" href="#">
                Kokoonpano
            </a>
        </li>
    </ul>
</div>`;

export { GameitemPast, GameitemUpcoming, GameitemNext, GameitemReport };