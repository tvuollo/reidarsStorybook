import { GamesListTitleHtml, NewsListTitleHtml, VideosListTitleHtml } from './../../1Atoms/ListTitle/ListTitle';
import { AllGamesLinkHtml, AllNewsLinkHtml, AllVideosLinkHtml } from './../../1Atoms/Link/Link';
import { ChevronsHtml } from './../Chevrons/Chevrons';

const GamesListHeaderHtml = `<div class="listheader">
    ${GamesListTitleHtml}
    <div class="listheader__controls">
        <div class="listheader__button">
            ${AllGamesLinkHtml}
        </div>
    </div>
</div>`;

const NewsListHeaderHtml = `<div class="listheader">
    ${NewsListTitleHtml}
    <div class="listheader__controls">
        <div class="listheader__button">
            ${AllNewsLinkHtml}
        </div>
    </div>
</div>`;

const VideosListHeaderHtml = `<div class="listheader">
    ${VideosListTitleHtml}
    <div class="listheader__controls">
        <div class="listheader__button">
            ${AllVideosLinkHtml}
        </div>
    </div>
</div>`;

export { GamesListHeaderHtml, NewsListHeaderHtml, VideosListHeaderHtml };