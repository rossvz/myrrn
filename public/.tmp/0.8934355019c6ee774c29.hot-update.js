webpackHotUpdate(0,{

/***/ 588:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(66), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(47), React = __webpack_require__(4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Thing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_5wtb6gyo6 = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/things/thing.js',
      hash = '8fc7c1a286d1afd44a226e170f381a9ce789a005',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/things/thing.js',
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

var styles = (++cov_5wtb6gyo6.s[0], {
  thing: {
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

var Thing = exports.Thing = function (_Component) {
  _inherits(Thing, _Component);

  function Thing() {
    _classCallCheck(this, Thing);

    return _possibleConstructorReturn(this, (Thing.__proto__ || Object.getPrototypeOf(Thing)).apply(this, arguments));
  }

  _createClass(Thing, [{
    key: 'render',
    value: function render() {
      ++cov_5wtb6gyo6.f[0];
      ++cov_5wtb6gyo6.s[1];

      return _react2.default.createElement(
        'div',
        { style: styles.thing },
        _react2.default.createElement(
          'h3',
          { style: styles.h3 },
          'Name: ',
          this.props.thing.first_name,
          ' ',
          this.props.thing.last_name
        ),
        _react2.default.createElement(
          'p',
          null,
          'Email: ',
          this.props.thing.email
        )
      );
    }
  }]);

  return Thing;
}(_react.Component);

++cov_5wtb6gyo6.s[2];


Thing.propTypes = {
  thing: _react2.default.PropTypes.object.isRequired
};

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(68); if (makeExportsHot(module, __webpack_require__(4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "thing.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }

})
//# sourceMappingURL=0.8934355019c6ee774c29.hot-update.js.map