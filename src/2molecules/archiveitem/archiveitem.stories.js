import copyCodeBlock from '@pickra/copy-code-block';
import { cssOverrides } from './../../../.storybook/copyCodeBlockOverrides';
import './../../main.scss';
import img from './../../assets/img/demo-article-2.png';

const ArchiveitemHtml = `<div class="archiveitem">
    <img class="archiveitem__image" src="${img}" alt="Verta, hikea ja kyyn eleita - Reidarsille jai luu kateen" />
    <div class="archiveitem__content">
        <h3 class="archiveitem__title">
            <a href="#">
                Verta, hikea ja kyyn eleita - Reidarsille jai luu kateen
            </a>
        </h3>
        <p class="archiveitem__text">
            Viikon takainen 4-0 tappio Kiekkosille aiheutti Reidarsin valmennusjohdossa tahattoman paniikkinappulan painamisen, ja kevatkauden toiseen otteluun laitettiin uusiksi niin aloittava maalivahti, pakkiparit kuin hyokkayskentatkin. Eipa sita...
        </p>
        <a href="#" class="link">
            Lue lisaa
        </a>
    </div>
</div>`;
export const Archiveitem = () => ArchiveitemHtml + copyCodeBlock(ArchiveitemHtml, cssOverrides);

export default { title: 'Molecules/Archiveitem' };