// const HIDDEN_CLASS = `visually-hidden`;

// export default class AbstractComponent {
//   constructor() {
//     if (new.target === AbstractComponent) {
//       throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
//     }

//     this._element = null;
//   }

//   getTemplate() {
//     throw new Error(`Abstract method not implemented: getTemplate`);
//   }

//   getElement() {
//     if (!this._element) {
//     //   this._element = createElement(this.getTemplate());
//       const newElement = document.createElement(`div`);
//       newElement.innerHTML = this.getTemplate();

//       this._element = newElement.firstChild;
//     }

//     return this._element;
//   }

//   removeElement() {
//     this._element = null;
//   }

//   show() {
//     if (this._element) {
//       debugger
//       this._element.classList.remove(HIDDEN_CLASS);
//     }
//   }

//   hide() {
//     if (this._element) {
//       this._element.classList.add(HIDDEN_CLASS);
//     }
//   }
// }
