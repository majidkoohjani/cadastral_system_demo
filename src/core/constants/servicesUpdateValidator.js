/**
 * Structure is like this:
 * "parentServiceID": {
 *     "subServiceID": {
 *          "method": "GET || POST || PUT || ..."
 *          ...otherNeededProps
 *     }
 * }
 */

const servicesRules =  {
    1: {
        1: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        2: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        3: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        4: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        5: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        6: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        7: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        8: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        9: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        10: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        11: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
        12: {
            message: "msg-1",
            validation: {
                type: "number",
                min: 1,
                max: 9999,
            },
            requestModel: {
                type: "inurl",
                params: [],
            }
        },
    },
    2: {
        1: {
            message: "msg-2",
        },
        2: {
            message: "msg-1",
        },
        3: {
            message: "msg-3",
        },
        4: {
            message: "msg-4",
        },
        5: {
            message: "msg-4",
        },
        6: {
            message: "msg-5",
        },
        7: {
            message: "msg-4",
        },
        8: {
            message: "msg-4",
        },
        9: {
            message: "msg-6",
        },
        10: {
            message: "msg-7",
        },
        11: {
            message: "msg-7",
        },
        12: {
            message: "msg-7",
        },
        13: {
            message: "msg-6",
        },
        14: {
            message: "msg-6",
        },
        15: {
            message: "msg-8",
        },
        16: {
            message: "msg-9",
        },
        17: {
            message: "msg-9",
        },
        18: {
            message: "msg-8",
        },
        19: {
            message: "msg-9",
        },
        20: {
            message: "msg-9",
        },
        21: {
            message: "msg-2",
        },
        22: {
            message: "msg-1",
        },
    },
    3: {
        1: {
            message: "msg-10",
        },
        2: {
            message: "msg-11",
        },
        3: {
            message: "msg-12",
        },
        4: {
            message: "msg-13",
        },
        5: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount"
                        },
                    },
                    destination: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount"
                        },
                    }
                },
            }
        },
        6: {
            message: "msg-15",
        },
        7: {
            message: "msg-16",
        },
        8: {
            message: "msg-14",
        },
        9: {
            message: "msg-17",
        },
        10: {
            message: "msg-16",
        },
        11: {
            message: "msg-14",
        },
        12: {
            message: "msg-7",
        },
        13: {
            message: "msg-6",
        },
        14: {
            message: "msg-14",
        },
        15: {
            message: "msg-22",
        },
        16: {
            message: "msg-13",
        },
        17: {
            message: "msg-14",
        },
        18: {
            message: "msg-23",
        },
        19: {
            message: "msg-13",
        },
        20: {
            message: "msg-14",
        },
        21: {
            message: "msg-2",
        },
        22: {
            message: "msg-13",
        },
        23: {
            message: "msg-14",
        },
        24: {
            message: "msg-21",
        },
        25: {
            message: "msg-16",
        },
        26: {
            message: "msg-14",
        },
        27: {
            message: "msg-20",
        },
        28: {
            message: "msg-16",
        },
        29: {
            message: "msg-14",
        },
        30: {
            message: "msg-18",
        },
        31: {
            message: "msg-16",
        },
        32: {
            message: "msg-14",
        },
    },
    4: {
        1: {
            message: "msg-3",
        },
        2: {
            message: "msg-3",
        },
        3: {
            message: "msg-3",
        },
        4: {
            message: "msg-3",
        },
        5: {
            message: "msg-3",
        },
        6: {
            message: "msg-3",
        },
        7: {
            message: "msg-3",
        },
        8: {
            message: "msg-3",
        },
        9: {
            message: "msg-3",
        },
    },
    5: {
        1: {
            message: "msg-25",
        },
        2: {
            message: "msg-26",
        },
        3: {
            message: "msg-1",
        },
        4: {
            message: "msg-1",
        },
        5: {
            message: "msg-1",
        },
        6: {
            message: "msg-1",
        },
    },
    6: {
        1: {
            message: "msg-27",
        },
        2: {
            message: "msg-1",
        },
        3: {
            message: "msg-1",
        },
        4: {
            message: "msg-1",
        },
        5: {
            message: "msg-1",
        },
        6: {
            message: "msg-1",
        },
        7: {
            message: "msg-1",
        },
        8: {
            message: "msg-1",
        },
        9: {
            message: "msg-1",
        },
    },
    7: {
        1: {
            message: "msg-2",
        },
        2: {
            message: "msg-1",
        },
        3: {
            message: "msg-14",
        },
        4: {
            message: "msg-29",
        },
        5: {
            message: "msg-2",
        },
        6: {
            message: "msg-1",
        },
        7: {
            message: "msg-14",
        },
        8: {
            message: "msg-29",
        },
        9: {
            message: "msg-2",
        },
        10: {
            message: "msg-1",
        },
    },
    8: {
        1: {
            message: "msg-2",
        },
        2: {
            message: "msg-1",
        },
        3: {
            message: "msg-1",
        },
        4: {
            message: "msg-1",
        },
        5: {
            message: "msg-28",
        },
        6: {
            message: "msg-1",
        },
        7: {
            message: "msg-1",
        },
        8: {
            message: "msg-1",
        },
    },
    9: {
        1: {
            message: "msg-14",
        },
        2: {
            message: "msg-1",
        },
        3: {
            message: "msg-2",
        },
        4: {
            message: "msg-1",
        },
        5: {
            message: "msg-2",
        },
        6: {
            message: "msg-1",
        },
    },
    10: {
        1: {
            message: "msg-30",
        },
        2: {
            message: "msg-30",
        },
    },
};

function getSubServiceUpdateRules(service, subService) {
    if (servicesRules.hasOwnProperty(service)) {
        if (servicesRules[service][subService]) {
            return servicesRules[service][subService];
        }
    }

    return null;
}

export {getSubServiceUpdateRules};
