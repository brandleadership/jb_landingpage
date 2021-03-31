showMenuPanel = () => {
  var e = this,
    t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
    n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    i = this.elements.container.querySelector(
      '#plyr-settings-'.concat(this.id, '-').concat(t),
    )
  if (X(i)) {
    var r = i.parentNode,
      a = Array.from(r.children).find(function (e) {
        return !e.hidden
      })
    if (ke.transitions && !ke.reducedMotion) {
      ;(r.style.width = ''.concat(a.scrollWidth, 'px')),
        (r.style.height = ''.concat(a.scrollHeight, 'px'))
      var o = Qe.getMenuSize.call(this, i),
        s = function t(n) {
          n.target === r &&
            ['width', 'height'].includes(n.propertyName) &&
            ((r.style.width = ''), (r.style.height = ''), Te.call(e, r, te, t))
        }
      Le.call(this, r, te, s),
        (r.style.width = ''.concat(o.width, 'px')),
        (r.style.height = ''.concat(o.height, 'px'))
    }
    me(a, !0), me(i, !1), Qe.focusFirstMenuItem.call(this, i, n)
  }
}
