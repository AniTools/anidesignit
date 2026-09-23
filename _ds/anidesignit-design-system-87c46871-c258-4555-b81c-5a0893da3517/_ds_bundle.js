/* @ds-bundle: {"format":4,"namespace":"AniDesignItDesignSystem_87c468","components":[{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ServiceItem","sourcePath":"components/content/ServiceItem.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"SelectionFrame","sourcePath":"components/core/SelectionFrame.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"FormStatus","sourcePath":"components/forms/FormStatus.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"ProjectNav","sourcePath":"components/navigation/ProjectNav.jsx"},{"name":"SectionDots","sourcePath":"components/navigation/SectionDots.jsx"},{"name":"SocialRail","sourcePath":"components/navigation/SocialRail.jsx"}],"sourceHashes":{"components/content/ProjectCard.jsx":"1eaa4b01f121","components/content/ServiceItem.jsx":"f18455a36ec2","components/content/Testimonial.jsx":"b3279012a4de","components/core/Button.jsx":"7c657233069b","components/core/Card.jsx":"ee1e0403693d","components/core/Icon.jsx":"9697598ab3c2","components/core/SectionHeading.jsx":"f03c962b933f","components/core/SelectionFrame.jsx":"361d1d8a892a","components/core/Tag.jsx":"ed1ab21ea72f","components/forms/FormStatus.jsx":"ccd46879b625","components/forms/TextField.jsx":"8a75c6f5e2b4","components/forms/Textarea.jsx":"caa1caf0ccf8","components/navigation/NavBar.jsx":"f50f3fa10078","components/navigation/ProjectNav.jsx":"c3c24a606b03","components/navigation/SectionDots.jsx":"53505e92c338","components/navigation/SocialRail.jsx":"45e9c765426b","ui_kits/portfolio/AboutMe.jsx":"68e680f31b36","ui_kits/portfolio/App.jsx":"f728aa1d9257","ui_kits/portfolio/CaseStudy.jsx":"25517605fa83","ui_kits/portfolio/Contact.jsx":"362ccbe4c3f0","ui_kits/portfolio/Hero.jsx":"e0c64a77fb95","ui_kits/portfolio/MyWork.jsx":"2aa668ad81d2","ui_kits/portfolio/Services.jsx":"ee50776a38ff","ui_kits/portfolio/data.js":"703c665a248e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AniDesignItDesignSystem_87c468 = window.AniDesignItDesignSystem_87c468 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The fourth beat of every case study: a curly-quoted client line with
   em-dash attribution. */
function Testimonial({
  quote,
  author,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 400,
      fontStyle: 'italic',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--leading-subtitle)',
      color: 'var(--text-title)',
      margin: 0,
      paddingLeft: 'var(--space-6)',
      borderLeft: '2px solid var(--coral-500)',
      maxWidth: 'var(--measure-narrow)'
    }
  }, '\u201C' + quote + '\u201D'), author && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-4)',
      paddingLeft: 'var(--space-6)'
    }
  }, '\u2013 ' + author));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* White on blush, 16px radius, no border — separation comes from the warm
   shadow. Lifts 4px on hover when interactive. */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-6)',
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: interactive && hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: interactive && hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : undefined,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Lucide icon wrapper. Lucide is the site's real icon library
   (lucide-react@0.536.0); this loads the same set from CDN and shares one
   sizing/stroke contract across components. Intentional addition. */
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    const icons = window.lucide.icons || {};
    const pascal = s => s.split('-').map(p => p[0].toUpperCase() + p.slice(1)).join('');
    // Lucide renamed "check-circle" to "circle-check" (etc.); try the rotated
    // form so both spellings resolve.
    const parts = name.split('-');
    const candidates = [pascal(name)];
    if (parts.length > 1) candidates.push(pascal([parts[parts.length - 1], ...parts.slice(0, -1)].join('-')));
    const node = candidates.map(k => icons[k]).find(Boolean);
    if (!node) {
      console.warn('Icon: no Lucide glyph for "' + name + '"');
      return;
    }
    el.innerHTML = '';
    el.appendChild(window.lucide.createElement(node));
    const svg = el.firstChild;
    if (svg) {
      svg.setAttribute('width', size);
      svg.setAttribute('height', size);
      svg.setAttribute('stroke-width', strokeWidth);
      svg.setAttribute('stroke', color);
    }
  }, [name, size, strokeWidth, color]);
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      flex: '0 0 auto',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* One cell of the six-up Services grid. Staggers in on scroll via the
   animationDelay prop. */
function ServiceItem({
  icon,
  title,
  description,
  index = 0,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    className: "ani-fade-in-up",
    style: {
      animationDelay: index * 90 + 'ms',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-6)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--coral-200)',
      color: 'var(--coral-700)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-title)',
      margin: '0 0 var(--space-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)',
      margin: 0,
      maxWidth: 'none'
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceItem.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 600,
  borderRadius: 'var(--radius-pill)',
  border: 'none',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  gap: 'var(--space-2)',
  justifyContent: 'center',
  lineHeight: 1,
  transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)',
  textDecoration: 'none',
  whiteSpace: 'nowrap'
};
const sizes = {
  sm: {
    padding: '9px 18px',
    fontSize: 'var(--text-body-sm)'
  },
  md: {
    padding: '13px 26px',
    fontSize: 'var(--text-body-md)'
  },
  lg: {
    padding: '17px 34px',
    fontSize: 'var(--text-body-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--coral-500)',
    color: 'var(--text-on-accent)',
    boxShadow: 'var(--shadow-accent)'
  },
  secondary: {
    background: 'var(--surface-inverse)',
    color: 'var(--text-on-inverse)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--coral-500)',
    boxShadow: 'inset 0 0 0 1px var(--coral-500)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--ink-700)'
  }
};
const hovers = {
  primary: {
    background: 'var(--coral-600)'
  },
  secondary: {
    background: 'var(--ink-800)'
  },
  outline: {
    background: 'var(--coral-500)',
    color: 'var(--text-on-accent)'
  },
  ghost: {
    background: 'var(--state-hover-surface)'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  disabled,
  href,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...(hover && !disabled ? hovers[variant] : null),
    ...(press && !disabled ? {
      background: 'var(--state-press-accent)',
      transform: 'scale(0.98)'
    } : null),
    ...(disabled ? {
      background: 'var(--state-disabled-bg)',
      color: 'var(--state-disabled-fg)',
      boxShadow: 'none',
      cursor: 'not-allowed'
    } : null),
    ...style
  };
  const glyph = icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 18
  }) : null;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconPosition === 'left' && glyph, children, iconPosition === 'right' && glyph);
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false)
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: s
  }, handlers, {
    onClick: onClick
  }, rest), inner);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: s,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Codifies the brand sheet's title + coral-italic-subtitle pairing.
   Intentional addition. */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      textAlign: align,
      marginBottom: 'var(--space-10)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--coral-500)',
      marginBottom: 'var(--space-3)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-h1)',
      lineHeight: 'var(--leading-title)',
      letterSpacing: 'var(--tracking-title)',
      color: 'var(--text-title)',
      margin: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 'var(--text-subtitle)',
      lineHeight: 'var(--leading-subtitle)',
      color: 'var(--text-accent)',
      margin: 'var(--space-3) 0 0',
      maxWidth: 'var(--measure-prose)',
      marginLeft: align === 'center' ? 'auto' : undefined,
      marginRight: align === 'center' ? 'auto' : undefined
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/SelectionFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* The brand's central motif, straight off the logo: a 1px coral rectangle with
   square white corner handles. Hard corners, always. Use once per view. */
function SelectionFrame({
  children,
  offset = 8,
  handles = 'corners',
  style,
  ...rest
}) {
  const positions = handles === 'corners' ? [[-offset - 4, -offset - 4, 'tl'], [-offset - 4, null, 'tr'], [null, -offset - 4, 'bl'], [null, null, 'br']] : [[-offset - 4, -offset - 4, 'tl'], [null, null, 'br']];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      display: 'inline-block',
      outline: '1px solid var(--border-selection)',
      outlineOffset: offset,
      ...style
    }
  }, rest), children, positions.map(([top, left, key]) => /*#__PURE__*/React.createElement("span", {
    key: key,
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: 'var(--handle-size)',
      height: 'var(--handle-size)',
      background: 'var(--white)',
      border: '1px solid var(--border-selection)',
      top: top != null ? top : undefined,
      bottom: top == null ? -offset - 4 : undefined,
      left: left != null ? left : undefined,
      right: left == null ? -offset - 4 : undefined
    }
  })));
}
Object.assign(__ds_scope, { SelectionFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SelectionFrame.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Tool tags — the site lists 3-5 per project, always bare, never comma-joined. */
function Tag({
  children,
  tone = 'accent',
  style,
  ...rest
}) {
  const tones = {
    accent: {
      background: 'var(--coral-200)',
      color: 'var(--coral-700)'
    },
    neutral: {
      background: 'var(--blush-200)',
      color: 'var(--ink-600)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--ink-600)',
      boxShadow: 'inset 0 0 0 1px var(--border-hairline)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 600,
      padding: '5px 13px',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      display: 'inline-block',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Home-page work card: cover image in a fixed-overflow frame that scales on
   hover, then name, role, summary, tool tags. Mirrors ProjectCard.astro. */
function ProjectCard({
  name,
  role,
  summary,
  image,
  tools = [],
  href = '#',
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      textDecoration: 'none',
      border: 'none',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'box-shadow var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-out)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover ? 'scale(1.03)' : 'none',
      transition: 'transform var(--duration-slow) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6)'
    }
  }, role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--coral-500)',
      marginBottom: 'var(--space-2)'
    }
  }, role), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-h4)',
      color: 'var(--text-title)',
      margin: '0 0 var(--space-2)',
      lineHeight: 'var(--leading-tight)'
    }
  }, name), summary && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--text-muted)',
      lineHeight: 'var(--leading-body)',
      margin: '0 0 var(--space-4)',
      maxWidth: 'none'
    }
  }, summary), tools.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 'var(--space-2)'
    }
  }, tools.map(t => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: t
  }, t)))));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/forms/FormStatus.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Success / error feedback for the contact form. The source defines no status
   palette; these colours are an intentional addition. */
function FormStatus({
  status,
  children,
  style,
  ...rest
}) {
  if (!status) return null;
  const ok = status === 'success';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      padding: '12px 16px',
      borderRadius: 'var(--radius-md)',
      background: ok ? 'color-mix(in oklch, var(--status-success) 12%, var(--white))' : 'var(--coral-200)',
      color: ok ? 'var(--status-success)' : 'var(--coral-700)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ok ? 'check-circle' : 'alert-circle',
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { FormStatus });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/FormStatus.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  name,
  type = 'text',
  placeholder,
  value,
  onChange,
  required,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--ink-600)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("input", _extends({
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md)',
      color: 'var(--ink-700)',
      background: 'var(--surface-card)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      outline: 'none',
      boxShadow: error ? 'inset 0 0 0 1px var(--status-error)' : focus ? 'var(--ring-focus)' : 'var(--shadow-inset-hairline)',
      transition: 'box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--status-error)',
      marginTop: 'var(--space-2)'
    }
  }, error));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  name,
  placeholder,
  value,
  onChange,
  required,
  rows = 5,
  error,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'block',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--ink-600)',
      marginBottom: 'var(--space-2)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--coral-500)'
    }
  }, " *")), /*#__PURE__*/React.createElement("textarea", _extends({
    name: name,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    rows: rows,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-md)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--ink-700)',
      background: 'var(--surface-card)',
      border: 'none',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px',
      outline: 'none',
      resize: 'vertical',
      boxShadow: error ? 'inset 0 0 0 1px var(--status-error)' : focus ? 'var(--ring-focus)' : 'var(--shadow-inset-hairline)',
      transition: 'box-shadow var(--duration-fast) var(--ease-out)'
    }
  }, rest)), error && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-caption)',
      color: 'var(--status-error)',
      marginTop: 'var(--space-2)'
    }
  }, error));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fixed 80px header — wordmark left, section links right. Mobile collapses to a
   hamburger over a blush backdrop-blur. */
function NavBar({
  logoSrc,
  items = [],
  active,
  onNavigate,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      height: 'var(--nav-height)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--section-pad-x)',
      background: 'color-mix(in srgb, var(--blush-100) 82%, transparent)',
      backdropFilter: 'blur(var(--blur-backdrop))',
      WebkitBackdropFilter: 'blur(var(--blur-backdrop))',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(items[0]);
    },
    style: {
      border: 'none',
      display: 'flex',
      alignItems: 'center'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AniDesignIt",
    style: {
      height: 34
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--ink-700)'
    }
  }, "AniDesignIt")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ani-nav-links",
    style: {
      display: 'flex',
      gap: 'var(--space-8)'
    }
  }, items.map(item => /*#__PURE__*/React.createElement("a", {
    key: item,
    href: '#' + item.toLowerCase().replace(/\s+/g, '-'),
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(item);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: active === item ? 'var(--coral-500)' : 'var(--ink-700)',
      borderBottom: active === item ? '1px solid var(--coral-500)' : '1px solid transparent',
      paddingBottom: 2
    }
  }, item))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Menu",
    onClick: () => setOpen(o => !o),
    className: "ani-nav-burger",
    style: {
      display: 'none',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--ink-700)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'x' : 'menu',
    size: 24
  }))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ProjectNav.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Prev / next case-study navigation at the foot of a case study. */
function ProjectNav({
  prev,
  next,
  onNavigate,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-8)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(Side, {
    project: prev,
    dir: "prev",
    onNavigate: onNavigate
  }), /*#__PURE__*/React.createElement(Side, {
    project: next,
    dir: "next",
    onNavigate: onNavigate
  }));
}
function Side({
  project,
  dir,
  onNavigate
}) {
  const [hover, setHover] = React.useState(false);
  if (!project) return /*#__PURE__*/React.createElement("span", null);
  const isNext = dir === 'next';
  return /*#__PURE__*/React.createElement("a", {
    href: '#' + project.slug,
    onClick: e => {
      e.preventDefault();
      onNavigate && onNavigate(project);
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      textAlign: isNext ? 'right' : 'left',
      flexDirection: isNext ? 'row-reverse' : 'row',
      color: hover ? 'var(--coral-500)' : 'var(--ink-700)',
      transition: 'color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isNext ? 'arrow-right' : 'arrow-left',
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)'
    }
  }, isNext ? 'Next' : 'Previous'), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-body-lg)'
    }
  }, project.name)));
}
Object.assign(__ds_scope, { ProjectNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ProjectNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SectionDots.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Progress dots for the horizontal section scroll and the work carousel. */
function SectionDots({
  count,
  active = 0,
  onSelect,
  orientation = 'vertical',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: 'var(--space-3)',
      alignItems: 'center',
      ...style
    }
  }, rest), Array.from({
    length: count
  }).map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    "aria-label": 'Go to section ' + (i + 1),
    onClick: () => onSelect && onSelect(i),
    style: {
      width: i === active ? 10 : 8,
      height: i === active ? 10 : 8,
      padding: 0,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      cursor: 'pointer',
      background: i === active ? 'var(--coral-500)' : 'var(--ink-300)',
      transition: 'background var(--duration-fast) var(--ease-out), width var(--duration-fast) var(--ease-out), height var(--duration-fast) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { SectionDots });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SectionDots.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SocialRail.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Fixed vertical social rail — Font Awesome brand glyphs, because Lucide has
   no brand marks. Left side on desktop, bottom row on mobile. */
const DEFAULTS = [{
  icon: 'fa-brands fa-instagram',
  label: 'Instagram',
  href: 'https://instagram.com/aniposada'
}, {
  icon: 'fa-brands fa-youtube',
  label: 'YouTube',
  href: 'https://youtube.com/@ZoluAi'
}, {
  icon: 'fa-brands fa-linkedin-in',
  label: 'LinkedIn',
  href: 'https://linkedin.com/in/aniposada'
}];
function SocialRail({
  links = DEFAULTS,
  orientation = 'vertical',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: orientation === 'vertical' ? 'column' : 'row',
      gap: 'var(--space-4)',
      alignItems: 'center',
      ...style
    }
  }, rest), links.map(l => /*#__PURE__*/React.createElement(RailLink, _extends({
    key: l.label
  }, l))));
}
function RailLink({
  icon,
  label,
  href
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": label,
    target: "_blank",
    rel: "noreferrer",
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 40,
      height: 40,
      borderRadius: 'var(--radius-pill)',
      display: 'grid',
      placeItems: 'center',
      background: hover ? 'var(--coral-500)' : 'var(--surface-card)',
      color: hover ? 'var(--text-on-accent)' : 'var(--ink-700)',
      boxShadow: 'var(--shadow-sm)',
      border: 'none',
      fontSize: 16,
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: icon,
    "aria-hidden": "true"
  }));
}
Object.assign(__ds_scope, { SocialRail });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SocialRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/AboutMe.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  SelectionFrame,
  Tag
} = window.ANI;

/* AboutMe.astro — photo with a Lottie overlay, biography, resume + booking links. */
function AboutMe() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,0.85fr) minmax(0,1.15fr)',
      gap: 'var(--space-16)',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SelectionFrame, {
    offset: 10,
    handles: "diagonal"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-md)',
      background: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=75",
    alt: "Ana Maria Posada",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "About",
    title: "About Me",
    subtitle: "A designer who codes, and a developer who cares how it feels.",
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      marginBottom: 'var(--space-4)'
    }
  }, "I'm Ana \u2014 a multidisciplinary designer based in Vancouver, BC. I work across digital design, UI/UX, branding and web development, which means I can take a product from research through to the shipped front end without a handoff gap."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginBottom: 'var(--space-6)'
    }
  }, "Motion is where those skills meet. I build Lottie animations that carry a brand's personality without slowing anything down, and I care most about work that makes people feel looked after."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap',
      marginBottom: 'var(--space-8)'
    }
  }, ['Figma', 'Astro', 'Webflow', 'Tailwind', 'Lottie', 'Illustrator'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "neutral"
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "file-text",
    iconPosition: "left"
  }, "View Resume"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "calendar",
    iconPosition: "left"
  }, "Book a Call"))));
}
Object.assign(window, {
  AboutMe
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/AboutMe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
const {
  NavBar,
  SocialRail
} = window.ANI;
const SECTIONS = ['Home', 'My Work', 'Services', 'About Me', 'Contact'];
function App() {
  const [view, setView] = React.useState({
    page: 'home',
    section: 'Home'
  });
  const projects = window.ANI_PROJECTS;
  function goSection(name) {
    setView({
      page: 'home',
      section: name
    });
    const id = name.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) window.scrollTo({
      top: el.offsetTop - 80,
      behavior: 'smooth'
    });
  }
  function openProject(p) {
    setView({
      page: 'case',
      slug: p.slug
    });
    window.scrollTo({
      top: 0,
      behavior: 'auto'
    });
  }

  // Mark the active section as the page scrolls.
  React.useEffect(() => {
    if (view.page !== 'home') return;
    function onScroll() {
      let current = SECTIONS[0];
      for (const name of SECTIONS) {
        const el = document.getElementById(name.toLowerCase().replace(/\s+/g, '-'));
        if (el && el.offsetTop - 140 <= window.scrollY) current = name;
      }
      setView(v => v.page === 'home' && v.section !== current ? {
        ...v,
        section: current
      } : v);
    }
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, [view.page]);
  const project = view.page === 'case' ? projects.find(p => p.slug === view.slug) : null;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, {
    logoSrc: "../../assets/logo-wordmark.svg",
    items: SECTIONS,
    active: view.page === 'home' ? view.section : null,
    onNavigate: goSection
  }), /*#__PURE__*/React.createElement(SocialRail, {
    className: "ani-rail",
    style: {
      position: 'fixed',
      left: 'var(--space-5)',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 40
    }
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--max-content)',
      margin: '0 auto'
    }
  }, project ? /*#__PURE__*/React.createElement(CaseStudy, {
    project: project,
    projects: projects,
    onOpen: openProject,
    onBack: () => {
      setView({
        page: 'home',
        section: 'My Work'
      });
      requestAnimationFrame(() => goSection('My Work'));
    }
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    id: "home"
  }, /*#__PURE__*/React.createElement(Hero, {
    onExplore: () => goSection('My Work')
  })), /*#__PURE__*/React.createElement("div", {
    id: "my-work"
  }, /*#__PURE__*/React.createElement(MyWork, {
    projects: projects,
    onOpen: openProject
  })), /*#__PURE__*/React.createElement("div", {
    id: "services"
  }, /*#__PURE__*/React.createElement(Services, {
    services: window.ANI_SERVICES
  })), /*#__PURE__*/React.createElement("div", {
    id: "about-me"
  }, /*#__PURE__*/React.createElement(AboutMe, null)), /*#__PURE__*/React.createElement("div", {
    id: "contact"
  }, /*#__PURE__*/React.createElement(Contact, null)))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      padding: 'var(--space-8) var(--section-pad-x)',
      display: 'flex',
      justifyContent: 'space-between',
      gap: 'var(--space-6)',
      flexWrap: 'wrap',
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "AniDesignIt \u2014 Ana Maria Posada \xB7 Vancouver, BC"), /*#__PURE__*/React.createElement("span", null, "hello@aniposada.com \xB7 +1 604-725-1561")));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/CaseStudy.jsx
try { (() => {
const {
  Tag,
  Testimonial,
  ProjectNav,
  Button,
  Icon
} = window.ANI;

/* [slug].astro — hero image, details sidebar, body, gallery with lightbox,
   prev/next navigation. */
function CaseStudy({
  project,
  projects,
  onOpen,
  onBack
}) {
  const [lightbox, setLightbox] = React.useState(null);
  const i = projects.findIndex(p => p.slug === project.slug);
  const prev = i > 0 ? projects[i - 1] : null;
  const next = i < projects.length - 1 ? projects[i + 1] : null;
  return /*#__PURE__*/React.createElement("article", null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-6) var(--section-pad-x) 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    icon: "arrow-left",
    iconPosition: "left",
    onClick: onBack
  }, "Back to work")), /*#__PURE__*/React.createElement("header", {
    style: {
      padding: 'var(--space-8) var(--section-pad-x) var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-title)',
      margin: '0 0 var(--space-4)',
      maxWidth: '22ch'
    }
  }, project.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 'var(--text-subtitle)',
      color: 'var(--text-accent)',
      margin: 0,
      maxWidth: '56ch'
    }
  }, project.subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '21 / 9',
      overflow: 'hidden',
      background: 'var(--blush-200)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: project.heroImage,
    alt: project.name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,260px) minmax(0,1fr)',
      gap: 'var(--space-16)',
      padding: 'var(--space-16) var(--section-pad-x)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 'calc(var(--nav-height) + var(--space-6))'
    }
  }, [['Client', project.client], ['Year', project.year], ['Role', project.role]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)',
      marginBottom: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-700)'
    }
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-3)'
    }
  }, "Tools"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, project.tools.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("div", null, project.body.map(([heading, text]) => /*#__PURE__*/React.createElement("section", {
    key: heading,
    style: {
      marginBottom: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-h2)',
      color: 'var(--text-title)',
      margin: '0 0 var(--space-3)'
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      margin: 0
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-12)'
    }
  }, project.gallery.map(src => /*#__PURE__*/React.createElement("button", {
    key: src,
    type: "button",
    onClick: () => setLightbox(src),
    style: {
      padding: 0,
      border: 'none',
      background: 'none',
      cursor: 'zoom-in',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-sm)',
      aspectRatio: '3 / 2'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement(Testimonial, {
    quote: project.testimonial.quote,
    author: project.testimonial.author
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 var(--section-pad-x) var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement(ProjectNav, {
    prev: prev,
    next: next,
    onNavigate: onOpen
  })), lightbox && /*#__PURE__*/React.createElement("div", {
    onClick: () => setLightbox(null),
    role: "dialog",
    "aria-label": "Image preview",
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'color-mix(in srgb, var(--ink-900) 78%, transparent)',
      backdropFilter: 'blur(var(--blur-backdrop))',
      display: 'grid',
      placeItems: 'center',
      padding: 'var(--space-10)',
      cursor: 'zoom-out'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: lightbox,
    alt: "",
    style: {
      maxWidth: '90%',
      maxHeight: '86vh',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Close",
    onClick: () => setLightbox(null),
    style: {
      position: 'absolute',
      top: 24,
      right: 24,
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      background: 'var(--surface-card)',
      color: 'var(--ink-700)',
      display: 'grid',
      placeItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 22
  }))));
}
Object.assign(window, {
  CaseStudy
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/CaseStudy.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
const {
  SectionHeading,
  Button,
  TextField,
  Textarea,
  FormStatus,
  Icon,
  SocialRail
} = window.ANI;

/* Contact.astro — form with validation and status, plus the footer detail block. */
function Contact() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = React.useState(null);
  const [errors, setErrors] = React.useState({});
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = 'Please add your name';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) next.email = 'Enter a valid email address';
    if (!form.message.trim()) next.message = 'Tell me a little about your project';
    setErrors(next);
    setStatus(Object.keys(next).length ? 'error' : 'success');
  }
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Get in touch",
    title: "Contact",
    subtitle: "Tell me what you're building and I'll tell you how I'd approach it."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.15fr) minmax(0,0.85fr)',
      gap: 'var(--space-16)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-4)',
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(TextField, {
    label: "Name",
    value: form.name,
    onChange: set('name'),
    placeholder: "Your name",
    error: errors.name,
    required: true
  }), /*#__PURE__*/React.createElement(TextField, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: set('email'),
    placeholder: "you@studio.com",
    error: errors.email,
    required: true
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Message",
    rows: 5,
    value: form.message,
    onChange: set('message'),
    placeholder: "Tell me about your project",
    error: errors.message,
    required: true,
    style: {
      marginBottom: 'var(--space-6)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "send",
    onClick: submit
  }, "Send Message"), status === 'success' && /*#__PURE__*/React.createElement(FormStatus, {
    status: "success"
  }, "Thanks \u2014 I'll be in touch soon."), status === 'error' && /*#__PURE__*/React.createElement(FormStatus, {
    status: "error"
  }, "Please check the highlighted fields."))), /*#__PURE__*/React.createElement("aside", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding: 'var(--space-8)',
      boxShadow: 'var(--shadow-sm)'
    }
  }, [['map-pin', 'Vancouver, BC, Canada'], ['mail', 'hello@aniposada.com'], ['phone', '+1 604-725-1561']].map(([icon, text]) => /*#__PURE__*/React.createElement("div", {
    key: text,
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      alignItems: 'center',
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--coral-200)',
      color: 'var(--coral-700)',
      display: 'grid',
      placeItems: 'center',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      color: 'var(--ink-700)'
    }
  }, text))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      paddingTop: 'var(--space-5)',
      marginTop: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-4)'
    }
  }, "Elsewhere"), /*#__PURE__*/React.createElement(SocialRail, {
    orientation: "horizontal"
  })))));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
const {
  Button,
  SelectionFrame,
  Icon
} = window.ANI;

/* Hero.astro — intro, Lottie animation, "Explore My Work" CTA. The Lottie file
   itself is on lottie.host and not in the repo, so its slot is marked. */
function Hero({
  onExplore
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: 'calc(100vh - var(--nav-height))',
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,0.95fr)',
      gap: 'var(--space-16)',
      alignItems: 'center',
      padding: 'var(--space-16) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "ani-fade-in-up"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-label)',
      fontWeight: 600,
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-eyebrow)',
      color: 'var(--coral-500)',
      marginBottom: 'var(--space-5)'
    }
  }, "Vancouver, BC"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-title)',
      fontWeight: 700,
      fontSize: 'var(--text-display-2)',
      lineHeight: 'var(--leading-display)',
      letterSpacing: 'var(--tracking-display)',
      color: 'var(--text-title)',
      margin: '0 0 var(--space-5)'
    }
  }, "Ana Maria Posada"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontStyle: 'italic',
      fontSize: 'var(--text-subtitle)',
      lineHeight: 'var(--leading-subtitle)',
      color: 'var(--text-accent)',
      margin: '0 0 var(--space-6)'
    }
  }, "Multidisciplinary designer working across product UI/UX, branding, motion and code."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-body-lg)',
      color: 'var(--text-body)',
      margin: '0 0 var(--space-10)',
      maxWidth: '52ch'
    }
  }, "I design and build digital products end to end \u2014 from the first Figma frame to the Lottie animation and the front-end that ships it."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    icon: "arrow-right",
    onClick: onExplore
  }, "Explore My Work"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    icon: "calendar",
    iconPosition: "left"
  }, "Book a Call"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(SelectionFrame, {
    offset: 12
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(400px, 40vw)',
      aspectRatio: '1',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--shadow-md)',
      gap: 'var(--space-3)',
      alignContent: 'center',
      textAlign: 'center',
      padding: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "play-circle",
    size: 40,
    color: "var(--coral-500)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body-sm)',
      fontWeight: 600,
      color: 'var(--ink-600)'
    }
  }, "Lottie animation"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      lineHeight: 1.5
    }
  }, "The live site loads a dotlottie-wc animation here from lottie.host. The file is not in the repository.")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/MyWork.jsx
try { (() => {
const {
  SectionHeading,
  ProjectCard,
  SectionDots,
  Icon
} = window.ANI;

/* MyWork.astro — horizontal project carousel with dots and arrow controls. */
function MyWork({
  projects,
  onOpen
}) {
  const [page, setPage] = React.useState(0);
  const perPage = 3;
  const pages = Math.ceil(projects.length / perPage);
  const shown = projects.slice(page * perPage, page * perPage + perPage);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 'var(--space-8)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Selected work",
    title: "My Work",
    subtitle: "Products, brands and websites I've shaped end to end.",
    style: {
      marginBottom: 'var(--space-8)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      marginBottom: 'var(--space-8)'
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => setPage(p => Math.max(0, p - 1)),
    disabled: page === 0
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => setPage(p => Math.min(pages - 1, p + 1)),
    disabled: page === pages - 1
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, shown.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.slug,
    name: p.name,
    role: p.role,
    summary: p.summary,
    image: p.heroImage,
    tools: p.tools,
    href: '#/work/' + p.slug,
    onClick: e => {
      e.preventDefault();
      onOpen(p);
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 'var(--space-10)'
    }
  }, /*#__PURE__*/React.createElement(SectionDots, {
    count: pages,
    active: page,
    onSelect: setPage,
    orientation: "horizontal"
  })));
}
function Arrow({
  dir,
  onClick,
  disabled
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    disabled: disabled,
    "aria-label": dir === 'left' ? 'Previous projects' : 'Next projects',
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-pill)',
      border: 'none',
      display: 'grid',
      placeItems: 'center',
      cursor: disabled ? 'not-allowed' : 'pointer',
      background: disabled ? 'var(--state-disabled-bg)' : hover ? 'var(--coral-500)' : 'var(--surface-card)',
      color: disabled ? 'var(--state-disabled-fg)' : hover ? 'var(--text-on-accent)' : 'var(--ink-700)',
      boxShadow: disabled ? 'none' : 'var(--shadow-sm)',
      transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: dir === 'left' ? 'arrow-left' : 'arrow-right',
    size: 20
  }));
}
Object.assign(window, {
  MyWork
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/MyWork.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Services.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  SectionHeading,
  ServiceItem
} = window.ANI;

/* Services.astro — six-up grid, items stagger in on scroll. */
function Services({
  services
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: 'var(--section-pad-y) var(--section-pad-x)'
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What I do",
    title: "Services",
    subtitle: "Design, motion and code \u2014 usually all three on the same project."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0,1fr))',
      gap: 'var(--space-6)'
    }
  }, services.map((s, i) => /*#__PURE__*/React.createElement(ServiceItem, _extends({
    key: s.title,
    index: i
  }, s)))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)',
      marginTop: 'var(--space-8)'
    }
  }, "Note \u2014 the six bespoke service SVGs and the real service copy are not in the repository. Icons are Lucide stand-ins and descriptions are placeholders."));
}
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* Real content from anidesignit.com (fetched 2026-08-21) plus case_studies.json
   in AniTools/Portfolio-Website. Copy is verbatim from the live site — do not
   rewrite Ana's words. */
window.ANI_PROJECTS = [{
  name: 'AniDesignIt Portfolio',
  slug: 'anidesignit-portfolio',
  year: '2025',
  role: 'Web Designer & Fullstack Developer',
  client: 'Personal Project',
  summary: 'A personal portfolio built from scratch with Astro and a custom CMS to blend storytelling, motion, and code.',
  subtitle: 'My personal portfolio showcasing creative web design and UX case studies.',
  tools: ['Figma', 'Astro', 'Tailwind', 'Firebase', 'Lottie', 'Gemini'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FAniDesigniT.jpg?alt=media&token=b2d7038f-d1fb-4642-bfb8-578597c7260c',
  gallery: ['https://images.unsplash.com/photo-1505685296765-3a2736de412f?w=900&q=70', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=70'],
  body: [['The Challenge', 'I wanted a portfolio that reflected both my technical and artistic side \u2014 dynamic, scrollable, and easy to update through a CMS.'], ['The Solution', 'I built it from scratch using Astro + Firebase for dynamic content, with smooth Lottie animations and a horizontal scroll layout.'], ['Results & Impact', 'The result was a fast, visually engaging website that streamlined my case study workflow and improved SEO performance.']],
  testimonial: {
    quote: 'This project represents my journey as a designer \u2014 where code meets creativity.',
    author: null
  }
}, {
  name: 'ZOLU the App',
  slug: 'zolu-ai-assistant',
  year: '2025',
  role: 'UI/UX Designer & Product Designer',
  client: 'Personal Project',
  summary: 'Built for busy ADHD brains, Zolu is a voice-based AI assistant that turns chaos into calm and helps you stay on track with your tasks, emotions, moods, and support to stay grounded.',
  subtitle: 'An AI-powered personal assistant that helps ADHD users organize their lives.',
  tools: ['Figma', 'Bolt', 'Stackblitz', 'ElevenLabs'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FZolu.jpg?alt=media&token=7a492d76-6f91-4785-b4a8-4409e0d0940b',
  gallery: ['https://images.unsplash.com/photo-1590608897129-79da98d1591e?w=900&q=70', 'https://images.unsplash.com/photo-1603791452906-c786df99c7f5?w=900&q=70'],
  body: [['The Challenge', 'People with ADHD often struggle with time management and focus. The goal was to design a calm, conversational assistant to help.'], ['The Solution', 'I designed an interface with mood tracking, Pomodoro timers, and a soft voice AI experience using ElevenLabs.'], ['Results & Impact', 'The prototype established a strong emotional connection through tone and UX consistency. The MVP is now ready for developer handoff.']],
  testimonial: {
    quote: 'Zolu feels like a friend that listens \u2014 not just another productivity app.',
    author: null
  }
}, {
  name: 'Marquess Coffee',
  slug: 'marquess-coffee',
  year: '2024',
  role: 'Brand, Product & Web Designer',
  client: 'Marquess Coffee',
  summary: 'Complete branding and Webflow e-commerce setup with Ecwid integration.',
  subtitle: 'Branding and e-commerce for a premium coffee brand.',
  tools: ['Figma', 'Webflow', 'Ecwid', 'Illustrator'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FMarquess%20Coffee.jpg?alt=media&token=51f1c4f3-1c53-42dc-a28a-a7ebcf8fcfaf',
  gallery: ['https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900&q=70', 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=900&q=70'],
  body: [['The Challenge', 'Marquess needed a strong brand and online store to showcase Brazilian coffee products.'], ['The Solution', 'I created their brand identity, packaging design, and developed an e-commerce website on Webflow.'], ['Results & Impact', 'The cohesive brand boosted early customer trust and online engagement.']],
  testimonial: {
    quote: 'Ana turned my vision into a brand I\u2019m proud of \u2014 everything feels authentic.',
    author: 'Gabby Oliveira'
  }
}, {
  name: 'The Mod Squad Team',
  slug: 'the-mod-squad-team',
  year: '2025',
  role: 'Brand, Product & Web Designer',
  client: 'The Mod Squad Team',
  summary: 'A two-week end-to-end website redesign for a modular construction firm. I transformed an outdated site into a clean, professional platform with a new visual identity and a clear user journey built in Astro.',
  subtitle: 'End-to-end redesign for a modular construction firm, delivered in two weeks.',
  tools: ['Figma', 'Astro', 'Claude Code', 'Tailwind'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FP6_TheModSquad.png?alt=media&token=30e2b5b7-e117-4078-8a6c-e611127bfcd7',
  gallery: [],
  body: [['The Challenge', 'An outdated site was undermining a credible modular construction business, with no clear path from interest to enquiry.'], ['The Solution', 'I rebuilt it in Astro around a new visual identity and a single clear user journey, designed and shipped in two weeks.'], ['Results & Impact', 'The team now has a clean, professional platform they can extend themselves.']],
  testimonial: {
    quote: null,
    author: null
  }
}, {
  name: 'GHG Accounting Website',
  slug: 'ghg-accounting-website',
  year: '2025',
  role: 'Lead UI/UX Designer & Full-Stack Developer',
  client: 'GHG Accounting Ltd.',
  summary: 'Redesigned GHG Accounting\u2019s site from a static page into a scalable, user-friendly platform with modern UX, refreshed visuals, and custom Lottie animations.',
  subtitle: 'Corporate website redesign for a sustainability consulting firm.',
  tools: ['Webflow', 'Figma', 'Lottie', 'After Effects', 'Tailwind', 'CSS + JS'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FGHG.jpg?alt=media&token=aa1064e8-244b-4502-a3af-800434378a33',
  gallery: ['https://images.unsplash.com/photo-1579546928687-c667e6b8a9e1?w=900&q=70', 'https://images.unsplash.com/photo-1565372918670-cb1b6e90b70d?w=900&q=70'],
  body: [['The Challenge', 'GHG needed a professional yet innovative website to reflect their environmental mission.'], ['The Solution', 'I built it in Webflow using green tones, structured layouts, and interactive animations.'], ['Results & Impact', 'The site boosted SEO rankings and helped attract international partners through clearer storytelling.']],
  testimonial: {
    quote: 'Ana brought clarity and creativity to a complex industry \u2014 the result speaks for itself.',
    author: null
  }
}, {
  name: 'Louise Lee Website',
  slug: 'louise-lee-website',
  year: '2024',
  role: 'Web Designer & Developer',
  client: 'Louise Lee Coaching',
  summary: 'Website redesign for Louise Lee, a life and leadership coach.',
  subtitle: 'An elegant website for a life and leadership coach in Vancouver.',
  tools: ['Figma', 'Webflow', 'Illustrator', 'ConvertKit'],
  heroImage: 'https://firebasestorage.googleapis.com/v0/b/anidesingit-portfolio.firebasestorage.app/o/Projects%2FThubmnails%2FLouise%20Lee.jpg?alt=media&token=1602a487-771b-44ae-a814-5ec0d40b113a',
  gallery: ['https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=900&q=70', 'https://images.unsplash.com/photo-1507209696998-3c532be9b2b5?w=900&q=70'],
  body: [['The Challenge', 'Louise\u2019s old website lacked visual clarity and didn\u2019t convey her warmth.'], ['The Solution', 'I redesigned the site using calm colors and elegant layouts to inspire confidence and trust.'], ['Results & Impact', 'Bookings increased and her clients reported a stronger sense of connection with her brand.']],
  testimonial: {
    quote: 'Ana captured my voice and message beautifully \u2014 my new site finally feels like me.',
    author: 'Louise Lee'
  }
}];

/* Services — copy verbatim from anidesignit.com. Icons are Lucide stand-ins;
   the site's own service SVGs are not in the repository. */
window.ANI_SERVICES = [{
  icon: 'compass',
  title: 'Brand Strategy Development',
  description: "I help you define your brand's core values, positioning, and messaging to create a strong, cohesive foundation."
}, {
  icon: 'palette',
  title: 'Visual Identity Design',
  description: 'Create a unique and memorable brand identity, including logos, color palettes, typography, and brand guidelines.'
}, {
  icon: 'layout',
  title: 'UI/UX Interface Design',
  description: 'Design user-friendly digital experiences in Figma, creating wireframes and prototypes tailored for your design needs.'
}, {
  icon: 'monitor',
  title: 'Web Design',
  description: 'Design and plan responsive websites in Figma with high-fidelity prototypes, aligned with your design system.'
}, {
  icon: 'code',
  title: 'Web Development',
  description: 'I turn your Figma design into personal websites, portfolios, and online stores in Webflow and Ecwid.'
}, {
  icon: 'play',
  title: 'Lottie Animation & After Effects',
  description: 'Add dynamic, interactive animations to your website using Lottie and After Effects for a more engaging user experience.'
}];

/* Verbatim site copy reused across surfaces. */
window.ANI_COPY = {
  name: 'ANA MARIA POSADA',
  role: 'Product Designer \u00b7 UX/UI \u00b7 Web Design',
  servicesEyebrow: 'START YOUR DIGITAL DESIGN JOURNEY',
  aboutHeading: 'Meet Ana Maria',
  contactHeading: "Let's chat soon!",
  contactBody: "I'd love to hear your ideas! Let's chat about how we can work together to make your vision a reality.",
  email: 'hello@anidesignit.com',
  phone: '+1 604-725-1561',
  location: 'Vancouver, BC, Canada',
  booking: 'https://calendar.app.google/Ltp15FQaPxhoeaZS9',
  github: 'https://github.com/AniTools',
  instagram: 'https://www.instagram.com/aniposada',
  linkedin: 'https://www.linkedin.com/in/aniposada/',
  portrait: 'https://res.cloudinary.com/dqbxkmkph/image/upload/v1759879976/ANaM_ynwj0v.png'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceItem = __ds_scope.ServiceItem;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SelectionFrame = __ds_scope.SelectionFrame;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.FormStatus = __ds_scope.FormStatus;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.ProjectNav = __ds_scope.ProjectNav;

__ds_ns.SectionDots = __ds_scope.SectionDots;

__ds_ns.SocialRail = __ds_scope.SocialRail;

})();
