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
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        2: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        6: {
            // message: "msg-1",
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        9: {
            // message: "msg-1",
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        10: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        11: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        12: {
            // message: "msg-1",
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    2: {
        1: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_id",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true
                        },
                    },
                },
            }
        },
        2: {
            message: "msg-1",
            specialMessage: "sm-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        4: {
            message: "msg-4",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1,
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                },
            }
        },
        5: {
            message: "msg-4",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                }
            }
        },
        6: {
            message: "msg-5",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "price_assets": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            order: 2,
                        },
                    },
                }
            }
        },
        7: {
            message: "msg-4",
            specialMessage: "sm-1",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                }
            }
        },
        8: {
            message: "msg-4",
            specialMessage: "sm-1",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                }
            }
        },
        9: {
            message: "msg-6",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "column_7",
                        },
                    }
                }
            }
        },
        10: {
            message: "msg-7",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: 2,
                        table: "origin",
                    },
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "assets_code": {
                            type: "numeric-string",
                            min: 100,
                            max: 999,
                            nameToSend: "8",
                        },
                        "price_assets": {
                            type: "numeric",
                            min: 0,
                            max: 10000,
                            nameToSend: "9",
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "10",
                        },
                        "percent_owner": {
                            type: "numeric-float",
                            min: 0,
                            max: 1,
                            nameToSend: "11",
                        },
                    }
                }
            }
        },
        11: {
            message: "msg-7",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: 2,
                        table: "origin",
                    },
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "assets_code": {
                            type: "numeric-string",
                            min: 100,
                            max: 999,
                            nameToSend: "8",
                        },
                        "price_assets": {
                            type: "numeric",
                            min: 0,
                            max: 10000,
                            nameToSend: "9",
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "10",
                        },
                        "percent_owner": {
                            type: "numeric-float",
                            min: 0,
                            max: 1,
                            nameToSend: "11",
                        },
                    }
                }
            }
        },
        12: {
            message: "msg-7",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: 2,
                        table: "origin",
                    },
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "assets_code": {
                            type: "numeric-string",
                            min: 100,
                            max: 999,
                            nameToSend: "8",
                        },
                        "price_assets": {
                            type: "numeric",
                            min: 0,
                            max: 10000,
                            nameToSend: "9",
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "10",
                        },
                        "percent_owner": {
                            type: "numeric-float",
                            min: 0,
                            max: 1,
                            nameToSend: "11",
                        },
                    }
                }
            }
        },
        13: {
            message: "msg-6",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "column_7",
                        },
                    }
                }
            }
        },
        14: {
            message: "msg-6",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "column_7",
                        },
                    }
                }
            }
        },
        15: {
            message: "msg-8",
            specialMessage: "sm-8",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true
                }
            }
        },
        16: {
            message: "msg-9",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: "*",
                        unordered: true,
                        table: "origin",
                    },
                    tableNameForPayload: "self",
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "7",
                        },
                    }
                }
            }
        },
        17: {
            message: "msg-9",
            specialMessage: "sm-6",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: "*",
                        unordered: true,
                        table: "origin",
                    },
                    tableNameForPayload: "self",
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "7",
                        },
                    }
                }
            }
        },
        18: {
            message: "msg-31",
            specialMessage: "sm-8",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true
                }
            }
        },
        19: {
            message: "msg-9",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: "*",
                        unordered: true,
                        table: "origin",
                    },
                    tableNameForPayload: "self",
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "7",
                        },
                    }
                }
            }
        },
        20: {
            message: "msg-9",
            specialMessage: "sm-7",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    multipleRowsAllowed: {
                        count: "*",
                        unordered: true,
                        table: "origin",
                    },
                    tableNameForPayload: "self",
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                        },
                        "row_status": {
                            type: "null",
                            mustBeNull: true,
                            nameToSend: "7",
                        },
                    }
                }
            }
        },
        21: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_id",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true
                        },
                    },
                },
            }
        },
        22: {
            message: "msg-1",
            specialMessage: "sm-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    3: {
        1: {
            message: "msg-10",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        2: {
            message: "msg-11",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-14",
            specialMessage: "sm-5",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        6: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
            message: "msg-14",
            specialMessage: "sm-5",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        9: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        10: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        11: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        12: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        13: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        14: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        15: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        16: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        17: {
            message: "msg-14",
            specialMessage: "sm-5",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        18: {
            message: "msg-1",
            specialMessage: "sm-2",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        19: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        20: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        21: {
            message: "msg-1",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_id",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                        },
                    },
                },
            }
        },
        22: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        23: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        24: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        25: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        26: {
            message: "msg-14",
            specialMessage: "sm-5",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        27: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        28: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        29: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        30: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        31: {
            message: "",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        32: {
            message: "msg-14",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
    },
    4: {
        1: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        2: {
            message: "msg-3",
            specialMessage: "sm-5",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        3: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        4: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        5: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        6: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        7: {
            message: "msg-3",
            specialMessage: "sm-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        8: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        9: {
            message: "msg-3",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
    },
    5: {
        1: {
            message: "msg-25",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        2: {
            message: "msg-26",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        6: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    6: {
        1: {
            message: "msg-27",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric-string",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                            addMinusBeforeSend: true,
                        },
                    },
                    destination: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric-string",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                            addPlusBeforeSend: true,
                        },
                    }
                    },
            }
        },
        2: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        6: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        9: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    7: {
        1: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        2: {
            message: "msg-1",
            specialMessage: "sm-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-32",
            specialMessage: "sm-1",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        4: {
            message: "msg-29",
            specialMessage: "sm-4",
            requestModel: {
                type: "inurl",
                requestType: "put",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                }
            }
        },
        5: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        6: {
            message: "msg-1",
            specialMessage: "sm-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-32",
            specialMessage: "sm-1",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        8: {
            message: "msg-29",
            requestModel: {
                type: "inurl",
                requestType: "put",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "national_code_bought_assets": {
                            type: "numeric-string",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                            order: 2,
                        },
                    },
                }
            }
        },
        9: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        10: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    8: {
        1: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_id",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        2: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-28",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        6: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    9: {
        1: {
            message: "msg-32",
            requestModel: {
                type: "payload",
                params: {
                    lockCheckbox: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row"
                        },
                        "transaction_amount": {
                            type: "numeric",
                            min: 1,
                            max: 9999,
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
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
                            nameToSend: "amount",
                            parityCondition: "transaction_amount",
                        },
                    }
                },
            }
        },
        2: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        4: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-2",
            requestModel: {
                type: "inurl",
                params: {
                    lockCheckbox: false,
                    removeTableNameFromPayload: true,
                    origin: {
                        rowID: {
                            type: "auto",
                            nameToSend: "row_oid",
                            order: 1
                        },
                        "check": {
                            type: "checkbox",
                            canBeUsedAsDelete: true,
                        },
                    },
                },
            }
        },
        6: {
            message: "msg-1",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
    },
    10: {
        1: {
            message: "msg-30",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        2: {
            message: "msg-30",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
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
