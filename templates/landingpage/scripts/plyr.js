'object' == typeof navigator &&
    (function (e, t) {
        'object' == typeof exports && 'undefined' != typeof module
            ? (module.exports = t())
            : 'function' == typeof define && define.amd
            ? define('Plyr', t)
            : ((e =
                  'undefined' != typeof globalThis
                      ? globalThis
                      : e || self).Plyr = t());
    })(this, function () {
        'use strict';
        function e(t) {
            return (e =
                'function' == typeof Symbol &&
                'symbol' == typeof Symbol.iterator
                    ? function (e) {
                          return typeof e;
                      }
                    : function (e) {
                          return e &&
                              'function' == typeof Symbol &&
                              e.constructor === Symbol &&
                              e !== Symbol.prototype
                              ? 'symbol'
                              : typeof e;
                      })(t);
        }
        function t(e, t) {
            if (!(e instanceof t))
                throw new TypeError('Cannot call a class as a function');
        }
        function n(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        function i(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        }
        function a(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function r(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function o(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? r(Object(n), !0).forEach(function (t) {
                          a(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : r(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        function s(e, t) {
            if (null == e) return {};
            var n,
                i,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        a = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++)
                        (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        t.indexOf(n) >= 0 ||
                            (Object.prototype.propertyIsEnumerable.call(e, n) &&
                                (a[n] = e[n]));
            }
            return a;
        }
        function l(e, t) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return e;
                })(e) ||
                (function (e, t) {
                    if (
                        'undefined' == typeof Symbol ||
                        !(Symbol.iterator in Object(e))
                    )
                        return;
                    var n = [],
                        i = !0,
                        a = !1,
                        r = void 0;
                    try {
                        for (
                            var o, s = e[Symbol.iterator]();
                            !(i = (o = s.next()).done) &&
                            (n.push(o.value), !t || n.length !== t);
                            i = !0
                        );
                    } catch (e) {
                        (a = !0), (r = e);
                    } finally {
                        try {
                            i || null == s.return || s.return();
                        } finally {
                            if (a) throw r;
                        }
                    }
                    return n;
                })(e, t) ||
                u(e, t) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function c(e) {
            return (
                (function (e) {
                    if (Array.isArray(e)) return d(e);
                })(e) ||
                (function (e) {
                    if (
                        'undefined' != typeof Symbol &&
                        Symbol.iterator in Object(e)
                    )
                        return Array.from(e);
                })(e) ||
                u(e) ||
                (function () {
                    throw new TypeError(
                        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
                    );
                })()
            );
        }
        function u(e, t) {
            if (e) {
                if ('string' == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return (
                    'Object' === n && e.constructor && (n = e.constructor.name),
                    'Map' === n || 'Set' === n
                        ? Array.from(e)
                        : 'Arguments' === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? d(e, t)
                        : void 0
                );
            }
        }
        function d(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
            return i;
        }
        function h(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                (i.enumerable = i.enumerable || !1),
                    (i.configurable = !0),
                    'value' in i && (i.writable = !0),
                    Object.defineProperty(e, i.key, i);
            }
        }
        function m(e, t, n) {
            return (
                t in e
                    ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                      })
                    : (e[t] = n),
                e
            );
        }
        function p(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                t &&
                    (i = i.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, i);
            }
            return n;
        }
        function f(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                    ? p(Object(n), !0).forEach(function (t) {
                          m(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                          e,
                          Object.getOwnPropertyDescriptors(n)
                      )
                    : p(Object(n)).forEach(function (t) {
                          Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t)
                          );
                      });
            }
            return e;
        }
        var g = { addCSS: !0, thumbWidth: 15, watch: !0 };
        function y(e, t) {
            return function () {
                return Array.from(document.querySelectorAll(t)).includes(this);
            }.call(e, t);
        }
        var b = function (e) {
                return null != e ? e.constructor : null;
            },
            v = function (e, t) {
                return !!(e && t && e instanceof t);
            },
            w = function (e) {
                return null == e;
            },
            k = function (e) {
                return b(e) === Object;
            },
            T = function (e) {
                return b(e) === String;
            },
            C = function (e) {
                return Array.isArray(e);
            },
            A = function (e) {
                return v(e, NodeList);
            },
            S = T,
            P = C,
            E = A,
            N = function (e) {
                return v(e, Element);
            },
            M = function (e) {
                return v(e, Event);
            },
            x = function (e) {
                return (
                    w(e) ||
                    ((T(e) || C(e) || A(e)) && !e.length) ||
                    (k(e) && !Object.keys(e).length)
                );
            };
        function I(e, t) {
            if (1 > t) {
                var n = (function (e) {
                    var t = ''
                        .concat(e)
                        .match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                    return t
                        ? Math.max(
                              0,
                              (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)
                          )
                        : 0;
                })(t);
                return parseFloat(e.toFixed(n));
            }
            return Math.round(e / t) * t;
        }
        var L,
            O,
            _,
            j = (function () {
                function e(t, n) {
                    (function (e, t) {
                        if (!(e instanceof t))
                            throw new TypeError(
                                'Cannot call a class as a function'
                            );
                    })(this, e),
                        N(t)
                            ? (this.element = t)
                            : S(t) &&
                              (this.element = document.querySelector(t)),
                        N(this.element) &&
                            x(this.element.rangeTouch) &&
                            ((this.config = f({}, g, {}, n)), this.init());
                }
                return (
                    (function (e, t, n) {
                        t && h(e.prototype, t), n && h(e, n);
                    })(
                        e,
                        [
                            {
                                key: 'init',
                                value: function () {
                                    e.enabled &&
                                        (this.config.addCSS &&
                                            ((this.element.style.userSelect =
                                                'none'),
                                            (this.element.style.webKitUserSelect =
                                                'none'),
                                            (this.element.style.touchAction =
                                                'manipulation')),
                                        this.listeners(!0),
                                        (this.element.rangeTouch = this));
                                },
                            },
                            {
                                key: 'destroy',
                                value: function () {
                                    e.enabled &&
                                        (this.config.addCSS &&
                                            ((this.element.style.userSelect =
                                                ''),
                                            (this.element.style.webKitUserSelect =
                                                ''),
                                            (this.element.style.touchAction =
                                                '')),
                                        this.listeners(!1),
                                        (this.element.rangeTouch = null));
                                },
                            },
                            {
                                key: 'listeners',
                                value: function (e) {
                                    var t = this,
                                        n = e
                                            ? 'addEventListener'
                                            : 'removeEventListener';
                                    [
                                        'touchstart',
                                        'touchmove',
                                        'touchend',
                                    ].forEach(function (e) {
                                        t.element[n](
                                            e,
                                            function (e) {
                                                return t.set(e);
                                            },
                                            !1
                                        );
                                    });
                                },
                            },
                            {
                                key: 'get',
                                value: function (t) {
                                    if (!e.enabled || !M(t)) return null;
                                    var n,
                                        i = t.target,
                                        a = t.changedTouches[0],
                                        r =
                                            parseFloat(i.getAttribute('min')) ||
                                            0,
                                        o =
                                            parseFloat(i.getAttribute('max')) ||
                                            100,
                                        s =
                                            parseFloat(
                                                i.getAttribute('step')
                                            ) || 1,
                                        l = i.getBoundingClientRect(),
                                        c =
                                            ((100 / l.width) *
                                                (this.config.thumbWidth / 2)) /
                                            100;
                                    return (
                                        0 >
                                        (n =
                                            (100 / l.width) *
                                            (a.clientX - l.left))
                                            ? (n = 0)
                                            : 100 < n && (n = 100),
                                        50 > n
                                            ? (n -= (100 - 2 * n) * c)
                                            : 50 < n && (n += 2 * (n - 50) * c),
                                        r + I((n / 100) * (o - r), s)
                                    );
                                },
                            },
                            {
                                key: 'set',
                                value: function (t) {
                                    e.enabled &&
                                        M(t) &&
                                        !t.target.disabled &&
                                        (t.preventDefault(),
                                        (t.target.value = this.get(t)),
                                        (function (e, t) {
                                            if (e && t) {
                                                var n = new Event(t, {
                                                    bubbles: !0,
                                                });
                                                e.dispatchEvent(n);
                                            }
                                        })(
                                            t.target,
                                            'touchend' === t.type
                                                ? 'change'
                                                : 'input'
                                        ));
                                },
                            },
                        ],
                        [
                            {
                                key: 'setup',
                                value: function (t) {
                                    var n =
                                            1 < arguments.length &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {},
                                        i = null;
                                    if (
                                        (x(t) || S(t)
                                            ? (i = Array.from(
                                                  document.querySelectorAll(
                                                      S(t)
                                                          ? t
                                                          : 'input[type="range"]'
                                                  )
                                              ))
                                            : N(t)
                                            ? (i = [t])
                                            : E(t)
                                            ? (i = Array.from(t))
                                            : P(t) && (i = t.filter(N)),
                                        x(i))
                                    )
                                        return null;
                                    var a = f({}, g, {}, n);
                                    if (S(t) && a.watch) {
                                        var r = new MutationObserver(function (
                                            n
                                        ) {
                                            Array.from(n).forEach(function (n) {
                                                Array.from(
                                                    n.addedNodes
                                                ).forEach(function (n) {
                                                    N(n) &&
                                                        y(n, t) &&
                                                        new e(n, a);
                                                });
                                            });
                                        });
                                        r.observe(document.body, {
                                            childList: !0,
                                            subtree: !0,
                                        });
                                    }
                                    return i.map(function (t) {
                                        return new e(t, n);
                                    });
                                },
                            },
                            {
                                key: 'enabled',
                                get: function () {
                                    return (
                                        'ontouchstart' in
                                        document.documentElement
                                    );
                                },
                            },
                        ]
                    ),
                    e
                );
            })(),
            D = function (e) {
                return null != e ? e.constructor : null;
            },
            q = function (e, t) {
                return Boolean(e && t && e instanceof t);
            },
            H = function (e) {
                return null == e;
            },
            F = function (e) {
                return D(e) === Object;
            },
            R = function (e) {
                return D(e) === String;
            },
            V = function (e) {
                return D(e) === Function;
            },
            B = function (e) {
                return Array.isArray(e);
            },
            U = function (e) {
                return q(e, NodeList);
            },
            W = function (e) {
                return (
                    H(e) ||
                    ((R(e) || B(e) || U(e)) && !e.length) ||
                    (F(e) && !Object.keys(e).length)
                );
            },
            z = H,
            K = F,
            Y = function (e) {
                return D(e) === Number && !Number.isNaN(e);
            },
            Q = R,
            X = function (e) {
                return D(e) === Boolean;
            },
            $ = V,
            J = B,
            G = U,
            Z = function (t) {
                return (
                    null !== t &&
                    'object' === e(t) &&
                    1 === t.nodeType &&
                    'object' === e(t.style) &&
                    'object' === e(t.ownerDocument)
                );
            },
            ee = function (e) {
                return q(e, Event);
            },
            te = function (e) {
                return q(e, KeyboardEvent);
            },
            ne = function (e) {
                return q(e, TextTrack) || (!H(e) && R(e.kind));
            },
            ie = function (e) {
                return q(e, Promise) && V(e.then);
            },
            ae = function (e) {
                if (q(e, window.URL)) return !0;
                if (!R(e)) return !1;
                var t = e;
                (e.startsWith('http://') && e.startsWith('https://')) ||
                    (t = 'http://'.concat(e));
                try {
                    return !W(new URL(t).hostname);
                } catch (e) {
                    return !1;
                }
            },
            re = W,
            oe =
                ((L = document.createElement('span')),
                (O = {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd otransitionend',
                    transition: 'transitionend',
                }),
                (_ = Object.keys(O).find(function (e) {
                    return void 0 !== L.style[e];
                })),
                !!Q(_) && O[_]);
        function se(e, t) {
            setTimeout(function () {
                try {
                    (e.hidden = !0), e.offsetHeight, (e.hidden = !1);
                } catch (e) {}
            }, t);
        }
        var le = {
            isIE:
                /* @cc_on!@ */
                !!document.documentMode,
            isEdge: window.navigator.userAgent.includes('Edge'),
            isWebkit:
                'WebkitAppearance' in document.documentElement.style &&
                !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform),
        };
        function ce(e, t) {
            return t.split('.').reduce(function (e, t) {
                return e && e[t];
            }, e);
        }
        function ue() {
            for (
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                    t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    i = 1;
                i < t;
                i++
            )
                n[i - 1] = arguments[i];
            if (!n.length) return e;
            var r = n.shift();
            return K(r)
                ? (Object.keys(r).forEach(function (t) {
                      K(r[t])
                          ? (Object.keys(e).includes(t) ||
                                Object.assign(e, a({}, t, {})),
                            ue(e[t], r[t]))
                          : Object.assign(e, a({}, t, r[t]));
                  }),
                  ue.apply(void 0, [e].concat(n)))
                : e;
        }
        function de(e, t) {
            var n = e.length ? e : [e];
            Array.from(n)
                .reverse()
                .forEach(function (e, n) {
                    var i = n > 0 ? t.cloneNode(!0) : t,
                        a = e.parentNode,
                        r = e.nextSibling;
                    i.appendChild(e),
                        r ? a.insertBefore(i, r) : a.appendChild(i);
                });
        }
        function he(e, t) {
            Z(e) &&
                !re(t) &&
                Object.entries(t)
                    .filter(function (e) {
                        var t = l(e, 2)[1];
                        return !z(t);
                    })
                    .forEach(function (t) {
                        var n = l(t, 2),
                            i = n[0],
                            a = n[1];
                        return e.setAttribute(i, a);
                    });
        }
        function me(e, t, n) {
            var i = document.createElement(e);
            return K(t) && he(i, t), Q(n) && (i.innerText = n), i;
        }
        function pe(e, t, n, i) {
            Z(t) && t.appendChild(me(e, n, i));
        }
        function fe(e) {
            G(e) || J(e)
                ? Array.from(e).forEach(fe)
                : Z(e) && Z(e.parentNode) && e.parentNode.removeChild(e);
        }
        function ge(e) {
            if (Z(e))
                for (var t = e.childNodes.length; t > 0; )
                    e.removeChild(e.lastChild), (t -= 1);
        }
        function ye(e, t) {
            return Z(t) && Z(t.parentNode) && Z(e)
                ? (t.parentNode.replaceChild(e, t), e)
                : null;
        }
        function be(e, t) {
            if (!Q(e) || re(e)) return {};
            var n = {},
                i = ue({}, t);
            return (
                e.split(',').forEach(function (e) {
                    var t = e.trim(),
                        a = t.replace('.', ''),
                        r = t.replace(/[[\]]/g, '').split('='),
                        o = l(r, 1)[0],
                        s = r.length > 1 ? r[1].replace(/["']/g, '') : '';
                    switch (t.charAt(0)) {
                        case '.':
                            Q(i.class)
                                ? (n.class = ''.concat(i.class, ' ').concat(a))
                                : (n.class = a);
                            break;
                        case '#':
                            n.id = t.replace('#', '');
                            break;
                        case '[':
                            n[o] = s;
                    }
                }),
                ue(i, n)
            );
        }
        function ve(e, t) {
            if (Z(e)) {
                var n = t;
                X(n) || (n = !e.hidden), (e.hidden = n);
            }
        }
        function we(e, t, n) {
            if (G(e))
                return Array.from(e).map(function (e) {
                    return we(e, t, n);
                });
            if (Z(e)) {
                var i = 'toggle';
                return (
                    void 0 !== n && (i = n ? 'add' : 'remove'),
                    e.classList[i](t),
                    e.classList.contains(t)
                );
            }
            return !1;
        }
        function ke(e, t) {
            return Z(e) && e.classList.contains(t);
        }
        function Te(e, t) {
            var n = Element.prototype;
            return (
                n.matches ||
                n.webkitMatchesSelector ||
                n.mozMatchesSelector ||
                n.msMatchesSelector ||
                function () {
                    return Array.from(document.querySelectorAll(t)).includes(
                        this
                    );
                }
            ).call(e, t);
        }
        function Ce(e) {
            return this.elements.container.querySelectorAll(e);
        }
        function Ae(e) {
            return this.elements.container.querySelector(e);
        }
        function Se() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : null,
                t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
            Z(e) &&
                (e.focus({ preventScroll: !0 }),
                t && we(e, this.config.classNames.tabFocus));
        }
        var Pe,
            Ee = {
                'audio/ogg': 'vorbis',
                'audio/wav': '1',
                'video/webm': 'vp8, vorbis',
                'video/mp4': 'avc1.42E01E, mp4a.40.2',
                'video/ogg': 'theora',
            },
            Ne = {
                audio: 'canPlayType' in document.createElement('audio'),
                video: 'canPlayType' in document.createElement('video'),
                check: function (e, t, n) {
                    var i = le.isIPhone && n && Ne.playsinline,
                        a = Ne[e] || 'html5' !== t;
                    return {
                        api: a,
                        ui:
                            a &&
                            Ne.rangeInput &&
                            ('video' !== e || !le.isIPhone || i),
                    };
                },
                pip: !(
                    le.isIPhone ||
                    (!$(me('video').webkitSetPresentationMode) &&
                        (!document.pictureInPictureEnabled ||
                            me('video').disablePictureInPicture))
                ),
                airplay: $(window.WebKitPlaybackTargetAvailabilityEvent),
                playsinline: 'playsInline' in document.createElement('video'),
                mime: function (e) {
                    if (re(e)) return !1;
                    var t = l(e.split('/'), 1)[0],
                        n = e;
                    if (!this.isHTML5 || t !== this.type) return !1;
                    Object.keys(Ee).includes(n) &&
                        (n += '; codecs="'.concat(Ee[e], '"'));
                    try {
                        return Boolean(
                            n && this.media.canPlayType(n).replace(/no/, '')
                        );
                    } catch (e) {
                        return !1;
                    }
                },
                textTracks: 'textTracks' in document.createElement('video'),
                rangeInput:
                    ((Pe = document.createElement('input')),
                    (Pe.type = 'range'),
                    'range' === Pe.type),
                touch: 'ontouchstart' in document.documentElement,
                transitions: !1 !== oe,
                reducedMotion:
                    'matchMedia' in window &&
                    window.matchMedia('(prefers-reduced-motion)').matches,
            },
            Me = (function () {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, 'passive', {
                        get: function () {
                            return (e = !0), null;
                        },
                    });
                    window.addEventListener('test', null, t),
                        window.removeEventListener('test', null, t);
                } catch (e) {}
                return e;
            })();
        function xe(e, t, n) {
            var i = this,
                a =
                    arguments.length > 3 &&
                    void 0 !== arguments[3] &&
                    arguments[3],
                r =
                    !(arguments.length > 4 && void 0 !== arguments[4]) ||
                    arguments[4],
                o =
                    arguments.length > 5 &&
                    void 0 !== arguments[5] &&
                    arguments[5];
            if (e && 'addEventListener' in e && !re(t) && $(n)) {
                var s = t.split(' '),
                    l = o;
                Me && (l = { passive: r, capture: o }),
                    s.forEach(function (t) {
                        i &&
                            i.eventListeners &&
                            a &&
                            i.eventListeners.push({
                                element: e,
                                type: t,
                                callback: n,
                                options: l,
                            }),
                            e[a ? 'addEventListener' : 'removeEventListener'](
                                t,
                                n,
                                l
                            );
                    });
            }
        }
        function Ie(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                n = arguments.length > 2 ? arguments[2] : void 0,
                i =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                a =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4];
            xe.call(this, e, t, n, !0, i, a);
        }
        function Le(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                n = arguments.length > 2 ? arguments[2] : void 0,
                i =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                a =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4];
            xe.call(this, e, t, n, !1, i, a);
        }
        function Oe(e) {
            var t = this,
                n =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                i = arguments.length > 2 ? arguments[2] : void 0,
                a =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3],
                r =
                    arguments.length > 4 &&
                    void 0 !== arguments[4] &&
                    arguments[4],
                o = function o() {
                    Le(e, n, o, a, r);
                    for (
                        var s = arguments.length, l = new Array(s), c = 0;
                        c < s;
                        c++
                    )
                        l[c] = arguments[c];
                    i.apply(t, l);
                };
            xe.call(this, e, n, o, !0, a, r);
        }
        function _e(e) {
            var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : '',
                n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2],
                i =
                    arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : {};
            if (Z(e) && !re(t)) {
                var a = new CustomEvent(t, {
                    bubbles: n,
                    detail: o(o({}, i), {}, { plyr: this }),
                });
                e.dispatchEvent(a);
            }
        }
        function je() {
            this &&
                this.eventListeners &&
                (this.eventListeners.forEach(function (e) {
                    var t = e.element,
                        n = e.type,
                        i = e.callback,
                        a = e.options;
                    t.removeEventListener(n, i, a);
                }),
                (this.eventListeners = []));
        }
        function De() {
            var e = this;
            return new Promise(function (t) {
                return e.ready
                    ? setTimeout(t, 0)
                    : Ie.call(e, e.elements.container, 'ready', t);
            }).then(function () {});
        }
        function qe(e) {
            ie(e) && e.then(null, function () {});
        }
        function He(e) {
            return (
                !!(J(e) || (Q(e) && e.includes(':'))) &&
                (J(e) ? e : e.split(':')).map(Number).every(Y)
            );
        }
        function Fe(e) {
            if (!J(e) || !e.every(Y)) return null;
            var t = l(e, 2),
                n = t[0],
                i = t[1],
                a = (function e(t, n) {
                    return 0 === n ? t : e(n, t % n);
                })(n, i);
            return [n / a, i / a];
        }
        function Re(e) {
            var t = function (e) {
                    return He(e) ? e.split(':').map(Number) : null;
                },
                n = t(e);
            if (
                (null === n && (n = t(this.config.ratio)),
                null === n &&
                    !re(this.embed) &&
                    J(this.embed.ratio) &&
                    (n = this.embed.ratio),
                null === n && this.isHTML5)
            ) {
                var i = this.media;
                n = Fe([i.videoWidth, i.videoHeight]);
            }
            return n;
        }
        function Ve(e) {
            if (!this.isVideo) return {};
            var t = this.elements.wrapper,
                n = Re.call(this, e),
                i = l(J(n) ? n : [0, 0], 2),
                a = (100 / i[0]) * i[1];
            if (
                ((t.style.paddingBottom = ''.concat(a, '%')),
                this.isVimeo && !this.config.vimeo.premium && this.supported.ui)
            ) {
                var r =
                        (100 / this.media.offsetWidth) *
                        parseInt(
                            window.getComputedStyle(this.media).paddingBottom,
                            10
                        ),
                    o = (r - a) / (r / 50);
                this.fullscreen.active
                    ? (t.style.paddingBottom = null)
                    : (this.media.style.transform = 'translateY(-'.concat(
                          o,
                          '%)'
                      ));
            } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
            return { padding: a, ratio: n };
        }
        var Be = {
            getSources: function () {
                var e = this;
                return this.isHTML5
                    ? Array.from(this.media.querySelectorAll('source')).filter(
                          function (t) {
                              var n = t.getAttribute('type');
                              return !!re(n) || Ne.mime.call(e, n);
                          }
                      )
                    : [];
            },
            getQualityOptions: function () {
                return this.config.quality.forced
                    ? this.config.quality.options
                    : Be.getSources
                          .call(this)
                          .map(function (e) {
                              return Number(e.getAttribute('size'));
                          })
                          .filter(Boolean);
            },
            setup: function () {
                if (this.isHTML5) {
                    var e = this;
                    (e.options.speed = e.config.speed.options),
                        re(this.config.ratio) || Ve.call(e),
                        Object.defineProperty(e.media, 'quality', {
                            get: function () {
                                var t = Be.getSources
                                    .call(e)
                                    .find(function (t) {
                                        return (
                                            t.getAttribute('src') === e.source
                                        );
                                    });
                                return t && Number(t.getAttribute('size'));
                            },
                            set: function (t) {
                                if (e.quality !== t) {
                                    if (
                                        e.config.quality.forced &&
                                        $(e.config.quality.onChange)
                                    )
                                        e.config.quality.onChange(t);
                                    else {
                                        var n = Be.getSources
                                            .call(e)
                                            .find(function (e) {
                                                return (
                                                    Number(
                                                        e.getAttribute('size')
                                                    ) === t
                                                );
                                            });
                                        if (!n) return;
                                        var i = e.media,
                                            a = i.currentTime,
                                            r = i.paused,
                                            o = i.preload,
                                            s = i.readyState,
                                            l = i.playbackRate;
                                        (e.media.src = n.getAttribute('src')),
                                            ('none' !== o || s) &&
                                                (e.once(
                                                    'loadedmetadata',
                                                    function () {
                                                        (e.speed = l),
                                                            (e.currentTime = a),
                                                            r || qe(e.play());
                                                    }
                                                ),
                                                e.media.load());
                                    }
                                    _e.call(e, e.media, 'qualitychange', !1, {
                                        quality: t,
                                    });
                                }
                            },
                        });
                }
            },
            cancelRequests: function () {
                this.isHTML5 &&
                    (fe(Be.getSources.call(this)),
                    this.media.setAttribute('src', this.config.blankVideo),
                    this.media.load(),
                    this.debug.log('Cancelled network requests'));
            },
        };
        function Ue(e) {
            return J(e)
                ? e.filter(function (t, n) {
                      return e.indexOf(t) === n;
                  })
                : e;
        }
        function We(e) {
            for (
                var t = arguments.length,
                    n = new Array(t > 1 ? t - 1 : 0),
                    i = 1;
                i < t;
                i++
            )
                n[i - 1] = arguments[i];
            return re(e)
                ? e
                : e.toString().replace(/{(\d+)}/g, function (e, t) {
                      return n[t].toString();
                  });
        }
        var ze = function () {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : '',
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : '',
                    n =
                        arguments.length > 2 && void 0 !== arguments[2]
                            ? arguments[2]
                            : '';
                return e.replace(
                    new RegExp(
                        t
                            .toString()
                            .replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'),
                        'g'
                    ),
                    n.toString()
                );
            },
            Ke = function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : '';
                return e.toString().replace(/\w\S*/g, function (e) {
                    return (
                        e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
                    );
                });
            };
        function Ye() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : '',
                t = e.toString();
            return (
                (t = ze(t, '-', ' ')),
                (t = ze(t, '_', ' ')),
                (t = Ke(t)),
                ze(t, ' ', '')
            );
        }
        function Qe(e) {
            var t = document.createElement('div');
            return t.appendChild(e), t.innerHTML;
        }
        var Xe = {
                pip: 'PIP',
                airplay: 'AirPlay',
                html5: 'HTML5',
                vimeo: 'Vimeo',
                youtube: 'YouTube',
            },
            $e = function () {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : '',
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                if (re(e) || re(t)) return '';
                var n = ce(t.i18n, e);
                if (re(n)) return Object.keys(Xe).includes(e) ? Xe[e] : '';
                var i = { '{seektime}': t.seekTime, '{title}': t.title };
                return (
                    Object.entries(i).forEach(function (e) {
                        var t = l(e, 2),
                            i = t[0],
                            a = t[1];
                        n = ze(n, i, a);
                    }),
                    n
                );
            },
            Je = (function () {
                function e(n) {
                    var i = this;
                    t(this, e),
                        a(this, 'get', function (t) {
                            if (!e.supported || !i.enabled) return null;
                            var n = window.localStorage.getItem(i.key);
                            if (re(n)) return null;
                            var a = JSON.parse(n);
                            return Q(t) && t.length ? a[t] : a;
                        }),
                        a(this, 'set', function (t) {
                            if (e.supported && i.enabled && K(t)) {
                                var n = i.get();
                                re(n) && (n = {}),
                                    ue(n, t),
                                    window.localStorage.setItem(
                                        i.key,
                                        JSON.stringify(n)
                                    );
                            }
                        }),
                        (this.enabled = n.config.storage.enabled),
                        (this.key = n.config.storage.key);
                }
                return (
                    i(e, null, [
                        {
                            key: 'supported',
                            get: function () {
                                try {
                                    if (!('localStorage' in window)) return !1;
                                    var e = '___test';
                                    return (
                                        window.localStorage.setItem(e, e),
                                        window.localStorage.removeItem(e),
                                        !0
                                    );
                                } catch (e) {
                                    return !1;
                                }
                            },
                        },
                    ]),
                    e
                );
            })();
        function Ge(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 'text';
            return new Promise(function (n, i) {
                try {
                    var a = new XMLHttpRequest();
                    if (!('withCredentials' in a)) return;
                    a.addEventListener('load', function () {
                        if ('text' === t)
                            try {
                                n(JSON.parse(a.responseText));
                            } catch (e) {
                                n(a.responseText);
                            }
                        else n(a.response);
                    }),
                        a.addEventListener('error', function () {
                            throw new Error(a.status);
                        }),
                        a.open('GET', e, !0),
                        (a.responseType = t),
                        a.send();
                } catch (e) {
                    i(e);
                }
            });
        }
        function Ze(e, t) {
            if (Q(e)) {
                var n = 'cache',
                    i = Q(t),
                    a = function () {
                        return null !== document.getElementById(t);
                    },
                    r = function (e, t) {
                        (e.innerHTML = t),
                            (i && a()) ||
                                document.body.insertAdjacentElement(
                                    'afterbegin',
                                    e
                                );
                    };
                if (!i || !a()) {
                    var o = Je.supported,
                        s = document.createElement('div');
                    if (
                        (s.setAttribute('hidden', ''),
                        i && s.setAttribute('id', t),
                        o)
                    ) {
                        var l = window.localStorage.getItem(
                            ''.concat(n, '-').concat(t)
                        );
                        if (null !== l) {
                            var c = JSON.parse(l);
                            r(s, c.content);
                        }
                    }
                    Ge(e)
                        .then(function (e) {
                            re(e) ||
                                (o &&
                                    window.localStorage.setItem(
                                        ''.concat(n, '-').concat(t),
                                        JSON.stringify({ content: e })
                                    ),
                                r(s, e));
                        })
                        .catch(function () {});
                }
            }
        }
        var et = function (e) {
                return Math.trunc((e / 60 / 60) % 60, 10);
            },
            tt = function (e) {
                return Math.trunc((e / 60) % 60, 10);
            },
            nt = function (e) {
                return Math.trunc(e % 60, 10);
            };
        function it() {
            var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                n =
                    arguments.length > 2 &&
                    void 0 !== arguments[2] &&
                    arguments[2];
            if (!Y(e)) return it(void 0, t, n);
            var i = function (e) {
                    return '0'.concat(e).slice(-2);
                },
                a = et(e),
                r = tt(e),
                o = nt(e);
            return (
                (a = t || a > 0 ? ''.concat(a, ':') : ''),
                ''
                    .concat(n && e > 0 ? '-' : '')
                    .concat(a)
                    .concat(i(r), ':')
                    .concat(i(o))
            );
        }
        var at = {
            getIconUrl: function () {
                var e =
                    new URL(this.config.iconUrl, window.location).host !==
                        window.location.host ||
                    (le.isIE && !window.svg4everybody);
                return { url: this.config.iconUrl, cors: e };
            },
            findElements: function () {
                try {
                    return (
                        (this.elements.controls = Ae.call(
                            this,
                            this.config.selectors.controls.wrapper
                        )),
                        (this.elements.buttons = {
                            play: Ce.call(
                                this,
                                this.config.selectors.buttons.play
                            ),
                            pause: Ae.call(
                                this,
                                this.config.selectors.buttons.pause
                            ),
                            restart: Ae.call(
                                this,
                                this.config.selectors.buttons.restart
                            ),
                            rewind: Ae.call(
                                this,
                                this.config.selectors.buttons.rewind
                            ),
                            fastForward: Ae.call(
                                this,
                                this.config.selectors.buttons.fastForward
                            ),
                            mute: Ae.call(
                                this,
                                this.config.selectors.buttons.mute
                            ),
                            pip: Ae.call(
                                this,
                                this.config.selectors.buttons.pip
                            ),
                            airplay: Ae.call(
                                this,
                                this.config.selectors.buttons.airplay
                            ),
                            settings: Ae.call(
                                this,
                                this.config.selectors.buttons.settings
                            ),
                            captions: Ae.call(
                                this,
                                this.config.selectors.buttons.captions
                            ),
                            fullscreen: Ae.call(
                                this,
                                this.config.selectors.buttons.fullscreen
                            ),
                        }),
                        (this.elements.progress = Ae.call(
                            this,
                            this.config.selectors.progress
                        )),
                        (this.elements.inputs = {
                            seek: Ae.call(
                                this,
                                this.config.selectors.inputs.seek
                            ),
                            volume: Ae.call(
                                this,
                                this.config.selectors.inputs.volume
                            ),
                        }),
                        (this.elements.display = {
                            buffer: Ae.call(
                                this,
                                this.config.selectors.display.buffer
                            ),
                            currentTime: Ae.call(
                                this,
                                this.config.selectors.display.currentTime
                            ),
                            duration: Ae.call(
                                this,
                                this.config.selectors.display.duration
                            ),
                        }),
                        Z(this.elements.progress) &&
                            (this.elements.display.seekTooltip =
                                this.elements.progress.querySelector(
                                    '.'.concat(this.config.classNames.tooltip)
                                )),
                        !0
                    );
                } catch (e) {
                    return (
                        this.debug.warn(
                            'It looks like there is a problem with your custom controls HTML',
                            e
                        ),
                        this.toggleNativeControls(!0),
                        !1
                    );
                }
            },
            createIcon: function (e, t) {
                var n = 'http://www.w3.org/2000/svg',
                    i = at.getIconUrl.call(this),
                    a = ''
                        .concat(i.cors ? '' : i.url, '#')
                        .concat(this.config.iconPrefix),
                    r = document.createElementNS(n, 'svg');
                he(r, ue(t, { 'aria-hidden': 'true', focusable: 'false' }));
                var o = document.createElementNS(n, 'use'),
                    s = ''.concat(a, '-').concat(e);
                return (
                    'href' in o &&
                        o.setAttributeNS(
                            'http://www.w3.org/1999/xlink',
                            'href',
                            s
                        ),
                    o.setAttributeNS(
                        'http://www.w3.org/1999/xlink',
                        'xlink:href',
                        s
                    ),
                    r.appendChild(o),
                    r
                );
            },
            createLabel: function (e) {
                var t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                    n = $e(e, this.config),
                    i = o(
                        o({}, t),
                        {},
                        {
                            class: [t.class, this.config.classNames.hidden]
                                .filter(Boolean)
                                .join(' '),
                        }
                    );
                return me('span', i, n);
            },
            createBadge: function (e) {
                if (re(e)) return null;
                var t = me('span', {
                    class: this.config.classNames.menu.value,
                });
                return (
                    t.appendChild(
                        me(
                            'span',
                            { class: this.config.classNames.menu.badge },
                            e
                        )
                    ),
                    t
                );
            },
            createButton: function (e, t) {
                var n = this,
                    i = ue({}, t),
                    a = (function () {
                        var e = (
                            arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : ''
                        ).toString();
                        return (e = Ye(e)).charAt(0).toLowerCase() + e.slice(1);
                    })(e),
                    r = {
                        element: 'button',
                        toggle: !1,
                        label: null,
                        icon: null,
                        labelPressed: null,
                        iconPressed: null,
                    };
                switch (
                    (['element', 'icon', 'label'].forEach(function (e) {
                        Object.keys(i).includes(e) &&
                            ((r[e] = i[e]), delete i[e]);
                    }),
                    'button' !== r.element ||
                        Object.keys(i).includes('type') ||
                        (i.type = 'button'),
                    Object.keys(i).includes('class')
                        ? i.class.split(' ').some(function (e) {
                              return e === n.config.classNames.control;
                          }) ||
                          ue(i, {
                              class: ''
                                  .concat(i.class, ' ')
                                  .concat(this.config.classNames.control),
                          })
                        : (i.class = this.config.classNames.control),
                    e)
                ) {
                    case 'play':
                        (r.toggle = !0),
                            (r.label = 'play'),
                            (r.labelPressed = 'pause'),
                            (r.icon = 'play'),
                            (r.iconPressed = 'pause');
                        break;
                    case 'mute':
                        (r.toggle = !0),
                            (r.label = 'mute'),
                            (r.labelPressed = 'unmute'),
                            (r.icon = 'volume'),
                            (r.iconPressed = 'muted');
                        break;
                    case 'captions':
                        (r.toggle = !0),
                            (r.label = 'enableCaptions'),
                            (r.labelPressed = 'disableCaptions'),
                            (r.icon = 'captions-off'),
                            (r.iconPressed = 'captions-on');
                        break;
                    case 'fullscreen':
                        (r.toggle = !0),
                            (r.label = 'enterFullscreen'),
                            (r.labelPressed = 'exitFullscreen'),
                            (r.icon = 'enter-fullscreen'),
                            (r.iconPressed = 'exit-fullscreen');
                        break;
                    case 'play-large':
                        (i.class += ' '.concat(
                            this.config.classNames.control,
                            '--overlaid'
                        )),
                            (a = 'play'),
                            (r.label = 'play'),
                            (r.icon = 'play');
                        break;
                    default:
                        re(r.label) && (r.label = a),
                            re(r.icon) && (r.icon = e);
                }
                var o = me(r.element);
                return (
                    r.toggle
                        ? (o.appendChild(
                              at.createIcon.call(this, r.iconPressed, {
                                  class: 'icon--pressed',
                              })
                          ),
                          o.appendChild(
                              at.createIcon.call(this, r.icon, {
                                  class: 'icon--not-pressed',
                              })
                          ),
                          o.appendChild(
                              at.createLabel.call(this, r.labelPressed, {
                                  class: 'label--pressed',
                              })
                          ),
                          o.appendChild(
                              at.createLabel.call(this, r.label, {
                                  class: 'label--not-pressed',
                              })
                          ))
                        : (o.appendChild(at.createIcon.call(this, r.icon)),
                          o.appendChild(at.createLabel.call(this, r.label))),
                    ue(i, be(this.config.selectors.buttons[a], i)),
                    he(o, i),
                    'play' === a
                        ? (J(this.elements.buttons[a]) ||
                              (this.elements.buttons[a] = []),
                          this.elements.buttons[a].push(o))
                        : (this.elements.buttons[a] = o),
                    o
                );
            },
            createRange: function (e, t) {
                var n = me(
                    'input',
                    ue(
                        be(this.config.selectors.inputs[e]),
                        {
                            type: 'range',
                            min: 0,
                            max: 100,
                            step: 0.01,
                            value: 0,
                            autocomplete: 'off',
                            role: 'slider',
                            'aria-label': $e(e, this.config),
                            'aria-valuemin': 0,
                            'aria-valuemax': 100,
                            'aria-valuenow': 0,
                        },
                        t
                    )
                );
                return (
                    (this.elements.inputs[e] = n),
                    at.updateRangeFill.call(this, n),
                    j.setup(n),
                    n
                );
            },
            createProgress: function (e, t) {
                var n = me(
                    'progress',
                    ue(
                        be(this.config.selectors.display[e]),
                        {
                            min: 0,
                            max: 100,
                            value: 0,
                            role: 'progressbar',
                            'aria-hidden': !0,
                        },
                        t
                    )
                );
                if ('volume' !== e) {
                    n.appendChild(me('span', null, '0'));
                    var i = { played: 'played', buffer: 'buffered' }[e],
                        a = i ? $e(i, this.config) : '';
                    n.innerText = '% '.concat(a.toLowerCase());
                }
                return (this.elements.display[e] = n), n;
            },
            createTime: function (e, t) {
                var n = be(this.config.selectors.display[e], t),
                    i = me(
                        'div',
                        ue(n, {
                            class: ''
                                .concat(n.class ? n.class : '', ' ')
                                .concat(
                                    this.config.classNames.display.time,
                                    ' '
                                )
                                .trim(),
                            'aria-label': $e(e, this.config),
                        }),
                        '00:00'
                    );
                return (this.elements.display[e] = i), i;
            },
            bindMenuItemShortcuts: function (e, t) {
                var n = this;
                Ie.call(
                    this,
                    e,
                    'keydown keyup',
                    function (i) {
                        if (
                            [32, 38, 39, 40].includes(i.which) &&
                            (i.preventDefault(),
                            i.stopPropagation(),
                            'keydown' !== i.type)
                        ) {
                            var a,
                                r = Te(e, '[role="menuitemradio"]');
                            if (!r && [32, 39].includes(i.which))
                                at.showMenuPanel.call(n, t, !0);
                            else
                                32 !== i.which &&
                                    (40 === i.which || (r && 39 === i.which)
                                        ? ((a = e.nextElementSibling),
                                          Z(a) ||
                                              (a =
                                                  e.parentNode
                                                      .firstElementChild))
                                        : ((a = e.previousElementSibling),
                                          Z(a) ||
                                              (a =
                                                  e.parentNode
                                                      .lastElementChild)),
                                    Se.call(n, a, !0));
                        }
                    },
                    !1
                ),
                    Ie.call(this, e, 'keyup', function (e) {
                        13 === e.which &&
                            at.focusFirstMenuItem.call(n, null, !0);
                    });
            },
            createMenuItem: function (e) {
                var t = this,
                    n = e.value,
                    i = e.list,
                    a = e.type,
                    r = e.title,
                    o = e.badge,
                    s = void 0 === o ? null : o,
                    l = e.checked,
                    c = void 0 !== l && l,
                    u = be(this.config.selectors.inputs[a]),
                    d = me(
                        'button',
                        ue(u, {
                            type: 'button',
                            role: 'menuitemradio',
                            class: ''
                                .concat(this.config.classNames.control, ' ')
                                .concat(u.class ? u.class : '')
                                .trim(),
                            'aria-checked': c,
                            value: n,
                        })
                    ),
                    h = me('span');
                (h.innerHTML = r),
                    Z(s) && h.appendChild(s),
                    d.appendChild(h),
                    Object.defineProperty(d, 'checked', {
                        enumerable: !0,
                        get: function () {
                            return 'true' === d.getAttribute('aria-checked');
                        },
                        set: function (e) {
                            e &&
                                Array.from(d.parentNode.children)
                                    .filter(function (e) {
                                        return Te(e, '[role="menuitemradio"]');
                                    })
                                    .forEach(function (e) {
                                        return e.setAttribute(
                                            'aria-checked',
                                            'false'
                                        );
                                    }),
                                d.setAttribute(
                                    'aria-checked',
                                    e ? 'true' : 'false'
                                );
                        },
                    }),
                    this.listeners.bind(
                        d,
                        'click keyup',
                        function (e) {
                            if (!te(e) || 32 === e.which) {
                                switch (
                                    (e.preventDefault(),
                                    e.stopPropagation(),
                                    (d.checked = !0),
                                    a)
                                ) {
                                    case 'language':
                                        t.currentTrack = Number(n);
                                        break;
                                    case 'quality':
                                        t.quality = n;
                                        break;
                                    case 'speed':
                                        t.speed = parseFloat(n);
                                }
                                at.showMenuPanel.call(t, 'home', te(e));
                            }
                        },
                        a,
                        !1
                    ),
                    at.bindMenuItemShortcuts.call(this, d, a),
                    i.appendChild(d);
            },
            formatTime: function () {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 0,
                    t =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1];
                if (!Y(e)) return e;
                var n = et(this.duration) > 0;
                return it(e, n, t);
            },
            updateTimeDisplay: function () {
                var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : null,
                    t =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                    n =
                        arguments.length > 2 &&
                        void 0 !== arguments[2] &&
                        arguments[2];
                Z(e) && Y(t) && (e.innerText = at.formatTime(t, n));
            },
            updateVolume: function () {
                this.supported.ui &&
                    (Z(this.elements.inputs.volume) &&
                        at.setRange.call(
                            this,
                            this.elements.inputs.volume,
                            this.muted ? 0 : this.volume
                        ),
                    Z(this.elements.buttons.mute) &&
                        (this.elements.buttons.mute.pressed =
                            this.muted || 0 === this.volume));
            },
            setRange: function (e) {
                var t =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
                Z(e) && ((e.value = t), at.updateRangeFill.call(this, e));
            },
            updateProgress: function (e) {
                var t = this;
                if (this.supported.ui && ee(e)) {
                    var n,
                        i,
                        a = 0;
                    if (e)
                        switch (e.type) {
                            case 'timeupdate':
                            case 'seeking':
                            case 'seeked':
                                (n = this.currentTime),
                                    (i = this.duration),
                                    (a =
                                        0 === n ||
                                        0 === i ||
                                        Number.isNaN(n) ||
                                        Number.isNaN(i)
                                            ? 0
                                            : ((n / i) * 100).toFixed(2)),
                                    'timeupdate' === e.type &&
                                        at.setRange.call(
                                            this,
                                            this.elements.inputs.seek,
                                            a
                                        );
                                break;
                            case 'playing':
                            case 'progress':
                                !(function (e, n) {
                                    var i = Y(n) ? n : 0,
                                        a = Z(e)
                                            ? e
                                            : t.elements.display.buffer;
                                    if (Z(a)) {
                                        a.value = i;
                                        var r =
                                            a.getElementsByTagName('span')[0];
                                        Z(r) && (r.childNodes[0].nodeValue = i);
                                    }
                                })(
                                    this.elements.display.buffer,
                                    100 * this.buffered
                                );
                        }
                }
            },
            updateRangeFill: function (e) {
                var t = ee(e) ? e.target : e;
                if (Z(t) && 'range' === t.getAttribute('type')) {
                    if (Te(t, this.config.selectors.inputs.seek)) {
                        t.setAttribute('aria-valuenow', this.currentTime);
                        var n = at.formatTime(this.currentTime),
                            i = at.formatTime(this.duration),
                            a = $e('seekLabel', this.config);
                        t.setAttribute(
                            'aria-valuetext',
                            a
                                .replace('{currentTime}', n)
                                .replace('{duration}', i)
                        );
                    } else if (Te(t, this.config.selectors.inputs.volume)) {
                        var r = 100 * t.value;
                        t.setAttribute('aria-valuenow', r),
                            t.setAttribute(
                                'aria-valuetext',
                                ''.concat(r.toFixed(1), '%')
                            );
                    } else t.setAttribute('aria-valuenow', t.value);
                    le.isWebkit &&
                        t.style.setProperty(
                            '--value',
                            ''.concat((t.value / t.max) * 100, '%')
                        );
                }
            },
            updateSeekTooltip: function (e) {
                var t = this;
                if (
                    this.config.tooltips.seek &&
                    Z(this.elements.inputs.seek) &&
                    Z(this.elements.display.seekTooltip) &&
                    0 !== this.duration
                ) {
                    var n = ''.concat(
                            this.config.classNames.tooltip,
                            '--visible'
                        ),
                        i = function (e) {
                            return we(t.elements.display.seekTooltip, n, e);
                        };
                    if (this.touch) i(!1);
                    else {
                        var a = 0,
                            r = this.elements.progress.getBoundingClientRect();
                        if (ee(e)) a = (100 / r.width) * (e.pageX - r.left);
                        else {
                            if (!ke(this.elements.display.seekTooltip, n))
                                return;
                            a = parseFloat(
                                this.elements.display.seekTooltip.style.left,
                                10
                            );
                        }
                        a < 0 ? (a = 0) : a > 100 && (a = 100),
                            at.updateTimeDisplay.call(
                                this,
                                this.elements.display.seekTooltip,
                                (this.duration / 100) * a
                            ),
                            (this.elements.display.seekTooltip.style.left =
                                ''.concat(a, '%')),
                            ee(e) &&
                                ['mouseenter', 'mouseleave'].includes(e.type) &&
                                i('mouseenter' === e.type);
                    }
                }
            },
            timeUpdate: function (e) {
                var t =
                    !Z(this.elements.display.duration) &&
                    this.config.invertTime;
                at.updateTimeDisplay.call(
                    this,
                    this.elements.display.currentTime,
                    t ? this.duration - this.currentTime : this.currentTime,
                    t
                ),
                    (e && 'timeupdate' === e.type && this.media.seeking) ||
                        at.updateProgress.call(this, e);
            },
            durationUpdate: function () {
                if (
                    this.supported.ui &&
                    (this.config.invertTime || !this.currentTime)
                ) {
                    if (this.duration >= Math.pow(2, 32))
                        return (
                            ve(this.elements.display.currentTime, !0),
                            void ve(this.elements.progress, !0)
                        );
                    Z(this.elements.inputs.seek) &&
                        this.elements.inputs.seek.setAttribute(
                            'aria-valuemax',
                            this.duration
                        );
                    var e = Z(this.elements.display.duration);
                    !e &&
                        this.config.displayDuration &&
                        this.paused &&
                        at.updateTimeDisplay.call(
                            this,
                            this.elements.display.currentTime,
                            this.duration
                        ),
                        e &&
                            at.updateTimeDisplay.call(
                                this,
                                this.elements.display.duration,
                                this.duration
                            ),
                        at.updateSeekTooltip.call(this);
                }
            },
            toggleMenuButton: function (e, t) {
                ve(this.elements.settings.buttons[e], !t);
            },
            updateSetting: function (e, t, n) {
                var i = this.elements.settings.panels[e],
                    a = null,
                    r = t;
                if ('captions' === e) a = this.currentTrack;
                else {
                    if (
                        ((a = re(n) ? this[e] : n),
                        re(a) && (a = this.config[e].default),
                        !re(this.options[e]) && !this.options[e].includes(a))
                    )
                        return void this.debug.warn(
                            "Unsupported value of '"
                                .concat(a, "' for ")
                                .concat(e)
                        );
                    if (!this.config[e].options.includes(a))
                        return void this.debug.warn(
                            "Disabled value of '".concat(a, "' for ").concat(e)
                        );
                }
                if (
                    (Z(r) || (r = i && i.querySelector('[role="menu"]')), Z(r))
                ) {
                    this.elements.settings.buttons[e].querySelector(
                        '.'.concat(this.config.classNames.menu.value)
                    ).innerHTML = at.getLabel.call(this, e, a);
                    var o = r && r.querySelector('[value="'.concat(a, '"]'));
                    Z(o) && (o.checked = !0);
                }
            },
            getLabel: function (e, t) {
                switch (e) {
                    case 'speed':
                        return 1 === t
                            ? $e('normal', this.config)
                            : ''.concat(t, '&times;');
                    case 'quality':
                        if (Y(t)) {
                            var n = $e('qualityLabel.'.concat(t), this.config);
                            return n.length ? n : ''.concat(t, 'p');
                        }
                        return Ke(t);
                    case 'captions':
                        return st.getLabel.call(this);
                    default:
                        return null;
                }
            },
            setQualityMenu: function (e) {
                var t = this;
                if (Z(this.elements.settings.panels.quality)) {
                    var n = 'quality',
                        i =
                            this.elements.settings.panels.quality.querySelector(
                                '[role="menu"]'
                            );
                    J(e) &&
                        (this.options.quality = Ue(e).filter(function (e) {
                            return t.config.quality.options.includes(e);
                        }));
                    var a =
                        !re(this.options.quality) &&
                        this.options.quality.length > 1;
                    if (
                        (at.toggleMenuButton.call(this, n, a),
                        ge(i),
                        at.checkMenu.call(this),
                        a)
                    ) {
                        var r = function (e) {
                            var n = $e('qualityBadge.'.concat(e), t.config);
                            return n.length ? at.createBadge.call(t, n) : null;
                        };
                        this.options.quality
                            .sort(function (e, n) {
                                var i = t.config.quality.options;
                                return i.indexOf(e) > i.indexOf(n) ? 1 : -1;
                            })
                            .forEach(function (e) {
                                at.createMenuItem.call(t, {
                                    value: e,
                                    list: i,
                                    type: n,
                                    title: at.getLabel.call(t, 'quality', e),
                                    badge: r(e),
                                });
                            }),
                            at.updateSetting.call(this, n, i);
                    }
                }
            },
            setCaptionsMenu: function () {
                var e = this;
                if (Z(this.elements.settings.panels.captions)) {
                    var t = 'captions',
                        n =
                            this.elements.settings.panels.captions.querySelector(
                                '[role="menu"]'
                            ),
                        i = st.getTracks.call(this),
                        a = Boolean(i.length);
                    if (
                        (at.toggleMenuButton.call(this, t, a),
                        ge(n),
                        at.checkMenu.call(this),
                        a)
                    ) {
                        var r = i.map(function (t, i) {
                            return {
                                value: i,
                                checked:
                                    e.captions.toggled && e.currentTrack === i,
                                title: st.getLabel.call(e, t),
                                badge:
                                    t.language &&
                                    at.createBadge.call(
                                        e,
                                        t.language.toUpperCase()
                                    ),
                                list: n,
                                type: 'language',
                            };
                        });
                        r.unshift({
                            value: -1,
                            checked: !this.captions.toggled,
                            title: $e('disabled', this.config),
                            list: n,
                            type: 'language',
                        }),
                            r.forEach(at.createMenuItem.bind(this)),
                            at.updateSetting.call(this, t, n);
                    }
                }
            },
            setSpeedMenu: function () {
                var e = this;
                if (Z(this.elements.settings.panels.speed)) {
                    var t = 'speed',
                        n =
                            this.elements.settings.panels.speed.querySelector(
                                '[role="menu"]'
                            );
                    this.options.speed = this.options.speed.filter(function (
                        t
                    ) {
                        return t >= e.minimumSpeed && t <= e.maximumSpeed;
                    });
                    var i =
                        !re(this.options.speed) &&
                        this.options.speed.length > 1;
                    at.toggleMenuButton.call(this, t, i),
                        ge(n),
                        at.checkMenu.call(this),
                        i &&
                            (this.options.speed.forEach(function (i) {
                                at.createMenuItem.call(e, {
                                    value: i,
                                    list: n,
                                    type: t,
                                    title: at.getLabel.call(e, 'speed', i),
                                });
                            }),
                            at.updateSetting.call(this, t, n));
                }
            },
            checkMenu: function () {
                var e = this.elements.settings.buttons,
                    t =
                        !re(e) &&
                        Object.values(e).some(function (e) {
                            return !e.hidden;
                        });
                ve(this.elements.settings.menu, !t);
            },
            focusFirstMenuItem: function (e) {
                var t =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1];
                if (!this.elements.settings.popup.hidden) {
                    var n = e;
                    Z(n) ||
                        (n = Object.values(this.elements.settings.panels).find(
                            function (e) {
                                return !e.hidden;
                            }
                        ));
                    var i = n.querySelector('[role^="menuitem"]');
                    Se.call(this, i, t);
                }
            },
            toggleMenu: function (e) {
                var t = this.elements.settings.popup,
                    n = this.elements.buttons.settings;
                if (Z(t) && Z(n)) {
                    var i = t.hidden,
                        a = i;
                    if (X(e)) a = e;
                    else if (te(e) && 27 === e.which) a = !1;
                    else if (ee(e)) {
                        var r = $(e.composedPath)
                                ? e.composedPath()[0]
                                : e.target,
                            o = t.contains(r);
                        if (o || (!o && e.target !== n && a)) return;
                    }
                    n.setAttribute('aria-expanded', a),
                        ve(t, !a),
                        we(
                            this.elements.container,
                            this.config.classNames.menu.open,
                            a
                        ),
                        a && te(e)
                            ? at.focusFirstMenuItem.call(this, null, !0)
                            : a || i || Se.call(this, n, te(e));
                }
            },
            getMenuSize: function (e) {
                var t = e.cloneNode(!0);
                (t.style.position = 'absolute'),
                    (t.style.opacity = 0),
                    t.removeAttribute('hidden'),
                    e.parentNode.appendChild(t);
                var n = t.scrollWidth,
                    i = t.scrollHeight;
                return fe(t), { width: n, height: i };
            },
            showMenuPanel: function () {
                var e = this,
                    t =
                        arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : '',
                    n =
                        arguments.length > 1 &&
                        void 0 !== arguments[1] &&
                        arguments[1],
                    i = this.elements.container.querySelector(
                        '#plyr-settings-'.concat(this.id, '-').concat(t)
                    );
                if (Z(i)) {
                    var a = i.parentNode,
                        r = Array.from(a.children).find(function (e) {
                            return !e.hidden;
                        });
                    if (Ne.transitions && !Ne.reducedMotion) {
                        (a.style.width = ''.concat(r.scrollWidth, 'px')),
                            (a.style.height = ''.concat(r.scrollHeight, 'px'));
                        var o = at.getMenuSize.call(this, i),
                            s = function t(n) {
                                n.target === a &&
                                    ['width', 'height'].includes(
                                        n.propertyName
                                    ) &&
                                    ((a.style.width = ''),
                                    (a.style.height = ''),
                                    Le.call(e, a, oe, t));
                            };
                        Ie.call(this, a, oe, s),
                            (a.style.width = ''.concat(o.width, 'px')),
                            (a.style.height = ''.concat(o.height, 'px'));
                    }
                    ve(r, !0),
                        ve(i, !1),
                        at.focusFirstMenuItem.call(this, i, n);
                }
            },
            setDownloadUrl: function () {
                var e = this.elements.buttons.download;
                Z(e) && e.setAttribute('href', this.download);
            },
            create: function (e) {
                var t = this,
                    n = at.bindMenuItemShortcuts,
                    i = at.createButton,
                    a = at.createProgress,
                    r = at.createRange,
                    o = at.createTime,
                    s = at.setQualityMenu,
                    l = at.setSpeedMenu,
                    c = at.showMenuPanel;
                (this.elements.controls = null),
                    J(this.config.controls) &&
                        this.config.controls.includes('play-large') &&
                        this.elements.container.appendChild(
                            i.call(this, 'play-large')
                        );
                var u = me('div', be(this.config.selectors.controls.wrapper));
                this.elements.controls = u;
                var d = { class: 'plyr__controls__item' };
                return (
                    Ue(
                        J(this.config.controls) ? this.config.controls : []
                    ).forEach(function (s) {
                        if (
                            ('restart' === s &&
                                u.appendChild(i.call(t, 'restart', d)),
                            'rewind' === s &&
                                u.appendChild(i.call(t, 'rewind', d)),
                            'play' === s && u.appendChild(i.call(t, 'play', d)),
                            'fast-forward' === s &&
                                u.appendChild(i.call(t, 'fast-forward', d)),
                            'progress' === s)
                        ) {
                            var l = me('div', {
                                    class: ''.concat(
                                        d.class,
                                        ' plyr__progress__container'
                                    ),
                                }),
                                h = me('div', be(t.config.selectors.progress));
                            if (
                                (h.appendChild(
                                    r.call(t, 'seek', {
                                        id: 'plyr-seek-'.concat(e.id),
                                    })
                                ),
                                h.appendChild(a.call(t, 'buffer')),
                                t.config.tooltips.seek)
                            ) {
                                var m = me(
                                    'span',
                                    { class: t.config.classNames.tooltip },
                                    '00:00'
                                );
                                h.appendChild(m),
                                    (t.elements.display.seekTooltip = m);
                            }
                            (t.elements.progress = h),
                                l.appendChild(t.elements.progress),
                                u.appendChild(l);
                        }
                        if (
                            ('current-time' === s &&
                                u.appendChild(o.call(t, 'currentTime', d)),
                            'duration' === s &&
                                u.appendChild(o.call(t, 'duration', d)),
                            'mute' === s || 'volume' === s)
                        ) {
                            var p = t.elements.volume;
                            if (
                                ((Z(p) && u.contains(p)) ||
                                    ((p = me(
                                        'div',
                                        ue({}, d, {
                                            class: ''
                                                .concat(
                                                    d.class,
                                                    ' plyr__volume'
                                                )
                                                .trim(),
                                        })
                                    )),
                                    (t.elements.volume = p),
                                    u.appendChild(p)),
                                'mute' === s &&
                                    p.appendChild(i.call(t, 'mute')),
                                'volume' === s && !le.isIos)
                            ) {
                                var f = {
                                    max: 1,
                                    step: 0.05,
                                    value: t.config.volume,
                                };
                                p.appendChild(
                                    r.call(
                                        t,
                                        'volume',
                                        ue(f, {
                                            id: 'plyr-volume-'.concat(e.id),
                                        })
                                    )
                                );
                            }
                        }
                        if (
                            ('captions' === s &&
                                u.appendChild(i.call(t, 'captions', d)),
                            'settings' === s && !re(t.config.settings))
                        ) {
                            var g = me(
                                'div',
                                ue({}, d, {
                                    class: ''
                                        .concat(d.class, ' plyr__menu')
                                        .trim(),
                                    hidden: '',
                                })
                            );
                            g.appendChild(
                                i.call(t, 'settings', {
                                    'aria-haspopup': !0,
                                    'aria-controls': 'plyr-settings-'.concat(
                                        e.id
                                    ),
                                    'aria-expanded': !1,
                                })
                            );
                            var y = me('div', {
                                    class: 'plyr__menu__container',
                                    id: 'plyr-settings-'.concat(e.id),
                                    hidden: '',
                                }),
                                b = me('div'),
                                v = me('div', {
                                    id: 'plyr-settings-'.concat(e.id, '-home'),
                                }),
                                w = me('div', { role: 'menu' });
                            v.appendChild(w),
                                b.appendChild(v),
                                (t.elements.settings.panels.home = v),
                                t.config.settings.forEach(function (i) {
                                    var a = me(
                                        'button',
                                        ue(
                                            be(
                                                t.config.selectors.buttons
                                                    .settings
                                            ),
                                            {
                                                type: 'button',
                                                class: ''
                                                    .concat(
                                                        t.config.classNames
                                                            .control,
                                                        ' '
                                                    )
                                                    .concat(
                                                        t.config.classNames
                                                            .control,
                                                        '--forward'
                                                    ),
                                                role: 'menuitem',
                                                'aria-haspopup': !0,
                                                hidden: '',
                                            }
                                        )
                                    );
                                    n.call(t, a, i),
                                        Ie.call(t, a, 'click', function () {
                                            c.call(t, i, !1);
                                        });
                                    var r = me('span', null, $e(i, t.config)),
                                        o = me('span', {
                                            class: t.config.classNames.menu
                                                .value,
                                        });
                                    (o.innerHTML = e[i]),
                                        r.appendChild(o),
                                        a.appendChild(r),
                                        w.appendChild(a);
                                    var s = me('div', {
                                            id: 'plyr-settings-'
                                                .concat(e.id, '-')
                                                .concat(i),
                                            hidden: '',
                                        }),
                                        l = me('button', {
                                            type: 'button',
                                            class: ''
                                                .concat(
                                                    t.config.classNames.control,
                                                    ' '
                                                )
                                                .concat(
                                                    t.config.classNames.control,
                                                    '--back'
                                                ),
                                        });
                                    l.appendChild(
                                        me(
                                            'span',
                                            { 'aria-hidden': !0 },
                                            $e(i, t.config)
                                        )
                                    ),
                                        l.appendChild(
                                            me(
                                                'span',
                                                {
                                                    class: t.config.classNames
                                                        .hidden,
                                                },
                                                $e('menuBack', t.config)
                                            )
                                        ),
                                        Ie.call(
                                            t,
                                            s,
                                            'keydown',
                                            function (e) {
                                                37 === e.which &&
                                                    (e.preventDefault(),
                                                    e.stopPropagation(),
                                                    c.call(t, 'home', !0));
                                            },
                                            !1
                                        ),
                                        Ie.call(t, l, 'click', function () {
                                            c.call(t, 'home', !1);
                                        }),
                                        s.appendChild(l),
                                        s.appendChild(
                                            me('div', { role: 'menu' })
                                        ),
                                        b.appendChild(s),
                                        (t.elements.settings.buttons[i] = a),
                                        (t.elements.settings.panels[i] = s);
                                }),
                                y.appendChild(b),
                                g.appendChild(y),
                                u.appendChild(g),
                                (t.elements.settings.popup = y),
                                (t.elements.settings.menu = g);
                        }
                        if (
                            ('pip' === s &&
                                Ne.pip &&
                                u.appendChild(i.call(t, 'pip', d)),
                            'airplay' === s &&
                                Ne.airplay &&
                                u.appendChild(i.call(t, 'airplay', d)),
                            'download' === s)
                        ) {
                            var k = ue({}, d, {
                                element: 'a',
                                href: t.download,
                                target: '_blank',
                            });
                            t.isHTML5 && (k.download = '');
                            var T = t.config.urls.download;
                            !ae(T) &&
                                t.isEmbed &&
                                ue(k, {
                                    icon: 'logo-'.concat(t.provider),
                                    label: t.provider,
                                }),
                                u.appendChild(i.call(t, 'download', k));
                        }
                        'fullscreen' === s &&
                            u.appendChild(i.call(t, 'fullscreen', d));
                    }),
                    this.isHTML5 &&
                        s.call(this, Be.getQualityOptions.call(this)),
                    l.call(this),
                    u
                );
            },
            inject: function () {
                var e = this;
                if (this.config.loadSprite) {
                    var t = at.getIconUrl.call(this);
                    t.cors && Ze(t.url, 'sprite-plyr');
                }
                this.id = Math.floor(1e4 * Math.random());
                var n = null;
                this.elements.controls = null;
                var i = {
                        id: this.id,
                        seektime: this.config.seekTime,
                        title: this.config.title,
                    },
                    a = !0;
                $(this.config.controls) &&
                    (this.config.controls = this.config.controls.call(this, i)),
                    this.config.controls || (this.config.controls = []),
                    Z(this.config.controls) || Q(this.config.controls)
                        ? (n = this.config.controls)
                        : ((n = at.create.call(this, {
                              id: this.id,
                              seektime: this.config.seekTime,
                              speed: this.speed,
                              quality: this.quality,
                              captions: st.getLabel.call(this),
                          })),
                          (a = !1));
                var r, o;
                if (
                    (a &&
                        Q(this.config.controls) &&
                        ((r = n),
                        Object.entries(i).forEach(function (e) {
                            var t = l(e, 2),
                                n = t[0],
                                i = t[1];
                            r = ze(r, '{'.concat(n, '}'), i);
                        }),
                        (n = r)),
                    Q(this.config.selectors.controls.container) &&
                        (o = document.querySelector(
                            this.config.selectors.controls.container
                        )),
                    Z(o) || (o = this.elements.container),
                    o[Z(n) ? 'insertAdjacentElement' : 'insertAdjacentHTML'](
                        'afterbegin',
                        n
                    ),
                    Z(this.elements.controls) || at.findElements.call(this),
                    !re(this.elements.buttons))
                ) {
                    var s = function (t) {
                        var n = e.config.classNames.controlPressed;
                        Object.defineProperty(t, 'pressed', {
                            enumerable: !0,
                            get: function () {
                                return ke(t, n);
                            },
                            set: function () {
                                var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0];
                                we(t, n, e);
                            },
                        });
                    };
                    Object.values(this.elements.buttons)
                        .filter(Boolean)
                        .forEach(function (e) {
                            J(e) || G(e)
                                ? Array.from(e).filter(Boolean).forEach(s)
                                : s(e);
                        });
                }
                if ((le.isEdge && se(o), this.config.tooltips.controls)) {
                    var c = this.config,
                        u = c.classNames,
                        d = c.selectors,
                        h = ''
                            .concat(d.controls.wrapper, ' ')
                            .concat(d.labels, ' .')
                            .concat(u.hidden),
                        m = Ce.call(this, h);
                    Array.from(m).forEach(function (t) {
                        we(t, e.config.classNames.hidden, !1),
                            we(t, e.config.classNames.tooltip, !0);
                    });
                }
            },
        };
        function rt(e) {
            var t =
                    !(arguments.length > 1 && void 0 !== arguments[1]) ||
                    arguments[1],
                n = e;
            if (t) {
                var i = document.createElement('a');
                (i.href = n), (n = i.href);
            }
            try {
                return new URL(n);
            } catch (e) {
                return null;
            }
        }
        function ot(e) {
            var t = new URLSearchParams();
            return (
                K(e) &&
                    Object.entries(e).forEach(function (e) {
                        var n = l(e, 2),
                            i = n[0],
                            a = n[1];
                        t.set(i, a);
                    }),
                t
            );
        }
        var st = {
                setup: function () {
                    if (this.supported.ui)
                        if (
                            !this.isVideo ||
                            this.isYouTube ||
                            (this.isHTML5 && !Ne.textTracks)
                        )
                            J(this.config.controls) &&
                                this.config.controls.includes('settings') &&
                                this.config.settings.includes('captions') &&
                                at.setCaptionsMenu.call(this);
                        else {
                            if (
                                (Z(this.elements.captions) ||
                                    ((this.elements.captions = me(
                                        'div',
                                        be(this.config.selectors.captions)
                                    )),
                                    (function (e, t) {
                                        Z(e) &&
                                            Z(t) &&
                                            t.parentNode.insertBefore(
                                                e,
                                                t.nextSibling
                                            );
                                    })(
                                        this.elements.captions,
                                        this.elements.wrapper
                                    )),
                                le.isIE && window.URL)
                            ) {
                                var e = this.media.querySelectorAll('track');
                                Array.from(e).forEach(function (e) {
                                    var t = e.getAttribute('src'),
                                        n = rt(t);
                                    null !== n &&
                                        n.hostname !==
                                            window.location.href.hostname &&
                                        ['http:', 'https:'].includes(
                                            n.protocol
                                        ) &&
                                        Ge(t, 'blob')
                                            .then(function (t) {
                                                e.setAttribute(
                                                    'src',
                                                    window.URL.createObjectURL(
                                                        t
                                                    )
                                                );
                                            })
                                            .catch(function () {
                                                fe(e);
                                            });
                                });
                            }
                            var t = Ue(
                                    (
                                        navigator.languages || [
                                            navigator.language ||
                                                navigator.userLanguage ||
                                                'en',
                                        ]
                                    ).map(function (e) {
                                        return e.split('-')[0];
                                    })
                                ),
                                n = (
                                    this.storage.get('language') ||
                                    this.config.captions.language ||
                                    'auto'
                                ).toLowerCase();
                            if ('auto' === n) n = l(t, 1)[0];
                            var i = this.storage.get('captions');
                            if (
                                (X(i) || (i = this.config.captions.active),
                                Object.assign(this.captions, {
                                    toggled: !1,
                                    active: i,
                                    language: n,
                                    languages: t,
                                }),
                                this.isHTML5)
                            ) {
                                var a = this.config.captions.update
                                    ? 'addtrack removetrack'
                                    : 'removetrack';
                                Ie.call(
                                    this,
                                    this.media.textTracks,
                                    a,
                                    st.update.bind(this)
                                );
                            }
                            setTimeout(st.update.bind(this), 0);
                        }
                },
                update: function () {
                    var e = this,
                        t = st.getTracks.call(this, !0),
                        n = this.captions,
                        i = n.active,
                        a = n.language,
                        r = n.meta,
                        o = n.currentTrackNode,
                        s = Boolean(
                            t.find(function (e) {
                                return e.language === a;
                            })
                        );
                    this.isHTML5 &&
                        this.isVideo &&
                        t
                            .filter(function (e) {
                                return !r.get(e);
                            })
                            .forEach(function (t) {
                                e.debug.log('Track added', t),
                                    r.set(t, { default: 'showing' === t.mode }),
                                    'showing' === t.mode && (t.mode = 'hidden'),
                                    Ie.call(e, t, 'cuechange', function () {
                                        return st.updateCues.call(e);
                                    });
                            }),
                        ((s && this.language !== a) || !t.includes(o)) &&
                            (st.setLanguage.call(this, a),
                            st.toggle.call(this, i && s)),
                        we(
                            this.elements.container,
                            this.config.classNames.captions.enabled,
                            !re(t)
                        ),
                        J(this.config.controls) &&
                            this.config.controls.includes('settings') &&
                            this.config.settings.includes('captions') &&
                            at.setCaptionsMenu.call(this);
                },
                toggle: function (e) {
                    var t = this,
                        n =
                            !(
                                arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1];
                    if (this.supported.ui) {
                        var i = this.captions.toggled,
                            a = this.config.classNames.captions.active,
                            r = z(e) ? !i : e;
                        if (r !== i) {
                            if (
                                (n ||
                                    ((this.captions.active = r),
                                    this.storage.set({ captions: r })),
                                !this.language && r && !n)
                            ) {
                                var o = st.getTracks.call(this),
                                    s = st.findTrack.call(
                                        this,
                                        [this.captions.language].concat(
                                            c(this.captions.languages)
                                        ),
                                        !0
                                    );
                                return (
                                    (this.captions.language = s.language),
                                    void st.set.call(this, o.indexOf(s))
                                );
                            }
                            this.elements.buttons.captions &&
                                (this.elements.buttons.captions.pressed = r),
                                we(this.elements.container, a, r),
                                (this.captions.toggled = r),
                                at.updateSetting.call(this, 'captions'),
                                _e.call(
                                    this,
                                    this.media,
                                    r ? 'captionsenabled' : 'captionsdisabled'
                                );
                        }
                        setTimeout(function () {
                            r &&
                                t.captions.toggled &&
                                (t.captions.currentTrackNode.mode = 'hidden');
                        });
                    }
                },
                set: function (e) {
                    var t =
                            !(
                                arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1],
                        n = st.getTracks.call(this);
                    if (-1 !== e)
                        if (Y(e))
                            if (e in n) {
                                if (this.captions.currentTrack !== e) {
                                    this.captions.currentTrack = e;
                                    var i = n[e],
                                        a = i || {},
                                        r = a.language;
                                    (this.captions.currentTrackNode = i),
                                        at.updateSetting.call(this, 'captions'),
                                        t ||
                                            ((this.captions.language = r),
                                            this.storage.set({ language: r })),
                                        this.isVimeo &&
                                            this.embed.enableTextTrack(r),
                                        _e.call(
                                            this,
                                            this.media,
                                            'languagechange'
                                        );
                                }
                                st.toggle.call(this, !0, t),
                                    this.isHTML5 &&
                                        this.isVideo &&
                                        st.updateCues.call(this);
                            } else this.debug.warn('Track not found', e);
                        else this.debug.warn('Invalid caption argument', e);
                    else st.toggle.call(this, !1, t);
                },
                setLanguage: function (e) {
                    var t =
                        !(arguments.length > 1 && void 0 !== arguments[1]) ||
                        arguments[1];
                    if (Q(e)) {
                        var n = e.toLowerCase();
                        this.captions.language = n;
                        var i = st.getTracks.call(this),
                            a = st.findTrack.call(this, [n]);
                        st.set.call(this, i.indexOf(a), t);
                    } else this.debug.warn('Invalid language argument', e);
                },
                getTracks: function () {
                    var e = this,
                        t =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                        n = Array.from((this.media || {}).textTracks || []);
                    return n
                        .filter(function (n) {
                            return !e.isHTML5 || t || e.captions.meta.has(n);
                        })
                        .filter(function (e) {
                            return ['captions', 'subtitles'].includes(e.kind);
                        });
                },
                findTrack: function (e) {
                    var t,
                        n = this,
                        i =
                            arguments.length > 1 &&
                            void 0 !== arguments[1] &&
                            arguments[1],
                        a = st.getTracks.call(this),
                        r = function (e) {
                            return Number(
                                (n.captions.meta.get(e) || {}).default
                            );
                        },
                        o = Array.from(a).sort(function (e, t) {
                            return r(t) - r(e);
                        });
                    return (
                        e.every(function (e) {
                            return !(t = o.find(function (t) {
                                return t.language === e;
                            }));
                        }),
                        t || (i ? o[0] : void 0)
                    );
                },
                getCurrentTrack: function () {
                    return st.getTracks.call(this)[this.currentTrack];
                },
                getLabel: function (e) {
                    var t = e;
                    return (
                        !ne(t) &&
                            Ne.textTracks &&
                            this.captions.toggled &&
                            (t = st.getCurrentTrack.call(this)),
                        ne(t)
                            ? re(t.label)
                                ? re(t.language)
                                    ? $e('enabled', this.config)
                                    : e.language.toUpperCase()
                                : t.label
                            : $e('disabled', this.config)
                    );
                },
                updateCues: function (e) {
                    if (this.supported.ui)
                        if (Z(this.elements.captions))
                            if (z(e) || Array.isArray(e)) {
                                var t = e;
                                if (!t) {
                                    var n = st.getCurrentTrack.call(this);
                                    t = Array.from((n || {}).activeCues || [])
                                        .map(function (e) {
                                            return e.getCueAsHTML();
                                        })
                                        .map(Qe);
                                }
                                var i = t
                                    .map(function (e) {
                                        return e.trim();
                                    })
                                    .join('\n');
                                if (i !== this.elements.captions.innerHTML) {
                                    ge(this.elements.captions);
                                    var a = me(
                                        'span',
                                        be(this.config.selectors.caption)
                                    );
                                    (a.innerHTML = i),
                                        this.elements.captions.appendChild(a),
                                        _e.call(this, this.media, 'cuechange');
                                }
                            } else
                                this.debug.warn('updateCues: Invalid input', e);
                        else
                            this.debug.warn('No captions element to render to');
                },
            },
            lt = {
                enabled: !0,
                title: '',
                debug: !1,
                autoplay: !1,
                autopause: !0,
                playsinline: !0,
                seekTime: 10,
                volume: 1,
                muted: !1,
                duration: null,
                displayDuration: !0,
                invertTime: !0,
                toggleInvert: !0,
                ratio: null,
                clickToPlay: !0,
                hideControls: !0,
                resetOnEnd: !1,
                disableContextMenu: !0,
                loadSprite: !0,
                iconPrefix: 'plyr',
                iconUrl: 'https://cdn.plyr.io/3.6.4/plyr.svg',
                blankVideo: 'https://cdn.plyr.io/static/blank.mp4',
                quality: {
                    default: 576,
                    options: [
                        4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240,
                    ],
                    forced: !1,
                    onChange: null,
                },
                loop: { active: !1 },
                speed: {
                    selected: 1,
                    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
                },
                keyboard: { focused: !0, global: !1 },
                tooltips: { controls: !1, seek: !0 },
                captions: { active: !1, language: 'auto', update: !1 },
                fullscreen: { enabled: !0, fallback: !0, iosNative: !1 },
                storage: { enabled: !0, key: 'plyr' },
                controls: [
                    'play-large',
                    'play',
                    'progress',
                    'current-time',
                    'mute',
                    'volume',
                    'captions',
                    'settings',
                    'pip',
                    'airplay',
                    'fullscreen',
                ],
                settings: ['captions', 'quality', 'speed'],
                i18n: {
                    restart: 'Restart',
                    rewind: 'Rewind {seektime}s',
                    play: 'Play',
                    pause: 'Pause',
                    fastForward: 'Forward {seektime}s',
                    seek: 'Seek',
                    seekLabel: '{currentTime} of {duration}',
                    played: 'Played',
                    buffered: 'Buffered',
                    currentTime: 'Current time',
                    duration: 'Duration',
                    volume: 'Volume',
                    mute: 'Mute',
                    unmute: 'Unmute',
                    enableCaptions: 'Enable captions',
                    disableCaptions: 'Disable captions',
                    download: 'Download',
                    enterFullscreen: 'Enter fullscreen',
                    exitFullscreen: 'Exit fullscreen',
                    frameTitle: 'Player for {title}',
                    captions: 'Captions',
                    settings: 'Settings',
                    pip: 'PIP',
                    menuBack: 'Go back to previous menu',
                    speed: 'Speed',
                    normal: 'Normal',
                    quality: 'Quality',
                    loop: 'Loop',
                    start: 'Start',
                    end: 'End',
                    all: 'All',
                    reset: 'Reset',
                    disabled: 'Disabled',
                    enabled: 'Enabled',
                    advertisement: 'Ad',
                    qualityBadge: {
                        2160: '4K',
                        1440: 'HD',
                        1080: 'HD',
                        720: 'HD',
                        576: 'SD',
                        480: 'SD',
                    },
                },
                urls: {
                    download: null,
                    vimeo: {
                        sdk: 'https://player.vimeo.com/api/player.js',
                        iframe: 'https://player.vimeo.com/video/{0}?{1}',
                        api: 'https://vimeo.com/api/oembed.json?url={0}',
                    },
                    youtube: {
                        sdk: 'https://www.youtube.com/iframe_api',
                        api: 'https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}',
                    },
                    googleIMA: {
                        sdk: 'https://imasdk.googleapis.com/js/sdkloader/ima3.js',
                    },
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    fastForward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    download: null,
                    fullscreen: null,
                    pip: null,
                    airplay: null,
                    speed: null,
                    quality: null,
                    loop: null,
                    language: null,
                },
                events: [
                    'ended',
                    'progress',
                    'stalled',
                    'playing',
                    'waiting',
                    'canplay',
                    'canplaythrough',
                    'loadstart',
                    'loadeddata',
                    'loadedmetadata',
                    'timeupdate',
                    'volumechange',
                    'play',
                    'pause',
                    'error',
                    'seeking',
                    'seeked',
                    'emptied',
                    'ratechange',
                    'cuechange',
                    'download',
                    'enterfullscreen',
                    'exitfullscreen',
                    'captionsenabled',
                    'captionsdisabled',
                    'languagechange',
                    'controlshidden',
                    'controlsshown',
                    'ready',
                    'statechange',
                    'qualitychange',
                    'adsloaded',
                    'adscontentpause',
                    'adscontentresume',
                    'adstarted',
                    'adsmidpoint',
                    'adscomplete',
                    'adsallcomplete',
                    'adsimpression',
                    'adsclick',
                ],
                selectors: {
                    editable: 'input, textarea, select, [contenteditable]',
                    container: '.plyr',
                    controls: { container: null, wrapper: '.plyr__controls' },
                    labels: '[data-plyr]',
                    buttons: {
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        fastForward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        download: '[data-plyr="download"]',
                        fullscreen: '[data-plyr="fullscreen"]',
                        pip: '[data-plyr="pip"]',
                        airplay: '[data-plyr="airplay"]',
                        settings: '[data-plyr="settings"]',
                        loop: '[data-plyr="loop"]',
                    },
                    inputs: {
                        seek: '[data-plyr="seek"]',
                        volume: '[data-plyr="volume"]',
                        speed: '[data-plyr="speed"]',
                        language: '[data-plyr="language"]',
                        quality: '[data-plyr="quality"]',
                    },
                    display: {
                        currentTime: '.plyr__time--current',
                        duration: '.plyr__time--duration',
                        buffer: '.plyr__progress__buffer',
                        loop: '.plyr__progress__loop',
                        volume: '.plyr__volume--display',
                    },
                    progress: '.plyr__progress',
                    captions: '.plyr__captions',
                    caption: '.plyr__caption',
                },
                classNames: {
                    type: 'plyr--{0}',
                    provider: 'plyr--{0}',
                    video: 'plyr__video-wrapper',
                    embed: 'plyr__video-embed',
                    videoFixedRatio: 'plyr__video-wrapper--fixed-ratio',
                    embedContainer: 'plyr__video-embed__container',
                    poster: 'plyr__poster',
                    posterEnabled: 'plyr__poster-enabled',
                    ads: 'plyr__ads',
                    control: 'plyr__control',
                    controlPressed: 'plyr__control--pressed',
                    playing: 'plyr--playing',
                    paused: 'plyr--paused',
                    stopped: 'plyr--stopped',
                    loading: 'plyr--loading',
                    hover: 'plyr--hover',
                    tooltip: 'plyr__tooltip',
                    cues: 'plyr__cues',
                    hidden: 'plyr__sr-only',
                    hideControls: 'plyr--hide-controls',
                    isIos: 'plyr--is-ios',
                    isTouch: 'plyr--is-touch',
                    uiSupported: 'plyr--full-ui',
                    noTransition: 'plyr--no-transition',
                    display: { time: 'plyr__time' },
                    menu: {
                        value: 'plyr__menu__value',
                        badge: 'plyr__badge',
                        open: 'plyr--menu-open',
                    },
                    captions: {
                        enabled: 'plyr--captions-enabled',
                        active: 'plyr--captions-active',
                    },
                    fullscreen: {
                        enabled: 'plyr--fullscreen-enabled',
                        fallback: 'plyr--fullscreen-fallback',
                    },
                    pip: {
                        supported: 'plyr--pip-supported',
                        active: 'plyr--pip-active',
                    },
                    airplay: {
                        supported: 'plyr--airplay-supported',
                        active: 'plyr--airplay-active',
                    },
                    tabFocus: 'plyr__tab-focus',
                    previewThumbnails: {
                        thumbContainer: 'plyr__preview-thumb',
                        thumbContainerShown: 'plyr__preview-thumb--is-shown',
                        imageContainer: 'plyr__preview-thumb__image-container',
                        timeContainer: 'plyr__preview-thumb__time-container',
                        scrubbingContainer: 'plyr__preview-scrubbing',
                        scrubbingContainerShown:
                            'plyr__preview-scrubbing--is-shown',
                    },
                },
                attributes: {
                    embed: {
                        provider: 'data-plyr-provider',
                        id: 'data-plyr-embed-id',
                    },
                },
                ads: { enabled: !1, publisherId: '', tagUrl: '' },
                previewThumbnails: { enabled: !1, src: '' },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    speed: !0,
                    transparent: !1,
                    customControls: !0,
                    referrerPolicy: null,
                    premium: !1,
                },
                youtube: {
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    customControls: !0,
                    noCookie: !1,
                },
            },
            ct = 'picture-in-picture',
            ut = 'inline',
            dt = { html5: 'html5', youtube: 'youtube', vimeo: 'vimeo' },
            ht = 'audio',
            mt = 'video';
        var pt = function () {},
            ft = (function () {
                function e() {
                    var n =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    t(this, e),
                        (this.enabled = window.console && n),
                        this.enabled && this.log('Debugging enabled');
                }
                return (
                    i(e, [
                        {
                            key: 'log',
                            get: function () {
                                return this.enabled
                                    ? Function.prototype.bind.call(
                                          /* console.log, */
                                          console
                                      )
                                    : pt;
                            },
                        },
                        {
                            key: 'warn',
                            get: function () {
                                return this.enabled
                                    ? Function.prototype.bind.call(
                                          console.warn,
                                          console
                                      )
                                    : pt;
                            },
                        },
                        {
                            key: 'error',
                            get: function () {
                                return this.enabled
                                    ? Function.prototype.bind.call(
                                          console.error,
                                          console
                                      )
                                    : pt;
                            },
                        },
                    ]),
                    e
                );
            })(),
            gt = (function () {
                function e(n) {
                    var i = this;
                    t(this, e),
                        a(this, 'onChange', function () {
                            if (i.enabled) {
                                var e = i.player.elements.buttons.fullscreen;
                                Z(e) && (e.pressed = i.active);
                                var t =
                                    i.target === i.player.media
                                        ? i.target
                                        : i.player.elements.container;
                                _e.call(
                                    i.player,
                                    t,
                                    i.active
                                        ? 'enterfullscreen'
                                        : 'exitfullscreen',
                                    !0
                                );
                            }
                        }),
                        a(this, 'toggleFallback', function () {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            if (
                                (e
                                    ? (i.scrollPosition = {
                                          x: window.scrollX || 0,
                                          y: window.scrollY || 0,
                                      })
                                    : window.scrollTo(
                                          i.scrollPosition.x,
                                          i.scrollPosition.y
                                      ),
                                (document.body.style.overflow = e
                                    ? 'hidden'
                                    : ''),
                                we(
                                    i.target,
                                    i.player.config.classNames.fullscreen
                                        .fallback,
                                    e
                                ),
                                le.isIos)
                            ) {
                                var t = document.head.querySelector(
                                        'meta[name="viewport"]'
                                    ),
                                    n = 'viewport-fit=cover';
                                t ||
                                    (t =
                                        document.createElement(
                                            'meta'
                                        )).setAttribute('name', 'viewport');
                                var a = Q(t.content) && t.content.includes(n);
                                e
                                    ? ((i.cleanupViewport = !a),
                                      a || (t.content += ','.concat(n)))
                                    : i.cleanupViewport &&
                                      (t.content = t.content
                                          .split(',')
                                          .filter(function (e) {
                                              return e.trim() !== n;
                                          })
                                          .join(','));
                            }
                            i.onChange();
                        }),
                        a(this, 'trapFocus', function (e) {
                            if (
                                !le.isIos &&
                                i.active &&
                                'Tab' === e.key &&
                                9 === e.keyCode
                            ) {
                                var t = document.activeElement,
                                    n = Ce.call(
                                        i.player,
                                        'a[href], button:not(:disabled), input:not(:disabled), [tabindex]'
                                    ),
                                    a = l(n, 1)[0],
                                    r = n[n.length - 1];
                                t !== r || e.shiftKey
                                    ? t === a &&
                                      e.shiftKey &&
                                      (r.focus(), e.preventDefault())
                                    : (a.focus(), e.preventDefault());
                            }
                        }),
                        a(this, 'update', function () {
                            var t;
                            i.enabled
                                ? ((t = i.forceFallback
                                      ? 'Fallback (forced)'
                                      : e.native
                                      ? 'Native'
                                      : 'Fallback'),
                                  i.player.debug.log(
                                      ''.concat(t, ' fullscreen enabled')
                                  ))
                                : i.player.debug.log(
                                      'Fullscreen not supported and fallback disabled'
                                  );
                            we(
                                i.player.elements.container,
                                i.player.config.classNames.fullscreen.enabled,
                                i.enabled
                            );
                        }),
                        a(this, 'enter', function () {
                            i.enabled &&
                                (le.isIos &&
                                i.player.config.fullscreen.iosNative
                                    ? i.player.isVimeo
                                        ? i.player.embed.requestFullscreen()
                                        : i.target.webkitEnterFullscreen()
                                    : !e.native || i.forceFallback
                                    ? i.toggleFallback(!0)
                                    : i.prefix
                                    ? re(i.prefix) ||
                                      i.target[
                                          ''
                                              .concat(i.prefix, 'Request')
                                              .concat(i.property)
                                      ]()
                                    : i.target.requestFullscreen({
                                          navigationUI: 'hide',
                                      }));
                        }),
                        a(this, 'exit', function () {
                            if (i.enabled)
                                if (
                                    le.isIos &&
                                    i.player.config.fullscreen.iosNative
                                )
                                    i.target.webkitExitFullscreen(),
                                        qe(i.player.play());
                                else if (!e.native || i.forceFallback)
                                    i.toggleFallback(!1);
                                else if (i.prefix) {
                                    if (!re(i.prefix)) {
                                        var t =
                                            'moz' === i.prefix
                                                ? 'Cancel'
                                                : 'Exit';
                                        document[
                                            ''
                                                .concat(i.prefix)
                                                .concat(t)
                                                .concat(i.property)
                                        ]();
                                    }
                                } else
                                    (
                                        document.cancelFullScreen ||
                                        document.exitFullscreen
                                    ).call(document);
                        }),
                        a(this, 'toggle', function () {
                            i.active ? i.exit() : i.enter();
                        }),
                        (this.player = n),
                        (this.prefix = e.prefix),
                        (this.property = e.property),
                        (this.scrollPosition = { x: 0, y: 0 }),
                        (this.forceFallback =
                            'force' === n.config.fullscreen.fallback),
                        (this.player.elements.fullscreen =
                            n.config.fullscreen.container &&
                            (function (e, t) {
                                return (
                                    Element.prototype.closest ||
                                    function () {
                                        var e = this;
                                        do {
                                            if (Te.matches(e, t)) return e;
                                            e = e.parentElement || e.parentNode;
                                        } while (
                                            null !== e &&
                                            1 === e.nodeType
                                        );
                                        return null;
                                    }
                                ).call(e, t);
                            })(
                                this.player.elements.container,
                                n.config.fullscreen.container
                            )),
                        Ie.call(
                            this.player,
                            document,
                            'ms' === this.prefix
                                ? 'MSFullscreenChange'
                                : ''.concat(this.prefix, 'fullscreenchange'),
                            function () {
                                i.onChange();
                            }
                        ),
                        Ie.call(
                            this.player,
                            this.player.elements.container,
                            'dblclick',
                            function (e) {
                                (Z(i.player.elements.controls) &&
                                    i.player.elements.controls.contains(
                                        e.target
                                    )) ||
                                    i.player.listeners.proxy(
                                        e,
                                        i.toggle,
                                        'fullscreen'
                                    );
                            }
                        ),
                        Ie.call(
                            this,
                            this.player.elements.container,
                            'keydown',
                            function (e) {
                                return i.trapFocus(e);
                            }
                        ),
                        this.update();
                }
                return (
                    i(
                        e,
                        [
                            {
                                key: 'usingNative',
                                get: function () {
                                    return e.native && !this.forceFallback;
                                },
                            },
                            {
                                key: 'enabled',
                                get: function () {
                                    return (
                                        (e.native ||
                                            this.player.config.fullscreen
                                                .fallback) &&
                                        this.player.config.fullscreen.enabled &&
                                        this.player.supported.ui &&
                                        this.player.isVideo
                                    );
                                },
                            },
                            {
                                key: 'active',
                                get: function () {
                                    if (!this.enabled) return !1;
                                    if (!e.native || this.forceFallback)
                                        return ke(
                                            this.target,
                                            this.player.config.classNames
                                                .fullscreen.fallback
                                        );
                                    var t = this.prefix
                                        ? document[
                                              ''
                                                  .concat(this.prefix)
                                                  .concat(
                                                      this.property,
                                                      'Element'
                                                  )
                                          ]
                                        : document.fullscreenElement;
                                    return t && t.shadowRoot
                                        ? t === this.target.getRootNode().host
                                        : t === this.target;
                                },
                            },
                            {
                                key: 'target',
                                get: function () {
                                    return le.isIos &&
                                        this.player.config.fullscreen.iosNative
                                        ? this.player.media
                                        : this.player.elements.fullscreen ||
                                              this.player.elements.container;
                                },
                            },
                        ],
                        [
                            {
                                key: 'native',
                                get: function () {
                                    return !!(
                                        document.fullscreenEnabled ||
                                        document.webkitFullscreenEnabled ||
                                        document.mozFullScreenEnabled ||
                                        document.msFullscreenEnabled
                                    );
                                },
                            },
                            {
                                key: 'prefix',
                                get: function () {
                                    if ($(document.exitFullscreen)) return '';
                                    var e = '';
                                    return (
                                        ['webkit', 'moz', 'ms'].some(function (
                                            t
                                        ) {
                                            return (
                                                !(
                                                    !$(
                                                        document[
                                                            ''.concat(
                                                                t,
                                                                'ExitFullscreen'
                                                            )
                                                        ]
                                                    ) &&
                                                    !$(
                                                        document[
                                                            ''.concat(
                                                                t,
                                                                'CancelFullScreen'
                                                            )
                                                        ]
                                                    )
                                                ) && ((e = t), !0)
                                            );
                                        }),
                                        e
                                    );
                                },
                            },
                            {
                                key: 'property',
                                get: function () {
                                    return 'moz' === this.prefix
                                        ? 'FullScreen'
                                        : 'Fullscreen';
                                },
                            },
                        ]
                    ),
                    e
                );
            })();
        function yt(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1;
            return new Promise(function (n, i) {
                var a = new Image(),
                    r = function () {
                        delete a.onload,
                            delete a.onerror,
                            (a.naturalWidth >= t ? n : i)(a);
                    };
                Object.assign(a, { onload: r, onerror: r, src: e });
            });
        }
        var bt = {
                addStyleHook: function () {
                    we(
                        this.elements.container,
                        this.config.selectors.container.replace('.', ''),
                        !0
                    ),
                        we(
                            this.elements.container,
                            this.config.classNames.uiSupported,
                            this.supported.ui
                        );
                },
                toggleNativeControls: function () {
                    var e =
                        arguments.length > 0 &&
                        void 0 !== arguments[0] &&
                        arguments[0];
                    e && this.isHTML5
                        ? this.media.setAttribute('controls', '')
                        : this.media.removeAttribute('controls');
                },
                build: function () {
                    var e = this;
                    if ((this.listeners.media(), !this.supported.ui))
                        return (
                            this.debug.warn(
                                'Basic support only for '
                                    .concat(this.provider, ' ')
                                    .concat(this.type)
                            ),
                            void bt.toggleNativeControls.call(this, !0)
                        );
                    Z(this.elements.controls) ||
                        (at.inject.call(this), this.listeners.controls()),
                        bt.toggleNativeControls.call(this),
                        this.isHTML5 && st.setup.call(this),
                        (this.volume = null),
                        (this.muted = null),
                        (this.loop = null),
                        (this.quality = null),
                        (this.speed = null),
                        at.updateVolume.call(this),
                        at.timeUpdate.call(this),
                        bt.checkPlaying.call(this),
                        we(
                            this.elements.container,
                            this.config.classNames.pip.supported,
                            Ne.pip && this.isHTML5 && this.isVideo
                        ),
                        we(
                            this.elements.container,
                            this.config.classNames.airplay.supported,
                            Ne.airplay && this.isHTML5
                        ),
                        we(
                            this.elements.container,
                            this.config.classNames.isIos,
                            le.isIos
                        ),
                        we(
                            this.elements.container,
                            this.config.classNames.isTouch,
                            this.touch
                        ),
                        (this.ready = !0),
                        setTimeout(function () {
                            _e.call(e, e.media, 'ready');
                        }, 0),
                        bt.setTitle.call(this),
                        this.poster &&
                            bt.setPoster
                                .call(this, this.poster, !1)
                                .catch(function () {}),
                        this.config.duration && at.durationUpdate.call(this);
                },
                setTitle: function () {
                    var e = $e('play', this.config);
                    if (
                        (Q(this.config.title) &&
                            !re(this.config.title) &&
                            (e += ', '.concat(this.config.title)),
                        Array.from(this.elements.buttons.play || []).forEach(
                            function (t) {
                                t.setAttribute('aria-label', e);
                            }
                        ),
                        this.isEmbed)
                    ) {
                        var t = Ae.call(this, 'iframe');
                        if (!Z(t)) return;
                        var n = re(this.config.title)
                                ? 'video'
                                : this.config.title,
                            i = $e('frameTitle', this.config);
                        t.setAttribute('title', i.replace('{title}', n));
                    }
                },
                togglePoster: function (e) {
                    we(
                        this.elements.container,
                        this.config.classNames.posterEnabled,
                        e
                    );
                },
                setPoster: function (e) {
                    var t = this,
                        n =
                            !(
                                arguments.length > 1 && void 0 !== arguments[1]
                            ) || arguments[1];
                    return n && this.poster
                        ? Promise.reject(new Error('Poster already set'))
                        : (this.media.setAttribute('data-poster', e),
                          this.elements.poster.removeAttribute('hidden'),
                          De.call(this)
                              .then(function () {
                                  return yt(e);
                              })
                              .catch(function (n) {
                                  throw (
                                      (e === t.poster &&
                                          bt.togglePoster.call(t, !1),
                                      n)
                                  );
                              })
                              .then(function () {
                                  if (e !== t.poster)
                                      throw new Error(
                                          'setPoster cancelled by later call to setPoster'
                                      );
                              })
                              .then(function () {
                                  return (
                                      Object.assign(t.elements.poster.style, {
                                          backgroundImage: "url('".concat(
                                              e,
                                              "')"
                                          ),
                                          backgroundSize: '',
                                      }),
                                      bt.togglePoster.call(t, !0),
                                      e
                                  );
                              }));
                },
                checkPlaying: function (e) {
                    var t = this;
                    we(
                        this.elements.container,
                        this.config.classNames.playing,
                        this.playing
                    ),
                        we(
                            this.elements.container,
                            this.config.classNames.paused,
                            this.paused
                        ),
                        we(
                            this.elements.container,
                            this.config.classNames.stopped,
                            this.stopped
                        ),
                        Array.from(this.elements.buttons.play || []).forEach(
                            function (e) {
                                Object.assign(e, { pressed: t.playing }),
                                    e.setAttribute(
                                        'aria-label',
                                        $e(
                                            t.playing ? 'pause' : 'play',
                                            t.config
                                        )
                                    );
                            }
                        ),
                        (ee(e) && 'timeupdate' === e.type) ||
                            bt.toggleControls.call(this);
                },
                checkLoading: function (e) {
                    var t = this;
                    (this.loading = ['stalled', 'waiting'].includes(e.type)),
                        clearTimeout(this.timers.loading),
                        (this.timers.loading = setTimeout(
                            function () {
                                we(
                                    t.elements.container,
                                    t.config.classNames.loading,
                                    t.loading
                                ),
                                    bt.toggleControls.call(t);
                            },
                            this.loading ? 250 : 0
                        ));
                },
                toggleControls: function (e) {
                    var t = this.elements.controls;
                    if (t && this.config.hideControls) {
                        var n =
                            this.touch && this.lastSeekTime + 2e3 > Date.now();
                        this.toggleControls(
                            Boolean(
                                e ||
                                    this.loading ||
                                    this.paused ||
                                    t.pressed ||
                                    t.hover ||
                                    n
                            )
                        );
                    }
                },
                migrateStyles: function () {
                    var e = this;
                    Object.values(o({}, this.media.style))
                        .filter(function (e) {
                            return !re(e) && Q(e) && e.startsWith('--plyr');
                        })
                        .forEach(function (t) {
                            e.elements.container.style.setProperty(
                                t,
                                e.media.style.getPropertyValue(t)
                            ),
                                e.media.style.removeProperty(t);
                        }),
                        re(this.media.style) &&
                            this.media.removeAttribute('style');
                },
            },
            vt = (function () {
                function e(n) {
                    var i = this;
                    t(this, e),
                        a(this, 'firstTouch', function () {
                            var e = i.player,
                                t = e.elements;
                            (e.touch = !0),
                                we(
                                    t.container,
                                    e.config.classNames.isTouch,
                                    !0
                                );
                        }),
                        a(this, 'setTabFocus', function (e) {
                            var t = i.player,
                                n = t.elements;
                            if (
                                (clearTimeout(i.focusTimer),
                                'keydown' !== e.type || 9 === e.which)
                            ) {
                                'keydown' === e.type &&
                                    (i.lastKeyDown = e.timeStamp);
                                var a,
                                    r = e.timeStamp - i.lastKeyDown <= 20;
                                if ('focus' !== e.type || r)
                                    (a = t.config.classNames.tabFocus),
                                        we(Ce.call(t, '.'.concat(a)), a, !1),
                                        'focusout' !== e.type &&
                                            (i.focusTimer = setTimeout(
                                                function () {
                                                    var e =
                                                        document.activeElement;
                                                    n.container.contains(e) &&
                                                        we(
                                                            document.activeElement,
                                                            t.config.classNames
                                                                .tabFocus,
                                                            !0
                                                        );
                                                },
                                                10
                                            ));
                            }
                        }),
                        a(this, 'global', function () {
                            var e =
                                    !(
                                        arguments.length > 0 &&
                                        void 0 !== arguments[0]
                                    ) || arguments[0],
                                t = i.player;
                            t.config.keyboard.global &&
                                xe.call(
                                    t,
                                    window,
                                    'keydown keyup',
                                    i.handleKey,
                                    e,
                                    !1
                                ),
                                xe.call(
                                    t,
                                    document.body,
                                    'click',
                                    i.toggleMenu,
                                    e
                                ),
                                Oe.call(
                                    t,
                                    document.body,
                                    'touchstart',
                                    i.firstTouch
                                ),
                                xe.call(
                                    t,
                                    document.body,
                                    'keydown focus blur focusout',
                                    i.setTabFocus,
                                    e,
                                    !1,
                                    !0
                                );
                        }),
                        a(this, 'container', function () {
                            var e = i.player,
                                t = e.config,
                                n = e.elements,
                                a = e.timers;
                            !t.keyboard.global &&
                                t.keyboard.focused &&
                                Ie.call(
                                    e,
                                    n.container,
                                    'keydown keyup',
                                    i.handleKey,
                                    !1
                                ),
                                Ie.call(
                                    e,
                                    n.container,
                                    'mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen',
                                    function (t) {
                                        var i = n.controls;
                                        i &&
                                            'enterfullscreen' === t.type &&
                                            ((i.pressed = !1), (i.hover = !1));
                                        var r = 0;
                                        [
                                            'touchstart',
                                            'touchmove',
                                            'mousemove',
                                        ].includes(t.type) &&
                                            (bt.toggleControls.call(e, !0),
                                            (r = e.touch ? 3e3 : 2e3)),
                                            clearTimeout(a.controls),
                                            (a.controls = setTimeout(
                                                function () {
                                                    return bt.toggleControls.call(
                                                        e,
                                                        !1
                                                    );
                                                },
                                                r
                                            ));
                                    }
                                );
                            var r = function (t) {
                                    if (!t) return Ve.call(e);
                                    var i = n.container.getBoundingClientRect(),
                                        a = i.width,
                                        r = i.height;
                                    return Ve.call(
                                        e,
                                        ''.concat(a, ':').concat(r)
                                    );
                                },
                                o = function () {
                                    clearTimeout(a.resized),
                                        (a.resized = setTimeout(r, 50));
                                };
                            Ie.call(
                                e,
                                n.container,
                                'enterfullscreen exitfullscreen',
                                function (t) {
                                    var i = e.fullscreen,
                                        a = i.target,
                                        s = i.usingNative;
                                    if (
                                        a === n.container &&
                                        (e.isEmbed || !re(e.config.ratio))
                                    ) {
                                        var c = 'enterfullscreen' === t.type,
                                            u = r(c);
                                        u.padding;
                                        !(function (t, n, i) {
                                            if (
                                                e.isVimeo &&
                                                !e.config.vimeo.premium
                                            ) {
                                                var a =
                                                        e.elements.wrapper
                                                            .firstChild,
                                                    r = l(t, 2)[1],
                                                    o = l(Re.call(e), 2),
                                                    s = o[0],
                                                    c = o[1];
                                                (a.style.maxWidth = i
                                                    ? ''.concat(
                                                          (r / c) * s,
                                                          'px'
                                                      )
                                                    : null),
                                                    (a.style.margin = i
                                                        ? '0 auto'
                                                        : null);
                                            }
                                        })(u.ratio, 0, c),
                                            c &&
                                                setTimeout(function () {
                                                    return se(n.container);
                                                }, 100),
                                            s ||
                                                (c
                                                    ? Ie.call(
                                                          e,
                                                          window,
                                                          'resize',
                                                          o
                                                      )
                                                    : Le.call(
                                                          e,
                                                          window,
                                                          'resize',
                                                          o
                                                      ));
                                    }
                                }
                            );
                        }),
                        a(this, 'media', function () {
                            var e = i.player,
                                t = e.elements;
                            if (
                                (Ie.call(
                                    e,
                                    e.media,
                                    'timeupdate seeking seeked',
                                    function (t) {
                                        return at.timeUpdate.call(e, t);
                                    }
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'durationchange loadeddata loadedmetadata',
                                    function (t) {
                                        return at.durationUpdate.call(e, t);
                                    }
                                ),
                                Ie.call(e, e.media, 'ended', function () {
                                    e.isHTML5 &&
                                        e.isVideo &&
                                        e.config.resetOnEnd &&
                                        (e.restart(), e.pause());
                                }),
                                Ie.call(
                                    e,
                                    e.media,
                                    'progress playing seeking seeked',
                                    function (t) {
                                        return at.updateProgress.call(e, t);
                                    }
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'volumechange',
                                    function (t) {
                                        return at.updateVolume.call(e, t);
                                    }
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'playing play pause ended emptied timeupdate',
                                    function (t) {
                                        return bt.checkPlaying.call(e, t);
                                    }
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'waiting canplay seeked playing',
                                    function (t) {
                                        return bt.checkLoading.call(e, t);
                                    }
                                ),
                                e.supported.ui &&
                                    e.config.clickToPlay &&
                                    !e.isAudio)
                            ) {
                                var n = Ae.call(
                                    e,
                                    '.'.concat(e.config.classNames.video)
                                );
                                if (!Z(n)) return;
                                Ie.call(e, t.container, 'click', function (a) {
                                    ([t.container, n].includes(a.target) ||
                                        n.contains(a.target)) &&
                                        ((e.touch && e.config.hideControls) ||
                                            (e.ended
                                                ? (i.proxy(
                                                      a,
                                                      e.restart,
                                                      'restart'
                                                  ),
                                                  i.proxy(
                                                      a,
                                                      function () {
                                                          qe(e.play());
                                                      },
                                                      'play'
                                                  ))
                                                : i.proxy(
                                                      a,
                                                      function () {
                                                          qe(e.togglePlay());
                                                      },
                                                      'play'
                                                  )));
                                });
                            }
                            e.supported.ui &&
                                e.config.disableContextMenu &&
                                Ie.call(
                                    e,
                                    t.wrapper,
                                    'contextmenu',
                                    function (e) {
                                        e.preventDefault();
                                    },
                                    !1
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'volumechange',
                                    function () {
                                        e.storage.set({
                                            volume: e.volume,
                                            muted: e.muted,
                                        });
                                    }
                                ),
                                Ie.call(e, e.media, 'ratechange', function () {
                                    at.updateSetting.call(e, 'speed'),
                                        e.storage.set({ speed: e.speed });
                                }),
                                Ie.call(
                                    e,
                                    e.media,
                                    'qualitychange',
                                    function (t) {
                                        at.updateSetting.call(
                                            e,
                                            'quality',
                                            null,
                                            t.detail.quality
                                        );
                                    }
                                ),
                                Ie.call(
                                    e,
                                    e.media,
                                    'ready qualitychange',
                                    function () {
                                        at.setDownloadUrl.call(e);
                                    }
                                );
                            var a = e.config.events
                                .concat(['keyup', 'keydown'])
                                .join(' ');
                            Ie.call(e, e.media, a, function (n) {
                                var i = n.detail,
                                    a = void 0 === i ? {} : i;
                                'error' === n.type && (a = e.media.error),
                                    _e.call(e, t.container, n.type, !0, a);
                            });
                        }),
                        a(this, 'proxy', function (e, t, n) {
                            var a = i.player,
                                r = a.config.listeners[n],
                                o = !0;
                            $(r) && (o = r.call(a, e)),
                                !1 !== o && $(t) && t.call(a, e);
                        }),
                        a(this, 'bind', function (e, t, n, a) {
                            var r =
                                    !(
                                        arguments.length > 4 &&
                                        void 0 !== arguments[4]
                                    ) || arguments[4],
                                o = i.player,
                                s = o.config.listeners[a],
                                l = $(s);
                            Ie.call(
                                o,
                                e,
                                t,
                                function (e) {
                                    return i.proxy(e, n, a);
                                },
                                r && !l
                            );
                        }),
                        a(this, 'controls', function () {
                            var e = i.player,
                                t = e.elements,
                                n = le.isIE ? 'change' : 'input';
                            if (
                                (t.buttons.play &&
                                    Array.from(t.buttons.play).forEach(
                                        function (t) {
                                            i.bind(
                                                t,
                                                'click',
                                                function () {
                                                    qe(e.togglePlay());
                                                },
                                                'play'
                                            );
                                        }
                                    ),
                                i.bind(
                                    t.buttons.restart,
                                    'click',
                                    e.restart,
                                    'restart'
                                ),
                                i.bind(
                                    t.buttons.rewind,
                                    'click',
                                    function () {
                                        (e.lastSeekTime = Date.now()),
                                            e.rewind();
                                    },
                                    'rewind'
                                ),
                                i.bind(
                                    t.buttons.fastForward,
                                    'click',
                                    function () {
                                        (e.lastSeekTime = Date.now()),
                                            e.forward();
                                    },
                                    'fastForward'
                                ),
                                i.bind(
                                    t.buttons.mute,
                                    'click',
                                    function () {
                                        e.muted = !e.muted;
                                    },
                                    'mute'
                                ),
                                i.bind(
                                    t.buttons.captions,
                                    'click',
                                    function () {
                                        return e.toggleCaptions();
                                    }
                                ),
                                i.bind(
                                    t.buttons.download,
                                    'click',
                                    function () {
                                        _e.call(e, e.media, 'download');
                                    },
                                    'download'
                                ),
                                i.bind(
                                    t.buttons.fullscreen,
                                    'click',
                                    function () {
                                        e.fullscreen.toggle();
                                    },
                                    'fullscreen'
                                ),
                                i.bind(
                                    t.buttons.pip,
                                    'click',
                                    function () {
                                        e.pip = 'toggle';
                                    },
                                    'pip'
                                ),
                                i.bind(
                                    t.buttons.airplay,
                                    'click',
                                    e.airplay,
                                    'airplay'
                                ),
                                i.bind(
                                    t.buttons.settings,
                                    'click',
                                    function (t) {
                                        t.stopPropagation(),
                                            t.preventDefault(),
                                            at.toggleMenu.call(e, t);
                                    },
                                    null,
                                    !1
                                ),
                                i.bind(
                                    t.buttons.settings,
                                    'keyup',
                                    function (t) {
                                        var n = t.which;
                                        [13, 32].includes(n) &&
                                            (13 !== n
                                                ? (t.preventDefault(),
                                                  t.stopPropagation(),
                                                  at.toggleMenu.call(e, t))
                                                : at.focusFirstMenuItem.call(
                                                      e,
                                                      null,
                                                      !0
                                                  ));
                                    },
                                    null,
                                    !1
                                ),
                                i.bind(
                                    t.settings.menu,
                                    'keydown',
                                    function (t) {
                                        27 === t.which &&
                                            at.toggleMenu.call(e, t);
                                    }
                                ),
                                i.bind(
                                    t.inputs.seek,
                                    'mousedown mousemove',
                                    function (e) {
                                        var n =
                                                t.progress.getBoundingClientRect(),
                                            i =
                                                (100 / n.width) *
                                                (e.pageX - n.left);
                                        e.currentTarget.setAttribute(
                                            'seek-value',
                                            i
                                        );
                                    }
                                ),
                                i.bind(
                                    t.inputs.seek,
                                    'mousedown mouseup keydown keyup touchstart touchend',
                                    function (t) {
                                        var n = t.currentTarget,
                                            i = t.keyCode ? t.keyCode : t.which,
                                            a = 'play-on-seeked';
                                        if (!te(t) || 39 === i || 37 === i) {
                                            e.lastSeekTime = Date.now();
                                            var r = n.hasAttribute(a),
                                                o = [
                                                    'mouseup',
                                                    'touchend',
                                                    'keyup',
                                                ].includes(t.type);
                                            r && o
                                                ? (n.removeAttribute(a),
                                                  qe(e.play()))
                                                : !o &&
                                                  e.playing &&
                                                  (n.setAttribute(a, ''),
                                                  e.pause());
                                        }
                                    }
                                ),
                                le.isIos)
                            ) {
                                var a = Ce.call(e, 'input[type="range"]');
                                Array.from(a).forEach(function (e) {
                                    return i.bind(e, n, function (e) {
                                        return se(e.target);
                                    });
                                });
                            }
                            i.bind(
                                t.inputs.seek,
                                n,
                                function (t) {
                                    var n = t.currentTarget,
                                        i = n.getAttribute('seek-value');
                                    re(i) && (i = n.value),
                                        n.removeAttribute('seek-value'),
                                        (e.currentTime =
                                            (i / n.max) * e.duration);
                                },
                                'seek'
                            ),
                                i.bind(
                                    t.progress,
                                    'mouseenter mouseleave mousemove',
                                    function (t) {
                                        return at.updateSeekTooltip.call(e, t);
                                    }
                                ),
                                i.bind(
                                    t.progress,
                                    'mousemove touchmove',
                                    function (t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.startMove(t);
                                    }
                                ),
                                i.bind(
                                    t.progress,
                                    'mouseleave touchend click',
                                    function () {
                                        var t = e.previewThumbnails;
                                        t && t.loaded && t.endMove(!1, !0);
                                    }
                                ),
                                i.bind(
                                    t.progress,
                                    'mousedown touchstart',
                                    function (t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.startScrubbing(t);
                                    }
                                ),
                                i.bind(
                                    t.progress,
                                    'mouseup touchend',
                                    function (t) {
                                        var n = e.previewThumbnails;
                                        n && n.loaded && n.endScrubbing(t);
                                    }
                                ),
                                le.isWebkit &&
                                    Array.from(
                                        Ce.call(e, 'input[type="range"]')
                                    ).forEach(function (t) {
                                        i.bind(t, 'input', function (t) {
                                            return at.updateRangeFill.call(
                                                e,
                                                t.target
                                            );
                                        });
                                    }),
                                e.config.toggleInvert &&
                                    !Z(t.display.duration) &&
                                    i.bind(
                                        t.display.currentTime,
                                        'click',
                                        function () {
                                            0 !== e.currentTime &&
                                                ((e.config.invertTime =
                                                    !e.config.invertTime),
                                                at.timeUpdate.call(e));
                                        }
                                    ),
                                i.bind(
                                    t.inputs.volume,
                                    n,
                                    function (t) {
                                        e.volume = t.target.value;
                                    },
                                    'volume'
                                ),
                                i.bind(
                                    t.controls,
                                    'mouseenter mouseleave',
                                    function (n) {
                                        t.controls.hover =
                                            !e.touch && 'mouseenter' === n.type;
                                    }
                                ),
                                t.fullscreen &&
                                    Array.from(t.fullscreen.children)
                                        .filter(function (e) {
                                            return !e.contains(t.container);
                                        })
                                        .forEach(function (n) {
                                            i.bind(
                                                n,
                                                'mouseenter mouseleave',
                                                function (n) {
                                                    t.controls.hover =
                                                        !e.touch &&
                                                        'mouseenter' === n.type;
                                                }
                                            );
                                        }),
                                i.bind(
                                    t.controls,
                                    'mousedown mouseup touchstart touchend touchcancel',
                                    function (e) {
                                        t.controls.pressed = [
                                            'mousedown',
                                            'touchstart',
                                        ].includes(e.type);
                                    }
                                ),
                                i.bind(t.controls, 'focusin', function () {
                                    var n = e.config,
                                        a = e.timers;
                                    we(
                                        t.controls,
                                        n.classNames.noTransition,
                                        !0
                                    ),
                                        bt.toggleControls.call(e, !0),
                                        setTimeout(function () {
                                            we(
                                                t.controls,
                                                n.classNames.noTransition,
                                                !1
                                            );
                                        }, 0);
                                    var r = i.touch ? 3e3 : 4e3;
                                    clearTimeout(a.controls),
                                        (a.controls = setTimeout(function () {
                                            return bt.toggleControls.call(
                                                e,
                                                !1
                                            );
                                        }, r));
                                }),
                                i.bind(
                                    t.inputs.volume,
                                    'wheel',
                                    function (t) {
                                        var n =
                                                t.webkitDirectionInvertedFromDevice,
                                            i = l(
                                                [t.deltaX, -t.deltaY].map(
                                                    function (e) {
                                                        return n ? -e : e;
                                                    }
                                                ),
                                                2
                                            ),
                                            a = i[0],
                                            r = i[1],
                                            o = Math.sign(
                                                Math.abs(a) > Math.abs(r)
                                                    ? a
                                                    : r
                                            );
                                        e.increaseVolume(o / 50);
                                        var s = e.media.volume;
                                        ((1 === o && s < 1) ||
                                            (-1 === o && s > 0)) &&
                                            t.preventDefault();
                                    },
                                    'volume',
                                    !1
                                );
                        }),
                        (this.player = n),
                        (this.lastKey = null),
                        (this.focusTimer = null),
                        (this.lastKeyDown = null),
                        (this.handleKey = this.handleKey.bind(this)),
                        (this.toggleMenu = this.toggleMenu.bind(this)),
                        (this.setTabFocus = this.setTabFocus.bind(this)),
                        (this.firstTouch = this.firstTouch.bind(this));
                }
                return (
                    i(e, [
                        {
                            key: 'handleKey',
                            value: function (e) {
                                var t = this.player,
                                    n = t.elements,
                                    i = e.keyCode ? e.keyCode : e.which,
                                    a = 'keydown' === e.type,
                                    r = a && i === this.lastKey;
                                if (
                                    !(
                                        e.altKey ||
                                        e.ctrlKey ||
                                        e.metaKey ||
                                        e.shiftKey
                                    ) &&
                                    Y(i)
                                ) {
                                    if (a) {
                                        var o = document.activeElement;
                                        if (Z(o)) {
                                            var s = t.config.selectors.editable;
                                            if (o !== n.inputs.seek && Te(o, s))
                                                return;
                                            if (
                                                32 === e.which &&
                                                Te(
                                                    o,
                                                    'button, [role^="menuitem"]'
                                                )
                                            )
                                                return;
                                        }
                                        switch (
                                            ([
                                                32, 37, 38, 39, 40, 48, 49, 50,
                                                51, 52, 53, 54, 56, 57, 67, 70,
                                                73, 75, 76, 77, 79,
                                            ].includes(i) &&
                                                (e.preventDefault(),
                                                e.stopPropagation()),
                                            i)
                                        ) {
                                            case 48:
                                            case 49:
                                            case 50:
                                            case 51:
                                            case 52:
                                            case 53:
                                            case 54:
                                            case 55:
                                            case 56:
                                            case 57:
                                                r ||
                                                    (t.currentTime =
                                                        (t.duration / 10) *
                                                        (i - 48));
                                                break;
                                            case 32:
                                            case 75:
                                                r || qe(t.togglePlay());
                                                break;
                                            case 38:
                                                t.increaseVolume(0.1);
                                                break;
                                            case 40:
                                                t.decreaseVolume(0.1);
                                                break;
                                            case 77:
                                                r || (t.muted = !t.muted);
                                                break;
                                            case 39:
                                                t.forward();
                                                break;
                                            case 37:
                                                t.rewind();
                                                break;
                                            case 70:
                                                t.fullscreen.toggle();
                                                break;
                                            case 67:
                                                r || t.toggleCaptions();
                                                break;
                                            case 76:
                                                t.loop = !t.loop;
                                        }
                                        27 === i &&
                                            !t.fullscreen.usingNative &&
                                            t.fullscreen.active &&
                                            t.fullscreen.toggle(),
                                            (this.lastKey = i);
                                    } else this.lastKey = null;
                                }
                            },
                        },
                        {
                            key: 'toggleMenu',
                            value: function (e) {
                                at.toggleMenu.call(this.player, e);
                            },
                        },
                    ]),
                    e
                );
            })();
        'undefined' != typeof globalThis
            ? globalThis
            : 'undefined' != typeof window
            ? window
            : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self && self;
        var wt = (function (e, t) {
            return e((t = { exports: {} }), t.exports), t.exports;
        })(function (e, t) {
            e.exports = (function () {
                var e = function () {},
                    t = {},
                    n = {},
                    i = {};
                function a(e, t) {
                    e = e.push ? e : [e];
                    var a,
                        r,
                        o,
                        s = [],
                        l = e.length,
                        c = l;
                    for (
                        a = function (e, n) {
                            n.length && s.push(e), --c || t(s);
                        };
                        l--;

                    )
                        (r = e[l]),
                            (o = n[r]) ? a(r, o) : (i[r] = i[r] || []).push(a);
                }
                function r(e, t) {
                    if (e) {
                        var a = i[e];
                        if (((n[e] = t), a))
                            for (; a.length; ) a[0](e, t), a.splice(0, 1);
                    }
                }
                function o(t, n) {
                    t.call && (t = { success: t }),
                        n.length ? (t.error || e)(n) : (t.success || e)(t);
                }
                function s(t, n, i, a) {
                    var r,
                        o,
                        l = document,
                        c = i.async,
                        u = (i.numRetries || 0) + 1,
                        d = i.before || e,
                        h = t.replace(/[\?|#].*$/, ''),
                        m = t.replace(/^(css|img)!/, '');
                    (a = a || 0),
                        /(^css!|\.css$)/.test(h)
                            ? (((o = l.createElement('link')).rel =
                                  'stylesheet'),
                              (o.href = m),
                              (r = 'hideFocus' in o) &&
                                  o.relList &&
                                  ((r = 0),
                                  (o.rel = 'preload'),
                                  (o.as = 'style')))
                            : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h)
                            ? ((o = l.createElement('img')).src = m)
                            : (((o = l.createElement('script')).src = t),
                              (o.async = void 0 === c || c)),
                        (o.onload =
                            o.onerror =
                            o.onbeforeload =
                                function (e) {
                                    var l = e.type[0];
                                    if (r)
                                        try {
                                            o.sheet.cssText.length || (l = 'e');
                                        } catch (e) {
                                            18 != e.code && (l = 'e');
                                        }
                                    if ('e' == l) {
                                        if ((a += 1) < u) return s(t, n, i, a);
                                    } else if (
                                        'preload' == o.rel &&
                                        'style' == o.as
                                    )
                                        return (o.rel = 'stylesheet');
                                    n(t, l, e.defaultPrevented);
                                }),
                        !1 !== d(t, o) && l.head.appendChild(o);
                }
                function l(e, t, n) {
                    var i,
                        a,
                        r = (e = e.push ? e : [e]).length,
                        o = r,
                        l = [];
                    for (
                        i = function (e, n, i) {
                            if (('e' == n && l.push(e), 'b' == n)) {
                                if (!i) return;
                                l.push(e);
                            }
                            --r || t(l);
                        },
                            a = 0;
                        a < o;
                        a++
                    )
                        s(e[a], i, n);
                }
                function c(e, n, i) {
                    var a, s;
                    if ((n && n.trim && (a = n), (s = (a ? i : n) || {}), a)) {
                        if (a in t) throw 'LoadJS';
                        t[a] = !0;
                    }
                    function c(t, n) {
                        l(
                            e,
                            function (e) {
                                o(s, e),
                                    t && o({ success: t, error: n }, e),
                                    r(a, e);
                            },
                            s
                        );
                    }
                    if (s.returnPromise) return new Promise(c);
                    c();
                }
                return (
                    (c.ready = function (e, t) {
                        return (
                            a(e, function (e) {
                                o(t, e);
                            }),
                            c
                        );
                    }),
                    (c.done = function (e) {
                        r(e, []);
                    }),
                    (c.reset = function () {
                        (t = {}), (n = {}), (i = {});
                    }),
                    (c.isDefined = function (e) {
                        return e in t;
                    }),
                    c
                );
            })();
        });
        function kt(e) {
            return new Promise(function (t, n) {
                wt(e, { success: t, error: n });
            });
        }
        function Tt(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                    ((this.media.paused = !e),
                    _e.call(this, this.media, e ? 'play' : 'pause'));
        }
        var Ct = {
            setup: function () {
                var e = this;
                we(e.elements.wrapper, e.config.classNames.embed, !0),
                    (e.options.speed = e.config.speed.options),
                    Ve.call(e),
                    K(window.Vimeo)
                        ? Ct.ready.call(e)
                        : kt(e.config.urls.vimeo.sdk)
                              .then(function () {
                                  Ct.ready.call(e);
                              })
                              .catch(function (t) {
                                  e.debug.warn(
                                      'Vimeo SDK (player.js) failed to load',
                                      t
                                  );
                              });
            },
            ready: function () {
                var e = this,
                    t = this,
                    n = t.config.vimeo,
                    i = n.premium,
                    a = n.referrerPolicy,
                    r = s(n, ['premium', 'referrerPolicy']);
                i && Object.assign(r, { controls: !1, sidedock: !1 });
                var c = ot(
                        o(
                            {
                                loop: t.config.loop.active,
                                autoplay: t.autoplay,
                                muted: t.muted,
                                gesture: 'media',
                                playsinline: !this.config.fullscreen.iosNative,
                            },
                            r
                        )
                    ),
                    u = t.media.getAttribute('src');
                re(u) &&
                    (u = t.media.getAttribute(t.config.attributes.embed.id));
                var d,
                    h = re((d = u))
                        ? null
                        : Y(Number(d))
                        ? d
                        : d.match(/^.*(vimeo.com\/|video\/)(\d+).*/)
                        ? RegExp.$2
                        : d,
                    m = me('iframe'),
                    p = We(t.config.urls.vimeo.iframe, h, c);
                if (
                    (m.setAttribute('src', p),
                    m.setAttribute('allowfullscreen', ''),
                    m.setAttribute(
                        'allow',
                        ['autoplay', 'fullscreen', 'picture-in-picture'].join(
                            '; '
                        )
                    ),
                    re(a) || m.setAttribute('referrerPolicy', a),
                    i || !n.customControls)
                )
                    m.setAttribute('data-poster', t.poster),
                        (t.media = ye(m, t.media));
                else {
                    var f = me('div', {
                        class: t.config.classNames.embedContainer,
                        'data-poster': t.poster,
                    });
                    f.appendChild(m), (t.media = ye(f, t.media));
                }
                n.customControls ||
                    Ge(We(t.config.urls.vimeo.api, p)).then(function (e) {
                        !re(e) &&
                            e.thumbnail_url &&
                            bt.setPoster
                                .call(t, e.thumbnail_url)
                                .catch(function () {});
                    }),
                    (t.embed = new window.Vimeo.Player(m, {
                        autopause: t.config.autopause,
                        muted: t.muted,
                    })),
                    (t.media.paused = !0),
                    (t.media.currentTime = 0),
                    t.supported.ui && t.embed.disableTextTrack(),
                    (t.media.play = function () {
                        return Tt.call(t, !0), t.embed.play();
                    }),
                    (t.media.pause = function () {
                        return Tt.call(t, !1), t.embed.pause();
                    }),
                    (t.media.stop = function () {
                        t.pause(), (t.currentTime = 0);
                    });
                var g = t.media.currentTime;
                Object.defineProperty(t.media, 'currentTime', {
                    get: function () {
                        return g;
                    },
                    set: function (e) {
                        var n = t.embed,
                            i = t.media,
                            a = t.paused,
                            r = t.volume,
                            o = a && !n.hasPlayed;
                        (i.seeking = !0),
                            _e.call(t, i, 'seeking'),
                            Promise.resolve(o && n.setVolume(0))
                                .then(function () {
                                    return n.setCurrentTime(e);
                                })
                                .then(function () {
                                    return o && n.pause();
                                })
                                .then(function () {
                                    return o && n.setVolume(r);
                                })
                                .catch(function () {});
                    },
                });
                var y = t.config.speed.selected;
                Object.defineProperty(t.media, 'playbackRate', {
                    get: function () {
                        return y;
                    },
                    set: function (e) {
                        t.embed
                            .setPlaybackRate(e)
                            .then(function () {
                                (y = e), _e.call(t, t.media, 'ratechange');
                            })
                            .catch(function () {
                                t.options.speed = [1];
                            });
                    },
                });
                var b = t.config.volume;
                Object.defineProperty(t.media, 'volume', {
                    get: function () {
                        return b;
                    },
                    set: function (e) {
                        t.embed.setVolume(e).then(function () {
                            (b = e), _e.call(t, t.media, 'volumechange');
                        });
                    },
                });
                var v = t.config.muted;
                Object.defineProperty(t.media, 'muted', {
                    get: function () {
                        return v;
                    },
                    set: function (e) {
                        var n = !!X(e) && e;
                        t.embed
                            .setVolume(n ? 0 : t.config.volume)
                            .then(function () {
                                (v = n), _e.call(t, t.media, 'volumechange');
                            });
                    },
                });
                var w,
                    k = t.config.loop;
                Object.defineProperty(t.media, 'loop', {
                    get: function () {
                        return k;
                    },
                    set: function (e) {
                        var n = X(e) ? e : t.config.loop.active;
                        t.embed.setLoop(n).then(function () {
                            k = n;
                        });
                    },
                }),
                    t.embed
                        .getVideoUrl()
                        .then(function (e) {
                            (w = e), at.setDownloadUrl.call(t);
                        })
                        .catch(function (t) {
                            e.debug.warn(t);
                        }),
                    Object.defineProperty(t.media, 'currentSrc', {
                        get: function () {
                            return w;
                        },
                    }),
                    Object.defineProperty(t.media, 'ended', {
                        get: function () {
                            return t.currentTime === t.duration;
                        },
                    }),
                    Promise.all([
                        t.embed.getVideoWidth(),
                        t.embed.getVideoHeight(),
                    ]).then(function (n) {
                        var i = l(n, 2),
                            a = i[0],
                            r = i[1];
                        (t.embed.ratio = [a, r]), Ve.call(e);
                    }),
                    t.embed.setAutopause(t.config.autopause).then(function (e) {
                        t.config.autopause = e;
                    }),
                    t.embed.getVideoTitle().then(function (n) {
                        (t.config.title = n), bt.setTitle.call(e);
                    }),
                    t.embed.getCurrentTime().then(function (e) {
                        (g = e), _e.call(t, t.media, 'timeupdate');
                    }),
                    t.embed.getDuration().then(function (e) {
                        (t.media.duration = e),
                            _e.call(t, t.media, 'durationchange');
                    }),
                    t.embed.getTextTracks().then(function (e) {
                        (t.media.textTracks = e), st.setup.call(t);
                    }),
                    t.embed.on('cuechange', function (e) {
                        var n = e.cues,
                            i = (void 0 === n ? [] : n).map(function (e) {
                                return (function (e) {
                                    var t = document.createDocumentFragment(),
                                        n = document.createElement('div');
                                    return (
                                        t.appendChild(n),
                                        (n.innerHTML = e),
                                        t.firstChild.innerText
                                    );
                                })(e.text);
                            });
                        st.updateCues.call(t, i);
                    }),
                    t.embed.on('loaded', function () {
                        (t.embed.getPaused().then(function (e) {
                            Tt.call(t, !e), e || _e.call(t, t.media, 'playing');
                        }),
                        Z(t.embed.element) && t.supported.ui) &&
                            t.embed.element.setAttribute('tabindex', -1);
                    }),
                    t.embed.on('bufferstart', function () {
                        _e.call(t, t.media, 'waiting');
                    }),
                    t.embed.on('bufferend', function () {
                        _e.call(t, t.media, 'playing');
                    }),
                    t.embed.on('play', function () {
                        Tt.call(t, !0), _e.call(t, t.media, 'playing');
                    }),
                    t.embed.on('pause', function () {
                        Tt.call(t, !1);
                    }),
                    t.embed.on('timeupdate', function (e) {
                        (t.media.seeking = !1),
                            (g = e.seconds),
                            _e.call(t, t.media, 'timeupdate');
                    }),
                    t.embed.on('progress', function (e) {
                        (t.media.buffered = e.percent),
                            _e.call(t, t.media, 'progress'),
                            1 === parseInt(e.percent, 10) &&
                                _e.call(t, t.media, 'canplaythrough'),
                            t.embed.getDuration().then(function (e) {
                                e !== t.media.duration &&
                                    ((t.media.duration = e),
                                    _e.call(t, t.media, 'durationchange'));
                            });
                    }),
                    t.embed.on('seeked', function () {
                        (t.media.seeking = !1), _e.call(t, t.media, 'seeked');
                    }),
                    t.embed.on('ended', function () {
                        (t.media.paused = !0), _e.call(t, t.media, 'ended');
                    }),
                    t.embed.on('error', function (e) {
                        (t.media.error = e), _e.call(t, t.media, 'error');
                    }),
                    n.customControls &&
                        setTimeout(function () {
                            return bt.build.call(t);
                        }, 0);
            },
        };
        function At(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0),
                this.media.paused === e &&
                    ((this.media.paused = !e),
                    _e.call(this, this.media, e ? 'play' : 'pause'));
        }
        function St(e) {
            return e.noCookie
                ? 'https://www.youtube-nocookie.com'
                : 'http:' === window.location.protocol
                ? 'http://www.youtube.com'
                : void 0;
        }
        var Pt = {
                setup: function () {
                    var e = this;
                    if (
                        (we(
                            this.elements.wrapper,
                            this.config.classNames.embed,
                            !0
                        ),
                        K(window.YT) && $(window.YT.Player))
                    )
                        Pt.ready.call(this);
                    else {
                        var t = window.onYouTubeIframeAPIReady;
                        (window.onYouTubeIframeAPIReady = function () {
                            $(t) && t(), Pt.ready.call(e);
                        }),
                            kt(this.config.urls.youtube.sdk).catch(function (
                                t
                            ) {
                                e.debug.warn('YouTube API failed to load', t);
                            });
                    }
                },
                getTitle: function (e) {
                    var t = this;
                    Ge(We(this.config.urls.youtube.api, e))
                        .then(function (e) {
                            if (K(e)) {
                                var n = e.title,
                                    i = e.height,
                                    a = e.width;
                                (t.config.title = n),
                                    bt.setTitle.call(t),
                                    (t.embed.ratio = [a, i]);
                            }
                            Ve.call(t);
                        })
                        .catch(function () {
                            Ve.call(t);
                        });
                },
                ready: function () {
                    var e = this,
                        t = e.config.youtube,
                        n = e.media && e.media.getAttribute('id');
                    if (re(n) || !n.startsWith('youtube-')) {
                        var i = e.media.getAttribute('src');
                        re(i) &&
                            (i = e.media.getAttribute(
                                this.config.attributes.embed.id
                            ));
                        var a,
                            r,
                            o = re((a = i))
                                ? null
                                : a.match(
                                      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
                                  )
                                ? RegExp.$2
                                : a,
                            s = me('div', {
                                id:
                                    ((r = e.provider),
                                    ''
                                        .concat(r, '-')
                                        .concat(
                                            Math.floor(1e4 * Math.random())
                                        )),
                                'data-poster': t.customControls
                                    ? e.poster
                                    : void 0,
                            });
                        if (((e.media = ye(s, e.media)), t.customControls)) {
                            var l = function (e) {
                                return 'https://i.ytimg.com/vi/'
                                    .concat(o, '/')
                                    .concat(e, 'default.jpg');
                            };
                            yt(l('maxres'), 121)
                                .catch(function () {
                                    return yt(l('sd'), 121);
                                })
                                .catch(function () {
                                    return yt(l('hq'));
                                })
                                .then(function (t) {
                                    return bt.setPoster.call(e, t.src);
                                })
                                .then(function (t) {
                                    t.includes('maxres') ||
                                        (e.elements.poster.style.backgroundSize =
                                            'cover');
                                })
                                .catch(function () {});
                        }
                        e.embed = new window.YT.Player(e.media, {
                            videoId: o,
                            host: St(t),
                            playerVars: ue(
                                {},
                                {
                                    autoplay: e.config.autoplay ? 1 : 0,
                                    hl: e.config.hl,
                                    controls:
                                        e.supported.ui && t.customControls
                                            ? 0
                                            : 1,
                                    disablekb: 1,
                                    playsinline: e.config.fullscreen.iosNative
                                        ? 0
                                        : 1,
                                    cc_load_policy: e.captions.active ? 1 : 0,
                                    cc_lang_pref: e.config.captions.language,
                                    widget_referrer: window
                                        ? window.location.href
                                        : null,
                                },
                                t
                            ),
                            events: {
                                onError: function (t) {
                                    if (!e.media.error) {
                                        var n = t.data,
                                            i =
                                                {
                                                    2: 'The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.',
                                                    5: 'The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.',
                                                    100: 'The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.',
                                                    101: 'The owner of the requested video does not allow it to be played in embedded players.',
                                                    150: 'The owner of the requested video does not allow it to be played in embedded players.',
                                                }[n] ||
                                                'An unknown error occured';
                                        (e.media.error = {
                                            code: n,
                                            message: i,
                                        }),
                                            _e.call(e, e.media, 'error');
                                    }
                                },
                                onPlaybackRateChange: function (t) {
                                    var n = t.target;
                                    (e.media.playbackRate =
                                        n.getPlaybackRate()),
                                        _e.call(e, e.media, 'ratechange');
                                },
                                onReady: function (n) {
                                    if (!$(e.media.play)) {
                                        var i = n.target;
                                        Pt.getTitle.call(e, o),
                                            (e.media.play = function () {
                                                At.call(e, !0), i.playVideo();
                                            }),
                                            (e.media.pause = function () {
                                                At.call(e, !1), i.pauseVideo();
                                            }),
                                            (e.media.stop = function () {
                                                i.stopVideo();
                                            }),
                                            (e.media.duration =
                                                i.getDuration()),
                                            (e.media.paused = !0),
                                            (e.media.currentTime = 0),
                                            Object.defineProperty(
                                                e.media,
                                                'currentTime',
                                                {
                                                    get: function () {
                                                        return Number(
                                                            i.getCurrentTime()
                                                        );
                                                    },
                                                    set: function (t) {
                                                        e.paused &&
                                                            !e.embed
                                                                .hasPlayed &&
                                                            e.embed.mute(),
                                                            (e.media.seeking =
                                                                !0),
                                                            _e.call(
                                                                e,
                                                                e.media,
                                                                'seeking'
                                                            ),
                                                            i.seekTo(t);
                                                    },
                                                }
                                            ),
                                            Object.defineProperty(
                                                e.media,
                                                'playbackRate',
                                                {
                                                    get: function () {
                                                        return i.getPlaybackRate();
                                                    },
                                                    set: function (e) {
                                                        i.setPlaybackRate(e);
                                                    },
                                                }
                                            );
                                        var a = e.config.volume;
                                        Object.defineProperty(
                                            e.media,
                                            'volume',
                                            {
                                                get: function () {
                                                    return a;
                                                },
                                                set: function (t) {
                                                    (a = t),
                                                        i.setVolume(100 * a),
                                                        _e.call(
                                                            e,
                                                            e.media,
                                                            'volumechange'
                                                        );
                                                },
                                            }
                                        );
                                        var r = e.config.muted;
                                        Object.defineProperty(
                                            e.media,
                                            'muted',
                                            {
                                                get: function () {
                                                    return r;
                                                },
                                                set: function (t) {
                                                    var n = X(t) ? t : r;
                                                    (r = n),
                                                        i[
                                                            n
                                                                ? 'mute'
                                                                : 'unMute'
                                                        ](),
                                                        i.setVolume(100 * a),
                                                        _e.call(
                                                            e,
                                                            e.media,
                                                            'volumechange'
                                                        );
                                                },
                                            }
                                        ),
                                            Object.defineProperty(
                                                e.media,
                                                'currentSrc',
                                                {
                                                    get: function () {
                                                        return i.getVideoUrl();
                                                    },
                                                }
                                            ),
                                            Object.defineProperty(
                                                e.media,
                                                'ended',
                                                {
                                                    get: function () {
                                                        return (
                                                            e.currentTime ===
                                                            e.duration
                                                        );
                                                    },
                                                }
                                            );
                                        var s = i.getAvailablePlaybackRates();
                                        (e.options.speed = s.filter(function (
                                            t
                                        ) {
                                            return e.config.speed.options.includes(
                                                t
                                            );
                                        })),
                                            e.supported.ui &&
                                                t.customControls &&
                                                e.media.setAttribute(
                                                    'tabindex',
                                                    -1
                                                ),
                                            _e.call(e, e.media, 'timeupdate'),
                                            _e.call(
                                                e,
                                                e.media,
                                                'durationchange'
                                            ),
                                            clearInterval(e.timers.buffering),
                                            (e.timers.buffering = setInterval(
                                                function () {
                                                    (e.media.buffered =
                                                        i.getVideoLoadedFraction()),
                                                        (null ===
                                                            e.media
                                                                .lastBuffered ||
                                                            e.media
                                                                .lastBuffered <
                                                                e.media
                                                                    .buffered) &&
                                                            _e.call(
                                                                e,
                                                                e.media,
                                                                'progress'
                                                            ),
                                                        (e.media.lastBuffered =
                                                            e.media.buffered),
                                                        1 ===
                                                            e.media.buffered &&
                                                            (clearInterval(
                                                                e.timers
                                                                    .buffering
                                                            ),
                                                            _e.call(
                                                                e,
                                                                e.media,
                                                                'canplaythrough'
                                                            ));
                                                },
                                                200
                                            )),
                                            t.customControls &&
                                                setTimeout(function () {
                                                    return bt.build.call(e);
                                                }, 50);
                                    }
                                },
                                onStateChange: function (n) {
                                    var i = n.target;
                                    switch (
                                        (clearInterval(e.timers.playing),
                                        e.media.seeking &&
                                            [1, 2].includes(n.data) &&
                                            ((e.media.seeking = !1),
                                            _e.call(e, e.media, 'seeked')),
                                        n.data)
                                    ) {
                                        case -1:
                                            _e.call(e, e.media, 'timeupdate'),
                                                (e.media.buffered =
                                                    i.getVideoLoadedFraction()),
                                                _e.call(e, e.media, 'progress');
                                            break;
                                        case 0:
                                            At.call(e, !1),
                                                e.media.loop
                                                    ? (i.stopVideo(),
                                                      i.playVideo())
                                                    : _e.call(
                                                          e,
                                                          e.media,
                                                          'ended'
                                                      );
                                            break;
                                        case 1:
                                            t.customControls &&
                                            !e.config.autoplay &&
                                            e.media.paused &&
                                            !e.embed.hasPlayed
                                                ? e.media.pause()
                                                : (At.call(e, !0),
                                                  _e.call(
                                                      e,
                                                      e.media,
                                                      'playing'
                                                  ),
                                                  (e.timers.playing =
                                                      setInterval(function () {
                                                          _e.call(
                                                              e,
                                                              e.media,
                                                              'timeupdate'
                                                          );
                                                      }, 50)),
                                                  e.media.duration !==
                                                      i.getDuration() &&
                                                      ((e.media.duration =
                                                          i.getDuration()),
                                                      _e.call(
                                                          e,
                                                          e.media,
                                                          'durationchange'
                                                      )));
                                            break;
                                        case 2:
                                            e.muted || e.embed.unMute(),
                                                At.call(e, !1);
                                            break;
                                        case 3:
                                            _e.call(e, e.media, 'waiting');
                                    }
                                    _e.call(
                                        e,
                                        e.elements.container,
                                        'statechange',
                                        !1,
                                        { code: n.data }
                                    );
                                },
                            },
                        });
                    }
                },
            },
            Et = {
                setup: function () {
                    this.media
                        ? (we(
                              this.elements.container,
                              this.config.classNames.type.replace(
                                  '{0}',
                                  this.type
                              ),
                              !0
                          ),
                          we(
                              this.elements.container,
                              this.config.classNames.provider.replace(
                                  '{0}',
                                  this.provider
                              ),
                              !0
                          ),
                          this.isEmbed &&
                              we(
                                  this.elements.container,
                                  this.config.classNames.type.replace(
                                      '{0}',
                                      'video'
                                  ),
                                  !0
                              ),
                          this.isVideo &&
                              ((this.elements.wrapper = me('div', {
                                  class: this.config.classNames.video,
                              })),
                              de(this.media, this.elements.wrapper),
                              (this.elements.poster = me('div', {
                                  class: this.config.classNames.poster,
                                  hidden: '',
                              })),
                              this.elements.wrapper.appendChild(
                                  this.elements.poster
                              )),
                          this.isHTML5
                              ? Be.setup.call(this)
                              : this.isYouTube
                              ? Pt.setup.call(this)
                              : this.isVimeo && Ct.setup.call(this))
                        : this.debug.warn('No media element found!');
                },
            },
            Nt = (function () {
                function e(n) {
                    var i = this;
                    t(this, e),
                        a(this, 'load', function () {
                            i.enabled &&
                                (K(window.google) && K(window.google.ima)
                                    ? i.ready()
                                    : kt(i.player.config.urls.googleIMA.sdk)
                                          .then(function () {
                                              i.ready();
                                          })
                                          .catch(function () {
                                              i.trigger(
                                                  'error',
                                                  new Error(
                                                      'Google IMA SDK failed to load'
                                                  )
                                              );
                                          }));
                        }),
                        a(this, 'ready', function () {
                            var e;
                            i.enabled ||
                                ((e = i).manager && e.manager.destroy(),
                                e.elements.displayContainer &&
                                    e.elements.displayContainer.destroy(),
                                e.elements.container.remove()),
                                i.startSafetyTimer(12e3, 'ready()'),
                                i.managerPromise.then(function () {
                                    i.clearSafetyTimer('onAdsManagerLoaded()');
                                }),
                                i.listeners(),
                                i.setupIMA();
                        }),
                        a(this, 'setupIMA', function () {
                            (i.elements.container = me('div', {
                                class: i.player.config.classNames.ads,
                            })),
                                i.player.elements.container.appendChild(
                                    i.elements.container
                                ),
                                google.ima.settings.setVpaidMode(
                                    google.ima.ImaSdkSettings.VpaidMode.ENABLED
                                ),
                                google.ima.settings.setLocale(
                                    i.player.config.ads.language
                                ),
                                google.ima.settings.setDisableCustomPlaybackForIOS10Plus(
                                    i.player.config.playsinline
                                ),
                                (i.elements.displayContainer =
                                    new google.ima.AdDisplayContainer(
                                        i.elements.container,
                                        i.player.media
                                    )),
                                (i.loader = new google.ima.AdsLoader(
                                    i.elements.displayContainer
                                )),
                                i.loader.addEventListener(
                                    google.ima.AdsManagerLoadedEvent.Type
                                        .ADS_MANAGER_LOADED,
                                    function (e) {
                                        return i.onAdsManagerLoaded(e);
                                    },
                                    !1
                                ),
                                i.loader.addEventListener(
                                    google.ima.AdErrorEvent.Type.AD_ERROR,
                                    function (e) {
                                        return i.onAdError(e);
                                    },
                                    !1
                                ),
                                i.requestAds();
                        }),
                        a(this, 'requestAds', function () {
                            var e = i.player.elements.container;
                            try {
                                var t = new google.ima.AdsRequest();
                                (t.adTagUrl = i.tagUrl),
                                    (t.linearAdSlotWidth = e.offsetWidth),
                                    (t.linearAdSlotHeight = e.offsetHeight),
                                    (t.nonLinearAdSlotWidth = e.offsetWidth),
                                    (t.nonLinearAdSlotHeight = e.offsetHeight),
                                    (t.forceNonLinearFullSlot = !1),
                                    t.setAdWillPlayMuted(!i.player.muted),
                                    i.loader.requestAds(t);
                            } catch (e) {
                                i.onAdError(e);
                            }
                        }),
                        a(this, 'pollCountdown', function () {
                            var e =
                                arguments.length > 0 &&
                                void 0 !== arguments[0] &&
                                arguments[0];
                            if (!e)
                                return (
                                    clearInterval(i.countdownTimer),
                                    void i.elements.container.removeAttribute(
                                        'data-badge-text'
                                    )
                                );
                            var t = function () {
                                var e = it(
                                        Math.max(
                                            i.manager.getRemainingTime(),
                                            0
                                        )
                                    ),
                                    t = ''
                                        .concat(
                                            $e(
                                                'advertisement',
                                                i.player.config
                                            ),
                                            ' - '
                                        )
                                        .concat(e);
                                i.elements.container.setAttribute(
                                    'data-badge-text',
                                    t
                                );
                            };
                            i.countdownTimer = setInterval(t, 100);
                        }),
                        a(this, 'onAdsManagerLoaded', function (e) {
                            if (i.enabled) {
                                var t = new google.ima.AdsRenderingSettings();
                                (t.restoreCustomPlaybackStateOnAdBreakComplete =
                                    !0),
                                    (t.enablePreloading = !0),
                                    (i.manager = e.getAdsManager(i.player, t)),
                                    (i.cuePoints = i.manager.getCuePoints()),
                                    i.manager.addEventListener(
                                        google.ima.AdErrorEvent.Type.AD_ERROR,
                                        function (e) {
                                            return i.onAdError(e);
                                        }
                                    ),
                                    Object.keys(
                                        google.ima.AdEvent.Type
                                    ).forEach(function (e) {
                                        i.manager.addEventListener(
                                            google.ima.AdEvent.Type[e],
                                            function (e) {
                                                return i.onAdEvent(e);
                                            }
                                        );
                                    }),
                                    i.trigger('loaded');
                            }
                        }),
                        a(this, 'addCuePoints', function () {
                            re(i.cuePoints) ||
                                i.cuePoints.forEach(function (e) {
                                    if (
                                        0 !== e &&
                                        -1 !== e &&
                                        e < i.player.duration
                                    ) {
                                        var t = i.player.elements.progress;
                                        if (Z(t)) {
                                            var n =
                                                    (100 / i.player.duration) *
                                                    e,
                                                a = me('span', {
                                                    class: i.player.config
                                                        .classNames.cues,
                                                });
                                            (a.style.left = ''.concat(
                                                n.toString(),
                                                '%'
                                            )),
                                                t.appendChild(a);
                                        }
                                    }
                                });
                        }),
                        a(this, 'onAdEvent', function (e) {
                            var t = i.player.elements.container,
                                n = e.getAd(),
                                a = e.getAdData();
                            switch (
                                ((function (e) {
                                    _e.call(
                                        i.player,
                                        i.player.media,
                                        'ads'.concat(
                                            e.replace(/_/g, '').toLowerCase()
                                        )
                                    );
                                })(e.type),
                                e.type)
                            ) {
                                case google.ima.AdEvent.Type.LOADED:
                                    i.trigger('loaded'),
                                        i.pollCountdown(!0),
                                        n.isLinear() ||
                                            ((n.width = t.offsetWidth),
                                            (n.height = t.offsetHeight));
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    i.manager.setVolume(i.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    i.player.ended
                                        ? i.loadAds()
                                        : i.loader.contentComplete();
                                    break;
                                case google
                                    .ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    i.pauseContent();
                                    break;
                                case google
                                    .ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    i.pollCountdown(), i.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    a.adError &&
                                        i.player.debug.warn(
                                            'Non-fatal ad error: '.concat(
                                                a.adError.getMessage()
                                            )
                                        );
                            }
                        }),
                        a(this, 'onAdError', function (e) {
                            i.cancel(), i.player.debug.warn('Ads error', e);
                        }),
                        a(this, 'listeners', function () {
                            var e,
                                t = i.player.elements.container;
                            i.player.on('canplay', function () {
                                i.addCuePoints();
                            }),
                                i.player.on('ended', function () {
                                    i.loader.contentComplete();
                                }),
                                i.player.on('timeupdate', function () {
                                    e = i.player.currentTime;
                                }),
                                i.player.on('seeked', function () {
                                    var t = i.player.currentTime;
                                    re(i.cuePoints) ||
                                        i.cuePoints.forEach(function (n, a) {
                                            e < n &&
                                                n < t &&
                                                (i.manager.discardAdBreak(),
                                                i.cuePoints.splice(a, 1));
                                        });
                                }),
                                window.addEventListener('resize', function () {
                                    i.manager &&
                                        i.manager.resize(
                                            t.offsetWidth,
                                            t.offsetHeight,
                                            google.ima.ViewMode.NORMAL
                                        );
                                });
                        }),
                        a(this, 'play', function () {
                            var e = i.player.elements.container;
                            i.managerPromise || i.resumeContent(),
                                i.managerPromise
                                    .then(function () {
                                        i.manager.setVolume(i.player.volume),
                                            i.elements.displayContainer.initialize();
                                        try {
                                            i.initialized ||
                                                (i.manager.init(
                                                    e.offsetWidth,
                                                    e.offsetHeight,
                                                    google.ima.ViewMode.NORMAL
                                                ),
                                                i.manager.start()),
                                                (i.initialized = !0);
                                        } catch (e) {
                                            i.onAdError(e);
                                        }
                                    })
                                    .catch(function () {});
                        }),
                        a(this, 'resumeContent', function () {
                            (i.elements.container.style.zIndex = ''),
                                (i.playing = !1),
                                qe(i.player.media.play());
                        }),
                        a(this, 'pauseContent', function () {
                            (i.elements.container.style.zIndex = 3),
                                (i.playing = !0),
                                i.player.media.pause();
                        }),
                        a(this, 'cancel', function () {
                            i.initialized && i.resumeContent(),
                                i.trigger('error'),
                                i.loadAds();
                        }),
                        a(this, 'loadAds', function () {
                            i.managerPromise
                                .then(function () {
                                    i.manager && i.manager.destroy(),
                                        (i.managerPromise = new Promise(
                                            function (e) {
                                                i.on('loaded', e),
                                                    i.player.debug.log(
                                                        i.manager
                                                    );
                                            }
                                        )),
                                        (i.initialized = !1),
                                        i.requestAds();
                                })
                                .catch(function () {});
                        }),
                        a(this, 'trigger', function (e) {
                            for (
                                var t = arguments.length,
                                    n = new Array(t > 1 ? t - 1 : 0),
                                    a = 1;
                                a < t;
                                a++
                            )
                                n[a - 1] = arguments[a];
                            var r = i.events[e];
                            J(r) &&
                                r.forEach(function (e) {
                                    $(e) && e.apply(i, n);
                                });
                        }),
                        a(this, 'on', function (e, t) {
                            return (
                                J(i.events[e]) || (i.events[e] = []),
                                i.events[e].push(t),
                                i
                            );
                        }),
                        a(this, 'startSafetyTimer', function (e, t) {
                            i.player.debug.log(
                                'Safety timer invoked from: '.concat(t)
                            ),
                                (i.safetyTimer = setTimeout(function () {
                                    i.cancel(),
                                        i.clearSafetyTimer(
                                            'startSafetyTimer()'
                                        );
                                }, e));
                        }),
                        a(this, 'clearSafetyTimer', function (e) {
                            z(i.safetyTimer) ||
                                (i.player.debug.log(
                                    'Safety timer cleared from: '.concat(e)
                                ),
                                clearTimeout(i.safetyTimer),
                                (i.safetyTimer = null));
                        }),
                        (this.player = n),
                        (this.config = n.config.ads),
                        (this.playing = !1),
                        (this.initialized = !1),
                        (this.elements = {
                            container: null,
                            displayContainer: null,
                        }),
                        (this.manager = null),
                        (this.loader = null),
                        (this.cuePoints = null),
                        (this.events = {}),
                        (this.safetyTimer = null),
                        (this.countdownTimer = null),
                        (this.managerPromise = new Promise(function (e, t) {
                            i.on('loaded', e), i.on('error', t);
                        })),
                        this.load();
                }
                return (
                    i(e, [
                        {
                            key: 'enabled',
                            get: function () {
                                var e = this.config;
                                return (
                                    this.player.isHTML5 &&
                                    this.player.isVideo &&
                                    e.enabled &&
                                    (!re(e.publisherId) || ae(e.tagUrl))
                                );
                            },
                        },
                        {
                            key: 'tagUrl',
                            get: function () {
                                var e = this.config;
                                if (ae(e.tagUrl)) return e.tagUrl;
                                var t = {
                                    AV_PUBLISHERID: '58c25bb0073ef448b1087ad6',
                                    AV_CHANNELID: '5a0458dc28a06145e4519d21',
                                    AV_URL: window.location.hostname,
                                    cb: Date.now(),
                                    AV_WIDTH: 640,
                                    AV_HEIGHT: 480,
                                    AV_CDIM2: e.publisherId,
                                };
                                return ''
                                    .concat(
                                        'https://go.aniview.com/api/adserver6/vast/',
                                        '?'
                                    )
                                    .concat(ot(t));
                            },
                        },
                    ]),
                    e
                );
            })(),
            Mt = function (e, t) {
                var n = {};
                return (
                    e > t.width / t.height
                        ? ((n.width = t.width), (n.height = (1 / e) * t.width))
                        : ((n.height = t.height), (n.width = e * t.height)),
                    n
                );
            },
            xt = (function () {
                function e(n) {
                    var i = this;
                    t(this, e),
                        a(this, 'load', function () {
                            i.player.elements.display.seekTooltip &&
                                (i.player.elements.display.seekTooltip.hidden =
                                    i.enabled),
                                i.enabled &&
                                    i.getThumbnails().then(function () {
                                        i.enabled &&
                                            (i.render(),
                                            i.determineContainerAutoSizing(),
                                            (i.loaded = !0));
                                    });
                        }),
                        a(this, 'getThumbnails', function () {
                            return new Promise(function (e) {
                                var t = i.player.config.previewThumbnails.src;
                                if (re(t))
                                    throw new Error(
                                        'Missing previewThumbnails.src config attribute'
                                    );
                                var n = function () {
                                    i.thumbnails.sort(function (e, t) {
                                        return e.height - t.height;
                                    }),
                                        i.player.debug.log(
                                            'Preview thumbnails',
                                            i.thumbnails
                                        ),
                                        e();
                                };
                                if ($(t))
                                    t(function (e) {
                                        (i.thumbnails = e), n();
                                    });
                                else {
                                    var a = (Q(t) ? [t] : t).map(function (e) {
                                        return i.getThumbnail(e);
                                    });
                                    Promise.all(a).then(n);
                                }
                            });
                        }),
                        a(this, 'getThumbnail', function (e) {
                            return new Promise(function (t) {
                                Ge(e).then(function (n) {
                                    var a,
                                        r,
                                        o = {
                                            frames:
                                                ((a = n),
                                                (r = []),
                                                a
                                                    .split(/\r\n\r\n|\n\n|\r\r/)
                                                    .forEach(function (e) {
                                                        var t = {};
                                                        e
                                                            .split(/\r\n|\n|\r/)
                                                            .forEach(function (
                                                                e
                                                            ) {
                                                                if (
                                                                    Y(
                                                                        t.startTime
                                                                    )
                                                                ) {
                                                                    if (
                                                                        !re(
                                                                            e.trim()
                                                                        ) &&
                                                                        re(
                                                                            t.text
                                                                        )
                                                                    ) {
                                                                        var n =
                                                                                e
                                                                                    .trim()
                                                                                    .split(
                                                                                        '#xywh='
                                                                                    ),
                                                                            i =
                                                                                l(
                                                                                    n,
                                                                                    1
                                                                                );
                                                                        if (
                                                                            ((t.text =
                                                                                i[0]),
                                                                            n[1])
                                                                        ) {
                                                                            var a =
                                                                                l(
                                                                                    n[1].split(
                                                                                        ','
                                                                                    ),
                                                                                    4
                                                                                );
                                                                            (t.x =
                                                                                a[0]),
                                                                                (t.y =
                                                                                    a[1]),
                                                                                (t.w =
                                                                                    a[2]),
                                                                                (t.h =
                                                                                    a[3]);
                                                                        }
                                                                    }
                                                                } else {
                                                                    var r =
                                                                        e.match(
                                                                            /([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/
                                                                        );
                                                                    r &&
                                                                        ((t.startTime =
                                                                            60 *
                                                                                Number(
                                                                                    r[1] ||
                                                                                        0
                                                                                ) *
                                                                                60 +
                                                                            60 *
                                                                                Number(
                                                                                    r[2]
                                                                                ) +
                                                                            Number(
                                                                                r[3]
                                                                            ) +
                                                                            Number(
                                                                                '0.'.concat(
                                                                                    r[4]
                                                                                )
                                                                            )),
                                                                        (t.endTime =
                                                                            60 *
                                                                                Number(
                                                                                    r[6] ||
                                                                                        0
                                                                                ) *
                                                                                60 +
                                                                            60 *
                                                                                Number(
                                                                                    r[7]
                                                                                ) +
                                                                            Number(
                                                                                r[8]
                                                                            ) +
                                                                            Number(
                                                                                '0.'.concat(
                                                                                    r[9]
                                                                                )
                                                                            )));
                                                                }
                                                            }),
                                                            t.text && r.push(t);
                                                    }),
                                                r),
                                            height: null,
                                            urlPrefix: '',
                                        };
                                    o.frames[0].text.startsWith('/') ||
                                        o.frames[0].text.startsWith(
                                            'http://'
                                        ) ||
                                        o.frames[0].text.startsWith(
                                            'https://'
                                        ) ||
                                        (o.urlPrefix = e.substring(
                                            0,
                                            e.lastIndexOf('/') + 1
                                        ));
                                    var s = new Image();
                                    (s.onload = function () {
                                        (o.height = s.naturalHeight),
                                            (o.width = s.naturalWidth),
                                            i.thumbnails.push(o),
                                            t();
                                    }),
                                        (s.src =
                                            o.urlPrefix + o.frames[0].text);
                                });
                            });
                        }),
                        a(this, 'startMove', function (e) {
                            if (
                                i.loaded &&
                                ee(e) &&
                                ['touchmove', 'mousemove'].includes(e.type) &&
                                i.player.media.duration
                            ) {
                                if ('touchmove' === e.type)
                                    i.seekTime =
                                        i.player.media.duration *
                                        (i.player.elements.inputs.seek.value /
                                            100);
                                else {
                                    var t =
                                            i.player.elements.progress.getBoundingClientRect(),
                                        n =
                                            (100 / t.width) *
                                            (e.pageX - t.left);
                                    (i.seekTime =
                                        i.player.media.duration * (n / 100)),
                                        i.seekTime < 0 && (i.seekTime = 0),
                                        i.seekTime >
                                            i.player.media.duration - 1 &&
                                            (i.seekTime =
                                                i.player.media.duration - 1),
                                        (i.mousePosX = e.pageX),
                                        (i.elements.thumb.time.innerText = it(
                                            i.seekTime
                                        ));
                                }
                                i.showImageAtCurrentTime();
                            }
                        }),
                        a(this, 'endMove', function () {
                            i.toggleThumbContainer(!1, !0);
                        }),
                        a(this, 'startScrubbing', function (e) {
                            (z(e.button) ||
                                !1 === e.button ||
                                0 === e.button) &&
                                ((i.mouseDown = !0),
                                i.player.media.duration &&
                                    (i.toggleScrubbingContainer(!0),
                                    i.toggleThumbContainer(!1, !0),
                                    i.showImageAtCurrentTime()));
                        }),
                        a(this, 'endScrubbing', function () {
                            (i.mouseDown = !1),
                                Math.ceil(i.lastTime) ===
                                Math.ceil(i.player.media.currentTime)
                                    ? i.toggleScrubbingContainer(!1)
                                    : Oe.call(
                                          i.player,
                                          i.player.media,
                                          'timeupdate',
                                          function () {
                                              i.mouseDown ||
                                                  i.toggleScrubbingContainer(
                                                      !1
                                                  );
                                          }
                                      );
                        }),
                        a(this, 'listeners', function () {
                            i.player.on('play', function () {
                                i.toggleThumbContainer(!1, !0);
                            }),
                                i.player.on('seeked', function () {
                                    i.toggleThumbContainer(!1);
                                }),
                                i.player.on('timeupdate', function () {
                                    i.lastTime = i.player.media.currentTime;
                                });
                        }),
                        a(this, 'render', function () {
                            (i.elements.thumb.container = me('div', {
                                class: i.player.config.classNames
                                    .previewThumbnails.thumbContainer,
                            })),
                                (i.elements.thumb.imageContainer = me('div', {
                                    class: i.player.config.classNames
                                        .previewThumbnails.imageContainer,
                                })),
                                i.elements.thumb.container.appendChild(
                                    i.elements.thumb.imageContainer
                                );
                            var e = me('div', {
                                class: i.player.config.classNames
                                    .previewThumbnails.timeContainer,
                            });
                            (i.elements.thumb.time = me('span', {}, '00:00')),
                                e.appendChild(i.elements.thumb.time),
                                i.elements.thumb.container.appendChild(e),
                                Z(i.player.elements.progress) &&
                                    i.player.elements.progress.appendChild(
                                        i.elements.thumb.container
                                    ),
                                (i.elements.scrubbing.container = me('div', {
                                    class: i.player.config.classNames
                                        .previewThumbnails.scrubbingContainer,
                                })),
                                i.player.elements.wrapper.appendChild(
                                    i.elements.scrubbing.container
                                );
                        }),
                        a(this, 'destroy', function () {
                            i.elements.thumb.container &&
                                i.elements.thumb.container.remove(),
                                i.elements.scrubbing.container &&
                                    i.elements.scrubbing.container.remove();
                        }),
                        a(this, 'showImageAtCurrentTime', function () {
                            i.mouseDown
                                ? i.setScrubbingContainerSize()
                                : i.setThumbContainerSizeAndPos();
                            var e = i.thumbnails[0].frames.findIndex(function (
                                    e
                                ) {
                                    return (
                                        i.seekTime >= e.startTime &&
                                        i.seekTime <= e.endTime
                                    );
                                }),
                                t = e >= 0,
                                n = 0;
                            i.mouseDown || i.toggleThumbContainer(t),
                                t &&
                                    (i.thumbnails.forEach(function (t, a) {
                                        i.loadedImages.includes(
                                            t.frames[e].text
                                        ) && (n = a);
                                    }),
                                    e !== i.showingThumb &&
                                        ((i.showingThumb = e), i.loadImage(n)));
                        }),
                        a(this, 'loadImage', function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0]
                                        ? arguments[0]
                                        : 0,
                                t = i.showingThumb,
                                n = i.thumbnails[e],
                                a = n.urlPrefix,
                                r = n.frames[t],
                                o = n.frames[t].text,
                                s = a + o;
                            if (
                                i.currentImageElement &&
                                i.currentImageElement.dataset.filename === o
                            )
                                i.showImage(
                                    i.currentImageElement,
                                    r,
                                    e,
                                    t,
                                    o,
                                    !1
                                ),
                                    (i.currentImageElement.dataset.index = t),
                                    i.removeOldImages(i.currentImageElement);
                            else {
                                i.loadingImage &&
                                    i.usingSprites &&
                                    (i.loadingImage.onload = null);
                                var l = new Image();
                                (l.src = s),
                                    (l.dataset.index = t),
                                    (l.dataset.filename = o),
                                    (i.showingThumbFilename = o),
                                    i.player.debug.log(
                                        'Loading image: '.concat(s)
                                    ),
                                    (l.onload = function () {
                                        return i.showImage(l, r, e, t, o, !0);
                                    }),
                                    (i.loadingImage = l),
                                    i.removeOldImages(l);
                            }
                        }),
                        a(this, 'showImage', function (e, t, n, a, r) {
                            var o =
                                !(
                                    arguments.length > 5 &&
                                    void 0 !== arguments[5]
                                ) || arguments[5];
                            i.player.debug.log(
                                'Showing thumb: '
                                    .concat(r, '. num: ')
                                    .concat(a, '. qual: ')
                                    .concat(n, '. newimg: ')
                                    .concat(o)
                            ),
                                i.setImageSizeAndOffset(e, t),
                                o &&
                                    (i.currentImageContainer.appendChild(e),
                                    (i.currentImageElement = e),
                                    i.loadedImages.includes(r) ||
                                        i.loadedImages.push(r)),
                                i
                                    .preloadNearby(a, !0)
                                    .then(i.preloadNearby(a, !1))
                                    .then(i.getHigherQuality(n, e, t, r));
                        }),
                        a(this, 'removeOldImages', function (e) {
                            Array.from(
                                i.currentImageContainer.children
                            ).forEach(function (t) {
                                if ('img' === t.tagName.toLowerCase()) {
                                    var n = i.usingSprites ? 500 : 1e3;
                                    if (
                                        t.dataset.index !== e.dataset.index &&
                                        !t.dataset.deleting
                                    ) {
                                        t.dataset.deleting = !0;
                                        var a = i.currentImageContainer;
                                        setTimeout(function () {
                                            a.removeChild(t),
                                                i.player.debug.log(
                                                    'Removing thumb: '.concat(
                                                        t.dataset.filename
                                                    )
                                                );
                                        }, n);
                                    }
                                }
                            });
                        }),
                        a(this, 'preloadNearby', function (e) {
                            var t =
                                !(
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1]
                                ) || arguments[1];
                            return new Promise(function (n) {
                                setTimeout(function () {
                                    var a = i.thumbnails[0].frames[e].text;
                                    if (i.showingThumbFilename === a) {
                                        var r;
                                        r = t
                                            ? i.thumbnails[0].frames.slice(e)
                                            : i.thumbnails[0].frames
                                                  .slice(0, e)
                                                  .reverse();
                                        var o = !1;
                                        r.forEach(function (e) {
                                            var t = e.text;
                                            if (
                                                t !== a &&
                                                !i.loadedImages.includes(t)
                                            ) {
                                                (o = !0),
                                                    i.player.debug.log(
                                                        'Preloading thumb filename: '.concat(
                                                            t
                                                        )
                                                    );
                                                var r =
                                                        i.thumbnails[0]
                                                            .urlPrefix + t,
                                                    s = new Image();
                                                (s.src = r),
                                                    (s.onload = function () {
                                                        i.player.debug.log(
                                                            'Preloaded thumb filename: '.concat(
                                                                t
                                                            )
                                                        ),
                                                            i.loadedImages.includes(
                                                                t
                                                            ) ||
                                                                i.loadedImages.push(
                                                                    t
                                                                ),
                                                            n();
                                                    });
                                            }
                                        }),
                                            o || n();
                                    }
                                }, 300);
                            });
                        }),
                        a(this, 'getHigherQuality', function (e, t, n, a) {
                            if (e < i.thumbnails.length - 1) {
                                var r = t.naturalHeight;
                                i.usingSprites && (r = n.h),
                                    r < i.thumbContainerHeight &&
                                        setTimeout(function () {
                                            i.showingThumbFilename === a &&
                                                (i.player.debug.log(
                                                    'Showing higher quality thumb for: '.concat(
                                                        a
                                                    )
                                                ),
                                                i.loadImage(e + 1));
                                        }, 300);
                            }
                        }),
                        a(this, 'toggleThumbContainer', function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                t =
                                    arguments.length > 1 &&
                                    void 0 !== arguments[1] &&
                                    arguments[1],
                                n =
                                    i.player.config.classNames.previewThumbnails
                                        .thumbContainerShown;
                            i.elements.thumb.container.classList.toggle(n, e),
                                !e &&
                                    t &&
                                    ((i.showingThumb = null),
                                    (i.showingThumbFilename = null));
                        }),
                        a(this, 'toggleScrubbingContainer', function () {
                            var e =
                                    arguments.length > 0 &&
                                    void 0 !== arguments[0] &&
                                    arguments[0],
                                t =
                                    i.player.config.classNames.previewThumbnails
                                        .scrubbingContainerShown;
                            i.elements.scrubbing.container.classList.toggle(
                                t,
                                e
                            ),
                                e ||
                                    ((i.showingThumb = null),
                                    (i.showingThumbFilename = null));
                        }),
                        a(this, 'determineContainerAutoSizing', function () {
                            (i.elements.thumb.imageContainer.clientHeight >
                                20 ||
                                i.elements.thumb.imageContainer.clientWidth >
                                    20) &&
                                (i.sizeSpecifiedInCSS = !0);
                        }),
                        a(this, 'setThumbContainerSizeAndPos', function () {
                            if (i.sizeSpecifiedInCSS) {
                                if (
                                    i.elements.thumb.imageContainer
                                        .clientHeight > 20 &&
                                    i.elements.thumb.imageContainer
                                        .clientWidth < 20
                                ) {
                                    var e = Math.floor(
                                        i.elements.thumb.imageContainer
                                            .clientHeight * i.thumbAspectRatio
                                    );
                                    i.elements.thumb.imageContainer.style.width =
                                        ''.concat(e, 'px');
                                } else if (
                                    i.elements.thumb.imageContainer
                                        .clientHeight < 20 &&
                                    i.elements.thumb.imageContainer
                                        .clientWidth > 20
                                ) {
                                    var t = Math.floor(
                                        i.elements.thumb.imageContainer
                                            .clientWidth / i.thumbAspectRatio
                                    );
                                    i.elements.thumb.imageContainer.style.height =
                                        ''.concat(t, 'px');
                                }
                            } else {
                                var n = Math.floor(
                                    i.thumbContainerHeight * i.thumbAspectRatio
                                );
                                (i.elements.thumb.imageContainer.style.height =
                                    ''.concat(i.thumbContainerHeight, 'px')),
                                    (i.elements.thumb.imageContainer.style.width =
                                        ''.concat(n, 'px'));
                            }
                            i.setThumbContainerPos();
                        }),
                        a(this, 'setThumbContainerPos', function () {
                            var e =
                                    i.player.elements.progress.getBoundingClientRect(),
                                t =
                                    i.player.elements.container.getBoundingClientRect(),
                                n = i.elements.thumb.container,
                                a = t.left - e.left + 10,
                                r = t.right - e.left - n.clientWidth - 10,
                                o = i.mousePosX - e.left - n.clientWidth / 2;
                            o < a && (o = a),
                                o > r && (o = r),
                                (n.style.left = ''.concat(o, 'px'));
                        }),
                        a(this, 'setScrubbingContainerSize', function () {
                            var e = Mt(i.thumbAspectRatio, {
                                    width: i.player.media.clientWidth,
                                    height: i.player.media.clientHeight,
                                }),
                                t = e.width,
                                n = e.height;
                            (i.elements.scrubbing.container.style.width =
                                ''.concat(t, 'px')),
                                (i.elements.scrubbing.container.style.height =
                                    ''.concat(n, 'px'));
                        }),
                        a(this, 'setImageSizeAndOffset', function (e, t) {
                            if (i.usingSprites) {
                                var n = i.thumbContainerHeight / t.h;
                                (e.style.height = ''.concat(
                                    e.naturalHeight * n,
                                    'px'
                                )),
                                    (e.style.width = ''.concat(
                                        e.naturalWidth * n,
                                        'px'
                                    )),
                                    (e.style.left = '-'.concat(t.x * n, 'px')),
                                    (e.style.top = '-'.concat(t.y * n, 'px'));
                            }
                        }),
                        (this.player = n),
                        (this.thumbnails = []),
                        (this.loaded = !1),
                        (this.lastMouseMoveTime = Date.now()),
                        (this.mouseDown = !1),
                        (this.loadedImages = []),
                        (this.elements = { thumb: {}, scrubbing: {} }),
                        this.load();
                }
                return (
                    i(e, [
                        {
                            key: 'enabled',
                            get: function () {
                                return (
                                    this.player.isHTML5 &&
                                    this.player.isVideo &&
                                    this.player.config.previewThumbnails.enabled
                                );
                            },
                        },
                        {
                            key: 'currentImageContainer',
                            get: function () {
                                return this.mouseDown
                                    ? this.elements.scrubbing.container
                                    : this.elements.thumb.imageContainer;
                            },
                        },
                        {
                            key: 'usingSprites',
                            get: function () {
                                return Object.keys(
                                    this.thumbnails[0].frames[0]
                                ).includes('w');
                            },
                        },
                        {
                            key: 'thumbAspectRatio',
                            get: function () {
                                return this.usingSprites
                                    ? this.thumbnails[0].frames[0].w /
                                          this.thumbnails[0].frames[0].h
                                    : this.thumbnails[0].width /
                                          this.thumbnails[0].height;
                            },
                        },
                        {
                            key: 'thumbContainerHeight',
                            get: function () {
                                return this.mouseDown
                                    ? Mt(this.thumbAspectRatio, {
                                          width: this.player.media.clientWidth,
                                          height: this.player.media
                                              .clientHeight,
                                      }).height
                                    : this.sizeSpecifiedInCSS
                                    ? this.elements.thumb.imageContainer
                                          .clientHeight
                                    : Math.floor(
                                          this.player.media.clientWidth /
                                              this.thumbAspectRatio /
                                              4
                                      );
                            },
                        },
                        {
                            key: 'currentImageElement',
                            get: function () {
                                return this.mouseDown
                                    ? this.currentScrubbingImageElement
                                    : this.currentThumbnailImageElement;
                            },
                            set: function (e) {
                                this.mouseDown
                                    ? (this.currentScrubbingImageElement = e)
                                    : (this.currentThumbnailImageElement = e);
                            },
                        },
                    ]),
                    e
                );
            })(),
            It = {
                insertElements: function (e, t) {
                    var n = this;
                    Q(t)
                        ? pe(e, this.media, { src: t })
                        : J(t) &&
                          t.forEach(function (t) {
                              pe(e, n.media, t);
                          });
                },
                change: function (e) {
                    var t = this;
                    ce(e, 'sources.length')
                        ? (Be.cancelRequests.call(this),
                          this.destroy.call(
                              this,
                              function () {
                                  (t.options.quality = []),
                                      fe(t.media),
                                      (t.media = null),
                                      Z(t.elements.container) &&
                                          t.elements.container.removeAttribute(
                                              'class'
                                          );
                                  var n = e.sources,
                                      i = e.type,
                                      a = l(n, 1)[0],
                                      r = a.provider,
                                      o = void 0 === r ? dt.html5 : r,
                                      s = a.src,
                                      c = 'html5' === o ? i : 'div',
                                      u = 'html5' === o ? {} : { src: s };
                                  Object.assign(t, {
                                      provider: o,
                                      type: i,
                                      supported: Ne.check(
                                          i,
                                          o,
                                          t.config.playsinline
                                      ),
                                      media: me(c, u),
                                  }),
                                      t.elements.container.appendChild(t.media),
                                      X(e.autoplay) &&
                                          (t.config.autoplay = e.autoplay),
                                      t.isHTML5 &&
                                          (t.config.crossorigin &&
                                              t.media.setAttribute(
                                                  'crossorigin',
                                                  ''
                                              ),
                                          t.config.autoplay &&
                                              t.media.setAttribute(
                                                  'autoplay',
                                                  ''
                                              ),
                                          re(e.poster) || (t.poster = e.poster),
                                          t.config.loop.active &&
                                              t.media.setAttribute('loop', ''),
                                          t.config.muted &&
                                              t.media.setAttribute('muted', ''),
                                          t.config.playsinline &&
                                              t.media.setAttribute(
                                                  'playsinline',
                                                  ''
                                              )),
                                      bt.addStyleHook.call(t),
                                      t.isHTML5 &&
                                          It.insertElements.call(
                                              t,
                                              'source',
                                              n
                                          ),
                                      (t.config.title = e.title),
                                      Et.setup.call(t),
                                      t.isHTML5 &&
                                          Object.keys(e).includes('tracks') &&
                                          It.insertElements.call(
                                              t,
                                              'track',
                                              e.tracks
                                          ),
                                      (t.isHTML5 ||
                                          (t.isEmbed && !t.supported.ui)) &&
                                          bt.build.call(t),
                                      t.isHTML5 && t.media.load(),
                                      re(e.previewThumbnails) ||
                                          (Object.assign(
                                              t.config.previewThumbnails,
                                              e.previewThumbnails
                                          ),
                                          t.previewThumbnails &&
                                              t.previewThumbnails.loaded &&
                                              (t.previewThumbnails.destroy(),
                                              (t.previewThumbnails = null)),
                                          t.config.previewThumbnails.enabled &&
                                              (t.previewThumbnails = new xt(
                                                  t
                                              ))),
                                      t.fullscreen.update();
                              },
                              !0
                          ))
                        : this.debug.warn('Invalid source format');
                },
            };
        var Lt,
            Ot = (function () {
                function e(n, i) {
                    var r = this;
                    if (
                        (t(this, e),
                        a(this, 'play', function () {
                            return $(r.media.play)
                                ? (r.ads &&
                                      r.ads.enabled &&
                                      r.ads.managerPromise
                                          .then(function () {
                                              return r.ads.play();
                                          })
                                          .catch(function () {
                                              return qe(r.media.play());
                                          }),
                                  r.media.play())
                                : null;
                        }),
                        a(this, 'pause', function () {
                            return r.playing && $(r.media.pause)
                                ? r.media.pause()
                                : null;
                        }),
                        a(this, 'togglePlay', function (e) {
                            return (X(e) ? e : !r.playing)
                                ? r.play()
                                : r.pause();
                        }),
                        a(this, 'stop', function () {
                            r.isHTML5
                                ? (r.pause(), r.restart())
                                : $(r.media.stop) && r.media.stop();
                        }),
                        a(this, 'restart', function () {
                            r.currentTime = 0;
                        }),
                        a(this, 'rewind', function (e) {
                            r.currentTime -= Y(e) ? e : r.config.seekTime;
                        }),
                        a(this, 'forward', function (e) {
                            r.currentTime += Y(e) ? e : r.config.seekTime;
                        }),
                        a(this, 'increaseVolume', function (e) {
                            var t = r.media.muted ? 0 : r.volume;
                            r.volume = t + (Y(e) ? e : 0);
                        }),
                        a(this, 'decreaseVolume', function (e) {
                            r.increaseVolume(-e);
                        }),
                        a(this, 'airplay', function () {
                            Ne.airplay &&
                                r.media.webkitShowPlaybackTargetPicker();
                        }),
                        a(this, 'toggleControls', function (e) {
                            if (r.supported.ui && !r.isAudio) {
                                var t = ke(
                                        r.elements.container,
                                        r.config.classNames.hideControls
                                    ),
                                    n = void 0 === e ? void 0 : !e,
                                    i = we(
                                        r.elements.container,
                                        r.config.classNames.hideControls,
                                        n
                                    );
                                if (
                                    (i &&
                                        J(r.config.controls) &&
                                        r.config.controls.includes(
                                            'settings'
                                        ) &&
                                        !re(r.config.settings) &&
                                        at.toggleMenu.call(r, !1),
                                    i !== t)
                                ) {
                                    var a = i
                                        ? 'controlshidden'
                                        : 'controlsshown';
                                    _e.call(r, r.media, a);
                                }
                                return !i;
                            }
                            return !1;
                        }),
                        a(this, 'on', function (e, t) {
                            Ie.call(r, r.elements.container, e, t);
                        }),
                        a(this, 'once', function (e, t) {
                            Oe.call(r, r.elements.container, e, t);
                        }),
                        a(this, 'off', function (e, t) {
                            Le(r.elements.container, e, t);
                        }),
                        a(this, 'destroy', function (e) {
                            var t =
                                arguments.length > 1 &&
                                void 0 !== arguments[1] &&
                                arguments[1];
                            if (r.ready) {
                                var n = function () {
                                    (document.body.style.overflow = ''),
                                        (r.embed = null),
                                        t
                                            ? (Object.keys(r.elements).length &&
                                                  (fe(r.elements.buttons.play),
                                                  fe(r.elements.captions),
                                                  fe(r.elements.controls),
                                                  fe(r.elements.wrapper),
                                                  (r.elements.buttons.play =
                                                      null),
                                                  (r.elements.captions = null),
                                                  (r.elements.controls = null),
                                                  (r.elements.wrapper = null)),
                                              $(e) && e())
                                            : (je.call(r),
                                              Be.cancelRequests.call(r),
                                              ye(
                                                  r.elements.original,
                                                  r.elements.container
                                              ),
                                              _e.call(
                                                  r,
                                                  r.elements.original,
                                                  'destroyed',
                                                  !0
                                              ),
                                              $(e) &&
                                                  e.call(r.elements.original),
                                              (r.ready = !1),
                                              setTimeout(function () {
                                                  (r.elements = null),
                                                      (r.media = null);
                                              }, 200));
                                };
                                r.stop(),
                                    clearTimeout(r.timers.loading),
                                    clearTimeout(r.timers.controls),
                                    clearTimeout(r.timers.resized),
                                    r.isHTML5
                                        ? (bt.toggleNativeControls.call(r, !0),
                                          n())
                                        : r.isYouTube
                                        ? (clearInterval(r.timers.buffering),
                                          clearInterval(r.timers.playing),
                                          null !== r.embed &&
                                              $(r.embed.destroy) &&
                                              r.embed.destroy(),
                                          n())
                                        : r.isVimeo &&
                                          (null !== r.embed &&
                                              r.embed.unload().then(n),
                                          setTimeout(n, 200));
                            }
                        }),
                        a(this, 'supports', function (e) {
                            return Ne.mime.call(r, e);
                        }),
                        (this.timers = {}),
                        (this.ready = !1),
                        (this.loading = !1),
                        (this.failed = !1),
                        (this.touch = Ne.touch),
                        (this.media = n),
                        Q(this.media) &&
                            (this.media = document.querySelectorAll(
                                this.media
                            )),
                        ((window.jQuery && this.media instanceof jQuery) ||
                            G(this.media) ||
                            J(this.media)) &&
                            (this.media = this.media[0]),
                        (this.config = ue(
                            {},
                            lt,
                            e.defaults,
                            i || {},
                            (function () {
                                try {
                                    return JSON.parse(
                                        r.media.getAttribute('data-plyr-config')
                                    );
                                } catch (e) {
                                    return {};
                                }
                            })()
                        )),
                        (this.elements = {
                            container: null,
                            fullscreen: null,
                            captions: null,
                            buttons: {},
                            display: {},
                            progress: {},
                            inputs: {},
                            settings: {
                                popup: null,
                                menu: null,
                                panels: {},
                                buttons: {},
                            },
                        }),
                        (this.captions = {
                            active: null,
                            currentTrack: -1,
                            meta: new WeakMap(),
                        }),
                        (this.fullscreen = { active: !1 }),
                        (this.options = { speed: [], quality: [] }),
                        (this.debug = new ft(this.config.debug)),
                        this.debug.log('Config', this.config),
                        this.debug.log('Support', Ne),
                        !z(this.media) && Z(this.media))
                    )
                        if (this.media.plyr)
                            this.debug.warn('Target already setup');
                        else if (this.config.enabled)
                            if (Ne.check().api) {
                                var o = this.media.cloneNode(!0);
                                (o.autoplay = !1), (this.elements.original = o);
                                var s = this.media.tagName.toLowerCase(),
                                    l = null,
                                    c = null;
                                switch (s) {
                                    case 'div':
                                        if (
                                            ((l =
                                                this.media.querySelector(
                                                    'iframe'
                                                )),
                                            Z(l))
                                        ) {
                                            if (
                                                ((c = rt(
                                                    l.getAttribute('src')
                                                )),
                                                (this.provider = (function (e) {
                                                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(
                                                        e
                                                    )
                                                        ? dt.youtube
                                                        : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(
                                                              e
                                                          )
                                                        ? dt.vimeo
                                                        : null;
                                                })(c.toString())),
                                                (this.elements.container =
                                                    this.media),
                                                (this.media = l),
                                                (this.elements.container.className =
                                                    ''),
                                                c.search.length)
                                            ) {
                                                var u = ['1', 'true'];
                                                u.includes(
                                                    c.searchParams.get(
                                                        'autoplay'
                                                    )
                                                ) &&
                                                    (this.config.autoplay = !0),
                                                    u.includes(
                                                        c.searchParams.get(
                                                            'loop'
                                                        )
                                                    ) &&
                                                        (this.config.loop.active =
                                                            !0),
                                                    this.isYouTube
                                                        ? ((this.config.playsinline =
                                                              u.includes(
                                                                  c.searchParams.get(
                                                                      'playsinline'
                                                                  )
                                                              )),
                                                          (this.config.youtube.hl =
                                                              c.searchParams.get(
                                                                  'hl'
                                                              )))
                                                        : (this.config.playsinline =
                                                              !0);
                                            }
                                        } else
                                            (this.provider =
                                                this.media.getAttribute(
                                                    this.config.attributes.embed
                                                        .provider
                                                )),
                                                this.media.removeAttribute(
                                                    this.config.attributes.embed
                                                        .provider
                                                );
                                        if (
                                            re(this.provider) ||
                                            !Object.values(dt).includes(
                                                this.provider
                                            )
                                        )
                                            return void this.debug.error(
                                                'Setup failed: Invalid provider'
                                            );
                                        this.type = mt;
                                        break;
                                    case 'video':
                                    case 'audio':
                                        (this.type = s),
                                            (this.provider = dt.html5),
                                            this.media.hasAttribute(
                                                'crossorigin'
                                            ) && (this.config.crossorigin = !0),
                                            this.media.hasAttribute(
                                                'autoplay'
                                            ) && (this.config.autoplay = !0),
                                            (this.media.hasAttribute(
                                                'playsinline'
                                            ) ||
                                                this.media.hasAttribute(
                                                    'webkit-playsinline'
                                                )) &&
                                                (this.config.playsinline = !0),
                                            this.media.hasAttribute('muted') &&
                                                (this.config.muted = !0),
                                            this.media.hasAttribute('loop') &&
                                                (this.config.loop.active = !0);
                                        break;
                                    default:
                                        return void this.debug.error(
                                            'Setup failed: unsupported type'
                                        );
                                }
                                (this.supported = Ne.check(
                                    this.type,
                                    this.provider,
                                    this.config.playsinline
                                )),
                                    this.supported.api
                                        ? ((this.eventListeners = []),
                                          (this.listeners = new vt(this)),
                                          (this.storage = new Je(this)),
                                          (this.media.plyr = this),
                                          Z(this.elements.container) ||
                                              ((this.elements.container = me(
                                                  'div',
                                                  { tabindex: 0 }
                                              )),
                                              de(
                                                  this.media,
                                                  this.elements.container
                                              )),
                                          bt.migrateStyles.call(this),
                                          bt.addStyleHook.call(this),
                                          Et.setup.call(this),
                                          this.config.debug &&
                                              Ie.call(
                                                  this,
                                                  this.elements.container,
                                                  this.config.events.join(' '),
                                                  function (e) {
                                                      r.debug.log(
                                                          'event: '.concat(
                                                              e.type
                                                          )
                                                      );
                                                  }
                                              ),
                                          (this.fullscreen = new gt(this)),
                                          (this.isHTML5 ||
                                              (this.isEmbed &&
                                                  !this.supported.ui)) &&
                                              bt.build.call(this),
                                          this.listeners.container(),
                                          this.listeners.global(),
                                          this.config.ads.enabled &&
                                              (this.ads = new Nt(this)),
                                          this.isHTML5 &&
                                              this.config.autoplay &&
                                              this.once('canplay', function () {
                                                  return qe(r.play());
                                              }),
                                          (this.lastSeekTime = 0),
                                          this.config.previewThumbnails
                                              .enabled &&
                                              (this.previewThumbnails = new xt(
                                                  this
                                              )))
                                        : this.debug.error(
                                              'Setup failed: no support'
                                          );
                            } else this.debug.error('Setup failed: no support');
                        else
                            this.debug.error(
                                'Setup failed: disabled by config'
                            );
                    else
                        this.debug.error(
                            'Setup failed: no suitable element passed'
                        );
                }
                return (
                    i(
                        e,
                        [
                            {
                                key: 'toggleCaptions',
                                value: function (e) {
                                    st.toggle.call(this, e, !1);
                                },
                            },
                            {
                                key: 'isHTML5',
                                get: function () {
                                    return this.provider === dt.html5;
                                },
                            },
                            {
                                key: 'isEmbed',
                                get: function () {
                                    return this.isYouTube || this.isVimeo;
                                },
                            },
                            {
                                key: 'isYouTube',
                                get: function () {
                                    return this.provider === dt.youtube;
                                },
                            },
                            {
                                key: 'isVimeo',
                                get: function () {
                                    return this.provider === dt.vimeo;
                                },
                            },
                            {
                                key: 'isVideo',
                                get: function () {
                                    return this.type === mt;
                                },
                            },
                            {
                                key: 'isAudio',
                                get: function () {
                                    return this.type === ht;
                                },
                            },
                            {
                                key: 'playing',
                                get: function () {
                                    return Boolean(
                                        this.ready &&
                                            !this.paused &&
                                            !this.ended
                                    );
                                },
                            },
                            {
                                key: 'paused',
                                get: function () {
                                    return Boolean(this.media.paused);
                                },
                            },
                            {
                                key: 'stopped',
                                get: function () {
                                    return Boolean(
                                        this.paused && 0 === this.currentTime
                                    );
                                },
                            },
                            {
                                key: 'ended',
                                get: function () {
                                    return Boolean(this.media.ended);
                                },
                            },
                            {
                                key: 'currentTime',
                                set: function (e) {
                                    if (this.duration) {
                                        var t = Y(e) && e > 0;
                                        (this.media.currentTime = t
                                            ? Math.min(e, this.duration)
                                            : 0),
                                            this.debug.log(
                                                'Seeking to '.concat(
                                                    this.currentTime,
                                                    ' seconds'
                                                )
                                            );
                                    }
                                },
                                get: function () {
                                    return Number(this.media.currentTime);
                                },
                            },
                            {
                                key: 'buffered',
                                get: function () {
                                    var e = this.media.buffered;
                                    return Y(e)
                                        ? e
                                        : e && e.length && this.duration > 0
                                        ? e.end(0) / this.duration
                                        : 0;
                                },
                            },
                            {
                                key: 'seeking',
                                get: function () {
                                    return Boolean(this.media.seeking);
                                },
                            },
                            {
                                key: 'duration',
                                get: function () {
                                    var e = parseFloat(this.config.duration),
                                        t = (this.media || {}).duration,
                                        n = Y(t) && t !== 1 / 0 ? t : 0;
                                    return e || n;
                                },
                            },
                            {
                                key: 'volume',
                                set: function (e) {
                                    var t = e;
                                    Q(t) && (t = Number(t)),
                                        Y(t) ||
                                            (t = this.storage.get('volume')),
                                        Y(t) || (t = this.config.volume),
                                        t > 1 && (t = 1),
                                        t < 0 && (t = 0),
                                        (this.config.volume = t),
                                        (this.media.volume = t),
                                        !re(e) &&
                                            this.muted &&
                                            t > 0 &&
                                            (this.muted = !1);
                                },
                                get: function () {
                                    return Number(this.media.volume);
                                },
                            },
                            {
                                key: 'muted',
                                set: function (e) {
                                    var t = e;
                                    X(t) || (t = this.storage.get('muted')),
                                        X(t) || (t = this.config.muted),
                                        (this.config.muted = t),
                                        (this.media.muted = t);
                                },
                                get: function () {
                                    return Boolean(this.media.muted);
                                },
                            },
                            {
                                key: 'hasAudio',
                                get: function () {
                                    return (
                                        !this.isHTML5 ||
                                        !!this.isAudio ||
                                        Boolean(this.media.mozHasAudio) ||
                                        Boolean(
                                            this.media
                                                .webkitAudioDecodedByteCount
                                        ) ||
                                        Boolean(
                                            this.media.audioTracks &&
                                                this.media.audioTracks.length
                                        )
                                    );
                                },
                            },
                            {
                                key: 'speed',
                                set: function (e) {
                                    var t = this,
                                        n = null;
                                    Y(e) && (n = e),
                                        Y(n) || (n = this.storage.get('speed')),
                                        Y(n) ||
                                            (n = this.config.speed.selected);
                                    var i = this.minimumSpeed,
                                        a = this.maximumSpeed;
                                    (n = (function () {
                                        var e =
                                                arguments.length > 0 &&
                                                void 0 !== arguments[0]
                                                    ? arguments[0]
                                                    : 0,
                                            t =
                                                arguments.length > 1 &&
                                                void 0 !== arguments[1]
                                                    ? arguments[1]
                                                    : 0,
                                            n =
                                                arguments.length > 2 &&
                                                void 0 !== arguments[2]
                                                    ? arguments[2]
                                                    : 255;
                                        return Math.min(Math.max(e, t), n);
                                    })(n, i, a)),
                                        (this.config.speed.selected = n),
                                        setTimeout(function () {
                                            t.media.playbackRate = n;
                                        }, 0);
                                },
                                get: function () {
                                    return Number(this.media.playbackRate);
                                },
                            },
                            {
                                key: 'minimumSpeed',
                                get: function () {
                                    return this.isYouTube
                                        ? Math.min.apply(
                                              Math,
                                              c(this.options.speed)
                                          )
                                        : this.isVimeo
                                        ? 0.5
                                        : 0.0625;
                                },
                            },
                            {
                                key: 'maximumSpeed',
                                get: function () {
                                    return this.isYouTube
                                        ? Math.max.apply(
                                              Math,
                                              c(this.options.speed)
                                          )
                                        : this.isVimeo
                                        ? 2
                                        : 16;
                                },
                            },
                            {
                                key: 'quality',
                                set: function (e) {
                                    var t = this.config.quality,
                                        n = this.options.quality;
                                    if (n.length) {
                                        var i = [
                                                !re(e) && Number(e),
                                                this.storage.get('quality'),
                                                t.selected,
                                                t.default,
                                            ].find(Y),
                                            a = !0;
                                        if (!n.includes(i)) {
                                            var r = (function (e, t) {
                                                return J(e) && e.length
                                                    ? e.reduce(function (e, n) {
                                                          return Math.abs(
                                                              n - t
                                                          ) < Math.abs(e - t)
                                                              ? n
                                                              : e;
                                                      })
                                                    : null;
                                            })(n, i);
                                            this.debug.warn(
                                                'Unsupported quality option: '
                                                    .concat(i, ', using ')
                                                    .concat(r, ' instead')
                                            ),
                                                (i = r),
                                                (a = !1);
                                        }
                                        (t.selected = i),
                                            (this.media.quality = i),
                                            a &&
                                                this.storage.set({
                                                    quality: i,
                                                });
                                    }
                                },
                                get: function () {
                                    return this.media.quality;
                                },
                            },
                            {
                                key: 'loop',
                                set: function (e) {
                                    var t = X(e) ? e : this.config.loop.active;
                                    (this.config.loop.active = t),
                                        (this.media.loop = t);
                                },
                                get: function () {
                                    return Boolean(this.media.loop);
                                },
                            },
                            {
                                key: 'source',
                                set: function (e) {
                                    It.change.call(this, e);
                                },
                                get: function () {
                                    return this.media.currentSrc;
                                },
                            },
                            {
                                key: 'download',
                                get: function () {
                                    var e = this.config.urls.download;
                                    return ae(e) ? e : this.source;
                                },
                                set: function (e) {
                                    ae(e) &&
                                        ((this.config.urls.download = e),
                                        at.setDownloadUrl.call(this));
                                },
                            },
                            {
                                key: 'poster',
                                set: function (e) {
                                    this.isVideo
                                        ? bt.setPoster
                                              .call(this, e, !1)
                                              .catch(function () {})
                                        : this.debug.warn(
                                              'Poster can only be set for video'
                                          );
                                },
                                get: function () {
                                    return this.isVideo
                                        ? this.media.getAttribute('poster') ||
                                              this.media.getAttribute(
                                                  'data-poster'
                                              )
                                        : null;
                                },
                            },
                            {
                                key: 'ratio',
                                get: function () {
                                    if (!this.isVideo) return null;
                                    var e = Fe(Re.call(this));
                                    return J(e) ? e.join(':') : e;
                                },
                                set: function (e) {
                                    this.isVideo
                                        ? Q(e) && He(e)
                                            ? ((this.config.ratio = e),
                                              Ve.call(this))
                                            : this.debug.error(
                                                  'Invalid aspect ratio specified ('.concat(
                                                      e,
                                                      ')'
                                                  )
                                              )
                                        : this.debug.warn(
                                              'Aspect ratio can only be set for video'
                                          );
                                },
                            },
                            {
                                key: 'autoplay',
                                set: function (e) {
                                    var t = X(e) ? e : this.config.autoplay;
                                    this.config.autoplay = t;
                                },
                                get: function () {
                                    return Boolean(this.config.autoplay);
                                },
                            },
                            {
                                key: 'currentTrack',
                                set: function (e) {
                                    st.set.call(this, e, !1);
                                },
                                get: function () {
                                    var e = this.captions,
                                        t = e.toggled,
                                        n = e.currentTrack;
                                    return t ? n : -1;
                                },
                            },
                            {
                                key: 'language',
                                set: function (e) {
                                    st.setLanguage.call(this, e, !1);
                                },
                                get: function () {
                                    return (st.getCurrentTrack.call(this) || {})
                                        .language;
                                },
                            },
                            {
                                key: 'pip',
                                set: function (e) {
                                    if (Ne.pip) {
                                        var t = X(e) ? e : !this.pip;
                                        $(
                                            this.media.webkitSetPresentationMode
                                        ) &&
                                            this.media.webkitSetPresentationMode(
                                                t ? ct : ut
                                            ),
                                            $(
                                                this.media
                                                    .requestPictureInPicture
                                            ) &&
                                                (!this.pip && t
                                                    ? this.media.requestPictureInPicture()
                                                    : this.pip &&
                                                      !t &&
                                                      document.exitPictureInPicture());
                                    }
                                },
                                get: function () {
                                    return Ne.pip
                                        ? re(this.media.webkitPresentationMode)
                                            ? this.media ===
                                              document.pictureInPictureElement
                                            : this.media
                                                  .webkitPresentationMode === ct
                                        : null;
                                },
                            },
                        ],
                        [
                            {
                                key: 'supported',
                                value: function (e, t, n) {
                                    return Ne.check(e, t, n);
                                },
                            },
                            {
                                key: 'loadSprite',
                                value: function (e, t) {
                                    return Ze(e, t);
                                },
                            },
                            {
                                key: 'setup',
                                value: function (t) {
                                    var n =
                                            arguments.length > 1 &&
                                            void 0 !== arguments[1]
                                                ? arguments[1]
                                                : {},
                                        i = null;
                                    return (
                                        Q(t)
                                            ? (i = Array.from(
                                                  document.querySelectorAll(t)
                                              ))
                                            : G(t)
                                            ? (i = Array.from(t))
                                            : J(t) && (i = t.filter(Z)),
                                        re(i)
                                            ? null
                                            : i.map(function (t) {
                                                  return new e(t, n);
                                              })
                                    );
                                },
                            },
                        ]
                    ),
                    e
                );
            })();
        return (Ot.defaults = ((Lt = lt), JSON.parse(JSON.stringify(Lt)))), Ot;
    });
//# sourceMappingURL=plyr.js.map
