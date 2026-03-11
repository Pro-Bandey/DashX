(() => {
    var e,
        t,
        n,
        o,
        s,
        i,
        r,
        a,
        c,
        l,
        d,
        u,
        m,
        g,
        f,
        p,
        h = Object.create,
        y = Object.defineProperty,
        v = Object.getOwnPropertyDescriptor,
        b = Object.getOwnPropertyNames,
        k = Object.getPrototypeOf,
        w = Object.prototype.hasOwnProperty,
        E = (e, t) =>
            function () {
                return (e && (t = (0, e[b(e)[0]])((e = 0))), t);
            },
        L = (e, t, n) => (
            (n = null != e ? h(k(e)) : {}),
            ((e, t, n, o) => {
                if ((t && "object" == typeof t) || "function" == typeof t)
                    for (let s of b(t))
                        w.call(e, s) ||
                            s === n ||
                            y(e, s, {
                                get: () => t[s],
                                enumerable: !(o = v(t, s)) || o.enumerable,
                            });
                return e;
            })(
                !t && e && e.__esModule
                    ? n
                    : y(n, "default", { value: e, enumerable: !0 }),
                e,
            )
        ),
        x =
            ((e = {
                "node_modules/.deno/clickdown@1.3.4/node_modules/clickdown/dist/index.js"(
                    e,
                    t,
                ) {
                    var n,
                        o = Object.defineProperty,
                        s = Object.getOwnPropertyDescriptor,
                        i = Object.getOwnPropertyNames,
                        r = Object.prototype.hasOwnProperty,
                        a = {};
                    function c(e, t, n) {
                        if (!e) throw new Error("Target is undefined");
                        const o =
                            "INPUT" === e.tagName && "checkbox" === e.getAttribute("type"),
                            s = "A" === e.tagName;
                        let i = !1;
                        function r(e) {
                            const n = "keydown" === e.type,
                                r = (null == e ? void 0 : e.code) ?? "",
                                a = e.target,
                                c = a.tagName ?? "";
                            if (
                                (!n || r.match(/Space|Enter/)) &&
                                (!s || !n || "Space" !== r)
                            ) {
                                if ("SUMMARY" === c) {
                                    const e = a;
                                    e.open = !e.open;
                                }
                                if (o) {
                                    const e = a;
                                    e.checked = !e.checked;
                                }
                                if (s) {
                                    const e = a;
                                    globalThis.window.location.href = e.href;
                                }
                                ((i = !0), t(e, a));
                            }
                        }
                        (null == e || e.addEventListener("pointerdown", r),
                            null == e || e.addEventListener("keydown", r),
                            null == e ||
                            e.addEventListener("click", function (o) {
                                const s = o.composedPath();
                                (s[0] !== e && !1 === (null == n ? void 0 : n.propagate)) ||
                                    (!1 !== i ? ((i = !1), o.preventDefault()) : t(o, e));
                            }));
                    }
                    (((e, t) => {
                        for (var n in t) o(e, n, { get: t[n], enumerable: !0 });
                    })(a, { onclickdown: () => c }),
                        (t.exports =
                            ((n = a),
                                ((e, t, n, a) => {
                                    if ((t && "object" == typeof t) || "function" == typeof t)
                                        for (let c of i(t))
                                            r.call(e, c) ||
                                                c === n ||
                                                o(e, c, {
                                                    get: () => t[c],
                                                    enumerable: !(a = s(t, c)) || a.enumerable,
                                                });
                                    return e;
                                })(o({}, "__esModule", { value: !0 }), n))));
                },
            }),
                function () {
                    return (
                        t || (0, e[b(e)[0]])((t = { exports: {} }).exports, t),
                        t.exports
                    );
                });
    function _(e, t, n, o) {
        ((this.type = e),
            (this.content = t),
            (this.alias = o),
            (this.length = n.length));
    }
    var S,
        q,
        I,
        C,
        T,
        A,
        B,
        j,
        O,
        P,
        $,
        z,
        N,
        M,
        D,
        R,
        F,
        W,
        U,
        H,
        K,
        G,
        V,
        Y,
        J,
        X,
        Z,
        Q,
        ee,
        te,
        ne,
        oe,
        se,
        ie,
        re,
        ae,
        ce,
        le,
        de,
        ue,
        me,
        ge,
        fe = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/index-C1_GGQ8y.js"() {
                ((n = {}),
                    (o = Symbol()),
                    (s = Symbol()),
                    (i = (e) => ("string" == typeof e ? r[e] : e)),
                    (r = { plain: n, plaintext: n, text: n, txt: n }),
                    (a = (e, t) => (t[s] || c)(e, t)),
                    (c = (e, t) => {
                        for (var n, s = [e], r = [], a = 0; (n = i(t[o]));)
                            (delete t[o], Object.assign(t, n));
                        for (p(e, t, s, 0); (r[a++] = s[0]), (s = s[1]););
                        return r;
                    }),
                    (l = (e, t, n) => e.replace(/&/g, "&amp;").replace(t, n)),
                    (d = "</span>"),
                    (u = ""),
                    (m = ""),
                    (g = (e) => {
                        for (var t = "", n = e.length, o = 0; o < n;) t += f(e[o++]);
                        return t;
                    }),
                    (f = (e) => {
                        if (e instanceof _) {
                            var { type: t, alias: n, content: o } = e,
                                s = u,
                                i = m,
                                r = `<span class="token ${t + (n ? " " + n : "") + ("keyword" == t && "string" == typeof o ? " keyword-" + o : "")}">`;
                            ((m += d), (u += r));
                            var a = f(o);
                            return ((u = s), (m = i), r + a + d);
                        }
                        return "string" != typeof e
                            ? g(e)
                            : ((e = l(e, /</g, "&lt;")),
                                m && e.includes("\n") ? e.replace(/\n/g, m + "\n" + u) : e);
                    }),
                    (p = (e, t, n, o, s) => {
                        for (var r in t)
                            if (t[r])
                                for (
                                    var c = 0, l = t[r], d = Array.isArray(l) ? l : [l];
                                    c < d.length;
                                    ++c
                                ) {
                                    if (s && s[0] == r && s[1] == c) return;
                                    for (
                                        var u = d[c],
                                        m = u.pattern || u,
                                        g = i(u.inside),
                                        f = u.lookbehind,
                                        h = u.greedy && m.global,
                                        y = u.alias,
                                        v = n,
                                        b = o;
                                        v && (!s || b < s[2]);
                                        b += v[0].length, v = v[1]
                                    ) {
                                        var k,
                                            w,
                                            E = v[0],
                                            L = 0;
                                        if (!(E instanceof _)) {
                                            if (
                                                ((m.lastIndex = h ? b : 0),
                                                    !(k = m.exec(h ? e : E)) && h)
                                            )
                                                break;
                                            if (k && k[0]) {
                                                if (
                                                    (f &&
                                                        k[1] &&
                                                        ((w = k[1].length),
                                                            (k.index += w),
                                                            (k[0] = k[0].slice(w))),
                                                        h)
                                                ) {
                                                    for (
                                                        var x, S = (C = k.index) + k[0].length;
                                                        C >= b + (x = v[0].length);
                                                        v = v[1], b += x
                                                    );
                                                    if (v[0] instanceof _) continue;
                                                    var q = v;
                                                    for (l = b; (l += q[0].length) < S; q = q[1], L++);
                                                    ((E = e.slice(b, l)), (k.index -= b));
                                                }
                                                for (
                                                    var I,
                                                    C = k.index,
                                                    T = k[0],
                                                    A = E.slice(C + T.length),
                                                    B = b + E.length,
                                                    j = new _(r, g ? a(T, g) : T, T, y),
                                                    O = v,
                                                    P = 0;
                                                    (O = O[1]), P++ < L;
                                                );
                                                (A &&
                                                    (!O || O[0] instanceof _
                                                        ? (O = [A, O])
                                                        : (O[0] = A + O[0])),
                                                    (b += C),
                                                    (v[0] = C ? E.slice(0, C) : j),
                                                    C ? (v = v[1] = [j, O]) : (v[1] = O),
                                                    L && (p(e, t, v, b, (I = [r, c, B])), (B = I[2])),
                                                    s && B > s[2] && (s[2] = B));
                                            }
                                        }
                                    }
                                }
                    }));
            },
        }),
        pe = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/index-CKRNGLIi.js"() {
                (fe(),
                    (S = (e, t, ...n) => {
                        let o,
                            s,
                            i,
                            c,
                            l = [],
                            d = "",
                            u = !1,
                            m = !0,
                            f = [],
                            p = 0;
                        const h = j(),
                            y = h.firstChild,
                            v = y.children,
                            b = v[0],
                            k = b.firstChild,
                            w = { language: "text", value: d },
                            E = new Set(n),
                            L = {},
                            x = (e) => {
                                Object.assign(w, e);
                                let t = d != (d = e.value ?? d),
                                    n = o != (o = w.language);
                                ((c = !!w.readOnly),
                                    (h.style.tabSize = w.tabSize || 2),
                                    (k.inputMode = c ? "none" : ""),
                                    k.setAttribute("aria-readonly", c),
                                    q(),
                                    S(),
                                    t &&
                                    (u || k.remove(),
                                        (k.value = d),
                                        (k.selectionEnd = 0),
                                        u || b.prepend(k)),
                                    (t || n) && _());
                            },
                            _ = () => {
                                ((f = a((d = k.value), r[o] || {})), z("tokenize", f, o, d));
                                let e = g(f).split("\n"),
                                    t = 0,
                                    n = p,
                                    s = (p = e.length);
                                for (; e[t] == l[t] && t < s;) ++t;
                                for (; s && e[--s] == l[--n];);
                                if (t == s && t == n) v[t + 1].innerHTML = e[t] + "\n";
                                else {
                                    let o = n < t ? n : t - 1,
                                        i = o,
                                        r = "";
                                    for (; i < s;)
                                        r += `<div class=pce-line aria-hidden=true>${e[++i]}\n</div>`;
                                    for (i = s < t ? s : t - 1; i < n; i++) v[t + 1].remove();
                                    for (
                                        r && v[o + 1].insertAdjacentHTML("afterend", r), i = o + 1;
                                        i < p;
                                    )
                                        v[++i].setAttribute("data-line", i);
                                    h.style.setProperty(
                                        "--number-width",
                                        1 + (0 | Math.log10(p)) + ".001ch",
                                    );
                                }
                                (z("update", d),
                                    N(!0),
                                    m && setTimeout(setTimeout, 0, () => (m = !0)),
                                    (l = e),
                                    (m = !1));
                            },
                            S = (e) => {
                                (e || E).forEach((t) => {
                                    "object" == typeof t
                                        ? (t.update(M, w), e && E.add(t))
                                        : (t(M, w), e || E.delete(t));
                                });
                            },
                            q = ([e, t] = I()) => {
                                h.className = `prism-code-editor language-${o}${0 == w.lineNumbers ? "" : " show-line-numbers"} pce-${w.wordWrap ? "" : "no"}wrap${w.rtl ? " pce-rtl" : ""} pce-${e < t ? "has" : "no"}-selection${u ? " pce-focus" : ""}${c ? " pce-readonly" : ""}${w.class ? " " + w.class : ""}`;
                            },
                            I = () => [
                                k.selectionStart,
                                k.selectionEnd,
                                k.selectionDirection,
                            ],
                            B = {
                                Escape() {
                                    k.blur();
                                },
                            },
                            $ = {},
                            z = (e, ...t) => {
                                (L[e]?.forEach((e) => e.apply(M, t)),
                                    w["on" + e[0].toUpperCase() + e.slice(1)]?.apply(M, t));
                            },
                            N = (e) => {
                                if (e || m) {
                                    const e = I(),
                                        t = v[(i = A(d, 0, e[e[2] < "f" ? 0 : 1]))];
                                    (t != s &&
                                        (s?.classList.remove("active-line"),
                                            t.classList.add("active-line"),
                                            (s = t)),
                                        q(e),
                                        z("selectionChange", e, d));
                                }
                            },
                            M = {
                                container: h,
                                wrapper: y,
                                lines: v,
                                textarea: k,
                                get activeLine() {
                                    return i;
                                },
                                get value() {
                                    return d;
                                },
                                options: w,
                                get focused() {
                                    return u;
                                },
                                get tokens() {
                                    return f;
                                },
                                inputCommandMap: $,
                                keyCommandMap: B,
                                extensions: {},
                                setOptions: x,
                                update: _,
                                getSelection: I,
                                addExtensions(...e) {
                                    S(e);
                                },
                                on: (e, t) => (
                                    (L[e] ||= new Set()).add(t),
                                    () => L[e].delete(t)
                                ),
                                remove() {
                                    h.remove();
                                },
                            };
                        return (
                            C(k, "keydown", (e) => {
                                B[e.key]?.(e, I(), d) && O(e);
                            }),
                            C(k, "beforeinput", (e) => {
                                (c ||
                                    ("insertText" == e.inputType && $[e.data]?.(e, I(), d))) &&
                                    O(e);
                            }),
                            C(k, "input", _),
                            C(k, "blur", () => {
                                ((P = null), (u = !1), q());
                            }),
                            C(k, "focus", () => {
                                ((P = N), (u = !0), q());
                            }),
                            C(k, "selectionchange", (e) => {
                                (N(), O(e));
                            }),
                            T(e)?.append(h),
                            t && x(t),
                            M
                        );
                    }),
                    (q = "u" > typeof window ? document : null),
                    (I = q?.createElement("div")),
                    (C = (e, t, n, o) => e.addEventListener(t, n, o)),
                    (T = (e) => ("string" == typeof e ? q.querySelector(e) : e)),
                    (A = (e, t = 0, n = 1 / 0) => {
                        let o = 1;
                        for (; (t = e.indexOf("\n", t) + 1) && t <= n; o++);
                        return o;
                    }),
                    (B = {}),
                    (j = ((e, t) => (
                        I && ((I.innerHTML = e), (t = I.firstChild)),
                        () => t.cloneNode(!0)
                    ))(
                        "<div><div class=pce-wrapper><div class=pce-overlays><textarea class=pce-textarea spellcheck=false autocapitalize=off autocomplete=off>",
                    )),
                    (O = (e) => {
                        (e.preventDefault(), e.stopImmediatePropagation());
                    }),
                    q && C(q, "selectionchange", () => P?.()));
            },
        }),
        he = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/index.js"() {
                pe();
            },
        }),
        ye = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/index-DYIRSLx1.js"() {
                (pe(),
                    fe(),
                    ($ = (e, t) => (t ? e.lastIndexOf("\n", t - 1) + 1 : 0)),
                    (z = (e, t) => ((t = e.indexOf("\n", t)) + 1 ? t : e.length)),
                    (N = (e, t, n, o) => C(e.textarea, t, n, o)),
                    (M = (e, t) => parseFloat(getComputedStyle(e)[t])),
                    new Set(
                        "xml,rss,atom,jsx,tsx,xquery,xeora,xeoracube,actionscript".split(
                            ",",
                        ),
                    ),
                    (R = (e) => e.replace(/[$+?|.^*()[\]{}\\]/g, "\\$&")),
                    (F = (e, t) => e.slice($(e, t), t)),
                    (W = (e, t, n = t) => [
                        e.slice((t = $(e, t)), (n = z(e, n))).split("\n"),
                        t,
                        n,
                    ]),
                    (U = (e, t, n = 0, o = n, s = e.getSelection()[0]) => {
                        const i = e.value,
                            r = e.lines[A(i, 0, s)],
                            a = q.createTreeWalker(r, 5);
                        let c = a.lastChild(),
                            l = z(i, s) + 1 - s - c.length;
                        for (; -l <= o && (c = a.previousNode());)
                            if (!c.lastChild && ((l -= c.length || 0), l <= n))
                                for (; c != r; c = c.parentNode) if (c.matches?.(t)) return c;
                    }),
                    (H = (e, t) =>
                        U(e, "[class*=language-]", 0, 0, t)?.className.match(
                            /language-(\S*)/,
                        )[1] || e.options.language),
                    (K = (e, t, n, o, s, i) => {
                        if (e.options.readOnly) return;
                        ((D = e.getSelection()), (o ??= n));
                        let r,
                            a = e.textarea,
                            c = e.value,
                            d = J && !c[o ?? D[1]] && /\n$/.test(t) && /^$|\n$/.test(c);
                        (e.focused || a.focus(),
                            null != n && a.setSelectionRange(n, o),
                            null != s &&
                            (r = e.on("update", () => {
                                (a.setSelectionRange(s, i ?? s, D[2]), r());
                            })),
                            X || a.dispatchEvent(new InputEvent("beforeinput", { data: t })),
                            J || X
                                ? (d && (a.selectionEnd--, (t = t.slice(0, -1))),
                                    X && (t += "\n"),
                                    q.execCommand(
                                        t ? "insertHTML" : "delete",
                                        !1,
                                        l(t, /</g, "&lt;"),
                                    ),
                                    d && a.selectionStart++)
                                : q.execCommand(t ? "insertText" : "delete", !1, t),
                            (D = 0));
                    }),
                    (G = (e, t, n = t, o) => {
                        let s,
                            i = e.focused,
                            r = e.textarea;
                        (i ||
                            (C(
                                r,
                                "focus",
                                (e) => {
                                    s = e.relatedTarget;
                                },
                                { once: !0 },
                            ),
                                r.focus()),
                            r.setSelectionRange(t, n, o),
                            P(!(!i && (s ? s.focus() : r.blur()))));
                    }),
                    (V = q ? navigator.userAgent : ""),
                    (Y = !!q && /Mac|iPhone|iP[ao]d/.test(navigator.platform)),
                    (J = /Chrome\//.test(V)),
                    (X = !J && /AppleWebKit\//.test(V)),
                    (Z = (e) =>
                        e.altKey + 2 * e.ctrlKey + 4 * e.metaKey + 8 * e.shiftKey));
            },
        }),
        ve = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/extensions/commands.js"() {
                (pe(),
                    ye(),
                    (Q = !1),
                    (ee = Y ? 4 : 2),
                    (te = (e) => (Q = e)),
                    (ne = (e) => e.search(/\S|$/)),
                    (oe =
                        (
                            e = ['""', "''", "``", "()", "[]", "{}"],
                            t = /([^$\w'"`]["'`]|.[[({])[.,:;\])}>\s]|.[[({]`/s,
                        ) =>
                            (n, o) => {
                                let s;
                                const {
                                    keyCommandMap: i,
                                    inputCommandMap: r,
                                    getSelection: a,
                                    container: c,
                                } = n,
                                    l = navigator.clipboard,
                                    d = ({ insertSpaces: e = !0, tabSize: t } = o) => [
                                        e ? " " : "\t",
                                        e ? t || 2 : 1,
                                    ],
                                    u = () => !o.readOnly && !n.extensions.cursor?.scrollIntoView(),
                                    m = ([e, o], [s, i], r, a) =>
                                        (e < o ||
                                            (!a && t.test((r[o - 1] || " ") + s + (r[o] || " ")))) &&
                                        !K(n, s + r.slice(e, o) + i, null, null, e + 1, o + 1),
                                    g = ([e, t], o, s) => e == t && s[t] == o && !G(n, e + 1),
                                    f = (e, t, o, s, i, r) => {
                                        let a = t.join("\n");
                                        if (a != e.join("\n")) {
                                            const c = e.length - 1,
                                                l = t[c],
                                                d = e[c],
                                                u = d.length - l.length,
                                                m = t[0].length - e[0].length,
                                                g = o + ne((m < 0 ? t : e)[0]),
                                                f = s - d.length + ne(u > 0 ? l : d),
                                                p = o - s + a.length + u,
                                                h = g > i ? i : Math.max(g, i + m),
                                                y = r + o - s + a.length;
                                            K(n, a, o, s, h, r < f ? y + u : Math.max(f + p, y));
                                        }
                                    },
                                    p = (e, t, n, o, s, i, r, a) => {
                                        f(
                                            t,
                                            t.map(
                                                e
                                                    ? (e) => e.slice(ne(e) ? a - (ne(e) % a) : 0)
                                                    : (e) => e && r.repeat(a - (ne(e) % a)) + e,
                                            ),
                                            n,
                                            o,
                                            s,
                                            i,
                                        );
                                    };
                                ((r["<"] = (e, t, n) => m(t, "<>", n, !0)),
                                    e.forEach(([e, t]) => {
                                        const n = e == t;
                                        ((r[e] = (o, s, i) =>
                                            ((n && g(s, t, i)) || m(s, e + t, i)) && u()),
                                            n || (r[t] = (e, n, o) => g(n, t, o) && u()));
                                    }),
                                    (r[">"] = (e, t, o) => {
                                        const s = B[H(n)]?.autoCloseTags?.(t, o, n);
                                        s && (K(n, ">" + s, null, null, t[0] + 1), O(e));
                                    }),
                                    (i.Tab = (e, [t, s], i) => {
                                        if (Q || o.readOnly || 6 & Z(e)) return;
                                        const [r, a] = d(o),
                                            c = e.shiftKey,
                                            [l, m, g] = W(i, t, s);
                                        return (
                                            t < s || c
                                                ? p(c, l, m, g, t, s, r, a)
                                                : K(n, r.repeat(a - ((t - m) % a))),
                                            u()
                                        );
                                    }),
                                    (i.Enter = (e, t, o) => {
                                        const s = 7 & Z(e);
                                        if (!s || s == ee) {
                                            s && (t[0] = t[1] = W(o, t[1])[2]);
                                            const [e, i] = d(),
                                                [r, a] = t,
                                                c = B[H(n)]?.autoIndent,
                                                l = Math.floor(ne(F(o, r)) / i) * i,
                                                m = c?.[0]?.(t, o, n) ? i : 0,
                                                g = c?.[1]?.(t, o, n),
                                                f =
                                                    "\n" + e.repeat(l + m) + (g ? "\n" + e.repeat(l) : "");
                                            if (f[1] || o[a])
                                                return (K(n, f, r, a, r + l + m + 1), u());
                                        }
                                    }),
                                    (i.Backspace = (t, [s, i], r) => {
                                        if (s == i) {
                                            const t = F(r, s),
                                                i = o.tabSize || 2,
                                                a = e.includes(r.slice(s - 1, s + 1)),
                                                c = /[^ ]/.test(t) ? 0 : ((t.length - 1) % i) + 1;
                                            if (a || c > 1)
                                                return (K(n, "", s - (a ? 1 : c), s + a), u());
                                        }
                                    }));
                                for (let e = 0; e < 2; e++)
                                    i[e ? "ArrowDown" : "ArrowUp"] = (t, [o, s], i) => {
                                        const r = Z(t);
                                        if (1 == r) {
                                            const t = e ? o : $(i, o) - 1,
                                                r = e ? i.indexOf("\n", s) + 1 : s;
                                            if (t > -1 && r > 0) {
                                                const [a, c, l] = W(i, t, r),
                                                    d = a[e ? "pop" : "shift"](),
                                                    u = (d.length + 1) * (e ? 1 : -1);
                                                (a[e ? "unshift" : "push"](d),
                                                    K(n, a.join("\n"), c, l, o + u, s + u));
                                            }
                                            return u();
                                        }
                                        if (9 == r) {
                                            const [t, r, a] = W(i, o, s),
                                                c = t.join("\n"),
                                                l = e ? c.length + 1 : 0;
                                            return (K(n, c + "\n" + c, r, a, o + l, s + l), u());
                                        }
                                        if (2 == r && !Y)
                                            return (
                                                c.scrollBy(0, M(c, "lineHeight") * (e ? 1 : -1)),
                                                !0
                                            );
                                    };
                                (N(n, "keydown", (e) => {
                                    const t = Z(e),
                                        o = e.keyCode,
                                        [s, i, r] = a();
                                    if (t != ee || (221 != o && 219 != o)) {
                                        if (t == (Y ? 10 : 2) && 77 == o) (te(!Q), O(e));
                                        else if ((191 == o && t == ee) || (65 == o && 9 == t)) {
                                            const o = n.value,
                                                r = 9 == t,
                                                a = r ? s : $(o, s),
                                                c = B[H(n, a)] || {},
                                                { line: l, block: d } =
                                                    c.getComments?.(n, a, o) || c.comments || {},
                                                [m, g, p] = W(o, s, i),
                                                h = m.length - 1;
                                            if (r) {
                                                if (d) {
                                                    const [t, r] = d,
                                                        a = o.slice(s, i),
                                                        c = o.slice(0, s).search(R(t) + " ?$"),
                                                        l = RegExp("^ ?" + R(r)).test(o.slice(i));
                                                    (c + 1 && l
                                                        ? K(
                                                            n,
                                                            a,
                                                            c,
                                                            i + +(" " == o[i]) + r.length,
                                                            c,
                                                            c + i - s,
                                                        )
                                                        : K(
                                                            n,
                                                            `${t} ${a} ${r}`,
                                                            s,
                                                            i,
                                                            s + t.length + 1,
                                                            i + t.length + 1,
                                                        ),
                                                        u(),
                                                        O(e));
                                                }
                                            } else if (l) {
                                                const t = R(l),
                                                    n = RegExp(`^\\s*(${t} ?|$)`),
                                                    r = RegExp(t + " ?"),
                                                    a = !/\S/.test(o.slice(g, p)),
                                                    c = m.map(
                                                        m.every((e) => n.test(e)) && !a
                                                            ? (e) => e.replace(r, "")
                                                            : (e) =>
                                                                a || /\S/.test(e)
                                                                    ? e.replace(/^\s*/, `$&${l} `)
                                                                    : e,
                                                    );
                                                (f(m, c, g, p, s, i), u(), O(e));
                                            } else if (d) {
                                                const [t, o] = d,
                                                    r = ne(m[0]),
                                                    a = m[0].startsWith(t, r) && m[h].endsWith(o),
                                                    c = m.slice();
                                                c[0] = m[0].replace(
                                                    a ? RegExp(R(t) + " ?") : /(?=\S)|$/,
                                                    a ? "" : t + " ",
                                                );
                                                let l = c[0].length - m[0].length;
                                                c[h] = a
                                                    ? c[h].replace(RegExp(`( ?${R(o)})?$`), "")
                                                    : c[h] + " " + o;
                                                let f = c.join("\n"),
                                                    y = r + g,
                                                    v = y > s ? s : Math.max(s + l, y),
                                                    b =
                                                        y > i - (s != i)
                                                            ? i
                                                            : Math.min(Math.max(y, i + l), g + f.length);
                                                (K(n, f, g, p, v, Math.max(v, b)), u(), O(e));
                                            }
                                        } else if (t == 8 + ee && 75 == o) {
                                            const t = n.value,
                                                [o, a, c] = W(t, s, i),
                                                l = r > "f" ? i - c + o.pop().length : s - a,
                                                d = z(t, c + 1) - c - 1;
                                            (K(n, "", a - !!a, c + !a, a + Math.min(l, d)), u(), O(e));
                                        }
                                    } else
                                        (p(219 == o, ...W(n.value, s, i), s, i, ...d()), u(), O(e));
                                }),
                                    ["copy", "cut", "paste"].forEach((e) =>
                                        N(n, e, (t) => {
                                            const [o, i] = a();
                                            if (o == i && l) {
                                                const [[r], a, c] = W(n.value, o, i);
                                                "paste" == e
                                                    ? t.clipboardData.getData("text/plain") == s &&
                                                    (K(n, s + "\n", a, a, o + s.length + 1), u(), O(t))
                                                    : (l.writeText((s = r)),
                                                        "cut" == e && (K(n, "", a, c + 1), u()),
                                                        O(t));
                                            }
                                        }),
                                    ));
                            }));
            },
        }),
        be = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/language-gdIi4UL0.js"() {
                ((se = (e, t, n) => {
                    var o = {};
                    for (var s in e) ((o[s] = e[s]), delete e[s]);
                    for (var s in o)
                        (s == t && Object.assign(e, n),
                            n.hasOwnProperty(s) || (e[s] = o[s]));
                }),
                    {}.toString);
            },
        }),
        ke = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/prism/languages/css.js"() {
                (fe(),
                    (re = (ie = /(?:"(?:\\[^]|[^\\\n"])*"|'(?:\\[^]|[^\\\n'])*')/g)
                        .source),
                    ((ae = {
                        rule: /^@[\w-]+/,
                        "selector-function-argument": {
                            pattern:
                                /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^)]*\))*\))+(?=\s*\))/,
                            lookbehind: !0,
                            alias: "selector",
                        },
                        keyword: {
                            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                            lookbehind: !0,
                        },
                    })[o] = r.css =
                        {
                            comment: /\/\*[^]*?\*\//,
                            atrule: {
                                pattern: RegExp(
                                    `@[\\w-](?:[^\\s;{"']|\\s+(?!\\s)|${re})*?(?:;|(?=\\s*\\{))`,
                                ),
                                inside: ae,
                            },
                            url: {
                                pattern: RegExp(
                                    `\\burl\\((?:${re}|(?:[^\\\\\n"')=]|\\\\[^])*)\\)`,
                                    "gi",
                                ),
                                greedy: !0,
                                inside: {
                                    function: /^url/i,
                                    punctuation: /^\(|\)$/,
                                    string: { pattern: RegExp("^" + re + "$"), alias: "url" },
                                },
                            },
                            selector: {
                                pattern: RegExp(
                                    `(^|[{}\\s])[^\\s{}](?:[^\\s{};"']|\\s+(?![\\s{])|${re})*(?=\\s*\\{)`,
                                ),
                                lookbehind: !0,
                            },
                            string: { pattern: ie, greedy: !0 },
                            property: {
                                pattern:
                                    /(^|[^-\w\xa0-\uffff])(?!\d)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*:)/i,
                                lookbehind: !0,
                            },
                            important: /!important\b/i,
                            function: {
                                pattern: /(^|[^-a-z\d])[-a-z\d]+(?=\()/i,
                                lookbehind: !0,
                            },
                            punctuation: /[(){},:;]/,
                        }));
            },
        }),
        we = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/prism/languages/css-extras.js"() {
                (fe(),
                    be(),
                    ke(),
                    ((ce = r.css).selector.inside = ce.atrule.inside[
                        "selector-function-argument"
                    ].inside =
                    {
                        "pseudo-element":
                            /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
                        "pseudo-class": /:[-\w]+/,
                        class: /\.[-\w]+/,
                        id: /#[-\w]+/,
                        attribute: {
                            pattern: /\[(?:[^[\]"']|(["'])(?:\\[^]|(?!\1)[^\\\n])*\1)*\]/g,
                            greedy: !0,
                            inside: {
                                punctuation: /^\[|\]$/,
                                "case-sensitivity": {
                                    pattern: /(\s)[si]$/i,
                                    lookbehind: !0,
                                    alias: "keyword",
                                },
                                namespace: {
                                    pattern: /^(\s*)(?:(?!\s)[-*\w\xa0-\uffff])*\|(?!=)/,
                                    lookbehind: !0,
                                    inside: { punctuation: /\|$/ },
                                },
                                "attr-name": {
                                    pattern: /^(\s*)(?:(?!\s)[-\w\xa0-\uffff])+/,
                                    lookbehind: !0,
                                },
                                "attr-value": {
                                    pattern:
                                        /(=\s*)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*$)|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2/,
                                    lookbehind: !0,
                                },
                                operator: /[|~*^$]?=/,
                            },
                        },
                        "n-th": [
                            {
                                pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                                lookbehind: !0,
                                inside: { number: /[\dn]+/, operator: /[+-]/ },
                            },
                            { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
                        ],
                        combinator: /[>+~]|\|\|/,
                        punctuation: /[(),]/,
                    }),
                    se(ce, "property", {
                        variable: {
                            pattern:
                                /(^|[^-\w\xa0-\uffff])--(?!\d)(?:(?!\s)[-\w\xa0-\uffff])*/i,
                            lookbehind: !0,
                        },
                    }),
                    se(ce, "function", {
                        operator: { pattern: /(\s)[/*+-](?!\S)/, lookbehind: !0 },
                        hexcode: { pattern: /\B#[a-f\d]{3,8}\b/i, alias: "color" },
                        entity: /\\[a-f\d]{1,8}/i,
                        unit: { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
                        number: {
                            pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
                            lookbehind: !0,
                        },
                    }));
            },
        }),
        Ee = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/prism/languages/uri.js"() {
                (fe(),
                    (r.url = r.uri =
                    {
                        scheme: {
                            pattern: /^[a-z][a-z\d+.-]*:/gim,
                            greedy: !0,
                            inside: { "scheme-delimiter": /:$/ },
                        },
                        fragment: {
                            pattern: /#[\w.~!$&'()*,;=%:@/?+-]*/,
                            inside: { "fragment-delimiter": /^#/ },
                        },
                        query: {
                            pattern: /\?[\w.~!$&'()*,;=%:@/?+-]*/,
                            inside: {
                                "query-delimiter": { pattern: /^\?/g, greedy: !0 },
                                "pair-delimiter": /[&;]/,
                                pair: {
                                    pattern: /^[^=][^]*/,
                                    inside: {
                                        key: /^[^=]+/,
                                        value: { pattern: /(^=)[^]+/, lookbehind: !0 },
                                    },
                                },
                            },
                        },
                        authority: {
                            pattern:
                                /^\/\/(?:[\w.~!$&'()*,;=%:+-]*@)?(?:\[(?:[a-fA-F\d:.]{2,48}|v[a-fA-F\d]+\.[\w.~!$&'()*,;=+-]+)\]|[\w.~!$&'()*,;=%+-]*)(?::\d*)?/m,
                            inside: {
                                "authority-delimiter": /^\/\//,
                                "user-info-segment": {
                                    pattern: /^[\w.~!$&'()*,;=%:+-]*@/,
                                    inside: {
                                        "user-info-delimiter": /@$/,
                                        "user-info": /^[\w.~!$&'()*,;=%:+-]+/,
                                    },
                                },
                                "port-segment": {
                                    pattern: /:\d*$/,
                                    inside: { "port-delimiter": /^:/, port: /^\d+/ },
                                },
                                host: {
                                    pattern: /[^]+/,
                                    inside: {
                                        "ip-literal": {
                                            pattern: /^\[[^]+\]$/,
                                            inside: {
                                                "ip-literal-delimiter": /^\[|\]$/,
                                                "ipv-future": /^v[^]+/,
                                                "ipv6-address": /^[^]+/,
                                            },
                                        },
                                        "ipv4-address":
                                            /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/,
                                    },
                                },
                            },
                        },
                        path: {
                            pattern: /^[\w.~!$&'()*,;=%:@/+-]+/m,
                            inside: { "path-separator": /\// },
                        },
                    }));
            },
        }),
        Le = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/index-BZh6eCR8.js"() {
                (ye(),
                    (le = /\[]|\(\)|{}/),
                    (de = /[([{][^)\]}]*$/),
                    (ue = ([e, t], n) => le.test(n[e - 1] + n[t])),
                    (me = { line: "//", block: ["/*", "*/"] }),
                    (ge = (e = me, t = de) => ({
                        comments: e,
                        autoIndent: [([e], n) => t.test(F(n, e)), ue],
                    })));
            },
        }),
        xe = E({
            "node_modules/.deno/prism-code-editor@4.2.0/node_modules/prism-code-editor/dist/languages/css.js"() {
                (pe(),
                    Le(),
                    (B.css = ge({ block: ["/*", "*/"] })),
                    (B.less = B.scss = ge()),
                    (B.sass = { comments: me }));
            },
        }),
        _e = {};
    function Se(e) {
        return S("#css-editor", e, oe());
    }
    function qe(e) {
        return S("#background-urls-editor", e, oe());
    }
    ((e, t) => {
        for (var n in t) y(e, n, { get: t[n], enumerable: !0 });
    })(_e, { createBackgroundUrlsEditor: () => qe, createCssEditor: () => Se });
    var Ie,
        Ce = E({
            "src/scripts/features/csseditor.ts"() {
                (he(), ve(), we(), Ee(), xe());
            },
        }),
        Te = {
            en: "English",
            fr: "Français",
            de: "Deutsch",
            it: "Italiano",
            es: "Español",
            ca: "Català",
            "pt-BR": "Português (Brasil)",
            "pt-PT": "Português (Portugal)",
            nl: "Nederlands",
            da: "Dansk",
            sv: "Svenska",
            nb: "Norsk",
            is: "Íslenska",
            fi: "suomi",
            pl: "Polski",
            cs: "Čeština",
            hr: "Hrvatski",
            sk: "Slovenský",
            hu: "Magyar",
            ro: "Română",
            el: "Ελληνικά",
            sr: "Српски (ћирилица)",
            "sr-YU": "Srpski (latinica)",
            be: "Беларуская",
            uk: "Українська",
            ru: "Русский",
            tr: "Türkçe",
            he: "עִברִית",
            hy: "Հայերեն",
            ar: "العربية",
            az: "Azərbaycan",
            fa: "فارسی",
            te: "తెలుగు",
            id: "Indonesia",
            vi: "Tiếng Việt",
            "zh-CN": "中国简体中文",
            "zh-HK": "香港繁體中文",
            "zh-TW": "臺灣正體中文",
            "nan-Hant-TW": "臺灣台語（漢羅）",
            ko: "한국어",
            ja: "日本語",
        },
        Ae = {
            el: "greek",
            ar: "arabic",
            fa: "arabic",
            ru: "cyrillic",
            uk: "cyrillic",
            sr: "cyrillic",
            be: "cyrillic",
            sk: "latin-ext",
            nb: "latin-ext",
            is: "latin-ext",
            hr: "latin-ext",
            cs: "latin-ext",
            pl: "latin-ext",
            ro: "latin-ext",
            tr: "latin-ext",
            hu: "latin-ext",
            vi: "latin-ext",
            az: "latin-ext",
            ja: "japanese",
            hy: "armenian",
            te: "telugu",
            he: "hebrew",
            "zh-CN": "chinese-simplified",
            "zh-HK": "chinese-traditional",
            "zh-TW": "chinese-traditional",
            "nan-Hant-TW": "chinese-traditional",
            ko: "korean",
        },
        Be = globalThis.navigator,
        je =
            "iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPhone|iPod".split(
                "|",
            ),
        Oe = "Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini".split(
            "|",
        ),
        Pe = "22.0.0",
        $e = "https://services.bonjourr.fr",
        ze = globalThis.ENV ?? "TEST",
        Ne = crypto.randomUUID(),
        Me = new BroadcastChannel("dashx_tabs"),
        De =
            je.includes(Be.platform) ||
                (Be.userAgent?.includes("Mac") && "ontouchend" in document)
                ? "ios"
                : Be.appVersion?.includes("Macintosh")
                    ? "mac"
                    : Be.appVersion?.includes("Windows")
                        ? "windows"
                        : Be.userAgent?.toLowerCase()?.includes("android")
                            ? "android"
                            : "unknown",
        Re =
            "moz-extension:" === globalThis.location?.protocol
                ? "firefox"
                : "chrome-extension:" === globalThis.location?.protocol
                    ? "chrome"
                    : "safari-web-extension:" === globalThis.location?.protocol
                        ? "safari"
                        : "online",
        Fe = Be?.userAgentData?.brands.some((e) => "Microsoft Edge" === e.brand)
            ? "edge"
            : Be?.userAgentData?.brands.some((e) => "Opera" === e.brand)
                ? "opera"
                : Be?.userAgentData?.brands.some((e) => "Chromium" === e.brand)
                    ? "chrome"
                    : Be.userAgent?.toLowerCase()?.indexOf("firefox") > -1
                        ? "firefox"
                        : Be.userAgent?.toLowerCase()?.indexOf("safari") > -1
                            ? "safari"
                            : "other",
        We = "online" === Re ? void 0 : "firefox" === Re ? browser : chrome,
        Ue = Be.userAgentData
            ? Be.userAgentData.mobile
            : Oe.some((e) => Be.userAgent.includes(e)),
        He = (() => {
            for (const e of Object.keys(Te))
                if (Be.language.replace("-", "_").includes(e)) return e;
            return "en";
        })(),
        Ke = [
            "default",
            "google",
            "ddg",
            "startpage",
            "qwant",
            "yahoo",
            "bing",
            "brave",
            "ecosia",
            "lilo",
            "baidu",
            "custom",
        ],
        Ge = {
            about: { browser: Re, version: Pe },
            showall: !1,
            lang: He,
            dark: "system",
            favicon: "",
            tabtitle: "",
            greeting: "",
            greetingsize: "3",
            greetingsmode: "auto",
            pagegap: 1,
            pagewidth: 1600,
            time: !0,
            main: !0,
            dateformat: "auto",
            quicklinks: !0,
            textShadow: 0.2,
            css: "",
            hide: {},
            linkstyle: "medium",
            linktitles: !0,
            linkbackgrounds: !0,
            linknewtab: !1,
            linksrow: 6,
            linkiconradius: 1.1,
            linkgroups: {
                on: !1,
                selected: "default",
                groups: ["default"],
                pinned: [],
                synced: [],
            },
            backgrounds: {
                type: "images",
                fadein: 600,
                blur: 15,
                bright: 0.8,
                frequency: "hour",
                color: "#185A63",
                urls: "",
                images: "bonjourr-images-daylight",
                videos: "bonjourr-videos-daylight",
                mute: !0,
                queries: {},
                texture: { type: "none" },
            },
            clock: {
                size: 1,
                ampm: !1,
                analog: !1,
                seconds: !1,
                ampmlabel: !1,
                ampmposition: "top-left",
                worldclocks: !1,
                timezone: "auto",
            },
            analogstyle: {
                face: "none",
                hands: "modern",
                shape: "round",
                border: "#ffff",
                background: "#fff2",
            },
            worldclocks: [],
            weather: {
                city: void 0,
                unit: "metric",
                provider: "",
                moreinfo: "none",
                forecast: "auto",
                temperature: "actual",
                geolocation: "approximate",
            },
            greetingscustom: { morning: "", afternoon: "", evening: "", night: "" },
            searchbar: {
                on: !1,
                opacity: 0.1,
                newtab: !1,
                suggestions: !0,
                engine: "default",
                request: "",
                placeholder: "",
            },
            quotes: {
                on: !1,
                author: !1,
                type: "zh-CN" === He ? "hitokoto" : "classic",
                frequency: "day",
                last: void 0,
            },
            pomodoro: {
                on: !1,
                mode: "pomodoro",
                pause: 0,
                end: 0,
                timeFor: { pomodoro: 1500, break: 300, longbreak: 1200 },
                focus: !1,
                sound: !0,
                history: [],
            },
            font: {
                family: "",
                size: "14",
                system: !0,
                weightlist: [],
                weight: "windows" === De ? "400" : "300",
            },
            move: { selection: "single", layouts: {} },
        },
        Ve = {
            syncType: "online" === Re ? "off" : "browser",
            gistToken: "",
            userQuoteSelection: 0,
            translations: void 0,
            quotesCache: [],
            backgroundUrls: {},
            backgroundFiles: {},
            backgroundCollections: {},
            backgroundCompressFiles: !0,
            backgroundLastChange: "",
            lastWeather: void 0,
        },
        Ye = 420,
        Je = 1320;
    function Xe(e) {
        const t = !e && Ie,
            n = !e || "auto" === e;
        let o = new Date();
        if (t) return Ie;
        if (n) return o;
        "firefox" === Fe &&
            ("CST" === e && (e = "-06:00"), "AST" === e && (e = "-03:00"));
        try {
            const t = new Intl.DateTimeFormat("en", {
                timeZone: e,
                dateStyle: "medium",
                timeStyle: "medium",
            });
            o = new Date(t.format(o));
        } catch (e) { }
        return o;
    }
    function Ze(e) {
        const t = tt(e ? new Date(e) : new Date());
        return t >= 0 && t <= Ye - 60
            ? "night"
            : t <= Ye + 60
                ? "noon"
                : t <= Je - 60
                    ? "day"
                    : t <= Je + 60
                        ? "evening"
                        : t >= Je + 60
                            ? "night"
                            : "day";
    }
    function Qe(e, t) {
        e && t && ((Ye = tt(new Date(e))), (Je = tt(new Date(t))));
        return { sunrise: Ye, sunset: Je, dusk: 100 - (1440 - Je) / 8 };
    }
    function et(e, t) {
        const n = Xe(),
            o = void 0 !== t ? new Date(t) : n,
            s = {
                date: n.getDate() !== o.getDate(),
                hour: n.getHours() !== o.getHours(),
            };
        switch (e) {
            case "day":
                return s.date;
            case "hour":
                return s.date || s.hour;
            case "tabs":
                return !0;
            case "pause":
                return 0 === t;
            case "period":
                return 0 === t || Ze() !== Ze(+o);
            default:
                return !1;
        }
    }
    function tt(e) {
        return 60 * e.getHours() + e.getMinutes();
    }
    function nt(e, t) {
        return e.length > t ? e.slice(0, t) : e;
    }
    function ot(e) {
        const t = "abcdefghijklmnopqr";
        return Array.from(
            { length: e },
            () => t[Math.floor(Math.random() * t.length)],
        ).join("");
    }
    function st(e) {
        return Number.parseInt(e.slice(4), 16);
    }
    function it(e) {
        const t = e.toString(16);
        return 1 === t.length ? "0hex" : t;
    }
    function rt(e, t) {
        function n(e) {
            return null !== e && "object" == typeof e;
        }
        const o = Object.keys(e),
            s = Object.keys(t);
        if (o.length !== s.length) return !1;
        for (const s of o) {
            const o = e[s],
                i = t[s],
                r = n(o) && n(i);
            if ((r && !rt(o, i)) || (!r && o !== i)) return !1;
        }
        return !0;
    }
    function at(e = "") {
        try {
            return JSON.parse(e);
        } catch (e) { }
    }
    var ct = {
        sync: {
            get: lt,
            set: async function (e, t = () => { }) {
                switch (ct.type.get()) {
                    case "webext-sync":
                        return void chrome.storage.sync.set(e, t);
                    case "webext-local": {
                        const n = {
                            ...(await chrome.storage.local.get("syncStorage")).syncStorage,
                            ...e,
                        };
                        return void chrome.storage.local.set({ syncStorage: n }, t);
                    }
                    case "localstorage": {
                        if ("object" != typeof e) return;
                        const t = mt(at(localStorage.dashx) ?? {});
                        for (const [n, o] of Object.entries(e)) t[n] = o;
                        return (
                            (localStorage.dashx = JSON.stringify(t ?? {})),
                            void globalThis.dispatchEvent(new Event("storage"))
                        );
                    }
                    default:
                }
            },
            remove: async function (e) {
                switch (ct.type.get()) {
                    case "webext-sync":
                        return void chrome.storage.sync.remove(e);
                    case "webext-local": {
                        const { syncStorage: t } =
                            await chrome.storage.local.get("syncStorage");
                        return void (
                            t &&
                            (delete t[e],
                                await chrome.storage.local.remove("syncStorage"),
                                chrome.storage.local.set({ syncStorage: t }))
                        );
                    }
                    case "localstorage":
                        return void localStorage.removeItem(e);
                    default:
                }
            },
            clear: async function () {
                switch (ct.type.get()) {
                    case "webext-sync":
                        return void (await chrome.storage.sync.clear());
                    case "webext-local":
                        return void (await chrome.storage.local.remove("syncStorage"));
                    case "localstorage":
                        return void localStorage.removeItem("dashx");
                    default:
                }
            },
        },
        local: {
            get: dt,
            set: function (e) {
                switch (ct.type.get()) {
                    case "webext-sync":
                    case "webext-local":
                        return void chrome.storage.local.set(e);
                    default:
                        for (const [t, n] of Object.entries(e))
                            "string" == typeof n
                                ? localStorage.setItem(t, n)
                                : localStorage.setItem(t, JSON.stringify(n));
                        return;
                }
            },
            remove: function (e) {
                switch (ct.type.get()) {
                    case "webext-sync":
                    case "webext-local":
                        return chrome.storage.local.remove(e);
                    case "localstorage":
                        return void localStorage.removeItem(e);
                    default:
                }
            },
            clear: async function () {
                switch (ct.type.get()) {
                    case "webext-sync":
                        return void chrome.storage.local.clear();
                    case "webext-local": {
                        const e = (await chrome.storage.local.get("syncStorage"))
                            .syncStorage;
                        return (
                            await chrome.storage.local.clear(),
                            void (await chrome.storage.local.set({ syncStorage: e }))
                        );
                    }
                    case "localstorage":
                        for (const e of Object.keys(Ve)) localStorage.removeItem(e);
                        return;
                    default:
                }
            },
        },
        init: async function () {
            const e = globalThis.startupStorage ?? {};
            "online" === Re ||
                o() ||
                ((globalThis.pageReady = !0),
                    await new Promise((t) => {
                        document.addEventListener("webextstorage", (n) => {
                            ("sync" === n.detail && (e.sync = globalThis.startupStorage.sync),
                                "local" === n.detail &&
                                (e.local = globalThis.startupStorage.local),
                                o() && t(!0));
                        });
                    }));
            switch (ct.type.init()) {
                case "webext-local":
                    ((e.sync = globalThis.startupStorage.local?.syncStorage),
                        (e.local = globalThis.startupStorage.local));
                    break;
                case "webext-sync":
                    ((e.sync = globalThis.startupStorage.sync),
                        (e.local = globalThis.startupStorage.local));
                    break;
                case "localstorage":
                    ((e.sync = await lt()), (e.local = await dt()));
                    break;
                default:
            }
            0 === Object.keys(e.sync ?? {})?.length &&
                (e.sync = await (async function () {
                    try {
                        return mt(await (await fetch("config.json")).json());
                    } catch (e) { }
                    return Ge;
                })());
            const t = mt(e.sync),
                n = (function (e = {}) {
                    return { ...Ve, ...e };
                })(e.local);
            return { sync: t, local: n };
            function o() {
                return !!e.sync && !!e.local;
            }
        },
        clearall: async function () {
            (sessionStorage.clear(),
                Object.keys(localStorage).forEach((e) => {
                    !1 === e.startsWith("dashx-archive-") &&
                        localStorage.removeItem(e);
                }));
            try {
                globalThis.caches.delete("local-files");
            } catch (e) { }
            switch (((globalThis.startupStorage = void 0), ct.type.get())) {
                case "webext-sync":
                    return (
                        await chrome.storage.sync.clear(),
                        await chrome.storage.local.clear(),
                        chrome.storage.sync.set(Ge),
                        void chrome.storage.local.set(Ve)
                    );
                case "webext-local":
                    return (
                        await chrome.storage.sync.clear(),
                        await chrome.storage.local.clear(),
                        void chrome.storage.local.set({ ...Ve, syncStorage: Ge })
                    );
                default:
            }
        },
        type: (function () {
            let e = "webext-sync";
            return {
                init: function () {
                    return void 0 === globalThis.chrome?.storage
                        ? ((e = "localstorage"), "localstorage")
                        : globalThis.startupStorage?.local?.syncStorage
                            ? ((e = "webext-local"), "webext-local")
                            : e;
                },
                get: function () {
                    return e;
                },
                change: function (e, t) {
                    void 0 !== globalThis.chrome?.storage &&
                        ("local" === e && chrome.storage.local.set({ syncStorage: t }),
                            "sync" === e &&
                            chrome.storage.local.remove("syncStorage").then(() => {
                                chrome.storage.sync.set(t);
                            }));
                },
            };
        })(),
    };
    async function lt(e) {
        switch (ct.type.get()) {
            case "webext-sync":
                return mt(await chrome.storage.sync.get(e ?? null));
            case "webext-local": {
                const { syncStorage: e } = await chrome.storage.local.get();
                return mt(e);
            }
            default:
                return mt(at(localStorage.dashx) ?? {});
        }
    }
    async function dt(e) {
        switch (ct.type.get()) {
            case "webext-sync":
            case "webext-local":
                return await chrome.storage.local.get(e);
            default: {
                const t = structuredClone(Ve);
                (void 0 === e && (e = Object.keys(Ve)),
                    "string" == typeof e && (e = [e]));
                const n = Object.keys(globalThis.localStorage),
                    o = e.filter((e) => n.includes(e));
                for (const e of o) {
                    const n = globalThis.localStorage.getItem(e),
                        o = n && (n.startsWith("{") || n.startsWith("[")),
                        s = n && ("true" === n || "false" === n),
                        i = n && !1 === Number.isNaN(Number(n));
                    t[e] = o ? at(n) : s ? "true" === n : i ? Number.parseFloat(n) : n;
                }
                return t;
            }
        }
    }
    function ut(e) {
        const t = structuredClone(e);
        return (
            (t.review = Ge.review),
            (t.showall = Ge.showall),
            (t.weather.city = Ge.weather.city),
            (t.quotes.last = Ge.quotes.last),
            rt(t, Ge)
        );
    }
    function mt(e = {}) {
        return { ...Ge, ...e };
    }
    function gt(e, t) {
        let n;
        const o = (...o) => {
            (clearTimeout(n), (n = setTimeout(() => e(...o), t)));
        };
        return ((o.cancel = () => clearTimeout(n)), o);
    }
    var ft,
        pt = gt((e) => {
            ct.sync.set(e);
        }, 400),
        ht = "en";
    async function yt(e, t) {
        const n = wt(e);
        if ("en" === n)
            return (ct.local.remove("translations"), void (ft = void 0));
        const o = t?.translations?.lang;
        (t && o === n
            ? (ft = t.translations)
            : ((ft = await (
                await fetch(`../../_locales/${n}/translations.json`)
            ).json()),
                ct.local.set({ translations: ft })),
            (ht = n));
    }
    function vt(e, t = "en") {
        if ("en" !== t) {
            if (ft) {
                const t = (e ?? document.body).querySelectorAll(".trn");
                let n;
                for (const e of t)
                    ((n = e.textContent?.trim() ?? ""), (e.textContent = ft[n] ?? n));
            }
            (document.documentElement.setAttribute("lang", t), (ht = t));
        }
    }
    function bt() {
        return ht;
    }
    function kt(e) {
        return ft ? (ft[e] ?? e) : e;
    }
    function wt(e) {
        let t = e;
        return (
            e.includes("ES") && (t = "es"),
            "gr" === e && (t = "el"),
            "jp" === e && (t = "ja"),
            "cz" === e && (t = "cs"),
            (t = t.replace("_", "-")),
            t
        );
    }
    function Et(e, t) {
        function n(e) {
            const t = `data:image/svg+xml,${`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${`<text y=".9em" font-size="85">${e}</text>`}</svg>`}`;
            document.getElementById("favicon").href = e
                ? t
                : "/src/assets/favicons/favicon.ico";
        }
        if ("edge" !== Fe) {
            if (t) {
                const t =
                    e?.match(/[\p{Emoji}\u25A0-\u25FF]/gu) && !e?.match(/[0-9a-z]/g);
                (pt({ favicon: t ? e : "" }),
                    document.getElementById("head-favicon")?.remove());
            }
            "firefox" === Fe ? setTimeout(() => n(e), 0) : n(e);
        }
    }
    function Lt(e, t) {
        ((e ??= ""),
            (document.title = nt(e, 80) || kt("New tab")),
            t && pt({ tabtitle: nt(e, 80) }));
    }
    function xt(e, t) {
        if (e.width) {
            const n = `${e.width ?? Ge.pagewidth}px`;
            (document.documentElement.style.setProperty("--page-width", n),
                t && pt({ pagewidth: e.width }));
        }
        if ("number" == typeof e.gap) {
            const n = `${e.gap ?? Ge.pagegap}em`;
            (document.documentElement.style.setProperty("--page-gap", n),
                t && pt({ pagegap: e.gap }));
        }
    }
    function _t(e, t) {
        const n = document.querySelector("aside");
        let o = "light";
        switch (e) {
            case "disable":
                o = "light";
                break;
            case "enable":
                o = "dark";
                break;
            case "system":
                o = globalThis.matchMedia("(prefers-color-scheme: dark)").matches
                    ? "dark"
                    : "light";
                break;
            default: {
                const e = tt(new Date()),
                    { sunrise: t, sunset: n } = Qe();
                o = e <= t || e > n ? "dark" : "light";
            }
        }
        if (((document.documentElement.dataset.theme = o), t))
            return (
                ct.sync.set({ dark: e }),
                n?.classList.add("change-theme"),
                void setTimeout(() => {
                    n?.classList.remove("change-theme");
                }, 333)
            );
        globalThis
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                document.documentElement.dataset.theme = e.matches ? "dark" : "light";
            });
    }
    function St(e, t) {
        const n = e ?? t;
        (document.documentElement.style.setProperty(
            "--text-shadow-alpha",
            (n ?? 0.2)?.toString(),
        ),
            "number" == typeof t && pt({ textShadow: n }));
    }
    var qt = [],
        It = !1;
    function Ct(e) {
        It ? e() : qt.push(e);
    }
    function Rt(e) {
        return {
            Authorization: `Bearer ${e}`,
            Accept: "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        };
    }
    var Ft = {
        ID: kt("Invalid Gist ID in settings."),
        TOKEN: kt("Invalid token."),
        NOGIST: kt("DashX file not found in Gists."),
        NOCONN: kt("Cannot connect to GitHub."),
        JSON: kt("Invalid JSON response from GitHub."),
        OTHER: kt("Unexpected GitHub Gist error."),
        DEFAULT: kt("Tried to send default config."),
    };
    async function Wt(e = "") {
        let t;
        try {
            new URL(e);
        } catch (e) {
            throw new Error(Ut.URL);
        }
        try {
            t = await fetch(e);
        } catch (n) {
            try {
                t = await fetch("https://services.bonjourr.fr/proxy", {
                    method: "POST",
                    body: e,
                });
            } catch (e) {
                throw new Error(Ut.PROXY);
            }
        }
        try {
            return JSON.parse(await t.text());
        } catch (e) {
            throw new Error(Ut.JSON);
        }
    }
    var Ut = {
        URL: kt("Not a valid URL"),
        FAIL: kt("Cannot access resource right now"),
        PROXY: kt("Cannot access resource, even with proxy"),
        JSON: kt("Response is not valid JSON"),
    };
    function Ht(e) {
        let t,
            n,
            o,
            s = 0;
        function i() {
            (t.classList.remove("load", "warn", "valid", "remove"),
                n.removeAttribute("disabled"),
                clearTimeout(s));
        }
        return (
            Ct(() => {
                ((t = document.getElementById(e)),
                    (n = t?.querySelector("button:last-of-type")),
                    (o = t?.querySelector("small")));
                for (const e of t.querySelectorAll("input"))
                    e?.addEventListener("input", () => {
                        const n = e.getAttribute("placeholder") === e.value,
                            o = "" === e.value,
                            s = t.checkValidity();
                        (t.classList.toggle("valid", s),
                            t.classList.toggle("remove", s && (n || o)));
                    });
                t?.addEventListener("input", () => {
                    t.classList.contains("warn") &&
                        (t.classList.remove("warn"), n.removeAttribute("disabled"));
                });
            }),
            {
                load: function () {
                    s = setTimeout(() => {
                        (t.classList.remove("warn"),
                            t.classList.add("valid", "load"),
                            n.setAttribute("disabled", "disabled"));
                    }, 50);
                },
                warn: function (e) {
                    (t.classList.add("warn"),
                        t.classList.remove("load"),
                        n.setAttribute("disabled", ""),
                        (o.textContent = e),
                        clearTimeout(s));
                },
                reset: i,
                accept: function (e, n) {
                    if (e && t.checkValidity()) {
                        t.classList.remove("valid");
                        const o = document.getElementById(e);
                        o && n && o.setAttribute("placeholder", n);
                    }
                    (clearTimeout(s), setTimeout(() => i(), 200));
                },
            }
        );
    }
    function Kt(e) {
        const { min: t, max: n, value: o } = e;
        (e.style.setProperty("--value", o),
            e.style.setProperty("--min", t || "0"),
            e.style.setProperty("--max", n || "100"));
    }
    function Gt(e, t) {
        if (e) {
            (void 0 !== t ? t : "string" == typeof e.getAttribute("disabled"))
                ? e.setAttribute("disabled", "")
                : e.removeAttribute("disabled");
        }
    }
    function Vt(e, t) {
        const n = document.getElementById(e)?.content.cloneNode(!0);
        return n?.querySelector(t);
    }
    function Yt(e, t) {
        let n = e.target;
        ("path" === n.tagName && n.parentElement && (n = n.parentElement),
            "svg" !== n.tagName && n.firstElementChild && (n = n.firstElementChild),
            "svg" !== n.tagName && n.firstElementChild && (n = n.firstElementChild),
            n?.animate(
                t
                    ? [{ transform: "rotate(360deg)" }]
                    : [
                        { transform: "rotate(0deg)" },
                        { transform: "rotate(90deg)" },
                        { transform: "rotate(0deg)" },
                    ],
                { duration: 600, easing: "ease-out" },
            ));
    }
    function Jt() {
        const e = document.getElementById("interface");
        (e.click(),
            (e.style.transition = "opacity .4s"),
            setTimeout(() => {
                e.style.opacity = "0";
            }),
            setTimeout(() => {
                location.reload();
            }, 400));
    }
    function Xt(e) {
        const { range: t, button: n } = (function (e) {
            const t = document.querySelector(`#${e.replace("#", "")}`),
                n = t?.querySelector("input"),
                o = t?.querySelector("button"),
                s = t?.querySelectorAll("span"),
                i = o?.classList?.contains("on");
            return { range: n?.value, button: s?.[i ? 1 : 0].dataset.value };
        })(e);
        return (
            ("dark" === n ? "#000" : "#fff") + Number.parseInt(t ?? "0").toString(16)
        );
    }
    function Zt(e, t) {
        const n = document.getElementById(e),
            o = n?.querySelector("button"),
            s = n?.querySelector("input");
        if (o && s) {
            t ??= s.value;
            const e = (function (e) {
                if (
                    (3 === (e = e.replace(/^#/, "")).length &&
                        (e = e
                            .split("")
                            .map((e) => e + e)
                            .join("")),
                        6 !== e.length)
                )
                    throw new Error("Invalid HEX color.");
                const t = parseInt(e.substring(0, 2), 16) / 255,
                    n = parseInt(e.substring(2, 4), 16) / 255,
                    o = parseInt(e.substring(4, 6), 16) / 255,
                    s = Math.max(t, n, o),
                    i = Math.min(t, n, o),
                    r = s - i;
                let a = 0,
                    c = 0;
                const l = (s + i) / 2;
                if (0 !== r) {
                    switch (((c = r / (1 - Math.abs(2 * l - 1))), s)) {
                        case t:
                            a = (n - o) / r + (n < o ? 6 : 0);
                            break;
                        case n:
                            a = (o - t) / r + 2;
                            break;
                        case o:
                            a = (t - n) / r + 4;
                            break;
                    }
                    a *= 60;
                }
                return {
                    h: Math.round(a),
                    s: Math.round(100 * c),
                    l: Math.round(100 * l),
                };
            })(t);
            ((e.l = Math.max(0, e.l - 10)),
                (o.style.borderColor = `hsl(${e.h}, ${e.s}%, ${e.l}%)`),
                (o.textContent = t),
                (o.style.backgroundColor = t),
                (o.style.color =
                    ((r = t),
                        (i = {
                            r: parseInt(r.slice(1, 3), 16),
                            g: parseInt(r.slice(3, 5), 16),
                            b: parseInt(r.slice(5, 7), 16),
                        }),
                        Math.round((299 * i.r + 587 * i.g + 114 * i.b) / 1e3) < 150
                            ? "white"
                            : "black")));
        }
        var i, r;
    }
    var Qt = Ht("f_gistsync"),
        en = Ht("f_urlsync");
    function tn(e, t) {
        (e &&
            Ct(() => {
                (on(e), setTimeout(() => nn(e.syncType), 200));
            }),
            t &&
            (async function (e) {
                const t = await ct.local.get([
                    "gistId",
                    "gistToken",
                    "distantUrl",
                    "syncType",
                ]),
                    n = await ct.sync.get();
                if (e.down) {
                    if ("gist" === t.syncType) {
                        Qt.load();
                        try {
                            const e = t.gistId ?? "",
                                n = t.gistToken ?? "",
                                o = await (async function (e, t) {
                                    if (!e) throw new Error(Ft.TOKEN);
                                    if (!t) throw new Error(Ft.ID);
                                    const n = await fetch(`https://api.github.com/gists/${t}`, {
                                        headers: Rt(e),
                                    });
                                    if (200 === n.status) {
                                        const e = await n.json(),
                                            t = Object.values(e?.files ?? {})[0]?.content ?? "";
                                        try {
                                            return JSON.parse(t);
                                        } catch (e) {
                                            throw new Error(Ft.JSON);
                                        }
                                    }
                                    throw new Error(Ft.OTHER);
                                })(n, e);
                            (ct.sync.set(o), Jt());
                        } catch (e) {
                            Qt.warn(e);
                        }
                    }
                    if ("url" === t.syncType) {
                        en.load();
                        try {
                            const e = await Wt(t.distantUrl);
                            (ct.sync.set(e), Jt());
                        } catch (e) {
                            en.warn(e);
                        }
                    }
                }
                if (e.up && "gist" === t.syncType) {
                    Qt.load();
                    try {
                        const e = t.gistToken ?? "",
                            o = await (async function (e, t, n) {
                                const o =
                                    "File automatically generated by DashX. Learn more on overview/#sync",
                                    s = {
                                        "DashX-Settings.json": {
                                            content: JSON.stringify(n, void 0, 2),
                                        },
                                    };
                                if (ut(n)) throw new Error(Ft.DEFAULT);
                                if (void 0 === t) {
                                    const t = await fetch("https://api.github.com/gists", {
                                        body: JSON.stringify({
                                            files: s,
                                            description: o,
                                            public: !1,
                                        }),
                                        headers: Rt(e),
                                        method: "POST",
                                    });
                                    if (401 === t.status) throw new Error(Ft.TOKEN);
                                    if (t.status >= 300) throw new Error(Ft.OTHER);
                                    return (await t.json()).id;
                                }
                                if (
                                    !1 ===
                                    (function (e) {
                                        if (!e || e.length > 32) return !1;
                                        for (const t of e) {
                                            const e = t.charCodeAt(0);
                                            if (!((e >= 97 && e <= 102) || (e >= 48 && e <= 57)))
                                                return !1;
                                        }
                                        return !0;
                                    })(t)
                                )
                                    throw new Error(Ft.ID);
                                const i = await fetch(`https://api.github.com/gists/${t}`, {
                                    body: JSON.stringify({ files: s, description: o }),
                                    headers: Rt(e),
                                    method: "PATCH",
                                });
                                if (404 === i.status) throw new Error(Ft.NOGIST);
                                if (401 === i.status) throw new Error(Ft.TOKEN);
                                if (i.status >= 300) throw new Error(Ft.OTHER);
                                return t;
                            })(e, t.gistId, n);
                        (Qt.accept(), (t.gistId = o), ct.local.set({ gistId: o }), on(t));
                    } catch (e) {
                        Qt.warn(e);
                    }
                }
                if ("" === e.gistToken)
                    return (
                        (t.gistToken = ""),
                        (t.gistId = ""),
                        ct.local.remove("gistToken"),
                        ct.local.remove("gistId"),
                        Qt.accept(),
                        void on(t)
                    );
                if ("" === e.url)
                    return (
                        (t.distantUrl = ""),
                        ct.local.remove("distantUrl"),
                        void on(t)
                    );
                if (e.gistToken) {
                    Qt.load();
                    try {
                        ((t.gistToken = e.gistToken),
                            (t.gistId = await (async function (e) {
                                if (!e) throw new Error(Ft.TOKEN);
                                const t = await fetch(
                                    "https://api.github.com/gists?per_page=100",
                                    { headers: Rt(e) },
                                );
                                if (401 === t.status) throw new Error(Ft.TOKEN);
                                if (t.status >= 300) throw new Error(Ft.OTHER);
                                return (await t.json()).filter(
                                    (e) =>
                                        !e.public && e.files["DashX-Settings.json"]?.size > 0,
                                )[0]?.id;
                            })(t.gistToken)),
                            ct.local.set({ gistId: t.gistId }),
                            ct.local.set({ gistToken: t.gistToken }),
                            Qt.accept(),
                            on(t));
                    } catch (e) {
                        Qt.warn(e);
                    }
                }
                if (e.url) {
                    en.load();
                    try {
                        (await Wt(e.url),
                            en.accept("i_urlsync", e.url),
                            (t.distantUrl = e.url),
                            ct.local.set({ distantUrl: e.url }),
                            on(t));
                    } catch (e) {
                        en.warn(e);
                    }
                }
                (function (e = "") {
                    return ["browser", "gist", "url", "off"].includes(e);
                })(e.type) &&
                    ((t.syncType = e.type),
                        ct.local.set({ syncType: t.syncType }),
                        ct.type.change("browser" === e.type ? "sync" : "local", n),
                        on(t),
                        nn(e.type));
                e.firefoxPersist &&
                    ((localStorage.choseStoragePersistence = "true"), on(t));
            })(t));
    }
    async function nn(e) {
        if (!navigator?.storage?.persisted) return;
        const t = await navigator.storage.persisted();
        "off" === e && (t || (await navigator.storage.persist()));
    }
    async function on(e) {
        const t = e?.gistId,
            n = e?.gistToken,
            o = e?.distantUrl,
            s = e?.syncType,
            i = document.querySelector("#i_gistsync"),
            r = document.querySelector("#i_urlsync"),
            a = document.querySelector("#b_gistdown"),
            c = document.querySelector("#b_gistup"),
            l = document.querySelector("#b_urldown");
        (a?.setAttribute("disabled", ""),
            l?.setAttribute("disabled", ""),
            c?.setAttribute("disabled", ""),
            i && n && (i.value = n),
            r && o && (r.value = o));
        const d = "true" === localStorage.choseStoragePersistence;
        switch (
        (document.getElementById("disabled-sync")?.classList.toggle("shown", !d),
            s)
        ) {
            case "off":
            case "browser":
                (document.getElementById("url-sync")?.classList.remove("shown"),
                    document.getElementById("sync-freq")?.classList.remove("shown"),
                    document.getElementById("gist-sync")?.classList.remove("shown"));
                break;
            case "gist":
                (document.getElementById("gist-sync")?.classList.add("shown"),
                    document.getElementById("url-sync")?.classList.remove("shown"),
                    document.getElementById("disabled-sync")?.classList.remove("shown"));
                ((await (async function (e = "") {
                    if (!e) return !1;
                    try {
                        const t = new Date()?.toISOString();
                        return (
                            200 ===
                            (
                                await fetch(`https://api.github.com/gists?since=${t}`, {
                                    headers: Rt(e),
                                })
                            ).status
                        );
                    } catch (e) {
                        return !1;
                    }
                })(n)) &&
                    (a?.removeAttribute("disabled"), c?.removeAttribute("disabled")),
                    (async function (e, t) {
                        const n = document.getElementById("gist-sync-status-wrapper"),
                            o = document.getElementById("gist-sync-status-base");
                        if (!e)
                            return (
                                document.querySelector("#gist-sync-status")?.remove(),
                                (o.textContent = kt("Waiting for authentification")),
                                !1
                            );
                        if (!t)
                            return (
                                document.querySelector("#gist-sync-status")?.remove(),
                                (o.textContent = kt("No saved data yet")),
                                !1
                            );
                        const s = await fetch(`https://api.github.com/gists/${t}`, {
                            headers: Rt(e),
                        });
                        if (200 !== s.status)
                            return (
                                document.querySelector("#gist-sync-status")?.remove(),
                                (o.textContent = kt("No saved data yet")),
                                !1
                            );
                        const i = await s.json(),
                            r = i.updated_at,
                            a = new Date(r).toLocaleString(bt(), {
                                day: "2-digit",
                                month: "2-digit",
                                year: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                            });
                        document.querySelector("#gist-sync-status")?.remove();
                        const c = document.createElement("a");
                        ((c.id = "gist-sync-status"),
                            (c.href = i.html_url),
                            (c.textContent = a),
                            n?.appendChild(c),
                            (o.textContent = kt("Last update")));
                    })(n, t));
                break;
            case "url":
                (document.getElementById("url-sync")?.classList.add("shown"),
                    document.getElementById("gist-sync")?.classList.remove("shown"),
                    document.getElementById("disabled-sync")?.classList.remove("shown"),
                    (await (async function (e = "") {
                        try {
                            return (await Wt(e), !0);
                        } catch (e) {
                            return !1;
                        }
                    })(o)) && l?.removeAttribute("disabled"));
                break;
            default:
        }
    }
    var sn,
        rn = "";
    function an(e, t, n) {
        const o = (function (e) {
            const t = (e) => new Date(e.lastUsed).getTime(),
                n = Object.entries(e),
                o = n
                    .toSorted((e, n) => t(n[1]) - t(e[1]))
                    .filter(([e, t]) => "OK" === t.state),
                s = o.map(([e, t]) => e);
            return s;
        })(t.backgroundUrls);
        if (0 === o.length) return void pi();
        const s = o[0],
            i = e.frequency,
            r = t.backgroundUrls[s],
            a = new Date(r.lastUsed).getTime();
        if (((n ??= et(i, a)), o.length > 1 && n)) {
            o.shift();
            const e = o[Math.floor(Math.random() * o.length)],
                n = new Date().toString();
            return (
                gi(cn(e, t.backgroundUrls[e])),
                (t.backgroundUrls[e].lastUsed = n),
                void ct.local.set(t)
            );
        }
        gi(cn(s, r));
    }
    function cn(e, t) {
        return "video" === t.format
            ? {
                format: "video",
                duration: t.duration ?? 8,
                page: "",
                username: "",
                urls: { full: e, small: e },
            }
            : {
                format: "image",
                page: "",
                username: "",
                urls: { full: e, small: e },
            };
    }
    function ln(e, t) {
        const n = sn.wrapper
            .querySelectorAll(".pce-line")
            .values()
            .find((t) => t.textContent === `${e}\n`),
            o = !n?.textContent?.replace("\n", "") ? "NONE" : t;
        (n?.classList.toggle("loading", "LOADING" === o),
            n?.classList.toggle("error", "NOT_MEDIA" === o),
            n?.classList.toggle("good", "OK" === o),
            n?.classList.toggle("warn", "CANT_REACH" === o || "NOT_URL" === o));
    }
    function dn(e, t) {
        const n = document.querySelector("#b_background-urls");
        e === t ? n?.setAttribute("disabled", "") : n?.removeAttribute("disabled");
    }
    function un(e) {
        const t = sn.value,
            n = {};
        for (const e of t.split("\n"))
            e.startsWith("http") &&
                (n[e] = {
                    lastUsed: new Date().toString(),
                    format: gn(e),
                    state: "NONE",
                });
        ((rn = e.urls = t),
            ct.local.set({ backgroundUrls: n }),
            ct.sync.set({ backgrounds: e }),
            dn("osef", "osef"),
            (async function (e) {
                const t = Object.entries(e);
                for (const [e] of t) ln(e, "LOADING");
                for (const [n, o] of t) {
                    const t = await mn(n);
                    ((o.state = t.state),
                        (o.format = t.format),
                        (o.duration = t.duration),
                        (e[n] = o),
                        ln(n, o.state),
                        ct.local.set({ backgroundUrls: e }));
                }
            })(n));
    }
    async function mn(e) {
        const t = () => i.startsWith("video/") || i.startsWith("image/"),
            n = { format: gn(e), state: "NONE", needsProxy: !1 };
        let o,
            s,
            i = "";
        try {
            s = new URL(e);
        } catch (e) {
            return ((n.state = "NOT_URL"), n);
        }
        try {
            if (
                ((o = await fetch(s)), (i = o.headers.get("content-type") ?? ""), !t())
            )
                return ((n.state = "NOT_MEDIA"), n);
            n.state = "OK";
        } catch (e) {
            try {
                if (
                    ((n.needsProxy = !0),
                        (o = await fetch(
                            `https://services.bonjourr.fr/backgrounds/proxy/${s}`,
                        )),
                        (i = o.headers.get("content-type") ?? ""),
                        !t())
                )
                    return ((n.state = "NOT_MEDIA"), n);
                n.state = "OK";
            } catch (e) {
                return ((n.state = "CANT_REACH"), n);
            }
        }
        if (
            (i.includes("video/") ? (n.format = "video") : (n.format = "image"),
                "video" === n.format)
        ) {
            const t = document.createElement("video");
            if (
                ((n.duration = await new Promise((n, o) => {
                    (setTimeout(() => o(), 5e3),
                        (t.onloadedmetadata = () => n(Math.floor(t.duration))),
                        (t.src = e));
                })),
                    !n.duration)
            )
                return ((n.state = "LOADING"), n);
        }
        return n;
    }
    function gn(e) {
        return (e = e.trimEnd()).endsWith("mp4") || e.endsWith("webm")
            ? "video"
            : "image";
    }
    function fn(e, t) {
        return t ? `${$e}/favicon/blob/${e}?r=${t}` : `${$e}/favicon/blob/${e}`;
    }
    function pn() {
        const e = document.querySelectorAll("li.selected");
        return Object.values(e).map((e) => e.id);
    }
    function hn(e) {
        const t = e
            .composedPath()
            .find((e) => "LI" === e.tagName && e.className?.includes("link"));
        if (t) return t;
    }
    function yn(e) {
        const t = document
            .getElementById("linkblocks")
            ?.className.includes("inline"),
            n = document.getElementById("linkblocks")?.className.includes("text");
        if ((!t && !n) || "" !== e?.title) return nt(e.title ?? "", 64);
        try {
            wn(e)
                ? (e.title = new URL(e.url)?.hostname.replace("www.", ""))
                : (e.title = kt("folder"));
        } catch (e) { }
        return e.title;
    }
    function vn(e, t) {
        const n = t ?? e.linkgroups.selected,
            o = [];
        for (const t of Object.values(e))
            kn(t) && (t?.parent ?? 0) === n && o.push(t);
        return (o.sort((e, t) => e.order - t.order), o);
    }
    function bn(e, t) {
        const n = [];
        for (const o of Object.values(e)) wn(o) && o?.parent === t && n.push(o);
        return (n.sort((e, t) => e.order - t.order), n);
    }
    function kn(e) {
        return (e?._id ?? "").startsWith("links");
    }
    function wn(e) {
        return !0 !== e?.folder;
    }
    function En(e) {
        return !isNaN(parseFloat(e));
    }
    function Ln(e) {
        Ct(() => {
            for (const [t, n] of Object.entries(e))
                document.getElementById(t)?.classList?.toggle("shown", n);
            const t = document.getElementById("settings-notifications"),
                n =
                    document.querySelectorAll("#settings-notifications .param.shown")
                        .length > 0;
            t?.classList?.toggle("shown", n);
        });
    }
    async function xn(...e) {
        switch (Re) {
            case "online":
                return !0;
            case "firefox":
                return await browser.permissions.request({ permissions: [...e] });
            default:
                return chrome.permissions.request({ permissions: [...e] }) ?? !1;
        }
    }
    function _n(e) {
        const t = [];
        return (
            Object.entries(e).map(([e, n]) => {
                11 === e.length && e.startsWith("links") && t.push(n);
            }),
            t
        );
    }
    var Sn = L(x()),
        qn = [];
    async function In() {
        const e = await ct.sync.get();
        for (const e of document.querySelectorAll("#bookmarks-container > *") ?? [])
            e.remove();
        (await Cn(e),
            (function () {
                const e = qn;
                let t = document.querySelector("#bookmarks"),
                    n = document.querySelector("#bookmarks-container");
                if (!t) {
                    ((t = Vt("bookmarks-dialog-template", "dialog")),
                        (n = t.querySelector("#bookmarks-container")));
                    const e = t.querySelector("#bmk_close"),
                        o = t.querySelector("#bmk_apply");
                    (t?.addEventListener("click", jn),
                        (0, Sn.onclickdown)(o, An),
                        (0, Sn.onclickdown)(e, jn),
                        document.body.appendChild(t));
                }
                for (const t of e) {
                    const e = Vt("bookmarks-folder-template", "div"),
                        o = e.querySelector(".b_bookmarks-folder-select"),
                        s = e.querySelector(".b_bookmarks-folder-sync"),
                        i = e.querySelector("ol"),
                        r = e.querySelector(".bookmarks-folder-title-content");
                    if (i && r) {
                        ((r.textContent = t.title),
                            (0, Sn.onclickdown)(o, () => On(e)),
                            (0, Sn.onclickdown)(s, () => Pn(e)),
                            e.classList.toggle("used", t.used),
                            (e.dataset.title = t.title),
                            n?.appendChild(e),
                            "topsites" === t.title &&
                            s &&
                            ((r.textContent = kt("Most visited")),
                                e.classList.add("synced"),
                                s.setAttribute("disabled", ""),
                                s.remove()));
                        for (const e of t.bookmarks) {
                            const t = Vt("bookmarks-item-template", "li"),
                                n = t.querySelector("button"),
                                o = t.querySelector(".bookmark-title"),
                                s = t.querySelector(".bookmark-url"),
                                r = t.querySelector("img");
                            if (!(o && n && s && r && e.url.startsWith("http"))) continue;
                            const a = new URL(e.url);
                            ((r.src = `${$e}/favicon/blob/${a.origin}`),
                                (o.textContent = e.title),
                                (s.textContent = a.href
                                    .replace(a.protocol, "")
                                    .replace("//", "")
                                    .replace("www.", "")
                                    .slice(0, -1)
                                    .replace("/", "")),
                                (0, Sn.onclickdown)(n, () => t.classList.toggle("selected")),
                                (0, Sn.onclickdown)(n, Bn),
                                e.used && n.setAttribute("disabled", ""),
                                (t.id = e.id),
                                i?.appendChild(t));
                        }
                    }
                }
                (document.getElementById("bmk_apply")?.setAttribute("disabled", ""),
                    document.dispatchEvent(new CustomEvent("toggle-settings")),
                    vt(t, bt()),
                    t.showModal(),
                    setTimeout(() => t.classList.add("shown")));
            })());
    }
    async function Cn(e) {
        let t = await $n(),
            n = !!t;
        if (!n)
            try {
                n = await xn("topSites", "bookmarks");
            } catch (e) {
                Ln({ "accept-permissions": !0 });
            }
        n &&
            ((t = await $n()),
                t &&
                (qn = (function (e, t) {
                    function n(e) {
                        if (e.children)
                            for (const t of e.children) {
                                if ((t.children && n(t), !t.url)) continue;
                                s[e.title] ||
                                    (s[e.title] = { title: e.title, used: !1, bookmarks: [] });
                                s[e.title].bookmarks.map((e) => e.url).includes(t.url) ||
                                    s[e.title].bookmarks.push({
                                        id: ot(6),
                                        title: t.title,
                                        url: t.url,
                                        used: o.includes(t.url),
                                        dateAdded: t.dateAdded ?? 0,
                                    });
                            }
                    }
                    const o = _n(t).map((e) => kn(e) && e.url),
                        s = {};
                    n(e);
                    for (const [e, { bookmarks: n }] of Object.entries(s)) {
                        const o = n.every((e) => e.used),
                            i = t.linkgroups.groups.includes(e);
                        (t.linkgroups.synced.includes(e) || (i && o)) && (s[e].used = !0);
                    }
                    return Object.values(s);
                })(t[0], e)));
    }
    function Tn(e) {
        const t = qn.find((t) => t.title === e),
            n = [];
        if (t) for (const e of t.bookmarks) n.push(Uo(e.title, e.url, t.title));
        return n;
    }
    function An() {
        const e = qn,
            t = document.getElementById("bookmarks"),
            n = t.querySelectorAll(".bookmarks-folder li.selected"),
            o = t.querySelectorAll(".bookmarks-folder.selected"),
            s = t.querySelectorAll(".bookmarks-folder.synced"),
            i = Object.values(n).map((e) => e.id),
            r = Object.values(o).map((e) => e.dataset.title),
            a = Object.values(s).map((e) => e.dataset.title),
            c = [],
            l = [];
        for (const t of e) {
            const e = r.includes(t.title),
                n = a.includes(t.title);
            if (
                (e && l.push({ title: t.title, sync: n }), !n || "topsites" === t.title)
            )
                for (const n of t.bookmarks) {
                    const o = i.includes(n.id),
                        s = e ? t.title : void 0,
                        r = n.title,
                        a = n.url;
                    (e || o) && c.push({ title: r, url: a, group: s });
                }
        }
        ct.sync.get("linkgroups").then(({ linkgroups: e }) => {
            const n = document.querySelector("#i_linkgroups"),
                o = [...l, ...e.groups].length > 1;
            (jo(void 0, { groups: o, addLinks: c, addGroups: l }),
                n && (n.checked = o),
                t?.classList.remove("shown"),
                t?.close(),
                jn());
        });
    }
    function Bn() {
        const e = document.getElementById("bmk_apply"),
            t = document.querySelectorAll("#bookmarks li.selected"),
            n = document.querySelectorAll("#bookmarks .bookmarks-folder.selected");
        Gt(e, 0 === t.length && 0 === n.length);
    }
    function jn(e) {
        const t = (e?.composedPath() ?? [])[0]?.id ?? "";
        if (!e || "bookmarks" === t || "bmk_close" === t) {
            const e = document.querySelector("#bookmarks");
            (e?.close(), e?.classList.remove("shown"));
            for (const t of e?.querySelectorAll(".selected") ?? [])
                t.classList.remove("selected");
        }
    }
    function On(e) {
        const t = e.querySelector(".b_bookmarks-folder-select"),
            n = e.querySelector(".b_bookmarks-folder-sync");
        if (t) {
            if (e.classList.contains("selected"))
                (e.classList.remove("selected"),
                    n?.classList.remove("selected"),
                    n?.setAttribute("disabled", ""));
            else {
                e.classList.add("selected");
                for (const t of e.querySelectorAll("li"))
                    t?.classList.remove("selected");
                n?.removeAttribute("disabled");
            }
            Bn();
        }
    }
    function Pn(e) {
        e.classList.contains("synced")
            ? e.classList.remove("synced")
            : e.classList.add("synced");
    }
    async function $n() {
        let e = globalThis.startupBookmarks,
            t = globalThis.startupTopsites;
        if (
            (e || (e = await We?.bookmarks?.getTree()),
                t || (t = await We?.topSites?.get()),
                e && t)
        )
            return (
                "chrome" === Re &&
                e[0].children?.push({
                    id: "",
                    title: "Google Apps",
                    children: [
                        { id: "", title: "Youtube", url: "https://youtube.com" },
                        { id: "", title: "Account", url: "https://myaccount.google.com" },
                        { id: "", title: "Gmail", url: "https://mail.google.com" },
                        { id: "", title: "Meet", url: "https://meet.google.com" },
                        { id: "", title: "Maps", url: "https://maps.google.com" },
                        { id: "", title: "Drive", url: "https://drive.google.com" },
                        { id: "", title: "Photos", url: "https://photos.google.com" },
                        { id: "", title: "Calendar", url: "https://calendar.google.com" },
                        {
                            id: "",
                            title: "Translate",
                            url: "https://translate.google.com",
                        },
                        { id: "", title: "News", url: "https://news.google.com" },
                    ],
                }),
                e[0].children?.unshift({
                    id: "",
                    title: "topsites",
                    children: t.map((e) => ({
                        id: "",
                        title: e.title ?? "",
                        url: e.url,
                        syncing: !1,
                    })),
                }),
                e
            );
    }
    async function zn(e, t) {
        const n = document.createElement("canvas"),
            o = n.getContext("2d"),
            s = new Image();
        if (!o) throw new Error("Cannot get canvas context");
        return (
            await new Promise((i) => {
                ((s.onload = () => {
                    const { size: e, square: r, raw: a } = t;
                    if (a || !e)
                        return (
                            (n.width = s.width),
                            (n.height = s.height),
                            o?.drawImage(s, 0, 0),
                            s.remove(),
                            void i(!0)
                        );
                    const c = s.width > s.height;
                    let l = 0,
                        d = 0,
                        u = s.width,
                        m = s.height,
                        g = e,
                        f = e;
                    (r
                        ? c
                            ? ((l = (s.width - s.height) / 2), (u = m = s.height))
                            : ((d = (s.height - s.width) / 2), (u = m = s.width))
                        : c
                            ? ((f = e), (g = (s.width / s.height) * e))
                            : ((g = e), (f = (s.height / s.width) * e)),
                        (n.width = g),
                        (n.height = f),
                        o.drawImage(s, l, d, u, m, 0, 0, g, f),
                        s.remove(),
                        i(!0));
                }),
                    (s.src = e));
            }),
            n
        );
    }
    async function Nn(e) {
        const t = new Image();
        let n = 4e3,
            o = 3e3;
        return (
            await new Promise((s) => {
                (t.addEventListener("load", function () {
                    ((n = t.width), (o = t.height), t.remove(), s(!0));
                }),
                    (t.src = e));
            }),
            { width: n, height: o }
        );
    }
    async function Mn(e, t) {
        const n = t.type ?? "jpeg",
            o = t.q ?? 0.9;
        "object" == typeof e && (e = URL.createObjectURL(e));
        const s = (await zn(e, t)).getContext("2d");
        return await new Promise((e) => {
            s?.canvas.toBlob(e, `image/${n}`, o);
        });
    }
    async function Dn(e, t) {
        const n = t.type ?? "jpeg",
            o = t.q ?? 1;
        "object" == typeof e && (e = URL.createObjectURL(e));
        return (await zn(e, t)).toDataURL(`image/${n}`, o);
    }
    async function Rn(e) {
        if (!e.type.startsWith("image/"))
            throw new Error("Icon file must be an image");
        const t = e.size < 16e3,
            n = e.type.replace("image/", "");
        if (t) {
            if (n.includes("svg")) {
                const t = await (async function (e) {
                    const t = new FileReader();
                    return await new Promise((n) => {
                        ((t.onload = () => {
                            n(t.result?.toString() ?? "");
                        }),
                            t.readAsText(e));
                    });
                })(e);
                return `data:image/svg+xml;base64,${btoa(t)}`;
            }
            if (n.includes("png"))
                return await Dn(e, { square: !0, type: "png", q: 1 });
        }
        return await Dn(e, {
            type: n.includes("png") ? "png" : "jpeg",
            square: !0,
            size: 144,
            q: 0.8,
        });
    }
    function Fn() {
        let e;
        const t = {};
        return {
            first: (e) => {
                t.first = e;
            },
            finally: (e) => {
                t.finally = e;
            },
            after: (e) => {
                t.after = e;
            },
            cancel: () => clearTimeout(e),
            transition: async (n, ...o) => {
                (t.first && t.first(o),
                    await new Promise((t) => {
                        e = setTimeout(() => t(!0), Math.min(n, 2e3));
                    }),
                    t.after && t.after(o),
                    t.finally && t.finally(o),
                    (t.first = void 0),
                    (t.after = void 0),
                    (t.finally = void 0));
            },
        };
    }
    var Wn = document.getElementById("linkblocks");
    async function Un(e) {
        const t = hn(e);
        let n = !1,
            o = !1,
            s = !1;
        if (e instanceof MouseEvent)
            ((n = 2 === e.button),
                (o = 0 === e.button && (e.ctrlKey || e.metaKey)),
                (s = 1 === e.button));
        else if (e instanceof KeyboardEvent) {
            if ("Enter" !== e.key && " " !== e.key) return;
            (e.preventDefault(), Un(e));
        }
        const i = t?.classList.contains("link-folder"),
            r = Wn.className.includes("select-all");
        if (!t || !i || n || r) return;
        document.dispatchEvent(new Event("stop-select-all"));
        const a = await ct.sync.get();
        o || s
            ? (function (e, t) {
                const n = bn(e, t.id);
                for (const e of n) globalThis.open(e.url, "_blank")?.focus();
                (globalThis.open(globalThis.location.href, "_blank")?.focus(),
                    globalThis.close());
            })(a, t)
            : (function (e, t) {
                if (!t.parentNode) return;
                const n = t.parentNode.parentNode,
                    o = n.querySelector(".link-title"),
                    s = e[t.id],
                    i = Fn();
                function r() {
                    ((n.dataset.folder = t?.id),
                        n.classList.add("hiding"),
                        n.classList.remove("in-folder"));
                }
                function a() {
                    (Oo(e), o && (o.textContent = s?.title || kt("Folder")));
                }
                function c() {
                    n.classList.replace("hiding", "in-folder");
                }
                (i.first(r), i.after(a), i.finally(c), i.transition(40));
            })(a, t);
    }
    async function Hn() {
        if (document.querySelector(".link-group.dropping")) return;
        const e = await ct.sync.get(),
            t = Fn();
        (t.first(function () {
            const e = document.querySelectorAll(".link-group.in-folder");
            for (const t of e) (t.classList.add("hiding"), (t.dataset.folder = ""));
        }),
            t.after(function () {
                (Wn.classList.toggle("with-groups", e.linkgroups.on), Oo(e));
            }),
            t.finally(function () {
                const e = document.querySelectorAll(".link-group");
                for (const t of e)
                    (t.classList.remove("in-folder"), t.classList.remove("hiding"));
            }),
            t.transition(40));
    }
    queueMicrotask(() => {
        document.addEventListener("close-folder", Hn);
    });
    var Kn,
        Gn,
        Vn,
        Yn,
        Jn,
        Xn = new Map(),
        Zn = new Map(),
        Qn = { group: new Map(), link: new Map(), mini: new Map() },
        [eo, to, no, oo, so] = [0, 0, 0, 0, 0, 0],
        io = [""],
        ro = "",
        ao = "",
        co = "",
        lo = "",
        uo = [],
        mo = [],
        go = [],
        fo = 0,
        po = 0,
        ho = document.getElementById("linkblocks");
    function yo(e) {
        const t = e.composedPath(),
            n = t.some((e) => e?.className?.includes("link-title")) ? "mini" : "link",
            o = "mini" === n;
        if (e.button > 0) return;
        if ("pointerdown" === e.type)
            return void (function (e, t) {
                const n =
                    "mini" === t
                        ? (function (e) {
                            const t = e
                                .composedPath()
                                .find((e) => e.className?.includes("link-title"));
                            if (t) return t;
                        })(e)
                        : hn(e);
                if (((no = e.offsetX), (oo = e.offsetY), !n)) return;
                function o(e) {
                    const t = "touch" === e.pointerType ? 7 : 14,
                        s = Math.abs(no - e.offsetX),
                        i = Math.abs(oo - e.offsetY),
                        r = e.type.includes("pointerup") || e.type.includes("touchend"),
                        a = s > t || i > t;
                    ((s > t / 2 || i > t / 2) &&
                        document.dispatchEvent(new Event("stop-select-all")),
                        a && yo(e),
                        (a || r) &&
                        (n?.removeEventListener("pointermove", o),
                            n?.removeEventListener("pointerup", o)));
                }
                (n?.addEventListener("pointermove", o),
                    n?.addEventListener("pointerup", o));
            })(e, n);
        ((uo = []),
            (go = []),
            (mo = []),
            (io = []),
            Xn.clear(),
            Qn.group.clear(),
            Qn.link.clear(),
            Qn.mini.clear(),
            (Jn = t.find((e) => e?.classList?.contains("link-group"))),
            (Yn = document.querySelectorAll("#linkblocks .link-group")),
            (Gn = document.querySelectorAll("#linkblocks li")),
            (Vn = document.querySelectorAll("#link-mini button")),
            (Kn = document.querySelectorAll(o ? "#link-mini" : ".link-group")));
        const s = o ? "BUTTON" : "LI",
            i = t.find((e) => e.tagName === s),
            r = Lo(e);
        ((ao = _o(i)), (ro = _o(o ? i : Jn)), (lo = ro));
        const a = new Map();
        if (o) {
            const e = new Map();
            for (const t of Vn)
                (e.set(t.dataset.group ?? "", t.getBoundingClientRect().x),
                    (t.style.width = "12ch"));
            for (const t of Vn) {
                const n = t.dataset.group ?? "",
                    o = e.get(n) ?? 0,
                    s = t.getBoundingClientRect().x;
                a.set(n, s - o);
            }
        }
        for (const e of [...Yn, ...Vn, ...Gn]) {
            const t = xo(e),
                n = e.getBoundingClientRect(),
                o = _o(e);
            ("group" !== t ? Xn.set(o, e) : Zn.set(o, e),
                Qn[t].set(o, { x: n.x, y: n.y, h: n.height, w: n.width }));
        }
        for (const e of Object.values(Kn)) {
            const t = e.querySelectorAll(s),
                n = (o ? e : e.querySelector(".link-list"))?.getBoundingClientRect();
            if (n) {
                for (const e of t) {
                    const t = xo(e),
                        o = _o(e, t);
                    let {
                        x: s,
                        y: i,
                        w: c,
                        h: l,
                    } = Qn[t].get(o) ?? { x: 0, y: 0, w: 0, h: 0 };
                    ((s -= n?.x),
                        (i -= n?.y),
                        uo.push(o),
                        mo.push(o),
                        go.push({ x: s, y: i, w: c, h: l }),
                        (e.style.transition = "none"),
                        setTimeout(() => e.style.removeProperty("transition"), 10),
                        wo(e, s, i),
                        o === ao &&
                        ((no = r.x - s + (a.get(o) ?? 0)),
                            (oo = r.y - i),
                            (eo = r.x),
                            (to = r.y),
                            e.classList.add("on")));
                }
                (e.style.setProperty("--drag-width", `${Math.floor(n?.width ?? 0)}px`),
                    e.style.setProperty(
                        "--drag-height",
                        `${Math.floor(n?.height ?? 0)}px`,
                    ),
                    e.classList.add("in-drag", "dragging"));
            }
        }
        (document.dispatchEvent(new Event("remove-select-all")),
            (po = globalThis.requestAnimationFrame(Eo)),
            "touch" === e.pointerType
                ? (document.documentElement.addEventListener("touchmove", vo, {
                    passive: !1,
                }),
                    document.documentElement.addEventListener("touchend", ko, {
                        passive: !1,
                    }))
                : (document.documentElement.addEventListener("pointermove", vo),
                    document.documentElement.addEventListener("pointerup", ko),
                    document.documentElement.addEventListener("pointerleave", ko)));
    }
    function vo(e) {
        const { x: t, y: n } = Lo(e);
        ((eo = t - no), (to = n - oo));
        const [o, s, i] = (function ({ x: e, y: t }) {
            const n = (n) => {
                for (const [o, s] of n) {
                    const n = s.x,
                        i = s.x + 0.2 * s.w,
                        r = s.y,
                        a = s.y + s.h,
                        c = e > n && e < i && t > r && t < a,
                        l = s.x + 0.8 * s.w,
                        d = s.x + s.w,
                        u = s.y + 0,
                        m = s.y + s.h,
                        g = e > l && e < d && t > u && t < m,
                        f = s.x + 0.2 * s.w,
                        p = s.x + 0.8 * s.w,
                        h = s.y,
                        y = s.y + s.h;
                    let v = "";
                    if (
                        (c && (v = "left"),
                            g && (v = "right"),
                            e > f && e < p && t > h && t < y && (v = "center"),
                            v)
                    )
                        return { area: v, id: o };
                }
            },
                o = n(Qn.link);
            if (o) return [o.area, o.id, "link"];
            const s = n(Qn.mini);
            if (s) return [s.area, s.id, "mini"];
            const i = n(Qn.group);
            if (i) return [i.area, i.id, "group"];
        })({ x: t, y: n }) ?? ["", ""],
            r = io[io.length - 1],
            a = io[io.length - 2],
            c = o === r && "center" !== o,
            l = lo !== ro;
        if ("group" === i) {
            if (((lo = s), l && bo(s, "group"), lo === ro)) {
                for (const e of Xn.values())
                    e.classList.remove("drop-target", "drop-source");
                for (const e of Zn.values())
                    e.classList.remove("drop-target", "drop-source");
            }
            return;
        }
        if (c || l) return;
        if ("" === o) {
            (io.push(""), clearTimeout(fo));
            for (const e of Xn.values())
                e.classList.remove("drop-target", "drop-source");
            for (const e of Zn.values())
                e.classList.remove("drop-target", "drop-source");
            return;
        }
        const d = "center" === r && ("left" === o || "right" === o),
            u = o !== a,
            m = r === o && "center" === o,
            g = uo[mo.indexOf(s)];
        (m && bo("mini" === i ? s : g, i),
            d &&
            u &&
            (function (e) {
                const t = mo.indexOf(e);
                if (so === t) return;
                (clearTimeout(fo),
                    (so = t),
                    uo.splice(uo.indexOf(ao), 1),
                    uo.splice(t, 0, ao));
                for (let e = 0; e < uo.length; e++)
                    uo[e] !== ao && wo(Xn.get(uo[e]), go[e].x, go[e].y);
            })(s),
            r !== o && io.push(o));
    }
    function bo(e, t) {
        const n = getComputedStyle(ho).getPropertyValue("--drop-delay"),
            o = "group" === t ? 0 : Number.parseInt(n || "120");
        (clearTimeout(fo),
            (fo = setTimeout(() => {
                const n = e === ao,
                    o = Jn?.classList.contains("in-folder");
                if (!n && !o) {
                    if ("mini" === t) {
                        if (
                            (document.querySelector("#link-mini .link-title.selected-group")
                                ?.dataset.group ?? e) === e
                        )
                            return;
                    }
                    co = e;
                    for (const e of Xn.values())
                        e.classList.remove("drop-target", "drop-source");
                    for (const e of Zn.values())
                        e.classList.remove("drop-target", "drop-source");
                    (Xn.get(ao)?.classList.toggle("drop-source", !0),
                        "group" === t
                            ? Zn.get(e)?.classList.toggle("drop-target", !0)
                            : Xn.get(e)?.classList.toggle("drop-target", !0));
                }
            }, o)));
    }
    function ko(e) {
        (e.preventDefault(),
            document.documentElement.removeEventListener("pointermove", vo),
            document.documentElement.removeEventListener("pointerup", ko),
            document.documentElement.removeEventListener("pointerleave", ko),
            document.documentElement.removeEventListener("touchmove", vo),
            document.documentElement.removeEventListener("touchend", ko));
        const t = e.composedPath(),
            n = xo(Xn.get(ao)),
            o = Jn?.dataset.group ?? "",
            s = uo.indexOf(ao),
            i = Xn.get(ao),
            r = go[s],
            a = !!document.querySelector(".drop-source"),
            c =
                !t[0]?.classList.contains("link-list") &&
                Jn?.classList.contains("in-folder"),
            l = co.startsWith("links") && 11 === co.length,
            d = a && l,
            u = a && !l;
        (globalThis.cancelAnimationFrame(po), Xn.get(ao)?.classList.remove("on"));
        for (const e of Kn) e?.classList.replace("dragging", "dropping");
        c || d || u ? Xn.get(ao)?.classList.add("removed") : wo(i, r.x, r.y);
        for (const e of Zn.values())
            e.classList.remove("drop-target", "drop-source");
        setTimeout(() => {
            const e = Xn.get(co)?.classList.contains("link-folder"),
                t = Xn.get(ao)?.classList.contains("link-folder");
            (Ro(
                "mini" === n
                    ? { moveGroups: uo }
                    : d && !e && !t
                        ? { addFolder: { ids: [co, ao], group: o } }
                        : d && e && !t
                            ? { moveToFolder: { source: ao, target: co } }
                            : d && e && t
                                ? { concatFolders: { source: ao, target: co } }
                                : u
                                    ? { moveToGroup: { ids: [ao], target: co } }
                                    : c
                                        ? { moveOutFolder: { ids: [ao], group: o } }
                                        : { moveLinks: uo },
            ),
                setTimeout(() => {
                    for (const e of Kn) {
                        const t = e.querySelectorAll("li, button");
                        for (const e of t) e.removeAttribute("style");
                        (e?.removeAttribute("style"),
                            e?.classList.remove("in-drag", "dropping"));
                    }
                }, 1));
        }, 200);
    }
    function wo(e, t = 0, n = 0) {
        e &&
            (e.style.transform = `translate(${Math.floor(t)}px, ${Math.floor(n)}px)`);
    }
    function Eo() {
        const e = Xn.get(ao);
        e &&
            ((e.style.transform = `translate(${eo}px, ${to}px)`),
                (po = globalThis.requestAnimationFrame(Eo)));
    }
    function Lo(e) {
        switch (e.type) {
            case "touchmove": {
                const t = e.touches[0];
                return { x: t.clientX, y: t.clientY };
            }
            case "pointermove": {
                const { x: t, y: n } = e;
                return { x: t, y: n };
            }
            default:
                return { x: 0, y: 0 };
        }
    }
    function xo(e) {
        if (e?.classList.contains("link")) return "link";
        if (e?.classList.contains("link-title")) return "mini";
        if (e?.classList.contains("link-group")) return "group";
        throw new Error("No valid type found for specified element");
    }
    function _o(e, t) {
        const n = t ?? xo(e);
        if ("link" === n) return e?.id ?? "";
        if ("mini" === n) return e?.dataset.group ?? "";
        if ("group" === n) return e?.dataset.group ?? "";
        throw new Error("No valid type found for specified element");
    }
    var So = ["clock", "links"],
        qo = () => { },
        Io = performance.now();
    function Co(e, t) {
        if (t)
            return (
                t?.font?.family && So.push("fonts"),
                t?.quotes?.on && So.push("quotes"),
                void (t?.pomodoro?.on && So.push("pomodoro"))
            );
        if (!e) return;
        const n = So.indexOf(e);
        if (-1 === n) return;
        if ((So.splice(n, 1), So.length > 0)) return;
        ((Io = (Io = Math.min(performance.now() - Io, 333)) > 33 ? Io : 0),
            document.documentElement.style.setProperty(
                "--load-time-transition",
                `${Io}ms`,
            ),
            document.body.classList.remove("loading"));
        const o = Math.max(333, Io);
        setTimeout(() => qo(), o);
    }
    var To = document.getElementById("linkblocks"),
        Ao = [],
        Bo = 0;
    async function jo(e, t) {
        if (t) return void Ro(t);
        if (!e) return;
        const { sync: n, local: o } = e;
        (To.classList.add(n.linkstyle ?? "large"),
            To.classList.toggle("titles", n.linktitles),
            To.classList.toggle("backgrounds", n.linkbackgrounds),
            To.classList.toggle("hidden", !n.quicklinks),
            n.linkgroups.synced.length > 0 && (await Cn(n)),
            Jo(n, !!e),
            No(n.linksrow, n.linkstyle),
            Oo(n, o));
    }
    function Oo(e, t) {
        const n = Object.values(e).filter((e) => kn(e)),
            { pinned: o, synced: s, selected: i } = e.linkgroups,
            r = [];
        for (const t of [...o, i]) {
            const n = document.querySelector(`.link-group[data-group="${t}"]`),
                o = n?.dataset.folder,
                a = [],
                c = o ? bn(e, o) : vn(e, t);
            r.push({
                lis: a,
                div: n,
                links: c,
                title: t,
                pinned: t !== i,
                synced: s?.includes(t),
            });
        }
        r.reverse();
        const a = r.map((e) => e.div),
            c = r.flatMap((e) => e.lis);
        for (const e of document.querySelectorAll("#linkblocks .link-group")) {
            for (const t of e.querySelectorAll("li"))
                !1 === c.includes(t) && t.remove();
            !1 === a.includes(e) && e.remove();
        }
        for (const t of r) {
            const o = t.div ?? Vt("link-group-template", ".link-group"),
                s = n.filter((e) => !e.folder && "string" == typeof e.parent),
                i = o.querySelector("ul"),
                r = o.querySelector("button"),
                a = document.createDocumentFragment(),
                c = o.dataset.folder;
            if (!i || !r) throw new Error("Template not found");
            t.synced && (t.links = Tn(t.title));
            for (const n of t.links) {
                let o = t.lis.find((e) => e.id === n._id);
                o
                    ? (o.removeAttribute("style"), i?.appendChild(o))
                    : ((o = wn(n)
                        ? $o(n, e.linknewtab, e.linkstyle)
                        : Po(n, s, e.linkstyle)),
                        a.appendChild(o),
                        o.addEventListener("keyup", vs),
                        t.synced ||
                        (o.addEventListener("click", Mo),
                            o.addEventListener("pointerdown", Mo),
                            o.addEventListener("pointerdown", yo)));
            }
            ((r.textContent = c ? e[c].title : t.title),
                (o.dataset.group = t.title),
                o.classList.toggle("pinned", t.pinned),
                o.classList.toggle("synced", t.synced),
                i.appendChild(a),
                To.prepend(o),
                "topsites" === t.title &&
                ((r.textContent = kt("Most visited")),
                    r.classList.add("topsites-title"),
                    o.classList.add("topsites-group")),
                "default" === t.title && (r.textContent = kt("Default group")));
        }
        return (
            t
                ? zo(t)
                : ct.local.get().then((e) => {
                    zo(e);
                }),
            Wo(e.linkiconradius),
            Co("links"),
            !0
        );
    }
    function Po(e, t, n) {
        const o = Vt("link-folder-template", "li"),
            s = o.querySelectorAll("img"),
            i = o.querySelector("span");
        if (!(o && s && i)) throw new Error("Template not found");
        const r = t
            .filter((t) => !t.folder && t.parent === e._id)
            .toSorted((e, t) => e.order - t.order);
        ((o.id = e._id),
            (i.textContent = yn(e)),
            o.addEventListener("mouseup", Un),
            o.addEventListener("keydown", Un));
        for (let e = 0; e < r.length; e++) {
            const t = s[e],
                o = r[e];
            t && wn(o) && "text" !== n && Ao.push([t, Ko(o)]);
        }
        return o;
    }
    function $o(e, t, n) {
        const o = Vt("link-elem-template", "li"),
            s = o.querySelector("span"),
            i = o.querySelector("a"),
            r = o.querySelector("img");
        if (!(o && s && i && r)) throw new Error("Template not found");
        return (
            (o.id = e._id),
            (i.href = nt(e.url, 512)),
            (s.textContent = yn(e)),
            "text" !== n && Ao.push([r, Ko(e)]),
            t && (i.target = "_blank"),
            o
        );
    }
    function zo(e) {
        for (const [t, n] of Ao)
            n.startsWith("link") ? (t.src = e[`x-icon-${n}`] ?? "") : (t.src = n);
        setTimeout(() => {
            const e = Ao.filter(([e]) => !e.complete || 0 === e.naturalWidth);
            for (const [t, n] of e) {
                t.src = "src/assets/interface/loading.svg";
                const e = document.createElement("img");
                (e.addEventListener("load", () => {
                    t.src = n;
                }),
                    e.addEventListener("error", () => {
                        t.src = "https://services.bonjourr.fr/favicon/blob/error";
                    }),
                    (e.src = n),
                    setTimeout(() => {
                        e.complete ||
                            0 !== e.naturalWidth ||
                            (t.src = "https://services.bonjourr.fr/favicon/blob/error");
                    }, 5e3));
            }
            Ao = [];
        }, 400);
    }
    function No(e, t) {
        const n = {
            large: { width: 4.8, gap: 2.3 },
            medium: { width: 3.5, gap: 2 },
            small: { width: 2.5, gap: 2 },
            inline: { width: 11, gap: 2 },
            text: { width: 5, gap: 2 },
        };
        if (t in n) {
            const { width: o, gap: s } = n[t];
            document.documentElement.style.setProperty(
                "--links-width",
                `${Math.ceil((o + s) * e)}em`,
            );
        }
    }
    function Mo(e) {
        clearTimeout(Bo);
        const t = To.className.includes("select-all"),
            n = !e.button || 0 === e.button,
            o = e.type.includes("pointerup") || e.type.includes("click"),
            s = hn(e);
        if (t && o)
            return (n && s?.classList.toggle("selected"), void e.preventDefault());
        if (!t && n && "pointerdown" === e.type) {
            if ("touch" === e?.pointerType) return;
            Bo = setTimeout(() => {
                To.classList.add("select-all");
            }, 600);
        }
    }
    function Do() {
        (clearTimeout(Bo), To.classList.remove("select-all"));
        for (const e of To.querySelectorAll(".link"))
            e.classList.remove("selected");
    }
    async function Ro(e) {
        let t = await ct.sync.get();
        (e.addLinks && (t = Fo({ type: "link", links: e.addLinks }, t)),
            e.addFolder && (t = Fo({ type: "folder", ...e.addFolder }, t)),
            e.addGroups &&
            (t = (function (e, t) {
                for (const { title: n, sync: o } of e) {
                    const e = "default" === n || "+" === n,
                        s = t.linkgroups.groups.includes(n);
                    if (e || s) return t;
                    for (const e of vn(t, "+")) t[e._id] = { ...e, parent: n };
                    ((t.linkgroups.selected = n),
                        t.linkgroups.groups.push(n),
                        o && t.linkgroups.synced.push(n));
                }
                return (Jo(t), Oo(t), t);
            })(e.addGroups, t)),
            e.moveLinks &&
            (t = (function (e, t) {
                return (
                    e.forEach((e, n) => {
                        t[e].order = n;
                    }),
                    Oo(t),
                    t
                );
            })(e.moveLinks, t)),
            e.moveGroups &&
            (t = (function (e, t) {
                const n = e.filter((e) => "+" !== e);
                return (
                    (t.linkgroups.groups = t.linkgroups.pinned.concat(n)),
                    Jo(t),
                    t
                );
            })(e.moveGroups, t)),
            e.moveToGroup &&
            (t = (function ({ ids: e, target: t }, n) {
                for (const o of e) ((n[o].parent = t), (n[o].order = Date.now()));
                const o = Ho(n);
                return (Oo(o), o);
            })(e.moveToGroup, t)),
            e.moveToFolder &&
            (t = (function ({ target: e, source: t }, n) {
                const o = "string" == typeof n[t]?.url,
                    s = !0 === n[e]?.folder;
                o && s && ((n[t].parent = e), (n[t].order = Date.now()), Oo(n));
                return n;
            })(e.moveToFolder, t)),
            e.concatFolders &&
            (t = (function ({ target: e, source: t }, n) {
                const o = n[e],
                    s = n[t];
                if (!o.folder || !s.folder) return n;
                const i = bn(n, t).map(({ _id: e }) => e),
                    r = [...bn(n, e).map(({ _id: e }) => e), ...i];
                for (const [t, o] of Object.entries(n))
                    !1 !== kn(o) &&
                        r.includes(o._id) &&
                        !o.folder &&
                        ((n[t].parent = e), (n[t].order = Date.now()));
                return (delete n[t], Oo(n), setTimeout(() => ct.sync.remove(t)), n);
            })(e.concatFolders, t)),
            e.moveOutFolder &&
            (t = (function ({ ids: e, group: t }, n) {
                const o = vn(n, t),
                    s = o.length > 0 ? Math.max(...o.map((e) => e.order)) : -1;
                e.forEach((e, o) => {
                    ((n[e].parent = t), (n[e].order = s + o + 1));
                });
                const i = Ho(n);
                return (Oo(i), i);
            })(e.moveOutFolder, t)),
            e.updateLink &&
            (t = (function ({ id: e, title: t, icon: n, url: o, file: s }, i) {
                const r = document.querySelector(`#${e} span`),
                    a = document.querySelector(`#${e} img`),
                    c = document.querySelector(`#${e} a`),
                    l = i[e];
                r &&
                    void 0 !== t &&
                    ((l.title = nt(t, 64)), (r.textContent = l.title));
                if (wn(l)) {
                    if (a && n) {
                        const t = document.createElement("img"),
                            o = a.src;
                        let i = fn(l.url);
                        if (
                            ((a.src = "src/assets/interface/loading.svg"),
                                (t.onload = () => {
                                    a.src = t.src;
                                }),
                                "auto" === n.type && ((n.value = void 0), (t.src = i)),
                                "url" === n.type &&
                                n.value &&
                                nt(n.value, 7500) &&
                                ((i = n.value), (t.src = i)),
                                "file" === n.type)
                        ) {
                            const r = l.icon,
                                a = !s && !r?.value,
                                c = !s && "file" === r?.type && !!r?.value;
                            if (a) throw new Error("Chose file but no file uploaded");
                            (c && ((n = r), (t.src = o)),
                                s &&
                                ((i = e),
                                    (async function (e, t) {
                                        const n = await Rn(t);
                                        return (ct.local.set({ [`x-icon-${e}`]: n }), n);
                                    })(e, s).then((e) => {
                                        t.src = e;
                                    })));
                        }
                        l.icon = n;
                    }
                    r &&
                        c &&
                        void 0 !== o &&
                        ((l.url = nt(o, 512)), (c.href = l.url), (r.textContent = yn(l)));
                }
                return ((i[e] = l), i);
            })(e.updateLink, t)),
            e.deleteLinks &&
            (t = (function (e, t) {
                for (const n of e) {
                    const e = t[n];
                    if (e.folder) for (const n of bn(t, e._id)) delete t[n._id];
                    (wn(e) && "file" === e.icon?.type && ct.local.remove(`x-icon-${n}`),
                        delete t[n]);
                }
                ct.sync.clear();
                const n = Ho(t);
                return (
                    (function (e) {
                        for (const t of e)
                            (document.getElementById(t)?.classList.add("removed"),
                                setTimeout(() => document.getElementById(t)?.remove(), 600));
                    })(e),
                    n
                );
            })(e.deleteLinks, t)),
            e.groupTitle && (t = Zo(e.groupTitle, t)),
            void 0 !== e.deleteGroup &&
            (t = (function (e, t) {
                const { groups: n, pinned: o, synced: s, selected: i } = t.linkgroups,
                    r = -1 === n.indexOf(e);
                if (1 === n.length || r) return t;
                for (const n of vn(t, e)) delete t[n._id];
                ((t.linkgroups.selected = e === i || o.includes(e) ? n[0] : i),
                    (t.linkgroups.pinned = o.filter((t) => t !== e)),
                    (t.linkgroups.synced = s.filter((t) => t !== e)),
                    (t.linkgroups.groups = n.filter((t) => t !== e)),
                    2 === n.length && (t.linkgroups.pinned = []));
                return (ct.sync.clear(), Oo(t), Jo(t), t);
            })(e.deleteGroup, t)),
            void 0 !== e.groups &&
            (t = (function (e, t) {
                return (
                    Yo?.classList.toggle("with-groups", e),
                    (t.linkgroups.on = e),
                    t
                );
            })(e.groups, t)),
            void 0 !== e.newtab &&
            (t = (function (e, t) {
                const n = document.querySelectorAll(".link a");
                for (const t of n)
                    e
                        ? t.setAttribute("target", "_blank")
                        : t.removeAttribute("target");
                return ((t.linknewtab = e), t);
            })(e.newtab, t)),
            e.refreshIcons &&
            (t = (function (e, t) {
                for (const n of e) {
                    const e = t[n];
                    if (e._id) {
                        const o = Date.now().toString();
                        (e.icon && "auto" !== e.icon.type
                            ? "url" === e.icon.type &&
                            (e.icon.value = `${e.icon.value}?r=${o}`)
                            : ((e.icon = e.icon ?? { type: "auto", value: "" }),
                                (e.icon.value = fn(e.url) + `?r=${o}`)),
                            (t[n] = e));
                    }
                }
                return (Oo(t), t);
            })(e.refreshIcons, t)),
            e.styles &&
            (async function (e) {
                const t = await ct.sync.get(),
                    n = e.style ?? "large",
                    { titles: o } = e,
                    { backgrounds: s } = e;
                if (e.style && Go(n)) {
                    const e = To?.className.includes("text");
                    if (
                        (To.classList.remove(
                            "large",
                            "medium",
                            "small",
                            "inline",
                            "text",
                        ),
                            To.classList.add(n),
                            (t.linkstyle = n),
                            ct.sync.set({ linkstyle: n }),
                            e)
                    )
                        for (const e of document.querySelectorAll("#link-list li") ?? [])
                            e.remove();
                    (No(t.linksrow, n), Oo(t));
                }
                "boolean" == typeof o &&
                    ((t.linktitles = o),
                        ct.sync.set({ linktitles: o }),
                        document.getElementById("b_showtitles")?.classList?.toggle("on", o),
                        To.classList.toggle("titles", o));
                "boolean" == typeof s &&
                    ((t.linkbackgrounds = s),
                        ct.sync.set({ linkbackgrounds: s }),
                        document
                            .getElementById("b_showbackgrounds")
                            ?.classList?.toggle("on", s),
                        To.classList.toggle("backgrounds", s));
            })(e.styles),
            e.row &&
            (function (e) {
                const t = [...To.classList].filter(Go)[0] ?? "large";
                (No(Number.parseInt(e ?? "6"), t), pt({ linksrow: e }));
            })(e.row),
            e.iconradius && (pt({ linkiconradius: e.iconradius }), Wo(e.iconradius)),
            e.styles || e.row || ct.sync.set(t));
    }
    function Fo(e, t) {
        const n = e.type;
        let o = [];
        if ("link" === n)
            for (const n of e.links)
                o.push(Uo(n.title, n.url, n.group || t.linkgroups.selected));
        if ("folder" === n) {
            const { ids: n, title: s, group: i } = e;
            o = (function (e, t, n) {
                const o = document.getElementById("e-title"),
                    s = t ?? o.value;
                o.value = "";
                const i = [...document.querySelectorAll(".link")],
                    r = i.map((e) => e.id).indexOf(e[0]);
                for (let t = 0; t < e.length; t++) {
                    const n = document
                        .getElementById(e[t])
                        ?.classList.contains("link-folder");
                    n && e.splice(t, 1);
                }
                return [
                    {
                        _id: `links${ot(6)}`,
                        folder: !0,
                        order: r,
                        parent: n ?? "",
                        title: s,
                    },
                ];
            })(n, s, i);
            for (const e of n) {
                const n = t[e];
                n && !n.folder && (n.parent = o[0]._id);
            }
        }
        for (const e of o) {
            const n = void 0 === e.parent,
                { selected: o, synced: s } = t.linkgroups;
            (n && s.includes(o)
                ? ((e.parent = ""), (t.linkgroups.selected = ""), Jo(t))
                : n && (e.parent = o),
                (t[e._id] = e));
        }
        const s = Ho(t);
        return (
            ct.local.get().then((e) => {
                Oo(s, e);
            }),
            s
        );
    }
    function Wo(e) {
        document.documentElement.style.setProperty("--link-outer-radius", `${e}em`);
    }
    function Uo(e, t, n) {
        const o = (e) => e.some((e) => t.startsWith(e)),
            s = nt(t, 512),
            i = o(["about:", "chrome://", "edge://"]),
            r = !o(["https://", "http://"]),
            a = t.startsWith("localhost") || t.startsWith("127.0.0.1"),
            c = i ? "#" : a ? "http://" : r ? "https://" : "";
        return {
            _id: `links${ot(6)}`,
            parent: n,
            order: Date.now(),
            title: nt(e, 64),
            url: c + s,
        };
    }
    function Ho(e) {
        const t = Object.values(e)
            .filter((e) => kn(e))
            .filter((e) => e.folder)
            .map(({ _id: e }) => e);
        for (const n of t) {
            const t = bn(e, n);
            for (const [n, o] of t.entries()) ((o.order = n), e[o._id]);
        }
        for (const t of e.linkgroups.groups) {
            const n = vn(e, t);
            for (const [t, o] of n.entries()) ((o.order = t), e[o._id]);
        }
        return e;
    }
    function Ko(e) {
        return e.icon?.value
            ? "file" === e.icon.type
                ? e._id
                : e.icon.value
            : fn(e.url);
    }
    function Go(e) {
        return ["large", "medium", "small", "inline", "text"].includes(e);
    }
    queueMicrotask(() => {
        (document.addEventListener("stop-select-all", () => clearTimeout(Bo)),
            document.addEventListener("remove-select-all", Do));
    });
    var Vo,
        Yo = document.getElementById("linkblocks");
    function Jo(e, t) {
        if (!t)
            for (const e of document.querySelectorAll("#link-mini button") ?? [])
                e.remove();
        (!(function (e) {
            const { groups: t, pinned: n, synced: o, selected: s } = e;
            for (const e of [...t, "+"]) {
                const t = document.createElement("button"),
                    i = "topsites" === e,
                    r = "default" === e,
                    a = "+" === e;
                n.includes(e) ||
                    ((t.textContent = e),
                        (t.dataset.group = e),
                        t.classList.add("link-title"),
                        t.classList.toggle("selected-group", e === s),
                        t.classList.toggle("synced", o.includes(e)),
                        i &&
                        ((t.textContent = kt("Most visited")),
                            t.classList.add("topsites-title")),
                        r && (t.textContent = kt("Default group")),
                        a
                            ? (t.classList.add("add-group"), t.addEventListener("click", vs))
                            : (t.addEventListener("click", Xo),
                                t.addEventListener("pointerdown", yo)),
                        document.querySelector("#link-mini div")?.appendChild(t));
            }
            Yo?.classList.toggle("with-groups", e.on);
        })(e.linkgroups),
            document.querySelector("#link-mini")?.addEventListener(
                "wheel",
                (e) => {
                    (Xo(e), e.preventDefault());
                },
                { passive: !1 },
            ));
    }
    function Xo(e) {
        let t;
        if ("wheel" === e.type) {
            const n = Array.from(
                document.querySelectorAll(".link-title:not(.add-group)[data-group]"),
            ),
                o = n.findIndex((e) => e.classList.contains("selected-group"));
            t = n[(o + (e.deltaY > 0 ? 1 : -1) + n.length) % n.length];
        } else t = e.currentTarget;
        const n = Fn();
        Yo.dataset.folderid ||
            t.classList.contains("selected-group") ||
            (n.first(function () {
                (Yo.classList.remove("in-folder"), Yo.classList.add("hiding"));
            }),
                n.after(async function () {
                    const e = document.querySelectorAll("#link-mini button"),
                        n = await ct.sync.get(),
                        o = t.dataset.group ?? n.linkgroups.groups[0];
                    for (const t of e ?? []) t.classList.remove("selected-group");
                    (t.classList.add("selected-group"),
                        (n.linkgroups.selected = o),
                        ct.sync.set(n),
                        Oo(n));
                }),
                n.finally(function () {
                    Yo.classList.remove("hiding");
                }),
                n.transition(100));
    }
    function Zo(e, t) {
        const n = t.linkgroups.groups.indexOf(e.old);
        for (const n of vn(t, e.old)) t[n._id] = { ...n, parent: e.new };
        return (
            (t.linkgroups.groups[n] = e.new),
            (t.linkgroups.selected = e.new),
            Jo(t),
            t
        );
    }
    async function Qo(e, t) {
        const n = await ct.sync.get(),
            { groups: o, pinned: s } = n.linkgroups;
        if (
            ("pin" === t && n.linkgroups.pinned.push(e),
                "unpin" === t && (n.linkgroups.pinned = s.filter((t) => t !== e)),
                e === n.linkgroups.selected)
        ) {
            const e = o.filter((e) => !1 === s.includes(e));
            n.linkgroups.selected = e[0];
        }
        (ct.sync.set(n), Oo(n), Jo(n));
    }
    var es,
        ts,
        ns,
        os = document.getElementById("e-title"),
        ss = document.getElementById("e-url"),
        is = document.getElementById("e-icon-file-label"),
        rs = document.getElementById("e-icon-file"),
        as = document.getElementById("e-icon-type"),
        cs = document.getElementById("e-icon-url");
    async function ls(e, t, n) {
        Vo = t;
        const o = (function (e) {
            if (!e) return [];
            const t = [];
            let n = e;
            for (; n;) (t.push(n), (n = n.parentElement));
            return t;
        })(e.target),
            s = o.map((e) => e.className ?? ""),
            i = o.find((e) => e?.className?.includes("link") && "LI" === e?.tagName),
            r = o.find((e) => e?.className?.includes("link-group")),
            a = o.find((e) => e?.className?.includes("link-title")),
            c = {
                mini: o.some((e) => e?.id?.includes("link-mini")),
                group:
                    n ??
                    s.some((e) => e.includes("link-group") && !e.includes("in-folder")),
                folder: s.some(
                    (e) => e.includes("link-group") && e.includes("in-folder"),
                ),
            },
            l = {
                link: s.some((e) => e.includes("link-elem")),
                folder: s.some((e) => e.includes("link-folder")),
                title: s.some((e) => e.includes("link-title")),
                synced: s.some((e) => e.includes("synced")),
                addgroup: s.some((e) => e.includes("add-group")),
            },
            d = s.some((e) => e.includes("select-all")),
            u = s.some((e) => e.includes("dragging") || e.includes("dropping")),
            m = (c.mini ? a : r)?.dataset.group ?? "",
            g = document.querySelector(".link-group.in-folder");
        ns = {
            group: m,
            folder: g?.dataset?.folder ?? "",
            selectall: d,
            container: c,
            dragging: u,
            target: l,
            selected: pn(),
        };
        const f = (function () {
            const e = document.querySelector("#edit-delete span"),
                t = document.querySelector("#edit-add span"),
                { container: n, target: o, selectall: s } = ns;
            let i = [];
            ((es = os),
                ds("edit-apply"),
                document.querySelector("#edit-delete")?.removeAttribute("disabled"),
                document.querySelector("#edit-pin")?.removeAttribute("disabled"),
                (ss.value = ""),
                (cs.value = ""),
                (os.value = ""),
                n.mini &&
                (o.synced
                    ? (i = ["pin", "delete"])
                    : o.addgroup
                        ? ((i = ["title*", "add"]), ds("edit-add"))
                        : o.title && (i = ["title", "delete", "pin", "apply"])));
            n.group &&
                (o.synced && !o.title
                    ? (i = ["synced"])
                    : o.synced && o.title
                        ? (i = ["unpin", "delete"])
                        : s
                            ? ((i = ["delete", "refresh", "add"]), ds("edit-add"))
                            : o.title
                                ? (i = ["title", "delete", "unpin", "apply"])
                                : o.folder
                                    ? (i = ["title", "delete", "apply"])
                                    : o.link
                                        ? (i = [
                                            "title",
                                            "url*",
                                            "icon",
                                            "icon-url*",
                                            "delete",
                                            "refresh",
                                            "apply",
                                        ])
                                        : ((i = ["title", "url*", "add"]),
                                            (es = ss),
                                            ds("edit-add")));
            n.folder &&
                (o.title
                    ? (i = [])
                    : s
                        ? (i = ["delete", "unfolder"])
                        : o.link
                            ? (i = [
                                "title",
                                "url*",
                                "icon",
                                "icon-url*",
                                "delete",
                                "apply",
                                "unfolder",
                            ])
                            : ((i = ["title", "url*", "add"]), (es = ss), ds("edit-add")));
            for (const e of i) {
                const t = e.endsWith("*"),
                    n = t ? e.slice(0, -1) : e;
                (Vo.querySelector(`#edit-${n}`)?.classList.add("on"),
                    t && (Vo.querySelector(`#e-${n}`).required = !0));
            }
            const r =
                i.includes("title") ||
                i.includes("title*") ||
                i.includes("url*") ||
                i.includes("icon");
            (Vo.querySelector("hr")?.classList.toggle("on", r),
                e &&
                (s
                    ? (e.textContent = kt("Delete selected"))
                    : o.folder
                        ? (e.textContent = kt("Delete folder"))
                        : o.link
                            ? (e.textContent = kt("Delete link"))
                            : o.title && (e.textContent = kt("Delete group"))));
            t &&
                (s
                    ? (t.textContent = kt("Create new folder"))
                    : o.title
                        ? (t.textContent = kt("Add new group"))
                        : (t.textContent = kt("Add new link")));
            return i;
        })(),
            p = c.folder && l.title,
            h = d && 0 === ns.selected.length;
        if (0 === f.length || p || h || u) return void Ls();
        (document.dispatchEvent(new Event("stop-select-all")),
            e.preventDefault(),
            Vo.querySelectorAll(
                "#contextActions button, #background-actions",
            ).forEach(function (e) {
                e.classList.remove("on");
            }));
        const y = await ct.sync.get();
        if (l.title) {
            const { groups: e, pinned: t } = y.linkgroups,
                n = ns.target.addgroup ? "" : ns.group;
            ((Vo.dataset.group = n), (os.value = n));
            const o = e.length - t.length < 2,
                s = e.length < 2;
            (o && document.getElementById("edit-pin")?.setAttribute("disabled", ""),
                s &&
                document.getElementById("edit-delete")?.setAttribute("disabled", ""));
        }
        if (l.folder || l.link) {
            const e = o.filter((e) => "LI" === e.tagName)[0]?.id,
                t = (function (e, t) {
                    const n = e[t];
                    if (kn(n)) return n;
                })(y, e);
            if (((os.value = t?.title ?? ""), t && !t.folder)) {
                ss.value = t.url ?? "";
                const e = t.icon?.type ?? "auto",
                    n = t.icon?.value ?? "";
                ((cs.value = ""),
                    (is.textContent = kt("No file chosen")),
                    "url" === e && n && (cs.value = n),
                    "file" === e && (is.textContent = n),
                    us(t.icon ? t.icon.type : "auto"));
            }
        }
        if (!d) {
            for (const e of document.querySelectorAll(
                ".link-title.selected, .link.selected",
            ) ?? [])
                e.classList.remove("selected");
            (l.title ? a : i)?.classList.add("selected");
        }
        ((ns.selected = pn()), n || ks(e), es?.focus());
    }
    function ds(e) {
        ts
            ? (ts = document.getElementById(e))
            : ((ts = document.getElementById(e ?? "edit-apply")),
                document
                    .getElementById("editlink-form")
                    ?.addEventListener("keydown", function (e) {
                        "Enter" === e.key && (e.preventDefault(), ts.click());
                    }));
    }
    function us(e) {
        if (e instanceof Event) {
            e = e.target.value;
        }
        const t = document.getElementById("e-icon-type");
        t && (t.value = e);
        const n = document.getElementById("e-icon-url");
        n && (n.disabled = "url" !== e);
        const o = document.getElementById("edit-refresh");
        if (o) {
            const t = ["auto", "url"].includes(e);
            ((o.disabled = !t), o?.classList.toggle("on", t));
        }
        (document
            .getElementById("edit-icon-url")
            ?.classList.toggle("on", "url" === e),
            document
                .getElementById("edit-icon-svg")
                ?.classList.toggle("on", "svg" === e),
            document
                .getElementById("edit-icon-file")
                ?.classList.toggle("on", "file" === e));
    }
    function ms(e) {
        const t = e.submitter?.id,
            {
                container: n,
                target: o,
                group: s,
                folder: i,
                selected: r,
                selectall: a,
            } = ns;
        ("edit-apply" === t &&
            (function (e) {
                const t = ns.selected[0],
                    n = document.querySelector(`#${t}`);
                document.querySelectorAll("#editlink input");
                if (ns.target.addgroup)
                    return (jo(void 0, { addGroups: [{ title: os.value }] }), void Ls());
                if (ns.target.title)
                    return (
                        jo(void 0, {
                            groupTitle: { old: Vo.dataset.group ?? "", new: os.value },
                        }),
                        void Ls()
                    );
                if (ns.container.folder && 0 === ns.selected.length && ss.value)
                    return (
                        jo(void 0, {
                            addLinks: [{ group: ns.folder, title: os.value, url: ss.value }],
                        }),
                        void Ls()
                    );
                if (ns.container.group && !ns.target.link && !ns.target.folder)
                    return (
                        jo(void 0, {
                            addLinks: [{ group: ns.group, title: os.value, url: ss.value }],
                        }),
                        void Ls()
                    );
                if (!t || !n) return;
                let o,
                    s = "auto";
                const i = cs.value,
                    r = rs.files?.[0];
                ((a = as.value),
                    ["auto", "library", "file", "url"].includes(a) &&
                    ((s = as.value),
                        (o = void 0),
                        "url" === s && (o = i),
                        "file" === s && r && (o = r.name),
                        "file" !== s || r || ((s = "file"), (o = void 0))));
                var a;
                (jo(void 0, {
                    updateLink: {
                        id: t,
                        title: document.querySelector("#e-title")?.value ?? "",
                        url: document.querySelector("#e-url")?.value,
                        icon: { type: s, value: o },
                        file: r,
                    },
                }),
                    Ls());
            })(),
            "edit-icon" === t && us(e),
            "edit-refresh" === t && jo(void 0, { refreshIcons: r }),
            "edit-delete" === t &&
            (o.title
                ? jo(void 0, { deleteGroup: s })
                : jo(void 0, { deleteLinks: r })),
            "edit-add" === t &&
            (n.folder
                ? jo(void 0, {
                    addLinks: [{ group: i, title: os.value, url: ss.value }],
                })
                : o.title && os.value
                    ? jo(void 0, { addGroups: [{ title: os.value }] })
                    : a
                        ? (document.dispatchEvent(new Event("remove-select-all")),
                            jo(void 0, { addFolder: { ids: r, group: s } }))
                        : n.group &&
                        jo(void 0, {
                            addLinks: [{ group: s, title: os.value, url: ss.value }],
                        })),
            "edit-unfolder" === t &&
            (document.dispatchEvent(new Event("remove-select-all")),
                jo(void 0, { moveOutFolder: { ids: ns.selected, group: ns.group } })),
            "edit-pin" === t && Qo(s, "pin"),
            "edit-unpin" === t && Qo(s, "unpin"),
            e.preventDefault(),
            setTimeout(Ls));
    }
    queueMicrotask(() => {
        (document.getElementById("editlink-form")?.addEventListener("submit", ms),
            as?.addEventListener("change", us));
    });
    var gs,
        fs = L(x()),
        ps = {
            time: { section: "#time", scrollto: "time_title" },
            main: { section: "#main", scrollto: "main_title" },
            quotes: { section: "#quotes_container", scrollto: "quotes_title" },
            pomodoro: { section: "#pomodoro_container", scrollto: "pomodoro_title" },
        },
        hs = document.getElementById("interface"),
        ys = document.getElementById("contextmenu");
    function vs(e) {
        const t = globalThis.getSelection();
        if (t && !t.isCollapsed) return;
        const n = e.target;
        gs = {
            widgets: {
                link: !!n.closest("#linkblocks"),
                time: !!n.closest(ps.time.section),
                main: !!n.closest(ps.main.section),
                quotes: !!n.closest(ps.quotes.section),
                pomodoro: !!n.closest(ps.pomodoro.section),
            },
            interface: n.matches("main#interface"),
        };
        const o = e,
            s = 2 === o.button && !!o.ctrlKey && "contextmenu" === e.type,
            i = "keyup" === e.type && "KeyE" !== e.code,
            r = Object.values(gs.widgets).some((e) => e);
        if (!((!(s || i) && r) || gs.interface)) return;
        for (const e of ys.querySelectorAll(
            "label, button, hr, #background-actions, input, #pomodoro-info",
        ))
            (e.classList.remove("on"),
                e instanceof HTMLInputElement && (e.required = !1));
        e.preventDefault();
        const a = Fn();
        if (
            (a.first(() => ys?.show()),
                a.after(() => ys?.classList?.add("shown")),
                a.transition(10),
                gs.widgets.link)
        )
            ls(e, ys);
        else if ((gs.widgets.pomodoro && Es("#pomodoro-info"), r)) {
            const t = Object.entries(gs.widgets).filter(([e, t]) => t);
            for (const [e] of t) {
                bs("openTheseSettings", ps[e].scrollto);
            }
            ks(e);
        } else
            gs.interface &&
                (bs("openTheseSettings", "background_title"),
                    document.querySelector("#linkblocks.hidden") || bs("add-new-link"),
                    Es("#background-actions"),
                    ks(e));
    }
    function bs(e, t) {
        let n = `[data-action="${e}"]`;
        (t && (n += `[data-attribute="${t}"]`), Es(n));
    }
    function ks(e) {
        const t = ys.getBoundingClientRect(),
            n =
                "contextmenu" === e.type ||
                "click" === e.type ||
                "touchstart" === e.type,
            o = "keyup" === e.type && "e" === e?.key,
            { innerHeight: s, innerWidth: i } = window,
            r = i < 600,
            a = document.documentElement.lang,
            c = "ar" === a || "fa" === a || "he" === a;
        let l = 0,
            d = 0;
        if (n && r)
            ((l = (i - t.width) / 2),
                (d =
                    ("touchstart" === e.type ? e.touches[0].clientY : e.y) -
                    60 -
                    t.height));
        else if (n)
            ((l = "touchstart" === e.type ? e.touches[0].clientX : e.x),
                (d = "touchstart" === e.type ? e.touches[0].clientY : e.y));
        else if (o) {
            const t = e.target.getBoundingClientRect();
            ((l = t.right), (d = t.bottom + 4));
        }
        const u = t.width,
            m = t.height;
        (l + u > i && (l -= l + u - i),
            d + m > s && (d -= m),
            c && (l *= -1),
            (ys.style.transform = `translate(${Math.floor(l)}px, ${Math.floor(d)}px)`));
    }
    function ws(e) {
        const t = e.target.getAttribute("data-attribute");
        t &&
            (document.dispatchEvent(
                new CustomEvent("toggle-settings", { detail: { scrollTo: `#${t}` } }),
            ),
                Ls());
    }
    function Es(e) {
        document.querySelectorAll(e).forEach((e) => {
            e.classList.add("on");
        });
    }
    function Ls() {
        if (ys.open) {
            const e = document.querySelectorAll(
                ".link-title.selected, .link.selected",
            );
            for (const t of e) t?.classList.remove("selected");
            (ys.removeAttribute("data-tab"),
                ys.classList.remove("shown"),
                ys.close(),
                document.dispatchEvent(new Event("remove-select-all")));
        }
    }
    function xs(e) {
        const t = document.getElementById("b_interface-background-mute"),
            n = e.type,
            o = e.frequency;
        (document
            .getElementById("background-actions")
            ?.setAttribute("data-type", n),
            document
                .getElementById("b_interface-background-pause")
                ?.classList.toggle("paused", "pause" === o),
            document
                .getElementById("b_interface-background-download")
                ?.toggleAttribute("disabled", "images" !== n));
        const s = "files" === n || "videos" === n;
        (t?.toggleAttribute("disabled", !s),
            s && t?.classList.toggle("muted", e.mute));
    }
    function _s() {
        ((0, fs.onclickdown)(
            document.getElementById("b_interface-background-pause"),
            () => {
                !(async function () {
                    const e = document.querySelector("#i_freq"),
                        t = document
                            .getElementById("b_interface-background-pause")
                            ?.classList.contains("paused"),
                        n = await ct.sync.get("backgrounds"),
                        o = localStorage.lastBackgroundFreq || "hour";
                    e && (e.value = t ? o : "pause");
                    t
                        ? ri({ freq: o })
                        : ((localStorage.lastBackgroundFreq = n.backgrounds.frequency),
                            ri({ freq: "pause" }));
                })();
            },
        ),
            (0, fs.onclickdown)(
                document.getElementById("b_interface-background-refresh"),
                (e) => {
                    ri({ refresh: e });
                },
            ),
            (0, fs.onclickdown)(
                document.getElementById("b_interface-background-download"),
                () => {
                    !(async function () {
                        const e = document.querySelector(
                            "#b_interface-background-download",
                        ),
                            t = document.querySelector("#download-background");
                        if (!t) return;
                        e?.classList.replace("idle", "loading");
                        try {
                            const n = "https://services.bonjourr.fr/unsplash",
                                o = new URL(t.dataset.downloadUrl ?? ""),
                                s = n + o.pathname + o.search,
                                i = await fetch(s);
                            if (!i) return;
                            const r = await i.json(),
                                a = await fetch(r.url);
                            if (!a.ok) return;
                            const c = await a.blob();
                            ((t.href = URL.createObjectURL(c)),
                                (t.download = o.pathname.split("/")[2]),
                                t.click());
                        } finally {
                            e?.classList.replace("loading", "idle");
                        }
                    })();
                },
            ),
            (0, fs.onclickdown)(
                document.getElementById("b_interface-background-mute"),
                () => {
                    !(async function () {
                        const e = document.querySelector("#i_background-mute-videos"),
                            t = document.getElementById("b_interface-background-mute"),
                            n = (await ct.sync.get("backgrounds")).backgrounds.mute;
                        e && (e.checked = !n);
                        (t?.classList.toggle("muted", !n), Li(!n), ri({ mute: !n }));
                    })();
                },
            ));
    }
    queueMicrotask(() => {
        (document.addEventListener("contextmenu", (e) => {
            e.altKey ? Ls() : hs?.contains(e.target) ? vs(e) : Ls();
        }),
            ys.querySelectorAll('input[type="file"]')?.forEach((e) => {
                e.addEventListener("change", function () {
                    const e = this.nextElementSibling,
                        t = "SPAN" === e?.tagName,
                        n = this.files?.[0];
                    e && n && t && (e.textContent = n.name);
                });
            }),
            document.addEventListener("close-edit", Ls));
        ys.querySelectorAll('[data-action="openTheseSettings"]')?.forEach((e) => {
            e?.addEventListener("click", ws);
        });
        if (
            (ys
                .querySelector('[data-action="add-new-link"]')
                ?.addEventListener("click", (e) => ls(e, ys, !0)),
                "ios" === De || !Ue)
        ) {
            const e = gt((e) => {
                vs(e);
            }, 500);
            (document?.addEventListener("touchstart", (t) => {
                e(t);
            }),
                document?.addEventListener("touchend", () => {
                    e.cancel();
                }),
                globalThis.addEventListener("resize", Ls));
        }
    });
    var Ss,
        qs,
        Is,
        Cs = {
            grain: {
                opacity: { min: "0.02", max: "0.3", step: "0.01", value: "0.1" },
                size: { min: "140", max: "300", step: "5", value: "220" },
                color: void 0,
            },
            verticalDots: {
                opacity: { min: "0.1", max: "1.0", step: "0.1", value: "0.3" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            diagonalDots: {
                opacity: { min: "0.1", max: "1.0", step: "0.1", value: "0.3" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            checkerboard: {
                opacity: { min: "0.1", max: "1.0", step: "0.1", value: "0.3" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            isometric: {
                opacity: { min: "0.1", max: "1.0", step: "0.1", value: "0.3" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            topographic: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "400", max: "600", step: "10", value: "500" },
                color: "#ffffff",
            },
            grid: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            verticalLines: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            horizontalLines: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            diagonalStripes: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            verticalStripes: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            horizontalStripes: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            diagonalLines: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.4" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            aztec: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "10", max: "100", step: "1", value: "30" },
                color: "#ffffff",
            },
            circuitBoard: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "150", max: "500", step: "1", value: "250" },
                color: "#ffffff",
            },
            ticTacToe: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "50", max: "400", step: "1", value: "100" },
                color: "#ffffff",
            },
            endlessClouds: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "80", max: "400", step: "1", value: "150" },
                color: "#ffffff",
            },
            waves: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "80", max: "400", step: "1", value: "150" },
                color: "#ffffff",
            },
            honeycomb: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.2" },
                size: { min: "25", max: "300", step: "5", value: "75" },
                color: "#ffffff",
            },
            vectorGrain: {
                opacity: { min: "0.1", max: "1.0", step: "0.05", value: "0.5" },
                size: { min: "250", max: "1000", step: "10", value: "350" },
                color: "#ffffff",
            },
            none: {
                opacity: { min: "", max: "", value: "", step: "" },
                size: { min: "", max: "", value: "", step: "" },
                color: void 0,
            },
        },
        Ts = {
            IMAGES: [
                {
                    optgroup: "DashX",
                    options: [
                        { name: "DashX Daylight", value: "bonjourr-images-daylight" },
                    ],
                },
                {
                    optgroup: "Unsplash",
                    options: [
                        {
                            name: "Unsplash Collections",
                            value: "unsplash-images-collections",
                        },
                        { name: "Unsplash Search", value: "unsplash-images-search" },
                    ],
                },
            ],
            VIDEOS: [
                {
                    optgroup: "DashX",
                    options: [
                        { name: "DashX Daylight", value: "bonjourr-videos-daylight" },
                    ],
                },
                {
                    optgroup: "Pixabay",
                    options: [{ name: "Pixabay Search", value: "pixabay-videos-search" }],
                },
            ],
        },
        As = L(x());
    function Bs(e) {
        return "safari" === Re
            ? Promise.resolve(
                new (class {
                    constructor(e) {
                        ((this.name = e),
                            (this.dbPromise = new Promise((t, n) => {
                                const o = indexedDB.open(e, 1);
                                ((o.onupgradeneeded = () => {
                                    o.result.createObjectStore("files");
                                }),
                                    (o.onsuccess = () => t(o.result)),
                                    (o.onerror = () => n(o.error)));
                            })));
                    }
                    dbPromise;
                    async withStore(e, t) {
                        const n = await this.dbPromise;
                        return new Promise((o, s) => {
                            const i = n.transaction("files", e).objectStore("files"),
                                r = t(i);
                            ((r.onsuccess = () => o(r.result)),
                                (r.onerror = () => s(r.error)));
                        });
                    }
                    async put(e, t) {
                        const n = await t.blob();
                        await this.withStore("readwrite", (t) => t.put(n, e.url));
                    }
                    async match(e) {
                        const t = "string" == typeof e ? e : e.url,
                            n = await this.withStore("readonly", (e) => e.get(t));
                        return n ? new Response(n) : void 0;
                    }
                    async delete(e) {
                        const t = "string" == typeof e ? e : e.url;
                        await this.withStore("readwrite", (e) => e.delete(t));
                    }
                    async keys() {
                        const e = await this.dbPromise;
                        return new Promise((t, n) => {
                            const o = e
                                .transaction("files", "readonly")
                                .objectStore("files")
                                .getAllKeys();
                            ((o.onsuccess = () => {
                                const e = o.result.map((e) => new Request(e));
                                t(e);
                            }),
                                (o.onerror = () => n(o.error)));
                        });
                    }
                })(e),
            )
            : caches.open(e);
    }
    function js(e) {
        let t,
            n,
            o = 3735928559,
            s = 1103547991;
        for (t = 0, n = 0; t < e.length; t++)
            ((n = e.charCodeAt(t)),
                (o = Math.imul(o ^ n, 2654435761)),
                (s = Math.imul(s ^ n, 1597334677)));
        ((o = Math.imul(o ^ (o >>> 16), 2246822507)),
            (o ^= Math.imul(s ^ (s >>> 13), 3266489909)),
            (s = Math.imul(s ^ (s >>> 16), 2246822507)),
            (s ^= Math.imul(o ^ (o >>> 13), 3266489909)));
        const i = (4294967296 * (2097151 & s) + (o >>> 0)).toString().split(""),
            r = "arosmwxcvn".split("");
        return i.map((e) => r[Number.parseInt(e)]).join("");
    }
    async function Os() {
        try {
            const e = await ct.local.get(),
                t = Us();
            if (0 === t.length || !e.backgroundFiles) return;
            for (const n of t) {
                (Xs([n]), delete e.backgroundFiles[n]);
                const t = document.querySelector(`#${n}`);
                (t?.classList.toggle("hiding", !0),
                    setTimeout(() => {
                        (t?.remove(), zs());
                    }, 100));
            }
            const n = Rs(e.backgroundFiles);
            (n.length > 0 ? gi(await Fs(n[0], e)) : pi(),
                $s(e),
                ct.local.remove("backgroundFiles"),
                ct.local.set({ backgroundFiles: e.backgroundFiles }));
        } catch (e) {
            return;
        }
    }
    async function Ps(e, t) {
        const n = Us()[0],
            o = await ct.local.get("backgroundFiles"),
            s = o.backgroundFiles[n],
            i = "video" === s.format,
            r = !i,
            a = document.querySelector("#background-media div"),
            c = document.querySelector("#background-media .video-looper");
        if (s) {
            if (
                (r &&
                    a &&
                    (s.position || (s.position = { size: "cover", x: "50%", y: "50%" }),
                        "size" === e &&
                        ((s.position.size = "100" === t ? "cover" : `${t}%`),
                            (a.style.backgroundSize = s.position.size)),
                        "vertical" === e &&
                        ((s.position.y = `${t}%`),
                            (a.style.backgroundPositionY = s.position.y)),
                        "horizontal" === e &&
                        ((s.position.x = `${t}%`),
                            (a.style.backgroundPositionX = s.position.x)),
                        "use-compressed" === e && gi(await Fs(n, o, void 0, s))),
                    i && c)
            ) {
                const n = Is;
                if (!n) return;
                (s.video || (s.video = { playbackRate: 1, fade: 4, zoom: 1 }),
                    "video-zoom" === e &&
                    ((s.video.zoom = parseFloat(t)),
                        (c.style.transform = `scale(${s.video.zoom})`)),
                    "playback-speed" === e &&
                    ((s.video.playbackRate = parseFloat(t)),
                        n.setPlaybackRate(parseFloat(t)),
                        n.stop(),
                        n.loop()),
                    "loop-fade" === e &&
                    ((s.video.fade = parseInt(t)), n.setFadeTime(parseInt(t))));
            }
            ((o.backgroundFiles[n] = s),
                ct.local.set({ backgroundFiles: o.backgroundFiles }));
        }
    }
    function $s(e) {
        const t = e.backgroundFiles,
            n = document.getElementById("thumbnails-container"),
            o = document.querySelectorAll(".thumbnail"),
            s = Object.values(o).map((e) => e.id),
            i = Object.keys(t) ?? [],
            r = Rs(e.backgroundFiles),
            a = i.filter((e) => !s.includes(e)),
            c = e.backgroundFiles[r[0]];
        if (a.length > 0)
            for (const e of a) {
                const t = Ns(e);
                (n?.appendChild(t),
                    Ss?.observe(t),
                    qs?.observe(t, { attributes: !0 }),
                    e === r[0] && t.classList.add("selected"));
            }
        if (!c) return void zs();
        const l = document.querySelector("#i_background-size"),
            d = document.querySelector("#i_background-vertical"),
            u = document.querySelector("#i_background-horizontal"),
            m = document.querySelector("#i_background-loop-fade"),
            g = document.querySelector("#i_background-video-zoom"),
            f = document.querySelector("#i_background-playback-speed"),
            p = l && d && u,
            h = m && g && f,
            y = document.getElementById("background-file-image"),
            v = document.getElementById("background-file-video"),
            b = y && v,
            k = "video" === c.format,
            w = !k,
            E = { size: "cover", x: "50%", y: "50%" },
            L = { playbackRate: 1, fade: 4, zoom: 1 };
        if (
            (b &&
                ((y.style.display = k ? "none" : "block"),
                    (v.style.display = k ? "block" : "none")),
                p && w)
        ) {
            const e = c.position ?? E;
            ((l.value = ("cover" === e.size ? "100" : e.size).replace("%", "")),
                (d.value = e.y.replace("%", "")),
                (u.value = e.x.replace("%", "")),
                Kt(l),
                Kt(d),
                Kt(u));
        }
        if (h && k) {
            const e = c.video ?? L;
            ((m.value = e.fade.toString()),
                (g.value = e.zoom.toString()),
                (f.value = e.playbackRate.toString()),
                Kt(m),
                Kt(g),
                Kt(f));
        }
        zs();
    }
    function zs() {
        const e = document.getElementById("b_thumbnail-remove"),
            t = document.getElementById("b_thumbnail-options"),
            n = document.querySelectorAll(".thumbnail.selected").length,
            o = document.getElementById("background-options-options"),
            s = o?.classList.contains("shown");
        (0 === n ? e?.setAttribute("disabled", "") : e?.removeAttribute("disabled"),
            1 !== n
                ? t?.setAttribute("disabled", "")
                : t?.removeAttribute("disabled"),
            1 !== n &&
            document
                .getElementById("background-file-options")
                ?.classList.remove("shown"),
            1 === n && s && o?.classList.remove("shown"));
    }
    function Ns(e) {
        const t = document.createElement("button"),
            n = document.createElement("img"),
            o = document.createElement("span");
        return (
            (t.id = e),
            (t.className = "thumbnail loading"),
            t.setAttribute("aria-label", "Select this background"),
            (n.src = "src/assets/interface/loading.svg"),
            n.setAttribute("alt", ""),
            n.setAttribute("draggable", "false"),
            (o.className = "thumbnail-format-icon"),
            t.appendChild(n),
            t.appendChild(o),
            t.addEventListener("click", Ds),
            t
        );
    }
    function Ms(e, t, n) {
        const o = document.querySelector(`#${e}`),
            s = document.querySelector(`#${e} img`);
        s &&
            o &&
            (s.addEventListener("load", () => {
                (o.classList.replace("loading", "loaded"),
                    setTimeout(() => o.classList.remove("loaded"), 2));
            }),
                Fs(e, t, n).then((e) => {
                    const { format: t, urls: n } = e;
                    ((o.dataset.format = t),
                        "image" === t && (s.src = n.small),
                        "video" === t && e.thumbnail && (s.src = e.thumbnail));
                }));
    }
    async function Ds(e) {
        const t = e.ctrlKey || e.metaKey,
            n = e.shiftKey,
            o = 0 === e.button,
            s = this?.id ?? "";
        if (o && n) {
            const e = document.querySelectorAll(".thumbnail");
            let t, n, o;
            if (
                (e.forEach((e, s) => {
                    const i = e.className.includes("selected");
                    (i && (n = s), i && !t && (t = s), e === this && !o && (o = s));
                }),
                    void 0 !== t && void 0 !== n && void 0 !== o)
            ) {
                const s = [t, n, o],
                    i = Math.min(...s),
                    r = Math.max(...s);
                return void e.forEach((e, t) => {
                    const n = t >= i && t <= r;
                    e.classList.toggle("selected", n);
                });
            }
        }
        if (o && t)
            return (
                this.classList.contains("selected") ||
                document
                    .getElementById("b_thumbnail-remove")
                    ?.removeAttribute("disabled"),
                void document.getElementById(s)?.classList?.toggle("selected")
            );
        if (this.classList.contains("selected") && o)
            return (
                Ws(),
                void document.getElementById(s)?.classList?.toggle("selected")
            );
        if (!this.classList.contains("selected") && o) {
            const e = await ct.local.get(),
                t = e.backgroundFiles[s],
                n = await Fs(s, e);
            if (!t || !n) return;
            (Ws(),
                document.getElementById(s)?.classList?.add("selected"),
                (e.backgroundFiles[s].lastUsed = new Date().toString()),
                ct.local.set({ backgroundFiles: e.backgroundFiles }),
                $s(e),
                gi(n));
        }
    }
    function Rs(e) {
        return Object.entries(e)
            .toSorted(
                (e, t) =>
                    new Date(t[1].lastUsed).getTime() - new Date(e[1].lastUsed).getTime(),
            )
            .map(([e, t]) => e);
    }
    async function Fs(e, t, n, o) {
        if (
            ((o ??= t.backgroundFiles[e]),
                (n = n ?? (await Js(e))).full.type.includes("video/"))
        ) {
            const e = await Ks(n.full),
                t = e.duration;
            e.remove();
            const s = URL.createObjectURL(n.full),
                i = URL.createObjectURL(n.small);
            return {
                format: "video",
                duration: t,
                mimetype: n.full.type,
                thumbnail: i,
                file: o,
                urls: { full: s, small: s },
            };
        }
        {
            const e = {
                full: URL.createObjectURL(n.full),
                small: URL.createObjectURL(n.small),
            };
            return {
                format: "image",
                mimetype: n.full.type,
                file: o,
                urls: { full: e.full, small: e.small },
            };
        }
    }
    function Ws() {
        for (const e of document.querySelectorAll(".thumbnail.selected"))
            e?.classList?.remove("selected");
    }
    function Us() {
        const e = document.querySelectorAll(".thumbnail.selected");
        return Object.values(e).map((e) => e?.id ?? "");
    }
    function Hs(e, t, n) {
        return (
            (Is = new (class {
                video1;
                video2;
                container;
                fadetime;
                playbackRate;
                listener;
                constructor(e, t = 4e3, n = 1) {
                    ((this.fadetime = t),
                        (this.playbackRate = n),
                        (this.container = document.createElement("div")),
                        this.container.classList.add("video-looper"),
                        (this.video1 = this.createVideo(e)),
                        (this.video2 = this.createVideo(e)),
                        (this.video1.id = "first-looped-video"),
                        (this.video2.id = "second-looped-video"),
                        this.container.appendChild(this.video1),
                        this.container.appendChild(this.video2),
                        (this.listener = () => {
                            this.video2?.isConnected &&
                                (this.stop(), document.hidden || this.video2.play());
                        }),
                        document.addEventListener("visibilitychange", this.listener));
                }
                loop() {
                    (this.video2.play(),
                        this.video1.addEventListener("timeupdate", () => {
                            this.isEnding(this.video1) &&
                                0 !== this.fadetime &&
                                (this.video1.classList.add("hiding"), this.video2.play());
                        }),
                        this.video2.addEventListener("timeupdate", () => {
                            this.isEnding(this.video2) &&
                                0 !== this.fadetime &&
                                (this.video2.classList.add("hiding"), this.video1.play());
                        }));
                }
                stop() {
                    (this.video1.pause(),
                        this.video2.pause(),
                        (this.video1.currentTime = 0),
                        (this.video2.currentTime = 0),
                        this.video1.classList.remove("hiding"),
                        this.video2.classList.remove("hiding"));
                }
                remove() {
                    ((this.container.style.opacity = "0"),
                        setTimeout(() => {
                            (this.video1.remove(),
                                this.video2.remove(),
                                this.container.remove(),
                                this.listener &&
                                document.removeEventListener(
                                    "visibilitychange",
                                    this.listener,
                                ));
                        }, this.fadetime));
                }
                getContainer() {
                    return this.container;
                }
                setFadeTime(e) {
                    const t = this.getRealDuration(),
                        n = Math.round((t / 2) * 1e3),
                        o = n < e;
                    ((this.fadetime = o ? n : e),
                        0 === this.fadetime
                            ? ((this.video2.loop = !0), (this.video1.style = "display: none"))
                            : ((this.video2.loop = !1),
                                this.video1.style.removeProperty("display")),
                        this.addTransitionDuration(this.fadetime));
                }
                setPlaybackRate(e) {
                    ((this.playbackRate = e),
                        (this.video1.playbackRate = e),
                        (this.video2.playbackRate = e));
                }
                async applyMuteStatus(e) {
                    try {
                        const t =
                            (await ct.sync.get(["backgrounds"])).backgrounds?.mute ?? !0;
                        e.muted = t;
                    } catch (t) {
                        e.muted = !0;
                    }
                }
                createVideo(e, t = !1) {
                    const n = document.createElement("video");
                    return (
                        (n.muted = !0),
                        (n.src = e),
                        (n.autoplay = t),
                        (n.playbackRate = this.playbackRate),
                        this.applyMuteStatus(n),
                        n.addEventListener("loadedmetadata", () => {
                            this.setFadeTime(this.fadetime);
                        }),
                        n.addEventListener("ratechange", () => {
                            this.setFadeTime(this.fadetime);
                        }),
                        n.addEventListener("ended", () => {
                            ((n.currentTime = 0),
                                n.classList.remove("hiding"),
                                this.container.prepend(n));
                        }),
                        n.addEventListener("muteStatusChange", function (e) {
                            n.muted = e.detail.status;
                        }),
                        n
                    );
                }
                getRealDuration() {
                    try {
                        return this.video1.duration / this.video1.playbackRate;
                    } catch (e) {
                        return 8;
                    }
                }
                addTransitionDuration(e) {
                    this.container.style.setProperty("--video-fadetime", e + "ms");
                }
                isEnding(e) {
                    return (
                        (1e3 * e.currentTime) / this.playbackRate >
                        (1e3 * e.duration) / this.playbackRate - this.fadetime
                    );
                }
            })(e, t, n)),
            Is
        );
    }
    async function Ks(e) {
        const t = document.createElement("video"),
            n = URL.createObjectURL(e);
        return (
            (t.src = n),
            await new Promise((e) => {
                (t.addEventListener("loadeddata", () => e(!0)), t.load());
            }),
            URL.revokeObjectURL(n),
            t
        );
    }
    async function Gs(e) {
        const t = await Ks(e),
            n = document.createElement("canvas").getContext("2d");
        if (!n) throw new Error("Canvas context failed for " + e.name);
        ((n.canvas.width = t.videoWidth),
            (n.canvas.height = t.videoHeight),
            document.body.append(t),
            (t.style.display = "none"),
            t.play(),
            t.pause());
        const o = await new Promise((e, o) => {
            const s = (t) => (t ? e(t) : o(!0));
            setTimeout(() => {
                (n.drawImage(t, 0, 0, t.videoWidth, t.videoHeight),
                    n.canvas.toBlob(s, "image/jpeg", 0.8));
            }, 300);
        });
        return (t.remove(), o);
    }
    async function Vs(e, t, n) {
        const o = Rs((t = await Zs(t)).backgroundFiles);
        if (0 === o.length) return void pi();
        const s = e.frequency,
            i = t.backgroundFiles[o[0]],
            r = new Date(i.lastUsed).getTime();
        if (((n ??= et(s, r)), o.length > 1 && n)) {
            o.shift();
            const e = o[Math.floor(Math.random() * o.length)];
            (gi(await Fs(e, t)),
                (t.backgroundFiles[e].lastUsed = new Date().toString()),
                ct.local.set(t));
        } else gi(await Fs(o[0], t));
    }
    async function Ys(e, t) {
        const n = await Bs("local-files"),
            { full: o, small: s } = t,
            i = new Request(`http://127.0.0.1:8888/${e}/full`),
            r = new Request(`http://127.0.0.1:8888/${e}/small`),
            a = { "content-type": o.type, "Cache-Control": "max-age=604800" },
            c = { "content-type": s.type, "Cache-Control": "max-age=604800" },
            l = new Response(o, { headers: a }),
            d = new Response(s, { headers: c });
        await Promise.all([n.put(i, l), n.put(r, d)]);
    }
    async function Js(e) {
        const t = await Bs("local-files"),
            n = await (await t?.match(`http://127.0.0.1:8888/${e}/full`))?.blob(),
            o = await (await t?.match(`http://127.0.0.1:8888/${e}/small`))?.blob();
        if (!n || !o) throw new Error(`${e} is undefined`);
        return { full: n, small: o };
    }
    async function Xs(e) {
        const t = await Bs("local-files");
        for (const n of e)
            (sessionStorage.removeItem(n),
                t.delete(`http://127.0.0.1:8888/${n}/full`),
                t.delete(`http://127.0.0.1:8888/${n}/small`));
        return !0;
    }
    async function Zs(e) {
        const t = {},
            n = await Bs("local-files"),
            o = await n.keys();
        for (const n of o)
            try {
                const o = new URL(n.url).pathname.split("/")[1],
                    s = n.url.includes(".mp4") || n.url.includes(".webm");
                let i = e.backgroundFiles[o];
                (i ||
                    (i = {
                        format: s ? "video" : "image",
                        lastUsed: new Date("01/01/1971").toString(),
                        position: { size: "cover", x: "50%", y: "50%" },
                    }),
                    (t[o] = i));
            } catch (e) { }
        const s = Object.keys(e.backgroundFiles),
            i = Object.keys(t);
        return (
            s.length !== i.length && ct.local.set({ backgroundFiles: t }),
            (e.backgroundFiles = t),
            e
        );
    }
    var Qs = gt(async function ({ blur: e, bright: t, fadein: n, texture: o }) {
        const s = await ct.sync.get("backgrounds");
        void 0 !== e && (s.backgrounds.blur = e);
        void 0 !== t && (s.backgrounds.bright = t);
        void 0 !== n && (s.backgrounds.fadein = n);
        void 0 !== o && (s.backgrounds.texture = o);
        ct.sync.set({ backgrounds: s.backgrounds });
    }, 600),
        ei = gt(async function (e) {
            const t = await ct.sync.get("backgrounds");
            ((t.backgrounds.color = e), ct.sync.set({ backgrounds: t.backgrounds }));
        }, 600),
        ti = gt(function (e) {
            const t = document.getElementById("background-wrapper"),
                n = (e) => t?.setAttribute("style", `opacity: ${e}`);
            (clearTimeout(ni), (ni = setTimeout(() => n(1), e)), n(0));
        }, 200),
        ni = 0,
        oi = Ht("f_background-user-coll"),
        si = Ht("f_background-user-search");
    function ii(e, t, n) {
        if (n) {
            const t = "color" === e.backgrounds.type,
                n = 0 === e.backgrounds.fadein,
                o = document.getElementById("background-wrapper");
            (t || n) && o?.classList.remove("hidden");
            const s = document.getElementById("b_interface-background-pause"),
                i = "pause" === e.backgrounds.frequency;
            (s?.classList.toggle("paused", i),
                _s(),
                document.addEventListener("visibilitychange", Ei));
        }
        switch (
        ((function (e) {
            const t = document.getElementById("credit-container"),
                n = document.getElementById("credit"),
                o = document.getElementById("a_interface-background-download");
            switch (e.type) {
                case "color":
                    return void t?.classList.remove("shown");
                case "urls":
                case "files":
                    (t?.classList.add("shown"),
                        n?.classList.add("hidden"),
                        o?.classList.add("hidden"));
                    break;
                case "videos":
                    (t?.classList.add("shown"),
                        n?.classList.remove("hidden"),
                        o?.classList.add("hidden"));
                    break;
                default:
                    (t?.classList.add("shown"),
                        n?.classList.remove("hidden"),
                        o?.classList.remove("hidden"));
            }
        })(e.backgrounds),
            hi(e.backgrounds),
            yi(e.backgrounds.texture),
            xs(e.backgrounds),
            document
                .getElementById("background-wrapper")
                ?.setAttribute("data-type", e.backgrounds.type),
            e.backgrounds.type)
        ) {
            case "files":
                Vs(e.backgrounds, t);
                break;
            case "urls":
                an(e.backgrounds, t);
                break;
            case "color":
                gi(e.backgrounds.color);
                break;
            default:
                ai(e.backgrounds, t);
        }
    }
    async function ri(e) {
        const t = await ct.sync.get("backgrounds"),
            n = await ct.local.get();
        if (e.blurenter)
            !(async function (e, t) {
                if ("files" === e.backgrounds.type) {
                    const e = Rs(t.backgroundFiles);
                    return void gi(await Fs(e[0], t), "full");
                }
                const [n, o] = await (async function (e, t) {
                    if ("files" === e.backgrounds.type) {
                        const e = Rs(t.backgroundFiles);
                        return [await Fs(e[0], t), await Fs(e[1], t)];
                    }
                    if (
                        "pause" === e.backgrounds.frequency &&
                        e.backgrounds.pausedImage
                    ) {
                        const n = ui(e.backgrounds, t).images();
                        return [e.backgrounds.pausedImage, n[0]];
                    }
                    if (
                        "pause" === e.backgrounds.frequency &&
                        e.backgrounds.pausedVideo
                    ) {
                        const n = ui(e.backgrounds, t).videos();
                        return [e.backgrounds.pausedVideo, n[0]];
                    }
                    if ("images" === e.backgrounds.type) {
                        const n = ui(e.backgrounds, t).images();
                        return [n[0], n[1]];
                    }
                    if ("videos" === e.backgrounds.type) {
                        const n = ui(e.backgrounds, t).videos();
                        return [n[0], n[1]];
                    }
                    return [];
                })(e, t);
                (fi(n, "small"),
                    fi(n, "full")?.then(() => {
                        (gi(n, "full", "fast"), fi(o, "full"));
                    }));
            })(t, n);
        else {
            if (void 0 !== e.blur)
                return (
                    hi({ blur: Number.parseFloat(e.blur) }),
                    void Qs({ blur: Number.parseFloat(e.blur) })
                );
            if (void 0 !== e.bright)
                return (
                    hi({ bright: Number.parseFloat(e.bright) }),
                    void Qs({ bright: Number.parseFloat(e.bright) })
                );
            if (void 0 !== e.fadein)
                return (
                    hi({ fadein: Number.parseInt(e.fadein) }),
                    Qs({ fadein: Number.parseFloat(e.fadein) }),
                    void ti(Number.parseFloat(e.fadein))
                );
            if (
                (function (e = "") {
                    return ["files", "urls", "images", "videos", "color"].includes(e);
                })(e.type)
            )
                return (
                    (t.backgrounds.type = e.type),
                    ct.sync.set({ backgrounds: t.backgrounds }),
                    ki(t.backgrounds),
                    bi(t.backgrounds),
                    void ii(t, n)
                );
            if (
                (function (e = "") {
                    return ["tabs", "hour", "day", "period", "pause"].includes(e);
                })(e.freq)
            ) {
                if (((t.backgrounds.frequency = e.freq), "pause" === e.freq)) {
                    const e = t.backgrounds.type;
                    if ("images" === e) {
                        const e = ui(t.backgrounds, n).images();
                        t.backgrounds.pausedImage = e[0];
                    }
                    if ("videos" === e) {
                        const e = ui(t.backgrounds, n).videos();
                        t.backgrounds.pausedVideo = e[0];
                    }
                    if ("urls" === e) {
                        const [e, o] = (function (e) {
                            const t = Object.entries(e.backgroundUrls)
                                .filter((e) => "OK" === e[1].state)
                                .toSorted(
                                    (e, t) =>
                                        new Date(e[1].lastUsed).getTime() -
                                        new Date(t[1].lastUsed).getTime(),
                                )
                                .map(([e]) => e);
                            return [
                                t,
                                t.map((e) => ({
                                    format: "image",
                                    page: "",
                                    username: "",
                                    urls: { full: e, medium: e, small: e },
                                })),
                            ];
                        })(n);
                        t.backgrounds.pausedUrl = o[0].urls.full;
                    }
                }
                (ct.sync.set({ backgrounds: t.backgrounds }), bi(t.backgrounds));
            }
            if (e.refresh) {
                switch (t.backgrounds.type) {
                    case "files":
                        Vs(t.backgrounds, n, !0);
                        break;
                    case "urls":
                        an(t.backgrounds, n, !0);
                        break;
                    case "images":
                    case "videos":
                        ai(t.backgrounds, n, !0);
                        break;
                }
                Yt(e.refresh, !0);
            }
            switch (
            (e.color && (Zt("solid-background", e.color), gi(e.color), ei(e.color)),
                e.urlsapply && un(t.backgrounds),
                e.files &&
                (async function (e, t) {
                    try {
                        const n = document.getElementById("thumbnails-container"),
                            o = {},
                            s = [];
                        let i;
                        if (0 === e.length) return;
                        for (const o of e) {
                            const e = js(
                                o.size.toString() + o.name + o.lastModified.toString(),
                            ).toString();
                            Object.keys(t.backgroundFiles).includes(e) ||
                                (s.push(e),
                                    (i = Ns(e)),
                                    n?.appendChild(i),
                                    qs?.observe(i, { attributes: !0 }));
                        }
                        if (n) {
                            const e = Object.keys(t.backgroundFiles).length + s.length,
                                o = Math.min(e, 5).toString();
                            n.style.setProperty("--thumbnails-columns", o);
                        }
                        for (let n = 0; n < s.length; n++) {
                            const i = e[n],
                                r = s[n],
                                a = i.type.includes("video") ? "video" : "image",
                                c =
                                    "landscape-primary" === globalThis.screen.orientation.type,
                                l = c ? globalThis.screen.width : globalThis.screen.height,
                                d = c ? globalThis.screen.height : globalThis.screen.width,
                                u = Math.min(2, globalThis.devicePixelRatio),
                                m = d * Math.min(1.8, l / d) * u,
                                g = i.type.includes("image/gif"),
                                f = i.type.includes("image/"),
                                p = i.type.includes("video/"),
                                h = i.size < 8e4,
                                y = i.size < 3e5;
                            let v = i,
                                b = i;
                            if (f && !h) {
                                const e = URL.createObjectURL(i),
                                    t = await Nn(e),
                                    n = 2 * m < t.width + t.height;
                                (!g && !y && n && (v = await Mn(e, { size: m, q: 0.8 })),
                                    (b = await Mn(e, { size: 360, q: 0.4 })));
                            }
                            if (p) {
                                const e = await Gs(i);
                                e && (b = await Mn(e, { size: 360, q: 0.3 }));
                            }
                            ((t.backgroundFiles[r] = {
                                format: "image",
                                lastUsed: new Date().toString(),
                            }),
                                "video" === a
                                    ? ((t.backgroundFiles[r].format = "video"),
                                        (t.backgroundFiles[r].video = {
                                            playbackRate: 1,
                                            fade: 1,
                                            zoom: 1,
                                        }))
                                    : ((t.backgroundFiles[r].format = "image"),
                                        (t.backgroundFiles[r].position = {
                                            size: "cover",
                                            x: "50%",
                                            y: "50%",
                                        })),
                                (o[r] = { full: v, small: b }),
                                await Ys(r, o[r]),
                                Ms(r, t, o[r]),
                                ct.local.set({ backgroundFiles: t.backgroundFiles }));
                        }
                        if (s.length > 0) {
                            const e = s[0];
                            (gi(await Fs(e, t, o[e])), Ws(), i?.classList.add("selected"));
                        }
                        const r = document.querySelector("#i_background-upload");
                        r && (r.value = "");
                    } catch (e) {
                        return;
                    }
                })(e.files, n),
                void 0 !== e.mute &&
                ((t.backgrounds.mute = e.mute),
                    ct.sync.set({ backgrounds: t.backgrounds })),
                void 0 !== e.texturecolor &&
                ((t.backgrounds.texture.color = e.texturecolor),
                    Qs({ texture: t.backgrounds.texture }),
                    Zt("texture-color", e.texturecolor),
                    yi(t.backgrounds.texture)),
                void 0 !== e.textureopacity &&
                ((t.backgrounds.texture.opacity = Number.parseFloat(
                    e.textureopacity,
                )),
                    Qs({ texture: t.backgrounds.texture }),
                    yi(t.backgrounds.texture)),
                void 0 !== e.texturesize &&
                ((t.backgrounds.texture.size = Number.parseInt(e.texturesize)),
                    Qs({ texture: t.backgrounds.texture }),
                    yi(t.backgrounds.texture)),
                (function (e = "") {
                    return [
                        "none",
                        "grain",
                        "verticalDots",
                        "diagonalDots",
                        "topographic",
                        "checkerboard",
                        "isometric",
                        "grid",
                        "verticalLines",
                        "horizontalLines",
                        "diagonalStripes",
                        "verticalStripes",
                        "horizontalStripes",
                        "diagonalLines",
                        "aztec",
                        "circuitBoard",
                        "ticTacToe",
                        "endlessClouds",
                        "vectorGrain",
                        "waves",
                        "honeycomb",
                    ].includes(e);
                })(e.texture) &&
                ((t.backgrounds.texture = { type: e.texture }),
                    ct.sync.set({ backgrounds: t.backgrounds }),
                    bi(t.backgrounds),
                    yi(t.backgrounds.texture)),
                document.dispatchEvent(
                    new CustomEvent("updateSettingsBeforeInit", { detail: t }),
                ),
                t.backgrounds.type)
            ) {
                case "files":
                case "urls":
                case "color":
                    return;
                default:
            }
            if (e.provider) {
                ((t.backgrounds[t.backgrounds.type] = e.provider),
                    ct.sync.set({ backgrounds: t.backgrounds }),
                    bi(t.backgrounds));
                const o = n.backgroundCollections[e.provider]?.length > 0,
                    s = e.provider.includes("bonjourr"); //hihrllo
                (o || s) && ai(t.backgrounds, n);
            }
            if (void 0 !== e.query) {
                const o = t.backgrounds[t.backgrounds.type];
                let s = e.query.target.querySelector("input")?.value ?? "";
                const i = "unsplash-images-collections" === o,
                    r = s.startsWith("https://unsplash.com/collections/");
                if (
                    (i &&
                        r &&
                        (s = s
                            .replace("https://unsplash.com/collections/", "")
                            .slice(0, s.indexOf("/"))),
                        (n.backgroundCollections[o] = []),
                        (t.backgrounds.queries[o] = s),
                        ct.sync.set({ backgrounds: t.backgrounds }),
                        "" === s)
                )
                    return (
                        ct.local.set({ backgroundCollections: n.backgroundCollections }),
                        oi.accept(""),
                        si.accept(""),
                        void pi()
                    );
                (oi.load(),
                    si.load(),
                    bi(t.backgrounds),
                    await ai(t.backgrounds, n),
                    oi.accept(o),
                    si.accept(o));
            }
        }
    }
    async function ai(e, t, n) {
        if ("color" === e.type) return;
        let o = [];
        switch (e.type) {
            case "images":
                o = ui(e, t).images();
                break;
            case "videos":
                o = ui(e, t).videos();
                break;
            default:
        }
        const s = new Date(t.backgroundLastChange ?? "01/01/1971").getTime(),
            i = "pause" === e.frequency,
            r = "true" === localStorage.backgroundPreloading;
        if (((n ??= et(e.frequency, s)), 0 === o.length)) {
            const n = await ci(e);
            if (n) {
                const s = mi(e, t).fromApi(n),
                    i = ui(e, s),
                    r = "images" === e.type;
                ((s.backgroundLastChange = Xe().toString()),
                    ct.local.set(s),
                    (o = r ? i.images() : i.videos()),
                    fi(o[1]));
            }
        }
        if (r) return (gi(o[0]), void fi(o[1]));
        if (!n && i) {
            if (e.pausedImage && "images" === e.type) return void gi(e.pausedImage);
            if (e.pausedVideo && "videos" === e.videos) return void gi(e.pausedVideo);
        }
        if (n) {
            if (
                (o.length > 1 && o.shift(),
                    "pause" === e.frequency &&
                    ("images" === e.type && (e.pausedImage = o[0]),
                        "videos" === e.type && (e.pausedVideo = o[0]),
                        ct.sync.set({ backgrounds: e })),
                    o.length > 1)
            ) {
                let n = t;
                (fi(o[1]),
                    (n = mi(e, t).fromList(o)),
                    (n.backgroundLastChange = Xe().toString()),
                    ct.local.set(n));
            }
            if ((gi(o[0]), 1 === o.length && navigator.onLine)) {
                const n = await ci(e);
                if (n) {
                    const o = mi(e, t).fromApi(n),
                        s = ui(e, o),
                        i = "images" === e.type ? s.images() : s.videos();
                    (fi(i[0]),
                        fi(i[1]),
                        ct.local.set({ backgroundCollections: o.backgroundCollections }));
                }
            }
        } else gi(o[0]);
    }
    async function ci(e) {
        switch (e.type) {
            case "files":
            case "urls":
            case "color":
                throw new Error('Can only fetch with "images" or "videos" type');
            default:
        }
        const t = e[e.type],
            [n, o, s] = t.split("-"),
            i = `/${n}/${o}/${s}`,
            r = Math.max(2, globalThis.devicePixelRatio),
            a = globalThis.screen.width / globalThis.screen.height;
        let c = globalThis.screen.height * r,
            l = globalThis.screen.width * r;
        (a >= 2 && (l = 2 * c), a <= 0.5 && (c = 2 * l));
        const d = `?h=${c}&w=${l}`,
            u = e.queries[t] ?? "",
            m =
                "https://services.bonjourr.fr/backgrounds" +
                i +
                d +
                (u ? `&query=${u}` : ""),
            g = await fetch(m),
            f = await g.json(),
            p = "images" === o && Object.keys(f)?.every((e) => e.includes("images")),
            h = "videos" === o && Object.keys(f)?.every((e) => e.includes("videos"));
        if (p || h) return f;
        throw new Error("Received JSON is bad");
    }
    function li(e, t) {
        switch (e.type) {
            case "files":
            case "urls":
            case "color":
                throw new Error('Only collection names with "images" or "videos" type');
            default:
        }
        const { frequency: n, type: o, pausedImage: s, pausedVideo: i } = e,
            r = "videos" === o && "pause" === n && i;
        if ("images" === o && "pause" === n && s) return di(s, t);
        if (r) return di(i, t);
        const a = e[o];
        if (a.includes("daylight")) {
            return `${a}-${Ze(Xe().getTime())}`;
        }
        return a;
    }
    function di(e, t) {
        const n = new Map();
        for (const [e, o] of Object.entries(t.backgroundCollections))
            for (const t of o) n.set(t.urls.full, e);
        return n.get(e.urls.full);
    }
    function ui(e, t) {
        switch (e.type) {
            case "files":
            case "urls":
            case "color":
                throw new Error('Can only fetch with "images" or "videos" type');
            default:
        }
        const n = li(e, t),
            o = t.backgroundCollections[n] ?? [];
        return {
            images: () => {
                if (o?.every((e) => "image" === e.format)) return o;
                throw new Error("Wrong background format");
            },
            videos: () => {
                if (o?.every((e) => "video" === e.format)) return o;
                throw new Error("Wrong background format");
            },
        };
    }
    function mi(e, t) {
        switch (e.type) {
            case "files":
            case "urls":
            case "color":
                throw new Error("Cannot update with this type");
            default:
        }
        return {
            fromList: function (n) {
                const o = li(e, t);
                return ((t.backgroundCollections[o] = n), t);
            },
            fromApi: function (e) {
                for (const [n, o] of Object.entries(e)) t.backgroundCollections[n] = o;
                return t;
            },
        };
    }
    function gi(e, t, n) {
        const o = document.getElementById("background-media");
        let s,
            i = t || wi();
        if ("string" == typeof e)
            return (
                o?.childNodes.forEach((e) => e.remove()),
                void document.documentElement.style.setProperty("--solid-background", e)
            );
        if ((n && document.body.classList.add("init"), e)) {
            if ("image" === e.format) {
                i = "image/gif" === e.mimetype ? "full" : i;
                s = (function (e, t, n) {
                    const o = document.getElementById("background-wrapper"),
                        s = document.createElement("div"),
                        i = new Image();
                    if (
                        (i.addEventListener("load", () => {
                            const e = i.width <= 256 && i.height <= 256,
                                r = t.mimetype?.includes("png");
                            (s?.classList.toggle("pixelated", r && e),
                                o?.classList.remove("hidden"),
                                (function (e, t) {
                                    let n = e.color;
                                    "safari" !== Fe ||
                                        n ||
                                        (n = (function (e) {
                                            try {
                                                const t = document.createElement("canvas"),
                                                    n = t.getContext("2d"),
                                                    o = 100,
                                                    s = Math.min(o / e.width, o / e.height);
                                                ((t.width = e.width * s),
                                                    (t.height = e.height * s),
                                                    n?.drawImage(e, 0, 0, t.width, t.height));
                                                const i = n?.getImageData(0, 0, t.width, t.height),
                                                    r = i?.data;
                                                let a = 0,
                                                    c = 0,
                                                    l = 0,
                                                    d = 0;
                                                if (r)
                                                    for (let e = 0; e < r.length; e += 4)
                                                        ((a += r[e]),
                                                            (c += r[e + 1]),
                                                            (l += r[e + 2]),
                                                            d++);
                                                return (
                                                    (a = Math.floor(a / d)),
                                                    (c = Math.floor(c / d)),
                                                    (l = Math.floor(l / d)),
                                                    (function (e, t, n) {
                                                        return `#${it(e)}${it(t)}${it(n)}`;
                                                    })(a, c, l)
                                                );
                                            } catch (e) { }
                                        })(t));
                                    if ("safari" === Fe && n) {
                                        const e = Number.parseInt(
                                            document.documentElement.style.getPropertyValue(
                                                "--fade-in",
                                            ),
                                        );
                                        (document
                                            .querySelector('meta[name="theme-color"]')
                                            ?.setAttribute("content", n),
                                            setTimeout(() => {
                                                document.documentElement.style.setProperty(
                                                    "--average-color",
                                                    n,
                                                );
                                            }, e));
                                    }
                                })(t, i),
                                (function (e) {
                                    const t = document.getElementById("credit-container"),
                                        n = document.getElementById("credit"),
                                        o = document.getElementById("download-background");
                                    if (!(t && n && e?.page && e?.username)) return;
                                    if ("video" === e?.format) {
                                        if (e.username) {
                                            const t = document.createElement("a");
                                            ((t.textContent = kt(`Video by ${e.username}`)),
                                                (t.href = e.page),
                                                (n.textContent = ""),
                                                n.append(t));
                                        }
                                        return;
                                    }
                                    const s = e.city || e.country;
                                    let i = "",
                                        r = "";
                                    if (e.exif) {
                                        const {
                                            iso: t,
                                            model: n,
                                            aperture: o,
                                            exposure_time: s,
                                            focal_length: r,
                                        } = e.exif;
                                        (n && (i += `${n} - `),
                                            o && (i += `f/${o} `),
                                            s && (i += `${s}s `),
                                            t && (i += `${t}ISO `),
                                            r && (i += `${r}mm`));
                                    }
                                    if (s) {
                                        const t = e.city || "",
                                            n = e.country || "";
                                        r = `${t}${t && n ? ", " : ""}${n} <name>`;
                                    } else r = kt("Photo by <name>");
                                    const [a, c] = r.split(" <name>"),
                                        l = document.createElement("a"),
                                        d = document.createElement("span"),
                                        u = document.createElement("span"),
                                        m = document.createElement("a"),
                                        g = document.createElement("p");
                                    ((g.className = "exif"),
                                        (g.textContent = i),
                                        (l.textContent = a),
                                        (m.textContent =
                                            e.username.slice(0, 1).toUpperCase() +
                                            e.username.slice(1)),
                                        (d.textContent = s ? " - " : " "),
                                        (u.textContent = c),
                                        e.page.includes("unsplash")
                                            ? ((l.href = `${e.page}?utm_source=DashX&utm_medium=referral`),
                                                (m.href = `https://unsplash.com/@${e.username}?utm_source=DashX&utm_medium=referral`))
                                            : (l.href = e.page),
                                        (n.textContent = ""),
                                        n.append(g, l, d, m, u),
                                        e.download && o && (o.dataset.downloadUrl = e.download));
                                })(t),
                                n && n());
                        }),
                            (i.src = e),
                            i.remove(),
                            s.classList.add("background-image"),
                            (s.style.backgroundImage = `url(${e})`),
                            t?.file?.position)
                    ) {
                        const { size: e, x: n, y: o } = t.file.position;
                        ((s.style.backgroundSize = e),
                            (s.style.backgroundPositionX = n),
                            (s.style.backgroundPositionY = o));
                    }
                    return s;
                })(e.urls[i], e);
            } else {
                const t = 4e3;
                s = (function (e, t, n) {
                    const o = document.getElementById("background-wrapper"),
                        s = Hs(e, n, 1),
                        i = s.getContainer();
                    if ((s.loop(), t?.file?.video)) {
                        const { playbackRate: e, zoom: n, fade: o } = t.file.video;
                        ((i.style.transform = `scale(${n})`),
                            s.setPlaybackRate(e),
                            s.setFadeTime(o));
                    }
                    return (o?.classList.remove("hidden"), i);
                })(e.urls[i], e, t);
            }
            if (((s.dataset.res = i), o.prepend(s), o?.childElementCount > 1)) {
                const e = Object.values(o?.children)
                    .filter((e) => !e.className.includes("hiding"))
                    .at(-1);
                n
                    ? (document.body.classList.remove("init"),
                        setTimeout(() => o?.lastElementChild?.remove(), 200))
                    : (e?.classList.add("hiding"),
                        setTimeout(() => o?.lastElementChild?.remove(), 1200));
            }
        }
    }
    function fi(e, t) {
        if (!e) return;
        localStorage.setItem("backgroundPreloading", "true");
        const n = t || wi(),
            o = e.urls[n];
        if ("image" === e.format) {
            const e = document.createElement("img");
            return (
                (e.fetchPriority = "low"),
                new Promise((t) => {
                    (e.addEventListener("load", () => {
                        (localStorage.removeItem("backgroundPreloading"),
                            e.remove(),
                            t(!0));
                    }),
                        (e.src = o));
                })
            );
        }
        if ("video" === e.format) {
            const e = document.createElement("video");
            return new Promise((t) => {
                (e.addEventListener("canplaythrough", () => {
                    (localStorage.removeItem("backgroundPreloading"), e.remove(), t(!0));
                }),
                    setTimeout(() => (e.src = o), 600));
            });
        }
    }
    function pi() {
        const e = document.getElementById("background-media");
        (setTimeout(() =>
            document.querySelector("#background-media div")?.classList.add("hiding"),
        ),
            setTimeout(() => e.firstChild?.remove(), 2e3));
    }
    function hi({ blur: e, bright: t, fadein: n }) {
        (void 0 !== e &&
            (document.documentElement.style.setProperty("--blur", `${e}px`),
                document.body.classList.toggle("blurred", e >= 15)),
            void 0 !== t &&
            document.documentElement.style.setProperty("--brightness", `${t}`),
            void 0 !== n &&
            document.documentElement.style.setProperty("--fade-in", `${n}ms`));
    }
    function yi(e) {
        const t = document.getElementById("background-wrapper");
        if (!document.getElementById("background-texture") || !t) return;
        const n = Cs[e.type],
            o = e.color ?? n.color,
            s = e.size ?? n.size.value,
            i = e.opacity ?? n.opacity.value;
        ((t.dataset.texture = e.type),
            document.documentElement.style.setProperty("--texture-color", `${o}`),
            document.documentElement.style.setProperty(
                "--texture-color-transparent",
                `${o}77`,
            ),
            document.documentElement.style.setProperty("--texture-opacity", `${i}`),
            document.documentElement.style.setProperty("--texture-size", `${s}px`));
    }
    function vi(e, t) {
        (!(function (e) {
            Ue &&
                document
                    .getElementById("thumbnails-container")
                    ?.style.setProperty("--thumbnails-columns", "2");
            function t() {
                const { id: e, value: t, checked: n } = this;
                ("i_background-size" === e && Ps("size", t),
                    "i_background-vertical" === e && Ps("vertical", t),
                    "i_background-horizontal" === e && Ps("horizontal", t),
                    "i_background-compress" === e && Ps("use-compressed", n.toString()),
                    "i_background-video-zoom" === e && Ps("video-zoom", t),
                    "i_background-playback-speed" === e && Ps("playback-speed", t),
                    "i_background-loop-fade" === e && Ps("loop-fade", t));
            }
            (Zs(e).then((e) => {
                $s(e);
            }),
                (0, As.onclickdown)(document.getElementById("b_thumbnail-remove"), Os),
                (0, As.onclickdown)(
                    document.getElementById("b_thumbnail-options"),
                    function () {
                        document
                            .getElementById("background-file-options")
                            ?.classList.toggle("shown");
                    },
                ),
                document
                    .getElementById("b_thumbnail-zoom")
                    ?.addEventListener("click", function () {
                        const e = document.getElementById("thumbnails-container"),
                            t = globalThis
                                .getComputedStyle(e)
                                .getPropertyValue("--thumbnails-columns"),
                            n = Math.max((Number.parseInt(t) + 1) % 6, 1);
                        e.style.setProperty("--thumbnails-columns", n.toString());
                    }),
                document
                    .getElementById("i_background-size")
                    ?.addEventListener("input", t),
                document
                    .getElementById("i_background-vertical")
                    ?.addEventListener("input", t),
                document
                    .getElementById("i_background-horizontal")
                    ?.addEventListener("input", t),
                document
                    .getElementById("i_background-compress")
                    ?.addEventListener("change", t),
                document
                    .getElementById("i_background-loop-fade")
                    ?.addEventListener("input", t),
                document
                    .getElementById("i_background-video-zoom")
                    ?.addEventListener("input", t),
                document
                    .getElementById("i_background-playback-speed")
                    ?.addEventListener("input", t),
                (qs = new MutationObserver(zs)),
                (Ss = new IntersectionObserver(function (e) {
                    for (const { target: t, isIntersecting: n } of e) {
                        const e = t.classList.contains("loading"),
                            o = t.id ?? "";
                        n &&
                            e &&
                            Js(o).then((e) => {
                                ct.local.get("backgroundFiles").then((n) => {
                                    e && (Ms(o, n, e), Ss.unobserve(t));
                                });
                            });
                    }
                })));
        })(t),
            (async function (e, t) {
                rn = e.urls;
                const { createBackgroundUrlsEditor: n } = await Promise.resolve().then(
                    () => (Ce(), _e),
                ),
                    o = { language: "uri", value: e.urls },
                    s = (sn = n(o)).keyCommandMap.Tab;
                ((sn.textarea.id = "background-urls-editor-textarea"),
                    (sn.textarea.maxLength = 8080),
                    (sn.textarea.placeholder = "https://picsum.photos/200\n"),
                    sn.on("update", (e) => {
                        dn(rn, nt(e, 8080));
                    }),
                    (sn.keyCommandMap.Tab = (e, t, n) =>
                        !document.body.matches(".tabbing") && s?.(e, t, n)));
                for (const [e, { state: n }] of Object.entries(t.backgroundUrls))
                    ln(e, n);
            })(e.backgrounds, t),
            ki(e.backgrounds),
            bi(e.backgrounds));
    }
    function bi(e) {
        const t = e.type,
            n = "videos" === t || "files" === t || "urls" === t;
        (document
            .getElementById("local_options")
            ?.classList.toggle("shown", "files" === t),
            document
                .getElementById("solid_options")
                ?.classList.toggle("shown", "color" === t),
            document
                .getElementById("unsplash_options")
                ?.classList.toggle("shown", "images" === t),
            document
                .getElementById("background-urls-option")
                ?.classList.toggle("shown", "urls" === t),
            document
                .getElementById("background-freq-option")
                ?.classList.toggle("shown", "color" !== t),
            document
                .getElementById("background-filters-options")
                ?.classList.toggle("shown", "color" !== t),
            document
                .getElementById("background-video-sound-options")
                ?.classList.toggle("shown", n),
            (function (e) {
                const t = "none" !== e.texture.type;
                if (
                    (document
                        .getElementById("background-texture-options")
                        ?.classList.toggle("shown", t),
                        t)
                ) {
                    const t = document.querySelector("#i_texture-opacity"),
                        n = document.querySelector("#i_texture-size"),
                        o = document.querySelector("#background-texture-color-option"),
                        s = Cs[e.texture.type],
                        { opacity: i, size: r } = e.texture;
                    (o?.classList.toggle("shown", void 0 !== s.color),
                        t &&
                        ((t.min = s.opacity.min),
                            (t.max = s.opacity.max),
                            (t.step = s.opacity.step),
                            (t.value = void 0 === i ? s.opacity.value : i.toString()),
                            Kt(t)),
                        n &&
                        ((n.min = s.size.min),
                            (n.max = s.size.max),
                            (n.step = s.size.step),
                            (n.value = void 0 === r ? s.size.value : r.toString()),
                            Kt(n)));
                }
            })(e),
            (function (e) {
                switch (e.type) {
                    case "files":
                    case "urls":
                    case "color":
                        return void document
                            .getElementById("background-provider-option")
                            ?.classList.remove("shown");
                    default:
                }
                document
                    .getElementById("background-provider-option")
                    ?.classList.add("shown");
                const t = e[e.type],
                    n = t.includes("coll"),
                    o = t.includes("search"),
                    s = document.querySelector("#i_background-user-coll"),
                    i = document.querySelector("#i_background-user-search"),
                    r = document.querySelector("#background-user-coll-option"),
                    a = document.querySelector("#background-user-search-option");
                s &&
                    i &&
                    r &&
                    a &&
                    (r.classList.toggle("shown", n),
                        a.classList.toggle("shown", o),
                        (s.value = e.queries[t] ?? ""),
                        (i.value = e.queries[t] ?? ""));
            })(e),
            xs(e));
    }
    function ki(e) {
        const t = document.querySelector("#i_background-provider"),
            n = "images" === e.type ? "IMAGES" : "VIDEOS",
            o = Ts[n];
        if (!t) throw new Error("Cannot find #i_background-provider");
        for (const e of Object.values(t.children)) e.remove();
        for (const e of o) {
            const n = document.createElement("optgroup");
            ((n.label = e.optgroup), t?.appendChild(n));
            for (const t of e.options) {
                const e = document.createElement("option");
                ((e.textContent = t.name), (e.value = t.value), n.appendChild(e));
            }
        }
        switch (e.type) {
            case "images":
            case "videos": {
                const n = e[e.type];
                t.value = n;
                break;
            }
            default:
        }
    }
    function wi() {
        return document.body.className.includes("blurred") ? "small" : "full";
    }
    function Ei() {
        document.querySelectorAll("video")?.forEach((e) => {
            document.hidden ? e.pause() : e.play();
        });
    }
    function Li(e = !0) {
        document.querySelectorAll("#background-media video").forEach(function (t) {
            t.dispatchEvent(
                new CustomEvent("muteStatusChange", { detail: { status: e } }),
            );
        });
    }
    var Ai = [
        "time",
        "main",
        "quicklinks",
        "quotes",
        "searchbar",
        "pomodoro",
    ],
        Bi = {
            time: globalThis.document.getElementById("time"),
            main: globalThis.document.getElementById("main"),
            quicklinks: globalThis.document.getElementById("linkblocks"),
            searchbar: globalThis.document.getElementById("sb_container"),
            quotes: globalThis.document.getElementById("quotes_container"),
            pomodoro: globalThis.document.getElementById("pomodoro_container"),
        },
        ji = {
            single: { grid: [["time"], ["main"], ["quicklinks"]], items: {} },
            double: {
                grid: [
                    ["time", "."],
                    ["main", "."],
                    ["quicklinks", "."],
                ],
                items: {},
            },
            triple: {
                grid: [
                    ["time", ".", "."],
                    ["main", ".", "."],
                    ["quicklinks", ".", "."],
                ],
                items: {},
            },
        };
    function Oi() {
        return (
            document.getElementById("interface")?.classList.contains("move-edit") ??
            !1
        );
    }
    function Pi(e, t) {
        return e.filter((e) => e === t).length > 1;
    }
    function $i(e, t) {
        if ("move" in e) {
            const n = e.move.layouts,
                o = t ?? e.move.selection;
            return n[o] ?? ji[o];
        }
        const n = e.layouts,
            o = t ?? e.selection;
        return n?.[o] ?? ji[o];
    }
    function zi(e = "") {
        const t = (t) =>
            e
                .split(t)
                .filter((e) => e.length > 1)
                .map((e) => e.split(" ")),
            n = t("'");
        return n.flat().every((e) => "." === e || Ai.includes(e)) ? n : t('"');
    }
    function Ni(e) {
        let t = "";
        return (
            (t = e
                .map((e) => `'${((e) => e.reduce((e, t) => `${e} ${t}`))(e)}'`)
                .join(" ")),
            t.trimEnd()
        );
    }
    function Mi(e, t) {
        const n = [];
        return (
            e.flat().forEach((o, s) => {
                if (o !== t) return;
                const i = s % e[0].length,
                    r = Math.floor(s / e[0].length);
                n.push([i, r]);
            }),
            n
        );
    }
    function Di(e, t) {
        if (void 0 === e[t]) return !1;
        const n = e[t];
        let o = !0;
        return (
            n.some((t) => {
                "." !== t &&
                    "columns" !==
                    (function (e, t) {
                        const n = Mi(e, t),
                            o = Object.values(n).map(([e, t]) => t);
                        return n.length < 2 ? "none" : o[0] !== o[1] ? "columns" : "rows";
                    })(e, t) &&
                    (o = !1);
            }),
            o
        );
    }
    function Ri(e, t, { toggle: n, remove: o }) {
        function s(e) {
            const n = e.indexOf(t),
                o = [!1, !1];
            let s = e;
            function i(e, n, s) {
                return (
                    !o[s] &&
                    e[n] &&
                    ("." === e[n] ? (e[n] = t) : e[n] !== t && (o[s] = !0)),
                    e
                );
            }
            for (let e = 1; e < s.length; e++)
                ((s = i(s, n + e, 0)), (s = i(s, n - e, 1)));
            return s;
        }
        function i(e) {
            let n = !0;
            return e.map((e) => (e === t ? (n && (n = !1), ".") : e));
        }
        const [r, a] = Mi(e, t)[0];
        let c = e.map((e) => e[r]),
            l = [...e[a]];
        return (
            o && ((c = i(c)), (l = i(l))),
            n &&
            ("col" === n && (c = Pi(c, t) ? i(c) : s(c)),
                "row" === n && (l = Pi(l, t) ? i(l) : s(l))),
            e.forEach((t, n) => {
                e[n][r] = c[n];
            }),
            e[a].forEach((t, n) => {
                e[a][n] = l[n];
            }),
            e
        );
    }
    function Fi(e) {
        const t = {
            time: e.time,
            main: e.main,
            searchbar: !!e.searchbar?.on,
            pomodoro: !!e.pomodoro?.on,
            quicklinks: e.quicklinks,
            quotes: !!e.quotes?.on,
        };
        return Object.entries(t)
            .filter(([e, t]) => t)
            .map(([e, t]) => e);
    }
    function Wi(e, t) {
        for (const [n, o] of e)
            ("time" === n && (t.time = o),
                "main" === n && (t.main = o),
                "quicklinks" === n && (t.quicklinks = o),
                "quotes" === n && (t.quotes = { ...t.quotes, on: o }),
                "pomodoro" === n && (t.pomodoro = { ...t.pomodoro, on: o }),
                "searchbar" === n && (t.searchbar = { ...t.searchbar, on: o }));
        return t;
    }
    function Ui(e) {
        const t = e.replaceAll("'", "").replaceAll(".", "").split(" ");
        return t.filter((e, n) => e && t.indexOf(e) === n);
    }
    function Hi(e, t, n) {
        const o = (function (e, t) {
            return `${"triple" === e ? ". " : ""}${t}${"triple" === e || "double" === e ? " ." : ""}`;
        })(n, t);
        let s = e.split("'").filter((e) => !(" " === e || "" === e)),
            i = 0;
        if ("" === e) return `'${o}'`;
        const r = s[0].includes("time"),
            a = s.at(-1)?.includes("quotes");
        return (
            "time" === t && (i = 0),
            "main" === t && (i = r ? 1 : 0),
            "searchbar" === t && (i = 1 === s.length ? 1 : 2),
            "pomodoro" === t && (i = 1 === s.length ? 1 : 2),
            "quicklinks" === t && (i = s.length - (a ? 1 : 0)),
            "quotes" === t && (i = s.length),
            s.splice(i, 0, o),
            (s = s.map((e) => `'${e}'`)),
            s.join(" ")
        );
    }
    function Ki(e, t, n) {
        let o = e.split("'").filter((e) => !(" " === e || "" === e));
        return (
            (o = o.filter((e) => !e.includes(t))),
            (o = o.map((e) => `'${e}'`)),
            o.join(" ")
        );
    }
    var Gi = L(x()),
        Vi = document.querySelector("#interface");
    function Yi(e) {
        const t = "string" == typeof e ? e : Ni(e);
        document.documentElement.style.setProperty("--grid", t);
    }
    function Ji(e, t) {
        const { box: n, text: o } = t ?? { box: "", text: "" },
            s = Bi[e];
        s &&
            ((s.style.placeSelf = n),
                "quicklinks" === e
                    ? (document
                        .getElementById("linkblocks")
                        ?.classList.remove("text-left", "text-right"),
                        "left" === o &&
                        document.getElementById("linkblocks")?.classList.add("text-left"),
                        "right" === o &&
                        document.getElementById("linkblocks")?.classList.add("text-right"))
                    : (s.style.textAlign = o || ""));
    }
    function Xi(e) {
        for (const [t, n] of Object.entries(e)) Ji(t, n);
    }
    function Zi(e) {
        const t = document.createElement("button");
        ((t.id = `move-overlay-${e}`),
            (t.className = "move-overlay"),
            Vi?.appendChild(t),
            (0, Gi.onclickdown)(t, () => {
                Ar(void 0, { select: e });
            }));
    }
    function Qi(e) {
        if (e) document.querySelector(`#move-overlay-${e}`)?.remove();
        else for (const e of document.querySelectorAll(".move-overlay")) e.remove();
    }
    function er() {
        const e = document.getElementById("element-mover"),
            t = document.querySelectorAll(
                ".move-overlay, #grid-mover button, .grid-spanner, #element-mover button",
            );
        for (const e of t)
            (e.classList.remove("selected"), e.removeAttribute("disabled"));
        e?.classList.remove("active");
    }
    function tr(e) {
        if ("in" === e) {
            const e = document.getElementById("interface");
            (e.style.removeProperty("opacity"),
                setTimeout(() => {
                    e.style.transition = "";
                }, 200));
        }
        if ("out" === e) {
            const e = document.getElementById("interface");
            ((e.style.opacity = "0"),
                (e.style.transition = "opacity 200ms cubic-bezier(.215,.61,.355,1)"));
        }
    }
    var nr = !0;
    function or(e, t) {
        const n = bt().includes("zh") || bt().includes("ja"),
            o = document.getElementById("current-desc"),
            s = document.getElementById("current-temp"),
            i = document.getElementById("tempContainer"),
            r = document.getElementById("weather"),
            a = n ? "。" : ". ",
            c = Xe();
        (sr(e.forecast),
            (() => {
                const e = t.icon_id;
                if (!i) return;
                const n = tt(c),
                    { sunrise: o, sunset: s, dusk: r } = Qe(),
                    a = n < o || n > s + r ? "night" : "day",
                    l = document.getElementById("weather-icon");
                ((l.dataset.daytime = a), (l.dataset.condition = e));
            })(),
            (() => {
                const n = !e.moreinfo || "none" === e.moreinfo,
                    o = "custom" === e.moreinfo && !e.provider;
                if (n || o) return void r?.removeAttribute("href");
                const s = {
                    accu: t.link ?? "https://www.accuweather.com/",
                    msnw: kt("https://www.msn.com/en-xl/weather/forecast/"),
                    yhw: "https://www.yahoo.com/news/weather/",
                    windy: "https://www.windy.com/",
                    custom: e.provider ?? "",
                };
                (e.moreinfo || "") in s && r?.setAttribute("href", s[e.moreinfo]);
            })(),
            (() => {
                const n = Math.floor(t.feels_like),
                    r = Math.floor(t.temp),
                    c = "feelslike" === e.temperature ? n : r;
                let l = "";
                ("actual" === e.temperature && (l = kt("It is currently <temp1>°")),
                    "feelslike" === e.temperature &&
                    (l = kt("It currently feels like <temp2>°")),
                    "both" === e.temperature &&
                    (l = kt("It is currently <temp1>° and feels like <temp2>°")));
                const d = i?.querySelector("p"),
                    u = t.description[0].toUpperCase() + t.description.slice(1);
                ((l = l.replace("<temp1>", r.toString())),
                    (l = l.replace("<temp2>", n.toString())),
                    o &&
                    s &&
                    d &&
                    ((o.textContent = u + a),
                        (s.textContent = l),
                        (d.textContent = `${c}°`)));
            })(),
            (() => {
                const e = document.getElementById("forecast"),
                    n = c.getHours() > yr() ? "tomorrow" : "today";
                let o = "";
                ("today" === n && (o = kt("with a high of <temp1>° today")),
                    "tomorrow" === n && (o = kt("with a high of <temp1>° tomorrow")),
                    (o = o.replace("<temp1>", t.forecasted_high.toString())),
                    (o += a),
                    e && (e.textContent = o));
            })(),
            nr &&
            ((nr = !1),
                r?.classList.remove("wait"),
                setTimeout(() => r?.classList.remove("init"), 900)));
    }
    function sr(e) {
        const t = Xe(),
            n = t.getHours() < 12 || t.getHours() > yr(),
            o = "auto" === e ? n : "always" === e;
        if (o && !document.getElementById("forecast")) {
            const e = document.createElement("p");
            ((e.id = "forecast"),
                document.getElementById("description")?.appendChild(e));
        }
        o || document.querySelector("#forecast")?.remove();
    }
    var ir = Ht("f_location"),
        rr = Ht("f_units"),
        ar = Ht("f_geol"),
        cr = gt(async function () {
            const e = document.querySelector("#dl_cityfound"),
                t = document.getElementById("i_city").value;
            if ("" === t) return void ur();
            const n = new URL("https://weather.bonjourr.fr/");
            (n.searchParams.set("provider", "accuweather"),
                n.searchParams.set("data", "simple"),
                n.searchParams.set("geo", "true"),
                n.searchParams.set("query", encodeURIComponent(t)));
            try {
                const t = await fetch(n);
                if ((ur(), 200 !== t.status)) return;
                for (const { detail: n } of await t.json()) {
                    const t = document.createElement("option");
                    ((t.value = n), (t.textContent = n), e?.appendChild(t));
                }
            } catch (e) { }
        }, 600);
    async function lr(e) {
        const { weather: t, hide: n } = await ct.sync.get(["weather", "hide"]);
        let o = (await ct.local.get("lastWeather")).lastWeather;
        if (t && n) {
            if (
                ((function (e = "") {
                    return ["metric", "imperial"].includes(e);
                })(e.units) &&
                    (rr.load(),
                        (t.unit = e.units),
                        (o = (await gr(t, o)) ?? o),
                        rr.accept()),
                    (function (e = "") {
                        return ["auto", "always", "never"].includes(e);
                    })(e.forecast) && (t.forecast = e.forecast),
                    (function (e = "") {
                        return ["actual", "feelslike", "both"].includes(e);
                    })(e.temp) && (t.temperature = e.temp),
                    (function (e = "") {
                        return ["none", "msnw", "yhw", "windy", "accu", "custom"].includes(e);
                    })(e.moreinfo))
            ) {
                (document
                    .getElementById("weather_provider")
                    ?.classList.toggle("shown", "custom" === e.moreinfo),
                    (t.moreinfo = e.moreinfo));
            }
            if ((e.provider && (t.provider = e.provider), e.unhide)) {
                const { weatherdesc: e, weathericon: o } = n || {};
                e && o && mr(t);
            }
            e.suggestions
                ? (function (e) {
                    const t = document.querySelector("#f_location"),
                        n = document.querySelector("#i_city"),
                        o = e;
                    if (!t || !n) return;
                    void 0 !== o.data &&
                        (t?.classList.toggle("valid", n.value.length > 2), ur(), cr());
                })(e.suggestions)
                : e.city
                    ? (async function (e, t) {
                        let n = document.getElementById("i_city").value;
                        if ((ur(), !navigator.onLine))
                            return void ir.warn(kt("No internet connection"));
                        if (n === e.city) return;
                        ((n = nt(n, 64)), ir.load());
                        const o = { ...e, city: n };
                        let s;
                        try {
                            s = await gr(o, t);
                        } catch (e) {
                            return void ir.warn(kt(e));
                        }
                        if (!s) return void ir.warn(kt("Cannot reach weather service"));
                        s &&
                            ((e.city = n ?? "Paris"),
                                ir.accept("i_city", e.city),
                                ct.sync.set({ weather: e }),
                                ct.local.set({ lastWeather: s }),
                                or(e, s));
                    })(t, o)
                    : e.geol
                        ? (async function (e, t, n) {
                            if (
                                (ar.load(),
                                    !(function (e = "") {
                                        return ["precise", "approximate", "off"].includes(e);
                                    })(e))
                            )
                                return void ar.warn("bad geolocation type");
                            if ("precise" === e && !(await fr("precise")))
                                return void ar.warn("Cannot get precise location");
                            if (
                                ((t.geolocation = e),
                                    dr(t),
                                    ct.sync.set({ weather: t }),
                                    "off" === e)
                            )
                                return void ar.accept();
                            const o = (await gr(t, n)) ?? n;
                            o && (ct.local.set({ lastWeather: n }), or(t, o));
                            ar.accept();
                        })(e.geol, t, o)
                        : (ct.sync.set({ weather: t }),
                            Ct(() => dr(t)),
                            o && (ct.local.set({ lastWeather: o }), or(t, o)));
        }
    }
    function dr(e) {
        const t = document.querySelector("#i_city"),
            n = document.querySelector("#i_geol");
        t &&
            n &&
            ((n.value = e?.geolocation ?? !1),
                t.setAttribute("placeholder", e.city ?? "Paris"),
                document
                    .getElementById("location_options")
                    ?.classList.toggle("shown", "off" === e.geolocation));
    }
    function ur() {
        const e = document.querySelector("#dl_cityfound")?.children ?? [];
        for (const t of e) t.remove();
    }
    async function mr(e, t) {
        if ((sr(e.forecast), !t))
            return void (async function (e) {
                const t = await gr(e);
                t &&
                    ((e.city = t.approximation?.city ?? kt("City")),
                        ct.sync.set({ weather: e }),
                        ct.local.set({ lastWeather: t }),
                        or(e, t),
                        setTimeout(() => dr(e), 400));
            })(e);
        const n = Date.now() > (t?.timestamp ?? 0) + 36e5;
        if (navigator.onLine && n) {
            const n = await gr(e, t);
            if (n) return (ct.local.set({ lastWeather: n }), void or(e, n));
        }
        or(e, t);
    }
    async function gr(e, t) {
        if (!navigator.onLine) return t;
        const n = await fr(e.geolocation),
            o = new URL("https://weather.bonjourr.fr/");
        if (
            (o.searchParams.set("provider", "auto"),
                o.searchParams.set("data", "simple"),
                o.searchParams.set("lang", bt()),
                o.searchParams.set("unit", "metric" === e.unit ? "C" : "F"),
                n?.lat &&
                n?.lon &&
                (o.searchParams.set("lat", n.lat.toString()),
                    o.searchParams.set("lon", n.lon.toString())),
                "off" === e.geolocation && !n)
        ) {
            const t = e.city ?? "Paris",
                n = encodeURIComponent(t);
            o.searchParams.set("query", n);
        }
        const s = await fetch(o);
        if (200 !== s.status) throw new Error("Cannot get weather");
        const i = await s?.json();
        let [r, a] = [0, 0];
        const { temp: c, feels: l } = i.now,
            { description: d, icon: u } = i.now;
        let m = t?.forecasted_high ?? -273.15,
            g = t?.forecasted_timestamp ?? 0;
        if (i.daily) {
            const [e, t] = i.daily;
            new Date().getHours() > yr()
                ? ((m = t.high), (g = new Date(t.time).getTime()))
                : ((m = e.high), (g = new Date(e.time).getTime()));
        }
        if (i.sun) {
            const [e, t] = i.sun.rise,
                [n, o] = i.sun.set,
                s = new Date();
            (s.setHours(e, t, 0, 0),
                (a = s.getTime()),
                s.setHours(n, o, 0, 0),
                (r = s.getTime()),
                Qe(a, r));
        }
        return {
            timestamp: Date.now(),
            forecasted_timestamp: g,
            forecasted_high: m,
            description: d,
            feels_like: l,
            icon_id: u,
            sunrise: a,
            sunset: r,
            temp: c,
            link: i.meta.url ?? "",
            approximation: {
                ccode: i?.geo?.country,
                city: i?.geo?.city,
                lat: i?.geo?.lat,
                lon: i?.geo?.lon,
            },
        };
    }
    async function fr(e) {
        const t = { lat: 0, lon: 0 };
        return (
            "precise" === e &&
            (await new Promise((e) =>
                navigator.geolocation.getCurrentPosition(
                    (n) => {
                        ((t.lat = n.coords.latitude),
                            (t.lon = n.coords.longitude),
                            e(!0));
                    },
                    () => {
                        e(!1);
                    },
                ),
            )),
            0 !== t.lat && 0 !== t.lon ? t : void 0
        );
    }
    var pr = 0;
    function hr(e, t) {
        if (t) return void lr(t);
        if (!e) return;
        const n = !e.sync.main;
        (!((e.sync.hide?.weatherdesc && e.sync.hide?.weathericon) || n) &&
            mr(e.sync.weather, e.lastWeather),
            Ct(() => {
                dr(e.sync.weather);
            }),
            queueMicrotask(() => {
                (clearInterval(pr),
                    (pr = setInterval(async () => {
                        const e = await ct.sync.get(["weather", "hide", "main"]),
                            t = await ct.local.get("lastWeather");
                        mr(e.weather, t.lastWeather);
                    }, 12e5)));
            }));
    }
    function yr() {
        const e = new Date();
        return (e.setHours(Math.round(Qe().sunset / 60)), e.getHours());
    }
    function vr(e) {
        const t = {
            time: "i_time",
            main: "i_main",
            quicklinks: "i_quicklinks",
            quotes: "i_quotes",
            pomodoro: "i_pomodoro",
            searchbar: "i_sb",
        };
        for (const [n, o] of e) {
            const e = document.getElementById(t[n]);
            (document.getElementById(`${n}_options`)?.classList.toggle("shown", o),
                (e.checked = o));
        }
    }
    function br(e) {
        const t = {
            time: "time",
            main: "main",
            quicklinks: "linkblocks",
            quotes: "quotes_container",
            pomodoro: "pomodoro_container",
            searchbar: "sb_container",
        };
        for (const [n, o] of e) {
            document.getElementById(t[n])?.classList.toggle("hidden", !o);
        }
    }
    var kr,
        wr = L(x()),
        Er = document.querySelector("#element-mover"),
        Lr = { x: 0, y: 0 },
        xr = { x: 0, y: 0 };
    function _r(e) {
        const t = zi(
            document.documentElement?.style.getPropertyValue("--grid") || "",
        );
        if (0 === t.length) return;
        let n = !1,
            o = !1,
            s = !1,
            i = !1;
        const r = Mi(t, e),
            a = Ui(Ni(t)).length - 1,
            c = t[0].length - 1;
        for (const [e, l] of r)
            if (
                (0 === l && (n = !0),
                    0 === e && (s = !0),
                    e === c && (i = !0),
                    l === a && (o = !0),
                    l === t.length - 1)
            ) {
                const e = t.at(l)?.filter((e) => "." !== e);
                1 === new Set(e).size && (o = !0);
            }
        for (const e of document.querySelectorAll("#grid-mover button")) {
            const t = Number.parseInt(e.dataset.col || "0"),
                r = Number.parseInt(e.dataset.row || "0");
            let a = !1;
            (-1 === r && (a = n),
                1 === r && (a = o),
                -1 === t && (a = s),
                1 === t && (a = i),
                Gt(e, a));
        }
    }
    function Sr(e) {
        const t = zi(
            document.documentElement?.style.getPropertyValue("--grid") || "",
        );
        if (0 === t.length) return;
        const n = (e, t) => {
            const n = document.querySelector(`#grid-span-${e}s`);
            (Gt(
                document.querySelector(
                    "#grid-span-" + ("col" === e ? "rows" : "cols"),
                ),
                t,
            ),
                n?.classList.toggle("selected", t));
        },
            [o, s] = Mi(t, e)[0],
            i = t.map((e) => e[o]),
            r = [...t[s]],
            a = Pi(i, e),
            c = Pi(r, e);
        (n("col", a), n("row", c));
    }
    function qr(e) {
        const { box: t, text: n } = e ?? { box: "", text: "" },
            o = document.querySelectorAll("#box-alignment-mover button"),
            s = document.querySelectorAll("#text-alignment-mover button");
        for (const e of o)
            e.classList.toggle("selected", e.dataset.align === (t || "center"));
        for (const e of s)
            e.classList.toggle("selected", e.dataset.align === (n || "center"));
    }
    function Ir(e) {
        "single" !== e
            ? document
                .getElementById("grid-spanner-container")
                ?.classList.add("active")
            : document
                .getElementById("grid-spanner-container")
                ?.classList.remove("active");
    }
    var Cr,
        Tr = document.querySelector("#interface");
    function Ar(e, t) {
        if (e || t) {
            if (t) Br(t);
            else if (e) {
                const { grid: t, items: n } = $i(e);
                (Xi(n),
                    Yi(Ni(t)),
                    Ct(() => {
                        (!(function () {
                            const e = Object.entries(Bi),
                                t = document.querySelectorAll("#grid-mover button"),
                                n = document.querySelectorAll("#box-alignment-mover button"),
                                o = document.querySelectorAll("#text-alignment-mover button"),
                                s = document.querySelector("#grid-span-cols"),
                                i = document.querySelector("#grid-span-rows"),
                                r = document.querySelector("#b_resetlayout"),
                                a = document.querySelector("#close-mover");
                            for (const [t, n] of e)
                                (0, wr.onclickdown)(n, () => Br({ select: t }), {
                                    propagate: !1,
                                });
                            for (const e of t)
                                (0, wr.onclickdown)(e, () => {
                                    Br({ grid: { x: e.dataset.col, y: e.dataset.row } });
                                });
                            for (const e of n)
                                (0, wr.onclickdown)(e, () => {
                                    Br({ box: e.dataset.align });
                                });
                            for (const e of o)
                                (0, wr.onclickdown)(e, () => {
                                    Br({ text: e.dataset.align });
                                });
                            function c(e) {
                                const t = e.target;
                                ("HR" === t?.tagName ||
                                    "P" === t?.tagName ||
                                    "element-mover" === t?.id ||
                                    "close-mover-wrapper" === t?.id) &&
                                    Er?.addEventListener(
                                        e.type.includes("touch") ? "touchmove" : "mousemove",
                                        l,
                                    );
                            }
                            function l(e) {
                                const t = e.touches ? e.touches[0] : e,
                                    n = t.clientX,
                                    o = t.clientY;
                                0 !== Lr.x || 0 !== Lr.y
                                    ? ((xr = { x: n - Lr.x, y: o - Lr.y }),
                                        Er &&
                                        ((document.documentElement.style.overscrollBehavior =
                                            "none"),
                                            (Er.style.transform = `translate(${xr.x}px, ${xr.y}px)`)))
                                    : (Lr = { x: n - xr.x, y: o - xr.y });
                            }
                            function d() {
                                ((Lr = { x: 0, y: 0 }),
                                    Er.style.removeProperty("cursor"),
                                    document.documentElement.style.removeProperty(
                                        "overscroll-behavior",
                                    ),
                                    Er?.removeEventListener("mousemove", l),
                                    Er?.removeEventListener("touchmove", l));
                            }
                            ((0, wr.onclickdown)(s, () => Br({ span: "col" })),
                                (0, wr.onclickdown)(i, () => Br({ span: "row" })),
                                a?.addEventListener("click", () => Br({ toggle: !1 })),
                                r?.addEventListener("click", () => Br({ reset: !0 })),
                                Er?.addEventListener("mousedown", c),
                                Er?.addEventListener("mouseup", d),
                                Er?.addEventListener("mouseleave", d),
                                Er?.addEventListener("touchstart", c, { passive: !1 }),
                                Er?.addEventListener("touchend", d));
                        })(),
                            Ir(e.selection));
                    }));
            }
        } else Br({ reset: !0 });
    }
    async function Br(e) {
        const t = await ct.sync.get();
        (t.move || (t.move = structuredClone(Ge.move)),
            e.grid &&
            (function (e, t) {
                if (!Cr) return;
                const n = Number.parseInt(t?.y || "0"),
                    o = Number.parseInt(t?.x || "0"),
                    s = $i(e),
                    i = Mi(s.grid, Cr),
                    r = [];
                let a = s.grid;
                i.some(([e]) => void 0 === a[e + n]) &&
                    ("single" === e.selection && a.push(["."]),
                        "double" === e.selection && a.push([".", "."]),
                        "triple" === e.selection && a.push([".", ".", "."]));
                for (const [e, t] of i) {
                    const s = a[t + n][e + o];
                    "." !== s && r.push(s);
                }
                for (const e of r)
                    Mi(a, e).length > 1 && (a = Ri(a, e, { remove: !0 }));
                for (const [e, t] of i) {
                    const s = Math.min(Math.max(t + n, 0), a.length - 1),
                        i = Math.min(Math.max(e + o, 0), a[0].length - 1),
                        r = a[t][e];
                    ((a[t][e] = a[s][i]), (a[s][i] = r));
                }
                for (let e = 0; e < a.length; e++) Di(a, e) && a.splice(e, 1);
                ((s.grid = a),
                    (e.layouts[e.selection] = s),
                    ct.sync.set({ move: e }),
                    Yi(a),
                    _r(Cr));
            })(t.move, e.grid),
            e.span &&
            (function (e, t) {
                if (!Cr) return;
                const n = $i(e),
                    o = Ri(n.grid, Cr, { toggle: t });
                ((e.layouts[e.selection] = { items: n.items, grid: o }),
                    ct.sync.set({ move: e }),
                    Yi(o),
                    _r(Cr),
                    Sr(Cr));
            })(t.move, e.span),
            e.layout &&
            (function (e, t) {
                if (t === e.move.selection) return;
                ("single" !== t && "double" !== t && "triple" !== t) ||
                    (e.move.selection = t);
                const n = Ui(Ni($i(e).grid)),
                    o = [
                        ["time", n.includes("time")],
                        ["main", n.includes("main")],
                        ["quotes", n.includes("quotes")],
                        ["pomodoro", n.includes("pomodoro")],
                        ["searchbar", n.includes("searchbar")],
                        ["quicklinks", n.includes("quicklinks")],
                    ],
                    s = Wi(o, e);
                ct.sync.set(s);
                const i = Fn();
                (i.first(() => {
                    tr("out");
                }),
                    i.after(() => {
                        const e = $i(s);
                        (Xi(e.items),
                            Yi(e.grid),
                            (function (e) {
                                for (const t of document.querySelectorAll(
                                    "#grid-layout button",
                                ))
                                    t.classList.toggle("selected", t.dataset.layout === e);
                            })(s.move.selection),
                            Ir(s.move.selection),
                            er(),
                            vr(o),
                            br(o),
                            Cr && (_r(Cr), qr(e.items[Cr])));
                    }),
                    i.finally(() => {
                        tr("in");
                    }),
                    i.transition(200));
            })(t, e.layout),
            e.reset &&
            (function (e) {
                const t = Fi(e);
                let n = "";
                if (
                    !1 ===
                    (function () {
                        const e = document.getElementById("b_resetlayout"),
                            t = !!e.dataset.confirm;
                        return (
                            clearTimeout(kr),
                            !1 === t
                                ? ((e.textContent = kt("Are you sure?")),
                                    (e.dataset.confirm = "true"),
                                    (kr = setTimeout(() => {
                                        ((e.textContent = kt("Reset layout")),
                                            (e.dataset.confirm = ""));
                                    }, 1e3)))
                                : ((e.textContent = kt("Reset layout")),
                                    (e.dataset.confirm = "")),
                            t
                        );
                    })()
                )
                    return;
                for (const o of t) n = Hi(n, o, e.move.selection);
                ((e.move.layouts[e.move.selection] = { grid: zi(n), items: {} }),
                    ct.sync.set(e),
                    er(),
                    Yi(n),
                    Xi({
                        quicklinks: void 0,
                        main: void 0,
                        time: void 0,
                        searchbar: void 0,
                        quotes: void 0,
                        pomodoro: void 0,
                    }));
            })(t),
            e.widget &&
            (function (e, t) {
                if (!t) return;
                const [n, o] = t,
                    s = o ? Hi : Ki,
                    i = Fn(),
                    r = e.move.selection,
                    a = $i(e),
                    c = zi(s(Ni(a.grid), n, r));
                e.move.layouts[r] = { items: a.items, grid: c };
                const l = Wi([t], e);
                (ct.sync.set(l),
                    i.first(() => {
                        (vr([[n, o]]), tr("out"));
                    }),
                    i.after(() => {
                        const e = $i(l);
                        (Yi(e.grid),
                            Xi(e.items),
                            br([[n, o]]),
                            er(),
                            Oi() && (o ? Zi(n) : Qi(n)),
                            "main" === n &&
                            !0 === o &&
                            ct.local.get("lastWeather").then((e) => {
                                hr({ sync: l, lastWeather: e.lastWeather });
                            }));
                    }),
                    i.finally(() => {
                        tr("in");
                    }),
                    i.transition(200));
            })(t, e.widget),
            e.select &&
            (function (e, t) {
                if ((er(), !(Oi() && t))) return;
                ((Cr = t),
                    qr($i(e).items[Cr]),
                    Sr(Cr),
                    _r(Cr),
                    document
                        .getElementById(`ove-overlay-${Cr}`)
                        ?.classList.add("selected"),
                    document.getElementById("element-mover")?.classList.add("active"));
            })(t.move, e.select),
            void 0 !== e.box && jr(t.move, e.box, "box"),
            void 0 !== e.text && jr(t.move, e.text, "text"),
            void 0 !== e.toggle &&
            (function (e, t) {
                const n = document.getElementById("element-mover"),
                    o = document.getElementById("b_editmove"),
                    s = Tr?.classList.contains("move-edit"),
                    i = null === document.querySelector(".move-overlay");
                if (t ?? !s) {
                    if (i) {
                        ((o.textContent = kt("Close")),
                            Tr?.classList.add("move-edit"),
                            n.classList.remove("hidden"));
                        for (const t of Fi(e)) Zi(t);
                    }
                } else
                    ((o.textContent = kt("Open")),
                        Tr?.classList.remove("move-edit"),
                        n.classList.add("hidden"),
                        Qi());
                (n?.classList.remove("active"), er());
            })(t, e.toggle),
            void 0 !== e.overlay &&
            (function (e, t) {
                const n = document
                    .getElementById("interface")
                    ?.classList?.contains("move-edit"),
                    o = document.querySelector(".move-overlay");
                if (!n && !1 === t) return void Qi();
                if (!o) {
                    const t = Ui(Ni($i(e).grid));
                    for (const e of t) Zi(e);
                }
            })(t.move, e.overlay));
    }
    function jr(e, t, n) {
        if (!Cr) return;
        const o = $i(e),
            s = o.items[Cr] ?? { box: "", text: "" };
        ("box" === n && (s.box = t),
            "text" === n && (s.text = t),
            (o.items[Cr] = s),
            (e.layouts[e.selection] = o),
            ct.sync.set({ move: e }),
            qr(s),
            Ji(Cr, s));
    }
    async function Or(e, t) {
        if (((e ??= {}), t?.isEvent)) {
            const t = { ...(await ct.sync.get("hide")).hide, ...e };
            ct.sync.set({ hide: t });
        }
        for (const [t, n] of Object.entries(e))
            for (const e of document.querySelectorAll(`[data-hide="${t}"]`))
                e?.classList.toggle("he_hidden", n);
    }
    async function Pr(e) {
        try {
            return await fetch(`https://services.bonjourr.fr${e}`);
        } catch (e) { }
    }
    var $r = [1];
    function zr(e) {
        return (e < 10 ? "0" : "") + e.toString();
    }
    function Nr(e) {
        return ["top-left", "top-right", "bottom-left", "bottom-right"].includes(
            e ?? "",
        );
    }
    function Mr() {
        const e = document.querySelectorAll(".worldclocks-item"),
            t = document.querySelectorAll(".worldclocks-item input");
        let n = !1;
        e.forEach((e, o) => {
            const s = !!t[o]?.value,
                i = !!t[o - 1]?.value;
            (e?.classList.toggle("shown", 0 === o || s || i), !n && s && (n = !0));
        });
    }
    function Dr(e) {
        const t = document.getElementById("timezone_options"),
            n = e.clock.worldclocks && !!e?.worldclocks[0]?.region;
        t?.classList.toggle("shown", !n);
    }
    var Rr,
        Fr = Math.random() > 0.8 ? 1 : 0;
    function Wr({ mode: e, name: t, custom: n }) {
        const o = Xe(),
            s = document.getElementById("greetings"),
            i = document.getElementById("greeting"),
            r = document.getElementById("greeting-name"),
            a = Fr,
            c = o.getHours();
        let l;
        if (
            ((l =
                c < 3
                    ? "evening"
                    : c < 5
                        ? "night"
                        : c < 12
                            ? "morning"
                            : c < 18
                                ? "afternoon"
                                : "evening"),
                "custom" === e && n && n[l])
        ) {
            const e = t ? n[l].replace("$name", t) : n[l];
            ((s.style.textTransform = "none"),
                (i.textContent = e),
                (r.textContent = ""));
        } else {
            const e = {
                morning: "Good morning",
                afternoon: "Good afternoon",
                evening: "Good evening",
                night: ["Good night", "Sweet dreams"][a],
            }[l];
            ((s.style.textTransform =
                t || (a && "night" === l) ? "none" : "capitalize"),
                (i.textContent = kt(e) + (t ? ", " : "")),
                (r.textContent = t ?? ""));
        }
    }
    function Ur(e) {
        return Math.floor(e);
    }
    function Hr(e, t, n) {
        const o = Ur((14 - t) / 12),
            s = n + 4800 - o,
            i = t + 12 * o - 3;
        let r =
            e +
            Ur((153 * i + 2) / 5) +
            365 * s +
            Ur(s / 4) -
            Ur(s / 100) +
            Ur(s / 400) -
            32045;
        return (
            r < 2299161 &&
            (r = e + Ur((153 * i + 2) / 5) + 365 * s + Ur(s / 4) - 32083),
            r
        );
    }
    function Kr(e, t) {
        return Ur(
            ((function (e) {
                const t = (e - 2451545) / 36525,
                    n = t * t,
                    o = Math.PI / 180,
                    s = 357.5291 + 35999.0503 * t - 1559e-7 * n - 48e-8 * t * n,
                    i = 280.46645 + 36000.76983 * t + 3032e-7 * n;
                let r = (1.9146 - 0.004817 * t - 14e-6 * n) * Math.sin(o * s);
                r =
                    r +
                    (0.019993 - 101e-6 * t) * Math.sin(2 * o * s) +
                    29e-5 * Math.sin(3 * o * s);
                let a = i + r;
                return ((a *= o), (a -= 2 * Math.PI * Ur(a / (2 * Math.PI))), a);
            })(e - 0.5 - t / 24) /
                Math.PI) *
            6,
        );
    }
    function Gr(e, t) {
        return Ur(
            (function (e) {
                let t;
                const n = e / 1236.85,
                    o = n * n,
                    s = o * n,
                    i = Math.PI / 180;
                let r = 2415020.75933 + 29.53058868 * e + 1178e-7 * o - 155e-9 * s;
                r += 33e-5 * Math.sin((166.56 + 132.87 * n - 0.009173 * o) * i);
                const a = 359.2242 + 29.10535608 * e - 333e-7 * o - 347e-8 * s,
                    c = 306.0253 + 385.81691806 * e + 0.0107306 * o + 1236e-8 * s,
                    l = 21.2964 + 390.67050646 * e - 0.0016528 * o - 239e-8 * s;
                let d =
                    (0.1734 - 393e-6 * n) * Math.sin(a * i) +
                    0.0021 * Math.sin(2 * i * a);
                return (
                    (d = d - 0.4068 * Math.sin(c * i) + 0.0161 * Math.sin(2 * i * c)),
                    (d -= 4e-4 * Math.sin(3 * i * c)),
                    (d =
                        d + 0.0104 * Math.sin(2 * i * l) - 0.0051 * Math.sin(i * (a + c))),
                    (d =
                        d -
                        0.0074 * Math.sin(i * (a - c)) +
                        4e-4 * Math.sin(i * (2 * l + a))),
                    (d =
                        d -
                        4e-4 * Math.sin(i * (2 * l - a)) -
                        6e-4 * Math.sin(i * (2 * l + c))),
                    (d =
                        d +
                        0.001 * Math.sin(i * (2 * l - c)) +
                        5e-4 * Math.sin(i * (2 * c + a))),
                    (t =
                        n < -11
                            ? 0.001 + 839e-6 * n + 2261e-7 * o - 845e-8 * s - 81e-9 * n * s
                            : 265e-6 * n - 278e-6 + 262e-6 * o),
                    r + d - t
                );
            })(e) +
            0.5 +
            t / 24,
        );
    }
    function Vr(e, t) {
        const n = Ur((Hr(31, 12, e) - 2415021) / 29.530588853);
        let o = Gr(n, t);
        return (Kr(o, t) >= 9 && (o = Gr(n - 1, t)), o);
    }
    function Yr(e, t, n, o) {
        const s = Hr(e, t, n),
            i = Ur((s - 2415021.076998695) / 29.530588853);
        let r = Gr(i + 1, o);
        r > s && (r = Gr(i, o));
        let a,
            c = Vr(n, o),
            l = c;
        c >= r ? ((a = n), (c = Vr(n - 1, o))) : ((a = n + 1), (l = Vr(n + 1, o)));
        const d = s - r + 1,
            u = Ur((r - c) / 29);
        let m = 0,
            g = u + 11;
        if (l - c > 365) {
            const e = (function (e, t) {
                const n = Ur((e - 2415021.076998695) / 29.530588853 + 0.5);
                let o = 0,
                    s = 1,
                    i = Kr(Gr(n + s, t), t);
                do {
                    ((o = i), s++, (i = Kr(Gr(n + s, t), t)));
                } while (i !== o && s < 14);
                return s - 1;
            })(c, o);
            u >= e && ((g = u + 10), u === e && (m = 1));
        }
        return (g > 12 && (g -= 12), g >= 11 && u < 4 && (a -= 1), [d, g, a, m]);
    }
    function Jr(e, t, n, o) {
        const s = e.querySelector(".clock-date"),
            i = e.querySelector(".clock-date-aa"),
            r = e.querySelector(".clock-date-bb"),
            a = e.querySelector(".clock-date-cc"),
            c = e.querySelector(".clock-date-secondary"),
            l = bt().replaceAll("_", "-"),
            d = new Intl.DateTimeFormat(l, { day: "numeric" }).format(t),
            u = new Intl.DateTimeFormat(l, { month: "long" }).format(t),
            m = new Intl.DateTimeFormat(l, { weekday: "long" }).format(t);
        if (
            (s.classList.remove("eu", "us", "cn"), s.classList.add(n), "auto" === n)
        ) {
            const e = new Intl.DateTimeFormat(l, {
                weekday: "long",
                month: "long",
                day: "numeric",
            });
            ((i.textContent = e.format(t)),
                (r.textContent = ""),
                (a.textContent = ""));
        }
        ("eu" === n &&
            ((i.textContent = m), (r.textContent = d), (a.textContent = u)),
            "us" === n &&
            ((i.textContent = m), (r.textContent = u), (a.textContent = d)),
            "cn" === n &&
            ((i.textContent = u), (r.textContent = d), (a.textContent = m)),
            (c.textContent =
                "vi" !== l || ("auto" !== o && "Asia/Ho_Chi_Minh" !== o)
                    ? ""
                    : (function (e) {
                        const t = Yr(e.getDate(), e.getMonth() + 1, e.getFullYear(), 7),
                            n = `${["Giáp", "Ất", "Bính", "Đinh", "Mậu", "Kỷ", "Canh", "Tân", "Nhâm", "Quý"][(t[2] + 6) % 10]} ${["Tý", "Sửu", "Dần", "Mão", "Thìn", "Tỵ", "Ngọ", "Mùi", "Thân", "Dậu", "Tuất", "Hợi"][(t[2] + 8) % 12]}`,
                            o = t[3] ? " (nhuận)" : "";
                        return `Âm lịch: ${t[0]} tháng ${t[1]}${o} năm ${n}`;
                    })(t)));
    }
    function Xr(e) {
        const { clock: t, world: n, dateformat: o, greetings: s } = e;
        (document.getElementById("time")?.classList.toggle("is-analog", t.analog),
            document.getElementById("time")?.classList.toggle("seconds", t.seconds),
            document.querySelectorAll(".clock-wrapper").forEach((e, t) => {
                t > 0 && e.remove();
            }));
        const i = [];
        var r;
        function a(e) {
            for (let n = 0; n < i.length; n++) {
                const { region: s, timezone: r } = i[n],
                    a = Zr(n),
                    c = a.querySelector(".clock-region"),
                    l = Xe(r),
                    d = 0 === l.getMinutes();
                (t.analog ? ea(a, t, r) : Qr(a, t, r),
                    (d || e) && Jr(a, l, o, r),
                    c && (c.textContent = s));
            }
            Wr(s);
        }
        (!(function () {
            const e = document.querySelector(".digital-number-width");
            if (!e) return;
            const t = e.offsetWidth;
            $r = [1];
            for (let n = 1; n < 6; n++)
                ((e.textContent = n.toString()),
                    $r.push(Math.round((e.offsetWidth / t) * 10) / 10));
        })(),
            t.worldclocks && i.push(...n.filter(({ region: e }) => e)),
            0 === i.length && i.push({ region: "", timezone: t.timezone }),
            (r = i[0].timezone),
            (Ie = Xe(r)),
            a(!0),
            clearInterval(Rr),
            (Rr = setInterval(a, 1e3)));
    }
    function Zr(e) {
        const t = document.getElementById("time-container"),
            n = document.querySelector(`.clock-wrapper[data-index="${e}"]`);
        if (n) return n;
        const o = document.getElementById("clock-wrapper")?.cloneNode(!0);
        return (
            o.removeAttribute("id"),
            (o.dataset.index = e.toString()),
            t?.appendChild(o),
            o
        );
    }
    function Qr(e, t, n) {
        const o = Xe(n),
            s = e.querySelector(".digital"),
            i = e.querySelector(".digital-hh"),
            r = e.querySelector(".digital-mm"),
            a = e.querySelector(".digital-ss"),
            c = e.querySelector(".digital-ampm"),
            l = zr(o.getMinutes()),
            d = zr(o.getSeconds());
        let u = t.ampm ? o.getHours() % 12 : o.getHours();
        if (s) {
            if (
                (t.ampmlabel ? (s.dataset.ampmLabel = "") : delete s.dataset.ampmLabel,
                    t.ampm
                        ? (s.dataset.ampm = o.getHours() < 12 ? "am" : "pm")
                        : delete s.dataset.ampm,
                    t.ampm && 0 === u && (u = 12),
                    t.seconds)
            ) {
                const e = (function (e) {
                    return Math.min(...$r) + $r[e];
                })(o.getSeconds() < 10 ? 0 : Math.floor(o.getSeconds() / 10)).toFixed(
                    1,
                );
                s.style.setProperty("--seconds-width", `${e}ch`);
            }
            (s.classList.toggle("zero", !t.ampm && u < 10),
                (i.textContent = u.toString()),
                (r.textContent = l.toString()),
                (a.textContent = d.toString()),
                t.ampm &&
                (t.ampmposition
                    ? (s.dataset.ampmposition = t.ampmposition)
                    : (s.dataset.ampmposition = "top-left"),
                    "top-right" === t.ampmposition || "bottom-right" === t.ampmposition
                        ? c &&
                        s.lastElementChild !== c &&
                        s.insertBefore(c, s.lastElementChild)
                        : ("top-left" !== t.ampmposition &&
                            "bottom-left" !== t.ampmposition) ||
                        (c &&
                            s.firstElementChild !== c &&
                            s.insertBefore(c, s.firstElementChild))));
        }
    }
    function ea(e, t, n) {
        const o = Xe(n),
            s = (6 * (o.getMinutes() + o.getSeconds() / 60)).toFixed(1),
            i = (30 * ((o.getHours() % 12) + o.getMinutes() / 60)).toFixed(1),
            r = (6 * o.getSeconds()).toFixed(1);
        (e.querySelector(".analog-hours")?.style.setProperty("--deg", `${i}deg`),
            e.querySelector(".analog-minutes")?.style.setProperty("--deg", `${s}deg`),
            t.seconds &&
            e
                .querySelector(".analog-seconds")
                ?.style.setProperty("--deg", `${r}deg`));
    }
    var ta = {
        face: "none",
        hands: "modern",
        shape: "round",
        border: "#ffff",
        background: "#fff2",
    },
        na = /zh-CN|zh-HK|ja/,
        oa = [
            "Europe/Paris",
            "America/Sao_Paulo",
            "America/Los_Angeles",
            "Asia/Tokyo",
            "Asia/Kolkata",
        ],
        sa = ["Paris", "New York", "Tokyo", "Lisbon", "Los Angeles"];
    function ia(e, t) {
        if (t)
            return void (async function (e) {
                const t = await ct.sync.get(),
                    n = t.analogstyle ?? structuredClone(ta);
                void 0 !== e.analog &&
                    (document
                        .getElementById("analog_options")
                        ?.classList.toggle("shown", e.analog),
                        document
                            .getElementById("digital_options")
                            ?.classList.toggle("shown", !e.analog));
                (function (e = "") {
                    return ["auto", "eu", "us", "cn"].includes(e);
                })(e.dateformat) &&
                    ((t.dateformat = e.dateformat),
                        ct.sync.set({ dateformat: e.dateformat }));
                void 0 !== e.greeting &&
                    ((t.greeting = nt(e.greeting, 64)),
                        Wr({
                            mode: t.greetingsmode,
                            name: t.greeting,
                            custom: t.greetingscustom,
                        }),
                        ct.sync.set({ greeting: t.greeting }));
                void 0 !== e.greetingsize &&
                    (ca(e.greetingsize), ct.sync.set({ greetingsize: e.greetingsize }));
                if (void 0 !== e.greetingsmode) {
                    const n = document.getElementById("greetingscustom_options"),
                        o = e.greetingsmode;
                    ((t.greetingsmode = o),
                        ct.sync.set({ greetingsmode: o }),
                        n?.classList.toggle("shown", "custom" === o),
                        Wr({ mode: o, name: t.greeting, custom: t.greetingscustom }));
                }
                if (void 0 !== e.greetingscustom) {
                    const n = { ...t.greetingscustom, ...e.greetingscustom };
                    ((t.greetingscustom = n),
                        ct.sync.set({ greetingscustom: n }),
                        Wr({ mode: t.greetingsmode, name: t.greeting, custom: n }));
                }
                ((o = e.hands),
                    ["modern", "swiss", "classic", "braun", "apple"].includes(o ?? "") &&
                    (n.hands = e.hands));
                var o;
                (function (e) {
                    return ["round", "square", "rectangle"].includes(e ?? "");
                })(e.shape) && (n.shape = e.shape);
                (function (e) {
                    return [
                        "none",
                        "number",
                        "roman",
                        "marks",
                        "swiss",
                        "braun",
                    ].includes(e ?? "");
                })(e.face) && (n.face = e.face);
                if (e.background || e.border) {
                    const t = e.background ? "background" : "border";
                    return (
                        (n[t] = Xt(`#analog-${t}-range`)),
                        ra(n),
                        "opacity" === e?.[t] && pt({ analogstyle: n }),
                        void ("shade" === e?.[t] && ct.sync.set({ analogstyle: n }))
                    );
                }
                void 0 !== e.worldclocks &&
                    ((t.clock.worldclocks = e.worldclocks), Dr(t));
                if (void 0 !== e.world) {
                    const n = e.world.index,
                        o = { region: sa[n], timezone: oa[n] },
                        s = t.worldclocks?.[n] ?? o,
                        { region: i, timezone: r } = e.world;
                    (void 0 !== i && (s.region = i),
                        void 0 !== r && (s.timezone = r),
                        (t.worldclocks[n] = s),
                        Mr(),
                        Dr(t));
                }
                ((t.clock = {
                    ampm: e.ampm ?? t.clock.ampm,
                    size: e.size ?? t.clock.size,
                    analog: e.analog ?? t.clock.analog,
                    seconds: e.seconds ?? t.clock.seconds,
                    timezone: e.timezone ?? t.clock.timezone,
                    ampmlabel: e.ampmlabel ?? t.clock.ampmlabel,
                    ampmposition: Nr(e.ampmposition)
                        ? e.ampmposition
                        : t.clock.ampmposition,
                    worldclocks: e.worldclocks ?? t.clock.worldclocks,
                }),
                    ct.sync.set({
                        clock: t.clock,
                        worldclocks: t.worldclocks,
                        analogstyle: n,
                        dateformat: t.dateformat,
                    }),
                    Xr({
                        clock: t.clock,
                        world: t.worldclocks,
                        dateformat: t.dateformat,
                        greetings: {
                            name: t.greeting,
                            mode: t.greetingsmode,
                            custom: t.greetingscustom,
                        },
                    }),
                    ra(t.analogstyle),
                    aa(t.clock.size));
            })(t);
        const n = e?.clock ?? { ...Ge.clock },
            o = e?.worldclocks ?? { ...Ge.worldclocks },
            s = e?.dateformat || "eu",
            i = {
                name: e?.greeting || "",
                mode: e?.greetingsmode || "auto",
                custom: e?.greetingscustom,
            };
        try {
            (Xr({ clock: n, world: o, greetings: i, dateformat: s }),
                ca(e?.greetingsize),
                ra(e?.analogstyle),
                aa(n.size),
                Co("clock"),
                Ct(Mr));
        } catch (e) { }
    }
    function ra(e = structuredClone(ta)) {
        const { face: t, shape: n, hands: o } = e,
            s = document.getElementById("time"),
            i = document.querySelectorAll(".analog .analog-face span"),
            r = Number.parseInt(e.background.slice(4), 16),
            a = e.background?.includes("fff") && r > 7,
            c = 0 === r;
        let l = ["12", "3", "6", "9"];
        const d = bt();
        ("am" === d
            ? (l = ["Գ", "Զ", "Թ", "ԺԲ"])
            : "ar" === d
                ? (l = ["٣", "٦", "٩", "١٢"])
                : "fa" === d
                    ? (l = ["۳", "۶", "۹", "۱۲"])
                    : d.match(na) && (l = ["三", "六", "九", "十二"]),
            i.forEach((e, n) => {
                e.textContent =
                    "roman" === t
                        ? ["XII", "III", "VI", "IX"][n % 4]
                        : "marks" === t
                            ? ["│", "―", "│", "―"][n % 4]
                            : "number" === t
                                ? l[n % 4]
                                : "";
            }),
            (s.dataset.face = "swiss" === t || "braun" === t ? t : ""),
            (s.dataset.shape = n || ""),
            (s.dataset.hands = o || ""),
            s.classList.toggle("transparent", c),
            s.classList.toggle("white-opaque", a),
            s.style.setProperty("--analog-border", e.border),
            s.style.setProperty("--analog-background", e.background));
    }
    function aa(e = 5) {
        document.documentElement.style.setProperty(
            "--clock-size",
            `${e.toString()}em`,
        );
    }
    function ca(e = "3") {
        document.documentElement.style.setProperty("--greeting-size", `${e}em`);
    }
    var la = Ht("f_customfont"),
        da = (() => {
            const e = {
                placeholder: "SF Pro Display",
                weights: [
                    "100",
                    "200",
                    "300",
                    "400",
                    "500",
                    "600",
                    "700",
                    "800",
                    "900",
                ],
            };
            return "windows" === De
                ? {
                    placeholder: "Segoe UI",
                    weights: ["300", "400", "600", "700", "800"],
                }
                : "android" === De
                    ? {
                        placeholder: "Roboto",
                        weights: ["100", "300", "400", "500", "700", "900"],
                    }
                    : "mac" === De || "ios" === De
                        ? e
                        : {
                            placeholder: "Fira Sans",
                            weights: [
                                "100",
                                "200",
                                "300",
                                "400",
                                "500",
                                "600",
                                "700",
                                "800",
                                "900",
                            ],
                        };
        })();
    function ua(e, t) {
        if (t) ma(t);
        else if (e)
            try {
                const t = (function (e) {
                    if (e?.weightlist) return e;
                    e.availWeights && (e.weightlist = e.availWeights);
                    return (
                        (e.system = va(e.family)),
                        (e.availWeights = void 0),
                        (e.url = void 0),
                        ct.local.remove("fontface"),
                        ct.local.remove("fonts"),
                        ct.sync.remove("font"),
                        setTimeout(() => ct.sync.set({ font: e })),
                        e
                    );
                })(e);
                (fa(t),
                    Co("fonts"),
                    Ct(() => {
                        !(function (e) {
                            const t = e && e.weightlist.length > 0;
                            ya(t ? e.weightlist : da.weights);
                        })(t);
                    }));
            } catch (e) { }
    }
    async function ma({
        family: e,
        weight: t,
        size: n,
        lang: o,
        autocomplete: s,
    }) {
        if (s) return void ha();
        const i = await ct.sync.get("font");
        (void 0 !== e &&
            (i.font = await (async function (e, t) {
                const n = document.getElementById("i_weight"),
                    o = 0 === t.length ? "none" : va(t) ? "system" : "fontsource";
                let s = {
                    family: "",
                    system: !0,
                    size: e.font.size,
                    weight: "windows" === De ? "400" : "300",
                    weightlist: da.weights,
                };
                switch (o) {
                    case "fontsource": {
                        la.load();
                        const n = await ga(s, t);
                        if (
                            (n &&
                                navigator.onLine &&
                                ((s = { ...s, ...n }),
                                    fa(s),
                                    await (function (e) {
                                        return new Promise((t) => {
                                            let n = 0,
                                                o = va(e);
                                            const s = setInterval(() => {
                                                if (o || 100 === n) return (clearInterval(s), t(!0));
                                                ((o = va(e)), n++);
                                            }, 100);
                                        });
                                    })(t),
                                    la.accept("i_customfont", t),
                                    ia(void 0, {})),
                                "" === s.family)
                        )
                            return (la.warn(kt("Cannot load this font")), e.font);
                        break;
                    }
                    case "system":
                        ((s.family = t), fa(s), la.accept("i_customfont", t));
                        break;
                    default:
                        (fa(s), la.accept("i_customfont", da.placeholder));
                }
                return (ia(void 0, {}), ya(s.weightlist), (n.value = s.weight), s);
            })(i, e)),
            t && ((i.font.weight = t || "400"), fa(i.font)),
            n && ((i.font.size = n), pa(n)),
            o
                ? (async function (e) {
                    if (!e.family || e?.system) return;
                    const t = await ga(e, e.family);
                    if (void 0 === t) return void ma({ family: "" });
                    ((e.family = t.family),
                        (e.weight = t.weight),
                        (e.weightlist = t.weightlist),
                        fa(e),
                        ha(!0));
                })(i.font)
                : pt({ font: i.font }));
    }
    async function ga(e, t) {
        const n = (await (await Pr("/fonts"))?.json()) ?? [];
        let o;
        for (const e of n) {
            const n = e.subsets.includes(ba()),
                s = e.family.toLowerCase() === t.toLowerCase();
            n && s && (o = e);
        }
        if (o)
            return (
                (e.weight = "400"),
                (e.system = !1),
                (e.family = t),
                (e.weightlist = o.weights.map((e) => e.toString())),
                e
            );
    }
    function fa({ family: e, size: t, weight: n, system: o }) {
        const s =
            Number.parseInt(n) > 100 ? da.weights[da.weights.indexOf(n) - 1] : n,
            i = ba(),
            r = e.toLocaleLowerCase().replaceAll(" ", "-"),
            a = document.getElementById("fontface");
        if (!o) {
            let t = `\n\t\t\t@font-face {font-family: "${e}";\n\t\t\t\tsrc: url(https://cdn.jsdelivr.net/fontsource/fonts/${r}@latest/latin-${n}-normal.woff2) format('woff2');\n\t\t\t}\n\t\t`;
            ("latin" !== i && (t += t.replace("latin", i)),
                a && (a.textContent += t));
        }
        (document.documentElement.style.setProperty(
            "--font-family",
            e ? `"${e}"` : null,
        ),
            document.documentElement.style.setProperty("--font-weight", n),
            document.documentElement.style.setProperty(
                "--font-weight-clock",
                e ? n : s,
            ),
            pa(t));
    }
    function pa(e) {
        (document.documentElement.style.setProperty(
            "--font-size",
            Number.parseInt(e) / 16 + "em",
        ),
            document.documentElement.style.setProperty(
                "--pomodoro-font-size",
                `${Number.parseInt(e)}px`,
            ));
    }
    async function ha(e) {
        const t = document.querySelector("#dl_fontfamily");
        if (e && t?.childNodes) for (const e of t.childNodes) e.remove();
        if (0 === t?.childElementCount) {
            const e = (await (await Pr("/fonts"))?.json()) ?? [],
                n = new DocumentFragment(),
                o = ba();
            for (const t of e)
                if (t.subsets.includes(o)) {
                    const e = document.createElement("option");
                    ((e.textContent = t.family), (e.value = t.family), n.appendChild(e));
                }
            t?.appendChild(n);
        }
    }
    function ya(e) {
        const t = document.querySelectorAll("#i_weight option");
        for (const n of t) n.classList.toggle("hidden", !1 === e.includes(n.value));
    }
    function va(e) {
        const t = document.createElement("p");
        (t.setAttribute(
            "style",
            "position: absolute; opacity: 0; font-family: invalid font;",
        ),
            (t.textContent = `mqlskdjfhgpaozieurytwnxbcv?./,;:1234567890${kt("New tab")}`),
            document.getElementById("interface")?.prepend(t));
        const n = t.getBoundingClientRect().width;
        t.style.fontFamily = `'${e}'`;
        const o = n !== t.getBoundingClientRect().width;
        return (t.remove(), o);
    }
    function ba(e = bt()) {
        let t = "latin";
        return (e in Ae && (t = Ae[e]), t);
    }
    var ka,
        wa = Ht("f_sbrequest"),
        Ea =
            /^(?!.*\s)(?:https?:\/\/)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9-]{2,})/i,
        La = document.getElementById("sb-suggestions"),
        xa = document.getElementById("sb_container"),
        _a = document.getElementById("searchbar"),
        Sa = document.getElementById("sb-buttons"),
        qa = document.getElementById("sb_empty"),
        Ia = (e = "google") => xa?.setAttribute("data-engine", e),
        Ca = (e = "") => xa?.setAttribute("data-request", nt(e, 512)),
        Ta = (e = !1) => xa?.setAttribute("data-newtab", e.toString()),
        Aa = (e = !0) => xa?.setAttribute("data-suggestions", e.toString()),
        Ba = (e = "") => _a?.setAttribute("placeholder", e),
        ja = (e = 30) =>
            document.documentElement.style.setProperty(
                "--searchbar-width",
                `${e.toString()}em`,
            ),
        Oa = (e = "#fff2") => {
            (document.documentElement.style.setProperty("--searchbar-background", e),
                document
                    .getElementById("sb_container")
                    ?.classList.toggle("opaque", e.includes("#fff") && st(e) > 7));
        };
    function Pa(e, t) {
        if (t)
            !(async function ({
                engine: e,
                newtab: t,
                background: n,
                placeholder: o,
                request: s,
                suggestions: i,
                width: r,
            }) {
                const { searchbar: a } = await ct.sync.get("searchbar");
                if (!a) return;
                Ua(e) &&
                    (document
                        .getElementById("searchbar_request")
                        ?.classList.toggle("shown", "custom" === e),
                        (a.engine = e),
                        Ia(e));
                void 0 !== i && ((a.suggestions = i), Aa(i));
                void 0 !== t && ((a.newtab = t), Ta(t));
                void 0 !== r && ((a.width = Number.parseInt(r)), ja(a.width));
                void 0 !== o && ((a.placeholder = o), Ba(o));
                n && ((a.background = Xt("sb-background-range")), Oa(a.background));
                if (s) {
                    const e = document.querySelector("#f_sbrequest");
                    if (!e) return;
                    const t = new FormData(e).get("sbrequest")?.toString() ?? "",
                        n = !t.includes("%s") && t.length > 0;
                    if (!t.match(Ea)) return void wa.warn(kt("URL seems wrong"));
                    if (n) return void wa.warn(kt("No %s present in URL"));
                    ((a.request = nt(t, 512)), Ca(a.request), wa.accept());
                }
                pt({ searchbar: a });
            })(t);
        else
            try {
                (((e = !1) => {
                    xa?.classList.toggle("hidden", !e);
                })(e?.on),
                    ja(e?.width),
                    Ia(e?.engine),
                    Ca(e?.request),
                    Ta(e?.newtab),
                    Ba(e?.placeholder),
                    Aa(e?.suggestions),
                    Oa(e?.background),
                    Sa?.addEventListener("click", Fa),
                    qa?.addEventListener("click", Ra),
                    xa?.addEventListener("submit", za),
                    _a?.addEventListener("input", Ma),
                    _a?.addEventListener("focus", () => {
                        (document.dispatchEvent(new Event("close-edit")), _a.focus());
                    }),
                    document.addEventListener("keydown", Wa));
            } catch (e) { }
    }
    function $a(e) {
        try {
            const t = !!new URL(e),
                n = Ea.test(e);
            return t && n;
        } catch (e) {
            return !1;
        }
    }
    function za(e) {
        e.preventDefault();
        const t = !Ue && ("chrome" === Re || "firefox" === Re),
            n = "true" === xa?.dataset.newtab,
            o = _a?.value;
        let s = xa?.dataset.engine ?? "default";
        if (!o) return;
        if ((ka && ka.close(), t && "default" === s))
            return void We?.search.query({
                disposition: n ? "NEW_TAB" : "CURRENT_TAB",
                text: o,
            });
        s = s.replace("default", "google");
        const i =
            o.startsWith("http://") || o.startsWith("https://")
                ? o
                : `https://${o}`,
            r = (function (e, t) {
                const n = {
                    default: "",
                    google: "https://www.google.com/search?q=%s",
                    ddg: "https://duckduckgo.com/?q=%s",
                    startpage: "https://www.startpage.com/do/search?query=%s",
                    qwant: "https://www.qwant.com/?q=%s",
                    yahoo: "https://search.yahoo.com/search?q=%s",
                    bing: "https://www.bing.com/search?q=%s",
                    brave: "https://search.brave.com/search?q=%s",
                    ecosia: "https://www.ecosia.org/search?q=%s",
                    lilo: "https://search.lilo.org/?q=%s",
                    baidu: "https://www.baidu.com/s?wd=%s",
                    custom: xa?.dataset.request || "",
                };
                if (!Ua(t)) return "about:blank";
                if ("custom" === t && !n.custom) return "about:blank";
                let o = "";
                const s = encodeURIComponent(e ?? ""),
                    i = kt(t);
                return ((o = i.includes("%s") ? i : n[t]), (o = o.replace("%s", s)), o);
            })(o, s),
            a = $a(i) ? i : r,
            c = n ? "_blank" : "_self";
        globalThis.open(a, c);
    }
    function Na() {
        function e(e) {
            return e?.classList.contains("shown") ? e : null;
        }
        function t(e) {
            e &&
                _a &&
                (_a.value = e?.querySelector(".suggest-result")?.textContent ?? "");
        }
        for (let e = 0; e < 10; e++) {
            const e = document.createElement("li"),
                n = document.createElement("img"),
                o = document.createElement("div"),
                s = document.createElement("p"),
                i = document.createElement("p");
            (e.setAttribute("tabindex", "0"),
                n.setAttribute("draggable", "false"),
                n.setAttribute("width", "16"),
                n.setAttribute("height", "16"),
                s.classList.add("suggest-result"),
                i.classList.add("suggest-desc"),
                o.appendChild(s),
                o.appendChild(i),
                e.appendChild(n),
                e.appendChild(o),
                e.addEventListener("mouseenter", () => {
                    (xa
                        ?.querySelector('li[aria-selected="true"]')
                        ?.removeAttribute("aria-selected"),
                        e?.setAttribute("aria-selected", "true"));
                }),
                e.addEventListener("mouseleave", () => {
                    e?.removeAttribute("aria-selected");
                }),
                e.addEventListener("click", (n) => {
                    (t(e), za(n));
                }),
                La?.appendChild(e));
        }
        function n(e) {
            const t = e?.relatedTarget,
                n = "sb-suggestions" === t?.parentElement?.id,
                o = document.querySelectorAll("#sb-suggestions li.shown")?.length > 0,
                s = "focus" === e.type;
            n || La?.classList.toggle("shown", s && o);
        }
        (xa?.addEventListener("keydown", function (n) {
            const o = "ArrowDown" === n.code,
                s = "ArrowUp" === n.code,
                i = "Enter" === n.code,
                r = "Escape" === n.code;
            let a = La?.querySelector('li[aria-selected="true"]');
            (a?.removeAttribute("aria-selected"),
                r ||
                (o &&
                    ((a = e(a?.nextElementSibling) ?? La?.querySelector("li.shown")),
                        t(a)),
                    s && ((a = e(a?.previousElementSibling)), t(a), n.preventDefault()),
                    i && a && (t(a), za(n)),
                    a?.setAttribute("aria-selected", "true")));
        }),
            _a?.addEventListener("focus", n),
            _a?.addEventListener("blur", n),
            qa?.addEventListener("click", function () {
                const e = Object.values(La?.children ?? []);
                for (const t of e) t.classList.remove("shown");
                La?.classList.remove("shown");
            }),
            (async function e() {
                (ka = await (async function (e) {
                    try {
                        const t = new WebSocket(`wss://services.bonjourr.fr/${e}`);
                        if (
                            await new Promise((e) => {
                                ((t.onopen = () => e(!0)),
                                    (t.onerror = () => e(!1)),
                                    (t.onclose = () => e(!1)));
                            })
                        )
                            return t;
                    } catch (e) { }
                })("suggestions"))?.addEventListener("message", (t) => {
                    const n = at(t.data);
                    Array.isArray(n)
                        ? (function (e) {
                            const t = _a,
                                n = La?.querySelectorAll("li") ?? [];
                            (La?.classList.toggle("shown", e.length > 0),
                                La?.querySelector(
                                    'li[aria-selected="true"]',
                                )?.removeAttribute("aria-selected"),
                                n.forEach((n, o) => {
                                    const s = e[o],
                                        i = n.querySelector(".suggest-result"),
                                        r = n.querySelector(".suggest-desc");
                                    if (!(s && i && r)) return;
                                    const a = "src/assets/interface/magnifying-glass.svg",
                                        c = s.image ?? a,
                                        l = s.desc ?? "";
                                    if (
                                        (i && (i.textContent = s.text), s.text.includes(t.value))
                                    ) {
                                        const e = s.text.indexOf(t.value),
                                            n = document.createElement("span"),
                                            o = document.createElement("b"),
                                            r = document.createElement("span");
                                        ((n.textContent = s.text.slice(0, e)),
                                            (o.textContent = s.text.slice(e, t.value.length)),
                                            (r.textContent = s.text.slice(t.value.length)),
                                            (i.textContent = ""),
                                            i.appendChild(n),
                                            i.appendChild(o),
                                            i.appendChild(r));
                                    }
                                    const d = n.querySelector("img");
                                    (d.classList.toggle("default-search-icon", c === a),
                                        (d.src = c),
                                        (r.textContent = l),
                                        n.classList.toggle("shown", !!s));
                                    const u = n.getBoundingClientRect();
                                    u.y + u.height + 40 > document.body.offsetHeight &&
                                        n.classList.remove("shown");
                                }),
                                0 === La?.querySelectorAll("li.shown")?.length &&
                                La?.classList.remove("shown"));
                        })(n)
                        : n?.error && e();
                });
            })());
    }
    function Ma(e) {
        const t = e.target.value ?? "",
            n =
                t.startsWith("http://") || t.startsWith("https://")
                    ? t
                    : `https://${t}`,
            o = "https://".startsWith(t) || "http://".startsWith(t);
        if ((_a && Da(t.length > 0), "" !== t)) {
            if (o || $a(n)) La?.classList.remove("shown");
            else if (
                ("true" === xa?.dataset.suggestions &&
                    0 === La?.childElementCount &&
                    Na(),
                    "true" === xa?.dataset.suggestions && ka && ka.readyState === ka.OPEN)
            ) {
                const e = (xa?.dataset.engine ?? "ddg")
                    .replace("custom", "ddg")
                    .replace("default", "google"),
                    n = encodeURIComponent(t ?? "");
                ka.send(JSON.stringify({ q: n, with: e, lang: bt() }));
            }
        } else {
            for (const e of document.querySelectorAll("#sb-suggestions li.shown") ??
                [])
                e.classList.remove("shown");
            La?.classList.remove("shown");
        }
    }
    function Da(e) {
        (document.getElementById("sb-buttons")?.classList.toggle("shown", e),
            document.getElementById("sb_empty")?.toggleAttribute("disabled", !e),
            document.getElementById("sb_submit")?.toggleAttribute("disabled", !e));
    }
    function Ra() {
        _a && (_a.focus(), (_a.value = ""), Da(!1));
    }
    function Fa() {
        !1 === Sa?.classList.contains("shown") && _a?.focus();
    }
    function Wa(e) {
        "BODY" === e.target.tagName &&
            "/" === e.key &&
            (_a?.focus(), _a?.select(), e.preventDefault());
    }
    function Ua(e = "") {
        return Ke.includes(e);
    }
    var Ha = Ht("f_qttype"),
        Ka = Ht("f_qturl");
    async function Ga(e, t) {
        if (t)
            return void (async function ({
                author: e,
                frequency: t,
                type: n,
                userlist: o,
                url: s,
                refresh: i,
            }) {
                const r = await ct.sync.get(["lang", "quotes"]),
                    a = await ct.local.get("quotesCache");
                void 0 !== e && ((r.quotes.author = e), Za(e));
                o &&
                    (r.quotes.userlist = (function (e) {
                        let t = [];
                        if (0 === e.length) return "";
                        t = e.startsWith("[[") ? ec(tc(at(e) ?? [])) : ec(e);
                        t.length > 0 &&
                            (Qa({ author: t[0].author, content: t[0].content }),
                                document.getElementById("i_qtlist")?.blur(),
                                ct.local.set({ userQuoteSelection: 0 }));
                        return e;
                    })(o));
                let c = !1;
                (function (e) {
                    if (void 0 === e) return !1;
                    return "" === e || sc.test(e);
                })(s) && ((r.quotes.url = s), (c = !0));
                i &&
                    ((r.quotes.last = Xe().getTime()),
                        (function (e, t = []) {
                            const { lang: n, quotes: o } = e,
                                { type: s, url: i, userlist: r } = o;
                            Qa(Xa("user" === s && r ? ec(r) : t, n, s, i));
                        })(r, a?.quotesCache));
                (function (e = "") {
                    return ["tabs", "hour", "day", "period", "pause"].includes(e);
                })(t) && (r.quotes.frequency = t);
                (function (e = "") {
                    return [
                        "classic",
                        "kaamelott",
                        "inspirobot",
                        "stoic",
                        "hitokoto",
                        "office",
                        "user",
                        "url",
                    ].includes(e);
                })(n) && ((r.quotes.type = n), (c = !0));
                c &&
                    (async function (e) {
                        const t = "user" === e.quotes.type;
                        let n = [],
                            o = 0;
                        if (t && e.quotes.userlist) {
                            ((o =
                                (await ct.local.get("userQuoteSelection"))
                                    ?.userQuoteSelection ?? 0),
                                (n = ec(e.quotes.userlist)));
                        }
                        if (!t) {
                            const t = "url" === e.quotes.type ? Ka : Ha;
                            try {
                                (t.load(),
                                    (n = await Va(e.lang, e.quotes.type, e.quotes.url)),
                                    t.accept());
                            } catch (e) {
                                t.warn(
                                    kt("Fetch failed, please check console for more information"),
                                );
                            }
                            ct.local.set({ quotesCache: n });
                        }
                        n.length > 0 && Qa(n[o]);
                        (document
                            .getElementById("quotes_userlist")
                            ?.classList.toggle("shown", t),
                            document
                                .getElementById("quotes_url")
                                ?.classList.toggle("shown", "url" === e.quotes.type));
                    })(r);
                ct.sync.set({ quotes: r.quotes });
            })(t);
        if (!e) return;
        const { lang: n, quotes: o } = e.sync,
            s = et(o.frequency, o.last ?? 0),
            i = e.local?.userQuoteSelection ?? 0;
        let r = e.local?.quotesCache ?? [],
            a = r[0];
        if ("user" === o.type) ((r = ec(o.userlist)), (a = r[i]));
        else {
            (!r || 0 === r?.length) &&
                ((r = await Ja(n, o.type, o.url)),
                    (a = r[0]),
                    ct.local.set({ quotesCache: r }));
        }
        (s &&
            ((o.last = Xe().getTime()),
                (a = Xa(r, n, o.type, o.url)),
                ct.sync.set({ quotes: o })),
            Qa(a),
            Za(o.author),
            document
                .getElementById("quotes_container")
                ?.classList.toggle("hidden", !o.on),
            Co("quotes"));
    }
    async function Va(e, t, n) {
        if (!navigator.onLine || "user" === t) return [];
        let o;
        if ("url" === t) {
            if (!n) return [];
            ((o = await fetch(n)), Ya(o));
            const e = (function (e) {
                const t = e.headers.get("content-type")?.split(";", 2)[0];
                if ("application/json" === t) return "json";
                if ("text/csv" === t) return "csv";
                const n = new URL(e.url).pathname.split(".");
                if (
                    ((o = n[n.length - 1]),
                        (s = "json"),
                        0 === o.localeCompare(s, void 0, { sensitivity: "accent" }))
                )
                    return "json";
                var o, s;
                return "csv";
            })(o);
            return "json" === e
                ? await o.json()
                : "csv" === e
                    ? nc(await o.text())
                    : [];
        }
        const s = `/quotes/${t}/${"classic" === t ? `${e}` : ""}`;
        return ((o = await Pr(s)), Ya(o), await o.json());
    }
    function Ya(e) {
        if (!e) throw new Error("No response");
        if (!e.ok) throw new Error(`Response not ok: ${e.status} ${e.statusText}`);
    }
    async function Ja(e, t, n) {
        try {
            return await Va(e, t, n);
        } catch (e) { }
        return [];
    }
    function Xa(e, t, n, o) {
        if ("user" === n) {
            const t = Math.round(Math.random() * (e.length - 1));
            return (ct.local.set({ userQuoteSelection: t }), e[t]);
        }
        if (e.length > 1) {
            const t = e.shift();
            return (
                ct.local.set({ quotesCache: e }),
                t ?? { author: "", content: "" }
            );
        }
        return (
            Ja(t, n, o).then((e) => {
                ct.local.set({ quotesCache: e });
            }),
            e[0]
        );
    }
    function Za(e) {
        document.getElementById("author")?.classList.toggle("always-on", e);
    }
    function Qa(e) {
        const t = document.getElementById("quote"),
            n = document.getElementById("author");
        e && t && n && ((t.textContent = e.content), (n.textContent = e.author));
    }
    function ec(e) {
        return e ? (Array.isArray(e) ? nc(tc(e)) : nc(e)) : [];
    }
    function tc(e) {
        return e.map((e) => e.join(",")).join("\n");
    }
    function nc(e) {
        const t = e.split("\n"),
            n = [];
        for (const e of t) {
            const [t, ...o] = e.split(","),
                s = o.join(",").trimStart();
            n.push({ author: t, content: s });
        }
        return n;
    }
    var oc,
        sc = /^https?:\/\//i;
    var ic,
        rc,
        ac,
        cc = new Audio("src/assets/sounds/clock-alarm-classic.mp3"),
        lc = document.getElementById("pomodoro_container"),
        dc = document.getElementById("pmdr_start"),
        uc = document.getElementById("pmdr_pause"),
        mc = document.getElementById("pmdr_reset"),
        gc = document.getElementById("pmdr_timer"),
        fc = document.querySelectorAll('#pmdr_modes input[type="radio"]'),
        pc = document.getElementById("pmdr-focus"),
        hc = new BroadcastChannel("dashx_pomodoro"),
        yc = 1e4,
        vc = (e = "") => (document.getElementById(`pmdr-${e}`).checked = !0),
        bc = (e) => oc.timeFor[e];
    function kc(e, t) {
        t
            ? Pc(t)
            : e?.on
                ? wc(e)
                : e &&
                Ct(() => {
                    wc(e);
                });
    }
    function wc(e) {
        var t;
        ((oc = e),
            jc(e.focus && e.on),
            vc(e.mode),
            (t = e.on),
            lc?.classList.toggle("hidden", !t),
            (function (e) {
                const t = e.end && Date.now() < e.end,
                    n = !e.end || Date.now() > e.end;
                if (t) return void _c(e);
                n && e.mode && Ec(e.mode, !1, !0);
            })(e),
            Co("pomodoro"),
            hc.addEventListener("message", ({ data: e = {} }) => {
                ("start-pomodoro" === e.type &&
                    ct.sync.get().then((t) => {
                        _c(t.pomodoro, !0, e.time);
                    }),
                    "switch-mode" === e.type && (vc(e.mode), Ec(e.mode)),
                    "pause-pomodoro" === e.type && qc(),
                    "reset-pomodoro" === e.type && Tc(),
                    "toggle-focus" === e.type && jc(e.on));
            }),
            fc.forEach(function (e) {
                e.addEventListener("change", (e) => {
                    const t = e.target.value;
                    (Ec(t, !0), hc.postMessage({ type: "switch-mode", mode: t }));
                });
            }),
            dc?.addEventListener("click", () => {
                oc.mode &&
                    (ct.sync.get().then((e) => {
                        _c(e.pomodoro, !0);
                    }),
                        hc.postMessage({ type: "start-pomodoro", time: bc(oc.mode) }));
            }),
            uc?.addEventListener("click", () => {
                (qc(), hc.postMessage({ type: "pause-pomodoro" }));
            }),
            mc?.addEventListener("pointerdown", (e) => {
                (Tc(), hc.postMessage({ type: "reset-pomodoro" }), Yt(e, !0));
            }),
            pc?.addEventListener("change", (e) => {
                const t = e.target.checked;
                (jc(t),
                    Pc({ focus: t }),
                    hc.postMessage({ type: "toggle-focus", on: t }));
            }),
            document
                .querySelectorAll(".pomodoro_mode, #focus-toggle")
                .forEach((e) => {
                    e.addEventListener("keydown", (t) => {
                        if ("Space" === t.code || "Enter" === t.code) {
                            const n = e.querySelector(
                                'input[type="radio"], input[type="checkbox"]',
                            );
                            if (!n) return;
                            ((n.checked = !n.checked),
                                n.dispatchEvent(new Event("change", { bubbles: !0 })),
                                t.preventDefault());
                        }
                    });
                }),
            Oc(e.history));
    }
    function Ec(e, t, n) {
        (Lc(),
            xc(e, t),
            Cc(),
            Bc(bc(e), !1),
            n || Pc({ mode: e, end: 0, pause: 0 }));
    }
    function Lc() {
        (clearTimeout(ac), clearTimeout(rc));
    }
    function xc(e, t) {
        const n = document.querySelector("#pmdr_modes"),
            o = n?.querySelectorAll(".pomodoro_mode"),
            s = n?.querySelector(".pomodoro_mode.active"),
            i = n?.querySelector(`#pmdr-${e}`)?.parentElement,
            r = n?.querySelector("span.glider");
        if (
            (o?.forEach((e) => {
                e.classList.remove("active");
            }),
                t)
        ) {
            if (i && r) {
                const e = s?.offsetLeft ?? 0,
                    t = s?.offsetWidth ?? 100,
                    n = i.offsetLeft,
                    o = i.offsetWidth;
                ((r.style.opacity = "1"),
                    (r.style.left = `${e}px`),
                    (r.style.width = `${t}px`),
                    setTimeout(() => {
                        ((r.style.left = `${n}px`),
                            (r.style.width = `${o}px`),
                            r.classList.add("gliding"));
                    }, 16),
                    setTimeout(() => {
                        (r.removeAttribute("style"),
                            r.classList.remove("gliding"),
                            i.classList.add("active"));
                    }, 200));
            }
        } else i?.classList.add("active");
    }
    function _c(e, t, n) {
        ((t ??= !1), Cc(), Lc());
        const o = e.mode ?? "pomodoro",
            s = n ?? bc(o),
            i = 0 !== e.pause,
            r = Date.now();
        let a = 0;
        if ((i && (a = e.end - e.pause), t))
            if (i) {
                const e = r + a;
                (Sc(e), Pc({ end: e, pause: 0 }));
            } else {
                const e = r + 1e3 * s;
                (Pc({ end: e, pause: 0 }), Sc(e));
            }
        else (xc(e.mode), i ? Bc(Ac(r + a), !1) : Sc(e.end));
    }
    function Sc(e) {
        (Bc(Ac(e)),
            (ic = setInterval(() => {
                Bc(Ac(e));
            }, 100)),
            Ic(!0));
    }
    function qc() {
        (Cc(), Pc({ pause: Date.now() }));
    }
    function Ic(e) {
        lc && lc.classList.toggle("started", e);
    }
    function Cc() {
        (clearInterval(ic), Ic(!1));
    }
    function Tc() {
        Ec(oc.mode);
    }
    function Ac(e) {
        const t = Math.round((e - Date.now()) / 1e3);
        return t <= 0
            ? (Cc(),
                (function () {
                    const e = localStorage.getItem("lastActiveTab");
                    e === Ne &&
                        (oc.sound && cc.play(),
                            "pomodoro" === oc.mode &&
                            Pc({ history: { endedAt: Date.now().toString() } }));
                })(),
                (rc = setTimeout(() => {
                    Ec(oc.mode);
                }, 1e4)),
                0)
            : t;
    }
    function Bc(e, t = !0) {
        if (!gc) return;
        const n = e % 60,
            o = `${Math.floor(e / 60)}:${n < 10 ? "0" : ""}${n}`;
        ((gc.textContent = o),
            (function (e, t) {
                const n = document.title,
                    o = n.match(/\| (.*)/)?.[1] ?? n;
                let s;
                if ("0:00" !== e) s = t ? `${e} | ${o}` : o;
                else {
                    ((s = `${kt("Time's up!")} | ${o}`),
                        (ac = setTimeout(() => {
                            Lt(o);
                        }, yc)));
                }
                Lt(s);
            })(o, t));
    }
    function jc(e) {
        const t = e && !oc.focus,
            n = (!e && oc.focus) || t;
        if (
            ((pc.checked = e),
                (oc.focus = e),
                n ||
                (lc.classList.toggle("onFocus", e),
                    lc.classList.toggle("outOfFocus", !e)),
                n && "visible" === document.visibilityState)
        ) {
            const n = lc.getBoundingClientRect(),
                o = lc.cloneNode(!0);
            ((o.style.position = "absolute"),
                (o.style.top = n.top + "px"),
                (o.style.left = n.left + "px"),
                (o.style.fontFamily =
                    document.documentElement.style.getPropertyValue("--font-family")),
                o.classList.add("clone"),
                document.body.appendChild(o),
                o.classList.remove("onFocus", "outOfFocus"),
                o.classList.toggle("onFocus", !t),
                o.classList.toggle("outOfFocus", t),
                (lc.style.visibility = "hidden"),
                document.body.classList.toggle("pomodoro-focus", t),
                lc.classList.toggle("onFocus", e),
                lc.classList.toggle("outOfFocus", !e));
            const s = lc.getBoundingClientRect(),
                i = s.left - n.left,
                r = s.top - n.top;
            (requestAnimationFrame(() => {
                (o.classList.remove("onFocus", "outOfFocus"),
                    o.classList.add(t ? "onFocus" : "outOfFocus"),
                    (o.style.transform = `translate(${i}px, ${r}px)`));
            }),
                o.addEventListener("transitionend", (e) => {
                    "transform" === e.propertyName &&
                        ((lc.style.visibility = "visible"), o.remove());
                }));
        } else document.body.classList.toggle("pomodoro-focus", e);
    }
    function Oc(e) {
        const t = new Date();
        let n = 0,
            o = 0,
            s = 0;
        const i = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
            r = new Date(t),
            a = (t.getDay() + 6) % 7;
        (r.setDate(t.getDate() - a), r.setHours(0, 0, 0, 0));
        const c = new Date(t.getFullYear(), t.getMonth(), 1);
        for (const t of e) {
            const e = new Date(Number(t.endedAt));
            (e >= i && n++, e >= r && o++, e >= c && s++);
        }
        ((document.getElementById("poms-today").textContent = n.toString()),
            (document.getElementById("poms-week").textContent = o.toString()),
            (document.getElementById("poms-month").textContent = s.toString()));
    }
    async function Pc({
        on: e,
        sound: t,
        end: n,
        mode: o,
        pause: s,
        focus: i,
        time_for: r,
        history: a,
    }) {
        const c = await ct.sync.get(["pomodoro"]);
        if (
            (void 0 !== e && (c.pomodoro.on = e),
                void 0 !== t && (c.pomodoro.sound = t),
                void 0 !== n && (c.pomodoro.end = n),
                o && (c.pomodoro.mode = o),
                void 0 !== s && (c.pomodoro.pause = s),
                void 0 !== i && (c.pomodoro.focus = i),
                void 0 !== a &&
                c.pomodoro.history.push({
                    endedAt: a.endedAt,
                    duration: c.pomodoro.timeFor.pomodoro,
                }),
                r)
        )
            for (const e of Object.keys(r)) {
                const t = r[e];
                void 0 !== t && (c.pomodoro.timeFor[e] = 60 * t);
            }
        (await ct.sync.set({ pomodoro: c.pomodoro }),
            (oc = c.pomodoro),
            Oc(c.pomodoro.history),
            r && Tc());
    }

    var al = L(x());
    function cl(e, t) {
        const { major: n, minor: o } = t;
        return (
            n < 22 &&
            (e = (function (e) {
                const t = [];
                Object.entries(e).map(([e, n]) => {
                    11 === e.length && e.startsWith("links") && t.push(n);
                });
                for (const n of t)
                    if (wn(n)) {
                        if (n.icon && "string" == typeof n.icon) {
                            const e = n.icon,
                                t = e.startsWith("https://services.bonjourr.fr") || En(e),
                                o =
                                    t && En(e)
                                        ? `https://services.bonjourr.fr/favicon/blob/${n.url}?r=${e}`
                                        : void 0;
                            n.icon = { type: t ? "auto" : "url", value: t ? o : e };
                        }
                        e[n._id] = n;
                    }
                return e;
            })(e)),
            n <= 21 &&
            o < 3 &&
            (e = (function (e) {
                return (
                    null === e.backgrounds?.bright &&
                    (e.backgrounds.bright = Ge.backgrounds.bright),
                    e
                );
            })(e)),
            n < 21 &&
            (e = (function (e) {
                const t = {
                    "-10": "-10:00",
                    "-9": "-09:00",
                    "-8": "-08:00",
                    "-7": "-07:00",
                    "-6": "-06:00",
                    "-5": "-05:00",
                    "-4": "-04:00",
                    "-3": "-03:00",
                    "+0": "+00:00",
                    "+1": "+01:00",
                    "+2": "+02:00",
                    "+3": "+03:00",
                    "+5:30": "+05:30",
                    "+7": "+07:00",
                    "+8": "+08:00",
                    "+9": "+09:00",
                    "+10": "+10:00",
                    "+12": "+12:00",
                },
                    n = Object.keys(t);
                return (
                    e.clock &&
                    n.includes(e.clock.timezone) &&
                    (e.clock.timezone = t[e.clock.timezone]),
                    e.worldclocks?.forEach(({ timezone: o }, s) => {
                        const i = n.includes(o);
                        e.worldclocks?.[s] && i && (e.worldclocks[s].timezone = t[o]);
                    }),
                    e
                );
            })(
                (e = (function (e) {
                    const t = e,
                        n = structuredClone(Ge);
                    return (
                        e.backgrounds || (e.backgrounds = n.backgrounds),
                        void 0 !== t.background_blur &&
                        (e.backgrounds.blur = t.background_blur),
                        void 0 !== t.background_bright &&
                        (e.backgrounds.bright = t.background_bright),
                        void 0 !== t.background_type &&
                        (e.backgrounds.type =
                            "unsplash" === t.background_type ? "images" : "files"),
                        t.unsplash &&
                        (e.backgrounds.frequency = t.unsplash?.every ?? "hour"),
                        t.unsplash?.collection &&
                        ((e.backgrounds.images = "unsplash-images-collections"),
                            (e.backgrounds.queries = {
                                "unsplash-images-collections": t.unsplash.collection,
                            })),
                        e
                    );
                })(e)),
            )),
            n < 20 &&
            (e = (function (e) {
                return ((e.lang = wt(e.lang ?? "en")), e);
            })(
                (e = (function (e) {
                    return (
                        void 0 === e.supporters && (e.supporters = { enabled: !0 }),
                        e
                    );
                })(
                    (e = (function (e) {
                        let t = _n(e),
                            n = [...new Set(t.map((e) => e.parent))],
                            o = n.filter((e) => !e?.toString().startsWith("links"));
                        const s = n.filter((e) => "number" == typeof e),
                            i = e.linktabs;
                        if (i && s.length > 0) {
                            e.linkgroups = {
                                on: i.active,
                                selected: i.titles[i.selected],
                                groups: [...i.titles],
                                synced: [],
                                pinned: [],
                            };
                            for (const n of t)
                                ("number" == typeof n?.parent &&
                                    (n.parent = e.linkgroups.groups[n.parent]),
                                    (e[n._id] = n));
                        }
                        e.linkgroups || (e.linkgroups = Ge.linkgroups);
                        const {
                            groups: r,
                            pinned: a,
                            synced: c,
                            selected: l,
                        } = e.linkgroups;
                        ((e.linkgroups.selected = l || "default"),
                            (e.linkgroups.groups = r.map((e) => e || "default")),
                            (e.linkgroups.pinned = a.map((e) => e || "default")),
                            (e.linkgroups.synced = c.map((e) => e || "default")));
                        for (const n of t)
                            n?.parent ||
                                ((n.parent = e.linkgroups.selected), (e[n._id] = n));
                        ((t = _n(e)),
                            (n = [...new Set(t.map((e) => e.parent))]),
                            (o = n.filter((e) => !e?.toString().startsWith("links"))));
                        for (const t of o) t && e.linkgroups.groups.push(t.toString());
                        e.linkgroups.groups.length > 1 && (e.linkgroups.on = !0);
                        const d = e.linkgroups.groups.filter((e) => "default" !== e),
                            u = e.linkgroups.groups.includes("default"),
                            m = !1 === o.includes("default"),
                            g = d.length > 0,
                            f = t.length > 0;
                        return (
                            u &&
                            m &&
                            g &&
                            f &&
                            ((e.linkgroups.groups = d), (e.linkgroups.selected = d[0])),
                            e
                        );
                    })(
                        (e = (function (e) {
                            return (
                                e.clock?.style &&
                                ((e.analogstyle = {
                                    background: "#fff2",
                                    border: "#ffff",
                                    face: e?.clock?.face || "none",
                                    shape: "round",
                                    hands: "modern",
                                }),
                                    ("round" !== e.clock.style && "square" !== e.clock.style) ||
                                    (e.analogstyle.shape = e.clock.style),
                                    "transparent" === e.clock.style &&
                                    ((e.analogstyle.background = "#fff0"),
                                        (e.analogstyle.border = "#fff0"))),
                                e
                            );
                        })(e)),
                    )),
                )),
            )),
            n < 19 &&
            (e = (function (e) {
                if (e?.linktabs || e?.linkgroups) return e;
                const t = _n(e).sort((e, t) => (e.order ?? 0) - (t.order ?? 0));
                for (const n of t)
                    wn(n) &&
                        "string" == typeof n.icon &&
                        n.icon.startsWith(
                            "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2MiIgdmlld0JveD0iMC",
                        ) &&
                        ((n.icon = { type: "auto" }), (e[n._id] = n));
                return e;
            })(
                (e = (function (e) {
                    return (
                        Array.isArray(e?.quotes?.userlist) &&
                        (e.quotes.userlist = tc(e.quotes.userlist)),
                        e
                    );
                })(
                    (e = (function (e) {
                        return (
                            e.font &&
                            ((e.font.weightlist = e.font?.availWeights ?? []),
                                (e.font.url = void 0),
                                (e.font.availWeights = void 0),
                                void 0 === e.font.system && (e.font.system = !1)),
                            e
                        );
                    })(e)),
                )),
            )),
            n < 18 &&
            (e = (function (e) {
                return (
                    e.usdate ? (e.dateformat = "us") : (e.dateformat = "auto"),
                    e
                );
            })(
                (e = (function (e) {
                    if (e.weather && void 0 === e.weather?.geolocation) {
                        const t = e.weather?.location ?? [];
                        ((e.weather.geolocation = "approximate"),
                            (e.weather.geolocation = 0 === t.length ? "off" : "precise"));
                    }
                    return e;
                })(
                    (e = (function (e) {
                        const t = {};
                        return (
                            Array.isArray(e.hide) &&
                            (e.hide[0]?.[0] && (t.clock = !0),
                                e.hide[0]?.[1] && (t.date = !0),
                                e.hide[1]?.[0] && (t.greetings = !0),
                                e.hide[1]?.[1] && (t.weatherdesc = !0),
                                e.hide[1]?.[2] && (t.weathericon = !0),
                                e.hide[3]?.[0] && (t.settingsicon = !0),
                                (e.hide = t),
                                (e.time = !(e.hide.clock && e.hide.date)),
                                (e.main = !(
                                    e.hide.weatherdesc &&
                                    e.hide.weathericon &&
                                    e.hide.weathericon
                                ))),
                            e
                        );
                    })(
                        (e = (function (e) {
                            if (Array.isArray(e.links)) {
                                (e.links.length > 0 &&
                                    void 0 === e.quicklinks &&
                                    (e.quicklinks = !0),
                                    e.links?.forEach(({ title: t, url: n, icon: o }, s) => {
                                        const i = `links${ot(6)}`,
                                            r = o?.startsWith("alias:") ? e[o] : o;
                                        e[i] = {
                                            _id: i,
                                            parent: "default",
                                            order: s,
                                            title: t,
                                            url: n,
                                            icon: r,
                                        };
                                    }));
                                const t = Object.keys(e).filter((e) => e.match("alias:"));
                                for (const n of t) e[n] = void 0;
                            }
                            return e;
                        })(
                            (e = (function (e) {
                                return (
                                    "boolean" == typeof e.searchbar &&
                                    (e.searchbar = {
                                        ...Ge.searchbar,
                                        on: e.searchbar,
                                        newtab: e.searchbar_newtab,
                                        engine:
                                            e.searchbar_engine?.replace("s_", "") || "google",
                                        suggestions: !1,
                                    }),
                                    e
                                );
                            })(e)),
                        )),
                    )),
                )),
            )),
            e
        );
    }
    var ll = Object.getPrototypeOf({});
    function dl(e) {
        function t(e) {
            return "constructor" !== e && "prototype" !== e && "__proto__" !== e;
        }
        const n = Object.prototype.propertyIsEnumerable;
        const o =
            e && e.symbols
                ? function (e) {
                    const t = Object.keys(e),
                        o = Object.getOwnPropertySymbols(e);
                    for (let s = 0, i = o.length; s < i; ++s)
                        n.call(e, o[s]) && t.push(o[s]);
                    return t;
                }
                : Object.keys,
            s =
                "function" == typeof e?.cloneProtoObject ? e.cloneProtoObject : void 0;
        function i(e) {
            return !(
                "object" != typeof e ||
                null === e ||
                e instanceof RegExp ||
                e instanceof Date
            );
        }
        const r =
            "undefined" != typeof Buffer
                ? (e) =>
                    "object" != typeof e ||
                    null === e ||
                    e instanceof RegExp ||
                    e instanceof Date ||
                    e instanceof Buffer
                : (e) =>
                    "object" != typeof e ||
                    null === e ||
                    e instanceof RegExp ||
                    e instanceof Date,
            a =
                e && "function" == typeof e.mergeArray
                    ? e.mergeArray({
                        clone: c,
                        deepmerge: l,
                        getKeys: o,
                        isMergeableObject: i,
                    })
                    : function (e, t) {
                        const n = e.length,
                            o = t.length;
                        let s = 0;
                        const i = new Array(n + o);
                        for (s = 0; s < n; ++s) i[s] = c(e[s]);
                        for (s = 0; s < o; ++s) i[s + n] = c(t[s]);
                        return i;
                    };
        function c(e) {
            return i(e)
                ? Array.isArray(e)
                    ? (function (e) {
                        let t = 0;
                        const n = e.length,
                            o = new Array(n);
                        for (t = 0; t < n; ++t) o[t] = c(e[t]);
                        return o;
                    })(e)
                    : (function (e) {
                        const n = {};
                        if (s && Object.getPrototypeOf(e) !== ll) return s(e);
                        const i = o(e);
                        let r, a, l;
                        for (r = 0, a = i.length; r < a; ++r)
                            t((l = i[r])) && (n[l] = c(e[l]));
                        return n;
                    })(e)
                : e;
        }
        function l(e, n) {
            const s = Array.isArray(n),
                i = Array.isArray(e);
            return "object" != typeof (d = n) || null === d
                ? n
                : r(e)
                    ? c(n)
                    : s && i
                        ? a(e, n)
                        : s !== i
                            ? c(n)
                            : (function (e, n) {
                                const s = {},
                                    i = o(e),
                                    r = o(n);
                                let a, d, u;
                                for (a = 0, d = i.length; a < d; ++a)
                                    t((u = i[a])) && -1 === r.indexOf(u) && (s[u] = c(e[u]));
                                for (a = 0, d = r.length; a < d; ++a)
                                    t((u = r[a])) &&
                                        ((u in e &&
                                            (-1 !== i.indexOf(u) && (s[u] = l(e[u], n[u])), 1)) ||
                                            (s[u] = c(n[u])));
                                return s;
                            })(e, n);
            var d;
        }
        return e && e.all
            ? function () {
                switch (arguments.length) {
                    case 0:
                        return {};
                    case 1:
                        return c(arguments[0]);
                    case 2:
                        return l(arguments[0], arguments[1]);
                }
                let e;
                for (let t = 0, n = arguments.length; t < n; ++t)
                    e = l(e, arguments[t]);
                return e;
            }
            : l;
    }
    dl({ symbols: !1 });
    var ul,
        ml,
        gl = dl({ all: !0, symbols: !1 });
    function fl(e = "0.0.0") {
        const t = { major: 0, minor: 0, patch: 0 };
        if ("string" == typeof e) {
            const n = e.split("."),
                o = parseInt(n[0] ?? "0"),
                s = parseInt(n[1] ?? "0"),
                i = parseInt(n[2] ?? "0");
            isNaN(o) ||
                isNaN(s) ||
                isNaN(i) ||
                ((t.major = o), (t.minor = s), (t.patch = i));
        }
        return t;
    }
    function pl(e, t, n) {
        let o = t,
            s = n ?? {};
        if ("update" === e) {
            o = cl(o, fl(o.about.version));
        }
        if ("import" === e) {
            s = cl(s, fl(void 0));
            const e = Object.keys(o).length;
            Object.keys(s).length !== e
                ? ((o = gl(o, s)),
                    (o = (function (e) {
                        ((e.linkgroups.groups = [...new Set(e.linkgroups.groups)]),
                            (e.linkgroups.pinned = [...new Set(e.linkgroups.pinned)]),
                            (e.linkgroups.synced = [...new Set(e.linkgroups.synced)]));
                        const t = _n(e)
                            .map((e) => e.parent)
                            .some((e) => "default" === e);
                        return (
                            e.linkgroups.groups.length > 1 &&
                            !t &&
                            ((e.linkgroups.groups = e.linkgroups.groups.filter(
                                (e) => "default" !== e,
                            )),
                                (e.linkgroups.pinned = e.linkgroups.pinned.filter(
                                    (e) => "default" !== e,
                                )),
                                (e.linkgroups.synced = e.linkgroups.synced.filter(
                                    (e) => "default" !== e,
                                ))),
                            e
                        );
                    })(o)),
                    (o = (function (e, t) {
                        return (
                            t.worldclocks && e.worldclocks && (e.worldclocks = t.worldclocks),
                            e
                        );
                    })(o, s)),
                    (o = (function (e, t) {
                        if (t.move) {
                            e.move = t.move;
                            const n = (
                                e.move.layouts[e.move.selection]?.grid ??
                                ji[e.move.selection].grid
                            )
                                .flat()
                                .join(" ");
                            return (
                                (e.time = n.includes("time")),
                                (e.main = n.includes("main")),
                                (e.quicklinks = n.includes("quicklinks")),
                                e.quotes && (e.quotes.on = n.includes("quotes")),
                                e.searchbar && (e.searchbar.on = n.includes("searchbar")),
                                e
                            );
                        }
                        if (!t.move) {
                            const n = {
                                time: t.time ?? e.time,
                                main: t.main ?? e.main,
                                quotes: t.quotes?.on ?? e.quotes?.on,
                                pomodoro: t.pomodoro?.on ?? e.pomodoro?.on,
                                searchbar: t.searchbar?.on ?? e.searchbar?.on,
                                quicklinks: t.quicklinks ?? e.quicklinks,
                            },
                                o = {
                                    time: e.time !== n.time,
                                    main: e.main !== n.main,
                                    quotes: e.quotes?.on !== n.quotes,
                                    searchbar: e.searchbar?.on !== n.searchbar,
                                    quicklinks: e.quicklinks !== n.quicklinks,
                                };
                            Object.keys(t).some((e) =>
                                e.match(/time|main|notes|quotes|searchbar|quicklinks/g),
                            ) && (e.move.selection = "single");
                            const s = e.move.selection,
                                i = structuredClone(e.move.layouts[s]),
                                r = Object.entries(o).filter(([e, t]) => !0 === t);
                            if (!i) return e;
                            for (const [e] of r) {
                                const t = e,
                                    o = n[t] ? Hi : Ki;
                                i.grid = zi(o(Ni(i.grid), t, s));
                            }
                            e.move.layouts[s] = i;
                        }
                        return e;
                    })(o, s)))
                : (o = s);
        }
        return (
            (o.about = { browser: Re, version: Pe }),
            delete o.syncbookmarks,
            delete o.settingssync,
            delete o.custom_every,
            delete o.custom_time,
            delete o.searchbar_newtab,
            delete o.searchbar_newtab,
            delete o.searchbar_engine,
            delete o.cssHeight,
            delete o.linktabs,
            delete o.links,
            delete o.dynamic,
            delete o.unsplash,
            delete o.background_blur,
            delete o.background_bright,
            delete o.background_type,
            delete o.usdate,
            o?.weather?.location,
            o?.weather?.lastState,
            o?.weather?.lastCall,
            o
        );
    }
    function hl(e) {
        const t = structuredClone(Ge);
        for (const n of _n(e)) t[n._id] = n;
        for (const [n, o] of Object.entries(e)) {
            const e = t[n];
            vl(o) && vl(e) ? (t[n] = { ...e, ...o }) : (t[n] = o);
        }
        const n = yl(t);
        return JSON.stringify(
            e,
            n.sort((e = "", t = "") => n.indexOf(e) - n.indexOf(t)),
            2,
        );
    }
    function yl(e) {
        const t = [];
        for (const [n, o] of Object.entries(e))
            (t.push(n), vl(o) && t.push(...yl(o)));
        return t;
    }
    function vl(e) {
        return !Array.isArray(e) && null !== e && "object" == typeof e;
    }
    function bl(e) {
        const t = document.getElementById("show-settings"),
            n = document.getElementById("settings"),
            o = n?.classList.contains("hidden"),
            s = 0 === e?.button;
        if (!(o && ("Escape" === e?.code || s))) return;
        const i = ml,
            r = ul;
        (n?.removeAttribute("style"),
            n?.classList.remove("hidden"),
            document.dispatchEvent(new Event("settings")),
            document.addEventListener("toggle-settings", (e) => {
                kl(e);
            }),
            "touch" === e.pointerType &&
            setTimeout(() => {
                e.target.getAttribute("data-attribute")
                    ? ws(e)
                    : document.dispatchEvent(new CustomEvent("toggle-settings"));
            }, 0),
            document.body?.removeEventListener("keydown", bl),
            t?.removeEventListener("pointerdown", bl),
            Ll(r.showall, !1),
            vt(n, r.lang),
            wl(),
            vi(r, i),
            (function (e, t) {
                const n = document.getElementById("settings"),
                    o = e.quotes?.userlist?.[0] ? e.quotes?.userlist : void 0;
                if (
                    (Bl("i_blur", e.backgrounds.blur ?? 15),
                        Bl("i_bright", e.backgrounds.bright ?? 0.8),
                        Bl("i_fadein", e.backgrounds.fadein ?? 400),
                        Bl("i_row", e.linksrow || 8),
                        Bl("i_icon_radius", e.linkiconradius || 1.1),
                        Bl("i_linkstyle", e.linkstyle || "default"),
                        Bl("i_type", e.backgrounds.type || "images"),
                        Bl("i_freq", e.backgrounds?.frequency || "hour"),
                        Bl("i_dark", e.dark || "system"),
                        Bl("i_favicon", e.favicon ?? ""),
                        Bl("i_tabtitle", e.tabtitle ?? ""),
                        Bl("i_solid-background", e.backgrounds.color ?? "#185A63"),
                        Bl("i_texture", e.backgrounds.texture.type ?? "none"),
                        Bl("i_texture-size", e.backgrounds.texture.size ?? "220"),
                        Bl("i_texture-opacity", e.backgrounds.texture.opacity ?? "0.1"),
                        Bl("i_texture-color", e.backgrounds.texture.color ?? "#ffffff"),
                        Bl("i_pagewidth", e.pagewidth || 1600),
                        Bl("i_pagegap", e.pagegap ?? 1),
                        Bl("i_dateformat", e.dateformat || "eu"),
                        Bl("i_greeting", e.greeting ?? ""),
                        Bl("i_greetmorning", e.greetingscustom?.morning ?? ""),
                        Bl("i_greetafternoon", e.greetingscustom?.afternoon ?? ""),
                        Bl("i_greetevening", e.greetingscustom?.evening ?? ""),
                        Bl("i_greetnight", e.greetingscustom?.night ?? ""),
                        Bl("i_textshadow", e.textShadow ?? 0.2),
                        Bl("i_sbengine", e.searchbar?.engine || "google"),
                        Bl("i_sbplaceholder", e.searchbar?.placeholder || ""),
                        Bl("i_sb-opacity", st(e.searchbar?.background ?? "#fff2")),
                        Bl("i_sbwidth", e.searchbar?.width ?? 30),
                        Bl("i_sbrequest", e.searchbar?.request || ""),
                        Bl("i_qtfreq", e.quotes?.frequency || "day"),
                        Bl("i_qttype", e.quotes?.type || "classic"),
                        Bl("i_qtlist", o ?? ""),
                        Bl("i_qturl", e.quotes?.url ?? ""),
                        Bl("i_clockface", e.analogstyle?.face || "none"),
                        Bl("i_clockhands", e.analogstyle?.hands || "none"),
                        Bl("i_clockshape", e.analogstyle?.shape || "round"),
                        Bl("i_analog-border-opacity", st(e.analogstyle?.border ?? "#ffff")),
                        Bl(
                            "i_analog-background-opacity",
                            st(e.analogstyle?.background ?? "#fff2"),
                        ),
                        Bl("i_ampm_position", e.clock.ampmposition || "top-left"),
                        Bl("i_clocksize", e.clock?.size ?? 5),
                        Bl("i_greetsize", e.greetingsize ?? 3),
                        Bl("i_greetmode", e.greetingsmode ?? "auto"),
                        Bl("i_timezone", e.clock?.timezone || "auto"),
                        Bl("i_geol", e.weather?.geolocation || "approximate"),
                        Bl("i_units", e.weather?.unit ?? "metric"),
                        Bl("i_forecast", e.weather?.forecast || "auto"),
                        Bl("i_temp", e.weather?.temperature || "actual"),
                        Bl("i_moreinfo", e.weather?.moreinfo || "none"),
                        Bl("i_provider", e.weather?.provider ?? ""),
                        Bl("i_weight", e.font?.weight || "300"),
                        Bl("i_size", e.font?.size || (Ue ? "11" : "14")),
                        Bl("i_synctype", t.syncType ?? ("online" === Re ? "off" : "browser")),
                        Bl("i_pmdr_break", e.pomodoro.timeFor.break / 60),
                        Bl("i_pmdr_pomodoro", e.pomodoro.timeFor.pomodoro / 60),
                        Bl("i_pmdr_longbreak", e.pomodoro.timeFor.longbreak / 60),
                        jl(
                            "i_city",
                            t.lastWeather?.approximation?.city ?? "Paris",
                            e.weather.city,
                        ),
                        jl("i_customfont", da.placeholder, e.font?.family),
                        jl("i_gistsync", "github_pat_XX000X00X", t?.gistToken),
                        jl("i_urlsync", "https://pastebin.com/raw/y7XhhiDs", t?.distantUrl),
                        Al("i_showall", e.showall),
                        Al("i_settingshide", e.hide?.settingsicon ?? !1),
                        Al("i_background-mute-videos", e.backgrounds.mute ?? !0),
                        Al("i_quicklinks", e.quicklinks),
                        Al("i_linkgroups", e?.linkgroups?.on),
                        Al("i_linknewtab", e.linknewtab),
                        Al("i_time", e.time),
                        Al("i_analog", e.clock?.analog ?? !1),
                        Al("i_seconds", e.clock?.seconds ?? !1),
                        Al("i_worldclocks", e.clock?.worldclocks ?? !1),
                        Al("i_main", e.main),
                        Al("i_greethide", !e.hide?.greetings),
                        Al("i_sb", e.searchbar?.on ?? !1),
                        Al("i_quotes", e.quotes?.on ?? !1),
                        Al("i_pomodoro", e.pomodoro?.on ?? !1),
                        Al("i_pmdr_sound", e.pomodoro?.sound ?? !0),
                        Al("i_ampm", e.clock?.ampm ?? !1),
                        Al("i_ampm-label", e.clock?.ampmlabel ?? !1),
                        Al("i_sbsuggestions", e.searchbar?.suggestions ?? !0),
                        Al("i_sbnewtab", e.searchbar?.newtab ?? !1),
                        Al("i_qtauthor", e.quotes?.author ?? !1),
                        Zt("solid-background", e.backgrounds.color),
                        Zt("texture-color", e.backgrounds.texture.color ?? "#ffffff"),
                        Tl("i_sb-shade")?.classList.toggle(
                            "on",
                            (e.searchbar?.background ?? "#fff").includes("#000"),
                        ),
                        Tl("i_analog-border-shade")?.classList.toggle(
                            "on",
                            (e.analogstyle?.border ?? "#fff").includes("#000"),
                        ),
                        Tl("i_analog-background-shade")?.classList.toggle(
                            "on",
                            (e.analogstyle?.background ?? "#fff").includes("#000"),
                        ),
                        Ue)
                ) {
                    const e = n.querySelector(".tooltiptext .instructions"),
                        t = kt("Edit your Quick Links by long-pressing the icon.");
                    e && (e.textContent = t);
                }
                const s = Tl("i_lang");
                for (const [e, t] of Object.entries(Te)) {
                    const n = document.createElement("option");
                    ((n.value = e), (n.text = t), s.appendChild(n));
                }
                (Bl("i_lang", e.lang || "en"),
                    Tl("time_options")?.classList.toggle("shown", e.time),
                    Tl("analog_options")?.classList.toggle(
                        "shown",
                        e.clock.analog && e.showall,
                    ),
                    Tl("greetings_options")?.classList.toggle(
                        "shown",
                        !e.hide?.greetings,
                    ),
                    Tl("greetingscustom_options")?.classList.toggle(
                        "shown",
                        "custom" === e.greetingsmode,
                    ),
                    Tl("digital_options")?.classList.toggle("shown", !e.clock.analog),
                    Tl("ampm_label")?.classList.toggle("shown", e.clock.ampm),
                    Tl("ampm_position")?.classList.toggle("shown", e.clock.ampmlabel),
                    Tl("worldclocks_options")?.classList.toggle(
                        "shown",
                        e.clock.worldclocks,
                    ),
                    Tl("main_options")?.classList.toggle("shown", e.main),
                    Tl("weather_provider")?.classList.toggle(
                        "shown",
                        "custom" === e.weather?.moreinfo,
                    ),
                    Tl("quicklinks_options")?.classList.toggle("shown", e.quicklinks),
                    Tl("pomodoro_options")?.classList.toggle("shown", e.pomodoro.on),
                    Tl("searchbar_options")?.classList.toggle("shown", e.searchbar?.on),
                    Tl("searchbar_request")?.classList.toggle(
                        "shown",
                        "custom" === e.searchbar?.engine,
                    ),
                    Tl("quotes_options")?.classList.toggle("shown", e.quotes?.on));
                const i = n.querySelectorAll("#grid-layout button"),
                    r = e.move?.selection || "single";
                for (const e of i)
                    e?.classList.toggle("selected", e.dataset.layout === r);
                (Tl("b_showtitles").classList.toggle("on", e?.linktitles ?? !0),
                    Tl("b_showbackgrounds").classList.toggle(
                        "on",
                        e?.linkbackgrounds ?? !0,
                    ));
                const a = e.hide?.weatherdesc && e.hide?.weathericon,
                    c = e.hide?.weatherdesc,
                    l = e.hide?.weathericon,
                    d = e.hide?.clock,
                    u = e.hide?.date;
                let m = "all",
                    g = "all";
                d ? (m = "date") : u && (m = "clock");
                a ? (g = "disabled") : c ? (g = "desc") : l && (g = "icon");
                (Bl("i_timehide", m),
                    Bl("i_weatherhide", g),
                    Tl("quotes_options")?.classList.toggle("shown", e.quotes?.on),
                    Tl("quotes_userlist")?.classList.toggle(
                        "shown",
                        "user" === e.quotes?.type,
                    ),
                    Tl("quotes_url")?.classList.toggle(
                        "shown",
                        "url" === e.quotes?.type,
                    ));
                const f = document.querySelectorAll("#settings form");
                for (const e of f) {
                    const t = e.querySelectorAll("input");
                    for (const n of t)
                        n.addEventListener("input", () => {
                            e.classList.toggle("valid", e.checkValidity());
                        });
                }
                const p = document.querySelector("#i_synctype option[value='browser']");
                p &&
                    (p.textContent =
                        "firefox" === Re
                            ? "Firefox Sync"
                            : "chrome" === Re && "edge" === Fe
                                ? "Edge Sync"
                                : "chrome" === Re
                                    ? "Chrome Sync"
                                    : "safari" === Re
                                        ? "Safari"
                                        : kt("Automatic"));
                for (const e of document.querySelectorAll('input[type="range"]'))
                    (Kt(e),
                        e.addEventListener("input", () => {
                            e.style.setProperty("--value", e.value);
                        }));
            })(r, i),
            (function () {
                if (
                    ((0, al.onclickdown)(Tl("b_accept-permissions"), async () => {
                        await xn("topSites", "bookmarks");
                        const e = await ct.sync.get(),
                            t = await ct.local.get();
                        (jo({ sync: e, local: t }),
                            setTimeout(() => Jo(e), 10),
                            Ln({ "accept-permissions": !1 }));
                    }),
                        (0, al.onclickdown)(Tl("i_showall"), (e, t) => {
                            Ll(t.checked, !0);
                        }),
                        Tl("i_lang").addEventListener("change", function () {
                            !(async function (e) {
                                (await (async function (e) {
                                    const t = document.querySelectorAll(".trn"),
                                        n = {},
                                        o = { ...ft };
                                    let s;
                                    await yt(e);
                                    const i = (await ct.local.get("translations")).translations;
                                    if (i && void 0 === o?.lang)
                                        for (const e of Object.keys(i)) o[e] = e;
                                    for (const [t, s] of Object.entries(o))
                                        "en" === e ? (n[s] = t) : i && (n[s] = i[t]);
                                    for (const e of t)
                                        ((s = e.textContent ?? ""), (e.textContent = n[s] ?? s));
                                    ht = e;
                                })(e),
                                    ct.sync.set({ lang: e }),
                                    ct.local.remove("quotesCache"),
                                    document.documentElement.setAttribute("lang", e));
                                const t = await ct.sync.get(),
                                    n = await ct.local.get([
                                        "quotesCache",
                                        "userQuoteSelection",
                                        "lastWeather",
                                    ]);
                                n?.lastWeather &&
                                    ((n.lastWeather.timestamp = 0),
                                        (n.lastWeather.forecasted_timestamp = 0));
                                ((t.lang = e),
                                    ia(t),
                                    Zo({ old: "", new: "" }, t),
                                    hr({ sync: t, lastWeather: n.lastWeather }),
                                    Ga({ sync: t, local: n }),
                                    Lt(t.tabtitle),
                                    ua(void 0, { lang: !0 }),
                                    xl(),
                                    wl(),
                                    El(),
                                    xc());
                            })(this.value);
                        }),
                        Tl("i_favicon").addEventListener("input", function () {
                            Et(this.value, !0);
                        }),
                        Tl("i_favicon").addEventListener("change", function () {
                            this.blur();
                        }),
                        Tl("i_tabtitle").addEventListener("input", function () {
                            Lt(this.value, !0);
                        }),
                        Tl("i_tabtitle").addEventListener("change", function () {
                            this.blur();
                        }),
                        Tl("i_dark").addEventListener("change", function () {
                            _t(this.value, !0);
                        }),
                        (0, al.onclickdown)(Tl("i_settingshide"), (e, t) => {
                            Or({ settingsicon: t.checked }, { isEvent: !0 });
                        }),
                        (0, al.onclickdown)(Tl("i_quicklinks"), (e, t) => {
                            Ar(void 0, { widget: ["quicklinks", t.checked] });
                        }),
                        Tl("f_addlink").addEventListener("submit", function (e) {
                            (e.preventDefault(),
                                jo(void 0, {
                                    addLinks: [
                                        {
                                            title: Tl("i_addlink-title").value,
                                            url: Tl("i_addlink-url").value,
                                        },
                                    ],
                                }),
                                (Tl("i_addlink-url").value = ""),
                                (Tl("i_addlink-title").value = ""),
                                this.classList.remove("valid"));
                        }),
                        (0, al.onclickdown)(Tl("i_linkgroups"), (e, t) => {
                            jo(void 0, { groups: t.checked });
                        }),
                        (0, al.onclickdown)(Tl("i_linknewtab"), (e, t) => {
                            jo(void 0, { newtab: t.checked });
                        }),
                        Tl("i_linkstyle").addEventListener("change", function () {
                            jo(void 0, { styles: { style: this.value } });
                        }),
                        (0, al.onclickdown)(Tl("b_showtitles"), (e, t) => {
                            jo(void 0, { styles: { titles: !t.classList.contains("on") } });
                        }),
                        (0, al.onclickdown)(Tl("b_showbackgrounds"), (e, t) => {
                            jo(void 0, {
                                styles: { backgrounds: !t.classList.contains("on") },
                            });
                        }),
                        Tl("i_row").addEventListener("input", function () {
                            jo(void 0, { row: this.value });
                        }),
                        Tl("i_icon_radius").addEventListener("input", function () {
                            jo(void 0, { iconradius: this.value });
                        }),
                        (0, al.onclickdown)(Tl("b_importbookmarks"), async () => {
                            (await xn("topSites", "bookmarks"), In());
                        }),
                        Tl("i_type").addEventListener("change", function () {
                            ri({ type: this.value });
                        }),
                        Tl("b_solid-background").addEventListener("click", function () {
                            Tl("i_solid-background").click();
                        }),
                        Tl("i_solid-background").addEventListener("input", function () {
                            ri({ color: this.value });
                        }),
                        Tl("i_background-provider").addEventListener("input", function () {
                            ri({ provider: this.value });
                        }),
                        Tl("f_background-user-coll").addEventListener("submit", function (e) {
                            (ri({ query: e }), e.preventDefault());
                        }),
                        Tl("f_background-user-search").addEventListener(
                            "submit",
                            function (e) {
                                (ri({ query: e }), e.preventDefault());
                            },
                        ),
                        Tl("i_freq").addEventListener("change", function () {
                            ri({ freq: this.value });
                        }),
                        (0, al.onclickdown)(Tl("i_refresh"), (e) => {
                            ri({ refresh: e });
                        }),
                        Tl("i_background-upload").addEventListener("change", function () {
                            ri({ files: this.files });
                        }),
                        (0, al.onclickdown)(Tl("b_background-urls"), () => {
                            ri({ urlsapply: !0 });
                        }),
                        (0, al.onclickdown)(Tl("i_background-mute-videos"), (e, t) => {
                            (Li(t.checked), ri({ mute: t.checked }));
                        }),
                        Tl("i_texture").addEventListener("change", function () {
                            ri({ texture: this.value });
                        }),
                        Tl("b_texture-color").addEventListener("click", function () {
                            Tl("i_texture-color").click();
                        }),
                        Tl("i_texture-color").addEventListener("input", function () {
                            ri({ texturecolor: this.value });
                        }),
                        Tl("i_texture-size").addEventListener("input", function () {
                            ri({ texturesize: this.value });
                        }),
                        Tl("i_texture-opacity").addEventListener("input", function () {
                            ri({ textureopacity: this.value });
                        }),
                        Tl("i_blur").addEventListener("pointerdown", function () {
                            ri({ blurenter: !0 });
                        }),
                        Tl("i_blur").addEventListener("input", function () {
                            ri({ blur: this.value });
                        }),
                        Tl("i_bright").addEventListener("input", function () {
                            ri({ bright: this.value });
                        }),
                        Tl("i_fadein").addEventListener("input", function () {
                            ri({ fadein: this.value });
                        }),
                        (0, al.onclickdown)(Tl("i_time"), (e, t) => {
                            Ar(void 0, { widget: ["time", t.checked] });
                        }),
                        (0, al.onclickdown)(Tl("i_analog"), (e, t) => {
                            ia(void 0, { analog: t.checked });
                        }),
                        (0, al.onclickdown)(Tl("i_seconds"), (e, t) => {
                            ia(void 0, { seconds: t.checked });
                        }),
                        (0, al.onclickdown)(Tl("i_worldclocks"), (e, t) => {
                            (Tl("worldclocks_options")?.classList.toggle("shown", t.checked),
                                ia(void 0, { worldclocks: t.checked }));
                        }),
                        Tl("i_clockface").addEventListener("change", function () {
                            ia(void 0, { face: this.value });
                        }),
                        Tl("i_clockhands").addEventListener("change", function () {
                            ia(void 0, { hands: this.value });
                        }),
                        Tl("i_analog-border-opacity").addEventListener("input", function () {
                            ia(void 0, { border: "opacity" });
                        }),
                        Tl("i_analog-background-opacity").addEventListener(
                            "input",
                            function () {
                                ia(void 0, { background: "opacity" });
                            },
                        ),
                        Tl("i_analog-border-shade").addEventListener("click", () => {
                            ia(void 0, { border: "shade" });
                        }),
                        Tl("i_analog-background-shade").addEventListener("click", () => {
                            ia(void 0, { background: "shade" });
                        }),
                        Tl("i_clockshape").addEventListener("change", function () {
                            ia(void 0, { shape: this.value });
                        }),
                        Tl("i_clocksize").addEventListener("input", function () {
                            ia(void 0, { size: Number.parseFloat(this.value) });
                        }),
                        (0, al.onclickdown)(Tl("i_ampm"), (e, t) => {
                            (ia(void 0, { ampm: t.checked }),
                                Tl("ampm_label")?.classList.toggle("shown", t.checked));
                        }),
                        (0, al.onclickdown)(Tl("i_ampm-label"), (e, t) => {
                            (ia(void 0, { ampmlabel: t.checked }),
                                Tl("ampm_position")?.classList.toggle("shown", t.checked));
                        }),
                        Tl("i_ampm_position").addEventListener("change", function () {
                            ia(void 0, { ampmposition: this.value });
                        }),
                        Tl("i_timezone").addEventListener("change", function () {
                            ia(void 0, { timezone: this.value });
                        }),
                        Tl("i_dateformat").addEventListener("change", function () {
                            ia(void 0, { dateformat: this.value });
                        }),
                        Tl("i_timehide").addEventListener("change", function () {
                            Or(
                                { clock: "clock" === this.value, date: "date" === this.value },
                                { isEvent: !0 },
                            );
                        }),
                        (0, al.onclickdown)(Tl("i_main"), (e, t) => {
                            Ar(void 0, { widget: ["main", t.checked] });
                        }),
                        Tl("i_geol").addEventListener("change", function () {
                            hr(void 0, { geol: this?.value });
                        }),
                        Tl("i_city").addEventListener("input", function (e) {
                            hr(void 0, { suggestions: e });
                        }),
                        Tl("f_location").addEventListener("submit", function (e) {
                            (hr(void 0, { city: !0 }), e.preventDefault());
                        }),
                        Tl("i_units").addEventListener("change", function () {
                            hr(void 0, { units: this.value });
                        }),
                        Tl("i_forecast").addEventListener("change", function () {
                            hr(void 0, { forecast: this.value });
                        }),
                        Tl("i_temp").addEventListener("change", function () {
                            hr(void 0, { temp: this.value });
                        }),
                        Tl("i_moreinfo").addEventListener("change", function () {
                            hr(void 0, { moreinfo: this.value });
                        }),
                        Tl("i_provider").addEventListener("change", function () {
                            (hr(void 0, { provider: this.value }), this.blur());
                        }),
                        Tl("i_weatherhide").addEventListener("change", function () {
                            (Or(
                                {
                                    weatherdesc: "disabled" === this.value || "desc" === this.value,
                                    weathericon: "disabled" === this.value || "icon" === this.value,
                                },
                                { isEvent: !0 },
                            ),
                                hr(void 0, { unhide: !0 }));
                        }),
                        (0, al.onclickdown)(Tl("i_greethide"), (e, t) => {
                            (document
                                .getElementById("greetings_options")
                                ?.classList.toggle("shown", t.checked),
                                Or({ greetings: !t.checked }, { isEvent: !0 }));
                        }),
                        Tl("i_greeting").addEventListener("input", function () {
                            ia(void 0, { greeting: this.value });
                        }),
                        Tl("i_greeting").addEventListener("change", () => {
                            Tl("i_greeting").blur();
                        }),
                        Tl("i_greetsize").addEventListener("input", function () {
                            ia(void 0, { greetingsize: this.value });
                        }),
                        Tl("i_greetmode").addEventListener("change", function () {
                            ia(void 0, { greetingsmode: this.value });
                        }),
                        Tl("i_greetmorning").addEventListener("input", function () {
                            ia(void 0, { greetingscustom: { morning: this.value } });
                        }),
                        Tl("i_greetafternoon").addEventListener("input", function () {
                            ia(void 0, { greetingscustom: { afternoon: this.value } });
                        }),
                        Tl("i_greetevening").addEventListener("input", function () {
                            ia(void 0, { greetingscustom: { evening: this.value } });
                        }),
                        Tl("i_greetnight").addEventListener("input", function () {
                            ia(void 0, { greetingscustom: { night: this.value } });
                        }),
                        Tl("i_greetmorning").addEventListener("change", () => {
                            Tl("i_greetmorning").blur();
                        }),
                        Tl("i_greetafternoon").addEventListener("change", () => {
                            Tl("i_greetafternoon").blur();
                        }),
                        Tl("i_greetevening").addEventListener("change", () => {
                            Tl("i_greetevening").blur();
                        }),
                        Tl("i_greetnight").addEventListener("change", () => {
                            Tl("i_greetnight").blur();
                        }),
                        (0, al.onclickdown)(Tl("i_sb"), (e, t) => {
                            (Ar(void 0, { widget: ["searchbar", t.checked] }), xn("search"));
                        }),
                        Tl("i_sbengine").addEventListener("change", function () {
                            Pa(void 0, { engine: this.value });
                        }),
                        Tl("i_sb-opacity").addEventListener("input", function () {
                            Pa(void 0, { background: !0 });
                        }),
                        Tl("i_sb-shade").addEventListener("click", () => {
                            Pa(void 0, { background: !0 });
                        }),
                        Tl("i_sbwidth").addEventListener("input", function () {
                            Pa(void 0, { width: this.value });
                        }),
                        Tl("f_sbrequest").addEventListener("submit", function (e) {
                            (Pa(void 0, { request: !0 }), e.preventDefault());
                        }),
                        (0, al.onclickdown)(Tl("i_sbnewtab"), (e, t) => {
                            Pa(void 0, { newtab: t.checked });
                        }),
                        (0, al.onclickdown)(Tl("i_sbsuggestions"), (e, t) => {
                            Pa(void 0, { suggestions: t.checked });
                        }),
                        Tl("i_sbplaceholder").addEventListener("keyup", function () {
                            Pa(void 0, { placeholder: this.value });
                        }),
                        Tl("i_sbplaceholder").addEventListener("change", () => {
                            Tl("i_sbplaceholder").blur();
                        }),
                        (0, al.onclickdown)(Tl("i_quotes"), (e, t) => {
                            Ar(void 0, { widget: ["quotes", t.checked] });
                        }),
                        Tl("i_qtfreq").addEventListener("change", function () {
                            Ga(void 0, { frequency: this.value });
                        }),
                        Tl("i_qttype").addEventListener("change", function () {
                            Ga(void 0, { type: this.value });
                        }),
                        (0, al.onclickdown)(Tl("i_qtrefresh"), (e, t) => {
                            (((e, t = 800) => {
                                let n = !0;
                                (setTimeout(() => {
                                    ((n = !1), e.removeAttribute("disabled"));
                                }, t),
                                    n && e.setAttribute("disabled", ""));
                            })(t),
                                Yt(e, !0),
                                Ga(void 0, { refresh: !0 }));
                        }),
                        (0, al.onclickdown)(Tl("i_qtauthor"), (e, t) => {
                            Ga(void 0, { author: t.checked });
                        }),
                        Tl("i_qtlist").addEventListener("change", function () {
                            Ga(void 0, { userlist: this.value });
                        }),
                        Tl("f_qturl").addEventListener("submit", function (e) {
                            (e.preventDefault(), Ga(void 0, { url: Tl("i_qturl").value }));
                        }),
                        (0, al.onclickdown)(Tl("i_pomodoro"), (e, t) => {
                            Ar(void 0, { widget: ["pomodoro", t.checked] });
                            "0px" ===
                                document.querySelector("#pomodoro_container .glider").style
                                    .width &&
                                setTimeout(() => {
                                    xc();
                                }, 333);
                        }),
                        (0, al.onclickdown)(Tl("i_pmdr_sound"), (e, t) => {
                            kc(void 0, { sound: t.checked });
                        }),
                        Tl("i_pmdr_pomodoro").addEventListener("input", function () {
                            kc(void 0, { time_for: { pomodoro: Number(this.value) } });
                        }),
                        Tl("i_pmdr_pomodoro").addEventListener("change", () => {
                            Tl("i_pmdr_pomodoro").blur();
                        }),
                        Tl("i_pmdr_break").addEventListener("input", function () {
                            kc(void 0, { time_for: { break: Number(this.value) } });
                        }),
                        Tl("i_pmdr_break").addEventListener("change", () => {
                            Tl("i_pmdr_break").blur();
                        }),
                        Tl("i_pmdr_longbreak").addEventListener("input", function () {
                            kc(void 0, { time_for: { longbreak: Number(this.value) } });
                        }),
                        Tl("i_pmdr_longbreak").addEventListener("change", () => {
                            Tl("i_pmdr_longbreak").blur();
                        }),
                        Tl("i_customfont").addEventListener("pointerenter", () => {
                            ua(void 0, { autocomplete: !0 });
                        }),
                        Tl("f_customfont").addEventListener("submit", (e) => {
                            (ua(void 0, { family: Tl("i_customfont").value }),
                                e.preventDefault());
                        }),
                        Tl("i_weight").addEventListener("input", function () {
                            ua(void 0, { weight: this.value });
                        }),
                        Tl("i_size").addEventListener("input", function () {
                            ua(void 0, { size: this.value });
                        }),
                        Tl("i_textshadow").addEventListener("input", function () {
                            St(void 0, Number.parseFloat(this.value));
                        }),
                        (0, al.onclickdown)(Tl("b_editmove"), () => {
                            (jc(!1),
                                Ar(void 0, {
                                    toggle: !document
                                        .getElementById("interface")
                                        ?.classList.contains("move-edit"),
                                }));
                        }),
                        Tl("i_pagecolumns").addEventListener("change", function () {
                            Ar(void 0, { layout: this.value, toggle: !0 });
                        }),
                        Tl("i_pagewidth").addEventListener("input", function () {
                            xt({ width: Number.parseInt(this.value) }, !0);
                        }),
                        Tl("i_pagegap").addEventListener("input", function () {
                            xt({ gap: Number.parseFloat(this.value) }, !0);
                        }),
                        Tl("i_pagewidth").addEventListener(
                            "touchstart",
                            () => Ar(void 0, { overlay: !0 }),
                            { passive: !0 },
                        ),
                        Tl("i_pagewidth").addEventListener("mousedown", () =>
                            Ar(void 0, { overlay: !0 }),
                        ),
                        Tl("i_pagewidth").addEventListener("touchend", () =>
                            Ar(void 0, { overlay: !1 }),
                        ),
                        Tl("i_pagewidth").addEventListener("mouseup", () =>
                            Ar(void 0, { overlay: !1 }),
                        ),
                        Tl("i_synctype").addEventListener("change", function () {
                            tn(void 0, { type: this.value });
                        }),
                        Tl("f_gistsync").addEventListener("submit", function (e) {
                            (e.preventDefault(),
                                tn(void 0, { gistToken: Tl("i_gistsync").value }));
                        }),
                        Tl("f_urlsync").addEventListener("submit", function (e) {
                            (e.preventDefault(), tn(void 0, { url: Tl("i_urlsync").value }));
                        }),
                        (0, al.onclickdown)(Tl("b_storage-persist"), async () => {
                            tn(void 0, { firefoxPersist: await navigator.storage.persist() });
                        }),
                        (0, al.onclickdown)(Tl("b_gistup"), () => {
                            tn(void 0, { up: !0 });
                        }),
                        (0, al.onclickdown)(Tl("b_gistdown"), () => {
                            tn(void 0, { down: !0 });
                        }),
                        (0, al.onclickdown)(Tl("b_urldown"), () => {
                            tn(void 0, { down: !0 });
                        }),
                        Tl("settings-managment").addEventListener("dragenter", () => {
                            Tl("settings-managment").classList.add("dragging-file");
                        }),
                        Tl("file-import").addEventListener("dragleave", () => {
                            Tl("settings-managment").classList.remove("dragging-file");
                        }),
                        Tl("b_file-load").addEventListener("click", function () {
                            Tl("file-import")?.click();
                        }),
                        Tl("b_file-save").addEventListener("click", () => {
                            !(async function () {
                                const e = document.getElementById("file-download");
                                if (!e) return;
                                const t = new Date(),
                                    n = (await ct.sync.get()) ?? {},
                                    o = (e) => (1 === e.toString().length ? `0${e}` : e.toString()),
                                    s = t.toISOString().slice(0, 10),
                                    i = `${o(t.getHours())}_${o(t.getMinutes())}_${o(t.getSeconds())}`,
                                    r = new TextEncoder().encode(hl(n)),
                                    a = new Blob([r], { type: "application/json;charset=utf-8" }),
                                    c = URL.createObjectURL(a);
                                (e.setAttribute("href", c),
                                    e.setAttribute("tabindex", "-1"),
                                    e.setAttribute(
                                        "download",
                                        `dashx-${n?.about?.version} ${s} ${i}.json`,
                                    ),
                                    e.click());
                            })();
                        }),
                        Tl("file-import").addEventListener("change", function () {
                            !(function (e) {
                                function t(e) {
                                    let t = {};
                                    try {
                                        t = at(atob(e)) ?? {};
                                    } catch {
                                        try {
                                            t = at(e) ?? {};
                                        } catch (e) {
                                            t = {};
                                        }
                                    }
                                    return t;
                                }
                                if (!e.files || (e.files && 0 === e.files.length)) return;
                                const n = e.files[0],
                                    o = new FileReader();
                                ((o.onload = () => {
                                    if ("string" != typeof o.result) return !1;
                                    const e = t(o.result);
                                    Object.keys(Ge).filter((t) => t in e).length > 0 && Sl(e);
                                }),
                                    o.readAsText(n));
                            })(this);
                        }),
                        Tl("b_settings-copy").addEventListener("click", () => {
                            !(function () {
                                const e = document.querySelector("#b_settings-copy span"),
                                    t = document.getElementById("settings-data");
                                try {
                                    (navigator.clipboard.writeText(t?.textContent ?? "{}"),
                                        e &&
                                        ((e.textContent = kt("Copied!")),
                                            setTimeout(() => {
                                                e.textContent = kt("Copy");
                                            }, 1e3)));
                                } catch (e) { }
                            })();
                        }),
                        Tl("settings-data").addEventListener("input", (e) => {
                            Cl(e.type);
                        }),
                        Tl("settings-data").addEventListener("focus", (e) => {
                            Cl(e.type);
                        }),
                        Tl("settings-data").addEventListener("blur", (e) => {
                            Cl(e.type);
                        }),
                        (0, al.onclickdown)(Tl("b_settings-cancel"), () => {
                            Cl("cancel");
                        }),
                        (0, al.onclickdown)(Tl("b_settings-apply"), () => {
                            Sl(at(Tl("settings-data").value) ?? {});
                        }),
                        (0, al.onclickdown)(Tl("b_reset-first"), () => {
                            ql("first");
                        }),
                        (0, al.onclickdown)(Tl("b_reset-apply"), () => {
                            ql("yes");
                        }),
                        (0, al.onclickdown)(Tl("b_reset-cancel"), () => {
                            ql("no");
                        }),
                        Ue)
                ) {
                    const e = document.querySelectorAll("input[type='range'"),
                        t = (e) => {
                            document
                                .getElementById("settings")
                                ?.classList.toggle("see-through", "touchstart" === e.type);
                        };
                    for (const n of e)
                        (n.addEventListener("touchstart", t, { passive: !0 }),
                            n.addEventListener("touchend", t, { passive: !0 }));
                }
                const e = document.querySelectorAll('input[type="file"]');
                for (const t of e) {
                    const e = (e) => {
                        t.classList.toggle("dragover");
                    };
                    (t?.addEventListener("dragenter", e),
                        t?.addEventListener("dragleave", e),
                        t?.addEventListener("drop", e));
                }
                const t = document.querySelectorAll(".tooltip");
                for (const e of t)
                    (0, al.onclickdown)(e, () => {
                        const t = [...e.classList].filter((e) => e.startsWith("tt"))[0];
                        document
                            .querySelector(`.tooltiptext.${t}`)
                            ?.classList.toggle("shown");
                    });
                const n = document.querySelectorAll(".split-range button");
                for (const e of n)
                    (0, al.onclickdown)(e, () => {
                        e.classList.toggle("on");
                    });
            })(),
            xl(),
            setTimeout(() => {
                (!(function (e) {
                    const t = document.getElementById("timezones-select-template"),
                        n = 'input[name="worldclock-city"]',
                        o = ".worldclocks-item select",
                        s = document.querySelectorAll(n),
                        i = document.querySelector("#i_timezone"),
                        r = document.querySelectorAll(o),
                        a = [
                            "Europe/Paris",
                            "America/Sao_Paulo",
                            "America/Los_Angeles",
                            "Asia/Tokyo",
                            "Asia/Kolkata",
                        ];
                    for (const e of r) e.appendChild(t.content.cloneNode(!0));
                    i && i.appendChild(t.content.cloneNode(!0));
                    (s?.forEach((t, n) => {
                        (t.addEventListener("input", () => {
                            ia(void 0, { world: { index: n, region: t.value } });
                        }),
                            e.worldclocks[n] && (t.value = e.worldclocks[n].region));
                    }),
                        r?.forEach((t, n) => {
                            (t.addEventListener("change", (e) => {
                                const t = e.target.value;
                                ia(void 0, { world: { index: n, timezone: t } });
                            }),
                                (t.value = e.worldclocks[n]?.timezone ?? a[n]));
                        }),
                        i && (i.value = e.clock.timezone));
                })(r),
                    Il(r),
                    (function () {
                        const e = () => Il(),
                            t = () => chrome.storage.onChanged.removeListener(e);
                        "online" === Re
                            ? globalThis.addEventListener("storage", e)
                            : (chrome.storage.onChanged.addListener(e),
                                globalThis.addEventListener("beforeunload", t, { once: !0 }));
                    })(),
                    El(),
                    (function () {
                        const e = gt(() => {
                            (document
                                .getElementById("settings-footer")
                                .style.removeProperty("padding"),
                                _l());
                        }, 600);
                        (globalThis.addEventListener("resize", () => {
                            (e(),
                                document.getElementById("settings")?.style.transition ||
                                document
                                    .getElementById("settings")
                                    ?.setAttribute("style", "transition: none"));
                        }),
                            _l());
                    })(),
                    (function () {
                        for (const e of qt) e();
                        It = !0;
                    })(),
                    n?.classList.remove("init"));
            }, 500));
    }
    function kl(e) {
        const t = document.getElementById("show-settings"),
            n = document.getElementById("interface"),
            o = document.getElementById("settings"),
            s = document.getElementById("editlink"),
            i = !1 === o?.classList.contains("shown"),
            r = e?.detail?.scrollTo ?? !1,
            a = o?.querySelector(r);
        (a &&
            o &&
            requestAnimationFrame(() => {
                setTimeout(() => {
                    a.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 0);
            }),
            (!i && r) ||
            (o?.classList.toggle("shown", i),
                s?.classList.toggle("pushed", i),
                n?.classList.toggle("pushed", i),
                t?.classList.toggle("shown", i),
                o?.style.removeProperty("transform"),
                o?.style.removeProperty("transition"),
                document.dispatchEvent(new Event("close-edit"))));
    }
    function wl() {
        const e = [
            ["i_title", "Name"],
            ["i_greeting", "Name"],
            ["i_greetmorning", "Hello, $name!"],
            ["i_greetafternoon", "Good afternoon"],
            ["i_greetevening", "Good evening"],
            ["i_greetnight", "Good night"],
            ["i_tabtitle", "New tab"],
            ["i_sbrequest", "Search query: %s"],
            ["i_sbplaceholder", "Search"],
            ["css-editor-textarea", "Type in your custom CSS"],
            ["i_importtext", "or paste as text"],
            ["i_addlink-title", "Title"],
            ["i_addlink-url", "example.com"],
            ["i_qtlist", "Author, Your quote.\nAuthor, Your second quote."],
        ];
        for (const [t, n] of e)
            document.getElementById(t)?.setAttribute("placeholder", kt(n));
    }
    function El() {
        for (const e of document.querySelectorAll("[title]")) {
            const t = e.getAttribute("title") ?? "";
            (e.setAttribute("title", kt(t)), e.setAttribute("aria-label", kt(t)));
        }
    }
    function Ll(e, t) {
        (document.getElementById("settings")?.classList.toggle("all", e),
            t && ct.sync.set({ showall: e }));
    }
    function xl() {
        const signature = document.querySelector("#signature-one");
        const version = document.getElementById("version");
        if (signature) {
            signature.href = "https://github.com/Pro-Bandey";
            signature.textContent = "Pro-Bandey";
        }
        if (version) {
            version.textContent = Ge.about.version;
        }
    }
    function _l() {
        const e = document.getElementById("mobile-drag-zone"),
            t = document.getElementById("settings");
        let n = -75,
            o = 0,
            s = 0;
        function i(e) {
            (e.preventDefault(),
                t.classList.contains("dragging-mobile-settings") ||
                ("pointerdown" === e.type && (s = e.clientY),
                    "touchstart" === e.type && (s = e.touches[0].clientY),
                    0 === o && (o = s),
                    globalThis.addEventListener("touchmove", r),
                    globalThis.addEventListener("pointermove", r),
                    document.body.addEventListener("touchend", a),
                    document.body.addEventListener("pointerup", a),
                    document.body.classList.add("dragging-mobile-settings")));
        }
        function r(e) {
            let o = 0;
            if (
                ("pointermove" === e.type && (o = e.clientY),
                    "touchmove" === e.type && (o = e.touches[0].clientY),
                    o > 60)
            ) {
                const e = 100 - ((o - 25) / globalThis.innerHeight) * 100;
                ((n = +e.toFixed(2)),
                    (t.style.transform = `translateY(-${n}dvh)`),
                    (t.style.transition = "transform .0s"));
            }
        }
        function a(e) {
            let o = 0;
            ("pointerup" === e.type && (o = e.clientY),
                "touchend" === e.type && (o = e.changedTouches[0].clientY),
                globalThis.removeEventListener("touchmove", r),
                globalThis.removeEventListener("pointermove", r),
                document.body.removeEventListener("touchend", a),
                document.body.removeEventListener("pointerup", a),
                (s = 0));
            ((document.getElementById("settings-footer").style.paddingBottom =
                100 - Math.abs(n) + "dvh"),
                t.style.removeProperty("padding"),
                t.style.removeProperty("width"),
                t.style.removeProperty("overflow"),
                t.classList.remove("dragging"),
                o > globalThis.innerHeight - 100 && kl());
        }
        (e?.addEventListener("touchstart", i, { passive: !1 }),
            e?.addEventListener("pointerdown", i, { passive: !1 }));
    }
    async function Sl(e) {
        try {
            let t = await ct.sync.get();
            if (!1 === e?.font?.system) {
                const t = e?.font?.family,
                    n = e?.lang,
                    o = await (async function (e, t) {
                        const n = (await (await Pr("/fonts"))?.json())?.find(
                            (e) => e.family === t,
                        ),
                            o = ba(e);
                        return n?.subsets.includes(o);
                    })(n, t);
                !1 === o && (e.font.family = "");
            }
            (e?.searchbar?.on && xn("search"),
                (t = pl("import", t, e)),
                ct.sync.clear(),
                ct.sync.set(t),
                Jt());
        } catch (e) { }
    }
    function ql(e) {
        "yes" !== e
            ? (document
                .getElementById("reset-first")
                ?.classList.toggle("shown", "no" === e),
                document
                    .getElementById("reset-conf")
                    ?.classList.toggle("shown", "first" === e))
            : ct.clearall().then(Jt);
    }
    function Il(e) {
        try {
            e ? t(e) : ct.sync.get().then(t);
        } catch (e) { }
        function t(e) {
            const t = document.getElementById("settings-data");
            if (t && e.about) {
                const n = hl(e);
                ((e.about.browser = Re), (t.textContent = n));
            }
        }
    }
    async function Cl(e) {
        const t = Tl("settings-data"),
            n = await ct.sync.get();
        let o = !1;
        if ("input" === e) {
            const e = hl(n);
            let s = "";
            try {
                s = hl(JSON.parse(t.value ?? "{}"));
            } catch (e) { }
            ((o = s.length > 2 && e !== s),
                o
                    ? Tl("b_settings-apply")?.removeAttribute("disabled")
                    : Tl("b_settings-apply")?.setAttribute("disabled", ""));
        }
        ("cancel" === e && ((t.value = hl(n)), (o = !1)),
            "focus" === e &&
            (Tl("settings-files-options")?.classList.add("hidden"),
                Tl("settings-changes-options")?.classList.remove("hidden")),
            "blur" === e &&
            (Tl("settings-changes-options")?.classList.add("hidden"),
                Tl("settings-files-options")?.classList.remove("hidden")));
    }
    function Tl(e) {
        return document.getElementById(e);
    }
    function Al(e, t) {
        Tl(e).checked = t;
    }
    function Bl(e, t) {
        Tl(e).value = "string" == typeof t ? t : t?.toString();
    }
    function jl(e, t, n) {
        const o = Tl(e);
        n
            ? ((o.value = n), o.setAttribute("placeholder", n))
            : o.setAttribute("placeholder", t);
    }
    var Ol = !1;
    function Pl(e) {
        const t = document.getElementById("sb-suggestions");
        if ("Escape" !== e.code)
            "Tab" !== e.code || document.body.classList.toggle("tabbing", !0);
        else {
            if (t?.classList.contains("shown"))
                return void t?.classList.remove("shown");
            const n = zl(),
                o = "keyup" === e.type;
            n.contextmenu
                ? document.dispatchEvent(new Event("close-edit"))
                : n.settings && o
                    ? document.dispatchEvent(new CustomEvent("toggle-settings"))
                    : n.selectall
                        ? document.dispatchEvent(new Event("remove-select-all"))
                        : n.folder
                            ? document.dispatchEvent(new Event("close-folder"))
                            : o &&
                            void 0 === document.documentElement.dataset.supportersModal &&
                            document.dispatchEvent(new CustomEvent("toggle-settings"));
        }
    }
    function $l(e) {
        if (Ol) return;
        const t = zl(),
            n = (e.composedPath() ?? [document.body]).filter(
                (e) => e?.className?.includes,
            ),
            o = n.map((e) => e.id),
            s = "BODY" === n[0].tagName,
            i = n.some((e) => e.classList.contains("link")),
            r = n.some((e) => e.className.includes("folder")),
            a = n.some((e) => e.className.includes("add-group")),
            c = n.some((e) => e.className.includes("in-folder")),
            l = n.some((e) => e.className.includes("param-btn")),
            d = n.some((e) => "local_options" === e.id),
            u = o.includes("interface"),
            m = o.includes("contextmenu"),
            g =
                (n.some((e) => "settings" === e.id),
                    n.some((e) => "show-settings" === e.id)),
            f = n.some(
                (e) =>
                    e instanceof HTMLElement &&
                    e.matches(
                        'a[href], button, input, select, textarea, label, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]',
                    ),
            );
        if (
            (document.body.classList.contains("tabbing") &&
                document.body?.classList.toggle("tabbing", !1),
                document.querySelectorAll(".thumbnail.selected") && !d && !l)
        )
            for (const e of document.querySelectorAll(".thumbnail.selected"))
                e.classList.remove("selected");
        if (
            (g && document.dispatchEvent(new CustomEvent("toggle-settings")),
                !t.contextmenu || m)
        )
            !1 !== (s || u) &&
                (t.settings && !f
                    ? document.dispatchEvent(new CustomEvent("toggle-settings"))
                    : t.selectall && !i
                        ? document.dispatchEvent(new Event("remove-select-all"))
                        : !t.folder ||
                        c ||
                        r ||
                        document.dispatchEvent(new Event("close-folder")));
        else {
            if (a) return;
            document.dispatchEvent(new Event("close-edit"));
        }
    }
    function zl() {
        return {
            settings: !!document
                .getElementById("settings")
                ?.classList.contains("shown"),
            folder: !!document.querySelector(".in-folder"),
            selectall: document
                .getElementById("linkblocks")
                ?.classList.contains("select-all"),
            contextmenu: document.querySelector("#contextmenu")?.open,
        };
    }
    function Nl(e) {
        const t = e.composedPath()[0]?.tagName ?? "";
        Ol = ["TEXTAREA", "INPUT"].includes(t);
    }
    function Ml() {
        setTimeout(() => {
            !1 ===
                document
                    .getElementById("element-mover")
                    ?.classList.contains("hidden") &&
                document.dispatchEvent(new CustomEvent("toggle-settings"));
        }, 20);
    }
    try {
        (!(async function () {
            let { sync: e, local: t } = await ct.init();
            const n = e?.about?.version;
            (e && t) || ((e = structuredClone(Ge)), (t = structuredClone(Ve)));
            n !== Pe &&
                (localStorage.setItem("update-archive", JSON.stringify(e)),
                    (e = pl("update", e)),
                    (t.translations = void 0),
                    ct.local.remove("translations"),
                    (t = { ...Ve, ...t }),
                    await ct.sync.clear(),
                    await ct.sync.set(e));
            (await yt(e.lang, t),
                Co(void 0, e),
                vt(null, e.lang),
                Xe(e.clock.timezone),
                Qe(t.lastWeather?.sunrise, t.lastWeather?.sunset),
                hr({ sync: e, lastWeather: t.lastWeather }),
                ua(e.font),
                St(e.textShadow),
                Et(e.favicon),
                Lt(e.tabtitle),
                ia(e),
                _t(e.dark),
                Pa(e.searchbar),
                Ga({ sync: e, local: t }),
                kc(e.pomodoro),
                Ar(e.move),
                (function (e, t) {
                    const n = document.getElementById("styles");
                    if (t) {
                        if (void 0 !== t?.styling) {
                            const e = nt(t.styling, 8080);
                            ((n.textContent = e), pt({ css: e }));
                        }
                    } else
                        (e && (n.textContent = e),
                            Ct(async () => {
                                const { createCssEditor: t } = await Promise.resolve().then(
                                    () => (Ce(), _e),
                                ),
                                    o = t({
                                        language: "css",
                                        lineNumbers: !1,
                                        wordWrap: !0,
                                        insertSpaces: !1,
                                        value: e || "",
                                    }),
                                    s = o.keyCommandMap.Tab;
                                ((o.textarea.id = "css-editor-textarea"),
                                    (o.textarea.maxLength = 8080),
                                    o.textarea.setAttribute("aria-labelledby", "lbl-css"),
                                    (o.textarea.placeholder = kt("Type in your custom CSS")),
                                    o.on("update", (e) => {
                                        (pt({ css: nt(e, 8080) }), (n.textContent = nt(e, 8080)));
                                    }),
                                    (o.keyCommandMap.Tab = (e, t, n) =>
                                        !document.body.matches(".tabbing") && s?.(e, t, n)));
                            }));
                })(e.css),
                Or(e.hide),
                ii(e, t, !0),
                jo({ sync: e, local: t }),
                tn(t),
                (function (e, t) {
                    const n = document.getElementById("show-settings");
                    ((ul = e),
                        (ml = t),
                        document.addEventListener("updateSettingsBeforeInit", (e) => {
                            ul = e.detail;
                        }),
                        document.body?.addEventListener("keydown", bl),
                        n?.addEventListener("pointerdown", bl),
                        document.body
                            .querySelectorAll('[data-action="openTheseSettings"]')
                            .forEach((e) => {
                                e?.addEventListener("pointerdown", bl);
                            }));
                })(e, t),
                xt({ width: e.pagewidth, gap: e.pagegap }),
                (function (e) {
                    if (e || "opera" !== Fe || "chrome" !== Re) return;
                    const t = document
                        .getElementById("opera-explainer-template")
                        .content.cloneNode(!0),
                        n = t.getElementById("opera-explainer"),
                        o = t.getElementById("b_opera-explained");
                    (document.body.classList.add("loading"),
                        document.body.appendChild(n),
                        n.showModal(),
                        setTimeout(() => n.classList.add("shown")),
                        o?.addEventListener("click", () => {
                            (ct.local.set({ operaExplained: !0 }),
                                document.body.classList.remove("loading"),
                                n.close());
                        }));
                })(t.operaExplained),
                (function () {
                    function e() {
                        localStorage.setItem("lastActiveTab", Ne);
                    }
                    document.hidden || e();
                    (globalThis.window.addEventListener("focus", e),
                        globalThis.window.addEventListener("visibilitychange", () => {
                            document.hidden || e();
                        }),
                        globalThis.window.addEventListener("beforeunload", () => {
                            Me.postMessage("tabClosed");
                        }),
                        (Me.onmessage = (t) => {
                            "tabClosed" === t.data && e();
                        }));
                })(),
                (document.documentElement.dataset.system = De),
                (document.documentElement.dataset.browser = Fe),
                (document.documentElement.dataset.platform = Re),
                document.getElementById("time")?.classList.toggle("hidden", !e.time),
                document.getElementById("main")?.classList.toggle("hidden", !e.main),
                (o = () => {
                    (document.body.classList.remove("init"),
                        (function () {
                            if ("firefox" === Fe || "safari" === Fe) return;
                            const e = 144e5,
                                t = "yes" === localStorage.potato;
                            if (Date.now() - Number.parseInt(localStorage.lastPotatoCheck ?? "0") < e)
                                return void document.body.classList.toggle("potato", t);
                            const n = document.createElement("canvas")?.getContext("webgl"),
                                o = n?.getExtension("WEBGL_debug_renderer_info");
                            if ("chrome" === Fe && !n)
                                return void document.body.classList.add("potato");
                            const s = n?.getParameter(o?.UNMASKED_VENDOR_WEBGL ?? 0).toString(),
                                i = n?.getParameter(o?.UNMASKED_RENDERER_WEBGL ?? 0).toString(),
                                r = s.includes("Google") && i.includes("SwiftShader");
                            ((localStorage.potato = r ? "yes" : "no"),
                                (localStorage.lastPotatoCheck = Date.now()),
                                document.body.classList.toggle("potato", r));
                        })(),
                        document.body.addEventListener("mousedown", Nl),
                        document.getElementById("b_editmove")?.addEventListener("click", Ml),
                        document.addEventListener("click", $l),
                        document.addEventListener("keydown", Pl),
                        document.addEventListener("keyup", Pl));
                }),
                o && (qo = o));
            var o;
        })(),
            (function () {
                if ("PROD" !== ze || "online" !== Re || !("serviceWorker" in navigator))
                    return;
                let e;
                (navigator.serviceWorker.register("service-worker.js"),
                    globalThis.addEventListener(
                        "beforeinstallprompt",
                        (t) => ((e = t), e),
                    ));
            })(),
            (function () {
                const e = document.getElementById("interface"),
                    t = "online" === Re && "firefox" === Fe && Ue,
                    n = "online" === Re && "safari" === Fe && "ios" === De;
                let o,
                    s = !1;
                Ue && document.addEventListener("visibilitychange", i);
                t &&
                    (a(),
                        "ios" === De &&
                        (globalThis.requestAnimationFrame(r),
                            setTimeout(() => cancelAnimationFrame(o), 500)));
                n &&
                    Ct(() => {
                        const e = document.querySelectorAll(
                            'input[type="text"], input[type="url"], textarea',
                        );
                        for (const t of e)
                            (t.addEventListener("focus", c), t.addEventListener("blur", l));
                    });
                async function i() {
                    if (!1 === s) return void (s = !0);
                    s = !1;
                    const e = await ct.sync.get(),
                        t = await ct.local.get(),
                        { backgroundLastChange: n, lastWeather: o } = t;
                    if (!e.clock || !e.weather) return;
                    const i = (n ? new Date(n) : new Date()).getTime(),
                        r = et(e.backgrounds.frequency, i),
                        a = "color" !== e.backgrounds.type;
                    (ia(e), hr({ sync: e, lastWeather: o }), a && r && ii(e, t));
                }
                function r() {
                    (a(), (o = requestAnimationFrame(r)));
                }
                function a() {
                    document.documentElement.style.setProperty(
                        "--app-height",
                        `${globalThis.innerHeight}px`,
                    );
                }
                function c() {
                    const t = document.getElementById("settings");
                    e &&
                        t &&
                        ((e.style.touchAction = "none"), (t.style.touchAction = "none"));
                }
                function l() {
                    const t = document.getElementById("settings");
                    e &&
                        t &&
                        (e.style.removeProperty("touch-action"),
                            t.style.removeProperty("touch-action"));
                }
            })());
    } catch (e) { }
})();
