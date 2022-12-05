sap.ui.define([
  "sap/base/Log",
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Sorter",
  "sap/ui/model/json/JSONModel",
  "sap/ui/core/format/DateFormat",
  "sap/m/ToolbarSpacer",
  "sap/ui/table/library",
  "sap/ui/thirdparty/jquery"
], function (Log, Controller, Sorter, JSONModel, DateFormat, ToolbarSpacer, library, jQuery) {
  "use strict";

  // shortcut for sap.ui.table.SortOrder
  var SortOrder = library.SortOrder;

  return Controller.extend("tag.rugby.ui.modules.Home.Home", {

    onInit: function () {
        var oModel = new JSONModel({
            HTML : '<app-root _nghost-ptf-c42="" ng-version="11.2.14"><app-player _ngcontent-ptf-c42="" _nghost-ptf-c41=""><app-display-practice _ngcontent-ptf-c41="" _nghost-ptf-c40="" style="background-color: rgb(160, 208, 56);"><!----><!----><div _ngcontent-ptf-c40="" class="objectWrap no-swiper-here"><!----><!----><!----><!----><!----><div _ngcontent-ptf-c40="" class="swiffyWrap" style="height: 200px; width: 300px;"><div style="position: relative; width: 100%; height: 100%; overflow: hidden; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); cursor: default;"><svg color-interpolation-filters="sRGB" fill-rule="evenodd" pointer-events="none" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="user-select: none;"><g transform="matrix(0.05,0,0,0.05,0,0)"><g><rect x="-3940" y="-779.9999999999999" width="9939.999999999998" height="4779.999999999999" fill="rgb(160,208,56)"></rect><g><g><g transform="matrix(1,0,0,1,5081,260)"><g transform="matrix(0.1279449462890625,0,0,0.1279449462890625,-43,-43)"><g><g><path d="M 7027 -542 q 63 0 63 40 q 0 17 -18 23 q -19 13 -45 13 q -54 0 -54 -40 q 0 -36 54 -36 z m -67 -31 q -50 0 -50 36 l 0 170 q 0 41 27 41 q 27 0 27 -41 q 0 -49 36 -49 q 20 0 41 27 l 27 40 q 21 23 40 23 q 37 0 5 -45 q -18 -23 -18 -41 q 0 -15 31 -40 q 36 -23 36 -54 q 0 -67 -99 -67 z m 67 -68 q 115 0 180 59 q 63 57 63 139 q 0 79 -68 139 q -73 54 -175 54 q -107 0 -175 -54 q -68 -60 -68 -144 q 0 -84 72 -143 q 70 -50 171 -50 z m 5 -40 q -121 0 -212 63 q -99 59 -99 170 q 0 97 95 171 q 88 68 216 68 q 118 0 206 -68 q 95 -74 95 -175 q 0 -96 -86 -162 q -86 -67 -215 -67 z m -7409 719 q 164 0 238 95 q 68 87 27 229 q -41 150 -166 243 q -130 95 -279 95 q -159 0 -234 -95 q -76 -97 -36 -243 q 48 -154 171 -238 q 125 -86 279 -86 z m 5137 369 q 69 0 94 32 q 20 26 14 67 q -19 75 -126 140 q -107 63 -211 63 q -82 0 -131 -41 q -41 -33 -27 -90 q 22 -78 162 -126 q 112 -45 225 -45 z m -6581 -387 q 142 0 202 95 q 55 89 14 234 q -36 128 -108 211 q -112 153 -306 153 q -137 0 -198 -94 q -61 -104 -22 -252 q 46 -155 162 -257 q 118 -90 256 -90 z m 4723 0 q 141 0 203 95 q 48 90 13 234 q -36 131 -103 211 q -119 153 -311 153 q -137 0 -198 -94 q -61 -104 -22 -252 q 46 -155 162 -257 q 118 -90 256 -90 z m -2190 -202 q -112 0 -171 40 q -52 33 -72 117 l -207 756 q -48 162 108 162 l 108 0 q 165 0 211 -153 l 113 -418 q 42 -152 260 -198 q 109 -20 162 -59 q 41 -28 63 -112 q 35 -117 -103 -117 l -95 13 l -94 9 l -104 -18 q -90 -22 -179 -22 z m 3247 -360 q -69 0 -130 41 q -48 33 -68 89 l -315 1152 q -20 84 18 117 q 44 36 162 36 q 201 0 234 -131 l 315 -1156 q 40 -148 -130 -148 z m 2407 369 q -108 0 -216 27 q -102 27 -162 27 l -113 -18 l -143 -14 q -182 0 -216 117 l -221 801 q -33 126 117 126 l 59 0 q 76 0 126 -32 q 59 -26 72 -85 l 117 -423 q 73 -288 314 -288 q 229 0 153 279 l -117 432 q -13 59 18 85 q 32 32 104 32 l 58 0 q 78 0 122 -32 q 59 -26 72 -85 l 175 -625 q 89 -324 -319 -324 z m -4543 -306 q -207 0 -248 144 q -20 70 -58 108 q -7 13 -108 67 q -88 48 -95 86 q -15 44 32 76 l 72 59 q 44 57 4 184 l -103 365 q -75 296 369 296 q 213 0 247 -130 q 20 -64 -63 -112 l -63 -36 q -35 -22 -40 -41 q -21 -47 0 -121 l 85 -311 l 36 -63 q 29 -28 149 -76 q 97 -33 112 -86 q 19 -59 -58 -94 l -59 -23 q -36 -21 -40 -31 q -28 -51 -9 -113 q 46 -148 -162 -148 z m -5007 288 q -226 0 -418 90 q -207 99 -248 256 q -59 214 320 288 l 274 59 q 93 35 72 94 q -6 37 -72 72 q -56 32 -148 32 q -128 0 -248 -50 l -85 -36 l -95 -13 q -59 0 -117 31 q -63 36 -76 81 q -8 28 27 63 q 36 36 99 67 q 156 72 414 72 q 284 0 481 -99 q 205 -99 252 -265 q 68 -245 -355 -306 q -190 -26 -252 -54 q -67 -27 -54 -85 q 15 -45 72 -63 q 40 -18 112 -18 q 98 0 194 31 q 101 27 148 27 q 58 0 121 -36 q 63 -34 77 -76 q 20 -64 -131 -113 q -155 -49 -364 -49 z m 2861 13 q -305 0 -544 131 q -268 143 -342 414 q -74 258 99 409 q 152 139 477 139 q 364 0 611 -157 q 227 -151 293 -396 q 74 -279 -126 -418 q -170 -122 -468 -122 z m 5155 0 q -291 0 -454 86 q -127 59 -149 144 q -19 81 131 81 q 73 0 139 -23 q 49 -19 95 -45 q 74 -41 94 -45 q 61 -22 126 -22 q 73 0 121 36 q 49 34 27 99 q -29 93 -261 112 q -336 36 -512 131 q -174 86 -216 234 q -34 134 58 220 q 100 85 320 85 q 109 0 229 -31 q 133 -36 180 -36 q 41 0 99 18 q 62 18 130 18 q 153 0 180 -99 l 167 -607 q 60 -203 -81 -284 q -113 -72 -423 -72 z m -6536 9 q -95 0 -207 23 q -113 22 -144 22 l -103 -9 l -122 -13 q -163 0 -198 117 l -310 1124 q -21 74 9 104 q 36 36 135 36 q 104 0 153 -41 q 41 -36 76 -157 q 48 -162 189 -162 l 86 13 l 153 14 q 268 0 467 -144 q 185 -138 261 -409 q 62 -239 -58 -378 q -119 -140 -387 -140 z m 4723 0 q -95 0 -207 23 l -144 22 l -103 -9 l -122 -13 q -171 0 -198 117 l -310 1124 q -20 75 9 104 q 38 36 131 36 q 108 0 157 -41 q 41 -36 76 -157 q 48 -162 189 -162 l 86 13 l 153 14 q 267 0 468 -144 q 186 -144 260 -409 q 62 -239 -58 -378 q -119 -140 -387 -140 z" fill="rgb(0,0,0)" fill-opacity="0.301"></path><path d="M -3458 -1235 q -219 308 -531 594 q -315 283 -684 504 q -364 218 -742 342 q -379 126 -706 126 q -325 0 -531 -126 q -207 -120 -274 -342 q -71 -213 4 -504 q 63 -255 225 -508 l 0 0 q -145 150 -288 360 q -230 331 -306 638 q -80 289 -4 522 q 73 223 283 351 q 220 130 549 130 q 322 0 729 -130 q 370 -125 760 -351 q 373 -223 706 -522 q 328 -295 567 -638 q 156 -239 243 -446 z" fill="rgb(0,102,153)" fill-opacity="0.301"></path><path d="M -5109 -1086 q -253 0 -549 175 q -297 175 -468 427 q -177 253 -117 428 q 28 83 104 130 q 71 42 202 50 q 257 -8 549 -180 q 294 -174 472 -428 q 168 -247 113 -427 q -61 -175 -306 -175 z" fill="rgb(255,153,0)" fill-opacity="0.301"></path></g></g></g></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,301,852)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1u)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,304,1991)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1v)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,1407,856)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1w)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,312,4269)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1x)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,2496,856)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1y)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,3592,856)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:1z)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,4688,856)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:20)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,312,5387)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:21)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,304,3126)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:22)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,1404,5387)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:23)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,2492,5395)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:24)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,3589,5395)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:25)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,4684,5387)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:26)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,4688,1983)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:27)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,4688,4261)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:28)"></path></g><g transform="matrix(0.5018768310546875,0,0,0.5196685791015625,4688,3118)"><path d="M -2 -83 l -104 166 l 213 0 l -109 -166" stroke-linecap="round" stroke-width="39.15636016012427" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:29)"></path></g><g transform="matrix(0.4552764892578125,0,0,0.471405029296875,1396,3126)"><path d="M -106 83 l 213 0 l -109 -166 l -104 166" stroke-linecap="round" stroke-width="43.164775814658086" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:2a)"></path></g><g transform="matrix(0.4552764892578125,0,0,0.471405029296875,3589,3126)"><path d="M -106 83 l 213 0 l -109 -166 l -104 166" stroke-linecap="round" stroke-width="43.164775814658086" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:2b)"></path></g><g transform="matrix(0.4552764892578125,0,0,0.471405029296875,2492,4261)"><path d="M -106 83 l 213 0 l -109 -166 l -104 166" stroke-linecap="round" stroke-width="43.164775814658086" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:2c)"></path></g><g transform="matrix(0.4552764892578125,0,0,0.471405029296875,2490,3126)"><path d="M -106 83 l 213 0 l -109 -166 l -104 166" stroke-linecap="round" stroke-width="43.164775814658086" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:2d)"></path></g><g transform="matrix(0.556243896484375,0,0,0.575958251953125,5784,5380)"><path d="M -106 83 l 213 0 l -109 -166 l -104 166" stroke-linecap="round" stroke-width="35.32938005390836" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:3y)"></path></g><g transform="matrix(0.5836029052734375,-0.3985748291015625,0.3985748291015625,0.5836029052734375,2504,2516)"><g><path d="M 7 -57 q -46 0 -80 18 q -31 19 -32 45 l 0 1 q 0 26 32 45 q 34 19 80 19 q 46 0 79 -19 q 33 -19 33 -45 l -1 -9 q -5 -21 -32 -37 q -33 -18 -79 -18 z" fill="url(#:3z)"></path><path d="M 18 17 l 1 0" stroke-linecap="round" stroke-width="28.299720165685535" stroke-linejoin="round" stroke="rgb(102,102,102)" stroke-opacity="1.000" fill="none"></path><path d="M -105 6 q 1 -26 32 -45 q 34 -18 80 -18 q 46 0 79 18 q 27 16 32 37 l 1 9 q 0 26 -33 45 q -33 19 -79 19 q -46 0 -80 -19 q -32 -19 -32 -45 m 0 -1 l 75 11 l 5 1 l 2 0 l 17 0 l 5 0 l 2 0 l 17 -1 m 1 0 l 4 0 l 2 0 l 93 -19" stroke-linecap="round" stroke-width="28.299720165685535" stroke-linejoin="round" stroke="rgb(153,153,153)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(-0.5911102294921875,-0.8025054931640625,0.8025054931640625,-0.5911102294921875,2930,2386)"><g><path d="M 141 -17 q 54 20 55 48 q -1 28 -55 48 q -53 20 -129 20 q -76 0 -131 -20 q -53 -20 -52 -48 q -1 -28 52 -48 q 55 -20 131 -20 l 107 12 l 22 8" stroke-linecap="round" stroke-width="20.066062180571393" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="url(#:40)"></path><path d="M 58 -50 l 4 5 q 15 18 15 42 q 0 26 -19 44 q -18 19 -45 20 q -26 -1 -45 -20 q -19 -18 -19 -44 q 0 -24 15 -42 l 4 -5 q 19 -18 45 -17 q 27 -1 45 17" stroke-linecap="round" stroke-width="20.066062180571393" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g></g><g transform="matrix(-0.1049652099609375,0.8179168701171875,-0.8179168701171875,-0.1049652099609375,1786,1711)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 20 -9 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26 m -16 -26 l 2 25" stroke-linecap="round" stroke-width="24.25346082255944" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="24.25346082255944" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.052642822265625,0.9205169677734375,-0.9205169677734375,0.052642822265625,1775,2041)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 13 -21 l 2 25 m 5 -13 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26" stroke-linecap="round" stroke-width="21.691479526088045" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="21.691479526088045" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.000030517578125,0.999969482421875,-0.999969482421875,0.000030517578125,1857,1863)"><g><path d="M 141 -17 q 54 20 55 48 q -1 28 -55 48 q -53 20 -129 20 q -76 0 -131 -20 q -53 -20 -52 -48 q -1 -28 52 -48 q 55 -20 131 -20 l 107 12 l 22 8" stroke-linecap="round" stroke-width="20.00061036087544" stroke-linejoin="round" stroke="rgb(0,12,160)" stroke-opacity="1.000" fill="url(#:41)"></path><path d="M 58 -50 l 4 5 q 15 18 15 42 q 0 26 -19 44 q -18 19 -45 20 q -26 -1 -45 -20 q -19 -18 -19 -44 q 0 -24 15 -42 l 4 -5 q 19 -18 45 -17 q 27 -1 45 17" stroke-linecap="round" stroke-width="20.00061036087544" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g></g><g transform="matrix(0.046417236328125,0.822174072265625,-0.822174072265625,0.046417236328125,1953,2321)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 20 -9 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26 m -16 -26 l 2 25" stroke-linecap="round" stroke-width="24.287073838202822" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="24.287073838202822" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.219879150390625,0.8940887451171875,-0.8940887451171875,0.219879150390625,2002,2646)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 13 -21 l 2 25 m 5 -13 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26" stroke-linecap="round" stroke-width="21.72192287141879" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="21.72192287141879" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.1827545166015625,0.9817047119140625,-0.9817047119140625,0.1827545166015625,2051,2457)"><g><path d="M 141 -17 q 54 20 55 48 q -1 28 -55 48 q -53 20 -129 20 q -76 0 -131 -20 q -53 -20 -52 -48 q -1 -28 52 -48 q 55 -20 131 -20 l 107 12 l 22 8" stroke-linecap="round" stroke-width="20.02862780190251" stroke-linejoin="round" stroke="rgb(0,12,160)" stroke-opacity="1.000" fill="url(#:42)"></path><path d="M 58 -50 l 4 5 q 15 18 15 42 q 0 26 -19 44 q -18 19 -45 20 q -26 -1 -45 -20 q -19 -18 -19 -44 q 0 -24 15 -42 l 4 -5 q 19 -18 45 -17 q 27 -1 45 17" stroke-linecap="round" stroke-width="20.02862780190251" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g></g><g transform="matrix(-0.1049652099609375,0.8179168701171875,-0.8179168701171875,-0.1049652099609375,1729,1069)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 20 -9 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26 m -16 -26 l 2 25" stroke-linecap="round" stroke-width="24.25346082255944" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="24.25346082255944" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.052642822265625,0.9205169677734375,-0.9205169677734375,0.052642822265625,1718,1399)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 13 -21 l 2 25 m 5 -13 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26" stroke-linecap="round" stroke-width="21.691479526088045" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="21.691479526088045" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.000030517578125,0.999969482421875,-0.999969482421875,0.000030517578125,1800,1221)"><g><path d="M 141 -17 q 54 20 55 48 q -1 28 -55 48 q -53 20 -129 20 q -76 0 -131 -20 q -53 -20 -52 -48 q -1 -28 52 -48 q 55 -20 131 -20 l 107 12 l 22 8" stroke-linecap="round" stroke-width="20.00061036087544" stroke-linejoin="round" stroke="rgb(0,12,160)" stroke-opacity="1.000" fill="url(#:43)"></path><path d="M 58 -50 l 4 5 q 15 18 15 42 q 0 26 -19 44 q -18 19 -45 20 q -26 -1 -45 -20 q -19 -18 -19 -44 q 0 -24 15 -42 l 4 -5 q 19 -18 45 -17 q 27 -1 45 17" stroke-linecap="round" stroke-width="20.00061036087544" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g></g><g transform="matrix(0.189117431640625,0.89093017578125,-0.89093017578125,0.189117431640625,2292,2309)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 20 -9 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26 m -16 -26 l 2 25" stroke-linecap="round" stroke-width="21.95917634361309" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="21.95917634361309" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.28192138671875,0.91705322265625,-0.91705322265625,0.28192138671875,2376,2626)"><g><path d="M -8 -50 l 0 67 l 12 0 l 0 -67 z" fill="rgb(255,0,0)" fill-opacity="1.000"></path><path d="M -22 38 q 3 -12 14 -16 l -2 10 l -5 14 m 13 -21 l 2 25 m 5 -13 l 4 -14 l 2 2 l 11 12 m -11 -12 q -2 16 3 26" stroke-linecap="round" stroke-width="20.846159369507117" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path><path d="M -8 17 l 0 -67 l 12 0 l 0 67 l -12 0" stroke-linecap="round" stroke-width="20.846159369507117" stroke-linejoin="round" stroke="rgb(255,0,0)" stroke-opacity="1.000" fill="none"></path></g></g><g transform="matrix(0.2675933837890625,0.9617919921875,-0.9617919921875,0.2675933837890625,2407,2433)"><g><path d="M 141 -17 q 54 20 55 48 q -1 28 -55 48 q -53 20 -129 20 q -76 0 -131 -20 q -53 -20 -52 -48 q -1 -28 52 -48 q 55 -20 131 -20 l 107 12 l 22 8" stroke-linecap="round" stroke-width="20.03358384878547" stroke-linejoin="round" stroke="rgb(0,12,160)" stroke-opacity="1.000" fill="url(#:4f)"></path><path d="M 58 -50 l 4 5 q 15 18 15 42 q 0 26 -19 44 q -18 19 -45 20 q -26 -1 -45 -20 q -19 -18 -19 -44 q 0 -24 15 -42 l 4 -5 q 19 -18 45 -17 q 27 -1 45 17" stroke-linecap="round" stroke-width="20.03358384878547" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g></g><g transform="matrix(1,0,0,1,5552,3656)"><g opacity="0"><g pointer-events="visiblePainted" transform="matrix(1,0,0,1,0,0)"><path d="M 198 -139 q 62 62 62 149 q 0 87 -62 148 q -61 62 -148 62 q -87 0 -149 -62 q -61 -61 -61 -148 q 0 -87 61 -149 q 62 -61 149 -61 q 87 0 148 61" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g><g pointer-events="visiblePainted" transform="matrix(1,0,0,1,0,0)"><path d="M -31 127 l 0 -228 l 191 114 l -191 114" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(0,0,0)" fill-opacity="1.000"></path></g></g><g><g transform="matrix(1,0,0,1,0,0)"><path d="M 198 -139 q 62 62 62 149 q 0 87 -62 148 q -61 62 -148 62 q -87 0 -149 -62 q -61 -61 -61 -148 q 0 -87 61 -149 q 62 -61 149 -61 q 87 0 148 61" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g><g transform="matrix(1,0,0,1,0,0)"><path d="M -23 113 l 0 -206 l 173 103 l -173 103" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(0,0,0)" fill-opacity="1.000"></path></g></g></g><g transform="matrix(1,0,0,1,4951,3656)"><g opacity="0"><g pointer-events="visiblePainted" transform="matrix(1,0,0,1,0,0)"><path d="M 198 -139 q 62 62 62 149 q 0 87 -62 148 q -61 62 -148 62 q -87 0 -149 -62 q -61 -61 -61 -148 q 0 -87 61 -149 q 62 -61 149 -61 q 87 0 148 61" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g><g pointer-events="visiblePainted" transform="matrix(1,0,0,1,0,0)"><path d="M 142 96 l -178 0 l 0 -178 l 178 0 l 0 178" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(204,204,204)" stroke-opacity="1.000" fill="rgb(204,204,204)" fill-opacity="1.000"></path></g></g><g><g transform="matrix(1,0,0,1,0,0)"><path d="M 198 -139 q 62 62 62 149 q 0 87 -62 148 q -61 62 -148 62 q -87 0 -149 -62 q -61 -61 -61 -148 q 0 -87 61 -149 q 62 -61 149 -61 q 87 0 148 61" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(255,255,255)" fill-opacity="1.000"></path></g><g transform="matrix(1,0,0,1,0,0)"><path d="M 142 -81 l 0 178 l -178 0 l 0 -178 l 178 0" stroke-linecap="round" stroke-width="20" stroke-linejoin="round" stroke="rgb(0,0,0)" stroke-opacity="1.000" fill="rgb(0,0,0)" fill-opacity="1.000"></path></g></g></g></g></g></g></g><defs><defs><image width="240" height="190" xlink:href="data:image/png;base64,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 gg==" id=":0"></image></defs><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1u"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1v"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1w"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1x"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1y"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":1z"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":20"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":21"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":22"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":23"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":24"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":25"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":26"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":27"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":28"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(127,0,0,127,-1,16)" id=":29"><stop offset="0" stop-color="rgb(255,102,153)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(143,0,0,143,10,-1)" id=":2a"><stop offset="0" stop-color="rgb(0,0,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(143,0,0,143,10,-1)" id=":2b"><stop offset="0" stop-color="rgb(0,0,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(143,0,0,143,10,-1)" id=":2c"><stop offset="0" stop-color="rgb(0,0,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(143,0,0,143,10,-1)" id=":2d"><stop offset="0" stop-color="rgb(0,0,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(131,0,0,131,5,14)" id=":3y"><stop offset="0" stop-color="rgb(255,255,0)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,0,0)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(159,0,0,159,-35,-27)" id=":3z"><stop offset="0" stop-color="rgb(255,255,255)" stop-opacity="1.000"></stop><stop offset="0.611764705882353" stop-color="rgb(207,207,207)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(153,153,153)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(192,0,0,192,7,-1)" id=":40"><stop offset="0" stop-color="rgb(153,153,153)" stop-opacity="1.000"></stop><stop offset="0.7529411764705882" stop-color="rgb(255,255,255)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(347,0,0,129.25,-107,-12)" id=":41"><stop offset="0" stop-color="rgb(0,204,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,153)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(347,0,0,129.25,-107,-12)" id=":42"><stop offset="0" stop-color="rgb(0,204,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,153)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(347,0,0,129.25,-107,-12)" id=":43"><stop offset="0" stop-color="rgb(0,204,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,153)" stop-opacity="1.000"></stop></radialGradient><radialGradient r="1" cx="0" cy="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(347,0,0,129.25,-107,-12)" id=":4f"><stop offset="0" stop-color="rgb(0,204,255)" stop-opacity="1.000"></stop><stop offset="1" stop-color="rgb(0,0,153)" stop-opacity="1.000"></stop></radialGradient></defs></svg></div></div><!----><!----><!----></div><!----></app-display-practice></app-player></app-root>'
        });
        this.getView().setModel(oModel);
    },
  });

});
