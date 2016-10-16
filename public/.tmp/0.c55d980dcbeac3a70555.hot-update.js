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

var _users = __webpack_require__(591);

var _footer = __webpack_require__(479);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_17vjcb9n9v = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/main.js',
      hash = 'a020b39cba9f4641cfcc3c9405b6872e40d6d15f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/main.js',
    statementMap: {
      '0': {
        start: {
          line: 7,
          column: 15
        },
        end: {
          line: 18,
          column: 1
        }
      },
      '1': {
        start: {
          line: 22,
          column: 4
        },
        end: {
          line: 31,
          column: 6
        }
      }
    },
    fnMap: {
      '0': {
        name: '(anonymous_0)',
        decl: {
          start: {
            line: 21,
            column: 2
          },
          end: {
            line: 21,
            column: 3
          }
        },
        loc: {
          start: {
            line: 21,
            column: 11
          },
          end: {
            line: 32,
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

/***/ 482:
false,

/***/ 483:
false

})
//# sourceMappingURL=0.c55d980dcbeac3a70555.hot-update.js.map