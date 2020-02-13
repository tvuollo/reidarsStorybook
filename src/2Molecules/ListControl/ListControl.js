import { AllGamesLinkHtml, AllNewsLinkHtml, AllVideosLinkHtml } from './../../1Atoms/Link/Link';
import { ChevronsHtml } from './../Chevrons/Chevrons';

const GamesListControlHtml = `<div class="listcontrol">
    <div class="listcontrol__item">
        ${AllGamesLinkHtml}
    </div>
    <div class="listcontrol__item">
        ${ChevronsHtml}
    </div>
</div>`;

const NewsListControlHtml = `<div class="listcontrol">
    <div class="listcontrol__item">
        ${AllNewsLinkHtml}
    </div>
    <div class="listcontrol__item">
        ${ChevronsHtml}
    </div>
</div>`;

const VideosListControlHtml = `<div class="listcontrol">
    <div class="listcontrol__item">
        ${AllVideosLinkHtml}
    </div>
    <div class="listcontrol__item">
        ${ChevronsHtml}
    </div>
</div>`;

export { GamesListControlHtml, NewsListControlHtml, VideosListControlHtml };