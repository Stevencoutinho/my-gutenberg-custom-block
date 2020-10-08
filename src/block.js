// definition list
import Dl from './blocks/definition-list/dl.js';
import Dt from './blocks/definition-list/dt.js';
import Dd from './blocks/definition-list/dd.js';

const { registerBlockType } = wp.blocks;

registerBlockType(Dl.name, Dl);
registerBlockType(Dt.name, Dt);
registerBlockType(Dd.name, Dd);