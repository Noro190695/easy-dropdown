import {classNames} from './dropdown';

export function style(): string{
    return `
        .${classNames['EasyDropDownButtonClassName']}-isopen{
            transform: rotate(-180deg);
        }
        .${classNames['EasyDropDownIsCloseClassName']}{
            display: none;
        }

    `;
} 