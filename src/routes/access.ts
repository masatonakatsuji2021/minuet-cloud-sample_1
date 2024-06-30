export default {
    default: {
        "/" : "controller = main, action = index",
        "/aaaa": "controller = main, action = aaaa",
    },
    admin: {
        "/" : "controller = admin, action = index",
        "/detail" : "controller = admin, action = detail",
    },
};