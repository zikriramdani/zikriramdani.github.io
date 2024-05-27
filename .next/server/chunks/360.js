"use strict";
exports.id = 360;
exports.ids = [360];
exports.modules = {

/***/ 1360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ experiences)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/action/experiences/type.js
var type = __webpack_require__(6802);
;// CONCATENATED MODULE: ./assets/data/data-experiences.json
const data_experiences_namespaceObject = JSON.parse('[{"id":1,"name_pt":"PT BRIDGENOTE INDONESIA","jenis_pekerjaan":"Purna Waktu","position":"Frontend Engineering","start_date":"Nov 2022","end_date":"Present","location":"Jakarta Selatan","job_desc":"<p>Project Accounting, Admin & API<br><br>- GIT<br>- Slicing Figma to React JS<br>- Integrasi API to React JS<br>- Upgrade Laravel 9 to 11<br>- Docker<br>- Ubuntu</p>"},{"id":2,"name_pt":"PT SHARING VISION INDONESIA","jenis_pekerjaan":"Purna Waktu","position":"Web Developers","start_date":"Agust 2021","end_date":"Okt 2022","location":"Bandung","job_desc":"<p>Project Application Portofolio Management (APM) & DQ Rules<br><br>- GIT<br>- Slicing PSD to React JS<br>- Integrasi API to React JS<br>- Membuat API ( Golang )<br></p>"},{"id":3,"name_pt":"PT TEKNOLOGI HANDAL LANCAR","jenis_pekerjaan":"Purna Waktu","position":"Web Developers","start_date":"Feb 2020","end_date":"Jul 2021","location":"Tangerang Selatan","job_desc":"<p>Project Robotic<br><br>- GIT<br>- Database Mysql ( Sequelize )<br>- Membuat API ( Node JS )<br>- Membuat Web Server ( Node JS )<br>- Slicing PSD to Express JS<br>- Realtime Control ( Socket.io )<br>- Deploy Staging ( VPS )<br></p>"},{"id":3,"name_pt":"PT AKO MEDIA ASIA","jenis_pekerjaan":"Purna Waktu","position":"Web Developers","start_date":"Jun 2019","end_date":"Jan 2020","location":"Jakarta Barat","job_desc":"<p>Project DuniaGames<br><br>- Git<br>- Slicing PSD to Angular<br>- Integrasi API to Angular<br>- Bugs dan Fix ( Angular )<br>- Deploy Staging dan Prod ( Os Ubuntu (Terminal dan Filezilla )</p>"},{"id":4,"name_pt":"PT YAMISOK TECH INDONESIA","jenis_pekerjaan":"Purna Waktu","position":"Web Developers","start_date":"Sep 2017","end_date":"Mei 2019","location":"Tangerang Selatan","job_desc":"<p>- Git<br>- Slicing PSD to Laravel / Vue Js<br>- Function data dynamic ( Laravel dan Vue Js )<br>- Bugs dan Fix ( Laravel dan Vue Js )</p>"},{"id":5,"name_pt":"THECONVERSION","jenis_pekerjaan":"Paruh Waktu","position":"Web Developers","start_date":"Jan 2015","end_date":"Sep 2016","location":"Tangerang Selatan","job_desc":"<p>- Membuat Website ( Wordpress )<br>- Membuat Landing Page ( Html, Css dan Javascript )<br>- Mengelola/Membuat cpanel server untuk client ( WHM dan Cpanel )</p>"},{"id":6,"name_pt":"PT TDW RESOURCES","jenis_pekerjaan":"Paruh Waktu","position":"Web Developers","start_date":"Mei 2015","end_date":"Agust 2015","location":"Tangerang Selatan","job_desc":"<p>- Membuat Website ( Wordpress )<br>- Membuat Landing Page ( Html, Css dan Javascript )<br>- Membuat Cloning Website</p>"}]');
;// CONCATENATED MODULE: ./redux/action/experiences/creator.js

// Data Json

// Read
const getListExperiences = ()=>{
    return (dispatch)=>{
        return dispatch(saveListExperiences(data_experiences_namespaceObject));
    };
};
// Read
const saveListExperiences = (payload)=>{
    return {
        type: type/* actionType.loadExperiences */.A.loadExperiences,
        payload: payload
    };
};

;// CONCATENATED MODULE: ./pages/components/experiences/index.js




const Experiences = ()=>{
    const experiencesList = (0,external_react_redux_.useSelector)((state)=>state.experiences.experiencesList);
    const dispatch = (0,external_react_redux_.useDispatch)();
    const fetchExperiencesList = async ()=>{
        dispatch(getListExperiences());
    };
    (0,external_react_.useEffect)(()=>{
        fetchExperiencesList();
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
                                    className: "o-content",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                            className: "o-section__heading",
                                            children: "Experience"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "o-content__body o-section__description",
                                            children: "Yes. I've been around."
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "o-section__content t-section__content u-pb-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "a-experience-timeline c-timeline t-border-color",
                                    children: experiencesList.map((item, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "c-timeline__item",
                                            "data-aos": "fade-up",
                                            "data-aos-delay": "0",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "c-timeline__point t-timeline__point t-primary-bg"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "o-content",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        className: "o-grid",
                                                        children: [
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "o-grid__col-md-5",
                                                                children: [
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                        className: "c-work__timeframe",
                                                                        children: [
                                                                            item.start_date,
                                                                            " – ",
                                                                            item.end_date
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                                        className: "c-work__heading",
                                                                        children: item.name_pt
                                                                    }),
                                                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                                                        className: "c-work__title",
                                                                        children: [
                                                                            item.jenis_pekerjaan,
                                                                            " - ",
                                                                            item.position
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        className: "c-work__location",
                                                                        children: item.location
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                                className: "o-grid__col-md-7",
                                                                children: [
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                                        children: "Job Desc:"
                                                                    }),
                                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                        dangerouslySetInnerHTML: {
                                                                            __html: item.job_desc
                                                                        }
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
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
/* harmony default export */ const experiences = (Experiences);


/***/ }),

/***/ 6802:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ actionType)
/* harmony export */ });
const actionType = {
    loadExperiences: "load-experiences",
    loadExperiencesResetData: "load-experiences-reset-data"
};


/***/ })

};
;