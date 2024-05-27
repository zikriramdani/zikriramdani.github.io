"use strict";
exports.id = 265;
exports.ids = [265];
exports.modules = {

/***/ 4265:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5717);
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8069);
/* harmony import */ var yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yet_another_react_lightbox_styles_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1485);
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5255);
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7357);
/* harmony import */ var yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(yet_another_react_lightbox_plugins_thumbnails_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_action_portfolios_creator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7714);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__]);
([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import optional lightbox plugins





const Portfolios = ()=>{
    const portfoliosList = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.portfolios.portfoliosList);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const slides = portfoliosList.map(({ src , width , height , image  })=>({
            src: image,
            srcSet: portfoliosList.map((image)=>({
                    src: image.image
                }))
        }));
    const fetchPortfoliosList = async ()=>{
        dispatch((0,_redux_action_portfolios_creator__WEBPACK_IMPORTED_MODULE_8__/* .getListPortfolios */ .m)());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchPortfoliosList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
            className: "o-section t-section",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "o-section__header-bg t-section__header"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "o-section__content-bg t-section__content"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "o-container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "o-section__container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                                className: "o-section__header t-section__header",
                                "data-aos": "fade-left",
                                "data-aos-delay": "0",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "o-content a-content",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            className: "o-section__heading",
                                            children: "Portfolio"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "o-content__body o-section__description",
                                            children: "Here it gets interesting."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "o-section__content t-section__content o-section__full-bottom-space",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "o-grid o-grid--gallery",
                                    children: [
                                        portfoliosList.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "o-grid__col-sm-6 o-grid__col-xs-6 a-content",
                                                "data-aos": "flip-right",
                                                "data-aos-delay": "0",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "c-image-overlay t-image-overlay js-lightbox",
                                                    "data-lightbox-gallery": "portfolio",
                                                    "data-lightbox-hidpi": "",
                                                    title: item.name,
                                                    onClick: ()=>setIndex(i),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            alt: "",
                                                            src: item.image_thumb
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "c-image-overlay__content",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    dangerouslySetInnerHTML: {
                                                                        __html: item.name
                                                                    }
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
                                                                    className: "c-image-overlay__deco-line t-image-overlay__deco-line"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, i)),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                            slides: slides,
                                            open: index >= 0,
                                            index: index,
                                            close: ()=>setIndex(-1),
                                            // enable optional lightbox plugins
                                            plugins: [
                                                yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__["default"],
                                                yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__["default"]
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Portfolios);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "m": () => (/* binding */ getListPortfolios)
});

// UNUSED EXPORTS: saveListPortfolios

// EXTERNAL MODULE: ./redux/action/portfolios/type.js
var type = __webpack_require__(4449);
;// CONCATENATED MODULE: ./assets/data/data-portfolios.json
const data_portfolios_namespaceObject = JSON.parse('[{"id":1,"name":"PT BRIDGENOTE INDONESIA","image":"/assets/images/portfolio/PT-BRIDGENOTE-INDONESIA.png","image_thumb":"/assets/images/portfolio/PT-BRIDGENOTE-INDONESIA_thumb.png"},{"id":11,"name":"PT BRIDGENOTE INDONESIA","image":"/assets/images/portfolio/PT-BRIDGENOTE-INDONESIA-ADMIN.png","image_thumb":"/assets/images/portfolio/PT-BRIDGENOTE-INDONESIA-ADMIN_thumb.png"},{"id":2,"name":"PT SHARING VISION INDONESIA","image":"/assets/images/portfolio/DQ-RULES.png","image_thumb":"/assets/images/portfolio/DQ-RULES_thumb.png"},{"id":3,"name":"PT TEKNOLOGI HANDAL LANCAR","image":"/assets/images/portfolio/dewa-game.png","image_thumb":"/assets/images/portfolio/dewa-game_thumb.png"},{"id":4,"name":"PT AKO MEDIA ASIA","image":"/assets/images/portfolio/DUNIA-GAMES.png","image_thumb":"/assets/images/portfolio/DUNIA-GAMES_thumb.png"},{"id":5,"name":"PT YAMISOK TECH INDONESIA","image":"/assets/images/portfolio/YAMISOK.png","image_thumb":"/assets/images/portfolio/YAMISOK_thumb.png"},{"id":6,"name":"SPEAKER AUDIENCE","image":"/assets/images/portfolio/admin-webinar.png","image_thumb":"/assets/images/portfolio/admin-webinar_thumb.png"},{"id":7,"name":"MASTER AFFILIATE<br/>( React )","image":"/assets/images/portfolio/master-affiliate-webinar.png","image_thumb":"/assets/images/portfolio/master-affiliate-webinar_thumb.png"},{"id":8,"name":"BLOG","image":"/assets/images/portfolio/mobile-apps-webinar.jpeg","image_thumb":"/assets/images/portfolio/mobile-apps-webinar_thumb.jpeg"},{"id":10,"name":"Landing Page","image":"/assets/images/portfolio/lp-squeze-webinar.png","image_thumb":"/assets/images/portfolio/lp-squeze-webinar_thumb.png"}]');
;// CONCATENATED MODULE: ./redux/action/portfolios/creator.js

// Data Json

// Read
const getListPortfolios = ()=>{
    return (dispatch)=>{
        return dispatch(saveListPortfolios(data_portfolios_namespaceObject));
    };
};
// Read
const saveListPortfolios = (payload)=>{
    return {
        type: type/* actionType.loadPortfolios */.A.loadPortfolios,
        payload: payload
    };
};


/***/ }),

/***/ 4449:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ actionType)
/* harmony export */ });
const actionType = {
    loadPortfolios: "load-portfolios",
    loadPortfoliosResetData: "load-portfolios-reset-data"
};


/***/ })

};
;