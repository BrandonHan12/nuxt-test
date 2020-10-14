"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.mutations = exports.state = void 0;

var _ApiService = _interopRequireDefault(require("@/middleware/ApiService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var state = function state() {
  return {
    customers: []
  };
};

exports.state = state;
var mutations = {
  SET_CUSTOMERS: function SET_CUSTOMERS(state, customers) {
    state.customers = customers;
  }
};
exports.mutations = mutations;
var actions = {
  loadCustomers: function loadCustomers(_ref) {
    var commit, req;
    return regeneratorRuntime.async(function loadCustomers$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            commit = _ref.commit;
            _context.next = 3;
            return regeneratorRuntime.awrap(_ApiService["default"].getCustomers());

          case 3:
            req = _context.sent;
            req.forEach(function (c) {
              c.id = c.id;
            });
            commit('SET_CUSTOMERS', req);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  }
};
exports.actions = actions;