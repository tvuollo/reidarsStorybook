import { GamesListHeaderHtml } from './../../2Molecules/ListHeader/ListHeader';
import { GameItemNextHtml, GameItemPastHtml, GameItemUpcomingHtml } from './../../2Molecules/GameItem/GameItem';

const GamesListHtml = `<div class="gameslist">
    ${GamesListHeaderHtml}
    <div class="gameslist__slider">
        <div class="gameslist__items">
            <div class="gameslist__item">
                ${GameItemPastHtml}
            </div>
            <div class="gameslist__item">
                ${GameItemPastHtml}
            </div>
            <div class="gameslist__item">
                ${GameItemNextHtml}
            </div>
            <div class="gameslist__item">
                ${GameItemUpcomingHtml}
            </div>
            <div class="gameslist__item">
                ${GameItemUpcomingHtml}
            </div>
            <div class="gameslist__item">
                ${GameItemUpcomingHtml}
            </div>
        </div>
    </div>
</div>`;

export { GamesListHtml };