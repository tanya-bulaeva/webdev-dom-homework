/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getFetch: () => (/* binding */ getFetch),\n/* harmony export */   loginUser: () => (/* binding */ loginUser),\n/* harmony export */   postFetch: () => (/* binding */ postFetch),\n/* harmony export */   registerUser: () => (/* binding */ registerUser)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date.js */ \"./date.js\");\n\r\n\r\nconst host = \"https://wedev-api.sky.pro/api/v2/tanya-bulaeva/comments\";\r\n\r\n\r\nconst getFetch = (token) => {\r\n    return fetch(host,{\r\n    method: \"GET\",\r\n    headers: {\r\n      Authorization: token\r\n    }\r\n    })\r\n    .then((response) => {\r\n      if (response.status === 401){\r\n //       password= prompt (\"Введите верный пароль\")\r\n  //  getFetch();\r\n    throw new Error (\"Нет авторизации\")\r\n    }\r\n\r\n   //   commentsElement.textContent = \"Подождите, лента коммментариев загружается\"; \r\n    return  response.json();\r\n})\r\n    }\r\n    \r\n\r\n\r\nconst postFetch = (nameInputElement, textElement,token,) => {\r\n // const addFormElement = document.querySelector('.add-form');\r\n\r\n    return fetch(host,\r\n {\r\n  method: \"POST\",\r\n  body: JSON.stringify({\r\n  name:   nameInputElement.value,\r\n  text: textElement.value,\r\n   date: _date_js__WEBPACK_IMPORTED_MODULE_1__.commentDate,\r\n   likes: 0,\r\n   token,\r\n//    forceError: true,\r\n      }),\r\n      headers: {\r\n        Authorization: token\r\n      }\r\n    }).then((response) => {\r\n  if (response.status === 201){\r\n //   addFormElement = document.getElementById('add-form');\r\n // addFormElement.classList.add('hide');\r\n //commentsElement.textContent = `Загрузка комментария`;\r\n\r\n  return response.json();\r\n };\r\n if (response.status === 500){\r\n   throw new Error (\"Сервер сломался\");\r\n };\r\n if  (response.status === 400){\r\n   throw new Error  (\"Плохой запрос\")\r\n }; \r\n   }).then((responseData) => {\r\n   return (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.fetchFunction)();\r\n\r\n}).then(() => {\r\n  nameInputElement.value = \"\";\r\n textElement.value = ''; \r\n})\r\n.catch((error) => {\r\nif (error.message === \"Сервер сломался\" ){\r\nalert (\"Сервер сломался, попробуйте позже\");\r\nreturn;\r\n};\r\nif (error.message === \"Плохой запрос\" ){\r\nalert (\"Имя и комментарий должны быть не короче 3 символов\");\r\nreturn;\r\n}; \r\nalert (\"Кажется что-то пошло не так, попробуйте позже\");\r\nconsole.log (error)\r\n});\r\n}\r\n\r\n\r\n//https://github.com/GlebkaF/webdev-hw-api/blob/main/pages/api/user/README.md\r\n\r\n\r\nfunction loginUser({ login, password }) {\r\n  return fetch(\"https://wedev-api.sky.pro/api/user/login\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error(\"Неверный логин или пароль\");\r\n    }\r\n    return response.json();\r\n  });\r\n};\r\n\r\nfunction registerUser({ login, password, name }) {\r\n  return fetch(\"https://wedev-api.sky.pro/api/user\", {\r\n    method: \"POST\",\r\n    body: JSON.stringify({\r\n      login,\r\n      password,\r\n      name,\r\n    }),\r\n  }).then((response) => {\r\n    if (response.status === 400) {\r\n      throw new Error(\"Такой пользователь уже существует\");\r\n    }\r\n    return response.json();\r\n  });\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./api.js?");

/***/ }),

/***/ "./date.js":
/*!*****************!*\
  !*** ./date.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentDate: () => (/* binding */ commentDate)\n/* harmony export */ });\nconst commentDate = new Date().toLocaleDateString('default', {year: '2-digit', day: '2-digit', month: '2-digit'}) + \" \" + new Date().toTimeString().substr(0,5);\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./date.js?");

/***/ }),

/***/ "./getCommentsList.js":
/*!****************************!*\
  !*** ./getCommentsList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getCommentsList: () => (/* binding */ getCommentsList)\n/* harmony export */ });\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n   //import { formatDateToRu, formatDateToUs } from \"./lib/formarDate/formatDate.js\";\r\n \r\n //const formatDate = (date) => {\r\n//  return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}` }\r\n // const country = \"ru\";\r\n \r\n\r\n const getCommentsList = (comment, index) => {\r\n//  const createDate = format(new Date(comment.date), \"yyyy-MM-dd HH.mm.ss\"); не работает корректно, отображается год-день-месяц\r\nconst now = new Date();\r\n    return   `\r\n    \r\n    \r\n    <li class = 'comment' class = 'whiteSpace'   data-index =\"${index}\"> \r\n    <div class = 'comment-header'>\r\n        <div>${comment.name}</div> \r\n        <div>${(0,date_fns__WEBPACK_IMPORTED_MODULE_0__.format)(now, \"yyyy-MM-dd HH.mm.ss\")}</div>\r\n       </div>  \r\n       \r\n           <div class = 'comment-body'>\r\n         <div class = \"comment-text\">\r\n         ${comment.textElement}\r\n         </div>\r\n         </div>\r\n       \r\n       \r\n         <div class = \"comment-footer\" >\r\n           <div class = 'likes'>      \r\n               <span class=\"likes-counter\">${comment.likesNumber}</span>\r\n           <button data-index = '${index}' class=\" like-button ${comment.propertyColorLike}\"></button>\r\n                   </div> \r\n       </div>\r\n\r\n    </li>\r\n           `;\r\n };\r\n\r\n \r\n  \r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./getCommentsList.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   comments: () => (/* binding */ comments),\n/* harmony export */   fetchFunction: () => (/* binding */ fetchFunction)\n/* harmony export */ });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./render.js\");\n/* harmony import */ var _getCommentsList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getCommentsList.js */ \"./getCommentsList.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ \"./date.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n  //const createDate = format(new Date(comment.date), \"yyyy-MM-dd HH.mm.ss\");\r\n\r\n//получить из хранилища данных \r\nlet  comments = [];\r\n\r\nfunction fetchFunction (){\r\n     (0,_api_js__WEBPACK_IMPORTED_MODULE_2__.getFetch)().then((responseData) => {\r\n        const appComments  = responseData.comments.map ((comment) => {\r\n        return {\r\n    name: comment.author.name,\r\n    date: _date_js__WEBPACK_IMPORTED_MODULE_3__.commentDate,\r\n     textElement: comment.text,\r\n     likesNumber: comment.likes,\r\n     isLiked: false,\r\n     propertyColorLike: '',\r\n       };\r\n    });\r\n    comments = appComments;\r\n   (0,_render_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({commentsElement: _render_js__WEBPACK_IMPORTED_MODULE_0__.commentsElement, getCommentsList: _getCommentsList_js__WEBPACK_IMPORTED_MODULE_1__.getCommentsList});\r\n     }).catch((error) => {\r\n   //   alert (\"Кажется что-то пошло не так, попробуйте позже\");\r\n    console.log (error);\r\n     });\r\n     };\r\nfetchFunction();\r\n//loaderComments ();\r\n\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./index.js?");

/***/ }),

/***/ "./login-components.js":
/*!*****************************!*\
  !*** ./login-components.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderLoginComponent: () => (/* binding */ renderLoginComponent)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ \"./node_modules/date-fns/esm/index.js\");\n\r\n//import { formatDateToRu, formatDateToUs } from \"./lib/formarDate/formatDate.js\";\r\n\r\n\r\n//const formatDate = (date) => {\r\n // return `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}/${date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1)}/${date.getFullYear()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}` }\r\n\r\n //${formatDate(new Date(comment.date))}\r\nfunction renderLoginComponent ({appEl, setToken, fetchFunction, setName, comments}){\r\n  let isLoginMode = true;\r\n\r\nconst commentsHtmlNotEdit = comments.map ((comment, index) => {\r\n // const createDate = format(new Date(comment.date), \"yyyy-MM-dd HH.mm.ss\"); не работает корректно, отображается год-день-месяц\r\n  const now = new Date();\r\n // format(now, \"yyyy-MM-dd HH.mm.ss\");\r\n  \r\n  return `    <li class = 'comment' class = 'whiteSpace'   data-index =\"${index}\"> \r\n  <div class = 'comment-header'>\r\n      <div>${comment.name}</div> \r\n      <div>${(0,date_fns__WEBPACK_IMPORTED_MODULE_1__.format)(now, \"yyyy-MM-dd HH.mm.ss\")}</div>\r\n     </div>  \r\n     \r\n         <div class = 'comment-body'>\r\n       <div class = \"comment-text\">\r\n       ${comment.textElement}\r\n       </div>\r\n       </div>\r\n     \r\n     \r\n       <div class = \"comment-footer\" >\r\n         <div class = 'likes'>      \r\n             <span class=\"likes-counter\">${comment.likesNumber}</span>\r\n         <button data-index = '${index}' class=\" like-button ${comment.propertyColorLike}\"></button>\r\n                 </div> \r\n     </div>\r\n\r\n  </li>`\r\n}).join('');\r\n\r\n\r\nconst appHTML = `<div class=\"container\">\r\n\r\n      <ul class=\"comments\">\r\n       ${commentsHtmlNotEdit}\r\n      </ul> <br>   \r\n      <div>Чтобы добавить комментарий, <a  id=\"login-link\" style = \"color: red\" href=\"#\">нужно авторизоваться</a></div>\r\n      </div>`;\r\n    \r\n      appEl.innerHTML = appHTML;\r\n\r\ndocument.getElementById('login-link').addEventListener('click', () => {\r\n  const renderForm = () => {\r\n             const appHtml = `   <div class=\"container\" id = \"container\">\r\n           <h3> Форма ${isLoginMode ? \"входа\" : \"регистрации\" }  </h3>\r\n      <div class = 'comment'>\r\n      ${isLoginMode ? \"\" :  ` Имя\r\n      <input type=\"text\"class = \"add-form-name\" id=\"name-input\"class=\"input\"\r\n    placeholder=\"Введите имя\" />\r\n    <br/>\r\n    <br/>  `}\r\n   \r\n          Логин \r\n            <input type=\"text\"class = \"add-form-name\"  id=\"login-input\"class=\"input\"\r\n          placeholder=\"Введите логин\" />\r\n          <br/>\r\n          <br/>\r\n          Пароль\r\n          <input  type=\"password\" class = \"add-form-name\"  id=\"password-input\"class=\"input\"\r\n          placeholder=\"Введите пароль\"/>\r\n          <br/> \r\n          <br/> \r\n          <br/> \r\n          <button id=\"login-button\"  class =\"add-form-button\"> ${isLoginMode ? \"Войти\" : \"Перейти к регистрации\"}</button>\r\n          <button id=\"toggle-button\"class =\"add-form-button\" >Перейти  ${isLoginMode ? \"к регистрации\" : \" ко входу\"}</button>`\r\n  \r\n          appEl.innerHTML = appHtml;\r\n\r\n      \r\n       document.getElementById(\"login-button\").addEventListener('click', () => {\r\n      if (isLoginMode) {\r\n         const login = document.getElementById('login-input').value;\r\n         const password = document.getElementById('password-input').value;\r\n  if (!login){\r\n    alert (\"Введите логин\");\r\n  }\r\n  if (!password){\r\n    alert (\"Введите пароль\");\r\n  }\r\n        (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.loginUser)({\r\n          login: login,\r\n          password: password})\r\n          .then ((user) => {\r\n   \r\n       setToken(`Bearer ${user.user.token}`);\r\n       setName(user.user.name);\r\n      \r\n      fetchFunction();\r\n        }).catch ((error) => {\r\n          alert (error.message)\r\n        })    \r\n      } else {\r\n           const login = document.getElementById('login-input').value;\r\n        const password = document.getElementById('password-input').value;\r\n        const name = document.getElementById('name-input').value;\r\n        if (!name){\r\n          alert (\"Введите имя\");\r\n        }\r\n          if (!login){\r\n            alert (\"Введите логин\");\r\n          }\r\n          if (!password){\r\n            alert (\"Введите пароль\");\r\n          }\r\n      \r\n                (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.registerUser)({\r\n                  login: login,\r\n                  password: password,\r\n                  name: name,\r\n                })\r\n                  .then ((user) => {\r\n                setToken(`Bearer ${user.user.token}`) \r\n              fetchFunction();\r\n                }).catch ((error) => {\r\n                  //TODO выводить алерт красиво\r\n                  alert (error.message)\r\n                }) \r\n\r\n\r\n      }\r\n        });\r\n  \r\n        document.getElementById(\"toggle-button\").addEventListener('click', () => {\r\n         isLoginMode = !isLoginMode;\r\n        renderForm();\r\n        })\r\n  \r\n  }\r\n  \r\n  renderForm();\r\n}\r\n\r\n \r\n)}\r\n\n\n//# sourceURL=webpack://webdev-dom-homework/./login-components.js?");

/***/ }),

/***/ "./node_modules/date-fns/esm/index.js":
/*!********************************************!*\
  !*** ./node_modules/date-fns/esm/index.js ***!
  \********************************************/
/***/ (() => {

eval("throw new Error(\"Module build failed: Error: ENOENT: no such file or directory, open 'C:\\\\Users\\\\Admin\\\\Desktop\\\\JS\\\\Новая папка\\\\webdev-dom-homework\\\\node_modules\\\\date-fns\\\\esm\\\\index.js'\");\n\n//# sourceURL=webpack://webdev-dom-homework/./node_modules/date-fns/esm/index.js?");

/***/ }),

/***/ "./render.js":
/*!*******************!*\
  !*** ./render.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addFormElement: () => (/* binding */ addFormElement),\n/* harmony export */   buttonElement: () => (/* binding */ buttonElement),\n/* harmony export */   commentsElement: () => (/* binding */ commentsElement),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   nameInputElement: () => (/* binding */ nameInputElement),\n/* harmony export */   textElement: () => (/* binding */ textElement)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./index.js\");\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api.js */ \"./api.js\");\n/* harmony import */ var _login_components_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-components.js */ \"./login-components.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst buttonElement = document.getElementById('add-form-button');\r\nconst nameInputElement = document.getElementById('input-name');\r\nconst textElement = document.querySelector('.add-form-text');\r\nconst commentsElement = document.querySelector('.comments');\r\nconst addFormElement = document.getElementById('add-form');\r\n let token = null;\r\nlet name = null;\r\n\r\n const renderComments  = ({ getCommentsList}) => {\r\n const appEl = document.getElementById(\"app\");\r\n if (!token) {\r\n  (0,_login_components_js__WEBPACK_IMPORTED_MODULE_2__.renderLoginComponent)({\r\n      comments: _index_js__WEBPACK_IMPORTED_MODULE_0__.comments,\r\n      appEl, \r\n      setToken: (newToken) => {\r\n      token = newToken;\r\n      },\r\n      setName: (newName) => {\r\n      name = newName;\r\n      },\r\n      fetchFunction: _index_js__WEBPACK_IMPORTED_MODULE_0__.fetchFunction,\r\n  });\r\n  \r\n}\r\n//    <p> <i>Комментарий создан: ${new Date(comments.date)} </i> </p> \r\n  else {\r\n    const commentsHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.comments\r\n     .map((comment, index) => getCommentsList (comment, index)).join(''); \r\n    \r\n     const appHtml = `   <div class=\"container\" id = \"container\">\r\n     <div >\r\n \r\n     <ul class=\"comments\" id=\"comments\">\r\n     ${commentsHTML}\r\n        </ul>\r\n     <div class=\"add-form\" id = 'add-form'>\r\n       <input\r\n         type=\"text\"\r\n         class=\"add-form-name\"\r\n         placeholder=\"Введите ваше имя\"\r\n         id = 'input-name' value = \"${name}\"\r\n       />\r\n       <textarea\r\n         type=\"textarea\"\r\n         class=\"add-form-text\"\r\n         placeholder=\"Введите ваш коментарий\"\r\n         rows=\"4\" id =\"new-text\"\r\n       ></textarea> \r\n       <div class=\"add-form-row\">\r\n         <button class=\"add-form-button\" id = 'add-form-button'>Написать</button> \r\n        </div> \r\n        </div>\r\n        </div> \r\n      </div> `\r\n    \r\n    \r\n         appEl.innerHTML = appHtml;\r\n    \r\n        \r\n\r\n  // return;\r\n  const addFormElement = document.getElementById('add-form');\r\n       addFormElement.classList.remove('hide');\r\n        \r\n\r\n        const nameInputElement = document.getElementById('input-name');\r\n         const textElement = document.querySelector('.add-form-text');\r\n         const buttonElement = document.getElementById('add-form-button');\r\n        nameInputElement.setAttribute('disabled', 'disabled');\r\n\r\n\r\n//добавление комментария\r\nfunction  commentPost (){\r\n   return (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.postFetch)(nameInputElement, textElement, token)\r\n    .then((response) => {\r\n     return (0,_api_js__WEBPACK_IMPORTED_MODULE_1__.getFetch)();\r\n    })\r\n    .then(() => {\r\n     nameInputElement.value = \"\";\r\n     textElement.value = \"\";\r\n     })\r\n    .catch((error) => {\r\n     if (error.message === \"Сервер сломался\") {\r\n     alert(\"Сервер сломался, попробуйте позже\");\r\n       \r\n     commentPost ();\r\n     } else if (error.message === \"Плохой запрос\") {\r\n     alert(\"Имя и комментарий должны быть не короче 3 символов\");\r\n     } else {\r\n     alert(\"Кажется, у вас сломался интернет, попробуйте позже\");\r\n    console.log(error);\r\n     }\r\n    });\r\n}\r\n\r\n\r\n//добавление новых комментариев по кнопке\r\nbuttonElement.addEventListener (\"click\", () => {\r\n  //nameInputElement.style.background = '';\r\n // if (nameInputElement.value === \"\" ){\r\n//    nameInputElement.style.background = 'red';\r\n//    return;\r\n//   };\r\n   textElement.style.background = '';\r\n   if (textElement.value === \"\"){\r\n      textElement.style.background = 'red';\r\n      return;\r\n   };\r\n\r\n const addFormElement = document.getElementById('add-form');\r\n addFormElement.classList.remove('hide');\r\n\r\ncommentPost();\r\nrenderComments ({ comments: _index_js__WEBPACK_IMPORTED_MODULE_0__.comments, getCommentsList} )\r\n\r\n})\r\n//цитирование\r\n const quotation = () => {\r\n\r\n  let commentElements  = document.querySelectorAll ('.comment');\r\n\r\n  for (const commentElement of commentElements){\r\n  commentElement.addEventListener('click', () => {\r\n  const index = commentElement.dataset.index;\r\n  textElement.value =  `\"${_index_js__WEBPACK_IMPORTED_MODULE_0__.comments[index].name}:  ${_index_js__WEBPACK_IMPORTED_MODULE_0__.comments[index].textElement}\"\\n`\r\n      });\r\n    };\r\n  };\r\n  quotation ();\r\n    \r\nfunction likeCommentButton() {    \r\n const likesButton = document.querySelectorAll('.like-button');\r\nfor (const like of likesButton) {\r\n   like.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n   const likeIndex = like.dataset.index;\r\n    const commentsElement = _index_js__WEBPACK_IMPORTED_MODULE_0__.comments[likeIndex];\r\n            \r\n    if (commentsElement.likeComment) {\r\n    commentsElement.likesNumber -= 1;\r\n    commentsElement.likeComment = false;\r\n    commentsElement.propertyColorLike = 'like-button -no-active-like';           \r\n  } else {\r\n    commentsElement.likesNumber += 1;\r\n   commentsElement.likeComment = true;\r\n    commentsElement.propertyColorLike = 'like-button -active-like';                  \r\n    }\r\nrenderComments({ comments: _index_js__WEBPACK_IMPORTED_MODULE_0__.comments, getCommentsList} );\r\n })\r\n}\r\n};\r\n   likeCommentButton();\r\n\r\n     }\r\n }\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderComments);\n\n//# sourceURL=webpack://webdev-dom-homework/./render.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;