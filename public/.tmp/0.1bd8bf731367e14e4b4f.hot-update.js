webpackHotUpdate(0,{

/***/ 589:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(66), RootInstanceProvider = __webpack_require__(67), ReactMount = __webpack_require__(47), React = __webpack_require__(4); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Things = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _axios = __webpack_require__(246);

var _axios2 = _interopRequireDefault(_axios);

var _thing = __webpack_require__(588);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cov_l0smomlub = function () {
  var path = '/Users/Ross/tut/sequelize/public/src/app/things/things.js',
      hash = '91a20a4a2f9c32a5f189c84715e474b753b77336',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = {
    path: '/Users/Ross/tut/sequelize/public/src/app/things/things.js',
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
          column: 30
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
          column: 47
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
          column: 42
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
            column: 33
          },
          end: {
            line: 43,
            column: 34
          }
        },
        loc: {
          start: {
            line: 44,
            column: 12
          },
          end: {
            line: 44,
            column: 42
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

var styles = (++cov_l0smomlub.s[0], {
  container: {
    margin: '1rem'
  },
  h2: {
    fontWeight: 300,
    fontSize: '1.5rem'
  },
  things: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
});

var Things = exports.Things = function (_Component) {
  _inherits(Things, _Component);

  function Things() {
    _classCallCheck(this, Things);

    ++cov_l0smomlub.f[0];
    ++cov_l0smomlub.s[1];

    var _this = _possibleConstructorReturn(this, (Things.__proto__ || Object.getPrototypeOf(Things)).call(this));

    ++cov_l0smomlub.s[2];

    _this.state = { things: [] };
    return _this;
  }

  _createClass(Things, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      ++cov_l0smomlub.f[1];
      ++cov_l0smomlub.s[3];

      _axios2.default.get('http://localhost:8080/users').then(function (response) {
        ++cov_l0smomlub.f[2];
        ++cov_l0smomlub.s[4];

        _this2.setState({ things: response.data });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      ++cov_l0smomlub.f[3];
      ++cov_l0smomlub.s[5];

      return _react2.default.createElement(
        'div',
        { style: styles.container },
        _react2.default.createElement(
          'h2',
          { style: styles.h2 },
          'Here are some things that Ross made:'
        ),
        _react2.default.createElement(
          'div',
          { style: styles.things },
          this.state.things.map(function (thing, i) {
            ++cov_l0smomlub.f[4];
            ++cov_l0smomlub.s[6];
            return _react2.default.createElement(_thing.Thing, { key: i, thing: thing });
          })
        )
      );
    }
  }]);

  return Things;
}(_react.Component);

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(68); if (makeExportsHot(module, __webpack_require__(4))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "things.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(55)(module)))

/***/ }

})
//# sourceMappingURL=0.1bd8bf731367e14e4b4f.hot-update.js.map