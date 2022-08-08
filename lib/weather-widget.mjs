function bn(t, e) {
  const n = /* @__PURE__ */ Object.create(null), r = t.split(",");
  for (let o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? (o) => !!n[o.toLowerCase()] : (o) => !!n[o];
}
const _p = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt", Kp = /* @__PURE__ */ bn(_p), Wp = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zp = /* @__PURE__ */ bn(Wp);
function zu(t) {
  return !!t || t === "";
}
function eo(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++) {
      const r = t[n], o = kt(r) ? Xp(r) : eo(r);
      if (o)
        for (const a in o)
          e[a] = o[a];
    }
    return e;
  } else {
    if (kt(t))
      return t;
    if (Dt(t))
      return t;
  }
}
const Gp = /;(?![^(]*\))/g, Yp = /:(.+)/;
function Xp(t) {
  const e = {};
  return t.split(Gp).forEach((n) => {
    if (n) {
      const r = n.split(Yp);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function ni(t) {
  let e = "";
  if (kt(t))
    e = t;
  else if (tt(t))
    for (let n = 0; n < t.length; n++) {
      const r = ni(t[n]);
      r && (e += r + " ");
    }
  else if (Dt(t))
    for (const n in t)
      t[n] && (e += n + " ");
  return e.trim();
}
function Jp(t) {
  if (!t)
    return null;
  let { class: e, style: n } = t;
  return e && !kt(e) && (t.class = ni(e)), n && (t.style = eo(n)), t;
}
const Qp = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Zp = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", qp = /* @__PURE__ */ bn(Qp), th = /* @__PURE__ */ bn(Zp);
function eh(t, e) {
  if (t.length !== e.length)
    return !1;
  let n = !0;
  for (let r = 0; n && r < t.length; r++)
    n = Hn(t[r], e[r]);
  return n;
}
function Hn(t, e) {
  if (t === e)
    return !0;
  let n = cc(t), r = cc(e);
  if (n || r)
    return n && r ? t.getTime() === e.getTime() : !1;
  if (n = Ko(t), r = Ko(e), n || r)
    return t === e;
  if (n = tt(t), r = tt(e), n || r)
    return n && r ? eh(t, e) : !1;
  if (n = Dt(t), r = Dt(e), n || r) {
    if (!n || !r)
      return !1;
    const o = Object.keys(t).length, a = Object.keys(e).length;
    if (o !== a)
      return !1;
    for (const i in t) {
      const s = t.hasOwnProperty(i), l = e.hasOwnProperty(i);
      if (s && !l || !s && l || !Hn(t[i], e[i]))
        return !1;
    }
  }
  return String(t) === String(e);
}
function pa(t, e) {
  return t.findIndex((n) => Hn(n, e));
}
const Ce = (t) => kt(t) ? t : t == null ? "" : tt(t) || Dt(t) && (t.toString === Xu || !st(t.toString)) ? JSON.stringify(t, Gu, 2) : String(t), Gu = (t, e) => e && e.__v_isRef ? Gu(t, e.value) : fr(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
} : Nr(e) ? {
  [`Set(${e.size})`]: [...e.values()]
} : Dt(e) && !tt(e) && !Ju(e) ? String(e) : e, Ct = null.NODE_ENV !== "production" ? Object.freeze({}) : {}, Hr = null.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, Yu = () => !1, nh = /^on[^a-z]/, no = (t) => nh.test(t), Hi = (t) => t.startsWith("onUpdate:"), $t = Object.assign, cl = (t, e) => {
  const n = t.indexOf(e);
  n > -1 && t.splice(n, 1);
}, rh = Object.prototype.hasOwnProperty, bt = (t, e) => rh.call(t, e), tt = Array.isArray, fr = (t) => ri(t) === "[object Map]", Nr = (t) => ri(t) === "[object Set]", cc = (t) => ri(t) === "[object Date]", st = (t) => typeof t == "function", kt = (t) => typeof t == "string", Ko = (t) => typeof t == "symbol", Dt = (t) => t !== null && typeof t == "object", ha = (t) => Dt(t) && st(t.then) && st(t.catch), Xu = Object.prototype.toString, ri = (t) => Xu.call(t), ul = (t) => ri(t).slice(8, -1), Ju = (t) => ri(t) === "[object Object]", fl = (t) => kt(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, wo = /* @__PURE__ */ bn(
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), oh = /* @__PURE__ */ bn("bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"), ma = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (n) => e[n] || (e[n] = t(n));
}, ih = /-(\w)/g, Ae = ma((t) => t.replace(ih, (e, n) => n ? n.toUpperCase() : "")), ah = /\B([A-Z])/g, Ve = ma((t) => t.replace(ah, "-$1").toLowerCase()), _n = ma((t) => t.charAt(0).toUpperCase() + t.slice(1)), cn = ma((t) => t ? `on${_n(t)}` : ""), Gr = (t, e) => !Object.is(t, e), Pn = (t, e) => {
  for (let n = 0; n < t.length; n++)
    t[n](e);
}, _i = (t, e, n) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: n
  });
}, Kn = (t) => {
  const e = parseFloat(t);
  return isNaN(e) ? t : e;
};
let uc;
const Qu = () => uc || (uc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ki(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let Te;
class dl {
  constructor(e = !1) {
    this.active = !0, this.effects = [], this.cleanups = [], !e && Te && (this.parent = Te, this.index = (Te.scopes || (Te.scopes = [])).push(this) - 1);
  }
  run(e) {
    if (this.active) {
      const n = Te;
      try {
        return Te = this, e();
      } finally {
        Te = n;
      }
    } else
      null.NODE_ENV !== "production" && Ki("cannot run an inactive effect scope.");
  }
  on() {
    Te = this;
  }
  off() {
    Te = this.parent;
  }
  stop(e) {
    if (this.active) {
      let n, r;
      for (n = 0, r = this.effects.length; n < r; n++)
        this.effects[n].stop();
      for (n = 0, r = this.cleanups.length; n < r; n++)
        this.cleanups[n]();
      if (this.scopes)
        for (n = 0, r = this.scopes.length; n < r; n++)
          this.scopes[n].stop(!0);
      if (this.parent && !e) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.active = !1;
    }
  }
}
function pl(t) {
  return new dl(t);
}
function Zu(t, e = Te) {
  e && e.active && e.effects.push(t);
}
function sh() {
  return Te;
}
function lh(t) {
  Te ? Te.cleanups.push(t) : null.NODE_ENV !== "production" && Ki("onScopeDispose() is called when there is no active effect scope to be associated with.");
}
const Wo = (t) => {
  const e = new Set(t);
  return e.w = 0, e.n = 0, e;
}, qu = (t) => (t.w & Wn) > 0, tf = (t) => (t.n & Wn) > 0, ch = ({ deps: t }) => {
  if (t.length)
    for (let e = 0; e < t.length; e++)
      t[e].w |= Wn;
}, uh = (t) => {
  const { deps: e } = t;
  if (e.length) {
    let n = 0;
    for (let r = 0; r < e.length; r++) {
      const o = e[r];
      qu(o) && !tf(o) ? o.delete(t) : e[n++] = o, o.w &= ~Wn, o.n &= ~Wn;
    }
    e.length = n;
  }
}, hs = /* @__PURE__ */ new WeakMap();
let mo = 0, Wn = 1;
const ms = 30;
let pe;
const dr = Symbol(null.NODE_ENV !== "production" ? "iterate" : ""), gs = Symbol(null.NODE_ENV !== "production" ? "Map key iterate" : "");
class oi {
  constructor(e, n = null, r) {
    this.fn = e, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Zu(this, r);
  }
  run() {
    if (!this.active)
      return this.fn();
    let e = pe, n = jn;
    for (; e; ) {
      if (e === this)
        return;
      e = e.parent;
    }
    try {
      return this.parent = pe, pe = this, jn = !0, Wn = 1 << ++mo, mo <= ms ? ch(this) : fc(this), this.fn();
    } finally {
      mo <= ms && uh(this), Wn = 1 << --mo, pe = this.parent, jn = n, this.parent = void 0, this.deferStop && this.stop();
    }
  }
  stop() {
    pe === this ? this.deferStop = !0 : this.active && (fc(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function fc(t) {
  const { deps: e } = t;
  if (e.length) {
    for (let n = 0; n < e.length; n++)
      e[n].delete(t);
    e.length = 0;
  }
}
function fh(t, e) {
  t.effect && (t = t.effect.fn);
  const n = new oi(t);
  e && ($t(n, e), e.scope && Zu(n, e.scope)), (!e || !e.lazy) && n.run();
  const r = n.run.bind(n);
  return r.effect = n, r;
}
function dh(t) {
  t.effect.stop();
}
let jn = !0;
const ef = [];
function Cr() {
  ef.push(jn), jn = !1;
}
function Tr() {
  const t = ef.pop();
  jn = t === void 0 ? !0 : t;
}
function Se(t, e, n) {
  if (jn && pe) {
    let r = hs.get(t);
    r || hs.set(t, r = /* @__PURE__ */ new Map());
    let o = r.get(n);
    o || r.set(n, o = Wo());
    const a = null.NODE_ENV !== "production" ? { effect: pe, target: t, type: e, key: n } : void 0;
    vs(o, a);
  }
}
function vs(t, e) {
  let n = !1;
  mo <= ms ? tf(t) || (t.n |= Wn, n = !qu(t)) : n = !t.has(pe), n && (t.add(pe), pe.deps.push(t), null.NODE_ENV !== "production" && pe.onTrack && pe.onTrack(Object.assign({ effect: pe }, e)));
}
function hn(t, e, n, r, o, a) {
  const i = hs.get(t);
  if (!i)
    return;
  let s = [];
  if (e === "clear")
    s = [...i.values()];
  else if (n === "length" && tt(t))
    i.forEach((c, f) => {
      (f === "length" || f >= r) && s.push(c);
    });
  else
    switch (n !== void 0 && s.push(i.get(n)), e) {
      case "add":
        tt(t) ? fl(n) && s.push(i.get("length")) : (s.push(i.get(dr)), fr(t) && s.push(i.get(gs)));
        break;
      case "delete":
        tt(t) || (s.push(i.get(dr)), fr(t) && s.push(i.get(gs)));
        break;
      case "set":
        fr(t) && s.push(i.get(dr));
        break;
    }
  const l = null.NODE_ENV !== "production" ? { target: t, type: e, key: n, newValue: r, oldValue: o, oldTarget: a } : void 0;
  if (s.length === 1)
    s[0] && (null.NODE_ENV !== "production" ? jr(s[0], l) : jr(s[0]));
  else {
    const c = [];
    for (const f of s)
      f && c.push(...f);
    null.NODE_ENV !== "production" ? jr(Wo(c), l) : jr(Wo(c));
  }
}
function jr(t, e) {
  const n = tt(t) ? t : [...t];
  for (const r of n)
    r.computed && dc(r, e);
  for (const r of n)
    r.computed || dc(r, e);
}
function dc(t, e) {
  (t !== pe || t.allowRecurse) && (null.NODE_ENV !== "production" && t.onTrigger && t.onTrigger($t({ effect: t }, e)), t.scheduler ? t.scheduler() : t.run());
}
const ph = /* @__PURE__ */ bn("__proto__,__v_isRef,__isVue"), nf = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Ko)
), hh = /* @__PURE__ */ ga(), mh = /* @__PURE__ */ ga(!1, !0), gh = /* @__PURE__ */ ga(!0), vh = /* @__PURE__ */ ga(!0, !0), pc = /* @__PURE__ */ yh();
function yh() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...n) {
      const r = pt(this);
      for (let a = 0, i = this.length; a < i; a++)
        Se(r, "get", a + "");
      const o = r[e](...n);
      return o === -1 || o === !1 ? r[e](...n.map(pt)) : o;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...n) {
      Cr();
      const r = pt(this)[e].apply(this, n);
      return Tr(), r;
    };
  }), t;
}
function ga(t = !1, e = !1) {
  return function(r, o, a) {
    if (o === "__v_isReactive")
      return !t;
    if (o === "__v_isReadonly")
      return t;
    if (o === "__v_isShallow")
      return e;
    if (o === "__v_raw" && a === (t ? e ? ff : uf : e ? cf : lf).get(r))
      return r;
    const i = tt(r);
    if (!t && i && bt(pc, o))
      return Reflect.get(pc, o, a);
    const s = Reflect.get(r, o, a);
    return (Ko(o) ? nf.has(o) : ph(o)) || (t || Se(r, "get", o), e) ? s : jt(s) ? i && fl(o) ? s : s.value : Dt(s) ? t ? ml(s) : ii(s) : s;
  };
}
const bh = /* @__PURE__ */ rf(), Eh = /* @__PURE__ */ rf(!0);
function rf(t = !1) {
  return function(n, r, o, a) {
    let i = n[r];
    if (zn(i) && jt(i) && !jt(o))
      return !1;
    if (!t && !zn(o) && (Wi(o) || (o = pt(o), i = pt(i)), !tt(n) && jt(i) && !jt(o)))
      return i.value = o, !0;
    const s = tt(n) && fl(r) ? Number(r) < n.length : bt(n, r), l = Reflect.set(n, r, o, a);
    return n === pt(a) && (s ? Gr(o, i) && hn(n, "set", r, o, i) : hn(n, "add", r, o)), l;
  };
}
function xh(t, e) {
  const n = bt(t, e), r = t[e], o = Reflect.deleteProperty(t, e);
  return o && n && hn(t, "delete", e, void 0, r), o;
}
function Oh(t, e) {
  const n = Reflect.has(t, e);
  return (!Ko(e) || !nf.has(e)) && Se(t, "has", e), n;
}
function Sh(t) {
  return Se(t, "iterate", tt(t) ? "length" : dr), Reflect.ownKeys(t);
}
const of = {
  get: hh,
  set: bh,
  deleteProperty: xh,
  has: Oh,
  ownKeys: Sh
}, af = {
  get: gh,
  set(t, e) {
    return null.NODE_ENV !== "production" && Ki(`Set operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  },
  deleteProperty(t, e) {
    return null.NODE_ENV !== "production" && Ki(`Delete operation on key "${String(e)}" failed: target is readonly.`, t), !0;
  }
}, wh = /* @__PURE__ */ $t({}, of, {
  get: mh,
  set: Eh
}), Nh = /* @__PURE__ */ $t({}, af, {
  get: vh
}), hl = (t) => t, va = (t) => Reflect.getPrototypeOf(t);
function pi(t, e, n = !1, r = !1) {
  t = t.__v_raw;
  const o = pt(t), a = pt(e);
  n || (e !== a && Se(o, "get", e), Se(o, "get", a));
  const { has: i } = va(o), s = r ? hl : n ? gl : Go;
  if (i.call(o, e))
    return s(t.get(e));
  if (i.call(o, a))
    return s(t.get(a));
  t !== o && t.get(e);
}
function hi(t, e = !1) {
  const n = this.__v_raw, r = pt(n), o = pt(t);
  return e || (t !== o && Se(r, "has", t), Se(r, "has", o)), t === o ? n.has(t) : n.has(t) || n.has(o);
}
function mi(t, e = !1) {
  return t = t.__v_raw, !e && Se(pt(t), "iterate", dr), Reflect.get(t, "size", t);
}
function hc(t) {
  t = pt(t);
  const e = pt(this);
  return va(e).has.call(e, t) || (e.add(t), hn(e, "add", t, t)), this;
}
function mc(t, e) {
  e = pt(e);
  const n = pt(this), { has: r, get: o } = va(n);
  let a = r.call(n, t);
  a ? null.NODE_ENV !== "production" && sf(n, r, t) : (t = pt(t), a = r.call(n, t));
  const i = o.call(n, t);
  return n.set(t, e), a ? Gr(e, i) && hn(n, "set", t, e, i) : hn(n, "add", t, e), this;
}
function gc(t) {
  const e = pt(this), { has: n, get: r } = va(e);
  let o = n.call(e, t);
  o ? null.NODE_ENV !== "production" && sf(e, n, t) : (t = pt(t), o = n.call(e, t));
  const a = r ? r.call(e, t) : void 0, i = e.delete(t);
  return o && hn(e, "delete", t, void 0, a), i;
}
function vc() {
  const t = pt(this), e = t.size !== 0, n = null.NODE_ENV !== "production" ? fr(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && hn(t, "clear", void 0, void 0, n), r;
}
function gi(t, e) {
  return function(r, o) {
    const a = this, i = a.__v_raw, s = pt(i), l = e ? hl : t ? gl : Go;
    return !t && Se(s, "iterate", dr), i.forEach((c, f) => r.call(o, l(c), l(f), a));
  };
}
function vi(t, e, n) {
  return function(...r) {
    const o = this.__v_raw, a = pt(o), i = fr(a), s = t === "entries" || t === Symbol.iterator && i, l = t === "keys" && i, c = o[t](...r), f = n ? hl : e ? gl : Go;
    return !e && Se(a, "iterate", l ? gs : dr), {
      next() {
        const { value: u, done: d } = c.next();
        return d ? { value: u, done: d } : {
          value: s ? [f(u[0]), f(u[1])] : f(u),
          done: d
        };
      },
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function wn(t) {
  return function(...e) {
    if (null.NODE_ENV !== "production") {
      const n = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(`${_n(t)} operation ${n}failed: target is readonly.`, pt(this));
    }
    return t === "delete" ? !1 : this;
  };
}
function Ch() {
  const t = {
    get(a) {
      return pi(this, a);
    },
    get size() {
      return mi(this);
    },
    has: hi,
    add: hc,
    set: mc,
    delete: gc,
    clear: vc,
    forEach: gi(!1, !1)
  }, e = {
    get(a) {
      return pi(this, a, !1, !0);
    },
    get size() {
      return mi(this);
    },
    has: hi,
    add: hc,
    set: mc,
    delete: gc,
    clear: vc,
    forEach: gi(!1, !0)
  }, n = {
    get(a) {
      return pi(this, a, !0);
    },
    get size() {
      return mi(this, !0);
    },
    has(a) {
      return hi.call(this, a, !0);
    },
    add: wn("add"),
    set: wn("set"),
    delete: wn("delete"),
    clear: wn("clear"),
    forEach: gi(!0, !1)
  }, r = {
    get(a) {
      return pi(this, a, !0, !0);
    },
    get size() {
      return mi(this, !0);
    },
    has(a) {
      return hi.call(this, a, !0);
    },
    add: wn("add"),
    set: wn("set"),
    delete: wn("delete"),
    clear: wn("clear"),
    forEach: gi(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((a) => {
    t[a] = vi(a, !1, !1), n[a] = vi(a, !0, !1), e[a] = vi(a, !1, !0), r[a] = vi(a, !0, !0);
  }), [
    t,
    n,
    e,
    r
  ];
}
const [Th, Dh, Ih, Ah] = /* @__PURE__ */ Ch();
function ya(t, e) {
  const n = e ? t ? Ah : Ih : t ? Dh : Th;
  return (r, o, a) => o === "__v_isReactive" ? !t : o === "__v_isReadonly" ? t : o === "__v_raw" ? r : Reflect.get(bt(n, o) && o in r ? n : r, o, a);
}
const Ph = {
  get: /* @__PURE__ */ ya(!1, !1)
}, Rh = {
  get: /* @__PURE__ */ ya(!1, !0)
}, Mh = {
  get: /* @__PURE__ */ ya(!0, !1)
}, $h = {
  get: /* @__PURE__ */ ya(!0, !0)
};
function sf(t, e, n) {
  const r = pt(n);
  if (r !== n && e.call(t, r)) {
    const o = ul(t);
    console.warn(`Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
const lf = /* @__PURE__ */ new WeakMap(), cf = /* @__PURE__ */ new WeakMap(), uf = /* @__PURE__ */ new WeakMap(), ff = /* @__PURE__ */ new WeakMap();
function Lh(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Fh(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Lh(ul(t));
}
function ii(t) {
  return zn(t) ? t : ba(t, !1, of, Ph, lf);
}
function df(t) {
  return ba(t, !1, wh, Rh, cf);
}
function ml(t) {
  return ba(t, !0, af, Mh, uf);
}
function lr(t) {
  return ba(t, !0, Nh, $h, ff);
}
function ba(t, e, n, r, o) {
  if (!Dt(t))
    return null.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const a = o.get(t);
  if (a)
    return a;
  const i = Fh(t);
  if (i === 0)
    return t;
  const s = new Proxy(t, i === 2 ? r : n);
  return o.set(t, s), s;
}
function Ye(t) {
  return zn(t) ? Ye(t.__v_raw) : !!(t && t.__v_isReactive);
}
function zn(t) {
  return !!(t && t.__v_isReadonly);
}
function Wi(t) {
  return !!(t && t.__v_isShallow);
}
function zo(t) {
  return Ye(t) || zn(t);
}
function pt(t) {
  const e = t && t.__v_raw;
  return e ? pt(e) : t;
}
function Fe(t) {
  return _i(t, "__v_skip", !0), t;
}
const Go = (t) => Dt(t) ? ii(t) : t, gl = (t) => Dt(t) ? ml(t) : t;
function vl(t) {
  jn && pe && (t = pt(t), null.NODE_ENV !== "production" ? vs(t.dep || (t.dep = Wo()), {
    target: t,
    type: "get",
    key: "value"
  }) : vs(t.dep || (t.dep = Wo())));
}
function Ea(t, e) {
  t = pt(t), t.dep && (null.NODE_ENV !== "production" ? jr(t.dep, {
    target: t,
    type: "set",
    key: "value",
    newValue: e
  }) : jr(t.dep));
}
function jt(t) {
  return !!(t && t.__v_isRef === !0);
}
function pr(t) {
  return pf(t, !1);
}
function jh(t) {
  return pf(t, !0);
}
function pf(t, e) {
  return jt(t) ? t : new Vh(t, e);
}
class Vh {
  constructor(e, n) {
    this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? e : pt(e), this._value = n ? e : Go(e);
  }
  get value() {
    return vl(this), this._value;
  }
  set value(e) {
    e = this.__v_isShallow ? e : pt(e), Gr(e, this._rawValue) && (this._rawValue = e, this._value = this.__v_isShallow ? e : Go(e), Ea(this, e));
  }
}
function kh(t) {
  Ea(t, null.NODE_ENV !== "production" ? t.value : void 0);
}
function Ft(t) {
  return jt(t) ? t.value : t;
}
const Uh = {
  get: (t, e, n) => Ft(Reflect.get(t, e, n)),
  set: (t, e, n, r) => {
    const o = t[e];
    return jt(o) && !jt(n) ? (o.value = n, !0) : Reflect.set(t, e, n, r);
  }
};
function yl(t) {
  return Ye(t) ? t : new Proxy(t, Uh);
}
class Bh {
  constructor(e) {
    this.dep = void 0, this.__v_isRef = !0;
    const { get: n, set: r } = e(() => vl(this), () => Ea(this));
    this._get = n, this._set = r;
  }
  get value() {
    return this._get();
  }
  set value(e) {
    this._set(e);
  }
}
function Hh(t) {
  return new Bh(t);
}
function ys(t) {
  null.NODE_ENV !== "production" && !zo(t) && console.warn("toRefs() expects a reactive object but received a plain one.");
  const e = tt(t) ? new Array(t.length) : {};
  for (const n in t)
    e[n] = No(t, n);
  return e;
}
class _h {
  constructor(e, n, r) {
    this._object = e, this._key = n, this._defaultValue = r, this.__v_isRef = !0;
  }
  get value() {
    const e = this._object[this._key];
    return e === void 0 ? this._defaultValue : e;
  }
  set value(e) {
    this._object[this._key] = e;
  }
}
function No(t, e, n) {
  const r = t[e];
  return jt(r) ? r : new _h(t, e, n);
}
class Kh {
  constructor(e, n, r, o) {
    this._setter = n, this.dep = void 0, this.__v_isRef = !0, this._dirty = !0, this.effect = new oi(e, () => {
      this._dirty || (this._dirty = !0, Ea(this));
    }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r;
  }
  get value() {
    const e = pt(this);
    return vl(e), (e._dirty || !e._cacheable) && (e._dirty = !1, e._value = e.effect.run()), e._value;
  }
  set value(e) {
    this._setter(e);
  }
}
function Wh(t, e, n = !1) {
  let r, o;
  const a = st(t);
  a ? (r = t, o = null.NODE_ENV !== "production" ? () => {
    console.warn("Write operation failed: computed value is readonly");
  } : se) : (r = t.get, o = t.set);
  const i = new Kh(r, o, a || !o, n);
  return null.NODE_ENV !== "production" && e && !n && (i.effect.onTrack = e.onTrack, i.effect.onTrigger = e.onTrigger), i;
}
const hr = [];
function Co(t) {
  hr.push(t);
}
function To() {
  hr.pop();
}
function j(t, ...e) {
  Cr();
  const n = hr.length ? hr[hr.length - 1].component : null, r = n && n.appContext.config.warnHandler, o = zh();
  if (r)
    Ze(r, n, 11, [
      t + e.join(""),
      n && n.proxy,
      o.map(({ vnode: a }) => `at <${Ma(n, a.type)}>`).join(`
`),
      o
    ]);
  else {
    const a = [`[Vue warn]: ${t}`, ...e];
    o.length && a.push(`
`, ...Gh(o)), console.warn(...a);
  }
  Tr();
}
function zh() {
  let t = hr[hr.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const n = e[0];
    n && n.vnode === t ? n.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Gh(t) {
  const e = [];
  return t.forEach((n, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Yh(n));
  }), e;
}
function Yh({ vnode: t, recurseCount: e }) {
  const n = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, o = ` at <${Ma(t.component, t.type, r)}`, a = ">" + n;
  return t.props ? [o, ...Xh(t.props), a] : [o + a];
}
function Xh(t) {
  const e = [], n = Object.keys(t);
  return n.slice(0, 3).forEach((r) => {
    e.push(...hf(r, t[r]));
  }), n.length > 3 && e.push(" ..."), e;
}
function hf(t, e, n) {
  return kt(e) ? (e = JSON.stringify(e), n ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? n ? e : [`${t}=${e}`] : jt(e) ? (e = hf(t, pt(e.value), !0), n ? e : [`${t}=Ref<`, e, ">"]) : st(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = pt(e), n ? e : [`${t}=`, e]);
}
const bl = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core"
};
function Ze(t, e, n, r) {
  let o;
  try {
    o = r ? t(...r) : t();
  } catch (a) {
    Dr(a, e, n);
  }
  return o;
}
function Ie(t, e, n, r) {
  if (st(t)) {
    const a = Ze(t, e, n, r);
    return a && ha(a) && a.catch((i) => {
      Dr(i, e, n);
    }), a;
  }
  const o = [];
  for (let a = 0; a < t.length; a++)
    o.push(Ie(t[a], e, n, r));
  return o;
}
function Dr(t, e, n, r = !0) {
  const o = e ? e.vnode : null;
  if (e) {
    let a = e.parent;
    const i = e.proxy, s = null.NODE_ENV !== "production" ? bl[n] : n;
    for (; a; ) {
      const c = a.ec;
      if (c) {
        for (let f = 0; f < c.length; f++)
          if (c[f](t, i, s) === !1)
            return;
      }
      a = a.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Ze(l, null, 10, [t, i, s]);
      return;
    }
  }
  Jh(t, n, o, r);
}
function Jh(t, e, n, r = !0) {
  if (null.NODE_ENV !== "production") {
    const o = bl[e];
    if (n && Co(n), j(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && To(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let zi = !1, bs = !1;
const De = [];
let un = 0;
const Do = [];
let $r = null, er = 0;
const Io = [];
let on = null, nr = 0;
const mf = /* @__PURE__ */ Promise.resolve();
let El = null, Es = null;
const Qh = 100;
function Yo(t) {
  const e = El || mf;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Zh(t) {
  let e = un + 1, n = De.length;
  for (; e < n; ) {
    const r = e + n >>> 1;
    Xo(De[r]) < t ? e = r + 1 : n = r;
  }
  return e;
}
function xa(t) {
  (!De.length || !De.includes(t, zi && t.allowRecurse ? un + 1 : un)) && t !== Es && (t.id == null ? De.push(t) : De.splice(Zh(t.id), 0, t), gf());
}
function gf() {
  !zi && !bs && (bs = !0, El = mf.then(yf));
}
function qh(t) {
  const e = De.indexOf(t);
  e > un && De.splice(e, 1);
}
function vf(t, e, n, r) {
  tt(t) ? n.push(...t) : (!e || !e.includes(t, t.allowRecurse ? r + 1 : r)) && n.push(t), gf();
}
function tm(t) {
  vf(t, $r, Do, er);
}
function Oa(t) {
  vf(t, on, Io, nr);
}
function Sa(t, e = null) {
  if (Do.length) {
    for (Es = e, $r = [...new Set(Do)], Do.length = 0, null.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), er = 0; er < $r.length; er++)
      null.NODE_ENV !== "production" && xl(t, $r[er]) || $r[er]();
    $r = null, er = 0, Es = null, Sa(t, e);
  }
}
function Gi(t) {
  if (Sa(), Io.length) {
    const e = [...new Set(Io)];
    if (Io.length = 0, on) {
      on.push(...e);
      return;
    }
    for (on = e, null.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), on.sort((n, r) => Xo(n) - Xo(r)), nr = 0; nr < on.length; nr++)
      null.NODE_ENV !== "production" && xl(t, on[nr]) || on[nr]();
    on = null, nr = 0;
  }
}
const Xo = (t) => t.id == null ? 1 / 0 : t.id;
function yf(t) {
  bs = !1, zi = !0, null.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Sa(t), De.sort((n, r) => Xo(n) - Xo(r));
  const e = null.NODE_ENV !== "production" ? (n) => xl(t, n) : se;
  try {
    for (un = 0; un < De.length; un++) {
      const n = De[un];
      if (n && n.active !== !1) {
        if (null.NODE_ENV !== "production" && e(n))
          continue;
        Ze(n, null, 14);
      }
    }
  } finally {
    un = 0, De.length = 0, Gi(t), zi = !1, El = null, (De.length || Do.length || Io.length) && yf(t);
  }
}
function xl(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const n = t.get(e);
    if (n > Qh) {
      const r = e.ownerInstance, o = r && qo(r.type);
      return j(`Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`), !0;
    } else
      t.set(e, n + 1);
  }
}
let Vn = !1;
const Lr = /* @__PURE__ */ new Set();
null.NODE_ENV !== "production" && (Qu().__VUE_HMR_RUNTIME__ = {
  createRecord: Ka(bf),
  rerender: Ka(rm),
  reload: Ka(om)
});
const yr = /* @__PURE__ */ new Map();
function em(t) {
  const e = t.type.__hmrId;
  let n = yr.get(e);
  n || (bf(e, t.type), n = yr.get(e)), n.instances.add(t);
}
function nm(t) {
  yr.get(t.type.__hmrId).instances.delete(t);
}
function bf(t, e) {
  return yr.has(t) ? !1 : (yr.set(t, {
    initialDef: Ao(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Ao(t) {
  return fd(t) ? t.__vccOpts : t;
}
function rm(t, e) {
  const n = yr.get(t);
  !n || (n.initialDef.render = e, [...n.instances].forEach((r) => {
    e && (r.render = e, Ao(r.type).render = e), r.renderCache = [], Vn = !0, r.update(), Vn = !1;
  }));
}
function om(t, e) {
  const n = yr.get(t);
  if (!n)
    return;
  e = Ao(e), yc(n.initialDef, e);
  const r = [...n.instances];
  for (const o of r) {
    const a = Ao(o.type);
    Lr.has(a) || (a !== n.initialDef && yc(a, e), Lr.add(a)), o.appContext.optionsCache.delete(o.type), o.ceReload ? (Lr.add(a), o.ceReload(e.styles), Lr.delete(a)) : o.parent ? (xa(o.parent.update), o.parent.type.__asyncLoader && o.parent.ceReload && o.parent.ceReload(e.styles)) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn("[HMR] Root or manually mounted instance modified. Full reload required.");
  }
  Oa(() => {
    for (const o of r)
      Lr.delete(Ao(o.type));
  });
}
function yc(t, e) {
  $t(t, e);
  for (const n in t)
    n !== "__file" && !(n in e) && delete t[n];
}
function Ka(t) {
  return (e, n) => {
    try {
      return t(e, n);
    } catch (r) {
      console.error(r), console.warn("[HMR] Something went wrong during Vue component hot-reload. Full reload required.");
    }
  };
}
let Rn, go = [], xs = !1;
function ai(t, ...e) {
  Rn ? Rn.emit(t, ...e) : xs || go.push({ event: t, args: e });
}
function Ol(t, e) {
  var n, r;
  Rn = t, Rn ? (Rn.enabled = !0, go.forEach(({ event: o, args: a }) => Rn.emit(o, ...a)), go = []) : typeof window < "u" && window.HTMLElement && !(!((r = (n = window.navigator) === null || n === void 0 ? void 0 : n.userAgent) === null || r === void 0) && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((a) => {
    Ol(a, e);
  }), setTimeout(() => {
    Rn || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, xs = !0, go = []);
  }, 3e3)) : (xs = !0, go = []);
}
function im(t, e) {
  ai("app:init", t, e, {
    Fragment: Jt,
    Text: Er,
    Comment: Zt,
    Static: Un
  });
}
function am(t) {
  ai("app:unmount", t);
}
const Os = /* @__PURE__ */ Sl("component:added"), Ef = /* @__PURE__ */ Sl("component:updated"), sm = /* @__PURE__ */ Sl("component:removed");
function Sl(t) {
  return (e) => {
    ai(t, e.appContext.app, e.uid, e.parent ? e.parent.uid : void 0, e);
  };
}
const lm = /* @__PURE__ */ xf("perf:start"), cm = /* @__PURE__ */ xf("perf:end");
function xf(t) {
  return (e, n, r) => {
    ai(t, e.appContext.app, e.uid, e, n, r);
  };
}
function um(t, e, n) {
  ai("component:emit", t.appContext.app, t, e, n);
}
function fm(t, e, ...n) {
  if (t.isUnmounted)
    return;
  const r = t.vnode.props || Ct;
  if (null.NODE_ENV !== "production") {
    const { emitsOptions: f, propsOptions: [u] } = t;
    if (f)
      if (!(e in f))
        (!u || !(cn(e) in u)) && j(`Component emitted event "${e}" but it is neither declared in the emits option nor as an "${cn(e)}" prop.`);
      else {
        const d = f[e];
        st(d) && (d(...n) || j(`Invalid event arguments: event validation failed for event "${e}".`));
      }
  }
  let o = n;
  const a = e.startsWith("update:"), i = a && e.slice(7);
  if (i && i in r) {
    const f = `${i === "modelValue" ? "model" : i}Modifiers`, { number: u, trim: d } = r[f] || Ct;
    d && (o = n.map((h) => h.trim())), u && (o = n.map(Kn));
  }
  if (null.NODE_ENV !== "production" && um(t, e, o), null.NODE_ENV !== "production") {
    const f = e.toLowerCase();
    f !== e && r[cn(f)] && j(`Event "${f}" is emitted in component ${Ma(t, t.type)} but the handler is registered for "${e}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ve(e)}" instead of "${e}".`);
  }
  let s, l = r[s = cn(e)] || r[s = cn(Ae(e))];
  !l && a && (l = r[s = cn(Ve(e))]), l && Ie(l, t, 6, o);
  const c = r[s + "Once"];
  if (c) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[s])
      return;
    t.emitted[s] = !0, Ie(c, t, 6, o);
  }
}
function Of(t, e, n = !1) {
  const r = e.emitsCache, o = r.get(t);
  if (o !== void 0)
    return o;
  const a = t.emits;
  let i = {}, s = !1;
  if (!st(t)) {
    const l = (c) => {
      const f = Of(c, e, !0);
      f && (s = !0, $t(i, f));
    };
    !n && e.mixins.length && e.mixins.forEach(l), t.extends && l(t.extends), t.mixins && t.mixins.forEach(l);
  }
  return !a && !s ? (r.set(t, null), null) : (tt(a) ? a.forEach((l) => i[l] = null) : $t(i, a), r.set(t, i), i);
}
function wa(t, e) {
  return !t || !no(e) ? !1 : (e = e.slice(2).replace(/Once$/, ""), bt(t, e[0].toLowerCase() + e.slice(1)) || bt(t, Ve(e)) || bt(t, e));
}
let ne = null, Na = null;
function Jo(t) {
  const e = ne;
  return ne = t, Na = t && t.type.__scopeId || null, e;
}
function dm(t) {
  Na = t;
}
function pm() {
  Na = null;
}
const hm = (t) => Ca;
function Ca(t, e = ne, n) {
  if (!e || t._n)
    return t;
  const r = (...o) => {
    r._d && As(-1);
    const a = Jo(e), i = t(...o);
    return Jo(a), r._d && As(1), null.NODE_ENV !== "production" && Ef(e), i;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
let Ss = !1;
function Yi() {
  Ss = !0;
}
function Ii(t) {
  const { type: e, vnode: n, proxy: r, withProxy: o, props: a, propsOptions: [i], slots: s, attrs: l, emit: c, render: f, renderCache: u, data: d, setupState: h, ctx: m, inheritAttrs: v } = t;
  let b, g;
  const p = Jo(t);
  null.NODE_ENV !== "production" && (Ss = !1);
  try {
    if (n.shapeFlag & 4) {
      const S = o || r;
      b = xe(f.call(S, S, u, a, h, d, m)), g = l;
    } else {
      const S = e;
      null.NODE_ENV !== "production" && l === a && Yi(), b = xe(S.length > 1 ? S(a, null.NODE_ENV !== "production" ? {
        get attrs() {
          return Yi(), l;
        },
        slots: s,
        emit: c
      } : { attrs: l, slots: s, emit: c }) : S(a, null)), g = e.props ? l : gm(l);
    }
  } catch (S) {
    Mo.length = 0, Dr(S, t, 1), b = St(Zt);
  }
  let E = b, x;
  if (null.NODE_ENV !== "production" && b.patchFlag > 0 && b.patchFlag & 2048 && ([E, x] = mm(b)), g && v !== !1) {
    const S = Object.keys(g), { shapeFlag: w } = E;
    if (S.length) {
      if (w & 7)
        i && S.some(Hi) && (g = vm(g, i)), E = ke(E, g);
      else if (null.NODE_ENV !== "production" && !Ss && E.type !== Zt) {
        const C = Object.keys(l), A = [], O = [];
        for (let T = 0, R = C.length; T < R; T++) {
          const L = C[T];
          no(L) ? Hi(L) || A.push(L[2].toLowerCase() + L.slice(3)) : O.push(L);
        }
        O.length && j(`Extraneous non-props attributes (${O.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`), A.length && j(`Extraneous non-emits event listeners (${A.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`);
      }
    }
  }
  return n.dirs && (null.NODE_ENV !== "production" && !bc(E) && j("Runtime directive used on component with non-element root node. The directives will not function as intended."), E = ke(E), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (null.NODE_ENV !== "production" && !bc(E) && j("Component inside <Transition> renders non-element root node that cannot be animated."), E.transition = n.transition), null.NODE_ENV !== "production" && x ? x(E) : b = E, Jo(p), b;
}
const mm = (t) => {
  const e = t.children, n = t.dynamicChildren, r = wl(e);
  if (!r)
    return [t, void 0];
  const o = e.indexOf(r), a = n ? n.indexOf(r) : -1, i = (s) => {
    e[o] = s, n && (a > -1 ? n[a] = s : s.patchFlag > 0 && (t.dynamicChildren = [...n, s]));
  };
  return [xe(r), i];
};
function wl(t) {
  let e;
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (mn(r)) {
      if (r.type !== Zt || r.children === "v-if") {
        if (e)
          return;
        e = r;
      }
    } else
      return;
  }
  return e;
}
const gm = (t) => {
  let e;
  for (const n in t)
    (n === "class" || n === "style" || no(n)) && ((e || (e = {}))[n] = t[n]);
  return e;
}, vm = (t, e) => {
  const n = {};
  for (const r in t)
    (!Hi(r) || !(r.slice(9) in e)) && (n[r] = t[r]);
  return n;
}, bc = (t) => t.shapeFlag & 7 || t.type === Zt;
function ym(t, e, n) {
  const { props: r, children: o, component: a } = t, { props: i, children: s, patchFlag: l } = e, c = a.emitsOptions;
  if (null.NODE_ENV !== "production" && (o || s) && Vn || e.dirs || e.transition)
    return !0;
  if (n && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return r ? Ec(r, i, c) : !!i;
    if (l & 8) {
      const f = e.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        const d = f[u];
        if (i[d] !== r[d] && !wa(c, d))
          return !0;
      }
    }
  } else
    return (o || s) && (!s || !s.$stable) ? !0 : r === i ? !1 : r ? i ? Ec(r, i, c) : !0 : !!i;
  return !1;
}
function Ec(t, e, n) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(t).length)
    return !0;
  for (let o = 0; o < r.length; o++) {
    const a = r[o];
    if (e[a] !== t[a] && !wa(n, a))
      return !0;
  }
  return !1;
}
function Nl({ vnode: t, parent: e }, n) {
  for (; e && e.subTree === t; )
    (t = e.vnode).el = n, e = e.parent;
}
const Sf = (t) => t.__isSuspense, bm = {
  name: "Suspense",
  __isSuspense: !0,
  null(t, e, n, r, o, a, i, s, l, c) {
    t == null ? xm(e, n, r, o, a, i, s, l, c) : Om(t, e, n, r, o, i, s, l, c);
  },
  hydrate: Sm,
  create: Cl,
  normalize: wm
}, Em = bm;
function Qo(t, e) {
  const n = t.props && t.props[e];
  st(n) && n();
}
function xm(t, e, n, r, o, a, i, s, l) {
  const { p: c, o: { createElement: f } } = l, u = f("div"), d = t.suspense = Cl(t, o, r, e, u, n, a, i, s, l);
  c(null, d.pendingBranch = t.ssContent, u, null, r, d, a, i), d.deps > 0 ? (Qo(t, "onPending"), Qo(t, "onFallback"), c(
    null,
    t.ssFallback,
    e,
    n,
    r,
    null,
    a,
    i
  ), _r(d, t.ssFallback)) : d.resolve();
}
function Om(t, e, n, r, o, a, i, s, { p: l, um: c, o: { createElement: f } }) {
  const u = e.suspense = t.suspense;
  u.vnode = e, e.el = t.el;
  const d = e.ssContent, h = e.ssFallback, { activeBranch: m, pendingBranch: v, isInFallback: b, isHydrating: g } = u;
  if (v)
    u.pendingBranch = d, Je(d, v) ? (l(v, d, u.hiddenContainer, null, o, u, a, i, s), u.deps <= 0 ? u.resolve() : b && (l(
      m,
      h,
      n,
      r,
      o,
      null,
      a,
      i,
      s
    ), _r(u, h))) : (u.pendingId++, g ? (u.isHydrating = !1, u.activeBranch = v) : c(v, o, u), u.deps = 0, u.effects.length = 0, u.hiddenContainer = f("div"), b ? (l(null, d, u.hiddenContainer, null, o, u, a, i, s), u.deps <= 0 ? u.resolve() : (l(
      m,
      h,
      n,
      r,
      o,
      null,
      a,
      i,
      s
    ), _r(u, h))) : m && Je(d, m) ? (l(m, d, n, r, o, u, a, i, s), u.resolve(!0)) : (l(null, d, u.hiddenContainer, null, o, u, a, i, s), u.deps <= 0 && u.resolve()));
  else if (m && Je(d, m))
    l(m, d, n, r, o, u, a, i, s), _r(u, d);
  else if (Qo(e, "onPending"), u.pendingBranch = d, u.pendingId++, l(null, d, u.hiddenContainer, null, o, u, a, i, s), u.deps <= 0)
    u.resolve();
  else {
    const { timeout: p, pendingId: E } = u;
    p > 0 ? setTimeout(() => {
      u.pendingId === E && u.fallback(h);
    }, p) : p === 0 && u.fallback(h);
  }
}
let xc = !1;
function Cl(t, e, n, r, o, a, i, s, l, c, f = !1) {
  null.NODE_ENV !== "production" && !0 && !xc && (xc = !0, console[console.info ? "info" : "log"]("<Suspense> is an experimental feature and its API will likely change."));
  const { p: u, m: d, um: h, n: m, o: { parentNode: v, remove: b } } = c, g = Kn(t.props && t.props.timeout), p = {
    vnode: t,
    parent: e,
    parentComponent: n,
    isSVG: i,
    container: r,
    hiddenContainer: o,
    anchor: a,
    deps: 0,
    pendingId: 0,
    timeout: typeof g == "number" ? g : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !0,
    isHydrating: f,
    isUnmounted: !1,
    effects: [],
    resolve(E = !1) {
      if (null.NODE_ENV !== "production") {
        if (!E && !p.pendingBranch)
          throw new Error("suspense.resolve() is called without a pending branch.");
        if (p.isUnmounted)
          throw new Error("suspense.resolve() is called on an already unmounted suspense boundary.");
      }
      const { vnode: x, activeBranch: S, pendingBranch: w, pendingId: C, effects: A, parentComponent: O, container: T } = p;
      if (p.isHydrating)
        p.isHydrating = !1;
      else if (!E) {
        const F = S && w.transition && w.transition.mode === "out-in";
        F && (S.transition.afterLeave = () => {
          C === p.pendingId && d(w, T, $, 0);
        });
        let { anchor: $ } = p;
        S && ($ = m(S), h(S, O, p, !0)), F || d(w, T, $, 0);
      }
      _r(p, w), p.pendingBranch = null, p.isInFallback = !1;
      let R = p.parent, L = !1;
      for (; R; ) {
        if (R.pendingBranch) {
          R.effects.push(...A), L = !0;
          break;
        }
        R = R.parent;
      }
      L || Oa(A), p.effects = [], Qo(x, "onResolve");
    },
    fallback(E) {
      if (!p.pendingBranch)
        return;
      const { vnode: x, activeBranch: S, parentComponent: w, container: C, isSVG: A } = p;
      Qo(x, "onFallback");
      const O = m(S), T = () => {
        !p.isInFallback || (u(
          null,
          E,
          C,
          O,
          w,
          null,
          A,
          s,
          l
        ), _r(p, E));
      }, R = E.transition && E.transition.mode === "out-in";
      R && (S.transition.afterLeave = T), p.isInFallback = !0, h(
        S,
        w,
        null,
        !0
      ), R || T();
    },
    move(E, x, S) {
      p.activeBranch && d(p.activeBranch, E, x, S), p.container = E;
    },
    next() {
      return p.activeBranch && m(p.activeBranch);
    },
    registerDep(E, x) {
      const S = !!p.pendingBranch;
      S && p.deps++;
      const w = E.vnode.el;
      E.asyncDep.catch((C) => {
        Dr(C, E, 0);
      }).then((C) => {
        if (E.isUnmounted || p.isUnmounted || p.pendingId !== E.suspenseId)
          return;
        E.asyncResolved = !0;
        const { vnode: A } = E;
        null.NODE_ENV !== "production" && Co(A), Ms(E, C, !1), w && (A.el = w);
        const O = !w && E.subTree.el;
        x(
          E,
          A,
          v(w || E.subTree.el),
          w ? null : m(E.subTree),
          p,
          i,
          l
        ), O && b(O), Nl(E, A.el), null.NODE_ENV !== "production" && To(), S && --p.deps === 0 && p.resolve();
      });
    },
    unmount(E, x) {
      p.isUnmounted = !0, p.activeBranch && h(p.activeBranch, n, E, x), p.pendingBranch && h(p.pendingBranch, n, E, x);
    }
  };
  return p;
}
function Sm(t, e, n, r, o, a, i, s, l) {
  const c = e.suspense = Cl(e, r, n, t.parentNode, document.createElement("div"), null, o, a, i, s, !0), f = l(t, c.pendingBranch = e.ssContent, n, c, a, i);
  return c.deps === 0 && c.resolve(), f;
}
function wm(t) {
  const { shapeFlag: e, children: n } = t, r = e & 32;
  t.ssContent = Oc(r ? n.default : n), t.ssFallback = r ? Oc(n.fallback) : St(Zt);
}
function Oc(t) {
  let e;
  if (st(t)) {
    const n = xr && t._c;
    n && (t._d = !1, ae()), t = t(), n && (t._d = !0, e = Oe, qf());
  }
  if (tt(t)) {
    const n = wl(t);
    null.NODE_ENV !== "production" && !n && j("<Suspense> slots expect a single root node."), t = n;
  }
  return t = xe(t), e && !t.dynamicChildren && (t.dynamicChildren = e.filter((n) => n !== t)), t;
}
function wf(t, e) {
  e && e.pendingBranch ? tt(t) ? e.effects.push(...t) : e.effects.push(t) : Oa(t);
}
function _r(t, e) {
  t.activeBranch = e;
  const { vnode: n, parentComponent: r } = t, o = n.el = e.el;
  r && r.subTree === n && (r.vnode.el = o, Nl(r, o));
}
function Nf(t, e) {
  if (!ee)
    null.NODE_ENV !== "production" && j("provide() can only be used inside setup().");
  else {
    let n = ee.provides;
    const r = ee.parent && ee.parent.provides;
    r === n && (n = ee.provides = Object.create(r)), n[t] = e;
  }
}
function Kr(t, e, n = !1) {
  const r = ee || ne;
  if (r) {
    const o = r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides;
    if (o && t in o)
      return o[t];
    if (arguments.length > 1)
      return n && st(e) ? e.call(r.proxy) : e;
    null.NODE_ENV !== "production" && j(`injection "${String(t)}" not found.`);
  } else
    null.NODE_ENV !== "production" && j("inject() can only be used inside setup() or functional components.");
}
function Nm(t, e) {
  return si(t, null, e);
}
function Cf(t, e) {
  return si(t, null, null.NODE_ENV !== "production" ? Object.assign(Object.assign({}, e), { flush: "post" }) : { flush: "post" });
}
function Cm(t, e) {
  return si(t, null, null.NODE_ENV !== "production" ? Object.assign(Object.assign({}, e), { flush: "sync" }) : { flush: "sync" });
}
const Sc = {};
function kn(t, e, n) {
  return null.NODE_ENV !== "production" && !st(e) && j("`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."), si(t, e, n);
}
function si(t, e, { immediate: n, deep: r, flush: o, onTrack: a, onTrigger: i } = Ct) {
  null.NODE_ENV !== "production" && !e && (n !== void 0 && j('watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'), r !== void 0 && j('watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'));
  const s = (p) => {
    j("Invalid watch source: ", p, "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.");
  }, l = ee;
  let c, f = !1, u = !1;
  if (jt(t) ? (c = () => t.value, f = Wi(t)) : Ye(t) ? (c = () => t, r = !0) : tt(t) ? (u = !0, f = t.some((p) => Ye(p) || Wi(p)), c = () => t.map((p) => {
    if (jt(p))
      return p.value;
    if (Ye(p))
      return cr(p);
    if (st(p))
      return Ze(p, l, 2);
    null.NODE_ENV !== "production" && s(p);
  })) : st(t) ? e ? c = () => Ze(t, l, 2) : c = () => {
    if (!(l && l.isUnmounted))
      return d && d(), Ie(t, l, 3, [h]);
  } : (c = se, null.NODE_ENV !== "production" && s(t)), e && r) {
    const p = c;
    c = () => cr(p());
  }
  let d, h = (p) => {
    d = g.onStop = () => {
      Ze(p, l, 4);
    };
  };
  if (Jr)
    return h = se, e ? n && Ie(e, l, 3, [
      c(),
      u ? [] : void 0,
      h
    ]) : c(), se;
  let m = u ? [] : Sc;
  const v = () => {
    if (!!g.active)
      if (e) {
        const p = g.run();
        (r || f || (u ? p.some((E, x) => Gr(E, m[x])) : Gr(p, m))) && (d && d(), Ie(e, l, 3, [
          p,
          m === Sc ? void 0 : m,
          h
        ]), m = p);
      } else
        g.run();
  };
  v.allowRecurse = !!e;
  let b;
  o === "sync" ? b = v : o === "post" ? b = () => ie(v, l && l.suspense) : b = () => tm(v);
  const g = new oi(c, b);
  return null.NODE_ENV !== "production" && (g.onTrack = a, g.onTrigger = i), e ? n ? v() : m = g.run() : o === "post" ? ie(g.run.bind(g), l && l.suspense) : g.run(), () => {
    g.stop(), l && l.scope && cl(l.scope.effects, g);
  };
}
function Tm(t, e, n) {
  const r = this.proxy, o = kt(t) ? t.includes(".") ? Tf(r, t) : () => r[t] : t.bind(r, r);
  let a;
  st(e) ? a = e : (a = e.handler, n = e);
  const i = ee;
  Gn(this);
  const s = si(o, a.bind(r), n);
  return i ? Gn(i) : Bn(), s;
}
function Tf(t, e) {
  const n = e.split(".");
  return () => {
    let r = t;
    for (let o = 0; o < n.length && r; o++)
      r = r[n[o]];
    return r;
  };
}
function cr(t, e) {
  if (!Dt(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Set(), e.has(t)))
    return t;
  if (e.add(t), jt(t))
    cr(t.value, e);
  else if (tt(t))
    for (let n = 0; n < t.length; n++)
      cr(t[n], e);
  else if (Nr(t) || fr(t))
    t.forEach((n) => {
      cr(n, e);
    });
  else if (Ju(t))
    for (const n in t)
      cr(t[n], e);
  return t;
}
function Tl() {
  const t = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return oo(() => {
    t.isMounted = !0;
  }), Aa(() => {
    t.isUnmounting = !0;
  }), t;
}
const $e = [Function, Array], Dm = {
  name: "BaseTransition",
  props: {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    onBeforeEnter: $e,
    onEnter: $e,
    onAfterEnter: $e,
    onEnterCancelled: $e,
    onBeforeLeave: $e,
    onLeave: $e,
    onAfterLeave: $e,
    onLeaveCancelled: $e,
    onBeforeAppear: $e,
    onAppear: $e,
    onAfterAppear: $e,
    onAppearCancelled: $e
  },
  setup(t, { slots: e }) {
    const n = nn(), r = Tl();
    let o;
    return () => {
      const a = e.default && Ta(e.default(), !0);
      if (!a || !a.length)
        return;
      let i = a[0];
      if (a.length > 1) {
        let v = !1;
        for (const b of a)
          if (b.type !== Zt) {
            if (null.NODE_ENV !== "production" && v) {
              j("<transition> can only be used on a single element or component. Use <transition-group> for lists.");
              break;
            }
            if (i = b, v = !0, null.NODE_ENV === "production")
              break;
          }
      }
      const s = pt(t), { mode: l } = s;
      if (null.NODE_ENV !== "production" && l && l !== "in-out" && l !== "out-in" && l !== "default" && j(`invalid <transition> mode: ${l}`), r.isLeaving)
        return Wa(i);
      const c = wc(i);
      if (!c)
        return Wa(i);
      const f = Yr(c, s, r, n);
      br(c, f);
      const u = n.subTree, d = u && wc(u);
      let h = !1;
      const { getTransitionKey: m } = c.type;
      if (m) {
        const v = m();
        o === void 0 ? o = v : v !== o && (o = v, h = !0);
      }
      if (d && d.type !== Zt && (!Je(c, d) || h)) {
        const v = Yr(d, s, r, n);
        if (br(d, v), l === "out-in")
          return r.isLeaving = !0, v.afterLeave = () => {
            r.isLeaving = !1, n.update();
          }, Wa(i);
        l === "in-out" && c.type !== Zt && (v.delayLeave = (b, g, p) => {
          const E = Df(r, d);
          E[String(d.key)] = d, b._leaveCb = () => {
            g(), b._leaveCb = void 0, delete f.delayedLeave;
          }, f.delayedLeave = p;
        });
      }
      return i;
    };
  }
}, Dl = Dm;
function Df(t, e) {
  const { leavingVNodes: n } = t;
  let r = n.get(e.type);
  return r || (r = /* @__PURE__ */ Object.create(null), n.set(e.type, r)), r;
}
function Yr(t, e, n, r) {
  const { appear: o, mode: a, persisted: i = !1, onBeforeEnter: s, onEnter: l, onAfterEnter: c, onEnterCancelled: f, onBeforeLeave: u, onLeave: d, onAfterLeave: h, onLeaveCancelled: m, onBeforeAppear: v, onAppear: b, onAfterAppear: g, onAppearCancelled: p } = e, E = String(t.key), x = Df(n, t), S = (A, O) => {
    A && Ie(A, r, 9, O);
  }, w = (A, O) => {
    const T = O[1];
    S(A, O), tt(A) ? A.every((R) => R.length <= 1) && T() : A.length <= 1 && T();
  }, C = {
    mode: a,
    persisted: i,
    beforeEnter(A) {
      let O = s;
      if (!n.isMounted)
        if (o)
          O = v || s;
        else
          return;
      A._leaveCb && A._leaveCb(!0);
      const T = x[E];
      T && Je(t, T) && T.el._leaveCb && T.el._leaveCb(), S(O, [A]);
    },
    enter(A) {
      let O = l, T = c, R = f;
      if (!n.isMounted)
        if (o)
          O = b || l, T = g || c, R = p || f;
        else
          return;
      let L = !1;
      const F = A._enterCb = ($) => {
        L || (L = !0, $ ? S(R, [A]) : S(T, [A]), C.delayedLeave && C.delayedLeave(), A._enterCb = void 0);
      };
      O ? w(O, [A, F]) : F();
    },
    leave(A, O) {
      const T = String(t.key);
      if (A._enterCb && A._enterCb(!0), n.isUnmounting)
        return O();
      S(u, [A]);
      let R = !1;
      const L = A._leaveCb = (F) => {
        R || (R = !0, O(), F ? S(m, [A]) : S(h, [A]), A._leaveCb = void 0, x[T] === t && delete x[T]);
      };
      x[T] = t, d ? w(d, [A, L]) : L();
    },
    clone(A) {
      return Yr(A, e, n, r);
    }
  };
  return C;
}
function Wa(t) {
  if (ro(t))
    return t = ke(t), t.children = null, t;
}
function wc(t) {
  return ro(t) ? t.children ? t.children[0] : void 0 : t;
}
function br(t, e) {
  t.shapeFlag & 6 && t.component ? br(t.component.subTree, e) : t.shapeFlag & 128 ? (t.ssContent.transition = e.clone(t.ssContent), t.ssFallback.transition = e.clone(t.ssFallback)) : t.transition = e;
}
function Ta(t, e = !1, n) {
  let r = [], o = 0;
  for (let a = 0; a < t.length; a++) {
    let i = t[a];
    const s = n == null ? i.key : String(n) + String(i.key != null ? i.key : a);
    i.type === Jt ? (i.patchFlag & 128 && o++, r = r.concat(Ta(i.children, e, s))) : (e || i.type !== Zt) && r.push(s != null ? ke(i, { key: s }) : i);
  }
  if (o > 1)
    for (let a = 0; a < r.length; a++)
      r[a].patchFlag = -2;
  return r;
}
function En(t) {
  return st(t) ? { setup: t, name: t.name } : t;
}
const mr = (t) => !!t.type.__asyncLoader;
function Im(t) {
  st(t) && (t = { loader: t });
  const {
    loader: e,
    loadingComponent: n,
    errorComponent: r,
    delay: o = 200,
    timeout: a,
    suspensible: i = !0,
    onError: s
  } = t;
  let l = null, c, f = 0;
  const u = () => (f++, l = null, d()), d = () => {
    let h;
    return l || (h = l = e().catch((m) => {
      if (m = m instanceof Error ? m : new Error(String(m)), s)
        return new Promise((v, b) => {
          s(m, () => v(u()), () => b(m), f + 1);
        });
      throw m;
    }).then((m) => {
      if (h !== l && l)
        return l;
      if (null.NODE_ENV !== "production" && !m && j("Async component loader resolved to undefined. If you are using retry(), make sure to return its return value."), m && (m.__esModule || m[Symbol.toStringTag] === "Module") && (m = m.default), null.NODE_ENV !== "production" && m && !Dt(m) && !st(m))
        throw new Error(`Invalid async component load result: ${m}`);
      return c = m, m;
    }));
  };
  return En({
    name: "AsyncComponentWrapper",
    __asyncLoader: d,
    get __asyncResolved() {
      return c;
    },
    setup() {
      const h = ee;
      if (c)
        return () => za(c, h);
      const m = (p) => {
        l = null, Dr(p, h, 13, !r);
      };
      if (i && h.suspense || Jr)
        return d().then((p) => () => za(p, h)).catch((p) => (m(p), () => r ? St(r, {
          error: p
        }) : null));
      const v = pr(!1), b = pr(), g = pr(!!o);
      return o && setTimeout(() => {
        g.value = !1;
      }, o), a != null && setTimeout(() => {
        if (!v.value && !b.value) {
          const p = new Error(`Async component timed out after ${a}ms.`);
          m(p), b.value = p;
        }
      }, a), d().then(() => {
        v.value = !0, h.parent && ro(h.parent.vnode) && xa(h.parent.update);
      }).catch((p) => {
        m(p), b.value = p;
      }), () => {
        if (v.value && c)
          return za(c, h);
        if (b.value && r)
          return St(r, {
            error: b.value
          });
        if (n && !g.value)
          return St(n);
      };
    }
  });
}
function za(t, { vnode: { ref: e, props: n, children: r, shapeFlag: o }, parent: a }) {
  const i = St(t, n, r);
  return i.ref = e, i;
}
const ro = (t) => t.type.__isKeepAlive, Am = {
  name: "KeepAlive",
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(t, { slots: e }) {
    const n = nn(), r = n.ctx;
    if (!r.renderer)
      return () => {
        const p = e.default && e.default();
        return p && p.length === 1 ? p[0] : p;
      };
    const o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set();
    let i = null;
    null.NODE_ENV !== "production" && (n.__v_cache = o);
    const s = n.suspense, { renderer: { p: l, m: c, um: f, o: { createElement: u } } } = r, d = u("div");
    r.activate = (p, E, x, S, w) => {
      const C = p.component;
      c(p, E, x, 0, s), l(C.vnode, p, E, x, C, s, S, p.slotScopeIds, w), ie(() => {
        C.isDeactivated = !1, C.a && Pn(C.a);
        const A = p.props && p.props.onVnodeMounted;
        A && Ee(A, C.parent, p);
      }, s), null.NODE_ENV !== "production" && Os(C);
    }, r.deactivate = (p) => {
      const E = p.component;
      c(p, d, null, 1, s), ie(() => {
        E.da && Pn(E.da);
        const x = p.props && p.props.onVnodeUnmounted;
        x && Ee(x, E.parent, p), E.isDeactivated = !0;
      }, s), null.NODE_ENV !== "production" && Os(E);
    };
    function h(p) {
      Ga(p), f(p, n, s, !0);
    }
    function m(p) {
      o.forEach((E, x) => {
        const S = qo(E.type);
        S && (!p || !p(S)) && v(x);
      });
    }
    function v(p) {
      const E = o.get(p);
      !i || E.type !== i.type ? h(E) : i && Ga(i), o.delete(p), a.delete(p);
    }
    kn(
      () => [t.include, t.exclude],
      ([p, E]) => {
        p && m((x) => vo(p, x)), E && m((x) => !vo(E, x));
      },
      { flush: "post", deep: !0 }
    );
    let b = null;
    const g = () => {
      b != null && o.set(b, Ya(n.subTree));
    };
    return oo(g), Ia(g), Aa(() => {
      o.forEach((p) => {
        const { subTree: E, suspense: x } = n, S = Ya(E);
        if (p.type === S.type) {
          Ga(S);
          const w = S.component.da;
          w && ie(w, x);
          return;
        }
        h(p);
      });
    }), () => {
      if (b = null, !e.default)
        return null;
      const p = e.default(), E = p[0];
      if (p.length > 1)
        return null.NODE_ENV !== "production" && j("KeepAlive should contain exactly one component child."), i = null, p;
      if (!mn(E) || !(E.shapeFlag & 4) && !(E.shapeFlag & 128))
        return i = null, E;
      let x = Ya(E);
      const S = x.type, w = qo(mr(x) ? x.type.__asyncResolved || {} : S), { include: C, exclude: A, max: O } = t;
      if (C && (!w || !vo(C, w)) || A && w && vo(A, w))
        return i = x, E;
      const T = x.key == null ? S : x.key, R = o.get(T);
      return x.el && (x = ke(x), E.shapeFlag & 128 && (E.ssContent = x)), b = T, R ? (x.el = R.el, x.component = R.component, x.transition && br(x, x.transition), x.shapeFlag |= 512, a.delete(T), a.add(T)) : (a.add(T), O && a.size > parseInt(O, 10) && v(a.values().next().value)), x.shapeFlag |= 256, i = x, Sf(E.type) ? E : x;
    };
  }
}, Pm = Am;
function vo(t, e) {
  return tt(t) ? t.some((n) => vo(n, e)) : kt(t) ? t.split(",").includes(e) : t.test ? t.test(e) : !1;
}
function If(t, e) {
  Pf(t, "a", e);
}
function Af(t, e) {
  Pf(t, "da", e);
}
function Pf(t, e, n = ee) {
  const r = t.__wdc || (t.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return t();
  });
  if (Da(e, r, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ro(o.parent.vnode) && Rm(r, e, n, o), o = o.parent;
  }
}
function Rm(t, e, n, r) {
  const o = Da(e, t, r, !0);
  li(() => {
    cl(r[e], o);
  }, n);
}
function Ga(t) {
  let e = t.shapeFlag;
  e & 256 && (e -= 256), e & 512 && (e -= 512), t.shapeFlag = e;
}
function Ya(t) {
  return t.shapeFlag & 128 ? t.ssContent : t;
}
function Da(t, e, n = ee, r = !1) {
  if (n) {
    const o = n[t] || (n[t] = []), a = e.__weh || (e.__weh = (...i) => {
      if (n.isUnmounted)
        return;
      Cr(), Gn(n);
      const s = Ie(e, n, t, i);
      return Bn(), Tr(), s;
    });
    return r ? o.unshift(a) : o.push(a), a;
  } else if (null.NODE_ENV !== "production") {
    const o = cn(bl[t].replace(/ hook$/, ""));
    j(`${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`);
  }
}
const xn = (t) => (e, n = ee) => (!Jr || t === "sp") && Da(t, e, n), Rf = xn("bm"), oo = xn("m"), Mf = xn("bu"), Ia = xn("u"), Aa = xn("bum"), li = xn("um"), $f = xn("sp"), Lf = xn("rtg"), Ff = xn("rtc");
function jf(t, e = ee) {
  Da("ec", t, e);
}
function Vf(t) {
  oh(t) && j("Do not use built-in directive ids as custom directive id: " + t);
}
function Xi(t, e) {
  const n = ne;
  if (n === null)
    return null.NODE_ENV !== "production" && j("withDirectives can only be used inside render functions."), t;
  const r = Ra(n) || n.proxy, o = t.dirs || (t.dirs = []);
  for (let a = 0; a < e.length; a++) {
    let [i, s, l, c = Ct] = e[a];
    st(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && cr(s), o.push({
      dir: i,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: c
    });
  }
  return t;
}
function Xe(t, e, n, r) {
  const o = t.dirs, a = e && e.dirs;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    a && (s.oldValue = a[i].value);
    let l = s.dir[r];
    l && (Cr(), Ie(l, n, 8, [
      t.el,
      s,
      t,
      e
    ]), Tr());
  }
}
const Ji = "components", Mm = "directives";
function $m(t, e) {
  return Il(Ji, t, !0, e) || t;
}
const kf = Symbol();
function Lm(t) {
  return kt(t) ? Il(Ji, t, !1) || t : t || kf;
}
function Fm(t) {
  return Il(Mm, t);
}
function Il(t, e, n = !0, r = !1) {
  const o = ne || ee;
  if (o) {
    const a = o.type;
    if (t === Ji) {
      const s = qo(a, !1);
      if (s && (s === e || s === Ae(e) || s === _n(Ae(e))))
        return a;
    }
    const i = Nc(o[t] || a[t], e) || Nc(o.appContext[t], e);
    if (!i && r)
      return a;
    if (null.NODE_ENV !== "production" && n && !i) {
      const s = t === Ji ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.` : "";
      j(`Failed to resolve ${t.slice(0, -1)}: ${e}${s}`);
    }
    return i;
  } else
    null.NODE_ENV !== "production" && j(`resolve${_n(t.slice(0, -1))} can only be used in render() or setup().`);
}
function Nc(t, e) {
  return t && (t[e] || t[Ae(e)] || t[_n(Ae(e))]);
}
function Al(t, e, n, r) {
  let o;
  const a = n && n[r];
  if (tt(t) || kt(t)) {
    o = new Array(t.length);
    for (let i = 0, s = t.length; i < s; i++)
      o[i] = e(t[i], i, void 0, a && a[i]);
  } else if (typeof t == "number") {
    null.NODE_ENV !== "production" && !Number.isInteger(t) && j(`The v-for range expect an integer value but got ${t}.`), o = new Array(t);
    for (let i = 0; i < t; i++)
      o[i] = e(i + 1, i, void 0, a && a[i]);
  } else if (Dt(t))
    if (t[Symbol.iterator])
      o = Array.from(t, (i, s) => e(i, s, void 0, a && a[s]));
    else {
      const i = Object.keys(t);
      o = new Array(i.length);
      for (let s = 0, l = i.length; s < l; s++) {
        const c = i[s];
        o[s] = e(t[c], c, s, a && a[s]);
      }
    }
  else
    o = [];
  return n && (n[r] = o), o;
}
function jm(t, e) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (tt(r))
      for (let o = 0; o < r.length; o++)
        t[r[o].name] = r[o].fn;
    else
      r && (t[r.name] = r.fn);
  }
  return t;
}
function Vm(t, e, n = {}, r, o) {
  if (ne.isCE || ne.parent && mr(ne.parent) && ne.parent.isCE)
    return St("slot", e === "default" ? null : { name: e }, r && r());
  let a = t[e];
  null.NODE_ENV !== "production" && a && a.length > 1 && (j("SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."), a = () => []), a && a._c && (a._d = !1), ae();
  const i = a && Uf(a(n)), s = Zo(Jt, { key: n.key || `_${e}` }, i || (r ? r() : []), i && t._ === 1 ? 64 : -2);
  return !o && s.scopeId && (s.slotScopeIds = [s.scopeId + "-s"]), a && a._c && (a._d = !0), s;
}
function Uf(t) {
  return t.some((e) => mn(e) ? !(e.type === Zt || e.type === Jt && !Uf(e.children)) : !0) ? t : null;
}
function km(t) {
  const e = {};
  if (null.NODE_ENV !== "production" && !Dt(t))
    return j("v-on with no argument expects an object value."), e;
  for (const n in t)
    e[cn(n)] = t[n];
  return e;
}
const ws = (t) => t ? sd(t) ? Ra(t) || t.proxy : ws(t.parent) : null, Xr = /* @__PURE__ */ $t(/* @__PURE__ */ Object.create(null), {
  $: (t) => t,
  $el: (t) => t.vnode.el,
  $data: (t) => t.data,
  $props: (t) => null.NODE_ENV !== "production" ? lr(t.props) : t.props,
  $attrs: (t) => null.NODE_ENV !== "production" ? lr(t.attrs) : t.attrs,
  $slots: (t) => null.NODE_ENV !== "production" ? lr(t.slots) : t.slots,
  $refs: (t) => null.NODE_ENV !== "production" ? lr(t.refs) : t.refs,
  $parent: (t) => ws(t.parent),
  $root: (t) => ws(t.root),
  $emit: (t) => t.emit,
  $options: (t) => Hf(t),
  $forceUpdate: (t) => t.f || (t.f = () => xa(t.update)),
  $nextTick: (t) => t.n || (t.n = Yo.bind(t.proxy)),
  $watch: (t) => Tm.bind(t)
}), Pl = (t) => t === "_" || t === "$", Po = {
  get({ _: t }, e) {
    const { ctx: n, setupState: r, data: o, props: a, accessCache: i, type: s, appContext: l } = t;
    if (null.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    if (null.NODE_ENV !== "production" && r !== Ct && r.__isScriptSetup && bt(r, e))
      return r[e];
    let c;
    if (e[0] !== "$") {
      const h = i[e];
      if (h !== void 0)
        switch (h) {
          case 1:
            return r[e];
          case 2:
            return o[e];
          case 4:
            return n[e];
          case 3:
            return a[e];
        }
      else {
        if (r !== Ct && bt(r, e))
          return i[e] = 1, r[e];
        if (o !== Ct && bt(o, e))
          return i[e] = 2, o[e];
        if ((c = t.propsOptions[0]) && bt(c, e))
          return i[e] = 3, a[e];
        if (n !== Ct && bt(n, e))
          return i[e] = 4, n[e];
        Ns && (i[e] = 0);
      }
    }
    const f = Xr[e];
    let u, d;
    if (f)
      return e === "$attrs" && (Se(t, "get", e), null.NODE_ENV !== "production" && Yi()), f(t);
    if ((u = s.__cssModules) && (u = u[e]))
      return u;
    if (n !== Ct && bt(n, e))
      return i[e] = 4, n[e];
    if (d = l.config.globalProperties, bt(d, e))
      return d[e];
    null.NODE_ENV !== "production" && ne && (!kt(e) || e.indexOf("__v") !== 0) && (o !== Ct && Pl(e[0]) && bt(o, e) ? j(`Property ${JSON.stringify(e)} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`) : t === ne && j(`Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`));
  },
  set({ _: t }, e, n) {
    const { data: r, setupState: o, ctx: a } = t;
    return o !== Ct && bt(o, e) ? (o[e] = n, !0) : r !== Ct && bt(r, e) ? (r[e] = n, !0) : bt(t.props, e) ? (null.NODE_ENV !== "production" && j(`Attempting to mutate prop "${e}". Props are readonly.`, t), !1) : e[0] === "$" && e.slice(1) in t ? (null.NODE_ENV !== "production" && j(`Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`, t), !1) : (null.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(a, e, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : a[e] = n, !0);
  },
  has({ _: { data: t, setupState: e, accessCache: n, ctx: r, appContext: o, propsOptions: a } }, i) {
    let s;
    return !!n[i] || t !== Ct && bt(t, i) || e !== Ct && bt(e, i) || (s = a[0]) && bt(s, i) || bt(r, i) || bt(Xr, i) || bt(o.config.globalProperties, i);
  },
  defineProperty(t, e, n) {
    return n.get != null ? t._.accessCache[e] = 0 : bt(n, "value") && this.set(t, e, n.value, null), Reflect.defineProperty(t, e, n);
  }
};
null.NODE_ENV !== "production" && (Po.ownKeys = (t) => (j("Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."), Reflect.ownKeys(t)));
const Um = /* @__PURE__ */ $t({}, Po, {
  get(t, e) {
    if (e !== Symbol.unscopables)
      return Po.get(t, e, t);
  },
  has(t, e) {
    const n = e[0] !== "_" && !Kp(e);
    return null.NODE_ENV !== "production" && !n && Po.has(t, e) && j(`Property ${JSON.stringify(e)} should not start with _ which is a reserved prefix for Vue internals.`), n;
  }
});
function Bm(t) {
  const e = {};
  return Object.defineProperty(e, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => t
  }), Object.keys(Xr).forEach((n) => {
    Object.defineProperty(e, n, {
      configurable: !0,
      enumerable: !1,
      get: () => Xr[n](t),
      set: se
    });
  }), e;
}
function Hm(t) {
  const { ctx: e, propsOptions: [n] } = t;
  n && Object.keys(n).forEach((r) => {
    Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => t.props[r],
      set: se
    });
  });
}
function _m(t) {
  const { ctx: e, setupState: n } = t;
  Object.keys(pt(n)).forEach((r) => {
    if (!n.__isScriptSetup) {
      if (Pl(r[0])) {
        j(`setup() return property ${JSON.stringify(r)} should not start with "$" or "_" which are reserved prefixes for Vue internals.`);
        return;
      }
      Object.defineProperty(e, r, {
        enumerable: !0,
        configurable: !0,
        get: () => n[r],
        set: se
      });
    }
  });
}
function Km() {
  const t = /* @__PURE__ */ Object.create(null);
  return (e, n) => {
    t[n] ? j(`${e} property "${n}" is already defined in ${t[n]}.`) : t[n] = e;
  };
}
let Ns = !0;
function Wm(t) {
  const e = Hf(t), n = t.proxy, r = t.ctx;
  Ns = !1, e.beforeCreate && Cc(e.beforeCreate, t, "bc");
  const {
    data: o,
    computed: a,
    methods: i,
    watch: s,
    provide: l,
    inject: c,
    created: f,
    beforeMount: u,
    mounted: d,
    beforeUpdate: h,
    updated: m,
    activated: v,
    deactivated: b,
    beforeDestroy: g,
    beforeUnmount: p,
    destroyed: E,
    unmounted: x,
    render: S,
    renderTracked: w,
    renderTriggered: C,
    errorCaptured: A,
    serverPrefetch: O,
    expose: T,
    inheritAttrs: R,
    components: L,
    directives: F,
    filters: $
  } = e, Q = null.NODE_ENV !== "production" ? Km() : null;
  if (null.NODE_ENV !== "production") {
    const [_] = t.propsOptions;
    if (_)
      for (const Z in _)
        Q("Props", Z);
  }
  if (c && zm(c, r, Q, t.appContext.config.unwrapInjectedRef), i)
    for (const _ in i) {
      const Z = i[_];
      st(Z) ? (null.NODE_ENV !== "production" ? Object.defineProperty(r, _, {
        value: Z.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : r[_] = Z.bind(n), null.NODE_ENV !== "production" && Q("Methods", _)) : null.NODE_ENV !== "production" && j(`Method "${_}" has type "${typeof Z}" in the component definition. Did you reference the function correctly?`);
    }
  if (o) {
    null.NODE_ENV !== "production" && !st(o) && j("The data option must be a function. Plain object usage is no longer supported.");
    const _ = o.call(n, n);
    if (null.NODE_ENV !== "production" && ha(_) && j("data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."), !Dt(_))
      null.NODE_ENV !== "production" && j("data() should return an object.");
    else if (t.data = ii(_), null.NODE_ENV !== "production")
      for (const Z in _)
        Q("Data", Z), Pl(Z[0]) || Object.defineProperty(r, Z, {
          configurable: !0,
          enumerable: !0,
          get: () => _[Z],
          set: se
        });
  }
  if (Ns = !0, a)
    for (const _ in a) {
      const Z = a[_], wt = st(Z) ? Z.bind(n, n) : st(Z.get) ? Z.get.bind(n, n) : se;
      null.NODE_ENV !== "production" && wt === se && j(`Computed property "${_}" has no getter.`);
      const Kt = !st(Z) && st(Z.set) ? Z.set.bind(n) : null.NODE_ENV !== "production" ? () => {
        j(`Write operation failed: computed property "${_}" is readonly.`);
      } : se, It = he({
        get: wt,
        set: Kt
      });
      Object.defineProperty(r, _, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (At) => It.value = At
      }), null.NODE_ENV !== "production" && Q("Computed", _);
    }
  if (s)
    for (const _ in s)
      Bf(s[_], r, n, _);
  if (l) {
    const _ = st(l) ? l.call(n) : l;
    Reflect.ownKeys(_).forEach((Z) => {
      Nf(Z, _[Z]);
    });
  }
  f && Cc(f, t, "c");
  function U(_, Z) {
    tt(Z) ? Z.forEach((wt) => _(wt.bind(n))) : Z && _(Z.bind(n));
  }
  if (U(Rf, u), U(oo, d), U(Mf, h), U(Ia, m), U(If, v), U(Af, b), U(jf, A), U(Ff, w), U(Lf, C), U(Aa, p), U(li, x), U($f, O), tt(T))
    if (T.length) {
      const _ = t.exposed || (t.exposed = {});
      T.forEach((Z) => {
        Object.defineProperty(_, Z, {
          get: () => n[Z],
          set: (wt) => n[Z] = wt
        });
      });
    } else
      t.exposed || (t.exposed = {});
  S && t.render === se && (t.render = S), R != null && (t.inheritAttrs = R), L && (t.components = L), F && (t.directives = F);
}
function zm(t, e, n = se, r = !1) {
  tt(t) && (t = Cs(t));
  for (const o in t) {
    const a = t[o];
    let i;
    Dt(a) ? "default" in a ? i = Kr(a.from || o, a.default, !0) : i = Kr(a.from || o) : i = Kr(a), jt(i) ? r ? Object.defineProperty(e, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : (null.NODE_ENV !== "production" && j(`injected property "${o}" is a ref and will be auto-unwrapped and no longer needs \`.value\` in the next minor release. To opt-in to the new behavior now, set \`app.config.unwrapInjectedRef = true\` (this config is temporary and will not be needed in the future.)`), e[o] = i) : e[o] = i, null.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Cc(t, e, n) {
  Ie(tt(t) ? t.map((r) => r.bind(e.proxy)) : t.bind(e.proxy), e, n);
}
function Bf(t, e, n, r) {
  const o = r.includes(".") ? Tf(n, r) : () => n[r];
  if (kt(t)) {
    const a = e[t];
    st(a) ? kn(o, a) : null.NODE_ENV !== "production" && j(`Invalid watch handler specified by key "${t}"`, a);
  } else if (st(t))
    kn(o, t.bind(n));
  else if (Dt(t))
    if (tt(t))
      t.forEach((a) => Bf(a, e, n, r));
    else {
      const a = st(t.handler) ? t.handler.bind(n) : e[t.handler];
      st(a) ? kn(o, a, t) : null.NODE_ENV !== "production" && j(`Invalid watch handler specified by key "${t.handler}"`, a);
    }
  else
    null.NODE_ENV !== "production" && j(`Invalid watch option: "${r}"`, t);
}
function Hf(t) {
  const e = t.type, { mixins: n, extends: r } = e, { mixins: o, optionsCache: a, config: { optionMergeStrategies: i } } = t.appContext, s = a.get(e);
  let l;
  return s ? l = s : !o.length && !n && !r ? l = e : (l = {}, o.length && o.forEach((c) => Qi(l, c, i, !0)), Qi(l, e, i)), a.set(e, l), l;
}
function Qi(t, e, n, r = !1) {
  const { mixins: o, extends: a } = e;
  a && Qi(t, a, n, !0), o && o.forEach((i) => Qi(t, i, n, !0));
  for (const i in e)
    if (r && i === "expose")
      null.NODE_ENV !== "production" && j('"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.');
    else {
      const s = Gm[i] || n && n[i];
      t[i] = s ? s(t[i], e[i]) : e[i];
    }
  return t;
}
const Gm = {
  data: Tc,
  props: rr,
  emits: rr,
  methods: rr,
  computed: rr,
  beforeCreate: fe,
  created: fe,
  beforeMount: fe,
  mounted: fe,
  beforeUpdate: fe,
  updated: fe,
  beforeDestroy: fe,
  beforeUnmount: fe,
  destroyed: fe,
  unmounted: fe,
  activated: fe,
  deactivated: fe,
  errorCaptured: fe,
  serverPrefetch: fe,
  components: rr,
  directives: rr,
  watch: Xm,
  provide: Tc,
  inject: Ym
};
function Tc(t, e) {
  return e ? t ? function() {
    return $t(st(t) ? t.call(this, this) : t, st(e) ? e.call(this, this) : e);
  } : e : t;
}
function Ym(t, e) {
  return rr(Cs(t), Cs(e));
}
function Cs(t) {
  if (tt(t)) {
    const e = {};
    for (let n = 0; n < t.length; n++)
      e[t[n]] = t[n];
    return e;
  }
  return t;
}
function fe(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function rr(t, e) {
  return t ? $t($t(/* @__PURE__ */ Object.create(null), t), e) : e;
}
function Xm(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const n = $t(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    n[r] = fe(t[r], e[r]);
  return n;
}
function Jm(t, e, n, r = !1) {
  const o = {}, a = {};
  _i(a, Pa, 1), t.propsDefaults = /* @__PURE__ */ Object.create(null), _f(t, e, o, a);
  for (const i in t.propsOptions[0])
    i in o || (o[i] = void 0);
  null.NODE_ENV !== "production" && Wf(e || {}, o, t), n ? t.props = r ? o : df(o) : t.type.props ? t.props = o : t.props = a, t.attrs = a;
}
function Qm(t, e, n, r) {
  const { props: o, attrs: a, vnode: { patchFlag: i } } = t, s = pt(o), [l] = t.propsOptions;
  let c = !1;
  if (!(null.NODE_ENV !== "production" && (t.type.__hmrId || t.parent && t.parent.type.__hmrId)) && (r || i > 0) && !(i & 16)) {
    if (i & 8) {
      const f = t.vnode.dynamicProps;
      for (let u = 0; u < f.length; u++) {
        let d = f[u];
        if (wa(t.emitsOptions, d))
          continue;
        const h = e[d];
        if (l)
          if (bt(a, d))
            h !== a[d] && (a[d] = h, c = !0);
          else {
            const m = Ae(d);
            o[m] = Ts(l, s, m, h, t, !1);
          }
        else
          h !== a[d] && (a[d] = h, c = !0);
      }
    }
  } else {
    _f(t, e, o, a) && (c = !0);
    let f;
    for (const u in s)
      (!e || !bt(e, u) && ((f = Ve(u)) === u || !bt(e, f))) && (l ? n && (n[u] !== void 0 || n[f] !== void 0) && (o[u] = Ts(l, s, u, void 0, t, !0)) : delete o[u]);
    if (a !== s)
      for (const u in a)
        (!e || !bt(e, u) && !0) && (delete a[u], c = !0);
  }
  c && hn(t, "set", "$attrs"), null.NODE_ENV !== "production" && Wf(e || {}, o, t);
}
function _f(t, e, n, r) {
  const [o, a] = t.propsOptions;
  let i = !1, s;
  if (e)
    for (let l in e) {
      if (wo(l))
        continue;
      const c = e[l];
      let f;
      o && bt(o, f = Ae(l)) ? !a || !a.includes(f) ? n[f] = c : (s || (s = {}))[f] = c : wa(t.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, i = !0);
    }
  if (a) {
    const l = pt(n), c = s || Ct;
    for (let f = 0; f < a.length; f++) {
      const u = a[f];
      n[u] = Ts(o, l, u, c[u], t, !bt(c, u));
    }
  }
  return i;
}
function Ts(t, e, n, r, o, a) {
  const i = t[n];
  if (i != null) {
    const s = bt(i, "default");
    if (s && r === void 0) {
      const l = i.default;
      if (i.type !== Function && st(l)) {
        const { propsDefaults: c } = o;
        n in c ? r = c[n] : (Gn(o), r = c[n] = l.call(null, e), Bn());
      } else
        r = l;
    }
    i[0] && (a && !s ? r = !1 : i[1] && (r === "" || r === Ve(n)) && (r = !0));
  }
  return r;
}
function Kf(t, e, n = !1) {
  const r = e.propsCache, o = r.get(t);
  if (o)
    return o;
  const a = t.props, i = {}, s = [];
  let l = !1;
  if (!st(t)) {
    const f = (u) => {
      l = !0;
      const [d, h] = Kf(u, e, !0);
      $t(i, d), h && s.push(...h);
    };
    !n && e.mixins.length && e.mixins.forEach(f), t.extends && f(t.extends), t.mixins && t.mixins.forEach(f);
  }
  if (!a && !l)
    return r.set(t, Hr), Hr;
  if (tt(a))
    for (let f = 0; f < a.length; f++) {
      null.NODE_ENV !== "production" && !kt(a[f]) && j("props must be strings when using array syntax.", a[f]);
      const u = Ae(a[f]);
      Dc(u) && (i[u] = Ct);
    }
  else if (a) {
    null.NODE_ENV !== "production" && !Dt(a) && j("invalid props options", a);
    for (const f in a) {
      const u = Ae(f);
      if (Dc(u)) {
        const d = a[f], h = i[u] = tt(d) || st(d) ? { type: d } : d;
        if (h) {
          const m = Ac(Boolean, h.type), v = Ac(String, h.type);
          h[0] = m > -1, h[1] = v < 0 || m < v, (m > -1 || bt(h, "default")) && s.push(u);
        }
      }
    }
  }
  const c = [i, s];
  return r.set(t, c), c;
}
function Dc(t) {
  return t[0] !== "$" ? !0 : (null.NODE_ENV !== "production" && j(`Invalid prop name: "${t}" is a reserved property.`), !1);
}
function Ds(t) {
  const e = t && t.toString().match(/^\s*function (\w+)/);
  return e ? e[1] : t === null ? "null" : "";
}
function Ic(t, e) {
  return Ds(t) === Ds(e);
}
function Ac(t, e) {
  return tt(e) ? e.findIndex((n) => Ic(n, t)) : st(e) && Ic(e, t) ? 0 : -1;
}
function Wf(t, e, n) {
  const r = pt(e), o = n.propsOptions[0];
  for (const a in o) {
    let i = o[a];
    i != null && Zm(a, r[a], i, !bt(t, a) && !bt(t, Ve(a)));
  }
}
function Zm(t, e, n, r) {
  const { type: o, required: a, validator: i } = n;
  if (a && r) {
    j('Missing required prop: "' + t + '"');
    return;
  }
  if (!(e == null && !n.required)) {
    if (o != null && o !== !0) {
      let s = !1;
      const l = tt(o) ? o : [o], c = [];
      for (let f = 0; f < l.length && !s; f++) {
        const { valid: u, expectedType: d } = tg(e, l[f]);
        c.push(d || ""), s = u;
      }
      if (!s) {
        j(eg(t, e, c));
        return;
      }
    }
    i && !i(e) && j('Invalid prop: custom validator check failed for prop "' + t + '".');
  }
}
const qm = /* @__PURE__ */ bn("String,Number,Boolean,Function,Symbol,BigInt");
function tg(t, e) {
  let n;
  const r = Ds(e);
  if (qm(r)) {
    const o = typeof t;
    n = o === r.toLowerCase(), !n && o === "object" && (n = t instanceof e);
  } else
    r === "Object" ? n = Dt(t) : r === "Array" ? n = tt(t) : r === "null" ? n = t === null : n = t instanceof e;
  return {
    valid: n,
    expectedType: r
  };
}
function eg(t, e, n) {
  let r = `Invalid prop: type check failed for prop "${t}". Expected ${n.map(_n).join(" | ")}`;
  const o = n[0], a = ul(e), i = Pc(e, o), s = Pc(e, a);
  return n.length === 1 && Rc(o) && !ng(o, a) && (r += ` with value ${i}`), r += `, got ${a} `, Rc(a) && (r += `with value ${s}.`), r;
}
function Pc(t, e) {
  return e === "String" ? `"${t}"` : e === "Number" ? `${Number(t)}` : `${t}`;
}
function Rc(t) {
  return ["string", "number", "boolean"].some((n) => t.toLowerCase() === n);
}
function ng(...t) {
  return t.some((e) => e.toLowerCase() === "boolean");
}
const zf = (t) => t[0] === "_" || t === "$stable", Rl = (t) => tt(t) ? t.map(xe) : [xe(t)], rg = (t, e, n) => {
  if (e._n)
    return e;
  const r = Ca((...o) => (null.NODE_ENV !== "production" && ee && j(`Slot "${t}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`), Rl(e(...o))), n);
  return r._c = !1, r;
}, Gf = (t, e, n) => {
  const r = t._ctx;
  for (const o in t) {
    if (zf(o))
      continue;
    const a = t[o];
    if (st(a))
      e[o] = rg(o, a, r);
    else if (a != null) {
      null.NODE_ENV !== "production" && j(`Non-function value encountered for slot "${o}". Prefer function slots for better performance.`);
      const i = Rl(a);
      e[o] = () => i;
    }
  }
}, Yf = (t, e) => {
  null.NODE_ENV !== "production" && !ro(t.vnode) && j("Non-function value encountered for default slot. Prefer function slots for better performance.");
  const n = Rl(e);
  t.slots.default = () => n;
}, og = (t, e) => {
  if (t.vnode.shapeFlag & 32) {
    const n = e._;
    n ? (t.slots = pt(e), _i(e, "_", n)) : Gf(e, t.slots = {});
  } else
    t.slots = {}, e && Yf(t, e);
  _i(t.slots, Pa, 1);
}, ig = (t, e, n) => {
  const { vnode: r, slots: o } = t;
  let a = !0, i = Ct;
  if (r.shapeFlag & 32) {
    const s = e._;
    s ? null.NODE_ENV !== "production" && Vn ? $t(o, e) : n && s === 1 ? a = !1 : ($t(o, e), !n && s === 1 && delete o._) : (a = !e.$stable, Gf(e, o)), i = e;
  } else
    e && (Yf(t, e), i = { default: 1 });
  if (a)
    for (const s in o)
      !zf(s) && !(s in i) && delete o[s];
};
function Xf() {
  return {
    app: null,
    config: {
      isNativeTag: Yu,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ag = 0;
function sg(t, e) {
  return function(r, o = null) {
    st(r) || (r = Object.assign({}, r)), o != null && !Dt(o) && (null.NODE_ENV !== "production" && j("root props passed to app.mount() must be an object."), o = null);
    const a = Xf(), i = /* @__PURE__ */ new Set();
    let s = !1;
    const l = a.app = {
      _uid: ag++,
      _component: r,
      _props: o,
      _container: null,
      _context: a,
      _instance: null,
      version: Ls,
      get config() {
        return a.config;
      },
      set config(c) {
        null.NODE_ENV !== "production" && j("app.config cannot be replaced. Modify individual options instead.");
      },
      use(c, ...f) {
        return i.has(c) ? null.NODE_ENV !== "production" && j("Plugin has already been applied to target app.") : c && st(c.install) ? (i.add(c), c.install(l, ...f)) : st(c) ? (i.add(c), c(l, ...f)) : null.NODE_ENV !== "production" && j('A plugin must either be a function or an object with an "install" function.'), l;
      },
      mixin(c) {
        return a.mixins.includes(c) ? null.NODE_ENV !== "production" && j("Mixin has already been applied to target app" + (c.name ? `: ${c.name}` : "")) : a.mixins.push(c), l;
      },
      component(c, f) {
        return null.NODE_ENV !== "production" && Rs(c, a.config), f ? (null.NODE_ENV !== "production" && a.components[c] && j(`Component "${c}" has already been registered in target app.`), a.components[c] = f, l) : a.components[c];
      },
      directive(c, f) {
        return null.NODE_ENV !== "production" && Vf(c), f ? (null.NODE_ENV !== "production" && a.directives[c] && j(`Directive "${c}" has already been registered in target app.`), a.directives[c] = f, l) : a.directives[c];
      },
      mount(c, f, u) {
        if (s)
          null.NODE_ENV !== "production" && j("App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`");
        else {
          null.NODE_ENV !== "production" && c.__vue_app__ && j("There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.");
          const d = St(r, o);
          return d.appContext = a, null.NODE_ENV !== "production" && (a.reload = () => {
            t(ke(d), c, u);
          }), f && e ? e(d, c) : t(d, c, u), s = !0, l._container = c, c.__vue_app__ = l, null.NODE_ENV !== "production" && (l._instance = d.component, im(l, Ls)), Ra(d.component) || d.component.proxy;
        }
      },
      unmount() {
        s ? (t(null, l._container), null.NODE_ENV !== "production" && (l._instance = null, am(l)), delete l._container.__vue_app__) : null.NODE_ENV !== "production" && j("Cannot unmount an app that is not mounted.");
      },
      provide(c, f) {
        return null.NODE_ENV !== "production" && c in a.provides && j(`App already provides property with key "${String(c)}". It will be overwritten with the new value.`), a.provides[c] = f, l;
      }
    };
    return l;
  };
}
function Zi(t, e, n, r, o = !1) {
  if (tt(t)) {
    t.forEach((d, h) => Zi(d, e && (tt(e) ? e[h] : e), n, r, o));
    return;
  }
  if (mr(r) && !o)
    return;
  const a = r.shapeFlag & 4 ? Ra(r.component) || r.component.proxy : r.el, i = o ? null : a, { i: s, r: l } = t;
  if (null.NODE_ENV !== "production" && !s) {
    j("Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.");
    return;
  }
  const c = e && e.r, f = s.refs === Ct ? s.refs = {} : s.refs, u = s.setupState;
  if (c != null && c !== l && (kt(c) ? (f[c] = null, bt(u, c) && (u[c] = null)) : jt(c) && (c.value = null)), st(l))
    Ze(l, s, 12, [i, f]);
  else {
    const d = kt(l), h = jt(l);
    if (d || h) {
      const m = () => {
        if (t.f) {
          const v = d ? f[l] : l.value;
          o ? tt(v) && cl(v, a) : tt(v) ? v.includes(a) || v.push(a) : d ? (f[l] = [a], bt(u, l) && (u[l] = f[l])) : (l.value = [a], t.k && (f[t.k] = l.value));
        } else
          d ? (f[l] = i, bt(u, l) && (u[l] = i)) : h ? (l.value = i, t.k && (f[t.k] = i)) : null.NODE_ENV !== "production" && j("Invalid template ref type:", l, `(${typeof l})`);
      };
      i ? (m.id = -1, ie(m, n)) : m();
    } else
      null.NODE_ENV !== "production" && j("Invalid template ref type:", l, `(${typeof l})`);
  }
}
let Nn = !1;
const yi = (t) => /svg/.test(t.namespaceURI) && t.tagName !== "foreignObject", ao = (t) => t.nodeType === 8;
function lg(t) {
  const { mt: e, p: n, o: { patchProp: r, createText: o, nextSibling: a, parentNode: i, remove: s, insert: l, createComment: c } } = t, f = (g, p) => {
    if (!p.hasChildNodes()) {
      null.NODE_ENV !== "production" && j("Attempting to hydrate existing markup but container is empty. Performing full mount instead."), n(null, g, p), Gi(), p._vnode = g;
      return;
    }
    Nn = !1, u(p.firstChild, g, null, null, null), Gi(), p._vnode = g, Nn && console.error("Hydration completed but contains mismatches.");
  }, u = (g, p, E, x, S, w = !1) => {
    const C = ao(g) && g.data === "[", A = () => v(g, p, E, x, S, C), { type: O, ref: T, shapeFlag: R, patchFlag: L } = p, F = g.nodeType;
    p.el = g, L === -2 && (w = !1, p.dynamicChildren = null);
    let $ = null;
    switch (O) {
      case Er:
        F !== 3 ? p.children === "" ? (l(p.el = o(""), i(g), g), $ = g) : $ = A() : (g.data !== p.children && (Nn = !0, null.NODE_ENV !== "production" && j(`Hydration text mismatch:
- Client: ${JSON.stringify(g.data)}
- Server: ${JSON.stringify(p.children)}`), g.data = p.children), $ = a(g));
        break;
      case Zt:
        F !== 8 || C ? $ = A() : $ = a(g);
        break;
      case Un:
        if (F !== 1 && F !== 3)
          $ = A();
        else {
          $ = g;
          const Q = !p.children.length;
          for (let U = 0; U < p.staticCount; U++)
            Q && (p.children += $.nodeType === 1 ? $.outerHTML : $.data), U === p.staticCount - 1 && (p.anchor = $), $ = a($);
          return $;
        }
        break;
      case Jt:
        C ? $ = m(g, p, E, x, S, w) : $ = A();
        break;
      default:
        if (R & 1)
          F !== 1 || p.type.toLowerCase() !== g.tagName.toLowerCase() ? $ = A() : $ = d(g, p, E, x, S, w);
        else if (R & 6) {
          p.slotScopeIds = S;
          const Q = i(g);
          if (e(p, Q, null, E, x, yi(Q), w), $ = C ? b(g) : a(g), $ && ao($) && $.data === "teleport end" && ($ = a($)), mr(p)) {
            let U;
            C ? (U = St(Jt), U.anchor = $ ? $.previousSibling : Q.lastChild) : U = g.nodeType === 3 ? Ml("") : St("div"), U.el = g, p.component.subTree = U;
          }
        } else
          R & 64 ? F !== 8 ? $ = A() : $ = p.type.hydrate(g, p, E, x, S, w, t, h) : R & 128 ? $ = p.type.hydrate(g, p, E, x, yi(i(g)), S, w, t, u) : null.NODE_ENV !== "production" && j("Invalid HostVNode type:", O, `(${typeof O})`);
    }
    return T != null && Zi(T, null, x, p), $;
  }, d = (g, p, E, x, S, w) => {
    w = w || !!p.dynamicChildren;
    const { type: C, props: A, patchFlag: O, shapeFlag: T, dirs: R } = p, L = C === "input" && R || C === "option";
    if (null.NODE_ENV !== "production" || L || O !== -1) {
      if (R && Xe(p, null, E, "created"), A)
        if (L || !w || O & 48)
          for (const $ in A)
            (L && $.endsWith("value") || no($) && !wo($)) && r(g, $, null, A[$], !1, void 0, E);
        else
          A.onClick && r(g, "onClick", null, A.onClick, !1, void 0, E);
      let F;
      if ((F = A && A.onVnodeBeforeMount) && Ee(F, E, p), R && Xe(p, null, E, "beforeMount"), ((F = A && A.onVnodeMounted) || R) && wf(() => {
        F && Ee(F, E, p), R && Xe(p, null, E, "mounted");
      }, x), T & 16 && !(A && (A.innerHTML || A.textContent))) {
        let $ = h(g.firstChild, p, g, E, x, S, w), Q = !1;
        for (; $; ) {
          Nn = !0, null.NODE_ENV !== "production" && !Q && (j(`Hydration children mismatch in <${p.type}>: server rendered element contains more child nodes than client vdom.`), Q = !0);
          const U = $;
          $ = $.nextSibling, s(U);
        }
      } else
        T & 8 && g.textContent !== p.children && (Nn = !0, null.NODE_ENV !== "production" && j(`Hydration text content mismatch in <${p.type}>:
- Client: ${g.textContent}
- Server: ${p.children}`), g.textContent = p.children);
    }
    return g.nextSibling;
  }, h = (g, p, E, x, S, w, C) => {
    C = C || !!p.dynamicChildren;
    const A = p.children, O = A.length;
    let T = !1;
    for (let R = 0; R < O; R++) {
      const L = C ? A[R] : A[R] = xe(A[R]);
      if (g)
        g = u(g, L, x, S, w, C);
      else {
        if (L.type === Er && !L.children)
          continue;
        Nn = !0, null.NODE_ENV !== "production" && !T && (j(`Hydration children mismatch in <${E.tagName.toLowerCase()}>: server rendered element contains fewer child nodes than client vdom.`), T = !0), n(null, L, E, null, x, S, yi(E), w);
      }
    }
    return g;
  }, m = (g, p, E, x, S, w) => {
    const { slotScopeIds: C } = p;
    C && (S = S ? S.concat(C) : C);
    const A = i(g), O = h(a(g), p, A, E, x, S, w);
    return O && ao(O) && O.data === "]" ? a(p.anchor = O) : (Nn = !0, l(p.anchor = c("]"), A, O), O);
  }, v = (g, p, E, x, S, w) => {
    if (Nn = !0, null.NODE_ENV !== "production" && j(`Hydration node mismatch:
- Client vnode:`, p.type, `
- Server rendered DOM:`, g, g.nodeType === 3 ? "(text)" : ao(g) && g.data === "[" ? "(start of fragment)" : ""), p.el = null, w) {
      const O = b(g);
      for (; ; ) {
        const T = a(g);
        if (T && T !== O)
          s(T);
        else
          break;
      }
    }
    const C = a(g), A = i(g);
    return s(g), n(null, p, A, C, E, x, yi(A), S), C;
  }, b = (g) => {
    let p = 0;
    for (; g; )
      if (g = a(g), g && ao(g) && (g.data === "[" && p++, g.data === "]")) {
        if (p === 0)
          return a(g);
        p--;
      }
    return g;
  };
  return [f, u];
}
let so, Mn;
function an(t, e) {
  t.appContext.config.performance && qi() && Mn.mark(`vue-${e}-${t.uid}`), null.NODE_ENV !== "production" && lm(t, e, qi() ? Mn.now() : Date.now());
}
function sn(t, e) {
  if (t.appContext.config.performance && qi()) {
    const n = `vue-${e}-${t.uid}`, r = n + ":end";
    Mn.mark(r), Mn.measure(`<${Ma(t, t.type)}> ${e}`, n, r), Mn.clearMarks(n), Mn.clearMarks(r);
  }
  null.NODE_ENV !== "production" && cm(t, e, qi() ? Mn.now() : Date.now());
}
function qi() {
  return so !== void 0 || (typeof window < "u" && window.performance ? (so = !0, Mn = window.performance) : so = !1), so;
}
function cg() {
  const t = [];
  if (null.NODE_ENV !== "production" && t.length) {
    const e = t.length > 1;
    console.warn(`Feature flag${e ? "s" : ""} ${t.join(", ")} ${e ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`);
  }
}
const ie = wf;
function Jf(t) {
  return Zf(t);
}
function Qf(t) {
  return Zf(t, lg);
}
function Zf(t, e) {
  cg();
  const n = Qu();
  n.__VUE__ = !0, null.NODE_ENV !== "production" && Ol(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const { insert: r, remove: o, patchProp: a, createElement: i, createText: s, createComment: l, setText: c, setElementText: f, parentNode: u, nextSibling: d, setScopeId: h = se, cloneNode: m, insertStaticContent: v } = t, b = (y, N, M, V = null, k = null, W = null, G = !1, K = null, z = null.NODE_ENV !== "production" && Vn ? !1 : !!N.dynamicChildren) => {
    if (y === N)
      return;
    y && !Je(y, N) && (V = qt(y), Pt(y, k, W, !0), y = null), N.patchFlag === -2 && (z = !1, N.dynamicChildren = null);
    const { type: H, ref: et, shapeFlag: J } = N;
    switch (H) {
      case Er:
        g(y, N, M, V);
        break;
      case Zt:
        p(y, N, M, V);
        break;
      case Un:
        y == null ? E(N, M, V, G) : null.NODE_ENV !== "production" && x(y, N, M, G);
        break;
      case Jt:
        $(y, N, M, V, k, W, G, K, z);
        break;
      default:
        J & 1 ? C(y, N, M, V, k, W, G, K, z) : J & 6 ? Q(y, N, M, V, k, W, G, K, z) : J & 64 || J & 128 ? H.process(y, N, M, V, k, W, G, K, z, me) : null.NODE_ENV !== "production" && j("Invalid VNode type:", H, `(${typeof H})`);
    }
    et != null && k && Zi(et, y && y.ref, W, N || y, !N);
  }, g = (y, N, M, V) => {
    if (y == null)
      r(N.el = s(N.children), M, V);
    else {
      const k = N.el = y.el;
      N.children !== y.children && c(k, N.children);
    }
  }, p = (y, N, M, V) => {
    y == null ? r(N.el = l(N.children || ""), M, V) : N.el = y.el;
  }, E = (y, N, M, V) => {
    [y.el, y.anchor] = v(y.children, N, M, V, y.el, y.anchor);
  }, x = (y, N, M, V) => {
    if (N.children !== y.children) {
      const k = d(y.anchor);
      w(y), [N.el, N.anchor] = v(N.children, M, k, V);
    } else
      N.el = y.el, N.anchor = y.anchor;
  }, S = ({ el: y, anchor: N }, M, V) => {
    let k;
    for (; y && y !== N; )
      k = d(y), r(y, M, V), y = k;
    r(N, M, V);
  }, w = ({ el: y, anchor: N }) => {
    let M;
    for (; y && y !== N; )
      M = d(y), o(y), y = M;
    o(N);
  }, C = (y, N, M, V, k, W, G, K, z) => {
    G = G || N.type === "svg", y == null ? A(N, M, V, k, W, G, K, z) : R(y, N, k, W, G, K, z);
  }, A = (y, N, M, V, k, W, G, K) => {
    let z, H;
    const { type: et, props: J, shapeFlag: ot, transition: lt, patchFlag: vt, dirs: D } = y;
    if (null.NODE_ENV === "production" && y.el && m !== void 0 && vt === -1)
      z = y.el = m(y.el);
    else {
      if (z = y.el = i(y.type, W, J && J.is, J), ot & 8 ? f(z, y.children) : ot & 16 && T(y.children, z, null, V, k, W && et !== "foreignObject", G, K), D && Xe(y, null, V, "created"), J) {
        for (const P in J)
          P !== "value" && !wo(P) && a(z, P, null, J[P], W, y.children, V, k, Wt);
        "value" in J && a(z, "value", null, J.value), (H = J.onVnodeBeforeMount) && Ee(H, V, y);
      }
      O(z, y, y.scopeId, G, V);
    }
    null.NODE_ENV !== "production" && (Object.defineProperty(z, "__vnode", {
      value: y,
      enumerable: !1
    }), Object.defineProperty(z, "__vueParentComponent", {
      value: V,
      enumerable: !1
    })), D && Xe(y, null, V, "beforeMount");
    const I = (!k || k && !k.pendingBranch) && lt && !lt.persisted;
    I && lt.beforeEnter(z), r(z, N, M), ((H = J && J.onVnodeMounted) || I || D) && ie(() => {
      H && Ee(H, V, y), I && lt.enter(z), D && Xe(y, null, V, "mounted");
    }, k);
  }, O = (y, N, M, V, k) => {
    if (M && h(y, M), V)
      for (let W = 0; W < V.length; W++)
        h(y, V[W]);
    if (k) {
      let W = k.subTree;
      if (null.NODE_ENV !== "production" && W.patchFlag > 0 && W.patchFlag & 2048 && (W = wl(W.children) || W), N === W) {
        const G = k.vnode;
        O(y, G, G.scopeId, G.slotScopeIds, k.parent);
      }
    }
  }, T = (y, N, M, V, k, W, G, K, z = 0) => {
    for (let H = z; H < y.length; H++) {
      const et = y[H] = K ? In(y[H]) : xe(y[H]);
      b(null, et, N, M, V, k, W, G, K);
    }
  }, R = (y, N, M, V, k, W, G) => {
    const K = N.el = y.el;
    let { patchFlag: z, dynamicChildren: H, dirs: et } = N;
    z |= y.patchFlag & 16;
    const J = y.props || Ct, ot = N.props || Ct;
    let lt;
    M && Qn(M, !1), (lt = ot.onVnodeBeforeUpdate) && Ee(lt, M, N, y), et && Xe(N, y, M, "beforeUpdate"), M && Qn(M, !0), null.NODE_ENV !== "production" && Vn && (z = 0, G = !1, H = null);
    const vt = k && N.type !== "foreignObject";
    if (H ? (L(y.dynamicChildren, H, K, M, V, vt, W), null.NODE_ENV !== "production" && M && M.type.__hmrId && Ro(y, N)) : G || Kt(y, N, K, null, M, V, vt, W, !1), z > 0) {
      if (z & 16)
        F(K, N, J, ot, M, V, k);
      else if (z & 2 && J.class !== ot.class && a(K, "class", null, ot.class, k), z & 4 && a(K, "style", J.style, ot.style, k), z & 8) {
        const D = N.dynamicProps;
        for (let I = 0; I < D.length; I++) {
          const P = D[I], B = J[P], X = ot[P];
          (X !== B || P === "value") && a(K, P, B, X, k, y.children, M, V, Wt);
        }
      }
      z & 1 && y.children !== N.children && f(K, N.children);
    } else
      !G && H == null && F(K, N, J, ot, M, V, k);
    ((lt = ot.onVnodeUpdated) || et) && ie(() => {
      lt && Ee(lt, M, N, y), et && Xe(N, y, M, "updated");
    }, V);
  }, L = (y, N, M, V, k, W, G) => {
    for (let K = 0; K < N.length; K++) {
      const z = y[K], H = N[K], et = z.el && (z.type === Jt || !Je(z, H) || z.shapeFlag & 70) ? u(z.el) : M;
      b(z, H, et, null, V, k, W, G, !0);
    }
  }, F = (y, N, M, V, k, W, G) => {
    if (M !== V) {
      for (const K in V) {
        if (wo(K))
          continue;
        const z = V[K], H = M[K];
        z !== H && K !== "value" && a(y, K, H, z, G, N.children, k, W, Wt);
      }
      if (M !== Ct)
        for (const K in M)
          !wo(K) && !(K in V) && a(y, K, M[K], null, G, N.children, k, W, Wt);
      "value" in V && a(y, "value", M.value, V.value);
    }
  }, $ = (y, N, M, V, k, W, G, K, z) => {
    const H = N.el = y ? y.el : s(""), et = N.anchor = y ? y.anchor : s("");
    let { patchFlag: J, dynamicChildren: ot, slotScopeIds: lt } = N;
    null.NODE_ENV !== "production" && (Vn || J & 2048) && (J = 0, z = !1, ot = null), lt && (K = K ? K.concat(lt) : lt), y == null ? (r(H, M, V), r(et, M, V), T(N.children, M, et, k, W, G, K, z)) : J > 0 && J & 64 && ot && y.dynamicChildren ? (L(y.dynamicChildren, ot, M, k, W, G, K), null.NODE_ENV !== "production" && k && k.type.__hmrId ? Ro(y, N) : (N.key != null || k && N === k.subTree) && Ro(y, N, !0)) : Kt(y, N, M, et, k, W, G, K, z);
  }, Q = (y, N, M, V, k, W, G, K, z) => {
    N.slotScopeIds = K, y == null ? N.shapeFlag & 512 ? k.ctx.activate(N, M, V, G, z) : U(N, M, V, k, W, G, z) : _(y, N, z);
  }, U = (y, N, M, V, k, W, G) => {
    const K = y.component = ad(y, V, k);
    if (null.NODE_ENV !== "production" && K.type.__hmrId && em(K), null.NODE_ENV !== "production" && (Co(y), an(K, "mount")), ro(y) && (K.ctx.renderer = me), null.NODE_ENV !== "production" && an(K, "init"), ld(K), null.NODE_ENV !== "production" && sn(K, "init"), K.asyncDep) {
      if (k && k.registerDep(K, Z), !y.el) {
        const z = K.subTree = St(Zt);
        p(null, z, N, M);
      }
      return;
    }
    Z(K, y, N, M, k, W, G), null.NODE_ENV !== "production" && (To(), sn(K, "mount"));
  }, _ = (y, N, M) => {
    const V = N.component = y.component;
    if (ym(y, N, M))
      if (V.asyncDep && !V.asyncResolved) {
        null.NODE_ENV !== "production" && Co(N), wt(V, N, M), null.NODE_ENV !== "production" && To();
        return;
      } else
        V.next = N, qh(V.update), V.update();
    else
      N.el = y.el, V.vnode = N;
  }, Z = (y, N, M, V, k, W, G) => {
    const K = () => {
      if (y.isMounted) {
        let { next: et, bu: J, u: ot, parent: lt, vnode: vt } = y, D = et, I;
        null.NODE_ENV !== "production" && Co(et || y.vnode), Qn(y, !1), et ? (et.el = vt.el, wt(y, et, G)) : et = vt, J && Pn(J), (I = et.props && et.props.onVnodeBeforeUpdate) && Ee(I, lt, et, vt), Qn(y, !0), null.NODE_ENV !== "production" && an(y, "render");
        const P = Ii(y);
        null.NODE_ENV !== "production" && sn(y, "render");
        const B = y.subTree;
        y.subTree = P, null.NODE_ENV !== "production" && an(y, "patch"), b(
          B,
          P,
          u(B.el),
          qt(B),
          y,
          k,
          W
        ), null.NODE_ENV !== "production" && sn(y, "patch"), et.el = P.el, D === null && Nl(y, P.el), ot && ie(ot, k), (I = et.props && et.props.onVnodeUpdated) && ie(() => Ee(I, lt, et, vt), k), null.NODE_ENV !== "production" && Ef(y), null.NODE_ENV !== "production" && To();
      } else {
        let et;
        const { el: J, props: ot } = N, { bm: lt, m: vt, parent: D } = y, I = mr(N);
        if (Qn(y, !1), lt && Pn(lt), !I && (et = ot && ot.onVnodeBeforeMount) && Ee(et, D, N), Qn(y, !0), J && Qt) {
          const P = () => {
            null.NODE_ENV !== "production" && an(y, "render"), y.subTree = Ii(y), null.NODE_ENV !== "production" && sn(y, "render"), null.NODE_ENV !== "production" && an(y, "hydrate"), Qt(J, y.subTree, y, k, null), null.NODE_ENV !== "production" && sn(y, "hydrate");
          };
          I ? N.type.__asyncLoader().then(
            () => !y.isUnmounted && P()
          ) : P();
        } else {
          null.NODE_ENV !== "production" && an(y, "render");
          const P = y.subTree = Ii(y);
          null.NODE_ENV !== "production" && sn(y, "render"), null.NODE_ENV !== "production" && an(y, "patch"), b(null, P, M, V, y, k, W), null.NODE_ENV !== "production" && sn(y, "patch"), N.el = P.el;
        }
        if (vt && ie(vt, k), !I && (et = ot && ot.onVnodeMounted)) {
          const P = N;
          ie(() => Ee(et, D, P), k);
        }
        (N.shapeFlag & 256 || D && mr(D.vnode) && D.vnode.shapeFlag & 256) && y.a && ie(y.a, k), y.isMounted = !0, null.NODE_ENV !== "production" && Os(y), N = M = V = null;
      }
    }, z = y.effect = new oi(
      K,
      () => xa(H),
      y.scope
    ), H = y.update = () => z.run();
    H.id = y.uid, Qn(y, !0), null.NODE_ENV !== "production" && (z.onTrack = y.rtc ? (et) => Pn(y.rtc, et) : void 0, z.onTrigger = y.rtg ? (et) => Pn(y.rtg, et) : void 0, H.ownerInstance = y), H();
  }, wt = (y, N, M) => {
    N.component = y;
    const V = y.vnode.props;
    y.vnode = N, y.next = null, Qm(y, N.props, V, M), ig(y, N.children, M), Cr(), Sa(void 0, y.update), Tr();
  }, Kt = (y, N, M, V, k, W, G, K, z = !1) => {
    const H = y && y.children, et = y ? y.shapeFlag : 0, J = N.children, { patchFlag: ot, shapeFlag: lt } = N;
    if (ot > 0) {
      if (ot & 128) {
        At(H, J, M, V, k, W, G, K, z);
        return;
      } else if (ot & 256) {
        It(H, J, M, V, k, W, G, K, z);
        return;
      }
    }
    lt & 8 ? (et & 16 && Wt(H, k, W), J !== H && f(M, J)) : et & 16 ? lt & 16 ? At(H, J, M, V, k, W, G, K, z) : Wt(H, k, W, !0) : (et & 8 && f(M, ""), lt & 16 && T(J, M, V, k, W, G, K, z));
  }, It = (y, N, M, V, k, W, G, K, z) => {
    y = y || Hr, N = N || Hr;
    const H = y.length, et = N.length, J = Math.min(H, et);
    let ot;
    for (ot = 0; ot < J; ot++) {
      const lt = N[ot] = z ? In(N[ot]) : xe(N[ot]);
      b(y[ot], lt, M, null, k, W, G, K, z);
    }
    H > et ? Wt(y, k, W, !0, !1, J) : T(N, M, V, k, W, G, K, z, J);
  }, At = (y, N, M, V, k, W, G, K, z) => {
    let H = 0;
    const et = N.length;
    let J = y.length - 1, ot = et - 1;
    for (; H <= J && H <= ot; ) {
      const lt = y[H], vt = N[H] = z ? In(N[H]) : xe(N[H]);
      if (Je(lt, vt))
        b(lt, vt, M, null, k, W, G, K, z);
      else
        break;
      H++;
    }
    for (; H <= J && H <= ot; ) {
      const lt = y[J], vt = N[ot] = z ? In(N[ot]) : xe(N[ot]);
      if (Je(lt, vt))
        b(lt, vt, M, null, k, W, G, K, z);
      else
        break;
      J--, ot--;
    }
    if (H > J) {
      if (H <= ot) {
        const lt = ot + 1, vt = lt < et ? N[lt].el : V;
        for (; H <= ot; )
          b(null, N[H] = z ? In(N[H]) : xe(N[H]), M, vt, k, W, G, K, z), H++;
      }
    } else if (H > ot)
      for (; H <= J; )
        Pt(y[H], k, W, !0), H++;
    else {
      const lt = H, vt = H, D = /* @__PURE__ */ new Map();
      for (H = vt; H <= ot; H++) {
        const Et = N[H] = z ? In(N[H]) : xe(N[H]);
        Et.key != null && (null.NODE_ENV !== "production" && D.has(Et.key) && j("Duplicate keys found during update:", JSON.stringify(Et.key), "Make sure keys are unique."), D.set(Et.key, H));
      }
      let I, P = 0;
      const B = ot - vt + 1;
      let X = !1, ct = 0;
      const dt = new Array(B);
      for (H = 0; H < B; H++)
        dt[H] = 0;
      for (H = lt; H <= J; H++) {
        const Et = y[H];
        if (P >= B) {
          Pt(Et, k, W, !0);
          continue;
        }
        let it;
        if (Et.key != null)
          it = D.get(Et.key);
        else
          for (I = vt; I <= ot; I++)
            if (dt[I - vt] === 0 && Je(Et, N[I])) {
              it = I;
              break;
            }
        it === void 0 ? Pt(Et, k, W, !0) : (dt[it - vt] = H + 1, it >= ct ? ct = it : X = !0, b(Et, N[it], M, null, k, W, G, K, z), P++);
      }
      const Nt = X ? ug(dt) : Hr;
      for (I = Nt.length - 1, H = B - 1; H >= 0; H--) {
        const Et = vt + H, it = N[Et], nt = Et + 1 < et ? N[Et + 1].el : V;
        dt[H] === 0 ? b(null, it, M, nt, k, W, G, K, z) : X && (I < 0 || H !== Nt[I] ? Ut(it, M, nt, 2) : I--);
      }
    }
  }, Ut = (y, N, M, V, k = null) => {
    const { el: W, type: G, transition: K, children: z, shapeFlag: H } = y;
    if (H & 6) {
      Ut(y.component.subTree, N, M, V);
      return;
    }
    if (H & 128) {
      y.suspense.move(N, M, V);
      return;
    }
    if (H & 64) {
      G.move(y, N, M, me);
      return;
    }
    if (G === Jt) {
      r(W, N, M);
      for (let J = 0; J < z.length; J++)
        Ut(z[J], N, M, V);
      r(y.anchor, N, M);
      return;
    }
    if (G === Un) {
      S(y, N, M);
      return;
    }
    if (V !== 2 && H & 1 && K)
      if (V === 0)
        K.beforeEnter(W), r(W, N, M), ie(() => K.enter(W), k);
      else {
        const { leave: J, delayLeave: ot, afterLeave: lt } = K, vt = () => r(W, N, M), D = () => {
          J(W, () => {
            vt(), lt && lt();
          });
        };
        ot ? ot(W, vt, D) : D();
      }
    else
      r(W, N, M);
  }, Pt = (y, N, M, V = !1, k = !1) => {
    const { type: W, props: G, ref: K, children: z, dynamicChildren: H, shapeFlag: et, patchFlag: J, dirs: ot } = y;
    if (K != null && Zi(K, null, M, y, !0), et & 256) {
      N.ctx.deactivate(y);
      return;
    }
    const lt = et & 1 && ot, vt = !mr(y);
    let D;
    if (vt && (D = G && G.onVnodeBeforeUnmount) && Ee(D, N, y), et & 6)
      Lt(y.component, M, V);
    else {
      if (et & 128) {
        y.suspense.unmount(M, V);
        return;
      }
      lt && Xe(y, null, N, "beforeUnmount"), et & 64 ? y.type.remove(y, N, M, k, me, V) : H && (W !== Jt || J > 0 && J & 64) ? Wt(H, N, M, !1, !0) : (W === Jt && J & 384 || !k && et & 16) && Wt(z, N, M), V && Bt(y);
    }
    (vt && (D = G && G.onVnodeUnmounted) || lt) && ie(() => {
      D && Ee(D, N, y), lt && Xe(y, null, N, "unmounted");
    }, M);
  }, Bt = (y) => {
    const { type: N, el: M, anchor: V, transition: k } = y;
    if (N === Jt) {
      null.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && k && !k.persisted ? y.children.forEach((G) => {
        G.type === Zt ? o(G.el) : Bt(G);
      }) : Rt(M, V);
      return;
    }
    if (N === Un) {
      w(y);
      return;
    }
    const W = () => {
      o(M), k && !k.persisted && k.afterLeave && k.afterLeave();
    };
    if (y.shapeFlag & 1 && k && !k.persisted) {
      const { leave: G, delayLeave: K } = k, z = () => G(M, W);
      K ? K(y.el, W, z) : z();
    } else
      W();
  }, Rt = (y, N) => {
    let M;
    for (; y !== N; )
      M = d(y), o(y), y = M;
    o(N);
  }, Lt = (y, N, M) => {
    null.NODE_ENV !== "production" && y.type.__hmrId && nm(y);
    const { bum: V, scope: k, update: W, subTree: G, um: K } = y;
    V && Pn(V), k.stop(), W && (W.active = !1, Pt(G, y, N, M)), K && ie(K, N), ie(() => {
      y.isUnmounted = !0;
    }, N), N && N.pendingBranch && !N.isUnmounted && y.asyncDep && !y.asyncResolved && y.suspenseId === N.pendingId && (N.deps--, N.deps === 0 && N.resolve()), null.NODE_ENV !== "production" && sm(y);
  }, Wt = (y, N, M, V = !1, k = !1, W = 0) => {
    for (let G = W; G < y.length; G++)
      Pt(y[G], N, M, V, k);
  }, qt = (y) => y.shapeFlag & 6 ? qt(y.component.subTree) : y.shapeFlag & 128 ? y.suspense.next() : d(y.anchor || y.el), Re = (y, N, M) => {
    y == null ? N._vnode && Pt(N._vnode, null, null, !0) : b(N._vnode || null, y, N, null, null, null, M), Gi(), N._vnode = y;
  }, me = {
    p: b,
    um: Pt,
    m: Ut,
    r: Bt,
    mt: U,
    mc: T,
    pc: Kt,
    pbc: L,
    n: qt,
    o: t
  };
  let Me, Qt;
  return e && ([Me, Qt] = e(me)), {
    render: Re,
    hydrate: Me,
    createApp: sg(Re, Me)
  };
}
function Qn({ effect: t, update: e }, n) {
  t.allowRecurse = e.allowRecurse = n;
}
function Ro(t, e, n = !1) {
  const r = t.children, o = e.children;
  if (tt(r) && tt(o))
    for (let a = 0; a < r.length; a++) {
      const i = r[a];
      let s = o[a];
      s.shapeFlag & 1 && !s.dynamicChildren && ((s.patchFlag <= 0 || s.patchFlag === 32) && (s = o[a] = In(o[a]), s.el = i.el), n || Ro(i, s)), null.NODE_ENV !== "production" && s.type === Zt && !s.el && (s.el = i.el);
    }
}
function ug(t) {
  const e = t.slice(), n = [0];
  let r, o, a, i, s;
  const l = t.length;
  for (r = 0; r < l; r++) {
    const c = t[r];
    if (c !== 0) {
      if (o = n[n.length - 1], t[o] < c) {
        e[r] = o, n.push(r);
        continue;
      }
      for (a = 0, i = n.length - 1; a < i; )
        s = a + i >> 1, t[n[s]] < c ? a = s + 1 : i = s;
      c < t[n[a]] && (a > 0 && (e[r] = n[a - 1]), n[a] = r);
    }
  }
  for (a = n.length, i = n[a - 1]; a-- > 0; )
    n[a] = i, i = e[i];
  return n;
}
const fg = (t) => t.__isTeleport, Wr = (t) => t && (t.disabled || t.disabled === ""), Mc = (t) => typeof SVGElement < "u" && t instanceof SVGElement, Is = (t, e) => {
  const n = t && t.to;
  if (kt(n))
    if (e) {
      const r = e(n);
      return r || null.NODE_ENV !== "production" && j(`Failed to locate Teleport target with selector "${n}". Note the target element must exist before the component is mounted - i.e. the target cannot be rendered by the component itself, and ideally should be outside of the entire Vue component tree.`), r;
    } else
      return null.NODE_ENV !== "production" && j("Current renderer does not support string target for Teleports. (missing querySelector renderer option)"), null;
  else
    return null.NODE_ENV !== "production" && !n && !Wr(t) && j(`Invalid Teleport target: ${n}`), n;
}, dg = {
  __isTeleport: !0,
  null(t, e, n, r, o, a, i, s, l, c) {
    const { mc: f, pc: u, pbc: d, o: { insert: h, querySelector: m, createText: v, createComment: b } } = c, g = Wr(e.props);
    let { shapeFlag: p, children: E, dynamicChildren: x } = e;
    if (null.NODE_ENV !== "production" && Vn && (l = !1, x = null), t == null) {
      const S = e.el = null.NODE_ENV !== "production" ? b("teleport start") : v(""), w = e.anchor = null.NODE_ENV !== "production" ? b("teleport end") : v("");
      h(S, n, r), h(w, n, r);
      const C = e.target = Is(e.props, m), A = e.targetAnchor = v("");
      C ? (h(A, C), i = i || Mc(C)) : null.NODE_ENV !== "production" && !g && j("Invalid Teleport target on mount:", C, `(${typeof C})`);
      const O = (T, R) => {
        p & 16 && f(E, T, R, o, a, i, s, l);
      };
      g ? O(n, w) : C && O(C, A);
    } else {
      e.el = t.el;
      const S = e.anchor = t.anchor, w = e.target = t.target, C = e.targetAnchor = t.targetAnchor, A = Wr(t.props), O = A ? n : w, T = A ? S : C;
      if (i = i || Mc(w), x ? (d(t.dynamicChildren, x, O, o, a, i, s), Ro(t, e, !0)) : l || u(t, e, O, T, o, a, i, s, !1), g)
        A || bi(e, n, S, c, 1);
      else if ((e.props && e.props.to) !== (t.props && t.props.to)) {
        const R = e.target = Is(e.props, m);
        R ? bi(e, R, null, c, 0) : null.NODE_ENV !== "production" && j("Invalid Teleport target on update:", w, `(${typeof w})`);
      } else
        A && bi(e, w, C, c, 1);
    }
  },
  remove(t, e, n, r, { um: o, o: { remove: a } }, i) {
    const { shapeFlag: s, children: l, anchor: c, targetAnchor: f, target: u, props: d } = t;
    if (u && a(f), (i || !Wr(d)) && (a(c), s & 16))
      for (let h = 0; h < l.length; h++) {
        const m = l[h];
        o(m, e, n, !0, !!m.dynamicChildren);
      }
  },
  move: bi,
  hydrate: pg
};
function bi(t, e, n, { o: { insert: r }, m: o }, a = 2) {
  a === 0 && r(t.targetAnchor, e, n);
  const { el: i, anchor: s, shapeFlag: l, children: c, props: f } = t, u = a === 2;
  if (u && r(i, e, n), (!u || Wr(f)) && l & 16)
    for (let d = 0; d < c.length; d++)
      o(c[d], e, n, 2);
  u && r(s, e, n);
}
function pg(t, e, n, r, o, a, { o: { nextSibling: i, parentNode: s, querySelector: l } }, c) {
  const f = e.target = Is(e.props, l);
  if (f) {
    const u = f._lpa || f.firstChild;
    if (e.shapeFlag & 16)
      if (Wr(e.props))
        e.anchor = c(i(t), e, s(t), n, r, o, a), e.targetAnchor = u;
      else {
        e.anchor = i(t);
        let d = u;
        for (; d; )
          if (d = i(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
            e.targetAnchor = d, f._lpa = e.targetAnchor && i(e.targetAnchor);
            break;
          }
        c(u, e, f, n, r, o, a);
      }
  }
  return e.anchor && i(e.anchor);
}
const hg = dg, Jt = Symbol(null.NODE_ENV !== "production" ? "Fragment" : void 0), Er = Symbol(null.NODE_ENV !== "production" ? "Text" : void 0), Zt = Symbol(null.NODE_ENV !== "production" ? "Comment" : void 0), Un = Symbol(null.NODE_ENV !== "production" ? "Static" : void 0), Mo = [];
let Oe = null;
function ae(t = !1) {
  Mo.push(Oe = t ? null : []);
}
function qf() {
  Mo.pop(), Oe = Mo[Mo.length - 1] || null;
}
let xr = 1;
function As(t) {
  xr += t;
}
function td(t) {
  return t.dynamicChildren = xr > 0 ? Oe || Hr : null, qf(), xr > 0 && Oe && Oe.push(t), t;
}
function je(t, e, n, r, o, a) {
  return td(gt(t, e, n, r, o, a, !0));
}
function Zo(t, e, n, r, o) {
  return td(St(t, e, n, r, o, !0));
}
function mn(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function Je(t, e) {
  return null.NODE_ENV !== "production" && e.shapeFlag & 6 && Lr.has(e.type) ? !1 : t.type === e.type && t.key === e.key;
}
let Ps;
function mg(t) {
  Ps = t;
}
const gg = (...t) => nd(...Ps ? Ps(t, ne) : t), Pa = "__vInternal", ed = ({ key: t }) => t != null ? t : null, Ai = ({ ref: t, ref_key: e, ref_for: n }) => t != null ? kt(t) || jt(t) || st(t) ? { i: ne, r: t, k: e, f: !!n } : t : null;
function gt(t, e = null, n = null, r = 0, o = null, a = t === Jt ? 0 : 1, i = !1, s = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && ed(e),
    ref: e && Ai(e),
    scopeId: Na,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: a,
    patchFlag: r,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null
  };
  return s ? (Ll(l, n), a & 128 && t.normalize(l)) : n && (l.shapeFlag |= kt(n) ? 8 : 16), null.NODE_ENV !== "production" && l.key !== l.key && j("VNode created with invalid key (NaN). VNode type:", l.type), xr > 0 && !i && Oe && (l.patchFlag > 0 || a & 6) && l.patchFlag !== 32 && Oe.push(l), l;
}
const St = null.NODE_ENV !== "production" ? gg : nd;
function nd(t, e = null, n = null, r = 0, o = null, a = !1) {
  if ((!t || t === kf) && (null.NODE_ENV !== "production" && !t && j(`Invalid vnode type when creating vnode: ${t}.`), t = Zt), mn(t)) {
    const s = ke(t, e, !0);
    return n && Ll(s, n), xr > 0 && !a && Oe && (s.shapeFlag & 6 ? Oe[Oe.indexOf(t)] = s : Oe.push(s)), s.patchFlag |= -2, s;
  }
  if (fd(t) && (t = t.__vccOpts), e) {
    e = rd(e);
    let { class: s, style: l } = e;
    s && !kt(s) && (e.class = ni(s)), Dt(l) && (zo(l) && !tt(l) && (l = $t({}, l)), e.style = eo(l));
  }
  const i = kt(t) ? 1 : Sf(t) ? 128 : fg(t) ? 64 : Dt(t) ? 4 : st(t) ? 2 : 0;
  return null.NODE_ENV !== "production" && i & 4 && zo(t) && (t = pt(t), j("Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.", `
Component that was made reactive: `, t)), gt(t, e, n, r, o, i, a, !0);
}
function rd(t) {
  return t ? zo(t) || Pa in t ? $t({}, t) : t : null;
}
function ke(t, e, n = !1) {
  const { props: r, ref: o, patchFlag: a, children: i } = t, s = e ? id(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: s,
    key: s && ed(s),
    ref: e && e.ref ? n && o ? tt(o) ? o.concat(Ai(e)) : [o, Ai(e)] : Ai(e) : o,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: null.NODE_ENV !== "production" && a === -1 && tt(i) ? i.map(od) : i,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    patchFlag: e && t.type !== Jt ? a === -1 ? 16 : a | 16 : a,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && ke(t.ssContent),
    ssFallback: t.ssFallback && ke(t.ssFallback),
    el: t.el,
    anchor: t.anchor
  };
}
function od(t) {
  const e = ke(t);
  return tt(t.children) && (e.children = t.children.map(od)), e;
}
function Ml(t = " ", e = 0) {
  return St(Er, null, t, e);
}
function vg(t, e) {
  const n = St(Un, null, t);
  return n.staticCount = e, n;
}
function $l(t = "", e = !1) {
  return e ? (ae(), Zo(Zt, null, t)) : St(Zt, null, t);
}
function xe(t) {
  return t == null || typeof t == "boolean" ? St(Zt) : tt(t) ? St(
    Jt,
    null,
    t.slice()
  ) : typeof t == "object" ? In(t) : St(Er, null, String(t));
}
function In(t) {
  return t.el === null || t.memo ? t : ke(t);
}
function Ll(t, e) {
  let n = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (tt(e))
    n = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const o = e.default;
      o && (o._c && (o._d = !1), Ll(t, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = e._;
      !o && !(Pa in e) ? e._ctx = ne : o === 3 && ne && (ne.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    st(e) ? (e = { default: e, _ctx: ne }, n = 32) : (e = String(e), r & 64 ? (n = 16, e = [Ml(e)]) : n = 8);
  t.children = e, t.shapeFlag |= n;
}
function id(...t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    for (const o in r)
      if (o === "class")
        e.class !== r.class && (e.class = ni([e.class, r.class]));
      else if (o === "style")
        e.style = eo([e.style, r.style]);
      else if (no(o)) {
        const a = e[o], i = r[o];
        i && a !== i && !(tt(a) && a.includes(i)) && (e[o] = a ? [].concat(a, i) : i);
      } else
        o !== "" && (e[o] = r[o]);
  }
  return e;
}
function Ee(t, e, n, r = null) {
  Ie(t, e, 7, [
    n,
    r
  ]);
}
const yg = Xf();
let bg = 0;
function ad(t, e, n) {
  const r = t.type, o = (e ? e.appContext : t.appContext) || yg, a = {
    uid: bg++,
    vnode: t,
    type: r,
    parent: e,
    appContext: o,
    root: null,
    next: null,
    subTree: null,
    effect: null,
    update: null,
    scope: new dl(!0),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(o.provides),
    accessCache: null,
    renderCache: [],
    components: null,
    directives: null,
    propsOptions: Kf(r, o),
    emitsOptions: Of(r, o),
    emit: null,
    emitted: null,
    propsDefaults: Ct,
    inheritAttrs: r.inheritAttrs,
    ctx: Ct,
    data: Ct,
    props: Ct,
    attrs: Ct,
    slots: Ct,
    refs: Ct,
    setupState: Ct,
    setupContext: null,
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return null.NODE_ENV !== "production" ? a.ctx = Bm(a) : a.ctx = { _: a }, a.root = e ? e.root : a, a.emit = fm.bind(null, a), t.ce && t.ce(a), a;
}
let ee = null;
const nn = () => ee || ne, Gn = (t) => {
  ee = t, t.scope.on();
}, Bn = () => {
  ee && ee.scope.off(), ee = null;
}, Eg = /* @__PURE__ */ bn("slot,component");
function Rs(t, e) {
  const n = e.isNativeTag || Yu;
  (Eg(t) || n(t)) && j("Do not use built-in or reserved HTML elements as component id: " + t);
}
function sd(t) {
  return t.vnode.shapeFlag & 4;
}
let Jr = !1;
function ld(t, e = !1) {
  Jr = e;
  const { props: n, children: r } = t.vnode, o = sd(t);
  Jm(t, n, o, e), og(t, r);
  const a = o ? xg(t, e) : void 0;
  return Jr = !1, a;
}
function xg(t, e) {
  var n;
  const r = t.type;
  if (null.NODE_ENV !== "production") {
    if (r.name && Rs(r.name, t.appContext.config), r.components) {
      const a = Object.keys(r.components);
      for (let i = 0; i < a.length; i++)
        Rs(a[i], t.appContext.config);
    }
    if (r.directives) {
      const a = Object.keys(r.directives);
      for (let i = 0; i < a.length; i++)
        Vf(a[i]);
    }
    r.compilerOptions && Fl() && j('"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.');
  }
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = Fe(new Proxy(t.ctx, Po)), null.NODE_ENV !== "production" && Hm(t);
  const { setup: o } = r;
  if (o) {
    const a = t.setupContext = o.length > 1 ? ud(t) : null;
    Gn(t), Cr();
    const i = Ze(o, t, 0, [null.NODE_ENV !== "production" ? lr(t.props) : t.props, a]);
    if (Tr(), Bn(), ha(i)) {
      if (i.then(Bn, Bn), e)
        return i.then((s) => {
          Ms(t, s, e);
        }).catch((s) => {
          Dr(s, t, 0);
        });
      if (t.asyncDep = i, null.NODE_ENV !== "production" && !t.suspense) {
        const s = (n = r.name) !== null && n !== void 0 ? n : "Anonymous";
        j(`Component <${s}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`);
      }
    } else
      Ms(t, i, e);
  } else
    cd(t, e);
}
function Ms(t, e, n) {
  st(e) ? t.type.__ssrInlineRender ? t.ssrRender = e : t.render = e : Dt(e) ? (null.NODE_ENV !== "production" && mn(e) && j("setup() should not return VNodes directly - return a render function instead."), null.NODE_ENV !== "production" && (t.devtoolsRawSetupState = e), t.setupState = yl(e), null.NODE_ENV !== "production" && _m(t)) : null.NODE_ENV !== "production" && e !== void 0 && j(`setup() should return an object. Received: ${e === null ? "null" : typeof e}`), cd(t, n);
}
let $o, $s;
function Og(t) {
  $o = t, $s = (e) => {
    e.render._rc && (e.withProxy = new Proxy(e.ctx, Um));
  };
}
const Fl = () => !$o;
function cd(t, e, n) {
  const r = t.type;
  if (!t.render) {
    if (!e && $o && !r.render) {
      const o = r.template;
      if (o) {
        null.NODE_ENV !== "production" && an(t, "compile");
        const { isCustomElement: a, compilerOptions: i } = t.appContext.config, { delimiters: s, compilerOptions: l } = r, c = $t($t({
          isCustomElement: a,
          delimiters: s
        }, i), l);
        r.render = $o(o, c), null.NODE_ENV !== "production" && sn(t, "compile");
      }
    }
    t.render = r.render || se, $s && $s(t);
  }
  Gn(t), Cr(), Wm(t), Tr(), Bn(), null.NODE_ENV !== "production" && !r.render && t.render === se && !e && (!$o && r.template ? j('Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".') : j("Component is missing template or render function."));
}
function $c(t) {
  return new Proxy(t.attrs, null.NODE_ENV !== "production" ? {
    get(e, n) {
      return Yi(), Se(t, "get", "$attrs"), e[n];
    },
    set() {
      return j("setupContext.attrs is readonly."), !1;
    },
    deleteProperty() {
      return j("setupContext.attrs is readonly."), !1;
    }
  } : {
    get(e, n) {
      return Se(t, "get", "$attrs"), e[n];
    }
  });
}
function ud(t) {
  const e = (r) => {
    null.NODE_ENV !== "production" && t.exposed && j("expose() should be called only once per setup()."), t.exposed = r || {};
  };
  let n;
  return null.NODE_ENV !== "production" ? Object.freeze({
    get attrs() {
      return n || (n = $c(t));
    },
    get slots() {
      return lr(t.slots);
    },
    get emit() {
      return (r, ...o) => t.emit(r, ...o);
    },
    expose: e
  }) : {
    get attrs() {
      return n || (n = $c(t));
    },
    slots: t.slots,
    emit: t.emit,
    expose: e
  };
}
function Ra(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(yl(Fe(t.exposed)), {
      get(e, n) {
        if (n in e)
          return e[n];
        if (n in Xr)
          return Xr[n](t);
      }
    }));
}
const Sg = /(?:^|[-_])(\w)/g, wg = (t) => t.replace(Sg, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function qo(t, e = !0) {
  return st(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ma(t, e, n = !1) {
  let r = qo(e);
  if (!r && e.__file) {
    const o = e.__file.match(/([^/\\]+)\.\w+$/);
    o && (r = o[1]);
  }
  if (!r && t && t.parent) {
    const o = (a) => {
      for (const i in a)
        if (a[i] === e)
          return i;
    };
    r = o(t.components || t.parent.type.components) || o(t.appContext.components);
  }
  return r ? wg(r) : n ? "App" : "Anonymous";
}
function fd(t) {
  return st(t) && "__vccOpts" in t;
}
const he = (t, e) => Wh(t, e, Jr), $a = (t) => j(`${t}() is a compiler-hint helper that is only usable inside <script setup> of a single file component. Its arguments should be compiled away and passing it at runtime has no effect.`);
function Ng() {
  return null.NODE_ENV !== "production" && $a("defineProps"), null;
}
function Cg() {
  return null.NODE_ENV !== "production" && $a("defineEmits"), null;
}
function Tg(t) {
  null.NODE_ENV !== "production" && $a("defineExpose");
}
function Dg(t, e) {
  return null.NODE_ENV !== "production" && $a("withDefaults"), null;
}
function Ig() {
  return dd().slots;
}
function Ag() {
  return dd().attrs;
}
function dd() {
  const t = nn();
  return null.NODE_ENV !== "production" && !t && j("useContext() called without active instance."), t.setupContext || (t.setupContext = ud(t));
}
function Pg(t, e) {
  const n = tt(t) ? t.reduce((r, o) => (r[o] = {}, r), {}) : t;
  for (const r in e) {
    const o = n[r];
    o ? tt(o) || st(o) ? n[r] = { type: o, default: e[r] } : o.default = e[r] : o === null ? n[r] = { default: e[r] } : null.NODE_ENV !== "production" && j(`props default key "${r}" has no corresponding declaration.`);
  }
  return n;
}
function Rg(t, e) {
  const n = {};
  for (const r in t)
    e.includes(r) || Object.defineProperty(n, r, {
      enumerable: !0,
      get: () => t[r]
    });
  return n;
}
function Mg(t) {
  const e = nn();
  null.NODE_ENV !== "production" && !e && j("withAsyncContext called without active current instance. This is likely a bug.");
  let n = t();
  return Bn(), ha(n) && (n = n.catch((r) => {
    throw Gn(e), r;
  })), [n, () => Gn(e)];
}
function La(t, e, n) {
  const r = arguments.length;
  return r === 2 ? Dt(e) && !tt(e) ? mn(e) ? St(t, null, [e]) : St(t, e) : St(t, null, e) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && mn(n) && (n = [n]), St(t, e, n));
}
const pd = Symbol(null.NODE_ENV !== "production" ? "ssrContext" : ""), $g = () => {
  {
    const t = Kr(pd);
    return t || j("Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."), t;
  }
};
function Xa(t) {
  return !!(t && t.__v_isShallow);
}
function hd() {
  if (null.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#0b1bc9" }, n = { style: "color:#b62e24" }, r = { style: "color:#9d288c" }, o = {
    header(u) {
      return Dt(u) ? u.__isVue ? ["div", t, "VueInstance"] : jt(u) ? [
        "div",
        {},
        ["span", t, f(u)],
        "<",
        s(u.value),
        ">"
      ] : Ye(u) ? [
        "div",
        {},
        ["span", t, Xa(u) ? "ShallowReactive" : "Reactive"],
        "<",
        s(u),
        `>${zn(u) ? " (readonly)" : ""}`
      ] : zn(u) ? [
        "div",
        {},
        ["span", t, Xa(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        s(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...a(u.$)
        ];
    }
  };
  function a(u) {
    const d = [];
    u.type.props && u.props && d.push(i("props", pt(u.props))), u.setupState !== Ct && d.push(i("setup", u.setupState)), u.data !== Ct && d.push(i("data", pt(u.data)));
    const h = l(u, "computed");
    h && d.push(i("computed", h));
    const m = l(u, "inject");
    return m && d.push(i("injected", m)), d.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), d;
  }
  function i(u, d) {
    return d = $t({}, d), Object.keys(d).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(d).map((h) => [
          "div",
          {},
          ["span", r, h + ": "],
          s(d[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function s(u, d = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : Dt(u) ? ["object", { object: d ? pt(u) : u }] : ["span", n, String(u)];
  }
  function l(u, d) {
    const h = u.type;
    if (st(h))
      return;
    const m = {};
    for (const v in u.ctx)
      c(h, v, d) && (m[v] = u.ctx[v]);
    return m;
  }
  function c(u, d, h) {
    const m = u[h];
    if (tt(m) && m.includes(d) || Dt(m) && d in m || u.extends && c(u.extends, d, h) || u.mixins && u.mixins.some((v) => c(v, d, h)))
      return !0;
  }
  function f(u) {
    return Xa(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
function Lg(t, e, n, r) {
  const o = n[r];
  if (o && md(o, t))
    return o;
  const a = e();
  return a.memo = t.slice(), n[r] = a;
}
function md(t, e) {
  const n = t.memo;
  if (n.length != e.length)
    return !1;
  for (let r = 0; r < n.length; r++)
    if (Gr(n[r], e[r]))
      return !1;
  return xr > 0 && Oe && Oe.push(t), !0;
}
const Ls = "3.2.37", Fg = {
  createComponentInstance: ad,
  setupComponent: ld,
  renderComponentRoot: Ii,
  setCurrentRenderingInstance: Jo,
  isVNode: mn,
  normalizeVNode: xe
}, jg = Fg, Vg = null, kg = null, Ug = "http://www.w3.org/2000/svg", ar = typeof document < "u" ? document : null, Lc = ar && /* @__PURE__ */ ar.createElement("template"), Bg = {
  insert: (t, e, n) => {
    e.insertBefore(t, n || null);
  },
  remove: (t) => {
    const e = t.parentNode;
    e && e.removeChild(t);
  },
  createElement: (t, e, n, r) => {
    const o = e ? ar.createElementNS(Ug, t) : ar.createElement(t, n ? { is: n } : void 0);
    return t === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o;
  },
  createText: (t) => ar.createTextNode(t),
  createComment: (t) => ar.createComment(t),
  setText: (t, e) => {
    t.nodeValue = e;
  },
  setElementText: (t, e) => {
    t.textContent = e;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => ar.querySelector(t),
  setScopeId(t, e) {
    t.setAttribute(e, "");
  },
  cloneNode(t) {
    const e = t.cloneNode(!0);
    return "_value" in t && (e._value = t._value), e;
  },
  insertStaticContent(t, e, n, r, o, a) {
    const i = n ? n.previousSibling : e.lastChild;
    if (o && (o === a || o.nextSibling))
      for (; e.insertBefore(o.cloneNode(!0), n), !(o === a || !(o = o.nextSibling)); )
        ;
    else {
      Lc.innerHTML = r ? `<svg>${t}</svg>` : t;
      const s = Lc.content;
      if (r) {
        const l = s.firstChild;
        for (; l.firstChild; )
          s.appendChild(l.firstChild);
        s.removeChild(l);
      }
      e.insertBefore(s, n);
    }
    return [
      i ? i.nextSibling : e.firstChild,
      n ? n.previousSibling : e.lastChild
    ];
  }
};
function Hg(t, e, n) {
  const r = t._vtc;
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? t.removeAttribute("class") : n ? t.setAttribute("class", e) : t.className = e;
}
function _g(t, e, n) {
  const r = t.style, o = kt(n);
  if (n && !o) {
    for (const a in n)
      Fs(r, a, n[a]);
    if (e && !kt(e))
      for (const a in e)
        n[a] == null && Fs(r, a, "");
  } else {
    const a = r.display;
    o ? e !== n && (r.cssText = n) : e && t.removeAttribute("style"), "_vod" in t && (r.display = a);
  }
}
const Fc = /\s*!important$/;
function Fs(t, e, n) {
  if (tt(n))
    n.forEach((r) => Fs(t, e, r));
  else if (n == null && (n = ""), e.startsWith("--"))
    t.setProperty(e, n);
  else {
    const r = Kg(t, e);
    Fc.test(n) ? t.setProperty(Ve(r), n.replace(Fc, ""), "important") : t[r] = n;
  }
}
const jc = ["Webkit", "Moz", "ms"], Ja = {};
function Kg(t, e) {
  const n = Ja[e];
  if (n)
    return n;
  let r = Ae(e);
  if (r !== "filter" && r in t)
    return Ja[e] = r;
  r = _n(r);
  for (let o = 0; o < jc.length; o++) {
    const a = jc[o] + r;
    if (a in t)
      return Ja[e] = a;
  }
  return e;
}
const Vc = "http://www.w3.org/1999/xlink";
function Wg(t, e, n, r, o) {
  if (r && e.startsWith("xlink:"))
    n == null ? t.removeAttributeNS(Vc, e.slice(6, e.length)) : t.setAttributeNS(Vc, e, n);
  else {
    const a = zp(e);
    n == null || a && !zu(n) ? t.removeAttribute(e) : t.setAttribute(e, a ? "" : n);
  }
}
function zg(t, e, n, r, o, a, i) {
  if (e === "innerHTML" || e === "textContent") {
    r && i(r, o, a), t[e] = n == null ? "" : n;
    return;
  }
  if (e === "value" && t.tagName !== "PROGRESS" && !t.tagName.includes("-")) {
    t._value = n;
    const l = n == null ? "" : n;
    (t.value !== l || t.tagName === "OPTION") && (t.value = l), n == null && t.removeAttribute(e);
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const l = typeof t[e];
    l === "boolean" ? n = zu(n) : n == null && l === "string" ? (n = "", s = !0) : l === "number" && (n = 0, s = !0);
  }
  try {
    t[e] = n;
  } catch (l) {
    null.NODE_ENV !== "production" && j(`Failed setting prop "${e}" on <${t.tagName.toLowerCase()}>: value ${n} is invalid.`, l);
  }
  s && t.removeAttribute(e);
}
const [gd, Gg] = /* @__PURE__ */ (() => {
  let t = Date.now, e = !1;
  if (typeof window < "u") {
    Date.now() > document.createEvent("Event").timeStamp && (t = performance.now.bind(performance));
    const n = navigator.userAgent.match(/firefox\/(\d+)/i);
    e = !!(n && Number(n[1]) <= 53);
  }
  return [t, e];
})();
let js = 0;
const Yg = /* @__PURE__ */ Promise.resolve(), Xg = () => {
  js = 0;
}, Jg = () => js || (Yg.then(Xg), js = gd());
function fn(t, e, n, r) {
  t.addEventListener(e, n, r);
}
function Qg(t, e, n, r) {
  t.removeEventListener(e, n, r);
}
function Zg(t, e, n, r, o = null) {
  const a = t._vei || (t._vei = {}), i = a[e];
  if (r && i)
    i.value = r;
  else {
    const [s, l] = qg(e);
    if (r) {
      const c = a[e] = tv(r, o);
      fn(t, s, c, l);
    } else
      i && (Qg(t, s, i, l), a[e] = void 0);
  }
}
const kc = /(?:Once|Passive|Capture)$/;
function qg(t) {
  let e;
  if (kc.test(t)) {
    e = {};
    let n;
    for (; n = t.match(kc); )
      t = t.slice(0, t.length - n[0].length), e[n[0].toLowerCase()] = !0;
  }
  return [Ve(t.slice(2)), e];
}
function tv(t, e) {
  const n = (r) => {
    const o = r.timeStamp || gd();
    (Gg || o >= n.attached - 1) && Ie(ev(r, n.value), e, 5, [r]);
  };
  return n.value = t, n.attached = Jg(), n;
}
function ev(t, e) {
  if (tt(e)) {
    const n = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      n.call(t), t._stopped = !0;
    }, e.map((r) => (o) => !o._stopped && r && r(o));
  } else
    return e;
}
const Uc = /^on[a-z]/, nv = (t, e, n, r, o = !1, a, i, s, l) => {
  e === "class" ? Hg(t, r, o) : e === "style" ? _g(t, n, r) : no(e) ? Hi(e) || Zg(t, e, n, r, i) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : rv(t, e, r, o)) ? zg(t, e, r, a, i, s, l) : (e === "true-value" ? t._trueValue = r : e === "false-value" && (t._falseValue = r), Wg(t, e, r, o));
};
function rv(t, e, n, r) {
  return r ? !!(e === "innerHTML" || e === "textContent" || e in t && Uc.test(e) && st(n)) : e === "spellcheck" || e === "draggable" || e === "translate" || e === "form" || e === "list" && t.tagName === "INPUT" || e === "type" && t.tagName === "TEXTAREA" || Uc.test(e) && kt(n) ? !1 : e in t;
}
function jl(t, e) {
  const n = En(t);
  class r extends Fa {
    constructor(a) {
      super(n, a, e);
    }
  }
  return r.def = n, r;
}
const ov = (t) => jl(t, Ad), iv = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Fa extends iv {
  constructor(e, n = {}, r) {
    super(), this._def = e, this._props = n, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this.shadowRoot && r ? r(this._createVNode(), this.shadowRoot) : (null.NODE_ENV !== "production" && this.shadowRoot && j("Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."), this.attachShadow({ mode: "open" }));
  }
  connectedCallback() {
    this._connected = !0, this._instance || this._resolveDef();
  }
  disconnectedCallback() {
    this._connected = !1, Yo(() => {
      this._connected || (ks(null, this.shadowRoot), this._instance = null);
    });
  }
  _resolveDef() {
    if (this._resolved)
      return;
    this._resolved = !0;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    new MutationObserver((r) => {
      for (const o of r)
        this._setAttr(o.attributeName);
    }).observe(this, { attributes: !0 });
    const e = (r) => {
      const { props: o, styles: a } = r, i = !tt(o), s = o ? i ? Object.keys(o) : o : [];
      let l;
      if (i)
        for (const c in this._props) {
          const f = o[c];
          (f === Number || f && f.type === Number) && (this._props[c] = Kn(this._props[c]), (l || (l = /* @__PURE__ */ Object.create(null)))[c] = !0);
        }
      this._numberProps = l;
      for (const c of Object.keys(this))
        c[0] !== "_" && this._setProp(c, this[c], !0, !1);
      for (const c of s.map(Ae))
        Object.defineProperty(this, c, {
          get() {
            return this._getProp(c);
          },
          set(f) {
            this._setProp(c, f);
          }
        });
      this._applyStyles(a), this._update();
    }, n = this._def.__asyncLoader;
    n ? n().then(e) : e(this._def);
  }
  _setAttr(e) {
    let n = this.getAttribute(e);
    this._numberProps && this._numberProps[e] && (n = Kn(n)), this._setProp(Ae(e), n, !1);
  }
  _getProp(e) {
    return this._props[e];
  }
  _setProp(e, n, r = !0, o = !0) {
    n !== this._props[e] && (this._props[e] = n, o && this._instance && this._update(), r && (n === !0 ? this.setAttribute(Ve(e), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(Ve(e), n + "") : n || this.removeAttribute(Ve(e))));
  }
  _update() {
    ks(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const e = St(this._def, $t({}, this._props));
    return this._instance || (e.ce = (n) => {
      this._instance = n, n.isCE = !0, null.NODE_ENV !== "production" && (n.ceReload = (o) => {
        this._styles && (this._styles.forEach((a) => this.shadowRoot.removeChild(a)), this._styles.length = 0), this._applyStyles(o), this._def.__asyncLoader || (this._instance = null, this._update());
      }), n.emit = (o, ...a) => {
        this.dispatchEvent(new CustomEvent(o, {
          detail: a
        }));
      };
      let r = this;
      for (; r = r && (r.parentNode || r.host); )
        if (r instanceof Fa) {
          n.parent = r._instance;
          break;
        }
    }), e;
  }
  _applyStyles(e) {
    e && e.forEach((n) => {
      const r = document.createElement("style");
      r.textContent = n, this.shadowRoot.appendChild(r), null.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(r);
    });
  }
}
function av(t = "$style") {
  {
    const e = nn();
    if (!e)
      return null.NODE_ENV !== "production" && j("useCssModule must be called inside setup()"), Ct;
    const n = e.type.__cssModules;
    if (!n)
      return null.NODE_ENV !== "production" && j("Current instance does not have CSS modules injected."), Ct;
    const r = n[t];
    return r || (null.NODE_ENV !== "production" && j(`Current instance does not have CSS module named "${t}".`), Ct);
  }
}
function sv(t) {
  const e = nn();
  if (!e) {
    null.NODE_ENV !== "production" && j("useCssVars is called without current active component instance.");
    return;
  }
  const n = () => Vs(e.subTree, t(e.proxy));
  Cf(n), oo(() => {
    const r = new MutationObserver(n);
    r.observe(e.subTree.el.parentNode, { childList: !0 }), li(() => r.disconnect());
  });
}
function Vs(t, e) {
  if (t.shapeFlag & 128) {
    const n = t.suspense;
    t = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
      Vs(n.activeBranch, e);
    });
  }
  for (; t.component; )
    t = t.component.subTree;
  if (t.shapeFlag & 1 && t.el)
    Bc(t.el, e);
  else if (t.type === Jt)
    t.children.forEach((n) => Vs(n, e));
  else if (t.type === Un) {
    let { el: n, anchor: r } = t;
    for (; n && (Bc(n, e), n !== r); )
      n = n.nextSibling;
  }
}
function Bc(t, e) {
  if (t.nodeType === 1) {
    const n = t.style;
    for (const r in e)
      n.setProperty(`--${r}`, e[r]);
  }
}
const Cn = "transition", lo = "animation", Vl = (t, { slots: e }) => La(Dl, yd(t), e);
Vl.displayName = "Transition";
const vd = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, lv = Vl.props = /* @__PURE__ */ $t({}, Dl.props, vd), Zn = (t, e = []) => {
  tt(t) ? t.forEach((n) => n(...e)) : t && t(...e);
}, Hc = (t) => t ? tt(t) ? t.some((e) => e.length > 1) : t.length > 1 : !1;
function yd(t) {
  const e = {};
  for (const L in t)
    L in vd || (e[L] = t[L]);
  if (t.css === !1)
    return e;
  const { name: n = "v", type: r, duration: o, enterFromClass: a = `${n}-enter-from`, enterActiveClass: i = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: l = a, appearActiveClass: c = i, appearToClass: f = s, leaveFromClass: u = `${n}-leave-from`, leaveActiveClass: d = `${n}-leave-active`, leaveToClass: h = `${n}-leave-to` } = t, m = cv(o), v = m && m[0], b = m && m[1], { onBeforeEnter: g, onEnter: p, onEnterCancelled: E, onLeave: x, onLeaveCancelled: S, onBeforeAppear: w = g, onAppear: C = p, onAppearCancelled: A = E } = e, O = (L, F, $) => {
    Dn(L, F ? f : s), Dn(L, F ? c : i), $ && $();
  }, T = (L, F) => {
    L._isLeaving = !1, Dn(L, u), Dn(L, h), Dn(L, d), F && F();
  }, R = (L) => (F, $) => {
    const Q = L ? C : p, U = () => O(F, L, $);
    Zn(Q, [F, U]), _c(() => {
      Dn(F, L ? l : a), ln(F, L ? f : s), Hc(Q) || Kc(F, r, v, U);
    });
  };
  return $t(e, {
    onBeforeEnter(L) {
      Zn(g, [L]), ln(L, a), ln(L, i);
    },
    onBeforeAppear(L) {
      Zn(w, [L]), ln(L, l), ln(L, c);
    },
    onEnter: R(!1),
    onAppear: R(!0),
    onLeave(L, F) {
      L._isLeaving = !0;
      const $ = () => T(L, F);
      ln(L, u), Ed(), ln(L, d), _c(() => {
        !L._isLeaving || (Dn(L, u), ln(L, h), Hc(x) || Kc(L, r, b, $));
      }), Zn(x, [L, $]);
    },
    onEnterCancelled(L) {
      O(L, !1), Zn(E, [L]);
    },
    onAppearCancelled(L) {
      O(L, !0), Zn(A, [L]);
    },
    onLeaveCancelled(L) {
      T(L), Zn(S, [L]);
    }
  });
}
function cv(t) {
  if (t == null)
    return null;
  if (Dt(t))
    return [Qa(t.enter), Qa(t.leave)];
  {
    const e = Qa(t);
    return [e, e];
  }
}
function Qa(t) {
  const e = Kn(t);
  return null.NODE_ENV !== "production" && uv(e), e;
}
function uv(t) {
  typeof t != "number" ? j(`<transition> explicit duration is not a valid number - got ${JSON.stringify(t)}.`) : isNaN(t) && j("<transition> explicit duration is NaN - the duration expression might be incorrect.");
}
function ln(t, e) {
  e.split(/\s+/).forEach((n) => n && t.classList.add(n)), (t._vtc || (t._vtc = /* @__PURE__ */ new Set())).add(e);
}
function Dn(t, e) {
  e.split(/\s+/).forEach((r) => r && t.classList.remove(r));
  const { _vtc: n } = t;
  n && (n.delete(e), n.size || (t._vtc = void 0));
}
function _c(t) {
  requestAnimationFrame(() => {
    requestAnimationFrame(t);
  });
}
let fv = 0;
function Kc(t, e, n, r) {
  const o = t._endId = ++fv, a = () => {
    o === t._endId && r();
  };
  if (n)
    return setTimeout(a, n);
  const { type: i, timeout: s, propCount: l } = bd(t, e);
  if (!i)
    return r();
  const c = i + "end";
  let f = 0;
  const u = () => {
    t.removeEventListener(c, d), a();
  }, d = (h) => {
    h.target === t && ++f >= l && u();
  };
  setTimeout(() => {
    f < l && u();
  }, s + 1), t.addEventListener(c, d);
}
function bd(t, e) {
  const n = window.getComputedStyle(t), r = (m) => (n[m] || "").split(", "), o = r(Cn + "Delay"), a = r(Cn + "Duration"), i = Wc(o, a), s = r(lo + "Delay"), l = r(lo + "Duration"), c = Wc(s, l);
  let f = null, u = 0, d = 0;
  e === Cn ? i > 0 && (f = Cn, u = i, d = a.length) : e === lo ? c > 0 && (f = lo, u = c, d = l.length) : (u = Math.max(i, c), f = u > 0 ? i > c ? Cn : lo : null, d = f ? f === Cn ? a.length : l.length : 0);
  const h = f === Cn && /\b(transform|all)(,|$)/.test(n[Cn + "Property"]);
  return {
    type: f,
    timeout: u,
    propCount: d,
    hasTransform: h
  };
}
function Wc(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max(...e.map((n, r) => zc(n) + zc(t[r])));
}
function zc(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ed() {
  return document.body.offsetHeight;
}
const xd = /* @__PURE__ */ new WeakMap(), Od = /* @__PURE__ */ new WeakMap(), dv = {
  name: "TransitionGroup",
  props: /* @__PURE__ */ $t({}, lv, {
    tag: String,
    moveClass: String
  }),
  setup(t, { slots: e }) {
    const n = nn(), r = Tl();
    let o, a;
    return Ia(() => {
      if (!o.length)
        return;
      const i = t.moveClass || `${t.name || "v"}-move`;
      if (!vv(o[0].el, n.vnode.el, i))
        return;
      o.forEach(hv), o.forEach(mv);
      const s = o.filter(gv);
      Ed(), s.forEach((l) => {
        const c = l.el, f = c.style;
        ln(c, i), f.transform = f.webkitTransform = f.transitionDuration = "";
        const u = c._moveCb = (d) => {
          d && d.target !== c || (!d || /transform$/.test(d.propertyName)) && (c.removeEventListener("transitionend", u), c._moveCb = null, Dn(c, i));
        };
        c.addEventListener("transitionend", u);
      });
    }), () => {
      const i = pt(t), s = yd(i);
      let l = i.tag || Jt;
      o = a, a = e.default ? Ta(e.default()) : [];
      for (let c = 0; c < a.length; c++) {
        const f = a[c];
        f.key != null ? br(f, Yr(f, s, r, n)) : null.NODE_ENV !== "production" && j("<TransitionGroup> children must be keyed.");
      }
      if (o)
        for (let c = 0; c < o.length; c++) {
          const f = o[c];
          br(f, Yr(f, s, r, n)), xd.set(f, f.el.getBoundingClientRect());
        }
      return St(l, null, a);
    };
  }
}, pv = dv;
function hv(t) {
  const e = t.el;
  e._moveCb && e._moveCb(), e._enterCb && e._enterCb();
}
function mv(t) {
  Od.set(t, t.el.getBoundingClientRect());
}
function gv(t) {
  const e = xd.get(t), n = Od.get(t), r = e.left - n.left, o = e.top - n.top;
  if (r || o) {
    const a = t.el.style;
    return a.transform = a.webkitTransform = `translate(${r}px,${o}px)`, a.transitionDuration = "0s", t;
  }
}
function vv(t, e, n) {
  const r = t.cloneNode();
  t._vtc && t._vtc.forEach((i) => {
    i.split(/\s+/).forEach((s) => s && r.classList.remove(s));
  }), n.split(/\s+/).forEach((i) => i && r.classList.add(i)), r.style.display = "none";
  const o = e.nodeType === 1 ? e : e.parentNode;
  o.appendChild(r);
  const { hasTransform: a } = bd(r);
  return o.removeChild(r), a;
}
const Yn = (t) => {
  const e = t.props["onUpdate:modelValue"] || !1;
  return tt(e) ? (n) => Pn(e, n) : e;
};
function yv(t) {
  t.target.composing = !0;
}
function Gc(t) {
  const e = t.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const Qr = {
  created(t, { modifiers: { lazy: e, trim: n, number: r } }, o) {
    t._assign = Yn(o);
    const a = r || o.props && o.props.type === "number";
    fn(t, e ? "change" : "input", (i) => {
      if (i.target.composing)
        return;
      let s = t.value;
      n && (s = s.trim()), a && (s = Kn(s)), t._assign(s);
    }), n && fn(t, "change", () => {
      t.value = t.value.trim();
    }), e || (fn(t, "compositionstart", yv), fn(t, "compositionend", Gc), fn(t, "change", Gc));
  },
  mounted(t, { value: e }) {
    t.value = e == null ? "" : e;
  },
  beforeUpdate(t, { value: e, modifiers: { lazy: n, trim: r, number: o } }, a) {
    if (t._assign = Yn(a), t.composing || document.activeElement === t && t.type !== "range" && (n || r && t.value.trim() === e || (o || t.type === "number") && Kn(t.value) === e))
      return;
    const i = e == null ? "" : e;
    t.value !== i && (t.value = i);
  }
}, kl = {
  deep: !0,
  created(t, e, n) {
    t._assign = Yn(n), fn(t, "change", () => {
      const r = t._modelValue, o = Zr(t), a = t.checked, i = t._assign;
      if (tt(r)) {
        const s = pa(r, o), l = s !== -1;
        if (a && !l)
          i(r.concat(o));
        else if (!a && l) {
          const c = [...r];
          c.splice(s, 1), i(c);
        }
      } else if (Nr(r)) {
        const s = new Set(r);
        a ? s.add(o) : s.delete(o), i(s);
      } else
        i(wd(t, a));
    });
  },
  mounted: Yc,
  beforeUpdate(t, e, n) {
    t._assign = Yn(n), Yc(t, e, n);
  }
};
function Yc(t, { value: e, oldValue: n }, r) {
  t._modelValue = e, tt(e) ? t.checked = pa(e, r.props.value) > -1 : Nr(e) ? t.checked = e.has(r.props.value) : e !== n && (t.checked = Hn(e, wd(t, !0)));
}
const Ul = {
  created(t, { value: e }, n) {
    t.checked = Hn(e, n.props.value), t._assign = Yn(n), fn(t, "change", () => {
      t._assign(Zr(t));
    });
  },
  beforeUpdate(t, { value: e, oldValue: n }, r) {
    t._assign = Yn(r), e !== n && (t.checked = Hn(e, r.props.value));
  }
}, Sd = {
  deep: !0,
  created(t, { value: e, modifiers: { number: n } }, r) {
    const o = Nr(e);
    fn(t, "change", () => {
      const a = Array.prototype.filter.call(t.options, (i) => i.selected).map((i) => n ? Kn(Zr(i)) : Zr(i));
      t._assign(t.multiple ? o ? new Set(a) : a : a[0]);
    }), t._assign = Yn(r);
  },
  mounted(t, { value: e }) {
    Xc(t, e);
  },
  beforeUpdate(t, e, n) {
    t._assign = Yn(n);
  },
  updated(t, { value: e }) {
    Xc(t, e);
  }
};
function Xc(t, e) {
  const n = t.multiple;
  if (n && !tt(e) && !Nr(e)) {
    null.NODE_ENV !== "production" && j(`<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(e).slice(8, -1)}.`);
    return;
  }
  for (let r = 0, o = t.options.length; r < o; r++) {
    const a = t.options[r], i = Zr(a);
    if (n)
      tt(e) ? a.selected = pa(e, i) > -1 : a.selected = e.has(i);
    else if (Hn(Zr(a), e)) {
      t.selectedIndex !== r && (t.selectedIndex = r);
      return;
    }
  }
  !n && t.selectedIndex !== -1 && (t.selectedIndex = -1);
}
function Zr(t) {
  return "_value" in t ? t._value : t.value;
}
function wd(t, e) {
  const n = e ? "_trueValue" : "_falseValue";
  return n in t ? t[n] : e;
}
const Nd = {
  created(t, e, n) {
    Ei(t, e, n, null, "created");
  },
  mounted(t, e, n) {
    Ei(t, e, n, null, "mounted");
  },
  beforeUpdate(t, e, n, r) {
    Ei(t, e, n, r, "beforeUpdate");
  },
  updated(t, e, n, r) {
    Ei(t, e, n, r, "updated");
  }
};
function Cd(t, e) {
  switch (t) {
    case "SELECT":
      return Sd;
    case "TEXTAREA":
      return Qr;
    default:
      switch (e) {
        case "checkbox":
          return kl;
        case "radio":
          return Ul;
        default:
          return Qr;
      }
  }
}
function Ei(t, e, n, r, o) {
  const i = Cd(t.tagName, n.props && n.props.type)[o];
  i && i(t, e, n, r);
}
function bv() {
  Qr.getSSRProps = ({ value: t }) => ({ value: t }), Ul.getSSRProps = ({ value: t }, e) => {
    if (e.props && Hn(e.props.value, t))
      return { checked: !0 };
  }, kl.getSSRProps = ({ value: t }, e) => {
    if (tt(t)) {
      if (e.props && pa(t, e.props.value) > -1)
        return { checked: !0 };
    } else if (Nr(t)) {
      if (e.props && t.has(e.props.value))
        return { checked: !0 };
    } else if (t)
      return { checked: !0 };
  }, Nd.getSSRProps = (t, e) => {
    if (typeof e.type != "string")
      return;
    const n = Cd(
      e.type.toUpperCase(),
      e.props && e.props.type
    );
    if (n.getSSRProps)
      return n.getSSRProps(t, e);
  };
}
const Ev = ["ctrl", "shift", "alt", "meta"], xv = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, e) => Ev.some((n) => t[`${n}Key`] && !e.includes(n))
}, Ov = (t, e) => (n, ...r) => {
  for (let o = 0; o < e.length; o++) {
    const a = xv[e[o]];
    if (a && a(n, e))
      return;
  }
  return t(n, ...r);
}, Sv = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, wv = (t, e) => (n) => {
  if (!("key" in n))
    return;
  const r = Ve(n.key);
  if (e.some((o) => o === r || Sv[o] === r))
    return t(n);
}, Bl = {
  beforeMount(t, { value: e }, { transition: n }) {
    t._vod = t.style.display === "none" ? "" : t.style.display, n && e ? n.beforeEnter(t) : co(t, e);
  },
  mounted(t, { value: e }, { transition: n }) {
    n && e && n.enter(t);
  },
  updated(t, { value: e, oldValue: n }, { transition: r }) {
    !e != !n && (r ? e ? (r.beforeEnter(t), co(t, !0), r.enter(t)) : r.leave(t, () => {
      co(t, !1);
    }) : co(t, e));
  },
  beforeUnmount(t, { value: e }) {
    co(t, e);
  }
};
function co(t, e) {
  t.style.display = e ? t._vod : "none";
}
function Nv() {
  Bl.getSSRProps = ({ value: t }) => {
    if (!t)
      return { style: { display: "none" } };
  };
}
const Td = /* @__PURE__ */ $t({ patchProp: nv }, Bg);
let Lo, Jc = !1;
function Dd() {
  return Lo || (Lo = Jf(Td));
}
function Id() {
  return Lo = Jc ? Lo : Qf(Td), Jc = !0, Lo;
}
const ks = (...t) => {
  Dd().render(...t);
}, Ad = (...t) => {
  Id().hydrate(...t);
}, Cv = (...t) => {
  const e = Dd().createApp(...t);
  null.NODE_ENV !== "production" && (Pd(e), Rd(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const o = Md(r);
    if (!o)
      return;
    const a = e._component;
    !st(a) && !a.render && !a.template && (a.template = o.innerHTML), o.innerHTML = "";
    const i = n(o, !1, o instanceof SVGElement);
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, e;
}, Tv = (...t) => {
  const e = Id().createApp(...t);
  null.NODE_ENV !== "production" && (Pd(e), Rd(e));
  const { mount: n } = e;
  return e.mount = (r) => {
    const o = Md(r);
    if (o)
      return n(o, !0, o instanceof SVGElement);
  }, e;
};
function Pd(t) {
  Object.defineProperty(t.config, "isNativeTag", {
    value: (e) => qp(e) || th(e),
    writable: !1
  });
}
function Rd(t) {
  if (Fl()) {
    const e = t.config.isCustomElement;
    Object.defineProperty(t.config, "isCustomElement", {
      get() {
        return e;
      },
      set() {
        j("The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.");
      }
    });
    const n = t.config.compilerOptions, r = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-dom';
    Object.defineProperty(t.config, "compilerOptions", {
      get() {
        return j(r), n;
      },
      set() {
        j(r);
      }
    });
  }
}
function Md(t) {
  if (kt(t)) {
    const e = document.querySelector(t);
    return null.NODE_ENV !== "production" && !e && j(`Failed to mount app: mount target selector "${t}" returned null.`), e;
  }
  return null.NODE_ENV !== "production" && window.ShadowRoot && t instanceof window.ShadowRoot && t.mode === "closed" && j('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'), t;
}
let Qc = !1;
const Dv = () => {
  Qc || (Qc = !0, bv(), Nv());
};
function Iv() {
  hd();
}
null.NODE_ENV !== "production" && Iv();
const Av = () => {
  null.NODE_ENV !== "production" && j('Runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".');
}, Pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  compile: Av,
  EffectScope: dl,
  ReactiveEffect: oi,
  customRef: Hh,
  effect: fh,
  effectScope: pl,
  getCurrentScope: sh,
  isProxy: zo,
  isReactive: Ye,
  isReadonly: zn,
  isRef: jt,
  isShallow: Wi,
  markRaw: Fe,
  onScopeDispose: lh,
  proxyRefs: yl,
  reactive: ii,
  readonly: ml,
  ref: pr,
  shallowReactive: df,
  shallowReadonly: lr,
  shallowRef: jh,
  stop: dh,
  toRaw: pt,
  toRef: No,
  toRefs: ys,
  triggerRef: kh,
  unref: Ft,
  camelize: Ae,
  capitalize: _n,
  normalizeClass: ni,
  normalizeProps: Jp,
  normalizeStyle: eo,
  toDisplayString: Ce,
  toHandlerKey: cn,
  BaseTransition: Dl,
  Comment: Zt,
  Fragment: Jt,
  KeepAlive: Pm,
  Static: Un,
  Suspense: Em,
  Teleport: hg,
  Text: Er,
  callWithAsyncErrorHandling: Ie,
  callWithErrorHandling: Ze,
  cloneVNode: ke,
  compatUtils: kg,
  computed: he,
  createBlock: Zo,
  createCommentVNode: $l,
  createElementBlock: je,
  createElementVNode: gt,
  createHydrationRenderer: Qf,
  createPropsRestProxy: Rg,
  createRenderer: Jf,
  createSlots: jm,
  createStaticVNode: vg,
  createTextVNode: Ml,
  createVNode: St,
  defineAsyncComponent: Im,
  defineComponent: En,
  defineEmits: Cg,
  defineExpose: Tg,
  defineProps: Ng,
  get devtools() {
    return Rn;
  },
  getCurrentInstance: nn,
  getTransitionRawChildren: Ta,
  guardReactiveProps: rd,
  h: La,
  handleError: Dr,
  initCustomFormatter: hd,
  inject: Kr,
  isMemoSame: md,
  isRuntimeOnly: Fl,
  isVNode: mn,
  mergeDefaults: Pg,
  mergeProps: id,
  nextTick: Yo,
  onActivated: If,
  onBeforeMount: Rf,
  onBeforeUnmount: Aa,
  onBeforeUpdate: Mf,
  onDeactivated: Af,
  onErrorCaptured: jf,
  onMounted: oo,
  onRenderTracked: Ff,
  onRenderTriggered: Lf,
  onServerPrefetch: $f,
  onUnmounted: li,
  onUpdated: Ia,
  openBlock: ae,
  popScopeId: pm,
  provide: Nf,
  pushScopeId: dm,
  queuePostFlushCb: Oa,
  registerRuntimeCompiler: Og,
  renderList: Al,
  renderSlot: Vm,
  resolveComponent: $m,
  resolveDirective: Fm,
  resolveDynamicComponent: Lm,
  resolveFilter: Vg,
  resolveTransitionHooks: Yr,
  setBlockTracking: As,
  setDevtoolsHook: Ol,
  setTransitionHooks: br,
  ssrContextKey: pd,
  ssrUtils: jg,
  toHandlers: km,
  transformVNodeArgs: mg,
  useAttrs: Ag,
  useSSRContext: $g,
  useSlots: Ig,
  useTransitionState: Tl,
  version: Ls,
  warn: j,
  watch: kn,
  watchEffect: Nm,
  watchPostEffect: Cf,
  watchSyncEffect: Cm,
  withAsyncContext: Mg,
  withCtx: Ca,
  withDefaults: Dg,
  withDirectives: Xi,
  withMemo: Lg,
  withScopeId: hm,
  Transition: Vl,
  TransitionGroup: pv,
  VueElement: Fa,
  createApp: Cv,
  createSSRApp: Tv,
  defineCustomElement: jl,
  defineSSRCustomElement: ov,
  hydrate: Ad,
  initDirectivesForSSR: Dv,
  render: ks,
  useCssModule: av,
  useCssVars: sv,
  vModelCheckbox: kl,
  vModelDynamic: Nd,
  vModelRadio: Ul,
  vModelSelect: Sd,
  vModelText: Qr,
  vShow: Bl,
  withKeys: wv,
  withModifiers: Ov
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
function Zc(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function q(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zc(Object(n), !0).forEach(function(r) {
      $v(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Zc(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ta(t) {
  return ta = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ta(t);
}
function Rv(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function qc(t, e) {
  for (var n = 0; n < e.length; n++) {
    var r = e[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
  }
}
function Mv(t, e, n) {
  return e && qc(t.prototype, e), n && qc(t, n), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function $v(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Hl(t, e) {
  return Fv(t) || Vv(t, e) || $d(t, e) || Uv();
}
function ja(t) {
  return Lv(t) || jv(t) || $d(t) || kv();
}
function Lv(t) {
  if (Array.isArray(t))
    return Us(t);
}
function Fv(t) {
  if (Array.isArray(t))
    return t;
}
function jv(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Vv(t, e) {
  var n = t == null ? null : typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
  if (n != null) {
    var r = [], o = !0, a = !1, i, s;
    try {
      for (n = n.call(t); !(o = (i = n.next()).done) && (r.push(i.value), !(e && r.length === e)); o = !0)
        ;
    } catch (l) {
      a = !0, s = l;
    } finally {
      try {
        !o && n.return != null && n.return();
      } finally {
        if (a)
          throw s;
      }
    }
    return r;
  }
}
function $d(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Us(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Us(t, e);
  }
}
function Us(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function kv() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Uv() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var tu = function() {
}, _l = {}, Ld = {}, Fd = null, jd = {
  mark: tu,
  measure: tu
};
try {
  typeof window < "u" && (_l = window), typeof document < "u" && (Ld = document), typeof MutationObserver < "u" && (Fd = MutationObserver), typeof performance < "u" && (jd = performance);
} catch {
}
var Bv = _l.navigator || {}, eu = Bv.userAgent, nu = eu === void 0 ? "" : eu, Xn = _l, Vt = Ld, ru = Fd, xi = jd;
Xn.document;
var On = !!Vt.documentElement && !!Vt.head && typeof Vt.addEventListener == "function" && typeof Vt.createElement == "function", Vd = ~nu.indexOf("MSIE") || ~nu.indexOf("Trident/"), gn = "___FONT_AWESOME___", Bs = 16, kd = "fa", Ud = "svg-inline--fa", Or = "data-fa-i2svg", Hs = "data-fa-pseudo-element", Hv = "data-fa-pseudo-element-pending", Kl = "data-prefix", Wl = "data-icon", ou = "fontawesome-i2svg", _v = "async", Kv = ["HTML", "HEAD", "STYLE", "SCRIPT"], Bd = function() {
  try {
    return null.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), zl = {
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit",
  fa: "solid"
}, ea = {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}, Hd = {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}, Wv = {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}, zv = /fa[srltdbk]?[\-\ ]/, _d = "fa-layers-text", Gv = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i, Yv = {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}, Kd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], Xv = Kd.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Jv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], ur = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Qv = [].concat(ja(Object.keys(ea)), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", ur.GROUP, ur.SWAP_OPACITY, ur.PRIMARY, ur.SECONDARY]).concat(Kd.map(function(t) {
  return "".concat(t, "x");
})).concat(Xv.map(function(t) {
  return "w-".concat(t);
})), Wd = Xn.FontAwesomeConfig || {};
function Zv(t) {
  var e = Vt.querySelector("script[" + t + "]");
  if (e)
    return e.getAttribute(t);
}
function qv(t) {
  return t === "" ? !0 : t === "false" ? !1 : t === "true" ? !0 : t;
}
if (Vt && typeof Vt.querySelector == "function") {
  var ty = [["data-family-prefix", "familyPrefix"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  ty.forEach(function(t) {
    var e = Hl(t, 2), n = e[0], r = e[1], o = qv(Zv(n));
    o != null && (Wd[r] = o);
  });
}
var ey = {
  familyPrefix: kd,
  styleDefault: "solid",
  replacementClass: Ud,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
}, Fo = q(q({}, ey), Wd);
Fo.autoReplaceSvg || (Fo.observeMutations = !1);
var at = {};
Object.keys(Fo).forEach(function(t) {
  Object.defineProperty(at, t, {
    enumerable: !0,
    set: function(n) {
      Fo[t] = n, Pi.forEach(function(r) {
        return r(at);
      });
    },
    get: function() {
      return Fo[t];
    }
  });
});
Xn.FontAwesomeConfig = at;
var Pi = [];
function ny(t) {
  return Pi.push(t), function() {
    Pi.splice(Pi.indexOf(t), 1);
  };
}
var Tn = Bs, Qe = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function ry(t) {
  if (!(!t || !On)) {
    var e = Vt.createElement("style");
    e.setAttribute("type", "text/css"), e.innerHTML = t;
    for (var n = Vt.head.childNodes, r = null, o = n.length - 1; o > -1; o--) {
      var a = n[o], i = (a.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(i) > -1 && (r = a);
    }
    return Vt.head.insertBefore(e, r), t;
  }
}
var oy = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ti() {
  for (var t = 12, e = ""; t-- > 0; )
    e += oy[Math.random() * 62 | 0];
  return e;
}
function io(t) {
  for (var e = [], n = (t || []).length >>> 0; n--; )
    e[n] = t[n];
  return e;
}
function Gl(t) {
  return t.classList ? io(t.classList) : (t.getAttribute("class") || "").split(" ").filter(function(e) {
    return e;
  });
}
function zd(t) {
  return "".concat(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function iy(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, '="').concat(zd(t[n]), '" ');
  }, "").trim();
}
function Va(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e + "".concat(n, ": ").concat(t[n].trim(), ";");
  }, "");
}
function Yl(t) {
  return t.size !== Qe.size || t.x !== Qe.x || t.y !== Qe.y || t.rotate !== Qe.rotate || t.flipX || t.flipY;
}
function ay(t) {
  var e = t.transform, n = t.containerWidth, r = t.iconWidth, o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, a = "translate(".concat(e.x * 32, ", ").concat(e.y * 32, ") "), i = "scale(".concat(e.size / 16 * (e.flipX ? -1 : 1), ", ").concat(e.size / 16 * (e.flipY ? -1 : 1), ") "), s = "rotate(".concat(e.rotate, " 0 0)"), l = {
    transform: "".concat(a, " ").concat(i, " ").concat(s)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: l,
    path: c
  };
}
function sy(t) {
  var e = t.transform, n = t.width, r = n === void 0 ? Bs : n, o = t.height, a = o === void 0 ? Bs : o, i = t.startCentered, s = i === void 0 ? !1 : i, l = "";
  return s && Vd ? l += "translate(".concat(e.x / Tn - r / 2, "em, ").concat(e.y / Tn - a / 2, "em) ") : s ? l += "translate(calc(-50% + ".concat(e.x / Tn, "em), calc(-50% + ").concat(e.y / Tn, "em)) ") : l += "translate(".concat(e.x / Tn, "em, ").concat(e.y / Tn, "em) "), l += "scale(".concat(e.size / Tn * (e.flipX ? -1 : 1), ", ").concat(e.size / Tn * (e.flipY ? -1 : 1), ") "), l += "rotate(".concat(e.rotate, "deg) "), l;
}
var ly = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function Gd() {
  var t = kd, e = Ud, n = at.familyPrefix, r = at.replacementClass, o = ly;
  if (n !== t || r !== e) {
    var a = new RegExp("\\.".concat(t, "\\-"), "g"), i = new RegExp("\\--".concat(t, "\\-"), "g"), s = new RegExp("\\.".concat(e), "g");
    o = o.replace(a, ".".concat(n, "-")).replace(i, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
var iu = !1;
function Za() {
  at.autoAddCss && !iu && (ry(Gd()), iu = !0);
}
var cy = {
  mixout: function() {
    return {
      dom: {
        css: Gd,
        insertCss: Za
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        Za();
      },
      beforeI2svg: function() {
        Za();
      }
    };
  }
}, vn = Xn || {};
vn[gn] || (vn[gn] = {});
vn[gn].styles || (vn[gn].styles = {});
vn[gn].hooks || (vn[gn].hooks = {});
vn[gn].shims || (vn[gn].shims = []);
var Ge = vn[gn], Yd = [], uy = function t() {
  Vt.removeEventListener("DOMContentLoaded", t), na = 1, Yd.map(function(e) {
    return e();
  });
}, na = !1;
On && (na = (Vt.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(Vt.readyState), na || Vt.addEventListener("DOMContentLoaded", uy));
function fy(t) {
  !On || (na ? setTimeout(t, 0) : Yd.push(t));
}
function ci(t) {
  var e = t.tag, n = t.attributes, r = n === void 0 ? {} : n, o = t.children, a = o === void 0 ? [] : o;
  return typeof t == "string" ? zd(t) : "<".concat(e, " ").concat(iy(r), ">").concat(a.map(ci).join(""), "</").concat(e, ">");
}
function au(t, e, n) {
  if (t && t[e] && t[e][n])
    return {
      prefix: e,
      iconName: n,
      icon: t[e][n]
    };
}
var dy = function(e, n) {
  return function(r, o, a, i) {
    return e.call(n, r, o, a, i);
  };
}, qa = function(e, n, r, o) {
  var a = Object.keys(e), i = a.length, s = o !== void 0 ? dy(n, o) : n, l, c, f;
  for (r === void 0 ? (l = 1, f = e[a[0]]) : (l = 0, f = r); l < i; l++)
    c = a[l], f = s(f, e[c], c, e);
  return f;
};
function py(t) {
  for (var e = [], n = 0, r = t.length; n < r; ) {
    var o = t.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      var a = t.charCodeAt(n++);
      (a & 64512) == 56320 ? e.push(((o & 1023) << 10) + (a & 1023) + 65536) : (e.push(o), n--);
    } else
      e.push(o);
  }
  return e;
}
function _s(t) {
  var e = py(t);
  return e.length === 1 ? e[0].toString(16) : null;
}
function hy(t, e) {
  var n = t.length, r = t.charCodeAt(e), o;
  return r >= 55296 && r <= 56319 && n > e + 1 && (o = t.charCodeAt(e + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function su(t) {
  return Object.keys(t).reduce(function(e, n) {
    var r = t[n], o = !!r.icon;
    return o ? e[r.iconName] = r.icon : e[n] = r, e;
  }, {});
}
function Ks(t, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, o = r === void 0 ? !1 : r, a = su(e);
  typeof Ge.hooks.addPack == "function" && !o ? Ge.hooks.addPack(t, su(e)) : Ge.styles[t] = q(q({}, Ge.styles[t] || {}), a), t === "fas" && Ks("fa", e);
}
var jo = Ge.styles, my = Ge.shims, gy = Object.values(Hd), Xl = null, Xd = {}, Jd = {}, Qd = {}, Zd = {}, qd = {}, vy = Object.keys(zl);
function yy(t) {
  return ~Qv.indexOf(t);
}
function by(t, e) {
  var n = e.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === t && o !== "" && !yy(o) ? o : null;
}
var tp = function() {
  var e = function(a) {
    return qa(jo, function(i, s, l) {
      return i[l] = qa(s, a, {}), i;
    }, {});
  };
  Xd = e(function(o, a, i) {
    if (a[3] && (o[a[3]] = i), a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "number";
      });
      s.forEach(function(l) {
        o[l.toString(16)] = i;
      });
    }
    return o;
  }), Jd = e(function(o, a, i) {
    if (o[i] = i, a[2]) {
      var s = a[2].filter(function(l) {
        return typeof l == "string";
      });
      s.forEach(function(l) {
        o[l] = i;
      });
    }
    return o;
  }), qd = e(function(o, a, i) {
    var s = a[2];
    return o[i] = i, s.forEach(function(l) {
      o[l] = i;
    }), o;
  });
  var n = "far" in jo || at.autoFetchSvg, r = qa(my, function(o, a) {
    var i = a[0], s = a[1], l = a[2];
    return s === "far" && !n && (s = "fas"), typeof i == "string" && (o.names[i] = {
      prefix: s,
      iconName: l
    }), typeof i == "number" && (o.unicodes[i.toString(16)] = {
      prefix: s,
      iconName: l
    }), o;
  }, {
    names: {},
    unicodes: {}
  });
  Qd = r.names, Zd = r.unicodes, Xl = ka(at.styleDefault);
};
ny(function(t) {
  Xl = ka(t.styleDefault);
});
tp();
function Jl(t, e) {
  return (Xd[t] || {})[e];
}
function Ey(t, e) {
  return (Jd[t] || {})[e];
}
function Vr(t, e) {
  return (qd[t] || {})[e];
}
function ep(t) {
  return Qd[t] || {
    prefix: null,
    iconName: null
  };
}
function xy(t) {
  var e = Zd[t], n = Jl("fas", t);
  return e || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Jn() {
  return Xl;
}
var Ql = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ka(t) {
  var e = zl[t], n = ea[t] || ea[e], r = t in Ge.styles ? t : null;
  return n || r || null;
}
function Ua(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.skipLookups, r = n === void 0 ? !1 : n, o = null, a = t.reduce(function(i, s) {
    var l = by(at.familyPrefix, s);
    if (jo[s] ? (s = gy.includes(s) ? Wv[s] : s, o = s, i.prefix = s) : vy.indexOf(s) > -1 ? (o = s, i.prefix = ka(s)) : l ? i.iconName = l : s !== at.replacementClass && i.rest.push(s), !r && i.prefix && i.iconName) {
      var c = o === "fa" ? ep(i.iconName) : {}, f = Vr(i.prefix, i.iconName);
      c.prefix && (o = null), i.iconName = c.iconName || f || i.iconName, i.prefix = c.prefix || i.prefix, i.prefix === "far" && !jo.far && jo.fas && !at.autoFetchSvg && (i.prefix = "fas");
    }
    return i;
  }, Ql());
  return (a.prefix === "fa" || o === "fa") && (a.prefix = Jn() || "fas"), a;
}
var Oy = /* @__PURE__ */ function() {
  function t() {
    Rv(this, t), this.definitions = {};
  }
  return Mv(t, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, o = new Array(r), a = 0; a < r; a++)
        o[a] = arguments[a];
      var i = o.reduce(this._pullDefinitions, {});
      Object.keys(i).forEach(function(s) {
        n.definitions[s] = q(q({}, n.definitions[s] || {}), i[s]), Ks(s, i[s]);
        var l = Hd[s];
        l && Ks(l, i[s]), tp();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var o = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(o).map(function(a) {
        var i = o[a], s = i.prefix, l = i.iconName, c = i.icon, f = c[2];
        n[s] || (n[s] = {}), f.length > 0 && f.forEach(function(u) {
          typeof u == "string" && (n[s][u] = c);
        }), n[s][l] = c;
      }), n;
    }
  }]), t;
}(), lu = [], kr = {}, zr = {}, Sy = Object.keys(zr);
function wy(t, e) {
  var n = e.mixoutsTo;
  return lu = t, kr = {}, Object.keys(zr).forEach(function(r) {
    Sy.indexOf(r) === -1 && delete zr[r];
  }), lu.forEach(function(r) {
    var o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach(function(i) {
      typeof o[i] == "function" && (n[i] = o[i]), ta(o[i]) === "object" && Object.keys(o[i]).forEach(function(s) {
        n[i] || (n[i] = {}), n[i][s] = o[i][s];
      });
    }), r.hooks) {
      var a = r.hooks();
      Object.keys(a).forEach(function(i) {
        kr[i] || (kr[i] = []), kr[i].push(a[i]);
      });
    }
    r.provides && r.provides(zr);
  }), n;
}
function Ws(t, e) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  var a = kr[t] || [];
  return a.forEach(function(i) {
    e = i.apply(null, [e].concat(r));
  }), e;
}
function Sr(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  var o = kr[t] || [];
  o.forEach(function(a) {
    a.apply(null, n);
  });
}
function yn() {
  var t = arguments[0], e = Array.prototype.slice.call(arguments, 1);
  return zr[t] ? zr[t].apply(null, e) : void 0;
}
function zs(t) {
  t.prefix === "fa" && (t.prefix = "fas");
  var e = t.iconName, n = t.prefix || Jn();
  if (!!e)
    return e = Vr(n, e) || e, au(np.definitions, n, e) || au(Ge.styles, n, e);
}
var np = new Oy(), Ny = function() {
  at.autoReplaceSvg = !1, at.observeMutations = !1, Sr("noAuto");
}, Cy = {
  i2svg: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return On ? (Sr("beforeI2svg", e), yn("pseudoElements2svg", e), yn("i2svg", e)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot;
    at.autoReplaceSvg === !1 && (at.autoReplaceSvg = !0), at.observeMutations = !0, fy(function() {
      Dy({
        autoReplaceSvgRoot: n
      }), Sr("watch", e);
    });
  }
}, Ty = {
  icon: function(e) {
    if (e === null)
      return null;
    if (ta(e) === "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Vr(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      var n = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], r = ka(e[0]);
      return {
        prefix: r,
        iconName: Vr(r, n) || n
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(at.familyPrefix, "-")) > -1 || e.match(zv))) {
      var o = Ua(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: o.prefix || Jn(),
        iconName: Vr(o.prefix, o.iconName) || o.iconName
      };
    }
    if (typeof e == "string") {
      var a = Jn();
      return {
        prefix: a,
        iconName: Vr(a, e) || e
      };
    }
  }
}, Pe = {
  noAuto: Ny,
  config: at,
  dom: Cy,
  parse: Ty,
  library: np,
  findIconDefinition: zs,
  toHtml: ci
}, Dy = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = e.autoReplaceSvgRoot, r = n === void 0 ? Vt : n;
  (Object.keys(Ge.styles).length > 0 || at.autoFetchSvg) && On && at.autoReplaceSvg && Pe.dom.i2svg({
    node: r
  });
};
function Ba(t, e) {
  return Object.defineProperty(t, "abstract", {
    get: e
  }), Object.defineProperty(t, "html", {
    get: function() {
      return t.abstract.map(function(r) {
        return ci(r);
      });
    }
  }), Object.defineProperty(t, "node", {
    get: function() {
      if (!!On) {
        var r = Vt.createElement("div");
        return r.innerHTML = t.html, r.children;
      }
    }
  }), t;
}
function Iy(t) {
  var e = t.children, n = t.main, r = t.mask, o = t.attributes, a = t.styles, i = t.transform;
  if (Yl(i) && n.found && !r.found) {
    var s = n.width, l = n.height, c = {
      x: s / l / 2,
      y: 0.5
    };
    o.style = Va(q(q({}, a), {}, {
      "transform-origin": "".concat(c.x + i.x / 16, "em ").concat(c.y + i.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: o,
    children: e
  }];
}
function Ay(t) {
  var e = t.prefix, n = t.iconName, r = t.children, o = t.attributes, a = t.symbol, i = a === !0 ? "".concat(e, "-").concat(at.familyPrefix, "-").concat(n) : a;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: q(q({}, o), {}, {
        id: i
      }),
      children: r
    }]
  }];
}
function Zl(t) {
  var e = t.icons, n = e.main, r = e.mask, o = t.prefix, a = t.iconName, i = t.transform, s = t.symbol, l = t.title, c = t.maskId, f = t.titleId, u = t.extra, d = t.watchable, h = d === void 0 ? !1 : d, m = r.found ? r : n, v = m.width, b = m.height, g = o === "fak", p = [at.replacementClass, a ? "".concat(at.familyPrefix, "-").concat(a) : ""].filter(function(O) {
    return u.classes.indexOf(O) === -1;
  }).filter(function(O) {
    return O !== "" || !!O;
  }).concat(u.classes).join(" "), E = {
    children: [],
    attributes: q(q({}, u.attributes), {}, {
      "data-prefix": o,
      "data-icon": a,
      class: p,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(v, " ").concat(b)
    })
  }, x = g && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(v / b * 16 * 0.0625, "em")
  } : {};
  h && (E.attributes[Or] = ""), l && (E.children.push({
    tag: "title",
    attributes: {
      id: E.attributes["aria-labelledby"] || "title-".concat(f || ti())
    },
    children: [l]
  }), delete E.attributes.title);
  var S = q(q({}, E), {}, {
    prefix: o,
    iconName: a,
    main: n,
    mask: r,
    maskId: c,
    transform: i,
    symbol: s,
    styles: q(q({}, x), u.styles)
  }), w = r.found && n.found ? yn("generateAbstractMask", S) || {
    children: [],
    attributes: {}
  } : yn("generateAbstractIcon", S) || {
    children: [],
    attributes: {}
  }, C = w.children, A = w.attributes;
  return S.children = C, S.attributes = A, s ? Ay(S) : Iy(S);
}
function cu(t) {
  var e = t.content, n = t.width, r = t.height, o = t.transform, a = t.title, i = t.extra, s = t.watchable, l = s === void 0 ? !1 : s, c = q(q(q({}, i.attributes), a ? {
    title: a
  } : {}), {}, {
    class: i.classes.join(" ")
  });
  l && (c[Or] = "");
  var f = q({}, i.styles);
  Yl(o) && (f.transform = sy({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), f["-webkit-transform"] = f.transform);
  var u = Va(f);
  u.length > 0 && (c.style = u);
  var d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [e]
  }), a && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [a]
  }), d;
}
function Py(t) {
  var e = t.content, n = t.title, r = t.extra, o = q(q(q({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), a = Va(r.styles);
  a.length > 0 && (o.style = a);
  var i = [];
  return i.push({
    tag: "span",
    attributes: o,
    children: [e]
  }), n && i.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), i;
}
var ts = Ge.styles;
function Gs(t) {
  var e = t[0], n = t[1], r = t.slice(4), o = Hl(r, 1), a = o[0], i = null;
  return Array.isArray(a) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(at.familyPrefix, "-").concat(ur.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(at.familyPrefix, "-").concat(ur.SECONDARY),
        fill: "currentColor",
        d: a[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(at.familyPrefix, "-").concat(ur.PRIMARY),
        fill: "currentColor",
        d: a[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: a
    }
  }, {
    found: !0,
    width: e,
    height: n,
    icon: i
  };
}
var Ry = {
  found: !1,
  width: 512,
  height: 512
};
function My(t, e) {
  !Bd && !at.showMissingIcons && t && console.error('Icon with name "'.concat(t, '" and prefix "').concat(e, '" is missing.'));
}
function Ys(t, e) {
  var n = e;
  return e === "fa" && at.styleDefault !== null && (e = Jn()), new Promise(function(r, o) {
    if (yn("missingIconAbstract"), n === "fa") {
      var a = ep(t) || {};
      t = a.iconName || t, e = a.prefix || e;
    }
    if (t && e && ts[e] && ts[e][t]) {
      var i = ts[e][t];
      return r(Gs(i));
    }
    My(t, e), r(q(q({}, Ry), {}, {
      icon: at.showMissingIcons && t ? yn("missingIconAbstract") || {} : {}
    }));
  });
}
var uu = function() {
}, Xs = at.measurePerformance && xi && xi.mark && xi.measure ? xi : {
  mark: uu,
  measure: uu
}, yo = 'FA "6.1.2"', $y = function(e) {
  return Xs.mark("".concat(yo, " ").concat(e, " begins")), function() {
    return rp(e);
  };
}, rp = function(e) {
  Xs.mark("".concat(yo, " ").concat(e, " ends")), Xs.measure("".concat(yo, " ").concat(e), "".concat(yo, " ").concat(e, " begins"), "".concat(yo, " ").concat(e, " ends"));
}, ql = {
  begin: $y,
  end: rp
}, Ri = function() {
};
function fu(t) {
  var e = t.getAttribute ? t.getAttribute(Or) : null;
  return typeof e == "string";
}
function Ly(t) {
  var e = t.getAttribute ? t.getAttribute(Kl) : null, n = t.getAttribute ? t.getAttribute(Wl) : null;
  return e && n;
}
function Fy(t) {
  return t && t.classList && t.classList.contains && t.classList.contains(at.replacementClass);
}
function jy() {
  if (at.autoReplaceSvg === !0)
    return Mi.replace;
  var t = Mi[at.autoReplaceSvg];
  return t || Mi.replace;
}
function Vy(t) {
  return Vt.createElementNS("http://www.w3.org/2000/svg", t);
}
function ky(t) {
  return Vt.createElement(t);
}
function op(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = e.ceFn, r = n === void 0 ? t.tag === "svg" ? Vy : ky : n;
  if (typeof t == "string")
    return Vt.createTextNode(t);
  var o = r(t.tag);
  Object.keys(t.attributes || []).forEach(function(i) {
    o.setAttribute(i, t.attributes[i]);
  });
  var a = t.children || [];
  return a.forEach(function(i) {
    o.appendChild(op(i, {
      ceFn: r
    }));
  }), o;
}
function Uy(t) {
  var e = " ".concat(t.outerHTML, " ");
  return e = "".concat(e, "Font Awesome fontawesome.com "), e;
}
var Mi = {
  replace: function(e) {
    var n = e[0];
    if (n.parentNode)
      if (e[1].forEach(function(o) {
        n.parentNode.insertBefore(op(o), n);
      }), n.getAttribute(Or) === null && at.keepOriginalSource) {
        var r = Vt.createComment(Uy(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(e) {
    var n = e[0], r = e[1];
    if (~Gl(n).indexOf(at.replacementClass))
      return Mi.replace(e);
    var o = new RegExp("".concat(at.familyPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var a = r[0].attributes.class.split(" ").reduce(function(s, l) {
        return l === at.replacementClass || l.match(o) ? s.toSvg.push(l) : s.toNode.push(l), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = a.toSvg.join(" "), a.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", a.toNode.join(" "));
    }
    var i = r.map(function(s) {
      return ci(s);
    }).join(`
`);
    n.setAttribute(Or, ""), n.innerHTML = i;
  }
};
function du(t) {
  t();
}
function ip(t, e) {
  var n = typeof e == "function" ? e : Ri;
  if (t.length === 0)
    n();
  else {
    var r = du;
    at.mutateApproach === _v && (r = Xn.requestAnimationFrame || du), r(function() {
      var o = jy(), a = ql.begin("mutate");
      t.map(o), a(), n();
    });
  }
}
var tc = !1;
function ap() {
  tc = !0;
}
function Js() {
  tc = !1;
}
var ra = null;
function pu(t) {
  if (!!ru && !!at.observeMutations) {
    var e = t.treeCallback, n = e === void 0 ? Ri : e, r = t.nodeCallback, o = r === void 0 ? Ri : r, a = t.pseudoElementsCallback, i = a === void 0 ? Ri : a, s = t.observeMutationsRoot, l = s === void 0 ? Vt : s;
    ra = new ru(function(c) {
      if (!tc) {
        var f = Jn();
        io(c).forEach(function(u) {
          if (u.type === "childList" && u.addedNodes.length > 0 && !fu(u.addedNodes[0]) && (at.searchPseudoElements && i(u.target), n(u.target)), u.type === "attributes" && u.target.parentNode && at.searchPseudoElements && i(u.target.parentNode), u.type === "attributes" && fu(u.target) && ~Jv.indexOf(u.attributeName))
            if (u.attributeName === "class" && Ly(u.target)) {
              var d = Ua(Gl(u.target)), h = d.prefix, m = d.iconName;
              u.target.setAttribute(Kl, h || f), m && u.target.setAttribute(Wl, m);
            } else
              Fy(u.target) && o(u.target);
        });
      }
    }), On && ra.observe(l, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function By() {
  !ra || ra.disconnect();
}
function Hy(t) {
  var e = t.getAttribute("style"), n = [];
  return e && (n = e.split(";").reduce(function(r, o) {
    var a = o.split(":"), i = a[0], s = a.slice(1);
    return i && s.length > 0 && (r[i] = s.join(":").trim()), r;
  }, {})), n;
}
function _y(t) {
  var e = t.getAttribute("data-prefix"), n = t.getAttribute("data-icon"), r = t.innerText !== void 0 ? t.innerText.trim() : "", o = Ua(Gl(t));
  return o.prefix || (o.prefix = Jn()), e && n && (o.prefix = e, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = Ey(o.prefix, t.innerText) || Jl(o.prefix, _s(t.innerText))), !o.iconName && at.autoFetchSvg && t.firstChild && t.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = t.firstChild.data)), o;
}
function Ky(t) {
  var e = io(t.attributes).reduce(function(o, a) {
    return o.name !== "class" && o.name !== "style" && (o[a.name] = a.value), o;
  }, {}), n = t.getAttribute("title"), r = t.getAttribute("data-fa-title-id");
  return at.autoA11y && (n ? e["aria-labelledby"] = "".concat(at.replacementClass, "-title-").concat(r || ti()) : (e["aria-hidden"] = "true", e.focusable = "false")), e;
}
function Wy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Qe,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function hu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = _y(t), r = n.iconName, o = n.prefix, a = n.rest, i = Ky(t), s = Ws("parseNodeAttributes", {}, t), l = e.styleParser ? Hy(t) : [];
  return q({
    iconName: r,
    title: t.getAttribute("title"),
    titleId: t.getAttribute("data-fa-title-id"),
    prefix: o,
    transform: Qe,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: a,
      styles: l,
      attributes: i
    }
  }, s);
}
var zy = Ge.styles;
function sp(t) {
  var e = at.autoReplaceSvg === "nest" ? hu(t, {
    styleParser: !1
  }) : hu(t);
  return ~e.extra.classes.indexOf(_d) ? yn("generateLayersText", t, e) : yn("generateSvgReplacementMutation", t, e);
}
function mu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!On)
    return Promise.resolve();
  var n = Vt.documentElement.classList, r = function(u) {
    return n.add("".concat(ou, "-").concat(u));
  }, o = function(u) {
    return n.remove("".concat(ou, "-").concat(u));
  }, a = at.autoFetchSvg ? Object.keys(zl) : Object.keys(zy);
  a.includes("fa") || a.push("fa");
  var i = [".".concat(_d, ":not([").concat(Or, "])")].concat(a.map(function(f) {
    return ".".concat(f, ":not([").concat(Or, "])");
  })).join(", ");
  if (i.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = io(t.querySelectorAll(i));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  var l = ql.begin("onTree"), c = s.reduce(function(f, u) {
    try {
      var d = sp(u);
      d && f.push(d);
    } catch (h) {
      Bd || h.name === "MissingIcon" && console.error(h);
    }
    return f;
  }, []);
  return new Promise(function(f, u) {
    Promise.all(c).then(function(d) {
      ip(d, function() {
        r("active"), r("complete"), o("pending"), typeof e == "function" && e(), l(), f();
      });
    }).catch(function(d) {
      l(), u(d);
    });
  });
}
function Gy(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  sp(t).then(function(n) {
    n && ip([n], e);
  });
}
function Yy(t) {
  return function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (e || {}).icon ? e : zs(e || {}), o = n.mask;
    return o && (o = (o || {}).icon ? o : zs(o || {})), t(r, q(q({}, n), {}, {
      mask: o
    }));
  };
}
var Xy = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, o = r === void 0 ? Qe : r, a = n.symbol, i = a === void 0 ? !1 : a, s = n.mask, l = s === void 0 ? null : s, c = n.maskId, f = c === void 0 ? null : c, u = n.title, d = u === void 0 ? null : u, h = n.titleId, m = h === void 0 ? null : h, v = n.classes, b = v === void 0 ? [] : v, g = n.attributes, p = g === void 0 ? {} : g, E = n.styles, x = E === void 0 ? {} : E;
  if (!!e) {
    var S = e.prefix, w = e.iconName, C = e.icon;
    return Ba(q({
      type: "icon"
    }, e), function() {
      return Sr("beforeDOMElementCreation", {
        iconDefinition: e,
        params: n
      }), at.autoA11y && (d ? p["aria-labelledby"] = "".concat(at.replacementClass, "-title-").concat(m || ti()) : (p["aria-hidden"] = "true", p.focusable = "false")), Zl({
        icons: {
          main: Gs(C),
          mask: l ? Gs(l.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: S,
        iconName: w,
        transform: q(q({}, Qe), o),
        symbol: i,
        title: d,
        maskId: f,
        titleId: m,
        extra: {
          attributes: p,
          styles: x,
          classes: b
        }
      });
    });
  }
}, Jy = {
  mixout: function() {
    return {
      icon: Yy(Xy)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = mu, n.nodeCallback = Gy, n;
      }
    };
  },
  provides: function(e) {
    e.i2svg = function(n) {
      var r = n.node, o = r === void 0 ? Vt : r, a = n.callback, i = a === void 0 ? function() {
      } : a;
      return mu(o, i);
    }, e.generateSvgReplacementMutation = function(n, r) {
      var o = r.iconName, a = r.title, i = r.titleId, s = r.prefix, l = r.transform, c = r.symbol, f = r.mask, u = r.maskId, d = r.extra;
      return new Promise(function(h, m) {
        Promise.all([Ys(o, s), f.iconName ? Ys(f.iconName, f.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(v) {
          var b = Hl(v, 2), g = b[0], p = b[1];
          h([n, Zl({
            icons: {
              main: g,
              mask: p
            },
            prefix: s,
            iconName: o,
            transform: l,
            symbol: c,
            maskId: u,
            title: a,
            titleId: i,
            extra: d,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(n) {
      var r = n.children, o = n.attributes, a = n.main, i = n.transform, s = n.styles, l = Va(s);
      l.length > 0 && (o.style = l);
      var c;
      return Yl(i) && (c = yn("generateAbstractTransformGrouping", {
        main: a,
        transform: i,
        containerWidth: a.width,
        iconWidth: a.width
      })), r.push(c || a.icon), {
        children: r,
        attributes: o
      };
    };
  }
}, Qy = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.classes, a = o === void 0 ? [] : o;
        return Ba({
          type: "layer"
        }, function() {
          Sr("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var i = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(l) {
              i = i.concat(l.abstract);
            }) : i = i.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(at.familyPrefix, "-layers")].concat(ja(a)).join(" ")
            },
            children: i
          }];
        });
      }
    };
  }
}, Zy = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.title, a = o === void 0 ? null : o, i = r.classes, s = i === void 0 ? [] : i, l = r.attributes, c = l === void 0 ? {} : l, f = r.styles, u = f === void 0 ? {} : f;
        return Ba({
          type: "counter",
          content: n
        }, function() {
          return Sr("beforeDOMElementCreation", {
            content: n,
            params: r
          }), Py({
            content: n.toString(),
            title: a,
            extra: {
              attributes: c,
              styles: u,
              classes: ["".concat(at.familyPrefix, "-layers-counter")].concat(ja(s))
            }
          });
        });
      }
    };
  }
}, qy = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, o = r.transform, a = o === void 0 ? Qe : o, i = r.title, s = i === void 0 ? null : i, l = r.classes, c = l === void 0 ? [] : l, f = r.attributes, u = f === void 0 ? {} : f, d = r.styles, h = d === void 0 ? {} : d;
        return Ba({
          type: "text",
          content: n
        }, function() {
          return Sr("beforeDOMElementCreation", {
            content: n,
            params: r
          }), cu({
            content: n,
            transform: q(q({}, Qe), a),
            title: s,
            extra: {
              attributes: u,
              styles: h,
              classes: ["".concat(at.familyPrefix, "-layers-text")].concat(ja(c))
            }
          });
        });
      }
    };
  },
  provides: function(e) {
    e.generateLayersText = function(n, r) {
      var o = r.title, a = r.transform, i = r.extra, s = null, l = null;
      if (Vd) {
        var c = parseInt(getComputedStyle(n).fontSize, 10), f = n.getBoundingClientRect();
        s = f.width / c, l = f.height / c;
      }
      return at.autoA11y && !o && (i.attributes["aria-hidden"] = "true"), Promise.resolve([n, cu({
        content: n.innerHTML,
        width: s,
        height: l,
        transform: a,
        title: o,
        extra: i,
        watchable: !0
      })]);
    };
  }
}, tb = new RegExp('"', "ug"), gu = [1105920, 1112319];
function eb(t) {
  var e = t.replace(tb, ""), n = hy(e, 0), r = n >= gu[0] && n <= gu[1], o = e.length === 2 ? e[0] === e[1] : !1;
  return {
    value: _s(o ? e[0] : e),
    isSecondary: r || o
  };
}
function vu(t, e) {
  var n = "".concat(Hv).concat(e.replace(":", "-"));
  return new Promise(function(r, o) {
    if (t.getAttribute(n) !== null)
      return r();
    var a = io(t.children), i = a.filter(function(w) {
      return w.getAttribute(Hs) === e;
    })[0], s = Xn.getComputedStyle(t, e), l = s.getPropertyValue("font-family").match(Gv), c = s.getPropertyValue("font-weight"), f = s.getPropertyValue("content");
    if (i && !l)
      return t.removeChild(i), r();
    if (l && f !== "none" && f !== "") {
      var u = s.getPropertyValue("content"), d = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(l[2]) ? ea[l[2].toLowerCase()] : Yv[c], h = eb(u), m = h.value, v = h.isSecondary, b = l[0].startsWith("FontAwesome"), g = Jl(d, m), p = g;
      if (b) {
        var E = xy(m);
        E.iconName && E.prefix && (g = E.iconName, d = E.prefix);
      }
      if (g && !v && (!i || i.getAttribute(Kl) !== d || i.getAttribute(Wl) !== p)) {
        t.setAttribute(n, p), i && t.removeChild(i);
        var x = Wy(), S = x.extra;
        S.attributes[Hs] = e, Ys(g, d).then(function(w) {
          var C = Zl(q(q({}, x), {}, {
            icons: {
              main: w,
              mask: Ql()
            },
            prefix: d,
            iconName: p,
            extra: S,
            watchable: !0
          })), A = Vt.createElement("svg");
          e === "::before" ? t.insertBefore(A, t.firstChild) : t.appendChild(A), A.outerHTML = C.map(function(O) {
            return ci(O);
          }).join(`
`), t.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function nb(t) {
  return Promise.all([vu(t, "::before"), vu(t, "::after")]);
}
function rb(t) {
  return t.parentNode !== document.head && !~Kv.indexOf(t.tagName.toUpperCase()) && !t.getAttribute(Hs) && (!t.parentNode || t.parentNode.tagName !== "svg");
}
function yu(t) {
  if (!!On)
    return new Promise(function(e, n) {
      var r = io(t.querySelectorAll("*")).filter(rb).map(nb), o = ql.begin("searchPseudoElements");
      ap(), Promise.all(r).then(function() {
        o(), Js(), e();
      }).catch(function() {
        o(), Js(), n();
      });
    });
}
var ob = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = yu, n;
      }
    };
  },
  provides: function(e) {
    e.pseudoElements2svg = function(n) {
      var r = n.node, o = r === void 0 ? Vt : r;
      at.searchPseudoElements && yu(o);
    };
  }
}, bu = !1, ib = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          ap(), bu = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        pu(Ws("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        By();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        bu ? Js() : pu(Ws("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Eu = function(e) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce(function(r, o) {
    var a = o.toLowerCase().split("-"), i = a[0], s = a.slice(1).join("-");
    if (i && s === "h")
      return r.flipX = !0, r;
    if (i && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (i) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, ab = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Eu(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-transform");
        return o && (n.transform = Eu(o)), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractTransformGrouping = function(n) {
      var r = n.main, o = n.transform, a = n.containerWidth, i = n.iconWidth, s = {
        transform: "translate(".concat(a / 2, " 256)")
      }, l = "translate(".concat(o.x * 32, ", ").concat(o.y * 32, ") "), c = "scale(".concat(o.size / 16 * (o.flipX ? -1 : 1), ", ").concat(o.size / 16 * (o.flipY ? -1 : 1), ") "), f = "rotate(".concat(o.rotate, " 0 0)"), u = {
        transform: "".concat(l, " ").concat(c, " ").concat(f)
      }, d = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: q({}, h.outer),
        children: [{
          tag: "g",
          attributes: q({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: q(q({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, es = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function xu(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return t.attributes && (t.attributes.fill || e) && (t.attributes.fill = "black"), t;
}
function sb(t) {
  return t.tag === "g" ? t.children : [t];
}
var lb = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-mask"), a = o ? Ua(o.split(" ").map(function(i) {
          return i.trim();
        })) : Ql();
        return a.prefix || (a.prefix = Jn()), n.mask = a, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(e) {
    e.generateAbstractMask = function(n) {
      var r = n.children, o = n.attributes, a = n.main, i = n.mask, s = n.maskId, l = n.transform, c = a.width, f = a.icon, u = i.width, d = i.icon, h = ay({
        transform: l,
        containerWidth: u,
        iconWidth: c
      }), m = {
        tag: "rect",
        attributes: q(q({}, es), {}, {
          fill: "white"
        })
      }, v = f.children ? {
        children: f.children.map(xu)
      } : {}, b = {
        tag: "g",
        attributes: q({}, h.inner),
        children: [xu(q({
          tag: f.tag,
          attributes: q(q({}, f.attributes), h.path)
        }, v))]
      }, g = {
        tag: "g",
        attributes: q({}, h.outer),
        children: [b]
      }, p = "mask-".concat(s || ti()), E = "clip-".concat(s || ti()), x = {
        tag: "mask",
        attributes: q(q({}, es), {}, {
          id: p,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [m, g]
      }, S = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: E
          },
          children: sb(d)
        }, x]
      };
      return r.push(S, {
        tag: "rect",
        attributes: q({
          fill: "currentColor",
          "clip-path": "url(#".concat(E, ")"),
          mask: "url(#".concat(p, ")")
        }, es)
      }), {
        children: r,
        attributes: o
      };
    };
  }
}, cb = {
  provides: function(e) {
    var n = !1;
    Xn.matchMedia && (n = Xn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      var r = [], o = {
        fill: "currentColor"
      }, a = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: q(q({}, o), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var i = q(q({}, a), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: q(q({}, o), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: q(q({}, a), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: q(q({}, i), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: q(q({}, o), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: q(q({}, i), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: q(q({}, o), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: q(q({}, i), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, ub = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var o = r.getAttribute("data-fa-symbol"), a = o === null ? !1 : o === "" ? !0 : o;
        return n.symbol = a, n;
      }
    };
  }
}, fb = [cy, Jy, Qy, Zy, qy, ob, ib, ab, lb, cb, ub];
wy(fb, {
  mixoutsTo: Pe
});
Pe.noAuto;
var lp = Pe.config, db = Pe.library;
Pe.dom;
var oa = Pe.parse;
Pe.findIconDefinition;
Pe.toHtml;
var pb = Pe.icon;
Pe.layer;
var hb = Pe.text;
Pe.counter;
/*!
 * Font Awesome Free 6.1.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */
var mb = {
  prefix: "fas",
  iconName: "arrow-turn-down",
  icon: [384, 512, ["level-down"], "f149", "M342.6 374.6l-128 128C208.4 508.9 200.2 512 191.1 512s-16.38-3.125-22.63-9.375l-127.1-128c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 402.8V80C160 71.19 152.8 64 144 64H32C14.33 64 0 49.69 0 32s14.33-32 32-32h112C188.1 0 224 35.88 224 80v322.8l73.37-73.38c12.5-12.5 32.75-12.5 45.25 0S355.1 362.1 342.6 374.6z"]
}, gb = {
  prefix: "fas",
  iconName: "bars",
  icon: [448, 512, ["navicon"], "f0c9", "M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"]
}, vb = {
  prefix: "fas",
  iconName: "circle-notch",
  icon: [512, 512, [], "f1ce", "M222.7 32.15C227.7 49.08 218.1 66.9 201.1 71.94C121.8 95.55 64 169.1 64 255.1C64 362 149.1 447.1 256 447.1C362 447.1 448 362 448 255.1C448 169.1 390.2 95.55 310.9 71.94C293.9 66.9 284.3 49.08 289.3 32.15C294.4 15.21 312.2 5.562 329.1 10.6C434.9 42.07 512 139.1 512 255.1C512 397.4 397.4 511.1 256 511.1C114.6 511.1 0 397.4 0 255.1C0 139.1 77.15 42.07 182.9 10.6C199.8 5.562 217.6 15.21 222.7 32.15V32.15z"]
}, yb = {
  prefix: "fas",
  iconName: "gauge-simple-high",
  icon: [512, 512, [61668, "tachometer", "tachometer-fast"], "f62a", "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM304.7 310.4L381.3 163.1C387.4 151.3 382.8 136.8 371.1 130.7C359.3 124.6 344.8 129.2 338.7 140.9L262.1 288.3C260.1 288.1 258.1 287.1 255.1 287.1C220.7 287.1 191.1 316.7 191.1 352C191.1 387.3 220.7 416 255.1 416C291.3 416 320 387.3 320 352C320 336.1 314.2 321.6 304.7 310.4L304.7 310.4z"]
}, bb = {
  prefix: "fas",
  iconName: "gear",
  icon: [512, 512, [9881, "cog"], "f013", "M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"]
}, Eb = {
  prefix: "fas",
  iconName: "location-arrow",
  icon: [448, 512, [], "f124", "M285.6 444.1C279.8 458.3 264.8 466.3 249.8 463.4C234.8 460.4 223.1 447.3 223.1 432V256H47.1C32.71 256 19.55 245.2 16.6 230.2C13.65 215.2 21.73 200.2 35.88 194.4L387.9 50.38C399.8 45.5 413.5 48.26 422.6 57.37C431.7 66.49 434.5 80.19 429.6 92.12L285.6 444.1z"]
}, xb = {
  prefix: "fas",
  iconName: "trash-can",
  icon: [448, 512, [61460, "trash-alt"], "f2ed", "M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"]
}, Ob = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"]
};
function Ou(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ze(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ou(Object(n), !0).forEach(function(r) {
      be(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ou(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ia(t) {
  return ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ia(t);
}
function be(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Sb(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
function wb(t, e) {
  if (t == null)
    return {};
  var n = Sb(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (o = 0; o < a.length; o++)
      r = a[o], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function Qs(t) {
  return Nb(t) || Cb(t) || Tb(t) || Db();
}
function Nb(t) {
  if (Array.isArray(t))
    return Zs(t);
}
function Cb(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Tb(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Zs(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Zs(t, e);
  }
}
function Zs(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function Db() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ib = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, cp = { exports: {} };
(function(t) {
  (function(e) {
    var n = function(g, p, E) {
      if (!c(p) || u(p) || d(p) || h(p) || l(p))
        return p;
      var x, S = 0, w = 0;
      if (f(p))
        for (x = [], w = p.length; S < w; S++)
          x.push(n(g, p[S], E));
      else {
        x = {};
        for (var C in p)
          Object.prototype.hasOwnProperty.call(p, C) && (x[g(C, E)] = n(g, p[C], E));
      }
      return x;
    }, r = function(g, p) {
      p = p || {};
      var E = p.separator || "_", x = p.split || /(?=[A-Z])/;
      return g.split(x).join(E);
    }, o = function(g) {
      return m(g) ? g : (g = g.replace(/[\-_\s]+(.)?/g, function(p, E) {
        return E ? E.toUpperCase() : "";
      }), g.substr(0, 1).toLowerCase() + g.substr(1));
    }, a = function(g) {
      var p = o(g);
      return p.substr(0, 1).toUpperCase() + p.substr(1);
    }, i = function(g, p) {
      return r(g, p).toLowerCase();
    }, s = Object.prototype.toString, l = function(g) {
      return typeof g == "function";
    }, c = function(g) {
      return g === Object(g);
    }, f = function(g) {
      return s.call(g) == "[object Array]";
    }, u = function(g) {
      return s.call(g) == "[object Date]";
    }, d = function(g) {
      return s.call(g) == "[object RegExp]";
    }, h = function(g) {
      return s.call(g) == "[object Boolean]";
    }, m = function(g) {
      return g = g - 0, g === g;
    }, v = function(g, p) {
      var E = p && "null" in p ? p.process : p;
      return typeof E != "function" ? g : function(x, S) {
        return E(x, g, S);
      };
    }, b = {
      camelize: o,
      decamelize: i,
      pascalize: a,
      depascalize: i,
      camelizeKeys: function(g, p) {
        return n(v(o, p), g);
      },
      decamelizeKeys: function(g, p) {
        return n(v(i, p), g, p);
      },
      pascalizeKeys: function(g, p) {
        return n(v(a, p), g);
      },
      depascalizeKeys: function() {
        return this.decamelizeKeys.apply(this, arguments);
      }
    };
    t.exports ? t.exports = b : e.humps = b;
  })(Ib);
})(cp);
var Ab = cp.exports, Pb = ["class", "style"];
function Rb(t) {
  return t.split(";").map(function(e) {
    return e.trim();
  }).filter(function(e) {
    return e;
  }).reduce(function(e, n) {
    var r = n.indexOf(":"), o = Ab.camelize(n.slice(0, r)), a = n.slice(r + 1).trim();
    return e[o] = a, e;
  }, {});
}
function Mb(t) {
  return t.split(/\s+/).reduce(function(e, n) {
    return e[n] = !0, e;
  }, {});
}
function ec(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return ec(l);
  }), o = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var f = t.attributes[c];
    switch (c) {
      case "class":
        l.class = Mb(f);
        break;
      case "style":
        l.style = Rb(f);
        break;
      default:
        l.attrs[c] = f;
    }
    return l;
  }, {
    attrs: {},
    class: {},
    style: {}
  });
  n.class;
  var a = n.style, i = a === void 0 ? {} : a, s = wb(n, Pb);
  return La(t.tag, ze(ze(ze({}, e), {}, {
    class: o.class,
    style: ze(ze({}, o.style), i)
  }, o.attrs), s), r);
}
var up = !1;
try {
  up = null.NODE_ENV === "production";
} catch {
}
function $b() {
  if (!up && console && typeof console.error == "function") {
    var t;
    (t = console).error.apply(t, arguments);
  }
}
function Vo(t, e) {
  return Array.isArray(e) && e.length > 0 || !Array.isArray(e) && e ? be({}, t, e) : {};
}
function Lb(t) {
  var e, n = (e = {
    "fa-spin": t.spin,
    "fa-pulse": t.pulse,
    "fa-fw": t.fixedWidth,
    "fa-border": t.border,
    "fa-li": t.listItem,
    "fa-inverse": t.inverse,
    "fa-flip": t.flip === !0,
    "fa-flip-horizontal": t.flip === "horizontal" || t.flip === "both",
    "fa-flip-vertical": t.flip === "vertical" || t.flip === "both"
  }, be(e, "fa-".concat(t.size), t.size !== null), be(e, "fa-rotate-".concat(t.rotation), t.rotation !== null), be(e, "fa-pull-".concat(t.pull), t.pull !== null), be(e, "fa-swap-opacity", t.swapOpacity), be(e, "fa-bounce", t.bounce), be(e, "fa-shake", t.shake), be(e, "fa-beat", t.beat), be(e, "fa-fade", t.fade), be(e, "fa-beat-fade", t.beatFade), be(e, "fa-flash", t.flash), be(e, "fa-spin-pulse", t.spinPulse), be(e, "fa-spin-reverse", t.spinReverse), e);
  return Object.keys(n).map(function(r) {
    return n[r] ? r : null;
  }).filter(function(r) {
    return r;
  });
}
function Su(t) {
  if (t && ia(t) === "object" && t.prefix && t.iconName && t.icon)
    return t;
  if (oa.icon)
    return oa.icon(t);
  if (t === null)
    return null;
  if (ia(t) === "object" && t.prefix && t.iconName)
    return t;
  if (Array.isArray(t) && t.length === 2)
    return {
      prefix: t[0],
      iconName: t[1]
    };
  if (typeof t == "string")
    return {
      prefix: "fas",
      iconName: t
    };
}
var dn = En({
  name: "FontAwesomeIcon",
  props: {
    border: {
      type: Boolean,
      default: !1
    },
    fixedWidth: {
      type: Boolean,
      default: !1
    },
    flip: {
      type: [Boolean, String],
      default: !1,
      validator: function(e) {
        return [!0, !1, "horizontal", "vertical", "both"].indexOf(e) > -1;
      }
    },
    icon: {
      type: [Object, Array, String],
      required: !0
    },
    mask: {
      type: [Object, Array, String],
      default: null
    },
    listItem: {
      type: Boolean,
      default: !1
    },
    pull: {
      type: String,
      default: null,
      validator: function(e) {
        return ["right", "left"].indexOf(e) > -1;
      }
    },
    pulse: {
      type: Boolean,
      default: !1
    },
    rotation: {
      type: [String, Number],
      default: null,
      validator: function(e) {
        return [90, 180, 270].indexOf(Number.parseInt(e, 10)) > -1;
      }
    },
    swapOpacity: {
      type: Boolean,
      default: !1
    },
    size: {
      type: String,
      default: null,
      validator: function(e) {
        return ["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"].indexOf(e) > -1;
      }
    },
    spin: {
      type: Boolean,
      default: !1
    },
    transform: {
      type: [String, Object],
      default: null
    },
    symbol: {
      type: [Boolean, String],
      default: !1
    },
    title: {
      type: String,
      default: null
    },
    inverse: {
      type: Boolean,
      default: !1
    },
    bounce: {
      type: Boolean,
      default: !1
    },
    shake: {
      type: Boolean,
      default: !1
    },
    beat: {
      type: Boolean,
      default: !1
    },
    fade: {
      type: Boolean,
      default: !1
    },
    beatFade: {
      type: Boolean,
      default: !1
    },
    flash: {
      type: Boolean,
      default: !1
    },
    spinPulse: {
      type: Boolean,
      default: !1
    },
    spinReverse: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var r = n.attrs, o = he(function() {
      return Su(e.icon);
    }), a = he(function() {
      return Vo("classes", Lb(e));
    }), i = he(function() {
      return Vo("transform", typeof e.transform == "string" ? oa.transform(e.transform) : e.transform);
    }), s = he(function() {
      return Vo("mask", Su(e.mask));
    }), l = he(function() {
      return pb(o.value, ze(ze(ze(ze({}, a.value), i.value), s.value), {}, {
        symbol: e.symbol,
        title: e.title
      }));
    });
    kn(l, function(f) {
      if (!f)
        return $b("Could not find one or more icon(s)", o.value, s.value);
    }, {
      immediate: !0
    });
    var c = he(function() {
      return l.value ? ec(l.value.abstract[0], {}, r) : null;
    });
    return function() {
      return c.value;
    };
  }
});
En({
  name: "FontAwesomeLayers",
  props: {
    fixedWidth: {
      type: Boolean,
      default: !1
    }
  },
  setup: function(e, n) {
    var r = n.slots, o = lp.familyPrefix, a = he(function() {
      return ["".concat(o, "-layers")].concat(Qs(e.fixedWidth ? ["".concat(o, "-fw")] : []));
    });
    return function() {
      return La("div", {
        class: a.value
      }, r.default ? r.default() : []);
    };
  }
});
En({
  name: "FontAwesomeLayersText",
  props: {
    value: {
      type: [String, Number],
      default: ""
    },
    transform: {
      type: [String, Object],
      default: null
    },
    counter: {
      type: Boolean,
      default: !1
    },
    position: {
      type: String,
      default: null,
      validator: function(e) {
        return ["bottom-left", "bottom-right", "top-left", "top-right"].indexOf(e) > -1;
      }
    }
  },
  setup: function(e, n) {
    var r = n.attrs, o = lp.familyPrefix, a = he(function() {
      return Vo("classes", [].concat(Qs(e.counter ? ["".concat(o, "-layers-counter")] : []), Qs(e.position ? ["".concat(o, "-layers-").concat(e.position)] : [])));
    }), i = he(function() {
      return Vo("transform", typeof e.transform == "string" ? oa.transform(e.transform) : e.transform);
    }), s = he(function() {
      var c = hb(e.value.toString(), ze(ze({}, i.value), a.value)), f = c.abstract;
      return e.counter && (f[0].attributes.class = f[0].attributes.class.replace("fa-layers-text", "")), f[0];
    }), l = he(function() {
      return ec(s.value, {}, r);
    });
    return function() {
      return l.value;
    };
  }
});
const Fb = { class: "location-card" }, jb = { class: "location-card__name" }, Vb = { class: "location-card__temp" }, kb = ["src"], Ub = { class: "location-card__info" }, Bb = { class: "location-card__misc" }, Hb = { class: "location-card__misc_key" }, _b = { class: "location-card__misc" }, Kb = { class: "location-card__misc_key" }, Wb = { class: "location-card__misc" }, zb = /* @__PURE__ */ gt("em", { class: "location-card__misc_key" }, " Humidity: ", -1), Gb = { class: "location-card__misc" }, Yb = /* @__PURE__ */ gt("em", { class: "location-card__misc_key" }, " Dew point: ", -1), Xb = { class: "location-card__misc" }, Jb = /* @__PURE__ */ gt("em", { class: "location-card__misc_key" }, " Visibility: ", -1), Qb = { key: 1 }, Zb = {
  key: 2,
  class: "warning-message"
}, qb = /* @__PURE__ */ En({
  __name: "LocationCard",
  props: {
    profile: null
  },
  setup(t) {
    const e = t;
    return e.profile.weather && (e.profile.weather.windDeg + 180 - 45) % 360, (n, r) => (ae(), je("div", Fb, [
      gt("h1", jb, Ce(e.profile.name), 1),
      e.profile.weather ? (ae(), je(Jt, { key: 0 }, [
        gt("em", Vb, [
          gt("img", {
            class: "icon icon_weather",
            src: e.profile.weather.iconSrc
          }, null, 8, kb),
          gt("p", null, Ce(e.profile.weather.temp), 1)
        ]),
        gt("p", Ub, Ce(e.profile.weather.info), 1),
        gt("div", Bb, [
          gt("em", Hb, [
            St(Ft(dn), {
              class: "icon icon_wind",
              style: eo({ rotate: e.profile.weather.windIconDirection }),
              icon: "fa-location-arrow"
            }, null, 8, ["style"])
          ]),
          gt("p", null, Ce(e.profile.weather.wind), 1)
        ]),
        gt("div", _b, [
          gt("em", Kb, [
            St(Ft(dn), {
              class: "icon icon_pressure",
              icon: "fa-gauge-simple-high"
            })
          ]),
          gt("p", null, Ce(e.profile.weather.pressure), 1)
        ]),
        gt("div", Wb, [
          zb,
          gt("p", null, Ce(e.profile.weather.humidity), 1)
        ]),
        gt("div", Gb, [
          Yb,
          gt("p", null, Ce(e.profile.weather.dewPoint), 1)
        ]),
        gt("div", Xb, [
          Jb,
          gt("p", null, Ce(e.profile.weather.visibility), 1)
        ])
      ], 64)) : (ae(), je("p", Qb, "Loading")),
      e.profile.error ? (ae(), je("p", Zb, Ce(e.profile.error), 1)) : $l("", !0)
    ]));
  }
});
var t1 = typeof global == "object" && global && global.Object === Object && global;
const e1 = t1;
var n1 = typeof self == "object" && self && self.Object === Object && self, r1 = e1 || n1 || Function("return this")();
const nc = r1;
var o1 = nc.Symbol;
const qr = o1;
var fp = Object.prototype, i1 = fp.hasOwnProperty, a1 = fp.toString, uo = qr ? qr.toStringTag : void 0;
function s1(t) {
  var e = i1.call(t, uo), n = t[uo];
  try {
    t[uo] = void 0;
    var r = !0;
  } catch {
  }
  var o = a1.call(t);
  return r && (e ? t[uo] = n : delete t[uo]), o;
}
var l1 = Object.prototype, c1 = l1.toString;
function u1(t) {
  return c1.call(t);
}
var f1 = "[object Null]", d1 = "[object Undefined]", wu = qr ? qr.toStringTag : void 0;
function p1(t) {
  return t == null ? t === void 0 ? d1 : f1 : wu && wu in Object(t) ? s1(t) : u1(t);
}
function h1(t) {
  return t != null && typeof t == "object";
}
var m1 = "[object Symbol]";
function dp(t) {
  return typeof t == "symbol" || h1(t) && p1(t) == m1;
}
function g1(t, e) {
  for (var n = -1, r = t == null ? 0 : t.length, o = Array(r); ++n < r; )
    o[n] = e(t[n], n, t);
  return o;
}
var v1 = Array.isArray;
const y1 = v1;
var b1 = 1 / 0, Nu = qr ? qr.prototype : void 0, Cu = Nu ? Nu.toString : void 0;
function pp(t) {
  if (typeof t == "string")
    return t;
  if (y1(t))
    return g1(t, pp) + "";
  if (dp(t))
    return Cu ? Cu.call(t) : "";
  var e = t + "";
  return e == "0" && 1 / t == -b1 ? "-0" : e;
}
var E1 = /\s/;
function x1(t) {
  for (var e = t.length; e-- && E1.test(t.charAt(e)); )
    ;
  return e;
}
var O1 = /^\s+/;
function S1(t) {
  return t && t.slice(0, x1(t) + 1).replace(O1, "");
}
function qs(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Tu = 0 / 0, w1 = /^[-+]0x[0-9a-f]+$/i, N1 = /^0b[01]+$/i, C1 = /^0o[0-7]+$/i, T1 = parseInt;
function aa(t) {
  if (typeof t == "number")
    return t;
  if (dp(t))
    return Tu;
  if (qs(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = qs(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = S1(t);
  var n = N1.test(t);
  return n || C1.test(t) ? T1(t.slice(2), n ? 2 : 8) : w1.test(t) ? Tu : +t;
}
var Du = 1 / 0, D1 = 17976931348623157e292;
function I1(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = aa(t), t === Du || t === -Du) {
    var e = t < 0 ? -1 : 1;
    return e * D1;
  }
  return t === t ? t : 0;
}
function A1(t) {
  var e = I1(t), n = e % 1;
  return e === e ? n ? e - n : e : 0;
}
function Iu(t) {
  return t == null ? "" : pp(t);
}
var P1 = nc.isFinite, R1 = Math.min;
function hp(t) {
  var e = Math[t];
  return function(n, r) {
    if (n = aa(n), r = r == null ? 0 : R1(A1(r), 292), r && P1(n)) {
      var o = (Iu(n) + "e").split("e"), a = e(o[0] + "e" + (+o[1] + r));
      return o = (Iu(a) + "e").split("e"), +(o[0] + "e" + (+o[1] - r));
    }
    return e(n);
  };
}
var M1 = function() {
  return nc.Date.now();
};
const ns = M1;
var $1 = "Expected a function", L1 = Math.max, F1 = Math.min;
function j1(t, e, n) {
  var r, o, a, i, s, l, c = 0, f = !1, u = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError($1);
  e = aa(e) || 0, qs(n) && (f = !!n.leading, u = "maxWait" in n, a = u ? L1(aa(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d);
  function h(w) {
    var C = r, A = o;
    return r = o = void 0, c = w, i = t.apply(A, C), i;
  }
  function m(w) {
    return c = w, s = setTimeout(g, e), f ? h(w) : i;
  }
  function v(w) {
    var C = w - l, A = w - c, O = e - C;
    return u ? F1(O, a - A) : O;
  }
  function b(w) {
    var C = w - l, A = w - c;
    return l === void 0 || C >= e || C < 0 || u && A >= a;
  }
  function g() {
    var w = ns();
    if (b(w))
      return p(w);
    s = setTimeout(g, v(w));
  }
  function p(w) {
    return s = void 0, d && r ? h(w) : (r = o = void 0, i);
  }
  function E() {
    s !== void 0 && clearTimeout(s), c = 0, r = l = o = s = void 0;
  }
  function x() {
    return s === void 0 ? i : p(ns());
  }
  function S() {
    var w = ns(), C = b(w);
    if (r = arguments, o = this, l = w, C) {
      if (s === void 0)
        return m(l);
      if (u)
        return clearTimeout(s), s = setTimeout(g, e), h(l);
    }
    return s === void 0 && (s = setTimeout(g, e)), i;
  }
  return S.cancel = E, S.flush = x, S;
}
var V1 = hp("floor");
const k1 = V1;
var U1 = hp("round");
const gr = U1, B1 = (t, e, n) => `Feels like ${gr(t)}\xB0C. ${e[0].toUpperCase()}${e.slice(1)}. ${W1(n)}.`, H1 = (t, e) => {
  const n = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
  return `${t}m/s ` + n[k1(e / 22.5)];
}, _1 = (t) => `${(t + 180 - 45) % 360}deg`, K1 = (t, e) => gr(t - (100 - e) / 5), W1 = (t) => {
  const e = [
    { min: 0, desc: "Calm" },
    { min: 1, desc: "Light air" },
    { min: 3, desc: "Light breeze" },
    { min: 8, desc: "Gentle breeze" },
    { min: 13, desc: "Moderate breeze" },
    { min: 18, desc: "Fresh breeze" },
    { min: 25, desc: "Strong breeze" },
    { min: 31, desc: "High wind" },
    { min: 39, desc: "Fresh gale" },
    { min: 47, desc: "Strong gale" },
    { min: 55, desc: "Storm" },
    { min: 64, desc: "Violent storm" },
    { min: 73, desc: "Hurricane" }
  ], n = gr(2.23694 * t);
  return e.reduce(
    (r, o) => n >= o.min ? o.desc : r,
    "Calm"
  );
}, z1 = (t) => `${gr(t / 1e3, 1)}km`;
function G1(t) {
  return t.weather ? {
    name: t.name,
    weather: {
      iconSrc: `http://openweathermap.org/img/wn/${t.weather.icon}@2x.png`,
      temp: `${gr(t.weather.temp)}\xB0C`,
      info: B1(t.weather.feelsLike, t.weather.description, t.weather.windSpeed),
      wind: H1(t.weather.windSpeed, t.weather.windDeg),
      windDeg: gr(t.weather.windDeg - t.weather.windDeg % 45),
      windIconDirection: _1(gr(t.weather.windDeg - t.weather.windDeg % 45)),
      pressure: `${t.weather.pressure}hPa`,
      humidity: `${t.weather.humidity}%`,
      dewPoint: `${K1(t.weather.temp, t.weather.humidity)}\xB0C`,
      visibility: z1(t.weather.visibility)
    }
  } : {
    name: t.name,
    error: "Could not find weather data for this location"
  };
}
var mp = !1;
function Oi(t, e, n) {
  return Array.isArray(t) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), n) : (t[e] = n, n);
}
function rs(t, e) {
  if (Array.isArray(t)) {
    t.splice(e, 1);
    return;
  }
  delete t[e];
}
function Y1() {
  return gp().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function gp() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const X1 = typeof Proxy == "function", J1 = "devtools-plugin:setup", Q1 = "plugin:settings:set";
let Ir, tl;
function Z1() {
  var t;
  return Ir !== void 0 || (typeof window < "u" && window.performance ? (Ir = !0, tl = window.performance) : typeof global < "u" && ((t = global.perf_hooks) === null || t === void 0 ? void 0 : t.performance) ? (Ir = !0, tl = global.perf_hooks.performance) : Ir = !1), Ir;
}
function q1() {
  return Z1() ? tl.now() : Date.now();
}
class tE {
  constructor(e, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = e, this.hook = n;
    const r = {};
    if (e.settings)
      for (const i in e.settings) {
        const s = e.settings[i];
        r[i] = s.defaultValue;
      }
    const o = `__vue-devtools-plugin-settings__${e.id}`;
    let a = Object.assign({}, r);
    try {
      const i = localStorage.getItem(o), s = JSON.parse(i);
      Object.assign(a, s);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(i) {
        try {
          localStorage.setItem(o, JSON.stringify(i));
        } catch {
        }
        a = i;
      },
      now() {
        return q1();
      }
    }, n && n.on(Q1, (i, s) => {
      i === this.plugin.id && this.fallbacks.setSettings(s);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, s) => this.target ? this.target.on[s] : (...l) => {
        this.onQueue.push({
          method: s,
          args: l
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, s) => this.target ? this.target[s] : s === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(s) ? (...l) => (this.targetQueue.push({
        method: s,
        args: l,
        resolve: () => {
        }
      }), this.fallbacks[s](...l)) : (...l) => new Promise((c) => {
        this.targetQueue.push({
          method: s,
          args: l,
          resolve: c
        });
      })
    });
  }
  async setRealTarget(e) {
    this.target = e;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function vp(t, e) {
  const n = t, r = gp(), o = Y1(), a = X1 && n.enableEarlyProxy;
  if (o && (r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    o.emit(J1, t, e);
  else {
    const i = a ? new tE(n, o) : null;
    (r.__VUE_DEVTOOLS_PLUGINS__ = r.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: e,
      proxy: i
    }), i && e(i.proxiedTarget);
  }
}
/*!
  * pinia v2.0.17
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let bo;
const ei = (t) => bo = t, yp = null.NODE_ENV !== "production" ? Symbol("pinia") : Symbol();
function wr(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var qe;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(qe || (qe = {}));
const Ln = typeof window < "u", Au = /* @__PURE__ */ (() => typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null })();
function eE(t, { autoBom: e = !1 } = {}) {
  return e && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], { type: t.type }) : t;
}
function rc(t, e, n) {
  const r = new XMLHttpRequest();
  r.open("GET", t), r.responseType = "blob", r.onload = function() {
    xp(r.response, e, n);
  }, r.onerror = function() {
    console.error("could not download file");
  }, r.send();
}
function bp(t) {
  const e = new XMLHttpRequest();
  e.open("HEAD", t, !1);
  try {
    e.send();
  } catch {
  }
  return e.status >= 200 && e.status <= 299;
}
function $i(t) {
  try {
    t.dispatchEvent(new MouseEvent("click"));
  } catch {
    const n = document.createEvent("MouseEvents");
    n.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(n);
  }
}
const Li = typeof navigator == "object" ? navigator : { userAgent: "" }, Ep = /* @__PURE__ */ (() => /Macintosh/.test(Li.userAgent) && /AppleWebKit/.test(Li.userAgent) && !/Safari/.test(Li.userAgent))(), xp = Ln ? typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !Ep ? nE : "msSaveOrOpenBlob" in Li ? rE : oE : () => {
};
function nE(t, e = "download", n) {
  const r = document.createElement("a");
  r.download = e, r.rel = "noopener", typeof t == "string" ? (r.href = t, r.origin !== location.origin ? bp(r.href) ? rc(t, e, n) : (r.target = "_blank", $i(r)) : $i(r)) : (r.href = URL.createObjectURL(t), setTimeout(function() {
    URL.revokeObjectURL(r.href);
  }, 4e4), setTimeout(function() {
    $i(r);
  }, 0));
}
function rE(t, e = "download", n) {
  if (typeof t == "string")
    if (bp(t))
      rc(t, e, n);
    else {
      const r = document.createElement("a");
      r.href = t, r.target = "_blank", setTimeout(function() {
        $i(r);
      });
    }
  else
    navigator.msSaveOrOpenBlob(eE(t, n), e);
}
function oE(t, e, n, r) {
  if (r = r || open("", "_blank"), r && (r.document.title = r.document.body.innerText = "downloading..."), typeof t == "string")
    return rc(t, e, n);
  const o = t.type === "application/octet-stream", a = /constructor/i.test(String(Au.HTMLElement)) || "safari" in Au, i = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((i || o && a || Ep) && typeof FileReader < "u") {
    const s = new FileReader();
    s.onloadend = function() {
      let l = s.result;
      if (typeof l != "string")
        throw r = null, new Error("Wrong reader.result type");
      l = i ? l : l.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = l : location.assign(l), r = null;
    }, s.readAsDataURL(t);
  } else {
    const s = URL.createObjectURL(t);
    r ? r.location.assign(s) : location.href = s, r = null, setTimeout(function() {
      URL.revokeObjectURL(s);
    }, 4e4);
  }
}
function re(t, e) {
  const n = "\u{1F34D} " + t;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(n, e) : e === "error" ? console.error(n) : e === "warn" ? console.warn(n) : console.log(n);
}
function oc(t) {
  return "_a" in t && "install" in t;
}
function Op() {
  if (!("clipboard" in navigator))
    return re("Your browser doesn't support the Clipboard API", "error"), !0;
}
function Sp(t) {
  return t instanceof Error && t.message.toLowerCase().includes("document is not focused") ? (re('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function iE(t) {
  if (!Op())
    try {
      await navigator.clipboard.writeText(JSON.stringify(t.state.value)), re("Global state copied to clipboard.");
    } catch (e) {
      if (Sp(e))
        return;
      re("Failed to serialize the state. Check the console for more details.", "error"), console.error(e);
    }
}
async function aE(t) {
  if (!Op())
    try {
      t.state.value = JSON.parse(await navigator.clipboard.readText()), re("Global state pasted from clipboard.");
    } catch (e) {
      if (Sp(e))
        return;
      re("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(e);
    }
}
async function sE(t) {
  try {
    xp(new Blob([JSON.stringify(t.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (e) {
    re("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
let rn;
function lE() {
  rn || (rn = document.createElement("input"), rn.type = "file", rn.accept = ".json");
  function t() {
    return new Promise((e, n) => {
      rn.onchange = async () => {
        const r = rn.files;
        if (!r)
          return e(null);
        const o = r.item(0);
        return e(o ? { text: await o.text(), file: o } : null);
      }, rn.oncancel = () => e(null), rn.onerror = n, rn.click();
    });
  }
  return t;
}
async function cE(t) {
  try {
    const n = await (await lE())();
    if (!n)
      return;
    const { text: r, file: o } = n;
    t.state.value = JSON.parse(r), re(`Global state imported from "${o.name}".`);
  } catch (e) {
    re("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(e);
  }
}
function _e(t) {
  return {
    _custom: {
      display: t
    }
  };
}
const wp = "\u{1F34D} Pinia (root)", el = "_root";
function uE(t) {
  return oc(t) ? {
    id: el,
    label: wp
  } : {
    id: t.$id,
    label: t.$id
  };
}
function fE(t) {
  if (oc(t)) {
    const n = Array.from(t._s.keys()), r = t._s;
    return {
      state: n.map((a) => ({
        editable: !0,
        key: a,
        value: t.state.value[a]
      })),
      getters: n.filter((a) => r.get(a)._getters).map((a) => {
        const i = r.get(a);
        return {
          editable: !1,
          key: a,
          value: i._getters.reduce((s, l) => (s[l] = i[l], s), {})
        };
      })
    };
  }
  const e = {
    state: Object.keys(t.$state).map((n) => ({
      editable: !0,
      key: n,
      value: t.$state[n]
    }))
  };
  return t._getters && t._getters.length && (e.getters = t._getters.map((n) => ({
    editable: !1,
    key: n,
    value: t[n]
  }))), t._customProperties.size && (e.customProperties = Array.from(t._customProperties).map((n) => ({
    editable: !0,
    key: n,
    value: t[n]
  }))), e;
}
function dE(t) {
  return t ? Array.isArray(t) ? t.reduce((e, n) => (e.keys.push(n.key), e.operations.push(n.type), e.oldValue[n.key] = n.oldValue, e.newValue[n.key] = n.newValue, e), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: _e(t.type),
    key: _e(t.key),
    oldValue: t.oldValue,
    newValue: t.newValue
  } : {};
}
function pE(t) {
  switch (t) {
    case qe.direct:
      return "mutation";
    case qe.patchFunction:
      return "$patch";
    case qe.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Ur = !0;
const Fi = [], or = "pinia:mutations", ce = "pinia", sa = (t) => "\u{1F34D} " + t;
function hE(t, e) {
  vp({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fi,
    app: t
  }, (n) => {
    typeof n.now != "function" && re("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), n.addTimelineLayer({
      id: or,
      label: "Pinia \u{1F34D}",
      color: 15064968
    }), n.addInspector({
      id: ce,
      label: "Pinia \u{1F34D}",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            iE(e);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await aE(e), n.sendInspectorTree(ce), n.sendInspectorState(ce);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            sE(e);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await cE(e), n.sendInspectorTree(ce), n.sendInspectorState(ce);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: "Reset the state (option store only)",
          action: (r) => {
            const o = e._s.get(r);
            o ? o._isOptionsAPI ? (o.$reset(), re(`Store "${r}" reset.`)) : re(`Cannot reset "${r}" store because it's a setup store.`, "warn") : re(`Cannot reset "${r}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), n.on.inspectComponent((r, o) => {
      const a = r.componentInstance && r.componentInstance.proxy;
      if (a && a._pStores) {
        const i = r.componentInstance.proxy._pStores;
        Object.values(i).forEach((s) => {
          r.instanceData.state.push({
            type: sa(s.$id),
            key: "state",
            editable: !0,
            value: s._isOptionsAPI ? {
              _custom: {
                value: pt(s.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => s.$reset()
                  }
                ]
              }
            } : Object.keys(s.$state).reduce((l, c) => (l[c] = s.$state[c], l), {})
          }), s._getters && s._getters.length && r.instanceData.state.push({
            type: sa(s.$id),
            key: "getters",
            editable: !1,
            value: s._getters.reduce((l, c) => {
              try {
                l[c] = s[c];
              } catch (f) {
                l[c] = f;
              }
              return l;
            }, {})
          });
        });
      }
    }), n.on.getInspectorTree((r) => {
      if (r.app === t && r.inspectorId === ce) {
        let o = [e];
        o = o.concat(Array.from(e._s.values())), r.rootNodes = (r.filter ? o.filter((a) => "$id" in a ? a.$id.toLowerCase().includes(r.filter.toLowerCase()) : wp.toLowerCase().includes(r.filter.toLowerCase())) : o).map(uE);
      }
    }), n.on.getInspectorState((r) => {
      if (r.app === t && r.inspectorId === ce) {
        const o = r.nodeId === el ? e : e._s.get(r.nodeId);
        if (!o)
          return;
        o && (r.state = fE(o));
      }
    }), n.on.editInspectorState((r, o) => {
      if (r.app === t && r.inspectorId === ce) {
        const a = r.nodeId === el ? e : e._s.get(r.nodeId);
        if (!a)
          return re(`store "${r.nodeId}" not found`, "error");
        const { path: i } = r;
        oc(a) ? i.unshift("state") : (i.length !== 1 || !a._customProperties.has(i[0]) || i[0] in a.$state) && i.unshift("$state"), Ur = !1, r.set(a, i, r.state.value), Ur = !0;
      }
    }), n.on.editComponentState((r) => {
      if (r.type.startsWith("\u{1F34D}")) {
        const o = r.type.replace(/^🍍\s*/, ""), a = e._s.get(o);
        if (!a)
          return re(`store "${o}" not found`, "error");
        const { path: i } = r;
        if (i[0] !== "state")
          return re(`Invalid path for store "${o}":
${i}
Only state can be modified.`);
        i[0] = "$state", Ur = !1, r.set(a, i, r.state.value), Ur = !0;
      }
    });
  });
}
function mE(t, e) {
  Fi.includes(sa(e.$id)) || Fi.push(sa(e.$id)), vp({
    id: "dev.esm.pinia",
    label: "Pinia \u{1F34D}",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Fi,
    app: t,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
    }
  }, (n) => {
    const r = typeof n.now == "function" ? n.now.bind(n) : Date.now;
    e.$onAction(({ after: i, onError: s, name: l, args: c }) => {
      const f = Np++;
      n.addTimelineEvent({
        layerId: or,
        event: {
          time: r(),
          title: "\u{1F6EB} " + l,
          subtitle: "start",
          data: {
            store: _e(e.$id),
            action: _e(l),
            args: c
          },
          groupId: f
        }
      }), i((u) => {
        sr = void 0, n.addTimelineEvent({
          layerId: or,
          event: {
            time: r(),
            title: "\u{1F6EC} " + l,
            subtitle: "end",
            data: {
              store: _e(e.$id),
              action: _e(l),
              args: c,
              result: u
            },
            groupId: f
          }
        });
      }), s((u) => {
        sr = void 0, n.addTimelineEvent({
          layerId: or,
          event: {
            time: r(),
            logType: "error",
            title: "\u{1F4A5} " + l,
            subtitle: "end",
            data: {
              store: _e(e.$id),
              action: _e(l),
              args: c,
              error: u
            },
            groupId: f
          }
        });
      });
    }, !0), e._customProperties.forEach((i) => {
      kn(() => Ft(e[i]), (s, l) => {
        n.notifyComponentUpdate(), n.sendInspectorState(ce), Ur && n.addTimelineEvent({
          layerId: or,
          event: {
            time: r(),
            title: "Change",
            subtitle: i,
            data: {
              newValue: s,
              oldValue: l
            },
            groupId: sr
          }
        });
      }, { deep: !0 });
    }), e.$subscribe(({ events: i, type: s }, l) => {
      if (n.notifyComponentUpdate(), n.sendInspectorState(ce), !Ur)
        return;
      const c = {
        time: r(),
        title: pE(s),
        data: {
          store: _e(e.$id),
          ...dE(i)
        },
        groupId: sr
      };
      sr = void 0, s === qe.patchFunction ? c.subtitle = "\u2935\uFE0F" : s === qe.patchObject ? c.subtitle = "\u{1F9E9}" : i && !Array.isArray(i) && (c.subtitle = i.type), i && (c.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: i
        }
      }), n.addTimelineEvent({
        layerId: or,
        event: c
      });
    }, { detached: !0, flush: "sync" });
    const o = e._hotUpdate;
    e._hotUpdate = Fe((i) => {
      o(i), n.addTimelineEvent({
        layerId: or,
        event: {
          time: r(),
          title: "\u{1F525} " + e.$id,
          subtitle: "HMR update",
          data: {
            store: _e(e.$id),
            info: _e("HMR update")
          }
        }
      }), n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce);
    });
    const { $dispose: a } = e;
    e.$dispose = () => {
      a(), n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce), n.getSettings().logStoreChanges && re(`Disposed "${e.$id}" store \u{1F5D1}`);
    }, n.notifyComponentUpdate(), n.sendInspectorTree(ce), n.sendInspectorState(ce), n.getSettings().logStoreChanges && re(`"${e.$id}" store installed \u{1F195}`);
  });
}
let Np = 0, sr;
function Pu(t, e) {
  const n = e.reduce((r, o) => (r[o] = pt(t)[o], r), {});
  for (const r in n)
    t[r] = function() {
      const o = Np, a = new Proxy(t, {
        get(...i) {
          return sr = o, Reflect.get(...i);
        },
        set(...i) {
          return sr = o, Reflect.set(...i);
        }
      });
      return n[r].apply(a, arguments);
    };
}
function gE({ app: t, store: e, options: n }) {
  if (!e.$id.startsWith("__hot:")) {
    if (n.state && (e._isOptionsAPI = !0), typeof n.state == "function") {
      Pu(
        e,
        Object.keys(n.actions)
      );
      const r = e._hotUpdate;
      pt(e)._hotUpdate = function(o) {
        r.apply(this, arguments), Pu(e, Object.keys(o._hmrPayload.actions));
      };
    }
    mE(
      t,
      e
    );
  }
}
function vE() {
  const t = pl(!0), e = t.run(() => pr({}));
  let n = [], r = [];
  const o = Fe({
    install(a) {
      ei(o), o._a = a, a.provide(yp, o), a.config.globalProperties.$pinia = o, null.NODE_ENV !== "production" && Ln && hE(a, o), r.forEach((i) => n.push(i)), r = [];
    },
    use(a) {
      return !this._a && !mp ? r.push(a) : n.push(a), this;
    },
    _p: n,
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: e
  });
  return null.NODE_ENV !== "production" && Ln && null.NODE_ENV !== "test" && o.use(gE), o;
}
function Cp(t, e) {
  for (const n in e) {
    const r = e[n];
    if (!(n in t))
      continue;
    const o = t[n];
    wr(o) && wr(r) && !jt(r) && !Ye(r) ? t[n] = Cp(o, r) : t[n] = r;
  }
  return t;
}
const Tp = () => {
};
function Ru(t, e, n, r = Tp) {
  t.push(e);
  const o = () => {
    const a = t.indexOf(e);
    a > -1 && (t.splice(a, 1), r());
  };
  return !n && nn() && li(o), o;
}
function Ar(t, ...e) {
  t.slice().forEach((n) => {
    n(...e);
  });
}
function nl(t, e) {
  for (const n in e) {
    if (!e.hasOwnProperty(n))
      continue;
    const r = e[n], o = t[n];
    wr(o) && wr(r) && t.hasOwnProperty(n) && !jt(r) && !Ye(r) ? t[n] = nl(o, r) : t[n] = r;
  }
  return t;
}
const yE = null.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : Symbol();
function bE(t) {
  return !wr(t) || !t.hasOwnProperty(yE);
}
const { assign: Ke } = Object;
function Mu(t) {
  return !!(jt(t) && t.effect);
}
function $u(t, e, n, r) {
  const { state: o, actions: a, getters: i } = e, s = n.state.value[t];
  let l;
  function c() {
    !s && (null.NODE_ENV === "production" || !r) && (n.state.value[t] = o ? o() : {});
    const f = null.NODE_ENV !== "production" && r ? ys(pr(o ? o() : {}).value) : ys(n.state.value[t]);
    return Ke(f, a, Object.keys(i || {}).reduce((u, d) => (null.NODE_ENV !== "production" && d in f && console.warn(`[\u{1F34D}]: A getter cannot have the same name as another state property. Rename one of them. Found with "${d}" in store "${t}".`), u[d] = Fe(he(() => {
      ei(n);
      const h = n._s.get(t);
      return i[d].call(h, h);
    })), u), {}));
  }
  return l = rl(t, c, e, n, r, !0), l.$reset = function() {
    const u = o ? o() : {};
    this.$patch((d) => {
      Ke(d, u);
    });
  }, l;
}
function rl(t, e, n = {}, r, o, a) {
  let i;
  const s = Ke({ actions: {} }, n);
  if (null.NODE_ENV !== "production" && !r._e.active)
    throw new Error("Pinia destroyed");
  const l = {
    deep: !0
  };
  null.NODE_ENV !== "production" && !mp && (l.onTrigger = (O) => {
    c ? h = O : c == !1 && !C._hotUpdating && (Array.isArray(h) ? h.push(O) : console.error("\u{1F34D} debuggerEvents should be an array. This is most likely an internal Pinia bug."));
  });
  let c, f, u = Fe([]), d = Fe([]), h;
  const m = r.state.value[t];
  !a && !m && (null.NODE_ENV === "production" || !o) && (r.state.value[t] = {});
  const v = pr({});
  let b;
  function g(O) {
    let T;
    c = f = !1, null.NODE_ENV !== "production" && (h = []), typeof O == "function" ? (O(r.state.value[t]), T = {
      type: qe.patchFunction,
      storeId: t,
      events: h
    }) : (nl(r.state.value[t], O), T = {
      type: qe.patchObject,
      payload: O,
      storeId: t,
      events: h
    });
    const R = b = Symbol();
    Yo().then(() => {
      b === R && (c = !0);
    }), f = !0, Ar(u, T, r.state.value[t]);
  }
  const p = null.NODE_ENV !== "production" ? () => {
    throw new Error(`\u{1F34D}: Store "${t}" is built using the setup syntax and does not implement $reset().`);
  } : Tp;
  function E() {
    i.stop(), u = [], d = [], r._s.delete(t);
  }
  function x(O, T) {
    return function() {
      ei(r);
      const R = Array.from(arguments), L = [], F = [];
      function $(_) {
        L.push(_);
      }
      function Q(_) {
        F.push(_);
      }
      Ar(d, {
        args: R,
        name: O,
        store: C,
        after: $,
        onError: Q
      });
      let U;
      try {
        U = T.apply(this && this.$id === t ? this : C, R);
      } catch (_) {
        throw Ar(F, _), _;
      }
      return U instanceof Promise ? U.then((_) => (Ar(L, _), _)).catch((_) => (Ar(F, _), Promise.reject(_))) : (Ar(L, U), U);
    };
  }
  const S = /* @__PURE__ */ Fe({
    actions: {},
    getters: {},
    state: [],
    hotState: v
  }), w = {
    _p: r,
    $id: t,
    $onAction: Ru.bind(null, d),
    $patch: g,
    $reset: p,
    $subscribe(O, T = {}) {
      const R = Ru(u, O, T.detached, () => L()), L = i.run(() => kn(() => r.state.value[t], (F) => {
        (T.flush === "sync" ? f : c) && O({
          storeId: t,
          type: qe.direct,
          events: h
        }, F);
      }, Ke({}, l, T)));
      return R;
    },
    $dispose: E
  }, C = ii(Ke(
    null.NODE_ENV !== "production" && Ln ? {
      _customProperties: Fe(/* @__PURE__ */ new Set()),
      _hmrPayload: S
    } : {},
    w
  ));
  r._s.set(t, C);
  const A = r._e.run(() => (i = pl(), i.run(() => e())));
  for (const O in A) {
    const T = A[O];
    if (jt(T) && !Mu(T) || Ye(T))
      null.NODE_ENV !== "production" && o ? Oi(v.value, O, No(A, O)) : a || (m && bE(T) && (jt(T) ? T.value = m[O] : nl(T, m[O])), r.state.value[t][O] = T), null.NODE_ENV !== "production" && S.state.push(O);
    else if (typeof T == "function") {
      const R = null.NODE_ENV !== "production" && o ? T : x(O, T);
      A[O] = R, null.NODE_ENV !== "production" && (S.actions[O] = T), s.actions[O] = T;
    } else
      null.NODE_ENV !== "production" && Mu(T) && (S.getters[O] = a ? n.getters[O] : T, Ln && (A._getters || (A._getters = Fe([]))).push(O));
  }
  if (Ke(C, A), Ke(pt(C), A), Object.defineProperty(C, "$state", {
    get: () => null.NODE_ENV !== "production" && o ? v.value : r.state.value[t],
    set: (O) => {
      if (null.NODE_ENV !== "production" && o)
        throw new Error("cannot set hotState");
      g((T) => {
        Ke(T, O);
      });
    }
  }), null.NODE_ENV !== "production") {
    C._hotUpdate = Fe((T) => {
      C._hotUpdating = !0, T._hmrPayload.state.forEach((R) => {
        if (R in C.$state) {
          const L = T.$state[R], F = C.$state[R];
          typeof L == "object" && wr(L) && wr(F) ? Cp(L, F) : T.$state[R] = F;
        }
        Oi(C, R, No(T.$state, R));
      }), Object.keys(C.$state).forEach((R) => {
        R in T.$state || rs(C, R);
      }), c = !1, f = !1, r.state.value[t] = No(T._hmrPayload, "hotState"), f = !0, Yo().then(() => {
        c = !0;
      });
      for (const R in T._hmrPayload.actions) {
        const L = T[R];
        Oi(C, R, x(R, L));
      }
      for (const R in T._hmrPayload.getters) {
        const L = T._hmrPayload.getters[R], F = a ? he(() => (ei(r), L.call(C, C))) : L;
        Oi(C, R, F);
      }
      Object.keys(C._hmrPayload.getters).forEach((R) => {
        R in T._hmrPayload.getters || rs(C, R);
      }), Object.keys(C._hmrPayload.actions).forEach((R) => {
        R in T._hmrPayload.actions || rs(C, R);
      }), C._hmrPayload = T._hmrPayload, C._getters = T._getters, C._hotUpdating = !1;
    });
    const O = {
      writable: !0,
      configurable: !0,
      enumerable: !1
    };
    Ln && ["_p", "_hmrPayload", "_getters", "_customProperties"].forEach((T) => {
      Object.defineProperty(C, T, {
        value: C[T],
        ...O
      });
    });
  }
  return r._p.forEach((O) => {
    if (null.NODE_ENV !== "production" && Ln) {
      const T = i.run(() => O({
        store: C,
        app: r._a,
        pinia: r,
        options: s
      }));
      Object.keys(T || {}).forEach((R) => C._customProperties.add(R)), Ke(C, T);
    } else
      Ke(C, i.run(() => O({
        store: C,
        app: r._a,
        pinia: r,
        options: s
      })));
  }), null.NODE_ENV !== "production" && C.$state && typeof C.$state == "object" && typeof C.$state.constructor == "function" && !C.$state.constructor.toString().includes("[native code]") && console.warn(`[\u{1F34D}]: The "state" must be a plain object. It cannot be
	state: () => new MyClass()
Found in store "${C.$id}".`), m && a && n.hydrate && n.hydrate(C.$state, m), c = !0, f = !0, C;
}
function EE(t, e, n) {
  let r, o;
  const a = typeof e == "function";
  typeof t == "string" ? (r = t, o = a ? n : e) : (o = t, r = t.id);
  function i(s, l) {
    const c = nn();
    if (s = (null.NODE_ENV === "test" && bo && bo._testing ? null : s) || c && Kr(yp), s && ei(s), null.NODE_ENV !== "production" && !bo)
      throw new Error(`[\u{1F34D}]: getActivePinia was called with no active Pinia. Did you forget to install pinia?
	const pinia = createPinia()
	app.use(pinia)
This will fail in production.`);
    s = bo, s._s.has(r) || (a ? rl(r, e, o, s) : $u(r, o, s), null.NODE_ENV !== "production" && (i._pinia = s));
    const f = s._s.get(r);
    if (null.NODE_ENV !== "production" && l) {
      const u = "__hot:" + r, d = a ? rl(u, e, o, s, !0) : $u(u, Ke({}, o), s, !0);
      l._hotUpdate(d), delete s.state.value[u], s._s.delete(u);
    }
    if (null.NODE_ENV !== "production" && Ln && c && c.proxy && !l) {
      const u = c.proxy, d = "_pStores" in u ? u._pStores : u._pStores = {};
      d[r] = f;
    }
    return f;
  }
  return i.$id = r, i;
}
async function xE(t, e) {
  return await (await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${t}&limit=5&appid=${e}`)).json();
}
async function OE(t, e, n) {
  return await (await fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${t}&lon=${e}&limit=1&appid=${n}`)).json();
}
async function SE(t, e, n) {
  return await (await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${t}&lon=${e}&appid=${n}&units=metric`
  )).json();
}
async function wE(t) {
  return new Promise((e, n) => {
    window.navigator.geolocation.getCurrentPosition(
      (o) => {
        OE(o.coords.latitude, o.coords.longitude, t).then((a) => e(a[0])).catch((a) => n(a));
      },
      (o) => {
        n(o);
      }
    );
  });
}
const Dp = EE("store", {
  state: () => ({
    isSettingsOpen: !1,
    locationInputValue: "",
    locationInputError: "",
    validLocations: [],
    locationsData: [],
    widgetBodyError: "",
    weatherApiKey: "",
    weatherApiInput: ""
  }),
  getters: {},
  actions: {
    async initialize() {
      const t = localStorage.getItem("weather-widget");
      t && (this.locationsData = JSON.parse(t).locations, this.weatherApiKey = JSON.parse(t).apiKey, this.getLocalWeather());
    },
    async getLocalWeather() {
      if (this.locationsData.length === 0) {
        const t = await wE(this.weatherApiKey), e = {
          name: t.state ? `${t.name}, ${t.country}, ${t.state}` : `${t.name}, ${t.country}`,
          lat: t.lat,
          lon: t.lon
        };
        this.locationsData.push(e);
      }
      this.fetchWeather();
    },
    submitApiKey() {
      this.weatherApiKey = this.weatherApiInput, this.saveToStorage(), this.getLocalWeather();
    },
    saveToStorage() {
      localStorage.setItem("weather-widget", JSON.stringify({ apiKey: this.weatherApiKey, locations: this.locationsData }));
    },
    parseWeatherToStore(t, e) {
      t.weather = {
        temp: e.main.temp,
        description: e.weather[0].description,
        icon: e.weather[0].icon,
        visibility: e.visibility,
        pressure: e.main.pressure,
        humidity: e.main.humidity,
        feelsLike: e.main.feels_like,
        windDeg: e.wind.deg,
        windSpeed: e.wind.speed
      };
    },
    openSettings() {
      this.isSettingsOpen = !0;
    },
    closeSettings() {
      this.isSettingsOpen = !1;
    },
    async fetchLocationNames() {
      if (this.locationInputValue) {
        const t = await xE(this.locationInputValue, this.weatherApiKey);
        for (let e of t) {
          const n = {
            name: e.state ? `${e.name}, ${e.country}, ${e.state}` : `${e.name}, ${e.country}`,
            lat: e.lat,
            lon: e.lon
          };
          this.validLocations.find((r) => r.name === n.name) || this.validLocations.push(n);
        }
      }
    },
    addLocation() {
      const t = this.validLocations.find((e) => this.locationInputValue === e.name);
      t ? this.locationsData.find((e) => t.name === e.name) ? this.locationInputError = "This location is already being watched." : (this.locationsData.push(t), this.fetchWeather(), this.locationInputValue = "", this.locationInputError = "", this.validLocations = [], this.saveToStorage()) : this.locationInputError = "No location with such name found.";
    },
    deleteLocation(t) {
      this.locationsData = this.locationsData.filter((e) => t !== e.name), this.saveToStorage();
    },
    async fetchWeather() {
      for (let t of this.locationsData) {
        t.isLoading = !0;
        const e = await SE(t.lat, t.lon, this.weatherApiKey);
        this.parseWeatherToStore(t, e), t.formatted = G1(t), t.isLoading = !1;
      }
    }
  }
});
var NE = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function CE(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Ip(t) {
  var e = t.default;
  if (typeof e == "function") {
    var n = function() {
      return e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var Ap = { exports: {} };
const TE = /* @__PURE__ */ Ip(Pv);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Lu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function en(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Lu(Object(n), !0).forEach(function(r) {
      DE(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Lu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
function ji(t) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? ji = function(e) {
    return typeof e;
  } : ji = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ji(t);
}
function DE(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function Ue() {
  return Ue = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
    }
    return t;
  }, Ue.apply(this, arguments);
}
function IE(t, e) {
  if (t == null)
    return {};
  var n = {}, r = Object.keys(t), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(e.indexOf(o) >= 0) && (n[o] = t[o]);
  return n;
}
function AE(t, e) {
  if (t == null)
    return {};
  var n = IE(t, e), r, o;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (o = 0; o < a.length; o++)
      r = a[o], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(t, r) || (n[r] = t[r]));
  }
  return n;
}
function PE(t) {
  return RE(t) || ME(t) || $E(t) || LE();
}
function RE(t) {
  if (Array.isArray(t))
    return ol(t);
}
function ME(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function $E(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return ol(t, e);
    var n = Object.prototype.toString.call(t).slice(8, -1);
    if (n === "Object" && t.constructor && (n = t.constructor.name), n === "Map" || n === "Set")
      return Array.from(t);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ol(t, e);
  }
}
function ol(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var n = 0, r = new Array(e); n < e; n++)
    r[n] = t[n];
  return r;
}
function LE() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var FE = "1.14.0";
function pn(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Sn = pn(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), ui = pn(/Edge/i), Fu = pn(/firefox/i), ko = pn(/safari/i) && !pn(/chrome/i) && !pn(/android/i), Pp = pn(/iP(ad|od|hone)/i), jE = pn(/chrome/i) && pn(/android/i), Rp = {
  capture: !1,
  passive: !1
};
function xt(t, e, n) {
  t.addEventListener(e, n, !Sn && Rp);
}
function yt(t, e, n) {
  t.removeEventListener(e, n, !Sn && Rp);
}
function la(t, e) {
  if (!!e) {
    if (e[0] === ">" && (e = e.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(e);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(e);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function VE(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function We(t, e, n, r) {
  if (t) {
    n = n || document;
    do {
      if (e != null && (e[0] === ">" ? t.parentNode === n && la(t, e) : la(t, e)) || r && t === n)
        return t;
      if (t === n)
        break;
    } while (t = VE(t));
  }
  return null;
}
var ju = /\s+/g;
function zt(t, e, n) {
  if (t && e)
    if (t.classList)
      t.classList[n ? "add" : "remove"](e);
    else {
      var r = (" " + t.className + " ").replace(ju, " ").replace(" " + e + " ", " ");
      t.className = (r + (n ? " " + e : "")).replace(ju, " ");
    }
}
function rt(t, e, n) {
  var r = t && t.style;
  if (r) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (n = t.currentStyle), e === void 0 ? n : n[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = n + (typeof n == "string" ? "" : "px");
  }
}
function vr(t, e) {
  var n = "";
  if (typeof t == "string")
    n = t;
  else
    do {
      var r = rt(t, "transform");
      r && r !== "none" && (n = r + " " + n);
    } while (!e && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(n);
}
function Mp(t, e, n) {
  if (t) {
    var r = t.getElementsByTagName(e), o = 0, a = r.length;
    if (n)
      for (; o < a; o++)
        n(r[o], o);
    return r;
  }
  return [];
}
function tn() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function _t(t, e, n, r, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var a, i, s, l, c, f, u;
    if (t !== window && t.parentNode && t !== tn() ? (a = t.getBoundingClientRect(), i = a.top, s = a.left, l = a.bottom, c = a.right, f = a.height, u = a.width) : (i = 0, s = 0, l = window.innerHeight, c = window.innerWidth, f = window.innerHeight, u = window.innerWidth), (e || n) && t !== window && (o = o || t.parentNode, !Sn))
      do
        if (o && o.getBoundingClientRect && (rt(o, "transform") !== "none" || n && rt(o, "position") !== "static")) {
          var d = o.getBoundingClientRect();
          i -= d.top + parseInt(rt(o, "border-top-width")), s -= d.left + parseInt(rt(o, "border-left-width")), l = i + a.height, c = s + a.width;
          break;
        }
      while (o = o.parentNode);
    if (r && t !== window) {
      var h = vr(o || t), m = h && h.a, v = h && h.d;
      h && (i /= v, s /= m, u /= m, f /= v, l = i + f, c = s + u);
    }
    return {
      top: i,
      left: s,
      bottom: l,
      right: c,
      width: u,
      height: f
    };
  }
}
function Vu(t, e, n) {
  for (var r = Fn(t, !0), o = _t(t)[e]; r; ) {
    var a = _t(r)[n], i = void 0;
    if (n === "top" || n === "left" ? i = o >= a : i = o <= a, !i)
      return r;
    if (r === tn())
      break;
    r = Fn(r, !1);
  }
  return !1;
}
function to(t, e, n, r) {
  for (var o = 0, a = 0, i = t.children; a < i.length; ) {
    if (i[a].style.display !== "none" && i[a] !== ft.ghost && (r || i[a] !== ft.dragged) && We(i[a], n.draggable, t, !1)) {
      if (o === e)
        return i[a];
      o++;
    }
    a++;
  }
  return null;
}
function ic(t, e) {
  for (var n = t.lastElementChild; n && (n === ft.ghost || rt(n, "display") === "none" || e && !la(n, e)); )
    n = n.previousElementSibling;
  return n || null;
}
function Xt(t, e) {
  var n = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== ft.clone && (!e || la(t, e)) && n++;
  return n;
}
function ku(t) {
  var e = 0, n = 0, r = tn();
  if (t)
    do {
      var o = vr(t), a = o.a, i = o.d;
      e += t.scrollLeft * a, n += t.scrollTop * i;
    } while (t !== r && (t = t.parentNode));
  return [e, n];
}
function kE(t, e) {
  for (var n in t)
    if (!!t.hasOwnProperty(n)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === t[n][r])
          return Number(n);
    }
  return -1;
}
function Fn(t, e) {
  if (!t || !t.getBoundingClientRect)
    return tn();
  var n = t, r = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var o = rt(n);
      if (n.clientWidth < n.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body)
          return tn();
        if (r || e)
          return n;
        r = !0;
      }
    }
  while (n = n.parentNode);
  return tn();
}
function UE(t, e) {
  if (t && e)
    for (var n in e)
      e.hasOwnProperty(n) && (t[n] = e[n]);
  return t;
}
function os(t, e) {
  return Math.round(t.top) === Math.round(e.top) && Math.round(t.left) === Math.round(e.left) && Math.round(t.height) === Math.round(e.height) && Math.round(t.width) === Math.round(e.width);
}
var Uo;
function $p(t, e) {
  return function() {
    if (!Uo) {
      var n = arguments, r = this;
      n.length === 1 ? t.call(r, n[0]) : t.apply(r, n), Uo = setTimeout(function() {
        Uo = void 0;
      }, e);
    }
  };
}
function BE() {
  clearTimeout(Uo), Uo = void 0;
}
function Lp(t, e, n) {
  t.scrollLeft += e, t.scrollTop += n;
}
function ac(t) {
  var e = window.Polymer, n = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(t).cloneNode(!0) : n ? n(t).clone(!0)[0] : t.cloneNode(!0);
}
function Uu(t, e) {
  rt(t, "position", "absolute"), rt(t, "top", e.top), rt(t, "left", e.left), rt(t, "width", e.width), rt(t, "height", e.height);
}
function is(t) {
  rt(t, "position", ""), rt(t, "top", ""), rt(t, "left", ""), rt(t, "width", ""), rt(t, "height", "");
}
var ue = "Sortable" + new Date().getTime();
function HE() {
  var t = [], e;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(o) {
          if (!(rt(o, "display") === "none" || o === ft.ghost)) {
            t.push({
              target: o,
              rect: _t(o)
            });
            var a = en({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var i = vr(o, !0);
              i && (a.top -= i.f, a.left -= i.e);
            }
            o.fromRect = a;
          }
        });
      }
    },
    addAnimationState: function(r) {
      t.push(r);
    },
    removeAnimationState: function(r) {
      t.splice(kE(t, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var a = !1, i = 0;
      t.forEach(function(s) {
        var l = 0, c = s.target, f = c.fromRect, u = _t(c), d = c.prevFromRect, h = c.prevToRect, m = s.rect, v = vr(c, !0);
        v && (u.top -= v.f, u.left -= v.e), c.toRect = u, c.thisAnimationDuration && os(d, u) && !os(f, u) && (m.top - u.top) / (m.left - u.left) === (f.top - u.top) / (f.left - u.left) && (l = KE(m, d, h, o.options)), os(u, f) || (c.prevFromRect = f, c.prevToRect = u, l || (l = o.options.animation), o.animate(c, m, u, l)), l && (a = !0, i = Math.max(i, l), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, l), c.thisAnimationDuration = l);
      }), clearTimeout(e), a ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, i) : typeof r == "function" && r(), t = [];
    },
    animate: function(r, o, a, i) {
      if (i) {
        rt(r, "transition", ""), rt(r, "transform", "");
        var s = vr(this.el), l = s && s.a, c = s && s.d, f = (o.left - a.left) / (l || 1), u = (o.top - a.top) / (c || 1);
        r.animatingX = !!f, r.animatingY = !!u, rt(r, "transform", "translate3d(" + f + "px," + u + "px,0)"), this.forRepaintDummy = _E(r), rt(r, "transition", "transform " + i + "ms" + (this.options.easing ? " " + this.options.easing : "")), rt(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          rt(r, "transition", ""), rt(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, i);
      }
    }
  };
}
function _E(t) {
  return t.offsetWidth;
}
function KE(t, e, n, r) {
  return Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) / Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) * r.animation;
}
var Pr = [], as = {
  initializeByDefault: !0
}, fi = {
  mount: function(e) {
    for (var n in as)
      as.hasOwnProperty(n) && !(n in e) && (e[n] = as[n]);
    Pr.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), Pr.push(e);
  },
  pluginEvent: function(e, n, r) {
    var o = this;
    this.eventCanceled = !1, r.cancel = function() {
      o.eventCanceled = !0;
    };
    var a = e + "Global";
    Pr.forEach(function(i) {
      !n[i.pluginName] || (n[i.pluginName][a] && n[i.pluginName][a](en({
        sortable: n
      }, r)), n.options[i.pluginName] && n[i.pluginName][e] && n[i.pluginName][e](en({
        sortable: n
      }, r)));
    });
  },
  initializePlugins: function(e, n, r, o) {
    Pr.forEach(function(s) {
      var l = s.pluginName;
      if (!(!e.options[l] && !s.initializeByDefault)) {
        var c = new s(e, n, e.options);
        c.sortable = e, c.options = e.options, e[l] = c, Ue(r, c.defaults);
      }
    });
    for (var a in e.options)
      if (!!e.options.hasOwnProperty(a)) {
        var i = this.modifyOption(e, a, e.options[a]);
        typeof i < "u" && (e.options[a] = i);
      }
  },
  getEventProperties: function(e, n) {
    var r = {};
    return Pr.forEach(function(o) {
      typeof o.eventProperties == "function" && Ue(r, o.eventProperties.call(n[o.pluginName], e));
    }), r;
  },
  modifyOption: function(e, n, r) {
    var o;
    return Pr.forEach(function(a) {
      !e[a.pluginName] || a.optionListeners && typeof a.optionListeners[n] == "function" && (o = a.optionListeners[n].call(e[a.pluginName], r));
    }), o;
  }
};
function Eo(t) {
  var e = t.sortable, n = t.rootEl, r = t.name, o = t.targetEl, a = t.cloneEl, i = t.toEl, s = t.fromEl, l = t.oldIndex, c = t.newIndex, f = t.oldDraggableIndex, u = t.newDraggableIndex, d = t.originalEvent, h = t.putSortable, m = t.extraEventProperties;
  if (e = e || n && n[ue], !!e) {
    var v, b = e.options, g = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Sn && !ui ? v = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (v = document.createEvent("Event"), v.initEvent(r, !0, !0)), v.to = i || n, v.from = s || n, v.item = o || n, v.clone = a, v.oldIndex = l, v.newIndex = c, v.oldDraggableIndex = f, v.newDraggableIndex = u, v.originalEvent = d, v.pullMode = h ? h.lastPutMode : void 0;
    var p = en(en({}, m), fi.getEventProperties(r, e));
    for (var E in p)
      v[E] = p[E];
    n && n.dispatchEvent(v), b[g] && b[g].call(e, v);
  }
}
var WE = ["evt"], ve = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = r.evt, a = AE(r, WE);
  fi.pluginEvent.bind(ft)(e, n, en({
    dragEl: Y,
    parentEl: Gt,
    ghostEl: mt,
    rootEl: Ht,
    nextEl: ir,
    lastDownEl: Vi,
    cloneEl: Yt,
    cloneHidden: $n,
    dragStarted: xo,
    putSortable: oe,
    activeSortable: ft.active,
    originalEvent: o,
    oldIndex: Br,
    oldDraggableIndex: Bo,
    newIndex: Ne,
    newDraggableIndex: An,
    hideGhostForTarget: kp,
    unhideGhostForTarget: Up,
    cloneNowHidden: function() {
      $n = !0;
    },
    cloneNowShown: function() {
      $n = !1;
    },
    dispatchSortableEvent: function(s) {
      de({
        sortable: n,
        name: s,
        originalEvent: o
      });
    }
  }, a));
};
function de(t) {
  Eo(en({
    putSortable: oe,
    cloneEl: Yt,
    targetEl: Y,
    rootEl: Ht,
    oldIndex: Br,
    oldDraggableIndex: Bo,
    newIndex: Ne,
    newDraggableIndex: An
  }, t));
}
var Y, Gt, mt, Ht, ir, Vi, Yt, $n, Br, Ne, Bo, An, Si, oe, Fr = !1, ca = !1, ua = [], qn, Be, ss, ls, Bu, Hu, xo, Rr, Ho, _o = !1, wi = !1, ki, le, cs = [], il = !1, fa = [], Ha = typeof document < "u", Ni = Pp, _u = ui || Sn ? "cssFloat" : "float", zE = Ha && !jE && !Pp && "draggable" in document.createElement("div"), Fp = function() {
  if (!!Ha) {
    if (Sn)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
}(), jp = function(e, n) {
  var r = rt(e), o = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), a = to(e, 0, n), i = to(e, 1, n), s = a && rt(a), l = i && rt(i), c = s && parseInt(s.marginLeft) + parseInt(s.marginRight) + _t(a).width, f = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + _t(i).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (a && s.float && s.float !== "none") {
    var u = s.float === "left" ? "left" : "right";
    return i && (l.clear === "both" || l.clear === u) ? "vertical" : "horizontal";
  }
  return a && (s.display === "block" || s.display === "flex" || s.display === "table" || s.display === "grid" || c >= o && r[_u] === "none" || i && r[_u] === "none" && c + f > o) ? "vertical" : "horizontal";
}, GE = function(e, n, r) {
  var o = r ? e.left : e.top, a = r ? e.right : e.bottom, i = r ? e.width : e.height, s = r ? n.left : n.top, l = r ? n.right : n.bottom, c = r ? n.width : n.height;
  return o === s || a === l || o + i / 2 === s + c / 2;
}, YE = function(e, n) {
  var r;
  return ua.some(function(o) {
    var a = o[ue].options.emptyInsertThreshold;
    if (!(!a || ic(o))) {
      var i = _t(o), s = e >= i.left - a && e <= i.right + a, l = n >= i.top - a && n <= i.bottom + a;
      if (s && l)
        return r = o;
    }
  }), r;
}, Vp = function(e) {
  function n(a, i) {
    return function(s, l, c, f) {
      var u = s.options.group.name && l.options.group.name && s.options.group.name === l.options.group.name;
      if (a == null && (i || u))
        return !0;
      if (a == null || a === !1)
        return !1;
      if (i && a === "clone")
        return a;
      if (typeof a == "function")
        return n(a(s, l, c, f), i)(s, l, c, f);
      var d = (i ? s : l).options.group.name;
      return a === !0 || typeof a == "string" && a === d || a.join && a.indexOf(d) > -1;
    };
  }
  var r = {}, o = e.group;
  (!o || ji(o) != "object") && (o = {
    name: o
  }), r.name = o.name, r.checkPull = n(o.pull, !0), r.checkPut = n(o.put), r.revertClone = o.revertClone, e.group = r;
}, kp = function() {
  !Fp && mt && rt(mt, "display", "none");
}, Up = function() {
  !Fp && mt && rt(mt, "display", "");
};
Ha && document.addEventListener("click", function(t) {
  if (ca)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), ca = !1, !1;
}, !0);
var tr = function(e) {
  if (Y) {
    e = e.touches ? e.touches[0] : e;
    var n = YE(e.clientX, e.clientY);
    if (n) {
      var r = {};
      for (var o in e)
        e.hasOwnProperty(o) && (r[o] = e[o]);
      r.target = r.rootEl = n, r.preventDefault = void 0, r.stopPropagation = void 0, n[ue]._onDragOver(r);
    }
  }
}, XE = function(e) {
  Y && Y.parentNode[ue]._isOutsideThisEl(e.target);
};
function ft(t, e) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = e = Ue({}, e), t[ue] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return jp(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(i, s) {
      i.setData("Text", s.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: ft.supportPointer !== !1 && "PointerEvent" in window && !ko,
    emptyInsertThreshold: 5
  };
  fi.initializePlugins(this, t, n);
  for (var r in n)
    !(r in e) && (e[r] = n[r]);
  Vp(e);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : zE, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? xt(t, "pointerdown", this._onTapStart) : (xt(t, "mousedown", this._onTapStart), xt(t, "touchstart", this._onTapStart)), this.nativeDraggable && (xt(t, "dragover", this), xt(t, "dragenter", this)), ua.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Ue(this, HE());
}
ft.prototype = {
  constructor: ft,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (Rr = null);
  },
  _getDirection: function(e, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, n, Y) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var n = this, r = this.el, o = this.options, a = o.preventOnFilter, i = e.type, s = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, l = (s || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || l, f = o.filter;
      if (r0(r), !Y && !(/mousedown|pointerdown/.test(i) && e.button !== 0 || o.disabled) && !c.isContentEditable && !(!this.nativeDraggable && ko && l && l.tagName.toUpperCase() === "SELECT") && (l = We(l, o.draggable, r, !1), !(l && l.animated) && Vi !== l)) {
        if (Br = Xt(l), Bo = Xt(l, o.draggable), typeof f == "function") {
          if (f.call(this, e, l, this)) {
            de({
              sortable: n,
              rootEl: c,
              name: "filter",
              targetEl: l,
              toEl: r,
              fromEl: r
            }), ve("filter", n, {
              evt: e
            }), a && e.cancelable && e.preventDefault();
            return;
          }
        } else if (f && (f = f.split(",").some(function(u) {
          if (u = We(c, u.trim(), r, !1), u)
            return de({
              sortable: n,
              rootEl: u,
              name: "filter",
              targetEl: l,
              fromEl: r,
              toEl: r
            }), ve("filter", n, {
              evt: e
            }), !0;
        }), f)) {
          a && e.cancelable && e.preventDefault();
          return;
        }
        o.handle && !We(c, o.handle, r, !1) || this._prepareDragStart(e, s, l);
      }
    }
  },
  _prepareDragStart: function(e, n, r) {
    var o = this, a = o.el, i = o.options, s = a.ownerDocument, l;
    if (r && !Y && r.parentNode === a) {
      var c = _t(r);
      if (Ht = a, Y = r, Gt = Y.parentNode, ir = Y.nextSibling, Vi = r, Si = i.group, ft.dragged = Y, qn = {
        target: Y,
        clientX: (n || e).clientX,
        clientY: (n || e).clientY
      }, Bu = qn.clientX - c.left, Hu = qn.clientY - c.top, this._lastX = (n || e).clientX, this._lastY = (n || e).clientY, Y.style["will-change"] = "all", l = function() {
        if (ve("delayEnded", o, {
          evt: e
        }), ft.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !Fu && o.nativeDraggable && (Y.draggable = !0), o._triggerDragStart(e, n), de({
          sortable: o,
          name: "choose",
          originalEvent: e
        }), zt(Y, i.chosenClass, !0);
      }, i.ignore.split(",").forEach(function(f) {
        Mp(Y, f.trim(), us);
      }), xt(s, "dragover", tr), xt(s, "mousemove", tr), xt(s, "touchmove", tr), xt(s, "mouseup", o._onDrop), xt(s, "touchend", o._onDrop), xt(s, "touchcancel", o._onDrop), Fu && this.nativeDraggable && (this.options.touchStartThreshold = 4, Y.draggable = !0), ve("delayStart", this, {
        evt: e
      }), i.delay && (!i.delayOnTouchOnly || n) && (!this.nativeDraggable || !(ui || Sn))) {
        if (ft.eventCanceled) {
          this._onDrop();
          return;
        }
        xt(s, "mouseup", o._disableDelayedDrag), xt(s, "touchend", o._disableDelayedDrag), xt(s, "touchcancel", o._disableDelayedDrag), xt(s, "mousemove", o._delayedDragTouchMoveHandler), xt(s, "touchmove", o._delayedDragTouchMoveHandler), i.supportPointer && xt(s, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(l, i.delay);
      } else
        l();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var n = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    Y && us(Y), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    yt(e, "mouseup", this._disableDelayedDrag), yt(e, "touchend", this._disableDelayedDrag), yt(e, "touchcancel", this._disableDelayedDrag), yt(e, "mousemove", this._delayedDragTouchMoveHandler), yt(e, "touchmove", this._delayedDragTouchMoveHandler), yt(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, n) {
    n = n || e.pointerType == "touch" && e, !this.nativeDraggable || n ? this.options.supportPointer ? xt(document, "pointermove", this._onTouchMove) : n ? xt(document, "touchmove", this._onTouchMove) : xt(document, "mousemove", this._onTouchMove) : (xt(Y, "dragend", this), xt(Ht, "dragstart", this._onDragStart));
    try {
      document.selection ? Ui(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, n) {
    if (Fr = !1, Ht && Y) {
      ve("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && xt(document, "dragover", XE);
      var r = this.options;
      !e && zt(Y, r.dragClass, !1), zt(Y, r.ghostClass, !0), ft.active = this, e && this._appendGhost(), de({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Be) {
      this._lastX = Be.clientX, this._lastY = Be.clientY, kp();
      for (var e = document.elementFromPoint(Be.clientX, Be.clientY), n = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(Be.clientX, Be.clientY), e !== n); )
        n = e;
      if (Y.parentNode[ue]._isOutsideThisEl(e), n)
        do {
          if (n[ue]) {
            var r = void 0;
            if (r = n[ue]._onDragOver({
              clientX: Be.clientX,
              clientY: Be.clientY,
              target: e,
              rootEl: n
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = n;
        } while (n = n.parentNode);
      Up();
    }
  },
  _onTouchMove: function(e) {
    if (qn) {
      var n = this.options, r = n.fallbackTolerance, o = n.fallbackOffset, a = e.touches ? e.touches[0] : e, i = mt && vr(mt, !0), s = mt && i && i.a, l = mt && i && i.d, c = Ni && le && ku(le), f = (a.clientX - qn.clientX + o.x) / (s || 1) + (c ? c[0] - cs[0] : 0) / (s || 1), u = (a.clientY - qn.clientY + o.y) / (l || 1) + (c ? c[1] - cs[1] : 0) / (l || 1);
      if (!ft.active && !Fr) {
        if (r && Math.max(Math.abs(a.clientX - this._lastX), Math.abs(a.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (mt) {
        i ? (i.e += f - (ss || 0), i.f += u - (ls || 0)) : i = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: f,
          f: u
        };
        var d = "matrix(".concat(i.a, ",").concat(i.b, ",").concat(i.c, ",").concat(i.d, ",").concat(i.e, ",").concat(i.f, ")");
        rt(mt, "webkitTransform", d), rt(mt, "mozTransform", d), rt(mt, "msTransform", d), rt(mt, "transform", d), ss = f, ls = u, Be = a;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!mt) {
      var e = this.options.fallbackOnBody ? document.body : Ht, n = _t(Y, !0, Ni, !0, e), r = this.options;
      if (Ni) {
        for (le = e; rt(le, "position") === "static" && rt(le, "transform") === "none" && le !== document; )
          le = le.parentNode;
        le !== document.body && le !== document.documentElement ? (le === document && (le = tn()), n.top += le.scrollTop, n.left += le.scrollLeft) : le = tn(), cs = ku(le);
      }
      mt = Y.cloneNode(!0), zt(mt, r.ghostClass, !1), zt(mt, r.fallbackClass, !0), zt(mt, r.dragClass, !0), rt(mt, "transition", ""), rt(mt, "transform", ""), rt(mt, "box-sizing", "border-box"), rt(mt, "margin", 0), rt(mt, "top", n.top), rt(mt, "left", n.left), rt(mt, "width", n.width), rt(mt, "height", n.height), rt(mt, "opacity", "0.8"), rt(mt, "position", Ni ? "absolute" : "fixed"), rt(mt, "zIndex", "100000"), rt(mt, "pointerEvents", "none"), ft.ghost = mt, e.appendChild(mt), rt(mt, "transform-origin", Bu / parseInt(mt.style.width) * 100 + "% " + Hu / parseInt(mt.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, n) {
    var r = this, o = e.dataTransfer, a = r.options;
    if (ve("dragStart", this, {
      evt: e
    }), ft.eventCanceled) {
      this._onDrop();
      return;
    }
    ve("setupClone", this), ft.eventCanceled || (Yt = ac(Y), Yt.draggable = !1, Yt.style["will-change"] = "", this._hideClone(), zt(Yt, this.options.chosenClass, !1), ft.clone = Yt), r.cloneId = Ui(function() {
      ve("clone", r), !ft.eventCanceled && (r.options.removeCloneOnHide || Ht.insertBefore(Yt, Y), r._hideClone(), de({
        sortable: r,
        name: "clone"
      }));
    }), !n && zt(Y, a.dragClass, !0), n ? (ca = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (yt(document, "mouseup", r._onDrop), yt(document, "touchend", r._onDrop), yt(document, "touchcancel", r._onDrop), o && (o.effectAllowed = "move", a.setData && a.setData.call(r, o, Y)), xt(document, "drop", r), rt(Y, "transform", "translateZ(0)")), Fr = !0, r._dragStartId = Ui(r._dragStarted.bind(r, n, e)), xt(document, "selectstart", r), xo = !0, ko && rt(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var n = this.el, r = e.target, o, a, i, s = this.options, l = s.group, c = ft.active, f = Si === l, u = s.sort, d = oe || c, h, m = this, v = !1;
    if (il)
      return;
    function b(Z, wt) {
      ve(Z, m, en({
        evt: e,
        isOwner: f,
        axis: h ? "vertical" : "horizontal",
        revert: i,
        dragRect: o,
        targetRect: a,
        canSort: u,
        fromSortable: d,
        target: r,
        completed: p,
        onMove: function(It, At) {
          return Ci(Ht, n, Y, o, It, _t(It), e, At);
        },
        changed: E
      }, wt));
    }
    function g() {
      b("dragOverAnimationCapture"), m.captureAnimationState(), m !== d && d.captureAnimationState();
    }
    function p(Z) {
      return b("dragOverCompleted", {
        insertion: Z
      }), Z && (f ? c._hideClone() : c._showClone(m), m !== d && (zt(Y, oe ? oe.options.ghostClass : c.options.ghostClass, !1), zt(Y, s.ghostClass, !0)), oe !== m && m !== ft.active ? oe = m : m === ft.active && oe && (oe = null), d === m && (m._ignoreWhileAnimating = r), m.animateAll(function() {
        b("dragOverAnimationComplete"), m._ignoreWhileAnimating = null;
      }), m !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (r === Y && !Y.animated || r === n && !r.animated) && (Rr = null), !s.dragoverBubble && !e.rootEl && r !== document && (Y.parentNode[ue]._isOutsideThisEl(e.target), !Z && tr(e)), !s.dragoverBubble && e.stopPropagation && e.stopPropagation(), v = !0;
    }
    function E() {
      Ne = Xt(Y), An = Xt(Y, s.draggable), de({
        sortable: m,
        name: "change",
        toEl: n,
        newIndex: Ne,
        newDraggableIndex: An,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = We(r, s.draggable, n, !0), b("dragOver"), ft.eventCanceled)
      return v;
    if (Y.contains(e.target) || r.animated && r.animatingX && r.animatingY || m._ignoreWhileAnimating === r)
      return p(!1);
    if (ca = !1, c && !s.disabled && (f ? u || (i = Gt !== Ht) : oe === this || (this.lastPutMode = Si.checkPull(this, c, Y, e)) && l.checkPut(this, c, Y, e))) {
      if (h = this._getDirection(e, r) === "vertical", o = _t(Y), b("dragOverValid"), ft.eventCanceled)
        return v;
      if (i)
        return Gt = Ht, g(), this._hideClone(), b("revert"), ft.eventCanceled || (ir ? Ht.insertBefore(Y, ir) : Ht.appendChild(Y)), p(!0);
      var x = ic(n, s.draggable);
      if (!x || qE(e, h, this) && !x.animated) {
        if (x === Y)
          return p(!1);
        if (x && n === e.target && (r = x), r && (a = _t(r)), Ci(Ht, n, Y, o, r, a, e, !!r) !== !1)
          return g(), n.appendChild(Y), Gt = n, E(), p(!0);
      } else if (x && ZE(e, h, this)) {
        var S = to(n, 0, s, !0);
        if (S === Y)
          return p(!1);
        if (r = S, a = _t(r), Ci(Ht, n, Y, o, r, a, e, !1) !== !1)
          return g(), n.insertBefore(Y, S), Gt = n, E(), p(!0);
      } else if (r.parentNode === n) {
        a = _t(r);
        var w = 0, C, A = Y.parentNode !== n, O = !GE(Y.animated && Y.toRect || o, r.animated && r.toRect || a, h), T = h ? "top" : "left", R = Vu(r, "top", "top") || Vu(Y, "top", "top"), L = R ? R.scrollTop : void 0;
        Rr !== r && (C = a[T], _o = !1, wi = !O && s.invertSwap || A), w = t0(e, r, a, h, O ? 1 : s.swapThreshold, s.invertedSwapThreshold == null ? s.swapThreshold : s.invertedSwapThreshold, wi, Rr === r);
        var F;
        if (w !== 0) {
          var $ = Xt(Y);
          do
            $ -= w, F = Gt.children[$];
          while (F && (rt(F, "display") === "none" || F === mt));
        }
        if (w === 0 || F === r)
          return p(!1);
        Rr = r, Ho = w;
        var Q = r.nextElementSibling, U = !1;
        U = w === 1;
        var _ = Ci(Ht, n, Y, o, r, a, e, U);
        if (_ !== !1)
          return (_ === 1 || _ === -1) && (U = _ === 1), il = !0, setTimeout(QE, 30), g(), U && !Q ? n.appendChild(Y) : r.parentNode.insertBefore(Y, U ? Q : r), R && Lp(R, 0, L - R.scrollTop), Gt = Y.parentNode, C !== void 0 && !wi && (ki = Math.abs(C - _t(r)[T])), E(), p(!0);
      }
      if (n.contains(Y))
        return p(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    yt(document, "mousemove", this._onTouchMove), yt(document, "touchmove", this._onTouchMove), yt(document, "pointermove", this._onTouchMove), yt(document, "dragover", tr), yt(document, "mousemove", tr), yt(document, "touchmove", tr);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    yt(e, "mouseup", this._onDrop), yt(e, "touchend", this._onDrop), yt(e, "pointerup", this._onDrop), yt(e, "touchcancel", this._onDrop), yt(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var n = this.el, r = this.options;
    if (Ne = Xt(Y), An = Xt(Y, r.draggable), ve("drop", this, {
      evt: e
    }), Gt = Y && Y.parentNode, Ne = Xt(Y), An = Xt(Y, r.draggable), ft.eventCanceled) {
      this._nulling();
      return;
    }
    Fr = !1, wi = !1, _o = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), al(this.cloneId), al(this._dragStartId), this.nativeDraggable && (yt(document, "drop", this), yt(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ko && rt(document.body, "user-select", ""), rt(Y, "transform", ""), e && (xo && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), mt && mt.parentNode && mt.parentNode.removeChild(mt), (Ht === Gt || oe && oe.lastPutMode !== "clone") && Yt && Yt.parentNode && Yt.parentNode.removeChild(Yt), Y && (this.nativeDraggable && yt(Y, "dragend", this), us(Y), Y.style["will-change"] = "", xo && !Fr && zt(Y, oe ? oe.options.ghostClass : this.options.ghostClass, !1), zt(Y, this.options.chosenClass, !1), de({
      sortable: this,
      name: "unchoose",
      toEl: Gt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), Ht !== Gt ? (Ne >= 0 && (de({
      rootEl: Gt,
      name: "add",
      toEl: Gt,
      fromEl: Ht,
      originalEvent: e
    }), de({
      sortable: this,
      name: "remove",
      toEl: Gt,
      originalEvent: e
    }), de({
      rootEl: Gt,
      name: "sort",
      toEl: Gt,
      fromEl: Ht,
      originalEvent: e
    }), de({
      sortable: this,
      name: "sort",
      toEl: Gt,
      originalEvent: e
    })), oe && oe.save()) : Ne !== Br && Ne >= 0 && (de({
      sortable: this,
      name: "update",
      toEl: Gt,
      originalEvent: e
    }), de({
      sortable: this,
      name: "sort",
      toEl: Gt,
      originalEvent: e
    })), ft.active && ((Ne == null || Ne === -1) && (Ne = Br, An = Bo), de({
      sortable: this,
      name: "end",
      toEl: Gt,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ve("nulling", this), Ht = Y = Gt = mt = ir = Yt = Vi = $n = qn = Be = xo = Ne = An = Br = Bo = Rr = Ho = oe = Si = ft.dragged = ft.ghost = ft.clone = ft.active = null, fa.forEach(function(e) {
      e.checked = !0;
    }), fa.length = ss = ls = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        Y && (this._onDragOver(e), JE(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], n, r = this.el.children, o = 0, a = r.length, i = this.options; o < a; o++)
      n = r[o], We(n, i.draggable, this.el, !1) && e.push(n.getAttribute(i.dataIdAttr) || n0(n));
    return e;
  },
  sort: function(e, n) {
    var r = {}, o = this.el;
    this.toArray().forEach(function(a, i) {
      var s = o.children[i];
      We(s, this.options.draggable, o, !1) && (r[a] = s);
    }, this), n && this.captureAnimationState(), e.forEach(function(a) {
      r[a] && (o.removeChild(r[a]), o.appendChild(r[a]));
    }), n && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, n) {
    return We(e, n || this.options.draggable, this.el, !1);
  },
  option: function(e, n) {
    var r = this.options;
    if (n === void 0)
      return r[e];
    var o = fi.modifyOption(this, e, n);
    typeof o < "u" ? r[e] = o : r[e] = n, e === "group" && Vp(r);
  },
  destroy: function() {
    ve("destroy", this);
    var e = this.el;
    e[ue] = null, yt(e, "mousedown", this._onTapStart), yt(e, "touchstart", this._onTapStart), yt(e, "pointerdown", this._onTapStart), this.nativeDraggable && (yt(e, "dragover", this), yt(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ua.splice(ua.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!$n) {
      if (ve("hideClone", this), ft.eventCanceled)
        return;
      rt(Yt, "display", "none"), this.options.removeCloneOnHide && Yt.parentNode && Yt.parentNode.removeChild(Yt), $n = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if ($n) {
      if (ve("showClone", this), ft.eventCanceled)
        return;
      Y.parentNode == Ht && !this.options.group.revertClone ? Ht.insertBefore(Yt, Y) : ir ? Ht.insertBefore(Yt, ir) : Ht.appendChild(Yt), this.options.group.revertClone && this.animate(Y, Yt), rt(Yt, "display", ""), $n = !1;
    }
  }
};
function JE(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function Ci(t, e, n, r, o, a, i, s) {
  var l, c = t[ue], f = c.options.onMove, u;
  return window.CustomEvent && !Sn && !ui ? l = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (l = document.createEvent("Event"), l.initEvent("move", !0, !0)), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = o || e, l.relatedRect = a || _t(e), l.willInsertAfter = s, l.originalEvent = i, t.dispatchEvent(l), f && (u = f.call(c, l, i)), u;
}
function us(t) {
  t.draggable = !1;
}
function QE() {
  il = !1;
}
function ZE(t, e, n) {
  var r = _t(to(n.el, 0, n.options, !0)), o = 10;
  return e ? t.clientX < r.left - o || t.clientY < r.top && t.clientX < r.right : t.clientY < r.top - o || t.clientY < r.bottom && t.clientX < r.left;
}
function qE(t, e, n) {
  var r = _t(ic(n.el, n.options.draggable)), o = 10;
  return e ? t.clientX > r.right + o || t.clientX <= r.right && t.clientY > r.bottom && t.clientX >= r.left : t.clientX > r.right && t.clientY > r.top || t.clientX <= r.right && t.clientY > r.bottom + o;
}
function t0(t, e, n, r, o, a, i, s) {
  var l = r ? t.clientY : t.clientX, c = r ? n.height : n.width, f = r ? n.top : n.left, u = r ? n.bottom : n.right, d = !1;
  if (!i) {
    if (s && ki < c * o) {
      if (!_o && (Ho === 1 ? l > f + c * a / 2 : l < u - c * a / 2) && (_o = !0), _o)
        d = !0;
      else if (Ho === 1 ? l < f + ki : l > u - ki)
        return -Ho;
    } else if (l > f + c * (1 - o) / 2 && l < u - c * (1 - o) / 2)
      return e0(e);
  }
  return d = d || i, d && (l < f + c * a / 2 || l > u - c * a / 2) ? l > f + c / 2 ? 1 : -1 : 0;
}
function e0(t) {
  return Xt(Y) < Xt(t) ? 1 : -1;
}
function n0(t) {
  for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--; )
    r += e.charCodeAt(n);
  return r.toString(36);
}
function r0(t) {
  fa.length = 0;
  for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
    var r = e[n];
    r.checked && fa.push(r);
  }
}
function Ui(t) {
  return setTimeout(t, 0);
}
function al(t) {
  return clearTimeout(t);
}
Ha && xt(document, "touchmove", function(t) {
  (ft.active || Fr) && t.cancelable && t.preventDefault();
});
ft.utils = {
  on: xt,
  off: yt,
  css: rt,
  find: Mp,
  is: function(e, n) {
    return !!We(e, n, e, !1);
  },
  extend: UE,
  throttle: $p,
  closest: We,
  toggleClass: zt,
  clone: ac,
  index: Xt,
  nextTick: Ui,
  cancelNextTick: al,
  detectDirection: jp,
  getChild: to
};
ft.get = function(t) {
  return t[ue];
};
ft.mount = function() {
  for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
    e[n] = arguments[n];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (ft.utils = en(en({}, ft.utils), r.utils)), fi.mount(r);
  });
};
ft.create = function(t, e) {
  return new ft(t, e);
};
ft.version = FE;
var te = [], Oo, sl, ll = !1, fs, ds, da, So;
function o0() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return t.prototype = {
    dragStarted: function(n) {
      var r = n.originalEvent;
      this.sortable.nativeDraggable ? xt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? xt(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? xt(document, "touchmove", this._handleFallbackAutoScroll) : xt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var r = n.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? yt(document, "dragover", this._handleAutoScroll) : (yt(document, "pointermove", this._handleFallbackAutoScroll), yt(document, "touchmove", this._handleFallbackAutoScroll), yt(document, "mousemove", this._handleFallbackAutoScroll)), Ku(), Bi(), BE();
    },
    nulling: function() {
      da = sl = Oo = ll = So = fs = ds = null, te.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, r) {
      var o = this, a = (n.touches ? n.touches[0] : n).clientX, i = (n.touches ? n.touches[0] : n).clientY, s = document.elementFromPoint(a, i);
      if (da = n, r || this.options.forceAutoScrollFallback || ui || Sn || ko) {
        ps(n, this.options, s, r);
        var l = Fn(s, !0);
        ll && (!So || a !== fs || i !== ds) && (So && Ku(), So = setInterval(function() {
          var c = Fn(document.elementFromPoint(a, i), !0);
          c !== l && (l = c, Bi()), ps(n, o.options, c, r);
        }, 10), fs = a, ds = i);
      } else {
        if (!this.options.bubbleScroll || Fn(s, !0) === tn()) {
          Bi();
          return;
        }
        ps(n, this.options, Fn(s, !1), !1);
      }
    }
  }, Ue(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Bi() {
  te.forEach(function(t) {
    clearInterval(t.pid);
  }), te = [];
}
function Ku() {
  clearInterval(So);
}
var ps = $p(function(t, e, n, r) {
  if (!!e.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, a = (t.touches ? t.touches[0] : t).clientY, i = e.scrollSensitivity, s = e.scrollSpeed, l = tn(), c = !1, f;
    sl !== n && (sl = n, Bi(), Oo = e.scroll, f = e.scrollFn, Oo === !0 && (Oo = Fn(n, !0)));
    var u = 0, d = Oo;
    do {
      var h = d, m = _t(h), v = m.top, b = m.bottom, g = m.left, p = m.right, E = m.width, x = m.height, S = void 0, w = void 0, C = h.scrollWidth, A = h.scrollHeight, O = rt(h), T = h.scrollLeft, R = h.scrollTop;
      h === l ? (S = E < C && (O.overflowX === "auto" || O.overflowX === "scroll" || O.overflowX === "visible"), w = x < A && (O.overflowY === "auto" || O.overflowY === "scroll" || O.overflowY === "visible")) : (S = E < C && (O.overflowX === "auto" || O.overflowX === "scroll"), w = x < A && (O.overflowY === "auto" || O.overflowY === "scroll"));
      var L = S && (Math.abs(p - o) <= i && T + E < C) - (Math.abs(g - o) <= i && !!T), F = w && (Math.abs(b - a) <= i && R + x < A) - (Math.abs(v - a) <= i && !!R);
      if (!te[u])
        for (var $ = 0; $ <= u; $++)
          te[$] || (te[$] = {});
      (te[u].vx != L || te[u].vy != F || te[u].el !== h) && (te[u].el = h, te[u].vx = L, te[u].vy = F, clearInterval(te[u].pid), (L != 0 || F != 0) && (c = !0, te[u].pid = setInterval(function() {
        r && this.layer === 0 && ft.active._onTouchMove(da);
        var Q = te[this.layer].vy ? te[this.layer].vy * s : 0, U = te[this.layer].vx ? te[this.layer].vx * s : 0;
        typeof f == "function" && f.call(ft.dragged.parentNode[ue], U, Q, t, da, te[this.layer].el) !== "continue" || Lp(te[this.layer].el, U, Q);
      }.bind({
        layer: u
      }), 24))), u++;
    } while (e.bubbleScroll && d !== l && (d = Fn(d, !1)));
    ll = c;
  }
}, 30), Bp = function(e) {
  var n = e.originalEvent, r = e.putSortable, o = e.dragEl, a = e.activeSortable, i = e.dispatchSortableEvent, s = e.hideGhostForTarget, l = e.unhideGhostForTarget;
  if (!!n) {
    var c = r || a;
    s();
    var f = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, u = document.elementFromPoint(f.clientX, f.clientY);
    l(), c && !c.el.contains(u) && (i("spill"), this.onSpill({
      dragEl: o,
      putSortable: r
    }));
  }
};
function sc() {
}
sc.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var n = e.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var o = to(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(n, o) : this.sortable.el.appendChild(n), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Bp
};
Ue(sc, {
  pluginName: "revertOnSpill"
});
function lc() {
}
lc.prototype = {
  onSpill: function(e) {
    var n = e.dragEl, r = e.putSortable, o = r || this.sortable;
    o.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), o.animateAll();
  },
  drop: Bp
};
Ue(lc, {
  pluginName: "removeOnSpill"
});
var Le;
function i0() {
  function t() {
    this.defaults = {
      swapClass: "sortable-swap-highlight"
    };
  }
  return t.prototype = {
    dragStart: function(n) {
      var r = n.dragEl;
      Le = r;
    },
    dragOverValid: function(n) {
      var r = n.completed, o = n.target, a = n.onMove, i = n.activeSortable, s = n.changed, l = n.cancel;
      if (!!i.options.swap) {
        var c = this.sortable.el, f = this.options;
        if (o && o !== c) {
          var u = Le;
          a(o) !== !1 ? (zt(o, f.swapClass, !0), Le = o) : Le = null, u && u !== Le && zt(u, f.swapClass, !1);
        }
        s(), r(!0), l();
      }
    },
    drop: function(n) {
      var r = n.activeSortable, o = n.putSortable, a = n.dragEl, i = o || this.sortable, s = this.options;
      Le && zt(Le, s.swapClass, !1), Le && (s.swap || o && o.options.swap) && a !== Le && (i.captureAnimationState(), i !== r && r.captureAnimationState(), a0(a, Le), i.animateAll(), i !== r && r.animateAll());
    },
    nulling: function() {
      Le = null;
    }
  }, Ue(t, {
    pluginName: "swap",
    eventProperties: function() {
      return {
        swapItem: Le
      };
    }
  });
}
function a0(t, e) {
  var n = t.parentNode, r = e.parentNode, o, a;
  !n || !r || n.isEqualNode(e) || r.isEqualNode(t) || (o = Xt(t), a = Xt(e), n.isEqualNode(r) && o < a && a++, n.insertBefore(e, n.children[o]), r.insertBefore(t, r.children[a]));
}
var ht = [], we = [], fo, He, po = !1, ye = !1, Mr = !1, Mt, ho, Ti;
function s0() {
  function t(e) {
    for (var n in this)
      n.charAt(0) === "_" && typeof this[n] == "function" && (this[n] = this[n].bind(this));
    e.options.supportPointer ? xt(document, "pointerup", this._deselectMultiDrag) : (xt(document, "mouseup", this._deselectMultiDrag), xt(document, "touchend", this._deselectMultiDrag)), xt(document, "keydown", this._checkKeyDown), xt(document, "keyup", this._checkKeyUp), this.defaults = {
      selectedClass: "sortable-selected",
      multiDragKey: null,
      setData: function(o, a) {
        var i = "";
        ht.length && He === e ? ht.forEach(function(s, l) {
          i += (l ? ", " : "") + s.textContent;
        }) : i = a.textContent, o.setData("Text", i);
      }
    };
  }
  return t.prototype = {
    multiDragKeyDown: !1,
    isMultiDrag: !1,
    delayStartGlobal: function(n) {
      var r = n.dragEl;
      Mt = r;
    },
    delayEnded: function() {
      this.isMultiDrag = ~ht.indexOf(Mt);
    },
    setupClone: function(n) {
      var r = n.sortable, o = n.cancel;
      if (!!this.isMultiDrag) {
        for (var a = 0; a < ht.length; a++)
          we.push(ac(ht[a])), we[a].sortableIndex = ht[a].sortableIndex, we[a].draggable = !1, we[a].style["will-change"] = "", zt(we[a], this.options.selectedClass, !1), ht[a] === Mt && zt(we[a], this.options.chosenClass, !1);
        r._hideClone(), o();
      }
    },
    clone: function(n) {
      var r = n.sortable, o = n.rootEl, a = n.dispatchSortableEvent, i = n.cancel;
      !this.isMultiDrag || this.options.removeCloneOnHide || ht.length && He === r && (Wu(!0, o), a("clone"), i());
    },
    showClone: function(n) {
      var r = n.cloneNowShown, o = n.rootEl, a = n.cancel;
      !this.isMultiDrag || (Wu(!1, o), we.forEach(function(i) {
        rt(i, "display", "");
      }), r(), Ti = !1, a());
    },
    hideClone: function(n) {
      var r = this;
      n.sortable;
      var o = n.cloneNowHidden, a = n.cancel;
      !this.isMultiDrag || (we.forEach(function(i) {
        rt(i, "display", "none"), r.options.removeCloneOnHide && i.parentNode && i.parentNode.removeChild(i);
      }), o(), Ti = !0, a());
    },
    dragStartGlobal: function(n) {
      n.sortable, !this.isMultiDrag && He && He.multiDrag._deselectMultiDrag(), ht.forEach(function(r) {
        r.sortableIndex = Xt(r);
      }), ht = ht.sort(function(r, o) {
        return r.sortableIndex - o.sortableIndex;
      }), Mr = !0;
    },
    dragStarted: function(n) {
      var r = this, o = n.sortable;
      if (!!this.isMultiDrag) {
        if (this.options.sort && (o.captureAnimationState(), this.options.animation)) {
          ht.forEach(function(i) {
            i !== Mt && rt(i, "position", "absolute");
          });
          var a = _t(Mt, !1, !0, !0);
          ht.forEach(function(i) {
            i !== Mt && Uu(i, a);
          }), ye = !0, po = !0;
        }
        o.animateAll(function() {
          ye = !1, po = !1, r.options.animation && ht.forEach(function(i) {
            is(i);
          }), r.options.sort && Di();
        });
      }
    },
    dragOver: function(n) {
      var r = n.target, o = n.completed, a = n.cancel;
      ye && ~ht.indexOf(r) && (o(!1), a());
    },
    revert: function(n) {
      var r = n.fromSortable, o = n.rootEl, a = n.sortable, i = n.dragRect;
      ht.length > 1 && (ht.forEach(function(s) {
        a.addAnimationState({
          target: s,
          rect: ye ? _t(s) : i
        }), is(s), s.fromRect = i, r.removeAnimationState(s);
      }), ye = !1, l0(!this.options.removeCloneOnHide, o));
    },
    dragOverCompleted: function(n) {
      var r = n.sortable, o = n.isOwner, a = n.insertion, i = n.activeSortable, s = n.parentEl, l = n.putSortable, c = this.options;
      if (a) {
        if (o && i._hideClone(), po = !1, c.animation && ht.length > 1 && (ye || !o && !i.options.sort && !l)) {
          var f = _t(Mt, !1, !0, !0);
          ht.forEach(function(d) {
            d !== Mt && (Uu(d, f), s.appendChild(d));
          }), ye = !0;
        }
        if (!o)
          if (ye || Di(), ht.length > 1) {
            var u = Ti;
            i._showClone(r), i.options.animation && !Ti && u && we.forEach(function(d) {
              i.addAnimationState({
                target: d,
                rect: ho
              }), d.fromRect = ho, d.thisAnimationDuration = null;
            });
          } else
            i._showClone(r);
      }
    },
    dragOverAnimationCapture: function(n) {
      var r = n.dragRect, o = n.isOwner, a = n.activeSortable;
      if (ht.forEach(function(s) {
        s.thisAnimationDuration = null;
      }), a.options.animation && !o && a.multiDrag.isMultiDrag) {
        ho = Ue({}, r);
        var i = vr(Mt, !0);
        ho.top -= i.f, ho.left -= i.e;
      }
    },
    dragOverAnimationComplete: function() {
      ye && (ye = !1, Di());
    },
    drop: function(n) {
      var r = n.originalEvent, o = n.rootEl, a = n.parentEl, i = n.sortable, s = n.dispatchSortableEvent, l = n.oldIndex, c = n.putSortable, f = c || this.sortable;
      if (!!r) {
        var u = this.options, d = a.children;
        if (!Mr)
          if (u.multiDragKey && !this.multiDragKeyDown && this._deselectMultiDrag(), zt(Mt, u.selectedClass, !~ht.indexOf(Mt)), ~ht.indexOf(Mt))
            ht.splice(ht.indexOf(Mt), 1), fo = null, Eo({
              sortable: i,
              rootEl: o,
              name: "deselect",
              targetEl: Mt,
              originalEvt: r
            });
          else {
            if (ht.push(Mt), Eo({
              sortable: i,
              rootEl: o,
              name: "select",
              targetEl: Mt,
              originalEvt: r
            }), r.shiftKey && fo && i.el.contains(fo)) {
              var h = Xt(fo), m = Xt(Mt);
              if (~h && ~m && h !== m) {
                var v, b;
                for (m > h ? (b = h, v = m) : (b = m, v = h + 1); b < v; b++)
                  ~ht.indexOf(d[b]) || (zt(d[b], u.selectedClass, !0), ht.push(d[b]), Eo({
                    sortable: i,
                    rootEl: o,
                    name: "select",
                    targetEl: d[b],
                    originalEvt: r
                  }));
              }
            } else
              fo = Mt;
            He = f;
          }
        if (Mr && this.isMultiDrag) {
          if (ye = !1, (a[ue].options.sort || a !== o) && ht.length > 1) {
            var g = _t(Mt), p = Xt(Mt, ":not(." + this.options.selectedClass + ")");
            if (!po && u.animation && (Mt.thisAnimationDuration = null), f.captureAnimationState(), !po && (u.animation && (Mt.fromRect = g, ht.forEach(function(x) {
              if (x.thisAnimationDuration = null, x !== Mt) {
                var S = ye ? _t(x) : g;
                x.fromRect = S, f.addAnimationState({
                  target: x,
                  rect: S
                });
              }
            })), Di(), ht.forEach(function(x) {
              d[p] ? a.insertBefore(x, d[p]) : a.appendChild(x), p++;
            }), l === Xt(Mt))) {
              var E = !1;
              ht.forEach(function(x) {
                if (x.sortableIndex !== Xt(x)) {
                  E = !0;
                  return;
                }
              }), E && s("update");
            }
            ht.forEach(function(x) {
              is(x);
            }), f.animateAll();
          }
          He = f;
        }
        (o === a || c && c.lastPutMode !== "clone") && we.forEach(function(x) {
          x.parentNode && x.parentNode.removeChild(x);
        });
      }
    },
    nullingGlobal: function() {
      this.isMultiDrag = Mr = !1, we.length = 0;
    },
    destroyGlobal: function() {
      this._deselectMultiDrag(), yt(document, "pointerup", this._deselectMultiDrag), yt(document, "mouseup", this._deselectMultiDrag), yt(document, "touchend", this._deselectMultiDrag), yt(document, "keydown", this._checkKeyDown), yt(document, "keyup", this._checkKeyUp);
    },
    _deselectMultiDrag: function(n) {
      if (!(typeof Mr < "u" && Mr) && He === this.sortable && !(n && We(n.target, this.options.draggable, this.sortable.el, !1)) && !(n && n.button !== 0))
        for (; ht.length; ) {
          var r = ht[0];
          zt(r, this.options.selectedClass, !1), ht.shift(), Eo({
            sortable: this.sortable,
            rootEl: this.sortable.el,
            name: "deselect",
            targetEl: r,
            originalEvt: n
          });
        }
    },
    _checkKeyDown: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !0);
    },
    _checkKeyUp: function(n) {
      n.key === this.options.multiDragKey && (this.multiDragKeyDown = !1);
    }
  }, Ue(t, {
    pluginName: "multiDrag",
    utils: {
      select: function(n) {
        var r = n.parentNode[ue];
        !r || !r.options.multiDrag || ~ht.indexOf(n) || (He && He !== r && (He.multiDrag._deselectMultiDrag(), He = r), zt(n, r.options.selectedClass, !0), ht.push(n));
      },
      deselect: function(n) {
        var r = n.parentNode[ue], o = ht.indexOf(n);
        !r || !r.options.multiDrag || !~o || (zt(n, r.options.selectedClass, !1), ht.splice(o, 1));
      }
    },
    eventProperties: function() {
      var n = this, r = [], o = [];
      return ht.forEach(function(a) {
        r.push({
          multiDragElement: a,
          index: a.sortableIndex
        });
        var i;
        ye && a !== Mt ? i = -1 : ye ? i = Xt(a, ":not(." + n.options.selectedClass + ")") : i = Xt(a), o.push({
          multiDragElement: a,
          index: i
        });
      }), {
        items: PE(ht),
        clones: [].concat(we),
        oldIndicies: r,
        newIndicies: o
      };
    },
    optionListeners: {
      multiDragKey: function(n) {
        return n = n.toLowerCase(), n === "ctrl" ? n = "Control" : n.length > 1 && (n = n.charAt(0).toUpperCase() + n.substr(1)), n;
      }
    }
  });
}
function l0(t, e) {
  ht.forEach(function(n, r) {
    var o = e.children[n.sortableIndex + (t ? Number(r) : 0)];
    o ? e.insertBefore(n, o) : e.appendChild(n);
  });
}
function Wu(t, e) {
  we.forEach(function(n, r) {
    var o = e.children[n.sortableIndex + (t ? Number(r) : 0)];
    o ? e.insertBefore(n, o) : e.appendChild(n);
  });
}
function Di() {
  ht.forEach(function(t) {
    t !== Mt && t.parentNode && t.parentNode.removeChild(t);
  });
}
ft.mount(new o0());
ft.mount(lc, sc);
const c0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ft,
  MultiDrag: s0,
  Sortable: ft,
  Swap: i0
}, Symbol.toStringTag, { value: "Module" })), u0 = /* @__PURE__ */ Ip(c0);
(function(t, e) {
  (function(r, o) {
    t.exports = o(TE, u0);
  })(typeof self < "u" ? self : NE, function(n, r) {
    return function(o) {
      var a = {};
      function i(s) {
        if (a[s])
          return a[s].exports;
        var l = a[s] = {
          i: s,
          l: !1,
          exports: {}
        };
        return o[s].call(l.exports, l, l.exports, i), l.l = !0, l.exports;
      }
      return i.m = o, i.c = a, i.d = function(s, l, c) {
        i.o(s, l) || Object.defineProperty(s, l, { enumerable: !0, get: c });
      }, i.r = function(s) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(s, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(s, "__esModule", { value: !0 });
      }, i.t = function(s, l) {
        if (l & 1 && (s = i(s)), l & 8 || l & 4 && typeof s == "object" && s && s.__esModule)
          return s;
        var c = /* @__PURE__ */ Object.create(null);
        if (i.r(c), Object.defineProperty(c, "default", { enumerable: !0, value: s }), l & 2 && typeof s != "string")
          for (var f in s)
            i.d(c, f, function(u) {
              return s[u];
            }.bind(null, f));
        return c;
      }, i.n = function(s) {
        var l = s && s.__esModule ? function() {
          return s.default;
        } : function() {
          return s;
        };
        return i.d(l, "a", l), l;
      }, i.o = function(s, l) {
        return Object.prototype.hasOwnProperty.call(s, l);
      }, i.p = "", i(i.s = "fb15");
    }({
      "00ee": function(o, a, i) {
        var s = i("b622"), l = s("toStringTag"), c = {};
        c[l] = "z", o.exports = String(c) === "[object z]";
      },
      "0366": function(o, a, i) {
        var s = i("1c0b");
        o.exports = function(l, c, f) {
          if (s(l), c === void 0)
            return l;
          switch (f) {
            case 0:
              return function() {
                return l.call(c);
              };
            case 1:
              return function(u) {
                return l.call(c, u);
              };
            case 2:
              return function(u, d) {
                return l.call(c, u, d);
              };
            case 3:
              return function(u, d, h) {
                return l.call(c, u, d, h);
              };
          }
          return function() {
            return l.apply(c, arguments);
          };
        };
      },
      "057f": function(o, a, i) {
        var s = i("fc6a"), l = i("241c").f, c = {}.toString, f = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], u = function(d) {
          try {
            return l(d);
          } catch {
            return f.slice();
          }
        };
        o.exports.f = function(h) {
          return f && c.call(h) == "[object Window]" ? u(h) : l(s(h));
        };
      },
      "06cf": function(o, a, i) {
        var s = i("83ab"), l = i("d1e7"), c = i("5c6c"), f = i("fc6a"), u = i("c04e"), d = i("5135"), h = i("0cfb"), m = Object.getOwnPropertyDescriptor;
        a.f = s ? m : function(b, g) {
          if (b = f(b), g = u(g, !0), h)
            try {
              return m(b, g);
            } catch {
            }
          if (d(b, g))
            return c(!l.f.call(b, g), b[g]);
        };
      },
      "0cfb": function(o, a, i) {
        var s = i("83ab"), l = i("d039"), c = i("cc12");
        o.exports = !s && !l(function() {
          return Object.defineProperty(c("div"), "a", {
            get: function() {
              return 7;
            }
          }).a != 7;
        });
      },
      "13d5": function(o, a, i) {
        var s = i("23e7"), l = i("d58f").left, c = i("a640"), f = i("ae40"), u = c("reduce"), d = f("reduce", { 1: 0 });
        s({ target: "Array", proto: !0, forced: !u || !d }, {
          reduce: function(m) {
            return l(this, m, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "14c3": function(o, a, i) {
        var s = i("c6b6"), l = i("9263");
        o.exports = function(c, f) {
          var u = c.exec;
          if (typeof u == "function") {
            var d = u.call(c, f);
            if (typeof d != "object")
              throw TypeError("RegExp exec method returned something other than an Object or null");
            return d;
          }
          if (s(c) !== "RegExp")
            throw TypeError("RegExp#exec called on incompatible receiver");
          return l.call(c, f);
        };
      },
      "159b": function(o, a, i) {
        var s = i("da84"), l = i("fdbc"), c = i("17c2"), f = i("9112");
        for (var u in l) {
          var d = s[u], h = d && d.prototype;
          if (h && h.forEach !== c)
            try {
              f(h, "forEach", c);
            } catch {
              h.forEach = c;
            }
        }
      },
      "17c2": function(o, a, i) {
        var s = i("b727").forEach, l = i("a640"), c = i("ae40"), f = l("forEach"), u = c("forEach");
        o.exports = !f || !u ? function(h) {
          return s(this, h, arguments.length > 1 ? arguments[1] : void 0);
        } : [].forEach;
      },
      "1be4": function(o, a, i) {
        var s = i("d066");
        o.exports = s("document", "documentElement");
      },
      "1c0b": function(o, a) {
        o.exports = function(i) {
          if (typeof i != "function")
            throw TypeError(String(i) + " is not a function");
          return i;
        };
      },
      "1c7e": function(o, a, i) {
        var s = i("b622"), l = s("iterator"), c = !1;
        try {
          var f = 0, u = {
            next: function() {
              return { done: !!f++ };
            },
            return: function() {
              c = !0;
            }
          };
          u[l] = function() {
            return this;
          }, Array.from(u, function() {
            throw 2;
          });
        } catch {
        }
        o.exports = function(d, h) {
          if (!h && !c)
            return !1;
          var m = !1;
          try {
            var v = {};
            v[l] = function() {
              return {
                next: function() {
                  return { done: m = !0 };
                }
              };
            }, d(v);
          } catch {
          }
          return m;
        };
      },
      "1d80": function(o, a) {
        o.exports = function(i) {
          if (i == null)
            throw TypeError("Can't call method on " + i);
          return i;
        };
      },
      "1dde": function(o, a, i) {
        var s = i("d039"), l = i("b622"), c = i("2d00"), f = l("species");
        o.exports = function(u) {
          return c >= 51 || !s(function() {
            var d = [], h = d.constructor = {};
            return h[f] = function() {
              return { foo: 1 };
            }, d[u](Boolean).foo !== 1;
          });
        };
      },
      "23cb": function(o, a, i) {
        var s = i("a691"), l = Math.max, c = Math.min;
        o.exports = function(f, u) {
          var d = s(f);
          return d < 0 ? l(d + u, 0) : c(d, u);
        };
      },
      "23e7": function(o, a, i) {
        var s = i("da84"), l = i("06cf").f, c = i("9112"), f = i("6eeb"), u = i("ce4e"), d = i("e893"), h = i("94ca");
        o.exports = function(m, v) {
          var b = m.target, g = m.global, p = m.stat, E, x, S, w, C, A;
          if (g ? x = s : p ? x = s[b] || u(b, {}) : x = (s[b] || {}).prototype, x)
            for (S in v) {
              if (C = v[S], m.noTargetGet ? (A = l(x, S), w = A && A.value) : w = x[S], E = h(g ? S : b + (p ? "." : "#") + S, m.forced), !E && w !== void 0) {
                if (typeof C == typeof w)
                  continue;
                d(C, w);
              }
              (m.sham || w && w.sham) && c(C, "sham", !0), f(x, S, C, m);
            }
        };
      },
      "241c": function(o, a, i) {
        var s = i("ca84"), l = i("7839"), c = l.concat("length", "prototype");
        a.f = Object.getOwnPropertyNames || function(u) {
          return s(u, c);
        };
      },
      "25f0": function(o, a, i) {
        var s = i("6eeb"), l = i("825a"), c = i("d039"), f = i("ad6d"), u = "toString", d = RegExp.prototype, h = d[u], m = c(function() {
          return h.call({ source: "a", flags: "b" }) != "/a/b";
        }), v = h.name != u;
        (m || v) && s(RegExp.prototype, u, function() {
          var g = l(this), p = String(g.source), E = g.flags, x = String(E === void 0 && g instanceof RegExp && !("flags" in d) ? f.call(g) : E);
          return "/" + p + "/" + x;
        }, { unsafe: !0 });
      },
      "2ca0": function(o, a, i) {
        var s = i("23e7"), l = i("06cf").f, c = i("50c4"), f = i("5a34"), u = i("1d80"), d = i("ab13"), h = i("c430"), m = "".startsWith, v = Math.min, b = d("startsWith"), g = !h && !b && !!function() {
          var p = l(String.prototype, "startsWith");
          return p && !p.writable;
        }();
        s({ target: "String", proto: !0, forced: !g && !b }, {
          startsWith: function(E) {
            var x = String(u(this));
            f(E);
            var S = c(v(arguments.length > 1 ? arguments[1] : void 0, x.length)), w = String(E);
            return m ? m.call(x, w, S) : x.slice(S, S + w.length) === w;
          }
        });
      },
      "2d00": function(o, a, i) {
        var s = i("da84"), l = i("342f");
        s.process;
        var c, f;
        l && (c = l.match(/Edge\/(\d+)/), (!c || c[1] >= 74) && (c = l.match(/Chrome\/(\d+)/), c && (f = c[1]))), o.exports = f && +f;
      },
      "342f": function(o, a, i) {
        var s = i("d066");
        o.exports = s("navigator", "userAgent") || "";
      },
      "35a1": function(o, a, i) {
        var s = i("f5df"), l = i("3f8c"), c = i("b622"), f = c("iterator");
        o.exports = function(u) {
          if (u != null)
            return u[f] || u["@@iterator"] || l[s(u)];
        };
      },
      "37e8": function(o, a, i) {
        var s = i("83ab"), l = i("9bf2"), c = i("825a"), f = i("df75");
        o.exports = s ? Object.defineProperties : function(d, h) {
          c(d);
          for (var m = f(h), v = m.length, b = 0, g; v > b; )
            l.f(d, g = m[b++], h[g]);
          return d;
        };
      },
      "3bbe": function(o, a, i) {
        var s = i("861d");
        o.exports = function(l) {
          if (!s(l) && l !== null)
            throw TypeError("Can't set " + String(l) + " as a prototype");
          return l;
        };
      },
      "3ca3": function(o, a, i) {
        var s = i("6547").charAt, l = i("69f3"), c = i("7dd0"), f = "String Iterator", u = l.set, d = l.getterFor(f);
        c(String, "String", function(h) {
          u(this, {
            type: f,
            string: String(h),
            index: 0
          });
        }, function() {
          var m = d(this), v = m.string, b = m.index, g;
          return b >= v.length ? { value: void 0, done: !0 } : (g = s(v, b), m.index += g.length, { value: g, done: !1 });
        });
      },
      "3f8c": function(o, a) {
        o.exports = {};
      },
      4160: function(o, a, i) {
        var s = i("23e7"), l = i("17c2");
        s({ target: "Array", proto: !0, forced: [].forEach != l }, {
          forEach: l
        });
      },
      "428f": function(o, a, i) {
        var s = i("da84");
        o.exports = s;
      },
      "44ad": function(o, a, i) {
        var s = i("d039"), l = i("c6b6"), c = "".split;
        o.exports = s(function() {
          return !Object("z").propertyIsEnumerable(0);
        }) ? function(f) {
          return l(f) == "String" ? c.call(f, "") : Object(f);
        } : Object;
      },
      "44d2": function(o, a, i) {
        var s = i("b622"), l = i("7c73"), c = i("9bf2"), f = s("unscopables"), u = Array.prototype;
        u[f] == null && c.f(u, f, {
          configurable: !0,
          value: l(null)
        }), o.exports = function(d) {
          u[f][d] = !0;
        };
      },
      "44e7": function(o, a, i) {
        var s = i("861d"), l = i("c6b6"), c = i("b622"), f = c("match");
        o.exports = function(u) {
          var d;
          return s(u) && ((d = u[f]) !== void 0 ? !!d : l(u) == "RegExp");
        };
      },
      4930: function(o, a, i) {
        var s = i("d039");
        o.exports = !!Object.getOwnPropertySymbols && !s(function() {
          return !String(Symbol());
        });
      },
      "4d64": function(o, a, i) {
        var s = i("fc6a"), l = i("50c4"), c = i("23cb"), f = function(u) {
          return function(d, h, m) {
            var v = s(d), b = l(v.length), g = c(m, b), p;
            if (u && h != h) {
              for (; b > g; )
                if (p = v[g++], p != p)
                  return !0;
            } else
              for (; b > g; g++)
                if ((u || g in v) && v[g] === h)
                  return u || g || 0;
            return !u && -1;
          };
        };
        o.exports = {
          includes: f(!0),
          indexOf: f(!1)
        };
      },
      "4de4": function(o, a, i) {
        var s = i("23e7"), l = i("b727").filter, c = i("1dde"), f = i("ae40"), u = c("filter"), d = f("filter");
        s({ target: "Array", proto: !0, forced: !u || !d }, {
          filter: function(m) {
            return l(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      "4df4": function(o, a, i) {
        var s = i("0366"), l = i("7b0b"), c = i("9bdd"), f = i("e95a"), u = i("50c4"), d = i("8418"), h = i("35a1");
        o.exports = function(v) {
          var b = l(v), g = typeof this == "function" ? this : Array, p = arguments.length, E = p > 1 ? arguments[1] : void 0, x = E !== void 0, S = h(b), w = 0, C, A, O, T, R, L;
          if (x && (E = s(E, p > 2 ? arguments[2] : void 0, 2)), S != null && !(g == Array && f(S)))
            for (T = S.call(b), R = T.next, A = new g(); !(O = R.call(T)).done; w++)
              L = x ? c(T, E, [O.value, w], !0) : O.value, d(A, w, L);
          else
            for (C = u(b.length), A = new g(C); C > w; w++)
              L = x ? E(b[w], w) : b[w], d(A, w, L);
          return A.length = w, A;
        };
      },
      "4fad": function(o, a, i) {
        var s = i("23e7"), l = i("6f53").entries;
        s({ target: "Object", stat: !0 }, {
          entries: function(f) {
            return l(f);
          }
        });
      },
      "50c4": function(o, a, i) {
        var s = i("a691"), l = Math.min;
        o.exports = function(c) {
          return c > 0 ? l(s(c), 9007199254740991) : 0;
        };
      },
      5135: function(o, a) {
        var i = {}.hasOwnProperty;
        o.exports = function(s, l) {
          return i.call(s, l);
        };
      },
      5319: function(o, a, i) {
        var s = i("d784"), l = i("825a"), c = i("7b0b"), f = i("50c4"), u = i("a691"), d = i("1d80"), h = i("8aa5"), m = i("14c3"), v = Math.max, b = Math.min, g = Math.floor, p = /\$([$&'`]|\d\d?|<[^>]*>)/g, E = /\$([$&'`]|\d\d?)/g, x = function(S) {
          return S === void 0 ? S : String(S);
        };
        s("replace", 2, function(S, w, C, A) {
          var O = A.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE, T = A.REPLACE_KEEPS_$0, R = O ? "$" : "$0";
          return [
            function($, Q) {
              var U = d(this), _ = $ == null ? void 0 : $[S];
              return _ !== void 0 ? _.call($, U, Q) : w.call(String(U), $, Q);
            },
            function(F, $) {
              if (!O && T || typeof $ == "string" && $.indexOf(R) === -1) {
                var Q = C(w, F, this, $);
                if (Q.done)
                  return Q.value;
              }
              var U = l(F), _ = String(this), Z = typeof $ == "function";
              Z || ($ = String($));
              var wt = U.global;
              if (wt) {
                var Kt = U.unicode;
                U.lastIndex = 0;
              }
              for (var It = []; ; ) {
                var At = m(U, _);
                if (At === null || (It.push(At), !wt))
                  break;
                var Ut = String(At[0]);
                Ut === "" && (U.lastIndex = h(_, f(U.lastIndex), Kt));
              }
              for (var Pt = "", Bt = 0, Rt = 0; Rt < It.length; Rt++) {
                At = It[Rt];
                for (var Lt = String(At[0]), Wt = v(b(u(At.index), _.length), 0), qt = [], Re = 1; Re < At.length; Re++)
                  qt.push(x(At[Re]));
                var me = At.groups;
                if (Z) {
                  var Me = [Lt].concat(qt, Wt, _);
                  me !== void 0 && Me.push(me);
                  var Qt = String($.apply(void 0, Me));
                } else
                  Qt = L(Lt, _, Wt, qt, me, $);
                Wt >= Bt && (Pt += _.slice(Bt, Wt) + Qt, Bt = Wt + Lt.length);
              }
              return Pt + _.slice(Bt);
            }
          ];
          function L(F, $, Q, U, _, Z) {
            var wt = Q + F.length, Kt = U.length, It = E;
            return _ !== void 0 && (_ = c(_), It = p), w.call(Z, It, function(At, Ut) {
              var Pt;
              switch (Ut.charAt(0)) {
                case "$":
                  return "$";
                case "&":
                  return F;
                case "`":
                  return $.slice(0, Q);
                case "'":
                  return $.slice(wt);
                case "<":
                  Pt = _[Ut.slice(1, -1)];
                  break;
                default:
                  var Bt = +Ut;
                  if (Bt === 0)
                    return At;
                  if (Bt > Kt) {
                    var Rt = g(Bt / 10);
                    return Rt === 0 ? At : Rt <= Kt ? U[Rt - 1] === void 0 ? Ut.charAt(1) : U[Rt - 1] + Ut.charAt(1) : At;
                  }
                  Pt = U[Bt - 1];
              }
              return Pt === void 0 ? "" : Pt;
            });
          }
        });
      },
      5692: function(o, a, i) {
        var s = i("c430"), l = i("c6cd");
        (o.exports = function(c, f) {
          return l[c] || (l[c] = f !== void 0 ? f : {});
        })("versions", []).push({
          version: "3.6.5",
          mode: s ? "pure" : "global",
          copyright: "\xA9 2020 Denis Pushkarev (zloirock.ru)"
        });
      },
      "56ef": function(o, a, i) {
        var s = i("d066"), l = i("241c"), c = i("7418"), f = i("825a");
        o.exports = s("Reflect", "ownKeys") || function(d) {
          var h = l.f(f(d)), m = c.f;
          return m ? h.concat(m(d)) : h;
        };
      },
      "5a34": function(o, a, i) {
        var s = i("44e7");
        o.exports = function(l) {
          if (s(l))
            throw TypeError("The method doesn't accept regular expressions");
          return l;
        };
      },
      "5c6c": function(o, a) {
        o.exports = function(i, s) {
          return {
            enumerable: !(i & 1),
            configurable: !(i & 2),
            writable: !(i & 4),
            value: s
          };
        };
      },
      "5db7": function(o, a, i) {
        var s = i("23e7"), l = i("a2bf"), c = i("7b0b"), f = i("50c4"), u = i("1c0b"), d = i("65f0");
        s({ target: "Array", proto: !0 }, {
          flatMap: function(m) {
            var v = c(this), b = f(v.length), g;
            return u(m), g = d(v, 0), g.length = l(g, v, v, b, 0, 1, m, arguments.length > 1 ? arguments[1] : void 0), g;
          }
        });
      },
      6547: function(o, a, i) {
        var s = i("a691"), l = i("1d80"), c = function(f) {
          return function(u, d) {
            var h = String(l(u)), m = s(d), v = h.length, b, g;
            return m < 0 || m >= v ? f ? "" : void 0 : (b = h.charCodeAt(m), b < 55296 || b > 56319 || m + 1 === v || (g = h.charCodeAt(m + 1)) < 56320 || g > 57343 ? f ? h.charAt(m) : b : f ? h.slice(m, m + 2) : (b - 55296 << 10) + (g - 56320) + 65536);
          };
        };
        o.exports = {
          codeAt: c(!1),
          charAt: c(!0)
        };
      },
      "65f0": function(o, a, i) {
        var s = i("861d"), l = i("e8b5"), c = i("b622"), f = c("species");
        o.exports = function(u, d) {
          var h;
          return l(u) && (h = u.constructor, typeof h == "function" && (h === Array || l(h.prototype)) ? h = void 0 : s(h) && (h = h[f], h === null && (h = void 0))), new (h === void 0 ? Array : h)(d === 0 ? 0 : d);
        };
      },
      "69f3": function(o, a, i) {
        var s = i("7f9a"), l = i("da84"), c = i("861d"), f = i("9112"), u = i("5135"), d = i("f772"), h = i("d012"), m = l.WeakMap, v, b, g, p = function(O) {
          return g(O) ? b(O) : v(O, {});
        }, E = function(O) {
          return function(T) {
            var R;
            if (!c(T) || (R = b(T)).type !== O)
              throw TypeError("Incompatible receiver, " + O + " required");
            return R;
          };
        };
        if (s) {
          var x = new m(), S = x.get, w = x.has, C = x.set;
          v = function(O, T) {
            return C.call(x, O, T), T;
          }, b = function(O) {
            return S.call(x, O) || {};
          }, g = function(O) {
            return w.call(x, O);
          };
        } else {
          var A = d("state");
          h[A] = !0, v = function(O, T) {
            return f(O, A, T), T;
          }, b = function(O) {
            return u(O, A) ? O[A] : {};
          }, g = function(O) {
            return u(O, A);
          };
        }
        o.exports = {
          set: v,
          get: b,
          has: g,
          enforce: p,
          getterFor: E
        };
      },
      "6eeb": function(o, a, i) {
        var s = i("da84"), l = i("9112"), c = i("5135"), f = i("ce4e"), u = i("8925"), d = i("69f3"), h = d.get, m = d.enforce, v = String(String).split("String");
        (o.exports = function(b, g, p, E) {
          var x = E ? !!E.unsafe : !1, S = E ? !!E.enumerable : !1, w = E ? !!E.noTargetGet : !1;
          if (typeof p == "function" && (typeof g == "string" && !c(p, "name") && l(p, "name", g), m(p).source = v.join(typeof g == "string" ? g : "")), b === s) {
            S ? b[g] = p : f(g, p);
            return;
          } else
            x ? !w && b[g] && (S = !0) : delete b[g];
          S ? b[g] = p : l(b, g, p);
        })(Function.prototype, "toString", function() {
          return typeof this == "function" && h(this).source || u(this);
        });
      },
      "6f53": function(o, a, i) {
        var s = i("83ab"), l = i("df75"), c = i("fc6a"), f = i("d1e7").f, u = function(d) {
          return function(h) {
            for (var m = c(h), v = l(m), b = v.length, g = 0, p = [], E; b > g; )
              E = v[g++], (!s || f.call(m, E)) && p.push(d ? [E, m[E]] : m[E]);
            return p;
          };
        };
        o.exports = {
          entries: u(!0),
          values: u(!1)
        };
      },
      "73d9": function(o, a, i) {
        var s = i("44d2");
        s("flatMap");
      },
      7418: function(o, a) {
        a.f = Object.getOwnPropertySymbols;
      },
      "746f": function(o, a, i) {
        var s = i("428f"), l = i("5135"), c = i("e538"), f = i("9bf2").f;
        o.exports = function(u) {
          var d = s.Symbol || (s.Symbol = {});
          l(d, u) || f(d, u, {
            value: c.f(u)
          });
        };
      },
      7839: function(o, a) {
        o.exports = [
          "constructor",
          "hasOwnProperty",
          "isPrototypeOf",
          "propertyIsEnumerable",
          "toLocaleString",
          "toString",
          "valueOf"
        ];
      },
      "7b0b": function(o, a, i) {
        var s = i("1d80");
        o.exports = function(l) {
          return Object(s(l));
        };
      },
      "7c73": function(o, a, i) {
        var s = i("825a"), l = i("37e8"), c = i("7839"), f = i("d012"), u = i("1be4"), d = i("cc12"), h = i("f772"), m = ">", v = "<", b = "prototype", g = "script", p = h("IE_PROTO"), E = function() {
        }, x = function(O) {
          return v + g + m + O + v + "/" + g + m;
        }, S = function(O) {
          O.write(x("")), O.close();
          var T = O.parentWindow.Object;
          return O = null, T;
        }, w = function() {
          var O = d("iframe"), T = "java" + g + ":", R;
          return O.style.display = "none", u.appendChild(O), O.src = String(T), R = O.contentWindow.document, R.open(), R.write(x("document.F=Object")), R.close(), R.F;
        }, C, A = function() {
          try {
            C = document.domain && new ActiveXObject("htmlfile");
          } catch {
          }
          A = C ? S(C) : w();
          for (var O = c.length; O--; )
            delete A[b][c[O]];
          return A();
        };
        f[p] = !0, o.exports = Object.create || function(T, R) {
          var L;
          return T !== null ? (E[b] = s(T), L = new E(), E[b] = null, L[p] = T) : L = A(), R === void 0 ? L : l(L, R);
        };
      },
      "7dd0": function(o, a, i) {
        var s = i("23e7"), l = i("9ed3"), c = i("e163"), f = i("d2bb"), u = i("d44e"), d = i("9112"), h = i("6eeb"), m = i("b622"), v = i("c430"), b = i("3f8c"), g = i("ae93"), p = g.IteratorPrototype, E = g.BUGGY_SAFARI_ITERATORS, x = m("iterator"), S = "keys", w = "values", C = "entries", A = function() {
          return this;
        };
        o.exports = function(O, T, R, L, F, $, Q) {
          l(R, T, L);
          var U = function(Rt) {
            if (Rt === F && It)
              return It;
            if (!E && Rt in wt)
              return wt[Rt];
            switch (Rt) {
              case S:
                return function() {
                  return new R(this, Rt);
                };
              case w:
                return function() {
                  return new R(this, Rt);
                };
              case C:
                return function() {
                  return new R(this, Rt);
                };
            }
            return function() {
              return new R(this);
            };
          }, _ = T + " Iterator", Z = !1, wt = O.prototype, Kt = wt[x] || wt["@@iterator"] || F && wt[F], It = !E && Kt || U(F), At = T == "Array" && wt.entries || Kt, Ut, Pt, Bt;
          if (At && (Ut = c(At.call(new O())), p !== Object.prototype && Ut.next && (!v && c(Ut) !== p && (f ? f(Ut, p) : typeof Ut[x] != "function" && d(Ut, x, A)), u(Ut, _, !0, !0), v && (b[_] = A))), F == w && Kt && Kt.name !== w && (Z = !0, It = function() {
            return Kt.call(this);
          }), (!v || Q) && wt[x] !== It && d(wt, x, It), b[T] = It, F)
            if (Pt = {
              values: U(w),
              keys: $ ? It : U(S),
              entries: U(C)
            }, Q)
              for (Bt in Pt)
                (E || Z || !(Bt in wt)) && h(wt, Bt, Pt[Bt]);
            else
              s({ target: T, proto: !0, forced: E || Z }, Pt);
          return Pt;
        };
      },
      "7f9a": function(o, a, i) {
        var s = i("da84"), l = i("8925"), c = s.WeakMap;
        o.exports = typeof c == "function" && /native code/.test(l(c));
      },
      "825a": function(o, a, i) {
        var s = i("861d");
        o.exports = function(l) {
          if (!s(l))
            throw TypeError(String(l) + " is not an object");
          return l;
        };
      },
      "83ab": function(o, a, i) {
        var s = i("d039");
        o.exports = !s(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        });
      },
      8418: function(o, a, i) {
        var s = i("c04e"), l = i("9bf2"), c = i("5c6c");
        o.exports = function(f, u, d) {
          var h = s(u);
          h in f ? l.f(f, h, c(0, d)) : f[h] = d;
        };
      },
      "861d": function(o, a) {
        o.exports = function(i) {
          return typeof i == "object" ? i !== null : typeof i == "function";
        };
      },
      8875: function(o, a, i) {
        var s, l, c;
        (function(f, u) {
          l = [], s = u, c = typeof s == "function" ? s.apply(a, l) : s, c !== void 0 && (o.exports = c);
        })(typeof self < "u" ? self : this, function() {
          function f() {
            var u = Object.getOwnPropertyDescriptor(document, "currentScript");
            if (!u && "currentScript" in document && document.currentScript || u && u.get !== f && document.currentScript)
              return document.currentScript;
            try {
              throw new Error();
            } catch (C) {
              var d = /.*at [^(]*\((.*):(.+):(.+)\)$/ig, h = /@([^@]*):(\d+):(\d+)\s*$/ig, m = d.exec(C.stack) || h.exec(C.stack), v = m && m[1] || !1, b = m && m[2] || !1, g = document.location.href.replace(document.location.hash, ""), p, E, x, S = document.getElementsByTagName("script");
              v === g && (p = document.documentElement.outerHTML, E = new RegExp("(?:[^\\n]+?\\n){0," + (b - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), x = p.replace(E, "$1").trim());
              for (var w = 0; w < S.length; w++)
                if (S[w].readyState === "interactive" || S[w].src === v || v === g && S[w].innerHTML && S[w].innerHTML.trim() === x)
                  return S[w];
              return null;
            }
          }
          return f;
        });
      },
      8925: function(o, a, i) {
        var s = i("c6cd"), l = Function.toString;
        typeof s.inspectSource != "function" && (s.inspectSource = function(c) {
          return l.call(c);
        }), o.exports = s.inspectSource;
      },
      "8aa5": function(o, a, i) {
        var s = i("6547").charAt;
        o.exports = function(l, c, f) {
          return c + (f ? s(l, c).length : 1);
        };
      },
      "8bbf": function(o, a) {
        o.exports = n;
      },
      "90e3": function(o, a) {
        var i = 0, s = Math.random();
        o.exports = function(l) {
          return "Symbol(" + String(l === void 0 ? "" : l) + ")_" + (++i + s).toString(36);
        };
      },
      9112: function(o, a, i) {
        var s = i("83ab"), l = i("9bf2"), c = i("5c6c");
        o.exports = s ? function(f, u, d) {
          return l.f(f, u, c(1, d));
        } : function(f, u, d) {
          return f[u] = d, f;
        };
      },
      9263: function(o, a, i) {
        var s = i("ad6d"), l = i("9f7f"), c = RegExp.prototype.exec, f = String.prototype.replace, u = c, d = function() {
          var b = /a/, g = /b*/g;
          return c.call(b, "a"), c.call(g, "a"), b.lastIndex !== 0 || g.lastIndex !== 0;
        }(), h = l.UNSUPPORTED_Y || l.BROKEN_CARET, m = /()??/.exec("")[1] !== void 0, v = d || m || h;
        v && (u = function(g) {
          var p = this, E, x, S, w, C = h && p.sticky, A = s.call(p), O = p.source, T = 0, R = g;
          return C && (A = A.replace("y", ""), A.indexOf("g") === -1 && (A += "g"), R = String(g).slice(p.lastIndex), p.lastIndex > 0 && (!p.multiline || p.multiline && g[p.lastIndex - 1] !== `
`) && (O = "(?: " + O + ")", R = " " + R, T++), x = new RegExp("^(?:" + O + ")", A)), m && (x = new RegExp("^" + O + "$(?!\\s)", A)), d && (E = p.lastIndex), S = c.call(C ? x : p, R), C ? S ? (S.input = S.input.slice(T), S[0] = S[0].slice(T), S.index = p.lastIndex, p.lastIndex += S[0].length) : p.lastIndex = 0 : d && S && (p.lastIndex = p.global ? S.index + S[0].length : E), m && S && S.length > 1 && f.call(S[0], x, function() {
            for (w = 1; w < arguments.length - 2; w++)
              arguments[w] === void 0 && (S[w] = void 0);
          }), S;
        }), o.exports = u;
      },
      "94ca": function(o, a, i) {
        var s = i("d039"), l = /#|\.prototype\./, c = function(m, v) {
          var b = u[f(m)];
          return b == h ? !0 : b == d ? !1 : typeof v == "function" ? s(v) : !!v;
        }, f = c.normalize = function(m) {
          return String(m).replace(l, ".").toLowerCase();
        }, u = c.data = {}, d = c.NATIVE = "N", h = c.POLYFILL = "P";
        o.exports = c;
      },
      "99af": function(o, a, i) {
        var s = i("23e7"), l = i("d039"), c = i("e8b5"), f = i("861d"), u = i("7b0b"), d = i("50c4"), h = i("8418"), m = i("65f0"), v = i("1dde"), b = i("b622"), g = i("2d00"), p = b("isConcatSpreadable"), E = 9007199254740991, x = "Maximum allowed index exceeded", S = g >= 51 || !l(function() {
          var O = [];
          return O[p] = !1, O.concat()[0] !== O;
        }), w = v("concat"), C = function(O) {
          if (!f(O))
            return !1;
          var T = O[p];
          return T !== void 0 ? !!T : c(O);
        }, A = !S || !w;
        s({ target: "Array", proto: !0, forced: A }, {
          concat: function(T) {
            var R = u(this), L = m(R, 0), F = 0, $, Q, U, _, Z;
            for ($ = -1, U = arguments.length; $ < U; $++)
              if (Z = $ === -1 ? R : arguments[$], C(Z)) {
                if (_ = d(Z.length), F + _ > E)
                  throw TypeError(x);
                for (Q = 0; Q < _; Q++, F++)
                  Q in Z && h(L, F, Z[Q]);
              } else {
                if (F >= E)
                  throw TypeError(x);
                h(L, F++, Z);
              }
            return L.length = F, L;
          }
        });
      },
      "9bdd": function(o, a, i) {
        var s = i("825a");
        o.exports = function(l, c, f, u) {
          try {
            return u ? c(s(f)[0], f[1]) : c(f);
          } catch (h) {
            var d = l.return;
            throw d !== void 0 && s(d.call(l)), h;
          }
        };
      },
      "9bf2": function(o, a, i) {
        var s = i("83ab"), l = i("0cfb"), c = i("825a"), f = i("c04e"), u = Object.defineProperty;
        a.f = s ? u : function(h, m, v) {
          if (c(h), m = f(m, !0), c(v), l)
            try {
              return u(h, m, v);
            } catch {
            }
          if ("get" in v || "set" in v)
            throw TypeError("Accessors not supported");
          return "value" in v && (h[m] = v.value), h;
        };
      },
      "9ed3": function(o, a, i) {
        var s = i("ae93").IteratorPrototype, l = i("7c73"), c = i("5c6c"), f = i("d44e"), u = i("3f8c"), d = function() {
          return this;
        };
        o.exports = function(h, m, v) {
          var b = m + " Iterator";
          return h.prototype = l(s, { next: c(1, v) }), f(h, b, !1, !0), u[b] = d, h;
        };
      },
      "9f7f": function(o, a, i) {
        var s = i("d039");
        function l(c, f) {
          return RegExp(c, f);
        }
        a.UNSUPPORTED_Y = s(function() {
          var c = l("a", "y");
          return c.lastIndex = 2, c.exec("abcd") != null;
        }), a.BROKEN_CARET = s(function() {
          var c = l("^r", "gy");
          return c.lastIndex = 2, c.exec("str") != null;
        });
      },
      a2bf: function(o, a, i) {
        var s = i("e8b5"), l = i("50c4"), c = i("0366"), f = function(u, d, h, m, v, b, g, p) {
          for (var E = v, x = 0, S = g ? c(g, p, 3) : !1, w; x < m; ) {
            if (x in h) {
              if (w = S ? S(h[x], x, d) : h[x], b > 0 && s(w))
                E = f(u, d, w, l(w.length), E, b - 1) - 1;
              else {
                if (E >= 9007199254740991)
                  throw TypeError("Exceed the acceptable array length");
                u[E] = w;
              }
              E++;
            }
            x++;
          }
          return E;
        };
        o.exports = f;
      },
      a352: function(o, a) {
        o.exports = r;
      },
      a434: function(o, a, i) {
        var s = i("23e7"), l = i("23cb"), c = i("a691"), f = i("50c4"), u = i("7b0b"), d = i("65f0"), h = i("8418"), m = i("1dde"), v = i("ae40"), b = m("splice"), g = v("splice", { ACCESSORS: !0, 0: 0, 1: 2 }), p = Math.max, E = Math.min, x = 9007199254740991, S = "Maximum allowed length exceeded";
        s({ target: "Array", proto: !0, forced: !b || !g }, {
          splice: function(C, A) {
            var O = u(this), T = f(O.length), R = l(C, T), L = arguments.length, F, $, Q, U, _, Z;
            if (L === 0 ? F = $ = 0 : L === 1 ? (F = 0, $ = T - R) : (F = L - 2, $ = E(p(c(A), 0), T - R)), T + F - $ > x)
              throw TypeError(S);
            for (Q = d(O, $), U = 0; U < $; U++)
              _ = R + U, _ in O && h(Q, U, O[_]);
            if (Q.length = $, F < $) {
              for (U = R; U < T - $; U++)
                _ = U + $, Z = U + F, _ in O ? O[Z] = O[_] : delete O[Z];
              for (U = T; U > T - $ + F; U--)
                delete O[U - 1];
            } else if (F > $)
              for (U = T - $; U > R; U--)
                _ = U + $ - 1, Z = U + F - 1, _ in O ? O[Z] = O[_] : delete O[Z];
            for (U = 0; U < F; U++)
              O[U + R] = arguments[U + 2];
            return O.length = T - $ + F, Q;
          }
        });
      },
      a4d3: function(o, a, i) {
        var s = i("23e7"), l = i("da84"), c = i("d066"), f = i("c430"), u = i("83ab"), d = i("4930"), h = i("fdbf"), m = i("d039"), v = i("5135"), b = i("e8b5"), g = i("861d"), p = i("825a"), E = i("7b0b"), x = i("fc6a"), S = i("c04e"), w = i("5c6c"), C = i("7c73"), A = i("df75"), O = i("241c"), T = i("057f"), R = i("7418"), L = i("06cf"), F = i("9bf2"), $ = i("d1e7"), Q = i("9112"), U = i("6eeb"), _ = i("5692"), Z = i("f772"), wt = i("d012"), Kt = i("90e3"), It = i("b622"), At = i("e538"), Ut = i("746f"), Pt = i("d44e"), Bt = i("69f3"), Rt = i("b727").forEach, Lt = Z("hidden"), Wt = "Symbol", qt = "prototype", Re = It("toPrimitive"), me = Bt.set, Me = Bt.getterFor(Wt), Qt = Object[qt], y = l.Symbol, N = c("JSON", "stringify"), M = L.f, V = F.f, k = T.f, W = $.f, G = _("symbols"), K = _("op-symbols"), z = _("string-to-symbol-registry"), H = _("symbol-to-string-registry"), et = _("wks"), J = l.QObject, ot = !J || !J[qt] || !J[qt].findChild, lt = u && m(function() {
          return C(V({}, "a", {
            get: function() {
              return V(this, "a", { value: 7 }).a;
            }
          })).a != 7;
        }) ? function(it, nt, ut) {
          var Ot = M(Qt, nt);
          Ot && delete Qt[nt], V(it, nt, ut), Ot && it !== Qt && V(Qt, nt, Ot);
        } : V, vt = function(it, nt) {
          var ut = G[it] = C(y[qt]);
          return me(ut, {
            type: Wt,
            tag: it,
            description: nt
          }), u || (ut.description = nt), ut;
        }, D = h ? function(it) {
          return typeof it == "symbol";
        } : function(it) {
          return Object(it) instanceof y;
        }, I = function(nt, ut, Ot) {
          nt === Qt && I(K, ut, Ot), p(nt);
          var Tt = S(ut, !0);
          return p(Ot), v(G, Tt) ? (Ot.enumerable ? (v(nt, Lt) && nt[Lt][Tt] && (nt[Lt][Tt] = !1), Ot = C(Ot, { enumerable: w(0, !1) })) : (v(nt, Lt) || V(nt, Lt, w(1, {})), nt[Lt][Tt] = !0), lt(nt, Tt, Ot)) : V(nt, Tt, Ot);
        }, P = function(nt, ut) {
          p(nt);
          var Ot = x(ut), Tt = A(Ot).concat(Nt(Ot));
          return Rt(Tt, function(ge) {
            (!u || X.call(Ot, ge)) && I(nt, ge, Ot[ge]);
          }), nt;
        }, B = function(nt, ut) {
          return ut === void 0 ? C(nt) : P(C(nt), ut);
        }, X = function(nt) {
          var ut = S(nt, !0), Ot = W.call(this, ut);
          return this === Qt && v(G, ut) && !v(K, ut) ? !1 : Ot || !v(this, ut) || !v(G, ut) || v(this, Lt) && this[Lt][ut] ? Ot : !0;
        }, ct = function(nt, ut) {
          var Ot = x(nt), Tt = S(ut, !0);
          if (!(Ot === Qt && v(G, Tt) && !v(K, Tt))) {
            var ge = M(Ot, Tt);
            return ge && v(G, Tt) && !(v(Ot, Lt) && Ot[Lt][Tt]) && (ge.enumerable = !0), ge;
          }
        }, dt = function(nt) {
          var ut = k(x(nt)), Ot = [];
          return Rt(ut, function(Tt) {
            !v(G, Tt) && !v(wt, Tt) && Ot.push(Tt);
          }), Ot;
        }, Nt = function(nt) {
          var ut = nt === Qt, Ot = k(ut ? K : x(nt)), Tt = [];
          return Rt(Ot, function(ge) {
            v(G, ge) && (!ut || v(Qt, ge)) && Tt.push(G[ge]);
          }), Tt;
        };
        if (d || (y = function() {
          if (this instanceof y)
            throw TypeError("Symbol is not a constructor");
          var nt = !arguments.length || arguments[0] === void 0 ? void 0 : String(arguments[0]), ut = Kt(nt), Ot = function(Tt) {
            this === Qt && Ot.call(K, Tt), v(this, Lt) && v(this[Lt], ut) && (this[Lt][ut] = !1), lt(this, ut, w(1, Tt));
          };
          return u && ot && lt(Qt, ut, { configurable: !0, set: Ot }), vt(ut, nt);
        }, U(y[qt], "toString", function() {
          return Me(this).tag;
        }), U(y, "withoutSetter", function(it) {
          return vt(Kt(it), it);
        }), $.f = X, F.f = I, L.f = ct, O.f = T.f = dt, R.f = Nt, At.f = function(it) {
          return vt(It(it), it);
        }, u && (V(y[qt], "description", {
          configurable: !0,
          get: function() {
            return Me(this).description;
          }
        }), f || U(Qt, "propertyIsEnumerable", X, { unsafe: !0 }))), s({ global: !0, wrap: !0, forced: !d, sham: !d }, {
          Symbol: y
        }), Rt(A(et), function(it) {
          Ut(it);
        }), s({ target: Wt, stat: !0, forced: !d }, {
          for: function(it) {
            var nt = String(it);
            if (v(z, nt))
              return z[nt];
            var ut = y(nt);
            return z[nt] = ut, H[ut] = nt, ut;
          },
          keyFor: function(nt) {
            if (!D(nt))
              throw TypeError(nt + " is not a symbol");
            if (v(H, nt))
              return H[nt];
          },
          useSetter: function() {
            ot = !0;
          },
          useSimple: function() {
            ot = !1;
          }
        }), s({ target: "Object", stat: !0, forced: !d, sham: !u }, {
          create: B,
          defineProperty: I,
          defineProperties: P,
          getOwnPropertyDescriptor: ct
        }), s({ target: "Object", stat: !0, forced: !d }, {
          getOwnPropertyNames: dt,
          getOwnPropertySymbols: Nt
        }), s({ target: "Object", stat: !0, forced: m(function() {
          R.f(1);
        }) }, {
          getOwnPropertySymbols: function(nt) {
            return R.f(E(nt));
          }
        }), N) {
          var Et = !d || m(function() {
            var it = y();
            return N([it]) != "[null]" || N({ a: it }) != "{}" || N(Object(it)) != "{}";
          });
          s({ target: "JSON", stat: !0, forced: Et }, {
            stringify: function(nt, ut, Ot) {
              for (var Tt = [nt], ge = 1, _a; arguments.length > ge; )
                Tt.push(arguments[ge++]);
              if (_a = ut, !(!g(ut) && nt === void 0 || D(nt)))
                return b(ut) || (ut = function(Hp, di) {
                  if (typeof _a == "function" && (di = _a.call(this, Hp, di)), !D(di))
                    return di;
                }), Tt[1] = ut, N.apply(null, Tt);
            }
          });
        }
        y[qt][Re] || Q(y[qt], Re, y[qt].valueOf), Pt(y, Wt), wt[Lt] = !0;
      },
      a630: function(o, a, i) {
        var s = i("23e7"), l = i("4df4"), c = i("1c7e"), f = !c(function(u) {
          Array.from(u);
        });
        s({ target: "Array", stat: !0, forced: f }, {
          from: l
        });
      },
      a640: function(o, a, i) {
        var s = i("d039");
        o.exports = function(l, c) {
          var f = [][l];
          return !!f && s(function() {
            f.call(null, c || function() {
              throw 1;
            }, 1);
          });
        };
      },
      a691: function(o, a) {
        var i = Math.ceil, s = Math.floor;
        o.exports = function(l) {
          return isNaN(l = +l) ? 0 : (l > 0 ? s : i)(l);
        };
      },
      ab13: function(o, a, i) {
        var s = i("b622"), l = s("match");
        o.exports = function(c) {
          var f = /./;
          try {
            "/./"[c](f);
          } catch {
            try {
              return f[l] = !1, "/./"[c](f);
            } catch {
            }
          }
          return !1;
        };
      },
      ac1f: function(o, a, i) {
        var s = i("23e7"), l = i("9263");
        s({ target: "RegExp", proto: !0, forced: /./.exec !== l }, {
          exec: l
        });
      },
      ad6d: function(o, a, i) {
        var s = i("825a");
        o.exports = function() {
          var l = s(this), c = "";
          return l.global && (c += "g"), l.ignoreCase && (c += "i"), l.multiline && (c += "m"), l.dotAll && (c += "s"), l.unicode && (c += "u"), l.sticky && (c += "y"), c;
        };
      },
      ae40: function(o, a, i) {
        var s = i("83ab"), l = i("d039"), c = i("5135"), f = Object.defineProperty, u = {}, d = function(h) {
          throw h;
        };
        o.exports = function(h, m) {
          if (c(u, h))
            return u[h];
          m || (m = {});
          var v = [][h], b = c(m, "ACCESSORS") ? m.ACCESSORS : !1, g = c(m, 0) ? m[0] : d, p = c(m, 1) ? m[1] : void 0;
          return u[h] = !!v && !l(function() {
            if (b && !s)
              return !0;
            var E = { length: -1 };
            b ? f(E, 1, { enumerable: !0, get: d }) : E[1] = 1, v.call(E, g, p);
          });
        };
      },
      ae93: function(o, a, i) {
        var s = i("e163"), l = i("9112"), c = i("5135"), f = i("b622"), u = i("c430"), d = f("iterator"), h = !1, m = function() {
          return this;
        }, v, b, g;
        [].keys && (g = [].keys(), "next" in g ? (b = s(s(g)), b !== Object.prototype && (v = b)) : h = !0), v == null && (v = {}), !u && !c(v, d) && l(v, d, m), o.exports = {
          IteratorPrototype: v,
          BUGGY_SAFARI_ITERATORS: h
        };
      },
      b041: function(o, a, i) {
        var s = i("00ee"), l = i("f5df");
        o.exports = s ? {}.toString : function() {
          return "[object " + l(this) + "]";
        };
      },
      b0c0: function(o, a, i) {
        var s = i("83ab"), l = i("9bf2").f, c = Function.prototype, f = c.toString, u = /^\s*function ([^ (]*)/, d = "name";
        s && !(d in c) && l(c, d, {
          configurable: !0,
          get: function() {
            try {
              return f.call(this).match(u)[1];
            } catch {
              return "";
            }
          }
        });
      },
      b622: function(o, a, i) {
        var s = i("da84"), l = i("5692"), c = i("5135"), f = i("90e3"), u = i("4930"), d = i("fdbf"), h = l("wks"), m = s.Symbol, v = d ? m : m && m.withoutSetter || f;
        o.exports = function(b) {
          return c(h, b) || (u && c(m, b) ? h[b] = m[b] : h[b] = v("Symbol." + b)), h[b];
        };
      },
      b64b: function(o, a, i) {
        var s = i("23e7"), l = i("7b0b"), c = i("df75"), f = i("d039"), u = f(function() {
          c(1);
        });
        s({ target: "Object", stat: !0, forced: u }, {
          keys: function(h) {
            return c(l(h));
          }
        });
      },
      b727: function(o, a, i) {
        var s = i("0366"), l = i("44ad"), c = i("7b0b"), f = i("50c4"), u = i("65f0"), d = [].push, h = function(m) {
          var v = m == 1, b = m == 2, g = m == 3, p = m == 4, E = m == 6, x = m == 5 || E;
          return function(S, w, C, A) {
            for (var O = c(S), T = l(O), R = s(w, C, 3), L = f(T.length), F = 0, $ = A || u, Q = v ? $(S, L) : b ? $(S, 0) : void 0, U, _; L > F; F++)
              if ((x || F in T) && (U = T[F], _ = R(U, F, O), m)) {
                if (v)
                  Q[F] = _;
                else if (_)
                  switch (m) {
                    case 3:
                      return !0;
                    case 5:
                      return U;
                    case 6:
                      return F;
                    case 2:
                      d.call(Q, U);
                  }
                else if (p)
                  return !1;
              }
            return E ? -1 : g || p ? p : Q;
          };
        };
        o.exports = {
          forEach: h(0),
          map: h(1),
          filter: h(2),
          some: h(3),
          every: h(4),
          find: h(5),
          findIndex: h(6)
        };
      },
      c04e: function(o, a, i) {
        var s = i("861d");
        o.exports = function(l, c) {
          if (!s(l))
            return l;
          var f, u;
          if (c && typeof (f = l.toString) == "function" && !s(u = f.call(l)) || typeof (f = l.valueOf) == "function" && !s(u = f.call(l)) || !c && typeof (f = l.toString) == "function" && !s(u = f.call(l)))
            return u;
          throw TypeError("Can't convert object to primitive value");
        };
      },
      c430: function(o, a) {
        o.exports = !1;
      },
      c6b6: function(o, a) {
        var i = {}.toString;
        o.exports = function(s) {
          return i.call(s).slice(8, -1);
        };
      },
      c6cd: function(o, a, i) {
        var s = i("da84"), l = i("ce4e"), c = "__core-js_shared__", f = s[c] || l(c, {});
        o.exports = f;
      },
      c740: function(o, a, i) {
        var s = i("23e7"), l = i("b727").findIndex, c = i("44d2"), f = i("ae40"), u = "findIndex", d = !0, h = f(u);
        u in [] && Array(1)[u](function() {
          d = !1;
        }), s({ target: "Array", proto: !0, forced: d || !h }, {
          findIndex: function(v) {
            return l(this, v, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), c(u);
      },
      c8ba: function(o, a) {
        var i;
        i = function() {
          return this;
        }();
        try {
          i = i || new Function("return this")();
        } catch {
          typeof window == "object" && (i = window);
        }
        o.exports = i;
      },
      c975: function(o, a, i) {
        var s = i("23e7"), l = i("4d64").indexOf, c = i("a640"), f = i("ae40"), u = [].indexOf, d = !!u && 1 / [1].indexOf(1, -0) < 0, h = c("indexOf"), m = f("indexOf", { ACCESSORS: !0, 1: 0 });
        s({ target: "Array", proto: !0, forced: d || !h || !m }, {
          indexOf: function(b) {
            return d ? u.apply(this, arguments) || 0 : l(this, b, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      ca84: function(o, a, i) {
        var s = i("5135"), l = i("fc6a"), c = i("4d64").indexOf, f = i("d012");
        o.exports = function(u, d) {
          var h = l(u), m = 0, v = [], b;
          for (b in h)
            !s(f, b) && s(h, b) && v.push(b);
          for (; d.length > m; )
            s(h, b = d[m++]) && (~c(v, b) || v.push(b));
          return v;
        };
      },
      caad: function(o, a, i) {
        var s = i("23e7"), l = i("4d64").includes, c = i("44d2"), f = i("ae40"), u = f("indexOf", { ACCESSORS: !0, 1: 0 });
        s({ target: "Array", proto: !0, forced: !u }, {
          includes: function(h) {
            return l(this, h, arguments.length > 1 ? arguments[1] : void 0);
          }
        }), c("includes");
      },
      cc12: function(o, a, i) {
        var s = i("da84"), l = i("861d"), c = s.document, f = l(c) && l(c.createElement);
        o.exports = function(u) {
          return f ? c.createElement(u) : {};
        };
      },
      ce4e: function(o, a, i) {
        var s = i("da84"), l = i("9112");
        o.exports = function(c, f) {
          try {
            l(s, c, f);
          } catch {
            s[c] = f;
          }
          return f;
        };
      },
      d012: function(o, a) {
        o.exports = {};
      },
      d039: function(o, a) {
        o.exports = function(i) {
          try {
            return !!i();
          } catch {
            return !0;
          }
        };
      },
      d066: function(o, a, i) {
        var s = i("428f"), l = i("da84"), c = function(f) {
          return typeof f == "function" ? f : void 0;
        };
        o.exports = function(f, u) {
          return arguments.length < 2 ? c(s[f]) || c(l[f]) : s[f] && s[f][u] || l[f] && l[f][u];
        };
      },
      d1e7: function(o, a, i) {
        var s = {}.propertyIsEnumerable, l = Object.getOwnPropertyDescriptor, c = l && !s.call({ 1: 2 }, 1);
        a.f = c ? function(u) {
          var d = l(this, u);
          return !!d && d.enumerable;
        } : s;
      },
      d28b: function(o, a, i) {
        var s = i("746f");
        s("iterator");
      },
      d2bb: function(o, a, i) {
        var s = i("825a"), l = i("3bbe");
        o.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var c = !1, f = {}, u;
          try {
            u = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set, u.call(f, []), c = f instanceof Array;
          } catch {
          }
          return function(h, m) {
            return s(h), l(m), c ? u.call(h, m) : h.__proto__ = m, h;
          };
        }() : void 0);
      },
      d3b7: function(o, a, i) {
        var s = i("00ee"), l = i("6eeb"), c = i("b041");
        s || l(Object.prototype, "toString", c, { unsafe: !0 });
      },
      d44e: function(o, a, i) {
        var s = i("9bf2").f, l = i("5135"), c = i("b622"), f = c("toStringTag");
        o.exports = function(u, d, h) {
          u && !l(u = h ? u : u.prototype, f) && s(u, f, { configurable: !0, value: d });
        };
      },
      d58f: function(o, a, i) {
        var s = i("1c0b"), l = i("7b0b"), c = i("44ad"), f = i("50c4"), u = function(d) {
          return function(h, m, v, b) {
            s(m);
            var g = l(h), p = c(g), E = f(g.length), x = d ? E - 1 : 0, S = d ? -1 : 1;
            if (v < 2)
              for (; ; ) {
                if (x in p) {
                  b = p[x], x += S;
                  break;
                }
                if (x += S, d ? x < 0 : E <= x)
                  throw TypeError("Reduce of empty array with no initial value");
              }
            for (; d ? x >= 0 : E > x; x += S)
              x in p && (b = m(b, p[x], x, g));
            return b;
          };
        };
        o.exports = {
          left: u(!1),
          right: u(!0)
        };
      },
      d784: function(o, a, i) {
        i("ac1f");
        var s = i("6eeb"), l = i("d039"), c = i("b622"), f = i("9263"), u = i("9112"), d = c("species"), h = !l(function() {
          var p = /./;
          return p.exec = function() {
            var E = [];
            return E.groups = { a: "7" }, E;
          }, "".replace(p, "$<a>") !== "7";
        }), m = function() {
          return "a".replace(/./, "$0") === "$0";
        }(), v = c("replace"), b = function() {
          return /./[v] ? /./[v]("a", "$0") === "" : !1;
        }(), g = !l(function() {
          var p = /(?:)/, E = p.exec;
          p.exec = function() {
            return E.apply(this, arguments);
          };
          var x = "ab".split(p);
          return x.length !== 2 || x[0] !== "a" || x[1] !== "b";
        });
        o.exports = function(p, E, x, S) {
          var w = c(p), C = !l(function() {
            var F = {};
            return F[w] = function() {
              return 7;
            }, ""[p](F) != 7;
          }), A = C && !l(function() {
            var F = !1, $ = /a/;
            return p === "split" && ($ = {}, $.constructor = {}, $.constructor[d] = function() {
              return $;
            }, $.flags = "", $[w] = /./[w]), $.exec = function() {
              return F = !0, null;
            }, $[w](""), !F;
          });
          if (!C || !A || p === "replace" && !(h && m && !b) || p === "split" && !g) {
            var O = /./[w], T = x(w, ""[p], function(F, $, Q, U, _) {
              return $.exec === f ? C && !_ ? { done: !0, value: O.call($, Q, U) } : { done: !0, value: F.call(Q, $, U) } : { done: !1 };
            }, {
              REPLACE_KEEPS_$0: m,
              REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: b
            }), R = T[0], L = T[1];
            s(String.prototype, p, R), s(
              RegExp.prototype,
              w,
              E == 2 ? function(F, $) {
                return L.call(F, this, $);
              } : function(F) {
                return L.call(F, this);
              }
            );
          }
          S && u(RegExp.prototype[w], "sham", !0);
        };
      },
      d81d: function(o, a, i) {
        var s = i("23e7"), l = i("b727").map, c = i("1dde"), f = i("ae40"), u = c("map"), d = f("map");
        s({ target: "Array", proto: !0, forced: !u || !d }, {
          map: function(m) {
            return l(this, m, arguments.length > 1 ? arguments[1] : void 0);
          }
        });
      },
      da84: function(o, a, i) {
        (function(s) {
          var l = function(c) {
            return c && c.Math == Math && c;
          };
          o.exports = l(typeof globalThis == "object" && globalThis) || l(typeof window == "object" && window) || l(typeof self == "object" && self) || l(typeof s == "object" && s) || Function("return this")();
        }).call(this, i("c8ba"));
      },
      dbb4: function(o, a, i) {
        var s = i("23e7"), l = i("83ab"), c = i("56ef"), f = i("fc6a"), u = i("06cf"), d = i("8418");
        s({ target: "Object", stat: !0, sham: !l }, {
          getOwnPropertyDescriptors: function(m) {
            for (var v = f(m), b = u.f, g = c(v), p = {}, E = 0, x, S; g.length > E; )
              S = b(v, x = g[E++]), S !== void 0 && d(p, x, S);
            return p;
          }
        });
      },
      dbf1: function(o, a, i) {
        (function(s) {
          i.d(a, "a", function() {
            return c;
          });
          function l() {
            return typeof window < "u" ? window.console : s.console;
          }
          var c = l();
        }).call(this, i("c8ba"));
      },
      ddb0: function(o, a, i) {
        var s = i("da84"), l = i("fdbc"), c = i("e260"), f = i("9112"), u = i("b622"), d = u("iterator"), h = u("toStringTag"), m = c.values;
        for (var v in l) {
          var b = s[v], g = b && b.prototype;
          if (g) {
            if (g[d] !== m)
              try {
                f(g, d, m);
              } catch {
                g[d] = m;
              }
            if (g[h] || f(g, h, v), l[v]) {
              for (var p in c)
                if (g[p] !== c[p])
                  try {
                    f(g, p, c[p]);
                  } catch {
                    g[p] = c[p];
                  }
            }
          }
        }
      },
      df75: function(o, a, i) {
        var s = i("ca84"), l = i("7839");
        o.exports = Object.keys || function(f) {
          return s(f, l);
        };
      },
      e01a: function(o, a, i) {
        var s = i("23e7"), l = i("83ab"), c = i("da84"), f = i("5135"), u = i("861d"), d = i("9bf2").f, h = i("e893"), m = c.Symbol;
        if (l && typeof m == "function" && (!("description" in m.prototype) || m().description !== void 0)) {
          var v = {}, b = function() {
            var w = arguments.length < 1 || arguments[0] === void 0 ? void 0 : String(arguments[0]), C = this instanceof b ? new m(w) : w === void 0 ? m() : m(w);
            return w === "" && (v[C] = !0), C;
          };
          h(b, m);
          var g = b.prototype = m.prototype;
          g.constructor = b;
          var p = g.toString, E = String(m("test")) == "Symbol(test)", x = /^Symbol\((.*)\)[^)]+$/;
          d(g, "description", {
            configurable: !0,
            get: function() {
              var w = u(this) ? this.valueOf() : this, C = p.call(w);
              if (f(v, w))
                return "";
              var A = E ? C.slice(7, -1) : C.replace(x, "$1");
              return A === "" ? void 0 : A;
            }
          }), s({ global: !0, forced: !0 }, {
            Symbol: b
          });
        }
      },
      e163: function(o, a, i) {
        var s = i("5135"), l = i("7b0b"), c = i("f772"), f = i("e177"), u = c("IE_PROTO"), d = Object.prototype;
        o.exports = f ? Object.getPrototypeOf : function(h) {
          return h = l(h), s(h, u) ? h[u] : typeof h.constructor == "function" && h instanceof h.constructor ? h.constructor.prototype : h instanceof Object ? d : null;
        };
      },
      e177: function(o, a, i) {
        var s = i("d039");
        o.exports = !s(function() {
          function l() {
          }
          return l.prototype.constructor = null, Object.getPrototypeOf(new l()) !== l.prototype;
        });
      },
      e260: function(o, a, i) {
        var s = i("fc6a"), l = i("44d2"), c = i("3f8c"), f = i("69f3"), u = i("7dd0"), d = "Array Iterator", h = f.set, m = f.getterFor(d);
        o.exports = u(Array, "Array", function(v, b) {
          h(this, {
            type: d,
            target: s(v),
            index: 0,
            kind: b
          });
        }, function() {
          var v = m(this), b = v.target, g = v.kind, p = v.index++;
          return !b || p >= b.length ? (v.target = void 0, { value: void 0, done: !0 }) : g == "keys" ? { value: p, done: !1 } : g == "values" ? { value: b[p], done: !1 } : { value: [p, b[p]], done: !1 };
        }, "values"), c.Arguments = c.Array, l("keys"), l("values"), l("entries");
      },
      e439: function(o, a, i) {
        var s = i("23e7"), l = i("d039"), c = i("fc6a"), f = i("06cf").f, u = i("83ab"), d = l(function() {
          f(1);
        }), h = !u || d;
        s({ target: "Object", stat: !0, forced: h, sham: !u }, {
          getOwnPropertyDescriptor: function(v, b) {
            return f(c(v), b);
          }
        });
      },
      e538: function(o, a, i) {
        var s = i("b622");
        a.f = s;
      },
      e893: function(o, a, i) {
        var s = i("5135"), l = i("56ef"), c = i("06cf"), f = i("9bf2");
        o.exports = function(u, d) {
          for (var h = l(d), m = f.f, v = c.f, b = 0; b < h.length; b++) {
            var g = h[b];
            s(u, g) || m(u, g, v(d, g));
          }
        };
      },
      e8b5: function(o, a, i) {
        var s = i("c6b6");
        o.exports = Array.isArray || function(c) {
          return s(c) == "Array";
        };
      },
      e95a: function(o, a, i) {
        var s = i("b622"), l = i("3f8c"), c = s("iterator"), f = Array.prototype;
        o.exports = function(u) {
          return u !== void 0 && (l.Array === u || f[c] === u);
        };
      },
      f5df: function(o, a, i) {
        var s = i("00ee"), l = i("c6b6"), c = i("b622"), f = c("toStringTag"), u = l(function() {
          return arguments;
        }()) == "Arguments", d = function(h, m) {
          try {
            return h[m];
          } catch {
          }
        };
        o.exports = s ? l : function(h) {
          var m, v, b;
          return h === void 0 ? "Undefined" : h === null ? "Null" : typeof (v = d(m = Object(h), f)) == "string" ? v : u ? l(m) : (b = l(m)) == "Object" && typeof m.callee == "function" ? "Arguments" : b;
        };
      },
      f772: function(o, a, i) {
        var s = i("5692"), l = i("90e3"), c = s("keys");
        o.exports = function(f) {
          return c[f] || (c[f] = l(f));
        };
      },
      fb15: function(o, a, i) {
        if (i.r(a), typeof window < "u") {
          var s = window.document.currentScript;
          {
            var l = i("8875");
            s = l(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: l });
          }
          var c = s && s.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
          c && (i.p = c[1]);
        }
        i("99af"), i("4de4"), i("4160"), i("c975"), i("d81d"), i("a434"), i("159b"), i("a4d3"), i("e439"), i("dbb4"), i("b64b");
        function f(D, I, P) {
          return I in D ? Object.defineProperty(D, I, {
            value: P,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : D[I] = P, D;
        }
        function u(D, I) {
          var P = Object.keys(D);
          if (Object.getOwnPropertySymbols) {
            var B = Object.getOwnPropertySymbols(D);
            I && (B = B.filter(function(X) {
              return Object.getOwnPropertyDescriptor(D, X).enumerable;
            })), P.push.apply(P, B);
          }
          return P;
        }
        function d(D) {
          for (var I = 1; I < arguments.length; I++) {
            var P = arguments[I] != null ? arguments[I] : {};
            I % 2 ? u(Object(P), !0).forEach(function(B) {
              f(D, B, P[B]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(D, Object.getOwnPropertyDescriptors(P)) : u(Object(P)).forEach(function(B) {
              Object.defineProperty(D, B, Object.getOwnPropertyDescriptor(P, B));
            });
          }
          return D;
        }
        function h(D) {
          if (Array.isArray(D))
            return D;
        }
        i("e01a"), i("d28b"), i("e260"), i("d3b7"), i("3ca3"), i("ddb0");
        function m(D, I) {
          if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(D)))) {
            var P = [], B = !0, X = !1, ct = void 0;
            try {
              for (var dt = D[Symbol.iterator](), Nt; !(B = (Nt = dt.next()).done) && (P.push(Nt.value), !(I && P.length === I)); B = !0)
                ;
            } catch (Et) {
              X = !0, ct = Et;
            } finally {
              try {
                !B && dt.return != null && dt.return();
              } finally {
                if (X)
                  throw ct;
              }
            }
            return P;
          }
        }
        i("a630"), i("fb6a"), i("b0c0"), i("25f0");
        function v(D, I) {
          (I == null || I > D.length) && (I = D.length);
          for (var P = 0, B = new Array(I); P < I; P++)
            B[P] = D[P];
          return B;
        }
        function b(D, I) {
          if (!!D) {
            if (typeof D == "string")
              return v(D, I);
            var P = Object.prototype.toString.call(D).slice(8, -1);
            if (P === "Object" && D.constructor && (P = D.constructor.name), P === "Map" || P === "Set")
              return Array.from(D);
            if (P === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(P))
              return v(D, I);
          }
        }
        function g() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function p(D, I) {
          return h(D) || m(D, I) || b(D, I) || g();
        }
        function E(D) {
          if (Array.isArray(D))
            return v(D);
        }
        function x(D) {
          if (typeof Symbol < "u" && Symbol.iterator in Object(D))
            return Array.from(D);
        }
        function S() {
          throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        function w(D) {
          return E(D) || x(D) || b(D) || S();
        }
        var C = i("a352"), A = /* @__PURE__ */ i.n(C);
        function O(D) {
          D.parentElement !== null && D.parentElement.removeChild(D);
        }
        function T(D, I, P) {
          var B = P === 0 ? D.children[0] : D.children[P - 1].nextSibling;
          D.insertBefore(I, B);
        }
        var R = i("dbf1");
        i("13d5"), i("4fad"), i("ac1f"), i("5319");
        function L(D) {
          var I = /* @__PURE__ */ Object.create(null);
          return function(B) {
            var X = I[B];
            return X || (I[B] = D(B));
          };
        }
        var F = /-(\w)/g, $ = L(function(D) {
          return D.replace(F, function(I, P) {
            return P.toUpperCase();
          });
        });
        i("5db7"), i("73d9");
        var Q = ["Start", "Add", "Remove", "Update", "End"], U = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], _ = ["Move"], Z = [_, Q, U].flatMap(function(D) {
          return D;
        }).map(function(D) {
          return "on".concat(D);
        }), wt = {
          manage: _,
          manageAndEmit: Q,
          emit: U
        };
        function Kt(D) {
          return Z.indexOf(D) !== -1;
        }
        i("caad"), i("2ca0");
        var It = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "math", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rb", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"];
        function At(D) {
          return It.includes(D);
        }
        function Ut(D) {
          return ["transition-group", "TransitionGroup"].includes(D);
        }
        function Pt(D) {
          return ["id", "class", "role", "style"].includes(D) || D.startsWith("data-") || D.startsWith("aria-") || D.startsWith("on");
        }
        function Bt(D) {
          return D.reduce(function(I, P) {
            var B = p(P, 2), X = B[0], ct = B[1];
            return I[X] = ct, I;
          }, {});
        }
        function Rt(D) {
          var I = D.$attrs, P = D.componentData, B = P === void 0 ? {} : P, X = Bt(Object.entries(I).filter(function(ct) {
            var dt = p(ct, 2), Nt = dt[0];
            return dt[1], Pt(Nt);
          }));
          return d(d({}, X), B);
        }
        function Lt(D) {
          var I = D.$attrs, P = D.callBackBuilder, B = Bt(Wt(I));
          Object.entries(P).forEach(function(ct) {
            var dt = p(ct, 2), Nt = dt[0], Et = dt[1];
            wt[Nt].forEach(function(it) {
              B["on".concat(it)] = Et(it);
            });
          });
          var X = "[data-draggable]".concat(B.draggable || "");
          return d(d({}, B), {}, {
            draggable: X
          });
        }
        function Wt(D) {
          return Object.entries(D).filter(function(I) {
            var P = p(I, 2), B = P[0];
            return P[1], !Pt(B);
          }).map(function(I) {
            var P = p(I, 2), B = P[0], X = P[1];
            return [$(B), X];
          }).filter(function(I) {
            var P = p(I, 2), B = P[0];
            return P[1], !Kt(B);
          });
        }
        i("c740");
        function qt(D, I) {
          if (!(D instanceof I))
            throw new TypeError("Cannot call a class as a function");
        }
        function Re(D, I) {
          for (var P = 0; P < I.length; P++) {
            var B = I[P];
            B.enumerable = B.enumerable || !1, B.configurable = !0, "value" in B && (B.writable = !0), Object.defineProperty(D, B.key, B);
          }
        }
        function me(D, I, P) {
          return I && Re(D.prototype, I), P && Re(D, P), D;
        }
        var Me = function(I) {
          var P = I.el;
          return P;
        }, Qt = function(I, P) {
          return I.__draggable_context = P;
        }, y = function(I) {
          return I.__draggable_context;
        }, N = /* @__PURE__ */ function() {
          function D(I) {
            var P = I.nodes, B = P.header, X = P.default, ct = P.footer, dt = I.root, Nt = I.realList;
            qt(this, D), this.defaultNodes = X, this.children = [].concat(w(B), w(X), w(ct)), this.externalComponent = dt.externalComponent, this.rootTransition = dt.transition, this.tag = dt.tag, this.realList = Nt;
          }
          return me(D, [{
            key: "render",
            value: function(P, B) {
              var X = this.tag, ct = this.children, dt = this._isRootComponent, Nt = dt ? {
                default: function() {
                  return ct;
                }
              } : ct;
              return P(X, B, Nt);
            }
          }, {
            key: "updated",
            value: function() {
              var P = this.defaultNodes, B = this.realList;
              P.forEach(function(X, ct) {
                Qt(Me(X), {
                  element: B[ct],
                  index: ct
                });
              });
            }
          }, {
            key: "getUnderlyingVm",
            value: function(P) {
              return y(P);
            }
          }, {
            key: "getVmIndexFromDomIndex",
            value: function(P, B) {
              var X = this.defaultNodes, ct = X.length, dt = B.children, Nt = dt.item(P);
              if (Nt === null)
                return ct;
              var Et = y(Nt);
              if (Et)
                return Et.index;
              if (ct === 0)
                return 0;
              var it = Me(X[0]), nt = w(dt).findIndex(function(ut) {
                return ut === it;
              });
              return P < nt ? 0 : ct;
            }
          }, {
            key: "_isRootComponent",
            get: function() {
              return this.externalComponent || this.rootTransition;
            }
          }]), D;
        }(), M = i("8bbf");
        function V(D, I) {
          var P = D[I];
          return P ? P() : [];
        }
        function k(D) {
          var I = D.$slots, P = D.realList, B = D.getKey, X = P || [], ct = ["header", "footer"].map(function(ut) {
            return V(I, ut);
          }), dt = p(ct, 2), Nt = dt[0], Et = dt[1], it = I.item;
          if (!it)
            throw new Error("draggable element must have an item slot");
          var nt = X.flatMap(function(ut, Ot) {
            return it({
              element: ut,
              index: Ot
            }).map(function(Tt) {
              return Tt.key = B(ut), Tt.props = d(d({}, Tt.props || {}), {}, {
                "data-draggable": !0
              }), Tt;
            });
          });
          if (nt.length !== X.length)
            throw new Error("Item slot must have only one child");
          return {
            header: Nt,
            footer: Et,
            default: nt
          };
        }
        function W(D) {
          var I = Ut(D), P = !At(D) && !I;
          return {
            transition: I,
            externalComponent: P,
            tag: P ? Object(M.resolveComponent)(D) : I ? M.TransitionGroup : D
          };
        }
        function G(D) {
          var I = D.$slots, P = D.tag, B = D.realList, X = D.getKey, ct = k({
            $slots: I,
            realList: B,
            getKey: X
          }), dt = W(P);
          return new N({
            nodes: ct,
            root: dt,
            realList: B
          });
        }
        function K(D, I) {
          var P = this;
          Object(M.nextTick)(function() {
            return P.$emit(D.toLowerCase(), I);
          });
        }
        function z(D) {
          var I = this;
          return function(P, B) {
            if (I.realList !== null)
              return I["onDrag".concat(D)](P, B);
          };
        }
        function H(D) {
          var I = this, P = z.call(this, D);
          return function(B, X) {
            P.call(I, B, X), K.call(I, D, B);
          };
        }
        var et = null, J = {
          list: {
            type: Array,
            required: !1,
            default: null
          },
          modelValue: {
            type: Array,
            required: !1,
            default: null
          },
          itemKey: {
            type: [String, Function],
            required: !0
          },
          clone: {
            type: Function,
            default: function(I) {
              return I;
            }
          },
          tag: {
            type: String,
            default: "div"
          },
          move: {
            type: Function,
            default: null
          },
          componentData: {
            type: Object,
            required: !1,
            default: null
          }
        }, ot = ["update:modelValue", "change"].concat(w([].concat(w(wt.manageAndEmit), w(wt.emit)).map(function(D) {
          return D.toLowerCase();
        }))), lt = Object(M.defineComponent)({
          name: "draggable",
          inheritAttrs: !1,
          props: J,
          emits: ot,
          data: function() {
            return {
              error: !1
            };
          },
          render: function() {
            try {
              this.error = !1;
              var I = this.$slots, P = this.$attrs, B = this.tag, X = this.componentData, ct = this.realList, dt = this.getKey, Nt = G({
                $slots: I,
                tag: B,
                realList: ct,
                getKey: dt
              });
              this.componentStructure = Nt;
              var Et = Rt({
                $attrs: P,
                componentData: X
              });
              return Nt.render(M.h, Et);
            } catch (it) {
              return this.error = !0, Object(M.h)("pre", {
                style: {
                  color: "red"
                }
              }, it.stack);
            }
          },
          created: function() {
            this.list !== null && this.modelValue !== null && R.a.error("modelValue and list props are mutually exclusive! Please set one or another.");
          },
          mounted: function() {
            var I = this;
            if (!this.error) {
              var P = this.$attrs, B = this.$el, X = this.componentStructure;
              X.updated();
              var ct = Lt({
                $attrs: P,
                callBackBuilder: {
                  manageAndEmit: function(Et) {
                    return H.call(I, Et);
                  },
                  emit: function(Et) {
                    return K.bind(I, Et);
                  },
                  manage: function(Et) {
                    return z.call(I, Et);
                  }
                }
              }), dt = B.nodeType === 1 ? B : B.parentElement;
              this._sortable = new A.a(dt, ct), this.targetDomElement = dt, dt.__draggable_component__ = this;
            }
          },
          updated: function() {
            this.componentStructure.updated();
          },
          beforeUnmount: function() {
            this._sortable !== void 0 && this._sortable.destroy();
          },
          computed: {
            realList: function() {
              var I = this.list;
              return I || this.modelValue;
            },
            getKey: function() {
              var I = this.itemKey;
              return typeof I == "function" ? I : function(P) {
                return P[I];
              };
            }
          },
          watch: {
            $attrs: {
              handler: function(I) {
                var P = this._sortable;
                !P || Wt(I).forEach(function(B) {
                  var X = p(B, 2), ct = X[0], dt = X[1];
                  P.option(ct, dt);
                });
              },
              deep: !0
            }
          },
          methods: {
            getUnderlyingVm: function(I) {
              return this.componentStructure.getUnderlyingVm(I) || null;
            },
            getUnderlyingPotencialDraggableComponent: function(I) {
              return I.__draggable_component__;
            },
            emitChanges: function(I) {
              var P = this;
              Object(M.nextTick)(function() {
                return P.$emit("change", I);
              });
            },
            alterList: function(I) {
              if (this.list) {
                I(this.list);
                return;
              }
              var P = w(this.modelValue);
              I(P), this.$emit("update:modelValue", P);
            },
            spliceList: function() {
              var I = arguments, P = function(X) {
                return X.splice.apply(X, w(I));
              };
              this.alterList(P);
            },
            updatePosition: function(I, P) {
              var B = function(ct) {
                return ct.splice(P, 0, ct.splice(I, 1)[0]);
              };
              this.alterList(B);
            },
            getRelatedContextFromMoveEvent: function(I) {
              var P = I.to, B = I.related, X = this.getUnderlyingPotencialDraggableComponent(P);
              if (!X)
                return {
                  component: X
                };
              var ct = X.realList, dt = {
                list: ct,
                component: X
              };
              if (P !== B && ct) {
                var Nt = X.getUnderlyingVm(B) || {};
                return d(d({}, Nt), dt);
              }
              return dt;
            },
            getVmIndexFromDomIndex: function(I) {
              return this.componentStructure.getVmIndexFromDomIndex(I, this.targetDomElement);
            },
            onDragStart: function(I) {
              this.context = this.getUnderlyingVm(I.item), I.item._underlying_vm_ = this.clone(this.context.element), et = I.item;
            },
            onDragAdd: function(I) {
              var P = I.item._underlying_vm_;
              if (P !== void 0) {
                O(I.item);
                var B = this.getVmIndexFromDomIndex(I.newIndex);
                this.spliceList(B, 0, P);
                var X = {
                  element: P,
                  newIndex: B
                };
                this.emitChanges({
                  added: X
                });
              }
            },
            onDragRemove: function(I) {
              if (T(this.$el, I.item, I.oldIndex), I.pullMode === "clone") {
                O(I.clone);
                return;
              }
              var P = this.context, B = P.index, X = P.element;
              this.spliceList(B, 1);
              var ct = {
                element: X,
                oldIndex: B
              };
              this.emitChanges({
                removed: ct
              });
            },
            onDragUpdate: function(I) {
              O(I.item), T(I.from, I.item, I.oldIndex);
              var P = this.context.index, B = this.getVmIndexFromDomIndex(I.newIndex);
              this.updatePosition(P, B);
              var X = {
                element: this.context.element,
                oldIndex: P,
                newIndex: B
              };
              this.emitChanges({
                moved: X
              });
            },
            computeFutureIndex: function(I, P) {
              if (!I.element)
                return 0;
              var B = w(P.to.children).filter(function(Nt) {
                return Nt.style.display !== "none";
              }), X = B.indexOf(P.related), ct = I.component.getVmIndexFromDomIndex(X), dt = B.indexOf(et) !== -1;
              return dt || !P.willInsertAfter ? ct : ct + 1;
            },
            onDragMove: function(I, P) {
              var B = this.move, X = this.realList;
              if (!B || !X)
                return !0;
              var ct = this.getRelatedContextFromMoveEvent(I), dt = this.computeFutureIndex(ct, I), Nt = d(d({}, this.context), {}, {
                futureIndex: dt
              }), Et = d(d({}, I), {}, {
                relatedContext: ct,
                draggedContext: Nt
              });
              return B(Et, P);
            },
            onDragEnd: function() {
              et = null;
            }
          }
        }), vt = lt;
        a.default = vt;
      },
      fb6a: function(o, a, i) {
        var s = i("23e7"), l = i("861d"), c = i("e8b5"), f = i("23cb"), u = i("50c4"), d = i("fc6a"), h = i("8418"), m = i("b622"), v = i("1dde"), b = i("ae40"), g = v("slice"), p = b("slice", { ACCESSORS: !0, 0: 0, 1: 2 }), E = m("species"), x = [].slice, S = Math.max;
        s({ target: "Array", proto: !0, forced: !g || !p }, {
          slice: function(C, A) {
            var O = d(this), T = u(O.length), R = f(C, T), L = f(A === void 0 ? T : A, T), F, $, Q;
            if (c(O) && (F = O.constructor, typeof F == "function" && (F === Array || c(F.prototype)) ? F = void 0 : l(F) && (F = F[E], F === null && (F = void 0)), F === Array || F === void 0))
              return x.call(O, R, L);
            for ($ = new (F === void 0 ? Array : F)(S(L - R, 0)), Q = 0; R < L; R++, Q++)
              R in O && h($, Q, O[R]);
            return $.length = Q, $;
          }
        });
      },
      fc6a: function(o, a, i) {
        var s = i("44ad"), l = i("1d80");
        o.exports = function(c) {
          return s(l(c));
        };
      },
      fdbc: function(o, a) {
        o.exports = {
          CSSRuleList: 0,
          CSSStyleDeclaration: 0,
          CSSValueList: 0,
          ClientRectList: 0,
          DOMRectList: 0,
          DOMStringList: 0,
          DOMTokenList: 1,
          DataTransferItemList: 0,
          FileList: 0,
          HTMLAllCollection: 0,
          HTMLCollection: 0,
          HTMLFormElement: 0,
          HTMLSelectElement: 0,
          MediaList: 0,
          MimeTypeArray: 0,
          NamedNodeMap: 0,
          NodeList: 1,
          PaintRequestList: 0,
          Plugin: 0,
          PluginArray: 0,
          SVGLengthList: 0,
          SVGNumberList: 0,
          SVGPathSegList: 0,
          SVGPointList: 0,
          SVGStringList: 0,
          SVGTransformList: 0,
          SourceBufferList: 0,
          StyleSheetList: 0,
          TextTrackCueList: 0,
          TextTrackList: 0,
          TouchList: 0
        };
      },
      fdbf: function(o, a, i) {
        var s = i("4930");
        o.exports = s && !Symbol.sham && typeof Symbol.iterator == "symbol";
      }
    }).default;
  });
})(Ap);
const f0 = /* @__PURE__ */ CE(Ap.exports), d0 = { class: "settings-modal__backdrop" }, p0 = { class: "settings-modal__body" }, h0 = /* @__PURE__ */ gt("h1", { class: "settings-modal__header" }, " Settings ", -1), m0 = { class: "reorderable-list__element" }, g0 = { class: "btn btn_drag" }, v0 = ["onClick"], y0 = { class: "submit-location" }, b0 = /* @__PURE__ */ gt("label", { class: "submit-location__label" }, " Add Location: ", -1), E0 = { id: "suggestedLocations" }, x0 = { class: "error-warning" }, O0 = /* @__PURE__ */ En({
  __name: "SettingsModal",
  setup(t) {
    const e = Dp(), n = () => {
      e.closeSettings();
    }, r = () => {
      e.saveToStorage();
    }, o = (s) => {
      e.deleteLocation(s);
    }, a = j1(
      () => {
        e.fetchLocationNames();
      },
      500
    ), i = (s) => {
      s.preventDefault(), e.addLocation();
    };
    return (s, l) => (ae(), je("div", d0, [
      gt("div", p0, [
        h0,
        gt("button", {
          class: "btn btn_close",
          onClick: n
        }, [
          St(Ft(dn), {
            class: "icon icon_close",
            icon: "fa-xmark"
          })
        ]),
        St(Ft(f0), {
          animation: "300",
          list: Ft(e).locationsData,
          "item-key": "name",
          handle: ".btn_drag",
          onChange: r,
          class: "reorderable-list"
        }, {
          item: Ca(({ element: c }) => [
            gt("div", m0, [
              gt("button", g0, [
                St(Ft(dn), {
                  class: "icon icon_bars",
                  icon: "fa-bars"
                })
              ]),
              gt("p", null, Ce(c.name), 1),
              gt("button", {
                class: "btn btn_delete",
                onClick: (f) => o(c.name)
              }, [
                St(Ft(dn), {
                  class: "icon icon_delete",
                  icon: "fa-trash-can"
                })
              ], 8, v0)
            ])
          ]),
          _: 1
        }, 8, ["list"]),
        gt("form", y0, [
          b0,
          Xi(gt("input", {
            class: "input submit-location__input",
            type: "text",
            "onUpdate:modelValue": l[0] || (l[0] = (c) => Ft(e).locationInputValue = c),
            onInput: l[1] || (l[1] = (...c) => Ft(a) && Ft(a)(...c)),
            list: "suggestedLocations"
          }, null, 544), [
            [Qr, Ft(e).locationInputValue]
          ]),
          gt("datalist", E0, [
            (ae(!0), je(Jt, null, Al(Ft(e).validLocations, (c) => (ae(), je("option", {
              key: c.name
            }, Ce(c.name), 1))), 128))
          ]),
          gt("button", {
            class: "btn btn_submit",
            onClick: i
          }, [
            St(Ft(dn), {
              class: "icon icon_submit",
              icon: "fa-arrow-turn-down"
            })
          ]),
          gt("p", x0, Ce(Ft(e).locationInputError), 1)
        ])
      ])
    ]));
  }
}), S0 = { class: "widget-body" }, w0 = {
  key: 0,
  class: "submit-api"
}, N0 = /* @__PURE__ */ gt("label", { class: "submit-api__label" }, " Enter your OpenWeather API key: ", -1), C0 = /* @__PURE__ */ En({
  __name: "WidgetBody.ce",
  setup(t) {
    const e = vE(), n = Dp(e);
    oo(() => {
      n.initialize();
    });
    const r = () => {
      n.openSettings();
    }, o = () => {
      n.submitApiKey();
    };
    return (a, i) => (ae(), je("div", S0, [
      gt("button", {
        class: "btn btn_settings",
        onClick: r
      }, [
        St(Ft(dn), {
          class: "icon icon_settings",
          icon: "fa-gear"
        })
      ]),
      Xi(St(O0, null, null, 512), [
        [Bl, Ft(n).isSettingsOpen]
      ]),
      (ae(!0), je(Jt, null, Al(Ft(n).locationsData, (s) => (ae(), je(Jt, null, [
        s.formatted ? (ae(), Zo(qb, {
          style: { ".icon_wind {rotate": "90deg" },
          key: s.formatted.name,
          profile: s.formatted
        }, null, 8, ["profile"])) : (ae(), Zo(Ft(dn), {
          key: 1,
          icon: "fa-circle-notch",
          class: "icon icon_loading"
        }))
      ], 64))), 256)),
      Ft(n).weatherApiKey ? $l("", !0) : (ae(), je("form", w0, [
        N0,
        Xi(gt("input", {
          class: "input submit-api__input",
          type: "text",
          "onUpdate:modelValue": i[0] || (i[0] = (s) => Ft(n).weatherApiInput = s),
          list: "suggestedLocations"
        }, null, 512), [
          [Qr, Ft(n).weatherApiInput]
        ]),
        gt("button", {
          class: "btn btn_submit",
          onClick: o
        }, [
          St(Ft(dn), {
            class: "icon icon_submit",
            icon: "fa-arrow-turn-down"
          })
        ])
      ]))
    ]));
  }
}), T0 = `*,*:before,*:after{box-sizing:border-box;margin:0;position:relative;font-weight:400}.widget-body{--vt-c-white: #ffffff;--color-background: var(--vt-c-white);--vt-c-indigo: #2c3e50;--vt-c-text-light-1: var(--vt-c-indigo);--color-text: var(--vt-c-text-light-1);transition:color .5s,background-color .5s;font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:var(--color-background);color:var(--color-text);font-size:12px;display:flex;flex-direction:column;max-width:20em;margin:1em}.widget-body>.icon_loading{width:10em;align-self:center;justify-self:center;animation-name:spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear;-webkit-animation-name:spin;-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:2s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:2s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear}.icon{width:1.5em}.icon_close{width:1em}.icon_settings{--fa-animation-duration: infinite}.btn{border:0;background-color:inherit;border-radius:10%;display:flex;align-items:center;justify-content:center;padding:0}.btn:hover{filter:brightness(.85);cursor:pointer}.btn_settings{z-index:1;position:absolute;right:0}.btn_settings:hover{filter:unset}.btn_settings:hover>.icon_settings{animation-name:spin;animation-duration:2s;animation-iteration-count:infinite;animation-timing-function:linear;-webkit-animation-name:spin;-webkit-animation-duration:2s;-webkit-animation-iteration-count:infinite;-webkit-animation-timing-function:linear;-moz-animation-name:spin;-moz-animation-duration:2s;-moz-animation-iteration-count:infinite;-moz-animation-timing-function:linear;-ms-animation-name:spin;-ms-animation-duration:2s;-ms-animation-iteration-count:infinite;-ms-animation-timing-function:linear}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg)}to{-moz-transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.btn_close{z-index:1;position:absolute;right:0;width:2em;height:2em}.error-warning{color:red}.settings-modal__backdrop{position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.5);display:flex;align-items:start;z-index:1}.settings-modal__body{display:flex;width:100%;flex-direction:column;justify-content:left;background-color:var(--color-background);padding:.5em;height:initial}.settings-modal__header{font-weight:700;font-size:1.3em}.reorderable-list{display:flex;flex-direction:column;background-color:inherit;margin-bottom:2em}.reorderable-list__element{display:flex;background-color:inherit;filter:brightness(.85);margin:1em 0;padding:.7em .5em;align-items:center}.reorderable-list__element>.btn_drag{margin-right:.5em}.reorderable-list__element>.btn_drag:hover{filter:unset;cursor:move}.reorderable-list__element:hover{filter:brightness(.6)}.reorderable-list__element>.btn_delete{margin-left:auto}.reorderable-list__element>.btn_delete:hover{filter:unset}.submit-location,.submit-api{display:grid;background-color:inherit;column-gap:.5em;grid-template-columns:7fr 1fr}.submit-location__label,.submit-api__label{font-weight:700;margin-bottom:.3em}.submit-location__input,.submit-api__input{grid-column:1;padding:.3em}.submit-location>.btn_submit,.submit-api>.btn_submit{grid-column:2}.submit-location>.btn_submit>.icon_submit,.submit-api>.btn_submit>.icon_submit{width:1em}.submit-api{margin-top:5em}.icon_submit{rotate:90deg}.location-card{display:grid;grid-template-columns:repeat(2,1fr);max-width:20em;row-gap:1em;margin-bottom:4em}.location-card:last-child{margin-bottom:0}.location-card__name{grid-column:1/3;grid-row:1;font-weight:700;font-size:1.3em;max-width:12em;overflow-wrap:break-word}.location-card__temp{grid-column:1/3;grid-row:2;display:flex;align-items:center}.location-card__temp>.icon_weather{width:3em}.location-card__temp>*{height:fit-content;font-size:2.5em;font-style:normal;font-weight:600}.location-card__info{grid-column:1/3;grid-row:3;overflow-wrap:break-word}.location-card__misc{display:flex;align-items:center}.location-card__misc_key{font-style:normal;font-weight:700;margin-right:.5em;display:flex}
`, D0 = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [r, o] of e)
    n[r] = o;
  return n;
}, I0 = /* @__PURE__ */ D0(C0, [["styles", [T0]]]);
db.add(
  bb,
  Eb,
  Ob,
  yb,
  gb,
  xb,
  mb,
  vb
);
const A0 = jl(I0);
customElements.define("weather-widget", A0);
