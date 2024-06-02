"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = exports.sessionSettings = exports.corsConfig = exports.sendingCookie = exports.sendingHeader = void 0;
const sendingCookie = {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
};
exports.sendingCookie = sendingCookie;
const sendingHeader = {
    "Content-Type": "text/json",
    "access-control-allow-origin": ["https://localhost:3100"],
    "access-control-allow-methods": "GET, POST",
    "access-control-allow-headers": "Origin, Authorization",
};
exports.sendingHeader = sendingHeader;
const corsConfig = {
    origin: true,
    methods: "GET,POST",
    preflightContinue: false,
    optionsSuccessStatus: 200,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type"],
    maxAge: 60000,
    credentials: true,
};
exports.corsConfig = corsConfig;
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
    preflightContinue: true,
    methods: "GET,POST",
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["Content-Type"],
    maxAge: 3600,
    accessControlAllowOrigin: true,
    accessControlAllowCredentials: true,
    accessControlAllowMethods: "GET,POST",
    accessControlAllowHeaders: "Content-Type,Authorization",
    accessControlExposeHeaders: "Content-Type",
};
exports.corsOptions = corsOptions;
const sessionSettings = {
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {
        sendingCookie,
    },
};
exports.sessionSettings = sessionSettings;
//# sourceMappingURL=index.js.map