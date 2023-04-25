import { jsx as r, Fragment as e, jsxs as t } from "react/jsx-runtime"
import { memo as n } from "react"
function i(n) {
  var i = n.circles,
    o = n.width,
    a = void 0 === o ? 0.9 * window.innerWidth : o,
    c = n.height,
    l = void 0 === c ? 0.5 * window.innerHeight : c,
    h = n.circleRadius,
    u = void 0 === h ? 3 : h
  if (!i) return r(e, { children: "Rellena los circulo del componente" })
  if (i.length < 2) return r(e, { children: "Esperamos dos valores..." })
  var d = i
    .map(function (r) {
      return "".concat(r.x, ",").concat(r.y)
    })
    .join(" ")
  return t("svg", {
    width: a,
    height: l,
    children: [
      r("rect", { width: a, height: l, fill: "none" }),
      i.length > 0 &&
        t(e, {
          children: [
            i.map(function (e, t) {
              return r("circle", { cx: e.x, cy: e.y, r: u, fill: e.color }, t)
            }),
            r("path", {
              d: "M ".concat(d),
              fill: "none",
              stroke: "green",
              strokeWidth: "1"
            })
          ]
        })
    ]
  })
}
function o(r, e) {
  ;(null == e || e > r.length) && (e = r.length)
  for (var t = 0, n = new Array(e); t < e; t++) n[t] = r[t]
  return n
}
function a(r) {
  return (
    (function (r) {
      if (Array.isArray(r)) return o(r)
    })(r) ||
    (function (r) {
      if (
        ("undefined" != typeof Symbol && null != r[Symbol.iterator]) ||
        null != r["@@iterator"]
      )
        return Array.from(r)
    })(r) ||
    (function (r, e) {
      if (!r) return
      if ("string" == typeof r) return o(r, e)
      var t = Object.prototype.toString.call(r).slice(8, -1)
      "Object" === t && r.constructor && (t = r.constructor.name)
      if ("Map" === t || "Set" === t) return Array.from(t)
      if (
        "Arguments" === t ||
        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
      )
        return o(r, e)
    })(r) ||
    (function () {
      throw new TypeError(
        "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      )
    })()
  )
}
var c = n(function (e) {
  var t = e.height,
    n = void 0 === t ? 0.5 * window.innerHeight : t,
    o = e.width,
    c = void 0 === o ? 0.85 * window.innerWidth : o,
    l = (function (r) {
      var e,
        t,
        n = r.height,
        i = void 0 === n ? 0.5 * window.innerHeight : n,
        o = r.width,
        c = void 0 === o ? 0.5 * window.innerWidth : o,
        l = r.yValues,
        h =
          void 0 === l
            ? [
                5e3, 4e3, 3e3, 4500, 3500, 5e3, 4e3, 3e3, 4500, 3500, 5e3, 4e3,
                3e3, 4500, 3500
              ]
            : l,
        u = (e = Math).max.apply(e, a(h)),
        d = (t = Math).min.apply(t, a(h)),
        f = h.length,
        s = (c - 50) / (f - 1)
      return h.map(function (r, e) {
        return {
          x: e * s + 25,
          y: ((r - d) / (u - d)) * (i - 50) + 25,
          color: "green"
        }
      })
    })({ width: c, height: n, yValues: e.yValues })
  return r(i, { height: n, width: c, circles: l })
})
export { c as Chart }
