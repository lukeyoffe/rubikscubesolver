(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./client/src/components/login.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/login.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _firebase = __webpack_require__(/*! firebase */ \"./node_modules/firebase/dist/index.cjs.js\");\n\nvar firebase = _interopRequireWildcard(_firebase);\n\nvar _firebaseui = __webpack_require__(/*! firebaseui */ \"./node_modules/firebaseui/dist/npm.js\");\n\nvar firebaseui = _interopRequireWildcard(_firebaseui);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar config = {\n  apiKey: \"AIzaSyCv5PskVEXnR7FHNj0faz-wIOezT8OvW-I\",\n  authDomain: \"ether-cube.firebaseapp.com\",\n  databaseURL: \"https://ether-cube.firebaseio.com\",\n  projectId: \"ether-cube\",\n  storageBucket: \"ether-cube.appspot.com\",\n  messagingSenderId: \"688509177020\"\n};\n\nfirebase.initializeApp(config);\n\nvar uiConfig = {\n  signInSuccessUrl: '/dashboard',\n  signInOptions: [firebase.auth.FacebookAuthProvider.PROVIDER_ID, firebase.auth.GoogleAuthProvider.PROVIDER_ID],\n  signInFlow: \"popup\"\n};\n\nvar ui = new firebaseui.auth.AuthUI(firebase.auth());\n\nvar Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n  }\n\n  _createClass(Login, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      ui.start('#firebaseui-auth-container', uiConfig);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { id: 'auth-container', className: 'auth-container' },\n        _react2.default.createElement(\n          'h1',\n          { className: 'heading-primary--main' },\n          'Sign-in'\n        ),\n        _react2.default.createElement(\n          'h3',\n          { className: 'heading-primary--sub center' },\n          'Login to manage your cubes'\n        ),\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement('div', { id: 'firebaseui-auth-container' })\n        )\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\nexports.default = Login;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvbG9naW4uanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2NsaWVudC9zcmMvY29tcG9uZW50cy9sb2dpbi5qc3g/ZTE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UnO1xuaW1wb3J0ICogYXMgZmlyZWJhc2V1aSBmcm9tICdmaXJlYmFzZXVpJztcblxudmFyIGNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUN2NVBza1ZFWG5SN0ZITmowZmF6LXdJT2V6VDhPdlctSVwiLFxuICBhdXRoRG9tYWluOiBcImV0aGVyLWN1YmUuZmlyZWJhc2VhcHAuY29tXCIsXG4gIGRhdGFiYXNlVVJMOiBcImh0dHBzOi8vZXRoZXItY3ViZS5maXJlYmFzZWlvLmNvbVwiLFxuICBwcm9qZWN0SWQ6IFwiZXRoZXItY3ViZVwiLFxuICBzdG9yYWdlQnVja2V0OiBcImV0aGVyLWN1YmUuYXBwc3BvdC5jb21cIixcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiNjg4NTA5MTc3MDIwXCJcbn07XG5cbmZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKTtcblxudmFyIHVpQ29uZmlnID0ge1xuICBzaWduSW5TdWNjZXNzVXJsOiAnL2Rhc2hib2FyZCcsXG4gIHNpZ25Jbk9wdGlvbnM6IFtcbiAgICAgIGZpcmViYXNlLmF1dGguRmFjZWJvb2tBdXRoUHJvdmlkZXIuUFJPVklERVJfSUQsXG4gICAgICBmaXJlYmFzZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlci5QUk9WSURFUl9JRFxuICBdLFxuICBzaWduSW5GbG93OiBcInBvcHVwXCJcbn07XG5cbnZhciB1aSA9IG5ldyBmaXJlYmFzZXVpLmF1dGguQXV0aFVJKGZpcmViYXNlLmF1dGgoKSk7XG5cbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdWkuc3RhcnQoJyNmaXJlYmFzZXVpLWF1dGgtY29udGFpbmVyJywgdWlDb25maWcpO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQgPSBcImF1dGgtY29udGFpbmVyXCIgY2xhc3NOYW1lID0gXCJhdXRoLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWUgPSAnaGVhZGluZy1wcmltYXJ5LS1tYWluJz5TaWduLWluPC9oMT5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lID0gJ2hlYWRpbmctcHJpbWFyeS0tc3ViIGNlbnRlcic+TG9naW4gdG8gbWFuYWdlIHlvdXIgY3ViZXM8L2gzPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGlkPVwiZmlyZWJhc2V1aS1hdXRoLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFOQTtBQUNBO0FBUUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFIQTtBQVFBOzs7O0FBakJBO0FBQ0E7QUFtQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/login.jsx\n");

/***/ })

}]);