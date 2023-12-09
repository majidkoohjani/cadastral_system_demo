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
            message: "msg-1",
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
                            nameToSend: "row_oid"
                        },
                        "national_code_bought_assets": {
                            type: "numeric",
                            min: 1,
                            max: 100,
                            nameToSend: "dst_national_code",
                        },
                    },
                },
            }
        },
        5: {
            message: "msg-4",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        6: {
            message: "msg-5",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-4",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
            message: "msg-4",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        9: {
            message: "msg-6",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        10: {
            message: "msg-7",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        11: {
            message: "msg-7",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        12: {
            message: "msg-7",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        13: {
            message: "msg-6",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        14: {
            message: "msg-6",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        15: {
            message: "msg-8",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        16: {
            message: "msg-9",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        17: {
            message: "msg-9",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        18: {
            message: "msg-8",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        19: {
            message: "msg-9",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        20: {
            message: "msg-9",
            requestModel: {
                params: {
                    lockCheckbox: true
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
            message: "msg-12",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        4: {
            message: "msg-13",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
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
        6: {
            message: "msg-15",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        7: {
            message: "msg-16",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        8: {
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
        9: {
            message: "msg-17",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        10: {
            message: "msg-16",
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
            message: "msg-7",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        13: {
            message: "msg-6",
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
            message: "msg-22",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        16: {
            message: "msg-13",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        17: {
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
        18: {
            message: "msg-23",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        19: {
            message: "msg-13",
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
                        },
                    },
                },
            }
        },
        22: {
            message: "msg-13",
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
            message: "msg-21",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        25: {
            message: "msg-16",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        26: {
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
        27: {
            message: "msg-20",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        28: {
            message: "msg-16",
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
            message: "msg-18",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        31: {
            message: "msg-16",
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
                type: "payload",
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
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        3: {
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
        4: {
            message: "msg-29",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        5: {
            message: "msg-2",
            requestModel: {
                type: "payload",
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
        7: {
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
        8: {
            message: "msg-29",
            requestModel: {
                params: {
                    lockCheckbox: true
                }
            }
        },
        9: {
            message: "msg-2",
            requestModel: {
                type: "payload",
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
                type: "payload",
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
                type: "payload",
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
