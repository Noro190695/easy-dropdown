import {style} from './style'
import {classNames} from './dropdown'
class DropDownStyles {
    constructor(){
        this.render()
    }
    
    protected hideContent($el: HTMLElement): HTMLElement{        
        $el.classList.add(classNames['EasyDropDownIsCloseClassName'])
        return $el
    }
    protected showContent($el: HTMLElement): HTMLElement{
        $el.classList.remove(classNames['EasyDropDownIsCloseClassName'])
        return $el
    }
    protected toggleContent($el: HTMLElement): HTMLElement{
        $el.classList.toggle(classNames['EasyDropDownIsCloseClassName'])       
        return $el
    }
    private render() {
        const styleTag: HTMLStyleElement = document.createElement('style');
        styleTag.setAttribute('type', 'text/css')        
        styleTag.appendChild(document.createTextNode(style()))
        document.head.appendChild(styleTag)
    }
}

export default DropDownStyles