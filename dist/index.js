var w4 = Object.create;
var {
  defineProperty: U5,
  getPrototypeOf: _4,
  getOwnPropertyNames: j4,
} = Object;
var F4 = Object.prototype.hasOwnProperty;
var O4 = ($, J, Q) => {
  Q = $ != null ? w4(_4($)) : {};
  const Y =
    J || !$ || !$.__esModule
      ? U5(Q, "default", { value: $, enumerable: !0 })
      : Q;
  for (let G of j4($))
    if (!F4.call(Y, G)) U5(Y, G, { get: () => $[G], enumerable: !0 });
  return Y;
};
var T1 = ($, J) => () => (J || $((J = { exports: {} }).exports, J), J.exports);
var a5 = T1((J9, s5) => {
  var T4 = function (...$) {
      return (J) => J;
    },
    G5 = function ($, J) {
      Object.defineProperty($, "name", { value: J, configurable: !0 });
    },
    Z4 = function ($) {
      return new Proxy($, {
        get(J, Q) {
          if (Q in J) return J[Q];
          if (!h4.has(Q))
            throw new TypeError("Invalid enum value: ".concat(String(Q)));
        },
      });
    },
    m = function ($) {
      var J,
        Q,
        Y,
        G = $.length - 1,
        X = "",
        W = $[0];
      if (G > 0) {
        for (X += W, J = 1; J < G; J++)
          (Y = $[J] + ""), (Q = L - Y.length), Q && (X += V0(Q)), (X += Y);
        (W = $[J]), (Y = W + ""), (Q = L - Y.length), Q && (X += V0(Q));
      } else if (W === 0) return "0";
      for (; W % 10 === 0; ) W /= 10;
      return X + W;
    },
    n = function ($, J, Q) {
      if ($ !== ~~$ || $ < J || $ > Q) throw Error(w0 + $);
    },
    t0 = function ($, J, Q, Y) {
      var G, X, W, H;
      for (X = $[0]; X >= 10; X /= 10) --J;
      return (
        --J < 0
          ? ((J += L), (G = 0))
          : ((G = Math.ceil((J + 1) / L)), (J %= L)),
        (X = Z(10, L - J)),
        (H = $[G] % X | 0),
        Y == null
          ? J < 3
            ? (J == 0 ? (H = (H / 100) | 0) : J == 1 && (H = (H / 10) | 0),
              (W =
                (Q < 4 && H == 99999) ||
                (Q > 3 && H == 49999) ||
                H == 50000 ||
                H == 0))
            : (W =
                (((Q < 4 && H + 1 == X) || (Q > 3 && H + 1 == X / 2)) &&
                  (($[G + 1] / X / 100) | 0) == Z(10, J - 2) - 1) ||
                ((H == X / 2 || H == 0) && (($[G + 1] / X / 100) | 0) == 0))
          : J < 4
            ? (J == 0
                ? (H = (H / 1000) | 0)
                : J == 1
                  ? (H = (H / 100) | 0)
                  : J == 2 && (H = (H / 10) | 0),
              (W = ((Y || Q < 4) && H == 9999) || (!Y && Q > 3 && H == 4999)))
            : (W =
                (((Y || Q < 4) && H + 1 == X) ||
                  (!Y && Q > 3 && H + 1 == X / 2)) &&
                (($[G + 1] / X / 1000) | 0) == Z(10, J - 3) - 1),
        W
      );
    },
    D1 = function ($, J, Q) {
      for (var Y, G = [0], X, W = 0, H = $.length; W < H; ) {
        for (X = G.length; X--; ) G[X] *= J;
        for (G[0] += a1.indexOf($.charAt(W++)), Y = 0; Y < G.length; Y++)
          G[Y] > Q - 1 &&
            (G[Y + 1] === void 0 && (G[Y + 1] = 0),
            (G[Y + 1] += (G[Y] / Q) | 0),
            (G[Y] %= Q));
      }
      return G.reverse();
    },
    p4 = function ($, J) {
      var Q, Y, G;
      if (J.isZero()) return J;
      (Y = J.d.length),
        Y < 32
          ? ((Q = Math.ceil(Y / 3)), (G = (1 / N1(4, Q)).toString()))
          : ((Q = 16), (G = "2.3283064365386962890625e-10")),
        ($.precision += Q),
        (J = g0($, 1, J.times(G), new $(1)));
      for (var X = Q; X--; ) {
        var W = J.times(J);
        J = W.times(W).minus(W).times(8).plus(1);
      }
      return ($.precision -= Q), J;
    },
    D = function ($, J, Q, Y) {
      var G,
        X,
        W,
        H,
        q,
        z,
        B,
        M,
        V,
        _ = $.constructor;
      $: if (J != null) {
        if (((M = $.d), !M)) return $;
        for (G = 1, H = M[0]; H >= 10; H /= 10) G++;
        if (((X = J - G), X < 0))
          (X += L),
            (W = J),
            (B = M[(V = 0)]),
            (q = (B / Z(10, G - W - 1)) % 10 | 0);
        else if (((V = Math.ceil((X + 1) / L)), (H = M.length), V >= H))
          if (Y) {
            for (; H++ <= V; ) M.push(0);
            (B = q = 0), (G = 1), (X %= L), (W = X - L + 1);
          } else break $;
        else {
          for (B = H = M[V], G = 1; H >= 10; H /= 10) G++;
          (X %= L),
            (W = X - L + G),
            (q = W < 0 ? 0 : (B / Z(10, G - W - 1)) % 10 | 0);
        }
        if (
          ((Y =
            Y ||
            J < 0 ||
            M[V + 1] !== void 0 ||
            (W < 0 ? B : B % Z(10, G - W - 1))),
          (z =
            Q < 4
              ? (q || Y) && (Q == 0 || Q == ($.s < 0 ? 3 : 2))
              : q > 5 ||
                (q == 5 &&
                  (Q == 4 ||
                    Y ||
                    (Q == 6 &&
                      (X > 0 ? (W > 0 ? B / Z(10, G - W) : 0) : M[V - 1]) % 10 &
                        1) ||
                    Q == ($.s < 0 ? 8 : 7)))),
          J < 1 || !M[0])
        )
          return (
            (M.length = 0),
            z
              ? ((J -= $.e + 1),
                (M[0] = Z(10, (L - (J % L)) % L)),
                ($.e = -J || 0))
              : (M[0] = $.e = 0),
            $
          );
        if (
          (X == 0
            ? ((M.length = V), (H = 1), V--)
            : ((M.length = V + 1),
              (H = Z(10, L - X)),
              (M[V] = W > 0 ? ((B / Z(10, G - W)) % Z(10, W) | 0) * H : 0)),
          z)
        )
          for (;;)
            if (V == 0) {
              for (X = 1, W = M[0]; W >= 10; W /= 10) X++;
              for (W = M[0] += H, H = 1; W >= 10; W /= 10) H++;
              X != H && ($.e++, M[0] == $0 && (M[0] = 1));
              break;
            } else {
              if (((M[V] += H), M[V] != $0)) break;
              (M[V--] = 0), (H = 1);
            }
        for (X = M.length; M[--X] === 0; ) M.pop();
      }
      return (
        A &&
          ($.e > _.maxE
            ? (($.d = null), ($.e = NaN))
            : $.e < _.minE && (($.e = 0), ($.d = [0]))),
        $
      );
    },
    X0 = function ($, J, Q) {
      if (!$.isFinite()) return n5($);
      var Y,
        G = $.e,
        X = m($.d),
        W = X.length;
      return (
        J
          ? (Q && (Y = Q - W) > 0
              ? (X = X.charAt(0) + "." + X.slice(1) + V0(Y))
              : W > 1 && (X = X.charAt(0) + "." + X.slice(1)),
            (X = X + ($.e < 0 ? "e" : "e+") + $.e))
          : G < 0
            ? ((X = "0." + V0(-G - 1) + X),
              Q && (Y = Q - W) > 0 && (X += V0(Y)))
            : G >= W
              ? ((X += V0(G + 1 - W)),
                Q && (Y = Q - G - 1) > 0 && (X = X + "." + V0(Y)))
              : ((Y = G + 1) < W && (X = X.slice(0, Y) + "." + X.slice(Y)),
                Q &&
                  (Y = Q - W) > 0 &&
                  (G + 1 === W && (X += "."), (X += V0(Y)))),
        X
      );
    },
    S1 = function ($, J) {
      var Q = $[0];
      for (J *= L; Q >= 10; Q /= 10) J++;
      return J;
    },
    K1 = function ($, J, Q) {
      if (J > u4) throw ((A = !0), Q && ($.precision = Q), Error(m5));
      return D(new $(R1), J, 1, !0);
    },
    e = function ($, J, Q) {
      if (J > e1) throw Error(m5);
      return D(new $(L1), J, Q, !0);
    },
    p5 = function ($) {
      var J = $.length - 1,
        Q = J * L + 1;
      if (((J = $[J]), J)) {
        for (; J % 10 == 0; J /= 10) Q--;
        for (J = $[0]; J >= 10; J /= 10) Q++;
      }
      return Q;
    },
    V0 = function ($) {
      for (var J = ""; $--; ) J += "0";
      return J;
    },
    d5 = function ($, J, Q, Y) {
      var G,
        X = new $(1),
        W = Math.ceil(Y / L + 4);
      for (A = !1; ; ) {
        if (
          (Q % 2 && ((X = X.times(J)), T5(X.d, W) && (G = !0)),
          (Q = u(Q / 2)),
          Q === 0)
        ) {
          (Q = X.d.length - 1), G && X.d[Q] === 0 && ++X.d[Q];
          break;
        }
        (J = J.times(J)), T5(J.d, W);
      }
      return (A = !0), X;
    },
    k5 = function ($) {
      return $.d[$.d.length - 1] & 1;
    },
    i5 = function ($, J, Q) {
      for (var Y, G = new $(J[0]), X = 0; ++X < J.length; )
        if (((Y = new $(J[X])), Y.s)) G[Q](Y) && (G = Y);
        else {
          G = Y;
          break;
        }
      return G;
    },
    $5 = function ($, J) {
      var Q,
        Y,
        G,
        X,
        W,
        H,
        q,
        z = 0,
        B = 0,
        M = 0,
        V = $.constructor,
        _ = V.rounding,
        N = V.precision;
      if (!$.d || !$.d[0] || $.e > 17)
        return new V(
          $.d
            ? $.d[0]
              ? $.s < 0
                ? 0
                : Infinity
              : 1
            : $.s
              ? $.s < 0
                ? 0
                : $
              : NaN,
        );
      for (
        J == null ? ((A = !1), (q = N)) : (q = J), H = new V(0.03125);
        $.e > -2;

      )
        ($ = $.times(H)), (M += 5);
      for (
        Y = ((Math.log(Z(2, M)) / Math.LN10) * 2 + 5) | 0,
          q += Y,
          Q = X = W = new V(1),
          V.precision = q;
        ;

      ) {
        if (
          ((X = D(X.times($), q, 1)),
          (Q = Q.times(++B)),
          (H = W.plus(P(X, Q, q, 1))),
          m(H.d).slice(0, q) === m(W.d).slice(0, q))
        ) {
          for (G = M; G--; ) W = D(W.times(W), q, 1);
          if (J == null)
            if (z < 3 && t0(W.d, q - Y, _, z))
              (V.precision = q += 10), (Q = X = H = new V(1)), (B = 0), z++;
            else return D(W, (V.precision = N), _, (A = !0));
          else return (V.precision = N), W;
        }
        W = H;
      }
    },
    U0 = function ($, J) {
      var Q,
        Y,
        G,
        X,
        W,
        H,
        q,
        z,
        B,
        M,
        V,
        _ = 1,
        N = 10,
        O = $,
        I = O.d,
        v = O.constructor,
        l = v.rounding,
        C = v.precision;
      if (O.s < 0 || !I || !I[0] || (!O.e && I[0] == 1 && I.length == 1))
        return new v(I && !I[0] ? -Infinity : O.s != 1 ? NaN : I ? 0 : O);
      if (
        (J == null ? ((A = !1), (B = C)) : (B = J),
        (v.precision = B += N),
        (Q = m(I)),
        (Y = Q.charAt(0)),
        Math.abs((X = O.e)) < 1500000000000000)
      ) {
        for (; (Y < 7 && Y != 1) || (Y == 1 && Q.charAt(1) > 3); )
          (O = O.times($)), (Q = m(O.d)), (Y = Q.charAt(0)), _++;
        (X = O.e),
          Y > 1
            ? ((O = new v("0." + Q)), X++)
            : (O = new v(Y + "." + Q.slice(1)));
      } else
        return (
          (z = K1(v, B + 2, C).times(X + "")),
          (O = U0(new v(Y + "." + Q.slice(1)), B - N).plus(z)),
          (v.precision = C),
          J == null ? D(O, C, l, (A = !0)) : O
        );
      for (
        M = O,
          q = W = O = P(O.minus(1), O.plus(1), B, 1),
          V = D(O.times(O), B, 1),
          G = 3;
        ;

      ) {
        if (
          ((W = D(W.times(V), B, 1)),
          (z = q.plus(P(W, new v(G), B, 1))),
          m(z.d).slice(0, B) === m(q.d).slice(0, B))
        )
          if (
            ((q = q.times(2)),
            X !== 0 && (q = q.plus(K1(v, B + 2, C).times(X + ""))),
            (q = P(q, new v(_), B, 1)),
            J == null)
          )
            if (t0(q.d, B - N, l, H))
              (v.precision = B += N),
                (z = W = O = P(M.minus(1), M.plus(1), B, 1)),
                (V = D(O.times(O), B, 1)),
                (G = H = 1);
            else return D(q, (v.precision = C), l, (A = !0));
          else return (v.precision = C), q;
        (q = z), (G += 2);
      }
    },
    n5 = function ($) {
      return String(($.s * $.s) / 0);
    },
    J5 = function ($, J) {
      var Q, Y, G;
      for (
        (Q = J.indexOf(".")) > -1 && (J = J.replace(".", "")),
          (Y = J.search(/e/i)) > 0
            ? (Q < 0 && (Q = Y),
              (Q += +J.slice(Y + 1)),
              (J = J.substring(0, Y)))
            : Q < 0 && (Q = J.length),
          Y = 0;
        J.charCodeAt(Y) === 48;
        Y++
      );
      for (G = J.length; J.charCodeAt(G - 1) === 48; --G);
      if (((J = J.slice(Y, G)), J)) {
        if (
          ((G -= Y),
          ($.e = Q = Q - Y - 1),
          ($.d = []),
          (Y = (Q + 1) % L),
          Q < 0 && (Y += L),
          Y < G)
        ) {
          for (Y && $.d.push(+J.slice(0, Y)), G -= L; Y < G; )
            $.d.push(+J.slice(Y, (Y += L)));
          (J = J.slice(Y)), (Y = L - J.length);
        } else Y -= G;
        for (; Y--; ) J += "0";
        $.d.push(+J),
          A &&
            ($.e > $.constructor.maxE
              ? (($.d = null), ($.e = NaN))
              : $.e < $.constructor.minE && (($.e = 0), ($.d = [0])));
      } else ($.e = 0), ($.d = [0]);
      return $;
    },
    d4 = function ($, J) {
      var Q, Y, G, X, W, H, q, z, B;
      if (J.indexOf("_") > -1) {
        if (((J = J.replace(/(\d)_(?=\d)/g, "$1")), u5.test(J)))
          return J5($, J);
      } else if (J === "Infinity" || J === "NaN")
        return +J || ($.s = NaN), ($.e = NaN), ($.d = null), $;
      if (m4.test(J)) (Q = 16), (J = J.toLowerCase());
      else if (y4.test(J)) Q = 2;
      else if (l4.test(J)) Q = 8;
      else throw Error(w0 + J);
      for (
        X = J.search(/p/i),
          X > 0
            ? ((q = +J.slice(X + 1)), (J = J.substring(2, X)))
            : (J = J.slice(2)),
          X = J.indexOf("."),
          W = X >= 0,
          Y = $.constructor,
          W &&
            ((J = J.replace(".", "")),
            (H = J.length),
            (X = H - X),
            (G = d5(Y, new Y(Q), X, X * 2))),
          z = D1(J, Q, $0),
          B = z.length - 1,
          X = B;
        z[X] === 0;
        --X
      )
        z.pop();
      return X < 0
        ? new Y($.s * 0)
        : (($.e = S1(z, B)),
          ($.d = z),
          (A = !1),
          W && ($ = P($, G, H * 4)),
          q && ($ = $.times(Math.abs(q) < 54 ? Z(2, q) : e0.pow(2, q))),
          (A = !0),
          $);
    },
    i4 = function ($, J) {
      var Q,
        Y = J.d.length;
      if (Y < 3) return J.isZero() ? J : g0($, 2, J, J);
      (Q = 1.4 * Math.sqrt(Y)),
        (Q = Q > 16 ? 16 : Q | 0),
        (J = J.times(1 / N1(5, Q))),
        (J = g0($, 2, J, J));
      for (var G, X = new $(5), W = new $(16), H = new $(20); Q--; )
        (G = J.times(J)), (J = J.times(X.plus(G.times(W.times(G).minus(H)))));
      return J;
    },
    g0 = function ($, J, Q, Y, G) {
      var X,
        W,
        H,
        q,
        z = 1,
        B = $.precision,
        M = Math.ceil(B / L);
      for (A = !1, q = Q.times(Q), H = new $(Y); ; ) {
        if (
          ((W = P(H.times(q), new $(J++ * J++), B, 1)),
          (H = G ? Y.plus(W) : Y.minus(W)),
          (Y = P(W.times(q), new $(J++ * J++), B, 1)),
          (W = H.plus(Y)),
          W.d[M] !== void 0)
        ) {
          for (X = M; W.d[X] === H.d[X] && X--; );
          if (X == -1) break;
        }
        (X = H), (H = Y), (Y = W), (W = X), z++;
      }
      return (A = !0), (W.d.length = M + 1), W;
    },
    N1 = function ($, J) {
      for (var Q = $; --J; ) Q *= $;
      return Q;
    },
    o5 = function ($, J) {
      var Q,
        Y = J.s < 0,
        G = e($, $.precision, 1),
        X = G.times(0.5);
      if (((J = J.abs()), J.lte(X))) return (B0 = Y ? 4 : 1), J;
      if (((Q = J.divToInt(G)), Q.isZero())) B0 = Y ? 3 : 2;
      else {
        if (((J = J.minus(Q.times(G))), J.lte(X)))
          return (B0 = k5(Q) ? (Y ? 2 : 3) : Y ? 4 : 1), J;
        B0 = k5(Q) ? (Y ? 1 : 4) : Y ? 3 : 2;
      }
      return J.minus(G).abs();
    },
    X5 = function ($, J, Q, Y) {
      var G,
        X,
        W,
        H,
        q,
        z,
        B,
        M,
        V,
        _ = $.constructor,
        N = Q !== void 0;
      if (
        (N
          ? (n(Q, 1, _0), Y === void 0 ? (Y = _.rounding) : n(Y, 0, 8))
          : ((Q = _.precision), (Y = _.rounding)),
        !$.isFinite())
      )
        B = n5($);
      else {
        for (
          B = X0($),
            W = B.indexOf("."),
            N
              ? ((G = 2), J == 16 ? (Q = Q * 4 - 3) : J == 8 && (Q = Q * 3 - 2))
              : (G = J),
            W >= 0 &&
              ((B = B.replace(".", "")),
              (V = new _(1)),
              (V.e = B.length - W),
              (V.d = D1(X0(V), 10, G)),
              (V.e = V.d.length)),
            M = D1(B, 10, G),
            X = q = M.length;
          M[--q] == 0;

        )
          M.pop();
        if (!M[0]) B = N ? "0p+0" : "0";
        else {
          if (
            (W < 0
              ? X--
              : (($ = new _($)),
                ($.d = M),
                ($.e = X),
                ($ = P($, V, Q, Y, 0, G)),
                (M = $.d),
                (X = $.e),
                (z = y5)),
            (W = M[Q]),
            (H = G / 2),
            (z = z || M[Q + 1] !== void 0),
            (z =
              Y < 4
                ? (W !== void 0 || z) && (Y === 0 || Y === ($.s < 0 ? 3 : 2))
                : W > H ||
                  (W === H &&
                    (Y === 4 ||
                      z ||
                      (Y === 6 && M[Q - 1] & 1) ||
                      Y === ($.s < 0 ? 8 : 7)))),
            (M.length = Q),
            z)
          )
            for (; ++M[--Q] > G - 1; ) (M[Q] = 0), Q || (++X, M.unshift(1));
          for (q = M.length; !M[q - 1]; --q);
          for (W = 0, B = ""; W < q; W++) B += a1.charAt(M[W]);
          if (N) {
            if (q > 1)
              if (J == 16 || J == 8) {
                for (W = J == 16 ? 4 : 3, --q; q % W; q++) B += "0";
                for (M = D1(B, G, J), q = M.length; !M[q - 1]; --q);
                for (W = 1, B = "1."; W < q; W++) B += a1.charAt(M[W]);
              } else B = B.charAt(0) + "." + B.slice(1);
            B = B + (X < 0 ? "p" : "p+") + X;
          } else if (X < 0) {
            for (; ++X; ) B = "0" + B;
            B = "0." + B;
          } else if (++X > q) for (X -= q; X--; ) B += "0";
          else X < q && (B = B.slice(0, X) + "." + B.slice(X));
        }
        B = (J == 16 ? "0x" : J == 2 ? "0b" : J == 8 ? "0o" : "") + B;
      }
      return $.s < 0 ? "-" + B : B;
    },
    T5 = function ($, J) {
      if ($.length > J) return ($.length = J), !0;
    },
    n4 = function ($) {
      return new this($).abs();
    },
    o4 = function ($) {
      return new this($).acos();
    },
    r4 = function ($) {
      return new this($).acosh();
    },
    s4 = function ($, J) {
      return new this($).plus(J);
    },
    a4 = function ($) {
      return new this($).asin();
    },
    t4 = function ($) {
      return new this($).asinh();
    },
    e4 = function ($) {
      return new this($).atan();
    },
    $2 = function ($) {
      return new this($).atanh();
    },
    J2 = function ($, J) {
      ($ = new this($)), (J = new this(J));
      var Q,
        Y = this.precision,
        G = this.rounding,
        X = Y + 4;
      return (
        !$.s || !J.s
          ? (Q = new this(NaN))
          : !$.d && !J.d
            ? ((Q = e(this, X, 1).times(J.s > 0 ? 0.25 : 0.75)), (Q.s = $.s))
            : !J.d || $.isZero()
              ? ((Q = J.s < 0 ? e(this, Y, G) : new this(0)), (Q.s = $.s))
              : !$.d || J.isZero()
                ? ((Q = e(this, X, 1).times(0.5)), (Q.s = $.s))
                : J.s < 0
                  ? ((this.precision = X),
                    (this.rounding = 1),
                    (Q = this.atan(P($, J, X, 1))),
                    (J = e(this, X, 1)),
                    (this.precision = Y),
                    (this.rounding = G),
                    (Q = $.s < 0 ? Q.minus(J) : Q.plus(J)))
                  : (Q = this.atan(P($, J, X, 1))),
        Q
      );
    },
    Q2 = function ($) {
      return new this($).cbrt();
    },
    Y2 = function ($) {
      return D(($ = new this($)), $.e + 1, 2);
    },
    G2 = function ($, J, Q) {
      return new this($).clamp(J, Q);
    },
    X2 = function ($) {
      if (!$ || typeof $ != "object") throw Error(A1 + "Object expected");
      var J,
        Q,
        Y,
        G = $.defaults === !0,
        X = [
          "precision",
          1,
          _0,
          "rounding",
          0,
          8,
          "toExpNeg",
          -T0,
          0,
          "toExpPos",
          0,
          T0,
          "maxE",
          0,
          T0,
          "minE",
          -T0,
          0,
          "modulo",
          0,
          9,
        ];
      for (J = 0; J < X.length; J += 3)
        if (((Q = X[J]), G && (this[Q] = t1[Q]), (Y = $[Q]) !== void 0))
          if (u(Y) === Y && Y >= X[J + 1] && Y <= X[J + 2]) this[Q] = Y;
          else throw Error(w0 + Q + ": " + Y);
      if (((Q = "crypto"), G && (this[Q] = t1[Q]), (Y = $[Q]) !== void 0))
        if (Y === !0 || Y === !1 || Y === 0 || Y === 1)
          if (Y)
            if (
              typeof crypto < "u" &&
              crypto &&
              (crypto.getRandomValues || crypto.randomBytes)
            )
              this[Q] = !0;
            else throw Error(l5);
          else this[Q] = !1;
        else throw Error(w0 + Q + ": " + Y);
      return this;
    },
    W2 = function ($) {
      return new this($).cos();
    },
    H2 = function ($) {
      return new this($).cosh();
    },
    r5 = function ($) {
      var J, Q, Y;
      function G(X) {
        var W,
          H,
          q,
          z = this;
        if (!(z instanceof G)) return new G(X);
        if (((z.constructor = G), g5(X))) {
          (z.s = X.s),
            A
              ? !X.d || X.e > G.maxE
                ? ((z.e = NaN), (z.d = null))
                : X.e < G.minE
                  ? ((z.e = 0), (z.d = [0]))
                  : ((z.e = X.e), (z.d = X.d.slice()))
              : ((z.e = X.e), (z.d = X.d ? X.d.slice() : X.d));
          return;
        }
        if (((q = typeof X), q === "number")) {
          if (X === 0) {
            (z.s = 1 / X < 0 ? -1 : 1), (z.e = 0), (z.d = [0]);
            return;
          }
          if (
            (X < 0 ? ((X = -X), (z.s = -1)) : (z.s = 1), X === ~~X && X < 1e7)
          ) {
            for (W = 0, H = X; H >= 10; H /= 10) W++;
            A
              ? W > G.maxE
                ? ((z.e = NaN), (z.d = null))
                : W < G.minE
                  ? ((z.e = 0), (z.d = [0]))
                  : ((z.e = W), (z.d = [X]))
              : ((z.e = W), (z.d = [X]));
            return;
          } else if (X * 0 !== 0) {
            X || (z.s = NaN), (z.e = NaN), (z.d = null);
            return;
          }
          return J5(z, X.toString());
        } else if (q !== "string") throw Error(w0 + X);
        return (
          (H = X.charCodeAt(0)) === 45
            ? ((X = X.slice(1)), (z.s = -1))
            : (H === 43 && (X = X.slice(1)), (z.s = 1)),
          u5.test(X) ? J5(z, X) : d4(z, X)
        );
      }
      if (
        ((G.prototype = U),
        (G.ROUND_UP = 0),
        (G.ROUND_DOWN = 1),
        (G.ROUND_CEIL = 2),
        (G.ROUND_FLOOR = 3),
        (G.ROUND_HALF_UP = 4),
        (G.ROUND_HALF_DOWN = 5),
        (G.ROUND_HALF_EVEN = 6),
        (G.ROUND_HALF_CEIL = 7),
        (G.ROUND_HALF_FLOOR = 8),
        (G.EUCLID = 9),
        (G.config = G.set = X2),
        (G.clone = r5),
        (G.isDecimal = g5),
        (G.abs = n4),
        (G.acos = o4),
        (G.acosh = r4),
        (G.add = s4),
        (G.asin = a4),
        (G.asinh = t4),
        (G.atan = e4),
        (G.atanh = $2),
        (G.atan2 = J2),
        (G.cbrt = Q2),
        (G.ceil = Y2),
        (G.clamp = G2),
        (G.cos = W2),
        (G.cosh = H2),
        (G.div = q2),
        (G.exp = z2),
        (G.floor = B2),
        (G.hypot = M2),
        (G.ln = V2),
        (G.log = U2),
        (G.log10 = _2),
        (G.log2 = w2),
        (G.max = j2),
        (G.min = F2),
        (G.mod = O2),
        (G.mul = D2),
        (G.pow = R2),
        (G.random = L2),
        (G.round = K2),
        (G.sign = A2),
        (G.sin = S2),
        (G.sinh = N2),
        (G.sqrt = E2),
        (G.sub = b2),
        (G.sum = v2),
        (G.tan = C2),
        (G.tanh = f2),
        (G.trunc = I2),
        $ === void 0 && ($ = {}),
        $ && $.defaults !== !0)
      )
        for (
          Y = [
            "precision",
            "rounding",
            "toExpNeg",
            "toExpPos",
            "maxE",
            "minE",
            "modulo",
            "crypto",
          ],
            J = 0;
          J < Y.length;

        )
          $.hasOwnProperty((Q = Y[J++])) || ($[Q] = this[Q]);
      return G.config($), G;
    },
    q2 = function ($, J) {
      return new this($).div(J);
    },
    z2 = function ($) {
      return new this($).exp();
    },
    B2 = function ($) {
      return D(($ = new this($)), $.e + 1, 3);
    },
    M2 = function () {
      var $,
        J,
        Q = new this(0);
      for (A = !1, $ = 0; $ < arguments.length; )
        if (((J = new this(arguments[$++])), J.d))
          Q.d && (Q = Q.plus(J.times(J)));
        else {
          if (J.s) return (A = !0), new this(Infinity);
          Q = J;
        }
      return (A = !0), Q.sqrt();
    },
    g5 = function ($) {
      return $ instanceof e0 || ($ && $.toStringTag === c5) || !1;
    },
    V2 = function ($) {
      return new this($).ln();
    },
    U2 = function ($, J) {
      return new this($).log(J);
    },
    w2 = function ($) {
      return new this($).log(2);
    },
    _2 = function ($) {
      return new this($).log(10);
    },
    j2 = function () {
      return i5(this, arguments, "lt");
    },
    F2 = function () {
      return i5(this, arguments, "gt");
    },
    O2 = function ($, J) {
      return new this($).mod(J);
    },
    D2 = function ($, J) {
      return new this($).mul(J);
    },
    R2 = function ($, J) {
      return new this($).pow(J);
    },
    L2 = function ($) {
      var J,
        Q,
        Y,
        G,
        X = 0,
        W = new this(1),
        H = [];
      if (
        ($ === void 0 ? ($ = this.precision) : n($, 1, _0),
        (Y = Math.ceil($ / L)),
        this.crypto)
      )
        if (crypto.getRandomValues)
          for (J = crypto.getRandomValues(new Uint32Array(Y)); X < Y; )
            (G = J[X]),
              G >= 4290000000
                ? (J[X] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (H[X++] = G % 1e7);
        else if (crypto.randomBytes) {
          for (J = crypto.randomBytes((Y *= 4)); X < Y; )
            (G =
              J[X] +
              (J[X + 1] << 8) +
              (J[X + 2] << 16) +
              ((J[X + 3] & 127) << 24)),
              G >= 2140000000
                ? crypto.randomBytes(4).copy(J, X)
                : (H.push(G % 1e7), (X += 4));
          X = Y / 4;
        } else throw Error(l5);
      else for (; X < Y; ) H[X++] = (Math.random() * 1e7) | 0;
      for (
        Y = H[--X],
          $ %= L,
          Y && $ && ((G = Z(10, L - $)), (H[X] = ((Y / G) | 0) * G));
        H[X] === 0;
        X--
      )
        H.pop();
      if (X < 0) (Q = 0), (H = [0]);
      else {
        for (Q = -1; H[0] === 0; Q -= L) H.shift();
        for (Y = 1, G = H[0]; G >= 10; G /= 10) Y++;
        Y < L && (Q -= L - Y);
      }
      return (W.e = Q), (W.d = H), W;
    },
    K2 = function ($) {
      return D(($ = new this($)), $.e + 1, this.rounding);
    },
    A2 = function ($) {
      return ($ = new this($)), $.d ? ($.d[0] ? $.s : 0 * $.s) : $.s || NaN;
    },
    S2 = function ($) {
      return new this($).sin();
    },
    N2 = function ($) {
      return new this($).sinh();
    },
    E2 = function ($) {
      return new this($).sqrt();
    },
    b2 = function ($, J) {
      return new this($).sub(J);
    },
    v2 = function () {
      var $ = 0,
        J = arguments,
        Q = new this(J[$]);
      for (A = !1; Q.s && ++$ < J.length; ) Q = Q.plus(J[$]);
      return (A = !0), D(Q, this.precision, this.rounding);
    },
    C2 = function ($) {
      return new this($).tan();
    },
    f2 = function ($) {
      return new this($).tanh();
    },
    I2 = function ($) {
      return D(($ = new this($)), $.e + 1, 1);
    },
    g2 = function () {
      var $, J, Q;
      return typeof Netlify == "object"
        ? "netlify"
        : typeof EdgeRuntime == "string"
          ? "edge-light"
          : (($ = globalThis.navigator) == null ? void 0 : $.userAgent) === k2
            ? "workerd"
            : globalThis.Deno
              ? "deno"
              : globalThis.__lagon__
                ? "lagon"
                : ((Q =
                      (J = globalThis.process) == null ? void 0 : J.release) ==
                    null
                      ? void 0
                      : Q.name) === T2
                  ? "node"
                  : globalThis.Bun
                    ? "bun"
                    : globalThis.fastly
                      ? "fastly"
                      : "unknown";
    },
    Q5 = Object.defineProperty,
    C4 = Object.getOwnPropertyDescriptor,
    f4 = Object.getOwnPropertyNames,
    I4 = Object.prototype.hasOwnProperty,
    x5 = ($, J) => {
      for (var Q in J) Q5($, Q, { get: J[Q], enumerable: !0 });
    },
    P4 = ($, J, Q, Y) => {
      if ((J && typeof J == "object") || typeof J == "function")
        for (let G of f4(J))
          !I4.call($, G) &&
            G !== Q &&
            Q5($, G, {
              get: () => J[G],
              enumerable: !(Y = C4(J, G)) || Y.enumerable,
            });
      return $;
    },
    k4 = ($) => P4(Q5({}, "__esModule", { value: !0 }), $),
    h5 = {};
  x5(h5, {
    Decimal: () => P2,
    Public: () => Z5,
    detectRuntime: () => g2,
    makeStrictEnum: () => Z4,
    objectEnumValues: () => x4,
  });
  s5.exports = k4(h5);
  var Z5 = {};
  x5(Z5, { validator: () => T4 });
  var O1 = Symbol(),
    n1 = new WeakMap(),
    g4 = class {
      constructor($) {
        $ === O1
          ? n1.set(this, "Prisma.".concat(this._getName()))
          : n1.set(
              this,
              "new Prisma."
                .concat(this._getNamespace(), ".")
                .concat(this._getName(), "()"),
            );
      }
      _getName() {
        return this.constructor.name;
      }
      toString() {
        return n1.get(this);
      }
    },
    Y5 = class extends g4 {
      _getNamespace() {
        return "NullTypes";
      }
    },
    o1 = class extends Y5 {};
  G5(o1, "DbNull");
  var r1 = class extends Y5 {};
  G5(r1, "JsonNull");
  var s1 = class extends Y5 {};
  G5(s1, "AnyNull");
  var x4 = {
      classes: { DbNull: o1, JsonNull: r1, AnyNull: s1 },
      instances: {
        DbNull: new o1(O1),
        JsonNull: new r1(O1),
        AnyNull: new s1(O1),
      },
    },
    h4 = new Set([
      "toJSON",
      "$$typeof",
      "asymmetricMatch",
      Symbol.iterator,
      Symbol.toStringTag,
      Symbol.isConcatSpreadable,
      Symbol.toPrimitive,
    ]),
    T0 = 9000000000000000,
    _0 = 1e9,
    a1 = "0123456789abcdef",
    R1 =
      "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
    L1 =
      "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
    t1 = {
      precision: 20,
      rounding: 4,
      modulo: 1,
      toExpNeg: -7,
      toExpPos: 21,
      minE: -T0,
      maxE: T0,
      crypto: !1,
    },
    y5,
    B0,
    A = !0,
    A1 = "[DecimalError] ",
    w0 = A1 + "Invalid argument: ",
    m5 = A1 + "Precision limit exceeded",
    l5 = A1 + "crypto unavailable",
    c5 = "[object Decimal]",
    u = Math.floor,
    Z = Math.pow,
    y4 = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
    m4 = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
    l4 = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
    u5 = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    $0 = 1e7,
    L = 7,
    c4 = 9007199254740991,
    u4 = R1.length - 1,
    e1 = L1.length - 1,
    U = { toStringTag: c5 };
  U.absoluteValue = U.abs = function () {
    var $ = new this.constructor(this);
    return $.s < 0 && ($.s = 1), D($);
  };
  U.ceil = function () {
    return D(new this.constructor(this), this.e + 1, 2);
  };
  U.clampedTo = U.clamp = function ($, J) {
    var Q,
      Y = this,
      G = Y.constructor;
    if ((($ = new G($)), (J = new G(J)), !$.s || !J.s)) return new G(NaN);
    if ($.gt(J)) throw Error(w0 + J);
    return (Q = Y.cmp($)), Q < 0 ? $ : Y.cmp(J) > 0 ? J : new G(Y);
  };
  U.comparedTo = U.cmp = function ($) {
    var J,
      Q,
      Y,
      G,
      X = this,
      W = X.d,
      H = ($ = new X.constructor($)).d,
      q = X.s,
      z = $.s;
    if (!W || !H)
      return !q || !z ? NaN : q !== z ? q : W === H ? 0 : !W ^ (q < 0) ? 1 : -1;
    if (!W[0] || !H[0]) return W[0] ? q : H[0] ? -z : 0;
    if (q !== z) return q;
    if (X.e !== $.e) return (X.e > $.e) ^ (q < 0) ? 1 : -1;
    for (Y = W.length, G = H.length, J = 0, Q = Y < G ? Y : G; J < Q; ++J)
      if (W[J] !== H[J]) return (W[J] > H[J]) ^ (q < 0) ? 1 : -1;
    return Y === G ? 0 : (Y > G) ^ (q < 0) ? 1 : -1;
  };
  U.cosine = U.cos = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return Q.d
      ? Q.d[0]
        ? (($ = Y.precision),
          (J = Y.rounding),
          (Y.precision = $ + Math.max(Q.e, Q.sd()) + L),
          (Y.rounding = 1),
          (Q = p4(Y, o5(Y, Q))),
          (Y.precision = $),
          (Y.rounding = J),
          D(B0 == 2 || B0 == 3 ? Q.neg() : Q, $, J, !0))
        : new Y(1)
      : new Y(NaN);
  };
  U.cubeRoot = U.cbrt = function () {
    var $,
      J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z,
      B = this,
      M = B.constructor;
    if (!B.isFinite() || B.isZero()) return new M(B);
    for (
      A = !1,
        X = B.s * Z(B.s * B, 0.3333333333333333),
        !X || Math.abs(X) == Infinity
          ? ((Q = m(B.d)),
            ($ = B.e),
            (X = ($ - Q.length + 1) % 3) &&
              (Q += X == 1 || X == -2 ? "0" : "00"),
            (X = Z(Q, 0.3333333333333333)),
            ($ = u(($ + 1) / 3) - ($ % 3 == ($ < 0 ? -1 : 2))),
            X == Infinity
              ? (Q = "5e" + $)
              : ((Q = X.toExponential()),
                (Q = Q.slice(0, Q.indexOf("e") + 1) + $)),
            (Y = new M(Q)),
            (Y.s = B.s))
          : (Y = new M(X.toString())),
        W = ($ = M.precision) + 3;
      ;

    )
      if (
        ((H = Y),
        (q = H.times(H).times(H)),
        (z = q.plus(B)),
        (Y = P(z.plus(B).times(H), z.plus(q), W + 2, 1)),
        m(H.d).slice(0, W) === (Q = m(Y.d)).slice(0, W))
      )
        if (((Q = Q.slice(W - 3, W + 1)), Q == "9999" || (!G && Q == "4999"))) {
          if (!G && (D(H, $ + 1, 0), H.times(H).times(H).eq(B))) {
            Y = H;
            break;
          }
          (W += 4), (G = 1);
        } else {
          (!+Q || (!+Q.slice(1) && Q.charAt(0) == "5")) &&
            (D(Y, $ + 1, 1), (J = !Y.times(Y).times(Y).eq(B)));
          break;
        }
    return (A = !0), D(Y, $, M.rounding, J);
  };
  U.decimalPlaces = U.dp = function () {
    var $,
      J = this.d,
      Q = NaN;
    if (J) {
      if ((($ = J.length - 1), (Q = ($ - u(this.e / L)) * L), ($ = J[$]), $))
        for (; $ % 10 == 0; $ /= 10) Q--;
      Q < 0 && (Q = 0);
    }
    return Q;
  };
  U.dividedBy = U.div = function ($) {
    return P(this, new this.constructor($));
  };
  U.dividedToIntegerBy = U.divToInt = function ($) {
    var J = this,
      Q = J.constructor;
    return D(P(J, new Q($), 0, 1, 1), Q.precision, Q.rounding);
  };
  U.equals = U.eq = function ($) {
    return this.cmp($) === 0;
  };
  U.floor = function () {
    return D(new this.constructor(this), this.e + 1, 3);
  };
  U.greaterThan = U.gt = function ($) {
    return this.cmp($) > 0;
  };
  U.greaterThanOrEqualTo = U.gte = function ($) {
    var J = this.cmp($);
    return J == 1 || J === 0;
  };
  U.hyperbolicCosine = U.cosh = function () {
    var $,
      J,
      Q,
      Y,
      G,
      X = this,
      W = X.constructor,
      H = new W(1);
    if (!X.isFinite()) return new W(X.s ? Infinity : NaN);
    if (X.isZero()) return H;
    (Q = W.precision),
      (Y = W.rounding),
      (W.precision = Q + Math.max(X.e, X.sd()) + 4),
      (W.rounding = 1),
      (G = X.d.length),
      G < 32
        ? (($ = Math.ceil(G / 3)), (J = (1 / N1(4, $)).toString()))
        : (($ = 16), (J = "2.3283064365386962890625e-10")),
      (X = g0(W, 1, X.times(J), new W(1), !0));
    for (var q, z = $, B = new W(8); z--; )
      (q = X.times(X)), (X = H.minus(q.times(B.minus(q.times(B)))));
    return D(X, (W.precision = Q), (W.rounding = Y), !0);
  };
  U.hyperbolicSine = U.sinh = function () {
    var $,
      J,
      Q,
      Y,
      G = this,
      X = G.constructor;
    if (!G.isFinite() || G.isZero()) return new X(G);
    if (
      ((J = X.precision),
      (Q = X.rounding),
      (X.precision = J + Math.max(G.e, G.sd()) + 4),
      (X.rounding = 1),
      (Y = G.d.length),
      Y < 3)
    )
      G = g0(X, 2, G, G, !0);
    else {
      ($ = 1.4 * Math.sqrt(Y)),
        ($ = $ > 16 ? 16 : $ | 0),
        (G = G.times(1 / N1(5, $))),
        (G = g0(X, 2, G, G, !0));
      for (var W, H = new X(5), q = new X(16), z = new X(20); $--; )
        (W = G.times(G)), (G = G.times(H.plus(W.times(q.times(W).plus(z)))));
    }
    return (X.precision = J), (X.rounding = Q), D(G, J, Q, !0);
  };
  U.hyperbolicTangent = U.tanh = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return Q.isFinite()
      ? Q.isZero()
        ? new Y(Q)
        : (($ = Y.precision),
          (J = Y.rounding),
          (Y.precision = $ + 7),
          (Y.rounding = 1),
          P(Q.sinh(), Q.cosh(), (Y.precision = $), (Y.rounding = J)))
      : new Y(Q.s);
  };
  U.inverseCosine = U.acos = function () {
    var $,
      J = this,
      Q = J.constructor,
      Y = J.abs().cmp(1),
      G = Q.precision,
      X = Q.rounding;
    return Y !== -1
      ? Y === 0
        ? J.isNeg()
          ? e(Q, G, X)
          : new Q(0)
        : new Q(NaN)
      : J.isZero()
        ? e(Q, G + 4, X).times(0.5)
        : ((Q.precision = G + 6),
          (Q.rounding = 1),
          (J = J.asin()),
          ($ = e(Q, G + 4, X).times(0.5)),
          (Q.precision = G),
          (Q.rounding = X),
          $.minus(J));
  };
  U.inverseHyperbolicCosine = U.acosh = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return Q.lte(1)
      ? new Y(Q.eq(1) ? 0 : NaN)
      : Q.isFinite()
        ? (($ = Y.precision),
          (J = Y.rounding),
          (Y.precision = $ + Math.max(Math.abs(Q.e), Q.sd()) + 4),
          (Y.rounding = 1),
          (A = !1),
          (Q = Q.times(Q).minus(1).sqrt().plus(Q)),
          (A = !0),
          (Y.precision = $),
          (Y.rounding = J),
          Q.ln())
        : new Y(Q);
  };
  U.inverseHyperbolicSine = U.asinh = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return !Q.isFinite() || Q.isZero()
      ? new Y(Q)
      : (($ = Y.precision),
        (J = Y.rounding),
        (Y.precision = $ + 2 * Math.max(Math.abs(Q.e), Q.sd()) + 6),
        (Y.rounding = 1),
        (A = !1),
        (Q = Q.times(Q).plus(1).sqrt().plus(Q)),
        (A = !0),
        (Y.precision = $),
        (Y.rounding = J),
        Q.ln());
  };
  U.inverseHyperbolicTangent = U.atanh = function () {
    var $,
      J,
      Q,
      Y,
      G = this,
      X = G.constructor;
    return G.isFinite()
      ? G.e >= 0
        ? new X(G.abs().eq(1) ? G.s / 0 : G.isZero() ? G : NaN)
        : (($ = X.precision),
          (J = X.rounding),
          (Y = G.sd()),
          Math.max(Y, $) < 2 * -G.e - 1
            ? D(new X(G), $, J, !0)
            : ((X.precision = Q = Y - G.e),
              (G = P(G.plus(1), new X(1).minus(G), Q + $, 1)),
              (X.precision = $ + 4),
              (X.rounding = 1),
              (G = G.ln()),
              (X.precision = $),
              (X.rounding = J),
              G.times(0.5)))
      : new X(NaN);
  };
  U.inverseSine = U.asin = function () {
    var $,
      J,
      Q,
      Y,
      G = this,
      X = G.constructor;
    return G.isZero()
      ? new X(G)
      : ((J = G.abs().cmp(1)),
        (Q = X.precision),
        (Y = X.rounding),
        J !== -1
          ? J === 0
            ? (($ = e(X, Q + 4, Y).times(0.5)), ($.s = G.s), $)
            : new X(NaN)
          : ((X.precision = Q + 6),
            (X.rounding = 1),
            (G = G.div(new X(1).minus(G.times(G)).sqrt().plus(1)).atan()),
            (X.precision = Q),
            (X.rounding = Y),
            G.times(2)));
  };
  U.inverseTangent = U.atan = function () {
    var $,
      J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z = this,
      B = z.constructor,
      M = B.precision,
      V = B.rounding;
    if (z.isFinite()) {
      if (z.isZero()) return new B(z);
      if (z.abs().eq(1) && M + 4 <= e1)
        return (W = e(B, M + 4, V).times(0.25)), (W.s = z.s), W;
    } else {
      if (!z.s) return new B(NaN);
      if (M + 4 <= e1) return (W = e(B, M + 4, V).times(0.5)), (W.s = z.s), W;
    }
    for (
      B.precision = H = M + 10,
        B.rounding = 1,
        Q = Math.min(28, (H / L + 2) | 0),
        $ = Q;
      $;
      --$
    )
      z = z.div(z.times(z).plus(1).sqrt().plus(1));
    for (
      A = !1, J = Math.ceil(H / L), Y = 1, q = z.times(z), W = new B(z), G = z;
      $ !== -1;

    )
      if (
        ((G = G.times(q)),
        (X = W.minus(G.div((Y += 2)))),
        (G = G.times(q)),
        (W = X.plus(G.div((Y += 2)))),
        W.d[J] !== void 0)
      )
        for ($ = J; W.d[$] === X.d[$] && $--; );
    return (
      Q && (W = W.times(2 << (Q - 1))),
      (A = !0),
      D(W, (B.precision = M), (B.rounding = V), !0)
    );
  };
  U.isFinite = function () {
    return !!this.d;
  };
  U.isInteger = U.isInt = function () {
    return !!this.d && u(this.e / L) > this.d.length - 2;
  };
  U.isNaN = function () {
    return !this.s;
  };
  U.isNegative = U.isNeg = function () {
    return this.s < 0;
  };
  U.isPositive = U.isPos = function () {
    return this.s > 0;
  };
  U.isZero = function () {
    return !!this.d && this.d[0] === 0;
  };
  U.lessThan = U.lt = function ($) {
    return this.cmp($) < 0;
  };
  U.lessThanOrEqualTo = U.lte = function ($) {
    return this.cmp($) < 1;
  };
  U.logarithm = U.log = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z = this,
      B = z.constructor,
      M = B.precision,
      V = B.rounding,
      _ = 5;
    if ($ == null) ($ = new B(10)), (J = !0);
    else {
      if ((($ = new B($)), (Q = $.d), $.s < 0 || !Q || !Q[0] || $.eq(1)))
        return new B(NaN);
      J = $.eq(10);
    }
    if (((Q = z.d), z.s < 0 || !Q || !Q[0] || z.eq(1)))
      return new B(Q && !Q[0] ? -Infinity : z.s != 1 ? NaN : Q ? 0 : Infinity);
    if (J)
      if (Q.length > 1) X = !0;
      else {
        for (G = Q[0]; G % 10 === 0; ) G /= 10;
        X = G !== 1;
      }
    if (
      ((A = !1),
      (H = M + _),
      (W = U0(z, H)),
      (Y = J ? K1(B, H + 10) : U0($, H)),
      (q = P(W, Y, H, 1)),
      t0(q.d, (G = M), V))
    )
      do
        if (
          ((H += 10),
          (W = U0(z, H)),
          (Y = J ? K1(B, H + 10) : U0($, H)),
          (q = P(W, Y, H, 1)),
          !X)
        ) {
          +m(q.d).slice(G + 1, G + 15) + 1 == 100000000000000 &&
            (q = D(q, M + 1, 0));
          break;
        }
      while (t0(q.d, (G += 10), V));
    return (A = !0), D(q, M, V);
  };
  U.minus = U.sub = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z,
      B,
      M,
      V,
      _ = this,
      N = _.constructor;
    if ((($ = new N($)), !_.d || !$.d))
      return (
        !_.s || !$.s
          ? ($ = new N(NaN))
          : _.d
            ? ($.s = -$.s)
            : ($ = new N($.d || _.s !== $.s ? _ : NaN)),
        $
      );
    if (_.s != $.s) return ($.s = -$.s), _.plus($);
    if (
      ((z = _.d),
      (V = $.d),
      (H = N.precision),
      (q = N.rounding),
      !z[0] || !V[0])
    ) {
      if (V[0]) $.s = -$.s;
      else if (z[0]) $ = new N(_);
      else return new N(q === 3 ? -0 : 0);
      return A ? D($, H, q) : $;
    }
    if (((Q = u($.e / L)), (B = u(_.e / L)), (z = z.slice()), (X = B - Q), X)) {
      for (
        M = X < 0,
          M
            ? ((J = z), (X = -X), (W = V.length))
            : ((J = V), (Q = B), (W = z.length)),
          Y = Math.max(Math.ceil(H / L), W) + 2,
          X > Y && ((X = Y), (J.length = 1)),
          J.reverse(),
          Y = X;
        Y--;

      )
        J.push(0);
      J.reverse();
    } else {
      for (
        Y = z.length, W = V.length, M = Y < W, M && (W = Y), Y = 0;
        Y < W;
        Y++
      )
        if (z[Y] != V[Y]) {
          M = z[Y] < V[Y];
          break;
        }
      X = 0;
    }
    for (
      M && ((J = z), (z = V), (V = J), ($.s = -$.s)),
        W = z.length,
        Y = V.length - W;
      Y > 0;
      --Y
    )
      z[W++] = 0;
    for (Y = V.length; Y > X; ) {
      if (z[--Y] < V[Y]) {
        for (G = Y; G && z[--G] === 0; ) z[G] = $0 - 1;
        --z[G], (z[Y] += $0);
      }
      z[Y] -= V[Y];
    }
    for (; z[--W] === 0; ) z.pop();
    for (; z[0] === 0; z.shift()) --Q;
    return z[0]
      ? (($.d = z), ($.e = S1(z, Q)), A ? D($, H, q) : $)
      : new N(q === 3 ? -0 : 0);
  };
  U.modulo = U.mod = function ($) {
    var J,
      Q = this,
      Y = Q.constructor;
    return (
      ($ = new Y($)),
      !Q.d || !$.s || ($.d && !$.d[0])
        ? new Y(NaN)
        : !$.d || (Q.d && !Q.d[0])
          ? D(new Y(Q), Y.precision, Y.rounding)
          : ((A = !1),
            Y.modulo == 9
              ? ((J = P(Q, $.abs(), 0, 3, 1)), (J.s *= $.s))
              : (J = P(Q, $, 0, Y.modulo, 1)),
            (J = J.times($)),
            (A = !0),
            Q.minus(J))
    );
  };
  U.naturalExponential = U.exp = function () {
    return $5(this);
  };
  U.naturalLogarithm = U.ln = function () {
    return U0(this);
  };
  U.negated = U.neg = function () {
    var $ = new this.constructor(this);
    return ($.s = -$.s), D($);
  };
  U.plus = U.add = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z,
      B,
      M = this,
      V = M.constructor;
    if ((($ = new V($)), !M.d || !$.d))
      return (
        !M.s || !$.s
          ? ($ = new V(NaN))
          : M.d || ($ = new V($.d || M.s === $.s ? M : NaN)),
        $
      );
    if (M.s != $.s) return ($.s = -$.s), M.minus($);
    if (
      ((z = M.d),
      (B = $.d),
      (H = V.precision),
      (q = V.rounding),
      !z[0] || !B[0])
    )
      return B[0] || ($ = new V(M)), A ? D($, H, q) : $;
    if (((X = u(M.e / L)), (Y = u($.e / L)), (z = z.slice()), (G = X - Y), G)) {
      for (
        G < 0
          ? ((Q = z), (G = -G), (W = B.length))
          : ((Q = B), (Y = X), (W = z.length)),
          X = Math.ceil(H / L),
          W = X > W ? X + 1 : W + 1,
          G > W && ((G = W), (Q.length = 1)),
          Q.reverse();
        G--;

      )
        Q.push(0);
      Q.reverse();
    }
    for (
      W = z.length,
        G = B.length,
        W - G < 0 && ((G = W), (Q = B), (B = z), (z = Q)),
        J = 0;
      G;

    )
      (J = ((z[--G] = z[G] + B[G] + J) / $0) | 0), (z[G] %= $0);
    for (J && (z.unshift(J), ++Y), W = z.length; z[--W] == 0; ) z.pop();
    return ($.d = z), ($.e = S1(z, Y)), A ? D($, H, q) : $;
  };
  U.precision = U.sd = function ($) {
    var J,
      Q = this;
    if ($ !== void 0 && $ !== !!$ && $ !== 1 && $ !== 0) throw Error(w0 + $);
    return (
      Q.d ? ((J = p5(Q.d)), $ && Q.e + 1 > J && (J = Q.e + 1)) : (J = NaN), J
    );
  };
  U.round = function () {
    var $ = this,
      J = $.constructor;
    return D(new J($), $.e + 1, J.rounding);
  };
  U.sine = U.sin = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return Q.isFinite()
      ? Q.isZero()
        ? new Y(Q)
        : (($ = Y.precision),
          (J = Y.rounding),
          (Y.precision = $ + Math.max(Q.e, Q.sd()) + L),
          (Y.rounding = 1),
          (Q = i4(Y, o5(Y, Q))),
          (Y.precision = $),
          (Y.rounding = J),
          D(B0 > 2 ? Q.neg() : Q, $, J, !0))
      : new Y(NaN);
  };
  U.squareRoot = U.sqrt = function () {
    var $,
      J,
      Q,
      Y,
      G,
      X,
      W = this,
      H = W.d,
      q = W.e,
      z = W.s,
      B = W.constructor;
    if (z !== 1 || !H || !H[0])
      return new B(!z || (z < 0 && (!H || H[0])) ? NaN : H ? W : Infinity);
    for (
      A = !1,
        z = Math.sqrt(+W),
        z == 0 || z == Infinity
          ? ((J = m(H)),
            (J.length + q) % 2 == 0 && (J += "0"),
            (z = Math.sqrt(J)),
            (q = u((q + 1) / 2) - (q < 0 || q % 2)),
            z == Infinity
              ? (J = "5e" + q)
              : ((J = z.toExponential()),
                (J = J.slice(0, J.indexOf("e") + 1) + q)),
            (Y = new B(J)))
          : (Y = new B(z.toString())),
        Q = (q = B.precision) + 3;
      ;

    )
      if (
        ((X = Y),
        (Y = X.plus(P(W, X, Q + 2, 1)).times(0.5)),
        m(X.d).slice(0, Q) === (J = m(Y.d)).slice(0, Q))
      )
        if (((J = J.slice(Q - 3, Q + 1)), J == "9999" || (!G && J == "4999"))) {
          if (!G && (D(X, q + 1, 0), X.times(X).eq(W))) {
            Y = X;
            break;
          }
          (Q += 4), (G = 1);
        } else {
          (!+J || (!+J.slice(1) && J.charAt(0) == "5")) &&
            (D(Y, q + 1, 1), ($ = !Y.times(Y).eq(W)));
          break;
        }
    return (A = !0), D(Y, q, B.rounding, $);
  };
  U.tangent = U.tan = function () {
    var $,
      J,
      Q = this,
      Y = Q.constructor;
    return Q.isFinite()
      ? Q.isZero()
        ? new Y(Q)
        : (($ = Y.precision),
          (J = Y.rounding),
          (Y.precision = $ + 10),
          (Y.rounding = 1),
          (Q = Q.sin()),
          (Q.s = 1),
          (Q = P(Q, new Y(1).minus(Q.times(Q)).sqrt(), $ + 10, 0)),
          (Y.precision = $),
          (Y.rounding = J),
          D(B0 == 2 || B0 == 4 ? Q.neg() : Q, $, J, !0))
      : new Y(NaN);
  };
  U.times = U.mul = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z,
      B = this,
      M = B.constructor,
      V = B.d,
      _ = ($ = new M($)).d;
    if ((($.s *= B.s), !V || !V[0] || !_ || !_[0]))
      return new M(
        !$.s || (V && !V[0] && !_) || (_ && !_[0] && !V)
          ? NaN
          : !V || !_
            ? $.s / 0
            : $.s * 0,
      );
    for (
      Q = u(B.e / L) + u($.e / L),
        q = V.length,
        z = _.length,
        q < z && ((X = V), (V = _), (_ = X), (W = q), (q = z), (z = W)),
        X = [],
        W = q + z,
        Y = W;
      Y--;

    )
      X.push(0);
    for (Y = z; --Y >= 0; ) {
      for (J = 0, G = q + Y; G > Y; )
        (H = X[G] + _[Y] * V[G - Y - 1] + J),
          (X[G--] = H % $0 | 0),
          (J = (H / $0) | 0);
      X[G] = (X[G] + J) % $0 | 0;
    }
    for (; !X[--W]; ) X.pop();
    return (
      J ? ++Q : X.shift(),
      ($.d = X),
      ($.e = S1(X, Q)),
      A ? D($, M.precision, M.rounding) : $
    );
  };
  U.toBinary = function ($, J) {
    return X5(this, 2, $, J);
  };
  U.toDecimalPlaces = U.toDP = function ($, J) {
    var Q = this,
      Y = Q.constructor;
    return (
      (Q = new Y(Q)),
      $ === void 0
        ? Q
        : (n($, 0, _0),
          J === void 0 ? (J = Y.rounding) : n(J, 0, 8),
          D(Q, $ + Q.e + 1, J))
    );
  };
  U.toExponential = function ($, J) {
    var Q,
      Y = this,
      G = Y.constructor;
    return (
      $ === void 0
        ? (Q = X0(Y, !0))
        : (n($, 0, _0),
          J === void 0 ? (J = G.rounding) : n(J, 0, 8),
          (Y = D(new G(Y), $ + 1, J)),
          (Q = X0(Y, !0, $ + 1))),
      Y.isNeg() && !Y.isZero() ? "-" + Q : Q
    );
  };
  U.toFixed = function ($, J) {
    var Q,
      Y,
      G = this,
      X = G.constructor;
    return (
      $ === void 0
        ? (Q = X0(G))
        : (n($, 0, _0),
          J === void 0 ? (J = X.rounding) : n(J, 0, 8),
          (Y = D(new X(G), $ + G.e + 1, J)),
          (Q = X0(Y, !1, $ + Y.e + 1))),
      G.isNeg() && !G.isZero() ? "-" + Q : Q
    );
  };
  U.toFraction = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H,
      q,
      z,
      B,
      M,
      V,
      _ = this,
      N = _.d,
      O = _.constructor;
    if (!N) return new O(_);
    if (
      ((z = Q = new O(1)),
      (Y = q = new O(0)),
      (J = new O(Y)),
      (X = J.e = p5(N) - _.e - 1),
      (W = X % L),
      (J.d[0] = Z(10, W < 0 ? L + W : W)),
      $ == null)
    )
      $ = X > 0 ? J : z;
    else {
      if (((H = new O($)), !H.isInt() || H.lt(z))) throw Error(w0 + H);
      $ = H.gt(J) ? (X > 0 ? J : z) : H;
    }
    for (
      A = !1,
        H = new O(m(N)),
        B = O.precision,
        O.precision = X = N.length * L * 2;
      (M = P(H, J, 0, 1, 1)), (G = Q.plus(M.times(Y))), G.cmp($) != 1;

    )
      (Q = Y),
        (Y = G),
        (G = z),
        (z = q.plus(M.times(G))),
        (q = G),
        (G = J),
        (J = H.minus(M.times(G))),
        (H = G);
    return (
      (G = P($.minus(Q), Y, 0, 1, 1)),
      (q = q.plus(G.times(z))),
      (Q = Q.plus(G.times(Y))),
      (q.s = z.s = _.s),
      (V =
        P(z, Y, X, 1)
          .minus(_)
          .abs()
          .cmp(P(q, Q, X, 1).minus(_).abs()) < 1
          ? [z, Y]
          : [q, Q]),
      (O.precision = B),
      (A = !0),
      V
    );
  };
  U.toHexadecimal = U.toHex = function ($, J) {
    return X5(this, 16, $, J);
  };
  U.toNearest = function ($, J) {
    var Q = this,
      Y = Q.constructor;
    if (((Q = new Y(Q)), $ == null)) {
      if (!Q.d) return Q;
      ($ = new Y(1)), (J = Y.rounding);
    } else {
      if ((($ = new Y($)), J === void 0 ? (J = Y.rounding) : n(J, 0, 8), !Q.d))
        return $.s ? Q : $;
      if (!$.d) return $.s && ($.s = Q.s), $;
    }
    return (
      $.d[0]
        ? ((A = !1), (Q = P(Q, $, 0, J, 1).times($)), (A = !0), D(Q))
        : (($.s = Q.s), (Q = $)),
      Q
    );
  };
  U.toNumber = function () {
    return +this;
  };
  U.toOctal = function ($, J) {
    return X5(this, 8, $, J);
  };
  U.toPower = U.pow = function ($) {
    var J,
      Q,
      Y,
      G,
      X,
      W,
      H = this,
      q = H.constructor,
      z = +($ = new q($));
    if (!H.d || !$.d || !H.d[0] || !$.d[0]) return new q(Z(+H, z));
    if (((H = new q(H)), H.eq(1))) return H;
    if (((Y = q.precision), (X = q.rounding), $.eq(1))) return D(H, Y, X);
    if (((J = u($.e / L)), J >= $.d.length - 1 && (Q = z < 0 ? -z : z) <= c4))
      return (G = d5(q, H, Q, Y)), $.s < 0 ? new q(1).div(G) : D(G, Y, X);
    if (((W = H.s), W < 0)) {
      if (J < $.d.length - 1) return new q(NaN);
      if (($.d[J] & 1 || (W = 1), H.e == 0 && H.d[0] == 1 && H.d.length == 1))
        return (H.s = W), H;
    }
    return (
      (Q = Z(+H, z)),
      (J =
        Q == 0 || !isFinite(Q)
          ? u(z * (Math.log("0." + m(H.d)) / Math.LN10 + H.e + 1))
          : new q(Q + "").e),
      J > q.maxE + 1 || J < q.minE - 1
        ? new q(J > 0 ? W / 0 : 0)
        : ((A = !1),
          (q.rounding = H.s = 1),
          (Q = Math.min(12, (J + "").length)),
          (G = $5($.times(U0(H, Y + Q)), Y)),
          G.d &&
            ((G = D(G, Y + 5, 1)),
            t0(G.d, Y, X) &&
              ((J = Y + 10),
              (G = D($5($.times(U0(H, J + Q)), J), J + 5, 1)),
              +m(G.d).slice(Y + 1, Y + 15) + 1 == 100000000000000 &&
                (G = D(G, Y + 1, 0)))),
          (G.s = W),
          (A = !0),
          (q.rounding = X),
          D(G, Y, X))
    );
  };
  U.toPrecision = function ($, J) {
    var Q,
      Y = this,
      G = Y.constructor;
    return (
      $ === void 0
        ? (Q = X0(Y, Y.e <= G.toExpNeg || Y.e >= G.toExpPos))
        : (n($, 1, _0),
          J === void 0 ? (J = G.rounding) : n(J, 0, 8),
          (Y = D(new G(Y), $, J)),
          (Q = X0(Y, $ <= Y.e || Y.e <= G.toExpNeg, $))),
      Y.isNeg() && !Y.isZero() ? "-" + Q : Q
    );
  };
  U.toSignificantDigits = U.toSD = function ($, J) {
    var Q = this,
      Y = Q.constructor;
    return (
      $ === void 0
        ? (($ = Y.precision), (J = Y.rounding))
        : (n($, 1, _0), J === void 0 ? (J = Y.rounding) : n(J, 0, 8)),
      D(new Y(Q), $, J)
    );
  };
  U.toString = function () {
    var $ = this,
      J = $.constructor,
      Q = X0($, $.e <= J.toExpNeg || $.e >= J.toExpPos);
    return $.isNeg() && !$.isZero() ? "-" + Q : Q;
  };
  U.truncated = U.trunc = function () {
    return D(new this.constructor(this), this.e + 1, 1);
  };
  U.valueOf = U.toJSON = function () {
    var $ = this,
      J = $.constructor,
      Q = X0($, $.e <= J.toExpNeg || $.e >= J.toExpPos);
    return $.isNeg() ? "-" + Q : Q;
  };
  var P = (function () {
    function $(Y, G, X) {
      var W,
        H = 0,
        q = Y.length;
      for (Y = Y.slice(); q--; )
        (W = Y[q] * G + H), (Y[q] = W % X | 0), (H = (W / X) | 0);
      return H && Y.unshift(H), Y;
    }
    function J(Y, G, X, W) {
      var H, q;
      if (X != W) q = X > W ? 1 : -1;
      else
        for (H = q = 0; H < X; H++)
          if (Y[H] != G[H]) {
            q = Y[H] > G[H] ? 1 : -1;
            break;
          }
      return q;
    }
    function Q(Y, G, X, W) {
      for (var H = 0; X--; )
        (Y[X] -= H), (H = Y[X] < G[X] ? 1 : 0), (Y[X] = H * W + Y[X] - G[X]);
      for (; !Y[0] && Y.length > 1; ) Y.shift();
    }
    return function (Y, G, X, W, H, q) {
      var z,
        B,
        M,
        V,
        _,
        N,
        O,
        I,
        v,
        l,
        C,
        x,
        K0,
        d,
        G0,
        A0,
        z0,
        P1,
        t,
        B1,
        M1 = Y.constructor,
        k1 = Y.s == G.s ? 1 : -1,
        c = Y.d,
        k = G.d;
      if (!c || !c[0] || !k || !k[0])
        return new M1(
          !Y.s || !G.s || (c ? k && c[0] == k[0] : !k)
            ? NaN
            : (c && c[0] == 0) || !k
              ? k1 * 0
              : k1 / 0,
        );
      for (
        q
          ? ((_ = 1), (B = Y.e - G.e))
          : ((q = $0), (_ = L), (B = u(Y.e / _) - u(G.e / _))),
          t = k.length,
          z0 = c.length,
          v = new M1(k1),
          l = v.d = [],
          M = 0;
        k[M] == (c[M] || 0);
        M++
      );
      if (
        (k[M] > (c[M] || 0) && B--,
        X == null
          ? ((d = X = M1.precision), (W = M1.rounding))
          : H
            ? (d = X + (Y.e - G.e) + 1)
            : (d = X),
        d < 0)
      )
        l.push(1), (N = !0);
      else {
        if (((d = (d / _ + 2) | 0), (M = 0), t == 1)) {
          for (V = 0, k = k[0], d++; (M < z0 || V) && d--; M++)
            (G0 = V * q + (c[M] || 0)), (l[M] = (G0 / k) | 0), (V = G0 % k | 0);
          N = V || M < z0;
        } else {
          for (
            V = (q / (k[0] + 1)) | 0,
              V > 1 &&
                ((k = $(k, V, q)),
                (c = $(c, V, q)),
                (t = k.length),
                (z0 = c.length)),
              A0 = t,
              C = c.slice(0, t),
              x = C.length;
            x < t;

          )
            C[x++] = 0;
          (B1 = k.slice()), B1.unshift(0), (P1 = k[0]), k[1] >= q / 2 && ++P1;
          do
            (V = 0),
              (z = J(k, C, t, x)),
              z < 0
                ? ((K0 = C[0]),
                  t != x && (K0 = K0 * q + (C[1] || 0)),
                  (V = (K0 / P1) | 0),
                  V > 1
                    ? (V >= q && (V = q - 1),
                      (O = $(k, V, q)),
                      (I = O.length),
                      (x = C.length),
                      (z = J(O, C, I, x)),
                      z == 1 && (V--, Q(O, t < I ? B1 : k, I, q)))
                    : (V == 0 && (z = V = 1), (O = k.slice())),
                  (I = O.length),
                  I < x && O.unshift(0),
                  Q(C, O, x, q),
                  z == -1 &&
                    ((x = C.length),
                    (z = J(k, C, t, x)),
                    z < 1 && (V++, Q(C, t < x ? B1 : k, x, q))),
                  (x = C.length))
                : z === 0 && (V++, (C = [0])),
              (l[M++] = V),
              z && C[0] ? (C[x++] = c[A0] || 0) : ((C = [c[A0]]), (x = 1));
          while ((A0++ < z0 || C[0] !== void 0) && d--);
          N = C[0] !== void 0;
        }
        l[0] || l.shift();
      }
      if (_ == 1) (v.e = B), (y5 = N);
      else {
        for (M = 1, V = l[0]; V >= 10; V /= 10) M++;
        (v.e = M + B * _ - 1), D(v, H ? X + v.e + 1 : X, W, N);
      }
      return v;
    };
  })();
  U[Symbol.for("nodejs.util.inspect.custom")] = U.toString;
  U[Symbol.toStringTag] = "Decimal";
  var e0 = (U.constructor = r5(t1));
  R1 = new e0(R1);
  L1 = new e0(L1);
  var P2 = e0,
    k2 = "Cloudflare-Workers",
    T2 = "node"; /*! Bundled license information:

decimal.js/decimal.mjs:
  (*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   *)
*/
});
var e5 = T1((W5) => {
  Object.defineProperty(W5, "__esModule", { value: !0 });
  var {
      Decimal: x2,
      objectEnumValues: x0,
      makeStrictEnum: h2,
      Public: Z2,
      detectRuntime: y2,
    } = a5(),
    h = {};
  W5.Prisma = h;
  W5.$Enums = {};
  h.prismaVersion = {
    client: "5.6.0",
    engine: "e95e739751f42d8ca026f6b910f5a2dc5adeaeee",
  };
  h.PrismaClientKnownRequestError = () => {
    throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.PrismaClientUnknownRequestError = () => {
    throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.PrismaClientRustPanicError = () => {
    throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.PrismaClientInitializationError = () => {
    throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.PrismaClientValidationError = () => {
    throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.NotFoundError = () => {
    throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.Decimal = x2;
  h.sql = () => {
    throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.empty = () => {
    throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.join = () => {
    throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.raw = () => {
    throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.validator = Z2.validator;
  h.getExtensionContext = () => {
    throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.defineExtension = () => {
    throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`);
  };
  h.DbNull = x0.instances.DbNull;
  h.JsonNull = x0.instances.JsonNull;
  h.AnyNull = x0.instances.AnyNull;
  h.NullTypes = {
    DbNull: x0.classes.DbNull,
    JsonNull: x0.classes.JsonNull,
    AnyNull: x0.classes.AnyNull,
  };
  W5.Prisma.TransactionIsolationLevel = h2({ Serializable: "Serializable" });
  W5.Prisma.UserScalarFieldEnum = {
    id: "id",
    email: "email",
    hash: "hash",
    name: "name",
    lastname: "lastname",
    phone: "phone",
  };
  W5.Prisma.TeacherScalarFieldEnum = { id: "id", title: "title", bio: "bio" };
  W5.Prisma.ServiceScalarFieldEnum = {
    id: "id",
    teacherId: "teacherId",
    name: "name",
    description: "description",
    category: "category",
    type: "type",
    frequency: "frequency",
    duration: "duration",
    price: "price",
    published: "published",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  W5.Prisma.CommentScalarFieldEnum = {
    id: "id",
    serviceId: "serviceId",
    comment: "comment",
    rejected: "rejected",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  W5.Prisma.ContractScalarFieldEnum = {
    id: "id",
    serviceId: "serviceId",
    userId: "userId",
    phone: "phone",
    email: "email",
    time: "time",
    text: "text",
    status: "status",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  };
  W5.Prisma.SortOrder = { asc: "asc", desc: "desc" };
  W5.Prisma.ModelName = {
    User: "User",
    Teacher: "Teacher",
    Service: "Service",
    Comment: "Comment",
    Contract: "Contract",
  };
  class t5 {
    constructor() {
      return new Proxy(this, {
        get($, J) {
          const Q = y2(),
            Y = {
              workerd: "Cloudflare Workers",
              deno: "Deno and Deno Deploy",
              netlify: "Netlify Edge Functions",
              "edge-light": "Vercel Edge Functions",
            }[Q];
          let G = "PrismaClient is unable to run in ";
          if (Y !== void 0)
            G +=
              Y +
              ". As an alternative, try Accelerate: https://pris.ly/d/accelerate.";
          else
            G +=
              "this browser environment, or has been bundled for the browser (running in `" +
              Q +
              "`).";
          throw (
            ((G += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`),
            new Error(G))
          );
        },
      });
    }
  }
  W5.PrismaClient = t5;
  Object.assign(W5, h);
});
var J4 = T1((q9, $4) => {
  var c2 = e5();
  $4.exports = c2;
});
var w5 = ($) => {
    const J = $.split("/");
    if (J[0] === "") J.shift();
    return J;
  },
  _5 = ($) => {
    const J = [];
    for (let Y = 0; ; ) {
      let G = !1;
      if (
        (($ = $.replace(/\{[^}]+\}/g, (X) => {
          const W = `@\\${Y}`;
          return (J[Y] = [W, X]), Y++, (G = !0), W;
        })),
        !G)
      )
        break;
    }
    const Q = $.split("/");
    if (Q[0] === "") Q.shift();
    for (let Y = J.length - 1; Y >= 0; Y--) {
      const [G] = J[Y];
      for (let X = Q.length - 1; X >= 0; X--)
        if (Q[X].indexOf(G) !== -1) {
          Q[X] = Q[X].replace(G, J[Y][1]);
          break;
        }
    }
    return Q;
  },
  V1 = {},
  x1 = ($) => {
    if ($ === "*") return "*";
    const J = $.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
    if (J) {
      if (!V1[$])
        if (J[2]) V1[$] = [$, J[1], new RegExp("^" + J[2] + "$")];
        else V1[$] = [$, J[1], !0];
      return V1[$];
    }
    return null;
  },
  h1 = ($) => {
    const J = $.url.match(/^https?:\/\/[^/]+(\/[^?]*)/);
    return J ? J[1] : "";
  },
  j5 = ($) => {
    const J = $.indexOf("?", 8);
    return J === -1 ? "" : "?" + $.slice(J + 1);
  },
  F5 = ($) => {
    const J = h1($);
    return J.length > 1 && J[J.length - 1] === "/" ? J.slice(0, -1) : J;
  },
  C0 = (...$) => {
    let J = "",
      Q = !1;
    for (let Y of $) {
      if (J[J.length - 1] === "/") (J = J.slice(0, -1)), (Q = !0);
      if (Y[0] !== "/") Y = `/${Y}`;
      if (Y === "/" && Q) J = `${J}/`;
      else if (Y !== "/") J = `${J}${Y}`;
      if (Y === "/" && J === "") J = "/";
    }
    return J;
  },
  U1 = ($) => {
    const J = $.match(/^(.+|)(\/\:[^\/]+)\?$/);
    if (!J) return null;
    const Q = J[1],
      Y = Q + J[2];
    return [Q === "" ? "/" : Q.replace(/\/$/, ""), Y];
  },
  g1 = ($) => {
    if (!/[%+]/.test($)) return $;
    if ($.indexOf("+") !== -1) $ = $.replace(/\+/g, " ");
    return /%/.test($) ? f0($) : $;
  },
  O5 = ($, J, Q) => {
    let Y;
    if (!Q && J && !/[%+]/.test(J)) {
      let W = $.indexOf(`?${J}`, 8);
      if (W === -1) W = $.indexOf(`&${J}`, 8);
      while (W !== -1) {
        const H = $.charCodeAt(W + J.length + 1);
        if (H === 61) {
          const q = W + J.length + 2,
            z = $.indexOf("&", q);
          return g1($.slice(q, z === -1 ? void 0 : z));
        } else if (H == 38 || isNaN(H)) return "";
        W = $.indexOf(`&${J}`, W + 1);
      }
      if (((Y = /[%+]/.test($)), !Y)) return;
    }
    const G = {};
    Y ?? (Y = /[%+]/.test($));
    let X = $.indexOf("?", 8);
    while (X !== -1) {
      const W = $.indexOf("&", X + 1);
      let H = $.indexOf("=", X);
      if (H > W && W !== -1) H = -1;
      let q = $.slice(X + 1, H === -1 ? (W === -1 ? void 0 : W) : H);
      if (Y) q = g1(q);
      if (((X = W), q === "")) continue;
      let z;
      if (H === -1) z = "";
      else if (((z = $.slice(H + 1, W === -1 ? void 0 : W)), Y)) z = g1(z);
      if (Q) (G[q] ?? (G[q] = [])).push(z);
      else G[q] ?? (G[q] = z);
    }
    return J ? G[J] : G;
  },
  D5 = O5,
  R5 = ($, J) => {
    return O5($, J, !0);
  },
  f0 = decodeURIComponent;
var D4 = /^[\w!#$%&'*.^`|~+-]+$/,
  R4 = /^[ !#-:<-[\]-~]*$/,
  L5 = ($, J) => {
    return $.trim()
      .split(";")
      .reduce((Y, G) => {
        G = G.trim();
        const X = G.indexOf("=");
        if (X === -1) return Y;
        const W = G.substring(0, X).trim();
        if ((J && J !== W) || !D4.test(W)) return Y;
        let H = G.substring(X + 1).trim();
        if (H.startsWith('"') && H.endsWith('"')) H = H.slice(1, -1);
        if (R4.test(H)) Y[W] = f0(H);
        return Y;
      }, {});
  };
var L4 = ($, J, Q = {}) => {
    let Y = `${$}=${J}`;
    if (Q && typeof Q.maxAge === "number" && Q.maxAge >= 0)
      Y += `; Max-Age=${Math.floor(Q.maxAge)}`;
    if (Q.domain) Y += `; Domain=${Q.domain}`;
    if (Q.path) Y += `; Path=${Q.path}`;
    if (Q.expires) Y += `; Expires=${Q.expires.toUTCString()}`;
    if (Q.httpOnly) Y += "; HttpOnly";
    if (Q.secure) Y += "; Secure";
    if (Q.sameSite) Y += `; SameSite=${Q.sameSite}`;
    if (Q.partitioned) Y += "; Partitioned";
    return Y;
  },
  K5 = ($, J, Q = {}) => {
    return (J = encodeURIComponent(J)), L4($, J, Q);
  };
var A5 = class {
  constructor($) {
    (this.writable = $),
      (this.writer = $.getWriter()),
      (this.encoder = new TextEncoder());
  }
  async write($) {
    try {
      if (typeof $ === "string") $ = this.encoder.encode($);
      await this.writer.write($);
    } catch (J) {}
    return this;
  }
  async writeln($) {
    return await this.write($ + "\n"), this;
  }
  sleep($) {
    return new Promise((J) => setTimeout(J, $));
  }
  async close() {
    try {
      await this.writer.close();
    } catch ($) {}
  }
  async pipe($) {
    this.writer.releaseLock(),
      await $.pipeTo(this.writable, { preventClose: !0 }),
      (this.writer = this.writable.getWriter());
  }
};
var S5 = "text/plain; charset=UTF-8",
  I0 = class {
    constructor($, J) {
      if (
        ((this.env = {}),
        (this._var = {}),
        (this.finalized = !1),
        (this.error = void 0),
        (this._status = 200),
        (this._h = void 0),
        (this._pH = void 0),
        (this._init = !0),
        (this._renderer = (Q) => this.html(Q)),
        (this.notFoundHandler = () => new Response()),
        (this.render = (...Q) => this._renderer(...Q)),
        (this.setRenderer = (Q) => {
          this._renderer = Q;
        }),
        (this.header = (Q, Y, G) => {
          if (Y === void 0) {
            if (this._h) this._h.delete(Q);
            else if (this._pH) delete this._pH[Q.toLocaleLowerCase()];
            if (this.finalized) this.res.headers.delete(Q);
            return;
          }
          if (G?.append) {
            if (!this._h)
              (this._init = !1),
                (this._h = new Headers(this._pH)),
                (this._pH = {});
            this._h.append(Q, Y);
          } else if (this._h) this._h.set(Q, Y);
          else this._pH ?? (this._pH = {}), (this._pH[Q.toLowerCase()] = Y);
          if (this.finalized)
            if (G?.append) this.res.headers.append(Q, Y);
            else this.res.headers.set(Q, Y);
        }),
        (this.status = (Q) => {
          (this._init = !1), (this._status = Q);
        }),
        (this.set = (Q, Y) => {
          this._var ?? (this._var = {}), (this._var[Q] = Y);
        }),
        (this.get = (Q) => {
          return this._var ? this._var[Q] : void 0;
        }),
        (this.newResponse = (Q, Y, G) => {
          if (this._init && !G && !Y && this._status === 200)
            return new Response(Q, { headers: this._pH });
          if (Y && typeof Y !== "number") {
            const W = new Response(Q, Y),
              H = this._pH?.["content-type"];
            if (H) W.headers.set("content-type", H);
            return W;
          }
          const X = Y ?? this._status;
          this._pH ?? (this._pH = {}), this._h ?? (this._h = new Headers());
          for (let [W, H] of Object.entries(this._pH)) this._h.set(W, H);
          if (this._res) {
            this._res.headers.forEach((W, H) => {
              this._h?.set(H, W);
            });
            for (let [W, H] of Object.entries(this._pH)) this._h.set(W, H);
          }
          G ?? (G = {});
          for (let [W, H] of Object.entries(G))
            if (typeof H === "string") this._h.set(W, H);
            else {
              this._h.delete(W);
              for (let q of H) this._h.append(W, q);
            }
          return new Response(Q, { status: X, headers: this._h });
        }),
        (this.body = (Q, Y, G) => {
          return typeof Y === "number"
            ? this.newResponse(Q, Y, G)
            : this.newResponse(Q, Y);
        }),
        (this.text = (Q, Y, G) => {
          if (!this._pH) {
            if (this._init && !G && !Y) return new Response(Q);
            this._pH = {};
          }
          if (this._pH["content-type"]) this._pH["content-type"] = S5;
          return typeof Y === "number"
            ? this.newResponse(Q, Y, G)
            : this.newResponse(Q, Y);
        }),
        (this.json = (Q, Y, G) => {
          const X = JSON.stringify(Q);
          return (
            this._pH ?? (this._pH = {}),
            (this._pH["content-type"] = "application/json; charset=UTF-8"),
            typeof Y === "number"
              ? this.newResponse(X, Y, G)
              : this.newResponse(X, Y)
          );
        }),
        (this.jsonT = (Q, Y, G) => {
          const X =
            typeof Y === "number" ? this.json(Q, Y, G) : this.json(Q, Y);
          return { response: X, data: Q, format: "json", status: X.status };
        }),
        (this.html = (Q, Y, G) => {
          if (
            (this._pH ?? (this._pH = {}),
            (this._pH["content-type"] = "text/html; charset=UTF-8"),
            typeof Q === "object")
          ) {
            if (!(Q instanceof Promise)) Q = Q.toString();
            if (Q instanceof Promise)
              return Q.then((X) => {
                return typeof Y === "number"
                  ? this.newResponse(X, Y, G)
                  : this.newResponse(X, Y);
              });
          }
          return typeof Y === "number"
            ? this.newResponse(Q, Y, G)
            : this.newResponse(Q, Y);
        }),
        (this.redirect = (Q, Y = 302) => {
          return (
            this._h ?? (this._h = new Headers()),
            this._h.set("Location", Q),
            this.newResponse(null, Y)
          );
        }),
        (this.streamText = (Q, Y, G) => {
          return (
            G ?? (G = {}),
            this.header("content-type", S5),
            this.header("x-content-type-options", "nosniff"),
            this.header("transfer-encoding", "chunked"),
            this.stream(Q, Y, G)
          );
        }),
        (this.stream = (Q, Y, G) => {
          const { readable: X, writable: W } = new TransformStream(),
            H = new A5(W);
          return (
            Q(H).finally(() => H.close()),
            typeof Y === "number"
              ? this.newResponse(X, Y, G)
              : this.newResponse(X, Y)
          );
        }),
        (this.cookie = (Q, Y, G) => {
          const X = K5(Q, Y, G);
          this.header("set-cookie", X, { append: !0 });
        }),
        (this.notFound = () => {
          return this.notFoundHandler(this);
        }),
        (this.req = $),
        J)
      ) {
        if (
          ((this._exCtx = J.executionCtx),
          (this.env = J.env),
          J.notFoundHandler)
        )
          this.notFoundHandler = J.notFoundHandler;
      }
    }
    get event() {
      if (this._exCtx && "respondWith" in this._exCtx) return this._exCtx;
      else throw Error("This context has no FetchEvent");
    }
    get executionCtx() {
      if (this._exCtx) return this._exCtx;
      else throw Error("This context has no ExecutionContext");
    }
    get res() {
      return (
        (this._init = !1),
        this._res ||
          (this._res = new Response("404 Not Found", { status: 404 }))
      );
    }
    set res($) {
      if (((this._init = !1), this._res && $))
        this._res.headers.delete("content-type"),
          this._res.headers.forEach((J, Q) => {
            $.headers.set(Q, J);
          });
      (this._res = $), (this.finalized = !0);
    }
    get var() {
      return { ...this._var };
    }
    get runtime() {
      const $ = globalThis;
      if ($?.Deno !== void 0) return "deno";
      if ($?.Bun !== void 0) return "bun";
      if (typeof $?.WebSocketPair === "function") return "workerd";
      if (typeof $?.EdgeRuntime === "string") return "edge-light";
      if ($?.fastly !== void 0) return "fastly";
      if ($?.__lagon__ !== void 0) return "lagon";
      if ($?.process?.release?.name === "node") return "node";
      return "other";
    }
  };
var Z1 = ($, J, Q) => {
  return (Y, G) => {
    let X = -1;
    return W(0);
    async function W(H) {
      if (H <= X) throw new Error("next() called multiple times");
      X = H;
      let q,
        z = !1,
        B;
      if ($[H]) {
        if (((B = $[H][0]), Y instanceof I0)) Y.req.setParams($[H][1]);
      } else B = (H === $.length && G) || void 0;
      if (!B) {
        if (Y instanceof I0 && Y.finalized === !1 && Q) q = await Q(Y);
      } else
        try {
          q = await B(Y, () => {
            return W(H + 1);
          });
        } catch (M) {
          if (M instanceof Error && Y instanceof I0 && J)
            (Y.error = M), (q = await J(M, Y)), (z = !0);
          else throw M;
        }
      if (q !== void 0 && "response" in q) q = q.response;
      if (q && (Y.finalized === !1 || z)) Y.res = q;
      return Y;
    }
  };
};
var S0 = class extends Error {
  constructor($ = 500, J) {
    super(J?.message);
    (this.res = J?.res), (this.status = $);
  }
  getResponse() {
    if (this.res) return this.res;
    return new Response(this.message, { status: this.status });
  }
};
var K4 = ($) => {
    return Array.isArray($);
  },
  N5 = async ($, J = { all: !1 }) => {
    let Q = {};
    const Y = $.headers.get("Content-Type");
    if (
      Y &&
      (Y.startsWith("multipart/form-data") ||
        Y.startsWith("application/x-www-form-urlencoded"))
    ) {
      const G = await $.formData();
      if (G) {
        const X = {};
        G.forEach((W, H) => {
          if (!(J.all || H.slice(-2) === "[]")) {
            X[H] = W;
            return;
          }
          if (X[H] && K4(X[H])) {
            X[H].push(W);
            return;
          }
          if (X[H]) {
            X[H] = [X[H], W];
            return;
          }
          X[H] = W;
        }),
          (Q = X);
      }
    }
    return Q;
  };
var E5 = class {
  constructor($, J = "/", Q = void 0) {
    (this._p = {}),
      (this.bodyCache = {}),
      (this.cachedBody = (Y) => {
        const { bodyCache: G, raw: X } = this,
          W = G[Y];
        if (W) return W;
        if (G.arrayBuffer)
          return (async () => {
            return await new Response(G.arrayBuffer)[Y]();
          })();
        return (G[Y] = X[Y]());
      }),
      (this.raw = $),
      (this.path = J),
      (this._s = Q),
      (this.vData = {});
  }
  setParams($) {
    this._p = $;
  }
  param($) {
    if ($) {
      const J = this._s ? this._s[this._p[$]] : this._p[$];
      return J ? (/\%/.test(J) ? f0(J) : J) : void 0;
    } else {
      const J = {},
        Q = Object.keys(this._p);
      for (let Y = 0, G = Q.length; Y < G; Y++) {
        const X = Q[Y],
          W = this._s ? this._s[this._p[X]] : this._p[X];
        if (W && typeof W === "string") J[X] = /\%/.test(W) ? f0(W) : W;
      }
      return J;
    }
  }
  query($) {
    return D5(this.url, $);
  }
  queries($) {
    return R5(this.url, $);
  }
  header($) {
    if ($) return this.raw.headers.get($.toLowerCase()) ?? void 0;
    const J = {};
    return (
      this.raw.headers.forEach((Q, Y) => {
        J[Y] = Q;
      }),
      J
    );
  }
  cookie($) {
    const J = this.raw.headers.get("Cookie");
    if (!J) return;
    const Q = L5(J);
    if ($) return Q[$];
    else return Q;
  }
  async parseBody($) {
    if (this.bodyCache.parsedBody) return this.bodyCache.parsedBody;
    const J = await N5(this, $);
    return (this.bodyCache.parsedBody = J), J;
  }
  json() {
    return this.cachedBody("json");
  }
  text() {
    return this.cachedBody("text");
  }
  arrayBuffer() {
    return this.cachedBody("arrayBuffer");
  }
  blob() {
    return this.cachedBody("blob");
  }
  formData() {
    return this.cachedBody("formData");
  }
  addValidatedData($, J) {
    this.vData[$] = J;
  }
  valid($) {
    return this.vData[$];
  }
  get url() {
    return this.raw.url;
  }
  get method() {
    return this.raw.method;
  }
  get headers() {
    return this.raw.headers;
  }
  get body() {
    return this.raw.body;
  }
  get bodyUsed() {
    return this.raw.bodyUsed;
  }
  get integrity() {
    return this.raw.integrity;
  }
  get keepalive() {
    return this.raw.keepalive;
  }
  get referrer() {
    return this.raw.referrer;
  }
  get signal() {
    return this.raw.signal;
  }
};
var T = "ALL",
  b5 = "all",
  w1 = ["get", "post", "put", "delete", "options", "patch"],
  _1 = class extends Error {};
var A4 = function () {
    return class {};
  },
  S4 = ($) => {
    return $.text("404 Not Found", 404);
  },
  v5 = ($, J) => {
    if ($ instanceof S0) return $.getResponse();
    console.error($);
    const Q = "Internal Server Error";
    return J.text(Q, 500);
  },
  y1 = class extends A4() {
    constructor($ = {}) {
      super();
      (this._basePath = "/"),
        (this.path = "/"),
        (this.routes = []),
        (this.notFoundHandler = S4),
        (this.errorHandler = v5),
        (this.head = () => {
          return (
            console.warn(
              "`app.head()` is no longer used. `app.get()` implicitly handles the HEAD method.",
            ),
            this
          );
        }),
        (this.handleEvent = (Y) => {
          return this.dispatch(Y.request, Y, void 0, Y.request.method);
        }),
        (this.fetch = (Y, G, X) => {
          return this.dispatch(Y, X, G, Y.method);
        }),
        (this.request = (Y, G, X, W) => {
          if (Y instanceof Request) {
            if (G !== void 0) Y = new Request(Y, G);
            return this.fetch(Y, X, W);
          }
          Y = Y.toString();
          const H = /^https?:\/\//.test(Y)
              ? Y
              : `http://localhost${C0("/", Y)}`,
            q = new Request(H, G);
          return this.fetch(q, X, W);
        }),
        (this.fire = () => {
          addEventListener("fetch", (Y) => {
            Y.respondWith(
              this.dispatch(Y.request, Y, void 0, Y.request.method),
            );
          });
        }),
        [...w1, b5].map((Y) => {
          this[Y] = (G, ...X) => {
            if (typeof G === "string") this.path = G;
            else this.addRoute(Y, this.path, G);
            return (
              X.map((W) => {
                if (typeof W !== "string") this.addRoute(Y, this.path, W);
              }),
              this
            );
          };
        }),
        (this.on = (Y, G, ...X) => {
          if (!Y) return this;
          this.path = G;
          for (let W of [Y].flat())
            X.map((H) => {
              this.addRoute(W.toUpperCase(), this.path, H);
            });
          return this;
        }),
        (this.use = (Y, ...G) => {
          if (typeof Y === "string") this.path = Y;
          else G.unshift(Y);
          return (
            G.map((X) => {
              this.addRoute(T, this.path, X);
            }),
            this
          );
        });
      const Q = $.strict ?? !0;
      delete $.strict,
        Object.assign(this, $),
        (this.getPath = Q ? $.getPath ?? h1 : F5);
    }
    clone() {
      const $ = new y1({ router: this.router, getPath: this.getPath });
      return ($.routes = this.routes), $;
    }
    route($, J) {
      const Q = this.basePath($);
      if (!J) return Q;
      return (
        J.routes.map((Y) => {
          const G =
            J.errorHandler === v5
              ? Y.handler
              : async (X, W) =>
                  (await Z1([], J.errorHandler)(X, () => Y.handler(X, W))).res;
          Q.addRoute(Y.method, Y.path, G);
        }),
        this
      );
    }
    basePath($) {
      const J = this.clone();
      return (J._basePath = C0(this._basePath, $)), J;
    }
    onError($) {
      return (this.errorHandler = $), this;
    }
    notFound($) {
      return (this.notFoundHandler = $), this;
    }
    showRoutes() {
      this.routes.map((J) => {
        console.log(
          `\x1B[32m${J.method}\x1B[0m ${" ".repeat(8 - J.method.length)} ${
            J.path
          }`,
        );
      });
    }
    mount($, J, Q) {
      const Y = C0(this._basePath, $),
        G = Y === "/" ? 0 : Y.length,
        X = async (W, H) => {
          let q = void 0;
          try {
            q = W.executionCtx;
          } catch {}
          const z = Q ? Q(W) : [W.env, q],
            B = Array.isArray(z) ? z : [z],
            M = j5(W.req.url),
            V = await J(
              new Request(
                new URL((W.req.path.slice(G) || "/") + M, W.req.url),
                W.req.raw,
              ),
              ...B,
            );
          if (V) return V;
          await H();
        };
      return this.addRoute(T, C0($, "*"), X), this;
    }
    get routerName() {
      return this.matchRoute("GET", "/"), this.router.name;
    }
    addRoute($, J, Q) {
      ($ = $.toUpperCase()),
        (J = C0(this._basePath, J)),
        this.router.add($, J, Q);
      const Y = { path: J, method: $, handler: Q };
      this.routes.push(Y);
    }
    matchRoute($, J) {
      return this.router.match($, J);
    }
    handleError($, J) {
      if ($ instanceof Error) return this.errorHandler($, J);
      throw $;
    }
    dispatch($, J, Q, Y) {
      if (Y === "HEAD")
        return (async () =>
          new Response(null, await this.dispatch($, J, Q, "GET")))();
      const G = this.getPath($, { env: Q }),
        [X, W] = this.matchRoute(Y, G),
        H = new I0(new E5($, G, W), {
          env: Q,
          executionCtx: J,
          notFoundHandler: this.notFoundHandler,
        });
      if (X.length === 1) {
        let z;
        H.req.setParams(X[0][1]);
        try {
          if (((z = X[0][0](H, async () => {})), !z))
            return this.notFoundHandler(H);
        } catch (B) {
          return this.handleError(B, H);
        }
        if (z instanceof Response) return z;
        if ("response" in z) z = z.response;
        if (z instanceof Response) return z;
        return (async () => {
          let B;
          try {
            if (((B = await z), B !== void 0 && "response" in B))
              B = B.response;
            if (!B) return this.notFoundHandler(H);
          } catch (M) {
            return this.handleError(M, H);
          }
          return B;
        })();
      }
      const q = Z1(X, this.errorHandler, this.notFoundHandler);
      return (async () => {
        try {
          const z = await q(H);
          if (!z.finalized)
            throw new Error(
              "Context is not finalized. You may forget returning Response object or `await next()`",
            );
          return z.res;
        } catch (z) {
          return this.handleError(z, H);
        }
      })();
    }
  };
var N4 = function ($, J) {
    if ($.length === 1) return J.length === 1 ? ($ < J ? -1 : 1) : -1;
    if (J.length === 1) return 1;
    if ($ === s0 || $ === a0) return 1;
    else if (J === s0 || J === a0) return -1;
    if ($ === j1) return 1;
    else if (J === j1) return -1;
    return $.length === J.length ? ($ < J ? -1 : 1) : J.length - $.length;
  },
  j1 = "[^/]+",
  s0 = ".*",
  a0 = "(?:|/.*)",
  P0 = Symbol(),
  F1 = class {
    constructor() {
      this.children = {};
    }
    insert($, J, Q, Y, G) {
      if ($.length === 0) {
        if (this.index !== void 0) throw P0;
        if (G) return;
        this.index = J;
        return;
      }
      const [X, ...W] = $,
        H =
          X === "*"
            ? W.length === 0
              ? ["", "", s0]
              : ["", "", j1]
            : X === "/*"
              ? ["", "", a0]
              : X.match(/^\:([^\{\}]+)(?:\{(.+)\})?$/);
      let q;
      if (H) {
        const z = H[1];
        let B = H[2] || j1;
        if (z && H[2]) {
          if (
            ((B = B.replace(/^\((?!\?:)(?=[^)]+\)$)/, "(?:")),
            /\((?!\?:)/.test(B))
          )
            throw P0;
        }
        if (((q = this.children[B]), !q)) {
          if (Object.keys(this.children).some((M) => M !== s0 && M !== a0))
            throw P0;
          if (G) return;
          if (((q = this.children[B] = new F1()), z !== ""))
            q.varIndex = Y.varIndex++;
        }
        if (!G && z !== "") Q.push([z, q.varIndex]);
      } else if (((q = this.children[X]), !q)) {
        if (
          Object.keys(this.children).some(
            (z) => z.length > 1 && z !== s0 && z !== a0,
          )
        )
          throw P0;
        if (G) return;
        q = this.children[X] = new F1();
      }
      q.insert(W, J, Q, Y, G);
    }
    buildRegExpStr() {
      const J = Object.keys(this.children)
        .sort(N4)
        .map((Q) => {
          const Y = this.children[Q];
          return (
            (typeof Y.varIndex === "number" ? `(${Q})@${Y.varIndex}` : Q) +
            Y.buildRegExpStr()
          );
        });
      if (typeof this.index === "number") J.unshift(`#${this.index}`);
      if (J.length === 0) return "";
      if (J.length === 1) return J[0];
      return "(?:" + J.join("|") + ")";
    }
  };
var C5 = class {
  constructor() {
    (this.context = { varIndex: 0 }), (this.root = new F1());
  }
  insert($, J, Q) {
    const Y = [],
      G = [];
    for (let W = 0; ; ) {
      let H = !1;
      if (
        (($ = $.replace(/\{[^}]+\}/g, (q) => {
          const z = `@\\${W}`;
          return (G[W] = [z, q]), W++, (H = !0), z;
        })),
        !H)
      )
        break;
    }
    const X = $.match(/(?::[^\/]+)|(?:\/\*$)|./g) || [];
    for (let W = G.length - 1; W >= 0; W--) {
      const [H] = G[W];
      for (let q = X.length - 1; q >= 0; q--)
        if (X[q].indexOf(H) !== -1) {
          X[q] = X[q].replace(H, G[W][1]);
          break;
        }
    }
    return this.root.insert(X, J, Y, this.context, Q), Y;
  }
  buildRegExp() {
    let $ = this.root.buildRegExpStr();
    if ($ === "") return [/^$/, [], []];
    let J = 0;
    const Q = [],
      Y = [];
    return (
      ($ = $.replace(/#(\d+)|@(\d+)|\.\*\$/g, (G, X, W) => {
        if (typeof X !== "undefined") return (Q[++J] = Number(X)), "$()";
        if (typeof W !== "undefined") return (Y[Number(W)] = ++J), "";
        return "";
      })),
      [new RegExp(`^${$}`), Q, Y]
    );
  }
};
var I5 = function ($) {
    return (
      l1[$] ??
      (l1[$] = new RegExp(
        $ === "*" ? "" : `^${$.replace(/\/\*/, "(?:|/.*)")}\$`,
      ))
    );
  },
  b4 = function () {
    l1 = {};
  },
  v4 = function ($) {
    const J = new C5(),
      Q = [];
    if ($.length === 0) return E4;
    const Y = $.map((z) => [!/\*|\/:/.test(z[0]), ...z]).sort(
        ([z, B], [M, V]) => (z ? 1 : M ? -1 : B.length - V.length),
      ),
      G = {};
    for (let z = 0, B = -1, M = Y.length; z < M; z++) {
      const [V, _, N] = Y[z];
      if (V) G[_] = [N.map(([I]) => [I, {}]), f5];
      else B++;
      let O;
      try {
        O = J.insert(_, B, V);
      } catch (I) {
        throw I === P0 ? new _1(_) : I;
      }
      if (V) continue;
      Q[B] = N.map(([I, v]) => {
        const l = {};
        v -= 1;
        for (; v >= 0; v--) {
          const [C, x] = O[v];
          l[C] = x;
        }
        return [I, l];
      });
    }
    const [X, W, H] = J.buildRegExp();
    for (let z = 0, B = Q.length; z < B; z++)
      for (let M = 0, V = Q[z].length; M < V; M++) {
        const _ = Q[z][M]?.[1];
        if (!_) continue;
        const N = Object.keys(_);
        for (let O = 0, I = N.length; O < I; O++) _[N[O]] = H[_[N[O]]];
      }
    const q = [];
    for (let z in W) q[z] = Q[W[z]];
    return [X, q, G];
  },
  k0 = function ($, J) {
    if (!$) return;
    for (let Q of Object.keys($).sort((Y, G) => G.length - Y.length))
      if (I5(Q).test(J)) return [...$[Q]];
    return;
  },
  m1 = [T, ...w1].map(($) => $.toUpperCase()),
  f5 = [],
  E4 = [/^$/, [], {}],
  l1 = {},
  c1 = class {
    constructor() {
      (this.name = "RegExpRouter"),
        (this.middleware = { [T]: {} }),
        (this.routes = { [T]: {} });
    }
    add($, J, Q) {
      var Y;
      const { middleware: G, routes: X } = this;
      if (!G || !X)
        throw new Error(
          "Can not add a route since the matcher is already built.",
        );
      if (m1.indexOf($) === -1) m1.push($);
      if (!G[$])
        [G, X].forEach((q) => {
          (q[$] = {}),
            Object.keys(q[T]).forEach((z) => {
              q[$][z] = [...q[T][z]];
            });
        });
      if (J === "/*") J = "*";
      const W = (J.match(/\/:/g) || []).length;
      if (/\*$/.test(J)) {
        const q = I5(J);
        if ($ === T)
          Object.keys(G).forEach((z) => {
            var B;
            (B = G[z])[J] || (B[J] = k0(G[z], J) || k0(G[T], J) || []);
          });
        else (Y = G[$])[J] || (Y[J] = k0(G[$], J) || k0(G[T], J) || []);
        Object.keys(G).forEach((z) => {
          if ($ === T || $ === z)
            Object.keys(G[z]).forEach((B) => {
              q.test(B) && G[z][B].push([Q, W]);
            });
        }),
          Object.keys(X).forEach((z) => {
            if ($ === T || $ === z)
              Object.keys(X[z]).forEach(
                (B) => q.test(B) && X[z][B].push([Q, W]),
              );
          });
        return;
      }
      const H = U1(J) || [J];
      for (let q = 0, z = H.length; q < z; q++) {
        const B = H[q];
        Object.keys(X).forEach((M) => {
          var V;
          if ($ === T || $ === M)
            (V = X[M])[B] || (V[B] = [...(k0(G[M], B) || k0(G[T], B) || [])]),
              X[M][B].push([Q, H.length === 2 && q === 0 ? W - 1 : W]);
        });
      }
    }
    match($, J) {
      b4();
      const Q = this.buildAllMatchers();
      return (
        (this.match = (Y, G) => {
          const X = Q[Y],
            W = X[2][G];
          if (W) return W;
          const H = G.match(X[0]);
          if (!H) return [[], f5];
          const q = H.indexOf("", 1);
          return [X[1][q], H];
        }),
        this.match($, J)
      );
    }
    buildAllMatchers() {
      const $ = {};
      return (
        m1.forEach((J) => {
          $[J] = this.buildMatcher(J) || $[T];
        }),
        (this.middleware = this.routes = void 0),
        $
      );
    }
    buildMatcher($) {
      const J = [];
      let Q = $ === T;
      if (
        ([this.middleware, this.routes].forEach((Y) => {
          const G = Y[$] ? Object.keys(Y[$]).map((X) => [X, Y[$][X]]) : [];
          if (G.length !== 0) Q || (Q = !0), J.push(...G);
          else if ($ !== T)
            J.push(...Object.keys(Y[T]).map((X) => [X, Y[T][X]]));
        }),
        !Q)
      )
        return null;
      else return v4(J);
    }
  };
var u1 = class {
  constructor($) {
    (this.name = "SmartRouter"),
      (this.routers = []),
      (this.routes = []),
      Object.assign(this, $);
  }
  add($, J, Q) {
    if (!this.routes)
      throw new Error(
        "Can not add a route since the matcher is already built.",
      );
    this.routes.push([$, J, Q]);
  }
  match($, J) {
    if (!this.routes) throw new Error("Fatal error");
    const { routers: Q, routes: Y } = this,
      G = Q.length;
    let X = 0,
      W;
    for (; X < G; X++) {
      const H = Q[X];
      try {
        Y.forEach((q) => {
          H.add(...q);
        }),
          (W = H.match($, J));
      } catch (q) {
        if (q instanceof _1) continue;
        throw q;
      }
      (this.match = H.match.bind(H)),
        (this.routers = [H]),
        (this.routes = void 0);
      break;
    }
    if (X === G) throw new Error("Fatal error");
    return (this.name = `SmartRouter + ${this.activeRouter.name}`), W;
  }
  get activeRouter() {
    if (this.routes || this.routers.length !== 1)
      throw new Error("No active router has been determined yet.");
    return this.routers[0];
  }
};
var p1 = class {
  constructor($, J, Q) {
    if (
      ((this.order = 0),
      (this.params = {}),
      (this.children = Q || {}),
      (this.methods = []),
      (this.name = ""),
      $ && J)
    ) {
      const Y = {};
      (Y[$] = {
        handler: J,
        params: {},
        possibleKeys: [],
        score: 0,
        name: this.name,
      }),
        (this.methods = [Y]);
    }
    this.patterns = [];
  }
  insert($, J, Q) {
    (this.name = `${$} ${J}`), (this.order = ++this.order);
    let Y = this;
    const G = _5(J),
      X = [],
      W = [];
    for (let z = 0, B = G.length; z < B; z++) {
      const M = G[z];
      if (Object.keys(Y.children).includes(M)) {
        W.push(...Y.patterns), (Y = Y.children[M]);
        const _ = x1(M);
        if (_) X.push(_[1]);
        continue;
      }
      Y.children[M] = new p1();
      const V = x1(M);
      if (V) Y.patterns.push(V), W.push(...Y.patterns), X.push(V[1]);
      W.push(...Y.patterns), (Y = Y.children[M]);
    }
    if (!Y.methods.length) Y.methods = [];
    const H = {},
      q = {
        handler: Q,
        params: {},
        possibleKeys: X,
        name: this.name,
        score: this.order,
      };
    return (H[$] = q), Y.methods.push(H), Y;
  }
  gHSets($, J, Q) {
    const Y = [];
    for (let G = 0, X = $.methods.length; G < X; G++) {
      const W = $.methods[G],
        H = W[J] || W[T];
      if (H !== void 0)
        H.possibleKeys.map((q) => {
          H.params[q] = Q[q];
        }),
          Y.push(H);
    }
    return Y;
  }
  search($, J) {
    const Q = [],
      Y = {};
    this.params = {};
    let X = [this];
    const W = w5(J);
    for (let q = 0, z = W.length; q < z; q++) {
      const B = W[q],
        M = q === z - 1,
        V = [];
      for (let _ = 0, N = X.length; _ < N; _++) {
        const O = X[_],
          I = O.children[B];
        if (I)
          if (M === !0) {
            if (I.children["*"])
              Q.push(...this.gHSets(I.children["*"], $, { ...Y, ...O.params }));
            Q.push(...this.gHSets(I, $, { ...Y, ...O.params }));
          } else V.push(I);
        for (let v = 0, l = O.patterns.length; v < l; v++) {
          const C = O.patterns[v];
          if (C === "*") {
            const z0 = O.children["*"];
            if (z0)
              Q.push(...this.gHSets(z0, $, { ...Y, ...O.params })), V.push(z0);
            continue;
          }
          if (B === "") continue;
          const [x, K0, d] = C,
            G0 = O.children[x],
            A0 = W.slice(q).join("/");
          if (d instanceof RegExp && d.test(A0)) {
            (Y[K0] = A0), Q.push(...this.gHSets(G0, $, { ...Y, ...O.params }));
            continue;
          }
          if (d === !0 || (d instanceof RegExp && d.test(B))) {
            if (typeof x === "string")
              if (((Y[K0] = B), M === !0)) {
                if (
                  (Q.push(...this.gHSets(G0, $, { ...Y, ...O.params })),
                  G0.children["*"])
                )
                  Q.push(
                    ...this.gHSets(G0.children["*"], $, { ...Y, ...O.params }),
                  );
              } else (G0.params = { ...Y }), V.push(G0);
          }
        }
      }
      X = V;
    }
    return [
      Q.sort((q, z) => {
        return q.score - z.score;
      }).map(({ handler: q, params: z }) => [q, z]),
    ];
  }
};
var d1 = class {
  constructor() {
    (this.name = "TrieRouter"), (this.node = new p1());
  }
  add($, J, Q) {
    const Y = U1(J);
    if (Y) {
      for (let G of Y) this.node.insert($, G, Q);
      return;
    }
    this.node.insert($, J, Q);
  }
  match($, J) {
    return this.node.search($, J);
  }
};
var i1 = class extends y1 {
  constructor($ = {}) {
    super($);
    this.router = $.router ?? new u1({ routers: [new c1(), new d1()] });
  }
};
var P5 = ($) => {
  const Q = {
      ...{
        origin: "*",
        allowMethods: ["GET", "HEAD", "PUT", "POST", "DELETE", "PATCH"],
        allowHeaders: [],
        exposeHeaders: [],
      },
      ...$,
    },
    Y = ((G) => {
      if (typeof G === "string") return () => G;
      else if (typeof G === "function") return G;
      else return (X) => (G.includes(X) ? X : G[0]);
    })(Q.origin);
  return async (G, X) => {
    function W(q, z) {
      G.res.headers.set(q, z);
    }
    const H = Y(G.req.header("origin") || "");
    if (H) W("Access-Control-Allow-Origin", H);
    if (Q.origin !== "*") W("Vary", "Origin");
    if (Q.credentials) W("Access-Control-Allow-Credentials", "true");
    if (Q.exposeHeaders?.length)
      W("Access-Control-Expose-Headers", Q.exposeHeaders.join(","));
    if (G.req.method !== "OPTIONS") await X();
    else {
      if (Q.maxAge != null) W("Access-Control-Max-Age", Q.maxAge.toString());
      if (Q.allowMethods?.length)
        W("Access-Control-Allow-Methods", Q.allowMethods.join(","));
      let q = Q.allowHeaders;
      if (!q?.length) {
        const z = G.req.header("Access-Control-Request-Headers");
        if (z) q = z.split(/\s*,\s*/);
      }
      if (q?.length)
        W("Access-Control-Allow-Headers", q.join(",")),
          G.res.headers.append("Vary", "Access-Control-Request-Headers");
      return (
        G.res.headers.delete("Content-Length"),
        G.res.headers.delete("Content-Type"),
        new Response(null, {
          headers: G.res.headers,
          status: 204,
          statusText: G.res.statusText,
        })
      );
    }
  };
};
var Q4 = O4(J4(), 1),
  o = new Q4.PrismaClient();
var p2 = function ($) {
    X4 = $;
  },
  b1 = function () {
    return X4;
  },
  F = function ($, J) {
    const Q = v1({
      issueData: J,
      data: $.data,
      path: $.path,
      errorMaps: [
        $.common.contextualErrorMap,
        $.schemaErrorMap,
        b1(),
        $1,
      ].filter((Y) => !!Y),
    });
    $.common.issues.push(Q);
  },
  E = function ($) {
    if (!$) return {};
    const {
      errorMap: J,
      invalid_type_error: Q,
      required_error: Y,
      description: G,
    } = $;
    if (J && (Q || Y))
      throw new Error(
        `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`,
      );
    if (J) return { errorMap: J, description: G };
    return {
      errorMap: (W, H) => {
        if (W.code !== "invalid_type") return { message: H.defaultError };
        if (typeof H.data === "undefined")
          return { message: Y !== null && Y !== void 0 ? Y : H.defaultError };
        return { message: Q !== null && Q !== void 0 ? Q : H.defaultError };
      },
      description: G,
    };
  },
  J6 = function ($, J) {
    if ((J === "v4" || !J) && t2.test($)) return !0;
    if ((J === "v6" || !J) && e2.test($)) return !0;
    return !1;
  },
  Q6 = function ($, J) {
    const Q = ($.toString().split(".")[1] || "").length,
      Y = (J.toString().split(".")[1] || "").length,
      G = Q > Y ? Q : Y,
      X = parseInt($.toFixed(G).replace(".", "")),
      W = parseInt(J.toFixed(G).replace(".", ""));
    return (X % W) / Math.pow(10, G);
  },
  h0 = function ($) {
    if ($ instanceof g) {
      const J = {};
      for (let Q in $.shape) {
        const Y = $.shape[Q];
        J[Q] = W0.create(h0(Y));
      }
      return new g({ ...$._def, shape: () => J });
    } else if ($ instanceof Q0)
      return new Q0({ ...$._def, type: h0($.element) });
    else if ($ instanceof W0) return W0.create(h0($.unwrap()));
    else if ($ instanceof L0) return L0.create(h0($.unwrap()));
    else if ($ instanceof q0) return q0.create($.items.map((J) => h0(J)));
    else return $;
  },
  M5 = function ($, J) {
    const Q = j0($),
      Y = j0(J);
    if ($ === J) return { valid: !0, data: $ };
    else if (Q === j.object && Y === j.object) {
      const G = f.objectKeys(J),
        X = f.objectKeys($).filter((H) => G.indexOf(H) !== -1),
        W = { ...$, ...J };
      for (let H of X) {
        const q = M5($[H], J[H]);
        if (!q.valid) return { valid: !1 };
        W[H] = q.data;
      }
      return { valid: !0, data: W };
    } else if (Q === j.array && Y === j.array) {
      if ($.length !== J.length) return { valid: !1 };
      const G = [];
      for (let X = 0; X < $.length; X++) {
        const W = $[X],
          H = J[X],
          q = M5(W, H);
        if (!q.valid) return { valid: !1 };
        G.push(q.data);
      }
      return { valid: !0, data: G };
    } else if (Q === j.date && Y === j.date && +$ === +J)
      return { valid: !0, data: $ };
    else return { valid: !1 };
  },
  H4 = function ($, J) {
    return new R0({ values: $, typeName: K.ZodEnum, ...E(J) });
  },
  f;
(function ($) {
  $.assertEqual = (G) => G;
  function J(G) {}
  $.assertIs = J;
  function Q(G) {
    throw new Error();
  }
  ($.assertNever = Q),
    ($.arrayToEnum = (G) => {
      const X = {};
      for (let W of G) X[W] = W;
      return X;
    }),
    ($.getValidEnumValues = (G) => {
      const X = $.objectKeys(G).filter((H) => typeof G[G[H]] !== "number"),
        W = {};
      for (let H of X) W[H] = G[H];
      return $.objectValues(W);
    }),
    ($.objectValues = (G) => {
      return $.objectKeys(G).map(function (X) {
        return G[X];
      });
    }),
    ($.objectKeys =
      typeof Object.keys === "function"
        ? (G) => Object.keys(G)
        : (G) => {
            const X = [];
            for (let W in G)
              if (Object.prototype.hasOwnProperty.call(G, W)) X.push(W);
            return X;
          }),
    ($.find = (G, X) => {
      for (let W of G) if (X(W)) return W;
      return;
    }),
    ($.isInteger =
      typeof Number.isInteger === "function"
        ? (G) => Number.isInteger(G)
        : (G) => typeof G === "number" && isFinite(G) && Math.floor(G) === G);
  function Y(G, X = " | ") {
    return G.map((W) => (typeof W === "string" ? `'${W}'` : W)).join(X);
  }
  ($.joinValues = Y),
    ($.jsonStringifyReplacer = (G, X) => {
      if (typeof X === "bigint") return X.toString();
      return X;
    });
})(f || (f = {}));
var q5;
(function ($) {
  $.mergeShapes = (J, Q) => {
    return { ...J, ...Q };
  };
})(q5 || (q5 = {}));
var j = f.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  j0 = ($) => {
    switch (typeof $) {
      case "undefined":
        return j.undefined;
      case "string":
        return j.string;
      case "number":
        return isNaN($) ? j.nan : j.number;
      case "boolean":
        return j.boolean;
      case "function":
        return j.function;
      case "bigint":
        return j.bigint;
      case "symbol":
        return j.symbol;
      case "object":
        if (Array.isArray($)) return j.array;
        if ($ === null) return j.null;
        if (
          $.then &&
          typeof $.then === "function" &&
          $.catch &&
          typeof $.catch === "function"
        )
          return j.promise;
        if (typeof Map !== "undefined" && $ instanceof Map) return j.map;
        if (typeof Set !== "undefined" && $ instanceof Set) return j.set;
        if (typeof Date !== "undefined" && $ instanceof Date) return j.date;
        return j.object;
      default:
        return j.unknown;
    }
  },
  w = f.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  u2 = ($) => {
    return JSON.stringify($, null, 2).replace(/"([^"]+)":/g, "$1:");
  };
class s extends Error {
  constructor($) {
    super();
    (this.issues = []),
      (this.addIssue = (Q) => {
        this.issues = [...this.issues, Q];
      }),
      (this.addIssues = (Q = []) => {
        this.issues = [...this.issues, ...Q];
      });
    const J = new.target.prototype;
    if (Object.setPrototypeOf) Object.setPrototypeOf(this, J);
    else this.__proto__ = J;
    (this.name = "ZodError"), (this.issues = $);
  }
  get errors() {
    return this.issues;
  }
  format($) {
    const J =
        $ ||
        function (G) {
          return G.message;
        },
      Q = { _errors: [] },
      Y = (G) => {
        for (let X of G.issues)
          if (X.code === "invalid_union") X.unionErrors.map(Y);
          else if (X.code === "invalid_return_type") Y(X.returnTypeError);
          else if (X.code === "invalid_arguments") Y(X.argumentsError);
          else if (X.path.length === 0) Q._errors.push(J(X));
          else {
            let W = Q,
              H = 0;
            while (H < X.path.length) {
              const q = X.path[H];
              if (H !== X.path.length - 1) W[q] = W[q] || { _errors: [] };
              else (W[q] = W[q] || { _errors: [] }), W[q]._errors.push(J(X));
              (W = W[q]), H++;
            }
          }
      };
    return Y(this), Q;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, f.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten($ = (J) => J.message) {
    const J = {},
      Q = [];
    for (let Y of this.issues)
      if (Y.path.length > 0)
        (J[Y.path[0]] = J[Y.path[0]] || []), J[Y.path[0]].push($(Y));
      else Q.push($(Y));
    return { formErrors: Q, fieldErrors: J };
  }
  get formErrors() {
    return this.flatten();
  }
}
s.create = ($) => {
  return new s($);
};
var $1 = ($, J) => {
    let Q;
    switch ($.code) {
      case w.invalid_type:
        if ($.received === j.undefined) Q = "Required";
        else Q = `Expected ${$.expected}, received ${$.received}`;
        break;
      case w.invalid_literal:
        Q = `Invalid literal value, expected ${JSON.stringify(
          $.expected,
          f.jsonStringifyReplacer,
        )}`;
        break;
      case w.unrecognized_keys:
        Q = `Unrecognized key(s) in object: ${f.joinValues($.keys, ", ")}`;
        break;
      case w.invalid_union:
        Q = "Invalid input";
        break;
      case w.invalid_union_discriminator:
        Q = `Invalid discriminator value. Expected ${f.joinValues($.options)}`;
        break;
      case w.invalid_enum_value:
        Q = `Invalid enum value. Expected ${f.joinValues(
          $.options,
        )}, received '${$.received}'`;
        break;
      case w.invalid_arguments:
        Q = "Invalid function arguments";
        break;
      case w.invalid_return_type:
        Q = "Invalid function return type";
        break;
      case w.invalid_date:
        Q = "Invalid date";
        break;
      case w.invalid_string:
        if (typeof $.validation === "object")
          if ("includes" in $.validation) {
            if (
              ((Q = `Invalid input: must include "${$.validation.includes}"`),
              typeof $.validation.position === "number")
            )
              Q = `${Q} at one or more positions greater than or equal to ${$.validation.position}`;
          } else if ("startsWith" in $.validation)
            Q = `Invalid input: must start with "${$.validation.startsWith}"`;
          else if ("endsWith" in $.validation)
            Q = `Invalid input: must end with "${$.validation.endsWith}"`;
          else f.assertNever($.validation);
        else if ($.validation !== "regex") Q = `Invalid ${$.validation}`;
        else Q = "Invalid";
        break;
      case w.too_small:
        if ($.type === "array")
          Q = `Array must contain ${
            $.exact ? "exactly" : $.inclusive ? "at least" : "more than"
          } ${$.minimum} element(s)`;
        else if ($.type === "string")
          Q = `String must contain ${
            $.exact ? "exactly" : $.inclusive ? "at least" : "over"
          } ${$.minimum} character(s)`;
        else if ($.type === "number")
          Q = `Number must be ${
            $.exact
              ? "exactly equal to "
              : $.inclusive
                ? "greater than or equal to "
                : "greater than "
          }${$.minimum}`;
        else if ($.type === "date")
          Q = `Date must be ${
            $.exact
              ? "exactly equal to "
              : $.inclusive
                ? "greater than or equal to "
                : "greater than "
          }${new Date(Number($.minimum))}`;
        else Q = "Invalid input";
        break;
      case w.too_big:
        if ($.type === "array")
          Q = `Array must contain ${
            $.exact ? "exactly" : $.inclusive ? "at most" : "less than"
          } ${$.maximum} element(s)`;
        else if ($.type === "string")
          Q = `String must contain ${
            $.exact ? "exactly" : $.inclusive ? "at most" : "under"
          } ${$.maximum} character(s)`;
        else if ($.type === "number")
          Q = `Number must be ${
            $.exact
              ? "exactly"
              : $.inclusive
                ? "less than or equal to"
                : "less than"
          } ${$.maximum}`;
        else if ($.type === "bigint")
          Q = `BigInt must be ${
            $.exact
              ? "exactly"
              : $.inclusive
                ? "less than or equal to"
                : "less than"
          } ${$.maximum}`;
        else if ($.type === "date")
          Q = `Date must be ${
            $.exact
              ? "exactly"
              : $.inclusive
                ? "smaller than or equal to"
                : "smaller than"
          } ${new Date(Number($.maximum))}`;
        else Q = "Invalid input";
        break;
      case w.custom:
        Q = "Invalid input";
        break;
      case w.invalid_intersection_types:
        Q = "Intersection results could not be merged";
        break;
      case w.not_multiple_of:
        Q = `Number must be a multiple of ${$.multipleOf}`;
        break;
      case w.not_finite:
        Q = "Number must be finite";
        break;
      default:
        (Q = J.defaultError), f.assertNever($);
    }
    return { message: Q };
  },
  X4 = $1,
  v1 = ($) => {
    const { data: J, path: Q, errorMaps: Y, issueData: G } = $,
      X = [...Q, ...(G.path || [])],
      W = { ...G, path: X };
    let H = "";
    const q = Y.filter((z) => !!z)
      .slice()
      .reverse();
    for (let z of q) H = z(W, { data: J, defaultError: H }).message;
    return { ...G, path: X, message: G.message || H };
  },
  d2 = [];
class p {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid") this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted") this.value = "aborted";
  }
  static mergeArray($, J) {
    const Q = [];
    for (let Y of J) {
      if (Y.status === "aborted") return S;
      if (Y.status === "dirty") $.dirty();
      Q.push(Y.value);
    }
    return { status: $.value, value: Q };
  }
  static async mergeObjectAsync($, J) {
    const Q = [];
    for (let Y of J) Q.push({ key: await Y.key, value: await Y.value });
    return p.mergeObjectSync($, Q);
  }
  static mergeObjectSync($, J) {
    const Q = {};
    for (let Y of J) {
      const { key: G, value: X } = Y;
      if (G.status === "aborted") return S;
      if (X.status === "aborted") return S;
      if (G.status === "dirty") $.dirty();
      if (X.status === "dirty") $.dirty();
      if (
        G.value !== "__proto__" &&
        (typeof X.value !== "undefined" || Y.alwaysSet)
      )
        Q[G.value] = X.value;
    }
    return { status: $.value, value: Q };
  }
}
var S = Object.freeze({ status: "aborted" }),
  W4 = ($) => ({ status: "dirty", value: $ }),
  i = ($) => ({ status: "valid", value: $ }),
  z5 = ($) => $.status === "aborted",
  B5 = ($) => $.status === "dirty",
  J1 = ($) => $.status === "valid",
  C1 = ($) => typeof Promise !== "undefined" && $ instanceof Promise,
  R;
(function ($) {
  ($.errToObj = (J) => (typeof J === "string" ? { message: J } : J || {})),
    ($.toString = (J) =>
      typeof J === "string"
        ? J
        : J === null || J === void 0
          ? void 0
          : J.message);
})(R || (R = {}));
class Y0 {
  constructor($, J, Q, Y) {
    (this._cachedPath = []),
      (this.parent = $),
      (this.data = J),
      (this._path = Q),
      (this._key = Y);
  }
  get path() {
    if (!this._cachedPath.length)
      if (this._key instanceof Array)
        this._cachedPath.push(...this._path, ...this._key);
      else this._cachedPath.push(...this._path, this._key);
    return this._cachedPath;
  }
}
var Y4 = ($, J) => {
  if (J1(J)) return { success: !0, data: J.value };
  else {
    if (!$.common.issues.length)
      throw new Error("Validation failed but no issues detected.");
    return {
      success: !1,
      get error() {
        if (this._error) return this._error;
        const Q = new s($.common.issues);
        return (this._error = Q), this._error;
      },
    };
  }
};
class b {
  constructor($) {
    (this.spa = this.safeParseAsync),
      (this._def = $),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType($) {
    return j0($.data);
  }
  _getOrReturnCtx($, J) {
    return (
      J || {
        common: $.parent.common,
        data: $.data,
        parsedType: j0($.data),
        schemaErrorMap: this._def.errorMap,
        path: $.path,
        parent: $.parent,
      }
    );
  }
  _processInputParams($) {
    return {
      status: new p(),
      ctx: {
        common: $.parent.common,
        data: $.data,
        parsedType: j0($.data),
        schemaErrorMap: this._def.errorMap,
        path: $.path,
        parent: $.parent,
      },
    };
  }
  _parseSync($) {
    const J = this._parse($);
    if (C1(J)) throw new Error("Synchronous parse encountered promise.");
    return J;
  }
  _parseAsync($) {
    const J = this._parse($);
    return Promise.resolve(J);
  }
  parse($, J) {
    const Q = this.safeParse($, J);
    if (Q.success) return Q.data;
    throw Q.error;
  }
  safeParse($, J) {
    var Q;
    const Y = {
        common: {
          issues: [],
          async:
            (Q = J === null || J === void 0 ? void 0 : J.async) !== null &&
            Q !== void 0
              ? Q
              : !1,
          contextualErrorMap: J === null || J === void 0 ? void 0 : J.errorMap,
        },
        path: (J === null || J === void 0 ? void 0 : J.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: $,
        parsedType: j0($),
      },
      G = this._parseSync({ data: $, path: Y.path, parent: Y });
    return Y4(Y, G);
  }
  async parseAsync($, J) {
    const Q = await this.safeParseAsync($, J);
    if (Q.success) return Q.data;
    throw Q.error;
  }
  async safeParseAsync($, J) {
    const Q = {
        common: {
          issues: [],
          contextualErrorMap: J === null || J === void 0 ? void 0 : J.errorMap,
          async: !0,
        },
        path: (J === null || J === void 0 ? void 0 : J.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: $,
        parsedType: j0($),
      },
      Y = this._parse({ data: $, path: Q.path, parent: Q }),
      G = await (C1(Y) ? Y : Promise.resolve(Y));
    return Y4(Q, G);
  }
  refine($, J) {
    const Q = (Y) => {
      if (typeof J === "string" || typeof J === "undefined")
        return { message: J };
      else if (typeof J === "function") return J(Y);
      else return J;
    };
    return this._refinement((Y, G) => {
      const X = $(Y),
        W = () => G.addIssue({ code: w.custom, ...Q(Y) });
      if (typeof Promise !== "undefined" && X instanceof Promise)
        return X.then((H) => {
          if (!H) return W(), !1;
          else return !0;
        });
      if (!X) return W(), !1;
      else return !0;
    });
  }
  refinement($, J) {
    return this._refinement((Q, Y) => {
      if (!$(Q)) return Y.addIssue(typeof J === "function" ? J(Q, Y) : J), !1;
      else return !0;
    });
  }
  _refinement($) {
    return new a({
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "refinement", refinement: $ },
    });
  }
  superRefine($) {
    return this._refinement($);
  }
  optional() {
    return W0.create(this, this._def);
  }
  nullable() {
    return L0.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Q0.create(this, this._def);
  }
  promise() {
    return v0.create(this, this._def);
  }
  or($) {
    return c0.create([this, $], this._def);
  }
  and($) {
    return u0.create(this, $, this._def);
  }
  transform($) {
    return new a({
      ...E(this._def),
      schema: this,
      typeName: K.ZodEffects,
      effect: { type: "transform", transform: $ },
    });
  }
  default($) {
    const J = typeof $ === "function" ? $ : () => $;
    return new n0({
      ...E(this._def),
      innerType: this,
      defaultValue: J,
      typeName: K.ZodDefault,
    });
  }
  brand() {
    return new V5({ typeName: K.ZodBranded, type: this, ...E(this._def) });
  }
  catch($) {
    const J = typeof $ === "function" ? $ : () => $;
    return new W1({
      ...E(this._def),
      innerType: this,
      catchValue: J,
      typeName: K.ZodCatch,
    });
  }
  describe($) {
    return new this.constructor({ ...this._def, description: $ });
  }
  pipe($) {
    return z1.create(this, $);
  }
  readonly() {
    return q1.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
var i2 = /^c[^\s-]{8,}$/i,
  n2 = /^[a-z][a-z0-9]*$/,
  o2 = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  r2 =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  s2 =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  a2 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
  H5,
  t2 =
    /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
  e2 =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  $6 = ($) => {
    if ($.precision)
      if ($.offset)
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${$.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)\$`,
        );
      else
        return new RegExp(
          `^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${$.precision}}Z\$`,
        );
    else if ($.precision === 0)
      if ($.offset)
        return new RegExp(
          "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$",
        );
      else return new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$");
    else if ($.offset)
      return new RegExp(
        "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$",
      );
    else
      return new RegExp(
        "^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$",
      );
  };
class J0 extends b {
  _parse($) {
    if (this._def.coerce) $.data = String($.data);
    if (this._getType($) !== j.string) {
      const G = this._getOrReturnCtx($);
      return (
        F(G, {
          code: w.invalid_type,
          expected: j.string,
          received: G.parsedType,
        }),
        S
      );
    }
    const Q = new p();
    let Y = void 0;
    for (let G of this._def.checks)
      if (G.kind === "min") {
        if ($.data.length < G.value)
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.too_small,
              minimum: G.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "max") {
        if ($.data.length > G.value)
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.too_big,
              maximum: G.value,
              type: "string",
              inclusive: !0,
              exact: !1,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "length") {
        const X = $.data.length > G.value,
          W = $.data.length < G.value;
        if (X || W) {
          if (((Y = this._getOrReturnCtx($, Y)), X))
            F(Y, {
              code: w.too_big,
              maximum: G.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: G.message,
            });
          else if (W)
            F(Y, {
              code: w.too_small,
              minimum: G.value,
              type: "string",
              inclusive: !0,
              exact: !0,
              message: G.message,
            });
          Q.dirty();
        }
      } else if (G.kind === "email") {
        if (!s2.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "email",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "emoji") {
        if (!H5) H5 = new RegExp(a2, "u");
        if (!H5.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "emoji",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "uuid") {
        if (!r2.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "uuid",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "cuid") {
        if (!i2.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "cuid",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "cuid2") {
        if (!n2.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "cuid2",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "ulid") {
        if (!o2.test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "ulid",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "url")
        try {
          new URL($.data);
        } catch (X) {
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "url",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
        }
      else if (G.kind === "regex") {
        if (((G.regex.lastIndex = 0), !G.regex.test($.data)))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "regex",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "trim") $.data = $.data.trim();
      else if (G.kind === "includes") {
        if (!$.data.includes(G.value, G.position))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.invalid_string,
              validation: { includes: G.value, position: G.position },
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "toLowerCase") $.data = $.data.toLowerCase();
      else if (G.kind === "toUpperCase") $.data = $.data.toUpperCase();
      else if (G.kind === "startsWith") {
        if (!$.data.startsWith(G.value))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.invalid_string,
              validation: { startsWith: G.value },
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "endsWith") {
        if (!$.data.endsWith(G.value))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.invalid_string,
              validation: { endsWith: G.value },
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "datetime") {
        if (!$6(G).test($.data))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.invalid_string,
              validation: "datetime",
              message: G.message,
            }),
            Q.dirty();
      } else if (G.kind === "ip") {
        if (!J6($.data, G.version))
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              validation: "ip",
              code: w.invalid_string,
              message: G.message,
            }),
            Q.dirty();
      } else f.assertNever(G);
    return { status: Q.value, value: $.data };
  }
  _regex($, J, Q) {
    return this.refinement((Y) => $.test(Y), {
      validation: J,
      code: w.invalid_string,
      ...R.errToObj(Q),
    });
  }
  _addCheck($) {
    return new J0({ ...this._def, checks: [...this._def.checks, $] });
  }
  email($) {
    return this._addCheck({ kind: "email", ...R.errToObj($) });
  }
  url($) {
    return this._addCheck({ kind: "url", ...R.errToObj($) });
  }
  emoji($) {
    return this._addCheck({ kind: "emoji", ...R.errToObj($) });
  }
  uuid($) {
    return this._addCheck({ kind: "uuid", ...R.errToObj($) });
  }
  cuid($) {
    return this._addCheck({ kind: "cuid", ...R.errToObj($) });
  }
  cuid2($) {
    return this._addCheck({ kind: "cuid2", ...R.errToObj($) });
  }
  ulid($) {
    return this._addCheck({ kind: "ulid", ...R.errToObj($) });
  }
  ip($) {
    return this._addCheck({ kind: "ip", ...R.errToObj($) });
  }
  datetime($) {
    var J;
    if (typeof $ === "string")
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: !1,
        message: $,
      });
    return this._addCheck({
      kind: "datetime",
      precision:
        typeof ($ === null || $ === void 0 ? void 0 : $.precision) ===
        "undefined"
          ? null
          : $ === null || $ === void 0
            ? void 0
            : $.precision,
      offset:
        (J = $ === null || $ === void 0 ? void 0 : $.offset) !== null &&
        J !== void 0
          ? J
          : !1,
      ...R.errToObj($ === null || $ === void 0 ? void 0 : $.message),
    });
  }
  regex($, J) {
    return this._addCheck({ kind: "regex", regex: $, ...R.errToObj(J) });
  }
  includes($, J) {
    return this._addCheck({
      kind: "includes",
      value: $,
      position: J === null || J === void 0 ? void 0 : J.position,
      ...R.errToObj(J === null || J === void 0 ? void 0 : J.message),
    });
  }
  startsWith($, J) {
    return this._addCheck({ kind: "startsWith", value: $, ...R.errToObj(J) });
  }
  endsWith($, J) {
    return this._addCheck({ kind: "endsWith", value: $, ...R.errToObj(J) });
  }
  min($, J) {
    return this._addCheck({ kind: "min", value: $, ...R.errToObj(J) });
  }
  max($, J) {
    return this._addCheck({ kind: "max", value: $, ...R.errToObj(J) });
  }
  length($, J) {
    return this._addCheck({ kind: "length", value: $, ...R.errToObj(J) });
  }
  nonempty($) {
    return this.min(1, R.errToObj($));
  }
  trim() {
    return new J0({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new J0({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new J0({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find(($) => $.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find(($) => $.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find(($) => $.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find(($) => $.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find(($) => $.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find(($) => $.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find(($) => $.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find(($) => $.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find(($) => $.kind === "ip");
  }
  get minLength() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "min") {
        if ($ === null || J.value > $) $ = J.value;
      }
    return $;
  }
  get maxLength() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "max") {
        if ($ === null || J.value < $) $ = J.value;
      }
    return $;
  }
}
J0.create = ($) => {
  var J;
  return new J0({
    checks: [],
    typeName: K.ZodString,
    coerce:
      (J = $ === null || $ === void 0 ? void 0 : $.coerce) !== null &&
      J !== void 0
        ? J
        : !1,
    ...E($),
  });
};
class O0 extends b {
  constructor() {
    super(...arguments);
    (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
  }
  _parse($) {
    if (this._def.coerce) $.data = Number($.data);
    if (this._getType($) !== j.number) {
      const G = this._getOrReturnCtx($);
      return (
        F(G, {
          code: w.invalid_type,
          expected: j.number,
          received: G.parsedType,
        }),
        S
      );
    }
    let Q = void 0;
    const Y = new p();
    for (let G of this._def.checks)
      if (G.kind === "int") {
        if (!f.isInteger($.data))
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.invalid_type,
              expected: "integer",
              received: "float",
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "min") {
        if (G.inclusive ? $.data < G.value : $.data <= G.value)
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.too_small,
              minimum: G.value,
              type: "number",
              inclusive: G.inclusive,
              exact: !1,
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "max") {
        if (G.inclusive ? $.data > G.value : $.data >= G.value)
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.too_big,
              maximum: G.value,
              type: "number",
              inclusive: G.inclusive,
              exact: !1,
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "multipleOf") {
        if (Q6($.data, G.value) !== 0)
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.not_multiple_of,
              multipleOf: G.value,
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "finite") {
        if (!Number.isFinite($.data))
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, { code: w.not_finite, message: G.message }),
            Y.dirty();
      } else f.assertNever(G);
    return { status: Y.value, value: $.data };
  }
  gte($, J) {
    return this.setLimit("min", $, !0, R.toString(J));
  }
  gt($, J) {
    return this.setLimit("min", $, !1, R.toString(J));
  }
  lte($, J) {
    return this.setLimit("max", $, !0, R.toString(J));
  }
  lt($, J) {
    return this.setLimit("max", $, !1, R.toString(J));
  }
  setLimit($, J, Q, Y) {
    return new O0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: J, inclusive: Q, message: R.toString(Y) },
      ],
    });
  }
  _addCheck($) {
    return new O0({ ...this._def, checks: [...this._def.checks, $] });
  }
  int($) {
    return this._addCheck({ kind: "int", message: R.toString($) });
  }
  positive($) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: R.toString($),
    });
  }
  negative($) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: R.toString($),
    });
  }
  nonpositive($) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: R.toString($),
    });
  }
  nonnegative($) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: R.toString($),
    });
  }
  multipleOf($, J) {
    return this._addCheck({
      kind: "multipleOf",
      value: $,
      message: R.toString(J),
    });
  }
  finite($) {
    return this._addCheck({ kind: "finite", message: R.toString($) });
  }
  safe($) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: R.toString($),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: R.toString($),
    });
  }
  get minValue() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "min") {
        if ($ === null || J.value > $) $ = J.value;
      }
    return $;
  }
  get maxValue() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "max") {
        if ($ === null || J.value < $) $ = J.value;
      }
    return $;
  }
  get isInt() {
    return !!this._def.checks.find(
      ($) =>
        $.kind === "int" || ($.kind === "multipleOf" && f.isInteger($.value)),
    );
  }
  get isFinite() {
    let $ = null,
      J = null;
    for (let Q of this._def.checks)
      if (Q.kind === "finite" || Q.kind === "int" || Q.kind === "multipleOf")
        return !0;
      else if (Q.kind === "min") {
        if (J === null || Q.value > J) J = Q.value;
      } else if (Q.kind === "max") {
        if ($ === null || Q.value < $) $ = Q.value;
      }
    return Number.isFinite(J) && Number.isFinite($);
  }
}
O0.create = ($) => {
  return new O0({
    checks: [],
    typeName: K.ZodNumber,
    coerce: ($ === null || $ === void 0 ? void 0 : $.coerce) || !1,
    ...E($),
  });
};
class D0 extends b {
  constructor() {
    super(...arguments);
    (this.min = this.gte), (this.max = this.lte);
  }
  _parse($) {
    if (this._def.coerce) $.data = BigInt($.data);
    if (this._getType($) !== j.bigint) {
      const G = this._getOrReturnCtx($);
      return (
        F(G, {
          code: w.invalid_type,
          expected: j.bigint,
          received: G.parsedType,
        }),
        S
      );
    }
    let Q = void 0;
    const Y = new p();
    for (let G of this._def.checks)
      if (G.kind === "min") {
        if (G.inclusive ? $.data < G.value : $.data <= G.value)
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.too_small,
              type: "bigint",
              minimum: G.value,
              inclusive: G.inclusive,
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "max") {
        if (G.inclusive ? $.data > G.value : $.data >= G.value)
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.too_big,
              type: "bigint",
              maximum: G.value,
              inclusive: G.inclusive,
              message: G.message,
            }),
            Y.dirty();
      } else if (G.kind === "multipleOf") {
        if ($.data % G.value !== BigInt(0))
          (Q = this._getOrReturnCtx($, Q)),
            F(Q, {
              code: w.not_multiple_of,
              multipleOf: G.value,
              message: G.message,
            }),
            Y.dirty();
      } else f.assertNever(G);
    return { status: Y.value, value: $.data };
  }
  gte($, J) {
    return this.setLimit("min", $, !0, R.toString(J));
  }
  gt($, J) {
    return this.setLimit("min", $, !1, R.toString(J));
  }
  lte($, J) {
    return this.setLimit("max", $, !0, R.toString(J));
  }
  lt($, J) {
    return this.setLimit("max", $, !1, R.toString(J));
  }
  setLimit($, J, Q, Y) {
    return new D0({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: $, value: J, inclusive: Q, message: R.toString(Y) },
      ],
    });
  }
  _addCheck($) {
    return new D0({ ...this._def, checks: [...this._def.checks, $] });
  }
  positive($) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: R.toString($),
    });
  }
  negative($) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: R.toString($),
    });
  }
  nonpositive($) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: R.toString($),
    });
  }
  nonnegative($) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: R.toString($),
    });
  }
  multipleOf($, J) {
    return this._addCheck({
      kind: "multipleOf",
      value: $,
      message: R.toString(J),
    });
  }
  get minValue() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "min") {
        if ($ === null || J.value > $) $ = J.value;
      }
    return $;
  }
  get maxValue() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "max") {
        if ($ === null || J.value < $) $ = J.value;
      }
    return $;
  }
}
D0.create = ($) => {
  var J;
  return new D0({
    checks: [],
    typeName: K.ZodBigInt,
    coerce:
      (J = $ === null || $ === void 0 ? void 0 : $.coerce) !== null &&
      J !== void 0
        ? J
        : !1,
    ...E($),
  });
};
class y0 extends b {
  _parse($) {
    if (this._def.coerce) $.data = Boolean($.data);
    if (this._getType($) !== j.boolean) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.boolean,
          received: Q.parsedType,
        }),
        S
      );
    }
    return i($.data);
  }
}
y0.create = ($) => {
  return new y0({
    typeName: K.ZodBoolean,
    coerce: ($ === null || $ === void 0 ? void 0 : $.coerce) || !1,
    ...E($),
  });
};
class N0 extends b {
  _parse($) {
    if (this._def.coerce) $.data = new Date($.data);
    if (this._getType($) !== j.date) {
      const G = this._getOrReturnCtx($);
      return (
        F(G, {
          code: w.invalid_type,
          expected: j.date,
          received: G.parsedType,
        }),
        S
      );
    }
    if (isNaN($.data.getTime())) {
      const G = this._getOrReturnCtx($);
      return F(G, { code: w.invalid_date }), S;
    }
    const Q = new p();
    let Y = void 0;
    for (let G of this._def.checks)
      if (G.kind === "min") {
        if ($.data.getTime() < G.value)
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.too_small,
              message: G.message,
              inclusive: !0,
              exact: !1,
              minimum: G.value,
              type: "date",
            }),
            Q.dirty();
      } else if (G.kind === "max") {
        if ($.data.getTime() > G.value)
          (Y = this._getOrReturnCtx($, Y)),
            F(Y, {
              code: w.too_big,
              message: G.message,
              inclusive: !0,
              exact: !1,
              maximum: G.value,
              type: "date",
            }),
            Q.dirty();
      } else f.assertNever(G);
    return { status: Q.value, value: new Date($.data.getTime()) };
  }
  _addCheck($) {
    return new N0({ ...this._def, checks: [...this._def.checks, $] });
  }
  min($, J) {
    return this._addCheck({
      kind: "min",
      value: $.getTime(),
      message: R.toString(J),
    });
  }
  max($, J) {
    return this._addCheck({
      kind: "max",
      value: $.getTime(),
      message: R.toString(J),
    });
  }
  get minDate() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "min") {
        if ($ === null || J.value > $) $ = J.value;
      }
    return $ != null ? new Date($) : null;
  }
  get maxDate() {
    let $ = null;
    for (let J of this._def.checks)
      if (J.kind === "max") {
        if ($ === null || J.value < $) $ = J.value;
      }
    return $ != null ? new Date($) : null;
  }
}
N0.create = ($) => {
  return new N0({
    checks: [],
    coerce: ($ === null || $ === void 0 ? void 0 : $.coerce) || !1,
    typeName: K.ZodDate,
    ...E($),
  });
};
class Q1 extends b {
  _parse($) {
    if (this._getType($) !== j.symbol) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.symbol,
          received: Q.parsedType,
        }),
        S
      );
    }
    return i($.data);
  }
}
Q1.create = ($) => {
  return new Q1({ typeName: K.ZodSymbol, ...E($) });
};
class m0 extends b {
  _parse($) {
    if (this._getType($) !== j.undefined) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.undefined,
          received: Q.parsedType,
        }),
        S
      );
    }
    return i($.data);
  }
}
m0.create = ($) => {
  return new m0({ typeName: K.ZodUndefined, ...E($) });
};
class l0 extends b {
  _parse($) {
    if (this._getType($) !== j.null) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.null,
          received: Q.parsedType,
        }),
        S
      );
    }
    return i($.data);
  }
}
l0.create = ($) => {
  return new l0({ typeName: K.ZodNull, ...E($) });
};
class E0 extends b {
  constructor() {
    super(...arguments);
    this._any = !0;
  }
  _parse($) {
    return i($.data);
  }
}
E0.create = ($) => {
  return new E0({ typeName: K.ZodAny, ...E($) });
};
class F0 extends b {
  constructor() {
    super(...arguments);
    this._unknown = !0;
  }
  _parse($) {
    return i($.data);
  }
}
F0.create = ($) => {
  return new F0({ typeName: K.ZodUnknown, ...E($) });
};
class H0 extends b {
  _parse($) {
    const J = this._getOrReturnCtx($);
    return (
      F(J, { code: w.invalid_type, expected: j.never, received: J.parsedType }),
      S
    );
  }
}
H0.create = ($) => {
  return new H0({ typeName: K.ZodNever, ...E($) });
};
class Y1 extends b {
  _parse($) {
    if (this._getType($) !== j.undefined) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.void,
          received: Q.parsedType,
        }),
        S
      );
    }
    return i($.data);
  }
}
Y1.create = ($) => {
  return new Y1({ typeName: K.ZodVoid, ...E($) });
};
class Q0 extends b {
  _parse($) {
    const { ctx: J, status: Q } = this._processInputParams($),
      Y = this._def;
    if (J.parsedType !== j.array)
      return (
        F(J, {
          code: w.invalid_type,
          expected: j.array,
          received: J.parsedType,
        }),
        S
      );
    if (Y.exactLength !== null) {
      const X = J.data.length > Y.exactLength.value,
        W = J.data.length < Y.exactLength.value;
      if (X || W)
        F(J, {
          code: X ? w.too_big : w.too_small,
          minimum: W ? Y.exactLength.value : void 0,
          maximum: X ? Y.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: Y.exactLength.message,
        }),
          Q.dirty();
    }
    if (Y.minLength !== null) {
      if (J.data.length < Y.minLength.value)
        F(J, {
          code: w.too_small,
          minimum: Y.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Y.minLength.message,
        }),
          Q.dirty();
    }
    if (Y.maxLength !== null) {
      if (J.data.length > Y.maxLength.value)
        F(J, {
          code: w.too_big,
          maximum: Y.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: Y.maxLength.message,
        }),
          Q.dirty();
    }
    if (J.common.async)
      return Promise.all(
        [...J.data].map((X, W) => {
          return Y.type._parseAsync(new Y0(J, X, J.path, W));
        }),
      ).then((X) => {
        return p.mergeArray(Q, X);
      });
    const G = [...J.data].map((X, W) => {
      return Y.type._parseSync(new Y0(J, X, J.path, W));
    });
    return p.mergeArray(Q, G);
  }
  get element() {
    return this._def.type;
  }
  min($, J) {
    return new Q0({
      ...this._def,
      minLength: { value: $, message: R.toString(J) },
    });
  }
  max($, J) {
    return new Q0({
      ...this._def,
      maxLength: { value: $, message: R.toString(J) },
    });
  }
  length($, J) {
    return new Q0({
      ...this._def,
      exactLength: { value: $, message: R.toString(J) },
    });
  }
  nonempty($) {
    return this.min(1, $);
  }
}
Q0.create = ($, J) => {
  return new Q0({
    type: $,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: K.ZodArray,
    ...E(J),
  });
};
class g extends b {
  constructor() {
    super(...arguments);
    (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const $ = this._def.shape(),
      J = f.objectKeys($);
    return (this._cached = { shape: $, keys: J });
  }
  _parse($) {
    if (this._getType($) !== j.object) {
      const q = this._getOrReturnCtx($);
      return (
        F(q, {
          code: w.invalid_type,
          expected: j.object,
          received: q.parsedType,
        }),
        S
      );
    }
    const { status: Q, ctx: Y } = this._processInputParams($),
      { shape: G, keys: X } = this._getCached(),
      W = [];
    if (
      !(this._def.catchall instanceof H0 && this._def.unknownKeys === "strip")
    ) {
      for (let q in Y.data) if (!X.includes(q)) W.push(q);
    }
    const H = [];
    for (let q of X) {
      const z = G[q],
        B = Y.data[q];
      H.push({
        key: { status: "valid", value: q },
        value: z._parse(new Y0(Y, B, Y.path, q)),
        alwaysSet: q in Y.data,
      });
    }
    if (this._def.catchall instanceof H0) {
      const q = this._def.unknownKeys;
      if (q === "passthrough")
        for (let z of W)
          H.push({
            key: { status: "valid", value: z },
            value: { status: "valid", value: Y.data[z] },
          });
      else if (q === "strict") {
        if (W.length > 0)
          F(Y, { code: w.unrecognized_keys, keys: W }), Q.dirty();
      } else if (q === "strip");
      else
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const q = this._def.catchall;
      for (let z of W) {
        const B = Y.data[z];
        H.push({
          key: { status: "valid", value: z },
          value: q._parse(new Y0(Y, B, Y.path, z)),
          alwaysSet: z in Y.data,
        });
      }
    }
    if (Y.common.async)
      return Promise.resolve()
        .then(async () => {
          const q = [];
          for (let z of H) {
            const B = await z.key;
            q.push({ key: B, value: await z.value, alwaysSet: z.alwaysSet });
          }
          return q;
        })
        .then((q) => {
          return p.mergeObjectSync(Q, q);
        });
    else return p.mergeObjectSync(Q, H);
  }
  get shape() {
    return this._def.shape();
  }
  strict($) {
    return (
      R.errToObj,
      new g({
        ...this._def,
        unknownKeys: "strict",
        ...($ !== void 0
          ? {
              errorMap: (J, Q) => {
                var Y, G, X, W;
                const H =
                  (X =
                    (G = (Y = this._def).errorMap) === null || G === void 0
                      ? void 0
                      : G.call(Y, J, Q).message) !== null && X !== void 0
                    ? X
                    : Q.defaultError;
                if (J.code === "unrecognized_keys")
                  return {
                    message:
                      (W = R.errToObj($).message) !== null && W !== void 0
                        ? W
                        : H,
                  };
                return { message: H };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new g({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new g({ ...this._def, unknownKeys: "passthrough" });
  }
  extend($) {
    return new g({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...$ }),
    });
  }
  merge($) {
    return new g({
      unknownKeys: $._def.unknownKeys,
      catchall: $._def.catchall,
      shape: () => ({ ...this._def.shape(), ...$._def.shape() }),
      typeName: K.ZodObject,
    });
  }
  setKey($, J) {
    return this.augment({ [$]: J });
  }
  catchall($) {
    return new g({ ...this._def, catchall: $ });
  }
  pick($) {
    const J = {};
    return (
      f.objectKeys($).forEach((Q) => {
        if ($[Q] && this.shape[Q]) J[Q] = this.shape[Q];
      }),
      new g({ ...this._def, shape: () => J })
    );
  }
  omit($) {
    const J = {};
    return (
      f.objectKeys(this.shape).forEach((Q) => {
        if (!$[Q]) J[Q] = this.shape[Q];
      }),
      new g({ ...this._def, shape: () => J })
    );
  }
  deepPartial() {
    return h0(this);
  }
  partial($) {
    const J = {};
    return (
      f.objectKeys(this.shape).forEach((Q) => {
        const Y = this.shape[Q];
        if ($ && !$[Q]) J[Q] = Y;
        else J[Q] = Y.optional();
      }),
      new g({ ...this._def, shape: () => J })
    );
  }
  required($) {
    const J = {};
    return (
      f.objectKeys(this.shape).forEach((Q) => {
        if ($ && !$[Q]) J[Q] = this.shape[Q];
        else {
          let G = this.shape[Q];
          while (G instanceof W0) G = G._def.innerType;
          J[Q] = G;
        }
      }),
      new g({ ...this._def, shape: () => J })
    );
  }
  keyof() {
    return H4(f.objectKeys(this.shape));
  }
}
g.create = ($, J) => {
  return new g({
    shape: () => $,
    unknownKeys: "strip",
    catchall: H0.create(),
    typeName: K.ZodObject,
    ...E(J),
  });
};
g.strictCreate = ($, J) => {
  return new g({
    shape: () => $,
    unknownKeys: "strict",
    catchall: H0.create(),
    typeName: K.ZodObject,
    ...E(J),
  });
};
g.lazycreate = ($, J) => {
  return new g({
    shape: $,
    unknownKeys: "strip",
    catchall: H0.create(),
    typeName: K.ZodObject,
    ...E(J),
  });
};
class c0 extends b {
  _parse($) {
    const { ctx: J } = this._processInputParams($),
      Q = this._def.options;
    function Y(G) {
      for (let W of G) if (W.result.status === "valid") return W.result;
      for (let W of G)
        if (W.result.status === "dirty")
          return J.common.issues.push(...W.ctx.common.issues), W.result;
      const X = G.map((W) => new s(W.ctx.common.issues));
      return F(J, { code: w.invalid_union, unionErrors: X }), S;
    }
    if (J.common.async)
      return Promise.all(
        Q.map(async (G) => {
          const X = { ...J, common: { ...J.common, issues: [] }, parent: null };
          return {
            result: await G._parseAsync({
              data: J.data,
              path: J.path,
              parent: X,
            }),
            ctx: X,
          };
        }),
      ).then(Y);
    else {
      let G = void 0;
      const X = [];
      for (let H of Q) {
        const q = { ...J, common: { ...J.common, issues: [] }, parent: null },
          z = H._parseSync({ data: J.data, path: J.path, parent: q });
        if (z.status === "valid") return z;
        else if (z.status === "dirty" && !G) G = { result: z, ctx: q };
        if (q.common.issues.length) X.push(q.common.issues);
      }
      if (G) return J.common.issues.push(...G.ctx.common.issues), G.result;
      const W = X.map((H) => new s(H));
      return F(J, { code: w.invalid_union, unionErrors: W }), S;
    }
  }
  get options() {
    return this._def.options;
  }
}
c0.create = ($, J) => {
  return new c0({ options: $, typeName: K.ZodUnion, ...E(J) });
};
var E1 = ($) => {
  if ($ instanceof p0) return E1($.schema);
  else if ($ instanceof a) return E1($.innerType());
  else if ($ instanceof d0) return [$.value];
  else if ($ instanceof R0) return $.options;
  else if ($ instanceof i0) return Object.keys($.enum);
  else if ($ instanceof n0) return E1($._def.innerType);
  else if ($ instanceof m0) return [void 0];
  else if ($ instanceof l0) return [null];
  else return null;
};
class f1 extends b {
  _parse($) {
    const { ctx: J } = this._processInputParams($);
    if (J.parsedType !== j.object)
      return (
        F(J, {
          code: w.invalid_type,
          expected: j.object,
          received: J.parsedType,
        }),
        S
      );
    const Q = this.discriminator,
      Y = J.data[Q],
      G = this.optionsMap.get(Y);
    if (!G)
      return (
        F(J, {
          code: w.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [Q],
        }),
        S
      );
    if (J.common.async)
      return G._parseAsync({ data: J.data, path: J.path, parent: J });
    else return G._parseSync({ data: J.data, path: J.path, parent: J });
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create($, J, Q) {
    const Y = new Map();
    for (let G of J) {
      const X = E1(G.shape[$]);
      if (!X)
        throw new Error(
          `A discriminator value for key \`${$}\` could not be extracted from all schema options`,
        );
      for (let W of X) {
        if (Y.has(W))
          throw new Error(
            `Discriminator property ${String($)} has duplicate value ${String(
              W,
            )}`,
          );
        Y.set(W, G);
      }
    }
    return new f1({
      typeName: K.ZodDiscriminatedUnion,
      discriminator: $,
      options: J,
      optionsMap: Y,
      ...E(Q),
    });
  }
}
class u0 extends b {
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($),
      Y = (G, X) => {
        if (z5(G) || z5(X)) return S;
        const W = M5(G.value, X.value);
        if (!W.valid) return F(Q, { code: w.invalid_intersection_types }), S;
        if (B5(G) || B5(X)) J.dirty();
        return { status: J.value, value: W.data };
      };
    if (Q.common.async)
      return Promise.all([
        this._def.left._parseAsync({ data: Q.data, path: Q.path, parent: Q }),
        this._def.right._parseAsync({ data: Q.data, path: Q.path, parent: Q }),
      ]).then(([G, X]) => Y(G, X));
    else
      return Y(
        this._def.left._parseSync({ data: Q.data, path: Q.path, parent: Q }),
        this._def.right._parseSync({ data: Q.data, path: Q.path, parent: Q }),
      );
  }
}
u0.create = ($, J, Q) => {
  return new u0({ left: $, right: J, typeName: K.ZodIntersection, ...E(Q) });
};
class q0 extends b {
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($);
    if (Q.parsedType !== j.array)
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.array,
          received: Q.parsedType,
        }),
        S
      );
    if (Q.data.length < this._def.items.length)
      return (
        F(Q, {
          code: w.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        S
      );
    if (!this._def.rest && Q.data.length > this._def.items.length)
      F(Q, {
        code: w.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
        J.dirty();
    const G = [...Q.data]
      .map((X, W) => {
        const H = this._def.items[W] || this._def.rest;
        if (!H) return null;
        return H._parse(new Y0(Q, X, Q.path, W));
      })
      .filter((X) => !!X);
    if (Q.common.async)
      return Promise.all(G).then((X) => {
        return p.mergeArray(J, X);
      });
    else return p.mergeArray(J, G);
  }
  get items() {
    return this._def.items;
  }
  rest($) {
    return new q0({ ...this._def, rest: $ });
  }
}
q0.create = ($, J) => {
  if (!Array.isArray($))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new q0({ items: $, typeName: K.ZodTuple, rest: null, ...E(J) });
};
class G1 extends b {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($);
    if (Q.parsedType !== j.object)
      return (
        F(Q, {
          code: w.invalid_type,
          expected: j.object,
          received: Q.parsedType,
        }),
        S
      );
    const Y = [],
      G = this._def.keyType,
      X = this._def.valueType;
    for (let W in Q.data)
      Y.push({
        key: G._parse(new Y0(Q, W, Q.path, W)),
        value: X._parse(new Y0(Q, Q.data[W], Q.path, W)),
      });
    if (Q.common.async) return p.mergeObjectAsync(J, Y);
    else return p.mergeObjectSync(J, Y);
  }
  get element() {
    return this._def.valueType;
  }
  static create($, J, Q) {
    if (J instanceof b)
      return new G1({
        keyType: $,
        valueType: J,
        typeName: K.ZodRecord,
        ...E(Q),
      });
    return new G1({
      keyType: J0.create(),
      valueType: $,
      typeName: K.ZodRecord,
      ...E(J),
    });
  }
}
class X1 extends b {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($);
    if (Q.parsedType !== j.map)
      return (
        F(Q, { code: w.invalid_type, expected: j.map, received: Q.parsedType }),
        S
      );
    const Y = this._def.keyType,
      G = this._def.valueType,
      X = [...Q.data.entries()].map(([W, H], q) => {
        return {
          key: Y._parse(new Y0(Q, W, Q.path, [q, "key"])),
          value: G._parse(new Y0(Q, H, Q.path, [q, "value"])),
        };
      });
    if (Q.common.async) {
      const W = new Map();
      return Promise.resolve().then(async () => {
        for (let H of X) {
          const q = await H.key,
            z = await H.value;
          if (q.status === "aborted" || z.status === "aborted") return S;
          if (q.status === "dirty" || z.status === "dirty") J.dirty();
          W.set(q.value, z.value);
        }
        return { status: J.value, value: W };
      });
    } else {
      const W = new Map();
      for (let H of X) {
        const { key: q, value: z } = H;
        if (q.status === "aborted" || z.status === "aborted") return S;
        if (q.status === "dirty" || z.status === "dirty") J.dirty();
        W.set(q.value, z.value);
      }
      return { status: J.value, value: W };
    }
  }
}
X1.create = ($, J, Q) => {
  return new X1({ valueType: J, keyType: $, typeName: K.ZodMap, ...E(Q) });
};
class b0 extends b {
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($);
    if (Q.parsedType !== j.set)
      return (
        F(Q, { code: w.invalid_type, expected: j.set, received: Q.parsedType }),
        S
      );
    const Y = this._def;
    if (Y.minSize !== null) {
      if (Q.data.size < Y.minSize.value)
        F(Q, {
          code: w.too_small,
          minimum: Y.minSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Y.minSize.message,
        }),
          J.dirty();
    }
    if (Y.maxSize !== null) {
      if (Q.data.size > Y.maxSize.value)
        F(Q, {
          code: w.too_big,
          maximum: Y.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: Y.maxSize.message,
        }),
          J.dirty();
    }
    const G = this._def.valueType;
    function X(H) {
      const q = new Set();
      for (let z of H) {
        if (z.status === "aborted") return S;
        if (z.status === "dirty") J.dirty();
        q.add(z.value);
      }
      return { status: J.value, value: q };
    }
    const W = [...Q.data.values()].map((H, q) =>
      G._parse(new Y0(Q, H, Q.path, q)),
    );
    if (Q.common.async) return Promise.all(W).then((H) => X(H));
    else return X(W);
  }
  min($, J) {
    return new b0({
      ...this._def,
      minSize: { value: $, message: R.toString(J) },
    });
  }
  max($, J) {
    return new b0({
      ...this._def,
      maxSize: { value: $, message: R.toString(J) },
    });
  }
  size($, J) {
    return this.min($, J).max($, J);
  }
  nonempty($) {
    return this.min(1, $);
  }
}
b0.create = ($, J) => {
  return new b0({
    valueType: $,
    minSize: null,
    maxSize: null,
    typeName: K.ZodSet,
    ...E(J),
  });
};
class Z0 extends b {
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse($) {
    const { ctx: J } = this._processInputParams($);
    if (J.parsedType !== j.function)
      return (
        F(J, {
          code: w.invalid_type,
          expected: j.function,
          received: J.parsedType,
        }),
        S
      );
    function Q(W, H) {
      return v1({
        data: W,
        path: J.path,
        errorMaps: [
          J.common.contextualErrorMap,
          J.schemaErrorMap,
          b1(),
          $1,
        ].filter((q) => !!q),
        issueData: { code: w.invalid_arguments, argumentsError: H },
      });
    }
    function Y(W, H) {
      return v1({
        data: W,
        path: J.path,
        errorMaps: [
          J.common.contextualErrorMap,
          J.schemaErrorMap,
          b1(),
          $1,
        ].filter((q) => !!q),
        issueData: { code: w.invalid_return_type, returnTypeError: H },
      });
    }
    const G = { errorMap: J.common.contextualErrorMap },
      X = J.data;
    if (this._def.returns instanceof v0) {
      const W = this;
      return i(async function (...H) {
        const q = new s([]),
          z = await W._def.args.parseAsync(H, G).catch((V) => {
            throw (q.addIssue(Q(H, V)), q);
          }),
          B = await Reflect.apply(X, this, z);
        return await W._def.returns._def.type.parseAsync(B, G).catch((V) => {
          throw (q.addIssue(Y(B, V)), q);
        });
      });
    } else {
      const W = this;
      return i(function (...H) {
        const q = W._def.args.safeParse(H, G);
        if (!q.success) throw new s([Q(H, q.error)]);
        const z = Reflect.apply(X, this, q.data),
          B = W._def.returns.safeParse(z, G);
        if (!B.success) throw new s([Y(z, B.error)]);
        return B.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...$) {
    return new Z0({ ...this._def, args: q0.create($).rest(F0.create()) });
  }
  returns($) {
    return new Z0({ ...this._def, returns: $ });
  }
  implement($) {
    return this.parse($);
  }
  strictImplement($) {
    return this.parse($);
  }
  static create($, J, Q) {
    return new Z0({
      args: $ ? $ : q0.create([]).rest(F0.create()),
      returns: J || F0.create(),
      typeName: K.ZodFunction,
      ...E(Q),
    });
  }
}
class p0 extends b {
  get schema() {
    return this._def.getter();
  }
  _parse($) {
    const { ctx: J } = this._processInputParams($);
    return this._def.getter()._parse({ data: J.data, path: J.path, parent: J });
  }
}
p0.create = ($, J) => {
  return new p0({ getter: $, typeName: K.ZodLazy, ...E(J) });
};
class d0 extends b {
  _parse($) {
    if ($.data !== this._def.value) {
      const J = this._getOrReturnCtx($);
      return (
        F(J, {
          received: J.data,
          code: w.invalid_literal,
          expected: this._def.value,
        }),
        S
      );
    }
    return { status: "valid", value: $.data };
  }
  get value() {
    return this._def.value;
  }
}
d0.create = ($, J) => {
  return new d0({ value: $, typeName: K.ZodLiteral, ...E(J) });
};
class R0 extends b {
  _parse($) {
    if (typeof $.data !== "string") {
      const J = this._getOrReturnCtx($),
        Q = this._def.values;
      return (
        F(J, {
          expected: f.joinValues(Q),
          received: J.parsedType,
          code: w.invalid_type,
        }),
        S
      );
    }
    if (this._def.values.indexOf($.data) === -1) {
      const J = this._getOrReturnCtx($),
        Q = this._def.values;
      return (
        F(J, { received: J.data, code: w.invalid_enum_value, options: Q }), S
      );
    }
    return i($.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const $ = {};
    for (let J of this._def.values) $[J] = J;
    return $;
  }
  get Values() {
    const $ = {};
    for (let J of this._def.values) $[J] = J;
    return $;
  }
  get Enum() {
    const $ = {};
    for (let J of this._def.values) $[J] = J;
    return $;
  }
  extract($) {
    return R0.create($);
  }
  exclude($) {
    return R0.create(this.options.filter((J) => !$.includes(J)));
  }
}
R0.create = H4;
class i0 extends b {
  _parse($) {
    const J = f.getValidEnumValues(this._def.values),
      Q = this._getOrReturnCtx($);
    if (Q.parsedType !== j.string && Q.parsedType !== j.number) {
      const Y = f.objectValues(J);
      return (
        F(Q, {
          expected: f.joinValues(Y),
          received: Q.parsedType,
          code: w.invalid_type,
        }),
        S
      );
    }
    if (J.indexOf($.data) === -1) {
      const Y = f.objectValues(J);
      return (
        F(Q, { received: Q.data, code: w.invalid_enum_value, options: Y }), S
      );
    }
    return i($.data);
  }
  get enum() {
    return this._def.values;
  }
}
i0.create = ($, J) => {
  return new i0({ values: $, typeName: K.ZodNativeEnum, ...E(J) });
};
class v0 extends b {
  unwrap() {
    return this._def.type;
  }
  _parse($) {
    const { ctx: J } = this._processInputParams($);
    if (J.parsedType !== j.promise && J.common.async === !1)
      return (
        F(J, {
          code: w.invalid_type,
          expected: j.promise,
          received: J.parsedType,
        }),
        S
      );
    const Q = J.parsedType === j.promise ? J.data : Promise.resolve(J.data);
    return i(
      Q.then((Y) => {
        return this._def.type.parseAsync(Y, {
          path: J.path,
          errorMap: J.common.contextualErrorMap,
        });
      }),
    );
  }
}
v0.create = ($, J) => {
  return new v0({ type: $, typeName: K.ZodPromise, ...E(J) });
};
class a extends b {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === K.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($),
      Y = this._def.effect || null,
      G = {
        addIssue: (X) => {
          if ((F(Q, X), X.fatal)) J.abort();
          else J.dirty();
        },
        get path() {
          return Q.path;
        },
      };
    if (((G.addIssue = G.addIssue.bind(G)), Y.type === "preprocess")) {
      const X = Y.transform(Q.data, G);
      if (Q.common.issues.length) return { status: "dirty", value: Q.data };
      if (Q.common.async)
        return Promise.resolve(X).then((W) => {
          return this._def.schema._parseAsync({
            data: W,
            path: Q.path,
            parent: Q,
          });
        });
      else
        return this._def.schema._parseSync({
          data: X,
          path: Q.path,
          parent: Q,
        });
    }
    if (Y.type === "refinement") {
      const X = (W) => {
        const H = Y.refinement(W, G);
        if (Q.common.async) return Promise.resolve(H);
        if (H instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return W;
      };
      if (Q.common.async === !1) {
        const W = this._def.schema._parseSync({
          data: Q.data,
          path: Q.path,
          parent: Q,
        });
        if (W.status === "aborted") return S;
        if (W.status === "dirty") J.dirty();
        return X(W.value), { status: J.value, value: W.value };
      } else
        return this._def.schema
          ._parseAsync({ data: Q.data, path: Q.path, parent: Q })
          .then((W) => {
            if (W.status === "aborted") return S;
            if (W.status === "dirty") J.dirty();
            return X(W.value).then(() => {
              return { status: J.value, value: W.value };
            });
          });
    }
    if (Y.type === "transform")
      if (Q.common.async === !1) {
        const X = this._def.schema._parseSync({
          data: Q.data,
          path: Q.path,
          parent: Q,
        });
        if (!J1(X)) return X;
        const W = Y.transform(X.value, G);
        if (W instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.",
          );
        return { status: J.value, value: W };
      } else
        return this._def.schema
          ._parseAsync({ data: Q.data, path: Q.path, parent: Q })
          .then((X) => {
            if (!J1(X)) return X;
            return Promise.resolve(Y.transform(X.value, G)).then((W) => ({
              status: J.value,
              value: W,
            }));
          });
    f.assertNever(Y);
  }
}
a.create = ($, J, Q) => {
  return new a({ schema: $, typeName: K.ZodEffects, effect: J, ...E(Q) });
};
a.createWithPreprocess = ($, J, Q) => {
  return new a({
    schema: J,
    effect: { type: "preprocess", transform: $ },
    typeName: K.ZodEffects,
    ...E(Q),
  });
};
class W0 extends b {
  _parse($) {
    if (this._getType($) === j.undefined) return i(void 0);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
W0.create = ($, J) => {
  return new W0({ innerType: $, typeName: K.ZodOptional, ...E(J) });
};
class L0 extends b {
  _parse($) {
    if (this._getType($) === j.null) return i(null);
    return this._def.innerType._parse($);
  }
  unwrap() {
    return this._def.innerType;
  }
}
L0.create = ($, J) => {
  return new L0({ innerType: $, typeName: K.ZodNullable, ...E(J) });
};
class n0 extends b {
  _parse($) {
    const { ctx: J } = this._processInputParams($);
    let Q = J.data;
    if (J.parsedType === j.undefined) Q = this._def.defaultValue();
    return this._def.innerType._parse({ data: Q, path: J.path, parent: J });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
n0.create = ($, J) => {
  return new n0({
    innerType: $,
    typeName: K.ZodDefault,
    defaultValue: typeof J.default === "function" ? J.default : () => J.default,
    ...E(J),
  });
};
class W1 extends b {
  _parse($) {
    const { ctx: J } = this._processInputParams($),
      Q = { ...J, common: { ...J.common, issues: [] } },
      Y = this._def.innerType._parse({
        data: Q.data,
        path: Q.path,
        parent: { ...Q },
      });
    if (C1(Y))
      return Y.then((G) => {
        return {
          status: "valid",
          value:
            G.status === "valid"
              ? G.value
              : this._def.catchValue({
                  get error() {
                    return new s(Q.common.issues);
                  },
                  input: Q.data,
                }),
        };
      });
    else
      return {
        status: "valid",
        value:
          Y.status === "valid"
            ? Y.value
            : this._def.catchValue({
                get error() {
                  return new s(Q.common.issues);
                },
                input: Q.data,
              }),
      };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
W1.create = ($, J) => {
  return new W1({
    innerType: $,
    typeName: K.ZodCatch,
    catchValue: typeof J.catch === "function" ? J.catch : () => J.catch,
    ...E(J),
  });
};
class H1 extends b {
  _parse($) {
    if (this._getType($) !== j.nan) {
      const Q = this._getOrReturnCtx($);
      return (
        F(Q, { code: w.invalid_type, expected: j.nan, received: Q.parsedType }),
        S
      );
    }
    return { status: "valid", value: $.data };
  }
}
H1.create = ($) => {
  return new H1({ typeName: K.ZodNaN, ...E($) });
};
var Y6 = Symbol("zod_brand");
class V5 extends b {
  _parse($) {
    const { ctx: J } = this._processInputParams($),
      Q = J.data;
    return this._def.type._parse({ data: Q, path: J.path, parent: J });
  }
  unwrap() {
    return this._def.type;
  }
}
class z1 extends b {
  _parse($) {
    const { status: J, ctx: Q } = this._processInputParams($);
    if (Q.common.async)
      return (async () => {
        const G = await this._def.in._parseAsync({
          data: Q.data,
          path: Q.path,
          parent: Q,
        });
        if (G.status === "aborted") return S;
        if (G.status === "dirty") return J.dirty(), W4(G.value);
        else
          return this._def.out._parseAsync({
            data: G.value,
            path: Q.path,
            parent: Q,
          });
      })();
    else {
      const Y = this._def.in._parseSync({
        data: Q.data,
        path: Q.path,
        parent: Q,
      });
      if (Y.status === "aborted") return S;
      if (Y.status === "dirty")
        return J.dirty(), { status: "dirty", value: Y.value };
      else
        return this._def.out._parseSync({
          data: Y.value,
          path: Q.path,
          parent: Q,
        });
    }
  }
  static create($, J) {
    return new z1({ in: $, out: J, typeName: K.ZodPipeline });
  }
}
class q1 extends b {
  _parse($) {
    const J = this._def.innerType._parse($);
    if (J1(J)) J.value = Object.freeze(J.value);
    return J;
  }
}
q1.create = ($, J) => {
  return new q1({ innerType: $, typeName: K.ZodReadonly, ...E(J) });
};
var q4 = ($, J = {}, Q) => {
    if ($)
      return E0.create().superRefine((Y, G) => {
        var X, W;
        if (!$(Y)) {
          const H =
              typeof J === "function"
                ? J(Y)
                : typeof J === "string"
                  ? { message: J }
                  : J,
            q =
              (W = (X = H.fatal) !== null && X !== void 0 ? X : Q) !== null &&
              W !== void 0
                ? W
                : !0,
            z = typeof H === "string" ? { message: H } : H;
          G.addIssue({ code: "custom", ...z, fatal: q });
        }
      });
    return E0.create();
  },
  G6 = { object: g.lazycreate },
  K;
(function ($) {
  ($.ZodString = "ZodString"),
    ($.ZodNumber = "ZodNumber"),
    ($.ZodNaN = "ZodNaN"),
    ($.ZodBigInt = "ZodBigInt"),
    ($.ZodBoolean = "ZodBoolean"),
    ($.ZodDate = "ZodDate"),
    ($.ZodSymbol = "ZodSymbol"),
    ($.ZodUndefined = "ZodUndefined"),
    ($.ZodNull = "ZodNull"),
    ($.ZodAny = "ZodAny"),
    ($.ZodUnknown = "ZodUnknown"),
    ($.ZodNever = "ZodNever"),
    ($.ZodVoid = "ZodVoid"),
    ($.ZodArray = "ZodArray"),
    ($.ZodObject = "ZodObject"),
    ($.ZodUnion = "ZodUnion"),
    ($.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    ($.ZodIntersection = "ZodIntersection"),
    ($.ZodTuple = "ZodTuple"),
    ($.ZodRecord = "ZodRecord"),
    ($.ZodMap = "ZodMap"),
    ($.ZodSet = "ZodSet"),
    ($.ZodFunction = "ZodFunction"),
    ($.ZodLazy = "ZodLazy"),
    ($.ZodLiteral = "ZodLiteral"),
    ($.ZodEnum = "ZodEnum"),
    ($.ZodEffects = "ZodEffects"),
    ($.ZodNativeEnum = "ZodNativeEnum"),
    ($.ZodOptional = "ZodOptional"),
    ($.ZodNullable = "ZodNullable"),
    ($.ZodDefault = "ZodDefault"),
    ($.ZodCatch = "ZodCatch"),
    ($.ZodPromise = "ZodPromise"),
    ($.ZodBranded = "ZodBranded"),
    ($.ZodPipeline = "ZodPipeline"),
    ($.ZodReadonly = "ZodReadonly");
})(K || (K = {}));
var X6 = ($, J = { message: `Input not instance of ${$.name}` }) =>
    q4((Q) => Q instanceof $, J),
  z4 = J0.create,
  B4 = O0.create,
  W6 = H1.create,
  H6 = D0.create,
  M4 = y0.create,
  q6 = N0.create,
  z6 = Q1.create,
  B6 = m0.create,
  M6 = l0.create,
  V6 = E0.create,
  U6 = F0.create,
  w6 = H0.create,
  _6 = Y1.create,
  j6 = Q0.create,
  F6 = g.create,
  O6 = g.strictCreate,
  D6 = c0.create,
  R6 = f1.create,
  L6 = u0.create,
  K6 = q0.create,
  A6 = G1.create,
  S6 = X1.create,
  N6 = b0.create,
  E6 = Z0.create,
  b6 = p0.create,
  v6 = d0.create,
  C6 = R0.create,
  f6 = i0.create,
  I6 = v0.create,
  G4 = a.create,
  P6 = W0.create,
  k6 = L0.create,
  T6 = a.createWithPreprocess,
  g6 = z1.create,
  x6 = () => z4().optional(),
  h6 = () => B4().optional(),
  Z6 = () => M4().optional(),
  y6 = {
    string: ($) => J0.create({ ...$, coerce: !0 }),
    number: ($) => O0.create({ ...$, coerce: !0 }),
    boolean: ($) => y0.create({ ...$, coerce: !0 }),
    bigint: ($) => D0.create({ ...$, coerce: !0 }),
    date: ($) => N0.create({ ...$, coerce: !0 }),
  },
  m6 = S,
  y = Object.freeze({
    __proto__: null,
    defaultErrorMap: $1,
    setErrorMap: p2,
    getErrorMap: b1,
    makeIssue: v1,
    EMPTY_PATH: d2,
    addIssueToContext: F,
    ParseStatus: p,
    INVALID: S,
    DIRTY: W4,
    OK: i,
    isAborted: z5,
    isDirty: B5,
    isValid: J1,
    isAsync: C1,
    get util() {
      return f;
    },
    get objectUtil() {
      return q5;
    },
    ZodParsedType: j,
    getParsedType: j0,
    ZodType: b,
    ZodString: J0,
    ZodNumber: O0,
    ZodBigInt: D0,
    ZodBoolean: y0,
    ZodDate: N0,
    ZodSymbol: Q1,
    ZodUndefined: m0,
    ZodNull: l0,
    ZodAny: E0,
    ZodUnknown: F0,
    ZodNever: H0,
    ZodVoid: Y1,
    ZodArray: Q0,
    ZodObject: g,
    ZodUnion: c0,
    ZodDiscriminatedUnion: f1,
    ZodIntersection: u0,
    ZodTuple: q0,
    ZodRecord: G1,
    ZodMap: X1,
    ZodSet: b0,
    ZodFunction: Z0,
    ZodLazy: p0,
    ZodLiteral: d0,
    ZodEnum: R0,
    ZodNativeEnum: i0,
    ZodPromise: v0,
    ZodEffects: a,
    ZodTransformer: a,
    ZodOptional: W0,
    ZodNullable: L0,
    ZodDefault: n0,
    ZodCatch: W1,
    ZodNaN: H1,
    BRAND: Y6,
    ZodBranded: V5,
    ZodPipeline: z1,
    ZodReadonly: q1,
    custom: q4,
    Schema: b,
    ZodSchema: b,
    late: G6,
    get ZodFirstPartyTypeKind() {
      return K;
    },
    coerce: y6,
    any: V6,
    array: j6,
    bigint: H6,
    boolean: M4,
    date: q6,
    discriminatedUnion: R6,
    effect: G4,
    enum: C6,
    function: E6,
    instanceof: X6,
    intersection: L6,
    lazy: b6,
    literal: v6,
    map: S6,
    nan: W6,
    nativeEnum: f6,
    never: w6,
    null: M6,
    nullable: k6,
    number: B4,
    object: F6,
    oboolean: Z6,
    onumber: h6,
    optional: P6,
    ostring: x6,
    pipeline: g6,
    preprocess: T6,
    promise: I6,
    record: A6,
    set: N6,
    strictObject: O6,
    string: z4,
    symbol: z6,
    transformer: G4,
    tuple: K6,
    undefined: B6,
    union: D6,
    unknown: U6,
    void: _6,
    NEVER: m6,
    ZodIssueCode: w,
    quotelessJson: u2,
    ZodError: s,
  });
var V4 = y.object({
  id: y.number().optional(),
  teacherId: y.number(),
  name: y.string(),
  type: y.string(),
  price: y.number(),
  category: y.string(),
  duration: y.number(),
  frequency: y.string(),
  description: y.string(),
});
var o0 = {
  async create($) {
    const J = await $.req.json(),
      Q = V4.safeParse(J);
    if (Q.success) {
      const Y = o.service.create({ data: Q.data });
      return $.json(Y);
    } else return $.text(Q.error.message, 500);
  },
  async getUnique($) {
    const J = $.req.query("id"),
      Q = o.service.findUnique({ where: { id: Number(J) } });
    if (Q) return $.json(Q);
    else return $.text("Servicio no encontrado", 404);
  },
  async getAll($) {
    const J = o.service.findMany({
      where: JSON.parse($.req.query("where") || "{}"),
    });
    return $.json(J);
  },
  async update($) {
    const { id: J } = $.req.param(),
      Q = o.service.update({
        where: { id: Number(J) },
        data: await $.req.json(),
      });
    return $.json(Q);
  },
  async delete($) {
    const { id: J } = $.req.param();
    return (
      await o.service.delete({ where: { id: Number(J) } }),
      $.text("Servicio eliminado", 200)
    );
  },
};
var U4 = y.object({
  name: y
    .string()
    .trim()
    .min(3, "El nombre debe tener minimo 3 letras")
    .max(30, "El nombre debe tener minimo 3 letras"),
  lastname: y.string().trim(),
  phone: y.string().trim().min(10, "El telefono debe tener minimo 10 numeros"),
  email: y.string().trim().email("El email no es valido"),
  password: y
    .string()
    .trim()
    .min(6, "La contrase\xF1a debe tener minimo 6 caracteres")
    .max(12, "La contrase\xF1a debe tener maximo 12 caracteres"),
});
var I1 = {
  async login($) {
    const { email: J, password: Q } = $;
    try {
      const { hash: Y, ...G } = await o.user.findUniqueOrThrow({
        where: { email: J },
      });
      if (await Bun.password.verify(Q, Y)) return G;
      else throw new S0(500, { message: "Contrase\xF1a invalida" });
    } catch (Y) {
      throw new S0(404, { message: "Usuario no encontrado" });
    }
  },
  async register($) {
    const J = await Bun.password.hash($.password);
    return await o.user.create({ data: { ...$, hash: J } });
  },
};
var r0 = {
  async create($) {
    const J = await $.req.json(),
      Q = U4.safeParse(J);
    if (Q.success) {
      const Y = await I1.register(Q.data);
      return $.json(Y);
    } else return $.text(Q.error.message, 500);
  },
  getUnique($) {
    const { email: J, password: Q } = $.req.param(),
      Y = I1.login({ email: J, password: Q });
    return $.json(Y);
  },
  getAllByServiceId($) {
    const J = $.req.query("serviceId"),
      Q = o.contract.findMany({
        where: { serviceId: Number(J) },
        select: { user: !0 },
      });
    return $.json(Q);
  },
  async update($) {
    try {
      const { id: J } = $.req.param(),
        Q = o.user.update({
          where: { id: Number(J) },
          data: await $.req.json(),
        });
      return $.json(Q);
    } catch (J) {
      throw new S0(500, { message: "Error al actualizar" });
    }
  },
  async delete($) {
    const { id: J, email: Q, password: Y } = $.req.param();
    return (
      await I1.login({ email: Q, password: Y }),
      await o.user.delete({ where: { id: Number(J) } }),
      $.text("Usuario eliminado", 200)
    );
  },
};
var r = new i1();
r.use("*", P5());
r.get("/", ($) => $.text("Hello World!"));
r.get("/user/:id", r0.getUnique);
r.get("/user/service/:id", r0.getAllByServiceId);
r.get("/service", o0.getAll);
r.get("/service/:id", o0.getUnique);
r.put("/user/:id", r0.update);
r.put("/service/:id", o0.update);
r.post("/user", r0.create);
r.post("/service", o0.create);
r.delete("/user/:id", r0.delete);
r.delete("/service/:id", o0.delete);
var I9 = r;
export { I9 as default };
