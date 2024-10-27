"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[399],{

/***/ 8998:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(6324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(8639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
var get_theme_color = __webpack_require__(6344);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
;// ./node_modules/@mantine/core/esm/components/Loader/Loader.module.css.mjs
'use client';
var classes = {"root":"m_5ae2e3c","barsLoader":"m_7a2bd4cd","bar":"m_870bb79","bars-loader-animation":"m_5d2b3b9d","dotsLoader":"m_4e3f22d7","dot":"m_870c4af","loader-dots-animation":"m_aac34a1","ovalLoader":"m_b34414df","oval-loader-animation":"m_f8e89c4b"};


//# sourceMappingURL=Loader.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Loader/loaders/Bars.mjs
'use client';













const Bars = (0,react.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { component: "span", className: (0,clsx/* default */.A)(classes.barsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.bar }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.bar }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.bar })
] }));
Bars.displayName = "@mantine/core/Bars";


//# sourceMappingURL=Bars.mjs.map

;// ./node_modules/@mantine/core/esm/components/Loader/loaders/Dots.mjs
'use client';













const Dots = (0,react.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsxs)(Box/* Box */.a, { component: "span", className: (0,clsx/* default */.A)(classes.dotsLoader, className), ...others, ref, children: [
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.dot }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.dot }),
  /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { className: classes.dot })
] }));
Dots.displayName = "@mantine/core/Dots";


//# sourceMappingURL=Dots.mjs.map

;// ./node_modules/@mantine/core/esm/components/Loader/loaders/Oval.mjs
'use client';













const Oval = (0,react.forwardRef)(({ className, ...others }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", className: (0,clsx/* default */.A)(classes.ovalLoader, className), ...others, ref }));
Oval.displayName = "@mantine/core/Oval";


//# sourceMappingURL=Oval.mjs.map

;// ./node_modules/@mantine/core/esm/components/Loader/Loader.mjs
'use client';






















const defaultLoaders = {
  bars: Bars,
  oval: Oval,
  dots: Dots
};
const defaultProps = {
  loaders: defaultLoaders,
  type: "oval"
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((theme, { size, color }) => ({
  root: {
    "--loader-size": (0,get_size/* getSize */.YC)(size, "loader-size"),
    "--loader-color": color ? (0,get_theme_color/* getThemeColor */.r)(color, theme) : void 0
  }
}));
const Loader = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Loader", defaultProps, _props);
  const {
    size,
    color,
    type,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    loaders,
    variant,
    children,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Loader",
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (children) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { ...getStyles("root"), ref, ...others, children });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...getStyles("root"),
      ref,
      component: loaders[type],
      variant,
      size,
      ...others
    }
  );
});
Loader.defaultLoaders = defaultLoaders;
Loader.classes = classes;
Loader.displayName = "@mantine/core/Loader";


//# sourceMappingURL=Loader.mjs.map

;// ./node_modules/@mantine/core/esm/components/Transition/transitions.mjs
'use client';













const popIn = (from) => ({
  in: { opacity: 1, transform: "scale(1)" },
  out: { opacity: 0, transform: `scale(.9) translateY(${(0,rem/* rem */.D)(from === "bottom" ? 10 : -10)})` },
  transitionProperty: "transform, opacity"
});
const transitions = {
  fade: {
    in: { opacity: 1 },
    out: { opacity: 0 },
    transitionProperty: "opacity"
  },
  "fade-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(-30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${(0,rem/* rem */.D)(30)}` },
    transitionProperty: "opacity, transform"
  },
  "fade-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: `translateX(${(0,rem/* rem */.D)(-30)}` },
    transitionProperty: "opacity, transform"
  },
  scale: {
    in: { opacity: 1, transform: "scale(1)" },
    out: { opacity: 0, transform: "scale(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-y": {
    in: { opacity: 1, transform: "scaleY(1)" },
    out: { opacity: 0, transform: "scaleY(0)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "scale-x": {
    in: { opacity: 1, transform: "scaleX(1)" },
    out: { opacity: 0, transform: "scaleX(0)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "skew-up": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(-20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "skew-down": {
    in: { opacity: 1, transform: "translateY(0) skew(0deg, 0deg)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(20)}) skew(-10deg, -5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-left": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(20)}) rotate(-5deg)` },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "rotate-right": {
    in: { opacity: 1, transform: "translateY(0) rotate(0deg)" },
    out: { opacity: 0, transform: `translateY(${(0,rem/* rem */.D)(20)}) rotate(5deg)` },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-down": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(-100%)" },
    common: { transformOrigin: "top" },
    transitionProperty: "transform, opacity"
  },
  "slide-up": {
    in: { opacity: 1, transform: "translateY(0)" },
    out: { opacity: 0, transform: "translateY(100%)" },
    common: { transformOrigin: "bottom" },
    transitionProperty: "transform, opacity"
  },
  "slide-left": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(100%)" },
    common: { transformOrigin: "left" },
    transitionProperty: "transform, opacity"
  },
  "slide-right": {
    in: { opacity: 1, transform: "translateX(0)" },
    out: { opacity: 0, transform: "translateX(-100%)" },
    common: { transformOrigin: "right" },
    transitionProperty: "transform, opacity"
  },
  pop: {
    ...popIn("bottom"),
    common: { transformOrigin: "center center" }
  },
  "pop-bottom-left": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom left" }
  },
  "pop-bottom-right": {
    ...popIn("bottom"),
    common: { transformOrigin: "bottom right" }
  },
  "pop-top-left": {
    ...popIn("top"),
    common: { transformOrigin: "top left" }
  },
  "pop-top-right": {
    ...popIn("top"),
    common: { transformOrigin: "top right" }
  }
};


//# sourceMappingURL=transitions.mjs.map

;// ./node_modules/@mantine/core/esm/components/Transition/get-transition-styles/get-transition-styles.mjs
'use client';


const transitionStatuses = {
  entering: "in",
  entered: "in",
  exiting: "out",
  exited: "out",
  "pre-exiting": "out",
  "pre-entering": "out"
};
function getTransitionStyles({
  transition,
  state,
  duration,
  timingFunction
}) {
  const shared = {
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: timingFunction
  };
  if (typeof transition === "string") {
    if (!(transition in transitions)) {
      return {};
    }
    return {
      transitionProperty: transitions[transition].transitionProperty,
      ...shared,
      ...transitions[transition].common,
      ...transitions[transition][transitionStatuses[state]]
    };
  }
  return {
    transitionProperty: transition.transitionProperty,
    ...shared,
    ...transition.common,
    ...transition[transitionStatuses[state]]
  };
}


//# sourceMappingURL=get-transition-styles.mjs.map

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(961);
;// ./node_modules/@mantine/hooks/esm/use-media-query/use-media-query.mjs
'use client';


function attachMediaListener(query, callback) {
  try {
    query.addEventListener("change", callback);
    return () => query.removeEventListener("change", callback);
  } catch (e) {
    query.addListener(callback);
    return () => query.removeListener(callback);
  }
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    return window.matchMedia(query).matches;
  }
  return false;
}
function useMediaQuery(query, initialValue, { getInitialValueInEffect } = {
  getInitialValueInEffect: true
}) {
  const [matches, setMatches] = (0,react.useState)(
    getInitialValueInEffect ? initialValue : getInitialValue(query)
  );
  const queryRef = (0,react.useRef)();
  (0,react.useEffect)(() => {
    if ("matchMedia" in window) {
      queryRef.current = window.matchMedia(query);
      setMatches(queryRef.current.matches);
      return attachMediaListener(queryRef.current, (event) => setMatches(event.matches));
    }
    return void 0;
  }, [query]);
  return matches;
}


//# sourceMappingURL=use-media-query.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs
'use client';


function useReducedMotion(initialValue, options) {
  return useMediaQuery("(prefers-reduced-motion: reduce)", initialValue, options);
}


//# sourceMappingURL=use-reduced-motion.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
'use client';


function useDidUpdate(fn, dependencies) {
  const mounted = (0,react.useRef)(false);
  (0,react.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0,react.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}


//# sourceMappingURL=use-did-update.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
;// ./node_modules/@mantine/core/esm/components/Transition/use-transition.mjs
'use client';













function useTransition({
  duration,
  exitDuration,
  timingFunction,
  mounted,
  onEnter,
  onExit,
  onEntered,
  onExited,
  enterDelay,
  exitDelay
}) {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  const shouldReduceMotion = useReducedMotion();
  const reduceMotion = theme.respectReducedMotion ? shouldReduceMotion : false;
  const [transitionDuration, setTransitionDuration] = (0,react.useState)(reduceMotion ? 0 : duration);
  const [transitionStatus, setStatus] = (0,react.useState)(mounted ? "entered" : "exited");
  const transitionTimeoutRef = (0,react.useRef)(-1);
  const delayTimeoutRef = (0,react.useRef)(-1);
  const rafRef = (0,react.useRef)(-1);
  const handleStateChange = (shouldMount) => {
    const preHandler = shouldMount ? onEnter : onExit;
    const handler = shouldMount ? onEntered : onExited;
    window.clearTimeout(transitionTimeoutRef.current);
    const newTransitionDuration = reduceMotion ? 0 : shouldMount ? duration : exitDuration;
    setTransitionDuration(newTransitionDuration);
    if (newTransitionDuration === 0) {
      typeof preHandler === "function" && preHandler();
      typeof handler === "function" && handler();
      setStatus(shouldMount ? "entered" : "exited");
    } else {
      rafRef.current = requestAnimationFrame(() => {
        react_dom.flushSync(() => {
          setStatus(shouldMount ? "pre-entering" : "pre-exiting");
        });
        rafRef.current = requestAnimationFrame(() => {
          typeof preHandler === "function" && preHandler();
          setStatus(shouldMount ? "entering" : "exiting");
          transitionTimeoutRef.current = window.setTimeout(() => {
            typeof handler === "function" && handler();
            setStatus(shouldMount ? "entered" : "exited");
          }, newTransitionDuration);
        });
      });
    }
  };
  const handleTransitionWithDelay = (shouldMount) => {
    window.clearTimeout(delayTimeoutRef.current);
    const delay = shouldMount ? enterDelay : exitDelay;
    if (typeof delay !== "number") {
      handleStateChange(shouldMount);
      return;
    }
    delayTimeoutRef.current = window.setTimeout(
      () => {
        handleStateChange(shouldMount);
      },
      shouldMount ? enterDelay : exitDelay
    );
  };
  useDidUpdate(() => {
    handleTransitionWithDelay(mounted);
  }, [mounted]);
  (0,react.useEffect)(
    () => () => {
      window.clearTimeout(transitionTimeoutRef.current);
      cancelAnimationFrame(rafRef.current);
    },
    []
  );
  return {
    transitionDuration,
    transitionStatus,
    transitionTimingFunction: timingFunction || "ease"
  };
}


//# sourceMappingURL=use-transition.mjs.map

;// ./node_modules/@mantine/core/esm/components/Transition/Transition.mjs
'use client';




function Transition({
  keepMounted,
  transition = "fade",
  duration = 250,
  exitDuration = duration,
  mounted,
  children,
  timingFunction = "ease",
  onExit,
  onEntered,
  onEnter,
  onExited,
  enterDelay,
  exitDelay
}) {
  const { transitionDuration, transitionStatus, transitionTimingFunction } = useTransition({
    mounted,
    exitDuration,
    duration,
    timingFunction,
    onExit,
    onEntered,
    onEnter,
    onExited,
    enterDelay,
    exitDelay
  });
  if (transitionDuration === 0) {
    return mounted ? /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: children({}) }) : keepMounted ? children({ display: "none" }) : null;
  }
  return transitionStatus === "exited" ? keepMounted ? children({ display: "none" }) : null : /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: children(
    getTransitionStyles({
      transition,
      duration: transitionDuration,
      state: transitionStatus,
      timingFunction: transitionTimingFunction
    })
  ) });
}
Transition.displayName = "@mantine/core/Transition";


//# sourceMappingURL=Transition.mjs.map

;// ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs
'use client';
var UnstyledButton_module_css_classes = {"root":"m_87cf2631"};


//# sourceMappingURL=UnstyledButton.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
'use client';
















const UnstyledButton_defaultProps = {
  __staticSelector: "UnstyledButton"
};
const UnstyledButton = (0,polymorphic_factory/* polymorphicFactory */.v)(
  (_props, ref) => {
    const props = (0,use_props/* useProps */.Y)("UnstyledButton", UnstyledButton_defaultProps, _props);
    const {
      className,
      component = "button",
      __staticSelector,
      unstyled,
      classNames,
      styles,
      style,
      ...others
    } = props;
    const getStyles = (0,use_styles/* useStyles */.I)({
      name: __staticSelector,
      props,
      classes: UnstyledButton_module_css_classes,
      className,
      style,
      classNames,
      styles,
      unstyled
    });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        ...getStyles("root", { focusable: true }),
        component,
        ref,
        type: component === "button" ? "button" : void 0,
        ...others
      }
    );
  }
);
UnstyledButton.classes = UnstyledButton_module_css_classes;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";


//# sourceMappingURL=UnstyledButton.mjs.map

;// ./node_modules/@mantine/core/esm/components/Button/Button.module.css.mjs
'use client';
var Button_module_css_classes = {"root":"m_77c9d27d","inner":"m_80f1301b","label":"m_811560b9","section":"m_a74036a","loader":"m_a25b86ee","group":"m_80d6d844"};


//# sourceMappingURL=Button.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Button/ButtonGroup/ButtonGroup.mjs
'use client';


















const ButtonGroup_defaultProps = {
  orientation: "horizontal"
};
const ButtonGroup_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { borderWidth }) => ({
  group: { "--button-border-width": (0,rem/* rem */.D)(borderWidth) }
}));
const ButtonGroup = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ButtonGroup", ButtonGroup_defaultProps, _props);
  const {
    className,
    style,
    classNames,
    styles,
    unstyled,
    orientation,
    vars,
    borderWidth,
    variant,
    mod,
    ...others
  } = (0,use_props/* useProps */.Y)("ButtonGroup", ButtonGroup_defaultProps, _props);
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "ButtonGroup",
    props,
    classes: Button_module_css_classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: ButtonGroup_varsResolver,
    rootSelector: "group"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...getStyles("group"),
      ref,
      variant,
      mod: [{ "data-orientation": orientation }, mod],
      role: "group",
      ...others
    }
  );
});
ButtonGroup.classes = Button_module_css_classes;
ButtonGroup.displayName = "@mantine/core/ButtonGroup";


//# sourceMappingURL=ButtonGroup.mjs.map

;// ./node_modules/@mantine/core/esm/components/Button/Button.mjs
'use client';
























const loaderTransition = {
  in: { opacity: 1, transform: `translate(-50%, calc(-50% + ${(0,rem/* rem */.D)(1)}))` },
  out: { opacity: 0, transform: "translate(-50%, -200%)" },
  common: { transformOrigin: "center" },
  transitionProperty: "transform, opacity"
};
const Button_defaultProps = {};
const Button_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)(
  (theme, { radius, color, gradient, variant, size, justify, autoContrast }) => {
    const colors = theme.variantColorResolver({
      color: color || theme.primaryColor,
      theme,
      gradient,
      variant: variant || "filled",
      autoContrast
    });
    return {
      root: {
        "--button-justify": justify,
        "--button-height": (0,get_size/* getSize */.YC)(size, "button-height"),
        "--button-padding-x": (0,get_size/* getSize */.YC)(size, "button-padding-x"),
        "--button-fz": size?.includes("compact") ? (0,get_size/* getFontSize */.ny)(size.replace("compact-", "")) : (0,get_size/* getFontSize */.ny)(size),
        "--button-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
        "--button-bg": color || variant ? colors.background : void 0,
        "--button-hover": color || variant ? colors.hover : void 0,
        "--button-color": colors.color,
        "--button-bd": color || variant ? colors.border : void 0,
        "--button-hover-color": color || variant ? colors.hoverColor : void 0
      }
    };
  }
);
const Button = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Button", Button_defaultProps, _props);
  const {
    style,
    vars,
    className,
    color,
    disabled,
    children,
    leftSection,
    rightSection,
    fullWidth,
    variant,
    radius,
    loading,
    loaderProps,
    gradient,
    classNames,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    autoContrast,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Button",
    props,
    classes: Button_module_css_classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: Button_varsResolver
  });
  const hasLeftSection = !!leftSection;
  const hasRightSection = !!rightSection;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    UnstyledButton,
    {
      ref,
      ...getStyles("root", { active: !disabled && !loading && !dataDisabled }),
      unstyled,
      variant,
      disabled: disabled || loading,
      mod: [
        {
          disabled: disabled || dataDisabled,
          loading,
          block: fullWidth,
          "with-left-section": hasLeftSection,
          "with-right-section": hasRightSection
        },
        mod
      ],
      ...others,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Transition, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Loader,
          {
            color: "var(--button-color)",
            size: "calc(var(--button-height) / 1.8)",
            ...loaderProps
          }
        ) }) }),
        /* @__PURE__ */ (0,jsx_runtime.jsxs)("span", { ...getStyles("inner"), children: [
          leftSection && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", ...getStyles("section"), mod: { position: "left" }, children: leftSection }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", mod: { loading }, ...getStyles("label"), children }),
          rightSection && /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", ...getStyles("section"), mod: { position: "right" }, children: rightSection })
        ] })
      ]
    }
  );
});
Button.classes = Button_module_css_classes;
Button.displayName = "@mantine/core/Button";
Button.Group = ButtonGroup;


//# sourceMappingURL=Button.mjs.map


/***/ }),

/***/ 2659:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Container)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(6324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
;// ./node_modules/@mantine/core/esm/components/Container/Container.module.css.mjs
'use client';
var classes = {"root":"m_7485cace"};


//# sourceMappingURL=Container.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Container/Container.mjs
'use client';


















const defaultProps = {};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size, fluid }) => ({
  root: {
    "--container-size": fluid ? void 0 : (0,get_size/* getSize */.YC)(size, "container-size")
  }
}));
const Container = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Container", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, fluid, mod, ...others } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Container",
    classes: classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { ref, mod: [{ fluid }, mod], ...getStyles("root"), ...others });
});
Container.classes = classes;
Container.displayName = "@mantine/core/Container";


//# sourceMappingURL=Container.mjs.map


/***/ }),

/***/ 9019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Stack)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(6324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
;// ./node_modules/@mantine/core/esm/components/Stack/Stack.module.css.mjs
'use client';
var classes = {"root":"m_6d731127"};


//# sourceMappingURL=Stack.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Stack/Stack.mjs
'use client';


















const defaultProps = {
  gap: "md",
  align: "stretch",
  justify: "flex-start"
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { gap, align, justify }) => ({
  root: {
    "--stack-gap": (0,get_size/* getSpacing */.GY)(gap),
    "--stack-align": align,
    "--stack-justify": justify
  }
}));
const Stack = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Stack", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    align,
    justify,
    gap,
    variant,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Stack",
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { ref, ...getStyles("root"), variant, ...others });
});
Stack.classes = classes;
Stack.displayName = "@mantine/core/Stack";


//# sourceMappingURL=Stack.mjs.map


/***/ }),

/***/ 7826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(6324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
var get_theme_color = __webpack_require__(6344);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
var get_gradient = __webpack_require__(1752);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(8639);
;// ./node_modules/@mantine/core/esm/components/Text/Text.module.css.mjs
'use client';
var classes = {"root":"m_b6d8b162"};


//# sourceMappingURL=Text.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Text/Text.mjs
'use client';




















function getTextTruncate(truncate) {
  if (truncate === "start") {
    return "start";
  }
  if (truncate === "end" || truncate) {
    return "end";
  }
  return void 0;
}
const defaultProps = {
  inherit: false
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)(
  (theme, { variant, lineClamp, gradient, size, color }) => ({
    root: {
      "--text-fz": (0,get_size/* getFontSize */.ny)(size),
      "--text-lh": (0,get_size/* getLineHeight */.ks)(size),
      "--text-gradient": variant === "gradient" ? (0,get_gradient/* getGradient */.v)(gradient, theme) : void 0,
      "--text-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--text-color": color ? (0,get_theme_color/* getThemeColor */.r)(color, theme) : void 0
    }
  })
);
const Text = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Text", defaultProps, _props);
  const {
    lineClamp,
    truncate,
    inline,
    inherit,
    gradient,
    span,
    __staticSelector,
    vars,
    className,
    style,
    classNames,
    styles,
    unstyled,
    variant,
    mod,
    size,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: ["Text", __staticSelector],
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...getStyles("root", { focusable: true }),
      ref,
      component: span ? "span" : "p",
      variant,
      mod: [
        {
          "data-truncate": getTextTruncate(truncate),
          "data-line-clamp": typeof lineClamp === "number",
          "data-inline": inline,
          "data-inherit": inherit
        },
        mod
      ],
      size,
      ...others
    }
  );
});
Text.classes = classes;
Text.displayName = "@mantine/core/Text";


//# sourceMappingURL=Text.mjs.map


/***/ }),

/***/ 6334:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  k: () => (/* binding */ TextInput)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(8639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(6324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var extract_style_props = __webpack_require__(3733);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
;// ./node_modules/@mantine/core/esm/core/utils/create-optional-context/create-optional-context.mjs
'use client';



function createOptionalContext(initialValue = null) {
  const Context = (0,react.createContext)(initialValue);
  const useOptionalContext = () => (0,react.useContext)(Context);
  const Provider = ({ children, value }) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Context.Provider, { value, children });
  return [Provider, useOptionalContext];
}


//# sourceMappingURL=create-optional-context.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputWrapper.context.mjs
'use client';













const [InputWrapperProvider, useInputWrapperContext] = createOptionalContext({
  offsetBottom: false,
  offsetTop: false,
  describedBy: void 0,
  getStyles: null,
  inputId: void 0,
  labelId: void 0
});


//# sourceMappingURL=InputWrapper.context.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/Input.module.css.mjs
'use client';
var classes = {"wrapper":"m_6c018570","input":"m_8fb7ebe7","section":"m_82577fc2","placeholder":"m_88bacfd0","root":"m_46b77525","label":"m_8fdc1311","required":"m_78a94662","error":"m_8f816625","description":"m_fe47ce59"};


//# sourceMappingURL=Input.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputDescription/InputDescription.mjs
'use client';




















const defaultProps = {};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size }) => ({
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${(0,get_size/* getFontSize */.ny)(size)} - ${(0,rem/* rem */.D)(2)})`
  }
}));
const InputDescription = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("InputDescription", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = (0,use_props/* useProps */.Y)("InputDescription", defaultProps, props);
  const ctx = useInputWrapperContext();
  const _getStyles = (0,use_styles/* useStyles */.I)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "description",
    vars,
    varsResolver
  });
  const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles("description", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputDescription.classes = classes;
InputDescription.displayName = "@mantine/core/InputDescription";


//# sourceMappingURL=InputDescription.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputError/InputError.mjs
'use client';




















const InputError_defaultProps = {};
const InputError_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size }) => ({
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0,get_size/* getFontSize */.ny)(size)} - ${(0,rem/* rem */.D)(2)})`
  }
}));
const InputError = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("InputError", InputError_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    __staticSelector,
    __inheritStyles = true,
    variant,
    ...others
  } = props;
  const _getStyles = (0,use_styles/* useStyles */.I)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "error",
    vars,
    varsResolver: InputError_varsResolver
  });
  const ctx = useInputWrapperContext();
  const getStyles = __inheritStyles && ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      component: "p",
      ref,
      variant,
      size,
      ...getStyles("error", ctx?.getStyles ? { className, style } : void 0),
      ...others
    }
  );
});
InputError.classes = classes;
InputError.displayName = "@mantine/core/InputError";


//# sourceMappingURL=InputError.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputLabel/InputLabel.mjs
'use client';



















const InputLabel_defaultProps = {
  labelElement: "label"
};
const InputLabel_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size }) => ({
  label: {
    "--input-label-size": (0,get_size/* getFontSize */.ny)(size),
    "--input-asterisk-color": void 0
  }
}));
const InputLabel = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("InputLabel", InputLabel_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    labelElement,
    size,
    required,
    htmlFor,
    onMouseDown,
    children,
    __staticSelector,
    variant,
    mod,
    ...others
  } = (0,use_props/* useProps */.Y)("InputLabel", InputLabel_defaultProps, props);
  const _getStyles = (0,use_styles/* useStyles */.I)({
    name: ["InputWrapper", __staticSelector],
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "label",
    vars,
    varsResolver: InputLabel_varsResolver
  });
  const ctx = useInputWrapperContext();
  const getStyles = ctx?.getStyles || _getStyles;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Box/* Box */.a,
    {
      ...getStyles("label", ctx?.getStyles ? { className, style } : void 0),
      component: labelElement,
      variant,
      size,
      ref,
      htmlFor: labelElement === "label" ? htmlFor : void 0,
      mod: [{ required }, mod],
      onMouseDown: (event) => {
        onMouseDown?.(event);
        if (!event.defaultPrevented && event.detail > 1) {
          event.preventDefault();
        }
      },
      ...others,
      children: [
        children,
        required && /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { ...getStyles("required"), "aria-hidden": true, children: " *" })
      ]
    }
  );
});
InputLabel.classes = classes;
InputLabel.displayName = "@mantine/core/InputLabel";


//# sourceMappingURL=InputLabel.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputPlaceholder/InputPlaceholder.mjs
'use client';
















const InputPlaceholder_defaultProps = {};
const InputPlaceholder = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("InputPlaceholder", InputPlaceholder_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    __staticSelector,
    variant,
    error,
    mod,
    ...others
  } = (0,use_props/* useProps */.Y)("InputPlaceholder", InputPlaceholder_defaultProps, props);
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: ["InputPlaceholder", __staticSelector],
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    rootSelector: "placeholder"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...getStyles("placeholder"),
      mod: [{ error: !!error }, mod],
      component: "span",
      variant,
      ref,
      ...others
    }
  );
});
InputPlaceholder.classes = classes;
InputPlaceholder.displayName = "@mantine/core/InputPlaceholder";


//# sourceMappingURL=InputPlaceholder.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(5585);
;// ./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
'use client';
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}


//# sourceMappingURL=random-id.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-id/use-react-id.mjs
'use client';


const __useId = react["useId".toString()] || (() => void 0);
function useReactId() {
  const id = __useId();
  return id ? `mantine-${id.replace(/:/g, "")}` : "";
}


//# sourceMappingURL=use-react-id.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-id/use-id.mjs
'use client';





function useId(staticId) {
  const reactId = useReactId();
  const [uuid, setUuid] = (0,react.useState)(reactId);
  (0,use_isomorphic_effect/* useIsomorphicEffect */.o)(() => {
    setUuid(randomId());
  }, []);
  if (typeof staticId === "string") {
    return staticId;
  }
  if (typeof window === "undefined") {
    return reactId;
  }
  return uuid;
}


//# sourceMappingURL=use-id.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputWrapper/get-input-offsets/get-input-offsets.mjs
'use client';
function getInputOffsets(inputWrapperOrder, { hasDescription, hasError }) {
  const inputIndex = inputWrapperOrder.findIndex((part) => part === "input");
  const aboveInput = inputWrapperOrder.slice(0, inputIndex);
  const belowInput = inputWrapperOrder.slice(inputIndex + 1);
  const offsetTop = hasDescription && aboveInput.includes("description") || hasError && aboveInput.includes("error");
  const offsetBottom = hasDescription && belowInput.includes("description") || hasError && belowInput.includes("error");
  return { offsetBottom, offsetTop };
}


//# sourceMappingURL=get-input-offsets.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/InputWrapper/InputWrapper.mjs
'use client';
























const InputWrapper_defaultProps = {
  labelElement: "label",
  inputContainer: (children) => children,
  inputWrapperOrder: ["label", "description", "input", "error"]
};
const InputWrapper_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size }) => ({
  label: {
    "--input-label-size": (0,get_size/* getFontSize */.ny)(size),
    "--input-asterisk-color": void 0
  },
  error: {
    "--input-error-size": size === void 0 ? void 0 : `calc(${(0,get_size/* getFontSize */.ny)(size)} - ${(0,rem/* rem */.D)(2)})`
  },
  description: {
    "--input-description-size": size === void 0 ? void 0 : `calc(${(0,get_size/* getFontSize */.ny)(size)} - ${(0,rem/* rem */.D)(2)})`
  }
}));
const InputWrapper = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("InputWrapper", InputWrapper_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    size,
    variant,
    __staticSelector,
    inputContainer,
    inputWrapperOrder,
    label,
    error,
    description,
    labelProps,
    descriptionProps,
    errorProps,
    labelElement,
    children,
    withAsterisk,
    id,
    required,
    __stylesApiProps,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: ["InputWrapper", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: InputWrapper_varsResolver
  });
  const sharedProps = {
    size,
    variant,
    __staticSelector
  };
  const idBase = useId(id);
  const isRequired = typeof withAsterisk === "boolean" ? withAsterisk : required;
  const errorId = errorProps?.id || `${idBase}-error`;
  const descriptionId = descriptionProps?.id || `${idBase}-description`;
  const inputId = idBase;
  const hasError = !!error && typeof error !== "boolean";
  const hasDescription = !!description;
  const _describedBy = `${hasError ? errorId : ""} ${hasDescription ? descriptionId : ""}`;
  const describedBy = _describedBy.trim().length > 0 ? _describedBy.trim() : void 0;
  const labelId = labelProps?.id || `${idBase}-label`;
  const _label = label && /* @__PURE__ */ (0,jsx_runtime.jsx)(
    InputLabel,
    {
      labelElement,
      id: labelId,
      htmlFor: inputId,
      required: isRequired,
      ...sharedProps,
      ...labelProps,
      children: label
    },
    "label"
  );
  const _description = hasDescription && /* @__PURE__ */ (0,jsx_runtime.jsx)(
    InputDescription,
    {
      ...descriptionProps,
      ...sharedProps,
      size: descriptionProps?.size || sharedProps.size,
      id: descriptionProps?.id || descriptionId,
      children: description
    },
    "description"
  );
  const _input = /* @__PURE__ */ (0,jsx_runtime.jsx)(react.Fragment, { children: inputContainer(children) }, "input");
  const _error = hasError && /* @__PURE__ */ (0,react.createElement)(
    InputError,
    {
      ...errorProps,
      ...sharedProps,
      size: errorProps?.size || sharedProps.size,
      key: "error",
      id: errorProps?.id || errorId
    },
    error
  );
  const content = inputWrapperOrder.map((part) => {
    switch (part) {
      case "label":
        return _label;
      case "input":
        return _input;
      case "description":
        return _description;
      case "error":
        return _error;
      default:
        return null;
    }
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    InputWrapperProvider,
    {
      value: {
        getStyles,
        describedBy,
        inputId,
        labelId,
        ...getInputOffsets(inputWrapperOrder, { hasDescription, hasError })
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Box/* Box */.a,
        {
          ref,
          variant,
          size,
          mod: [{ error: !!error }, mod],
          ...getStyles("root"),
          ...others,
          children: content
        }
      )
    }
  );
});
InputWrapper.classes = classes;
InputWrapper.displayName = "@mantine/core/InputWrapper";


//# sourceMappingURL=InputWrapper.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/Input.mjs
'use client';


























const Input_defaultProps = {
  variant: "default",
  leftSectionPointerEvents: "none",
  rightSectionPointerEvents: "none",
  withAria: true,
  withErrorStyles: true
};
const Input_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, props, ctx) => ({
  wrapper: {
    "--input-margin-top": ctx.offsetTop ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-margin-bottom": ctx.offsetBottom ? "calc(var(--mantine-spacing-xs) / 2)" : void 0,
    "--input-height": (0,get_size/* getSize */.YC)(props.size, "input-height"),
    "--input-fz": (0,get_size/* getFontSize */.ny)(props.size),
    "--input-radius": props.radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(props.radius),
    "--input-left-section-width": props.leftSectionWidth !== void 0 ? (0,rem/* rem */.D)(props.leftSectionWidth) : void 0,
    "--input-right-section-width": props.rightSectionWidth !== void 0 ? (0,rem/* rem */.D)(props.rightSectionWidth) : void 0,
    "--input-padding-y": props.multiline ? (0,get_size/* getSize */.YC)(props.size, "input-padding-y") : void 0,
    "--input-left-section-pointer-events": props.leftSectionPointerEvents,
    "--input-right-section-pointer-events": props.rightSectionPointerEvents
  }
}));
const Input = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Input", Input_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    required,
    __staticSelector,
    __stylesApiProps,
    size,
    wrapperProps,
    error,
    disabled,
    leftSection,
    leftSectionProps,
    leftSectionWidth,
    rightSection,
    rightSectionProps,
    rightSectionWidth,
    rightSectionPointerEvents,
    leftSectionPointerEvents,
    variant,
    vars,
    pointer,
    multiline,
    radius,
    id,
    withAria,
    withErrorStyles,
    mod,
    inputSize,
    ...others
  } = props;
  const { styleProps, rest } = (0,extract_style_props/* extractStyleProps */.j)(others);
  const ctx = useInputWrapperContext();
  const stylesCtx = { offsetBottom: ctx?.offsetBottom, offsetTop: ctx?.offsetTop };
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: ["Input", __staticSelector],
    props: __stylesApiProps || props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    stylesCtx,
    rootSelector: "wrapper",
    vars,
    varsResolver: Input_varsResolver
  });
  const ariaAttributes = withAria ? {
    required,
    disabled,
    "aria-invalid": !!error,
    "aria-describedby": ctx?.describedBy,
    id: ctx?.inputId || id
  } : {};
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Box/* Box */.a,
    {
      ...getStyles("wrapper"),
      ...styleProps,
      ...wrapperProps,
      mod: [
        {
          error: !!error && withErrorStyles,
          pointer,
          disabled,
          multiline,
          "data-with-right-section": !!rightSection,
          "data-with-left-section": !!leftSection
        },
        mod
      ],
      variant,
      size,
      children: [
        leftSection && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "div",
          {
            ...leftSectionProps,
            "data-position": "left",
            ...getStyles("section", {
              className: leftSectionProps?.className,
              style: leftSectionProps?.style
            }),
            children: leftSection
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Box/* Box */.a,
          {
            component: "input",
            ...rest,
            ...ariaAttributes,
            ref,
            required,
            mod: { disabled, error: !!error && withErrorStyles },
            variant,
            __size: inputSize,
            ...getStyles("input")
          }
        ),
        rightSection && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "div",
          {
            ...rightSectionProps,
            "data-position": "right",
            ...getStyles("section", {
              className: rightSectionProps?.className,
              style: rightSectionProps?.style
            }),
            children: rightSection
          }
        )
      ]
    }
  );
});
Input.classes = classes;
Input.Wrapper = InputWrapper;
Input.Label = InputLabel;
Input.Error = InputError;
Input.Description = InputDescription;
Input.Placeholder = InputPlaceholder;
Input.displayName = "@mantine/core/Input";


//# sourceMappingURL=Input.mjs.map

;// ./node_modules/@mantine/core/esm/components/Input/use-input-props.mjs
'use client';














function useInputProps(component, defaultProps, _props) {
  const props = (0,use_props/* useProps */.Y)(component, defaultProps, _props);
  const {
    label,
    description,
    error,
    required,
    classNames,
    styles,
    className,
    unstyled,
    __staticSelector,
    __stylesApiProps,
    errorProps,
    labelProps,
    descriptionProps,
    wrapperProps: _wrapperProps,
    id,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    vars,
    mod,
    ...others
  } = props;
  const { styleProps, rest } = (0,extract_style_props/* extractStyleProps */.j)(others);
  const wrapperProps = {
    label,
    description,
    error,
    required,
    classNames,
    className,
    __staticSelector,
    __stylesApiProps: __stylesApiProps || props,
    errorProps,
    labelProps,
    descriptionProps,
    unstyled,
    styles,
    size,
    style,
    inputContainer,
    inputWrapperOrder,
    withAsterisk,
    variant,
    id,
    mod,
    ..._wrapperProps
  };
  return {
    ...rest,
    classNames,
    styles,
    unstyled,
    wrapperProps: { ...wrapperProps, ...styleProps },
    inputProps: {
      required,
      classNames,
      styles,
      unstyled,
      size,
      __staticSelector,
      __stylesApiProps: __stylesApiProps || props,
      error,
      variant,
      id
    }
  };
}


//# sourceMappingURL=use-input-props.mjs.map

;// ./node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs
'use client';





















const InputBase_defaultProps = {
  __staticSelector: "InputBase",
  withAria: true
};
const InputBase = (0,polymorphic_factory/* polymorphicFactory */.v)((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", InputBase_defaultProps, props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Input.Wrapper, { ...wrapperProps, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Input, { ...inputProps, ...others, ref }) });
});
InputBase.classes = { ...Input.classes, ...Input.Wrapper.classes };
InputBase.displayName = "@mantine/core/InputBase";


//# sourceMappingURL=InputBase.mjs.map

;// ./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs
'use client';















const TextInput_defaultProps = {};
const TextInput = (0,factory/* factory */.P9)((props, ref) => {
  const _props = (0,use_props/* useProps */.Y)("TextInput", TextInput_defaultProps, props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(InputBase, { component: "input", ref, ..._props, __staticSelector: "TextInput" });
});
TextInput.classes = InputBase.classes;
TextInput.displayName = "@mantine/core/TextInput";


//# sourceMappingURL=TextInput.mjs.map


/***/ }),

/***/ 9652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(9396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(6100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 17 modules
var use_styles = __webpack_require__(9205);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(3144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
;// ./node_modules/@mantine/core/esm/components/Title/get-title-size.mjs
'use client';













const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
const sizes = ["xs", "sm", "md", "lg", "xl"];
function getTitleSize(order, size) {
  const titleSize = size !== void 0 ? size : `h${order}`;
  if (headings.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-${titleSize}-font-size)`,
      fontWeight: `var(--mantine-${titleSize}-font-weight)`,
      lineHeight: `var(--mantine-${titleSize}-line-height)`
    };
  } else if (sizes.includes(titleSize)) {
    return {
      fontSize: `var(--mantine-font-size-${titleSize})`,
      fontWeight: `var(--mantine-h${order}-font-weight)`,
      lineHeight: `var(--mantine-h${order}-line-height)`
    };
  }
  return {
    fontSize: (0,rem/* rem */.D)(titleSize),
    fontWeight: `var(--mantine-h${order}-font-weight)`,
    lineHeight: `var(--mantine-h${order}-line-height)`
  };
}


//# sourceMappingURL=get-title-size.mjs.map

;// ./node_modules/@mantine/core/esm/components/Title/Title.module.css.mjs
'use client';
var classes = {"root":"m_8a5d1357"};


//# sourceMappingURL=Title.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Title/Title.mjs
'use client';


















const defaultProps = {
  order: 1
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { order, size, lineClamp, textWrap }) => {
  const sizeVariables = getTitleSize(order, size);
  return {
    root: {
      "--title-fw": sizeVariables.fontWeight,
      "--title-lh": sizeVariables.lineHeight,
      "--title-fz": sizeVariables.fontSize,
      "--title-line-clamp": typeof lineClamp === "number" ? lineClamp.toString() : void 0,
      "--title-text-wrap": textWrap
    }
  };
});
const Title = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Title", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    order,
    vars,
    size,
    variant,
    lineClamp,
    textWrap,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Title",
    props,
    classes: classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  if (![1, 2, 3, 4, 5, 6].includes(order)) {
    return null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...getStyles("root"),
      component: `h${order}`,
      variant,
      ref,
      mod: [{ order, "data-line-clamp": typeof lineClamp === "number" }, mod],
      size,
      ...others
    }
  );
});
Title.classes = classes;
Title.displayName = "@mantine/core/Title";


//# sourceMappingURL=Title.mjs.map


/***/ }),

/***/ 3144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Box)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
;// ./node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}


//# sourceMappingURL=create-polymorphic-component.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var Mantine_context = __webpack_require__(6192);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
var keys = __webpack_require__(3052);
;// ./node_modules/@mantine/core/esm/core/utils/camel-to-kebab-case/camel-to-kebab-case.mjs
'use client';
function camelToKebabCase(value) {
  return value.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}


//# sourceMappingURL=camel-to-kebab-case.mjs.map

;// ./node_modules/@mantine/core/esm/core/InlineStyles/css-object-to-string/css-object-to-string.mjs
'use client';






function cssObjectToString(css) {
  return (0,keys/* keys */.H)(css).reduce(
    (acc, rule) => css[rule] !== void 0 ? `${acc}${camelToKebabCase(rule)}:${css[rule]};` : acc,
    ""
  ).trim();
}


//# sourceMappingURL=css-object-to-string.mjs.map

;// ./node_modules/@mantine/core/esm/core/InlineStyles/styles-to-string/styles-to-string.mjs
'use client';


function stylesToString({ selector, styles, media, container }) {
  const baseStyles = styles ? cssObjectToString(styles) : "";
  const mediaQueryStyles = !Array.isArray(media) ? [] : media.map((item) => `@media${item.query}{${selector}{${cssObjectToString(item.styles)}}}`);
  const containerStyles = !Array.isArray(container) ? [] : container.map(
    (item) => `@container ${item.query}{${selector}{${cssObjectToString(item.styles)}}}`
  );
  return `${baseStyles ? `${selector}{${baseStyles}}` : ""}${mediaQueryStyles.join("")}${containerStyles.join("")}`.trim();
}


//# sourceMappingURL=styles-to-string.mjs.map

;// ./node_modules/@mantine/core/esm/core/InlineStyles/InlineStyles.mjs
'use client';










function InlineStyles(props) {
  const nonce = (0,Mantine_context/* useMantineStyleNonce */.WV)();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "style",
    {
      "data-mantine-styles": "inline",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: stylesToString(props) }
    }
  );
}


//# sourceMappingURL=InlineStyles.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/is-number-like/is-number-like.mjs
var is_number_like = __webpack_require__(2940);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
;// ./node_modules/@mantine/core/esm/core/Box/get-box-mod/get-box-mod.mjs
'use client';
function transformModKey(key) {
  return key.startsWith("data-") ? key : `data-${key}`;
}
function getMod(props) {
  return Object.keys(props).reduce((acc, key) => {
    const value = props[key];
    if (value === void 0 || value === "" || value === false || value === null) {
      return acc;
    }
    acc[transformModKey(key)] = props[key];
    return acc;
  }, {});
}
function getBoxMod(mod) {
  if (!mod) {
    return null;
  }
  if (typeof mod === "string") {
    return { [transformModKey(mod)]: true };
  }
  if (Array.isArray(mod)) {
    return [...mod].reduce(
      (acc, value) => ({ ...acc, ...getBoxMod(value) }),
      {}
    );
  }
  return getMod(mod);
}


//# sourceMappingURL=get-box-mod.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/get-box-style/get-box-style.mjs
'use client';
function mergeStyles(styles, theme) {
  if (Array.isArray(styles)) {
    return [...styles].reduce(
      (acc, item) => ({ ...acc, ...mergeStyles(item, theme) }),
      {}
    );
  }
  if (typeof styles === "function") {
    return styles(theme);
  }
  if (styles == null) {
    return {};
  }
  return styles;
}
function getBoxStyle({
  theme,
  style,
  vars,
  styleProps
}) {
  const _style = mergeStyles(style, theme);
  const _vars = mergeStyles(vars, theme);
  return { ..._style, ..._vars, ...styleProps };
}


//# sourceMappingURL=get-box-style.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var extract_style_props = __webpack_require__(3733);
;// ./node_modules/@mantine/core/esm/core/Box/style-props/style-props-data.mjs
'use client';
const STYlE_PROPS_DATA = {
  m: { type: "spacing", property: "margin" },
  mt: { type: "spacing", property: "marginTop" },
  mb: { type: "spacing", property: "marginBottom" },
  ml: { type: "spacing", property: "marginLeft" },
  mr: { type: "spacing", property: "marginRight" },
  ms: { type: "spacing", property: "marginInlineStart" },
  me: { type: "spacing", property: "marginInlineEnd" },
  mx: { type: "spacing", property: "marginInline" },
  my: { type: "spacing", property: "marginBlock" },
  p: { type: "spacing", property: "padding" },
  pt: { type: "spacing", property: "paddingTop" },
  pb: { type: "spacing", property: "paddingBottom" },
  pl: { type: "spacing", property: "paddingLeft" },
  pr: { type: "spacing", property: "paddingRight" },
  ps: { type: "spacing", property: "paddingInlineStart" },
  pe: { type: "spacing", property: "paddingInlineEnd" },
  px: { type: "spacing", property: "paddingInline" },
  py: { type: "spacing", property: "paddingBlock" },
  bd: { type: "border", property: "border" },
  bg: { type: "color", property: "background" },
  c: { type: "textColor", property: "color" },
  opacity: { type: "identity", property: "opacity" },
  ff: { type: "fontFamily", property: "fontFamily" },
  fz: { type: "fontSize", property: "fontSize" },
  fw: { type: "identity", property: "fontWeight" },
  lts: { type: "size", property: "letterSpacing" },
  ta: { type: "identity", property: "textAlign" },
  lh: { type: "lineHeight", property: "lineHeight" },
  fs: { type: "identity", property: "fontStyle" },
  tt: { type: "identity", property: "textTransform" },
  td: { type: "identity", property: "textDecoration" },
  w: { type: "spacing", property: "width" },
  miw: { type: "spacing", property: "minWidth" },
  maw: { type: "spacing", property: "maxWidth" },
  h: { type: "spacing", property: "height" },
  mih: { type: "spacing", property: "minHeight" },
  mah: { type: "spacing", property: "maxHeight" },
  bgsz: { type: "size", property: "backgroundSize" },
  bgp: { type: "identity", property: "backgroundPosition" },
  bgr: { type: "identity", property: "backgroundRepeat" },
  bga: { type: "identity", property: "backgroundAttachment" },
  pos: { type: "identity", property: "position" },
  top: { type: "identity", property: "top" },
  left: { type: "size", property: "left" },
  bottom: { type: "size", property: "bottom" },
  right: { type: "size", property: "right" },
  inset: { type: "size", property: "inset" },
  display: { type: "identity", property: "display" },
  flex: { type: "identity", property: "flex" }
};


//# sourceMappingURL=style-props-data.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(9569);
;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/color-resolver/color-resolver.mjs
'use client';










function colorResolver(color, theme) {
  const parsedColor = (0,parse_theme_color/* parseThemeColor */.g)({ color, theme });
  if (parsedColor.color === "dimmed") {
    return "var(--mantine-color-dimmed)";
  }
  if (parsedColor.color === "bright") {
    return "var(--mantine-color-bright)";
  }
  return parsedColor.variable ? `var(${parsedColor.variable})` : parsedColor.color;
}
function textColorResolver(color, theme) {
  const parsedColor = (0,parse_theme_color/* parseThemeColor */.g)({ color, theme });
  if (parsedColor.isThemeColor && parsedColor.shade === void 0) {
    return `var(--mantine-color-${parsedColor.color}-text)`;
  }
  return colorResolver(color, theme);
}


//# sourceMappingURL=color-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/border-resolver/border-resolver.mjs
'use client';






function borderResolver(value, theme) {
  if (typeof value === "number") {
    return (0,rem/* rem */.D)(value);
  }
  if (typeof value === "string") {
    const [size, style, ...colorTuple] = value.split(" ").filter((val) => val.trim() !== "");
    let result = `${(0,rem/* rem */.D)(size)}`;
    style && (result += ` ${style}`);
    colorTuple.length > 0 && (result += ` ${colorResolver(colorTuple.join(" "), theme)}`);
    return result.trim();
  }
  return value;
}


//# sourceMappingURL=border-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-family-resolver/font-family-resolver.mjs
'use client';
const values = {
  text: "var(--mantine-font-family)",
  mono: "var(--mantine-font-family-monospace)",
  monospace: "var(--mantine-font-family-monospace)",
  heading: "var(--mantine-font-family-headings)",
  headings: "var(--mantine-font-family-headings)"
};
function fontFamilyResolver(fontFamily) {
  if (typeof fontFamily === "string" && fontFamily in values) {
    return values[fontFamily];
  }
  return fontFamily;
}


//# sourceMappingURL=font-family-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/font-size-resolver/font-size-resolver.mjs
'use client';





const headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function fontSizeResolver(value, theme) {
  if (typeof value === "string" && value in theme.fontSizes) {
    return `var(--mantine-font-size-${value})`;
  }
  if (typeof value === "string" && headings.includes(value)) {
    return `var(--mantine-${value}-font-size)`;
  }
  if (typeof value === "number") {
    return (0,rem/* rem */.D)(value);
  }
  if (typeof value === "string") {
    return (0,rem/* rem */.D)(value);
  }
  return value;
}


//# sourceMappingURL=font-size-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/identity-resolver/identity-resolver.mjs
'use client';
function identityResolver(value) {
  return value;
}


//# sourceMappingURL=identity-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/line-height-resolver/line-height-resolver.mjs
'use client';
const line_height_resolver_headings = ["h1", "h2", "h3", "h4", "h5", "h6"];
function lineHeightResolver(value, theme) {
  if (typeof value === "string" && value in theme.lineHeights) {
    return `var(--mantine-line-height-${value})`;
  }
  if (typeof value === "string" && line_height_resolver_headings.includes(value)) {
    return `var(--mantine-${value}-line-height)`;
  }
  return value;
}


//# sourceMappingURL=line-height-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/size-resolver/size-resolver.mjs
'use client';





function sizeResolver(value) {
  if (typeof value === "number") {
    return (0,rem/* rem */.D)(value);
  }
  return value;
}


//# sourceMappingURL=size-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/spacing-resolver/spacing-resolver.mjs
'use client';





function spacingResolver(value, theme) {
  if (typeof value === "number") {
    return (0,rem/* rem */.D)(value);
  }
  if (typeof value === "string") {
    const mod = value.replace("-", "");
    if (!(mod in theme.spacing)) {
      return (0,rem/* rem */.D)(value);
    }
    const variable = `--mantine-spacing-${mod}`;
    return value.startsWith("-") ? `calc(var(${variable}) * -1)` : `var(${variable})`;
  }
  return value;
}


//# sourceMappingURL=spacing-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/resolvers/index.mjs
'use client';









const resolvers = {
  color: colorResolver,
  textColor: textColorResolver,
  fontSize: fontSizeResolver,
  spacing: spacingResolver,
  identity: identityResolver,
  size: sizeResolver,
  lineHeight: lineHeightResolver,
  fontFamily: fontFamilyResolver,
  border: borderResolver
};


//# sourceMappingURL=index.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/sort-media-queries.mjs
'use client';
function replaceMediaQuery(query) {
  return query.replace("(min-width: ", "").replace("em)", "");
}
function sortMediaQueries({
  media,
  ...props
}) {
  const breakpoints = Object.keys(media);
  const sortedMedia = breakpoints.sort((a, b) => Number(replaceMediaQuery(a)) - Number(replaceMediaQuery(b))).map((query) => ({ query, styles: media[query] }));
  return { ...props, media: sortedMedia };
}


//# sourceMappingURL=sort-media-queries.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/style-props/parse-style-props/parse-style-props.mjs
'use client';







function hasResponsiveStyles(styleProp) {
  if (typeof styleProp !== "object" || styleProp === null) {
    return false;
  }
  const breakpoints = Object.keys(styleProp);
  if (breakpoints.length === 1 && breakpoints[0] === "base") {
    return false;
  }
  return true;
}
function getBaseValue(value) {
  if (typeof value === "object" && value !== null) {
    if ("base" in value) {
      return value.base;
    }
    return void 0;
  }
  return value;
}
function getBreakpointKeys(value) {
  if (typeof value === "object" && value !== null) {
    return (0,keys/* keys */.H)(value).filter((key) => key !== "base");
  }
  return [];
}
function getBreakpointValue(value, breakpoint) {
  if (typeof value === "object" && value !== null && breakpoint in value) {
    return value[breakpoint];
  }
  return value;
}
function parseStyleProps({
  styleProps,
  data,
  theme
}) {
  return sortMediaQueries(
    (0,keys/* keys */.H)(styleProps).reduce(
      (acc, styleProp) => {
        if (styleProp === "hiddenFrom" || styleProp === "visibleFrom" || styleProp === "sx") {
          return acc;
        }
        const propertyData = data[styleProp];
        const properties = Array.isArray(propertyData.property) ? propertyData.property : [propertyData.property];
        const baseValue = getBaseValue(styleProps[styleProp]);
        if (!hasResponsiveStyles(styleProps[styleProp])) {
          properties.forEach((property) => {
            acc.inlineStyles[property] = resolvers[propertyData.type](baseValue, theme);
          });
          return acc;
        }
        acc.hasResponsiveStyles = true;
        const breakpoints = getBreakpointKeys(styleProps[styleProp]);
        properties.forEach((property) => {
          if (baseValue) {
            acc.styles[property] = resolvers[propertyData.type](baseValue, theme);
          }
          breakpoints.forEach((breakpoint) => {
            const bp = `(min-width: ${theme.breakpoints[breakpoint]})`;
            acc.media[bp] = {
              ...acc.media[bp],
              [property]: resolvers[propertyData.type](
                getBreakpointValue(styleProps[styleProp], breakpoint),
                theme
              )
            };
          });
        });
        return acc;
      },
      {
        hasResponsiveStyles: false,
        styles: {},
        inlineStyles: {},
        media: {}
      }
    )
  );
}


//# sourceMappingURL=parse-style-props.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/use-random-classname/use-random-classname.mjs
'use client';


function useRandomClassName() {
  const id = (0,react.useId)().replace(/:/g, "");
  return `__m__-${id}`;
}


//# sourceMappingURL=use-random-classname.mjs.map

;// ./node_modules/@mantine/core/esm/core/Box/Box.mjs
'use client';



















const _Box = (0,react.forwardRef)(
  ({
    component,
    style,
    __vars,
    className,
    variant,
    mod,
    size,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    renderRoot,
    __size,
    ...others
  }, ref) => {
    const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
    const Element = component || "div";
    const { styleProps, rest } = (0,extract_style_props/* extractStyleProps */.j)(others);
    const useSxTransform = (0,Mantine_context/* useMantineSxTransform */.NL)();
    const transformedSx = useSxTransform?.()?.(styleProps.sx);
    const responsiveClassName = useRandomClassName();
    const parsedStyleProps = parseStyleProps({
      styleProps,
      theme,
      data: STYlE_PROPS_DATA
    });
    const props = {
      ref,
      style: getBoxStyle({
        theme,
        style,
        vars: __vars,
        styleProps: parsedStyleProps.inlineStyles
      }),
      className: (0,clsx/* default */.A)(className, transformedSx, {
        [responsiveClassName]: parsedStyleProps.hasResponsiveStyles,
        "mantine-light-hidden": lightHidden,
        "mantine-dark-hidden": darkHidden,
        [`mantine-hidden-from-${hiddenFrom}`]: hiddenFrom,
        [`mantine-visible-from-${visibleFrom}`]: visibleFrom
      }),
      "data-variant": variant,
      "data-size": (0,is_number_like/* isNumberLike */.t)(size) ? void 0 : size || void 0,
      size: __size,
      ...getBoxMod(mod),
      ...rest
    };
    return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      parsedStyleProps.hasResponsiveStyles && /* @__PURE__ */ (0,jsx_runtime.jsx)(
        InlineStyles,
        {
          selector: `.${responsiveClassName}`,
          styles: parsedStyleProps.styles,
          media: parsedStyleProps.media
        }
      ),
      typeof renderRoot === "function" ? renderRoot(props) : /* @__PURE__ */ (0,jsx_runtime.jsx)(Element, { ...props })
    ] });
  }
);
_Box.displayName = "@mantine/core/Box";
const Box = createPolymorphicComponent(_Box);


//# sourceMappingURL=Box.mjs.map


/***/ }),

/***/ 3733:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ extractStyleProps)
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
'use client';





function extractStyleProps(others) {
  const {
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx,
    ...rest
  } = others;
  const styleProps = (0,_utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_2__/* .filterProps */ .J)({
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    me,
    ms,
    p,
    px,
    py,
    pt,
    pb,
    pl,
    pr,
    pe,
    ps,
    bd,
    bg,
    c,
    opacity,
    ff,
    fz,
    fw,
    lts,
    ta,
    lh,
    fs,
    tt,
    td,
    w,
    miw,
    maw,
    h,
    mih,
    mah,
    bgsz,
    bgp,
    bgr,
    bga,
    pos,
    top,
    left,
    bottom,
    right,
    inset,
    display,
    flex,
    hiddenFrom,
    visibleFrom,
    lightHidden,
    darkHidden,
    sx
  });
  return { styleProps, rest };
}


//# sourceMappingURL=extract-style-props.mjs.map


/***/ }),

/***/ 6192:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A$: () => (/* binding */ MantineContext),
/* harmony export */   AI: () => (/* binding */ useMantineClassNamesPrefix),
/* harmony export */   FI: () => (/* binding */ useMantineIsHeadless),
/* harmony export */   If: () => (/* binding */ useMantineWithStaticClasses),
/* harmony export */   NL: () => (/* binding */ useMantineSxTransform),
/* harmony export */   OY: () => (/* binding */ useMantineCssVariablesResolver),
/* harmony export */   WV: () => (/* binding */ useMantineStyleNonce),
/* harmony export */   m6: () => (/* binding */ useMantineStylesTransform)
/* harmony export */ });
/* unused harmony export useMantineContext */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';


const MantineContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);
function useMantineContext() {
  const ctx = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(MantineContext);
  if (!ctx) {
    throw new Error("[@mantine/core] MantineProvider was not found in tree");
  }
  return ctx;
}
function useMantineCssVariablesResolver() {
  return useMantineContext().cssVariablesResolver;
}
function useMantineClassNamesPrefix() {
  return useMantineContext().classNamesPrefix;
}
function useMantineStyleNonce() {
  return useMantineContext().getStyleNonce;
}
function useMantineWithStaticClasses() {
  return useMantineContext().withStaticClasses;
}
function useMantineIsHeadless() {
  return useMantineContext().headless;
}
function useMantineSxTransform() {
  return useMantineContext().stylesTransform?.sx;
}
function useMantineStylesTransform() {
  return useMantineContext().stylesTransform?.styles;
}


//# sourceMappingURL=Mantine.context.mjs.map


/***/ }),

/***/ 1774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  y: () => (/* binding */ MantineProvider)
});

// UNUSED EXPORTS: HeadlessMantineProvider

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/is-mantine-color-scheme.mjs
'use client';
function isMantineColorScheme(value) {
  return value === "auto" || value === "dark" || value === "light";
}


//# sourceMappingURL=is-mantine-color-scheme.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-scheme-managers/local-storage-manager.mjs
'use client';


function localStorageColorSchemeManager({
  key = "mantine-color-scheme-value"
} = {}) {
  let handleStorageEvent;
  return {
    get: (defaultValue) => {
      if (typeof window === "undefined") {
        return defaultValue;
      }
      try {
        const storedColorScheme = window.localStorage.getItem(key);
        return isMantineColorScheme(storedColorScheme) ? storedColorScheme : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    set: (value) => {
      try {
        window.localStorage.setItem(key, value);
      } catch (error) {
        console.warn(
          "[@mantine/core] Local storage color scheme manager was unable to save color scheme.",
          error
        );
      }
    },
    subscribe: (onUpdate) => {
      handleStorageEvent = (event) => {
        if (event.storageArea === window.localStorage && event.key === key) {
          isMantineColorScheme(event.newValue) && onUpdate(event.newValue);
        }
      };
      window.addEventListener("storage", handleStorageEvent);
    },
    unsubscribe: () => {
      window.removeEventListener("storage", handleStorageEvent);
    },
    clear: () => {
      window.localStorage.removeItem(key);
    }
  };
}


//# sourceMappingURL=local-storage-manager.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var Mantine_context = __webpack_require__(6192);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/keys/keys.mjs
var keys = __webpack_require__(3052);
;// ./node_modules/@mantine/core/esm/core/utils/units-converters/px.mjs
function getTransformedScaledValue(value) {
  if (typeof value !== "string" || !value.includes("var(--mantine-scale)")) {
    return value;
  }
  return value.match(/^calc\((.*?)\)$/)?.[1].split("*")[0].trim();
}
function px(value) {
  const transformedValue = getTransformedScaledValue(value);
  if (typeof transformedValue === "number") {
    return transformedValue;
  }
  if (typeof transformedValue === "string") {
    if (transformedValue.includes("calc") || transformedValue.includes("var")) {
      return transformedValue;
    }
    if (transformedValue.includes("px")) {
      return Number(transformedValue.replace("px", ""));
    }
    if (transformedValue.includes("rem")) {
      return Number(transformedValue.replace("rem", "")) * 16;
    }
    if (transformedValue.includes("em")) {
      return Number(transformedValue.replace("em", "")) * 16;
    }
    return Number(transformedValue);
  }
  return NaN;
}


//# sourceMappingURL=px.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineClasses/MantineClasses.mjs
'use client';









function MantineClasses() {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  const nonce = (0,Mantine_context/* useMantineStyleNonce */.WV)();
  const classes = (0,keys/* keys */.H)(theme.breakpoints).reduce((acc, breakpoint) => {
    const isPxBreakpoint = theme.breakpoints[breakpoint].includes("px");
    const pxValue = px(theme.breakpoints[breakpoint]);
    const maxWidthBreakpoint = isPxBreakpoint ? `${pxValue - 0.1}px` : (0,rem.em)(pxValue - 0.1);
    const minWidthBreakpoint = isPxBreakpoint ? `${pxValue}px` : (0,rem.em)(pxValue);
    return `${acc}@media (max-width: ${maxWidthBreakpoint}) {.mantine-visible-from-${breakpoint} {display: none !important;}}@media (min-width: ${minWidthBreakpoint}) {.mantine-hidden-from-${breakpoint} {display: none !important;}}`;
  }, "");
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "style",
    {
      "data-mantine-styles": "classes",
      nonce: nonce?.(),
      dangerouslySetInnerHTML: { __html: classes }
    }
  );
}


//# sourceMappingURL=MantineClasses.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/css-variables-object-to-string.mjs
'use client';
function cssVariablesObjectToString(variables) {
  return Object.entries(variables).map(([name, value]) => `${name}: ${value};`).join("");
}


//# sourceMappingURL=css-variables-object-to-string.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/wrap-with-selector.mjs
'use client';
function wrapWithSelector(selectors, code) {
  const _selectors = Array.isArray(selectors) ? selectors : [selectors];
  return _selectors.reduce((acc, selector) => `${selector}{${acc}}`, code);
}


//# sourceMappingURL=wrap-with-selector.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/convert-css-variables/convert-css-variables.mjs
'use client';



function convertCssVariables(input, selector) {
  const sharedVariables = cssVariablesObjectToString(input.variables);
  const shared = sharedVariables ? wrapWithSelector(selector, sharedVariables) : "";
  const dark = cssVariablesObjectToString(input.dark);
  const light = cssVariablesObjectToString(input.light);
  const darkForced = dark ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="dark"])`, dark) : wrapWithSelector(`${selector}[data-mantine-color-scheme="dark"]`, dark) : "";
  const lightForced = light ? selector === ":host" ? wrapWithSelector(`${selector}([data-mantine-color-scheme="light"])`, light) : wrapWithSelector(`${selector}[data-mantine-color-scheme="light"]`, light) : "";
  return `${shared}${darkForced}${lightForced}`;
}


//# sourceMappingURL=convert-css-variables.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
var deep_merge = __webpack_require__(1518);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
var get_primary_shade = __webpack_require__(684);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(9569);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-contrast-color/get-contrast-color.mjs
'use client';



function getContrastColor({ color, theme, autoContrast }) {
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (!_autoContrast) {
    return "var(--mantine-color-white)";
  }
  const parsed = (0,parse_theme_color/* parseThemeColor */.g)({ color: color || theme.primaryColor, theme });
  return parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)";
}
function getPrimaryContrastColor(theme, colorScheme) {
  return getContrastColor({
    color: theme.colors[theme.primaryColor][(0,get_primary_shade/* getPrimaryShade */.g)(theme, colorScheme)],
    theme,
    autoContrast: null
  });
}


//# sourceMappingURL=get-contrast-color.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
var rgba = __webpack_require__(7170);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-css-color-variables.mjs
'use client';






function getCSSColorVariables({
  theme,
  color,
  colorScheme,
  name = color,
  withColorValues = true
}) {
  if (!theme.colors[color]) {
    return {};
  }
  if (colorScheme === "light") {
    const primaryShade2 = (0,get_primary_shade/* getPrimaryShade */.g)(theme, "light");
    const dynamicVariables2 = {
      [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-filled)`,
      [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade2 === 9 ? 8 : primaryShade2 + 1})`,
      [`--mantine-color-${name}-light`]: (0,rgba/* alpha */.X)(theme.colors[color][primaryShade2], 0.1),
      [`--mantine-color-${name}-light-hover`]: (0,rgba/* alpha */.X)(theme.colors[color][primaryShade2], 0.12),
      [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${primaryShade2})`,
      [`--mantine-color-${name}-outline-hover`]: (0,rgba/* alpha */.X)(theme.colors[color][primaryShade2], 0.05)
    };
    if (!withColorValues) {
      return dynamicVariables2;
    }
    return {
      [`--mantine-color-${name}-0`]: theme.colors[color][0],
      [`--mantine-color-${name}-1`]: theme.colors[color][1],
      [`--mantine-color-${name}-2`]: theme.colors[color][2],
      [`--mantine-color-${name}-3`]: theme.colors[color][3],
      [`--mantine-color-${name}-4`]: theme.colors[color][4],
      [`--mantine-color-${name}-5`]: theme.colors[color][5],
      [`--mantine-color-${name}-6`]: theme.colors[color][6],
      [`--mantine-color-${name}-7`]: theme.colors[color][7],
      [`--mantine-color-${name}-8`]: theme.colors[color][8],
      [`--mantine-color-${name}-9`]: theme.colors[color][9],
      ...dynamicVariables2
    };
  }
  const primaryShade = (0,get_primary_shade/* getPrimaryShade */.g)(theme, "dark");
  const dynamicVariables = {
    [`--mantine-color-${name}-text`]: `var(--mantine-color-${name}-4)`,
    [`--mantine-color-${name}-filled`]: `var(--mantine-color-${name}-${primaryShade})`,
    [`--mantine-color-${name}-filled-hover`]: `var(--mantine-color-${name}-${primaryShade === 9 ? 8 : primaryShade + 1})`,
    [`--mantine-color-${name}-light`]: (0,rgba/* alpha */.X)(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.15
    ),
    [`--mantine-color-${name}-light-hover`]: (0,rgba/* alpha */.X)(
      theme.colors[color][Math.max(0, primaryShade - 2)],
      0.2
    ),
    [`--mantine-color-${name}-light-color`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 5, 0)})`,
    [`--mantine-color-${name}-outline`]: `var(--mantine-color-${name}-${Math.max(primaryShade - 4, 0)})`,
    [`--mantine-color-${name}-outline-hover`]: (0,rgba/* alpha */.X)(
      theme.colors[color][Math.max(primaryShade - 4, 0)],
      0.05
    )
  };
  if (!withColorValues) {
    return dynamicVariables;
  }
  return {
    [`--mantine-color-${name}-0`]: theme.colors[color][0],
    [`--mantine-color-${name}-1`]: theme.colors[color][1],
    [`--mantine-color-${name}-2`]: theme.colors[color][2],
    [`--mantine-color-${name}-3`]: theme.colors[color][3],
    [`--mantine-color-${name}-4`]: theme.colors[color][4],
    [`--mantine-color-${name}-5`]: theme.colors[color][5],
    [`--mantine-color-${name}-6`]: theme.colors[color][6],
    [`--mantine-color-${name}-7`]: theme.colors[color][7],
    [`--mantine-color-${name}-8`]: theme.colors[color][8],
    [`--mantine-color-${name}-9`]: theme.colors[color][9],
    ...dynamicVariables
  };
}


//# sourceMappingURL=get-css-color-variables.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/virtual-color/virtual-color.mjs





function virtualColor(input) {
  const result = colorsTuple(
    Array.from({ length: 10 }).map((_, i) => `var(--mantine-color-${input.name}-${i})`)
  );
  Object.defineProperty(result, "mantine-virtual-color", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: true
  });
  Object.defineProperty(result, "dark", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.dark
  });
  Object.defineProperty(result, "light", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.light
  });
  Object.defineProperty(result, "name", {
    enumerable: false,
    writable: false,
    configurable: false,
    value: input.name
  });
  return result;
}
function isVirtualColor(value) {
  return !!value && typeof value === "object" && "mantine-virtual-color" in value;
}


//# sourceMappingURL=virtual-color.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/default-css-variables-resolver.mjs
'use client';










function assignSizeVariables(variables, sizes, name) {
  (0,keys/* keys */.H)(sizes).forEach(
    (size) => Object.assign(variables, { [`--mantine-${name}-${size}`]: sizes[size] })
  );
}
const defaultCssVariablesResolver = (theme) => {
  const lightPrimaryShade = (0,get_primary_shade/* getPrimaryShade */.g)(theme, "light");
  const defaultRadius = theme.defaultRadius in theme.radius ? theme.radius[theme.defaultRadius] : (0,rem/* rem */.D)(theme.defaultRadius);
  const result = {
    variables: {
      "--mantine-scale": theme.scale.toString(),
      "--mantine-cursor-type": theme.cursorType,
      "--mantine-color-scheme": "light dark",
      "--mantine-webkit-font-smoothing": theme.fontSmoothing ? "antialiased" : "unset",
      "--mantine-moz-font-smoothing": theme.fontSmoothing ? "grayscale" : "unset",
      "--mantine-color-white": theme.white,
      "--mantine-color-black": theme.black,
      "--mantine-line-height": theme.lineHeights.md,
      "--mantine-font-family": theme.fontFamily,
      "--mantine-font-family-monospace": theme.fontFamilyMonospace,
      "--mantine-font-family-headings": theme.headings.fontFamily,
      "--mantine-heading-font-weight": theme.headings.fontWeight,
      "--mantine-heading-text-wrap": theme.headings.textWrap,
      "--mantine-radius-default": defaultRadius,
      // Primary colors
      "--mantine-primary-color-filled": `var(--mantine-color-${theme.primaryColor}-filled)`,
      "--mantine-primary-color-filled-hover": `var(--mantine-color-${theme.primaryColor}-filled-hover)`,
      "--mantine-primary-color-light": `var(--mantine-color-${theme.primaryColor}-light)`,
      "--mantine-primary-color-light-hover": `var(--mantine-color-${theme.primaryColor}-light-hover)`,
      "--mantine-primary-color-light-color": `var(--mantine-color-${theme.primaryColor}-light-color)`
    },
    light: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "light"),
      "--mantine-color-bright": "var(--mantine-color-black)",
      "--mantine-color-text": theme.black,
      "--mantine-color-body": theme.white,
      "--mantine-color-error": "var(--mantine-color-red-6)",
      "--mantine-color-placeholder": "var(--mantine-color-gray-5)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-${lightPrimaryShade})`,
      "--mantine-color-default": "var(--mantine-color-white)",
      "--mantine-color-default-hover": "var(--mantine-color-gray-0)",
      "--mantine-color-default-color": "var(--mantine-color-black)",
      "--mantine-color-default-border": "var(--mantine-color-gray-4)",
      "--mantine-color-dimmed": "var(--mantine-color-gray-6)"
    },
    dark: {
      "--mantine-primary-color-contrast": getPrimaryContrastColor(theme, "dark"),
      "--mantine-color-bright": "var(--mantine-color-white)",
      "--mantine-color-text": "var(--mantine-color-dark-0)",
      "--mantine-color-body": "var(--mantine-color-dark-7)",
      "--mantine-color-error": "var(--mantine-color-red-8)",
      "--mantine-color-placeholder": "var(--mantine-color-dark-3)",
      "--mantine-color-anchor": `var(--mantine-color-${theme.primaryColor}-4)`,
      "--mantine-color-default": "var(--mantine-color-dark-6)",
      "--mantine-color-default-hover": "var(--mantine-color-dark-5)",
      "--mantine-color-default-color": "var(--mantine-color-white)",
      "--mantine-color-default-border": "var(--mantine-color-dark-4)",
      "--mantine-color-dimmed": "var(--mantine-color-dark-2)"
    }
  };
  assignSizeVariables(result.variables, theme.breakpoints, "breakpoint");
  assignSizeVariables(result.variables, theme.spacing, "spacing");
  assignSizeVariables(result.variables, theme.fontSizes, "font-size");
  assignSizeVariables(result.variables, theme.lineHeights, "line-height");
  assignSizeVariables(result.variables, theme.shadows, "shadow");
  assignSizeVariables(result.variables, theme.radius, "radius");
  theme.colors[theme.primaryColor].forEach((_, index) => {
    result.variables[`--mantine-primary-color-${index}`] = `var(--mantine-color-${theme.primaryColor}-${index})`;
  });
  (0,keys/* keys */.H)(theme.colors).forEach((color) => {
    const value = theme.colors[color];
    if (isVirtualColor(value)) {
      Object.assign(
        result.light,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.light,
          colorScheme: "light",
          withColorValues: true
        })
      );
      Object.assign(
        result.dark,
        getCSSColorVariables({
          theme,
          name: value.name,
          color: value.dark,
          colorScheme: "dark",
          withColorValues: true
        })
      );
      return;
    }
    value.forEach((shade, index) => {
      result.variables[`--mantine-color-${color}-${index}`] = shade;
    });
    Object.assign(
      result.light,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "light",
        withColorValues: false
      })
    );
    Object.assign(
      result.dark,
      getCSSColorVariables({
        theme,
        color,
        colorScheme: "dark",
        withColorValues: false
      })
    );
  });
  const headings = theme.headings.sizes;
  (0,keys/* keys */.H)(headings).forEach((heading) => {
    result.variables[`--mantine-${heading}-font-size`] = headings[heading].fontSize;
    result.variables[`--mantine-${heading}-line-height`] = headings[heading].lineHeight;
    result.variables[`--mantine-${heading}-font-weight`] = headings[heading].fontWeight || theme.headings.fontWeight;
  });
  return result;
};


//# sourceMappingURL=default-css-variables-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/get-merged-variables.mjs
'use client';






function getMergedVariables({ theme, generator }) {
  const defaultResolver = defaultCssVariablesResolver(theme);
  const providerGenerator = generator?.(theme);
  return providerGenerator ? (0,deep_merge/* deepMerge */.$)(defaultResolver, providerGenerator) : defaultResolver;
}


//# sourceMappingURL=get-merged-variables.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs + 3 modules
var default_theme = __webpack_require__(5304);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/remove-default-variables.mjs
'use client';







const defaultCssVariables = defaultCssVariablesResolver(default_theme/* DEFAULT_THEME */.S);
function removeDefaultVariables(input) {
  const cleaned = {
    variables: {},
    light: {},
    dark: {}
  };
  (0,keys/* keys */.H)(input.variables).forEach((key) => {
    if (defaultCssVariables.variables[key] !== input.variables[key]) {
      cleaned.variables[key] = input.variables[key];
    }
  });
  (0,keys/* keys */.H)(input.light).forEach((key) => {
    if (defaultCssVariables.light[key] !== input.light[key]) {
      cleaned.light[key] = input.light[key];
    }
  });
  (0,keys/* keys */.H)(input.dark).forEach((key) => {
    if (defaultCssVariables.dark[key] !== input.dark[key]) {
      cleaned.dark[key] = input.dark[key];
    }
  });
  return cleaned;
}


//# sourceMappingURL=remove-default-variables.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineCssVariables/MantineCssVariables.mjs
'use client';







function getColorSchemeCssVariables(selector) {
  return `
  ${selector}[data-mantine-color-scheme="dark"] { --mantine-color-scheme: dark; }
  ${selector}[data-mantine-color-scheme="light"] { --mantine-color-scheme: light; }
`;
}
function MantineCssVariables({
  cssVariablesSelector,
  deduplicateCssVariables
}) {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  const nonce = (0,Mantine_context/* useMantineStyleNonce */.WV)();
  const generator = (0,Mantine_context/* useMantineCssVariablesResolver */.OY)();
  const mergedVariables = getMergedVariables({ theme, generator });
  const shouldCleanVariables = cssVariablesSelector === ":root" && deduplicateCssVariables;
  const cleanedVariables = shouldCleanVariables ? removeDefaultVariables(mergedVariables) : mergedVariables;
  const css = convertCssVariables(cleanedVariables, cssVariablesSelector);
  if (css) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "style",
      {
        "data-mantine-styles": true,
        nonce: nonce?.(),
        dangerouslySetInnerHTML: {
          __html: `${css}${shouldCleanVariables ? "" : getColorSchemeCssVariables(cssVariablesSelector)}`
        }
      }
    );
  }
  return null;
}
MantineCssVariables.displayName = "@mantine/CssVariables";


//# sourceMappingURL=MantineCssVariables.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/suppress-nextjs-warning.mjs
'use client';
function suppressNextjsWarning() {
  const originalError = console.error;
  console.error = (...args) => {
    if (args.length > 1 && typeof args[0] === "string" && args[0].toLowerCase().includes("extra attributes from the server") && typeof args[1] === "string" && args[1].toLowerCase().includes("data-mantine-color-scheme")) ; else {
      originalError(...args);
    }
  };
}


//# sourceMappingURL=suppress-nextjs-warning.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(5585);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/use-mantine-color-scheme/use-provider-color-scheme.mjs
'use client';



function setColorSchemeAttribute(colorScheme, getRootElement) {
  const computedColorScheme = colorScheme !== "auto" ? colorScheme : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  getRootElement()?.setAttribute("data-mantine-color-scheme", computedColorScheme);
}
function useProviderColorScheme({
  manager,
  defaultColorScheme,
  getRootElement,
  forceColorScheme
}) {
  const media = (0,react.useRef)();
  const [value, setValue] = (0,react.useState)(() => manager.get(defaultColorScheme));
  const colorSchemeValue = forceColorScheme || value;
  const setColorScheme = (0,react.useCallback)(
    (colorScheme) => {
      if (!forceColorScheme) {
        setColorSchemeAttribute(colorScheme, getRootElement);
        setValue(colorScheme);
        manager.set(colorScheme);
      }
    },
    [manager.set, colorSchemeValue, forceColorScheme]
  );
  const clearColorScheme = (0,react.useCallback)(() => {
    setValue(defaultColorScheme);
    setColorSchemeAttribute(defaultColorScheme, getRootElement);
    manager.clear();
  }, [manager.clear, defaultColorScheme]);
  (0,react.useEffect)(() => {
    manager.subscribe(setColorScheme);
    return manager.unsubscribe;
  }, [manager.subscribe, manager.unsubscribe]);
  (0,use_isomorphic_effect/* useIsomorphicEffect */.o)(() => {
    setColorSchemeAttribute(manager.get(defaultColorScheme), getRootElement);
  }, []);
  (0,react.useEffect)(() => {
    if (forceColorScheme) {
      setColorSchemeAttribute(forceColorScheme, getRootElement);
      return () => {
      };
    }
    if (forceColorScheme === void 0) {
      setColorSchemeAttribute(value, getRootElement);
    }
    media.current = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = (event) => {
      if (value === "auto") {
        setColorSchemeAttribute(event.matches ? "dark" : "light", getRootElement);
      }
    };
    media.current?.addEventListener("change", listener);
    return () => media.current?.removeEventListener("change", listener);
  }, [value, forceColorScheme]);
  return { colorScheme: colorSchemeValue, setColorScheme, clearColorScheme };
}


//# sourceMappingURL=use-provider-color-scheme.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/use-respect-reduce-motion/use-respect-reduce-motion.mjs
'use client';


function useRespectReduceMotion({
  respectReducedMotion,
  getRootElement
}) {
  (0,use_isomorphic_effect/* useIsomorphicEffect */.o)(() => {
    if (respectReducedMotion) {
      getRootElement()?.setAttribute("data-respect-reduced-motion", "true");
    }
  }, [respectReducedMotion]);
}


//# sourceMappingURL=use-respect-reduce-motion.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs
'use client';












suppressNextjsWarning();
function MantineProvider({
  theme,
  children,
  getStyleNonce,
  withStaticClasses = true,
  withGlobalClasses = true,
  deduplicateCssVariables = true,
  withCssVariables = true,
  cssVariablesSelector = ":root",
  classNamesPrefix = "mantine",
  colorSchemeManager = localStorageColorSchemeManager(),
  defaultColorScheme = "light",
  getRootElement = () => document.documentElement,
  cssVariablesResolver,
  forceColorScheme,
  stylesTransform
}) {
  const { colorScheme, setColorScheme, clearColorScheme } = useProviderColorScheme({
    defaultColorScheme,
    forceColorScheme,
    manager: colorSchemeManager,
    getRootElement
  });
  useRespectReduceMotion({
    respectReducedMotion: theme?.respectReducedMotion || false,
    getRootElement
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Mantine_context/* MantineContext */.A$.Provider,
    {
      value: {
        colorScheme,
        setColorScheme,
        clearColorScheme,
        getRootElement,
        classNamesPrefix,
        getStyleNonce,
        cssVariablesResolver,
        cssVariablesSelector,
        withStaticClasses,
        stylesTransform
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(MantineThemeProvider/* MantineThemeProvider */.nW, { theme, children: [
        withCssVariables && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          MantineCssVariables,
          {
            cssVariablesSelector,
            deduplicateCssVariables
          }
        ),
        withGlobalClasses && /* @__PURE__ */ (0,jsx_runtime.jsx)(MantineClasses, {}),
        children
      ] })
    }
  );
}
MantineProvider.displayName = "@mantine/core/MantineProvider";
function HeadlessMantineProvider({ children, theme }) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Mantine_context/* MantineContext */.A$.Provider,
    {
      value: {
        colorScheme: "auto",
        setColorScheme: () => {
        },
        clearColorScheme: () => {
        },
        getRootElement: () => document.documentElement,
        classNamesPrefix: "mantine",
        cssVariablesSelector: ":root",
        withStaticClasses: false,
        headless: true
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(MantineThemeProvider/* MantineThemeProvider */.nW, { theme, children })
    }
  );
}
HeadlessMantineProvider.displayName = "@mantine/core/HeadlessMantineProvider";


//# sourceMappingURL=MantineProvider.mjs.map


/***/ }),

/***/ 1101:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  nW: () => (/* binding */ MantineThemeProvider),
  xd: () => (/* binding */ useMantineTheme)
});

// UNUSED EXPORTS: MantineThemeContext, useSafeMantineTheme

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs + 3 modules
var default_theme = __webpack_require__(5304);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/deep-merge/deep-merge.mjs
var deep_merge = __webpack_require__(1518);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/merge-mantine-theme/merge-mantine-theme.mjs





const INVALID_PRIMARY_COLOR_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more \u2013 https://mantine.dev/theming/colors/#primary-color";
const INVALID_PRIMARY_SHADE_ERROR = "[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }";
function isValidPrimaryShade(shade) {
  if (shade < 0 || shade > 9) {
    return false;
  }
  return parseInt(shade.toString(), 10) === shade;
}
function validateMantineTheme(theme) {
  if (!(theme.primaryColor in theme.colors)) {
    throw new Error(INVALID_PRIMARY_COLOR_ERROR);
  }
  if (typeof theme.primaryShade === "object") {
    if (!isValidPrimaryShade(theme.primaryShade.dark) || !isValidPrimaryShade(theme.primaryShade.light)) {
      throw new Error(INVALID_PRIMARY_SHADE_ERROR);
    }
  }
  if (typeof theme.primaryShade === "number" && !isValidPrimaryShade(theme.primaryShade)) {
    throw new Error(INVALID_PRIMARY_SHADE_ERROR);
  }
}
function mergeMantineTheme(currentTheme, themeOverride) {
  if (!themeOverride) {
    validateMantineTheme(currentTheme);
    return currentTheme;
  }
  const result = (0,deep_merge/* deepMerge */.$)(currentTheme, themeOverride);
  if (themeOverride.fontFamily && !themeOverride.headings?.fontFamily) {
    result.headings.fontFamily = themeOverride.fontFamily;
  }
  validateMantineTheme(result);
  return result;
}


//# sourceMappingURL=merge-mantine-theme.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs
'use client';





const MantineThemeContext = (0,react.createContext)(null);
const useSafeMantineTheme = () => (0,react.useContext)(MantineThemeContext) || default_theme/* DEFAULT_THEME */.S;
function useMantineTheme() {
  const ctx = (0,react.useContext)(MantineThemeContext);
  if (!ctx) {
    throw new Error(
      "@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app"
    );
  }
  return ctx;
}
function MantineThemeProvider({
  theme,
  children,
  inherit = true
}) {
  const parentTheme = useSafeMantineTheme();
  const mergedTheme = (0,react.useMemo)(
    () => mergeMantineTheme(inherit ? parentTheme : default_theme/* DEFAULT_THEME */.S, theme),
    [theme, parentTheme, inherit]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(MantineThemeContext.Provider, { value: mergedTheme, children });
}
MantineThemeProvider.displayName = "@mantine/core/MantineThemeProvider";


//# sourceMappingURL=MantineThemeProvider.mjs.map


/***/ }),

/***/ 1752:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ getGradient)
/* harmony export */ });
/* harmony import */ var _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6344);
'use client';


function getGradient(gradient, theme) {
  const merged = {
    from: gradient?.from || theme.defaultGradient.from,
    to: gradient?.to || theme.defaultGradient.to,
    deg: gradient?.deg || theme.defaultGradient.deg || 0
  };
  const fromColor = (0,_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getThemeColor */ .r)(merged.from, theme);
  const toColor = (0,_get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__/* .getThemeColor */ .r)(merged.to, theme);
  return `linear-gradient(${merged.deg}deg, ${fromColor} 0%, ${toColor} 100%)`;
}


//# sourceMappingURL=get-gradient.mjs.map


/***/ }),

/***/ 684:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getPrimaryShade)
/* harmony export */ });
'use client';
function getPrimaryShade(theme, colorScheme) {
  if (typeof theme.primaryShade === "number") {
    return theme.primaryShade;
  }
  if (colorScheme === "dark") {
    return theme.primaryShade.dark;
  }
  return theme.primaryShade.light;
}


//# sourceMappingURL=get-primary-shade.mjs.map


/***/ }),

/***/ 6344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ getThemeColor)
/* harmony export */ });
/* harmony import */ var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9569);
'use client';


function getThemeColor(color, theme) {
  const parsed = (0,_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__/* .parseThemeColor */ .g)({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}


//# sourceMappingURL=get-theme-color.mjs.map


/***/ }),

/***/ 9569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ parseThemeColor)
});

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
var get_primary_shade = __webpack_require__(684);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
var to_rgba = __webpack_require__(9444);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/luminance/luminance.mjs
'use client';


function gammaCorrect(c) {
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}
function getLightnessFromOklch(oklchColor) {
  const match = oklchColor.match(/oklch\((.*?)%\s/);
  return match ? parseFloat(match[1]) : null;
}
function luminance(color) {
  if (color.startsWith("oklch(")) {
    return (getLightnessFromOklch(color) || 0) / 100;
  }
  const { r, g, b } = (0,to_rgba/* toRgba */.K)(color);
  const sR = r / 255;
  const sG = g / 255;
  const sB = b / 255;
  const rLinear = gammaCorrect(sR);
  const gLinear = gammaCorrect(sG);
  const bLinear = gammaCorrect(sB);
  return 0.2126 * rLinear + 0.7152 * gLinear + 0.0722 * bLinear;
}
function isLightColor(color, luminanceThreshold = 0.179) {
  if (color.startsWith("var(")) {
    return false;
  }
  return luminance(color) > luminanceThreshold;
}


//# sourceMappingURL=luminance.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs
'use client';



function parseThemeColor({
  color,
  theme,
  colorScheme
}) {
  if (typeof color !== "string") {
    throw new Error(
      `[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof color}`
    );
  }
  if (color === "bright") {
    return {
      color,
      value: colorScheme === "dark" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-bright"
    };
  }
  if (color === "dimmed") {
    return {
      color,
      value: colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[7],
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        colorScheme === "dark" ? theme.colors.dark[2] : theme.colors.gray[6],
        theme.luminanceThreshold
      ),
      variable: "--mantine-color-dimmed"
    };
  }
  if (color === "white" || color === "black") {
    return {
      color,
      value: color === "white" ? theme.white : theme.black,
      shade: void 0,
      isThemeColor: false,
      isLight: isLightColor(
        color === "white" ? theme.white : theme.black,
        theme.luminanceThreshold
      ),
      variable: `--mantine-color-${color}`
    };
  }
  const [_color, shade] = color.split(".");
  const colorShade = shade ? Number(shade) : void 0;
  const isThemeColor = _color in theme.colors;
  if (isThemeColor) {
    const colorValue = colorShade !== void 0 ? theme.colors[_color][colorShade] : theme.colors[_color][(0,get_primary_shade/* getPrimaryShade */.g)(theme, colorScheme || "light")];
    return {
      color: _color,
      value: colorValue,
      shade: colorShade,
      isThemeColor,
      isLight: isLightColor(colorValue, theme.luminanceThreshold),
      variable: shade ? `--mantine-color-${_color}-${colorShade}` : `--mantine-color-${_color}-filled`
    };
  }
  return {
    color,
    value: color,
    isThemeColor,
    isLight: isLightColor(color, theme.luminanceThreshold),
    shade: colorShade,
    variable: void 0
  };
}


//# sourceMappingURL=parse-theme-color.mjs.map


/***/ }),

/***/ 7170:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ rgba),
/* harmony export */   X: () => (/* binding */ alpha)
/* harmony export */ });
/* harmony import */ var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9444);


function rgba(color, alpha2) {
  if (typeof color !== "string" || alpha2 > 1 || alpha2 < 0) {
    return "rgba(0, 0, 0, 1)";
  }
  if (color.startsWith("var(")) {
    const mixPercentage = (1 - alpha2) * 100;
    return `color-mix(in srgb, ${color}, transparent ${mixPercentage}%)`;
  }
  if (color.startsWith("oklch")) {
    if (color.includes("/")) {
      return color.replace(/\/\s*[\d.]+\s*\)/, `/ ${alpha2})`);
    }
    return color.replace(")", ` / ${alpha2})`);
  }
  const { r, g, b } = (0,_to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__/* .toRgba */ .K)(color);
  return `rgba(${r}, ${g}, ${b}, ${alpha2})`;
}
const alpha = rgba;


//# sourceMappingURL=rgba.mjs.map


/***/ }),

/***/ 9444:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ toRgba)
/* harmony export */ });
function isHexColor(hex) {
  const HEX_REGEXP = /^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i;
  return HEX_REGEXP.test(hex);
}
function hexToRgba(color) {
  let hexString = color.replace("#", "");
  if (hexString.length === 3) {
    const shorthandHex = hexString.split("");
    hexString = [
      shorthandHex[0],
      shorthandHex[0],
      shorthandHex[1],
      shorthandHex[1],
      shorthandHex[2],
      shorthandHex[2]
    ].join("");
  }
  if (hexString.length === 8) {
    const alpha = parseInt(hexString.slice(6, 8), 16) / 255;
    return {
      r: parseInt(hexString.slice(0, 2), 16),
      g: parseInt(hexString.slice(2, 4), 16),
      b: parseInt(hexString.slice(4, 6), 16),
      a: alpha
    };
  }
  const parsed = parseInt(hexString, 16);
  const r = parsed >> 16 & 255;
  const g = parsed >> 8 & 255;
  const b = parsed & 255;
  return {
    r,
    g,
    b,
    a: 1
  };
}
function rgbStringToRgba(color) {
  const [r, g, b, a] = color.replace(/[^0-9,./]/g, "").split(/[/,]/).map(Number);
  return { r, g, b, a: a || 1 };
}
function hslStringToRgba(hslaString) {
  const hslaRegex = /^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i;
  const matches = hslaString.match(hslaRegex);
  if (!matches) {
    return {
      r: 0,
      g: 0,
      b: 0,
      a: 1
    };
  }
  const h = parseInt(matches[1], 10);
  const s = parseInt(matches[2], 10) / 100;
  const l = parseInt(matches[3], 10) / 100;
  const a = matches[5] ? parseFloat(matches[5]) : void 0;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const huePrime = h / 60;
  const x = chroma * (1 - Math.abs(huePrime % 2 - 1));
  const m = l - chroma / 2;
  let r;
  let g;
  let b;
  if (huePrime >= 0 && huePrime < 1) {
    r = chroma;
    g = x;
    b = 0;
  } else if (huePrime >= 1 && huePrime < 2) {
    r = x;
    g = chroma;
    b = 0;
  } else if (huePrime >= 2 && huePrime < 3) {
    r = 0;
    g = chroma;
    b = x;
  } else if (huePrime >= 3 && huePrime < 4) {
    r = 0;
    g = x;
    b = chroma;
  } else if (huePrime >= 4 && huePrime < 5) {
    r = x;
    g = 0;
    b = chroma;
  } else {
    r = chroma;
    g = 0;
    b = x;
  }
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
    a: a || 1
  };
}
function toRgba(color) {
  if (isHexColor(color)) {
    return hexToRgba(color);
  }
  if (color.startsWith("rgb")) {
    return rgbStringToRgba(color);
  }
  if (color.startsWith("hsl")) {
    return hslStringToRgba(color);
  }
  return {
    r: 0,
    g: 0,
    b: 0,
    a: 1
  };
}


//# sourceMappingURL=to-rgba.mjs.map


/***/ }),

/***/ 5304:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ DEFAULT_THEME)
});

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(8149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
var to_rgba = __webpack_require__(9444);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/darken/darken.mjs


function darken(color, alpha) {
  if (color.startsWith("var(")) {
    return `color-mix(in srgb, ${color}, black ${alpha * 100}%)`;
  }
  const { r, g, b, a } = (0,to_rgba/* toRgba */.K)(color);
  const f = 1 - alpha;
  const dark = (input) => Math.round(input * f);
  return `rgba(${dark(r)}, ${dark(g)}, ${dark(b)}, ${a})`;
}


//# sourceMappingURL=darken.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
var get_gradient = __webpack_require__(1752);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(9569);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
var rgba = __webpack_require__(7170);
;// ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/default-variant-colors-resolver/default-variant-colors-resolver.mjs
'use client';









const defaultVariantColorsResolver = ({
  color,
  theme,
  variant,
  gradient,
  autoContrast
}) => {
  const parsed = (0,parse_theme_color/* parseThemeColor */.g)({ color, theme });
  const _autoContrast = typeof autoContrast === "boolean" ? autoContrast : theme.autoContrast;
  if (variant === "filled") {
    const textColor = _autoContrast ? parsed.isLight ? "var(--mantine-color-black)" : "var(--mantine-color-white)" : "var(--mantine-color-white)";
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-filled)`,
          hover: `var(--mantine-color-${color}-filled-hover)`,
          color: textColor,
          border: `${(0,rem/* rem */.D)(1)} solid transparent`
        };
      }
      return {
        background: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        hover: `var(--mantine-color-${parsed.color}-${parsed.shade === 9 ? 8 : parsed.shade + 1})`,
        color: textColor,
        border: `${(0,rem/* rem */.D)(1)} solid transparent`
      };
    }
    return {
      background: color,
      hover: darken(color, 0.1),
      color: textColor,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`
    };
  }
  if (variant === "light") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: `var(--mantine-color-${color}-light)`,
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,rem/* rem */.D)(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: (0,rgba/* rgba */.B)(parsedColor, 0.1),
        hover: (0,rgba/* rgba */.B)(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,rem/* rem */.D)(1)} solid transparent`
      };
    }
    return {
      background: (0,rgba/* rgba */.B)(color, 0.1),
      hover: (0,rgba/* rgba */.B)(color, 0.12),
      color,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`
    };
  }
  if (variant === "outline") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-outline-hover)`,
          color: `var(--mantine-color-${color}-outline)`,
          border: `${(0,rem/* rem */.D)(1)} solid var(--mantine-color-${color}-outline)`
        };
      }
      return {
        background: "transparent",
        hover: (0,rgba/* rgba */.B)(theme.colors[parsed.color][parsed.shade], 0.05),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${(0,rem/* rem */.D)(1)} solid var(--mantine-color-${parsed.color}-${parsed.shade})`
      };
    }
    return {
      background: "transparent",
      hover: (0,rgba/* rgba */.B)(color, 0.05),
      color,
      border: `${(0,rem/* rem */.D)(1)} solid ${color}`
    };
  }
  if (variant === "subtle") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: `var(--mantine-color-${color}-light-hover)`,
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,rem/* rem */.D)(1)} solid transparent`
        };
      }
      const parsedColor = theme.colors[parsed.color][parsed.shade];
      return {
        background: "transparent",
        hover: (0,rgba/* rgba */.B)(parsedColor, 0.12),
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,rem/* rem */.D)(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: (0,rgba/* rgba */.B)(color, 0.12),
      color,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`
    };
  }
  if (variant === "transparent") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "transparent",
          hover: "transparent",
          color: `var(--mantine-color-${color}-light-color)`,
          border: `${(0,rem/* rem */.D)(1)} solid transparent`
        };
      }
      return {
        background: "transparent",
        hover: "transparent",
        color: `var(--mantine-color-${parsed.color}-${Math.min(parsed.shade, 6)})`,
        border: `${(0,rem/* rem */.D)(1)} solid transparent`
      };
    }
    return {
      background: "transparent",
      hover: "transparent",
      color,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`
    };
  }
  if (variant === "white") {
    if (parsed.isThemeColor) {
      if (parsed.shade === void 0) {
        return {
          background: "var(--mantine-color-white)",
          hover: darken(theme.white, 0.01),
          color: `var(--mantine-color-${color}-filled)`,
          border: `${(0,rem/* rem */.D)(1)} solid transparent`
        };
      }
      return {
        background: "var(--mantine-color-white)",
        hover: darken(theme.white, 0.01),
        color: `var(--mantine-color-${parsed.color}-${parsed.shade})`,
        border: `${(0,rem/* rem */.D)(1)} solid transparent`
      };
    }
    return {
      background: "var(--mantine-color-white)",
      hover: darken(theme.white, 0.01),
      color,
      border: `${(0,rem/* rem */.D)(1)} solid transparent`
    };
  }
  if (variant === "gradient") {
    return {
      background: (0,get_gradient/* getGradient */.v)(gradient, theme),
      hover: (0,get_gradient/* getGradient */.v)(gradient, theme),
      color: "var(--mantine-color-white)",
      border: "none"
    };
  }
  if (variant === "default") {
    return {
      background: "var(--mantine-color-default)",
      hover: "var(--mantine-color-default-hover)",
      color: "var(--mantine-color-default-color)",
      border: `${(0,rem/* rem */.D)(1)} solid var(--mantine-color-default-border)`
    };
  }
  return {};
};


//# sourceMappingURL=default-variant-colors-resolver.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/default-colors.mjs
const DEFAULT_COLORS = {
  dark: [
    "#C9C9C9",
    "#b8b8b8",
    "#828282",
    "#696969",
    "#424242",
    "#3b3b3b",
    "#2e2e2e",
    "#242424",
    "#1f1f1f",
    "#141414"
  ],
  gray: [
    "#f8f9fa",
    "#f1f3f5",
    "#e9ecef",
    "#dee2e6",
    "#ced4da",
    "#adb5bd",
    "#868e96",
    "#495057",
    "#343a40",
    "#212529"
  ],
  red: [
    "#fff5f5",
    "#ffe3e3",
    "#ffc9c9",
    "#ffa8a8",
    "#ff8787",
    "#ff6b6b",
    "#fa5252",
    "#f03e3e",
    "#e03131",
    "#c92a2a"
  ],
  pink: [
    "#fff0f6",
    "#ffdeeb",
    "#fcc2d7",
    "#faa2c1",
    "#f783ac",
    "#f06595",
    "#e64980",
    "#d6336c",
    "#c2255c",
    "#a61e4d"
  ],
  grape: [
    "#f8f0fc",
    "#f3d9fa",
    "#eebefa",
    "#e599f7",
    "#da77f2",
    "#cc5de8",
    "#be4bdb",
    "#ae3ec9",
    "#9c36b5",
    "#862e9c"
  ],
  violet: [
    "#f3f0ff",
    "#e5dbff",
    "#d0bfff",
    "#b197fc",
    "#9775fa",
    "#845ef7",
    "#7950f2",
    "#7048e8",
    "#6741d9",
    "#5f3dc4"
  ],
  indigo: [
    "#edf2ff",
    "#dbe4ff",
    "#bac8ff",
    "#91a7ff",
    "#748ffc",
    "#5c7cfa",
    "#4c6ef5",
    "#4263eb",
    "#3b5bdb",
    "#364fc7"
  ],
  blue: [
    "#e7f5ff",
    "#d0ebff",
    "#a5d8ff",
    "#74c0fc",
    "#4dabf7",
    "#339af0",
    "#228be6",
    "#1c7ed6",
    "#1971c2",
    "#1864ab"
  ],
  cyan: [
    "#e3fafc",
    "#c5f6fa",
    "#99e9f2",
    "#66d9e8",
    "#3bc9db",
    "#22b8cf",
    "#15aabf",
    "#1098ad",
    "#0c8599",
    "#0b7285"
  ],
  teal: [
    "#e6fcf5",
    "#c3fae8",
    "#96f2d7",
    "#63e6be",
    "#38d9a9",
    "#20c997",
    "#12b886",
    "#0ca678",
    "#099268",
    "#087f5b"
  ],
  green: [
    "#ebfbee",
    "#d3f9d8",
    "#b2f2bb",
    "#8ce99a",
    "#69db7c",
    "#51cf66",
    "#40c057",
    "#37b24d",
    "#2f9e44",
    "#2b8a3e"
  ],
  lime: [
    "#f4fce3",
    "#e9fac8",
    "#d8f5a2",
    "#c0eb75",
    "#a9e34b",
    "#94d82d",
    "#82c91e",
    "#74b816",
    "#66a80f",
    "#5c940d"
  ],
  yellow: [
    "#fff9db",
    "#fff3bf",
    "#ffec99",
    "#ffe066",
    "#ffd43b",
    "#fcc419",
    "#fab005",
    "#f59f00",
    "#f08c00",
    "#e67700"
  ],
  orange: [
    "#fff4e6",
    "#ffe8cc",
    "#ffd8a8",
    "#ffc078",
    "#ffa94d",
    "#ff922b",
    "#fd7e14",
    "#f76707",
    "#e8590c",
    "#d9480f"
  ]
};


//# sourceMappingURL=default-colors.mjs.map

;// ./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs







const DEFAULT_FONT_FAMILY = "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji";
const DEFAULT_THEME = {
  scale: 1,
  fontSmoothing: true,
  focusRing: "auto",
  white: "#fff",
  black: "#000",
  colors: DEFAULT_COLORS,
  primaryShade: { light: 6, dark: 8 },
  primaryColor: "blue",
  variantColorResolver: defaultVariantColorsResolver,
  autoContrast: false,
  luminanceThreshold: 0.3,
  fontFamily: DEFAULT_FONT_FAMILY,
  fontFamilyMonospace: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  respectReducedMotion: false,
  cursorType: "default",
  defaultGradient: { from: "blue", to: "cyan", deg: 45 },
  defaultRadius: "sm",
  activeClassName: "mantine-active",
  focusClassName: "",
  headings: {
    fontFamily: DEFAULT_FONT_FAMILY,
    fontWeight: "700",
    textWrap: "wrap",
    sizes: {
      h1: { fontSize: (0,rem/* rem */.D)(34), lineHeight: "1.3" },
      h2: { fontSize: (0,rem/* rem */.D)(26), lineHeight: "1.35" },
      h3: { fontSize: (0,rem/* rem */.D)(22), lineHeight: "1.4" },
      h4: { fontSize: (0,rem/* rem */.D)(18), lineHeight: "1.45" },
      h5: { fontSize: (0,rem/* rem */.D)(16), lineHeight: "1.5" },
      h6: { fontSize: (0,rem/* rem */.D)(14), lineHeight: "1.5" }
    }
  },
  fontSizes: {
    xs: (0,rem/* rem */.D)(12),
    sm: (0,rem/* rem */.D)(14),
    md: (0,rem/* rem */.D)(16),
    lg: (0,rem/* rem */.D)(18),
    xl: (0,rem/* rem */.D)(20)
  },
  lineHeights: {
    xs: "1.4",
    sm: "1.45",
    md: "1.55",
    lg: "1.6",
    xl: "1.65"
  },
  radius: {
    xs: (0,rem/* rem */.D)(2),
    sm: (0,rem/* rem */.D)(4),
    md: (0,rem/* rem */.D)(8),
    lg: (0,rem/* rem */.D)(16),
    xl: (0,rem/* rem */.D)(32)
  },
  spacing: {
    xs: (0,rem/* rem */.D)(10),
    sm: (0,rem/* rem */.D)(12),
    md: (0,rem/* rem */.D)(16),
    lg: (0,rem/* rem */.D)(20),
    xl: (0,rem/* rem */.D)(32)
  },
  breakpoints: {
    xs: "36em",
    sm: "48em",
    md: "62em",
    lg: "75em",
    xl: "88em"
  },
  shadows: {
    xs: `0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(3)} rgba(0, 0, 0, 0.05), 0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(2)} rgba(0, 0, 0, 0.1)`,
    sm: `0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,rem/* rem */.D)(10)} ${(0,rem/* rem */.D)(
      15
    )} ${(0,rem/* rem */.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,rem/* rem */.D)(7)} ${(0,rem/* rem */.D)(7)} ${(0,rem/* rem */.D)(-5)}`,
    md: `0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,rem/* rem */.D)(20)} ${(0,rem/* rem */.D)(
      25
    )} ${(0,rem/* rem */.D)(-5)}, rgba(0, 0, 0, 0.04) 0 ${(0,rem/* rem */.D)(10)} ${(0,rem/* rem */.D)(10)} ${(0,rem/* rem */.D)(-5)}`,
    lg: `0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,rem/* rem */.D)(28)} ${(0,rem/* rem */.D)(
      23
    )} ${(0,rem/* rem */.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,rem/* rem */.D)(12)} ${(0,rem/* rem */.D)(12)} ${(0,rem/* rem */.D)(-7)}`,
    xl: `0 ${(0,rem/* rem */.D)(1)} ${(0,rem/* rem */.D)(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${(0,rem/* rem */.D)(36)} ${(0,rem/* rem */.D)(
      28
    )} ${(0,rem/* rem */.D)(-7)}, rgba(0, 0, 0, 0.04) 0 ${(0,rem/* rem */.D)(17)} ${(0,rem/* rem */.D)(17)} ${(0,rem/* rem */.D)(-7)}`
  },
  other: {},
  components: {}
};


//# sourceMappingURL=default-theme.mjs.map


/***/ }),

/***/ 6100:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useProps)
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4848);
/* harmony import */ var _MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1101);
'use client';






function useProps(component, defaultProps, props) {
  const theme = (0,_MantineThemeProvider_MantineThemeProvider_mjs__WEBPACK_IMPORTED_MODULE_2__/* .useMantineTheme */ .xd)();
  const contextPropsPayload = theme.components[component]?.defaultProps;
  const contextProps = typeof contextPropsPayload === "function" ? contextPropsPayload(theme) : contextPropsPayload;
  return { ...defaultProps, ...contextProps, ...(0,_utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_3__/* .filterProps */ .J)(props) };
}


//# sourceMappingURL=use-props.mjs.map


/***/ }),

/***/ 2412:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D_: () => (/* binding */ identity),
/* harmony export */   P9: () => (/* binding */ factory)
/* harmony export */ });
/* unused harmony export getWithProps */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
'use client';



function identity(value) {
  return value;
}
function getWithProps(Component) {
  const _Component = Component;
  return (fixedProps) => {
    const Extended = forwardRef((props, ref) => /* @__PURE__ */ jsx(_Component, { ...fixedProps, ...props, ref }));
    Extended.extend = _Component.extend;
    Extended.displayName = `WithProps(${_Component.displayName})`;
    return Extended;
  };
}
function factory(ui) {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ui);
  Component.extend = identity;
  Component.withProps = (fixedProps) => {
    const Extended = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  return Component;
}


//# sourceMappingURL=factory.mjs.map


/***/ }),

/***/ 8639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ polymorphicFactory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6540);
/* harmony import */ var _factory_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2412);
'use client';




function polymorphicFactory(ui) {
  const Component = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(ui);
  Component.withProps = (fixedProps) => {
    const Extended = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((props, ref) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, { ...fixedProps, ...props, ref }));
    Extended.extend = Component.extend;
    Extended.displayName = `WithProps(${Component.displayName})`;
    return Extended;
  };
  Component.extend = _factory_mjs__WEBPACK_IMPORTED_MODULE_2__/* .identity */ .D_;
  return Component;
}


//# sourceMappingURL=polymorphic-factory.mjs.map


/***/ }),

/***/ 9396:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ createVarsResolver)
/* harmony export */ });
'use client';
function createVarsResolver(resolver) {
  return resolver;
}


//# sourceMappingURL=create-vars-resolver.mjs.map


/***/ }),

/***/ 9205:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ useStyles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var Mantine_context = __webpack_require__(6192);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(4164);
;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-global-class-names/get-global-class-names.mjs
'use client';


const FOCUS_CLASS_NAMES = {
  always: "mantine-focus-always",
  auto: "mantine-focus-auto",
  never: "mantine-focus-never"
};
function getGlobalClassNames({ theme, options, unstyled }) {
  return (0,clsx/* default */.A)(
    options?.focusable && !unstyled && (theme.focusClassName || FOCUS_CLASS_NAMES[theme.focusRing]),
    options?.active && !unstyled && theme.activeClassName
  );
}


//# sourceMappingURL=get-global-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
'use client';


const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = (0,clsx/* default */.A)(merged[key], value);
      } else {
        merged[key] = value;
      }
    });
  });
  return merged;
}
function resolveClassNames({ theme, classNames, props, stylesCtx }) {
  const arrayClassNames = Array.isArray(classNames) ? classNames : [classNames];
  const resolvedClassNames = arrayClassNames.map(
    (item) => typeof item === "function" ? item(theme, props, stylesCtx) : item || EMPTY_CLASS_NAMES
  );
  return mergeClassNames(resolvedClassNames);
}


//# sourceMappingURL=resolve-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
'use client';


function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return resolveClassNames({
    theme,
    classNames: options?.classNames,
    props: options?.props || props,
    stylesCtx
  })[selector];
}


//# sourceMappingURL=get-options-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-resolved-class-names/get-resolved-class-names.mjs
'use client';


function getResolvedClassNames({
  selector,
  stylesCtx,
  theme,
  classNames,
  props
}) {
  return resolveClassNames({ theme, classNames, props, stylesCtx })[selector];
}


//# sourceMappingURL=get-resolved-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-root-class-name/get-root-class-name.mjs
'use client';
function getRootClassName({ rootSelector, selector, className }) {
  return rootSelector === selector ? className : void 0;
}


//# sourceMappingURL=get-root-class-name.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-selector-class-name/get-selector-class-name.mjs
'use client';
function getSelectorClassName({ selector, classes, unstyled }) {
  return unstyled ? void 0 : classes[selector];
}


//# sourceMappingURL=get-selector-class-name.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-static-class-names/get-static-class-names.mjs
'use client';
function getStaticClassNames({
  themeName,
  classNamesPrefix,
  selector,
  withStaticClass
}) {
  if (withStaticClass === false) {
    return [];
  }
  return themeName.map((n) => `${classNamesPrefix}-${n}-${selector}`);
}


//# sourceMappingURL=get-static-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-theme-class-names/get-theme-class-names.mjs
'use client';


function getThemeClassNames({
  themeName,
  theme,
  selector,
  props,
  stylesCtx
}) {
  return themeName.map(
    (n) => resolveClassNames({
      theme,
      classNames: theme.components[n]?.classNames,
      props,
      stylesCtx
    })?.[selector]
  );
}


//# sourceMappingURL=get-theme-class-names.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-variant-class-name/get-variant-class-name.mjs
'use client';
function getVariantClassName({
  options,
  classes,
  selector,
  unstyled
}) {
  return options?.variant && !unstyled ? classes[`${selector}--${options.variant}`] : void 0;
}


//# sourceMappingURL=get-variant-class-name.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-class-name.mjs
'use client';










function getClassName({
  theme,
  options,
  themeName,
  selector,
  classNamesPrefix,
  classNames,
  classes,
  unstyled,
  className,
  rootSelector,
  props,
  stylesCtx,
  withStaticClasses,
  headless,
  transformedStyles
}) {
  return (0,clsx/* default */.A)(
    getGlobalClassNames({ theme, options, unstyled: unstyled || headless }),
    getThemeClassNames({ theme, themeName, selector, props, stylesCtx }),
    getVariantClassName({ options, classes, selector, unstyled }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames, props }),
    getResolvedClassNames({ selector, stylesCtx, theme, classNames: transformedStyles, props }),
    getOptionsClassNames({ selector, stylesCtx, options, props, theme }),
    getRootClassName({ rootSelector, selector, className }),
    getSelectorClassName({ selector, classes, unstyled: unstyled || headless }),
    withStaticClasses && !headless && getStaticClassNames({
      themeName,
      classNamesPrefix,
      selector,
      withStaticClass: options?.withStaticClass
    }),
    options?.className
  );
}


//# sourceMappingURL=get-class-name.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
'use client';
function resolveStyles({ theme, styles, props, stylesCtx }) {
  const arrayStyles = Array.isArray(styles) ? styles : [styles];
  return arrayStyles.reduce((acc, style) => {
    if (typeof style === "function") {
      return { ...acc, ...style(theme, props, stylesCtx) };
    }
    return { ...acc, ...style };
  }, {});
}


//# sourceMappingURL=resolve-styles.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-theme-styles/get-theme-styles.mjs
'use client';


function getThemeStyles({
  theme,
  themeName,
  props,
  stylesCtx,
  selector
}) {
  return themeName.map(
    (n) => resolveStyles({
      theme,
      styles: theme.components[n]?.styles,
      props,
      stylesCtx
    })[selector]
  ).reduce((acc, val) => ({ ...acc, ...val }), {});
}


//# sourceMappingURL=get-theme-styles.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-style/resolve-style.mjs
'use client';
function resolveStyle({ style, theme }) {
  if (Array.isArray(style)) {
    return [...style].reduce(
      (acc, item) => ({ ...acc, ...resolveStyle({ style: item, theme }) }),
      {}
    );
  }
  if (typeof style === "function") {
    return style(theme);
  }
  if (style == null) {
    return {};
  }
  return style;
}


//# sourceMappingURL=resolve-style.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/filter-props/filter-props.mjs
var filter_props = __webpack_require__(7602);
;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/merge-vars.mjs
'use client';





function mergeVars(vars) {
  return vars.reduce((acc, current) => {
    if (current) {
      Object.keys(current).forEach((key) => {
        acc[key] = { ...acc[key], ...(0,filter_props/* filterProps */.J)(current[key]) };
      });
    }
    return acc;
  }, {});
}


//# sourceMappingURL=merge-vars.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-vars/resolve-vars.mjs
'use client';


function resolveVars({
  vars,
  varsResolver,
  theme,
  props,
  stylesCtx,
  selector,
  themeName,
  headless
}) {
  return mergeVars([
    headless ? {} : varsResolver?.(theme, props, stylesCtx),
    ...themeName.map((name) => theme.components?.[name]?.vars?.(theme, props, stylesCtx)),
    vars?.(theme, props, stylesCtx)
  ])?.[selector];
}


//# sourceMappingURL=resolve-vars.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/get-style.mjs
'use client';





function getStyle({
  theme,
  themeName,
  selector,
  options,
  props,
  stylesCtx,
  rootSelector,
  styles,
  style,
  vars,
  varsResolver,
  headless,
  withStylesTransform
}) {
  return {
    ...!withStylesTransform && getThemeStyles({ theme, themeName, props, stylesCtx, selector }),
    ...!withStylesTransform && resolveStyles({ theme, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && resolveStyles({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
    ...resolveVars({ theme, props, stylesCtx, vars, varsResolver, selector, themeName, headless }),
    ...rootSelector === selector ? resolveStyle({ style, theme }) : null,
    ...resolveStyle({ style: options?.style, theme })
  };
}


//# sourceMappingURL=get-style.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-transformed-styles.mjs
'use client';









function useStylesTransform({ props, stylesCtx, themeName }) {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  const stylesTransform = (0,Mantine_context/* useMantineStylesTransform */.m6)()?.();
  const getTransformedStyles = (styles) => {
    if (!stylesTransform) {
      return [];
    }
    const transformedStyles = styles.map(
      (style) => stylesTransform(style, { props, theme, ctx: stylesCtx })
    );
    return [
      ...transformedStyles,
      ...themeName.map(
        (n) => stylesTransform(theme.components[n]?.styles, { props, theme, ctx: stylesCtx })
      )
    ].filter(Boolean);
  };
  return {
    getTransformedStyles,
    withStylesTransform: !!stylesTransform
  };
}


//# sourceMappingURL=use-transformed-styles.mjs.map

;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs
'use client';












function useStyles({
  name,
  classes,
  props,
  stylesCtx,
  className,
  style,
  rootSelector = "root",
  unstyled,
  classNames,
  styles,
  vars,
  varsResolver
}) {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  const classNamesPrefix = (0,Mantine_context/* useMantineClassNamesPrefix */.AI)();
  const withStaticClasses = (0,Mantine_context/* useMantineWithStaticClasses */.If)();
  const headless = (0,Mantine_context/* useMantineIsHeadless */.FI)();
  const themeName = (Array.isArray(name) ? name : [name]).filter((n) => n);
  const { withStylesTransform, getTransformedStyles } = useStylesTransform({
    props,
    stylesCtx,
    themeName
  });
  return (selector, options) => ({
    className: getClassName({
      theme,
      options,
      themeName,
      selector,
      classNamesPrefix,
      classNames,
      classes,
      unstyled,
      className,
      rootSelector,
      props,
      stylesCtx,
      withStaticClasses,
      headless,
      transformedStyles: getTransformedStyles([options?.styles, styles])
    }),
    style: getStyle({
      theme,
      themeName,
      selector,
      options,
      props,
      stylesCtx,
      rootSelector,
      styles,
      style,
      vars,
      varsResolver,
      headless,
      withStylesTransform
    })
  });
}


//# sourceMappingURL=use-styles.mjs.map


/***/ }),

/***/ 1518:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ deepMerge)
/* harmony export */ });
function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}
function deepMerge(target, source) {
  const result = { ...target };
  const _source = source;
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(_source[key])) {
        if (!(key in target)) {
          result[key] = _source[key];
        } else {
          result[key] = deepMerge(result[key], _source[key]);
        }
      } else {
        result[key] = _source[key];
      }
    });
  }
  return result;
}


//# sourceMappingURL=deep-merge.mjs.map


/***/ }),

/***/ 7602:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ filterProps)
/* harmony export */ });
'use client';
function filterProps(props) {
  return Object.keys(props).reduce((acc, key) => {
    if (props[key] !== void 0) {
      acc[key] = props[key];
    }
    return acc;
  }, {});
}


//# sourceMappingURL=filter-props.mjs.map


/***/ }),

/***/ 6324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GY: () => (/* binding */ getSpacing),
/* harmony export */   YC: () => (/* binding */ getSize),
/* harmony export */   ks: () => (/* binding */ getLineHeight),
/* harmony export */   nJ: () => (/* binding */ getRadius),
/* harmony export */   ny: () => (/* binding */ getFontSize)
/* harmony export */ });
/* unused harmony export getShadow */
/* harmony import */ var _is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2940);
/* harmony import */ var _units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8149);
'use client';



function getSize(size, prefix = "size", convertToRem = true) {
  if (size === void 0) {
    return void 0;
  }
  return (0,_is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__/* .isNumberLike */ .t)(size) ? convertToRem ? (0,_units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__/* .rem */ .D)(size) : size : `var(--${prefix}-${size})`;
}
function getSpacing(size) {
  return getSize(size, "mantine-spacing");
}
function getRadius(size) {
  if (size === void 0) {
    return "var(--mantine-radius-default)";
  }
  return getSize(size, "mantine-radius");
}
function getFontSize(size) {
  return getSize(size, "mantine-font-size");
}
function getLineHeight(size) {
  return getSize(size, "mantine-line-height", false);
}
function getShadow(size) {
  if (!size) {
    return void 0;
  }
  return getSize(size, "mantine-shadow", false);
}


//# sourceMappingURL=get-size.mjs.map


/***/ }),

/***/ 2940:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   t: () => (/* binding */ isNumberLike)
/* harmony export */ });
'use client';
function isNumberLike(value) {
  if (typeof value === "number") {
    return true;
  }
  if (typeof value === "string") {
    if (value.startsWith("calc(") || value.startsWith("var(") || value.includes(" ") && value.trim() !== "") {
      return true;
    }
    const cssUnitsRegex = /^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;
    const values = value.trim().split(/\s+/);
    return values.every((val) => cssUnitsRegex.test(val));
  }
  return false;
}


//# sourceMappingURL=is-number-like.mjs.map


/***/ }),

/***/ 3052:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ keys)
/* harmony export */ });
'use client';
function keys(object) {
  return Object.keys(object);
}


//# sourceMappingURL=keys.mjs.map


/***/ }),

/***/ 8149:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ rem),
/* harmony export */   em: () => (/* binding */ em)
/* harmony export */ });
function scaleRem(remValue) {
  if (remValue === "0rem") {
    return "0rem";
  }
  return `calc(${remValue} * var(--mantine-scale))`;
}
function createConverter(units, { shouldScale = false } = {}) {
  function converter(value) {
    if (value === 0 || value === "0") {
      return `0${units}`;
    }
    if (typeof value === "number") {
      const val = `${value / 16}${units}`;
      return shouldScale ? scaleRem(val) : val;
    }
    if (typeof value === "string") {
      if (value === "") {
        return value;
      }
      if (value.startsWith("calc(") || value.startsWith("clamp(") || value.includes("rgba(")) {
        return value;
      }
      if (value.includes(",")) {
        return value.split(",").map((val) => converter(val)).join(",");
      }
      if (value.includes(" ")) {
        return value.split(" ").map((val) => converter(val)).join(" ");
      }
      if (value.includes(units)) {
        return shouldScale ? scaleRem(value) : value;
      }
      const replaced = value.replace("px", "");
      if (!Number.isNaN(Number(replaced))) {
        const val = `${Number(replaced) / 16}${units}`;
        return shouldScale ? scaleRem(val) : val;
      }
    }
    return value;
  }
  return converter;
}
const rem = createConverter("rem", { shouldScale: true });
const em = createConverter("em");


//# sourceMappingURL=rem.mjs.map


/***/ }),

/***/ 5585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
'use client';


const useIsomorphicEffect = typeof document !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-isomorphic-effect.mjs.map


/***/ })

}]);
//# sourceMappingURL=vendor.ui.0b0f26e97f8408f2b854.js.map