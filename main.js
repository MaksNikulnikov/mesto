/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Api = /*#__PURE__*/function () {
  function Api() {
    _classCallCheck(this, Api);
    this._token = 'f4e3da40-9a8f-4342-ac62-1d7a154eaa67';
    this._groupId = 'cohort-57';
    this._serverName = 'https://nomoreparties.co';
    this._requests = {
      toUserInfo: "".concat(this._serverName, "/v1/").concat(this._groupId, "/users/me"),
      toCards: "".concat(this._serverName, "/v1/").concat(this._groupId, "/cards")
    };
  }
  _createClass(Api, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return fetch(this._requests.toUserInfo, {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "getCards",
    value: function getCards() {
      return fetch(this._requests.toCards, {
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "patchUserInfo",
    value: function patchUserInfo(_ref) {
      var name = _ref.name,
        about = _ref.about;
      return fetch(this._requests.toUserInfo, {
        method: 'PATCH',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          about: about
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "postCard",
    value: function postCard(_ref2) {
      var name = _ref2.name,
        link = _ref2.link;
      return fetch(this._requests.toCards, {
        method: 'POST',
        headers: {
          authorization: this._token,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          link: link
        })
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "deleteCard",
    value: function deleteCard(cardId) {
      return fetch("".concat(this._requests.toCards, "/").concat(cardId), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "putLike",
    value: function putLike(cardId) {
      return fetch("".concat(this._requests.toCards, "/").concat(cardId, "/likes"), {
        method: 'PUT',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }, {
    key: "deleteLike",
    value: function deleteLike(cardId) {
      return fetch("".concat(this._requests.toCards, "/").concat(cardId, "/likes"), {
        method: 'DELETE',
        headers: {
          authorization: this._token
        }
      }).then(function (res) {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject("Error: ".concat(res.status));
      }).catch(function (err) {
        return console.error(err);
      });
    }
  }]);
  return Api;
}();


/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Card = /*#__PURE__*/_createClass(function Card(cardData, cardsTemplateSelector, handleCardClick, handleRemoveClick, handleLikeClick) {
  var _this = this;
  _classCallCheck(this, Card);
  _defineProperty(this, "_addLikeListener", function () {
    _this.heartElement = _this._card.querySelector('.element__heart');
    _this.heartElement.addEventListener('click', function () {
      _this._handleLikeClick(_this._isLiked, _this);
    });
  });
  _defineProperty(this, "removeCard", function () {
    _this._card.remove();
    _this._card = null;
  });
  _defineProperty(this, "_addRemoveListener", function () {
    var buttonDelete = _this._card.querySelector('.element__delete');
    buttonDelete.addEventListener('click', function () {
      _this._handleRemoveClick(_this);
    });
  });
  _defineProperty(this, "_addViewListener", function () {
    _this._image.addEventListener('click', function () {
      _this._handleCardClick({
        caption: _this._cardName,
        src: _this._cardImgURL
      });
    });
  });
  _defineProperty(this, "getId", function () {
    return _this._id;
  });
  _defineProperty(this, "_addDeliteButton", function () {
    _this._deleteButton = _this._card.querySelector('.element__delete');
    if (!_this._isDelitable) {
      _this._deleteButton.classList.add('element__delete_hidden');
      _this._deleteButton.disable = true;
    }
  });
  _defineProperty(this, "toddleHeartElementState", function () {
    _this._card.querySelector('.element__heart_counter').textContent = _this._amountLikes;
    if (_this._isLiked) {
      _this.heartElement.classList.add('element__heart_clicked');
    } else {
      _this.heartElement.classList.remove('element__heart_clicked');
    }
  });
  _defineProperty(this, "createCard", function () {
    _this._card = _this._cardsTemplate.cloneNode(true).children[0];
    _this._image = _this._card.querySelector('.element__image');
    _this._image.src = _this._cardImgURL;
    _this._image.alt = _this._cardName;
    _this._card.querySelector('.element__title').textContent = _this._cardName;
    _this._addDeliteButton();
    _this._addLikeListener();
    _this._addRemoveListener();
    _this._addViewListener();
    _this.toddleHeartElementState();
    return _this._card;
  });
  this._cardName = cardData.name;
  this._cardImgURL = cardData.link;
  this._amountLikes = cardData.likes.length;
  this._id = cardData.id;
  this._ownerId = cardData.ownerId;
  this._isDelitable = cardData.isDelitable;
  this._isLiked = cardData.isLiked;
  this._cardsTemplate = document.querySelector(cardsTemplateSelector).content;
  this._handleCardClick = handleCardClick;
  this._handleRemoveClick = handleRemoveClick;
  this._handleLikeClick = handleLikeClick;
});


/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidator = /*#__PURE__*/_createClass(function FormValidator(validationConfig, form) {
  var _this = this;
  _classCallCheck(this, FormValidator);
  _defineProperty(this, "disableButton", function () {
    _this._submitButton.classList.add(_this._inactiveButtonClass);
    _this._submitButton.disabled = true;
  });
  _defineProperty(this, "_activateButton", function () {
    _this._submitButton.classList.remove(_this._inactiveButtonClass);
    _this._submitButton.removeAttribute('disabled');
  });
  _defineProperty(this, "toggleButtonState", function () {
    var hasInvalidInput = _this._inputList.some(function (el) {
      return !el.validity.valid;
    });
    if (hasInvalidInput) {
      _this.disableButton();
    } else {
      _this._activateButton();
    }
  });
  _defineProperty(this, "_checkInputValidity", function (inputElement) {
    var isValid = inputElement.validity.valid,
      inputSection = inputElement.closest(_this._parentInputAndErrorSelector),
      inputError = inputSection.querySelector(_this._inputErrorSelector),
      errorMessage = inputElement.validationMessage;
    if (!isValid) {
      _this._showErrorInput(inputError, errorMessage);
      _this._markInputAsInvalid(inputElement);
    } else {
      _this._hideErrorInput(inputError);
      _this._unmarkInputAsInvalid(inputElement);
    }
  });
  _defineProperty(this, "_showErrorInput", function (inputError, errorMessage) {
    inputError.textContent = errorMessage;
    inputError.classList.add(_this._errorClass);
  });
  _defineProperty(this, "_hideErrorInput", function (inputError) {
    inputError.textContent = '';
    inputError.classList.remove(_this._errorClass);
  });
  _defineProperty(this, "_markInputAsInvalid", function (inputError) {
    inputError.classList.add(_this._inputInvalidClass);
  });
  _defineProperty(this, "_unmarkInputAsInvalid", function (inputError) {
    inputError.classList.remove(_this._inputInvalidClass);
  });
  _defineProperty(this, "_setEventListeners", function () {
    _this._form.addEventListener('submit', function (event) {
      event.preventDefault();
    });
    _this.toggleButtonState();
    _this._inputList.forEach(function (inputEl) {
      inputEl.addEventListener('input', function () {
        _this._checkInputValidity(inputEl);
        _this.toggleButtonState();
      });
    });
  });
  _defineProperty(this, "enableValidation", function () {
    _this._setEventListeners();
  });
  this._inputSelector = validationConfig.inputSelector;
  this._inactiveButtonClass = validationConfig.inactiveButtonClass;
  this._errorClass = validationConfig.errorClass;
  this._inputInvalidClass = validationConfig.inputInvalidClass;
  this._parentInputAndErrorSelector = validationConfig.parentInputAndErrorSelector;
  this._inputErrorSelector = validationConfig.inputErrorSelector;
  this._form = form;
  this._submitButton = form.querySelector('.popup__submit-btn');
  this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
});


/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    var _this = this;
    _classCallCheck(this, Popup);
    _defineProperty(this, "_handleEscClose", function (evt) {
      if (evt.key === 'Escape') {
        _this.close();
      }
    });
    this._popup = document.querySelector(popupSelector);
    this._buttonClose = this._popup.querySelector('.popup__close-btn');
  }
  _createClass(Popup, [{
    key: "open",
    value: function open() {
      document.addEventListener('keyup', this._handleEscClose);
      this._popup.classList.add('popup_opened');
    }
  }, {
    key: "close",
    value: function close() {
      document.removeEventListener('keyup', this._handleEscClose);
      this._popup.classList.remove('popup_opened');
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._buttonClose.addEventListener('click', this.close.bind(this));
      this._popup.addEventListener('click', function (evt) {
        if (evt.target === evt.currentTarget) {
          _this2.close();
        }
      });
    }
  }]);
  return Popup;
}();


/***/ }),

/***/ "./src/components/PopupWithButton.js":
/*!*******************************************!*\
  !*** ./src/components/PopupWithButton.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithButton)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var PopupWithButton = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithButton, _Popup);
  var _super = _createSuper(PopupWithButton);
  function PopupWithButton(popupSelector, handler, parameter) {
    var _this;
    _classCallCheck(this, PopupWithButton);
    _this = _super.call(this, popupSelector);
    _defineProperty(_assertThisInitialized(_this), "_handle", function () {
      _this._handler(_this._parameter);
    });
    _this._handler = handler;
    _this._parameter = parameter;
    _this._button = _this._popup.querySelector('.popup__submit-btn');
    return _this;
  }
  _createClass(PopupWithButton, [{
    key: "setEventListeners",
    value: function setEventListeners() {
      this._button.addEventListener('click', this._handle);
      _get(_getPrototypeOf(PopupWithButton.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {
      this._button.removeEventListener('click', this._handle);
    }
  }]);
  return PopupWithButton;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);
  var _super = _createSuper(PopupWithForm);
  function PopupWithForm(popupSelector, handleFormSubmit) {
    var _this;
    _classCallCheck(this, PopupWithForm);
    _this = _super.call(this, popupSelector);
    _this._handleFormSubmit = handleFormSubmit;
    _this._inputs = _this._popup.querySelectorAll('.popup__text');
    _this._form = _this._popup.querySelector('.popup__form');
    return _this;
  }
  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var inputValues = {};
      this._inputs.forEach(function (element) {
        inputValues[element.name] = element.value;
      });
      return inputValues;
    }
  }, {
    key: "setInputValues",
    value: function setInputValues(inputValues) {
      this._inputs.forEach(function (element) {
        element.value = inputValues[element.name];
      });
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;
      this._form.addEventListener('submit', function (event) {
        _this2._handleFormSubmit(event, _this2._getInputValues());
      });
      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      this._form.reset();
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);
  var _super = _createSuper(PopupWithImage);
  function PopupWithImage(popupSelector) {
    var _this;
    _classCallCheck(this, PopupWithImage);
    _this = _super.call(this, popupSelector);
    _this._imageElement = _this._popup.querySelector('.popup__image');
    _this._descriptionElement = _this._popup.querySelector('.popup__figcaption');
    return _this;
  }
  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(_ref) {
      var src = _ref.src,
        caption = _ref.caption;
      this._imageElement.src = src;
      this._imageElement.alt = caption;
      this._descriptionElement.textContent = this._caption;
      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);
  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Section = /*#__PURE__*/function () {
  function Section(containerSelector) {
    _classCallCheck(this, Section);
    this._container = document.querySelector(containerSelector);
  }
  _createClass(Section, [{
    key: "addItem",
    value: function addItem(item, isAppend) {
      if (isAppend) {
        this._container.append(item);
      } else {
        this._container.prepend(item);
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      Array.from(this._container.children).forEach(function (element) {
        element.remove();
      });
    }
  }]);
  return Section;
}();


/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var nameSelector = _ref.nameSelector,
      descriptionSelector = _ref.descriptionSelector,
      avatarSelector = _ref.avatarSelector,
      id = _ref.id;
    _classCallCheck(this, UserInfo);
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
    this._avatarElement = document.querySelector(avatarSelector);
    this._currentUserId = id;
  }
  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      return {
        name: this._name,
        description: this._description
      };
    }
  }, {
    key: "getCurrentUserId",
    value: function getCurrentUserId() {
      return this._currentUserId;
    }
  }, {
    key: "_renderAvatar",
    value: function _renderAvatar() {
      this._avatarElement.src = this._avatar;
    }
  }, {
    key: "_renderInfo",
    value: function _renderInfo() {
      this._nameElement.textContent = this._name;
      this._descriptionElement.textContent = this._description;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(_ref2) {
      var name = _ref2.name,
        about = _ref2.about,
        _id = _ref2._id;
      this._name = name;
      this._description = about;
      this._currentUserId = _id;
      this._renderInfo();
    }
  }, {
    key: "setAvatar",
    value: function setAvatar(avatar) {
      this._avatar = avatar;
      this._renderAvatar();
    }
  }]);
  return UserInfo;
}();


/***/ }),

/***/ "./src/utils/config.js":
/*!*****************************!*\
  !*** ./src/utils/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__text',
  parentInputAndErrorSelector: '.popup__form-section',
  submitButtonSelector: '.popup__submit-btn',
  inputErrorSelector: '.popup__error',
  inactiveButtonClass: 'popup__submit-btn_disabled',
  errorClass: 'popup__error_visible',
  inputInvalidClass: 'popup__text_invalid'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationConfig);

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "popupAddCardButtonOpen": () => (/* binding */ popupAddCardButtonOpen),
/* harmony export */   "popupProfileButtonOpen": () => (/* binding */ popupProfileButtonOpen)
/* harmony export */ });
var initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
}, {
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
}, {
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
}, {
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
}, {
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
}, {
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}];
var popupProfileButtonOpen = document.querySelector('.profile__edit-button');
var popupAddCardButtonOpen = document.querySelector('.profile__add-button');


/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/config.js */ "./src/utils/config.js");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_Api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api */ "./src/components/Api.js");
/* harmony import */ var _components_PopupWithButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/PopupWithButton */ "./src/components/PopupWithButton.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var api = new _components_Api__WEBPACK_IMPORTED_MODULE_9__["default"]();
var popupProfileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_config_js__WEBPACK_IMPORTED_MODULE_1__["default"], document.forms.formProfile);
var popupAddCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_4__["default"](_utils_config_js__WEBPACK_IMPORTED_MODULE_1__["default"], document.forms.formAddCard);
var sectionCards = new _components_Section_js__WEBPACK_IMPORTED_MODULE_8__["default"]('.elements__holder');
var handleRemoveClick = function handleRemoveClick(removedElement) {
  var popupRemoveCard = new _components_PopupWithButton__WEBPACK_IMPORTED_MODULE_10__["default"]('.popup_remove-card', function (card) {
    api.deleteCard(card.getId()).then(card.removeCard());
    popupRemoveCard.removeEventListener();
    popupRemoveCard.close();
  }, removedElement);
  popupRemoveCard.setEventListeners();
  popupRemoveCard.open();
};
var handleLikeClick = function handleLikeClick(isLiked, card) {
  var promise = isLiked ? api.deleteLike(card.getId()) : api.putLike(card.getId());
  promise.then(function (data) {
    card._amountLikes = data.likes.length;
    var islikedInResponce = false;
    data.likes.forEach(function (user) {
      if (user._id === userInfo.getCurrentUserId()) {
        islikedInResponce = true;
      }
    });
    card._isLiked = islikedInResponce;
    card.toddleHeartElementState();
  });
};
var handleCardClick = function handleCardClick(_ref) {
  var src = _ref.src,
    caption = _ref.caption;
  popupWithImage.setEventListeners();
  popupWithImage.open({
    src: src,
    caption: caption
  });
};
var getCard = function getCard(data) {
  var cardData = {
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    ownerId: data.owner._id
  };
  cardData.isDelitable = userInfo.getCurrentUserId() === cardData.ownerId;
  cardData.isLiked = false;
  cardData.likes.forEach(function (user) {
    if (user._id === userInfo.getCurrentUserId()) {
      cardData.isLiked = true;
    }
  });
  return new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"](cardData, '.element__template', handleCardClick, handleRemoveClick, handleLikeClick).createCard();
};
var userInfo = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  nameSelector: '.profile__title',
  descriptionSelector: '.profile__subtitle',
  avatarSelector: '.profile__image'
});
var userInfoPromise = api.getUserInfo().then(function (data) {
  userInfo.setAvatar(data.avatar);
  userInfo.setUserInfo(data);
});
Promise.all([api.getCards(), userInfoPromise]).then(function (_ref2) {
  var _ref3 = _slicedToArray(_ref2, 1),
    datas = _ref3[0];
  datas.forEach(function (data) {
    return sectionCards.addItem(getCard(data), true);
  });
});
var popupWithImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]('.popup_view-image');
var profilePopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_add-profile', function (event, inputValues) {
  event.preventDefault();
  api.patchUserInfo({
    name: inputValues.name,
    about: inputValues.description
  }).then(function (data) {
    userInfo.setUserInfo(data);
  });
  profilePopup.close();
  popupProfileValidator.toggleButtonState();
});
var newCardPopup = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]('.popup_add-card', function (event, inputValues) {
  event.preventDefault();
  api.postCard(inputValues).then(function (data) {
    sectionCards.addItem(getCard(data), false);
  });
  newCardPopup.close();
  popupAddCardValidator.toggleButtonState();
});
newCardPopup.setEventListeners();
profilePopup.setEventListeners();
_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.popupProfileButtonOpen.addEventListener('click', function () {
  profilePopup.setInputValues(userInfo.getUserInfo());
  profilePopup.open();
});
_utils_constants_js__WEBPACK_IMPORTED_MODULE_2__.popupAddCardButtonOpen.addEventListener('click', function () {
  newCardPopup.open({});
});
popupAddCardValidator.enableValidation();
popupProfileValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map