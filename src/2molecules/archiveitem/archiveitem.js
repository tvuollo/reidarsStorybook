import img from './../../assets/img/demo-article-2.png';
import { ReadMoreLinkHtml } from './../../1Atoms/Link/Link';

const ArchiveItemHtml = `<div class="archiveitem">
    <a class="archiveitem__imagelink" href="#">
        <img class="archiveitem__image" src="${img}" alt="Verta, hikea ja kyyn eleita - Reidarsille jai luu kateen" />
    </a>
    <div class="archiveitem__content">
        <h3 class="archiveitem__title">
            <a href="#">
                Verta, hikea ja kyyn eleita - Reidarsille jai luu kateen
            </a>
        </h3>
        <p class="archiveitem__text">
            Viikon takainen 4-0 tappio Kiekkosille aiheutti Reidarsin valmennusjohdossa tahattoman paniikkinappulan painamisen, ja kevatkauden toiseen otteluun laitettiin uusiksi niin aloittava maalivahti, pakkiparit kuin hyokkayskentatkin. Eipa sita...
        </p>
        ${ReadMoreLinkHtml}
    </div>
</div>`;

export { ArchiveItemHtml };