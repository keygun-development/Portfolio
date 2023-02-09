import {library, dom} from '@fortawesome/fontawesome-svg-core';

import {
    faChevronRight,
    faXmark
} from '@fortawesome/free-solid-svg-icons';

import {
    faGithub,
    faLinkedin,
    faInstagramSquare
} from '@fortawesome/free-brands-svg-icons'

library.add(
    faChevronRight,
    faXmark,
    faGithub,
    faLinkedin,
    faInstagramSquare
);

dom.watch();
