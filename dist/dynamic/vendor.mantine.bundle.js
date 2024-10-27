"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[777],{

/***/ 49501:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $: () => (/* binding */ Button)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
var get_theme_color = __webpack_require__(86344);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Transition/Transition.mjs + 3 modules
var Transition = __webpack_require__(73087);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs + 1 modules
var UnstyledButton = __webpack_require__(46076);
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
    UnstyledButton/* UnstyledButton */.N,
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
        /* @__PURE__ */ (0,jsx_runtime.jsx)(Transition/* Transition */.e, { mounted: !!loading, transition: loaderTransition, duration: 150, children: (transitionStyles) => /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", ...getStyles("loader", { style: transitionStyles }), "aria-hidden": true, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
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

/***/ 80355:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  J: () => (/* binding */ CloseButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs + 1 modules
var UnstyledButton = __webpack_require__(46076);
;// ./node_modules/@mantine/core/esm/components/CloseButton/CloseIcon.mjs
'use client';



const CloseIcon = (0,react.forwardRef)(
  ({ size = "var(--cb-icon-size, 70%)", style, ...others }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: { ...style, width: size, height: size },
      ref,
      ...others,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  )
);
CloseIcon.displayName = "@mantine/core/CloseIcon";


//# sourceMappingURL=CloseIcon.mjs.map

;// ./node_modules/@mantine/core/esm/components/CloseButton/CloseButton.module.css.mjs
'use client';
var classes = {"root":"m_86a44da5","root--subtle":"m_220c80f2"};


//# sourceMappingURL=CloseButton.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs
'use client';





















const defaultProps = {
  variant: "subtle"
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size, radius, iconSize }) => ({
  root: {
    "--cb-size": (0,get_size/* getSize */.YC)(size, "cb-size"),
    "--cb-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
    "--cb-icon-size": (0,rem/* rem */.D)(iconSize)
  }
}));
const CloseButton = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("CloseButton", defaultProps, _props);
  const {
    iconSize,
    children,
    vars,
    radius,
    className,
    classNames,
    style,
    styles,
    unstyled,
    "data-disabled": dataDisabled,
    disabled,
    variant,
    icon,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "CloseButton",
    props,
    className,
    style,
    classes: classes,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    UnstyledButton/* UnstyledButton */.N,
    {
      ref,
      ...others,
      unstyled,
      variant,
      disabled,
      mod: [{ disabled: disabled || dataDisabled }, mod],
      ...getStyles("root", { variant, active: !disabled && !dataDisabled }),
      children: [
        icon || /* @__PURE__ */ (0,jsx_runtime.jsx)(CloseIcon, {}),
        children
      ]
    }
  );
});
CloseButton.classes = classes;
CloseButton.displayName = "@mantine/core/CloseButton";


//# sourceMappingURL=CloseButton.mjs.map


/***/ }),

/***/ 82659:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ Container)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
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

/***/ 10875:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  s: () => (/* binding */ FocusTrap)
});

// UNUSED EXPORTS: FocusTrapInitialFocus

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
var random_id = __webpack_require__(45727);
;// ./node_modules/@mantine/hooks/esm/use-focus-trap/create-aria-hider.mjs
'use client';


function createAriaHider(containerNode, selector = "body > :not(script)") {
  const id = (0,random_id/* randomId */.z)();
  const rootNodes = Array.from(
    document.querySelectorAll(selector)
  ).map((node) => {
    if (node?.shadowRoot?.contains(containerNode) || node.contains(containerNode)) {
      return void 0;
    }
    const ariaHidden = node.getAttribute("aria-hidden");
    const prevAriaHidden = node.getAttribute("data-hidden");
    const prevFocusId = node.getAttribute("data-focus-id");
    node.setAttribute("data-focus-id", id);
    if (ariaHidden === null || ariaHidden === "false") {
      node.setAttribute("aria-hidden", "true");
    } else if (!prevAriaHidden && !prevFocusId) {
      node.setAttribute("data-hidden", ariaHidden);
    }
    return {
      node,
      ariaHidden: prevAriaHidden || null
    };
  });
  return () => {
    rootNodes.forEach((item) => {
      if (!item || id !== item.node.getAttribute("data-focus-id")) {
        return;
      }
      if (item.ariaHidden === null) {
        item.node.removeAttribute("aria-hidden");
      } else {
        item.node.setAttribute("aria-hidden", item.ariaHidden);
      }
      item.node.removeAttribute("data-focus-id");
      item.node.removeAttribute("data-hidden");
    });
  };
}


//# sourceMappingURL=create-aria-hider.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-focus-trap/tabbable.mjs
'use client';
const TABBABLE_NODES = /input|select|textarea|button|object/;
const FOCUS_SELECTOR = "a, input, select, textarea, button, object, [tabindex]";
function tabbable_hidden(element) {
  if (false) {}
  return element.style.display === "none";
}
function visible(element) {
  const isHidden = element.getAttribute("aria-hidden") || element.getAttribute("hidden") || element.getAttribute("type") === "hidden";
  if (isHidden) {
    return false;
  }
  let parentElement = element;
  while (parentElement) {
    if (parentElement === document.body || parentElement.nodeType === 11) {
      break;
    }
    if (tabbable_hidden(parentElement)) {
      return false;
    }
    parentElement = parentElement.parentNode;
  }
  return true;
}
function getElementTabIndex(element) {
  let tabIndex = element.getAttribute("tabindex");
  if (tabIndex === null) {
    tabIndex = void 0;
  }
  return parseInt(tabIndex, 10);
}
function focusable(element) {
  const nodeName = element.nodeName.toLowerCase();
  const isTabIndexNotNaN = !Number.isNaN(getElementTabIndex(element));
  const res = (
    // @ts-expect-error function accepts any html element but if it is a button, it should not be disabled to trigger the condition
    TABBABLE_NODES.test(nodeName) && !element.disabled || (element instanceof HTMLAnchorElement ? element.href || isTabIndexNotNaN : isTabIndexNotNaN)
  );
  return res && visible(element);
}
function tabbable(element) {
  const tabIndex = getElementTabIndex(element);
  const isTabIndexNaN = Number.isNaN(tabIndex);
  return (isTabIndexNaN || tabIndex >= 0) && focusable(element);
}
function findTabbableDescendants(element) {
  return Array.from(element.querySelectorAll(FOCUS_SELECTOR)).filter(tabbable);
}


//# sourceMappingURL=tabbable.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-focus-trap/scope-tab.mjs
'use client';


function scopeTab(node, event) {
  const tabbable = findTabbableDescendants(node);
  if (!tabbable.length) {
    event.preventDefault();
    return;
  }
  const finalTabbable = tabbable[event.shiftKey ? 0 : tabbable.length - 1];
  const root = node.getRootNode();
  let leavingFinalTabbable = finalTabbable === root.activeElement || node === root.activeElement;
  const activeElement = root.activeElement;
  const activeElementIsRadio = activeElement.tagName === "INPUT" && activeElement.getAttribute("type") === "radio";
  if (activeElementIsRadio) {
    const activeRadioGroup = tabbable.filter(
      (element) => element.getAttribute("type") === "radio" && element.getAttribute("name") === activeElement.getAttribute("name")
    );
    leavingFinalTabbable = activeRadioGroup.includes(finalTabbable);
  }
  if (!leavingFinalTabbable) {
    return;
  }
  event.preventDefault();
  const target = tabbable[event.shiftKey ? tabbable.length - 1 : 0];
  if (target) {
    target.focus();
  }
}


//# sourceMappingURL=scope-tab.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-focus-trap/use-focus-trap.mjs
'use client';





function useFocusTrap(active = true) {
  const ref = (0,react.useRef)();
  const restoreAria = (0,react.useRef)(null);
  const focusNode = (node) => {
    let focusElement = node.querySelector("[data-autofocus]");
    if (!focusElement) {
      const children = Array.from(node.querySelectorAll(FOCUS_SELECTOR));
      focusElement = children.find(tabbable) || children.find(focusable) || null;
      if (!focusElement && focusable(node)) {
        focusElement = node;
      }
    }
    if (focusElement) {
      focusElement.focus({ preventScroll: true });
    } else if (true) {
      console.warn(
        "[@mantine/hooks/use-focus-trap] Failed to find focusable element within provided node",
        node
      );
    }
  };
  const setRef = (0,react.useCallback)(
    (node) => {
      if (!active) {
        return;
      }
      if (node === null) {
        if (restoreAria.current) {
          restoreAria.current();
          restoreAria.current = null;
        }
        return;
      }
      restoreAria.current = createAriaHider(node);
      if (ref.current === node) {
        return;
      }
      if (node) {
        setTimeout(() => {
          if (node.getRootNode()) {
            focusNode(node);
          } else if (true) {
            console.warn("[@mantine/hooks/use-focus-trap] Ref node is not part of the dom", node);
          }
        });
        ref.current = node;
      } else {
        ref.current = null;
      }
    },
    [active]
  );
  (0,react.useEffect)(() => {
    if (!active) {
      return void 0;
    }
    ref.current && setTimeout(() => focusNode(ref.current));
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && ref.current) {
        scopeTab(ref.current, event);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      if (restoreAria.current) {
        restoreAria.current();
      }
    };
  }, [active]);
  return setRef;
}


//# sourceMappingURL=use-focus-trap.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var use_merged_ref = __webpack_require__(37055);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs
var is_element = __webpack_require__(49178);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
;// ./node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.module.css.mjs
'use client';
var classes = {"root":"m_515a97f8"};


//# sourceMappingURL=VisuallyHidden.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/VisuallyHidden/VisuallyHidden.mjs
'use client';
















const defaultProps = {};
const VisuallyHidden = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("VisuallyHidden", defaultProps, _props);
  const { classNames, className, style, styles, unstyled, vars, ...others } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "VisuallyHidden",
    classes: classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { component: "span", ref, ...getStyles("root"), ...others });
});
VisuallyHidden.classes = classes;
VisuallyHidden.displayName = "@mantine/core/VisuallyHidden";


//# sourceMappingURL=VisuallyHidden.mjs.map

;// ./node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs
'use client';














function FocusTrap({
  children,
  active = true,
  refProp = "ref",
  innerRef
}) {
  const focusTrapRef = useFocusTrap(active);
  const ref = (0,use_merged_ref/* useMergedRef */.pc)(focusTrapRef, innerRef);
  if (!(0,is_element/* isElement */.v)(children)) {
    return children;
  }
  return (0,react.cloneElement)(children, { [refProp]: ref });
}
function FocusTrapInitialFocus(props) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(VisuallyHidden, { tabIndex: -1, "data-autofocus": true, ...props });
}
FocusTrap.displayName = "@mantine/core/FocusTrap";
FocusTrapInitialFocus.displayName = "@mantine/core/FocusTrapInitialFocus";
FocusTrap.InitialFocus = FocusTrapInitialFocus;


//# sourceMappingURL=FocusTrap.mjs.map


/***/ }),

/***/ 31074:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  _: () => (/* binding */ Image)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
;// ./node_modules/@mantine/core/esm/components/Image/Image.module.css.mjs
'use client';
var classes = {"root":"m_9e117634"};


//# sourceMappingURL=Image.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Image/Image.mjs
'use client';


















const defaultProps = {};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { radius, fit }) => ({
  root: {
    "--image-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
    "--image-object-fit": fit
  }
}));
const Image = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Image", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    onError,
    src,
    radius,
    fit,
    fallbackSrc,
    mod,
    ...others
  } = props;
  const [error, setError] = (0,react.useState)(!src);
  (0,react.useEffect)(() => setError(!src), [src]);
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Image",
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
  if (error && fallbackSrc) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        component: "img",
        ref,
        src: fallbackSrc,
        ...getStyles("root"),
        onError,
        mod: ["fallback", mod],
        ...others
      }
    );
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      component: "img",
      ref,
      ...getStyles("root"),
      src,
      onError: (event) => {
        onError?.(event);
        setError(true);
      },
      mod,
      ...others
    }
  );
});
Image.classes = classes;
Image.displayName = "@mantine/core/Image";


//# sourceMappingURL=Image.mjs.map


/***/ }),

/***/ 60720:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ Input)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var extract_style_props = __webpack_require__(63733);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
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

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.mjs + 1 modules
var use_id = __webpack_require__(66284);
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
  const idBase = (0,use_id/* useId */.B)(id);
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


/***/ }),

/***/ 82056:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  O: () => (/* binding */ InputBase)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Input/Input.mjs + 9 modules
var Input = __webpack_require__(60720);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/style-props/extract-style-props/extract-style-props.mjs
var extract_style_props = __webpack_require__(63733);
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





















const defaultProps = {
  __staticSelector: "InputBase",
  withAria: true
};
const InputBase = (0,polymorphic_factory/* polymorphicFactory */.v)((props, ref) => {
  const { inputProps, wrapperProps, ...others } = useInputProps("InputBase", defaultProps, props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Input/* Input */.p.Wrapper, { ...wrapperProps, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Input/* Input */.p, { ...inputProps, ...others, ref }) });
});
InputBase.classes = { ...Input/* Input */.p.classes, ...Input/* Input */.p.Wrapper.classes };
InputBase.displayName = "@mantine/core/InputBase";


//# sourceMappingURL=InputBase.mjs.map


/***/ }),

/***/ 82455:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Modal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
var get_default_z_index = __webpack_require__(68690);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var create_safe_context = __webpack_require__(46798);
;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBase.context.mjs
'use client';













const [ModalBaseProvider, useModalBaseContext] = (0,create_safe_context/* createSafeContext */.F)(
  "ModalBase component was not found in tree"
);


//# sourceMappingURL=ModalBase.context.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/use-modal-body-id.mjs
'use client';



function useModalBodyId() {
  const ctx = useModalBaseContext();
  (0,react.useEffect)(() => {
    ctx.setBodyMounted(true);
    return () => ctx.setBodyMounted(false);
  }, []);
  return ctx.getBodyId();
}


//# sourceMappingURL=use-modal-body-id.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBase.module.css.mjs
'use client';
var classes = {"title":"m_615af6c9","header":"m_b5489c3c","inner":"m_60c222c7","content":"m_fd1ab0aa","close":"m_606cb269","body":"m_5df29311"};


//# sourceMappingURL=ModalBase.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseBody.mjs
'use client';















const ModalBaseBody = (0,react.forwardRef)(
  ({ className, ...others }, ref) => {
    const bodyId = useModalBodyId();
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        ref,
        ...others,
        id: bodyId,
        className: (0,clsx/* default */.A)({ [classes.body]: !ctx.unstyled }, className)
      }
    );
  }
);
ModalBaseBody.displayName = "@mantine/core/ModalBaseBody";


//# sourceMappingURL=ModalBaseBody.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/Modal.context.mjs
'use client';













const [ModalProvider, useModalContext] = (0,create_safe_context/* createSafeContext */.F)(
  "Modal component was not found in tree"
);


//# sourceMappingURL=Modal.context.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/Modal.module.css.mjs
'use client';
var Modal_module_css_classes = {"root":"m_9df02822","content":"m_54c44539","inner":"m_1f958f16","header":"m_d0e2b9cd"};


//# sourceMappingURL=Modal.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalBody.mjs
'use client';























const defaultProps = {};
const ModalBody = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalBody", defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseBody,
    {
      ref,
      ...ctx.getStyles("body", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalBody.classes = Modal_module_css_classes;
ModalBody.displayName = "@mantine/core/ModalBody";


//# sourceMappingURL=ModalBody.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs + 2 modules
var CloseButton = __webpack_require__(80355);
;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseCloseButton.mjs
'use client';








const ModalBaseCloseButton = (0,react.forwardRef)(
  ({ className, onClick, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      CloseButton/* CloseButton */.J,
      {
        ref,
        ...others,
        onClick: (event) => {
          ctx.onClose();
          onClick?.(event);
        },
        className: (0,clsx/* default */.A)({ [classes.close]: !ctx.unstyled }, className),
        unstyled: ctx.unstyled
      }
    );
  }
);
ModalBaseCloseButton.displayName = "@mantine/core/ModalBaseCloseButton";


//# sourceMappingURL=ModalBaseCloseButton.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalCloseButton.mjs
'use client';























const ModalCloseButton_defaultProps = {};
const ModalCloseButton = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalCloseButton", ModalCloseButton_defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseCloseButton,
    {
      ref,
      ...ctx.getStyles("close", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalCloseButton.classes = Modal_module_css_classes;
ModalCloseButton.displayName = "@mantine/core/ModalCloseButton";


//# sourceMappingURL=ModalCloseButton.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs + 6 modules
var FocusTrap = __webpack_require__(10875);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
;// ./node_modules/@mantine/core/esm/components/Paper/Paper.module.css.mjs
'use client';
var Paper_module_css_classes = {"root":"m_1b7284a3"};


//# sourceMappingURL=Paper.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Paper/Paper.mjs
'use client';


















const Paper_defaultProps = {};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { radius, shadow }) => ({
  root: {
    "--paper-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
    "--paper-shadow": (0,get_size/* getShadow */.dh)(shadow)
  }
}));
const Paper = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Paper", Paper_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    withBorder,
    vars,
    radius,
    shadow,
    variant,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Paper",
    props,
    classes: Paper_module_css_classes,
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
      ref,
      mod: [{ "data-with-border": withBorder }, mod],
      ...getStyles("root"),
      variant,
      ...others
    }
  );
});
Paper.classes = Paper_module_css_classes;
Paper.displayName = "@mantine/core/Paper";


//# sourceMappingURL=Paper.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Transition/Transition.mjs + 3 modules
var Transition = __webpack_require__(73087);
;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseContent.mjs
'use client';










const ModalBaseContent = (0,react.forwardRef)(
  ({ transitionProps, className, innerProps, onKeyDown, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Transition/* Transition */.e,
      {
        mounted: ctx.opened,
        transition: "pop",
        ...ctx.transitionProps,
        ...transitionProps,
        children: (transitionStyles) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
          "div",
          {
            ...innerProps,
            className: (0,clsx/* default */.A)({ [classes.inner]: !ctx.unstyled }, innerProps.className),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.s, { active: ctx.opened && ctx.trapFocus, innerRef: ref, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Paper,
              {
                ...others,
                component: "section",
                role: "dialog",
                tabIndex: -1,
                "aria-modal": true,
                "aria-describedby": ctx.bodyMounted ? ctx.getBodyId() : void 0,
                "aria-labelledby": ctx.titleMounted ? ctx.getTitleId() : void 0,
                style: [style, transitionStyles],
                className: (0,clsx/* default */.A)({ [classes.content]: !ctx.unstyled }, className),
                unstyled: ctx.unstyled,
                children: others.children
              }
            ) })
          }
        )
      }
    );
  }
);
ModalBaseContent.displayName = "@mantine/core/ModalBaseContent";


//# sourceMappingURL=ModalBaseContent.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/NativeScrollArea.mjs
'use client';


function NativeScrollArea({ children }) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children });
}


//# sourceMappingURL=NativeScrollArea.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalContent.mjs
'use client';

























const ModalContent_defaultProps = {};
const ModalContent = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalContent", ModalContent_defaultProps, _props);
  const { classNames, className, style, styles, vars, children, ...others } = props;
  const ctx = useModalContext();
  const Scroll = ctx.scrollAreaComponent || NativeScrollArea;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseContent,
    {
      ...ctx.getStyles("content", { className, style, styles, classNames }),
      innerProps: ctx.getStyles("inner", { className, style, styles, classNames }),
      "data-full-screen": ctx.fullScreen || void 0,
      "data-modal-content": true,
      ref,
      ...others,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Scroll,
        {
          style: {
            maxHeight: ctx.fullScreen ? "100dvh" : `calc(100dvh - (${(0,rem/* rem */.D)(ctx.yOffset)} * 2))`
          },
          children
        }
      )
    }
  );
});
ModalContent.classes = Modal_module_css_classes;
ModalContent.displayName = "@mantine/core/ModalContent";


//# sourceMappingURL=ModalContent.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseHeader.mjs
'use client';














const ModalBaseHeader = (0,react.forwardRef)(
  ({ className, ...others }, ref) => {
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        component: "header",
        ref,
        className: (0,clsx/* default */.A)({ [classes.header]: !ctx.unstyled }, className),
        ...others
      }
    );
  }
);
ModalBaseHeader.displayName = "@mantine/core/ModalBaseHeader";


//# sourceMappingURL=ModalBaseHeader.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalHeader.mjs
'use client';























const ModalHeader_defaultProps = {};
const ModalHeader = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalHeader", ModalHeader_defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseHeader,
    {
      ref,
      ...ctx.getStyles("header", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalHeader.classes = Modal_module_css_classes;
ModalHeader.displayName = "@mantine/core/ModalHeader";


//# sourceMappingURL=ModalHeader.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(22662);
;// ./node_modules/@mantine/core/esm/components/ModalBase/use-modal-transition.mjs
'use client';


const DEFAULT_TRANSITION = {
  duration: 200,
  timingFunction: "ease",
  transition: "fade"
};
function useModalTransition(transitionOverride) {
  const ctx = useModalBaseContext();
  return { ...DEFAULT_TRANSITION, ...ctx.transitionProps, ...transitionOverride };
}


//# sourceMappingURL=use-modal-transition.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseOverlay.mjs
'use client';








const ModalBaseOverlay = (0,react.forwardRef)(
  ({ onClick, transitionProps, style, ...others }, ref) => {
    const ctx = useModalBaseContext();
    const transition = useModalTransition(transitionProps);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Transition/* Transition */.e, { mounted: ctx.opened, ...transition, transition: "fade", children: (transitionStyles) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Overlay/* Overlay */.h,
      {
        ref,
        fixed: true,
        style: [style, transitionStyles],
        zIndex: ctx.zIndex,
        unstyled: ctx.unstyled,
        onClick: (event) => {
          onClick?.(event);
          ctx.closeOnClickOutside && ctx.onClose();
        },
        ...others
      }
    ) });
  }
);
ModalBaseOverlay.displayName = "@mantine/core/ModalBaseOverlay";


//# sourceMappingURL=ModalBaseOverlay.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalOverlay.mjs
'use client';























const ModalOverlay_defaultProps = {};
const ModalOverlay = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalOverlay", ModalOverlay_defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseOverlay,
    {
      ref,
      ...ctx.getStyles("overlay", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalOverlay.classes = Modal_module_css_classes;
ModalOverlay.displayName = "@mantine/core/ModalOverlay";


//# sourceMappingURL=ModalOverlay.mjs.map

// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es2015/Combination.js + 14 modules
var Combination = __webpack_require__(95805);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs + 1 modules
var OptionalPortal = __webpack_require__(39268);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.mjs + 1 modules
var use_id = __webpack_require__(66284);
;// ./node_modules/@mantine/hooks/esm/use-window-event/use-window-event.mjs
'use client';


function useWindowEvent(type, listener, options) {
  (0,react.useEffect)(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
}


//# sourceMappingURL=use-window-event.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
var use_focus_return = __webpack_require__(72273);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs + 1 modules
var use_reduced_motion = __webpack_require__(36311);
;// ./node_modules/@mantine/core/esm/components/ModalBase/use-lock-scroll.mjs
'use client';



function useLockScroll({ opened, transitionDuration }) {
  const [shouldLockScroll, setShouldLockScroll] = (0,react.useState)(opened);
  const timeout = (0,react.useRef)();
  const reduceMotion = (0,use_reduced_motion/* useReducedMotion */.I)();
  const _transitionDuration = reduceMotion ? 0 : transitionDuration;
  (0,react.useEffect)(() => {
    if (opened) {
      setShouldLockScroll(true);
      window.clearTimeout(timeout.current);
    } else if (_transitionDuration === 0) {
      setShouldLockScroll(false);
    } else {
      timeout.current = window.setTimeout(() => setShouldLockScroll(false), _transitionDuration);
    }
    return () => window.clearTimeout(timeout.current);
  }, [opened, _transitionDuration]);
  return shouldLockScroll;
}


//# sourceMappingURL=use-lock-scroll.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/use-modal.mjs
'use client';




function useModal({
  id,
  transitionProps,
  opened,
  trapFocus,
  closeOnEscape,
  onClose,
  returnFocus
}) {
  const _id = (0,use_id/* useId */.B)(id);
  const [titleMounted, setTitleMounted] = (0,react.useState)(false);
  const [bodyMounted, setBodyMounted] = (0,react.useState)(false);
  const transitionDuration = typeof transitionProps?.duration === "number" ? transitionProps?.duration : 200;
  const shouldLockScroll = useLockScroll({ opened, transitionDuration });
  useWindowEvent(
    "keydown",
    (event) => {
      if (event.key === "Escape" && closeOnEscape && opened) {
        const shouldTrigger = event.target?.getAttribute("data-mantine-stop-propagation") !== "true";
        shouldTrigger && onClose();
      }
    },
    { capture: true }
  );
  (0,use_focus_return/* useFocusReturn */.E)({ opened, shouldReturnFocus: trapFocus && returnFocus });
  return {
    _id,
    titleMounted,
    bodyMounted,
    shouldLockScroll,
    setTitleMounted,
    setBodyMounted
  };
}


//# sourceMappingURL=use-modal.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBase.mjs
'use client';



















const ModalBase = (0,react.forwardRef)(
  ({
    keepMounted,
    opened,
    onClose,
    id,
    transitionProps,
    trapFocus,
    closeOnEscape,
    returnFocus,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    lockScroll,
    children,
    zIndex,
    shadow,
    padding,
    __vars,
    unstyled,
    removeScrollProps,
    ...others
  }, ref) => {
    const { _id, titleMounted, bodyMounted, shouldLockScroll, setTitleMounted, setBodyMounted } = useModal({ id, transitionProps, opened, trapFocus, closeOnEscape, onClose, returnFocus });
    const { key: removeScrollKey, ...otherRemoveScrollProps } = removeScrollProps || {};
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(OptionalPortal/* OptionalPortal */.r, { ...portalProps, withinPortal, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ModalBaseProvider,
      {
        value: {
          opened,
          onClose,
          closeOnClickOutside,
          transitionProps: { ...transitionProps, keepMounted },
          getTitleId: () => `${_id}-title`,
          getBodyId: () => `${_id}-body`,
          titleMounted,
          bodyMounted,
          setTitleMounted,
          setBodyMounted,
          trapFocus,
          closeOnEscape,
          zIndex,
          unstyled
        },
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
          Combination/* default */.A,
          {
            enabled: shouldLockScroll && lockScroll,
            ...otherRemoveScrollProps,
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
              Box/* Box */.a,
              {
                ref,
                ...others,
                __vars: {
                  ...__vars,
                  "--mb-z-index": (zIndex || (0,get_default_z_index/* getDefaultZIndex */.I)("modal")).toString(),
                  "--mb-shadow": (0,get_size/* getShadow */.dh)(shadow),
                  "--mb-padding": (0,get_size/* getSpacing */.GY)(padding)
                },
                children
              }
            )
          },
          removeScrollKey
        )
      }
    ) });
  }
);
ModalBase.displayName = "@mantine/core/ModalBase";


//# sourceMappingURL=ModalBase.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalRoot.mjs
'use client';




























const ModalRoot_defaultProps = {
  __staticSelector: "Modal",
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.I)("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  yOffset: "5dvh"
};
const ModalRoot_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)(
  (_, { radius, size, yOffset, xOffset }) => ({
    root: {
      "--modal-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
      "--modal-size": (0,get_size/* getSize */.YC)(size, "modal-size"),
      "--modal-y-offset": (0,rem/* rem */.D)(yOffset),
      "--modal-x-offset": (0,rem/* rem */.D)(xOffset)
    }
  })
);
const ModalRoot = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalRoot", ModalRoot_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    yOffset,
    scrollAreaComponent,
    radius,
    fullScreen,
    centered,
    xOffset,
    __staticSelector,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: __staticSelector,
    classes: Modal_module_css_classes,
    props,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: ModalRoot_varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalProvider, { value: { yOffset, scrollAreaComponent, getStyles, fullScreen }, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBase,
    {
      ref,
      ...getStyles("root"),
      "data-full-screen": fullScreen || void 0,
      "data-centered": centered || void 0,
      unstyled,
      ...others
    }
  ) });
});
ModalRoot.classes = Modal_module_css_classes;
ModalRoot.displayName = "@mantine/core/ModalRoot";


//# sourceMappingURL=ModalRoot.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/use-modal-title-id.mjs
'use client';



function useModalTitle() {
  const ctx = useModalBaseContext();
  (0,react.useEffect)(() => {
    ctx.setTitleMounted(true);
    return () => ctx.setTitleMounted(false);
  }, []);
  return ctx.getTitleId();
}


//# sourceMappingURL=use-modal-title-id.mjs.map

;// ./node_modules/@mantine/core/esm/components/ModalBase/ModalBaseTitle.mjs
'use client';















const ModalBaseTitle = (0,react.forwardRef)(
  ({ className, ...others }, ref) => {
    const id = useModalTitle();
    const ctx = useModalBaseContext();
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        component: "h2",
        ref,
        className: (0,clsx/* default */.A)({ [classes.title]: !ctx.unstyled }, className),
        ...others,
        id
      }
    );
  }
);
ModalBaseTitle.displayName = "@mantine/core/ModalBaseTitle";


//# sourceMappingURL=ModalBaseTitle.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/ModalTitle.mjs
'use client';























const ModalTitle_defaultProps = {};
const ModalTitle = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ModalTitle", ModalTitle_defaultProps, _props);
  const { classNames, className, style, styles, vars, ...others } = props;
  const ctx = useModalContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ModalBaseTitle,
    {
      ref,
      ...ctx.getStyles("title", { classNames, style, styles, className }),
      ...others
    }
  );
});
ModalTitle.classes = Modal_module_css_classes;
ModalTitle.displayName = "@mantine/core/ModalTitle";


//# sourceMappingURL=ModalTitle.mjs.map

;// ./node_modules/@mantine/core/esm/components/Modal/Modal.mjs
'use client';























const Modal_defaultProps = {
  closeOnClickOutside: true,
  withinPortal: true,
  lockScroll: true,
  trapFocus: true,
  returnFocus: true,
  closeOnEscape: true,
  keepMounted: false,
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.I)("modal"),
  transitionProps: { duration: 200, transition: "fade-down" },
  withOverlay: true,
  withCloseButton: true
};
const Modal = (0,factory/* factory */.P9)((_props, ref) => {
  const {
    title,
    withOverlay,
    overlayProps,
    withCloseButton,
    closeButtonProps,
    children,
    radius,
    ...others
  } = (0,use_props/* useProps */.Y)("Modal", Modal_defaultProps, _props);
  const hasHeader = !!title || withCloseButton;
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(ModalRoot, { ref, radius, ...others, children: [
    withOverlay && /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalOverlay, { ...overlayProps }),
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(ModalContent, { radius, children: [
      hasHeader && /* @__PURE__ */ (0,jsx_runtime.jsxs)(ModalHeader, { children: [
        title && /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalTitle, { children: title }),
        withCloseButton && /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalCloseButton, { ...closeButtonProps })
      ] }),
      /* @__PURE__ */ (0,jsx_runtime.jsx)(ModalBody, { children })
    ] })
  ] });
});
Modal.classes = Modal_module_css_classes;
Modal.displayName = "@mantine/core/Modal";
Modal.Root = ModalRoot;
Modal.Overlay = ModalOverlay;
Modal.Content = ModalContent;
Modal.Body = ModalBody;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;
Modal.CloseButton = ModalCloseButton;


//# sourceMappingURL=Modal.mjs.map


/***/ }),

/***/ 22662:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ Overlay)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
var get_default_z_index = __webpack_require__(68690);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
var rgba = __webpack_require__(97170);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
;// ./node_modules/@mantine/core/esm/components/Overlay/Overlay.module.css.mjs
'use client';
var classes = {"root":"m_9814e45f"};


//# sourceMappingURL=Overlay.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs
'use client';





















const defaultProps = {
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.I)("modal")
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)(
  (_, { gradient, color, backgroundOpacity, blur, radius, zIndex }) => ({
    root: {
      "--overlay-bg": gradient || (color !== void 0 || backgroundOpacity !== void 0) && (0,rgba/* rgba */.B)(color || "#000", backgroundOpacity ?? 0.6) || void 0,
      "--overlay-filter": blur ? `blur(${(0,rem/* rem */.D)(blur)})` : void 0,
      "--overlay-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
      "--overlay-z-index": zIndex?.toString()
    }
  })
);
const Overlay = (0,polymorphic_factory/* polymorphicFactory */.v)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Overlay", defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    vars,
    fixed,
    center,
    children,
    radius,
    zIndex,
    gradient,
    blur,
    color,
    backgroundOpacity,
    mod,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "Overlay",
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
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { ref, ...getStyles("root"), mod: [{ center, fixed }, mod], ...others, children });
});
Overlay.classes = classes;
Overlay.displayName = "@mantine/core/Overlay";


//# sourceMappingURL=Overlay.mjs.map


/***/ }),

/***/ 39268:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ OptionalPortal)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(45585);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var use_merged_ref = __webpack_require__(37055);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
;// ./node_modules/@mantine/core/esm/components/Portal/Portal.mjs
'use client';














function createPortalNode(props) {
  const node = document.createElement("div");
  node.setAttribute("data-portal", "true");
  typeof props.className === "string" && node.classList.add(...props.className.split(" ").filter(Boolean));
  typeof props.style === "object" && Object.assign(node.style, props.style);
  typeof props.id === "string" && node.setAttribute("id", props.id);
  return node;
}
const defaultProps = {};
const Portal = (0,react.forwardRef)((props, ref) => {
  const { children, target, ...others } = (0,use_props/* useProps */.Y)("Portal", defaultProps, props);
  const [mounted, setMounted] = (0,react.useState)(false);
  const nodeRef = (0,react.useRef)(null);
  (0,use_isomorphic_effect/* useIsomorphicEffect */.o)(() => {
    setMounted(true);
    nodeRef.current = !target ? createPortalNode(others) : typeof target === "string" ? document.querySelector(target) : target;
    (0,use_merged_ref/* assignRef */.bl)(ref, nodeRef.current);
    if (!target && nodeRef.current) {
      document.body.appendChild(nodeRef.current);
    }
    return () => {
      if (!target && nodeRef.current) {
        document.body.removeChild(nodeRef.current);
      }
    };
  }, [target]);
  if (!mounted || !nodeRef.current) {
    return null;
  }
  return (0,react_dom.createPortal)(/* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children }), nodeRef.current);
});
Portal.displayName = "@mantine/core/Portal";


//# sourceMappingURL=Portal.mjs.map

;// ./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs
'use client';



function OptionalPortal({ withinPortal = true, children, ...others }) {
  if (withinPortal) {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(Portal, { ...others, children });
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children });
}
OptionalPortal.displayName = "@mantine/core/OptionalPortal";


//# sourceMappingURL=OptionalPortal.mjs.map


/***/ }),

/***/ 81387:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ Select)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-id/use-id.mjs + 1 modules
var use_id = __webpack_require__(66284);
;// ./node_modules/@mantine/hooks/esm/use-uncontrolled/use-uncontrolled.mjs
'use client';


function useUncontrolled({
  value,
  defaultValue,
  finalValue,
  onChange = () => {
  }
}) {
  const [uncontrolledValue, setUncontrolledValue] = (0,react.useState)(
    defaultValue !== void 0 ? defaultValue : finalValue
  );
  const handleUncontrolledChange = (val, ...payload) => {
    setUncontrolledValue(val);
    onChange?.(val, ...payload);
  };
  if (value !== void 0) {
    return [value, onChange, true];
  }
  return [uncontrolledValue, handleUncontrolledChange, false];
}


//# sourceMappingURL=use-uncontrolled.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-previous/use-previous.mjs
'use client';


function usePrevious(value) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}


//# sourceMappingURL=use-previous.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
var resolve_class_names = __webpack_require__(74593);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
var resolve_styles = __webpack_require__(44812);
;// ./node_modules/@mantine/core/esm/core/styles-api/use-resolved-styles-api/use-resolved-styles-api.mjs
'use client';











function useResolvedStylesApi({
  classNames,
  styles,
  props,
  stylesCtx
}) {
  const theme = (0,MantineThemeProvider/* useMantineTheme */.xd)();
  return {
    resolvedClassNames: (0,resolve_class_names/* resolveClassNames */.J)({
      theme,
      classNames,
      props,
      stylesCtx: stylesCtx || void 0
    }),
    resolvedStyles: (0,resolve_styles/* resolveStyles */.N)({
      theme,
      styles,
      props,
      stylesCtx: stylesCtx || void 0
    })
  };
}


//# sourceMappingURL=use-resolved-styles-api.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
;// ./node_modules/@mantine/core/esm/components/Combobox/get-parsed-combobox-data/get-parsed-combobox-data.mjs
'use client';
function parseItem(item) {
  if (typeof item === "string") {
    return { value: item, label: item };
  }
  if ("value" in item && !("label" in item)) {
    return { value: item.value, label: item.value, disabled: item.disabled };
  }
  if (typeof item === "number") {
    return { value: item.toString(), label: item.toString() };
  }
  if ("group" in item) {
    return {
      group: item.group,
      items: item.items.map((i) => parseItem(i))
    };
  }
  return item;
}
function getParsedComboboxData(data) {
  if (!data) {
    return [];
  }
  return data.map((item) => parseItem(item));
}


//# sourceMappingURL=get-parsed-combobox-data.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/get-options-lockup/get-options-lockup.mjs
'use client';
function getOptionsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return { ...acc, ...getOptionsLockup(item.items) };
    }
    acc[item.value] = item;
    return acc;
  }, {});
}
function getLabelsLockup(options) {
  return options.reduce((acc, item) => {
    if ("group" in item) {
      return { ...acc, ...getLabelsLockup(item.items) };
    }
    acc[item.label] = item;
    return acc;
  }, {});
}


//# sourceMappingURL=get-options-lockup.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
;// ./node_modules/@mantine/hooks/esm/use-click-outside/use-click-outside.mjs
'use client';


const DEFAULT_EVENTS = ["mousedown", "touchstart"];
function useClickOutside(handler, events, nodes) {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = target?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every((node) => !!node && !event.composedPath().includes(node));
        shouldTrigger && !shouldIgnore && handler();
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach((fn) => document.addEventListener(fn, listener));
    return () => {
      (events || DEFAULT_EVENTS).forEach((fn) => document.removeEventListener(fn, listener));
    };
  }, [ref, handler, nodes]);
  return ref;
}


//# sourceMappingURL=use-click-outside.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-default-z-index/get-default-z-index.mjs
var get_default_z_index = __webpack_require__(68690);
;// ./node_modules/@mantine/core/esm/core/DirectionProvider/DirectionProvider.mjs
'use client';




const DirectionContext = (0,react.createContext)({
  dir: "ltr",
  toggleDirection: () => {
  },
  setDirection: () => {
  }
});
function useDirection() {
  return (0,react.useContext)(DirectionContext);
}
function DirectionProvider({
  children,
  initialDirection = "ltr",
  detectDirection = true
}) {
  const [dir, setDir] = useState(initialDirection);
  const setDirection = (direction) => {
    setDir(direction);
    document.documentElement.setAttribute("dir", direction);
  };
  const toggleDirection = () => setDirection(dir === "ltr" ? "rtl" : "ltr");
  useIsomorphicEffect(() => {
    if (detectDirection) {
      const direction = document.documentElement.getAttribute("dir");
      if (direction === "rtl" || direction === "ltr") {
        setDirection(direction);
      }
    }
  }, []);
  return /* @__PURE__ */ jsx(DirectionContext.Provider, { value: { dir, toggleDirection, setDirection }, children });
}


//# sourceMappingURL=DirectionProvider.mjs.map

;// ./node_modules/@mantine/core/esm/components/Floating/get-floating-position/get-floating-position.mjs
'use client';
function getFloatingPosition(dir, position) {
  if (dir === "rtl" && (position.includes("right") || position.includes("left"))) {
    const [side, placement] = position.split("-");
    const flippedPosition = side === "right" ? "left" : "right";
    return placement === void 0 ? flippedPosition : `${flippedPosition}-${placement}`;
  }
  return position;
}


//# sourceMappingURL=get-floating-position.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/create-safe-context/create-safe-context.mjs
var create_safe_context = __webpack_require__(46798);
;// ./node_modules/@mantine/core/esm/components/Popover/Popover.context.mjs
'use client';













const [PopoverContextProvider, usePopoverContext] = (0,create_safe_context/* createSafeContext */.F)(
  "Popover component was not found in the tree"
);


//# sourceMappingURL=Popover.context.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-focus-return/use-focus-return.mjs
var use_focus_return = __webpack_require__(72273);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-merged-ref/use-merged-ref.mjs
var use_merged_ref = __webpack_require__(37055);
;// ./node_modules/@mantine/core/esm/core/utils/noop/noop.mjs
'use client';
const noop = () => {
};


//# sourceMappingURL=noop.mjs.map

;// ./node_modules/@mantine/core/esm/core/utils/close-on-escape/close-on-escape.mjs
'use client';


function closeOnEscape(callback, options = { active: true }) {
  if (typeof callback !== "function" || !options.active) {
    return options.onKeyDown || noop;
  }
  return (event) => {
    if (event.key === "Escape") {
      callback(event);
      options.onTrigger?.();
    }
  };
}


//# sourceMappingURL=close-on-escape.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
;// ./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/get-arrow-position-styles.mjs
'use client';
function horizontalSide(placement, arrowY, arrowOffset, arrowPosition) {
  if (placement === "center" || arrowPosition === "center") {
    return { top: arrowY };
  }
  if (placement === "end") {
    return { bottom: arrowOffset };
  }
  if (placement === "start") {
    return { top: arrowOffset };
  }
  return {};
}
function verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir) {
  if (placement === "center" || arrowPosition === "center") {
    return { left: arrowX };
  }
  if (placement === "end") {
    return { [dir === "ltr" ? "right" : "left"]: arrowOffset };
  }
  if (placement === "start") {
    return { [dir === "ltr" ? "left" : "right"]: arrowOffset };
  }
  return {};
}
const radiusByFloatingSide = {
  bottom: "borderTopLeftRadius",
  left: "borderTopRightRadius",
  right: "borderBottomLeftRadius",
  top: "borderBottomRightRadius"
};
function getArrowPositionStyles({
  position,
  arrowSize,
  arrowOffset,
  arrowRadius,
  arrowPosition,
  arrowX,
  arrowY,
  dir
}) {
  const [side, placement = "center"] = position.split("-");
  const baseStyles = {
    width: arrowSize,
    height: arrowSize,
    transform: "rotate(45deg)",
    position: "absolute",
    [radiusByFloatingSide[side]]: arrowRadius
  };
  const arrowPlacement = -arrowSize / 2;
  if (side === "left") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      right: arrowPlacement,
      borderLeftColor: "transparent",
      borderBottomColor: "transparent"
    };
  }
  if (side === "right") {
    return {
      ...baseStyles,
      ...horizontalSide(placement, arrowY, arrowOffset, arrowPosition),
      left: arrowPlacement,
      borderRightColor: "transparent",
      borderTopColor: "transparent"
    };
  }
  if (side === "top") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      bottom: arrowPlacement,
      borderTopColor: "transparent",
      borderLeftColor: "transparent"
    };
  }
  if (side === "bottom") {
    return {
      ...baseStyles,
      ...verticalSide(placement, arrowX, arrowOffset, arrowPosition, dir),
      top: arrowPlacement,
      borderBottomColor: "transparent",
      borderRightColor: "transparent"
    };
  }
  return {};
}


//# sourceMappingURL=get-arrow-position-styles.mjs.map

;// ./node_modules/@mantine/core/esm/components/Floating/FloatingArrow/FloatingArrow.mjs
'use client';













const FloatingArrow = (0,react.forwardRef)(
  ({
    position,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    visible,
    arrowX,
    arrowY,
    style,
    ...others
  }, ref) => {
    const { dir } = useDirection();
    if (!visible) {
      return null;
    }
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      "div",
      {
        ...others,
        ref,
        style: {
          ...style,
          ...getArrowPositionStyles({
            position,
            arrowSize,
            arrowOffset,
            arrowRadius,
            arrowPosition,
            dir,
            arrowX,
            arrowY
          })
        }
      }
    );
  }
);
FloatingArrow.displayName = "@mantine/core/FloatingArrow";


//# sourceMappingURL=FloatingArrow.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/FocusTrap/FocusTrap.mjs + 6 modules
var FocusTrap = __webpack_require__(10875);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Portal/OptionalPortal.mjs + 1 modules
var OptionalPortal = __webpack_require__(39268);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Transition/Transition.mjs + 3 modules
var Transition = __webpack_require__(73087);
;// ./node_modules/@mantine/core/esm/components/Popover/Popover.module.css.mjs
'use client';
var classes = {"dropdown":"m_38a85659","arrow":"m_a31dc6c1"};


//# sourceMappingURL=Popover.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Popover/PopoverDropdown/PopoverDropdown.mjs
'use client';

























const defaultProps = {};
const PopoverDropdown = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("PopoverDropdown", defaultProps, _props);
  const {
    className,
    style,
    vars,
    children,
    onKeyDownCapture,
    variant,
    classNames,
    styles,
    ...others
  } = props;
  const ctx = usePopoverContext();
  const returnFocus = (0,use_focus_return/* useFocusReturn */.E)({
    opened: ctx.opened,
    shouldReturnFocus: ctx.returnFocus
  });
  const accessibleProps = ctx.withRoles ? {
    "aria-labelledby": ctx.getTargetId(),
    id: ctx.getDropdownId(),
    role: "dialog",
    tabIndex: -1
  } : {};
  const mergedRef = (0,use_merged_ref/* useMergedRef */.pc)(ref, ctx.floating);
  if (ctx.disabled) {
    return null;
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(OptionalPortal/* OptionalPortal */.r, { ...ctx.portalProps, withinPortal: ctx.withinPortal, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Transition/* Transition */.e,
    {
      mounted: ctx.opened,
      ...ctx.transitionProps,
      transition: ctx.transitionProps?.transition || "fade",
      duration: ctx.transitionProps?.duration ?? 150,
      keepMounted: ctx.keepMounted,
      exitDuration: typeof ctx.transitionProps?.exitDuration === "number" ? ctx.transitionProps.exitDuration : ctx.transitionProps?.duration,
      children: (transitionStyles) => /* @__PURE__ */ (0,jsx_runtime.jsx)(FocusTrap/* FocusTrap */.s, { active: ctx.trapFocus && ctx.opened, innerRef: mergedRef, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(
        Box/* Box */.a,
        {
          ...accessibleProps,
          ...others,
          variant,
          onKeyDownCapture: closeOnEscape(ctx.onClose, {
            active: ctx.closeOnEscape,
            onTrigger: returnFocus,
            onKeyDown: onKeyDownCapture
          }),
          "data-position": ctx.placement,
          "data-fixed": ctx.floatingStrategy === "fixed" || void 0,
          ...ctx.getStyles("dropdown", {
            className,
            props,
            classNames,
            styles,
            style: [
              {
                ...transitionStyles,
                zIndex: ctx.zIndex,
                top: ctx.y ?? 0,
                left: ctx.x ?? 0,
                width: ctx.width === "target" ? void 0 : (0,rem/* rem */.D)(ctx.width)
              },
              style
            ]
          }),
          children: [
            children,
            /* @__PURE__ */ (0,jsx_runtime.jsx)(
              FloatingArrow,
              {
                ref: ctx.arrowRef,
                arrowX: ctx.arrowX,
                arrowY: ctx.arrowY,
                visible: ctx.withArrow,
                position: ctx.placement,
                arrowSize: ctx.arrowSize,
                arrowRadius: ctx.arrowRadius,
                arrowOffset: ctx.arrowOffset,
                arrowPosition: ctx.arrowPosition,
                ...ctx.getStyles("arrow", {
                  props,
                  classNames,
                  styles
                })
              }
            )
          ]
        }
      ) })
    }
  ) });
});
PopoverDropdown.classes = classes;
PopoverDropdown.displayName = "@mantine/core/PopoverDropdown";


//# sourceMappingURL=PopoverDropdown.mjs.map

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/is-element/is-element.mjs
var is_element = __webpack_require__(49178);
;// ./node_modules/@mantine/core/esm/components/Popover/PopoverTarget/PopoverTarget.mjs
'use client';
















const PopoverTarget_defaultProps = {
  refProp: "ref",
  popupType: "dialog"
};
const PopoverTarget = (0,factory/* factory */.P9)((props, ref) => {
  const { children, refProp, popupType, ...others } = (0,use_props/* useProps */.Y)(
    "PopoverTarget",
    PopoverTarget_defaultProps,
    props
  );
  if (!(0,is_element/* isElement */.v)(children)) {
    throw new Error(
      "Popover.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const forwardedProps = others;
  const ctx = usePopoverContext();
  const targetRef = (0,use_merged_ref/* useMergedRef */.pc)(ctx.reference, children.ref, ref);
  const accessibleProps = ctx.withRoles ? {
    "aria-haspopup": popupType,
    "aria-expanded": ctx.opened,
    "aria-controls": ctx.getDropdownId(),
    id: ctx.getTargetId()
  } : {};
  return (0,react.cloneElement)(children, {
    ...forwardedProps,
    ...accessibleProps,
    ...ctx.targetProps,
    className: (0,clsx/* default */.A)(ctx.targetProps.className, forwardedProps.className, children.props.className),
    [refProp]: targetRef,
    ...!ctx.controlled ? { onClick: ctx.onToggle } : null
  });
});
PopoverTarget.displayName = "@mantine/core/PopoverTarget";


//# sourceMappingURL=PopoverTarget.mjs.map

// EXTERNAL MODULE: ./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
var floating_ui_react_dom = __webpack_require__(34743);
// EXTERNAL MODULE: ./node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var floating_ui_react = __webpack_require__(58689);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
var use_did_update = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs + 2 modules
var floating_ui_dom = __webpack_require__(7315);
;// ./node_modules/@mantine/core/esm/components/Floating/use-floating-auto-update.mjs
'use client';




function useFloatingAutoUpdate({
  opened,
  floating,
  position,
  positionDependencies
}) {
  const [delayedUpdate, setDelayedUpdate] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    if (floating.refs.reference.current && floating.refs.floating.current && opened) {
      return (0,floating_ui_dom/* autoUpdate */.ll)(
        floating.refs.reference.current,
        floating.refs.floating.current,
        floating.update
      );
    }
    return void 0;
  }, [
    floating.refs.reference.current,
    floating.refs.floating.current,
    opened,
    delayedUpdate,
    position
  ]);
  (0,use_did_update/* useDidUpdate */.C)(() => {
    floating.update();
  }, positionDependencies);
  (0,use_did_update/* useDidUpdate */.C)(() => {
    setDelayedUpdate((c) => c + 1);
  }, [opened]);
}


//# sourceMappingURL=use-floating-auto-update.mjs.map

;// ./node_modules/@mantine/core/esm/components/Popover/use-popover.mjs
'use client';






function getDefaultMiddlewares(middlewares) {
  if (middlewares === void 0) {
    return { shift: true, flip: true };
  }
  const result = { ...middlewares };
  if (middlewares.shift === void 0) {
    result.shift = true;
  }
  if (middlewares.flip === void 0) {
    result.flip = true;
  }
  return result;
}
function getPopoverMiddlewares(options, getFloating) {
  const middlewaresOptions = getDefaultMiddlewares(options.middlewares);
  const middlewares = [(0,floating_ui_react_dom/* offset */.cY)(options.offset)];
  if (middlewaresOptions.shift) {
    middlewares.push(
      (0,floating_ui_react_dom/* shift */.BN)(
        typeof middlewaresOptions.shift === "boolean" ? { limiter: (0,floating_ui_react_dom/* limitShift */.ER)(), padding: 5 } : { limiter: (0,floating_ui_react_dom/* limitShift */.ER)(), padding: 5, ...middlewaresOptions.shift }
      )
    );
  }
  if (middlewaresOptions.flip) {
    middlewares.push(
      typeof middlewaresOptions.flip === "boolean" ? (0,floating_ui_react_dom/* flip */.UU)() : (0,floating_ui_react_dom/* flip */.UU)(middlewaresOptions.flip)
    );
  }
  if (middlewaresOptions.inline) {
    middlewares.push(
      typeof middlewaresOptions.inline === "boolean" ? (0,floating_ui_react_dom/* inline */.mG)() : (0,floating_ui_react_dom/* inline */.mG)(middlewaresOptions.inline)
    );
  }
  middlewares.push((0,floating_ui_react_dom/* arrow */.UE)({ element: options.arrowRef, padding: options.arrowOffset }));
  if (middlewaresOptions.size || options.width === "target") {
    middlewares.push(
      (0,floating_ui_react_dom/* size */.Ej)({
        ...typeof middlewaresOptions.size === "boolean" ? {} : middlewaresOptions.size,
        apply({ rects, availableWidth, availableHeight, ...rest }) {
          const floating = getFloating();
          const styles = floating.refs.floating.current?.style ?? {};
          if (middlewaresOptions.size) {
            if (typeof middlewaresOptions.size === "object" && !!middlewaresOptions.size.apply) {
              middlewaresOptions.size.apply({ rects, availableWidth, availableHeight, ...rest });
            } else {
              Object.assign(styles, {
                maxWidth: `${availableWidth}px`,
                maxHeight: `${availableHeight}px`
              });
            }
          }
          if (options.width === "target") {
            Object.assign(styles, {
              width: `${rects.reference.width}px`
            });
          }
        }
      })
    );
  }
  return middlewares;
}
function usePopover(options) {
  const [_opened, setOpened] = useUncontrolled({
    value: options.opened,
    defaultValue: options.defaultOpened,
    finalValue: false,
    onChange: options.onChange
  });
  const onClose = () => {
    if (_opened) {
      setOpened(false);
    }
  };
  const onToggle = () => setOpened(!_opened);
  const floating = (0,floating_ui_react/* useFloating */.we)({
    strategy: options.strategy,
    placement: options.position,
    middleware: getPopoverMiddlewares(options, () => floating)
  });
  useFloatingAutoUpdate({
    opened: _opened,
    position: options.position,
    positionDependencies: options.positionDependencies || [],
    floating
  });
  (0,use_did_update/* useDidUpdate */.C)(() => {
    options.onPositionChange?.(floating.placement);
  }, [floating.placement]);
  (0,use_did_update/* useDidUpdate */.C)(() => {
    if (!_opened) {
      options.onClose?.();
    } else {
      options.onOpen?.();
    }
  }, [_opened, options.onClose, options.onOpen]);
  return {
    floating,
    controlled: typeof options.opened === "boolean",
    opened: _opened,
    onClose,
    onToggle
  };
}


//# sourceMappingURL=use-popover.mjs.map

;// ./node_modules/@mantine/core/esm/components/Popover/Popover.mjs
'use client';

























const Popover_defaultProps = {
  position: "bottom",
  offset: 8,
  positionDependencies: [],
  transitionProps: { transition: "fade", duration: 150 },
  middlewares: { flip: true, shift: true, inline: false },
  arrowSize: 7,
  arrowOffset: 5,
  arrowRadius: 0,
  arrowPosition: "side",
  closeOnClickOutside: true,
  withinPortal: true,
  closeOnEscape: true,
  trapFocus: false,
  withRoles: true,
  returnFocus: false,
  clickOutsideEvents: ["mousedown", "touchstart"],
  zIndex: (0,get_default_z_index/* getDefaultZIndex */.I)("popover"),
  __staticSelector: "Popover",
  width: "max-content"
};
const varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { radius, shadow }) => ({
  dropdown: {
    "--popover-radius": radius === void 0 ? void 0 : (0,get_size/* getRadius */.nJ)(radius),
    "--popover-shadow": (0,get_size/* getShadow */.dh)(shadow)
  }
}));
function Popover(_props) {
  const props = (0,use_props/* useProps */.Y)("Popover", Popover_defaultProps, _props);
  const {
    children,
    position,
    offset,
    onPositionChange,
    positionDependencies,
    opened,
    transitionProps,
    width,
    middlewares,
    withArrow,
    arrowSize,
    arrowOffset,
    arrowRadius,
    arrowPosition,
    unstyled,
    classNames,
    styles,
    closeOnClickOutside,
    withinPortal,
    portalProps,
    closeOnEscape,
    clickOutsideEvents,
    trapFocus,
    onClose,
    onOpen,
    onChange,
    zIndex,
    radius,
    shadow,
    id,
    defaultOpened,
    __staticSelector,
    withRoles,
    disabled,
    returnFocus,
    variant,
    keepMounted,
    vars,
    floatingStrategy,
    ...others
  } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: __staticSelector,
    props,
    classes: classes,
    classNames,
    styles,
    unstyled,
    rootSelector: "dropdown",
    vars,
    varsResolver
  });
  const arrowRef = (0,react.useRef)(null);
  const [targetNode, setTargetNode] = (0,react.useState)(null);
  const [dropdownNode, setDropdownNode] = (0,react.useState)(null);
  const { dir } = useDirection();
  const uid = (0,use_id/* useId */.B)(id);
  const popover = usePopover({
    middlewares,
    width,
    position: getFloatingPosition(dir, position),
    offset: typeof offset === "number" ? offset + (withArrow ? arrowSize / 2 : 0) : offset,
    arrowRef,
    arrowOffset,
    onPositionChange,
    positionDependencies,
    opened,
    defaultOpened,
    onChange,
    onOpen,
    onClose,
    strategy: floatingStrategy
  });
  useClickOutside(() => closeOnClickOutside && popover.onClose(), clickOutsideEvents, [
    targetNode,
    dropdownNode
  ]);
  const reference = (0,react.useCallback)(
    (node) => {
      setTargetNode(node);
      popover.floating.refs.setReference(node);
    },
    [popover.floating.refs.setReference]
  );
  const floating = (0,react.useCallback)(
    (node) => {
      setDropdownNode(node);
      popover.floating.refs.setFloating(node);
    },
    [popover.floating.refs.setFloating]
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    PopoverContextProvider,
    {
      value: {
        returnFocus,
        disabled,
        controlled: popover.controlled,
        reference,
        floating,
        x: popover.floating.x,
        y: popover.floating.y,
        arrowX: popover.floating?.middlewareData?.arrow?.x,
        arrowY: popover.floating?.middlewareData?.arrow?.y,
        opened: popover.opened,
        arrowRef,
        transitionProps,
        width,
        withArrow,
        arrowSize,
        arrowOffset,
        arrowRadius,
        arrowPosition,
        placement: popover.floating.placement,
        trapFocus,
        withinPortal,
        portalProps,
        zIndex,
        radius,
        shadow,
        closeOnEscape,
        onClose: popover.onClose,
        onToggle: popover.onToggle,
        getTargetId: () => `${uid}-target`,
        getDropdownId: () => `${uid}-dropdown`,
        withRoles,
        targetProps: others,
        __staticSelector,
        classNames,
        styles,
        unstyled,
        variant,
        keepMounted,
        getStyles,
        floatingStrategy
      },
      children
    }
  );
}
Popover.Target = PopoverTarget;
Popover.Dropdown = PopoverDropdown;
Popover.displayName = "@mantine/core/Popover";
Popover.extend = (input) => input;


//# sourceMappingURL=Popover.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/Combobox.context.mjs
'use client';













const [ComboboxProvider, useComboboxContext] = (0,create_safe_context/* createSafeContext */.F)(
  "Combobox component was not found in tree"
);


//# sourceMappingURL=Combobox.context.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/Combobox.module.css.mjs
'use client';
var Combobox_module_css_classes = {"dropdown":"m_88b62a41","search":"m_985517d8","options":"m_b2821a6e","option":"m_92253aa5","empty":"m_2530cd1d","header":"m_858f94bd","footer":"m_82b967cb","group":"m_254f3e4f","groupLabel":"m_2bb2e9e5","chevron":"m_2943220b","optionsDropdownOption":"m_390b5f4","optionsDropdownCheckIcon":"m_8ee53fc2"};


//# sourceMappingURL=Combobox.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxChevron/ComboboxChevron.mjs
'use client';


















const ComboboxChevron_defaultProps = {
  error: null
};
const ComboboxChevron_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size }) => ({
  chevron: {
    "--combobox-chevron-size": (0,get_size/* getSize */.YC)(size, "combobox-chevron-size")
  }
}));
const ComboboxChevron = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ComboboxChevron", ComboboxChevron_defaultProps, _props);
  const { size, error, style, className, classNames, styles, unstyled, vars, mod, ...others } = props;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "ComboboxChevron",
    classes: Combobox_module_css_classes,
    props,
    style,
    className,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: ComboboxChevron_varsResolver,
    rootSelector: "chevron"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      component: "svg",
      ...others,
      ...getStyles("chevron"),
      size,
      viewBox: "0 0 15 15",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      mod: ["combobox-chevron", { error }, mod],
      ref,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          d: "M4.93179 5.43179C4.75605 5.60753 4.75605 5.89245 4.93179 6.06819C5.10753 6.24392 5.39245 6.24392 5.56819 6.06819L7.49999 4.13638L9.43179 6.06819C9.60753 6.24392 9.89245 6.24392 10.0682 6.06819C10.2439 5.89245 10.2439 5.60753 10.0682 5.43179L7.81819 3.18179C7.73379 3.0974 7.61933 3.04999 7.49999 3.04999C7.38064 3.04999 7.26618 3.0974 7.18179 3.18179L4.93179 5.43179ZM10.0682 9.56819C10.2439 9.39245 10.2439 9.10753 10.0682 8.93179C9.89245 8.75606 9.60753 8.75606 9.43179 8.93179L7.49999 10.8636L5.56819 8.93179C5.39245 8.75606 5.10753 8.75606 4.93179 8.93179C4.75605 9.10753 4.75605 9.39245 4.93179 9.56819L7.18179 11.8182C7.35753 11.9939 7.64245 11.9939 7.81819 11.8182L10.0682 9.56819Z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
});
ComboboxChevron.classes = Combobox_module_css_classes;
ComboboxChevron.displayName = "@mantine/core/ComboboxChevron";


//# sourceMappingURL=ComboboxChevron.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/CloseButton/CloseButton.mjs + 2 modules
var CloseButton = __webpack_require__(80355);
;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxClearButton/ComboboxClearButton.mjs
'use client';





const ComboboxClearButton = (0,react.forwardRef)(
  ({ size, onMouseDown, onClick, onClear, ...others }, ref) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
    CloseButton/* CloseButton */.J,
    {
      ref,
      size: size || "sm",
      variant: "transparent",
      tabIndex: -1,
      "aria-hidden": true,
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown?.(event);
      },
      onClick: (event) => {
        onClear();
        onClick?.(event);
      }
    }
  )
);
ComboboxClearButton.displayName = "@mantine/core/ComboboxClearButton";


//# sourceMappingURL=ComboboxClearButton.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxDropdown/ComboboxDropdown.mjs
'use client';



















const ComboboxDropdown_defaultProps = {};
const ComboboxDropdown = (0,factory/* factory */.P9)((props, ref) => {
  const { classNames, styles, className, style, hidden, ...others } = (0,use_props/* useProps */.Y)(
    "ComboboxDropdown",
    ComboboxDropdown_defaultProps,
    props
  );
  const ctx = useComboboxContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Popover.Dropdown,
    {
      ...others,
      ref,
      role: "presentation",
      "data-hidden": hidden || void 0,
      ...ctx.getStyles("dropdown", { className, style, classNames, styles })
    }
  );
});
ComboboxDropdown.classes = Combobox_module_css_classes;
ComboboxDropdown.displayName = "@mantine/core/ComboboxDropdown";


//# sourceMappingURL=ComboboxDropdown.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxDropdownTarget/ComboboxDropdownTarget.mjs
'use client';



















const ComboboxDropdownTarget_defaultProps = {
  refProp: "ref"
};
const ComboboxDropdownTarget = (0,factory/* factory */.P9)((props, ref) => {
  const { children, refProp } = (0,use_props/* useProps */.Y)("ComboboxDropdownTarget", ComboboxDropdownTarget_defaultProps, props);
  useComboboxContext();
  if (!(0,is_element/* isElement */.v)(children)) {
    throw new Error(
      "Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Popover.Target, { ref, refProp, children });
});
ComboboxDropdownTarget.displayName = "@mantine/core/ComboboxDropdownTarget";


//# sourceMappingURL=ComboboxDropdownTarget.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxEmpty/ComboboxEmpty.mjs
'use client';
















const ComboboxEmpty_defaultProps = {};
const ComboboxEmpty = (0,factory/* factory */.P9)((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = (0,use_props/* useProps */.Y)(
    "ComboboxEmpty",
    ComboboxEmpty_defaultProps,
    props
  );
  const ctx = useComboboxContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ref,
      ...ctx.getStyles("empty", { className, classNames, styles, style }),
      ...others
    }
  );
});
ComboboxEmpty.classes = Combobox_module_css_classes;
ComboboxEmpty.displayName = "@mantine/core/ComboboxEmpty";


//# sourceMappingURL=ComboboxEmpty.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/use-combobox-target-props/use-combobox-target-props.mjs
'use client';



function useComboboxTargetProps({
  onKeyDown,
  withKeyboardNavigation,
  withAriaAttributes,
  withExpandedAttribute,
  targetType,
  autoComplete
}) {
  const ctx = useComboboxContext();
  const [selectedOptionId, setSelectedOptionId] = (0,react.useState)(null);
  const handleKeyDown = (event) => {
    onKeyDown?.(event);
    if (ctx.readOnly) {
      return;
    }
    if (withKeyboardNavigation) {
      if (event.nativeEvent.isComposing) {
        return;
      }
      if (event.nativeEvent.code === "ArrowDown") {
        event.preventDefault();
        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown("keyboard");
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectNextOption());
        }
      }
      if (event.nativeEvent.code === "ArrowUp") {
        event.preventDefault();
        if (!ctx.store.dropdownOpened) {
          ctx.store.openDropdown("keyboard");
          setSelectedOptionId(ctx.store.selectActiveOption());
        } else {
          setSelectedOptionId(ctx.store.selectPreviousOption());
        }
      }
      if (event.nativeEvent.code === "Enter" || event.nativeEvent.code === "NumpadEnter") {
        if (event.nativeEvent.keyCode === 229) {
          return;
        }
        const selectedOptionIndex = ctx.store.getSelectedOptionIndex();
        if (ctx.store.dropdownOpened && selectedOptionIndex !== -1) {
          event.preventDefault();
          ctx.store.clickSelectedOption();
        } else if (targetType === "button") {
          event.preventDefault();
          ctx.store.openDropdown("keyboard");
        }
      }
      if (event.nativeEvent.code === "Escape") {
        ctx.store.closeDropdown("keyboard");
      }
      if (event.nativeEvent.code === "Space") {
        if (targetType === "button") {
          event.preventDefault();
          ctx.store.toggleDropdown("keyboard");
        }
      }
    }
  };
  const ariaAttributes = withAriaAttributes ? {
    "aria-haspopup": "listbox",
    "aria-expanded": withExpandedAttribute && !!(ctx.store.listId && ctx.store.dropdownOpened) || void 0,
    "aria-controls": ctx.store.listId,
    "aria-activedescendant": ctx.store.dropdownOpened ? selectedOptionId || void 0 : void 0,
    autoComplete,
    "data-expanded": ctx.store.dropdownOpened || void 0,
    "data-mantine-stop-propagation": ctx.store.dropdownOpened || void 0
  } : {};
  return {
    ...ariaAttributes,
    onKeyDown: handleKeyDown
  };
}


//# sourceMappingURL=use-combobox-target-props.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxEventsTarget/ComboboxEventsTarget.mjs
'use client';

















const ComboboxEventsTarget_defaultProps = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: "off"
};
const ComboboxEventsTarget = (0,factory/* factory */.P9)((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ...others
  } = (0,use_props/* useProps */.Y)("ComboboxEventsTarget", ComboboxEventsTarget_defaultProps, props);
  if (!(0,is_element/* isElement */.v)(children)) {
    throw new Error(
      "Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: children.props.onKeyDown,
    autoComplete
  });
  return (0,react.cloneElement)(children, {
    ...targetProps,
    ...others,
    [refProp]: (0,use_merged_ref/* useMergedRef */.pc)(ref, ctx.store.targetRef, children?.ref)
  });
});
ComboboxEventsTarget.displayName = "@mantine/core/ComboboxEventsTarget";


//# sourceMappingURL=ComboboxEventsTarget.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxFooter/ComboboxFooter.mjs
'use client';
















const ComboboxFooter_defaultProps = {};
const ComboboxFooter = (0,factory/* factory */.P9)((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = (0,use_props/* useProps */.Y)(
    "ComboboxFooter",
    ComboboxFooter_defaultProps,
    props
  );
  const ctx = useComboboxContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ref,
      ...ctx.getStyles("footer", { className, classNames, style, styles }),
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }
  );
});
ComboboxFooter.classes = Combobox_module_css_classes;
ComboboxFooter.displayName = "@mantine/core/ComboboxFooter";


//# sourceMappingURL=ComboboxFooter.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxGroup/ComboboxGroup.mjs
'use client';
















const ComboboxGroup_defaultProps = {};
const ComboboxGroup = (0,factory/* factory */.P9)((props, ref) => {
  const { classNames, className, style, styles, vars, children, label, ...others } = (0,use_props/* useProps */.Y)(
    "ComboboxGroup",
    ComboboxGroup_defaultProps,
    props
  );
  const ctx = useComboboxContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    Box/* Box */.a,
    {
      ref,
      ...ctx.getStyles("group", { className, classNames, style, styles }),
      ...others,
      children: [
        label && /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ...ctx.getStyles("groupLabel", { classNames, styles }), children: label }),
        children
      ]
    }
  );
});
ComboboxGroup.classes = Combobox_module_css_classes;
ComboboxGroup.displayName = "@mantine/core/ComboboxGroup";


//# sourceMappingURL=ComboboxGroup.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxHeader/ComboboxHeader.mjs
'use client';
















const ComboboxHeader_defaultProps = {};
const ComboboxHeader = (0,factory/* factory */.P9)((props, ref) => {
  const { classNames, className, style, styles, vars, ...others } = (0,use_props/* useProps */.Y)(
    "ComboboxHeader",
    ComboboxHeader_defaultProps,
    props
  );
  const ctx = useComboboxContext();
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ref,
      ...ctx.getStyles("header", { className, classNames, style, styles }),
      ...others,
      onMouseDown: (event) => {
        event.preventDefault();
      }
    }
  );
});
ComboboxHeader.classes = Combobox_module_css_classes;
ComboboxHeader.displayName = "@mantine/core/ComboboxHeader";


//# sourceMappingURL=ComboboxHeader.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxHiddenInput/ComboboxHiddenInput.mjs
'use client';


function ComboboxHiddenInput({
  value,
  valuesDivider = ",",
  ...others
}) {
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "input",
    {
      type: "hidden",
      value: Array.isArray(value) ? value.join(valuesDivider) : value || "",
      ...others
    }
  );
}
ComboboxHiddenInput.displayName = "@mantine/core/ComboboxHiddenInput";


//# sourceMappingURL=ComboboxHiddenInput.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxOption/ComboboxOption.mjs
'use client';
















const ComboboxOption_defaultProps = {};
const ComboboxOption = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ComboboxOption", ComboboxOption_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    vars,
    onClick,
    id,
    active,
    onMouseDown,
    onMouseOver,
    disabled,
    selected,
    mod,
    ...others
  } = props;
  const ctx = useComboboxContext();
  const uuid = (0,react.useId)();
  const _id = id || uuid;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ...ctx.getStyles("option", { className, classNames, styles, style }),
      ...others,
      ref,
      id: _id,
      mod: [
        "combobox-option",
        { "combobox-active": active, "combobox-disabled": disabled, "combobox-selected": selected },
        mod
      ],
      role: "option",
      onClick: (event) => {
        if (!disabled) {
          ctx.onOptionSubmit?.(props.value, props);
          onClick?.(event);
        } else {
          event.preventDefault();
        }
      },
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown?.(event);
      },
      onMouseOver: (event) => {
        if (ctx.resetSelectionOnOptionHover) {
          ctx.store.resetSelectedOption();
        }
        onMouseOver?.(event);
      }
    }
  );
});
ComboboxOption.classes = Combobox_module_css_classes;
ComboboxOption.displayName = "@mantine/core/ComboboxOption";


//# sourceMappingURL=ComboboxOption.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxOptions/ComboboxOptions.mjs
'use client';
















const ComboboxOptions_defaultProps = {};
const ComboboxOptions = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ComboboxOptions", ComboboxOptions_defaultProps, _props);
  const { classNames, className, style, styles, id, onMouseDown, labelledBy, ...others } = props;
  const ctx = useComboboxContext();
  const _id = (0,use_id/* useId */.B)(id);
  (0,react.useEffect)(() => {
    ctx.store.setListId(_id);
  }, [_id]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Box/* Box */.a,
    {
      ref,
      ...ctx.getStyles("options", { className, style, classNames, styles }),
      ...others,
      id: _id,
      role: "listbox",
      "aria-labelledby": labelledBy,
      onMouseDown: (event) => {
        event.preventDefault();
        onMouseDown?.(event);
      }
    }
  );
});
ComboboxOptions.classes = Combobox_module_css_classes;
ComboboxOptions.displayName = "@mantine/core/ComboboxOptions";


//# sourceMappingURL=ComboboxOptions.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Input/Input.mjs + 9 modules
var Input = __webpack_require__(60720);
;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxSearch/ComboboxSearch.mjs
'use client';


















const ComboboxSearch_defaultProps = {
  withAriaAttributes: true,
  withKeyboardNavigation: true
};
const ComboboxSearch = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ComboboxSearch", ComboboxSearch_defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    withAriaAttributes,
    onKeyDown,
    withKeyboardNavigation,
    size,
    ...others
  } = props;
  const ctx = useComboboxContext();
  const _styles = ctx.getStyles("search");
  const targetProps = useComboboxTargetProps({
    targetType: "input",
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute: false,
    onKeyDown,
    autoComplete: "off"
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Input/* Input */.p,
    {
      ref: (0,use_merged_ref/* useMergedRef */.pc)(ref, ctx.store.searchRef),
      classNames: [{ input: _styles.className }, classNames],
      styles: [{ input: _styles.style }, styles],
      size: size || ctx.size,
      ...targetProps,
      ...others,
      __staticSelector: "Combobox"
    }
  );
});
ComboboxSearch.classes = Combobox_module_css_classes;
ComboboxSearch.displayName = "@mantine/core/ComboboxSearch";


//# sourceMappingURL=ComboboxSearch.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/ComboboxTarget/ComboboxTarget.mjs
'use client';




















const ComboboxTarget_defaultProps = {
  refProp: "ref",
  targetType: "input",
  withKeyboardNavigation: true,
  withAriaAttributes: true,
  withExpandedAttribute: false,
  autoComplete: "off"
};
const ComboboxTarget = (0,factory/* factory */.P9)((props, ref) => {
  const {
    children,
    refProp,
    withKeyboardNavigation,
    withAriaAttributes,
    withExpandedAttribute,
    targetType,
    autoComplete,
    ...others
  } = (0,use_props/* useProps */.Y)("ComboboxTarget", ComboboxTarget_defaultProps, props);
  if (!(0,is_element/* isElement */.v)(children)) {
    throw new Error(
      "Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported"
    );
  }
  const ctx = useComboboxContext();
  const targetProps = useComboboxTargetProps({
    targetType,
    withAriaAttributes,
    withKeyboardNavigation,
    withExpandedAttribute,
    onKeyDown: children.props.onKeyDown,
    autoComplete
  });
  const clonedElement = (0,react.cloneElement)(children, {
    ...targetProps,
    ...others
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Popover.Target, { ref: (0,use_merged_ref/* useMergedRef */.pc)(ref, ctx.store.targetRef), children: clonedElement });
});
ComboboxTarget.displayName = "@mantine/core/ComboboxTarget";


//# sourceMappingURL=ComboboxTarget.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/use-combobox/get-index/get-index.mjs
'use client';
function getPreviousIndex(currentIndex, elements, loop) {
  for (let i = currentIndex - 1; i >= 0; i -= 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  if (loop) {
    for (let i = elements.length - 1; i > -1; i -= 1) {
      if (!elements[i].hasAttribute("data-combobox-disabled")) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getNextIndex(currentIndex, elements, loop) {
  for (let i = currentIndex + 1; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  if (loop) {
    for (let i = 0; i < elements.length; i += 1) {
      if (!elements[i].hasAttribute("data-combobox-disabled")) {
        return i;
      }
    }
  }
  return currentIndex;
}
function getFirstIndex(elements) {
  for (let i = 0; i < elements.length; i += 1) {
    if (!elements[i].hasAttribute("data-combobox-disabled")) {
      return i;
    }
  }
  return -1;
}


//# sourceMappingURL=get-index.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/use-combobox/use-combobox.mjs
'use client';




function useCombobox({
  defaultOpened,
  opened,
  onOpenedChange,
  onDropdownClose,
  onDropdownOpen,
  loop = true,
  scrollBehavior = "instant"
} = {}) {
  const [dropdownOpened, setDropdownOpened] = useUncontrolled({
    value: opened,
    defaultValue: defaultOpened,
    finalValue: false,
    onChange: onOpenedChange
  });
  const listId = (0,react.useRef)(null);
  const selectedOptionIndex = (0,react.useRef)(-1);
  const searchRef = (0,react.useRef)(null);
  const targetRef = (0,react.useRef)(null);
  const focusSearchTimeout = (0,react.useRef)(-1);
  const focusTargetTimeout = (0,react.useRef)(-1);
  const selectedIndexUpdateTimeout = (0,react.useRef)(-1);
  const openDropdown = (0,react.useCallback)(
    (eventSource = "unknown") => {
      if (!dropdownOpened) {
        setDropdownOpened(true);
        onDropdownOpen?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownOpen, dropdownOpened]
  );
  const closeDropdown = (0,react.useCallback)(
    (eventSource = "unknown") => {
      if (dropdownOpened) {
        setDropdownOpened(false);
        onDropdownClose?.(eventSource);
      }
    },
    [setDropdownOpened, onDropdownClose, dropdownOpened]
  );
  const toggleDropdown = (0,react.useCallback)(
    (eventSource = "unknown") => {
      if (dropdownOpened) {
        closeDropdown(eventSource);
      } else {
        openDropdown(eventSource);
      }
    },
    [closeDropdown, openDropdown, dropdownOpened]
  );
  const clearSelectedItem = (0,react.useCallback)(() => {
    const selected = document.querySelector(`#${listId.current} [data-combobox-selected]`);
    selected?.removeAttribute("data-combobox-selected");
    selected?.removeAttribute("aria-selected");
  }, []);
  const selectOption = (0,react.useCallback)(
    (index) => {
      const list = document.getElementById(listId.current);
      const items = list?.querySelectorAll("[data-combobox-option]");
      if (!items) {
        return null;
      }
      const nextIndex = index >= items.length ? 0 : index < 0 ? items.length - 1 : index;
      selectedOptionIndex.current = nextIndex;
      if (items?.[nextIndex] && !items[nextIndex].hasAttribute("data-combobox-disabled")) {
        clearSelectedItem();
        items[nextIndex].setAttribute("data-combobox-selected", "true");
        items[nextIndex].setAttribute("aria-selected", "true");
        items[nextIndex].scrollIntoView({ block: "nearest", behavior: scrollBehavior });
        return items[nextIndex].id;
      }
      return null;
    },
    [scrollBehavior, clearSelectedItem]
  );
  const selectActiveOption = (0,react.useCallback)(() => {
    const activeOption = document.querySelector(
      `#${listId.current} [data-combobox-active]`
    );
    if (activeOption) {
      const items = document.querySelectorAll(
        `#${listId.current} [data-combobox-option]`
      );
      const index = Array.from(items).findIndex((option) => option === activeOption);
      return selectOption(index);
    }
    return selectOption(0);
  }, [selectOption]);
  const selectNextOption = (0,react.useCallback)(
    () => selectOption(
      getNextIndex(
        selectedOptionIndex.current,
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`),
        loop
      )
    ),
    [selectOption, loop]
  );
  const selectPreviousOption = (0,react.useCallback)(
    () => selectOption(
      getPreviousIndex(
        selectedOptionIndex.current,
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`),
        loop
      )
    ),
    [selectOption, loop]
  );
  const selectFirstOption = (0,react.useCallback)(
    () => selectOption(
      getFirstIndex(
        document.querySelectorAll(`#${listId.current} [data-combobox-option]`)
      )
    ),
    [selectOption]
  );
  const updateSelectedOptionIndex = (0,react.useCallback)(
    (target = "selected", options) => {
      selectedIndexUpdateTimeout.current = window.setTimeout(() => {
        const items = document.querySelectorAll(
          `#${listId.current} [data-combobox-option]`
        );
        const index = Array.from(items).findIndex(
          (option) => option.hasAttribute(`data-combobox-${target}`)
        );
        selectedOptionIndex.current = index;
        if (options?.scrollIntoView) {
          items[index]?.scrollIntoView({ block: "nearest", behavior: scrollBehavior });
        }
      }, 0);
    },
    []
  );
  const resetSelectedOption = (0,react.useCallback)(() => {
    selectedOptionIndex.current = -1;
    clearSelectedItem();
  }, [clearSelectedItem]);
  const clickSelectedOption = (0,react.useCallback)(() => {
    const items = document.querySelectorAll(
      `#${listId.current} [data-combobox-option]`
    );
    const item = items?.[selectedOptionIndex.current];
    item?.click();
  }, []);
  const setListId = (0,react.useCallback)((id) => {
    listId.current = id;
  }, []);
  const focusSearchInput = (0,react.useCallback)(() => {
    focusSearchTimeout.current = window.setTimeout(() => searchRef.current.focus(), 0);
  }, []);
  const focusTarget = (0,react.useCallback)(() => {
    focusTargetTimeout.current = window.setTimeout(() => targetRef.current.focus(), 0);
  }, []);
  const getSelectedOptionIndex = (0,react.useCallback)(() => selectedOptionIndex.current, []);
  (0,react.useEffect)(
    () => () => {
      window.clearTimeout(focusSearchTimeout.current);
      window.clearTimeout(focusTargetTimeout.current);
      window.clearTimeout(selectedIndexUpdateTimeout.current);
    },
    []
  );
  return {
    dropdownOpened,
    openDropdown,
    closeDropdown,
    toggleDropdown,
    selectedOptionIndex: selectedOptionIndex.current,
    getSelectedOptionIndex,
    selectOption,
    selectFirstOption,
    selectActiveOption,
    selectNextOption,
    selectPreviousOption,
    resetSelectedOption,
    updateSelectedOptionIndex,
    listId: listId.current,
    setListId,
    clickSelectedOption,
    searchRef,
    focusSearchInput,
    targetRef,
    focusTarget
  };
}


//# sourceMappingURL=use-combobox.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/Combobox.mjs
'use client';





































const Combobox_defaultProps = {
  keepMounted: true,
  withinPortal: true,
  resetSelectionOnOptionHover: false,
  width: "target",
  transitionProps: { transition: "fade", duration: 0 }
};
const Combobox_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { size, dropdownPadding }) => ({
  options: {
    "--combobox-option-fz": (0,get_size/* getFontSize */.ny)(size),
    "--combobox-option-padding": (0,get_size/* getSize */.YC)(size, "combobox-option-padding")
  },
  dropdown: {
    "--combobox-padding": dropdownPadding === void 0 ? void 0 : (0,rem/* rem */.D)(dropdownPadding),
    "--combobox-option-fz": (0,get_size/* getFontSize */.ny)(size),
    "--combobox-option-padding": (0,get_size/* getSize */.YC)(size, "combobox-option-padding")
  }
}));
function Combobox(_props) {
  const props = (0,use_props/* useProps */.Y)("Combobox", Combobox_defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    children,
    store: controlledStore,
    vars,
    onOptionSubmit,
    onClose,
    size,
    dropdownPadding,
    resetSelectionOnOptionHover,
    __staticSelector,
    readOnly,
    ...others
  } = props;
  const uncontrolledStore = useCombobox();
  const store = controlledStore || uncontrolledStore;
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: __staticSelector || "Combobox",
    classes: Combobox_module_css_classes,
    props,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: Combobox_varsResolver
  });
  const onDropdownClose = () => {
    onClose?.();
    store.closeDropdown();
  };
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ComboboxProvider,
    {
      value: {
        getStyles,
        store,
        onOptionSubmit,
        size,
        resetSelectionOnOptionHover,
        readOnly
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Popover,
        {
          opened: store.dropdownOpened,
          ...others,
          onChange: (_opened) => !_opened && onDropdownClose(),
          withRoles: false,
          unstyled,
          children
        }
      )
    }
  );
}
const extendCombobox = (c) => c;
Combobox.extend = extendCombobox;
Combobox.classes = Combobox_module_css_classes;
Combobox.displayName = "@mantine/core/Combobox";
Combobox.Target = ComboboxTarget;
Combobox.Dropdown = ComboboxDropdown;
Combobox.Options = ComboboxOptions;
Combobox.Option = ComboboxOption;
Combobox.Search = ComboboxSearch;
Combobox.Empty = ComboboxEmpty;
Combobox.Chevron = ComboboxChevron;
Combobox.Footer = ComboboxFooter;
Combobox.Header = ComboboxHeader;
Combobox.EventsTarget = ComboboxEventsTarget;
Combobox.DropdownTarget = ComboboxDropdownTarget;
Combobox.Group = ComboboxGroup;
Combobox.ClearButton = ComboboxClearButton;
Combobox.HiddenInput = ComboboxHiddenInput;


//# sourceMappingURL=Combobox.mjs.map

;// ./node_modules/@mantine/core/esm/components/Checkbox/CheckIcon.mjs
'use client';













function CheckIcon({ size, style, ...others }) {
  const _style = size !== void 0 ? { width: (0,rem/* rem */.D)(size), height: (0,rem/* rem */.D)(size), ...style } : style;
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "svg",
    {
      viewBox: "0 0 10 7",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      style: _style,
      "aria-hidden": true,
      ...others,
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "path",
        {
          d: "M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",
          fill: "currentColor",
          fillRule: "evenodd",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function CheckboxIcon({ indeterminate, ...others }) {
  if (indeterminate) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 32 6",
        "aria-hidden": true,
        ...others,
        children: /* @__PURE__ */ jsx("rect", { width: "32", height: "6", fill: "currentColor", rx: "3" })
      }
    );
  }
  return /* @__PURE__ */ jsx(CheckIcon, { ...others });
}


//# sourceMappingURL=CheckIcon.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.context.mjs
'use client';













const [ScrollAreaProvider, useScrollAreaContext] = (0,create_safe_context/* createSafeContext */.F)(
  "ScrollArea.Root component was not found in tree"
);


//# sourceMappingURL=ScrollArea.context.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-callback-ref/use-callback-ref.mjs
'use client';


function useCallbackRef(callback) {
  const callbackRef = (0,react.useRef)(callback);
  (0,react.useEffect)(() => {
    callbackRef.current = callback;
  });
  return (0,react.useMemo)(() => (...args) => callbackRef.current?.(...args), []);
}


//# sourceMappingURL=use-callback-ref.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(45585);
;// ./node_modules/@mantine/core/esm/components/ScrollArea/use-resize-observer.mjs
'use client';


function useResizeObserver(element, onResize) {
  const handleResize = useCallbackRef(onResize);
  (0,use_isomorphic_effect/* useIsomorphicEffect */.o)(() => {
    let rAF = 0;
    if (element) {
      const resizeObserver = new ResizeObserver(() => {
        cancelAnimationFrame(rAF);
        rAF = window.requestAnimationFrame(handleResize);
      });
      resizeObserver.observe(element);
      return () => {
        window.cancelAnimationFrame(rAF);
        resizeObserver.unobserve(element);
      };
    }
    return void 0;
  }, [element, handleResize]);
}


//# sourceMappingURL=use-resize-observer.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaCorner/ScrollAreaCorner.mjs
'use client';





const Corner = (0,react.forwardRef)((props, ref) => {
  const { style, ...others } = props;
  const ctx = useScrollAreaContext();
  const [width, setWidth] = (0,react.useState)(0);
  const [height, setHeight] = (0,react.useState)(0);
  const hasSize = Boolean(width && height);
  useResizeObserver(ctx.scrollbarX, () => {
    const h = ctx.scrollbarX?.offsetHeight || 0;
    ctx.onCornerHeightChange(h);
    setHeight(h);
  });
  useResizeObserver(ctx.scrollbarY, () => {
    const w = ctx.scrollbarY?.offsetWidth || 0;
    ctx.onCornerWidthChange(w);
    setWidth(w);
  });
  return hasSize ? /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { ...others, ref, style: { ...style, width, height } }) : null;
});
const ScrollAreaCorner = (0,react.forwardRef)((props, ref) => {
  const ctx = useScrollAreaContext();
  const hasBothScrollbarsVisible = Boolean(ctx.scrollbarX && ctx.scrollbarY);
  const hasCorner = ctx.type !== "scroll" && hasBothScrollbarsVisible;
  return hasCorner ? /* @__PURE__ */ (0,jsx_runtime.jsx)(Corner, { ...props, ref }) : null;
});


//# sourceMappingURL=ScrollAreaCorner.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaRoot/ScrollAreaRoot.mjs
'use client';














const ScrollAreaRoot_defaultProps = {
  scrollHideDelay: 1e3,
  type: "hover"
};
const ScrollAreaRoot = (0,react.forwardRef)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ScrollAreaRoot", ScrollAreaRoot_defaultProps, _props);
  const { type, scrollHideDelay, scrollbars, ...others } = props;
  const [scrollArea, setScrollArea] = (0,react.useState)(null);
  const [viewport, setViewport] = (0,react.useState)(null);
  const [content, setContent] = (0,react.useState)(null);
  const [scrollbarX, setScrollbarX] = (0,react.useState)(null);
  const [scrollbarY, setScrollbarY] = (0,react.useState)(null);
  const [cornerWidth, setCornerWidth] = (0,react.useState)(0);
  const [cornerHeight, setCornerHeight] = (0,react.useState)(0);
  const [scrollbarXEnabled, setScrollbarXEnabled] = (0,react.useState)(false);
  const [scrollbarYEnabled, setScrollbarYEnabled] = (0,react.useState)(false);
  const rootRef = (0,use_merged_ref/* useMergedRef */.pc)(ref, (node) => setScrollArea(node));
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ScrollAreaProvider,
    {
      value: {
        type,
        scrollHideDelay,
        scrollArea,
        viewport,
        onViewportChange: setViewport,
        content,
        onContentChange: setContent,
        scrollbarX,
        onScrollbarXChange: setScrollbarX,
        scrollbarXEnabled,
        onScrollbarXEnabledChange: setScrollbarXEnabled,
        scrollbarY,
        onScrollbarYChange: setScrollbarY,
        scrollbarYEnabled,
        onScrollbarYEnabledChange: setScrollbarYEnabled,
        onCornerWidthChange: setCornerWidth,
        onCornerHeightChange: setCornerHeight
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        Box/* Box */.a,
        {
          ...others,
          ref: rootRef,
          __vars: {
            "--sa-corner-width": scrollbars !== "xy" ? "0px" : `${cornerWidth}px`,
            "--sa-corner-height": scrollbars !== "xy" ? "0px" : `${cornerHeight}px`
          }
        }
      )
    }
  );
});
ScrollAreaRoot.displayName = "@mantine/core/ScrollAreaRoot";


//# sourceMappingURL=ScrollAreaRoot.mjs.map

;// ./node_modules/@mantine/hooks/esm/use-debounced-callback/use-debounced-callback.mjs
'use client';



function useDebouncedCallback(callback, delay) {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = (0,react.useRef)(0);
  (0,react.useEffect)(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return (0,react.useCallback)(
    (...args) => {
      window.clearTimeout(debounceTimerRef.current);
      debounceTimerRef.current = window.setTimeout(() => handleCallback(...args), delay);
    },
    [handleCallback, delay]
  );
}


//# sourceMappingURL=use-debounced-callback.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-ratio.mjs
'use client';
function getThumbRatio(viewportSize, contentSize) {
  const ratio = viewportSize / contentSize;
  return Number.isNaN(ratio) ? 0 : ratio;
}


//# sourceMappingURL=get-thumb-ratio.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-size.mjs
'use client';


function getThumbSize(sizes) {
  const ratio = getThumbRatio(sizes.viewport, sizes.content);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const thumbSize = (sizes.scrollbar.size - scrollbarPadding) * ratio;
  return Math.max(thumbSize, 18);
}


//# sourceMappingURL=get-thumb-size.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/linear-scale.mjs
'use client';
function linearScale(input, output) {
  return (value) => {
    if (input[0] === input[1] || output[0] === output[1]) {
      return output[0];
    }
    const ratio = (output[1] - output[0]) / (input[1] - input[0]);
    return output[0] + ratio * (value - input[0]);
  };
}


//# sourceMappingURL=linear-scale.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/get-thumb-offset-from-scroll.mjs
'use client';



function clamp(value, [min, max]) {
  return Math.min(max, Math.max(min, value));
}
function getThumbOffsetFromScroll(scrollPos, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const scrollbarPadding = sizes.scrollbar.paddingStart + sizes.scrollbar.paddingEnd;
  const scrollbar = sizes.scrollbar.size - scrollbarPadding;
  const maxScrollPos = sizes.content - sizes.viewport;
  const maxThumbPos = scrollbar - thumbSizePx;
  const scrollClampRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const scrollWithoutMomentum = clamp(scrollPos, scrollClampRange);
  const interpolate = linearScale([0, maxScrollPos], [0, maxThumbPos]);
  return interpolate(scrollWithoutMomentum);
}


//# sourceMappingURL=get-thumb-offset-from-scroll.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/get-scroll-position-from-pointer.mjs
'use client';



function getScrollPositionFromPointer(pointerPos, pointerOffset, sizes, dir = "ltr") {
  const thumbSizePx = getThumbSize(sizes);
  const thumbCenter = thumbSizePx / 2;
  const offset = pointerOffset || thumbCenter;
  const thumbOffsetFromEnd = thumbSizePx - offset;
  const minPointerPos = sizes.scrollbar.paddingStart + offset;
  const maxPointerPos = sizes.scrollbar.size - sizes.scrollbar.paddingEnd - thumbOffsetFromEnd;
  const maxScrollPos = sizes.content - sizes.viewport;
  const scrollRange = dir === "ltr" ? [0, maxScrollPos] : [maxScrollPos * -1, 0];
  const interpolate = linearScale([minPointerPos, maxPointerPos], scrollRange);
  return interpolate(pointerPos);
}


//# sourceMappingURL=get-scroll-position-from-pointer.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/is-scrolling-within-scrollbar-bounds.mjs
'use client';
function isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos) {
  return scrollPos > 0 && scrollPos < maxScrollPos;
}


//# sourceMappingURL=is-scrolling-within-scrollbar-bounds.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/to-int.mjs
'use client';
function toInt(value) {
  return value ? parseInt(value, 10) : 0;
}


//# sourceMappingURL=to-int.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/compose-event-handlers.mjs
'use client';
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
  return (event) => {
    originalEventHandler?.(event);
    if (checkForDefaultPrevented === false || !event.defaultPrevented) {
      ourEventHandler?.(event);
    }
  };
}


//# sourceMappingURL=compose-event-handlers.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.context.mjs
'use client';













const [ScrollbarProvider, useScrollbarContext] = (0,create_safe_context/* createSafeContext */.F)(
  "ScrollAreaScrollbar was not found in tree"
);


//# sourceMappingURL=Scrollbar.context.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/Scrollbar.mjs
'use client';








const Scrollbar = (0,react.forwardRef)((props, forwardedRef) => {
  const {
    sizes,
    hasThumb,
    onThumbChange,
    onThumbPointerUp,
    onThumbPointerDown,
    onThumbPositionChange,
    onDragScroll,
    onWheelScroll,
    onResize,
    ...scrollbarProps
  } = props;
  const context = useScrollAreaContext();
  const [scrollbar, setScrollbar] = (0,react.useState)(null);
  const composeRefs = (0,use_merged_ref/* useMergedRef */.pc)(forwardedRef, (node) => setScrollbar(node));
  const rectRef = (0,react.useRef)(null);
  const prevWebkitUserSelectRef = (0,react.useRef)("");
  const { viewport } = context;
  const maxScrollPos = sizes.content - sizes.viewport;
  const handleWheelScroll = useCallbackRef(onWheelScroll);
  const handleThumbPositionChange = useCallbackRef(onThumbPositionChange);
  const handleResize = useDebouncedCallback(onResize, 10);
  const handleDragScroll = (event) => {
    if (rectRef.current) {
      const x = event.clientX - rectRef.current.left;
      const y = event.clientY - rectRef.current.top;
      onDragScroll({ x, y });
    }
  };
  (0,react.useEffect)(() => {
    const handleWheel = (event) => {
      const element = event.target;
      const isScrollbarWheel = scrollbar?.contains(element);
      if (isScrollbarWheel) {
        handleWheelScroll(event, maxScrollPos);
      }
    };
    document.addEventListener("wheel", handleWheel, { passive: false });
    return () => document.removeEventListener("wheel", handleWheel, { passive: false });
  }, [viewport, scrollbar, maxScrollPos, handleWheelScroll]);
  (0,react.useEffect)(handleThumbPositionChange, [sizes, handleThumbPositionChange]);
  useResizeObserver(scrollbar, handleResize);
  useResizeObserver(context.content, handleResize);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ScrollbarProvider,
    {
      value: {
        scrollbar,
        hasThumb,
        onThumbChange: useCallbackRef(onThumbChange),
        onThumbPointerUp: useCallbackRef(onThumbPointerUp),
        onThumbPositionChange: handleThumbPositionChange,
        onThumbPointerDown: useCallbackRef(onThumbPointerDown)
      },
      children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
        "div",
        {
          ...scrollbarProps,
          ref: composeRefs,
          "data-mantine-scrollbar": true,
          style: { position: "absolute", ...scrollbarProps.style },
          onPointerDown: composeEventHandlers(props.onPointerDown, (event) => {
            event.preventDefault();
            const mainPointer = 0;
            if (event.button === mainPointer) {
              const element = event.target;
              element.setPointerCapture(event.pointerId);
              rectRef.current = scrollbar.getBoundingClientRect();
              prevWebkitUserSelectRef.current = document.body.style.webkitUserSelect;
              document.body.style.webkitUserSelect = "none";
              handleDragScroll(event);
            }
          }),
          onPointerMove: composeEventHandlers(props.onPointerMove, handleDragScroll),
          onPointerUp: composeEventHandlers(props.onPointerUp, (event) => {
            event.preventDefault();
            const element = event.target;
            if (element.hasPointerCapture(event.pointerId)) {
              element.releasePointerCapture(event.pointerId);
            }
            document.body.style.webkitUserSelect = prevWebkitUserSelectRef.current;
            rectRef.current = null;
          })
        }
      )
    }
  );
});


//# sourceMappingURL=Scrollbar.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarX.mjs
'use client';









const ScrollAreaScrollbarX = (0,react.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const ctx = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = (0,react.useState)();
    const ref = (0,react.useRef)(null);
    const composeRefs = (0,use_merged_ref/* useMergedRef */.pc)(forwardedRef, ref, ctx.onScrollbarXChange);
    (0,react.useEffect)(() => {
      if (ref.current) {
        setComputedStyle(getComputedStyle(ref.current));
      }
    }, [ref]);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Scrollbar,
      {
        "data-orientation": "horizontal",
        ...others,
        ref: composeRefs,
        sizes,
        style: {
          ...style,
          ["--sa-thumb-width"]: `${getThumbSize(sizes)}px`
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.x),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.x),
        onWheelScroll: (event, maxScrollPos) => {
          if (ctx.viewport) {
            const scrollPos = ctx.viewport.scrollLeft + event.deltaX;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && ctx.viewport && computedStyle) {
            onSizesChange({
              content: ctx.viewport.scrollWidth,
              viewport: ctx.viewport.offsetWidth,
              scrollbar: {
                size: ref.current.clientWidth,
                paddingStart: toInt(computedStyle.paddingLeft),
                paddingEnd: toInt(computedStyle.paddingRight)
              }
            });
          }
        }
      }
    );
  }
);
ScrollAreaScrollbarX.displayName = "@mantine/core/ScrollAreaScrollbarX";


//# sourceMappingURL=ScrollbarX.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollbarY.mjs
'use client';









const ScrollAreaScrollbarY = (0,react.forwardRef)(
  (props, forwardedRef) => {
    const { sizes, onSizesChange, style, ...others } = props;
    const context = useScrollAreaContext();
    const [computedStyle, setComputedStyle] = (0,react.useState)();
    const ref = (0,react.useRef)(null);
    const composeRefs = (0,use_merged_ref/* useMergedRef */.pc)(forwardedRef, ref, context.onScrollbarYChange);
    (0,react.useEffect)(() => {
      if (ref.current) {
        setComputedStyle(window.getComputedStyle(ref.current));
      }
    }, []);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Scrollbar,
      {
        ...others,
        "data-orientation": "vertical",
        ref: composeRefs,
        sizes,
        style: {
          ["--sa-thumb-height"]: `${getThumbSize(sizes)}px`,
          ...style
        },
        onThumbPointerDown: (pointerPos) => props.onThumbPointerDown(pointerPos.y),
        onDragScroll: (pointerPos) => props.onDragScroll(pointerPos.y),
        onWheelScroll: (event, maxScrollPos) => {
          if (context.viewport) {
            const scrollPos = context.viewport.scrollTop + event.deltaY;
            props.onWheelScroll(scrollPos);
            if (isScrollingWithinScrollbarBounds(scrollPos, maxScrollPos)) {
              event.preventDefault();
            }
          }
        },
        onResize: () => {
          if (ref.current && context.viewport && computedStyle) {
            onSizesChange({
              content: context.viewport.scrollHeight,
              viewport: context.viewport.offsetHeight,
              scrollbar: {
                size: ref.current.clientHeight,
                paddingStart: toInt(computedStyle.paddingTop),
                paddingEnd: toInt(computedStyle.paddingBottom)
              }
            });
          }
        }
      }
    );
  }
);
ScrollAreaScrollbarY.displayName = "@mantine/core/ScrollAreaScrollbarY";


//# sourceMappingURL=ScrollbarY.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarVisible.mjs
'use client';


















const ScrollAreaScrollbarVisible = (0,react.forwardRef)((props, forwardedRef) => {
  const { orientation = "vertical", ...scrollbarProps } = props;
  const { dir } = useDirection();
  const context = useScrollAreaContext();
  const thumbRef = (0,react.useRef)(null);
  const pointerOffsetRef = (0,react.useRef)(0);
  const [sizes, setSizes] = (0,react.useState)({
    content: 0,
    viewport: 0,
    scrollbar: { size: 0, paddingStart: 0, paddingEnd: 0 }
  });
  const thumbRatio = getThumbRatio(sizes.viewport, sizes.content);
  const commonProps = {
    ...scrollbarProps,
    sizes,
    onSizesChange: setSizes,
    hasThumb: Boolean(thumbRatio > 0 && thumbRatio < 1),
    onThumbChange: (thumb) => {
      thumbRef.current = thumb;
    },
    onThumbPointerUp: () => {
      pointerOffsetRef.current = 0;
    },
    onThumbPointerDown: (pointerPos) => {
      pointerOffsetRef.current = pointerPos;
    }
  };
  const getScrollPosition = (pointerPos, direction) => getScrollPositionFromPointer(pointerPos, pointerOffsetRef.current, sizes, direction);
  if (orientation === "horizontal") {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ScrollAreaScrollbarX,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollLeft;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes, dir);
            thumbRef.current.style.transform = `translate3d(${offset}px, 0, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = scrollPos;
          }
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollLeft = getScrollPosition(pointerPos, dir);
          }
        }
      }
    );
  }
  if (orientation === "vertical") {
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ScrollAreaScrollbarY,
      {
        ...commonProps,
        ref: forwardedRef,
        onThumbPositionChange: () => {
          if (context.viewport && thumbRef.current) {
            const scrollPos = context.viewport.scrollTop;
            const offset = getThumbOffsetFromScroll(scrollPos, sizes);
            if (sizes.scrollbar.size === 0) {
              thumbRef.current.style.opacity = "0";
            } else {
              thumbRef.current.style.opacity = "1";
            }
            thumbRef.current.style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        },
        onWheelScroll: (scrollPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = scrollPos;
          }
        },
        onDragScroll: (pointerPos) => {
          if (context.viewport) {
            context.viewport.scrollTop = getScrollPosition(pointerPos);
          }
        }
      }
    );
  }
  return null;
});
ScrollAreaScrollbarVisible.displayName = "@mantine/core/ScrollAreaScrollbarVisible";


//# sourceMappingURL=ScrollAreaScrollbarVisible.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarAuto.mjs
'use client';







const ScrollAreaScrollbarAuto = (0,react.forwardRef)(
  (props, ref) => {
    const context = useScrollAreaContext();
    const { forceMount, ...scrollbarProps } = props;
    const [visible, setVisible] = (0,react.useState)(false);
    const isHorizontal = props.orientation === "horizontal";
    const handleResize = useDebouncedCallback(() => {
      if (context.viewport) {
        const isOverflowX = context.viewport.offsetWidth < context.viewport.scrollWidth;
        const isOverflowY = context.viewport.offsetHeight < context.viewport.scrollHeight;
        setVisible(isHorizontal ? isOverflowX : isOverflowY);
      }
    }, 10);
    useResizeObserver(context.viewport, handleResize);
    useResizeObserver(context.content, handleResize);
    if (forceMount || visible) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ScrollAreaScrollbarVisible,
        {
          "data-state": visible ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);
ScrollAreaScrollbarAuto.displayName = "@mantine/core/ScrollAreaScrollbarAuto";


//# sourceMappingURL=ScrollAreaScrollbarAuto.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarHover.mjs
'use client';





const ScrollAreaScrollbarHover = (0,react.forwardRef)(
  (props, ref) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const [visible, setVisible] = (0,react.useState)(false);
    (0,react.useEffect)(() => {
      const { scrollArea } = context;
      let hideTimer = 0;
      if (scrollArea) {
        const handlePointerEnter = () => {
          window.clearTimeout(hideTimer);
          setVisible(true);
        };
        const handlePointerLeave = () => {
          hideTimer = window.setTimeout(() => setVisible(false), context.scrollHideDelay);
        };
        scrollArea.addEventListener("pointerenter", handlePointerEnter);
        scrollArea.addEventListener("pointerleave", handlePointerLeave);
        return () => {
          window.clearTimeout(hideTimer);
          scrollArea.removeEventListener("pointerenter", handlePointerEnter);
          scrollArea.removeEventListener("pointerleave", handlePointerLeave);
        };
      }
      return void 0;
    }, [context.scrollArea, context.scrollHideDelay]);
    if (forceMount || visible) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ScrollAreaScrollbarAuto,
        {
          "data-state": visible ? "visible" : "hidden",
          ...scrollbarProps,
          ref
        }
      );
    }
    return null;
  }
);
ScrollAreaScrollbarHover.displayName = "@mantine/core/ScrollAreaScrollbarHover";


//# sourceMappingURL=ScrollAreaScrollbarHover.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbarScroll.mjs
'use client';







const ScrollAreaScrollbarScroll = (0,react.forwardRef)(
  (props, red) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const isHorizontal = props.orientation === "horizontal";
    const [state, setState] = (0,react.useState)("hidden");
    const debounceScrollEnd = useDebouncedCallback(() => setState("idle"), 100);
    (0,react.useEffect)(() => {
      if (state === "idle") {
        const hideTimer = window.setTimeout(() => setState("hidden"), context.scrollHideDelay);
        return () => window.clearTimeout(hideTimer);
      }
      return void 0;
    }, [state, context.scrollHideDelay]);
    (0,react.useEffect)(() => {
      const { viewport } = context;
      const scrollDirection = isHorizontal ? "scrollLeft" : "scrollTop";
      if (viewport) {
        let prevScrollPos = viewport[scrollDirection];
        const handleScroll = () => {
          const scrollPos = viewport[scrollDirection];
          const hasScrollInDirectionChanged = prevScrollPos !== scrollPos;
          if (hasScrollInDirectionChanged) {
            setState("scrolling");
            debounceScrollEnd();
          }
          prevScrollPos = scrollPos;
        };
        viewport.addEventListener("scroll", handleScroll);
        return () => viewport.removeEventListener("scroll", handleScroll);
      }
      return void 0;
    }, [context.viewport, isHorizontal, debounceScrollEnd]);
    if (forceMount || state !== "hidden") {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(
        ScrollAreaScrollbarVisible,
        {
          "data-state": state === "hidden" ? "hidden" : "visible",
          ...scrollbarProps,
          ref: red,
          onPointerEnter: composeEventHandlers(props.onPointerEnter, () => setState("interacting")),
          onPointerLeave: composeEventHandlers(props.onPointerLeave, () => setState("idle"))
        }
      );
    }
    return null;
  }
);


//# sourceMappingURL=ScrollAreaScrollbarScroll.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaScrollbar/ScrollAreaScrollbar.mjs
'use client';








const ScrollAreaScrollbar = (0,react.forwardRef)(
  (props, forwardedRef) => {
    const { forceMount, ...scrollbarProps } = props;
    const context = useScrollAreaContext();
    const { onScrollbarXEnabledChange, onScrollbarYEnabledChange } = context;
    const isHorizontal = props.orientation === "horizontal";
    (0,react.useEffect)(() => {
      isHorizontal ? onScrollbarXEnabledChange(true) : onScrollbarYEnabledChange(true);
      return () => {
        isHorizontal ? onScrollbarXEnabledChange(false) : onScrollbarYEnabledChange(false);
      };
    }, [isHorizontal, onScrollbarXEnabledChange, onScrollbarYEnabledChange]);
    return context.type === "hover" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarHover, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "scroll" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarScroll, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "auto" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarAuto, { ...scrollbarProps, ref: forwardedRef, forceMount }) : context.type === "always" ? /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaScrollbarVisible, { ...scrollbarProps, ref: forwardedRef }) : null;
  }
);
ScrollAreaScrollbar.displayName = "@mantine/core/ScrollAreaScrollbar";


//# sourceMappingURL=ScrollAreaScrollbar.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/utils/add-unlinked-scroll-listener.mjs
'use client';
function addUnlinkedScrollListener(node, handler = () => {
}) {
  let prevPosition = { left: node.scrollLeft, top: node.scrollTop };
  let rAF = 0;
  (function loop() {
    const position = { left: node.scrollLeft, top: node.scrollTop };
    const isHorizontalScroll = prevPosition.left !== position.left;
    const isVerticalScroll = prevPosition.top !== position.top;
    if (isHorizontalScroll || isVerticalScroll) {
      handler();
    }
    prevPosition = position;
    rAF = window.requestAnimationFrame(loop);
  })();
  return () => window.cancelAnimationFrame(rAF);
}


//# sourceMappingURL=add-unlinked-scroll-listener.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaThumb/ScrollAreaThumb.mjs
'use client';








const Thumb = (0,react.forwardRef)((props, forwardedRef) => {
  const { style, ...others } = props;
  const scrollAreaContext = useScrollAreaContext();
  const scrollbarContext = useScrollbarContext();
  const { onThumbPositionChange } = scrollbarContext;
  const composedRef = (0,use_merged_ref/* useMergedRef */.pc)(forwardedRef, (node) => scrollbarContext.onThumbChange(node));
  const removeUnlinkedScrollListenerRef = (0,react.useRef)();
  const debounceScrollEnd = useDebouncedCallback(() => {
    if (removeUnlinkedScrollListenerRef.current) {
      removeUnlinkedScrollListenerRef.current();
      removeUnlinkedScrollListenerRef.current = void 0;
    }
  }, 100);
  (0,react.useEffect)(() => {
    const { viewport } = scrollAreaContext;
    if (viewport) {
      const handleScroll = () => {
        debounceScrollEnd();
        if (!removeUnlinkedScrollListenerRef.current) {
          const listener = addUnlinkedScrollListener(viewport, onThumbPositionChange);
          removeUnlinkedScrollListenerRef.current = listener;
          onThumbPositionChange();
        }
      };
      onThumbPositionChange();
      viewport.addEventListener("scroll", handleScroll);
      return () => viewport.removeEventListener("scroll", handleScroll);
    }
    return void 0;
  }, [scrollAreaContext.viewport, debounceScrollEnd, onThumbPositionChange]);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(
    "div",
    {
      "data-state": scrollbarContext.hasThumb ? "visible" : "hidden",
      ...others,
      ref: composedRef,
      style: {
        width: "var(--sa-thumb-width)",
        height: "var(--sa-thumb-height)",
        ...style
      },
      onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, (event) => {
        const thumb = event.target;
        const thumbRect = thumb.getBoundingClientRect();
        const x = event.clientX - thumbRect.left;
        const y = event.clientY - thumbRect.top;
        scrollbarContext.onThumbPointerDown({ x, y });
      }),
      onPointerUp: composeEventHandlers(props.onPointerUp, scrollbarContext.onThumbPointerUp)
    }
  );
});
Thumb.displayName = "@mantine/core/ScrollAreaThumb";
const ScrollAreaThumb = (0,react.forwardRef)(
  (props, forwardedRef) => {
    const { forceMount, ...thumbProps } = props;
    const scrollbarContext = useScrollbarContext();
    if (forceMount || scrollbarContext.hasThumb) {
      return /* @__PURE__ */ (0,jsx_runtime.jsx)(Thumb, { ref: forwardedRef, ...thumbProps });
    }
    return null;
  }
);
ScrollAreaThumb.displayName = "@mantine/core/ScrollAreaThumb";


//# sourceMappingURL=ScrollAreaThumb.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollAreaViewport/ScrollAreaViewport.mjs
'use client';













const ScrollAreaViewport = (0,react.forwardRef)(
  ({ children, style, ...others }, ref) => {
    const ctx = useScrollAreaContext();
    const rootRef = (0,use_merged_ref/* useMergedRef */.pc)(ref, ctx.onViewportChange);
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Box/* Box */.a,
      {
        ...others,
        ref: rootRef,
        style: {
          overflowX: ctx.scrollbarXEnabled ? "scroll" : "hidden",
          overflowY: ctx.scrollbarYEnabled ? "scroll" : "hidden",
          ...style
        },
        children: /* @__PURE__ */ (0,jsx_runtime.jsx)("div", { style: { minWidth: "100%", display: "table" }, ref: ctx.onContentChange, children })
      }
    );
  }
);
ScrollAreaViewport.displayName = "@mantine/core/ScrollAreaViewport";


//# sourceMappingURL=ScrollAreaViewport.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.module.css.mjs
'use client';
var ScrollArea_module_css_classes = {"root":"m_d57069b5","viewport":"m_c0783ff9","viewportInner":"m_f8f631dd","scrollbar":"m_c44ba933","thumb":"m_d8b5e363","corner":"m_21657268"};


//# sourceMappingURL=ScrollArea.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs
'use client';























const ScrollArea_defaultProps = {
  scrollHideDelay: 1e3,
  type: "hover",
  scrollbars: "xy"
};
const ScrollArea_varsResolver = (0,create_vars_resolver/* createVarsResolver */.V)((_, { scrollbarSize }) => ({
  root: {
    "--scrollarea-scrollbar-size": (0,rem/* rem */.D)(scrollbarSize)
  }
}));
const ScrollArea = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("ScrollArea", ScrollArea_defaultProps, _props);
  const {
    classNames,
    className,
    style,
    styles,
    unstyled,
    scrollbarSize,
    vars,
    type,
    scrollHideDelay,
    viewportProps,
    viewportRef,
    onScrollPositionChange,
    children,
    offsetScrollbars,
    scrollbars,
    onBottomReached,
    onTopReached,
    ...others
  } = props;
  const [scrollbarHovered, setScrollbarHovered] = (0,react.useState)(false);
  const getStyles = (0,use_styles/* useStyles */.I)({
    name: "ScrollArea",
    props,
    classes: ScrollArea_module_css_classes,
    className,
    style,
    classNames,
    styles,
    unstyled,
    vars,
    varsResolver: ScrollArea_varsResolver
  });
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(
    ScrollAreaRoot,
    {
      type: type === "never" ? "always" : type,
      scrollHideDelay,
      ref,
      scrollbars,
      ...getStyles("root"),
      ...others,
      children: [
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ScrollAreaViewport,
          {
            ...viewportProps,
            ...getStyles("viewport", { style: viewportProps?.style }),
            ref: viewportRef,
            "data-offset-scrollbars": offsetScrollbars === true ? "xy" : offsetScrollbars || void 0,
            "data-scrollbars": scrollbars || void 0,
            onScroll: (e) => {
              viewportProps?.onScroll?.(e);
              onScrollPositionChange?.({ x: e.currentTarget.scrollLeft, y: e.currentTarget.scrollTop });
              const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
              if (scrollTop - (scrollHeight - clientHeight) >= 0) {
                onBottomReached?.();
              }
              if (scrollTop === 0) {
                onTopReached?.();
              }
            },
            children
          }
        ),
        (scrollbars === "xy" || scrollbars === "x") && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ScrollAreaScrollbar,
          {
            ...getStyles("scrollbar"),
            orientation: "horizontal",
            "data-hidden": type === "never" || void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaThumb, { ...getStyles("thumb") })
          }
        ),
        (scrollbars === "xy" || scrollbars === "y") && /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ScrollAreaScrollbar,
          {
            ...getStyles("scrollbar"),
            orientation: "vertical",
            "data-hidden": type === "never" || void 0,
            forceMount: true,
            onMouseEnter: () => setScrollbarHovered(true),
            onMouseLeave: () => setScrollbarHovered(false),
            children: /* @__PURE__ */ (0,jsx_runtime.jsx)(ScrollAreaThumb, { ...getStyles("thumb") })
          }
        ),
        /* @__PURE__ */ (0,jsx_runtime.jsx)(
          ScrollAreaCorner,
          {
            ...getStyles("corner"),
            "data-hovered": scrollbarHovered || void 0,
            "data-hidden": type === "never" || void 0
          }
        )
      ]
    }
  );
});
ScrollArea.displayName = "@mantine/core/ScrollArea";
const ScrollAreaAutosize = (0,factory/* factory */.P9)((props, ref) => {
  const {
    children,
    classNames,
    styles,
    scrollbarSize,
    scrollHideDelay,
    type,
    dir,
    offsetScrollbars,
    viewportRef,
    onScrollPositionChange,
    unstyled,
    variant,
    viewportProps,
    scrollbars,
    style,
    vars,
    onBottomReached,
    onTopReached,
    ...others
  } = (0,use_props/* useProps */.Y)("ScrollAreaAutosize", ScrollArea_defaultProps, props);
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { ...others, ref, style: [{ display: "flex", overflow: "auto" }, style], children: /* @__PURE__ */ (0,jsx_runtime.jsx)(Box/* Box */.a, { style: { display: "flex", flexDirection: "column", flex: 1 }, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
    ScrollArea,
    {
      classNames,
      styles,
      scrollHideDelay,
      scrollbarSize,
      type,
      dir,
      offsetScrollbars,
      viewportRef,
      onScrollPositionChange,
      unstyled,
      variant,
      viewportProps,
      vars,
      scrollbars,
      onBottomReached,
      onTopReached,
      children
    }
  ) }) });
});
ScrollArea.classes = ScrollArea_module_css_classes;
ScrollAreaAutosize.displayName = "@mantine/core/ScrollAreaAutosize";
ScrollAreaAutosize.classes = ScrollArea_module_css_classes;
ScrollArea.Autosize = ScrollAreaAutosize;


//# sourceMappingURL=ScrollArea.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/is-options-group.mjs
'use client';
function isOptionsGroup(item) {
  return "group" in item;
}


//# sourceMappingURL=is-options-group.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/default-options-filter.mjs
'use client';


function defaultOptionsFilter({
  options,
  search,
  limit
}) {
  const parsedSearch = search.trim().toLowerCase();
  const result = [];
  for (let i = 0; i < options.length; i += 1) {
    const item = options[i];
    if (result.length === limit) {
      return result;
    }
    if (isOptionsGroup(item)) {
      result.push({
        group: item.group,
        items: defaultOptionsFilter({
          options: item.items,
          search,
          limit: limit - result.length
        })
      });
    }
    if (!isOptionsGroup(item)) {
      if (item.label.toLowerCase().includes(parsedSearch)) {
        result.push(item);
      }
    }
  }
  return result;
}


//# sourceMappingURL=default-options-filter.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/is-empty-combobox-data.mjs
'use client';
function isEmptyComboboxData(data) {
  if (data.length === 0) {
    return true;
  }
  for (const item of data) {
    if (!("group" in item)) {
      return false;
    }
    if (item.items.length > 0) {
      return false;
    }
  }
  return true;
}


//# sourceMappingURL=is-empty-combobox-data.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/validate-options.mjs
'use client';


function validateOptions(options, valuesSet = /* @__PURE__ */ new Set()) {
  if (!Array.isArray(options)) {
    return;
  }
  for (const option of options) {
    if (isOptionsGroup(option)) {
      validateOptions(option.items, valuesSet);
    } else {
      if (typeof option.value === "undefined") {
        throw new Error("[@mantine/core] Each option must have value property");
      }
      if (typeof option.value !== "string") {
        throw new Error(
          `[@mantine/core] Option value must be a string, other data formats are not supported, got ${typeof option.value}`
        );
      }
      if (valuesSet.has(option.value)) {
        throw new Error(
          `[@mantine/core] Duplicate options are not supported. Option with value "${option.value}" was provided more than once`
        );
      }
      valuesSet.add(option.value);
    }
  }
}


//# sourceMappingURL=validate-options.mjs.map

;// ./node_modules/@mantine/core/esm/components/Combobox/OptionsDropdown/OptionsDropdown.mjs
'use client';

















function isValueChecked(value, optionValue) {
  return Array.isArray(value) ? value.includes(optionValue) : value === optionValue;
}
function Option({
  data,
  withCheckIcon,
  value,
  checkIconPosition,
  unstyled,
  renderOption
}) {
  if (!isOptionsGroup(data)) {
    const checked = isValueChecked(value, data.value);
    const check = withCheckIcon && checked && /* @__PURE__ */ (0,jsx_runtime.jsx)(CheckIcon, { className: Combobox_module_css_classes.optionsDropdownCheckIcon });
    const defaultContent = /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
      checkIconPosition === "left" && check,
      /* @__PURE__ */ (0,jsx_runtime.jsx)("span", { children: data.label }),
      checkIconPosition === "right" && check
    ] });
    return /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Combobox.Option,
      {
        value: data.value,
        disabled: data.disabled,
        className: (0,clsx/* default */.A)({ [Combobox_module_css_classes.optionsDropdownOption]: !unstyled }),
        "data-reverse": checkIconPosition === "right" || void 0,
        "data-checked": checked || void 0,
        "aria-selected": checked,
        active: checked,
        children: typeof renderOption === "function" ? renderOption({ option: data, checked }) : defaultContent
      }
    );
  }
  const options = data.items.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Option,
    {
      data: item,
      value,
      unstyled,
      withCheckIcon,
      checkIconPosition,
      renderOption
    },
    item.value
  ));
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Combobox.Group, { label: data.group, children: options });
}
function OptionsDropdown({
  data,
  hidden,
  hiddenWhenEmpty,
  filter,
  search,
  limit,
  maxDropdownHeight,
  withScrollArea = true,
  filterOptions = true,
  withCheckIcon = false,
  value,
  checkIconPosition,
  nothingFoundMessage,
  unstyled,
  labelId,
  renderOption,
  scrollAreaProps,
  "aria-label": ariaLabel
}) {
  validateOptions(data);
  const shouldFilter = typeof search === "string";
  const filteredData = shouldFilter ? (filter || defaultOptionsFilter)({
    options: data,
    search: filterOptions ? search : "",
    limit: limit ?? Infinity
  }) : data;
  const isEmpty = isEmptyComboboxData(filteredData);
  const options = filteredData.map((item) => /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Option,
    {
      data: item,
      withCheckIcon,
      value,
      checkIconPosition,
      unstyled,
      renderOption
    },
    isOptionsGroup(item) ? item.group : item.value
  ));
  return /* @__PURE__ */ (0,jsx_runtime.jsx)(Combobox.Dropdown, { hidden: hidden || hiddenWhenEmpty && isEmpty, children: /* @__PURE__ */ (0,jsx_runtime.jsxs)(Combobox.Options, { labelledBy: labelId, "aria-label": ariaLabel, children: [
    withScrollArea ? /* @__PURE__ */ (0,jsx_runtime.jsx)(
      ScrollArea.Autosize,
      {
        mah: maxDropdownHeight ?? 220,
        type: "scroll",
        scrollbarSize: "var(--combobox-padding)",
        offsetScrollbars: "y",
        ...scrollAreaProps,
        children: options
      }
    ) : options,
    isEmpty && nothingFoundMessage && /* @__PURE__ */ (0,jsx_runtime.jsx)(Combobox.Empty, { children: nothingFoundMessage })
  ] }) });
}


//# sourceMappingURL=OptionsDropdown.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/InputBase/InputBase.mjs + 1 modules
var InputBase = __webpack_require__(82056);
;// ./node_modules/@mantine/core/esm/components/Select/Select.mjs
'use client';




































const Select_defaultProps = {
  searchable: false,
  withCheckIcon: true,
  allowDeselect: true,
  checkIconPosition: "left"
};
const Select = (0,factory/* factory */.P9)((_props, ref) => {
  const props = (0,use_props/* useProps */.Y)("Select", Select_defaultProps, _props);
  const {
    classNames,
    styles,
    unstyled,
    vars,
    dropdownOpened,
    defaultDropdownOpened,
    onDropdownClose,
    onDropdownOpen,
    onFocus,
    onBlur,
    onClick,
    onChange,
    data,
    value,
    defaultValue,
    selectFirstOptionOnChange,
    onOptionSubmit,
    comboboxProps,
    readOnly,
    disabled,
    filter,
    limit,
    withScrollArea,
    maxDropdownHeight,
    size,
    searchable,
    rightSection,
    checkIconPosition,
    withCheckIcon,
    nothingFoundMessage,
    name,
    form,
    searchValue,
    defaultSearchValue,
    onSearchChange,
    allowDeselect,
    error,
    rightSectionPointerEvents,
    id,
    clearable,
    clearButtonProps,
    hiddenInputProps,
    renderOption,
    onClear,
    autoComplete,
    scrollAreaProps,
    ...others
  } = props;
  const parsedData = (0,react.useMemo)(() => getParsedComboboxData(data), [data]);
  const optionsLockup = (0,react.useMemo)(() => getOptionsLockup(parsedData), [parsedData]);
  const _id = (0,use_id/* useId */.B)(id);
  const [_value, setValue, controlled] = useUncontrolled({
    value,
    defaultValue,
    finalValue: null,
    onChange
  });
  const selectedOption = typeof _value === "string" ? optionsLockup[_value] : void 0;
  const previousSelectedOption = usePrevious(selectedOption);
  const [search, setSearch] = useUncontrolled({
    value: searchValue,
    defaultValue: defaultSearchValue,
    finalValue: selectedOption ? selectedOption.label : "",
    onChange: onSearchChange
  });
  const combobox = useCombobox({
    opened: dropdownOpened,
    defaultOpened: defaultDropdownOpened,
    onDropdownOpen: () => {
      onDropdownOpen?.();
      combobox.updateSelectedOptionIndex("active", { scrollIntoView: true });
    },
    onDropdownClose: () => {
      onDropdownClose?.();
      combobox.resetSelectedOption();
    }
  });
  const { resolvedClassNames, resolvedStyles } = useResolvedStylesApi({
    props,
    styles,
    classNames
  });
  (0,react.useEffect)(() => {
    if (selectFirstOptionOnChange) {
      combobox.selectFirstOption();
    }
  }, [selectFirstOptionOnChange, _value]);
  (0,react.useEffect)(() => {
    if (value === null) {
      setSearch("");
    }
    if (typeof value === "string" && selectedOption && (previousSelectedOption?.value !== selectedOption.value || previousSelectedOption?.label !== selectedOption.label)) {
      setSearch(selectedOption.label);
    }
  }, [value, selectedOption]);
  const clearButton = clearable && !!_value && !disabled && !readOnly && /* @__PURE__ */ (0,jsx_runtime.jsx)(
    Combobox.ClearButton,
    {
      size,
      ...clearButtonProps,
      onClear: () => {
        setValue(null, null);
        setSearch("");
        onClear?.();
      }
    }
  );
  return /* @__PURE__ */ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0,jsx_runtime.jsxs)(
      Combobox,
      {
        store: combobox,
        __staticSelector: "Select",
        classNames: resolvedClassNames,
        styles: resolvedStyles,
        unstyled,
        readOnly,
        onOptionSubmit: (val) => {
          onOptionSubmit?.(val);
          const optionLockup = allowDeselect ? optionsLockup[val].value === _value ? null : optionsLockup[val] : optionsLockup[val];
          const nextValue = optionLockup ? optionLockup.value : null;
          nextValue !== _value && setValue(nextValue, optionLockup);
          !controlled && setSearch(typeof nextValue === "string" ? optionLockup?.label || "" : "");
          combobox.closeDropdown();
        },
        size,
        ...comboboxProps,
        children: [
          /* @__PURE__ */ (0,jsx_runtime.jsx)(Combobox.Target, { targetType: searchable ? "input" : "button", autoComplete, children: /* @__PURE__ */ (0,jsx_runtime.jsx)(
            InputBase/* InputBase */.O,
            {
              id: _id,
              ref,
              rightSection: rightSection || clearButton || /* @__PURE__ */ (0,jsx_runtime.jsx)(Combobox.Chevron, { size, error, unstyled }),
              rightSectionPointerEvents: rightSectionPointerEvents || (clearButton ? "all" : "none"),
              ...others,
              size,
              __staticSelector: "Select",
              disabled,
              readOnly: readOnly || !searchable,
              value: search,
              onChange: (event) => {
                setSearch(event.currentTarget.value);
                combobox.openDropdown();
                selectFirstOptionOnChange && combobox.selectFirstOption();
              },
              onFocus: (event) => {
                searchable && combobox.openDropdown();
                onFocus?.(event);
              },
              onBlur: (event) => {
                searchable && combobox.closeDropdown();
                setSearch(_value != null ? optionsLockup[_value]?.label || "" : "");
                onBlur?.(event);
              },
              onClick: (event) => {
                searchable ? combobox.openDropdown() : combobox.toggleDropdown();
                onClick?.(event);
              },
              classNames: resolvedClassNames,
              styles: resolvedStyles,
              unstyled,
              pointer: !searchable,
              error
            }
          ) }),
          /* @__PURE__ */ (0,jsx_runtime.jsx)(
            OptionsDropdown,
            {
              data: parsedData,
              hidden: readOnly || disabled,
              filter,
              search,
              limit,
              hiddenWhenEmpty: !nothingFoundMessage,
              withScrollArea,
              maxDropdownHeight,
              filterOptions: searchable && selectedOption?.label !== search,
              value: _value,
              checkIconPosition,
              withCheckIcon,
              nothingFoundMessage,
              unstyled,
              labelId: others.label ? `${_id}-label` : void 0,
              "aria-label": others.label ? void 0 : others["aria-label"],
              renderOption,
              scrollAreaProps
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0,jsx_runtime.jsx)(
      Combobox.HiddenInput,
      {
        value: _value,
        name,
        form,
        disabled,
        ...hiddenInputProps
      }
    )
  ] });
});
Select.classes = { ...InputBase/* InputBase */.O.classes, ...Combobox.classes };
Select.displayName = "@mantine/core/Select";


//# sourceMappingURL=Select.mjs.map


/***/ }),

/***/ 69019:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ Stack)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
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

/***/ 17826:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* binding */ Text)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/get-size/get-size.mjs
var get_size = __webpack_require__(56324);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-theme-color/get-theme-color.mjs
var get_theme_color = __webpack_require__(86344);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-gradient/get-gradient.mjs
var get_gradient = __webpack_require__(91752);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
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

/***/ 57193:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ TextInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46100);
/* harmony import */ var _core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2412);
/* harmony import */ var _InputBase_InputBase_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82056);
'use client';















const defaultProps = {};
const TextInput = (0,_core_factory_factory_mjs__WEBPACK_IMPORTED_MODULE_2__/* .factory */ .P9)((props, ref) => {
  const _props = (0,_core_MantineProvider_use_props_use_props_mjs__WEBPACK_IMPORTED_MODULE_3__/* .useProps */ .Y)("TextInput", defaultProps, props);
  return /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_InputBase_InputBase_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputBase */ .O, { component: "input", ref, ..._props, __staticSelector: "TextInput" });
});
TextInput.classes = _InputBase_InputBase_mjs__WEBPACK_IMPORTED_MODULE_4__/* .InputBase */ .O.classes;
TextInput.displayName = "@mantine/core/TextInput";


//# sourceMappingURL=TextInput.mjs.map


/***/ }),

/***/ 89652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ Title)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/create-vars-resolver/create-vars-resolver.mjs
var create_vars_resolver = __webpack_require__(59396);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/factory.mjs
var factory = __webpack_require__(2412);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
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

/***/ 73087:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  e: () => (/* binding */ Transition)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
var react_dom = __webpack_require__(40961);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-reduced-motion/use-reduced-motion.mjs + 1 modules
var use_reduced_motion = __webpack_require__(36311);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-did-update/use-did-update.mjs
var use_did_update = __webpack_require__(297);
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
  const shouldReduceMotion = (0,use_reduced_motion/* useReducedMotion */.I)();
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
  (0,use_did_update/* useDidUpdate */.C)(() => {
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


/***/ }),

/***/ 46076:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  N: () => (/* binding */ UnstyledButton)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/use-props/use-props.mjs
var use_props = __webpack_require__(46100);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/use-styles.mjs + 15 modules
var use_styles = __webpack_require__(52837);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/factory/polymorphic-factory.mjs
var polymorphic_factory = __webpack_require__(18639);
;// ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.module.css.mjs
'use client';
var classes = {"root":"m_87cf2631"};


//# sourceMappingURL=UnstyledButton.module.css.mjs.map

;// ./node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs
'use client';
















const defaultProps = {
  __staticSelector: "UnstyledButton"
};
const UnstyledButton = (0,polymorphic_factory/* polymorphicFactory */.v)(
  (_props, ref) => {
    const props = (0,use_props/* useProps */.Y)("UnstyledButton", defaultProps, _props);
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
      classes: classes,
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
UnstyledButton.classes = classes;
UnstyledButton.displayName = "@mantine/core/UnstyledButton";


//# sourceMappingURL=UnstyledButton.mjs.map


/***/ }),

/***/ 83144:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ Box)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
;// ./node_modules/@mantine/core/esm/core/factory/create-polymorphic-component.mjs
function createPolymorphicComponent(component) {
  return component;
}


//# sourceMappingURL=create-polymorphic-component.mjs.map

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var Mantine_context = __webpack_require__(66192);
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
var is_number_like = __webpack_require__(12940);
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
var extract_style_props = __webpack_require__(63733);
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
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(89569);
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

/***/ 63733:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ extractStyleProps)
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(77602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
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

/***/ 66192:
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
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
var jsx_runtime = __webpack_require__(74848);
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
var Mantine_context = __webpack_require__(66192);
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
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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
var get_primary_shade = __webpack_require__(80684);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(89569);
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
var rgba = __webpack_require__(97170);
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
var default_theme = __webpack_require__(15304);
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
var use_isomorphic_effect = __webpack_require__(45585);
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
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/default-theme.mjs + 3 modules
var default_theme = __webpack_require__(15304);
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

/***/ 91752:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ getGradient)
/* harmony export */ });
/* harmony import */ var _get_theme_color_get_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86344);
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

/***/ 80684:
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

/***/ 86344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   r: () => (/* binding */ getThemeColor)
/* harmony export */ });
/* harmony import */ var _parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89569);
'use client';


function getThemeColor(color, theme) {
  const parsed = (0,_parse_theme_color_parse_theme_color_mjs__WEBPACK_IMPORTED_MODULE_0__/* .parseThemeColor */ .g)({ color: color || theme.primaryColor, theme });
  return parsed.variable ? `var(${parsed.variable})` : color;
}


//# sourceMappingURL=get-theme-color.mjs.map


/***/ }),

/***/ 89569:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  g: () => (/* binding */ parseThemeColor)
});

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/get-primary-shade/get-primary-shade.mjs
var get_primary_shade = __webpack_require__(80684);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
var to_rgba = __webpack_require__(59444);
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

/***/ 97170:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   B: () => (/* binding */ rgba),
/* harmony export */   X: () => (/* binding */ alpha)
/* harmony export */ });
/* harmony import */ var _to_rgba_to_rgba_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59444);


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

/***/ 59444:
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

/***/ 15304:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ DEFAULT_THEME)
});

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs
var rem = __webpack_require__(88149);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/to-rgba/to-rgba.mjs
var to_rgba = __webpack_require__(59444);
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
var get_gradient = __webpack_require__(91752);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/parse-theme-color/parse-theme-color.mjs + 1 modules
var parse_theme_color = __webpack_require__(89569);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/color-functions/rgba/rgba.mjs
var rgba = __webpack_require__(97170);
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

/***/ 46100:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ useProps)
/* harmony export */ });
/* harmony import */ var _utils_filter_props_filter_props_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77602);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74848);
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
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

/***/ 18639:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ polymorphicFactory)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
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

/***/ 59396:
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

/***/ 74593:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ resolveClassNames)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34164);
'use client';


const EMPTY_CLASS_NAMES = {};
function mergeClassNames(objects) {
  const merged = {};
  objects.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      if (merged[key]) {
        merged[key] = (0,clsx__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(merged[key], value);
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


/***/ }),

/***/ 44812:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ resolveStyles)
/* harmony export */ });
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


/***/ }),

/***/ 52837:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ useStyles)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/Mantine.context.mjs
var Mantine_context = __webpack_require__(66192);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineThemeProvider/MantineThemeProvider.mjs + 1 modules
var MantineThemeProvider = __webpack_require__(1101);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
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

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/resolve-class-names/resolve-class-names.mjs
var resolve_class_names = __webpack_require__(74593);
;// ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-class-name/get-options-class-names/get-options-class-names.mjs
'use client';


function getOptionsClassNames({
  selector,
  stylesCtx,
  options,
  props,
  theme
}) {
  return (0,resolve_class_names/* resolveClassNames */.J)({
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
  return (0,resolve_class_names/* resolveClassNames */.J)({ theme, classNames, props, stylesCtx })[selector];
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
    (n) => (0,resolve_class_names/* resolveClassNames */.J)({
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

// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/styles-api/use-styles/get-style/resolve-styles/resolve-styles.mjs
var resolve_styles = __webpack_require__(44812);
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
    (n) => (0,resolve_styles/* resolveStyles */.N)({
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
var filter_props = __webpack_require__(77602);
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
    ...!withStylesTransform && (0,resolve_styles/* resolveStyles */.N)({ theme, styles, props, stylesCtx })[selector],
    ...!withStylesTransform && (0,resolve_styles/* resolveStyles */.N)({ theme, styles: options?.styles, props: options?.props || props, stylesCtx })[selector],
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

/***/ 46798:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   F: () => (/* binding */ createSafeContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
'use client';



function createSafeContext(errorMessage) {
  const Context = (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
  const useSafeContext = () => {
    const ctx = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(Context);
    if (ctx === null) {
      throw new Error(errorMessage);
    }
    return ctx;
  };
  const Provider = ({ children, value }) => /* @__PURE__ */ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, { value, children });
  return [Provider, useSafeContext];
}


//# sourceMappingURL=create-safe-context.mjs.map


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

/***/ 77602:
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

/***/ 68690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ getDefaultZIndex)
/* harmony export */ });
'use client';
const elevations = {
  app: 100,
  modal: 200,
  popover: 300,
  overlay: 400,
  max: 9999
};
function getDefaultZIndex(level) {
  return elevations[level];
}


//# sourceMappingURL=get-default-z-index.mjs.map


/***/ }),

/***/ 56324:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GY: () => (/* binding */ getSpacing),
/* harmony export */   YC: () => (/* binding */ getSize),
/* harmony export */   dh: () => (/* binding */ getShadow),
/* harmony export */   ks: () => (/* binding */ getLineHeight),
/* harmony export */   nJ: () => (/* binding */ getRadius),
/* harmony export */   ny: () => (/* binding */ getFontSize)
/* harmony export */ });
/* harmony import */ var _is_number_like_is_number_like_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12940);
/* harmony import */ var _units_converters_rem_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88149);
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

/***/ 49178:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ isElement)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';


function isElement(value) {
  if (Array.isArray(value) || value === null) {
    return false;
  }
  if (typeof value === "object") {
    if (value.type === react__WEBPACK_IMPORTED_MODULE_0__.Fragment) {
      return false;
    }
    return true;
  }
  return false;
}


//# sourceMappingURL=is-element.mjs.map


/***/ }),

/***/ 12940:
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

/***/ 88149:
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

/***/ 297:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ useDidUpdate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';


function useDidUpdate(fn, dependencies) {
  const mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(
    () => () => {
      mounted.current = false;
    },
    []
  );
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (mounted.current) {
      return fn();
    }
    mounted.current = true;
    return void 0;
  }, dependencies);
}


//# sourceMappingURL=use-did-update.mjs.map


/***/ }),

/***/ 72273:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ useFocusReturn)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _use_did_update_use_did_update_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
'use client';



function useFocusReturn({ opened, shouldReturnFocus = true }) {
  const lastActiveElement = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  const returnFocus = () => {
    if (lastActiveElement.current && "focus" in lastActiveElement.current && typeof lastActiveElement.current.focus === "function") {
      lastActiveElement.current?.focus({ preventScroll: true });
    }
  };
  (0,_use_did_update_use_did_update_mjs__WEBPACK_IMPORTED_MODULE_1__/* .useDidUpdate */ .C)(() => {
    let timeout = -1;
    const clearFocusTimeout = (event) => {
      if (event.key === "Tab") {
        window.clearTimeout(timeout);
      }
    };
    document.addEventListener("keydown", clearFocusTimeout);
    if (opened) {
      lastActiveElement.current = document.activeElement;
    } else if (shouldReturnFocus) {
      timeout = window.setTimeout(returnFocus, 10);
    }
    return () => {
      window.clearTimeout(timeout);
      document.removeEventListener("keydown", clearFocusTimeout);
    };
  }, [opened, shouldReturnFocus]);
  return returnFocus;
}


//# sourceMappingURL=use-focus-return.mjs.map


/***/ }),

/***/ 66284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  B: () => (/* binding */ useId)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/use-isomorphic-effect/use-isomorphic-effect.mjs
var use_isomorphic_effect = __webpack_require__(45585);
// EXTERNAL MODULE: ./node_modules/@mantine/hooks/esm/utils/random-id/random-id.mjs
var random_id = __webpack_require__(45727);
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
    setUuid((0,random_id/* randomId */.z)());
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


/***/ }),

/***/ 45585:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ useIsomorphicEffect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';


const useIsomorphicEffect = typeof document !== "undefined" ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


//# sourceMappingURL=use-isomorphic-effect.mjs.map


/***/ }),

/***/ 37055:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bl: () => (/* binding */ assignRef),
/* harmony export */   pc: () => (/* binding */ useMergedRef)
/* harmony export */ });
/* unused harmony export mergeRefs */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
'use client';


function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}
function useMergedRef(...refs) {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(mergeRefs(...refs), refs);
}


//# sourceMappingURL=use-merged-ref.mjs.map


/***/ }),

/***/ 36311:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* binding */ useReducedMotion)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
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


/***/ }),

/***/ 45727:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ randomId)
/* harmony export */ });
'use client';
function randomId() {
  return `mantine-${Math.random().toString(36).slice(2, 11)}`;
}


//# sourceMappingURL=random-id.mjs.map


/***/ })

}]);
//# sourceMappingURL=vendor.mantine.bundle.js.map