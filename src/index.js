import 'purecss';

import './styles/style.css';
import './styles/micromodal.css';
import './styles/buttons.css';

import './scripts/integrations/facebook';
import './scripts/integrations/vk';
import './scripts/integrations/camera';

import MicroModal from 'micromodal';

import Globals from './scripts/globals';

Globals.MicroModal = MicroModal;

MicroModal.init();

// TODO: small screen height hack

// TODO: image updates
