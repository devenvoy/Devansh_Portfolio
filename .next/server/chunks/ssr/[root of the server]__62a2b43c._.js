module.exports = {

"[externals]/next/dist/compiled/next-server/pages.runtime.dev.js [external] (next/dist/compiled/next-server/pages.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages.runtime.dev.js", () => require("next/dist/compiled/next-server/pages.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/react/jsx-runtime [external] (react/jsx-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-runtime", () => require("react/jsx-runtime"));

module.exports = mod;
}}),
"[externals]/react [external] (react, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react", () => require("react"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/@opentelemetry/api [external] (@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("@opentelemetry/api", () => require("@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react/jsx-dev-runtime", () => require("react/jsx-dev-runtime"));

module.exports = mod;
}}),
"[externals]/react-toastify [external] (react-toastify, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("react-toastify");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/hooks/useLocalStorage.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useLocalStorage": (()=>useLocalStorage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
function useLocalStorage(key, defaultValue) {
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(()=>{
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : defaultValue;
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        localStorage.setItem(key, JSON.stringify(value));
    }, [
        key,
        value
    ]);
    return [
        value,
        setValue
    ];
}
}}),
"[project]/src/components/layouts/MUIWrapper.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MUIWrapperContext": (()=>MUIWrapperContext),
    "default": (()=>MUIWrapper)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/ThemeProvider.js [ssr] (ecmascript) <export default as ThemeProvider>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/createTheme.js [ssr] (ecmascript) <export default as createTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CssBaseline/CssBaseline.js [ssr] (ecmascript) <export default as CssBaseline>");
(()=>{
    const e = new Error("Cannot find module '../../index.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../../App.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.js [ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const MUIWrapperContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["createContext"])({
    toggleColorMode: ()=>{}
});
function MUIWrapper({ children }) {
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useLocalStorage"])("mui-theme-mode", "light");
    const muiWrapperUtils = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>({
            toggleColorMode: ()=>{
                setMode((prevMode)=>prevMode === "light" ? "dark" : "light");
            }
        }), []);
    const theme = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useMemo"])(()=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$createTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__createTheme$3e$__["createTheme"])({
            palette: {
                mode,
                ...mode === "dark" ? {
                    background: {
                        default: '#000000',
                        paper: '#111827'
                    },
                    divider: '#404040',
                    primary: {
                        light: '#22d3ee',
                        main: '#06b6d4',
                        dark: '#2563eb'
                    },
                    text: {
                        primary: '#e0e0e0',
                        secondary: '#9ca3af'
                    }
                } : {
                    background: {
                        default: '#ffffff',
                        paper: '#f9fafb'
                    },
                    divider: '#e0e0e0',
                    primary: {
                        main: '#2563eb'
                    },
                    text: {
                        primary: '#1f2937',
                        secondary: '#6b7280'
                    }
                }
            },
            typography: {
                fontFamily: `'Raleway', 'Nunito', sans-serif`
            }
        });
    }, [
        mode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(MUIWrapperContext.Provider, {
        value: muiWrapperUtils,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$ThemeProvider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ThemeProvider$3e$__["ThemeProvider"], {
            theme: theme,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CssBaseline$2f$CssBaseline$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CssBaseline$3e$__["CssBaseline"], {}, void 0, false, {
                    fileName: "[project]/src/components/layouts/MUIWrapper.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layouts/MUIWrapper.jsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layouts/MUIWrapper.jsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ArrowDown": (()=>ArrowDown),
    "ArrowRightLong": (()=>ArrowRightLong),
    "ArrowUp": (()=>ArrowUp),
    "Cancel": (()=>Cancel),
    "Chat": (()=>Chat),
    "Code": (()=>Code),
    "CopyRight": (()=>CopyRight),
    "Discord": (()=>Discord),
    "Download": (()=>Download),
    "GMail": (()=>GMail),
    "GitHub": (()=>GitHub),
    "Hamburger": (()=>Hamburger),
    "Link": (()=>Link),
    "Map": (()=>Map),
    "Menu": (()=>Menu),
    "Person": (()=>Person),
    "Portfolio": (()=>Portfolio),
    "Resume": (()=>Resume),
    "Submit": (()=>Submit),
    "Telegram": (()=>Telegram),
    "Twitter": (()=>Twitter),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
function LinkedIn({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "20",
        height: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: color,
            d: "M8.421 14h.052C11.263 14 13 12 13 9.5 12.948 6.945 11.263 5 8.526 5S4 6.945 4 9.5C4 12 5.736 14 8.421 14zM4 17h9v26H4V17zm40 9.5a9.5 9.5 0 0 0-9.5-9.5 9.474 9.474 0 0 0-7.5 3.684V17h-9v26h9V28a4 4 0 0 1 8 0v15h9V26.5z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 4,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 3,
        columnNumber: 9
    }, this);
}
function GitHub({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "18",
            height: "18",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: color,
                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 14,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 13,
            columnNumber: 13
        }, this)
    }, void 0, false);
}
function GMail() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "20",
        height: "20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#4caf50",
                d: "M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 23,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#1e88e5",
                d: "M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                fill: "#e53935",
                points: "35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#c62828",
                d: "M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#fbc02d",
                d: "M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
function Telegram({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "19",
        height: "19",
        viewBox: "0 0 448 512",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: color,
            d: "M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
function Discord({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "20",
        height: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: color,
            d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068 c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291 c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051 c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554 c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194 c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534 c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017 c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634 c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052 c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044 C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435 c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435 s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 60,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 59,
        columnNumber: 9
    }, this);
}
function Twitter({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "20",
        height: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: color,
            d: "M42 12.429a14.978 14.978 0 0 1-4.247 1.162 7.38 7.38 0 0 0 3.251-4.058 14.829 14.829 0 0 1-4.693 1.776A7.377 7.377 0 0 0 30.926 9c-4.08 0-7.387 3.278-7.387 7.32 0 .572.067 1.129.193 1.67a21.05 21.05 0 0 1-15.224-7.654 7.23 7.23 0 0 0-1 3.686c0 2.541 1.301 4.778 3.285 6.096a7.52 7.52 0 0 1-3.349-.914v.086c0 3.551 2.547 6.508 5.923 7.181a7.346 7.346 0 0 1-1.941.263c-.477 0-.942-.054-1.392-.135.94 2.902 3.667 5.023 6.898 5.086a14.925 14.925 0 0 1-9.174 3.134 14.61 14.61 0 0 1-1.761-.104A21.109 21.109 0 0 0 17.321 38c13.585 0 21.017-11.156 21.017-20.834 0-.317-.01-.633-.025-.945A14.532 14.532 0 0 0 42 12.429"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 69,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 68,
        columnNumber: 9
    }, this);
}
function Resume() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 115.34 122.88",
        width: "17",
        height: "17",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#5EEAC3",
            d: "M57.34,116.35a3.27,3.27,0,0,1,0,6.53H7.6a7.61,7.61,0,0,1-7.6-7.6V7.6A7.61,7.61,0,0,1,7.6,0H98.36A7.61,7.61,0,0,1,106,7.6v54a10.65,10.65,0,0,1-.09,1.43h-.66l0,0h-.42l-.09,0,0,0h0l-.09,0-.08,0,0,0h0l-.08,0h0l-.09,0,0,0h0l-.08,0h0l-.09,0,0,0h0l-.08,0h0l-.08,0h-.08l-.09,0h0l-.08,0,0,0h0l-.08,0h0l-.08,0h-.09l-.08,0h0l-.08,0h0l0,0-.08,0h0l-.08,0h-.34l-.07,0h0l-.08,0h-.08l-.08,0H99.43V7.6a1.09,1.09,0,0,0-1.07-1.07H7.6a1.11,1.11,0,0,0-.76.31,1.13,1.13,0,0,0-.31.76V115.27a1,1,0,0,0,.32.75,1.12,1.12,0,0,0,.76.32Zm35.05.13L76,122.08l.13-18.25,16.29,12.65ZM80.73,97.72l17.68-24a1.6,1.6,0,0,1,1.91-.56L114.8,84a1.38,1.38,0,0,1,.15,2.06L97,110.38,80.73,97.72ZM29.13,62.84a6.51,6.51,0,0,1-.2-3.36c.46-3.55,1.38-4.21,4.66-5.12,3.68-1,7.84-1.09,11-3.27a10.9,10.9,0,0,0,.74-1.43c.37-.85.71-1.77.92-2.4a30.53,30.53,0,0,1-2.42-3.45l-2.45-3.9A7.17,7.17,0,0,1,40,36.35a2.85,2.85,0,0,1,.25-1.28,2.31,2.31,0,0,1,.84-1,1.93,1.93,0,0,1,.59-.3,62.62,62.62,0,0,1-.12-7,9.88,9.88,0,0,1,.3-1.59A9.43,9.43,0,0,1,46,19.93a13,13,0,0,1,3.47-1.54c.78-.22-.67-2.71.14-2.79,3.89-.4,10.18,3.15,12.9,6.09a9.47,9.47,0,0,1,2.39,6l-.15,6.36h0A1.74,1.74,0,0,1,66,35.38a5.44,5.44,0,0,1-.67,3.34h0l0,.09-2.8,4.59a23.76,23.76,0,0,1-3.42,4.72l.38.54A16.81,16.81,0,0,0,61.27,51a.16.16,0,0,1,.06.08c2.36,1.66,7.2,2.4,10.79,3.34,3,.79,4.1,1,4.77,4.28.34,1.62.35,3.4-.09,4.13ZM26.67,97.89a3.31,3.31,0,0,1,0-6.61H71l0,0,0,0h0l0,0v0l0,0,0,0h0l-.06.09h0v0l0,0v0l0,0h0l0,.05h0l0,0v0l0,0v0l0,0h0l0,0h0l0,0v0l0,0h0l0,0h0l0,0h0l0,0v0l0,0v0l0,0h0l0,.05h0l0,0v0l0,0h0l0,0h0l0,0h0l0,0v0l0,0h0l0,0h0l0,0v0l0,0V93h0l0,0h0l0,0v.13h0l0,0h0l0,0h0v0l0,0v0l0,0h0l0,0h0l0,0v.08h0l0,0h0l0,0h0V94h0l0,0h0v.12h0v0l-.07,0-.06,0h0l-.06,0-.06,0h0l0,0-.06,0,0,0,0,0-.06,0,0,0h0l-.06,0,0,0h0l-.07.05-.06,0h0l-.06,0-.06.06h0l-.05,0-.06,0,0,0,0,0-.06.05,0,0,0,0-.06,0,0,0h0l-.06.06-.05,0h0l-.06.06,0,0h0l0,0-.06.06h0l0,0-.06.06,0,0,0,0,0,.06,0,0,0,0,0,.06,0,.05h0l0,.06,0,0h0l-.06.06,0,.06h0l-.05,0,0,.06v0l0,0,0,.06,0,0,0,0-.05.06,0,0,0,0,0,.06,0,0h0l0,.07,0,.06h0l0,.07,0,.06h0l-.05.06,0,.06v0l0,0,0,.07,0,0,0,0,0,.07,0,0,0,0,0,.07,0,0h0l0,.07,0,.07h0l0,.07Zm1.27-18.16a3.27,3.27,0,1,1,0-6.53H75.78a3.27,3.27,0,1,1,0,6.53Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 78,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
function Person() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#5EEAC3",
            d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7.753 18.305c-.261-.586-.789-.991-1.871-1.241-2.293-.529-4.428-.993-3.393-2.945 3.145-5.942.833-9.119-2.489-9.119-3.388 0-5.644 3.299-2.489 9.119 1.066 1.964-1.148 2.427-3.393 2.945-1.084.25-1.608.658-1.867 1.246-1.405-1.723-2.251-3.919-2.251-6.31 0-5.514 4.486-10 10-10s10 4.486 10 10c0 2.389-.845 4.583-2.247 6.305z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 87,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
function Portfolio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "16",
        height: "16",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#5EEAC3",
            d: "M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855A7.97 7.97 0 0 0 5.145 4H7.5V1.077zM4.09 4a9.267 9.267 0 0 1 .64-1.539 6.7 6.7 0 0 1 .597-.933A7.025 7.025 0 0 0 2.255 4H4.09zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a6.958 6.958 0 0 0-.656 2.5h2.49zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5H4.847zM8.5 5v2.5h2.99a12.495 12.495 0 0 0-.337-2.5H8.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5H4.51zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5H8.5zM5.145 12c.138.386.295.744.468 1.068.552 1.035 1.218 1.65 1.887 1.855V12H5.145zm.182 2.472a6.696 6.696 0 0 1-.597-.933A9.268 9.268 0 0 1 4.09 12H2.255a7.024 7.024 0 0 0 3.072 2.472zM3.82 11a13.652 13.652 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5H3.82zm6.853 3.472A7.024 7.024 0 0 0 13.745 12H11.91a9.27 9.27 0 0 1-.64 1.539 6.688 6.688 0 0 1-.597.933zM8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855.173-.324.33-.682.468-1.068H8.5zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.65 13.65 0 0 1-.312 2.5zm2.802-3.5a6.959 6.959 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5h2.49zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7.024 7.024 0 0 0-3.072-2.472c.218.284.418.598.597.933zM10.855 4a7.966 7.966 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4h2.355z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 95,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 94,
        columnNumber: 9
    }, this);
}
function Map() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 232597 333333",
        height: "20",
        width: "20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#1a73e8",
                d: "M151444 5419C140355 1916 128560 0 116311 0 80573 0 48591 16155 27269 41534l54942 46222 69232-82338z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#ea4335",
                d: "M27244 41534C10257 61747 0 87832 0 116286c0 21876 4360 39594 11517 55472l70669-84002-54942-46222z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 107,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#4285f4",
                d: "M116311 71828c24573 0 44483 19910 44483 44483 0 10938-3957 20969-10509 28706 0 0 35133-41786 69232-82313-14089-27093-38510-47936-68048-57286L82186 87756c8166-9753 20415-15928 34125-15928z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 110,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#fbbc04",
                d: "M116311 160769c-24573 0-44483-19910-44483-44483 0-10863 3906-20818 10358-28555l-70669 84027c12072 26791 32159 48289 52851 75381l85891-102122c-8141 9628-20339 15752-33948 15752z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#34a853",
                d: "M148571 275014c38787-60663 84026-88210 84026-158728 0-19331-4738-37552-13080-53581L64393 247140c6578 8620 13206 17793 19683 27900 23590 36444 17037 58294 32260 58294 15172 0 8644-21876 32235-58320z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 116,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 103,
        columnNumber: 9
    }, this);
}
function CopyRight() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "14",
        height: "14",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#C2C2C2",
            d: "M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 15.781c-2.084 0-3.781-1.696-3.781-3.781s1.696-3.781 3.781-3.781c1.172 0 2.306.523 3.136 1.669l1.857-1.218c-1.281-1.826-3.133-2.67-4.993-2.67-3.308 0-6 2.692-6 6s2.691 6 6 6c1.881 0 3.724-.859 4.994-2.67l-1.857-1.218c-.828 1.14-1.959 1.669-3.137 1.669z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 125,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 124,
        columnNumber: 9
    }, this);
}
function Code() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "20",
        height: "20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            stroke: "#ffffff",
            strokeWidth: "0.6",
            d: "M10.478 1.647a.5.5 0 1 0-.956-.294l -4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 134,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 133,
        columnNumber: 9
    }, this);
}
function Link() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "16",
        height: "16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            d: "M6.188 8.719c.439-.439.926-.801 1.444-1.087 2.887-1.591 6.589-.745 8.445 2.069l-2.246 2.245c-.644-1.469-2.243-2.305-3.834-1.949-.599.134-1.168.433-1.633.898l-4.304 4.306c-1.307 1.307-1.307 3.433 0 4.74 1.307 1.307 3.433 1.307 4.74 0l1.327-1.327c1.207.479 2.501.67 3.779.575l-2.929 2.929c-2.511 2.511-6.582 2.511-9.093 0s-2.511-6.582 0-9.093l4.304-4.306zm6.836-6.836l-2.929 2.929c1.277-.096 2.572.096 3.779.574l1.326-1.326c1.307-1.307 3.433-1.307 4.74 0 1.307 1.307 1.307 3.433 0 4.74l-4.305 4.305c-1.311 1.311-3.44 1.3-4.74 0-.303-.303-.564-.68-.727-1.051l-2.246 2.245c.236.358.481.667.796.982.812.812 1.846 1.417 3.036 1.704 1.542.371 3.194.166 4.613-.617.518-.286 1.005-.648 1.444-1.087l4.304-4.305c2.512-2.511 2.512-6.582.001-9.093-2.511-2.51-6.581-2.51-9.092 0z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 142,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 141,
        columnNumber: 9
    }, this);
}
function Chat() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 122.88",
        width: "20",
        height: "20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#1A73E8",
                d: "M122.88,61.41C122.88,27.49,95.39,0,61.47,0S0.06,27.49,0.06,61.41s27.49,61.41,61.41,61.41 S122.88,95.32,122.88,61.41L122.88,61.41z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 149,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#185ABC",
                d: "M83.82,87.93H41.97c-5.95,0-11.14-4.49-11.14-10.45v-0.06v3.48c0,5.95,5.19,11.14,11.14,11.14h41.85 c6.01,0,11.14-5.25,11.14-11.14v-3.48C94.96,83.38,89.77,87.93,83.82,87.93L83.82,87.93L83.82,87.93z M30.77,57.93v-4.75 l-7.79-12.85c-0.44-0.7-0.63-1.33-0.57-1.96v5.44c0,0.51,0.19,1.01,0.51,1.58L30.77,57.93L30.77,57.93z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 152,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#ffffff",
                d: "M83.82,36.28H25.2c-2.34,0-3.67,2.03-2.09,4.18l7.66,13.29v23.74c0,6.08,4.43,11.14,10.45,11.14h42.54 c6.01,0,11.14-5.13,11.14-11.14V47.48C94.96,41.4,89.83,36.28,83.82,36.28L83.82,36.28z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 155,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#8AB4F8",
                d: "M83.12,53.05H42.67c-1.77,0-3.48-1.08-3.48-2.79c0-1.71,1.71-2.79,3.48-2.79h40.45c1.77,0,3.48,1.08,3.48,2.79 C86.6,51.98,84.9,53.05,83.12,53.05L83.12,53.05L83.12,53.05z M83.12,64.19H42.67c-1.77,0-3.48-1.08-3.48-2.79 c0-1.71,1.71-2.79,3.48-2.79h40.45c1.77,0,3.48,1.08,3.48,2.79C86.6,63.12,84.9,64.19,83.12,64.19L83.12,64.19L83.12,64.19z M71.92,75.4H42.61c-1.77,0-3.48-1.08-3.48-2.79c0-1.71,1.71-2.79,3.48-2.79h29.31c1.77,0,3.48,1.08,3.48,2.79 C75.4,74.32,73.69,75.4,71.92,75.4L71.92,75.4z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 158,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#185ABC",
                d: "M122.88,61.09c-0.13,26.91-17.66,49.76-41.85,57.86c-6.14,2.09-12.72,3.17-19.56,3.17 c-33.81,0-61.22-27.29-61.41-61.03v0.38c0,33.93,27.48,61.41,61.41,61.41c6.84,0,13.42-1.14,19.56-3.17 c24.31-8.17,41.85-31.15,41.85-58.24V61.09L122.88,61.09z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 161,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#8AB4F8",
                d: "M80.97,3.17C74.83,1.08,68.25,0,61.41,0C27.48,0,0,27.48,0,61.41v0.38C0.19,28.04,27.6,0.76,61.41,0.76 c6.84,0,13.42,1.14,19.56,3.17c24.25,8.1,41.72,30.96,41.85,57.86v-0.38C122.88,34.31,105.34,11.33,80.97,3.17L80.97,3.17z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/Icons.jsx",
                lineNumber: 164,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 148,
        columnNumber: 9
    }, this);
}
function Submit() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 122.88 49.21",
        height: "24",
        width: "24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            d: "M54.58,0,86.24,27.52,120.63,0ZM35.37,37.6a2.9,2.9,0,0,1,0,5.79H23a2.9,2.9,0,0,1,0-5.79Zm2.89-15.89a2.9,2.9,0,0,1,0,5.79H12.89a2.9,2.9,0,0,1,0-5.79Zm59.92.45L119.54,46.5l3.34-44.11L98.18,22.16Zm-20.94,2.2L50.58,49.21h66.65L95.42,24.37,87.11,31h0a1.72,1.72,0,0,1-2.18,0l-7.69-6.69Zm-28.35,22,25.87-24.1L52.2,2.61l-3.31,43.7ZM38.26,5.82a2.89,2.89,0,1,1,0,5.78H2.89a2.89,2.89,0,0,1,0-5.78Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 173,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 172,
        columnNumber: 9
    }, this);
}
function ArrowRightLong() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "18",
        height: "18",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#09B4D6",
            d: "m12.007 2c-5.518 0-9.998 4.48-9.998 9.998 0 5.517 4.48 9.997 9.998 9.997s9.998-4.48 9.998-9.997c0-5.518-4.48-9.998-9.998-9.998zm1.523 6.21s1.502 1.505 3.255 3.259c.147.147.22.339.22.531s-.073.383-.22.53c-1.753 1.754-3.254 3.258-3.254 3.258-.145.145-.335.217-.526.217-.192-.001-.384-.074-.531-.221-.292-.293-.294-.766-.003-1.057l1.977-1.977h-6.693c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h6.693l-1.978-1.979c-.29-.289-.287-.762.006-1.054.147-.147.339-.221.53-.222.19 0 .38.071.524.215z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 182,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 181,
        columnNumber: 9
    }, this);
}
function ArrowDown() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "24",
        height: "24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            d: "m16.843 10.211c.108-.141.157-.3.157-.456 0-.389-.306-.755-.749-.755h-8.501c-.445 0-.75.367-.75.755 0 .157.05.316.159.457 1.203 1.554 3.252 4.199 4.258 5.498.142.184.36.29.592.29.23 0 .449-.107.591-.291 1.002-1.299 3.044-3.945 4.243-5.498z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 190,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 189,
        columnNumber: 9
    }, this);
}
function ArrowUp() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "13",
        height: "13",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            d: "M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 198,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 197,
        columnNumber: 9
    }, this);
}
function Download() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#ffffff",
            d: "M11.5 8h1v7.826l2.5-3.076.753.665-3.753 4.585-3.737-4.559.737-.677 2.5 3.064v-7.828zm7 12h-13c-2.481 0-4.5-2.019-4.5-4.5 0-2.178 1.555-4.038 3.698-4.424l.779-.14.043-.79c.185-3.447 3.031-6.146 6.48-6.146 3.449 0 6.295 2.699 6.479 6.146l.043.79.78.14c2.142.386 3.698 2.246 3.698 4.424 0 2.481-2.019 4.5-4.5 4.5m.979-9.908c-.212-3.951-3.473-7.092-7.479-7.092s-7.267 3.141-7.479 7.092c-2.57.463-4.521 2.706-4.521 5.408 0 3.037 2.463 5.5 5.5 5.5h13c3.037 0 5.5-2.463 5.5-5.5 0-2.702-1.951-4.945-4.521-5.408"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 206,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 205,
        columnNumber: 9
    }, this);
}
function Hamburger() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#D1D5DB",
            d: "M23 19l.02.096c.379 1.918-.564 3.894-3.02 3.904-4.611.019-11.389 0-16 0-2.492 0-3.348-1.976-3-4h22zm-1-1h-20c-1.104 0-2-.896-2-2s.896-2 2-2h4.481c2.37.017 2.852 2.006 4.019 2 1.167-.006 1.781-1.976 3.965-2h7.535c1.104 0 2 .896 2 2s-.896 2-2 2zm-3.978-4.751c-.677 0-1.293-.308-1.837-.579-1.12-.557-1.212-.558-2.333 0-.543.271-1.159.579-1.837.579-.679 0-1.294-.308-1.838-.579-1.117-.557-1.214-.558-2.332 0-.544.271-1.159.579-1.838.579-.677 0-1.294-.308-1.837-.579-1.002-.499-1.472-.756-2.952.415-.143.114-.304.165-.462.165-.39 0-.756-.312-.756-.751 0-.219.096-.437.282-.584 2.08-1.661 3.239-1.244 4.559-.585.434.216.843.42 1.166.42.324 0 .734-.204 1.166-.42 1.543-.769 2.12-.776 3.676 0 .433.216.843.42 1.166.42.323 0 .733-.204 1.166-.42 1.543-.769 2.119-.776 3.675 0 .435.216.843.42 1.166.42.324 0 .732-.204 1.167-.42 1.301-.649 2.474-1.09 4.536.59.181.148.275.363.275.579 0 .412-.333.749-.751.749-.166 0-.334-.055-.475-.168-1.437-1.168-1.913-.909-2.914-.41-.544.271-1.16.579-1.838.579zm4.978-3.249h-22c0-4.967 4.377-9 11-9s11 4.033 11 9zm-15.5-5c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm4 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-11-2c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-3 1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm9-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm3 0c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5zm-6-1c.276 0 .5.224.5.5s-.224.5-.5.5-.5-.224-.5-.5.224-.5.5-.5z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 216,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 215,
        columnNumber: 9
    }, this);
}
function Menu() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: "#6B7280",
            d: "M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 224,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 223,
        columnNumber: 9
    }, this);
}
function Cancel({ color }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
            fill: color,
            d: "M24 3.752l-4.423-3.752-7.771 9.039-7.647-9.008-4.159 4.278c2.285 2.885 5.284 5.903 8.362 8.708l-8.165 9.447 1.343 1.487c1.978-1.335 5.981-4.373 10.205-7.958 4.304 3.67 8.306 6.663 10.229 8.006l1.449-1.278-8.254-9.724c3.287-2.973 6.584-6.354 8.831-9.245z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons/Icons.jsx",
            lineNumber: 232,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons/Icons.jsx",
        lineNumber: 231,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = LinkedIn;
;
}}),
"[project]/src/components/HamBurgerMenu.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
;
;
;
const HamBurgerMenu = ({ handleClick, navOpen })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        className: "group md:hidden z-50 cursor-pointer text-gray-500 hover:scale-110 hover:text-gray-300 ease-in-out transition-all duration-300",
        onClick: handleClick,
        children: [
            navOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "group",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "group-hover:hidden ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
                            color: "#6B7280"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HamBurgerMenu.jsx",
                            lineNumber: 12,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HamBurgerMenu.jsx",
                        lineNumber: 11,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "hidden group-hover:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Cancel"], {
                            color: "#EF4444"
                        }, void 0, false, {
                            fileName: "[project]/src/components/HamBurgerMenu.jsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HamBurgerMenu.jsx",
                        lineNumber: 14,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HamBurgerMenu.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, this),
            !navOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "group-hover:hidden ",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/src/components/HamBurgerMenu.jsx",
                            lineNumber: 22,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HamBurgerMenu.jsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        className: "hidden transition-all delay-75 group-hover:block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Hamburger"], {}, void 0, false, {
                            fileName: "[project]/src/components/HamBurgerMenu.jsx",
                            lineNumber: 25,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/HamBurgerMenu.jsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HamBurgerMenu.jsx",
                lineNumber: 20,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/HamBurgerMenu.jsx",
        lineNumber: 6,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = HamBurgerMenu;
}}),
"[externals]/react-scroll [external] (react-scroll, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-scroll", () => require("react-scroll"));

module.exports = mod;
}}),
"[project]/src/data/navlinks.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const navLinks = [
    {
        id: 1,
        link: "home"
    },
    {
        id: 2,
        link: "about"
    },
    {
        id: 3,
        link: "experience"
    },
    {
        id: 4,
        link: "projects"
    },
    {
        id: 5,
        link: "achievements"
    },
    {
        id: 6,
        link: "contact"
    }
];
const __TURBOPACK__default__export__ = navLinks;
 // { id: 5, link: "blogs" },
}}),
"[project]/src/components/ThemeButton.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$MUIWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/MUIWrapper.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [ssr] (ecmascript) <export default as Sun>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [ssr] (ecmascript) <export default as Moon>");
;
;
;
;
;
function ThemeButton() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const muiUtils = __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["default"].useContext(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$MUIWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MUIWrapperContext"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
        sx: {
            fontSize: "1rem"
        },
        onClick: muiUtils.toggleColorMode,
        color: "inherit",
        disableTouchRipple: true,
        disableRipple: true,
        children: theme.palette.mode === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {}, void 0, false, {
            fileName: "[project]/src/components/ThemeButton.jsx",
            lineNumber: 20,
            columnNumber: 47
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {}, void 0, false, {
            fileName: "[project]/src/components/ThemeButton.jsx",
            lineNumber: 20,
            columnNumber: 56
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeButton.jsx",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
const __TURBOPACK__default__export__ = ThemeButton;
}}),
"[project]/src/components/Navigation.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
(()=>{
    const e = new Error("Cannot find module 'react-router-dom'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navlinks$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navlinks.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeButton.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
;
;
;
;
;
;
;
;
;
const Navigation = ({ ulClass, liClass, handleClick })=>{
    const location = useLocation();
    const navigate = useNavigate();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const handleNavClick = async (link)=>{
        if (link === 'achievements') {
            navigate('/achievements');
            return;
        }
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(()=>{
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["scroller"].scrollTo(link, {
                    smooth: true,
                    duration: 500,
                    offset: -50
                });
            }, 100);
        } else {
            __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["scroller"].scrollTo(link, {
                smooth: true,
                duration: 500,
                offset: -50
            });
        }
        if (handleClick) handleClick();
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
        className: ulClass,
        children: [
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navlinks$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map(({ id, link })=>{
                let content;
                if (id === 7) {
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                        target: "_blank",
                        rel: "noreferrer",
                        children: link
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.jsx",
                        lineNumber: 40,
                        columnNumber: 25
                    }, this);
                } else if (link === 'achievements') {
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(RouterLink, {
                        to: "/achievements",
                        onClick: ()=>{
                            handleClick();
                            handleNavClick(link);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            fontFamily: "Nunito",
                            children: link
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 50,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.jsx",
                        lineNumber: 45,
                        columnNumber: 25
                    }, this);
                } else {
                    content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                        onClick: ()=>handleNavClick(link),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            fontFamily: "Nunito",
                            children: link
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navigation.jsx",
                            lineNumber: 59,
                            columnNumber: 29
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navigation.jsx",
                        lineNumber: 58,
                        columnNumber: 25
                    }, this);
                }
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                    content: content,
                    theme: theme,
                    liClass: liClass
                }, id, false, {
                    fileName: "[project]/src/components/Navigation.jsx",
                    lineNumber: 67,
                    columnNumber: 21
                }, this);
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(NavItem, {
                id: 99,
                content: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/components/Navigation.jsx",
                    lineNumber: 72,
                    columnNumber: 39
                }, void 0),
                theme: theme,
                liClass: liClass
            }, void 0, false, {
                fileName: "[project]/src/components/Navigation.jsx",
                lineNumber: 72,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navigation.jsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Navigation;
const NavItem = ({ content, liClass, theme })=>{
    const isIcon = typeof content?.type === 'function' && content.type.name === 'ThemeButton';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        onClick: typeof content === 'function' ? content : undefined,
        sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 2,
            px: 1,
            py: isIcon ? 0 : 0.5,
            height: '40px',
            textTransform: 'capitalize',
            fontWeight: 500,
            cursor: 'pointer',
            transition: 'all 0.5s ease',
            color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
            borderBottom: isIcon ? 'none' : '2px solid transparent',
            '&:hover': !isIcon && {
                transform: 'scale(1.15)',
                borderBottomColor: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
                color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'
            }
        },
        className: liClass,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/Navigation.jsx",
        lineNumber: 82,
        columnNumber: 9
    }, this);
};
}}),
"[project]/src/components/Navbar.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HamBurgerMenu$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HamBurgerMenu.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navigation.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
;
;
;
;
;
;
;
const Navbar = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const [navOpen, setNavOpen] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleClick = ()=>{
        setNavOpen((prev)=>!prev);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                sx: {
                    position: 'fixed',
                    width: '100%',
                    height: '80px',
                    zIndex: 50,
                    background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, 'transparent')`,
                    backdropFilter: 'blur(3px)',
                    maxWidth: '100vw'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                    maxWidth: "xl",
                    sx: {
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        px: 3
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            onClick: ()=>window.location.href = '/',
                            sx: {
                                fontSize: '2.5rem',
                                fontWeight: 600,
                                cursor: 'pointer',
                                fontFamily: 'Nunito',
                                transition: '0.5s'
                            },
                            className: "animatedHeading font-signature",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'transparent'
                                    },
                                    children: "Port"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 51,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                    style: {
                                        color: 'transparent'
                                    },
                                    children: "Folio"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.jsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            ulClass: "hidden md:flex",
                            liClass: ""
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                position: 'fixed',
                                top: 20,
                                right: 20,
                                zIndex: 70
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HamBurgerMenu$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                handleClick: handleClick,
                                navOpen: navOpen
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 67,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                            sx: {
                                transform: navOpen ? 'translateX(0)' : 'translateX(100%)',
                                transition: 'transform 0.5s ease',
                                display: {
                                    xs: 'flex',
                                    md: 'none'
                                },
                                flexDirection: 'column',
                                height: '100vh',
                                width: {
                                    xs: '100vw',
                                    sm: '20rem'
                                },
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 60,
                                boxShadow: theme.shadows[5]
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navigation$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                                handleClick: handleClick,
                                ulClass: "flex flex-col h-full w-full items-center justify-center",
                                liClass: "my-4 py-2 text-lg"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.jsx",
                                lineNumber: 89,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.jsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.jsx",
                    lineNumber: 29,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 18,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                className: "md:hidden",
                sx: {
                    height: '128px',
                    backgroundColor: 'transparent'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.jsx",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = Navbar;
}}),
"[project]/src/pages/_app.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// pages/_app.jsx
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-toastify [external] (react-toastify, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$MUIWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/layouts/MUIWrapper.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@mui/icons-materialcomponents/Footer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@components/BackToTopButton'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
;
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$layouts$2f$MUIWrapper$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Component, {
                ...pageProps
            }, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Footer, {}, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(BackToTopButton, {}, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["ToastContainer"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/pages/_app.jsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = MyApp;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__62a2b43c._.js.map