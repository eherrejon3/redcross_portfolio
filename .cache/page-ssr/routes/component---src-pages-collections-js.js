"use strict";
exports.id = "component---src-pages-collections-js";
exports.ids = ["component---src-pages-collections-js"];
exports.modules = {

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {



const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GatsbyImage": () => (/* binding */ X),
/* harmony export */   "MainImage": () => (/* binding */ D),
/* harmony export */   "Placeholder": () => (/* binding */ C),
/* harmony export */   "StaticImage": () => (/* binding */ Z),
/* harmony export */   "generateImageData": () => (/* binding */ b),
/* harmony export */   "getImage": () => (/* binding */ I),
/* harmony export */   "getImageData": () => (/* binding */ R),
/* harmony export */   "getLowResolutionImageURL": () => (/* binding */ y),
/* harmony export */   "getSrc": () => (/* binding */ W),
/* harmony export */   "getSrcSet": () => (/* binding */ j),
/* harmony export */   "withArtDirection": () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./src/components/footer.js":
/*!**********************************!*\
  !*** ./src/components/footer.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_951208365_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/951208365.json */ "./public/page-data/sq/d/951208365.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

/* Create footer component using react */



const Footer = () => {
  var _data$site$siteMetada, _data$site$siteMetada2;
  const data = _public_page_data_sq_d_951208365_json__WEBPACK_IMPORTED_MODULE_0__.data;

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = (_data$site$siteMetada = data.site.siteMetadata) === null || _data$site$siteMetada === void 0 ? void 0 : _data$site$siteMetada.author;
  const social = (_data$site$siteMetada2 = data.site.siteMetadata) === null || _data$site$siteMetada2 === void 0 ? void 0 : _data$site$siteMetada2.social;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "global-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("footer", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "copyR"
  }, "\xA9 JORDYN REDCROSS")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/components/navbar.js":
/*!**********************************!*\
  !*** ./src/components/navbar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_4080976698_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/4080976698.json */ "./public/page-data/sq/d/4080976698.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");




const Navbar = () => {
  const data = _public_page_data_sq_d_4080976698_json__WEBPACK_IMPORTED_MODULE_0__.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: "menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "checkbox",
    id: "check"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("label", {
    for: "check",
    className: "checkbtn"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "30px",
    viewBox: "0 0 24 24",
    width: "30px",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M0 0h24v24H0V0z",
    fill: "none"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "enlace"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "/",
    className: "logo"
  }, "JORDYN REDCROSS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/about"
  }, "ABOUT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: "/collections"
  }, "COLLECTIONS")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "mailto:mateofernandezrado@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "CONTACT")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    className: "item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("a", {
    href: "https://www.instagram.com/jordyn.redcross/",
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#060606",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    class: "lucide lucide-instagram"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("rect", {
    width: "20",
    height: "20",
    x: "2",
    y: "2",
    rx: "5",
    ry: "5"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("path", {
    d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("line", {
    x1: "17.5",
    x2: "17.51",
    y1: "6.5",
    y2: "6.5"
  })))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/2841359383.json */ "./public/page-data/sq/d/2841359383.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */


const Seo = ({
  description,
  title,
  children
}) => {
  var _site$siteMetadata, _site$siteMetadata2, _site$siteMetadata2$s;
  const {
    site
  } = _public_page_data_sq_d_2841359383_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = (_site$siteMetadata = site.siteMetadata) === null || _site$siteMetadata === void 0 ? void 0 : _site$siteMetadata.title;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("title", null, defaultTitle ? `${title} | ${defaultTitle}` : title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:creator",
    content: ((_site$siteMetadata2 = site.siteMetadata) === null || _site$siteMetadata2 === void 0 ? void 0 : (_site$siteMetadata2$s = _site$siteMetadata2.social) === null || _site$siteMetadata2$s === void 0 ? void 0 : _site$siteMetadata2$s.twitter) || ``
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:title",
    content: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), children);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Seo);

/***/ }),

/***/ "./src/pages/collections.js?export=default":
/*!*************************************************!*\
  !*** ./src/pages/collections.js?export=default ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Head": () => (/* binding */ Head),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/seo */ "./src/components/seo.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navbar */ "./src/components/navbar.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");





const Collections = ({
  data,
  location
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "body-global-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "\u042FED\u042FUM")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0010.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3564250966.json */ "./.cache/caches/gatsby-plugin-image/3564250966.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0011.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/844407201.json */ "./.cache/caches/gatsby-plugin-image/844407201.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0008.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/676534345.json */ "./.cache/caches/gatsby-plugin-image/676534345.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0009.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3987993035.json */ "./.cache/caches/gatsby-plugin-image/3987993035.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "grey&BLONDE")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0015.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3182276738.json */ "./.cache/caches/gatsby-plugin-image/3182276738.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0016.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1957969681.json */ "./.cache/caches/gatsby-plugin-image/1957969681.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0017.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/890386530.json */ "./.cache/caches/gatsby-plugin-image/890386530.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0018.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4235549898.json */ "./.cache/caches/gatsby-plugin-image/4235549898.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0019.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1619363425.json */ "./.cache/caches/gatsby-plugin-image/1619363425.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0020.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3634782497.json */ "./.cache/caches/gatsby-plugin-image/3634782497.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "time to feast")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0012.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/758969090.json */ "./.cache/caches/gatsby-plugin-image/758969090.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0013.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2890264900.json */ "./.cache/caches/gatsby-plugin-image/2890264900.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0014.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1710913472.json */ "./.cache/caches/gatsby-plugin-image/1710913472.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "live fast, die young")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4029966478.json */ "./.cache/caches/gatsby-plugin-image/4029966478.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/78527DCF-D4C8-44C5-823E-A933DE3FADE5.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1492795265.json */ "./.cache/caches/gatsby-plugin-image/1492795265.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_7333_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3526353825.json */ "./.cache/caches/gatsby-plugin-image/3526353825.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_7588_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3971793728.json */ "./.cache/caches/gatsby-plugin-image/3971793728.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "kiinky boots")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0021.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/208031125.json */ "./.cache/caches/gatsby-plugin-image/208031125.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0022.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3799852897.json */ "./.cache/caches/gatsby-plugin-image/3799852897.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0023.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3216138112.json */ "./.cache/caches/gatsby-plugin-image/3216138112.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0024.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/805949498.json */ "./.cache/caches/gatsby-plugin-image/805949498.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "moment")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_1214_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1288233300.json */ "./.cache/caches/gatsby-plugin-image/1288233300.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_3529_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/4258899394.json */ "./.cache/caches/gatsby-plugin-image/4258899394.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_5208_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1486818406.json */ "./.cache/caches/gatsby-plugin-image/1486818406.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0025.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3963797725.json */ "./.cache/caches/gatsby-plugin-image/3963797725.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0026.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3655101904.json */ "./.cache/caches/gatsby-plugin-image/3655101904.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "ace")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_0004_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/839315478.json */ "./.cache/caches/gatsby-plugin-image/839315478.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_8256_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2769442555.json */ "./.cache/caches/gatsby-plugin-image/2769442555.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_8385_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/680730081.json */ "./.cache/caches/gatsby-plugin-image/680730081.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_2892_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2108429827.json */ "./.cache/caches/gatsby-plugin-image/2108429827.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_6417_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1342539274.json */ "./.cache/caches/gatsby-plugin-image/1342539274.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "the girl in red")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/394657202.json */ "./.cache/caches/gatsby-plugin-image/394657202.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/cpm35 2024-02-07 152846.315.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1209056636.json */ "./.cache/caches/gatsby-plugin-image/1209056636.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/877345164.json */ "./.cache/caches/gatsby-plugin-image/877345164.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/cpm35 2024-02-07 152927.369.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/483464055.json */ "./.cache/caches/gatsby-plugin-image/483464055.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "sweet dreams")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_8863.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3878279966.json */ "./.cache/caches/gatsby-plugin-image/3878279966.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_8865.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/477537479.json */ "./.cache/caches/gatsby-plugin-image/477537479.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_9057.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3001438868.json */ "./.cache/caches/gatsby-plugin-image/3001438868.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "the queen is never late, everyone is simply early")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3658243733.json */ "./.cache/caches/gatsby-plugin-image/3658243733.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2188312293.json */ "./.cache/caches/gatsby-plugin-image/2188312293.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/D670705B-3730-4A2B-90BF-4BB615A9B1F5.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1777847713.json */ "./.cache/caches/gatsby-plugin-image/1777847713.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_9651_polarr.JPEG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3647250316.json */ "./.cache/caches/gatsby-plugin-image/3647250316.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "its her world we're living in")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_9109.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2487340968.json */ "./.cache/caches/gatsby-plugin-image/2487340968.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_9112.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3387417121.json */ "./.cache/caches/gatsby-plugin-image/3387417121.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_9113.JPG",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2985193440.json */ "./.cache/caches/gatsby-plugin-image/2985193440.json")
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "collections"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
    className: "h2"
  }, "texas hold'em")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_1496.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/3062459726.json */ "./.cache/caches/gatsby-plugin-image/3062459726.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_1497.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/1446417508.json */ "./.cache/caches/gatsby-plugin-image/1446417508.json")
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    class: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.StaticImage, {
    layout: "constrained",
    src: "../images/PORTFOLIO/IMG_1500.jpg",
    alt: "Header picture",
    backgroundColor: "transparent",
    placeholder: "none",
    quality: 95,
    transformOptions: {
      fit: "fill"
    },
    __imageData: __webpack_require__(/*! ./.cache/caches/gatsby-plugin-image/2101650301.json */ "./.cache/caches/gatsby-plugin-image/2101650301.json")
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_3__["default"], null)));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Collections);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
const Head = () => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_seo__WEBPACK_IMPORTED_MODULE_1__["default"], {
  title: "Collections"
});
const pageQuery = "3100300281";

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1209056636.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1209056636.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/6e517/cpm35%202024-02-07%20152846.315.jpg","srcSet":"/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/49928/cpm35%202024-02-07%20152846.315.jpg 254w,\\n/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/c989c/cpm35%202024-02-07%20152846.315.jpg 509w,\\n/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/6e517/cpm35%202024-02-07%20152846.315.jpg 1017w","sizes":"(min-width: 1017px) 1017px, 100vw"},"sources":[{"srcSet":"/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/4a428/cpm35%202024-02-07%20152846.315.webp 254w,\\n/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/c60e1/cpm35%202024-02-07%20152846.315.webp 509w,\\n/static/2fe82a4fb0ebcb9f21fc91920ddd0d8c/c083d/cpm35%202024-02-07%20152846.315.webp 1017w","type":"image/webp","sizes":"(min-width: 1017px) 1017px, 100vw"}]},"width":1017,"height":2200}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1288233300.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1288233300.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/885ff00c9eb5462d3c7dca5c8582f298/05971/IMG_1214_polarr.jpg","srcSet":"/static/885ff00c9eb5462d3c7dca5c8582f298/5701d/IMG_1214_polarr.jpg 384w,\\n/static/885ff00c9eb5462d3c7dca5c8582f298/d9eb6/IMG_1214_polarr.jpg 768w,\\n/static/885ff00c9eb5462d3c7dca5c8582f298/05971/IMG_1214_polarr.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/885ff00c9eb5462d3c7dca5c8582f298/95582/IMG_1214_polarr.webp 384w,\\n/static/885ff00c9eb5462d3c7dca5c8582f298/8f5fa/IMG_1214_polarr.webp 768w,\\n/static/885ff00c9eb5462d3c7dca5c8582f298/096c8/IMG_1214_polarr.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1342539274.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1342539274.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/a21a958332eef79521d35b5a9dfa7a45/54f17/IMG_6417_polarr.jpg","srcSet":"/static/a21a958332eef79521d35b5a9dfa7a45/8d1a4/IMG_6417_polarr.jpg 321w,\\n/static/a21a958332eef79521d35b5a9dfa7a45/d9369/IMG_6417_polarr.jpg 642w,\\n/static/a21a958332eef79521d35b5a9dfa7a45/54f17/IMG_6417_polarr.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/a21a958332eef79521d35b5a9dfa7a45/7eeda/IMG_6417_polarr.webp 321w,\\n/static/a21a958332eef79521d35b5a9dfa7a45/c98c5/IMG_6417_polarr.webp 642w,\\n/static/a21a958332eef79521d35b5a9dfa7a45/7a639/IMG_6417_polarr.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1528}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1446417508.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1446417508.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c7d255ffee6d8dfc555a75f6184e134d/9272a/IMG_1497.jpg","srcSet":"/static/c7d255ffee6d8dfc555a75f6184e134d/a3073/IMG_1497.jpg 321w,\\n/static/c7d255ffee6d8dfc555a75f6184e134d/b2a45/IMG_1497.jpg 642w,\\n/static/c7d255ffee6d8dfc555a75f6184e134d/9272a/IMG_1497.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/c7d255ffee6d8dfc555a75f6184e134d/7d09f/IMG_1497.webp 321w,\\n/static/c7d255ffee6d8dfc555a75f6184e134d/ff7eb/IMG_1497.webp 642w,\\n/static/c7d255ffee6d8dfc555a75f6184e134d/3a7df/IMG_1497.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1920.0000000000002}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1486818406.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1486818406.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/0e9458bfbbf1b05c8cc6f77420febd70/05971/IMG_5208_polarr.jpg","srcSet":"/static/0e9458bfbbf1b05c8cc6f77420febd70/5701d/IMG_5208_polarr.jpg 384w,\\n/static/0e9458bfbbf1b05c8cc6f77420febd70/d9eb6/IMG_5208_polarr.jpg 768w,\\n/static/0e9458bfbbf1b05c8cc6f77420febd70/05971/IMG_5208_polarr.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/0e9458bfbbf1b05c8cc6f77420febd70/95582/IMG_5208_polarr.webp 384w,\\n/static/0e9458bfbbf1b05c8cc6f77420febd70/8f5fa/IMG_5208_polarr.webp 768w,\\n/static/0e9458bfbbf1b05c8cc6f77420febd70/096c8/IMG_5208_polarr.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1492795265.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1492795265.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/3ff3d2952938b39d8c955f2d79e58681/67d7c/78527DCF-D4C8-44C5-823E-A933DE3FADE5.jpg","srcSet":"/static/3ff3d2952938b39d8c955f2d79e58681/d6c18/78527DCF-D4C8-44C5-823E-A933DE3FADE5.jpg 360w,\\n/static/3ff3d2952938b39d8c955f2d79e58681/bcfe8/78527DCF-D4C8-44C5-823E-A933DE3FADE5.jpg 720w,\\n/static/3ff3d2952938b39d8c955f2d79e58681/67d7c/78527DCF-D4C8-44C5-823E-A933DE3FADE5.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/3ff3d2952938b39d8c955f2d79e58681/85601/78527DCF-D4C8-44C5-823E-A933DE3FADE5.webp 360w,\\n/static/3ff3d2952938b39d8c955f2d79e58681/d6be1/78527DCF-D4C8-44C5-823E-A933DE3FADE5.webp 720w,\\n/static/3ff3d2952938b39d8c955f2d79e58681/a6749/78527DCF-D4C8-44C5-823E-A933DE3FADE5.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1798}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1619363425.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1619363425.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/142ee5421b0e085f23d1d299c5be74aa/55103/IMG_0019.jpg","srcSet":"/static/142ee5421b0e085f23d1d299c5be74aa/20867/IMG_0019.jpg 410w,\\n/static/142ee5421b0e085f23d1d299c5be74aa/2e092/IMG_0019.jpg 819w,\\n/static/142ee5421b0e085f23d1d299c5be74aa/55103/IMG_0019.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/142ee5421b0e085f23d1d299c5be74aa/d470b/IMG_0019.webp 410w,\\n/static/142ee5421b0e085f23d1d299c5be74aa/13234/IMG_0019.webp 819w,\\n/static/142ee5421b0e085f23d1d299c5be74aa/dd13a/IMG_0019.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1710913472.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1710913472.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/303a279b184fb84264265093b2b24a5a/55103/IMG_0014.jpg","srcSet":"/static/303a279b184fb84264265093b2b24a5a/20867/IMG_0014.jpg 410w,\\n/static/303a279b184fb84264265093b2b24a5a/2e092/IMG_0014.jpg 819w,\\n/static/303a279b184fb84264265093b2b24a5a/55103/IMG_0014.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/303a279b184fb84264265093b2b24a5a/d470b/IMG_0014.webp 410w,\\n/static/303a279b184fb84264265093b2b24a5a/13234/IMG_0014.webp 819w,\\n/static/303a279b184fb84264265093b2b24a5a/dd13a/IMG_0014.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1777847713.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1777847713.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/85b71a654eb3a4389b51bbf84036fece/67d7c/D670705B-3730-4A2B-90BF-4BB615A9B1F5.jpg","srcSet":"/static/85b71a654eb3a4389b51bbf84036fece/d6c18/D670705B-3730-4A2B-90BF-4BB615A9B1F5.jpg 360w,\\n/static/85b71a654eb3a4389b51bbf84036fece/bcfe8/D670705B-3730-4A2B-90BF-4BB615A9B1F5.jpg 720w,\\n/static/85b71a654eb3a4389b51bbf84036fece/67d7c/D670705B-3730-4A2B-90BF-4BB615A9B1F5.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/85b71a654eb3a4389b51bbf84036fece/85601/D670705B-3730-4A2B-90BF-4BB615A9B1F5.webp 360w,\\n/static/85b71a654eb3a4389b51bbf84036fece/d6be1/D670705B-3730-4A2B-90BF-4BB615A9B1F5.webp 720w,\\n/static/85b71a654eb3a4389b51bbf84036fece/a6749/D670705B-3730-4A2B-90BF-4BB615A9B1F5.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1798}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/1957969681.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/1957969681.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/81b78c745983140a1efa83724d315d91/55103/IMG_0016.jpg","srcSet":"/static/81b78c745983140a1efa83724d315d91/20867/IMG_0016.jpg 410w,\\n/static/81b78c745983140a1efa83724d315d91/2e092/IMG_0016.jpg 819w,\\n/static/81b78c745983140a1efa83724d315d91/55103/IMG_0016.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/81b78c745983140a1efa83724d315d91/d470b/IMG_0016.webp 410w,\\n/static/81b78c745983140a1efa83724d315d91/13234/IMG_0016.webp 819w,\\n/static/81b78c745983140a1efa83724d315d91/dd13a/IMG_0016.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/208031125.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/208031125.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/30fa0a8f81e12102352f0cc777e2c8fb/55103/IMG_0021.jpg","srcSet":"/static/30fa0a8f81e12102352f0cc777e2c8fb/20867/IMG_0021.jpg 410w,\\n/static/30fa0a8f81e12102352f0cc777e2c8fb/2e092/IMG_0021.jpg 819w,\\n/static/30fa0a8f81e12102352f0cc777e2c8fb/55103/IMG_0021.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/30fa0a8f81e12102352f0cc777e2c8fb/d470b/IMG_0021.webp 410w,\\n/static/30fa0a8f81e12102352f0cc777e2c8fb/13234/IMG_0021.webp 819w,\\n/static/30fa0a8f81e12102352f0cc777e2c8fb/dd13a/IMG_0021.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2101650301.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2101650301.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/fe5e9f95837ba55d00f98f5b719a7e5f/8d6d9/IMG_1500.jpg","srcSet":"/static/fe5e9f95837ba55d00f98f5b719a7e5f/35d0d/IMG_1500.jpg 321w,\\n/static/fe5e9f95837ba55d00f98f5b719a7e5f/ddce3/IMG_1500.jpg 642w,\\n/static/fe5e9f95837ba55d00f98f5b719a7e5f/8d6d9/IMG_1500.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/fe5e9f95837ba55d00f98f5b719a7e5f/7ca0e/IMG_1500.webp 321w,\\n/static/fe5e9f95837ba55d00f98f5b719a7e5f/ae9b6/IMG_1500.webp 642w,\\n/static/fe5e9f95837ba55d00f98f5b719a7e5f/4e809/IMG_1500.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1924.9999999999998}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2108429827.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2108429827.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/df921be11bd8b4e257ba2db255a4792f/0d730/IMG_2892_polarr.jpg","srcSet":"/static/df921be11bd8b4e257ba2db255a4792f/3b79d/IMG_2892_polarr.jpg 321w,\\n/static/df921be11bd8b4e257ba2db255a4792f/978e3/IMG_2892_polarr.jpg 642w,\\n/static/df921be11bd8b4e257ba2db255a4792f/0d730/IMG_2892_polarr.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/df921be11bd8b4e257ba2db255a4792f/0315d/IMG_2892_polarr.webp 321w,\\n/static/df921be11bd8b4e257ba2db255a4792f/6a09d/IMG_2892_polarr.webp 642w,\\n/static/df921be11bd8b4e257ba2db255a4792f/412cf/IMG_2892_polarr.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1559}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2188312293.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2188312293.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/1989a4b604505ded3f74150b6209f809/8a5c2/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg","srcSet":"/static/1989a4b604505ded3f74150b6209f809/04a54/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg 339w,\\n/static/1989a4b604505ded3f74150b6209f809/4fd8c/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg 677w,\\n/static/1989a4b604505ded3f74150b6209f809/8a5c2/69EAF94F-7E9B-487A-9320-F3921F6EF41F.jpg 1354w","sizes":"(min-width: 1354px) 1354px, 100vw"},"sources":[{"srcSet":"/static/1989a4b604505ded3f74150b6209f809/183a7/69EAF94F-7E9B-487A-9320-F3921F6EF41F.webp 339w,\\n/static/1989a4b604505ded3f74150b6209f809/64e51/69EAF94F-7E9B-487A-9320-F3921F6EF41F.webp 677w,\\n/static/1989a4b604505ded3f74150b6209f809/abd1f/69EAF94F-7E9B-487A-9320-F3921F6EF41F.webp 1354w","type":"image/webp","sizes":"(min-width: 1354px) 1354px, 100vw"}]},"width":1354,"height":1690}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2487340968.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2487340968.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/0042aa9c902cbb5cc4ae549a239d7ed8/05971/IMG_9109.jpg","srcSet":"/static/0042aa9c902cbb5cc4ae549a239d7ed8/5701d/IMG_9109.jpg 384w,\\n/static/0042aa9c902cbb5cc4ae549a239d7ed8/d9eb6/IMG_9109.jpg 768w,\\n/static/0042aa9c902cbb5cc4ae549a239d7ed8/05971/IMG_9109.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/0042aa9c902cbb5cc4ae549a239d7ed8/95582/IMG_9109.webp 384w,\\n/static/0042aa9c902cbb5cc4ae549a239d7ed8/8f5fa/IMG_9109.webp 768w,\\n/static/0042aa9c902cbb5cc4ae549a239d7ed8/096c8/IMG_9109.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2769442555.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2769442555.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/024288ade0cc433280b748163f8a3f37/54f17/IMG_8256_polarr.jpg","srcSet":"/static/024288ade0cc433280b748163f8a3f37/8d1a4/IMG_8256_polarr.jpg 321w,\\n/static/024288ade0cc433280b748163f8a3f37/d9369/IMG_8256_polarr.jpg 642w,\\n/static/024288ade0cc433280b748163f8a3f37/54f17/IMG_8256_polarr.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/024288ade0cc433280b748163f8a3f37/7eeda/IMG_8256_polarr.webp 321w,\\n/static/024288ade0cc433280b748163f8a3f37/c98c5/IMG_8256_polarr.webp 642w,\\n/static/024288ade0cc433280b748163f8a3f37/7a639/IMG_8256_polarr.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1528}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2890264900.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2890264900.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/88fe1d2ded598acc4f0f56ccd155212b/55103/IMG_0013.jpg","srcSet":"/static/88fe1d2ded598acc4f0f56ccd155212b/20867/IMG_0013.jpg 410w,\\n/static/88fe1d2ded598acc4f0f56ccd155212b/2e092/IMG_0013.jpg 819w,\\n/static/88fe1d2ded598acc4f0f56ccd155212b/55103/IMG_0013.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/88fe1d2ded598acc4f0f56ccd155212b/d470b/IMG_0013.webp 410w,\\n/static/88fe1d2ded598acc4f0f56ccd155212b/13234/IMG_0013.webp 819w,\\n/static/88fe1d2ded598acc4f0f56ccd155212b/dd13a/IMG_0013.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/2985193440.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/2985193440.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/952a6957e6236a2d7d4821889bc7db84/05971/IMG_9113.jpg","srcSet":"/static/952a6957e6236a2d7d4821889bc7db84/5701d/IMG_9113.jpg 384w,\\n/static/952a6957e6236a2d7d4821889bc7db84/d9eb6/IMG_9113.jpg 768w,\\n/static/952a6957e6236a2d7d4821889bc7db84/05971/IMG_9113.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/952a6957e6236a2d7d4821889bc7db84/95582/IMG_9113.webp 384w,\\n/static/952a6957e6236a2d7d4821889bc7db84/8f5fa/IMG_9113.webp 768w,\\n/static/952a6957e6236a2d7d4821889bc7db84/096c8/IMG_9113.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3001438868.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3001438868.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d661e90338ebc7e4936560917c131e93/05971/IMG_9057.jpg","srcSet":"/static/d661e90338ebc7e4936560917c131e93/5701d/IMG_9057.jpg 384w,\\n/static/d661e90338ebc7e4936560917c131e93/d9eb6/IMG_9057.jpg 768w,\\n/static/d661e90338ebc7e4936560917c131e93/05971/IMG_9057.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/d661e90338ebc7e4936560917c131e93/95582/IMG_9057.webp 384w,\\n/static/d661e90338ebc7e4936560917c131e93/8f5fa/IMG_9057.webp 768w,\\n/static/d661e90338ebc7e4936560917c131e93/096c8/IMG_9057.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3062459726.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3062459726.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/21838ba9e92a1b11f741ff6fa3942bdb/dc141/IMG_1496.jpg","srcSet":"/static/21838ba9e92a1b11f741ff6fa3942bdb/a3073/IMG_1496.jpg 321w,\\n/static/21838ba9e92a1b11f741ff6fa3942bdb/b2a45/IMG_1496.jpg 642w,\\n/static/21838ba9e92a1b11f741ff6fa3942bdb/dc141/IMG_1496.jpg 1284w","sizes":"(min-width: 1284px) 1284px, 100vw"},"sources":[{"srcSet":"/static/21838ba9e92a1b11f741ff6fa3942bdb/7d09f/IMG_1496.webp 321w,\\n/static/21838ba9e92a1b11f741ff6fa3942bdb/ff7eb/IMG_1496.webp 642w,\\n/static/21838ba9e92a1b11f741ff6fa3942bdb/9313e/IMG_1496.webp 1284w","type":"image/webp","sizes":"(min-width: 1284px) 1284px, 100vw"}]},"width":1284,"height":1920.9999999999998}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3182276738.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3182276738.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/e0b3a263b85a8a409a8640c78abdf4ea/55103/IMG_0015.jpg","srcSet":"/static/e0b3a263b85a8a409a8640c78abdf4ea/20867/IMG_0015.jpg 410w,\\n/static/e0b3a263b85a8a409a8640c78abdf4ea/2e092/IMG_0015.jpg 819w,\\n/static/e0b3a263b85a8a409a8640c78abdf4ea/55103/IMG_0015.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/e0b3a263b85a8a409a8640c78abdf4ea/d470b/IMG_0015.webp 410w,\\n/static/e0b3a263b85a8a409a8640c78abdf4ea/13234/IMG_0015.webp 819w,\\n/static/e0b3a263b85a8a409a8640c78abdf4ea/dd13a/IMG_0015.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3216138112.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3216138112.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/7e9ceae86fe57cd37524e3453723b548/55103/IMG_0023.jpg","srcSet":"/static/7e9ceae86fe57cd37524e3453723b548/20867/IMG_0023.jpg 410w,\\n/static/7e9ceae86fe57cd37524e3453723b548/2e092/IMG_0023.jpg 819w,\\n/static/7e9ceae86fe57cd37524e3453723b548/55103/IMG_0023.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/7e9ceae86fe57cd37524e3453723b548/d470b/IMG_0023.webp 410w,\\n/static/7e9ceae86fe57cd37524e3453723b548/13234/IMG_0023.webp 819w,\\n/static/7e9ceae86fe57cd37524e3453723b548/dd13a/IMG_0023.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3387417121.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3387417121.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/4dbe70521d09f216b93dfb5ba53fa78b/05971/IMG_9112.jpg","srcSet":"/static/4dbe70521d09f216b93dfb5ba53fa78b/5701d/IMG_9112.jpg 384w,\\n/static/4dbe70521d09f216b93dfb5ba53fa78b/d9eb6/IMG_9112.jpg 768w,\\n/static/4dbe70521d09f216b93dfb5ba53fa78b/05971/IMG_9112.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/4dbe70521d09f216b93dfb5ba53fa78b/95582/IMG_9112.webp 384w,\\n/static/4dbe70521d09f216b93dfb5ba53fa78b/8f5fa/IMG_9112.webp 768w,\\n/static/4dbe70521d09f216b93dfb5ba53fa78b/096c8/IMG_9112.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3526353825.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3526353825.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d57f9b2eebf85386dce266518e22a1ba/6a432/IMG_7333_polarr.jpg","srcSet":"/static/d57f9b2eebf85386dce266518e22a1ba/fc779/IMG_7333_polarr.jpg 264w,\\n/static/d57f9b2eebf85386dce266518e22a1ba/89f3b/IMG_7333_polarr.jpg 528w,\\n/static/d57f9b2eebf85386dce266518e22a1ba/6a432/IMG_7333_polarr.jpg 1056w","sizes":"(min-width: 1056px) 1056px, 100vw"},"sources":[{"srcSet":"/static/d57f9b2eebf85386dce266518e22a1ba/b42a4/IMG_7333_polarr.webp 264w,\\n/static/d57f9b2eebf85386dce266518e22a1ba/901bf/IMG_7333_polarr.webp 528w,\\n/static/d57f9b2eebf85386dce266518e22a1ba/68853/IMG_7333_polarr.webp 1056w","type":"image/webp","sizes":"(min-width: 1056px) 1056px, 100vw"}]},"width":1056,"height":1402}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3564250966.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3564250966.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c7de2bbad051ef6b2c3232e1346382ab/55103/IMG_0010.jpg","srcSet":"/static/c7de2bbad051ef6b2c3232e1346382ab/20867/IMG_0010.jpg 410w,\\n/static/c7de2bbad051ef6b2c3232e1346382ab/2e092/IMG_0010.jpg 819w,\\n/static/c7de2bbad051ef6b2c3232e1346382ab/55103/IMG_0010.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/c7de2bbad051ef6b2c3232e1346382ab/d470b/IMG_0010.webp 410w,\\n/static/c7de2bbad051ef6b2c3232e1346382ab/13234/IMG_0010.webp 819w,\\n/static/c7de2bbad051ef6b2c3232e1346382ab/dd13a/IMG_0010.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3634782497.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3634782497.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/774071b51929a3760258434477e1a146/55103/IMG_0020.jpg","srcSet":"/static/774071b51929a3760258434477e1a146/20867/IMG_0020.jpg 410w,\\n/static/774071b51929a3760258434477e1a146/2e092/IMG_0020.jpg 819w,\\n/static/774071b51929a3760258434477e1a146/55103/IMG_0020.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/774071b51929a3760258434477e1a146/d470b/IMG_0020.webp 410w,\\n/static/774071b51929a3760258434477e1a146/13234/IMG_0020.webp 819w,\\n/static/774071b51929a3760258434477e1a146/dd13a/IMG_0020.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3647250316.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3647250316.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/f762115dd80b9096ab402b2478e2bf96/05971/IMG_9651_polarr.jpg","srcSet":"/static/f762115dd80b9096ab402b2478e2bf96/5701d/IMG_9651_polarr.jpg 384w,\\n/static/f762115dd80b9096ab402b2478e2bf96/d9eb6/IMG_9651_polarr.jpg 768w,\\n/static/f762115dd80b9096ab402b2478e2bf96/05971/IMG_9651_polarr.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/f762115dd80b9096ab402b2478e2bf96/95582/IMG_9651_polarr.webp 384w,\\n/static/f762115dd80b9096ab402b2478e2bf96/8f5fa/IMG_9651_polarr.webp 768w,\\n/static/f762115dd80b9096ab402b2478e2bf96/096c8/IMG_9651_polarr.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3655101904.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3655101904.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/9260d7371a91d6d1b932073c8f7340a9/be1d8/IMG_0026.jpg","srcSet":"/static/9260d7371a91d6d1b932073c8f7340a9/be031/IMG_0026.jpg 369w,\\n/static/9260d7371a91d6d1b932073c8f7340a9/38f0f/IMG_0026.jpg 738w,\\n/static/9260d7371a91d6d1b932073c8f7340a9/be1d8/IMG_0026.jpg 1476w","sizes":"(min-width: 1476px) 1476px, 100vw"},"sources":[{"srcSet":"/static/9260d7371a91d6d1b932073c8f7340a9/61e41/IMG_0026.webp 369w,\\n/static/9260d7371a91d6d1b932073c8f7340a9/d3ce2/IMG_0026.webp 738w,\\n/static/9260d7371a91d6d1b932073c8f7340a9/c9938/IMG_0026.webp 1476w","type":"image/webp","sizes":"(min-width: 1476px) 1476px, 100vw"}]},"width":1476,"height":1845}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3658243733.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3658243733.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d65460bc4755957730a389f3a7d450e5/67d7c/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.jpg","srcSet":"/static/d65460bc4755957730a389f3a7d450e5/d6c18/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.jpg 360w,\\n/static/d65460bc4755957730a389f3a7d450e5/bcfe8/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.jpg 720w,\\n/static/d65460bc4755957730a389f3a7d450e5/67d7c/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/d65460bc4755957730a389f3a7d450e5/85601/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.webp 360w,\\n/static/d65460bc4755957730a389f3a7d450e5/d6be1/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.webp 720w,\\n/static/d65460bc4755957730a389f3a7d450e5/a6749/6C9FA638-42BC-41FF-9AAC-F7F4AA7335FF.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1798}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3799852897.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3799852897.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/9d63237a422b33a09d551e9268040c09/55103/IMG_0022.jpg","srcSet":"/static/9d63237a422b33a09d551e9268040c09/20867/IMG_0022.jpg 410w,\\n/static/9d63237a422b33a09d551e9268040c09/2e092/IMG_0022.jpg 819w,\\n/static/9d63237a422b33a09d551e9268040c09/55103/IMG_0022.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/9d63237a422b33a09d551e9268040c09/d470b/IMG_0022.webp 410w,\\n/static/9d63237a422b33a09d551e9268040c09/13234/IMG_0022.webp 819w,\\n/static/9d63237a422b33a09d551e9268040c09/dd13a/IMG_0022.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3878279966.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3878279966.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/428ab0fa84692c7b9465b11f69a7b041/05971/IMG_8863.jpg","srcSet":"/static/428ab0fa84692c7b9465b11f69a7b041/5701d/IMG_8863.jpg 384w,\\n/static/428ab0fa84692c7b9465b11f69a7b041/d9eb6/IMG_8863.jpg 768w,\\n/static/428ab0fa84692c7b9465b11f69a7b041/05971/IMG_8863.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/428ab0fa84692c7b9465b11f69a7b041/95582/IMG_8863.webp 384w,\\n/static/428ab0fa84692c7b9465b11f69a7b041/8f5fa/IMG_8863.webp 768w,\\n/static/428ab0fa84692c7b9465b11f69a7b041/096c8/IMG_8863.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/394657202.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/394657202.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/b0d0c4e6e4e939c1d66e8ad1af130727/0ada5/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg","srcSet":"/static/b0d0c4e6e4e939c1d66e8ad1af130727/746a9/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg 360w,\\n/static/b0d0c4e6e4e939c1d66e8ad1af130727/cdd9c/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg 720w,\\n/static/b0d0c4e6e4e939c1d66e8ad1af130727/0ada5/40B54A0B-8F01-49DF-9D11-0719309A5839.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/b0d0c4e6e4e939c1d66e8ad1af130727/c7ba3/40B54A0B-8F01-49DF-9D11-0719309A5839.webp 360w,\\n/static/b0d0c4e6e4e939c1d66e8ad1af130727/416c1/40B54A0B-8F01-49DF-9D11-0719309A5839.webp 720w,\\n/static/b0d0c4e6e4e939c1d66e8ad1af130727/f0814/40B54A0B-8F01-49DF-9D11-0719309A5839.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1791}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3963797725.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3963797725.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/676662ef19bb141e8ba99ad5cdff0b8c/2d6bf/IMG_0025.jpg","srcSet":"/static/676662ef19bb141e8ba99ad5cdff0b8c/628a7/IMG_0025.jpg 368w,\\n/static/676662ef19bb141e8ba99ad5cdff0b8c/9dfac/IMG_0025.jpg 736w,\\n/static/676662ef19bb141e8ba99ad5cdff0b8c/2d6bf/IMG_0025.jpg 1472w","sizes":"(min-width: 1472px) 1472px, 100vw"},"sources":[{"srcSet":"/static/676662ef19bb141e8ba99ad5cdff0b8c/d76eb/IMG_0025.webp 368w,\\n/static/676662ef19bb141e8ba99ad5cdff0b8c/7dde5/IMG_0025.webp 736w,\\n/static/676662ef19bb141e8ba99ad5cdff0b8c/27831/IMG_0025.webp 1472w","type":"image/webp","sizes":"(min-width: 1472px) 1472px, 100vw"}]},"width":1472,"height":1840}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3971793728.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3971793728.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/2b84373261db949415a5b601c61869a6/5a574/IMG_7588_polarr.jpg","srcSet":"/static/2b84373261db949415a5b601c61869a6/2e3b6/IMG_7588_polarr.jpg 292w,\\n/static/2b84373261db949415a5b601c61869a6/8512a/IMG_7588_polarr.jpg 585w,\\n/static/2b84373261db949415a5b601c61869a6/5a574/IMG_7588_polarr.jpg 1169w","sizes":"(min-width: 1169px) 1169px, 100vw"},"sources":[{"srcSet":"/static/2b84373261db949415a5b601c61869a6/1b2ab/IMG_7588_polarr.webp 292w,\\n/static/2b84373261db949415a5b601c61869a6/f7eca/IMG_7588_polarr.webp 585w,\\n/static/2b84373261db949415a5b601c61869a6/aa3dd/IMG_7588_polarr.webp 1169w","type":"image/webp","sizes":"(min-width: 1169px) 1169px, 100vw"}]},"width":1169,"height":1510}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/3987993035.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/3987993035.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/ff95cef1f474cf7c46e7f725b937d834/55103/IMG_0009.jpg","srcSet":"/static/ff95cef1f474cf7c46e7f725b937d834/20867/IMG_0009.jpg 410w,\\n/static/ff95cef1f474cf7c46e7f725b937d834/2e092/IMG_0009.jpg 819w,\\n/static/ff95cef1f474cf7c46e7f725b937d834/55103/IMG_0009.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/ff95cef1f474cf7c46e7f725b937d834/d470b/IMG_0009.webp 410w,\\n/static/ff95cef1f474cf7c46e7f725b937d834/13234/IMG_0009.webp 819w,\\n/static/ff95cef1f474cf7c46e7f725b937d834/dd13a/IMG_0009.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4029966478.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4029966478.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/f4b216d98bede6ee350b96781982657c/b1cb5/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.jpg","srcSet":"/static/f4b216d98bede6ee350b96781982657c/d6c18/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.jpg 360w,\\n/static/f4b216d98bede6ee350b96781982657c/511f0/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.jpg 720w,\\n/static/f4b216d98bede6ee350b96781982657c/b1cb5/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/f4b216d98bede6ee350b96781982657c/85601/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.webp 360w,\\n/static/f4b216d98bede6ee350b96781982657c/2a188/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.webp 720w,\\n/static/f4b216d98bede6ee350b96781982657c/f91da/25C54BD2-5616-4E7B-ACCF-E0A78E90A6AC.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1800}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4235549898.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4235549898.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/efdb6a2a07efc238100ea3d2a0bdcf2d/55103/IMG_0018.jpg","srcSet":"/static/efdb6a2a07efc238100ea3d2a0bdcf2d/20867/IMG_0018.jpg 410w,\\n/static/efdb6a2a07efc238100ea3d2a0bdcf2d/2e092/IMG_0018.jpg 819w,\\n/static/efdb6a2a07efc238100ea3d2a0bdcf2d/55103/IMG_0018.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/efdb6a2a07efc238100ea3d2a0bdcf2d/d470b/IMG_0018.webp 410w,\\n/static/efdb6a2a07efc238100ea3d2a0bdcf2d/13234/IMG_0018.webp 819w,\\n/static/efdb6a2a07efc238100ea3d2a0bdcf2d/dd13a/IMG_0018.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/4258899394.json":
/*!***********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/4258899394.json ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/05971/IMG_3529_polarr.jpg","srcSet":"/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/5701d/IMG_3529_polarr.jpg 384w,\\n/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/d9eb6/IMG_3529_polarr.jpg 768w,\\n/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/05971/IMG_3529_polarr.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/95582/IMG_3529_polarr.webp 384w,\\n/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/8f5fa/IMG_3529_polarr.webp 768w,\\n/static/fb1ebe9cb01d814d5d19a8c0c89eb95a/096c8/IMG_3529_polarr.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/477537479.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/477537479.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/afcb0970f4b6f98cc3788385acc7102b/05971/IMG_8865.jpg","srcSet":"/static/afcb0970f4b6f98cc3788385acc7102b/5701d/IMG_8865.jpg 384w,\\n/static/afcb0970f4b6f98cc3788385acc7102b/d9eb6/IMG_8865.jpg 768w,\\n/static/afcb0970f4b6f98cc3788385acc7102b/05971/IMG_8865.jpg 1536w","sizes":"(min-width: 1536px) 1536px, 100vw"},"sources":[{"srcSet":"/static/afcb0970f4b6f98cc3788385acc7102b/95582/IMG_8865.webp 384w,\\n/static/afcb0970f4b6f98cc3788385acc7102b/8f5fa/IMG_8865.webp 768w,\\n/static/afcb0970f4b6f98cc3788385acc7102b/096c8/IMG_8865.webp 1536w","type":"image/webp","sizes":"(min-width: 1536px) 1536px, 100vw"}]},"width":1536,"height":2304}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/483464055.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/483464055.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c54b73e710724382bcc881541c947bbc/96d30/cpm35%202024-02-07%20152927.369.jpg","srcSet":"/static/c54b73e710724382bcc881541c947bbc/94f9e/cpm35%202024-02-07%20152927.369.jpg 255w,\\n/static/c54b73e710724382bcc881541c947bbc/1726d/cpm35%202024-02-07%20152927.369.jpg 510w,\\n/static/c54b73e710724382bcc881541c947bbc/96d30/cpm35%202024-02-07%20152927.369.jpg 1019w","sizes":"(min-width: 1019px) 1019px, 100vw"},"sources":[{"srcSet":"/static/c54b73e710724382bcc881541c947bbc/765ab/cpm35%202024-02-07%20152927.369.webp 255w,\\n/static/c54b73e710724382bcc881541c947bbc/ad375/cpm35%202024-02-07%20152927.369.webp 510w,\\n/static/c54b73e710724382bcc881541c947bbc/59866/cpm35%202024-02-07%20152927.369.webp 1019w","type":"image/webp","sizes":"(min-width: 1019px) 1019px, 100vw"}]},"width":1019,"height":2205}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/676534345.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/676534345.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/79ead5d7c3f5406371d3c447234efc1f/55103/IMG_0008.jpg","srcSet":"/static/79ead5d7c3f5406371d3c447234efc1f/20867/IMG_0008.jpg 410w,\\n/static/79ead5d7c3f5406371d3c447234efc1f/2e092/IMG_0008.jpg 819w,\\n/static/79ead5d7c3f5406371d3c447234efc1f/55103/IMG_0008.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/79ead5d7c3f5406371d3c447234efc1f/d470b/IMG_0008.webp 410w,\\n/static/79ead5d7c3f5406371d3c447234efc1f/13234/IMG_0008.webp 819w,\\n/static/79ead5d7c3f5406371d3c447234efc1f/dd13a/IMG_0008.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/680730081.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/680730081.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/1a410117bd2f22cd2fe27fbf955596d7/da061/IMG_8385_polarr.jpg","srcSet":"/static/1a410117bd2f22cd2fe27fbf955596d7/f113d/IMG_8385_polarr.jpg 360w,\\n/static/1a410117bd2f22cd2fe27fbf955596d7/3e9b0/IMG_8385_polarr.jpg 720w,\\n/static/1a410117bd2f22cd2fe27fbf955596d7/da061/IMG_8385_polarr.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/1a410117bd2f22cd2fe27fbf955596d7/4465d/IMG_8385_polarr.webp 360w,\\n/static/1a410117bd2f22cd2fe27fbf955596d7/0700d/IMG_8385_polarr.webp 720w,\\n/static/1a410117bd2f22cd2fe27fbf955596d7/3a856/IMG_8385_polarr.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1707}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/758969090.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/758969090.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/c8ad339d53a04ed29616292eafe4d4d7/55103/IMG_0012.jpg","srcSet":"/static/c8ad339d53a04ed29616292eafe4d4d7/20867/IMG_0012.jpg 410w,\\n/static/c8ad339d53a04ed29616292eafe4d4d7/2e092/IMG_0012.jpg 819w,\\n/static/c8ad339d53a04ed29616292eafe4d4d7/55103/IMG_0012.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/c8ad339d53a04ed29616292eafe4d4d7/d470b/IMG_0012.webp 410w,\\n/static/c8ad339d53a04ed29616292eafe4d4d7/13234/IMG_0012.webp 819w,\\n/static/c8ad339d53a04ed29616292eafe4d4d7/dd13a/IMG_0012.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/805949498.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/805949498.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/d0c6a34737d98be9c5a98dafeae81e9d/55103/IMG_0024.jpg","srcSet":"/static/d0c6a34737d98be9c5a98dafeae81e9d/20867/IMG_0024.jpg 410w,\\n/static/d0c6a34737d98be9c5a98dafeae81e9d/2e092/IMG_0024.jpg 819w,\\n/static/d0c6a34737d98be9c5a98dafeae81e9d/55103/IMG_0024.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/d0c6a34737d98be9c5a98dafeae81e9d/d470b/IMG_0024.webp 410w,\\n/static/d0c6a34737d98be9c5a98dafeae81e9d/13234/IMG_0024.webp 819w,\\n/static/d0c6a34737d98be9c5a98dafeae81e9d/dd13a/IMG_0024.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/839315478.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/839315478.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/6428a0bdf4cbdce767aa945ed4fb27f3/bd243/IMG_0004_polarr.jpg","srcSet":"/static/6428a0bdf4cbdce767aa945ed4fb27f3/f113d/IMG_0004_polarr.jpg 360w,\\n/static/6428a0bdf4cbdce767aa945ed4fb27f3/3e9b0/IMG_0004_polarr.jpg 720w,\\n/static/6428a0bdf4cbdce767aa945ed4fb27f3/bd243/IMG_0004_polarr.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/6428a0bdf4cbdce767aa945ed4fb27f3/4465d/IMG_0004_polarr.webp 360w,\\n/static/6428a0bdf4cbdce767aa945ed4fb27f3/0700d/IMG_0004_polarr.webp 720w,\\n/static/6428a0bdf4cbdce767aa945ed4fb27f3/0bdeb/IMG_0004_polarr.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1708}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/844407201.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/844407201.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/8a3af430f73e6a826a4020c2fb71ba09/55103/IMG_0011.jpg","srcSet":"/static/8a3af430f73e6a826a4020c2fb71ba09/20867/IMG_0011.jpg 410w,\\n/static/8a3af430f73e6a826a4020c2fb71ba09/2e092/IMG_0011.jpg 819w,\\n/static/8a3af430f73e6a826a4020c2fb71ba09/55103/IMG_0011.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/8a3af430f73e6a826a4020c2fb71ba09/d470b/IMG_0011.webp 410w,\\n/static/8a3af430f73e6a826a4020c2fb71ba09/13234/IMG_0011.webp 819w,\\n/static/8a3af430f73e6a826a4020c2fb71ba09/dd13a/IMG_0011.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/877345164.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/877345164.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/4975478781aee2d640aba104485a123c/b1cb5/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg","srcSet":"/static/4975478781aee2d640aba104485a123c/d6c18/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg 360w,\\n/static/4975478781aee2d640aba104485a123c/511f0/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg 720w,\\n/static/4975478781aee2d640aba104485a123c/b1cb5/60717A89-2398-4AC8-AB18-DDA1CCAD7592.jpg 1440w","sizes":"(min-width: 1440px) 1440px, 100vw"},"sources":[{"srcSet":"/static/4975478781aee2d640aba104485a123c/85601/60717A89-2398-4AC8-AB18-DDA1CCAD7592.webp 360w,\\n/static/4975478781aee2d640aba104485a123c/2a188/60717A89-2398-4AC8-AB18-DDA1CCAD7592.webp 720w,\\n/static/4975478781aee2d640aba104485a123c/f91da/60717A89-2398-4AC8-AB18-DDA1CCAD7592.webp 1440w","type":"image/webp","sizes":"(min-width: 1440px) 1440px, 100vw"}]},"width":1440,"height":1800}');

/***/ }),

/***/ "./.cache/caches/gatsby-plugin-image/890386530.json":
/*!**********************************************************!*\
  !*** ./.cache/caches/gatsby-plugin-image/890386530.json ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"layout":"constrained","backgroundColor":"transparent","images":{"fallback":{"src":"/static/e784cf3cb5b152175518ca46a867dfe3/55103/IMG_0017.jpg","srcSet":"/static/e784cf3cb5b152175518ca46a867dfe3/20867/IMG_0017.jpg 410w,\\n/static/e784cf3cb5b152175518ca46a867dfe3/2e092/IMG_0017.jpg 819w,\\n/static/e784cf3cb5b152175518ca46a867dfe3/55103/IMG_0017.jpg 1638w","sizes":"(min-width: 1638px) 1638px, 100vw"},"sources":[{"srcSet":"/static/e784cf3cb5b152175518ca46a867dfe3/d470b/IMG_0017.webp 410w,\\n/static/e784cf3cb5b152175518ca46a867dfe3/13234/IMG_0017.webp 819w,\\n/static/e784cf3cb5b152175518ca46a867dfe3/dd13a/IMG_0017.webp 1638w","type":"image/webp","sizes":"(min-width: 1638px) 1638px, 100vw"}]},"width":1638,"height":2048}');

/***/ }),

/***/ "./public/page-data/sq/d/2841359383.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/2841359383.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Jordyn Redcross","description":"Jordyn Redcross Modelling Portfolio.","social":null}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/4080976698.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/4080976698.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Elizabeth Herrejon","summary":null},"social":null}}}}');

/***/ }),

/***/ "./public/page-data/sq/d/951208365.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/951208365.json ***!
  \**********************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"data":{"site":{"siteMetadata":{"author":{"name":"Elizabeth Herrejon","summary":null},"social":null}}}}');

/***/ })

};
;
//# sourceMappingURL=component---src-pages-collections-js.js.map