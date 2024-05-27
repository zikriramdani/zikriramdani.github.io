"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 9306:
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
/* harmony import */ var _redux_action_certificates_creator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6916);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__]);
([yet_another_react_lightbox__WEBPACK_IMPORTED_MODULE_2__, yet_another_react_lightbox_plugins_fullscreen__WEBPACK_IMPORTED_MODULE_4__, yet_another_react_lightbox_plugins_thumbnails__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




// import optional lightbox plugins





const Certificates = ()=>{
    const certificatesList = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.certificates.certificatesList);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    const { 0: index , 1: setIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const slides = certificatesList.map(({ src , width , height , image  })=>({
            src: image,
            srcSet: certificatesList.map((image)=>({
                    src: image.image
                }))
        }));
    const fetchCertificatesList = async ()=>{
        dispatch((0,_redux_action_certificates_creator__WEBPACK_IMPORTED_MODULE_8__/* .getListCertificates */ .s)());
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        fetchCertificatesList();
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
                                            children: "Certificate"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "o-content__body o-section__description"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "o-section__content t-section__content o-section__full-bottom-space",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "o-grid o-grid--gallery",
                                    children: [
                                        certificatesList.map((item, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "o-grid__col-sm-6 o-grid__col-xs-6 a-content",
                                                "data-aos": "flip-right",
                                                "data-aos-delay": i + 1 + "00",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    className: "c-image-overlay t-image-overlay js-lightbox",
                                                    "data-lightbox-hidpi": "",
                                                    "data-lightbox-gallery": "portfolio",
                                                    title: item.name,
                                                    onClick: ()=>setIndex(i),
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                            alt: item.name,
                                                            src: item.image_thumb
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            className: "c-image-overlay__content",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: item.name
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certificates);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6916:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "s": () => (/* binding */ getListCertificates)
});

// UNUSED EXPORTS: saveListCertificates

// EXTERNAL MODULE: ./redux/action/certificates/type.js
var type = __webpack_require__(3629);
;// CONCATENATED MODULE: ./assets/data/data-certificates.json
const data_certificates_namespaceObject = JSON.parse('[{"id":1,"name":"Advanced React","image":"/assets/images/portfolio/UC-ZikriRamdani.png","image_thumb":"/assets/images/portfolio/UC-ZikriRamdani_thumb.png"},{"id":2,"name":"Javascript","image":"/assets/images/portfolio/babastudio.png","image_thumb":"/assets/images/portfolio/babastudio_thumb.png"},{"id":3,"name":"Mobile Apps Android dan Kotlin","image":"/assets/images/portfolio/CERT-SKILLACADEMY.jpg","image_thumb":"/assets/images/portfolio/CERT-SKILLACADEMY_thumb.jpg"}]');
;// CONCATENATED MODULE: ./redux/action/certificates/creator.js

// Data Json

// Read
const getListCertificates = ()=>{
    return (dispatch)=>{
        return dispatch(saveListCertificates(data_certificates_namespaceObject));
    };
};
// Read
const saveListCertificates = (payload)=>{
    return {
        type: type/* actionType.loadCertificates */.A.loadCertificates,
        payload: payload
    };
};


/***/ }),

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ actionType)
/* harmony export */ });
const actionType = {
    loadCertificates: "load-certificates",
    loadCertificatesResetData: "load-certificates-reset-data"
};


/***/ })

};
;