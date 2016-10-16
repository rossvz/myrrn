webpackHotUpdate(0,{

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
      hash = '90f062f300bf0381d561b1c2f71450b0a1bdbcd1',
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
          line: 34,
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
_reactDom2.default.render(_react2.default.createElement(UserForm));

/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(56); if (makeExportsHot(module, __webpack_require__(2))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "userForm.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(49)(module)))

/***/ }

})
//# sourceMappingURL=0.657d724f69fe1ebea27f.hot-update.js.map