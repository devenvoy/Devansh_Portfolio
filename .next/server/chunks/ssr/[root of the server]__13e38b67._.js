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
        // Check if we are in the browser
        if ("TURBOPACK compile-time truthy", 1) return defaultValue;
        "TURBOPACK unreachable";
    });
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        try {
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useLocalStorage$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/useLocalStorage.js [ssr] (ecmascript)");
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
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/layouts/MUIWrapper.jsx",
            lineNumber: 65,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/layouts/MUIWrapper.jsx",
        lineNumber: 64,
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
"[project]/src/components/Navigation.jsx [ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// import React from 'react';
// import { scroller } from 'react-scroll';
// import { usePathname, useRouter } from 'next/navigation';
// import { Link as RouterLink } from 'next/link';
// import navLinks from '@/data/navlinks';
// import ThemeButton from './ThemeButton';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import { Typography } from '@mui/material';
// const Navigation = ({ ulClass, liClass, handleClick }) => {
//     const location = usePathname();
//     const navigate = useRouter();
//     const theme = useTheme();
//     const handleNavClick = async (link) => {
//         if (link === 'achievements') {
//             navigate.push('/achievements');
//             return;
//         }
//         if (location.pathname !== '/') {
//             navigate.replace('/');
//             setTimeout(() => {
//                 scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
//             }, 100);
//         } else {
//             scroller.scrollTo(link, { smooth: true, duration: 500, offset: -50, });
//         }
//         if (handleClick) handleClick();
//     };
//     return (
//         <ul className={ulClass}>
//             {navLinks.map(({ id, link }) => {
//                 let content;
//                 if (id === 7) {
//                     content = (
//                         <a target="_blank" rel='noreferrer'>{link}</a>
//                     );
//                 }
//                 else if (link === 'achievements') {
//                     content = (
//                         <RouterLink href="/achievements">
//                             <Typography onClick={() => { handleClick(); handleNavClick(link); }} fontFamily="Nunito">
//                                 {link}
//                             </Typography>
//                         </RouterLink>
//                     );
//                 }
//                 else {
//                     content = (
//                         <span onClick={() => handleNavClick(link)}>
//                             <Typography fontFamily='Nunito'>
//                                 {link}
//                             </Typography>
//                         </span>
//                     );
//                 }
//                 return (
//                     <NavItem key={id} content={content} theme={theme} liClass={liClass} />
//                 );
//             })}
//             <NavItem id={99} content={<ThemeButton />} theme={theme} liClass={liClass} />
//         </ul>
//     );
// };
// export default Navigation;
// const NavItem = ({ content, liClass, theme }) => {
//     const isIcon = typeof content?.type === 'function' && content.type.name === 'ThemeButton';
//     return (
//         <Box
//             onClick={typeof content === 'function' ? content : undefined}
//             sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 mx: 2,
//                 px: 1,
//                 py: isIcon ? 0 : 0.5,
//                 height: '40px',
//                 textTransform: 'capitalize',
//                 fontWeight: 500,
//                 cursor: 'pointer',
//                 transition: 'all 0.5s ease',
//                 color: theme.palette.mode === 'dark' ? 'grey.400' : 'grey.700',
//                 borderBottom: isIcon ? 'none' : '2px solid transparent',
//                 '&:hover': !isIcon && {
//                     transform: 'scale(1.15)',
//                     borderBottomColor: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//                     color: theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
//                 },
//             }}
//             className={liClass}
//         >
//             {content}
//         </Box>
//     );
// };
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
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
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
"[project]/src/data/contactInfo.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
;
const contactInfo = [
    {
        id: 1,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/devansh-a-bb104524a/",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    {
        id: 2,
        name: "GitHub",
        link: "https://github.com/devenvoy",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["GitHub"]
    },
    {
        id: 3,
        name: "Mail",
        link: "mailto:devanshamdavadwala@gmail.com",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["GMail"]
    },
    {
        id: 6,
        name: "Twitter",
        link: "https://x.com/AjDevansh",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Twitter"]
    },
    {
        id: 5,
        name: "Resume",
        link: "/public/resume.pdf",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Resume"],
        download: true
    }
];
const __TURBOPACK__default__export__ = contactInfo;
}}),
"[externals]/react-dom [external] (react-dom, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}}),
"[project]/src/components/Footer.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navlinks$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/navlinks.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contactInfo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/contactInfo.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Tooltip/Tooltip.js [ssr] (ecmascript) <export default as Tooltip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Divider/Divider.js [ssr] (ecmascript) <export default as Divider>");
;
;
;
;
;
;
;
const Footer = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const navigate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const onClick = (link)=>{
        if (link === 'achievements') {
            navigate.push('/achievements');
            return;
        } else null;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            background: `linear-gradient(to top, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            color: theme.palette.text.secondary,
            width: '100%',
            pt: 5
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Divider$2f$Divider$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Divider$3e$__["Divider"], {}, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "section",
                sx: {
                    pb: 5
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    container: true,
                    spacing: 4,
                    justifyContent: "space-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            sx: {
                                xs: 12,
                                sm: 7,
                                lg: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h5",
                                    fontWeight: "bold",
                                    color: theme.palette.text.primary,
                                    gutterBottom: true,
                                    children: "Devansh Amdavadwala"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "subtitle1",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        pb: 2
                                    },
                                    children: "Software Developer"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: "Thank you for visiting my Personal Portfolio."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    children: "Let’s connect over socials."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            sx: {
                                xs: 12,
                                sm: 5,
                                lg: 3
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    color: theme.palette.text.primary,
                                    fontWeight: "bold",
                                    gutterBottom: true,
                                    children: "Quick Links"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$navlinks$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map(({ link, id })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            px: 1,
                                            py: 0.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
                                            to: link,
                                            smooth: true,
                                            duration: 500,
                                            onClick: ()=>{
                                                onClick(link);
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 1,
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                    cursor: 'pointer',
                                                    '& span': {
                                                        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                        transition: '0.4s ease'
                                                    }
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowRightLong"], {}, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 79,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        children: link.toUpperCase()
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 80,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/Footer.jsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 62,
                                            columnNumber: 17
                                        }, this)
                                    }, id, false, {
                                        fileName: "[project]/src/components/Footer.jsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            sx: {
                                xs: 12,
                                lg: 4
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                    variant: "h6",
                                    color: theme.palette.text.primary,
                                    fontWeight: "bold",
                                    gutterBottom: true,
                                    children: "Contact Info"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    display: "flex",
                                    flexDirection: {
                                        xs: 'column',
                                        sm: 'row',
                                        lg: 'column'
                                    },
                                    gap: 3,
                                    justifyContent: "space-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            fontSize: "0.9rem",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    mb: 1,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["GMail"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 101,
                                                            columnNumber: 19
                                                        }, this),
                                                        " devanshamdavadwala@gmail.com"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 100,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: 1,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Map"], {}, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 104,
                                                            columnNumber: 19
                                                        }, this),
                                                        " Surat, Gujarat, India"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 103,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 99,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            display: "flex",
                                            gap: 2,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contactInfo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map(({ id, link, name, icon, download })=>{
                                                const Icon = icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Tooltip$2f$Tooltip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tooltip$3e$__["Tooltip"], {
                                                    title: name,
                                                    arrow: true,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                                                        component: "a",
                                                        href: link,
                                                        download: download,
                                                        target: "_blank",
                                                        rel: "noreferrer",
                                                        sx: {
                                                            width: 36,
                                                            height: 36,
                                                            borderRadius: '50%',
                                                            transition: '0.4s ease',
                                                            filter: 'grayscale(100%)',
                                                            '&:hover': {
                                                                filter: 'grayscale(0%)',
                                                                transform: 'scale(1.05)',
                                                                backgroundColor: theme.palette.action.hover
                                                            }
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                            color: theme.palette.text.primary
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Footer.jsx",
                                                            lineNumber: 132,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Footer.jsx",
                                                        lineNumber: 113,
                                                        columnNumber: 21
                                                    }, this)
                                                }, id, false, {
                                                    fileName: "[project]/src/components/Footer.jsx",
                                                    lineNumber: 112,
                                                    columnNumber: 26
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Footer.jsx",
                                            lineNumber: 109,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Footer.jsx",
                                    lineNumber: 93,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 88,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "section",
                sx: {
                    py: 2
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    textAlign: "center",
                    variant: "body2",
                    color: theme.palette.text.secondary,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 1,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CopyRight"], {}, void 0, false, {
                            fileName: "[project]/src/components/Footer.jsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this),
                        " All Rights Reserved"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Footer.jsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Footer.jsx",
                lineNumber: 143,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Footer.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Footer;
}}),
"[project]/src/components/BackToTopButton.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
"use client";
;
;
;
;
const BackToTopButton = ()=>{
    const [btnVisiblity, setBtnVisiblity] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(false);
    const handleScroll = ()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        const toggleVisiblity = ()=>{
            window.pageYOffset > 250 ? setBtnVisiblity(true) : setBtnVisiblity(false);
        };
        window.addEventListener('scroll', toggleVisiblity);
        return ()=>{
            window.removeEventListener('scroll', toggleVisiblity);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
        onClick: handleScroll,
        to: "Home",
        smooth: true,
        duration: 500,
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: `-translate-y-[100vh] transition-all delay-100 ${btnVisiblity && "translate-y-0"} z-[49] fixed bottom-2 right-2 xs:bottom-[1.3rem] xs:right-[1.3rem] md:bottom-4 md:right-4 w-8 h-8 flex justify-center items-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 cursor-pointer  hover:scale-[1.08] duration-500 text-white`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowUp"], {}, void 0, false, {
                fileName: "[project]/src/components/BackToTopButton.jsx",
                lineNumber: 25,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/BackToTopButton.jsx",
            lineNumber: 24,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BackToTopButton.jsx",
        lineNumber: 23,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = BackToTopButton;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BackToTopButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/BackToTopButton.jsx [ssr] (ecmascript)");
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/pages/_app.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$BackToTopButton$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
"[externals]/react-type-animation [external] (react-type-animation, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("react-type-animation", () => require("react-type-animation"));

module.exports = mod;
}}),
"[project]/src/data/work.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const work = [
    " Software Developer",
    2000,
    "Android Developer",
    2000,
    "KMP Developer",
    2000,
    "TECH Enthusiast",
    2000,
    "OPEN Source Contributor",
    2000
];
const __TURBOPACK__default__export__ = work;
}}),
"[externals]/aos [external] (aos, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("aos", () => require("aos"));

module.exports = mod;
}}),
"[project]/src/sections/Home.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$type$2d$animation__$5b$external$5d$__$28$react$2d$type$2d$animation$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-type-animation [external] (react-type-animation, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react-scroll [external] (react-scroll, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$work$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/work.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contactInfo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/contactInfo.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
;
;
;
;
;
const Home = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 500,
            once: true
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].refresh();
    }, [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "Home",
        sx: {
            pt: {
                xs: 0,
                sm: 8
            },
            minHeight: {
                xs: '100vh',
                sm: '100vh',
                md: '100vh'
            },
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: '100%',
                maxWidth: 1200,
                marginX: 'auto',
                display: 'flex',
                flexDirection: {
                    xs: 'column',
                    md: 'row-reverse'
                },
                justifyContent: {
                    md: 'space-between'
                },
                alignItems: 'center',
                gap: {
                    xs: 8,
                    md: 2
                },
                px: {
                    xs: 2,
                    md: 4
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: {
                            md: '0 0 40%'
                        },
                        maxWidth: {
                            xs: 320,
                            md: 'auto'
                        },
                        width: {
                            xs: '100%',
                            md: 'auto'
                        },
                        display: 'flex',
                        justifyContent: 'center'
                    },
                    "data-aos": "slide-left",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        component: "img",
                        src: "/avatar.png",
                        alt: "Avatar",
                        loading: "eager",
                        title: "Avatar",
                        sx: {
                            width: '100%',
                            borderRadius: '14px',
                            maxWidth: 320
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/sections/Home.jsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/Home.jsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: {
                            md: '0 0 55%',
                            xs: '1 1 100%'
                        },
                        width: '100%',
                        color: theme.palette.text.primary,
                        pl: {
                            xs: 0,
                            sm: 4
                        },
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 1.5,
                        maxWidth: 420,
                        justifyContent: 'center'
                    },
                    "data-aos": "slide-right",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            component: "h1",
                            sx: {
                                fontWeight: 'bold',
                                fontFamily: 'Nunito',
                                fontSize: {
                                    xs: '2.8rem',
                                    sm: '3.8rem',
                                    lg: '4.0rem'
                                },
                                lineHeight: 1.1
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    display: "block",
                                    children: "Hi There,"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/Home.jsx",
                                    lineNumber: 103,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    display: "block",
                                    children: [
                                        "I'm",
                                        ' ',
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            component: "span",
                                            sx: {
                                                background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                fontWeight: 'bold'
                                            },
                                            children: "Devansh"
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/Home.jsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/sections/Home.jsx",
                                    lineNumber: 106,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/Home.jsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            component: "p",
                            sx: {
                                color: theme.palette.text.secondary,
                                fontWeight: 600,
                                fontFamily: 'Nunito',
                                fontSize: {
                                    xs: '1.2rem',
                                    sm: '1.5rem'
                                },
                                py: 2,
                                minWidth: {
                                    xs: '16rem',
                                    sm: '25rem'
                                },
                                maxWidth: '26rem'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    display: {
                                        xs: 'block',
                                        sm: 'inline'
                                    },
                                    children: "I'm an"
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/Home.jsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "span",
                                    sx: {
                                        color: theme.palette.primary.main,
                                        paddingLeft: {
                                            xs: 0,
                                            sm: 1
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$type$2d$animation__$5b$external$5d$__$28$react$2d$type$2d$animation$2c$__cjs$29$__["TypeAnimation"], {
                                        sequence: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$work$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"],
                                        speed: 1,
                                        wrapper: "span",
                                        cursor: true,
                                        repeat: Infinity
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/Home.jsx",
                                        lineNumber: 144,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/Home.jsx",
                                    lineNumber: 137,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/sections/Home.jsx",
                            lineNumber: 122,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "ul",
                            sx: {
                                display: 'flex',
                                alignItems: 'center',
                                gap: {
                                    xs: 2,
                                    md: 3,
                                    lg: 4
                                },
                                listStyle: 'none',
                                p: 0,
                                m: 0,
                                zIndex: 40,
                                justifyContent: 'flex-start'
                            },
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$contactInfo$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map(({ id, link, name, icon, download })=>{
                                const Icon = icon;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    component: "li",
                                    sx: {
                                        position: 'relative',
                                        width: 32,
                                        height: 32,
                                        borderRadius: '50%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        p: 0.5,
                                        filter: 'grayscale(100%)',
                                        cursor: 'pointer',
                                        transition: 'filter 0.45s ease, transform 0.3s ease',
                                        '&:hover, &:focus, &:active': {
                                            filter: 'grayscale(0%)',
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("a", {
                                            href: link,
                                            download: download,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            style: {
                                                color: 'inherit',
                                                display: 'flex'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(Icon, {
                                                color: theme.palette.text.primary
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/Home.jsx",
                                                lineNumber: 198,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/Home.jsx",
                                            lineNumber: 191,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                            sx: {
                                                position: 'absolute',
                                                bottom: -32,
                                                left: '50%',
                                                transform: 'translateX(-50%) scale(0)',
                                                backgroundColor: theme.palette.background.paper,
                                                color: theme.palette.text.secondary,
                                                fontSize: '0.75rem',
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: 1,
                                                fontFamily: 'Nunito',
                                                whiteSpace: 'nowrap',
                                                transition: 'transform 0.3s ease',
                                                pointerEvents: 'none',
                                                zIndex: 50,
                                                '&:hover, &:focus-within': {
                                                    transform: 'translateX(-50%) scale(1)'
                                                },
                                                '.group:hover &': {
                                                    transform: 'translateX(-50%) scale(1)'
                                                }
                                            },
                                            children: name
                                        }, void 0, false, {
                                            fileName: "[project]/src/sections/Home.jsx",
                                            lineNumber: 200,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, id, true, {
                                    fileName: "[project]/src/sections/Home.jsx",
                                    lineNumber: 170,
                                    columnNumber: 36
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/sections/Home.jsx",
                            lineNumber: 155,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(AboutButton, {}, void 0, false, {
                            fileName: "[project]/src/sections/Home.jsx",
                            lineNumber: 232,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/Home.jsx",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/Home.jsx",
            lineNumber: 40,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Home.jsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Home;
const AboutButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$scroll__$5b$external$5d$__$28$react$2d$scroll$2c$__cjs$29$__["Link"], {
        to: "About",
        smooth: true,
        duration: 500,
        style: {
            textDecoration: 'none'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            className: "group",
            sx: {
                position: 'relative',
                zIndex: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 1,
                px: 3,
                py: 1,
                my: 3,
                borderRadius: 2,
                cursor: 'pointer',
                width: '10rem',
                background: 'linear-gradient(to bottom right, #22d3ee, #2563eb)',
                transition: 'all 0.3s linear 75ms',
                overflow: 'hidden',
                '&:hover .label': {
                    transform: 'translateX(-1.25rem)',
                    transition: 'transform 0.4s ease-out 0.4s'
                },
                '&:hover .arrow': {
                    transform: 'translateY(0)',
                    opacity: 1,
                    transition: 'transform 0.3s ease-in 0.2s, opacity 0.3s ease-in 0.2s'
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "button",
                    className: "label",
                    sx: {
                        pr: {
                            xs: 3,
                            sm: 0
                        },
                        color: 'white',
                        fontWeight: 500,
                        fontFamily: 'Nunito',
                        transition: 'transform 0.3s ease'
                    },
                    children: "About Me"
                }, void 0, false, {
                    fileName: "[project]/src/sections/Home.jsx",
                    lineNumber: 274,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    className: "arrow",
                    sx: {
                        position: 'absolute',
                        right: 20,
                        top: '50%',
                        transform: 'translateY(-50%)',
                        opacity: 0,
                        animation: 'arrowPulse 2s infinite',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["ArrowDown"], {}, void 0, false, {
                        fileName: "[project]/src/sections/Home.jsx",
                        lineNumber: 304,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/Home.jsx",
                    lineNumber: 288,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                    children: `
                    @keyframes arrowPulse {
                        0%, 100% {
                            transform: translateY(-50%) scale(1);
                        }
                        50% {
                            transform: translateY(-50%) scale(1.15);
                        }
                    }
                `
                }, void 0, false, {
                    fileName: "[project]/src/sections/Home.jsx",
                    lineNumber: 308,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/Home.jsx",
            lineNumber: 245,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Home.jsx",
        lineNumber: 244,
        columnNumber: 9
    }, this);
};
}}),
"[project]/src/sections/About.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
;
;
;
;
;
const About = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "About",
        sx: {
            pt: 8,
            minHeight: '100vh',
            width: '100%',
            background: `linear-gradient(to bottom,${theme.palette.background.paper}, ${theme.palette.background.default}, ${theme.palette.background.default})`,
            display: 'flex',
            alignItems: 'center'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: '100%',
                maxWidth: 1200,
                mx: 'auto',
                px: {
                    xs: 2,
                    sm: 4,
                    md: 6
                },
                display: 'flex',
                flexDirection: 'column',
                gap: 4
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    "data-aos": "zoom-in",
                    variant: "h3",
                    component: "h3",
                    sx: {
                        fontWeight: 600,
                        textAlign: 'center',
                        fontSize: {
                            xs: '2rem',
                            sm: '2.5rem',
                            md: '3.5rem',
                            lg: '4.5rem'
                        }
                    },
                    children: [
                        "Hi, I'm",
                        ' ',
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                            component: "span",
                            sx: {
                                background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontWeight: 'bold'
                            },
                            children: "Devansh Amdavadwala"
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 54,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/About.jsx",
                    lineNumber: 38,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        color: 'gray.400',
                        fontWeight: 600,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: {
                            xs: 2,
                            md: 3
                        },
                        textAlign: 'justify',
                        fontSize: {
                            xs: '1rem',
                            sm: '1.1rem'
                        }
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "I'm an Android Developer with a passion for creating robust, efficient, and user-friendly mobile applications that deliver real-world impact."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "With hands-on experience in Java and Kotlin, I specialize in building modern Android apps using Jetpack Compose, MVVM with Clean Architecture principles. I’ve worked extensively with Room Database,  SharedPreferences,  Retrofit,  ktor for seamless local data handling and server-client connectivity for mobile application."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "I have integrated Firebase services for authentication, messaging ,real-time database , firestore, remote-config also utilized Coroutines for smooth, asynchronous operations. My development process is enhanced by Dependency Injection using Hilt, Koin and the adoption of external libraries to accelerate and enrich app features."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 88,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "I enjoy solving complex challenges, exploring the latest tools in Android development, and delivering apps that are optimized, scalable, and easy to maintain."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                            "data-aos": "fade-up",
                            "data-aos-delay": "100",
                            children: "My focus is on building apps with clean code, modern UI using Compose, and delivering high-quality software on time and within scope."
                        }, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/sections/About.jsx",
                    lineNumber: 67,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    "data-aos": "flip-up",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("center", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(ResumeButton, {}, void 0, false, {
                            fileName: "[project]/src/sections/About.jsx",
                            lineNumber: 106,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/sections/About.jsx",
                        lineNumber: 105,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/About.jsx",
                    lineNumber: 104,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/About.jsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/About.jsx",
        lineNumber: 15,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = About;
const ResumeButton = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        component: "a",
        href: "/resume.pdf",
        download: true,
        target: "_blank",
        rel: "noreferrer",
        className: "group",
        sx: {
            position: 'relative',
            zIndex: 30,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            px: 3,
            py: 1.5,
            borderRadius: 2,
            cursor: 'pointer',
            width: '10rem',
            textDecoration: 'none',
            background: 'linear-gradient(to bottom right, #22d3ee, #2563eb)',
            transition: 'all 0.3s linear 75ms',
            overflow: 'hidden',
            '&:hover .label': {
                transform: 'translateX(-1.25rem)',
                transition: 'transform 0.4s ease-out 0.4s'
            },
            '&:hover .arrow': {
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'transform 0.3s ease-in 0.2s, opacity 0.3s ease-in 0.2s'
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "button",
                className: "label",
                sx: {
                    pr: {
                        xs: 3,
                        sm: 0
                    },
                    color: 'white',
                    fontWeight: 500,
                    fontFamily: 'Nunito',
                    transition: 'transform 0.3s ease'
                },
                children: "Resume"
            }, void 0, false, {
                fileName: "[project]/src/sections/About.jsx",
                lineNumber: 152,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "arrow",
                sx: {
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0,
                    animation: 'arrowPulse 2s infinite',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Download"], {}, void 0, false, {
                    fileName: "[project]/src/sections/About.jsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/sections/About.jsx",
                lineNumber: 166,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("style", {
                children: `
                @keyframes arrowPulse {
                    0%, 100% {
                        transform: translateY(-50%) scale(1);
                    }
                    50% {
                        transform: translateY(-50%) scale(1.15);
                    }
                }
                `
            }, void 0, false, {
                fileName: "[project]/src/sections/About.jsx",
                lineNumber: 185,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/About.jsx",
        lineNumber: 118,
        columnNumber: 9
    }, this);
};
}}),
"[externals]/framer-motion [external] (framer-motion, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("framer-motion");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/components/icons/SkillIcons.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "AndroidStudio": (()=>AndroidStudio),
    "Bash": (()=>Bash),
    "Bootstrap": (()=>Bootstrap),
    "C": (()=>C),
    "CPlusPlus": (()=>CPlusPlus),
    "CSS": (()=>CSS),
    "CSharp": (()=>CSharp),
    "Compose": (()=>Compose),
    "ComposeMultiplatform": (()=>ComposeMultiplatform),
    "Doker": (()=>Doker),
    "DotNet": (()=>DotNet),
    "ExpressJS": (()=>ExpressJS),
    "FireBase": (()=>FireBase),
    "Flutter": (()=>Flutter),
    "Git": (()=>Git),
    "GitHub": (()=>GitHub),
    "GraphQL": (()=>GraphQL),
    "HTML": (()=>HTML),
    "Heroku": (()=>Heroku),
    "JQuery": (()=>JQuery),
    "JS": (()=>JS),
    "Java": (()=>Java),
    "Kotlin": (()=>Kotlin),
    "Ktor": (()=>Ktor),
    "Kubernets": (()=>Kubernets),
    "MaterialUI": (()=>MaterialUI),
    "MongoDB": (()=>MongoDB),
    "MySQL": (()=>MySQL),
    "NextJs": (()=>NextJs),
    "NodeJS": (()=>NodeJS),
    "PHP": (()=>PHP),
    "PostGreSql": (()=>PostGreSql),
    "PostMan": (()=>PostMan),
    "Python": (()=>Python),
    "Redis": (()=>Redis),
    "Redux": (()=>Redux),
    "Rust": (()=>Rust),
    "SASS": (()=>SASS),
    "SQLite": (()=>SQLite),
    "TS": (()=>TS),
    "TailwindCSS": (()=>TailwindCSS),
    "VSCode": (()=>VSCode),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
;
const ReactJs = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "175.7 78 490.6 436.9",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#61dafb",
                    d: "m666.3 296.5c0-32.5-40.7-63.3-103.1-82.4 14.4-63.6 8-114.2-20.2-130.4-6.5-3.8-14.1-5.6-22.4-5.6v22.3c4.6 0 8.3.9 11.4 2.6 13.6 7.8 19.5 37.5 14.9 75.7-1.1 9.4-2.9 19.3-5.1 29.4-19.6-4.8-41-8.5-63.5-10.9-13.5-18.5-27.5-35.3-41.6-50 32.6-30.3 63.2-46.9 84-46.9v-22.3c-27.5 0-63.5 19.6-99.9 53.6-36.4-33.8-72.4-53.2-99.9-53.2v22.3c20.7 0 51.4 16.5 84 46.6-14 14.7-28 31.4-41.3 49.9-22.6 2.4-44 6.1-63.6 11-2.3-10-4-19.7-5.2-29-4.7-38.2 1.1-67.9 14.6-75.8 3-1.8 6.9-2.6 11.5-2.6v-22.3c-8.4 0-16 1.8-22.6 5.6-28.1 16.2-34.4 66.7-19.9 130.1-62.2 19.2-102.7 49.9-102.7 82.3 0 32.5 40.7 63.3 103.1 82.4-14.4 63.6-8 114.2 20.2 130.4 6.5 3.8 14.1 5.6 22.5 5.6 27.5 0 63.5-19.6 99.9-53.6 36.4 33.8 72.4 53.2 99.9 53.2 8.4 0 16-1.8 22.6-5.6 28.1-16.2 34.4-66.7 19.9-130.1 62-19.1 102.5-49.9 102.5-82.3zm-130.2-66.7c-3.7 12.9-8.3 26.2-13.5 39.5-4.1-8-8.4-16-13.1-24-4.6-8-9.5-15.8-14.4-23.4 14.2 2.1 27.9 4.7 41 7.9zm-45.8 106.5c-7.8 13.5-15.8 26.3-24.1 38.2-14.9 1.3-30 2-45.2 2-15.1 0-30.2-.7-45-1.9-8.3-11.9-16.4-24.6-24.2-38-7.6-13.1-14.5-26.4-20.8-39.8 6.2-13.4 13.2-26.8 20.7-39.9 7.8-13.5 15.8-26.3 24.1-38.2 14.9-1.3 30-2 45.2-2 15.1 0 30.2.7 45 1.9 8.3 11.9 16.4 24.6 24.2 38 7.6 13.1 14.5 26.4 20.8 39.8-6.3 13.4-13.2 26.8-20.7 39.9zm32.3-13c5.4 13.4 10 26.8 13.8 39.8-13.1 3.2-26.9 5.9-41.2 8 4.9-7.7 9.8-15.6 14.4-23.7 4.6-8 8.9-16.1 13-24.1zm-101.4 106.7c-9.3-9.6-18.6-20.3-27.8-32 9 .4 18.2.7 27.5.7 9.4 0 18.7-.2 27.8-.7-9 11.7-18.3 22.4-27.5 32zm-74.4-58.9c-14.2-2.1-27.9-4.7-41-7.9 3.7-12.9 8.3-26.2 13.5-39.5 4.1 8 8.4 16 13.1 24s9.5 15.8 14.4 23.4zm73.9-208.1c9.3 9.6 18.6 20.3 27.8 32-9-.4-18.2-.7-27.5-.7-9.4 0-18.7.2-27.8.7 9-11.7 18.3-22.4 27.5-32zm-74 58.9c-4.9 7.7-9.8 15.6-14.4 23.7-4.6 8-8.9 16-13 24-5.4-13.4-10-26.8-13.8-39.8 13.1-3.1 26.9-5.8 41.2-7.9zm-90.5 125.2c-35.4-15.1-58.3-34.9-58.3-50.6s22.9-35.6 58.3-50.6c8.6-3.7 18-7 27.7-10.1 5.7 19.6 13.2 40 22.5 60.9-9.2 20.8-16.6 41.1-22.2 60.6-9.9-3.1-19.3-6.5-28-10.2zm53.8 142.9c-13.6-7.8-19.5-37.5-14.9-75.7 1.1-9.4 2.9-19.3 5.1-29.4 19.6 4.8 41 8.5 63.5 10.9 13.5 18.5 27.5 35.3 41.6 50-32.6 30.3-63.2 46.9-84 46.9-4.5-.1-8.3-1-11.3-2.7zm237.2-76.2c4.7 38.2-1.1 67.9-14.6 75.8-3 1.8-6.9 2.6-11.5 2.6-20.7 0-51.4-16.5-84-46.6 14-14.7 28-31.4 41.3-49.9 22.6-2.4 44-6.1 63.6-11 2.3 10.1 4.1 19.8 5.2 29.1zm38.5-66.7c-8.6 3.7-18 7-27.7 10.1-5.7-19.6-13.2-40-22.5-60.9 9.2-20.8 16.6-41.1 22.2-60.6 9.9 3.1 19.3 6.5 28.1 10.2 35.4 15.1 58.3 34.9 58.3 50.6-.1 15.7-23 35.6-58.4 50.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 6,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                    fill: "#61dafb",
                    cx: "420.9",
                    cy: "296.5",
                    r: "45.7"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 7,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 5,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const JS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 124 141.53199999999998",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#e9ca32",
                    d: "M10.383 126.894L0 0l124 .255-10.979 126.639-50.553 14.638z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 16,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffde25",
                    d: "M62.468 129.277V12.085l51.064.17-9.106 104.851z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M57 26H43.5v78L33 102V91.5l-12.5-2V113l36.5 9.5zM67.127 26H104.5L102 40.95H81.394v24.533H102L99.5 115l-32.373 7.5V107L89 99.5 90.263 79l-23.136 3.35z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 18,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const NextJs = ({ width = 65, height1 = 65, height2 = 20 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: ".5 -.2 1023 1024.1",
                width: width,
                height: height1,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#5b616d",
                        d: "m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#000000",
                        d: "m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 28,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 512 103.22",
                width: width,
                height: height2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5b616d",
                    d: "M340.36.04h89.18V16.5h-35.38v86.6h-17.69V16.5h-36.11V.04zM503.8 70.86c-.19-1.82-1.03-3.25-2.49-4.27-1.48-1.03-3.38-1.54-5.72-1.54-1.64 0-3.05.25-4.23.74-1.17.49-2.08 1.15-2.71 1.99-.62.84-.93 1.8-.96 2.87 0 .9.22 1.68.64 2.33.42.66.98 1.22 1.71 1.67.72.46 1.52.83 2.4 1.14.89.31 1.77.57 2.66.78l4.09 1c1.64.38 3.23.89 4.76 1.54 1.52.64 2.9 1.45 4.11 2.43 1.21.98 2.17 2.16 2.87 3.54.71 1.39 1.07 3.01 1.07 4.87 0 2.52-.65 4.73-1.95 6.64-1.31 1.9-3.19 3.39-5.66 4.46-2.46 1.07-5.43 1.61-8.93 1.61-3.38 0-6.33-.52-8.81-1.56-2.49-1.03-4.44-2.54-5.84-4.52-1.4-1.99-2.15-4.41-2.26-7.26h7.76c.11 1.49.59 2.73 1.41 3.74.82.99 1.9 1.72 3.22 2.22 1.33.48 2.82.73 4.46.73 1.71 0 3.22-.26 4.53-.77 1.29-.51 2.31-1.21 3.04-2.14.75-.9 1.12-1.98 1.13-3.21-.01-1.12-.35-2.05-.99-2.79-.66-.73-1.57-1.34-2.74-1.84-1.17-.49-2.54-.94-4.1-1.33l-4.96-1.25c-3.58-.91-6.42-2.3-8.5-4.15-2.08-1.86-3.11-4.31-3.11-7.39 0-2.53.69-4.75 2.1-6.65 1.39-1.9 3.29-3.38 5.7-4.43 2.42-1.06 5.15-1.58 8.2-1.58 3.09 0 5.8.52 8.14 1.58 2.33 1.05 4.17 2.51 5.5 4.38s2.02 4 2.06 6.42h-7.6zm-40.09-11.8h7.84v30.19c-.01 2.78-.61 5.15-1.79 7.15-1.18 2-2.83 3.52-4.93 4.59-2.1 1.07-4.56 1.61-7.35 1.61-2.55 0-4.84-.46-6.88-1.36-2.04-.9-3.66-2.24-4.84-4.01-1.2-1.78-1.79-3.98-1.79-6.63h7.85c.01 1.16.28 2.16.78 3 .5.84 1.2 1.48 2.08 1.93.9.45 1.94.67 3.1.67 1.26 0 2.33-.26 3.21-.79.87-.52 1.55-1.3 2.01-2.34.46-1.03.7-2.3.71-3.82V59.06zm-30.19 43.41c-1.3 0-2.4-.45-3.32-1.35-.92-.89-1.38-1.98-1.37-3.27-.01-1.25.45-2.32 1.37-3.22.92-.9 2.02-1.35 3.32-1.35 1.25 0 2.34.45 3.26 1.35.93.9 1.4 1.97 1.41 3.22-.01.85-.22 1.63-.66 2.33-.44.71-1 1.26-1.71 1.67-.7.41-1.46.62-2.3.62zm-329-.14L22.11 0H0v103.06h17.69V22.03l65.22 81.07h110.78V86.64H122.2v-27.2h57.49V42.98H122.2V16.5h71.49V.04h-89.18V16.5h.01v85.83zM261.98 73.7l-11.6-14.42-35.37 43.94h23.21l23.76-29.52zM238.22.09h-23.15l82.92 103.05h23.21l-41.46-51.49L321.14.16 297.99.2l-29.84 37.06L238.22.09z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 31,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 30,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons/SkillIcons.jsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
};
const HTML = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 108.35 122.88",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                    fill: "#E44D26",
                    points: "108.35,0 98.48,110.58 54.11,122.88 9.86,110.6 0,0 108.35,0"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 40,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                    fill: "#F16529",
                    points: "54.17,113.48 90.03,103.54 98.46,9.04 54.17,9.04 54.17,113.48"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#EBEBEB",
                    d: "M34.99,36.17h19.19V22.61H20.16l0.32,3.64l3.33,37.38h30.35V50.06H36.23L34.99,36.17L34.99,36.17L34.99,36.17z M38.04,70.41H24.43l1.9,21.3l27.79,7.71l0.06-0.02V85.29l-0.06,0.02l-15.11-4.08L38.04,70.41L38.04,70.41L38.04,70.41z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFFFFF",
                    d: "M54.13,63.63h16.7l-1.57,17.59L54.13,85.3v14.11l27.81-7.71l0.2-2.29l3.19-35.71l0.33-3.64H54.13V63.63 L54.13,63.63z M54.13,36.14v0.03h32.76l0.27-3.05l0.62-6.88l0.32-3.64H54.13V36.14L54.13,36.14L54.13,36.14z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 43,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 39,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const CSS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 124 141.53",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1b73ba",
                    d: "M10.383 126.892L0 0l124 .255-10.979 126.637-50.553 14.638z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1c88c7",
                    d: "M62.468 129.275V12.085l51.064.17-9.106 104.85z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M100.851 27.064H22.298l2.128 15.318h37.276l-36.68 15.745 2.127 14.808h54.043l-1.958 20.68-18.298 3.575-16.595-4.255-1.277-11.745H27.83l2.042 24.426 32.681 9.106 31.32-9.957 4-47.745H64.765l36.085-14.978z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const TS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 122.88",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#007ACC",
                    d: "M0,61.44V0h122.88v122.88H0V61.44L0,61.44z M0,61.44L0,61.44L0,61.44L0,61.44z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFFFFF",
                    d: "M26.94,61.65v5.01h15.97v45.47h11.34V66.66h15.97v-4.92c0-2.76,0-5.01-0.12-5.07c0-0.09-9.74-0.12-21.57-0.12 l-21.5,0.09v5.04L26.94,61.65L26.94,61.65L26.94,61.65z M98.73,56.52c3.13,0.74,5.53,2.15,7.68,4.39c1.14,1.23,2.83,3.38,2.95,3.93 c0,0.18-5.31,3.78-8.54,5.78c-0.12,0.09-0.61-0.43-1.11-1.23c-1.6-2.27-3.23-3.26-5.78-3.44c-3.69-0.25-6.14,1.69-6.14,4.91 c0,0.98,0.18,1.54,0.55,2.33c0.83,1.69,2.37,2.7,7.13,4.79c8.79,3.78,12.6,6.27,14.9,9.83c2.61,3.99,3.19,10.26,1.44,14.96 c-1.97,5.13-6.76,8.6-13.61,9.74c-2.15,0.37-7.07,0.31-9.37-0.09c-4.91-0.92-9.62-3.38-12.5-6.54c-1.14-1.23-3.32-4.52-3.19-4.73 l1.17-0.74l4.61-2.67l3.47-2.03l0.8,1.08c1.01,1.6,3.29,3.75,4.61,4.49c3.99,2.06,9.34,1.78,11.98-0.61 c1.14-1.04,1.63-2.15,1.63-3.69c0-1.41-0.22-2.06-0.92-3.13c-0.98-1.35-2.95-2.46-8.48-4.91c-6.36-2.7-9.06-4.42-11.58-7.07 c-1.44-1.6-2.76-4.09-3.38-6.14c-0.46-1.78-0.61-6.14-0.18-7.9c1.32-6.14,5.96-10.44,12.6-11.67c2.15-0.43,7.22-0.25,9.34,0.31 L98.73,56.52L98.73,56.52L98.73,56.52z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 62,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const TailwindCSS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 73.29",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#06b6d4",
                d: "M61.44,0Q36.87,0,30.72,24.43q9.22-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.26,6,6.08,13,13.11,28.22,13.11q24.57,0,30.72-24.43-9.21,12.22-21.5,9.16c-4.68-1.16-8-4.53-11.72-8.26C83.64,7,76.67,0,61.44,0ZM30.72,36.64Q6.15,36.64,0,61.07q9.23-12.21,21.5-9.16c4.68,1.16,8,4.53,11.72,8.27,6,6.07,13,13.11,28.22,13.11q24.57,0,30.72-24.43Q82.95,61.07,70.66,58c-4.68-1.16-8-4.53-11.72-8.26-6-6.08-13-13.12-28.22-13.12Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 73,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 72,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const ExpressJS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1333.33 773.55",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#5B616D",
                d: "M1333.33 753.49c-48.5 12.33-78.5.54-105.41-39.87L1036.5 448.79l-27.67-36.67L785.29 714.5c-25.54 36.38-52.33 52.2-100 39.33l286.25-384.25-266.5-347.09c45.83-8.91 77.5-4.38 105.62 36.67l198.54 268.13 200-266.67c25.62-36.38 53.17-50.2 99.17-36.8l-103.33 137-140 182.29c-16.67 20.83-14.38 35.09.96 55.2l267.33 355.18zM.34 363.16l23.41-115.17c63.75-227.92 325-322.63 505.17-181.8 105.29 82.83 131.46 200 126.25 331.25H61.67C52.76 633.69 222.8 776.27 439.58 703.53c76.04-25.54 120.83-85.09 143.25-159.58 11.38-37.33 30.2-43.17 65.29-32.5-17.91 93.17-58.33 171-143.75 219.71-127.62 72.91-309.8 49.33-405.62-52C41.66 620.36 18.08 545.87 7.5 466.2c-1.67-13.17-5-25.71-7.5-38.33.22-21.56.34-43.11.34-64.67v-.04zm62.41-15.83h536.33c-3.5-170.83-109.87-292.17-255.25-293.2-159.58-1.25-274.17 117.2-281.09 293.2h.01z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 82,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 81,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const MongoDB = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 598.88 1333.33",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#599636",
                    d: "M295.27 3.65l35.58 66.83c8 12.33 16.67 23.25 26.87 33.42 29.79 29.79 58.08 60.99 83.5 94.41 60.28 79.16 100.95 167.07 129.98 262.14 17.42 58.08 26.87 117.66 27.58 177.9 2.91 180.11-58.83 334.76-183.31 463.28-20.33 20.33-42.08 39.16-65.41 55.91-12.33 0-18.17-9.46-23.25-18.16-9.45-15.96-15.25-34.17-18.16-52.29-4.38-21.8-7.25-43.58-5.83-66.08v-10.16c-1-2.17-11.87-1002.07-7.54-1007.19v.01z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 91,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#6cac48",
                    d: "M295.27 1.43c-1.46-2.91-2.91-.71-4.38.71.71 14.58-4.38 27.58-12.33 40-8.75 12.33-20.33 21.8-31.96 31.96-64.57 55.91-115.4 123.45-156.11 198.98C36.33 374.74 8.41 483.68.5 598.38c-3.62 41.37 13.09 187.36 26.13 229.48 35.58 111.82 99.49 205.52 182.27 286.84 20.33 19.58 42.08 37.74 64.58 55.2 6.54 0 7.25-5.83 8.74-10.17 2.85-9.28 5.06-18.76 6.54-28.34l14.58-108.9L295.26 1.43z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 92,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#c2bfbf",
                    d: "M330.85 1201.77c1.46-16.67 9.46-30.5 18.17-44.29-8.75-3.62-15.25-10.83-20.33-18.87-4.38-7.25-8-15.96-10.83-23.96-10.17-30.5-12.33-62.5-15.25-93.66v-18.87c-3.62 2.91-4.38 27.58-4.38 31.25-2.03 32.85-6.54 65.8-13.08 98.05-2.17 13.08-3.62 26.12-11.67 37.74 0 1.46 0 2.91.71 5.09 13.08 38.5 16.67 77.7 18.87 117.66v14.58c0 17.41-.71 13.74 13.75 19.58 5.83 2.17 12.33 2.91 18.16 7.25 4.38 0 5.09-3.62 5.09-6.54l-2.17-23.96v-66.83c-.71-11.67 1.46-23.25 2.91-34.16l.05-.06z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 90,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const NodeJS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 109 122.88",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#689F63",
                d: "M68.43,87.08c-19.7,0-23.83-9.04-23.83-16.63c0-0.72,0.58-1.3,1.3-1.3h5.82c0.64,0,1.18,0.47,1.28,1.1 c0.88,5.93,3.49,8.92,15.41,8.92c9.49,0,13.52-2.14,13.52-7.18c0-2.9-1.15-5.05-15.89-6.49c-12.33-1.22-19.95-3.93-19.95-13.8 c0-9.08,7.66-14.49,20.5-14.49c14.42,0,21.56,5,22.46,15.76c0.03,0.37-0.1,0.73-0.35,1c-0.25,0.26-0.6,0.42-0.96,0.42H81.9 c-0.61,0-1.14-0.43-1.26-1.01c-1.41-6.23-4.81-8.23-14.07-8.23c-10.36,0-11.56,3.61-11.56,6.31c0,3.28,1.42,4.24,15.4,6.09 c13.84,1.84,20.41,4.43,20.41,14.16c0,9.81-8.18,15.43-22.45,15.43L68.43,87.08L68.43,87.08z M54.52,122.88 c-1.65,0-3.28-0.43-4.72-1.26l-15.03-8.9c-2.25-1.26-1.15-1.7-0.41-1.96c2.99-1.05,3.6-1.28,6.8-3.1c0.34-0.19,0.78-0.12,1.12,0.08 l11.55,6.85c0.42,0.23,1.01,0.23,1.4,0l45.03-25.99c0.42-0.24,0.69-0.72,0.69-1.22V35.43c0-0.52-0.27-0.98-0.7-1.24L55.23,8.22 c-0.42-0.25-0.97-0.25-1.39,0l-45,25.97c-0.44,0.25-0.71,0.73-0.71,1.23v51.96c0,0.5,0.27,0.97,0.7,1.21l12.33,7.12 c6.69,3.35,10.79-0.6,10.79-4.56V39.86c0-0.73,0.57-1.3,1.31-1.3l5.7,0c0.71,0,1.3,0.56,1.3,1.3v51.31 c0,8.93-4.87,14.05-13.33,14.05c-2.6,0-4.66,0-10.38-2.82L4.72,95.59C1.8,93.9,0,90.75,0,87.38V35.42c0-3.38,1.8-6.54,4.72-8.21 l45.07-26c2.85-1.61,6.64-1.61,9.47,0l45.02,26.01c2.91,1.68,4.72,4.82,4.72,8.21v51.96c0,3.37-1.81,6.51-4.72,8.21l-45.02,26 c-1.44,0.83-3.08,1.26-4.74,1.26L54.52,122.88L54.52,122.88z M54.52,122.88L54.52,122.88L54.52,122.88L54.52,122.88z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 102,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 101,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const C = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 109.19 122.88",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3949AB",
                    d: "M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16 L107.81,92.16L107.81,92.16z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 111,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#283593",
                    d: "M59.33,121.75l45.14-26.06c1.3-0.75,2.48-2.05,3.34-3.53L54.6,61.44L1.39,92.16c0.86,1.48,2.04,2.78,3.34,3.53 l45.14,26.06C52.47,123.25,56.72,123.25,59.33,121.75L59.33,121.75L59.33,121.75z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 112,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5C6BC0",
                    d: "M107.81,30.72c-0.86-1.48-2.04-2.78-3.34-3.53L59.33,1.13c-2.6-1.5-6.86-1.5-9.46,0L4.73,27.19 C2.13,28.69,0,32.38,0,35.38V87.5c0,1.5,0.53,3.17,1.39,4.66L54.6,61.44L107.81,30.72L107.81,30.72L107.81,30.72z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 113,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFFFFF",
                    d: "M54.6,97.84c-20.07,0-36.4-16.33-36.4-36.4s16.33-36.4,36.4-36.4c12.95,0,25.03,6.97,31.52,18.19l-15.75,9.12 c-3.25-5.62-9.29-9.1-15.77-9.1c-10.04,0-18.2,8.16-18.2,18.2c0,10.03,8.16,18.2,18.2,18.2c6.48,0,12.52-3.49,15.77-9.1l15.75,9.12 C79.63,90.87,67.55,97.84,54.6,97.84L54.6,97.84L54.6,97.84z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 114,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 110,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const CPlusPlus = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 109.19 122.88",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#00599C",
                        d: "M107.81,92.16c0.86-1.48,1.39-3.16,1.39-4.66V35.38c0-1.5-0.53-3.17-1.39-4.66L54.6,61.44L107.81,92.16 L107.81,92.16z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 124,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#004482",
                        d: "M59.33,121.75l45.14-26.06c1.3-0.75,2.48-2.05,3.34-3.53L54.6,61.44L1.39,92.16c0.86,1.48,2.04,2.78,3.34,3.53 l45.14,26.06C52.47,123.26,56.73,123.26,59.33,121.75L59.33,121.75z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 125,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#659AD2",
                        d: "M107.81,30.72c-0.86-1.48-2.04-2.78-3.34-3.53L59.33,1.13c-2.6-1.5-6.86-1.5-9.46,0L4.73,27.19 C2.13,28.69,0,32.37,0,35.38V87.5c0,1.5,0.53,3.17,1.39,4.66L54.6,61.44L107.81,30.72L107.81,30.72z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 126,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        fill: "#FFFFFF",
                        d: "M54.6,97.84c-20.07,0-36.4-16.33-36.4-36.4c0-20.07,16.33-36.4,36.4-36.4c12.95,0,25.03,6.97,31.52,18.19 l-15.75,9.12c-3.25-5.62-9.29-9.1-15.77-9.1c-10.04,0-18.2,8.16-18.2,18.2c0,10.03,8.16,18.2,18.2,18.2 c6.48,0,12.52-3.49,15.77-9.1l15.75,9.12C79.63,90.87,67.55,97.84,54.6,97.84L54.6,97.84z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 127,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                        fill: "#FFFFFF",
                        points: "91,59.42 86.95,59.42 86.95,55.37 82.91,55.37 82.91,59.42 78.86,59.42 78.86,63.46 82.91,63.46 82.91,67.51 86.95,67.51 86.95,63.46 91,63.46 91,59.42"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 128,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                        fill: "#FFFFFF",
                        points: "106.16,59.42 102.12,59.42 102.12,55.37 98.07,55.37 98.07,59.42 94.03,59.42 94.03,63.46 98.07,63.46 98.07,67.51 102.12,67.51 102.12,63.46 106.16,63.46 106.16,59.42"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 123,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 122,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Python = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#347AB4",
                    d: "M194.005,240.252h105.054c29.216,0,52.529-24.101,52.529-53.414V86.603 c0-28.525-24.002-49.871-52.529-54.691c-35.214-5.804-73.479-5.509-105.054,0.097c-44.462,7.87-52.527,24.298-52.527,54.693 v21.453H246.63v31.959H102.032c-30.591,0-57.349,18.394-65.709,53.315c-9.64,40.035-10.032,65.02,0,106.826 c7.477,31.085,25.28,53.314,55.872,53.314h36.101v-48.001C128.296,270.845,158.298,240.252,194.005,240.252L194.005,240.252z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 140,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#275C87",
                    d: "M128.296,363.569H92.195c-32.842,0-56.137-21.655-65.595-60.976 c-10.146-42.276-10.145-69.37,0-111.505c4.521-18.885,14.243-34.559,28.112-45.314c13.21-10.245,29.573-15.66,47.319-15.66 H236.63v-11.959h-95.152c-5.523,0-10-4.477-10-10V86.702c0-13.954,1.423-29.889,11.979-42.278 c9.452-11.094,24.504-17.96,48.806-22.261c16.512-2.932,35.127-4.482,53.829-4.482c18.655,0,37.023,1.469,54.594,4.365 c16.345,2.762,31.383,10.299,42.385,21.229c11.941,11.865,18.519,27.253,18.519,43.329v100.235 c0,34.967-28.051,63.414-62.529,63.414H194.005c-29.677,0-55.709,25.849-55.709,55.316v48.001 C138.296,359.092,133.819,363.569,128.296,363.569z M102.032,150.114c-28.213,0-49.142,17.063-55.984,45.643 c-9.526,39.563-9.525,62.475-0.001,102.165c5.008,20.821,17.081,45.647,46.148,45.647h26.101v-38.001 c0-19.263,8.159-38.487,22.386-52.743c14.527-14.557,33.464-22.573,53.323-22.573h105.054 c23.451,0,42.529-19.476,42.529-43.414V86.603c0-24.529-22.233-41.12-44.195-44.831c-16.46-2.713-33.733-4.092-51.302-4.092 c-17.549,0-34.956,1.444-50.337,4.175c-39.908,7.064-44.275,19.689-44.275,44.847v11.453h95.152c5.523,0,10,4.477,10,10v31.959 c0,5.523-4.477,10-10,10H102.032z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 141,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFCA1D",
                    d: "M474.975,209.372c-7.575-30.395-21.935-53.315-52.527-53.315h-39.443v46.626  c0,36.199-30.692,66.691-65.71,66.691H212.24c-28.724,0-52.528,24.594-52.528,53.414v100.138 c0,28.524,24.788,45.246,52.528,53.413c33.247,9.737,65.215,11.509,105.054,0c26.462-7.675,52.529-23.116,52.529-53.413v-20.997 H264.867v-32.417h157.58c30.593,0,41.904-21.346,52.527-53.314C485.992,283.244,485.501,251.57,474.975,209.372L474.975,209.372 z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 142,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#BF9816",
                    d: "M264.431,494.32c-17.747,0-35.738-2.743-55.001-8.385 c-38.515-11.339-59.718-33.715-59.718-63.01V322.788c0-34.374,28.634-63.414,62.528-63.414h105.054 c29.678,0,55.71-26.491,55.71-56.691v-46.626c0-5.523,4.478-10,10-10h39.443c17.276,0,31.546,6.279,42.412,18.664 c8.734,9.955,15.217,23.77,19.818,42.232c11.191,44.863,11.126,78.483-0.219,112.415c-10.11,30.424-23.23,60.144-62.012,60.144 h-147.58v12.417h94.956c5.522,0,10,4.478,10,10v20.997c0,20.844-10.365,48.696-59.744,63.018 C300.563,491.581,282.364,494.32,264.431,494.32z M212.24,279.374c-23.053,0-42.528,19.881-42.528,43.414v100.138 c0,26.51,28.415,38.834,45.353,43.82c17.639,5.166,33.33,7.574,49.366,7.574c16.028,0,32.413-2.482,50.088-7.589 c30.059-8.718,45.305-23.457,45.305-43.806v-10.997h-94.956c-5.522,0-10-4.478-10-10v-32.417c0-5.522,4.478-10,10-10h157.58 c21.148,0,31.204-10.857,43.037-46.468c10.189-30.476,10.126-59.805-0.213-101.252c-7.883-31.631-21.09-45.735-42.824-45.735 h-29.443v36.626c0,41.571-34.671,76.691-75.71,76.691H212.24z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 143,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFFFFF",
                    d: "M187.414,89.594c-10.479,0-18.975-8.591-18.975-19.164c0.094-10.668,8.496-19.259,18.975-19.259 c10.386,0,18.976,8.685,18.976,19.259C206.39,81.003,197.894,89.594,187.414,89.594z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 144,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFFFFF",
                    d: "M314.908,460.076c-10.479,0-18.976-8.591-18.976-19.164c0.095-10.668,8.496-19.259,18.976-19.259 c10.385,0,18.976,8.685,18.976,19.259C333.884,451.485,325.388,460.076,314.908,460.076z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 145,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 139,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Java = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 90.63 122.88",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M29.19,95.03c0,0-4.7,2.73,3.34,3.65c9.74,1.11,14.71,0.95,25.44-1.08c0,0,2.82,1.77,6.76,3.3 C40.68,111.22,10.29,100.31,29.19,95.03L29.19,95.03z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 154,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M26.25,81.58c0,0-5.27,3.9,2.78,4.73c10.4,1.07,18.62,1.16,32.83-1.58c0,0,1.97,1.99,5.06,3.08 C37.83,96.32,5.43,88.48,26.25,81.58L26.25,81.58z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 155,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E76F00",
                    d: "M51.03,58.76c5.93,6.82-1.56,12.96-1.56,12.96s15.05-7.77,8.14-17.5C51.15,45.15,46.2,40.64,73,25.1 C73,25.1,30.94,35.6,51.03,58.76L51.03,58.76z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 156,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M82.84,104.98c0,0,3.47,2.86-3.83,5.08c-13.88,4.21-57.79,5.48-69.99,0.17c-4.38-1.91,3.84-4.55,6.42-5.11 c2.7-0.59,4.24-0.48,4.24-0.48c-4.88-3.43-31.52,6.74-13.53,9.66C55.2,122.25,95.56,110.72,82.84,104.98L82.84,104.98z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 157,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M31.45,67.64c0,0-22.33,5.3-7.91,7.23c6.09,0.82,18.23,0.63,29.54-0.32c9.24-0.78,18.52-2.44,18.52-2.44 s-3.26,1.4-5.62,3.01c-22.68,5.96-66.49,3.19-53.88-2.91C22.77,67.05,31.45,67.64,31.45,67.64L31.45,67.64z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 158,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M71.51,90.03c23.05-11.98,12.39-23.49,4.95-21.94c-1.82,0.38-2.64,0.71-2.64,0.71s0.68-1.06,1.97-1.52 c14.72-5.17,26.04,15.26-4.75,23.36C71.05,90.64,71.4,90.32,71.51,90.03L71.51,90.03z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 159,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E76F00",
                    d: "M57.61,0c0,0,12.77,12.77-12.11,32.41c-19.95,15.75-4.55,24.74-0.01,35C33.85,56.91,25.3,47.66,31.03,39.05 C39.45,26.41,62.76,20.29,57.61,0L57.61,0z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 160,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#5382A1",
                    d: "M33.71,122.49c22.13,1.42,56.11-0.79,56.92-11.26c0,0-1.55,3.97-18.29,7.12c-18.89,3.55-42.18,3.14-56,0.86 C16.34,119.22,19.17,121.56,33.71,122.49L33.71,122.49z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 161,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 153,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const PHP = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 62.27",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#6884BA",
                    d: "M61.44,62.27c33.93,0,61.44-13.94,61.44-31.14C122.88,13.94,95.37,0,61.44,0S0,13.94,0,31.14 C0,48.33,27.51,62.27,61.44,62.27L61.44,62.27z M93.88,24.99c-0.47-0.52-1.71-0.78-3.73-0.78H87.1l-1.79,9.19h1.75 c1.23,0,2.27-0.11,3.14-0.33c0.76-0.19,1.37-0.46,1.83-0.81c0.45-0.34,0.83-0.82,1.15-1.44c0.36-0.69,0.65-1.55,0.85-2.58 c0.19-0.96,0.24-1.75,0.16-2.38C94.14,25.45,94.04,25.16,93.88,24.99L93.88,24.99z M54.56,6.86h6.81c1.1,0,2,0.9,2,2 c0,0.17-0.02,0.34-0.06,0.5l-1.14,5.87h3.64c2.07,0,3.84,0.19,5.32,0.56c1.64,0.42,2.95,1.07,3.93,1.97 c0.85,0.78,1.45,1.74,1.81,2.88l0.71-3.67c0.13-0.98,0.97-1.74,1.98-1.74h13.2c2.2,0,4.14,0.3,5.82,0.91 c1.77,0.64,3.23,1.61,4.37,2.91c1.15,1.32,1.9,2.88,2.24,4.69c0.32,1.71,0.28,3.61-0.13,5.72c-0.17,0.85-0.4,1.69-0.69,2.51 c-0.29,0.81-0.64,1.58-1.05,2.31c-0.42,0.74-0.89,1.45-1.41,2.1c-0.53,0.66-1.12,1.3-1.77,1.89l0,0c-0.79,0.74-1.62,1.37-2.49,1.89 c-0.9,0.54-1.83,0.96-2.8,1.28c-0.94,0.31-2.02,0.54-3.22,0.69c-1.19,0.15-2.46,0.23-3.8,0.23h-4.23L82.28,49 c-0.13,0.98-0.97,1.74-1.98,1.74h-6.86v0c-0.12,0-0.25-0.01-0.38-0.04c-1.08-0.21-1.79-1.25-1.59-2.34l1.18-6.07 c-0.16,0.04-0.33,0.06-0.5,0.06v0h-6.92c-1.1,0-2-0.9-2-2c0-0.17,0.02-0.34,0.06-0.5l2.68-13.81c0.12-0.61,0.16-1.08,0.12-1.42 c-0.01-0.1,0.07-0.05,0.04-0.09l-0.28-0.07c-0.4-0.1-0.96-0.15-1.68-0.15h-3.8L57.2,40.74c-0.18,0.96-1.02,1.62-1.96,1.62v0h-6.81 c-1.1,0-2-0.9-2-2c0-0.17,0.02-0.34,0.06-0.5l0.36-1.87l-0.3,0.28l0,0c-0.79,0.74-1.62,1.37-2.49,1.89 c-0.9,0.54-1.83,0.96-2.8,1.28c-0.94,0.31-2.02,0.54-3.22,0.69c-1.19,0.15-2.46,0.23-3.8,0.23H30L28.71,49 c-0.13,0.98-0.97,1.74-1.98,1.74h-6.86v0c-0.12,0-0.25-0.01-0.38-0.04c-1.08-0.21-1.79-1.25-1.59-2.34l6.1-31.39 c0.13-0.98,0.97-1.74,1.98-1.74h13.2c2.2,0,4.14,0.3,5.82,0.91c1.78,0.64,3.23,1.61,4.37,2.91c0.34,0.39,0.65,0.81,0.93,1.25 l2.3-11.81C52.78,7.53,53.62,6.86,54.56,6.86L54.56,6.86L54.56,6.86z M40.32,24.99c-0.47-0.52-1.71-0.78-3.73-0.78h-3.06 l-1.79,9.19h1.75c1.23,0,2.27-0.11,3.14-0.33c0.76-0.19,1.37-0.46,1.83-0.81c0.45-0.34,0.83-0.82,1.15-1.44 c0.36-0.69,0.65-1.55,0.85-2.58c0.19-0.96,0.24-1.75,0.16-2.38C40.57,25.45,40.47,25.16,40.32,24.99L40.32,24.99z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 171,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M90.15,22.21c2.61,0,4.35,0.48,5.21,1.44c0.87,0.96,1.07,2.61,0.62,4.96c-0.47,2.44-1.39,4.18-2.74,5.22 c-1.35,1.04-3.42,1.56-6.18,1.56h-4.17l2.56-13.19H90.15L90.15,22.21z M54.56,8.86h6.81l-1.63,8.38h6.07c3.82,0,6.45,0.67,7.9,2 c1.45,1.33,1.88,3.49,1.3,6.47l-2.85,14.66h-6.92l2.71-13.94c0.31-1.59,0.19-2.67-0.34-3.24c-0.54-0.58-1.67-0.87-3.42-0.87h-5.44 l-3.51,18.05h-6.81L54.56,8.86L54.56,8.86z M36.59,22.21c2.61,0,4.35,0.48,5.21,1.44c0.87,0.96,1.08,2.61,0.62,4.96 c-0.47,2.44-1.39,4.18-2.74,5.22c-1.35,1.04-3.42,1.56-6.18,1.56h-4.17l2.56-13.19H36.59L36.59,22.21z M19.87,48.74h6.86l1.63-8.38 h5.88c2.59,0,4.73-0.27,6.4-0.82c1.68-0.54,3.2-1.46,4.57-2.74c1.15-1.06,2.08-2.22,2.79-3.5c0.71-1.27,1.22-2.68,1.52-4.22 c0.73-3.73,0.18-6.64-1.64-8.73c-1.82-2.08-4.72-3.13-8.69-3.13h-13.2L19.87,48.74L19.87,48.74z M73.43,48.74h6.86l1.63-8.38h5.88 c2.59,0,4.73-0.27,6.4-0.82c1.68-0.54,3.2-1.46,4.57-2.74c1.15-1.06,2.08-2.22,2.79-3.5c0.71-1.27,1.22-2.68,1.52-4.22 c0.73-3.73,0.18-6.64-1.64-8.73c-1.82-2.08-4.72-3.13-8.69-3.13h-13.2L73.43,48.74L73.43,48.74z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 172,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 170,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Kotlin = ({ width = 60, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            xmlnsXlink: "http://www.w3.org/1999/xlink",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "c",
                    gradientTransform: "rotate(-45 32051.159 -83912.245) scale(31.584)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    y1: "-1495.328",
                    y2: "-1495.328",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#c757bc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 184,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".108",
                            stopColor: "#c757bc"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 185,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".173",
                            stopColor: "#cd5ca9"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 186,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".492",
                            stopColor: "#e8744f"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 187,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".716",
                            stopColor: "#f88316"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 188,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".823",
                            stopColor: "#ff8900"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 189,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#ff8900"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 182,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "a",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#00afff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 193,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".296",
                            stopColor: "#00afff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 194,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".694",
                            stopColor: "#5282ff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 195,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#945dff"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 192,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "d",
                    gradientTransform: "rotate(-45 15635.387 -40897.94) scale(15.3946)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    xlinkHref: "#a",
                    y1: "-1494.622",
                    y2: "-1494.622"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 198,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "e",
                    gradientTransform: "matrix(7.6364 -7.6366 7.6366 7.6364 23489.887 -665.412)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    xlinkHref: "#a",
                    y1: "-1494.036",
                    y2: "-1494.036"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 201,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "f",
                    gradientTransform: "rotate(-45 32051.159 -83912.245) scale(31.584)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    y1: "-1495.322",
                    y2: "-1495.322",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#ad4ca4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 207,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".108",
                            stopColor: "#ad4ca4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 208,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".173",
                            stopColor: "#b25093"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 209,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".492",
                            stopColor: "#ca6545"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 210,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".716",
                            stopColor: "#d87213"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 211,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".823",
                            stopColor: "#de7700"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 212,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#de7700"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 213,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 205,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "b",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#0098de"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 216,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".296",
                            stopColor: "#0098de"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 217,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".694",
                            stopColor: "#4771de"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 218,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#8151de"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 219,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 215,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "g",
                    gradientTransform: "rotate(-45 15635.387 -40897.94) scale(15.3946)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    xlinkHref: "#b",
                    y1: "-1494.622",
                    y2: "-1494.622"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "h",
                    gradientTransform: "matrix(7.6364 -7.6366 7.6366 7.6364 23489.887 -665.412)",
                    gradientUnits: "userSpaceOnUse",
                    x1: "-1582",
                    x2: "-1581",
                    xlinkHref: "#b",
                    y1: "-1493.643",
                    y2: "-1493.643"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 224,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M24 0H12.05L.639 12h11.34l.053-.054z",
                    fill: "url(#c)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 228,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M24 24H0zM12.032 11.946l-.053.054h.107z",
                    fill: "url(#d)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 229,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12.05 0H0v12.672V12h.639z",
                    fill: "url(#e)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 230,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M11.979 12H.639L0 12.672V24z",
                    fill: "url(#f)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12.086 12h-.107L0 24h24z",
                    fill: "url(#g)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 232,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M.639 12H0v.672z",
                    fill: "url(#h)"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 233,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 180,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Compose = ({ width = 60, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 128 128",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M41.226 76.778a4.002 4.002 0 0 1-.47-1.29c.09.452.25.887.47 1.29zm.578.713c.222.22.472.411.749.548l18.88 10.565-18.88-10.565a2.899 2.899 0 0 1-.747-.548z",
                    fill: "#083042"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M64.342 101.967h-.14a8.301 8.301 0 0 1-4.014-1.016l-28.182-15.75c-1.663-.932-2.686-2.66-2.686-4.527V48.628c0-1.373.249-2.69.83-3.842L8.114 32.522c-.913 1.92-1.383 4.088-1.356 6.366v52.927a8.675 8.675 0 0 0 4.458 7.49l46.481 26.012c2.05 1.152 4.347 1.701 6.617 1.701v-.027c.055-3.32.028-16.628.028-25.023z",
                    fill: "#083042"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 203
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "m86.46 50.6-.167-.246c-.138-.192-.275-.357-.413-.548.138.164.275.356.413.547a.973.973 0 0 1 .167.247zM63.262 37.76c.14 0 .251-.027.39-.027-.139.027-.278.027-.39.027z",
                    fill: "#3ddb85"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 540
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M30.122 44.757a7.214 7.214 0 0 1 2.825-3.072l26.52-15.503a8.065 8.065 0 0 1 8.03-.082l26.798 15.009a8.993 8.993 0 0 1 3.018 2.743L118.99 31.04a14.913 14.913 0 0 0-4.955-4.5L69.766 1.764a13.32 13.32 0 0 0-13.233.137L12.765 27.472a11.704 11.704 0 0 0-4.651 5.049l22.009 12.236z",
                    fill: "#3ddc84"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 738
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M62.157 37.983c.057-.028.114-.028.17-.056-.056.028-.113.028-.17.056zm-20.88 12.949c.056-.11.111-.22.168-.3-.057.109-.111.19-.168.3l-.082.246z",
                    fill: "#3ddb85"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 1046
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M118.962 31.04 97.285 43.852c.83 1.207 1.329 2.633 1.355 4.089v30.51a7.881 7.881 0 0 1-3.93 6.914L68.188 100.87a8.07 8.07 0 0 1-3.849 1.097c.029 8.369.029 21.677-.027 24.997v.027a13.533 13.533 0 0 0 6.617-1.812l43.769-25.599c4.07-2.387 6.562-6.723 6.506-11.415V37.817c-.028-2.442-.858-4.774-2.242-6.777z",
                    fill: "#4285f4"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 1220
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M86.963 75.187c-.028.056-.028.111-.056.168a.387.387 0 0 0 .056-.168zm-.278-24.227c-.057-.138-.14-.248-.223-.385.083.137.166.275.222.385zM66.807 88.576 84.58 78.178c.111-.054.195-.138.306-.192-.111.054-.195.138-.306.192l-17.773 10.4zM86.74 75.818c-.056.138-.139.275-.196.413.057-.165.112-.303.196-.413z",
                    fill: "#4285f4"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 1556
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M41.198 51.178a5.508 5.508 0 0 0-.415 1.675c-.028.218-.028.438-.028.686v21.483c0 .164 0 .302.028.467.056.465.222.905.47 1.29.167.274.36.492.555.712.222.22.47.411.746.55l18.882 10.563a5.49 5.49 0 0 0 2.684.685h.195a5.155 5.155 0 0 0 2.492-.74L84.58 78.15c.111-.055.194-.138.305-.192.194-.137.388-.275.554-.44.26-.236.501-.492.719-.768.138-.192.277-.383.388-.576.082-.136.139-.274.193-.412.056-.135.14-.301.195-.465.027-.056.027-.111.055-.165a5.403 5.403 0 0 0 .249-1.647V53.044c0-.383-.056-.74-.138-1.096-.055-.248-.14-.468-.222-.688l-.166-.328c-.055-.138-.14-.247-.222-.385l-.166-.246c-.138-.193-.277-.357-.415-.549a5.607 5.607 0 0 0-1.606-1.29L66.337 38.394a6.145 6.145 0 0 0-.97-.44 5.86 5.86 0 0 0-1.385-.246h-.36c-.137 0-.248 0-.386.026a5.658 5.658 0 0 0-.942.165c-.055.027-.11.027-.166.056-.415.11-.803.301-1.191.52l-17.773 10.4a4.548 4.548 0 0 0-1.33 1.18c-.137.192-.276.384-.387.576-.055.11-.11.192-.166.302l-.083.246Z",
                    fill: "#d6f0ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 1890
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M64.312 89.288h-.194a5.512 5.512 0 0 1-2.686-.684L42.552 78.04a3.737 3.737 0 0 1-.748-.549 3.31 3.31 0 0 1-.554-.714 3.998 3.998 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.322 5.322 0 0 0 2.685 4.528l28.157 15.776a8.023 8.023 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z",
                    fill: "#083042"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 2848
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M64.312 89.288h-.194a5.512 5.512 0 0 1-2.686-.684L42.552 78.04a3.737 3.737 0 0 1-.748-.549 3.31 3.31 0 0 1-.554-.714 3.998 3.998 0 0 1-.47-1.29c-.029-.163-.029-.301-.029-.465V53.537c0-.219 0-.465.029-.686.053-.575.192-1.14.415-1.674L36.1 48.078l-5.98-3.32c-.554 1.152-.83 2.468-.83 3.841v32.047a5.322 5.322 0 0 0 2.685 4.528l28.157 15.776a8.023 8.023 0 0 0 4.014 1.016h.14c0-4.089-.029-6.997-.029-6.997l.055-5.68z",
                    fill: "#041619"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 3294
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "m94.266 41.109-26.799-15.01a8.066 8.066 0 0 0-8.029.083l-26.52 15.504a7.049 7.049 0 0 0-2.826 3.073l6.01 3.32 5.093 3.099.082-.246c.056-.111.111-.22.166-.302.111-.192.25-.384.388-.576.36-.467.803-.85 1.33-1.18l17.772-10.4c.38-.213.777-.387 1.191-.52.056-.027.111-.027.166-.056.308-.084.623-.138.941-.164.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246.34.108.665.255.969.441l17.966 10.07a5.99 5.99 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246 4.595-3.044 6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z",
                    fill: "#3ddb85"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 3740
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "m94.266 41.109-26.799-15.01a8.066 8.066 0 0 0-8.029.083l-26.52 15.504a7.049 7.049 0 0 0-2.826 3.073l6.01 3.32 5.093 3.099.082-.246c.056-.111.111-.22.166-.302.111-.192.25-.384.388-.576.36-.467.803-.85 1.33-1.18l17.772-10.4c.38-.213.777-.387 1.191-.52.056-.027.111-.027.166-.056.308-.084.623-.138.941-.164.138 0 .249-.028.388-.028h.36c.469.03.933.111 1.384.246.34.108.665.255.969.441l17.966 10.07a5.99 5.99 0 0 1 1.608 1.289c.137.164.277.357.414.548l.167.246 4.595-3.044 6.229-3.704c-.803-1.071-1.827-2.032-3.045-2.69z",
                    fill: "#37bf6e"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 4289
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M86.46 50.602c.083.136.139.246.221.384l.167.329a4.783 4.783 0 0 1 .36 1.783V73.54a5.414 5.414 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.423 3.423 0 0 1-.193.468c-.057.135-.14.273-.195.41-.11.193-.249.384-.388.577a6.243 6.243 0 0 1-.719.767c-.166.165-.36.302-.554.44-.111.054-.193.137-.304.192L66.776 88.602a5.841 5.841 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.785 7.785 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z",
                    fill: "#4285f4"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 4838
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M86.46 50.602c.083.136.139.246.221.384l.167.329a4.783 4.783 0 0 1 .36 1.783V73.54a5.414 5.414 0 0 1-.25 1.646c-.027.054-.027.11-.055.164a3.423 3.423 0 0 1-.193.468c-.057.135-.14.273-.195.41-.11.193-.249.384-.388.577a6.243 6.243 0 0 1-.719.767c-.166.165-.36.302-.554.44-.111.054-.193.137-.304.192L66.776 88.602a5.841 5.841 0 0 1-2.492.742v5.679s0 2.909.028 6.997a7.785 7.785 0 0 0 3.849-1.097l26.52-15.504c2.465-1.453 3.96-4.088 3.932-6.913V47.995c-.027-1.482-.525-2.882-1.355-4.089l-6.231 3.705z",
                    fill: "#3870b2"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 5366
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4 17.772-10.398a4.54 4.54 0 0 1 1.19-.52z",
                    fill: "#d6f0ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 5894
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    opacity: ".1",
                    d: "M62.155 37.982c-.416.11-.804.302-1.19.52l-17.774 10.4 17.772-10.398a4.54 4.54 0 0 1 1.19-.52z",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6020
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M85.88 49.806a5.615 5.615 0 0 0-1.605-1.29l-17.968-10.07 17.967 10.07a5.6 5.6 0 0 1 1.606 1.29z",
                    fill: "#d6f0ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6156
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    opacity: ".1",
                    d: "M85.88 49.806a5.615 5.615 0 0 0-1.605-1.29l-17.968-10.07 17.967 10.07a5.6 5.6 0 0 1 1.606 1.29z",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6284
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M86.848 51.289a6.7 6.7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z",
                    fill: "#d6f0ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6422
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    opacity: ".1",
                    d: "M86.848 51.289a6.7 6.7 0 0 1 .22.684c-.055-.219-.14-.438-.222-.684z",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6522
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M86.956 75.186a5.34 5.34 0 0 0 .249-1.646V53.098 73.54a5.34 5.34 0 0 1-.25 1.646z",
                    fill: "#d6f0ff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6632
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    opacity: ".1",
                    d: "M86.956 75.186a5.34 5.34 0 0 0 .249-1.646V53.098 73.54a5.34 5.34 0 0 1-.25 1.646z",
                    fill: "#000"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 243,
                    columnNumber: 6746
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 242,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Bootstrap = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 408",
            width: width,
            height: height,
            fillRule: "evenodd",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#6610F2",
                    d: "M56.48 53.32C55.52 25.58 77.13 0 106.34 0H405.7c29.21 0 50.82 25.58 49.86 53.32-.93 26.65.27 61.16 8.96 89.31 8.72 28.23 23.41 46.08 47.48 48.37v26c-24.07 2.29-38.76 20.14-47.48 48.37-8.69 28.15-9.89 62.66-8.96 89.31.96 27.74-20.65 53.32-49.86 53.32H106.34c-29.21 0-50.82-25.58-49.86-53.32.93-26.65-.28-61.16-8.96-89.31C38.8 237.14 24.07 219.29 0 217v-26c24.07-2.29 38.8-20.14 47.52-48.37 8.68-28.15 9.89-62.66 8.96-89.31z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 253,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M342.9 251.1c0 38.2-28.5 61.36-75.8 61.36h-89.2v-217h88.74c39.44 0 65.32 21.35 65.32 54.13 0 23.01-17.4 43.62-39.59 47.22v1.21c30.2 3.31 50.53 24.21 50.53 53.08zm-130.49 33.84v-71.43h45.6c32.66 0 49.61 12.03 49.61 35.49s-16.48 35.94-47.6 35.94h-47.61zm0-161.96h45.91c24.96 0 39.13 11.13 39.13 31.28 0 21.5-16.48 33.53-46.37 33.53h-38.67v-64.81z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 254,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 252,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const VSCode = ({ width = 60, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-11.9 -2 1003.9 995.6",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#2489ca",
                    d: "m12.1 353.9s-24-17.3 4.8-40.4l67.1-60s19.2-20.2 39.5-2.6l619.2 468.8v224.8s-.3 35.3-45.6 31.4z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 263,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1070b3",
                    d: "m171.7 498.8-159.6 145.1s-16.4 12.2 0 34l74.1 67.4s17.6 18.9 43.6-2.6l169.2-128.3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 264,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0877b9",
                    d: "m451.9 500 292.7-223.5-1.9-223.6s-12.5-48.8-54.2-23.4l-389.5 354.5z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 265,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3c99d4",
                    d: "m697.1 976.2c17 17.4 37.6 11.7 37.6 11.7l228.1-112.4c29.2-19.9 25.1-44.6 25.1-44.6v-671.2c0-29.5-30.2-39.7-30.2-39.7l-197.7-95.3c-43.2-26.7-71.5 4.8-71.5 4.8s36.4-26.2 54.2 23.4v887.5c0 6.1-1.3 12.1-3.9 17.5-5.2 10.5-16.5 20.3-43.6 16.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 266,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 262,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Git = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 122.87",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#F05133",
                d: "M120.56,55.96L66.91,2.32c-3.09-3.09-8.1-3.09-11.19,0L44.58,13.46l14.13,14.13c3.29-1.11,7.05-0.37,9.67,2.25 c2.63,2.63,3.37,6.43,2.23,9.73l13.62,13.62c3.3-1.14,7.1-0.4,9.73,2.23c3.68,3.68,3.68,9.64,0,13.31c-3.68,3.68-9.64,3.68-13.32,0 c-2.77-2.77-3.45-6.83-2.05-10.24l-12.7-12.7l0,33.43c0.9,0.44,1.74,1.04,2.49,1.78c3.68,3.68,3.68,9.64,0,13.32 c-3.68,3.68-9.64,3.68-13.31,0c-3.68-3.68-3.68-9.64,0-13.32c0.91-0.91,1.96-1.59,3.08-2.05V45.21c-1.12-0.46-2.17-1.14-3.08-2.05 c-2.79-2.78-3.46-6.87-2.03-10.29L39.1,18.93L2.32,55.72c-3.09,3.09-3.09,8.1,0,11.19l53.65,53.65c3.09,3.09,8.1,3.09,11.19,0 l53.4-53.39C123.65,64.07,123.65,59.06,120.56,55.96L120.56,55.96L120.56,55.96z M120.56,55.96L120.56,55.96L120.56,55.96 L120.56,55.96z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 275,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 274,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const GitHub = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#ffffff",
                d: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 284,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 283,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const MySQL = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 122.88 83.67",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00758f",
                    d: "M29.54,76.23H24.8q-.24-12-1.38-22.64h0L16.16,76.23H12.55L5.37,53.59h0q-.79,10.19-1,22.64H0Q.42,61.08,2.1,47.82H8l6.84,20.87h0l6.88-20.87h5.62q1.84,15.52,2.18,28.41Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 293,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00758f",
                    d: "M50.11,55.27Q47.22,71,42.47,78.17q-3.69,5.51-8.1,5.5a7.89,7.89,0,0,1-2.89-.7V80.44a14.05,14.05,0,0,0,2,.12,4.74,4.74,0,0,0,3.31-1.14,4.13,4.13,0,0,0,1.51-3.11,20.77,20.77,0,0,0-1.17-4.84l-5.2-16.2h4.65l3.74,12.12q1.26,4.13,1.05,5.76a79.31,79.31,0,0,0,4.28-17.88Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 294,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#f29111",
                    d: "M70.88,68.35a7.56,7.56,0,0,1-2.64,5.94,10.42,10.42,0,0,1-7.09,2.31A14.22,14.22,0,0,1,53.09,74l1.22-2.44a13.76,13.76,0,0,0,6.08,1.68,6.39,6.39,0,0,0,4-1.13,3.9,3.9,0,0,0,1.54-3.16c0-1.68-1.17-3.12-3.33-4.33-2-1.1-6-3.38-6-3.38a6.79,6.79,0,0,1-3.24-6,7.09,7.09,0,0,1,2.42-5.58,9.06,9.06,0,0,1,6.23-2.13,12.87,12.87,0,0,1,7.17,2.11L68.15,52a13.74,13.74,0,0,0-5.45-1.18,4.87,4.87,0,0,0-3.36,1,3.55,3.55,0,0,0-1.27,2.7c0,1.68,1.2,3.14,3.41,4.37,2,1.09,6.08,3.42,6.08,3.42,2.22,1.57,3.32,3.25,3.32,6Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 295,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#f29111",
                    d: "M79.35,70.54c-1.14-1.85-1.72-4.82-1.72-8.91q0-10.74,6.51-10.73a5.45,5.45,0,0,1,5,2.56q1.73,2.77,1.72,8.84,0,10.82-6.5,10.81a5.47,5.47,0,0,1-5-2.56Zm16.87,6.37L91,74.34a9.72,9.72,0,0,0,1.3-1.27q3.32-3.91,3.32-11.57,0-14.1-11-14.1A10.44,10.44,0,0,0,76.16,51q-3.31,3.92-3.31,11.53t2.94,11c1.78,2.1,4.48,3.16,8.09,3.16a13.16,13.16,0,0,0,3.71-.5l6.78,3.95,1.85-3.19Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 296,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                    fill: "#f29111",
                    points: "113.22 76.23 99.75 76.23 99.75 47.82 104.28 47.82 104.28 72.73 113.22 72.73 113.22 76.23 113.22 76.23"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 297,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#f29111",
                    d: "M116.45,76.22h.75V73.33h1v-.59h-2.76v.59h1v2.89Zm5.72,0h.71V72.74h-1.07l-.87,2.38L120,72.74h-1v3.48h.67V73.58h0l1,2.64h.51l1-2.64v2.64Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 298,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00758f",
                    d: "M118.91,38.31a15.86,15.86,0,0,0-6.64,1c-.51.21-1.33.21-1.4.86.27.27.3.72.55,1.1a7.87,7.87,0,0,0,1.77,2.09c.72.55,1.44,1.1,2.2,1.58,1.33.82,2.84,1.3,4.13,2.13.76.48,1.51,1.09,2.27,1.61.37.27.61.72,1.09.89v-.1c-.24-.31-.31-.76-.55-1.1l-1-1a16.49,16.49,0,0,0-3.56-3.47c-1.1-.76-3.5-1.79-3.94-3l-.07-.07a13.51,13.51,0,0,0,2.36-.56c1.17-.3,2.23-.23,3.42-.54.55-.14,1.1-.31,1.65-.48v-.31c-.62-.62-1.06-1.44-1.71-2a46.9,46.9,0,0,0-5.65-4.22c-1.06-.68-2.43-1.13-3.56-1.71-.41-.21-1.09-.31-1.33-.66a13.87,13.87,0,0,1-1.41-2.64c-1-1.88-2-4-2.8-6A37.42,37.42,0,0,0,103,17.72,34.56,34.56,0,0,0,89.71,4.88a16.08,16.08,0,0,0-4.38-1.4c-.85,0-1.71-.11-2.56-.14a13.4,13.4,0,0,1-1.58-1.2c-2-1.24-7-3.91-8.42-.38C71.85,4,74.14,6.19,74.93,7.32a16.35,16.35,0,0,1,1.74,2.57c.24.59.31,1.21.55,1.82A41.7,41.7,0,0,0,79,16.31a16.86,16.86,0,0,0,1.27,2.13c.27.38.75.55.85,1.17a9.9,9.9,0,0,0-.78,2.57c-1.24,3.88-.76,8.68,1,11.53.54.86,1.85,2.75,3.59,2,1.54-.61,1.2-2.57,1.65-4.28.1-.42,0-.69.23-1v.06c.48,1,1,1.89,1.41,2.85A19.65,19.65,0,0,0,92.66,38c.82.62,1.47,1.68,2.5,2.06V40h-.07a4,4,0,0,0-.79-.69,16.31,16.31,0,0,1-1.78-2.06A43.24,43.24,0,0,1,88.69,31c-.55-1.07-1-2.24-1.47-3.3-.21-.41-.21-1-.55-1.23A12,12,0,0,0,85,28.77a19,19,0,0,0-1,5.18c-.14,0-.07,0-.14.07-1.09-.28-1.47-1.41-1.88-2.37a14.85,14.85,0,0,1-.31-9.16c.24-.72,1.27-3,.85-3.67-.2-.66-.89-1-1.26-1.55a12.77,12.77,0,0,1-1.23-2.19c-.82-1.93-1.24-4.05-2.12-6a19.24,19.24,0,0,0-1.72-2.64,16.78,16.78,0,0,1-1.88-2.67c-.17-.38-.41-1-.14-1.41a.55.55,0,0,1,.48-.45c.45-.38,1.71.1,2.16.31A17.11,17.11,0,0,1,80.27,4c.48.34,1,1,1.6,1.16h.72c1.1.24,2.33.07,3.36.38a21.63,21.63,0,0,1,4.93,2.37,30.37,30.37,0,0,1,10.67,11.74c.42.78.59,1.51,1,2.33.72,1.68,1.61,3.4,2.33,5a22.85,22.85,0,0,0,2.43,4.6c.52.72,2.57,1.1,3.49,1.48a23.92,23.92,0,0,1,2.37,1c1.16.72,2.32,1.54,3.42,2.33.54.42,2.26,1.27,2.36,2Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 299,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00758f",
                    d: "M84,8.48a5.2,5.2,0,0,0-1.41.18v.07h.07a12.56,12.56,0,0,0,1.1,1.4c.27.55.51,1.1.78,1.65l.07-.07A1.93,1.93,0,0,0,85.33,10c-.2-.24-.24-.48-.41-.72s-.65-.51-.92-.79Zm0,0Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 300,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 292,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const GraphQL = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 400 400",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E10098",
                    d: "M57.468 302.66L193.744 383.23 193.744 428.85 0 316.076 0 27.7748 193.744 109.388 193.744 153.073 57.468 121.603 57.468 302.66Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 310,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E10098",
                    d: "M342.537 302.663L206.255 383.235V428.857L400 316.081V27.7809L206.255 109.392V153.078L342.537 121.621L342.537 302.663Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 311,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E10098",
                    d: "M206.348 174.31V93.3635L366.635 160.367L206.348 227.272V174.31ZM33.3652 93.3635L193.639 160.367L193.639 227.796L33.3652 160.367V93.3635Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 312,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#E10098",
                    d: "M206.348 282.276L346.628 218.328L206.348 292.334V433.211L33.3652 300.735L206.348 282.276ZM342.537 302.663L206.261 383.237V428.857L400.005 316.081L342.537 302.663Z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 313,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 309,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const CSharp = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 -1.428 255.582 290.108",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#a179dc",
                    d: "m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76-2.052-3.603-5.125-6.622-9.247-9.009-34.025-19.619-68.083-39.178-102.097-58.817-9.17-5.294-18.061-5.1-27.163.27-13.543 7.986-81.348 46.833-101.553 58.536-8.321 4.818-12.37 12.19-12.372 21.771-.013 39.455 0 78.91-.013 118.365 0 4.724.991 8.91 2.988 12.517 2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252 1.994-3.608 2.987-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 322,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#280068",
                    d: "m128.182 143.241-125.194 72.084c2.053 3.711 5.169 6.813 9.386 9.254 20.206 11.703 88.02 50.547 101.56 58.536 9.106 5.373 17.997 5.565 27.17.27 34.015-19.64 68.075-39.199 102.105-58.818 4.217-2.44 7.333-5.544 9.386-9.252z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 323,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#390091",
                    d: "m255.569 84.452c-.002-4.83-1.035-9.098-3.124-12.76l-124.263 71.55 124.413 72.073c1.994-3.608 2.985-7.793 2.987-12.518 0 0 0-78.889-.013-118.345"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 324,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "m201.892 116.294v13.474h13.474v-13.474h6.737v13.474h13.474v6.737h-13.474v13.473h13.474v6.737h-13.474v13.474h-6.737v-13.474h-13.474v13.474h-6.737v-13.474h-13.473v-6.737h13.473v-13.473h-13.473v-6.737h13.473v-13.474zm13.474 20.21h-13.474v13.474h13.474z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 325,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "m128.457 48.626c35.144 0 65.827 19.086 82.262 47.456l-.16-.273-41.35 23.808c-8.146-13.793-23.08-23.102-40.213-23.294l-.54-.003c-26.125 0-47.305 21.18-47.305 47.305a47.08 47.08 0 0 0 6.239 23.47c8.154 14.235 23.483 23.836 41.067 23.836 17.693 0 33.109-9.723 41.221-24.11l-.197.345 41.287 23.918c-16.255 28.13-46.518 47.157-81.253 47.536l-1.058.006c-35.255 0-66.025-19.204-82.419-47.724-8.003-13.923-12.582-30.064-12.582-47.277 0-52.466 42.532-95 95-95z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 326,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 321,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const DotNet = ({ width = 60, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-0.23294661979148623 0 125.23294661979149 79.04777140278348",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#621ee5",
                d: "M6.02 40.25c-.32-.34-.71-.61-1.14-.8s-.89-.28-1.36-.28c-.47-.01-.93.09-1.36.27-.43.19-.82.46-1.14.8-.33.33-.59.72-.76 1.15-.17.44-.26.9-.26 1.36-.01.47.08.93.26 1.36s.44.82.77 1.15a3.339 3.339 0 0 0 2.5 1.05 3.456 3.456 0 0 0 2.5-1.05c.34-.32.6-.71.78-1.14s.27-.89.27-1.36-.09-.93-.27-1.36c-.19-.44-.45-.83-.79-1.15zM47.87 32.13c-.05 2.24.06 4.49.32 6.72h-.12c-.28-.55-.9-1.57-1.85-3.06L23.42 0H16.5v45.69h5.32V12.66c.06-2.09-.03-4.18-.25-6.27h.2c.38 1 .87 1.96 1.45 2.86l23.42 36.44h6.55V0h-5.32zM89.26 40.67h-18.8V24.84h16.45v-4.82H70.46V4.84h17.65V0h-23.1v45.69h24.22zM93.33 0v4.84h13.1v40.85h5.32V4.84H125V0zM41.19 57.05a10.04 10.04 0 0 0-3.52 2.37c-1.02 1.09-1.82 2.37-2.34 3.78s-.75 2.9-.69 4.39c-.1 2.76.86 5.46 2.7 7.52.92.97 2.04 1.72 3.28 2.22s2.57.72 3.9.66c2 .07 3.99-.35 5.8-1.23l.02-2.33c-1.66.97-3.55 1.45-5.47 1.4-1.03.04-2.06-.14-3.01-.53s-1.81-.99-2.51-1.75a8.72 8.72 0 0 1-2.1-6.14c-.12-2.37.69-4.69 2.25-6.47.74-.82 1.65-1.46 2.66-1.9a7.68 7.68 0 0 1 3.21-.61c1.75-.03 3.47.4 5 1.25v-2.51a12.23 12.23 0 0 0-5-.88c-1.43-.02-2.86.23-4.18.76zM66.12 64.21a6.719 6.719 0 0 0-5.22-2.08c-1.03-.05-2.05.12-3.01.49s-1.83.93-2.57 1.64c-.72.8-1.27 1.73-1.63 2.75s-.51 2.09-.44 3.17c-.1 2.05.61 4.06 1.97 5.59.68.73 1.5 1.31 2.42 1.7.92.38 1.91.57 2.9.53 1.01.03 2.02-.16 2.96-.55s1.78-.98 2.47-1.73a8.06 8.06 0 0 0 2.02-5.76c.12-2.1-.55-4.15-1.87-5.75zm-1.83 10.27a4.394 4.394 0 0 1-3.57 1.51c-.69.03-1.37-.1-2-.36-.63-.27-1.19-.67-1.65-1.19a6.126 6.126 0 0 1-1.35-4.21c-.09-1.57.39-3.12 1.35-4.36.45-.52 1.01-.93 1.64-1.21.63-.27 1.32-.4 2-.37.68-.04 1.35.09 1.97.36s1.17.68 1.61 1.2a6.668 6.668 0 0 1 1.25 4.34c.1 1.52-.34 3.05-1.25 4.29zM75.88 63.23c-.75.67-1.3 1.54-1.57 2.51V62.6h-2.5v15.04h2.5v-7.67c-.08-1.39.28-2.78 1.02-3.96.27-.43.63-.79 1.07-1.04s.93-.4 1.43-.41c.64-.05 1.28.12 1.82.48v-2.48c-.46-.15-.94-.22-1.42-.2-.86-.01-1.69.3-2.35.87zM94.28 69.44c.12-1.91-.45-3.79-1.6-5.31-.57-.64-1.27-1.15-2.06-1.48s-1.64-.48-2.49-.43c-.94-.03-1.88.16-2.75.54-.86.38-1.63.95-2.25 1.67a8.217 8.217 0 0 0-1.97 5.71c-.13 2.08.52 4.14 1.82 5.76.63.69 1.41 1.23 2.27 1.59s1.8.51 2.73.47c1.85.09 3.68-.41 5.22-1.43v-2.26a7.506 7.506 0 0 1-4.65 1.68c-.65.04-1.31-.06-1.92-.3s-1.17-.59-1.63-1.06a5.58 5.58 0 0 1-1.27-3.86H94.3zm-10.57-.7c.13-1.19.65-2.31 1.47-3.18a3.86 3.86 0 0 1 2.88-1.23c.52-.03 1.03.06 1.51.26s.9.5 1.24.89c.7.93 1.05 2.07 1 3.23z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 335,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 334,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const MaterialUI = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 600 476.30000000000007",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00b0ff",
                    d: "M0 259.8V0l225 129.9v86.6L75 129.9v173.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 344,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0081cb",
                    d: "M225 129.9L450 0v259.8l-150 86.6-75-43.3 150-86.6v-86.6l-150 86.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 345,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#00b0ff",
                    d: "M225 303.1v86.6l150 86.6v-86.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 346,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0081cb",
                    d: "M375 476.3l225-129.9V173.2l-75 43.3v86.6l-150 86.6zm150-346.4V43.3L600 0v86.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 347,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 343,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const FireBase = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 1781 2466.8",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFA000",
                    d: "M1169.4,891l-246.7,229.7l-229-462.1L812,392.9c29.9-53,78.8-53.7,108.7,0L1169.4,891z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 357,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#F57F17",
                    d: "M922.8,1120.6L0,1978.9L693.8,658.6L922.8,1120.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 358,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFCA28",
                    d: "M1439.9,539.7c44.2-42.1,89.7-27.9,101.2,31.9L1781,1967.3L985.3,2445c-27.9,15.6-101.9,21.7-101.9,21.7 s-67.3-8.2-93.1-22.4L0,1978.9L1439.9,539.7z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 359,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFA000",
                    d: "M693.8,658.6L0,1978.9L309.2,49.1c11.6-59.8,45.5-65.9,76.1-12.9L693.8,658.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 360,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 355,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Redis = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 220",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#912626",
                    d: "M245.97 168.943c-13.662 7.121-84.434 36.22-99.501 44.075-15.067 7.856-23.437 7.78-35.34 2.09-11.902-5.69-87.216-36.112-100.783-42.597C3.566 169.271 0 166.535 0 163.951v-25.876s98.05-21.345 113.879-27.024c15.828-5.679 21.32-5.884 34.79-.95 13.472 4.936 94.018 19.468 107.331 24.344l-.006 25.51c.002 2.558-3.07 5.364-10.024 8.988"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 369,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#C6302B",
                    d: "M245.965 143.22c-13.661 7.118-84.431 36.218-99.498 44.072-15.066 7.857-23.436 7.78-35.338 2.09-11.903-5.686-87.214-36.113-100.78-42.594-13.566-6.485-13.85-10.948-.524-16.166 13.326-5.22 88.224-34.605 104.055-40.284 15.828-5.677 21.319-5.884 34.789-.948 13.471 4.934 83.819 32.935 97.13 37.81 13.316 4.881 13.827 8.9.166 16.02"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 370,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#912626",
                    d: "M245.97 127.074c-13.662 7.122-84.434 36.22-99.501 44.078-15.067 7.853-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.112-100.783-42.597C3.566 127.402 0 124.67 0 122.085V96.206s98.05-21.344 113.879-27.023c15.828-5.679 21.32-5.885 34.79-.95C162.142 73.168 242.688 87.697 256 92.574l-.006 25.513c.002 2.557-3.07 5.363-10.024 8.987"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 371,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#C6302B",
                    d: "M245.965 101.351c-13.661 7.12-84.431 36.218-99.498 44.075-15.066 7.854-23.436 7.777-35.338 2.087-11.903-5.686-87.214-36.112-100.78-42.594-13.566-6.483-13.85-10.947-.524-16.167C23.151 83.535 98.05 54.148 113.88 48.47c15.828-5.678 21.319-5.884 34.789-.949 13.471 4.934 83.819 32.933 97.13 37.81 13.316 4.88 13.827 8.9.166 16.02"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 372,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#912626",
                    d: "M245.97 83.653c-13.662 7.12-84.434 36.22-99.501 44.078-15.067 7.854-23.437 7.777-35.34 2.087-11.903-5.687-87.216-36.113-100.783-42.595C3.566 83.98 0 81.247 0 78.665v-25.88s98.05-21.343 113.879-27.021c15.828-5.68 21.32-5.884 34.79-.95C162.142 29.749 242.688 44.278 256 49.155l-.006 25.512c.002 2.555-3.07 5.361-10.024 8.986"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 373,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#C6302B",
                    d: "M245.965 57.93c-13.661 7.12-84.431 36.22-99.498 44.074-15.066 7.854-23.436 7.777-35.338 2.09C99.227 98.404 23.915 67.98 10.35 61.497-3.217 55.015-3.5 50.55 9.825 45.331 23.151 40.113 98.05 10.73 113.88 5.05c15.828-5.679 21.319-5.883 34.789-.948 13.471 4.935 83.819 32.934 97.13 37.811 13.316 4.876 13.827 8.897.166 16.017"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 374,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M159.283 32.757l-22.01 2.285-4.927 11.856-7.958-13.23-25.415-2.284 18.964-6.839-5.69-10.498 17.755 6.944 16.738-5.48-4.524 10.855 17.067 6.391M131.032 90.275L89.955 73.238l58.86-9.035-17.783 26.072M74.082 39.347c17.375 0 31.46 5.46 31.46 12.194 0 6.736-14.085 12.195-31.46 12.195s-31.46-5.46-31.46-12.195c0-6.734 14.085-12.194 31.46-12.194"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 375,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#621B1C",
                    d: "M185.295 35.998l34.836 13.766-34.806 13.753-.03-27.52"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 376,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#9A2928",
                    d: "M146.755 51.243l38.54-15.245.03 27.519-3.779 1.478-34.791-13.752"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 377,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 368,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Redux = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 244",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#764ABC",
                d: "M177.381 169.733c9.447-.978 16.614-9.122 16.288-18.896-.325-9.773-8.47-17.592-18.243-17.592h-.651c-10.1.326-17.918 8.796-17.592 18.895.326 4.887 2.28 9.122 5.212 12.054-11.076 21.828-28.016 37.791-53.426 51.148-17.266 9.122-35.183 12.38-53.1 10.1-14.66-1.955-26.062-8.47-33.23-19.222-10.424-15.963-11.401-33.23-2.605-50.496 6.19-12.38 15.962-21.502 22.152-26.063-1.303-4.235-3.258-11.402-4.235-16.614-47.237 34.207-42.35 80.468-28.016 102.295 10.75 16.29 32.577 26.389 56.684 26.389 6.515 0 13.03-.652 19.546-2.28 41.699-8.145 73.299-32.905 91.216-69.718zm57.336-40.397c-24.759-28.995-61.245-44.958-102.944-44.958h-5.212c-2.932-5.864-9.122-9.774-15.963-9.774h-.652C99.848 74.93 92.03 83.4 92.355 93.5c.326 9.773 8.47 17.592 18.243 17.592h.651c7.167-.326 13.357-4.887 15.963-11.077h5.864c24.759 0 48.214 7.167 69.39 21.176 16.288 10.751 28.016 24.76 34.531 41.7 5.538 13.683 5.212 27.04-.652 38.443-9.121 17.266-24.432 26.714-44.63 26.714-13.031 0-25.41-3.91-31.926-6.842-3.583 3.258-10.099 8.47-14.66 11.729 14.009 6.515 28.343 10.099 42.025 10.099 31.274 0 54.404-17.267 63.2-34.533 9.447-18.896 8.795-51.474-15.637-79.165zM69.225 175.27c.326 9.774 8.47 17.592 18.243 17.592h.652c10.099-.325 17.917-8.796 17.591-18.895-.325-9.774-8.47-17.592-18.243-17.592h-.651c-.652 0-1.63 0-2.28.325-13.357-22.153-18.895-46.26-16.94-72.323 1.302-19.547 7.818-36.488 19.22-50.497 9.447-12.054 27.69-17.918 40.07-18.243 34.531-.652 49.19 42.351 50.168 59.618 4.235.977 11.402 3.258 16.289 4.887C189.434 27.366 156.857 0 125.584 0c-29.32 0-56.359 21.176-67.11 52.451-14.985 41.7-5.212 81.771 13.031 113.372-1.628 2.28-2.606 5.864-2.28 9.448z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 387,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 386,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const SASS = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 384",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#CF649A",
                d: "M440.6 220.6c-17.9.101-33.4 4.4-46.4 10.801-4.8-9.5-9.6-17.801-10.399-24-.9-7.2-2-11.601-.9-20.2C384 178.6 389 166.4 389 165.4c-.101-.9-1.101-5.3-11.4-5.4s-19.2 2-20.2 4.7-3 8.9-4.3 15.3c-1.8 9.4-20.6 42.7-31.3 60.2-3.5-6.8-6.5-12.8-7.101-17.601-.899-7.199-2-11.6-.899-20.199 1.1-8.601 6.1-20.8 6.1-21.8-.1-.9-1.1-5.3-11.399-5.4-10.301-.1-19.2 2-20.2 4.7s-2.1 9.1-4.3 15.3C281.9 201.4 256.9 257 250.4 271.5c-3.3 7.4-6.199 13.3-8.3 17.3-2.1 4-.1.3-.3.7-1.8 3.4-2.8 5.3-2.8 5.3v.101c-1.4 2.5-2.9 4.899-3.601 4.899-.5 0-1.5-6.7.2-15.899 3.7-19.301 12.7-49.4 12.601-50.5 0-.5 1.699-5.801-5.801-8.5-7.3-2.7-9.899 1.8-10.5 1.8-.6 0-1.1 1.6-1.1 1.6s8.1-33.899-15.5-33.899c-14.8 0-35.2 16.1-45.3 30.8-6.4 3.5-20 10.899-34.4 18.8-5.5 3-11.2 6.2-16.6 9.1L117.9 251.9c-28.6-30.5-81.5-52.1-79.3-93.1.8-14.9 6-54.2 101.601-101.8 78.3-39 141-28.3 151.899-4.5 15.5 34-33.5 97.2-114.899 106.3-31 3.5-47.301-8.5-51.4-13-4.3-4.7-4.9-4.9-6.5-4-2.6 1.4-1 5.6 0 8.1 2.4 6.3 12.4 17.5 29.4 23.1 14.899 4.9 51.3 7.6 95.3-9.4 49.3-19.1 87.8-72.1 76.5-116.4-11.5-45.1-86.3-59.9-157-34.8C121.4 27.4 75.8 50.8 43 81.5 4 117.9-2.2 149.7.4 162.9c9.101 47.1 74 77.8 100 100.5-1.3.699-2.5 1.399-3.6 2-13 6.399-62.5 32.3-74.9 59.699-14 31 2.2 53.301 13 56.301 33.4 9.3 67.6-7.4 86.1-34.9 18.399-27.5 16.2-63.2 7.7-79.5l-.301-.6 10.2-6c6.601-3.9 13.101-7.5 18.8-10.601-3.199 8.7-5.5 19-6.699 34-1.4 17.601 5.8 40.4 15.3 49.4 4.2 3.899 9.2 4 12.3 4 11 0 16-9.101 21.5-20 6.8-13.3 12.8-28.7 12.8-28.7s-7.5 41.7 13 41.7c7.5 0 15-9.7 18.4-14.7v.1s.2-.3.6-1a36.13 36.13 0 0 0 1.2-1.899v-.2c3-5.2 9.7-17.1 19.7-36.8 12.899-25.4 25.3-57.2 25.3-57.2s1.2 7.8 4.9 20.6c2.199 7.601 6.999 15.9 10.699 24-3 4.2-4.8 6.601-4.8 6.601l.1.1c-2.399 3.2-5.1 6.601-7.899 10-10.2 12.2-22.4 26.101-24 30.101-1.9 4.699-1.5 8.199 2.2 11 2.7 2 7.5 2.399 12.6 2 9.2-.601 15.6-2.9 18.8-4.301 5-1.8 10.7-4.5 16.2-8.5 10-7.399 16.1-17.899 15.5-31.899-.3-7.7-2.8-15.3-5.9-22.5.9-1.3 1.801-2.601 2.7-4 15.8-23.101 28-48.5 28-48.5s1.2 7.8 4.9 20.6c1.899 6.5 5.7 13.601 9.1 20.601-14.8 12.1-24.1 26.1-27.3 35.3-5.9 17-1.3 24.7 7.4 26.5 3.899.8 9.5-1 13.699-2.8 5.2-1.7 11.5-4.601 17.301-8.9 10-7.4 19.6-17.7 19.1-31.6-.3-6.4-2-12.7-4.3-18.7 12.6-5.2 28.899-8.2 49.6-5.7 44.5 5.2 53.3 33 51.601 44.6-1.7 11.601-11 18-14.101 20-3.1 1.9-4.1 2.601-3.8 4 .4 2.101 1.8 2 4.5 1.601 3.7-.601 23.4-9.5 24.2-30.899 1.2-27.504-24.9-57.504-71.2-57.205zM97.4 336.3c-14.7 16.1-35.4 22.2-44.2 17-9.5-5.5-5.801-29.2 12.3-46.3 11-10.4 25.3-20 34.7-25.9 2.1-1.3 5.3-3.199 9.1-5.5.6-.399 1-.6 1-.6.7-.4 1.5-.9 2.3-1.4 6.7 24.4.3 45.8-15.2 62.7zm107.5-73.1c-5.1 12.5-15.9 44.6-22.4 42.8-5.601-1.5-9-25.8-1.101-49.8 4-12.101 12.5-26.5 17.5-32.101 8.101-9 16.9-12 19.101-8.3 2.6 4.801-9.9 39.601-13.1 47.401zm88.7 42.4c-2.2 1.101-4.2 1.9-5.1 1.301-.7-.4.899-1.9.899-1.9s11.1-11.9 15.5-17.4c2.5-3.199 5.5-6.899 8.7-11.1v1.2C313.6 292.1 299.8 301.7 293.6 305.6zm68.399-15.6c-1.6-1.2-1.399-4.9 4-16.5 2.101-4.6 6.9-12.3 15.2-19.6 1 3 1.601 5.899 1.5 8.6-.099 18-12.899 24.7-20.7 27.5z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 396,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 395,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Bash = ({ width = 100, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 375.72 158.2",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M128.79 32.3L78.85 2.65a18.81 18.81 0 0 0-19.27 0L9.63 32.3A19.92 19.92 0 0 0 0 49.46v59.29a19.92 19.92 0 0 0 9.63 17.15l49.94 29.64a18.82 18.82 0 0 0 19.27 0l49.94-29.64a19.92 19.92 0 0 0 9.64-17.16V49.46a19.92 19.92 0 0 0-9.63-17.16z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 405,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#2f3a3e",
                    d: "M128.79 32.3L78.85 2.65a18.81 18.81 0 0 0-19.27 0L9.63 32.3A19.92 19.92 0 0 0 0 49.46v59.29a19.92 19.92 0 0 0 9.63 17.15l49.94 29.64a18.82 18.82 0 0 0 19.27 0l49.94-29.64a19.92 19.92 0 0 0 9.64-17.16V49.46a19.92 19.92 0 0 0-9.63-17.16zM61.32 152.51l-49.94-29.64a16.44 16.44 0 0 1-7.92-14.12V49.46a16.43 16.43 0 0 1 7.92-14.12L61.32 5.69a15.4 15.4 0 0 1 15.78 0L127 35.34a16.33 16.33 0 0 1 7.67 11.42c-1.66-3.53-5.39-4.5-9.74-2L77.72 74c-5.89 3.43-10.23 7.3-10.24 14.4v58.22c0 4.25 1.71 7 4.35 7.81a15.3 15.3 0 0 1-2.62.25 15.47 15.47 0 0 1-7.89-2.17z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 406,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3ab14a",
                    d: "M115.7 114.48l-12.44 7.44a.91.91 0 0 0-.57.81V126c0 .4.27.56.6.37l12.63-7.68a1 1 0 0 0 .38-1v-2.87c-.01-.37-.3-.53-.6-.34z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 407,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M89.22 87.09c.4-.2.73 0 .74.57L90 92a8 8 0 0 1 4.78-.58c.31.08.44.5.32 1l-.95 3.81a1.64 1.64 0 0 1-.43.76 1 1 0 0 1-.25.18.57.57 0 0 1-.37.06 6.34 6.34 0 0 0-4.61.74 5.79 5.79 0 0 0-3.41 5.13c0 2 1 2.55 4.49 2.61 4.61.08 6.61 2.09 6.66 6.74a16.53 16.53 0 0 1-6.12 12.47l.08 4.26a1.56 1.56 0 0 1-.73 1.3l-2.52 1.45c-.4.2-.73 0-.74-.56v-4.19c-2.16.9-4.35 1.11-5.75.55-.26-.1-.38-.49-.27-.94l.91-3.85a1.61 1.61 0 0 1 .45-.8 1 1 0 0 1 .24-.17.5.5 0 0 1 .41 0 7 7 0 0 0 5.29-.67 6.92 6.92 0 0 0 3.91-6c0-2.16-1.19-3.06-4-3.08-3.63 0-7-.7-7.07-6a15.5 15.5 0 0 1 5.86-11.86L86 90a1.55 1.55 0 0 1 .73-1.32z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 408,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3ab14a",
                    d: "M203 81.4a18.21 18.21 0 0 0-4.46-3.87l-.64-.38a17.73 17.73 0 0 0 3.62-3.2 15.08 15.08 0 0 0 3.64-9.77 17.16 17.16 0 0 0-2.11-8.86 18.17 18.17 0 0 0-5.71-6.08 25.05 25.05 0 0 0-7.87-3.41 38 38 0 0 0-8.77-1.11h-20a2.47 2.47 0 0 0-2.53 2.4v63.92a2.47 2.47 0 0 0 2.53 2.4h21.54a32.31 32.31 0 0 0 9.08-1.39 25.71 25.71 0 0 0 7.92-3.93 19.78 19.78 0 0 0 5.63-6.52 18.36 18.36 0 0 0 2.08-9 17.7 17.7 0 0 0-1-6.1 17.32 17.32 0 0 0-2.95-5.1zm-12.25-14.06a7.85 7.85 0 0 1-2.23 2.44 11 11 0 0 1-3.33 1.6 15 15 0 0 1-4 .62h-9.38V56.47h9.11a20 20 0 0 1 4.3.54 10.53 10.53 0 0 1 3.38 1.42 6.62 6.62 0 0 1 2.13 2.27 6.81 6.81 0 0 1 .78 3.41 6.2 6.2 0 0 1-.76 3.23zm-18.91 16.22h11a15.08 15.08 0 0 1 4.32.74 10 10 0 0 1 3.28 1.8 7.94 7.94 0 0 1 2.11 2.75 8.63 8.63 0 0 1 .73 3.85 8.07 8.07 0 0 1-.83 3.73 8.21 8.21 0 0 1-2.27 2.76 11.71 11.71 0 0 1-3.49 1.85 14 14 0 0 1-4.23.72h-10.62zM244.53 46.4a2.51 2.51 0 0 0-2.41-1.67H235a2.52 2.52 0 0 0-2.4 1.66l-21.7 63.92a2.3 2.3 0 0 0 .36 2.15 2.57 2.57 0 0 0 2 1h8.54a2.52 2.52 0 0 0 2.41-1.69l4.85-14.86h18.7l4.76 14.85a2.51 2.51 0 0 0 2.42 1.7h8.49a2.57 2.57 0 0 0 2-1 2.31 2.31 0 0 0 .37-2.15zM244 85h-11l5.56-17.14zM317.19 83.87a21.63 21.63 0 0 0-4-3.94 33.83 33.83 0 0 0-4.74-3 46.11 46.11 0 0 0-5.19-2.31c-1.72-.64-3.47-1.23-5.21-1.75-1.48-.43-3.06-.94-4.71-1.5a22.29 22.29 0 0 1-4.26-2 10.1 10.1 0 0 1-2.92-2.59 5.45 5.45 0 0 1-1-3.28 6.67 6.67 0 0 1 .79-3.35 7.54 7.54 0 0 1 2.21-2.47 10.59 10.59 0 0 1 3.35-1.58 14.62 14.62 0 0 1 8.61.18 10 10 0 0 1 3.33 2 10.12 10.12 0 0 1 2.27 3.14 14.88 14.88 0 0 1 1.23 4.35 2.49 2.49 0 0 0 2.51 2.1h8.77a2.59 2.59 0 0 0 1.8-.72 2.34 2.34 0 0 0 .72-1.73 19.83 19.83 0 0 0-2.26-9 21.76 21.76 0 0 0-5.66-6.81 26.37 26.37 0 0 0-8-4.31 29.68 29.68 0 0 0-17.95-.25 25.72 25.72 0 0 0-7.8 3.78 20.5 20.5 0 0 0-5.68 6.22 16.59 16.59 0 0 0-2.24 8.55 15.56 15.56 0 0 0 2.27 8.41A21.9 21.9 0 0 0 279 78a34.51 34.51 0 0 0 7.23 4.08c2.52 1.06 5 2 7.47 2.72q2.4.73 5 1.64a21.76 21.76 0 0 1 4.35 2.06 9.74 9.74 0 0 1 2.95 2.76 6.16 6.16 0 0 1 1 3.63 6.06 6.06 0 0 1-.84 3.31 7.89 7.89 0 0 1-2.37 2.42 11.11 11.11 0 0 1-3.51 1.49 18.16 18.16 0 0 1-9.31-.18 11.69 11.69 0 0 1-3.85-2 10.69 10.69 0 0 1-2.71-3.19 12.67 12.67 0 0 1-1.43-4.47 2.49 2.49 0 0 0-2.51-2.09h-8.73a2.59 2.59 0 0 0-1.81.73 2.34 2.34 0 0 0-.71 1.74 19 19 0 0 0 2.59 9.26 22.72 22.72 0 0 0 6.18 6.78 28.34 28.34 0 0 0 8.45 4.18 32.55 32.55 0 0 0 9.55 1.43 33.72 33.72 0 0 0 8.72-1.16 26.7 26.7 0 0 0 8-3.55 20.11 20.11 0 0 0 5.91-6.07 16.18 16.18 0 0 0 2.36-8.74 17.51 17.51 0 0 0-1-6 18.1 18.1 0 0 0-2.79-4.91zM373.2 44.73h-8.08a2.47 2.47 0 0 0-2.53 2.4v25.08h-22.51V47.13a2.47 2.47 0 0 0-2.53-2.4h-8a2.47 2.47 0 0 0-2.53 2.4v63.92a2.47 2.47 0 0 0 2.53 2.4h8a2.47 2.47 0 0 0 2.53-2.4V83.91h22.51v27.14a2.47 2.47 0 0 0 2.53 2.4h8.08a2.47 2.47 0 0 0 2.53-2.4V47.13a2.47 2.47 0 0 0-2.53-2.4zM165.93 124.53h-3.06v8.18h-1.63v-8.18h-3v-1.29h7.73zM175.34 132.71h-1.6v-4.23h-3.39v4.23h-1.59v-9.47h1.59v4h3.39v-4h1.6zM184.74 128.47h-4.1v3h4.79v1.27H179v-9.47h6.39v1.29h-4.75v2.67h4.1zM198.93 132.71v-9.47h3.18a6 6 0 0 1 1.34.16 3.35 3.35 0 0 1 1.09.46 2.24 2.24 0 0 1 .74.8 2.29 2.29 0 0 1 .26 1.15 1.87 1.87 0 0 1-.41 1.2 2.6 2.6 0 0 1-1.09.77 2.66 2.66 0 0 1 .74.32 2.07 2.07 0 0 1 .54.49 2.19 2.19 0 0 1 .34.63 2.34 2.34 0 0 1 .12.74 2.59 2.59 0 0 1-.26 1.19 2.43 2.43 0 0 1-.72.86 3.33 3.33 0 0 1-1.09.52 5.09 5.09 0 0 1-1.36.19zm1.65-5.48h1.57a2.71 2.71 0 0 0 .69-.09 1.64 1.64 0 0 0 .55-.26 1.27 1.27 0 0 0 .37-.42 1.19 1.19 0 0 0 .14-.57 1.34 1.34 0 0 0-.13-.61 1.13 1.13 0 0 0-.37-.42 1.65 1.65 0 0 0-.56-.24 3.37 3.37 0 0 0-.7-.08h-1.56zm0 1.19v3h1.79a2.38 2.38 0 0 0 .71-.11 1.74 1.74 0 0 0 .55-.3 1.35 1.35 0 0 0 .37-.46 1.37 1.37 0 0 0 .13-.61 1.66 1.66 0 0 0-.12-.64 1.29 1.29 0 0 0-.33-.48 1.53 1.53 0 0 0-.53-.3 2.31 2.31 0 0 0-.7-.11zM215.7 128.59a5.7 5.7 0 0 1-.23 1.61 4.16 4.16 0 0 1-.67 1.36 3.3 3.3 0 0 1-1.12.94 3.39 3.39 0 0 1-1.58.35 3.19 3.19 0 0 1-2.66-1.29 4.18 4.18 0 0 1-.66-1.36 5.73 5.73 0 0 1-.22-1.61v-1.21a5.92 5.92 0 0 1 .1-1.09 5 5 0 0 1 .29-1 4.25 4.25 0 0 1 .49-.87 3.08 3.08 0 0 1 .68-.69 3.18 3.18 0 0 1 .89-.45 3.52 3.52 0 0 1 1.09-.16 3.27 3.27 0 0 1 2.7 1.29 4.1 4.1 0 0 1 .68 1.36 5.73 5.73 0 0 1 .23 1.61zm-1.65-1.22a6.32 6.32 0 0 0-.1-1.06 3.1 3.1 0 0 0-.32-.94 1.93 1.93 0 0 0-.6-.67 1.61 1.61 0 0 0-.93-.26 1.57 1.57 0 0 0-.92.26 1.85 1.85 0 0 0-.58.67 3.09 3.09 0 0 0-.3.94 7.05 7.05 0 0 0-.09 1.06v1.22a6.84 6.84 0 0 0 .1 1.06 3.22 3.22 0 0 0 .3.94 1.87 1.87 0 0 0 .58.68 1.56 1.56 0 0 0 .92.26 1.6 1.6 0 0 0 .93-.26 2 2 0 0 0 .6-.68 3.08 3.08 0 0 0 .32-.94 6.6 6.6 0 0 0 .1-1.06zM225.44 123.25v6.34a3.64 3.64 0 0 1-.25 1.33 3 3 0 0 1-.67 1 2.94 2.94 0 0 1-1 .66 3.81 3.81 0 0 1-1.37.23 3.67 3.67 0 0 1-1.34-.23 2.91 2.91 0 0 1-1.7-1.69 3.66 3.66 0 0 1-.25-1.34v-6.34h1.61v6.34a2.93 2.93 0 0 0 .12.8 1.88 1.88 0 0 0 .31.63 1.42 1.42 0 0 0 .51.41 1.62 1.62 0 0 0 .71.15 1.71 1.71 0 0 0 .73-.15 1.45 1.45 0 0 0 .53-.41 1.82 1.82 0 0 0 .32-.63 3 3 0 0 0 .12-.8v-6.34zM232.32 129h-1.67v3.69H229v-9.47h3.15a5.43 5.43 0 0 1 1.41.19 3.29 3.29 0 0 1 1.12.53 2.41 2.41 0 0 1 .73.89 2.82 2.82 0 0 1 .26 1.25 2.71 2.71 0 0 1-.13.87 2.52 2.52 0 0 1-.37.71 2.67 2.67 0 0 1-.57.56 3.66 3.66 0 0 1-.74.41l2.11 4v.08h-1.75zm-1.67-1.26h1.51a2.46 2.46 0 0 0 .75-.11 1.81 1.81 0 0 0 .59-.32 1.41 1.41 0 0 0 .39-.5 1.61 1.61 0 0 0 .14-.68 1.78 1.78 0 0 0-.13-.7 1.38 1.38 0 0 0-.37-.51 1.64 1.64 0 0 0-.59-.32 2.81 2.81 0 0 0-.78-.11h-1.5zM245.43 132.71h-1.65l-3.24-6.51v6.51h-1.66v-9.47h1.66l3.23 6.5v-6.5h1.66zM254.84 128.47h-4.1v3h4.79v1.27h-6.43v-9.47h6.39v1.29h-4.75v2.67h4.1zM265.18 129.19h-5.48v-1.25h5.48zM273.86 130.52h-3.11l-.68 2.2h-1.7l3.23-9.47h1.4l3.17 9.47h-1.69zm-2.69-1.33h2.28l-1.13-3.71zM285.73 131.53a3.42 3.42 0 0 1-.59.53 3.93 3.93 0 0 1-.77.42 4.85 4.85 0 0 1-.92.27 5.47 5.47 0 0 1-1.06.1 3.62 3.62 0 0 1-1.59-.33 3.38 3.38 0 0 1-1.17-.91 4.05 4.05 0 0 1-.73-1.36 5.61 5.61 0 0 1-.26-1.68v-1.17a5.54 5.54 0 0 1 .25-1.68 4.15 4.15 0 0 1 .71-1.36 3.31 3.31 0 0 1 1.13-.91 3.37 3.37 0 0 1 1.53-.34 4.42 4.42 0 0 1 1.38.2 3 3 0 0 1 1 .58 2.76 2.76 0 0 1 .69.93 3.73 3.73 0 0 1 .32 1.22h-1.61a2.94 2.94 0 0 0-.19-.69 1.59 1.59 0 0 0-.35-.52 1.47 1.47 0 0 0-.53-.33 2.13 2.13 0 0 0-.74-.11 1.59 1.59 0 0 0-.89.24 2 2 0 0 0-.62.66 3.16 3.16 0 0 0-.36 1 5.69 5.69 0 0 0-.12 1.14v1.18a5.52 5.52 0 0 0 .13 1.13 3 3 0 0 0 .38 1 2 2 0 0 0 .66.66 1.88 1.88 0 0 0 1 .25h.48a3 3 0 0 0 .47-.09 2.13 2.13 0 0 0 .41-.17 1 1 0 0 0 .3-.25v-1.89h-1.8v-1.21h3.41zM293.89 130.52h-3.11l-.68 2.2h-1.7l3.23-9.47h1.44l3.17 9.47h-1.69zm-2.69-1.33h2.28l-1.13-3.71zM299.3 123.25h5.92v1.29h-2.15v6.89h2.15v1.29h-5.92v-1.29h2.11v-6.89h-2.11zM315.54 132.71h-1.65l-3.24-6.51v6.51H309v-9.47h1.66l3.23 6.5v-6.5h1.66zM334.29 130.28a1.17 1.17 0 0 0-.15-.59 1.46 1.46 0 0 0-.42-.45 2.89 2.89 0 0 0-.64-.34q-.37-.15-.81-.27a9.52 9.52 0 0 1-1.16-.4 4.54 4.54 0 0 1-1-.59 2.91 2.91 0 0 1-.73-.81 2.06 2.06 0 0 1-.28-1.08 2.17 2.17 0 0 1 .28-1.1 2.61 2.61 0 0 1 .74-.82 3.52 3.52 0 0 1 1.08-.52 4.55 4.55 0 0 1 1.29-.18 4.21 4.21 0 0 1 1.34.21 3.51 3.51 0 0 1 1.09.59 2.84 2.84 0 0 1 .74.91 2.59 2.59 0 0 1 .28 1.17h-1.64a2.17 2.17 0 0 0-.16-.65 1.49 1.49 0 0 0-.36-.51 1.57 1.57 0 0 0-.56-.33 2.26 2.26 0 0 0-.76-.12 2.47 2.47 0 0 0-.68.09 1.62 1.62 0 0 0-.54.27 1.27 1.27 0 0 0-.36.42 1.19 1.19 0 0 0-.13.56 1 1 0 0 0 .18.57 1.65 1.65 0 0 0 .46.43 3.22 3.22 0 0 0 .66.32q.37.13.78.24a8.54 8.54 0 0 1 1.19.43 4.31 4.31 0 0 1 1 .62 2.81 2.81 0 0 1 .68.83 2.27 2.27 0 0 1 .25 1.09 2.17 2.17 0 0 1-.28 1.11 2.5 2.5 0 0 1-.75.81 3.52 3.52 0 0 1-1.09.49 5 5 0 0 1-1.3.17 4.9 4.9 0 0 1-.91-.08 4.28 4.28 0 0 1-.86-.25 3.82 3.82 0 0 1-.77-.42 3.05 3.05 0 0 1-.62-.58 2.6 2.6 0 0 1-.57-1.63h1.65a2 2 0 0 0 .2.75 1.55 1.55 0 0 0 .44.53 1.91 1.91 0 0 0 .64.32 2.88 2.88 0 0 0 .81.11 2.76 2.76 0 0 0 .69-.08 1.76 1.76 0 0 0 .56-.25 1.24 1.24 0 0 0 .38-.41 1.11 1.11 0 0 0 .12-.58zM345.59 132.71H344v-4.23h-3.4v4.23H339v-9.47h1.59v4H344v-4h1.6zM355 128.47h-4.1v3h4.79v1.27h-6.44v-9.47h6.39v1.29h-4.75v2.67H355zM361 131.44h4.75v1.27h-6.39v-9.47H361zM371 131.44h4.75v1.27h-6.39v-9.47H371z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 409,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 404,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const JQuery = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-1.19275382 .5 25.19275382 24.582",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1266a9",
                    d: "m1.406 16.346c.023.052.049.1.077.148.013.028.031.057.047.083.026.052.054.102.081.152l.157.264c.029.049.057.097.09.145.055.094.12.186.177.28.026.039.05.078.079.117.11.171.21.313.317.451.076.103.152.204.234.305.027.038.057.076.085.114l.221.268c.027.031.054.067.083.099.098.118.202.232.306.348 0 .002.003.004.005.007.129.162.268.306.42.434l.004.004c.08.082.16.163.245.243l.101.097c.111.104.222.207.339.307.002 0 .003.002.005.003l.057.05c.102.089.205.177.31.259l.125.105c.085.068.173.132.26.199l.136.104c.093.07.192.138.287.206.035.025.07.05.106.073l.029.023.281.184.12.08c.147.094.293.182.439.27.042.021.084.044.123.068.108.062.22.125.329.182.06.034.122.063.184.094.075.042.153.083.233.125.022.007.04.014.058.024l.004-.004c.033.015.064.031.096.047.12.06.245.117.375.173.024.01.05.02.076.034.144.063.288.123.437.181.034.01.07.027.105.04.135.051.274.103.412.152l.05.018c.153.052.304.102.46.149.036.01.073.023.111.033.159.048.313.105.474.135 10.273 1.863 13.258-6.146 13.258-6.146-2.508 3.25-6.959 4.107-11.174 3.153-.156-.036-.312-.086-.47-.132a11.753 11.753 0 0 1 -.663-.209l.095.029-.062-.024c-.136-.046-.267-.097-.4-.148a1.53 1.53 0 0 0 -.099-.038l-.011-.003c-.147-.059-.29-.119-.432-.182-.031-.01-.057-.024-.088-.036a13.656 13.656 0 0 1 -.5-.23l.138.061a1.483 1.483 0 0 1 -.106-.052c-.094-.044-.188-.094-.28-.141a3.784 3.784 0 0 1 -.207-.106l.02.01c-.113-.06-.226-.125-.34-.186-.034-.024-.073-.044-.112-.066a14.058 14.058 0 0 1 -.502-.306l.063.038a2.042 2.042 0 0 1 -.124-.083l.006.004a6.039 6.039 0 0 1 -.316-.208c-.034-.022-.065-.046-.1-.07a8.47 8.47 0 0 1 -.318-.228l.024.017c-.042-.034-.087-.066-.132-.099-.088-.069-.177-.135-.265-.207l-.118-.094a10.16 10.16 0 0 1 -.37-.309l-.001-.001-.347-.315-.1-.094c-.082-.083-.166-.162-.25-.244l-.097-.1a9.008 9.008 0 0 1 -.303-.315l-.006-.007-.017-.014a17.877 17.877 0 0 1 -.313-.353c-.027-.031-.052-.064-.08-.097l-.227-.275a13.75 13.75 0 0 1 -.3-.391l-.04-.056c-2.338-3.176-3.184-7.559-1.313-11.155l-1.652 2.089c-2.125 3.039-1.862 6.991-.237 10.218.037.079.078.153.118.228z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 418,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#000000",
                    d: "m8.563 11.968-.011-.016-.009-.012z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 419,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1266a9",
                    d: "m9.681 13.28.09.09c.114.11.231.217.35.324l.015.013c.12.106.255.217.394.325l.021.016c.034.023.063.05.096.073.14.108.281.211.428.314l.015.009c.062.045.128.086.198.13.028.018.06.042.09.06.106.068.21.131.317.196.017.007.032.016.048.023.09.055.188.108.282.156.033.02.065.035.099.054.067.033.133.068.197.102l.032.014c.135.066.273.128.408.189.034.013.063.024.092.038.111.048.224.094.335.136.05.017.097.037.144.052.102.038.209.073.31.108l.14.045c.146.045.294.104.449.128 7.933 1.306 9.769-4.771 9.769-4.771-1.653 2.367-4.852 3.495-8.261 2.614a8.215 8.215 0 0 1 -.506-.145l.057.016c-.048-.013-.09-.028-.136-.042-.104-.036-.211-.071-.312-.108l-.144-.054c-.112-.045-.226-.087-.335-.135-.034-.015-.065-.025-.091-.04-.14-.063-.281-.125-.418-.191l-.206-.107-.119-.06c-.092-.048-.177-.098-.265-.149a.558.558 0 0 1 -.065-.036l.003.001c-.106-.066-.216-.13-.318-.197-.034-.019-.065-.042-.097-.062l-.208-.135c-.144-.1-.285-.207-.428-.311-.032-.029-.063-.053-.094-.079-1.499-1.173-2.681-2.776-3.242-4.591-.591-1.887-.461-4.003.56-5.72l-1.255 1.768c-1.541 2.201-1.454 5.143-.254 7.471.219.43.441.793.686 1.139.228.326.48.708.784.97.108.123.224.24.345.359z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 420,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#000000",
                    d: "m2.436 17.992-.004-.006-.007-.009zm4.158-.744.01.007.002.003z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 421,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#1266a9",
                    d: "m13.666 1.427c-.909 1.327-.996 2.975-.37 4.438.665 1.554 2.024 2.774 3.608 3.352.065.025.128.046.195.07l.088.027c.092.029.185.063.28.084 4.381.841 5.567-2.238 5.886-2.691-1.043 1.49-2.792 1.848-4.938 1.329a4.753 4.753 0 0 1 -.55-.17l.033.011a6.196 6.196 0 0 1 -.656-.27l.038.017c-.41-.2-.762-.416-1.089-.664-1.918-1.45-3.104-4.211-1.852-6.46z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 422,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 417,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const PostMan = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "-13.58674873666481 -3.5096047119942106 81.71274873666479 72.05384966725056",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M57.327 12.44a32 32 0 1 0-5.761 44.88c13.98-10.804 16.56-30.895 5.76-44.88z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 431,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M42.793 20.388L29.3 33.988l-3.813-3.92c13.28-13.28 14.613-12.08 17.307-9.68z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 432,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M29.3 34.36a.48.48 0 0 1-.32-.133l-3.84-3.84a.48.48 0 0 1 0-.667c13.093-13.093 14.88-12.48 17.973-9.68a.427.427 0 0 1 .16.347c.02.13-.03.263-.133.347L29.647 34.228a.506.506 0 0 1-.347.133zm-3.147-4.293l3.147 3.147 12.8-12.8a2.88 2.88 0 0 0-3.787-.64c-2.32 1.04-6.053 4.213-12.16 10.293z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 433,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M33.167 37.748l-3.68-3.76L42.98 20.654c3.627 3.547-1.76 9.467-9.813 17.093z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 434,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M33.167 38.228a.56.56 0 0 1-.32-.133l-3.76-3.68a.56.56 0 0 1 0-.427.517.517 0 0 1 0-.347L42.58 20.148a.506.506 0 0 1 .693 0 4.136 4.136 0 0 1 1.333 3.173c0 3.6-4.107 8.133-11.093 14.747a.56.56 0 0 1-.347.16zm-2.987-4.24L33.193 37c5.333-5.04 10.427-10.24 10.453-13.76a3.04 3.04 0 0 0-.693-2.053z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 435,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M25.593 30.148l2.667 2.667a.16.16 0 0 1 0 .24l-5.627 1.2a.533.533 0 0 1-.48-.907l3.28-3.253s.107 0 .16.053z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 436,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M22.5 34.788a1.04 1.04 0 0 1-.88-.507 1.014 1.014 0 0 1 .187-1.2l3.253-3.28a.64.64 0 0 1 .853 0l2.667 2.667c.158.15.22.377.16.587s-.236.377-.453.427l-5.627 1.2zm2.987-4.053l-3.013 3.013 4.987-1.067zm.24-.24z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 437,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M49.967 12.894c-1.93-1.862-4.962-1.94-6.986-.183s-2.37 4.773-.794 6.943 4.547 2.778 6.847 1.4l-3.627-3.627z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 438,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M46.367 22.28a5.65 5.65 0 0 1-5.156-3.508 5.667 5.667 0 0 1 1.2-6.118 5.71 5.71 0 0 1 8 0c.102.086.16.213.16.347a.46.46 0 0 1-.16.347l-4.32 4.08 3.28 3.227a.45.45 0 0 1 .133.4.48.48 0 0 1-.213.347 5.8 5.8 0 0 1-2.933.88zm0-10.347c-1.9.01-3.6 1.153-4.313 2.9s-.325 3.758 1.007 5.1a4.665 4.665 0 0 0 5.173.987l-3.147-3.147a.427.427 0 0 1 0-.667l4.16-4.187a4.785 4.785 0 0 0-2.88-.987z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 439,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M50.047 12.974l-4.56 4.533 3.627 3.627a5.52 5.52 0 0 0 1.013-.747 5.333 5.333 0 0 0-.08-7.413z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 440,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M49.033 21.534a.4.4 0 0 1-.32-.133l-3.627-3.627a.427.427 0 0 1 0-.667l4.533-4.453a.48.48 0 0 1 .8 0 5.6 5.6 0 0 1 0 8 4.88 4.88 0 0 1-1.067.853.43.43 0 0 1-.32.027zM46.1 17.428l3.013 3.013a5.12 5.12 0 0 0 .587-.48 4.72 4.72 0 0 0 1.387-3.333 4.58 4.58 0 0 0-1.147-3.04z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 441,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M43.353 20.948a1.948 1.948 0 0 0-2.667 0L28.607 33l2 2.027 12.773-11.2a1.977 1.977 0 0 0-.027-2.88z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 442,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M30.5 35.508a.48.48 0 0 1-.32-.133l-2.027-2.027a.48.48 0 0 1 0-.667l12.08-12.027a2.454 2.454 0 0 1 4.187 1.813 2.51 2.51 0 0 1-.827 1.76l-12.773 11.2a.455.455 0 0 1-.32.08zM29.087 33l1.333 1.36 12.533-10.907c.31-.27.495-.656.507-1.067s-.15-.813-.453-1.093a1.493 1.493 0 0 0-2.107 0z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 443,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M19.247 46.734a.27.27 0 0 0 0 .32l.533 2.32a.688.688 0 0 1-.332.7.65.65 0 0 1-.762-.077l-3.653-3.52L26.42 35h3.947l2.667 2.667a60.54 60.54 0 0 1-13.787 9.067z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 444,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M19.007 50.654c-.302-.006-.6-.13-.8-.347l-3.493-3.493a.427.427 0 0 1 0-.667L26.18 34.654a.45.45 0 0 1 .24-.133h3.973a.48.48 0 0 1 .32 0l2.667 2.667a.426.426 0 0 1 .133.373.43.43 0 0 1-.16.347l-.213.187a65.33 65.33 0 0 1-13.68 8.773l.507 2.16a1.15 1.15 0 0 1-1.093 1.413zm-3.253-4.187L18.9 49.64a.16.16 0 0 0 .213 0 .16.16 0 0 0 0-.187l-.533-2.32a.744.744 0 0 1 .4-.853 65.56 65.56 0 0 0 13.333-8.587l-2.187-2.187h-3.573zm3.84.48z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 445,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M12.287 49.214l2.667-2.667 4.107 4.107-6.533-.453a.534.534 0 0 1-.24-.986z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 446,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M19.14 51.054l-6.507-.453c-.386-.036-.718-.3-.854-.653s-.053-.772.214-1.054l2.667-2.667a.48.48 0 0 1 .667 0l4.08 4.08a.452.452 0 0 1 0 .533.507.507 0 0 1-.267.213zm-6.507-1.493l5.333.347-2.933-2.747z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 447,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M30.74 35.322l-5.387.827 3.12-3.093z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 448,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M25.353 36.654a.456.456 0 0 1-.427-.267.45.45 0 0 1 0-.533l3.093-3.12a.506.506 0 0 1 .693 0L30.98 35a.45.45 0 0 1 0 .48.47.47 0 0 1-.373.347l-5.333.827zm3.12-2.907L26.74 35.48l2.987-.453z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 449,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M30.74 35.32l-3.76.48a.48.48 0 0 1-.453-.8l1.947-1.947z",
                    fill: "#ffffff"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 450,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M26.873 36.308a.987.987 0 0 1-.853-.507.96.96 0 0 1 .16-1.147l1.947-1.947a.506.506 0 0 1 .693 0l2.267 2.267a.48.48 0 0 1-.293.827l-3.733.48zm0-.987l2.827-.347-1.253-1.253-1.6 1.6zm23.2-19.28a.4.4 0 0 0-.507-.16.37.37 0 0 0-.186.22.377.377 0 0 0 .026.287c.187.393.135.858-.133 1.2a.338.338 0 0 0-.1.253.38.38 0 0 0 .1.253.29.29 0 0 0 .213 0 .35.35 0 0 0 .347-.107 1.84 1.84 0 0 0 .24-1.947z",
                    fill: "#ff6c37"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 451,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 430,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Doker = ({ width = 60, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "20.7 244.9 600.3 154.7",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0091e2",
                    d: "m303 290c-3.2-.1-5.8 2.4-5.9 5.5v28.8c-13.7-11-33.8-8.8-44.8 4.9-4.5 5.7-7 12.7-7 20-.3 17.6 13.7 32.1 31.3 32.4s32.1-13.7 32.4-31.3v-54.4c0-1.6-.6-3.1-1.7-4.2-1.2-1.1-2.7-1.7-4.3-1.7m-7.5 66.9c-2 4.8-5.8 8.6-10.6 10.7-5 2.1-10.6 2.1-15.6 0-4.8-2-8.5-5.9-10.5-10.6-2.1-4.9-2.1-10.5 0-15.5 2-4.8 5.8-8.6 10.5-10.6 5-2.1 10.6-2.1 15.6 0 4.8 2.1 8.6 5.9 10.6 10.7 2.1 4.8 2.1 10.4 0 15.3m74-30.2c-12.4-12.4-32.6-12.4-45 0-6 6-9.3 14.1-9.3 22.5-.3 17.6 13.7 32.1 31.3 32.4s32.1-13.7 32.4-31.3v-1.1c0-4.2-.8-8.3-2.4-12.2s-4-7.4-7-10.3m-4.1 30.1c-1 2.4-2.5 4.5-4.3 6.3s-4 3.3-6.3 4.3c-5 2.1-10.6 2.1-15.6 0-4.8-2-8.6-5.9-10.6-10.6-2.1-4.9-2.1-10.5 0-15.5 2-4.8 5.8-8.5 10.6-10.6 5-2.1 10.6-2.1 15.6 0 2.4 1 4.5 2.5 6.3 4.3s3.3 4 4.3 6.3c2.1 5.1 2.1 10.7 0 15.5m135.8-33.6c0-.8-.2-1.6-.5-2.3s-.8-1.3-1.3-1.9c-.5-.5-1.2-1-1.9-1.3s-1.5-.5-2.3-.5c-1.1 0-2.2.3-3.2.9l-34 22.1v-44.2c0-1.6-.6-3.1-1.7-4.2s-2.6-1.8-4.2-1.8c-3.3 0-5.9 2.6-6 5.9v79.1c0 1.6.6 3.1 1.7 4.2 1.1 1.2 2.6 1.8 4.2 1.8s3.1-.6 4.2-1.8c1.1-1.1 1.8-2.6 1.7-4.2v-20.5l6.9-4.5 26.3 29.5c1.1 1 2.5 1.6 4 1.5.8 0 1.6-.1 2.3-.5.7-.3 1.3-.7 1.9-1.3.5-.6 1-1.2 1.3-1.9s.5-1.5.5-2.3c0-1.5-.6-3-1.6-4.1l-24.4-27.5 23.8-15.5c1.6-1 2.4-2.8 2.3-4.7m-98.7 11.8c1.8-1.8 4-3.3 6.4-4.3 2.5-1 5.1-1.6 7.8-1.6 2.4 0 4.7.4 6.9 1.2 2.2.9 4.3 2.1 6.1 3.7 1.1.9 2.5 1.3 3.9 1.3 1.6.1 3.2-.5 4.3-1.7 1.1-1.1 1.7-2.7 1.7-4.3 0-1.7-.7-3.4-2.1-4.5-5.7-5.1-13.1-7.9-20.8-7.7-17.6 0-31.9 14.3-31.9 31.9s14.2 31.8 31.7 31.9c7.7 0 15.1-2.7 20.9-7.7 1.2-1.1 1.9-2.7 1.9-4.4.1-3.2-2.4-5.8-5.5-5.9h-.4c-1.4 0-2.7.4-3.8 1.2-1.8 1.6-3.8 2.8-6 3.7-2.2.8-4.6 1.2-6.9 1.2-2.7 0-5.3-.5-7.8-1.6-2.4-1-4.5-2.5-6.4-4.3-7.8-7.8-7.8-20.4-.1-28.2.1.2.1.2.1.1m216.8-13.7c-1.2-1.1-2.5-1.9-4-2.4-1.7-.6-3.5-1-5.3-1.2s-3.6-.3-5.4-.3c-3.6 0-7.3.6-10.7 1.9-3.4 1.2-6.5 3-9.3 5.2v-1.2c-.1-3.3-2.9-5.8-6.2-5.7a5.9 5.9 0 0 0 -5.7 5.7v51.9c.1 3.3 2.9 5.8 6.2 5.7a5.9 5.9 0 0 0 5.7-5.7v-25.9c0-2.7.5-5.3 1.6-7.8 1-2.4 2.4-4.5 4.3-6.3 1.8-1.8 4-3.3 6.3-4.3 2.5-1 5.1-1.6 7.8-1.6s5.3.5 7.8 1.4c.8.4 1.6.6 2.5.6.8 0 1.6-.1 2.3-.5.7-.3 1.3-.7 1.9-1.3.5-.5 1-1.2 1.3-1.9s.5-1.5.5-2.3c.1-1.5-.5-2.9-1.6-4m-55.2 15.7c-5.1-11.8-16.7-19.5-29.5-19.6-17.6 0-31.8 14.2-31.9 31.8 0 17.6 14.3 31.9 31.9 31.9 7.6 0 15-2.7 20.8-7.7l.2-.2c.5-.4 1-.9 1.3-1.5 1.9-2.8 1.2-6.5-1.5-8.4-2.3-1.5-5.3-1.2-7.3.7-.2.2-.8.7-.8.8l-.1.1c-1.7 1.4-3.6 2.6-5.7 3.3-2.2.8-4.5 1.2-6.9 1.1-2.2 0-4.3-.3-6.4-1-2-.7-3.9-1.6-5.6-2.9-1.7-1.2-3.2-2.7-4.4-4.4-1.3-1.7-2.2-3.7-2.8-5.7h45c1.6 0 3.1-.6 4.2-1.7 1.2-1.1 1.8-2.6 1.7-4.2.1-4.3-.7-8.5-2.2-12.4m-48.7 6.4c.6-2.1 1.5-4 2.8-5.7 1.2-1.7 2.7-3.2 4.4-4.4s3.6-2.2 5.6-2.9 4.2-1 6.3-1 4.3.3 6.3 1c4 1.3 7.5 3.9 10 7.3 1.3 1.7 2.2 3.7 2.9 5.7zm83.6 29c-2.3 0-4.1 1.9-4.1 4.2s1.9 4.1 4.2 4.1 4.1-1.9 4.1-4.1c0-2.4-1.9-4.2-4.2-4.2zm0 7.4c-1.8.1-3.3-1.3-3.4-3.1s1.3-3.3 3.1-3.4 3.3 1.3 3.4 3.1v.2c.1 1.7-1.3 3.2-3 3.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 460,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0091e2",
                    d: "m600 376.6c.5-.1.8-.5.8-1 0-.4-.1-.7-.4-.9-.4-.2-.9-.3-1.4-.3s-1.1 0-1.6.1v4.1h.9v-1.6h.4c.5 0 .8.2.9.6.1.3.2.7.3 1h1c-.2-.3-.3-.7-.3-1 .1-.4-.2-.8-.6-1m-1.2-.3h-.5v-1.2h.5c.6 0 .9.3.9.6.1.4-.4.7-.9.6m-364.4-72.9c-.6-.5-6-4.6-17.6-4.6-3 0-6.1.3-9.1.8-2.2-15.3-14.9-22.7-15.4-23.1l-3.1-1.8-2 2.9c-2.5 3.9-4.4 8.3-5.5 12.8-2.1 8.7-.8 16.9 3.6 23.9-5.3 3-13.9 3.7-15.7 3.8h-142c-3.7 0-6.7 3-6.7 6.7-.2 12.4 1.9 24.8 6.2 36.5 4.9 12.8 12.2 22.3 21.6 28.1 10.6 6.5 27.9 10.2 47.4 10.2 8.8 0 17.6-.8 26.3-2.4 12.1-2.2 23.7-6.4 34.4-12.5 8.8-5.1 16.7-11.6 23.4-19.2 11.3-12.7 18-26.9 22.9-39.5h2c12.3 0 19.9-4.9 24.1-9.1 2.8-2.6 4.9-5.8 6.4-9.4l.9-2.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 461,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#0091e2",
                    d: "m40.8 314h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7zm26.2 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7m26.7 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 1 .7 1.7 1.7 1.7zm26.3 0h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 1 .8 1.7 1.7 1.7zm-53-24.3h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1.9.8 1.7 1.7 1.7m26.7 0h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.7 1.7 1.7 1.7m26.3 0h19c.9 0 1.7-.8 1.7-1.7v-17c0-.9-.8-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.8 1.7 1.7 1.7m0-24.4h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.8-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c0 .9.8 1.7 1.7 1.7m26.5 48.7h19c.9 0 1.7-.7 1.7-1.7v-17c0-.9-.7-1.7-1.7-1.7h-19c-.9 0-1.7.7-1.7 1.7v17c.1 1 .8 1.7 1.7 1.7"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 462,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 459,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Kubernets = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 249",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#326DE6",
                    d: "M82.085 244.934c-5.946 0-11.561-2.642-15.36-7.432L8.92 165.657c-3.799-4.79-5.285-10.9-3.799-16.847l20.645-89.682c1.321-5.946 5.285-10.736 10.736-13.378l83.571-39.97c2.643-1.32 5.616-1.981 8.589-1.981 2.973 0 5.945.66 8.588 1.982l83.572 39.804c5.45 2.642 9.414 7.432 10.735 13.378l20.645 89.682c1.322 5.946 0 12.057-3.798 16.847l-57.807 71.845c-3.799 4.624-9.414 7.432-15.36 7.432l-93.15.165z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 471,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M128.495 7.928c2.313 0 4.625.495 6.772 1.486l83.572 39.804c4.294 2.147 7.597 6.111 8.588 10.736l20.645 89.682c1.156 4.79 0 9.745-3.138 13.543l-57.806 71.846c-2.973 3.798-7.598 5.945-12.387 5.945H82.085c-4.79 0-9.414-2.147-12.387-5.945l-57.806-71.846c-2.973-3.798-4.13-8.753-3.138-13.543l20.645-89.682c1.156-4.79 4.294-8.754 8.588-10.736L121.56 9.25c2.147-.826 4.624-1.321 6.936-1.321zm0-7.763c-3.468 0-6.936.826-10.24 2.312l-83.571 39.97c-6.607 3.138-11.231 8.918-12.883 16.02L1.156 148.15c-1.651 7.102 0 14.369 4.625 20.15l57.806 71.845c4.46 5.615 11.231 8.753 18.333 8.753h92.655c7.102 0 13.874-3.138 18.333-8.753l57.807-71.846c4.624-5.615 6.276-13.047 4.624-20.15l-20.645-89.682c-1.651-7.102-6.276-12.882-12.882-16.02L138.57 2.476C135.432.991 131.964.165 128.495.165z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 472,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M212.232 142.534c-.165 0-.165 0 0 0h-.165c-.165 0-.33 0-.33-.165-.33 0-.66-.165-.991-.165-1.156-.165-2.147-.33-3.138-.33-.496 0-.991 0-1.652-.166h-.165c-3.468-.33-6.276-.66-8.919-1.486-1.156-.496-1.486-1.156-1.817-1.817 0-.165-.165-.165-.165-.33l-2.147-.66a65.33 65.33 0 0 0-1.156-23.289 68.054 68.054 0 0 0-9.249-21.636l1.652-1.486v-.33c0-.826.165-1.652.825-2.478 1.982-1.817 4.46-3.303 7.433-5.12.495-.33.99-.495 1.486-.826.991-.495 1.817-.99 2.808-1.651.165-.165.495-.33.826-.66.165-.166.33-.166.33-.331 2.312-1.982 2.808-5.285 1.156-7.433-.826-1.156-2.312-1.816-3.799-1.816-1.32 0-2.477.495-3.633 1.321l-.33.33c-.33.165-.496.496-.826.661-.826.826-1.487 1.486-2.147 2.312-.33.33-.66.826-1.156 1.156-2.313 2.478-4.46 4.46-6.607 5.946-.495.33-.99.496-1.486.496-.33 0-.661 0-.991-.166h-.33l-1.983 1.322c-2.147-2.312-4.459-4.294-6.771-6.276a65.958 65.958 0 0 0-34.519-13.709l-.165-2.147-.33-.33c-.496-.496-1.156-.991-1.322-2.147-.165-2.643.166-5.616.496-8.919v-.165c0-.496.165-1.156.33-1.652.165-.99.33-1.982.496-3.138v-1.486c0-2.973-2.313-5.45-5.12-5.45-1.322 0-2.643.66-3.634 1.651-.99.991-1.486 2.312-1.486 3.799v1.321c0 1.156.165 2.147.495 3.138.165.496.165.991.33 1.652v.165c.33 3.303.826 6.276.496 8.919-.165 1.156-.826 1.651-1.321 2.147l-.33.33-.166 2.147c-2.973.33-5.946.66-8.919 1.321-12.717 2.808-23.948 9.25-32.701 18.498l-1.652-1.156h-.33c-.33 0-.661.165-.991.165-.496 0-.991-.165-1.487-.495-2.147-1.486-4.294-3.634-6.606-6.111-.33-.33-.66-.826-1.156-1.156-.661-.826-1.322-1.487-2.148-2.312-.165-.166-.495-.33-.825-.661-.165-.165-.33-.165-.33-.33a5.772 5.772 0 0 0-3.634-1.322c-1.487 0-2.973.661-3.799 1.817-1.652 2.147-1.156 5.45 1.156 7.432.165 0 .165.166.33.166.33.165.496.495.826.66.991.66 1.817 1.156 2.808 1.652.496.165.991.495 1.487.826 2.972 1.816 5.45 3.303 7.432 5.12.826.825.826 1.651.826 2.477v.33l1.651 1.487c-.33.495-.66.826-.826 1.321-8.258 13.048-11.396 28.408-9.249 43.603l-2.147.66c0 .166-.165.166-.165.33-.33.661-.826 1.322-1.817 1.817-2.477.826-5.45 1.157-8.918 1.487h-.166c-.495 0-1.156 0-1.651.165-.991 0-1.982.165-3.138.33-.33 0-.66.166-.991.166-.165 0-.33 0-.496.165-2.973.66-4.79 3.468-4.294 6.11.496 2.313 2.643 3.8 5.285 3.8.496 0 .826 0 1.322-.166.165 0 .33 0 .33-.165.33 0 .66-.165.99-.165 1.157-.33 1.983-.66 2.974-1.156.495-.165.99-.496 1.486-.66h.165c3.138-1.157 5.946-2.148 8.589-2.478h.33c.991 0 1.652.495 2.147.826.165 0 .165.165.33.165l2.313-.33c3.964 12.221 11.561 23.122 21.636 31.05 2.312 1.816 4.624 3.303 7.102 4.79l-.991 2.146c0 .166.165.166.165.33.33.661.66 1.487.33 2.643-.99 2.478-2.477 4.955-4.294 7.763v.165c-.33.496-.66.826-.99 1.321-.661.826-1.157 1.652-1.818 2.643-.165.165-.33.495-.495.826 0 .165-.165.33-.165.33-1.321 2.808-.33 5.946 2.147 7.102.66.33 1.321.496 1.982.496 1.982 0 3.964-1.322 4.955-3.139 0-.165.165-.33.165-.33.165-.33.33-.66.495-.826.496-1.156.661-1.982.991-2.973l.496-1.486c1.156-3.303 1.982-5.946 3.468-8.258.66-.991 1.487-1.156 2.147-1.487.165 0 .165 0 .33-.165l1.157-2.147c7.267 2.808 15.195 4.294 23.122 4.294 4.79 0 9.745-.495 14.37-1.651a73.402 73.402 0 0 0 8.588-2.478l.99 1.817c.166 0 .166 0 .331.165.826.165 1.486.496 2.147 1.487 1.321 2.312 2.312 5.12 3.468 8.258v.165l.496 1.486c.33.991.495 1.982.99 2.973.166.33.331.496.496.826 0 .165.166.33.166.33.99 1.982 2.972 3.139 4.954 3.139.661 0 1.322-.166 1.982-.496 1.156-.66 2.147-1.652 2.478-2.973.33-1.321.33-2.808-.33-4.129 0-.165-.166-.165-.166-.33-.165-.33-.33-.66-.495-.826-.496-.991-1.156-1.817-1.817-2.643-.33-.495-.66-.825-.99-1.32v-.166c-1.818-2.808-3.47-5.285-4.295-7.763-.33-1.156 0-1.816.165-2.642 0-.165.165-.165.165-.33l-.826-1.982c8.754-5.12 16.186-12.388 21.802-21.306 2.973-4.625 5.285-9.745 6.936-14.865l1.982.33c.166 0 .166-.165.33-.165.661-.33 1.157-.825 2.148-.825h.33c2.643.33 5.45 1.32 8.589 2.477h.165c.495.165.99.495 1.486.66.991.496 1.817.826 2.973 1.157.33 0 .66.165.991.165.165 0 .33 0 .495.165.496.165.826.165 1.322.165 2.477 0 4.624-1.651 5.285-3.798 0-1.982-1.817-4.625-4.79-5.45zm-76.47-8.093l-7.267 3.469-7.267-3.469-1.816-7.762 4.954-6.276h8.093l4.955 6.276-1.651 7.762zm43.108-17.176a52.078 52.078 0 0 1 1.156 16.68l-25.27-7.266c-2.312-.66-3.633-2.973-3.138-5.285.165-.661.496-1.322.991-1.817l19.985-18.003c2.807 4.625 4.954 9.91 6.276 15.69zm-14.204-25.6l-21.636 15.36c-1.817 1.156-4.295.825-5.781-.991-.495-.496-.66-1.157-.826-1.817l-1.486-26.922a50.13 50.13 0 0 1 29.729 14.37zM116.769 78.12c1.817-.33 3.468-.66 5.285-.99l-1.486 26.425c-.165 2.312-1.982 4.294-4.46 4.294-.66 0-1.486-.165-1.982-.495L92.16 91.665c6.772-6.772 15.195-11.397 24.609-13.544zm-32.537 23.453l19.654 17.507c1.817 1.487 1.982 4.294.496 6.111-.496.66-1.156 1.156-1.982 1.322l-25.6 7.432c-.991-11.231 1.486-22.627 7.432-32.372zm-4.46 44.759l26.262-4.46c2.147-.165 4.129 1.322 4.624 3.469.165.99.165 1.817-.165 2.643l-10.075 24.278c-9.249-5.946-16.681-15.03-20.645-25.93zm60.285 32.867c-3.799.826-7.598 1.321-11.562 1.321-5.78 0-11.396-.99-16.68-2.642l13.047-23.618c1.321-1.487 3.468-2.147 5.285-1.156a7.04 7.04 0 0 1 1.982 1.816l12.717 22.958c-1.486.495-3.138.826-4.79 1.321zm32.206-22.957c-4.129 6.606-9.58 11.891-15.855 16.02l-10.405-24.94c-.496-1.981.33-4.128 2.312-5.12.66-.33 1.486-.495 2.312-.495l26.426 4.46c-.991 3.633-2.643 6.937-4.79 10.075z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 473,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 470,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const PostGreSql = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 256 264",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#000000",
                    d: "M255.008 158.086c-1.535-4.649-5.556-7.887-10.756-8.664-2.452-.366-5.26-.21-8.583.475-5.792 1.195-10.089 1.65-13.225 1.738 11.837-19.985 21.462-42.775 27.003-64.228 8.96-34.689 4.172-50.492-1.423-57.64C233.217 10.847 211.614.683 185.552.372c-13.903-.17-26.108 2.575-32.475 4.549-5.928-1.046-12.302-1.63-18.99-1.738-12.537-.2-23.614 2.533-33.079 8.15-5.24-1.772-13.65-4.27-23.362-5.864-22.842-3.75-41.252-.828-54.718 8.685C6.622 25.672-.937 45.684.461 73.634c.444 8.874 5.408 35.874 13.224 61.48 4.492 14.718 9.282 26.94 14.237 36.33 7.027 13.315 14.546 21.156 22.987 23.972 4.731 1.576 13.327 2.68 22.368-4.85 1.146 1.388 2.675 2.767 4.704 4.048 2.577 1.625 5.728 2.953 8.875 3.74 11.341 2.835 21.964 2.126 31.027-1.848.056 1.612.099 3.152.135 4.482.06 2.157.12 4.272.199 6.25.537 13.374 1.447 23.773 4.143 31.049.148.4.347 1.01.557 1.657 1.345 4.118 3.594 11.012 9.316 16.411 5.925 5.593 13.092 7.308 19.656 7.308 3.292 0 6.433-.432 9.188-1.022 9.82-2.105 20.973-5.311 29.041-16.799 7.628-10.86 11.336-27.217 12.007-52.99.087-.729.167-1.425.244-2.088l.16-1.362 1.797.158.463.031c10.002.456 22.232-1.665 29.743-5.154 5.935-2.754 24.954-12.795 20.476-26.351"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 482,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#336791",
                    d: "M237.906 160.722c-29.74 6.135-31.785-3.934-31.785-3.934 31.4-46.593 44.527-105.736 33.2-120.211-30.904-39.485-84.399-20.811-85.292-20.327l-.287.052c-5.876-1.22-12.451-1.946-19.842-2.067-13.456-.22-23.664 3.528-31.41 9.402 0 0-95.43-39.314-90.991 49.444.944 18.882 27.064 142.873 58.218 105.422 11.387-13.695 22.39-25.274 22.39-25.274 5.464 3.63 12.006 5.482 18.864 4.817l.533-.452c-.166 1.7-.09 3.363.213 5.332-8.026 8.967-5.667 10.541-21.711 13.844-16.235 3.346-6.698 9.302-.471 10.86 7.549 1.887 25.013 4.561 36.813-11.958l-.47 1.885c3.144 2.519 5.352 16.383 4.982 28.952-.37 12.568-.617 21.197 1.86 27.937 2.479 6.74 4.948 21.905 26.04 17.386 17.623-3.777 26.756-13.564 28.027-29.89.901-11.606 2.942-9.89 3.07-20.267l1.637-4.912c1.887-15.733.3-20.809 11.157-18.448l2.64.232c7.99.363 18.45-1.286 24.589-4.139 13.218-6.134 21.058-16.377 8.024-13.686h.002"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 483,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M108.076 81.525c-2.68-.373-5.107-.028-6.335.902-.69.523-.904 1.129-.962 1.546-.154 1.105.62 2.327 1.096 2.957 1.346 1.784 3.312 3.01 5.258 3.28.282.04.563.058.842.058 3.245 0 6.196-2.527 6.456-4.392.325-2.336-3.066-3.893-6.355-4.35M196.86 81.599c-.256-1.831-3.514-2.353-6.606-1.923-3.088.43-6.082 1.824-5.832 3.659.2 1.427 2.777 3.863 5.827 3.863.258 0 .518-.017.78-.054 2.036-.282 3.53-1.575 4.24-2.32 1.08-1.136 1.706-2.402 1.591-3.225"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 484,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#ffffff",
                    d: "M247.802 160.025c-1.134-3.429-4.784-4.532-10.848-3.28-18.005 3.716-24.453 1.142-26.57-.417 13.995-21.32 25.508-47.092 31.719-71.137 2.942-11.39 4.567-21.968 4.7-30.59.147-9.463-1.465-16.417-4.789-20.665-13.402-17.125-33.072-26.311-56.882-26.563-16.369-.184-30.199 4.005-32.88 5.183-5.646-1.404-11.801-2.266-18.502-2.376-12.288-.199-22.91 2.743-31.704 8.74-3.82-1.422-13.692-4.811-25.765-6.756-20.872-3.36-37.458-.814-49.294 7.571-14.123 10.006-20.643 27.892-19.38 53.16.425 8.501 5.269 34.653 12.913 59.698 10.062 32.964 21 51.625 32.508 55.464 1.347.449 2.9.763 4.613.763 4.198 0 9.345-1.892 14.7-8.33a529.832 529.832 0 0 1 20.261-22.926c4.524 2.428 9.494 3.784 14.577 3.92.01.133.023.266.035.398a117.66 117.66 0 0 0-2.57 3.175c-3.522 4.471-4.255 5.402-15.592 7.736-3.225.666-11.79 2.431-11.916 8.435-.136 6.56 10.125 9.315 11.294 9.607 4.074 1.02 7.999 1.523 11.742 1.523 9.103 0 17.114-2.992 23.516-8.781-.197 23.386.778 46.43 3.586 53.451 2.3 5.748 7.918 19.795 25.664 19.794 2.604 0 5.47-.303 8.623-.979 18.521-3.97 26.564-12.156 29.675-30.203 1.665-9.645 4.522-32.676 5.866-45.03 2.836.885 6.487 1.29 10.434 1.289 8.232 0 17.731-1.749 23.688-4.514 6.692-3.108 18.768-10.734 16.578-17.36zm-44.106-83.48c-.061 3.647-.563 6.958-1.095 10.414-.573 3.717-1.165 7.56-1.314 12.225-.147 4.54.42 9.26.968 13.825 1.108 9.22 2.245 18.712-2.156 28.078a36.508 36.508 0 0 1-1.95-4.009c-.547-1.326-1.735-3.456-3.38-6.404-6.399-11.476-21.384-38.35-13.713-49.316 2.285-3.264 8.084-6.62 22.64-4.813zm-17.644-61.787c21.334.471 38.21 8.452 50.158 23.72 9.164 11.711-.927 64.998-30.14 110.969a171.33 171.33 0 0 0-.886-1.117l-.37-.462c7.549-12.467 6.073-24.802 4.759-35.738-.54-4.488-1.05-8.727-.92-12.709.134-4.22.692-7.84 1.232-11.34.663-4.313 1.338-8.776 1.152-14.037.139-.552.195-1.204.122-1.978-.475-5.045-6.235-20.144-17.975-33.81-6.422-7.475-15.787-15.84-28.574-21.482 5.5-1.14 13.021-2.203 21.442-2.016zM66.674 175.778c-5.9 7.094-9.974 5.734-11.314 5.288-8.73-2.912-18.86-21.364-27.791-50.624-7.728-25.318-12.244-50.777-12.602-57.916-1.128-22.578 4.345-38.313 16.268-46.769 19.404-13.76 51.306-5.524 64.125-1.347-.184.182-.376.352-.558.537-21.036 21.244-20.537 57.54-20.485 59.759-.002.856.07 2.068.168 3.735.362 6.105 1.036 17.467-.764 30.334-1.672 11.957 2.014 23.66 10.111 32.109a36.275 36.275 0 0 0 2.617 2.468c-3.604 3.86-11.437 12.396-19.775 22.426zm22.479-29.993c-6.526-6.81-9.49-16.282-8.133-25.99 1.9-13.592 1.199-25.43.822-31.79-.053-.89-.1-1.67-.127-2.285 3.073-2.725 17.314-10.355 27.47-8.028 4.634 1.061 7.458 4.217 8.632 9.645 6.076 28.103.804 39.816-3.432 49.229-.873 1.939-1.698 3.772-2.402 5.668l-.546 1.466c-1.382 3.706-2.668 7.152-3.465 10.424-6.938-.02-13.687-2.984-18.819-8.34zm1.065 37.9c-2.026-.506-3.848-1.385-4.917-2.114.893-.42 2.482-.992 5.238-1.56 13.337-2.745 15.397-4.683 19.895-10.394 1.031-1.31 2.2-2.794 3.819-4.602l.002-.002c2.411-2.7 3.514-2.242 5.514-1.412 1.621.67 3.2 2.702 3.84 4.938.303 1.056.643 3.06-.47 4.62-9.396 13.156-23.088 12.987-32.921 10.526zm69.799 64.952c-16.316 3.496-22.093-4.829-25.9-14.346-2.457-6.144-3.665-33.85-2.808-64.447.011-.407-.047-.8-.159-1.17a15.444 15.444 0 0 0-.456-2.162c-1.274-4.452-4.379-8.176-8.104-9.72-1.48-.613-4.196-1.738-7.46-.903.696-2.868 1.903-6.107 3.212-9.614l.549-1.475c.618-1.663 1.394-3.386 2.214-5.21 4.433-9.848 10.504-23.337 3.915-53.81-2.468-11.414-10.71-16.988-23.204-15.693-7.49.775-14.343 3.797-17.761 5.53-.735.372-1.407.732-2.035 1.082.954-11.5 4.558-32.992 18.04-46.59 8.489-8.56 19.794-12.788 33.568-12.56 27.14.444 44.544 14.372 54.366 25.979 8.464 10.001 13.047 20.076 14.876 25.51-13.755-1.399-23.11 1.316-27.852 8.096-10.317 14.748 5.644 43.372 13.315 57.129 1.407 2.521 2.621 4.7 3.003 5.626 2.498 6.054 5.732 10.096 8.093 13.046.724.904 1.426 1.781 1.96 2.547-4.166 1.201-11.649 3.976-10.967 17.847-.55 6.96-4.461 39.546-6.448 51.059-2.623 15.21-8.22 20.875-23.957 24.25zm68.104-77.936c-4.26 1.977-11.389 3.46-18.161 3.779-7.48.35-11.288-.838-12.184-1.569-.42-8.644 2.797-9.547 6.202-10.503.535-.15 1.057-.297 1.561-.473.313.255.656.508 1.032.756 6.012 3.968 16.735 4.396 31.874 1.271l.166-.033c-2.042 1.909-5.536 4.471-10.49 6.772z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 485,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 481,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Heroku = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "60 329.689 149.444 166.512",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                fill: "#430098",
                d: "M194.458,329.689H74.987C66.66,329.689,60,336.35,60,344.675 v136.539c0,8.326,6.66,14.986,14.986,14.986h119.472c8.326,0,14.986-6.66,14.986-14.986V344.675 C209.445,336.35,202.784,329.689,194.458,329.689z M201.119,481.214c0,3.748-2.914,6.662-6.661,6.662H74.987 c-3.747,0-6.661-2.914-6.661-6.662V344.675c0-3.747,2.914-6.661,6.661-6.661h119.472c3.747,0,6.661,2.914,6.661,6.661V481.214z M97.465,471.224l18.732-16.65l-18.732-16.652V471.224z M164.903,403.787c-3.33-3.331-9.574-7.493-19.981-7.493 c-11.239,0-22.896,2.914-31.221,5.828v-47.456H97.049v72.017l11.655-5.413c0,0,19.149-8.742,35.801-8.742 c8.325,0,10.406,4.579,10.406,8.742v49.954h16.651v-49.954C171.98,420.022,171.98,410.864,164.903,403.787z M142.84,381.724 h16.65c7.493-8.742,11.24-17.484,12.489-27.058h-16.651C153.663,364.24,149.5,372.982,142.84,381.724z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 494,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 493,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const AndroidStudio = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 128 128",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#073042",
                    d: "M51.3 17.7H23.2C17.6 17.7 13 22.3 13 28c-.2 5.5 4.2 10.1 9.7 10.3h28.9l-.3-20.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#4285F4",
                    d: "M115 109.3H23.2c-5.7 0-10.2-4.6-10.2-10.3V27.9c0 5.7 4.6 10.3 10.2 10.4h76.9s15-1.3 15 10v61z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3870B2",
                    d: "M72.2 72.9C76.3 69.8 77.1 64 74 60c-1.7-2.2-4.3-3.6-7.1-3.7h.3c.5-.1 1.1-.1 1.6 0v-5.7c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-16.9 36.2h11l7.8-16.6c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9l8.1 16.6h11.2L72.2 72.9zm-5.7-1.6c-3.2 0-5.7-2.6-5.7-5.8 0-3.2 2.6-5.7 5.8-5.6 1.5 0 2.8.6 3.9 1.6 2.3 2.2 2.3 5.8.1 8.1-1 1-2.5 1.7-4.1 1.7z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 256
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#FFF",
                    d: "M45.2 22.7h39.4v7.2H45.2v-7.2z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 683
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#073042",
                    d: "M63.5 59.8c3.1 0 5.7 2.6 5.6 5.8 0 3.1-2.6 5.7-5.8 5.6-3.1 0-5.6-2.6-5.6-5.7 0-1.5.6-2.9 1.7-4s2.6-1.7 4.1-1.7zm2.2-3.3v-6c0-.7-.3-1.3-.9-1.6-.9-.5-2-.2-2.5.7-.2.3-.3.6-.2 1v5.8c-5 .8-8.5 5.5-7.7 10.6v.1c.4 2.4 1.7 4.6 3.7 6l-21.3 45.7c-.8 1.6-.7 3.6.4 5.1 1.6 2.3 4.7 2.9 7 1.3.8-.5 1.4-1.3 1.8-2.1l14.2-30.4c.9-2 3.3-2.9 5.4-1.9.8.4 1.5 1.1 1.9 1.9L82 122.8c1.2 2.5 4.2 3.5 6.7 2.3 2.5-1.2 3.5-4.2 2.3-6.7L69.1 72.9c4-3.2 4.7-9.1 1.5-13.1-1.2-1.6-2.9-2.7-4.9-3.3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 743
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#3DDC84",
                    d: "M78.8 29.1c-1.5 0-2.7-1.1-2.7-2.6 0-.7.3-1.5.8-2 1.1-1 2.7-1 3.8 0 .5.5.8 1.2.8 1.9-.1 1.5-1.2 2.6-2.7 2.7M49.2 29c-1.5 0-2.7-1.2-2.7-2.6 0-.7.3-1.4.8-1.9.9-1.1 2.6-1.3 3.7-.4h.1c1.1 1 1.2 2.7.2 3.8l-.3.4c-.5.5-1.2.8-1.9.8m30.5-16.2l5.3-9.2c.3-.5.1-1.1-.3-1.5-.5-.2-1-.1-1.3.3L77.8 12C69 8.1 59 8.1 50.3 12l-5.4-9.4c-.2-.3-.6-.6-1-.6s-.8.2-1 .6c-.2.3-.2.8 0 1.1l5.4 9.2C38.9 18 32.8 27.6 31.9 38.2h64.2c-.8-10.7-7-20.2-16.4-25.3"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 1240
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#073042",
                    d: "M105.6 58.1h-4.2c-.2.1-.4.3-.4.6v66.5c0 .3.2.5.5.5h4.4c5.1 0 9.2-4.2 9.2-9.2V48.8c0 5.1-4.1 9.2-9.2 9.2h-.3z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 504,
                    columnNumber: 1701
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 503,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const SQLite = ({ width = 100, height = 50 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 70 30",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    clipPath: "url(#clip0_279_3)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M26.9268 10C26.0753 10 25.3819 10.26 24.8489 10.7754C24.3175 11.2913 24.05 11.9676 24.05 12.7963C24.05 13.2249 24.1145 13.6179 24.248 13.9774C24.3863 14.3466 24.5953 14.6844 24.8629 14.9711C25.1379 15.2727 25.6909 15.6799 26.5128 16.2009C27.5247 16.8316 28.1857 17.3434 28.5031 17.7425C28.8206 18.1416 28.9801 18.56 28.9801 18.9962C28.9801 19.5791 28.7921 20.0473 28.4037 20.3966C28.0172 20.7455 27.4997 20.9217 26.8553 20.9217C26.1793 20.9217 25.5894 20.6759 25.0839 20.1915C24.576 19.7076 24.32 19.0673 24.314 18.262H24V21.1817H24.314C24.41 20.9034 24.5448 20.7639 24.7184 20.7633C24.8024 20.7633 24.9979 20.8211 25.3044 20.9318C26.0483 21.202 26.6578 21.3345 27.1383 21.3345C27.9642 21.3345 28.6731 21.037 29.2591 20.4357C29.847 19.8351 30.144 19.1094 30.144 18.2625C30.1507 17.6297 29.9469 17.0131 29.5656 16.5127C29.1791 16.0029 28.4337 15.4088 27.3157 14.7284C26.3553 14.1373 25.7304 13.659 25.4409 13.2843C25.1514 12.9095 25.0039 12.4972 25.0039 12.0433C25.0039 11.5492 25.1819 11.1567 25.5319 10.8612C25.8789 10.5672 26.3348 10.4204 26.9088 10.4204C27.5492 10.4204 28.0867 10.6169 28.5101 11.0079C28.9341 11.4025 29.1781 11.9458 29.2501 12.646H29.5666V10.1153H29.2746C29.2366 10.2463 29.2041 10.3275 29.1746 10.3651C29.1436 10.4027 29.0886 10.4209 29.0011 10.4209C28.9011 10.4209 28.7196 10.3768 28.4622 10.291C27.9092 10.1 27.3992 10.0015 26.9288 10.0015M37.227 10.0015C36.188 10.0015 35.2451 10.2534 34.3912 10.753C33.5379 11.2547 32.8616 11.9476 32.3623 12.8319C31.8654 13.7144 31.6166 14.6553 31.6159 15.6546C31.6159 16.9971 32.0479 18.1955 32.9148 19.2445C33.7857 20.2941 34.8247 20.9486 36.0316 21.1984C36.3095 21.3452 36.7055 21.7235 37.223 22.3409C37.8029 23.0315 38.2974 23.5311 38.7034 23.8287C39.0989 24.1218 39.54 24.3456 40.0083 24.4908C40.4687 24.634 40.9687 24.7031 41.5096 24.7031C42.1641 24.7031 42.7515 24.5883 43.2675 24.3481L43.1525 24.0546C42.8452 24.1662 42.5209 24.2219 42.1946 24.2192C41.7396 24.2192 41.2777 24.0638 40.8142 23.7551C40.3507 23.4463 39.7713 22.8548 39.0838 21.9839C38.7593 21.5655 38.5349 21.3015 38.4099 21.1984C39.7298 20.9344 40.8182 20.2814 41.6656 19.2349C42.5131 18.1883 42.935 16.9936 42.935 15.6546C42.935 14.0637 42.3821 12.7288 41.2822 11.6401C40.1822 10.5514 38.8293 10.0015 37.226 10.0015M43.6535 10.0015L43.6715 10.3488C44.3629 10.3488 44.7494 10.555 44.8354 10.9734C44.8689 11.1242 44.8844 11.402 44.8884 11.799L44.8824 19.4156C44.875 19.9847 44.7955 20.3479 44.6439 20.5053C44.4919 20.6617 44.2319 20.7607 43.8589 20.7988L43.8435 21.1441H50.7399L50.9179 19.4161H50.6019C50.5139 19.8863 50.3069 20.2235 49.977 20.4144C49.6485 20.6069 49.067 20.7039 48.2271 20.7039H47.5727C46.8161 20.7042 46.3799 20.4239 46.2643 19.863C46.2415 19.7435 46.2302 19.6221 46.2308 19.5004L46.2588 11.8006C46.2588 11.2334 46.3288 10.8526 46.4757 10.6662C46.6202 10.4798 46.8877 10.3768 47.2707 10.3509L47.2547 10.0036L43.6535 10.0015ZM37.3375 10.4199C38.5074 10.4199 39.4663 10.8922 40.2042 11.8422C40.9442 12.7963 41.3096 14.0998 41.3096 15.75C41.31 17.315 40.9383 18.5687 40.1947 19.5111C39.4503 20.4525 38.4584 20.9227 37.226 20.9227C36.0426 20.9227 35.0831 20.4393 34.3472 19.4654C33.6113 18.4935 33.2458 17.2317 33.2458 15.6769C33.2451 14.0818 33.6156 12.8056 34.3572 11.8483C35.0998 10.8967 36.0932 10.4203 37.3375 10.4199ZM53.1977 12.059C53.0311 12.0597 52.9009 12.1179 52.8073 12.2337C52.7073 12.3505 52.6783 12.4911 52.7113 12.6617C52.7448 12.8303 52.8382 12.9735 52.9847 13.0984C53.1277 13.2193 53.2857 13.2848 53.4537 13.2848C53.5265 13.2878 53.5989 13.2723 53.6644 13.2398C53.7299 13.2072 53.7863 13.1587 53.8287 13.0984C53.9187 12.9735 53.9457 12.8303 53.9127 12.6617C53.8762 12.4933 53.7846 12.3424 53.6527 12.2337C53.5265 12.1221 53.3651 12.0601 53.1977 12.059ZM57.7464 13.2269C57.4629 14.3501 56.8419 14.9584 55.891 15.0559L55.901 15.3773H57.0119L56.9904 19.1836C56.9924 19.834 57.0104 20.2667 57.0569 20.487C57.1664 21.0146 57.5039 21.2842 58.0683 21.2842C58.8853 21.2846 59.7414 20.7761 60.6366 19.7589L60.3667 19.5223C59.721 20.1912 59.1483 20.5258 58.6483 20.5261C58.3397 20.5261 58.1497 20.3474 58.0783 19.9899C58.0597 19.8892 58.0512 19.7867 58.0528 19.6842L58.0628 15.3763H59.7597L59.7417 14.8645H58.0678V13.2264L57.7464 13.2269ZM64.3089 14.6619C63.3594 14.6619 62.588 15.1341 61.987 16.0684C61.3916 17.0042 61.2061 18.0416 61.4401 19.1841C61.5791 19.8523 61.8545 20.3702 62.276 20.7374C62.696 21.1019 63.2309 21.2827 63.8679 21.2827C64.4613 21.2827 65.2878 21.1299 65.6372 20.8206C65.9842 20.5129 66.3072 20.0112 66.6042 19.3247L66.3657 19.0709C65.8907 19.9595 64.9358 20.4078 64.2159 20.4078C63.2229 20.4078 62.618 19.8523 62.391 18.7494C62.3604 18.6 62.3384 18.449 62.325 18.297C63.5056 18.1071 64.3968 17.7686 64.9988 17.2815C65.6038 16.7935 66.2077 16.274 66.0942 15.7282C66.0342 15.4172 65.8604 15.1409 65.6078 14.9548C65.3498 14.7624 64.6823 14.6614 64.3094 14.6614M53.9352 14.701L51.8903 15.1803V15.553L52.5973 15.4636C52.9412 15.4636 53.1422 15.62 53.2067 15.9359C53.2262 16.0425 53.2417 16.1898 53.2457 16.3761L53.2222 19.7934C53.2162 20.2636 53.1657 20.5393 53.0622 20.6226C52.9589 20.7042 52.6846 20.7452 52.2393 20.7455L52.2258 21.0689H55.4715L55.4655 20.7455C55.0166 20.7455 54.7236 20.7099 54.5926 20.6389C54.4656 20.5673 54.3761 20.4403 54.3371 20.2438C54.3091 20.1032 54.2961 19.8589 54.2941 19.5218L54.3041 14.6999L53.9352 14.701ZM63.7894 15.3336C63.9874 15.3336 64.1784 15.4108 64.3693 15.5637C64.5613 15.716 64.6763 15.8886 64.7133 16.0735C64.8988 16.9804 64.1099 17.6085 62.335 17.9578C62.286 17.2957 62.398 16.6945 62.6845 16.1522C62.9695 15.6089 63.3404 15.3336 63.7894 15.3336Z",
                            fill: "#C7C7C7"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 521,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M20.6762 4.00151H3.12343C1.9467 4.00151 0.984375 4.73439 0.984375 5.63001V20.3719C0.984375 21.2667 1.9467 22 3.12343 22H14.6833C14.5527 17.6193 16.5162 9.1181 20.6767 4L20.6762 4.00151Z",
                            fill: "url(#paint0_linear_279_3)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 525,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                            d: "M24.1058 2.62178C22.9009 1.52499 21.44 1.96523 20.0026 3.2702C19.7873 3.46553 19.5733 3.67845 19.3607 3.90898C16.8979 6.58088 14.6111 11.5256 13.9021 15.3039C14.1771 15.8746 14.3941 16.6069 14.5371 17.1664C14.6064 17.4453 14.6701 17.7257 14.728 18.0073C14.728 18.0073 14.7045 17.92 14.615 17.6524L14.5541 17.4757C14.5431 17.4441 14.5307 17.4131 14.5171 17.3827C14.3571 16.9999 13.9121 16.1945 13.7166 15.8437C13.5616 16.3079 13.4159 16.7754 13.2797 17.2456C13.8416 18.3008 14.1856 20.1115 14.1856 20.1115C14.1856 20.1115 14.1576 19.9927 14.0156 19.5865C13.8886 19.2239 13.2622 18.1007 13.1117 17.8367C12.8577 18.7969 12.7582 19.4433 12.8477 19.6022C13.0257 19.9079 13.1957 20.4334 13.3441 21.0189C13.6781 22.332 13.9081 23.9284 13.9081 23.9284L13.9281 24.1976C13.8861 25.2917 13.9081 26.3873 13.9941 27.4788C14.1041 28.8452 14.3141 30.0197 14.5781 30.6503L14.76 30.5488C14.3691 29.3098 14.2111 27.6849 14.2796 25.8128C14.3846 22.9505 15.0295 19.4971 16.2204 15.9011C18.2363 10.4679 21.027 6.11069 23.5833 4.02933C21.2535 6.18025 18.1008 13.1367 17.1559 15.7147C16.0994 18.5958 15.3515 21.3043 14.899 23.9C15.68 21.4683 18.1978 20.4233 18.1978 20.4233C18.1978 20.4233 19.4317 18.868 20.8756 16.6424C20.0121 16.8445 18.5907 17.1898 18.1158 17.3919C17.4128 17.6935 17.2258 17.7966 17.2258 17.7966C17.2258 17.7966 19.4987 16.3845 21.4455 15.7416C24.1273 11.4296 27.0491 5.30231 24.1083 2.62076",
                            fill: "#003956"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 529,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 520,
                    columnNumber: 5
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                            id: "paint0_linear_279_3",
                            x1: 10.8305,
                            y1: 4,
                            x2: 10.8305,
                            y2: 22,
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    stopColor: "white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 543,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: 0.682692,
                                    stopColor: "#0080FF"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 544,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 535,
                            columnNumber: 7
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("clipPath", {
                            id: "clip0_279_3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("rect", {
                                width: 70,
                                height: 30,
                                fill: "white"
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                lineNumber: 547,
                                columnNumber: 9
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 546,
                            columnNumber: 7
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 534,
                    columnNumber: 5
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 513,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const ComposeMultiplatform = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            width: width,
            height: height,
            viewBox: "0 0 256 256",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                        id: "grad1",
                        x1: "0%",
                        y1: "0%",
                        x2: "100%",
                        y2: "100%",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "0%",
                                style: {
                                    stopColor: "#00c4b3",
                                    stopOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                lineNumber: 562,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                offset: "100%",
                                style: {
                                    stopColor: "#3b82f6",
                                    stopOpacity: 1
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                lineNumber: 563,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 561,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 560,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    fill: "url(#grad1)",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("polygon", {
                            points: "128,16 240,72 240,184 128,240 16,184 16,72"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 567,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("circle", {
                            cx: "128",
                            cy: "128",
                            r: "48",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 568,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 566,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 559,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Ktor = ({ width = 65, height = 60 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 128 128",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("defs", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                            id: "a",
                            x1: "34.379",
                            x2: "64.784",
                            y1: "21.379",
                            y2: "51.784",
                            gradientTransform: "translate(0 40) scale(.45714)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#07c3f2"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 582,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#6b57ff"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 583,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 581,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                            id: "b",
                            x1: "65.723",
                            x2: "94.471",
                            y1: "52.723",
                            y2: "81.471",
                            gradientTransform: "translate(0 40) scale(.45714)",
                            gradientUnits: "userSpaceOnUse",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: "0",
                                    stopColor: "#b74af7"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 586,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: ".492",
                                    stopColor: "#fc801d"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 587,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                                    offset: "1",
                                    stopColor: "#fc801d"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                                    lineNumber: 588,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 585,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 580,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "url(#a)",
                    d: "M36.57 56.914 22.855 43.2l-7.238 7.242-6.472 6.473 13.71 13.715Zm0 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 591,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "url(#b)",
                    d: "m22.855 70.629 6.832 6.828 6.883 6.887 13.715-13.715L36.57 56.914Zm0 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 592,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M36.57 56.914H22.855V70.63H36.57Zm39.188-2.266H70.82l-7.367 7.997v-7.997H59.43v18.286h4.023v-5.59l2.117-2.192 5.668 7.782h4.832l-7.785-10.528Zm5.773.625H77.56v3.579h-1.672v3.394h1.672v6.637c0 3.238 1.644 4.207 4.074 4.207a5.859 5.859 0 0 0 3.137-.813v-3.183a4.04 4.04 0 0 1-1.961.496c-.887 0-1.278-.445-1.278-1.36v-5.984h3.29v-3.394h-3.29Zm12.223 3.239c-4.363 0-7.602 3.265-7.602 7.289v.05c0 4.024 3.215 7.239 7.551 7.239 4.363 0 7.602-3.266 7.602-7.29v-.05c0-4.023-3.215-7.238-7.551-7.238Zm3.633 7.34c0 2.066-1.36 3.816-3.633 3.816-2.192 0-3.684-1.805-3.684-3.867v-.051c0-2.066 1.36-3.816 3.633-3.816 2.195 0 3.684 1.804 3.684 3.867Zm10.011-4.098v-2.82h-3.972v14h3.972v-5.172c0-3.344 1.618-4.938 4.258-4.938h.207v-4.152c-2.351-.106-3.656 1.148-4.465 3.082Zm0 0"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 593,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 578,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Flutter = ({ width = 65, height = 65 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 128 128",
            width: width,
            height: height,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                    fill: "#3FB6D3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                        d: "M12.3 64.2L76.3 0h39.4L32.1 83.6zM76.3 128h39.4L81.6 93.9l34.1-34.8H76.3L42.2 93.5z"
                    }, void 0, false, {
                        fileName: "[project]/src/components/icons/SkillIcons.jsx",
                        lineNumber: 604,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 604,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#27AACD",
                    d: "M81.6 93.9l-20-20-19.4 19.6 19.4 19.6z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 604,
                    columnNumber: 140
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "#19599A",
                    d: "M115.7 128L81.6 93.9l-20 19.2L76.3 128z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 604,
                    columnNumber: 211
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("linearGradient", {
                    id: "flutter-original-a",
                    gradientUnits: "userSpaceOnUse",
                    x1: "59.365",
                    y1: "116.36",
                    x2: "86.825",
                    y2: "99.399",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "0",
                            stopColor: "#1b4e94"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 604,
                            columnNumber: 402
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: ".63",
                            stopColor: "#1a5497"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 604,
                            columnNumber: 446
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("stop", {
                            offset: "1",
                            stopColor: "#195a9b"
                        }, void 0, false, {
                            fileName: "[project]/src/components/icons/SkillIcons.jsx",
                            lineNumber: 604,
                            columnNumber: 492
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 604,
                    columnNumber: 283
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    fill: "url(#flutter-original-a)",
                    d: "M61.6 113.1l30.8-8.4-10.8-10.8z"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 604,
                    columnNumber: 553
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 603,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const Rust = ({ width = 65, height = 55 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
            viewBox: "0 0 128 128",
            width: width,
            height: height,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("g", {
                fill: "#CE412B",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                    d: "M62.96.242c-.232.135-1.203 1.528-2.16 3.097-2.4 3.94-2.426 3.942-5.65.55-2.098-2.208-2.605-2.612-3.28-2.607-.44.002-.995.152-1.235.332-.24.18-.916 1.612-1.504 3.183-1.346 3.6-1.41 3.715-2.156 3.86-.46.086-1.343-.407-3.463-1.929-1.565-1.125-3.1-2.045-3.411-2.045-1.291 0-1.655.706-2.27 4.4-.78 4.697-.754 4.681-4.988 2.758-1.71-.776-3.33-1.41-3.603-1.41-.274 0-.792.293-1.15.652-.652.652-.653.655-.475 4.246l.178 3.595-.68.364c-.602.322-1.017.283-3.684-.348-3.48-.822-4.216-.8-4.92.15l-.516.693.692 2.964c.38 1.63.745 3.2.814 3.487.067.287-.05.746-.26 1.02-.348.448-.717.49-3.94.44-5.452-.086-5.761.382-3.51 5.3.718 1.56 1.305 2.98 1.305 3.15 0 .898-.717 1.224-3.794 1.727-1.722.28-3.218.51-3.326.51-.107 0-.43.235-.717.522-.937.936-.671 1.816 1.453 4.814 2.646 3.735 2.642 3.75-1.73 5.421-4.971 1.902-5.072 2.37-1.287 5.96 3.525 3.344 3.53 3.295-.461 5.804C.208 62.8.162 62.846.085 63.876c-.093 1.253-.071 1.275 3.538 3.48 3.57 2.18 3.57 2.246.067 5.56C-.078 76.48.038 77 5.013 78.877c4.347 1.64 4.353 1.66 1.702 5.394-1.502 2.117-1.981 3-1.981 3.653 0 1.223.637 1.535 4.44 2.174 3.206.54 3.92.857 3.92 1.741 0 .182-.588 1.612-1.307 3.177-2.236 4.87-1.981 5.275 3.31 5.275 4.93 0 4.799-.15 3.737 4.294-.8 3.35-.813 3.992-.088 4.715.554.556 1.6.494 4.87-.289 2.499-.596 2.937-.637 3.516-.328l.66.354-.177 3.594c-.178 3.593-.177 3.595.475 4.248.358.36.884.652 1.165.652.282 0 1.903-.63 3.604-1.404 4.22-1.916 4.194-1.932 4.973 2.75.617 3.711.977 4.4 2.294 4.4.327 0 1.83-.88 3.34-1.958 2.654-1.893 3.342-2.19 4.049-1.74.182.115.89 1.67 1.572 3.455 1.003 2.625 1.37 3.31 1.929 3.576 1.062.51 1.72.1 4.218-2.62 3.016-3.286 3.14-3.27 5.602.72 2.72 4.406 3.424 4.396 6.212-.089 2.402-3.864 2.374-3.862 5.621-.47 2.157 2.25 2.616 2.61 3.343 2.61.464 0 1.019-.175 1.23-.388.214-.213.92-1.786 1.568-3.496.649-1.71 1.321-3.2 1.495-3.31.687-.436 1.398-.13 4.048 1.752 1.56 1.108 3.028 1.96 3.377 1.96 1.296 0 1.764-.92 2.302-4.535.46-3.082.554-3.378 1.16-3.685.596-.302.954-.2 3.75 1.07 1.701.77 3.323 1.402 3.604 1.402.282 0 .816-.302 1.184-.672l.672-.67-.184-3.448c-.177-3.29-.16-3.468.364-3.943.54-.488.596-.486 3.615.204 3.656.835 4.338.857 5.025.17.671-.67.664-.818-.254-4.69-1.03-4.346-1.168-4.19 3.78-4.19 3.374 0 3.75-.049 4.18-.523.718-.793.547-1.702-.896-4.779-.729-1.55-1.32-2.96-1.315-3.135.024-.914.743-1.227 4.065-1.767 2.033-.329 3.553-.71 3.829-.96.923-.833.584-1.918-1.523-4.873-2.642-3.703-2.63-3.738 1.599-5.297 5.064-1.866 5.209-2.488 1.419-6.09-3.51-3.335-3.512-3.317.333-5.677 4.648-2.853 4.655-3.496.082-6.335-3.933-2.44-3.93-2.406-.405-5.753 3.78-3.593 3.678-4.063-1.295-5.965-4.388-1.679-4.402-1.72-1.735-5.38 1.588-2.18 1.982-2.903 1.982-3.65 0-1.306-.586-1.598-4.436-2.22-3.216-.52-3.924-.835-3.924-1.75 0-.174.588-1.574 1.307-3.113 1.406-3.013 1.604-4.22.808-4.94-.428-.387-1-.443-4.067-.392-3.208.054-3.618.008-4.063-.439-.486-.488-.48-.557.278-3.725.931-3.88.935-3.975.17-4.694-.777-.73-1.262-.718-4.826.121-2.597.612-3.027.653-3.617.337l-.67-.36.185-3.582.186-3.58-.67-.67c-.369-.37-.891-.67-1.163-.67-.27 0-1.884.64-3.583 1.421-2.838 1.306-3.143 1.393-3.757 1.072-.612-.32-.714-.637-1.237-3.829-.603-3.693-.977-4.412-2.288-4.412-.311 0-1.853.925-3.426 2.055-2.584 1.856-2.93 2.032-3.574 1.807-.533-.186-.843-.59-1.221-1.599-.28-.742-.817-2.172-1.194-3.177-.762-2.028-1.187-2.482-2.328-2.482-.637 0-1.213.458-3.28 2.604-3.25 3.375-3.261 3.374-5.65-.545C66.073 1.78 65.075.382 64.81.24c-.597-.32-1.3-.32-1.85.002m2.96 11.798c2.83 2.014 1.326 6.75-2.144 6.75-3.368 0-5.064-4.057-2.66-6.36 1.358-1.3 3.304-1.459 4.805-.39m-3.558 12.507c1.855.705 2.616.282 6.852-3.8l3.182-3.07 1.347.18c4.225.56 12.627 4.25 17.455 7.666 4.436 3.14 10.332 9.534 12.845 13.93l.537.942-2.38 5.364c-1.31 2.95-2.382 5.673-2.382 6.053 0 .878.576 2.267 1.13 2.726.234.195 2.457 1.265 4.939 2.378l4.51 2.025.178 1.148c.23 1.495.26 5.167.052 6.21l-.163.816h-2.575c-2.987 0-2.756-.267-2.918 3.396-.118 2.656-.76 4.124-2.22 5.075-2.377 1.551-6.304 1.27-7.97-.57-.255-.284-.752-1.705-1.105-3.16-1.03-4.254-2.413-6.64-5.193-8.965-.878-.733-1.595-1.418-1.595-1.522 0-.102.965-.915 2.145-1.803 4.298-3.24 6.77-7.012 7.04-10.747.519-7.126-5.158-13.767-13.602-15.92-2.002-.51-2.857-.526-27.624-.526-14.057 0-25.56-.092-25.56-.204 0-.263 3.125-3.295 4.965-4.816 5.054-4.178 11.618-7.465 18.417-9.22l2.35-.61 3.34 3.387c1.839 1.863 3.64 3.5 4.003 3.637M20.3 46.34c1.539 1.008 2.17 3.54 1.26 5.062-1.405 2.356-4.966 2.455-6.373.178-2.046-3.309 1.895-7.349 5.113-5.24m90.672.13c4.026 2.454.906 8.493-3.404 6.586-2.877-1.273-2.97-5.206-.155-6.64 1.174-.6 2.523-.579 3.56.053M32.163 61.5v15.02h-13.28l-.526-2.285c-1.036-4.5-1.472-9.156-1.211-12.969l.182-2.679 4.565-2.047c2.864-1.283 4.706-2.262 4.943-2.625 1.038-1.584.94-2.715-.518-5.933l-.68-1.502h6.523V61.5M70.39 47.132c2.843.74 4.345 2.245 4.349 4.355.002 1.55-.765 2.52-2.67 3.38-1.348.61-1.562.625-10.063.708l-8.686.084v-8.92h7.782c6.078 0 8.112.086 9.288.393m-2.934 21.554c1.41.392 3.076 1.616 3.93 2.888.898 1.337 1.423 3.076 2.667 8.836 1.05 4.87 1.727 6.46 3.62 8.532 2.345 2.566 1.8 2.466 13.514 2.466 5.61 0 10.198.09 10.198.2 0 .197-3.863 4.764-4.03 4.764-.048 0-2.066-.422-4.484-.939-6.829-1.458-7.075-1.287-8.642 6.032l-1.008 4.702-.91.448c-1.518.75-6.453 2.292-9.01 2.82-4.228.87-8.828 1.162-12.871.821-6.893-.585-16.02-3.259-16.377-4.8-.075-.327-.535-2.443-1.018-4.704-.485-2.26-1.074-4.404-1.31-4.764-1.13-1.724-2.318-1.83-7.547-.674-1.98.44-3.708.796-3.84.796-.248 0-3.923-4.249-3.923-4.535 0-.09 8.728-.194 19.396-.23l19.395-.066.07-6.89c.05-4.865-.018-6.997-.23-7.25-.234-.284-1.485-.358-6.011-.358H53.32v-8.36l6.597.001c3.626.002 7.02.12 7.539.264M37.57 100.02c3.084 1.88 1.605 6.804-2.043 6.8-3.74 0-5.127-4.88-1.94-6.826 1.055-.643 2.908-.63 3.983.026m56.48.206c1.512 1.108 2.015 3.413 1.079 4.95-2.46 4.034-8.612.827-6.557-3.419 1.01-2.085 3.695-2.837 5.478-1.53"
                }, void 0, false, {
                    fileName: "[project]/src/components/icons/SkillIcons.jsx",
                    lineNumber: 615,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/icons/SkillIcons.jsx",
                lineNumber: 614,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/icons/SkillIcons.jsx",
            lineNumber: 613,
            columnNumber: 13
        }, this)
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ReactJs;
;
}}),
"[project]/src/data/skills.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/SkillIcons.jsx [ssr] (ecmascript)");
;
;
const skills = [
    {
        id: 3,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Kotlin"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 49,
            columnNumber: 9
        }, this),
        name: "Kotlin",
        style: {
            shadowColor: "#B14F97"
        }
    },
    {
        id: 4,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Java"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 57,
            columnNumber: 9
        }, this),
        name: "Java",
        style: {
            shadowColor: "#3481d3"
        }
    },
    {
        id: 5,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["AndroidStudio"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 65,
            columnNumber: 9
        }, this),
        name: "Android Studio",
        style: {
            shadowColor: "#3DDC84"
        }
    },
    {
        id: 6,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Compose"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 73,
            columnNumber: 9
        }, this),
        name: "Jetpack Compose",
        style: {
            shadowColor: "#38BF6E"
        }
    },
    {
        id: 7,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Flutter"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 81,
            columnNumber: 9
        }, this),
        name: "Flutter",
        style: {
            shadowColor: "#19599A"
        }
    },
    {
        id: 8,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MaterialUI"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 89,
            columnNumber: 9
        }, this),
        name: "MaterialUI",
        style: {
            shadowColor: "#1266A9"
        }
    },
    {
        id: 9,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["SQLite"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 97,
            columnNumber: 9
        }, this),
        name: "SQLite",
        style: {
            shadowColor: "#76BEE8"
        }
    },
    {
        id: 10,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["FireBase"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 105,
            columnNumber: 9
        }, this),
        name: "Firebase",
        style: {
            shadowColor: "#d49a35"
        }
    },
    {
        id: 11,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MongoDB"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 113,
            columnNumber: 9
        }, this),
        name: "MongoDB",
        style: {
            shadowColor: "#4FAA41"
        }
    },
    {
        id: 12,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostMan"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 121,
            columnNumber: 9
        }, this),
        name: "PostMan",
        style: {
            shadowColor: "#FF6C37"
        }
    },
    {
        id: 13,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Git"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 129,
            columnNumber: 9
        }, this),
        name: "Git",
        style: {
            shadowColor: "#F34F29"
        }
    },
    {
        id: 14,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["GitHub"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 137,
            columnNumber: 9
        }, this),
        name: "GitHub",
        style: {
            shadowColor: "#5c5a5a"
        }
    },
    {
        id: 15,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PHP"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 145,
            columnNumber: 9
        }, this),
        name: "PHP",
        style: {
            shadowColor: "#9597c8"
        }
    },
    {
        id: 16,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Python"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 153,
            columnNumber: 9
        }, this),
        name: "Python",
        style: {
            shadowColor: "#ddbe4e"
        }
    },
    {
        id: 17,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["C"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 161,
            columnNumber: 9
        }, this),
        name: "C",
        style: {
            shadowColor: "#3949AB"
        }
    },
    {
        id: 18,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CPlusPlus"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 169,
            columnNumber: 9
        }, this),
        name: "C++",
        style: {
            shadowColor: "#004482"
        }
    },
    {
        id: 19,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["CSharp"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 177,
            columnNumber: 9
        }, this),
        name: "C#",
        style: {
            shadowColor: "#A179DC"
        }
    },
    {
        id: 30,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Rust"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 185,
            columnNumber: 9
        }, this),
        name: "Rust",
        style: {
            shadowColor: "#CE412B"
        }
    },
    {
        id: 20,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["MySQL"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 193,
            columnNumber: 9
        }, this),
        name: "MySQL",
        style: {
            shadowColor: "#F29111"
        }
    },
    {
        id: 21,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["PostGreSql"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 201,
            columnNumber: 9
        }, this),
        name: "PostgreSql",
        style: {
            shadowColor: "#336791"
        }
    },
    {
        id: 22,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["VSCode"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 209,
            columnNumber: 9
        }, this),
        name: "VS Code",
        style: {
            shadowColor: "#1D95E5"
        }
    },
    {
        id: 23,
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$SkillIcons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Bash"], {}, void 0, false, {
            fileName: "[project]/src/data/skills.jsx",
            lineNumber: 217,
            columnNumber: 9
        }, this),
        name: "Bash",
        style: {
            shadowColor: "#4dbc85"
        }
    }
];
const __TURBOPACK__default__export__ = skills;
}}),
"[project]/src/components/Skill.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
;
;
;
const Skill = ({ skill: { style, name, icon } })=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        sx: {
            width: '100%',
            height: '100%',
            background: `linear-gradient(135deg, ${style.bgStart}, ${style.bgEnd})`,
            borderRadius: 3,
            boxShadow: `0 0 10px ${style.shadowColor}`,
            transition: 'transform 0.3s, box-shadow 0.3s',
            '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: `0 0 25px ${style.shadowColor}`
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 3,
            px: 2
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    color: theme.palette.primary.main
                },
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Skill.jsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "subtitle2",
                sx: {
                    mt: 1,
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    textAlign: 'center',
                    fontSize: {
                        sx: 12,
                        sm: 16,
                        md: 18
                    }
                },
                children: name
            }, void 0, false, {
                fileName: "[project]/src/components/Skill.jsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Skill.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Skill;
}}),
"[project]/src/sections/Skills.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// eslint-disable-next-line no-unused-vars
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/framer-motion [external] (framer-motion, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/skills.jsx [ssr] (ecmascript)"); // your skill list
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skill$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Skill.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$framer$2d$motion__$5b$external$5d$__$28$framer$2d$motion$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const Skills = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const half = Math.ceil(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].length / 2);
    const row1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].slice(0, half);
    const row2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"].slice(half);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "Skills",
        sx: {
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            py: 6,
            background: `${theme.palette.background[500]}`
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                variant: "h4",
                sx: {
                    color: theme.palette.primary.light,
                    textAlign: 'center',
                    fontWeight: 700,
                    mb: 4
                },
                children: "My Tech Stack"
            }, void 0, false, {
                fileName: "[project]/src/sections/Skills.jsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SkillsRow, {
                skills: row1,
                direction: "left"
            }, void 0, false, {
                fileName: "[project]/src/sections/Skills.jsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(SkillsRow, {
                skills: row2,
                direction: "right"
            }, void 0, false, {
                fileName: "[project]/src/sections/Skills.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/sections/Skills.jsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Skills;
const SkillsRow = ({ skills, direction = 'left' })=>{
    const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            overflow: 'hidden',
            width: '100%',
            py: 2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                display: 'flex',
                gap: 4,
                animation: `${animationName} 40s linear infinite`,
                width: 'fit-content'
            },
            children: [
                ...skills,
                ...skills
            ].map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    sx: {
                        flex: '0 0 auto',
                        width: {
                            xs: 120,
                            sm: 140,
                            md: 180
                        },
                        height: {
                            xs: 120,
                            sm: 140,
                            md: 180
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Skill$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        skill: skill
                    }, void 0, false, {
                        fileName: "[project]/src/sections/Skills.jsx",
                        lineNumber: 73,
                        columnNumber: 13
                    }, this)
                }, index, false, {
                    fileName: "[project]/src/sections/Skills.jsx",
                    lineNumber: 65,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/src/sections/Skills.jsx",
            lineNumber: 56,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Skills.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
};
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/sections/Experience.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Grid/Grid.js [ssr] (ecmascript) <export default as Grid>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
;
;
;
;
;
const experiences = [
    {
        company: "Argon IT Services LLP",
        position: "Mobile Software Developer",
        link: "https://www.argonitservices.com/",
        duration: "May 2024 - Present",
        description: "Worked as an Android Developer using Kotlin and Java to build scalable and high-performing mobile applications from scratch. Contributed to designing and implementing responsive user interfaces while ensuring seamless user experience and smooth performance. Gained expertise in modern mobile application development practices, collaborating with the team to deliver robust digital solutions.",
        skills: [
            "Kotlin",
            "Android",
            "Compose",
            "Kotlin/Compose Multiplatform",
            "Firebase",
            "Retrofit/ktor",
            "Room",
            "Dagger Hilt/Koin"
        ]
    }
];
function ExperienceSection() {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 800,
            once: true
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "experience",
        sx: {
            pt: 10,
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.default}, ${theme.palette.background.paper})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                width: '100%',
                mx: 'auto',
                px: 2,
                maxWidth: {
                    xs: 1200,
                    md: 'auto'
                }
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h4",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "text.secondary",
                    mb: 4,
                    children: "Professional Experience"
                }, void 0, false, {
                    fileName: "[project]/src/sections/Experience.jsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                    container: true,
                    columns: 1,
                    children: experiences.map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Grid$2f$Grid$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Grid$3e$__["Grid"], {
                            size: {
                                xs: 1
                            },
                            "data-aos": "fade-up",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
                                sx: {
                                    borderRadius: 2,
                                    boxShadow: 3
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                        sx: {
                                            backgroundColor: theme.palette.primary.main,
                                            color: '#fff',
                                            p: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "h6",
                                                sx: {
                                                    display: 'flex',
                                                    alignItems: 'center'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            marginRight: 8
                                                        },
                                                        children: "💼"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/Experience.jsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                                                        href: exp.link,
                                                        target: "_blank",
                                                        rel: "noopener noreferrer",
                                                        underline: "hover",
                                                        color: "inherit",
                                                        children: exp.company
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/sections/Experience.jsx",
                                                        lineNumber: 65,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/sections/Experience.jsx",
                                                lineNumber: 63,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                sx: {
                                                    opacity: 0.9
                                                },
                                                children: exp.position
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/Experience.jsx",
                                                lineNumber: 69,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/Experience.jsx",
                                        lineNumber: 62,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                color: "text.secondary",
                                                gutterBottom: true,
                                                children: exp.duration
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/Experience.jsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                                                variant: "body2",
                                                color: "text.primary",
                                                mb: 2,
                                                children: exp.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/Experience.jsx",
                                                lineNumber: 78,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                sx: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: 1
                                                },
                                                children: exp.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                                        label: skill,
                                                        size: "small",
                                                        sx: {
                                                            backgroundColor: theme.palette.default
                                                        }
                                                    }, i, false, {
                                                        fileName: "[project]/src/sections/Experience.jsx",
                                                        lineNumber: 84,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/sections/Experience.jsx",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/sections/Experience.jsx",
                                        lineNumber: 74,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/sections/Experience.jsx",
                                lineNumber: 61,
                                columnNumber: 15
                            }, this)
                        }, index, false, {
                            fileName: "[project]/src/sections/Experience.jsx",
                            lineNumber: 60,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/sections/Experience.jsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/Experience.jsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Experience.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ExperienceSection;
}}),
"[project]/src/components/Project-detail.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Card/Card.js [ssr] (ecmascript) <export default as Card>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardMedia$2f$CardMedia$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardMedia$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardMedia/CardMedia.js [ssr] (ecmascript) <export default as CardMedia>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CardContent/CardContent.js [ssr] (ecmascript) <export default as CardContent>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Chip/Chip.js [ssr] (ecmascript) <export default as Chip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Link/Link.js [ssr] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/IconButton/IconButton.js [ssr] (ecmascript) <export default as IconButton>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/external-link.js [ssr] (ecmascript) <export default as ExternalLink>");
;
;
;
const ProjectDetails = ({ project: { img, name, demo, description, technologies }, layoutType = 'default', theme })=>{
    const isDefault = layoutType === 'default';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Card$2f$Card$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Card$3e$__["Card"], {
        "data-aos": "fade-up",
        sx: {
            mx: 'auto',
            display: 'flex',
            flexDirection: {
                xs: 'column',
                md: 'row'
            },
            maxWidth: '1200px',
            borderRadius: 3,
            boxShadow: 3,
            my: 2,
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                sx: {
                    width: {
                        xs: '100%',
                        md: '50%'
                    },
                    order: isDefault ? 0 : 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: {
                        xs: 3,
                        lg: 6
                    },
                    borderRight: {
                        md: isDefault ? `1px solid ${theme.palette.divider}` : 'none'
                    },
                    borderLeft: {
                        md: !isDefault ? `1px solid ${theme.palette.divider}` : 'none'
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"], {
                    href: demo,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardMedia$2f$CardMedia$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardMedia$3e$__["CardMedia"], {
                        component: "img",
                        image: img,
                        alt: `${name} preview`,
                        sx: {
                            borderRadius: 2,
                            boxShadow: 3,
                            objectFit: 'cover',
                            transition: 'transform 0.5s',
                            '&:hover': {
                                transform: 'scale(1.05)'
                            },
                            width: '100%',
                            height: '100%'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project-detail.jsx",
                        lineNumber: 42,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Project-detail.jsx",
                    lineNumber: 41,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Project-detail.jsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CardContent$2f$CardContent$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CardContent$3e$__["CardContent"], {
                sx: {
                    width: {
                        xs: '100%',
                        md: '50%'
                    },
                    order: isDefault ? 1 : 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    p: {
                        xs: 3,
                        lg: 6
                    }
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "h6",
                        sx: {
                            color: 'text.primary',
                            fontWeight: 600
                        },
                        children: name
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project-detail.jsx",
                        lineNumber: 72,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                        variant: "body1",
                        sx: {
                            color: 'text.secondary'
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project-detail.jsx",
                        lineNumber: 76,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 1
                        },
                        children: technologies?.map((tech, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Chip$2f$Chip$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Chip$3e$__["Chip"], {
                                label: tech,
                                variant: "outlined"
                            }, idx, false, {
                                fileName: "[project]/src/components/Project-detail.jsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project-detail.jsx",
                        lineNumber: 80,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        sx: {
                            mt: 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$IconButton$2f$IconButton$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IconButton$3e$__["IconButton"], {
                            component: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Link$2f$Link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
                            href: demo,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            sx: {
                                p: 1,
                                borderRadius: 2,
                                color: 'grey.600',
                                '&:hover': {
                                    bgcolor: 'grey.100'
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {}, void 0, false, {
                                fileName: "[project]/src/components/Project-detail.jsx",
                                lineNumber: 99,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Project-detail.jsx",
                            lineNumber: 87,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Project-detail.jsx",
                        lineNumber: 86,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Project-detail.jsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Project-detail.jsx",
        lineNumber: 11,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = ProjectDetails;
}}),
"[project]/src/data/projects.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const projects = [
    {
        img: "./gradnet.png",
        name: "GradNet Graduate's Network",
        demo: "./gradnet.png",
        description: "GradNet is a platform that connects recent graduates with employers. It allows employers to post jobs and search for candidates. It also allows candidates to search for jobs and apply to them.",
        technologies: [
            "Android",
            "IOS",
            "Kotlin",
            "Compose",
            "Compose multiplatform"
        ]
    },
    {
        img: "./dialer.png",
        name: "IPhone's Dialer",
        demo: "https://play.google.com/store/apps/details?id=com.contact.idialer.phonecaller",
        description: `Caller - Phone Contacts Dialer: Enhance Your Calling Experience

Transform your phone calling with Phone Dialer, look like iPhone style dialer, the ultimate Contacts & Phone Dialer app that combines style, efficiency, and advanced features for a seamless communication experience.`,
        technologies: [
            "Android",
            "Kotlin",
            "Compose",
            "MVVM",
            "Cupportino Design",
            "Hilt",
            "Coroutines",
            "Flow",
            "Room"
        ]
    },
    {
        img: "./testers.png",
        name: "20 Testers Community",
        demo: "https://play.google.com/store/apps/details?id=com.testingcommunity.twentytesters",
        description: `20 Testers Community is the perfect platform to connect app developers and testers, helping you get valuable feedback for your app. Secure 20 testers for 14 days, completely free, and ensure your app is ready for the Play Store.`,
        technologies: [
            "Android",
            "Kotlin",
            "Compose",
            "MVVM",
            "Hilt",
            "Coroutines",
            "Flow",
            "Retrofit",
            "API",
            "Firebase",
            "Push Notifications"
        ]
    }
];
const __TURBOPACK__default__export__ = projects;
}}),
"[project]/src/sections/Projects.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2d$detail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Project-detail.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/projects.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/aos [external] (aos, cjs)");
;
;
;
;
;
;
const Projects = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$externals$5d2f$aos__$5b$external$5d$__$28$aos$2c$__cjs$29$__["default"].init({
            duration: 800,
            once: true
        });
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "experience",
        sx: {
            paddingTop: 10,
            minHeight: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            color: '#c0c0c0c',
            background: `linear-gradient(to bottom, ${theme.palette.background.paper}, ${theme.palette.background.default}, ${theme.palette.background.default})`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "section",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h4",
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "text.secondary",
                    mb: 4,
                    children: "Check Out Some of my Projects"
                }, void 0, false, {
                    fileName: "[project]/src/sections/Projects.jsx",
                    lineNumber: 27,
                    columnNumber: 17
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$projects$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"].map((project, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Project$2d$detail$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                        project: project,
                        layoutType: index % 2 === 0 ? 'default' : 'reverse',
                        theme: theme
                    }, index, false, {
                        fileName: "[project]/src/sections/Projects.jsx",
                        lineNumber: 33,
                        columnNumber: 25
                    }, this);
                })
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/Projects.jsx",
            lineNumber: 26,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Projects.jsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Projects;
}}),
"[externals]/axios [external] (axios, esm_import)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
const mod = await __turbopack_context__.y("axios");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/src/utils/formValidation.js [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "validateForm": (()=>validateForm)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/axios [external] (axios, esm_import)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/react-toastify [external] (react-toastify, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__
]);
([__TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("src/utils/formValidation.js")}`;
    }
};
;
;
const isEmailValid = (email)=>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const isRequired = (value)=>value === "" ? false : true;
const isBetween = (length, min, max)=>length < min || length > max ? false : true;
const checkName = (name)=>{
    const min = 3, max = 25;
    if (!isRequired(name)) return "Name cannot be blank.";
    else if (!isBetween(name.length, min, max)) return `Name must be between ${min} and ${max} characters.`;
    return true;
};
const checkEmail = (email)=>{
    if (!isRequired(email)) return "Email cannot be blank.";
    else if (!isEmailValid(email)) return "Email is not valid.";
    return true;
};
const checkMessage = (message)=>{
    const min = 3, max = 1000;
    if (!isRequired(message)) return "Message cannot be blank.";
    else if (!isBetween(message.length, min, max)) return `Message must be between ${min} and ${max} characters.`;
    return true;
};
const validateForm = async (formData, setFormData, setErrData, initialFormData, initialErrData)=>{
    const validName = checkName(formData.name.trim());
    const validEmail = checkEmail(formData.email.trim());
    const validMessage = checkMessage(formData.message.trim());
    if (typeof validName !== "boolean") setErrData((prevErrData)=>({
            ...prevErrData,
            nameError: validName
        }));
    else setErrData((prevErrData)=>({
            ...prevErrData,
            nameError: ""
        }));
    if (typeof validEmail !== "boolean") setErrData((prevErrData)=>({
            ...prevErrData,
            emailError: validEmail
        }));
    else setErrData((prevErrData)=>({
            ...prevErrData,
            emailError: ""
        }));
    if (typeof validMessage !== "boolean") setErrData((prevErrData)=>({
            ...prevErrData,
            messageError: validMessage
        }));
    else setErrData((prevErrData)=>({
            ...prevErrData,
            messageError: ""
        }));
    if (typeof validName === "boolean" && typeof validEmail === "boolean" && typeof validMessage === "boolean") {
        const submitionFormData = new FormData();
        submitionFormData.append("name", formData.name.trim());
        submitionFormData.append("email", formData.email.trim());
        submitionFormData.append("message", formData.message.trim());
        submitionFormData.append("_subject", "New submission!");
        submitionFormData.append("_template", "table");
        submitionFormData.append("submit", "submit");
        submitionFormData.append("_captcha", "false");
        try {
            const response = await __TURBOPACK__imported__module__$5b$externals$5d2f$axios__$5b$external$5d$__$28$axios$2c$__esm_import$29$__["default"].post(__TURBOPACK__import$2e$meta__.env.VITE_GETFORM_URL, submitionFormData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (response.status === 200) {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].success("Form submitted successfully!", {
                    position: "top-right",
                    autoClose: 3000
                });
            } else {
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].error("Submission failed!", {
                    position: __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].POSITION.TOP_RIGHT,
                    autoClose: 3000
                });
                __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].error("Try again later !", {
                    position: __TURBOPACK__imported__module__$5b$externals$5d2f$react$2d$toastify__$5b$external$5d$__$28$react$2d$toastify$2c$__esm_import$29$__["toast"].POSITION.TOP_RIGHT,
                    autoClose: 3000
                });
            }
            setFormData(initialFormData);
            setErrData(initialErrData);
        } catch (error) {
            console.error("Submission error:", error);
        }
    }
};
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/sections/Contact.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons/Icons.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/formValidation.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Button/Button.js [ssr] (ecmascript) <export default as Button>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/TextField/TextField.js [ssr] (ecmascript) <export default as TextField>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Typography/Typography.js [ssr] (ecmascript) <export default as Typography>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/styles/useTheme.js [ssr] (ecmascript) <export default as useTheme>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Container/Container.js [ssr] (ecmascript) <export default as Container>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/InputAdornment/InputAdornment.js [ssr] (ecmascript) <export default as InputAdornment>");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
const Contact = ()=>{
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$styles$2f$useTheme$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__useTheme$3e$__["useTheme"])();
    const initialFormData = {
        name: '',
        email: '',
        message: ''
    };
    const initialErrData = {
        nameError: '',
        emailError: '',
        messageError: ''
    };
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialFormData);
    const [errData, setErrData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(initialErrData);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        setFormData(initialFormData);
        setErrData(initialErrData);
    }, []);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$formValidation$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["validateForm"])(formData, setFormData, setErrData, initialFormData, initialErrData);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        id: "Contact",
        sx: {
            pt: 10,
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            background: `linear-gradient(to bottom, ${theme.palette.background.default}, ${theme.palette.background.paper})`,
            color: theme.palette.text.primary
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Container$2f$Container$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Container$3e$__["Container"], {
            maxWidth: "md",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Typography$2f$Typography$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Typography$3e$__["Typography"], {
                    variant: "h4",
                    gutterBottom: true,
                    sx: {
                        fontWeight: 'bold',
                        mb: 4,
                        color: theme.palette.text.primary
                    },
                    children: "Get in touch with me"
                }, void 0, false, {
                    fileName: "[project]/src/sections/Contact.jsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                name: "name",
                                label: "Enter Your Name",
                                value: formData.name,
                                onChange: handleChange,
                                error: Boolean(errData.nameError),
                                helperText: errData.nameError,
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Person"], {}, void 0, false, {
                                            fileName: "[project]/src/sections/Contact.jsx",
                                            lineNumber: 76,
                                            columnNumber: 41
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/Contact.jsx",
                                        lineNumber: 75,
                                        columnNumber: 37
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                type: "email",
                                name: "email",
                                label: "Enter Your Email",
                                value: formData.email,
                                onChange: handleChange,
                                error: Boolean(errData.emailError),
                                helperText: errData.emailError,
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "start",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["GMail"], {}, void 0, false, {
                                            fileName: "[project]/src/sections/Contact.jsx",
                                            lineNumber: 93,
                                            columnNumber: 41
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/Contact.jsx",
                                        lineNumber: 92,
                                        columnNumber: 37
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$TextField$2f$TextField$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TextField$3e$__["TextField"], {
                                fullWidth: true,
                                multiline: true,
                                minRows: 6,
                                name: "message",
                                label: "Your Message",
                                value: formData.message,
                                onChange: handleChange,
                                error: Boolean(errData.messageError),
                                helperText: errData.messageError,
                                InputProps: {
                                    startAdornment: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$InputAdornment$2f$InputAdornment$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__InputAdornment$3e$__["InputAdornment"], {
                                        position: "start",
                                        sx: {
                                            alignSelf: 'start',
                                            mt: 1.5
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Chat"], {}, void 0, false, {
                                            fileName: "[project]/src/sections/Contact.jsx",
                                            lineNumber: 114,
                                            columnNumber: 41
                                        }, void 0)
                                    }, void 0, false, {
                                        fileName: "[project]/src/sections/Contact.jsx",
                                        lineNumber: 110,
                                        columnNumber: 37
                                    }, void 0)
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 98,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Button$2f$Button$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Button$3e$__["Button"], {
                                variant: "contained",
                                type: "submit",
                                sx: {
                                    alignSelf: 'flex-start',
                                    px: 5,
                                    py: 1.5,
                                    fontWeight: 'bold',
                                    background: `linear-gradient(to right, ${theme.palette.primary.light}, ${theme.palette.primary.dark})`,
                                    color: theme.palette.primary.contrastText,
                                    '&:hover': {
                                        background: `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.main})`
                                    }
                                },
                                endIcon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                    sx: {
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.1)'
                                        }
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2f$Icons$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["Submit"], {}, void 0, false, {
                                        fileName: "[project]/src/sections/Contact.jsx",
                                        lineNumber: 142,
                                        columnNumber: 37
                                    }, void 0)
                                }, void 0, false, {
                                    fileName: "[project]/src/sections/Contact.jsx",
                                    lineNumber: 134,
                                    columnNumber: 33
                                }, void 0),
                                children: "Let's Connect"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 119,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "_subject",
                                value: "New submission!"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "_template",
                                value: "table"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 149,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                type: "hidden",
                                name: "_captcha",
                                value: "false"
                            }, void 0, false, {
                                fileName: "[project]/src/sections/Contact.jsx",
                                lineNumber: 150,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/sections/Contact.jsx",
                        lineNumber: 64,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/sections/Contact.jsx",
                    lineNumber: 63,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/sections/Contact.jsx",
            lineNumber: 51,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/sections/Contact.jsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Contact;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/src/pages/index.jsx [ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, a: __turbopack_async_module__ } = __turbopack_context__;
__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
// pages/index.jsx
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Home$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/Home.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$About$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/About.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/Skills.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Experience$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/Experience.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Projects$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/Projects.jsx [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/sections/Contact.jsx [ssr] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__
]);
([__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__);
;
;
;
;
;
;
;
function HomePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "home",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Home$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 13,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "about",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$About$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 14,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "skills",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Skills$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 15,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "experience",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Experience$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 16,
                    columnNumber: 32
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "projects",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Projects$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 17,
                    columnNumber: 30
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("section", {
                id: "contact",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$sections$2f$Contact$2e$jsx__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                    fileName: "[project]/src/pages/index.jsx",
                    lineNumber: 19,
                    columnNumber: 29
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/pages/index.jsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__13e38b67._.js.map