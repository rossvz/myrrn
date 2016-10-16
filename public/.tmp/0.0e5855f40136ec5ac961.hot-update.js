webpackHotUpdate(0,{

/***/ 481:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(66), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(47), React = __webpack_require__(4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Main = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(480);

var _title = __webpack_require__(484);

var _techs = __webpack_require__(483);

var _users = __webpack_require__(591);

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
          _react2.default.createElement(_techs.Techs, null),
          _react2.default.createElement(_users.Users, null)
        ),
        _react2.default.createElement(_footer.Footer, null)
      );
    }
  }]);

  return Main;
}(_react.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(68); if (makeExportsHot(module, __webpack_require__(4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "main.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ },

/***/ 588:
false,

/***/ 589:
false,

/***/ 590:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(66), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(47), React = __webpack_require__(4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.User = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_2e5celkak0 = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/users/user.js',
      hash = '860136a8bc32af58d49ca64b6a884f834b400c9e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/users/user.js',
    statementMap: {
      '0': {
        start: {
          line: 3,
          column: 15
        },
        end: {
          line: 22,
          column: 1
        }
      },
      '1': {
        start: {
          line: 26,
          column: 4
        },
        end: {
          line: 33,
          column: 6
        }
      },
      '2': {
        start: {
          line: 37,
          column: 0
        },
        end: {
          line: 39,
          column: 2
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 25,
            column: 2
          },
          end: {
            line: 25,
            column: 3
          }
        },
        loc: {
          start: {
            line: 25,
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
      '1': 0,
      '2': 0
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

var styles = (++cov_2e5celkak0.s[0], {
  user: {
    height: '15rem',
    width: '15rem',
    border: '1px solid lightgray',
    borderRadius: '1rem',
    margin: '1rem',
    padding: '1rem'
  },
  logo: {
    width: '5rem',
    height: '5rem',
    float: 'right',
    margin: '0 0 .5rem .5rem'
  },
  h3: {
    fontSize: '1.5rem',
    margin: '0 0 2rem 0'
  }
});

var User = exports.User = function (_Component) {
  _inherits(User, _Component);

  function User() {
    _classCallCheck(this, User);

    return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
  }

  _createClass(User, [{
    key: 'render',
    value: function render() {
      ++cov_2e5celkak0.f[0];
      ++cov_2e5celkak0.s[1];

      return _react2.default.createElement(
        'div',
        { style: styles.user },
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Name: ',
          this.props.user.first_name,
          ' ',
          this.props.user.last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Email: ',
          this.props.user.email
        )
      );
    }
  }]);

  return User;
}(_react.Component);

++cov_2e5celkak0.s[2];


User.propTypes = {
  user: _react2.default.PropTypes.object.isRequired
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(68); if (makeExportsHot(module, __webpack_require__(4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "user.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ },

/***/ 591:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(66), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(47), React = __webpack_require__(4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(246);

var _axios2 = _interopRequireDefault(_axios);

var _user = __webpack_require__(590);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_t6t1ipfh = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/users/users.js',
      hash = '66f22ffef0d9944ff3d2af111ebfe272e192a26e',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/users/users.js',
    statementMap: {
      '0': {
        start: {
          line: 6,
          column: 15
        },
        end: {
          line: 20,
          column: 1
        }
      },
      '1': {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 24,
          column: 12
        }
      },
      '2': {
        start: {
          line: 25,
          column: 4
        },
        end: {
          line: 25,
          column: 29
        }
      },
      '3': {
        start: {
          line: 29,
          column: 4
        },
        end: {
          line: 33,
          column: 9
        }
      },
      '4': {
        start: {
          line: 32,
          column: 8
        },
        end: {
          line: 32,
          column: 52
        }
      },
      '5': {
        start: {
          line: 37,
          column: 4
        },
        end: {
          line: 48,
          column: 6
        }
      },
      '6': {
        start: {
          line: 44,
          column: 12
        },
        end: {
          line: 44,
          column: 39
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 23,
            column: 2
          },
          end: {
            line: 23,
            column: 3
          }
        },
        loc: {
          start: {
            line: 23,
            column: 16
          },
          end: {
            line: 26,
            column: 3
          }
        }
      },
      '1': {
        name: '(anonymous_1)',
        decl: {
          start: {
            line: 28,
            column: 2
          },
          end: {
            line: 28,
            column: 3
          }
        },
        loc: {
          start: {
            line: 28,
            column: 22
          },
          end: {
            line: 34,
            column: 3
          }
        }
      },
      '2': {
        name: '(anonymous_2)',
        decl: {
          start: {
            line: 31,
            column: 12
          },
          end: {
            line: 31,
            column: 13
          }
        },
        loc: {
          start: {
            line: 31,
            column: 24
          },
          end: {
            line: 33,
            column: 7
          }
        }
      },
      '3': {
        name: '(anonymous_3)',
        decl: {
          start: {
            line: 36,
            column: 2
          },
          end: {
            line: 36,
            column: 3
          }
        },
        loc: {
          start: {
            line: 36,
            column: 11
          },
          end: {
            line: 49,
            column: 3
          }
        }
      },
      '4': {
        name: '(anonymous_4)',
        decl: {
          start: {
            line: 43,
            column: 32
          },
          end: {
            line: 43,
            column: 33
          }
        },
        loc: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 39
          }
        }
      }
    },
    branchMap: {},
    s: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0,
      '5': 0,
      '6': 0
    },
    f: {
      '0': 0,
      '1': 0,
      '2': 0,
      '3': 0,
      '4': 0
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

var styles = (++cov_t6t1ipfh.s[0], {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  users: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

var Users = exports.Users = function (_Component) {
  _inherits(Users, _Component);

  function Users() {
    _classCallCheck(this, Users);

    ++cov_t6t1ipfh.f[0];
    ++cov_t6t1ipfh.s[1];

    var _this = _possibleConstructorReturn(this, (Users.__proto__ || Object.getPrototypeOf(Users)).call(this));

    ++cov_t6t1ipfh.s[2];

    _this.state = { users: [] };
    return _this;
  }

  _createClass(Users, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      ++cov_t6t1ipfh.f[1];
      ++cov_t6t1ipfh.s[3];

      _axios2.default.get('http://localhost:8080/users').then(function (response) {
        ++cov_t6t1ipfh.f[2];
        ++cov_t6t1ipfh.s[4];

        _this2.setState({ users: response.data.users });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_t6t1ipfh.f[3];
      ++cov_t6t1ipfh.s[5];

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'h2',
          { style: styles.h2 },
          'Here are some users that Ross made:'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.users },
          this.state.users.map(function (user, i) {
            ++cov_t6t1ipfh.f[4];
            ++cov_t6t1ipfh.s[6];
            return _react2.default.createElement(_user.User, { key: i, user: user });
          })
        )
      );
    }
  }]);

  return Users;
}(_react.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(68); if (makeExportsHot(module, __webpack_require__(4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "users.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }

})
//# sourceMappingURL=0.0e5855f40136ec5ac961.hot-update.js.map