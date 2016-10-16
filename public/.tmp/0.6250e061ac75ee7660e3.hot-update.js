webpackHotUpdate(0,{

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(54), RootInstanceProvider = __webpack_require__(55), ReactMount = __webpack_require__(39), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(480);

var _title = __webpack_require__(482);

var _users = __webpack_require__(485);

var _userForm = __webpack_require__(484);

var _footer = __webpack_require__(479);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_17vjcb9n9v = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/main.js',
      hash = '06715814201b26037b09ca1aa9673772121d72e0',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/main.js',
    statementMap: {
      '0': {
        start: {
          line: 8,
          column: 15
        },
        end: {
          line: 19,
          column: 1
        }
      },
      '1': {
        start: {
          line: 23,
          column: 4
        },
        end: {
          line: 33,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 22,
            column: 2
          },
          end: {
            line: 22,
            column: 3
          }
        },
        loc: {
          start: {
            line: 22,
            column: 11
          },
          end: {
            line: 34,
            column: 3
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0
    },
    f: {
      '0': 0
    },
    b: {}
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = (++cov_17vjcb9n9v.s[0], {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
});

var Main = exports.Main = function (_Component) {
  _inherits(Main, _Component);

  function Main() {
    _classCallCheck(this, Main);

    return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
  }

  _createClass(Main, [{
    key: 'render',
    value: function render() {
      ++cov_17vjcb9n9v.f[0];
      ++cov_17vjcb9n9v.s[1];

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(_header.Header, null),
        _react2.default.createElement(
          'main',
          { style: styles.main },
          _react2.default.createElement(_title.Title, null),
          _react2.default.createElement(_users.Users, null),
          _react2.default.createElement(_userForm.UserForm, null)
        ),
        _react2.default.createElement(_footer.Footer, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(56); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(54), RootInstanceProvider = __webpack_require__(55), ReactMount = __webpack_require__(39), React = __webpack_require__(2); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(470);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_1nk9t0enji = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/users/userForm.js',
      hash = 'b57d03b650721d9cc0264af10337bb937dd6f1b7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/users/userForm.js',
    statementMap: {
      '0': {
        start: {
          line: 4,
          column: 15
        },
        end: {
          line: 9,
          column: 1
        }
      },
      '1': {
        start: {
          line: 11,
          column: 17
        },
        end: {
          line: 30,
          column: 2
        }
      },
      '2': {
        start: {
          line: 13,
          column: 4
        },
        end: {
          line: 13,
          column: 52
        }
      },
      '3': {
        start: {
          line: 16,
          column: 4
        },
        end: {
          line: 16,
          column: 23
        }
      },
      '4': {
        start: {
          line: 17,
          column: 4
        },
        end: {
          line: 17,
          column: 59
        }
      },
      '5': {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 60
        }
      },
      '6': {
        start: {
          line: 21,
          column: 4
        },
        end: {
          line: 28,
          column: 6
        }
      },
      '7': {
        start: {
          line: 32,
          column: 0
        },
        end: {
          line: 35,
          column: 2
        }
      }
    },
    fnMap: {},
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0,
      '7': 0
    },
    f: {},
    b: {}
  },
      coverage = global[gcv] || (global[gcv] = {});

  if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }

  coverageData.hash = hash;
  return coverage[path] = coverageData;
}();

var styles = (++cov_1nk9t0enji.s[0], {
  form: {
    height: '500px',
    width: '500px'
  }
});

var UserForm = (++cov_1nk9t0enji.s[1], _react2.default.createClass({
  displayName: 'UserForm',
  getInitialState: function getInitialState() {
    ++cov_1nk9t0enji.s[2];

    return { firstName: '', lastName: '', email: '' };
  },
  handleSubmit: function handleSubmit(e) {
    ++cov_1nk9t0enji.s[3];

    e.preventDefault();
    ++cov_1nk9t0enji.s[4];
    console.log("Here's whats in the form %O", this.state);
    ++cov_1nk9t0enji.s[5];
    this.setState({ firstName: '', lastName: '', email: '' });
  },
  render: function render() {
    ++cov_1nk9t0enji.s[6];

    return _react2.default.createElement(
      'form',
      { style: styles.form, onSubmit: this.handleSubmit },
      _react2.default.createElement('input', { type: 'text', placeholder: 'First name', value: this.state.firstName }),
      _react2.default.createElement('input', { type: 'text', placeholder: 'Last name', value: this.state.lastName }),
      _react2.default.createElement('input', { type: 'email', placeholder: 'test@test.com', value: this.state.email }),
      _react2.default.createElement('input', { type: 'submit', value: 'Post' })
    );
  }
}));

++cov_1nk9t0enji.s[7];
_reactDom2.default.render(_react2.default.createElement(UserForm, null), document.getElementById('userForm'));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(56); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "userForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ }

})
//# sourceMappingURL=0.6250e061ac75ee7660e3.hot-update.js.map