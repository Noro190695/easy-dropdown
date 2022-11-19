import Style from "./dropdownstyles";
enum classNames {
  EasyDropDownClassName = "easy-dropdown",
  EasyDropDownItemClassName = "easy-dropdown__item",
  EasyDropDownButtonClassName = "easy-dropdown__clickable",
  EasyDropDownContentClassName = "easy-dropdown__item_content",
  EasyDropDownIsCloseClassName = "easy-dropdown__item_content_isclose",
}

interface IEasyDropDown {}

class EasyDropDown extends Style {
  private $el: NodeList;

  constructor(private options?: IEasyDropDown) {
    super();
    this.$el = document.querySelectorAll(
      `.${classNames["EasyDropDownClassName"]}`
    );
    this.init();
  }

  private init() {
    this.$el.forEach((dropdown: any) => {
      const dropdownItems: NodeList = dropdown.querySelectorAll(
        `.${classNames["EasyDropDownItemClassName"]}`
      );
      dropdownItems.forEach((item: any) => {
        const button: HTMLElement = item.querySelector(
          `.${classNames["EasyDropDownButtonClassName"]}`
        );
        const content: HTMLElement = item.querySelector(
          `.${classNames["EasyDropDownContentClassName"]}`
        );
        this.hideContent(content);
        button.addEventListener("click", (e) => {
          e.preventDefault();
          this.toggleContent(content);
        });
      });
    });
  }
}

export { EasyDropDown, classNames };
