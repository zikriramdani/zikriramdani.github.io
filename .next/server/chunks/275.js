"use strict";
exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 1275:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ skills)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/action/skills/type.js
var type = __webpack_require__(8961);
;// CONCATENATED MODULE: ./assets/data/data-skills.json
const data_skills_namespaceObject = JSON.parse('[{"id":1,"name":"GIT","percents":80},{"id":9,"name":"NEXT JS","percents":80},{"id":10,"name":"REACT JS","percents":80},{"id":5,"name":"LARAVEL","percents":80},{"id":13,"name":"Docker","percents":70},{"id":13,"name":"Ubuntu","percents":70},{"id":2,"name":"GOLANG","percents":50},{"id":3,"name":"Node Js","percents":80},{"id":4,"name":"EXPRESS JS","percents":80},{"id":6,"name":"LUMEN","percents":50},{"id":7,"name":"VUE JS","percents":80},{"id":8,"name":"ANGULAR","percents":80},{"id":11,"name":"REACT NATIVE","percents":50},{"id":12,"name":"SOCKET.IO","percents":80},{"id":14,"name":"CODEIGNITER","percents":80},{"id":15,"name":"SCSS / CSS / SASS","percents":80},{"id":16,"name":"JAVACRIPT","percents":80},{"id":17,"name":"TYPESCRIPT","percents":60},{"id":18,"name":"JQUERY","percents":80},{"id":19,"name":"MYSQL / MYSQL SEQUELIZE","percents":70},{"id":20,"name":"CMS","percents":80}]');
;// CONCATENATED MODULE: ./redux/action/skills/creator.js

// Data Json

// Read
const getListSkills = ()=>{
    return (dispatch)=>{
        return dispatch(saveListSkills(data_skills_namespaceObject));
    };
};
// Read
const saveListSkills = (payload)=>{
    return {
        type: type/* actionType.loadSkills */.A.loadSkills,
        payload: payload
    };
};

;// CONCATENATED MODULE: ./pages/components/skills/index.js




const Skills = ()=>{
    const skillsList = (0,external_react_redux_.useSelector)((state)=>state.skills.skillsList);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const fetchSkillsList = async ()=>{
        dispatch(getListSkills());
    };
    (0,external_react_.useEffect)(()=>{
        fetchSkillsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
            className: "o-section t-section ",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "o-section__header-bg t-section__header"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "o-section__content-bg t-section__content"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "o-container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "o-section__container",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("header", {
                                className: "o-section__header t-section__header",
                                "data-aos": "fade-left",
                                "data-aos-delay": "0",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "o-content a-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "o-section__heading",
                                            children: "Skills"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "o-content__body o-section__description",
                                            children: "Progress bars, anyone?"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "o-section__content t-section__content ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "o-grid",
                                    children: skillsList.map((item, i)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "o-grid__col-sm-6",
                                            "data-aos": "fade-right",
                                            "data-aos-delay": "0",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "o-content a-content",
                                                children: [
                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "o-media o-media--block",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "o-media__figure",
                                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                    className: "c-number t-primary-color",
                                                                    children: [
                                                                        item.percents,
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                                            children: "%"
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                className: "o-media__body",
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                    children: item.name
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "c-progress-bar o-content__body t-border-color-bg u-mt-text",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "a-progress-bar c-progress-bar__filler t-primary-bg",
                                                            style: {
                                                                width: item.percents + "%"
                                                            }
                                                        })
                                                    })
                                                ]
                                            })
                                        }, i))
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const skills = (Skills);


/***/ }),

/***/ 8961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ actionType)
/* harmony export */ });
const actionType = {
    loadSkills: "load-skills",
    loadSkillsResetData: "load-skills-reset-data"
};


/***/ })

};
;