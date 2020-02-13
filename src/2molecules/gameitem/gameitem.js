import { GameScorePastHtml, GameScoreUpcomingHtml } from './../../1Atoms/GameScore/GameScore';

const GameItemPastHtml = `<div class="gameitem">
    <p class="gameitem__header">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GameScorePastHtml}
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

const GameItemUpcomingHtml = `<div class="gameitem">
    <p class="gameitem__header gameitem__header--upcoming">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GameScoreUpcomingHtml}
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

const GameItemNextHtml = `<div class="gameitem">
    <p class="gameitem__header gameitem__header--upcoming">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <p class="gameitem__badge">Seuraava peli</p>
    <div class="gameitem__score">
        ${GameScoreUpcomingHtml}
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

const GameItemReportHtml = `<div class="gameitem gameitem--report">
    <p class="gameitem__header">
        Sarjapeli | Keskiviikkona 20.9.2019 klo 2:30
    </p>
    <div class="gameitem__score">
        ${GameScorePastHtml}
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

export { GameItemPastHtml, GameItemUpcomingHtml, GameItemNextHtml, GameItemReportHtml };