'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports['default'] = void 0

var _axios = _interopRequireDefault(require('axios'))

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var client = _axios['default'].create({
  baseURL: 'https://xdybi9d97h.execute-api.ap-northeast-1.amazonaws.com/dev',
  json: true,
})

var _default = {
  getCustomers: function getCustomers() {
    return regeneratorRuntime.async(function getCustomers$(_context) {
      while (1) {
        switch ((_context.prev = _context.next)) {
          case 0:
            return _context.abrupt(
              'return',
              client({
                method: 'get',
                url: '/brandon/customer',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
              })
                .then(function (req) {
                  return req.data
                })
                ['catch'](function (error) {
                  return error.response
                })
            )

          case 1:
          case 'end':
            return _context.stop()
        }
      }
    })
  },
  addCustomer: function addCustomer(data) {
    return regeneratorRuntime.async(function addCustomer$(_context2) {
      while (1) {
        switch ((_context2.prev = _context2.next)) {
          case 0:
            data = JSON.stringify(data)
            return _context2.abrupt(
              'return',
              client({
                method: 'post',
                url: '/brandon/customer',
                headers: {
                  'Content-Type': 'application/json',
                },
                data: data,
              })
                .then(function (req) {
                  return req
                })
                ['catch'](function (error) {
                  return error.response
                })
            )

          case 2:
          case 'end':
            return _context2.stop()
        }
      }
    })
  },
  updateCustomer: function updateCustomer(data) {
    return regeneratorRuntime.async(function updateCustomer$(_context3) {
      while (1) {
        switch ((_context3.prev = _context3.next)) {
          case 0:
            data = JSON.stringify(data)
            return _context3.abrupt(
              'return',
              client({
                method: 'put',
                url: '/brandon/customer',
                headers: {
                  'Content-Type': 'application/json',
                },
                params: {},
                data: data,
              })
                .then(function (req) {
                  return req
                })
                ['catch'](function (error) {
                  return error.response
                })
            )

          case 2:
          case 'end':
            return _context3.stop()
        }
      }
    })
  },
}
exports['default'] = _default
