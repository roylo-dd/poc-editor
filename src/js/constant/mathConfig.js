const generateAlphabet = (prefix, extra = true) => {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    return alphabet.map(item => {
        return {
            ref: prefix + item,
            action: 'remove',
            extra: extra
        };
    });
};

const settings = [ {
    tab: 'general',
    items: [
        {
            section: [
                {
                    ref: 'autoDisplayFraction',
                    action: 'create'
                }, {
                    ref: 'squareRoot',
                    action: 'create'
                }, {
                    ref: 'nRoot',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'superscript',
                    action: 'create'
                }, {
                    ref: 'subscript',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'parenthesis',
                    action: 'create'
                }, {
                    ref: 'verticalBar',
                    action: 'create'
                },
                {
                    ref: 'squareBracket',
                    action: 'create'
                }, {
                    ref: 'curlyBracket',
                    action: 'create'
                }
            ]
        }
        // {
        //     ref: 'autoDisplayBevelledFraction',
        //     action: 'remove'
        // }, {
        //     ref: '+',
        //     action: 'remove'
        // }, {
        //     ref: '&#215;',
        //     action: 'remove'
        // }, {
        //     ref: '-',
        //     action: 'remove'
        // }, {
        //     ref: '/',
        //     action: 'remove'
        // }, {
        //     ref: '&#177;',
        //     action: 'remove'
        // }, {
        //     ref: '&#247;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8805;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8804;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8712;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8834;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8746;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8745;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8709;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8734;',
        //     action: 'remove'
        // }, {
        //     ref: 'numberPi',
        //     action: 'remove'
        // }, {
        //     ref: 'copy',
        //     action: 'remove'
        // }, {
        //     ref: 'cut',
        //     action: 'remove'
        // }, {
        //     ref: 'paste',
        //     action: 'remove'
        // }, {
        //     ref: 'undo',
        //     action: 'remove'
        // }, {
        //     ref: 'redo',
        //     action: 'remove'
        // }, {
        //     ref: 'bold',
        //     action: 'remove'
        // }, {
        //     ref: 'italic',
        //     action: 'remove'
        // }, {
        //     ref: 'autoItalic',
        //     action: 'remove'
        // }, {
        //     ref: 'setColor',
        //     action: 'remove'
        // }, {
        //     ref: 'setUnicode',
        //     action: 'remove'
        // }, {
        //     ref: 'mtext',
        //     action: 'remove'
        // }, {
        //     ref: 'rtl',
        //     action: 'remove'
        // }, {
        //     ref: 'forceLigature',
        //     action: 'remove'
        // }, {
        //     ref: 'setFontFamily',
        //     action: 'remove'
        // }, {
        //     ref: 'setFontSize',
        //     action: 'remove'
        // }
    ],
    empty: true
}, {
    tab: 'symbols',
    items: [
        {
            section: [
                {
                    ref: 'negateOperator',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '+',
                    action: 'create'
                },
                {
                    ref: '-',
                    action: 'create'
                },
                {
                    ref: '&#177;',
                    action: 'create'
                },
                {
                    ref: '&#215;',
                    action: 'create'
                },
                {
                    ref: '&#247;',
                    action: 'create'
                },
                {
                    ref: '*',
                    action: 'create'
                },
                {
                    ref: '&#183;',
                    action: 'create'
                },
                {
                    ref: '/',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: 'numberPi',
                    action: 'create'
                },
                {
                    ref: '&#8734;',
                    action: 'create'
                },
                {
                    ref: '&#8709;',
                    action: 'create'
                },
                {
                    ref: '&#8710;',
                    action: 'create'
                },
                {
                    ref: '&#176;',
                    action: 'create'
                },
                {
                    ref: '&apos;',
                    action: 'create'
                },
                {
                    ref: 'aposApos',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '=',
                    action: 'create'
                },
                {
                    ref: '&#8764;',
                    action: 'create'
                },
                {
                    ref: '&#8800;',
                    action: 'create'
                },
                {
                    ref: '&#8801;',
                    action: 'create'
                },
                {
                    ref: '&#8776;',
                    action: 'create'
                },
                {
                    ref: '&#8773;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '&gt;',
                    action: 'create'
                },
                {
                    ref: '&#8805;',
                    action: 'create'
                },
                {
                    ref: '&#8733;',
                    action: 'create'
                },
                {
                    ref: '&lt;',
                    action: 'create'
                },
                {
                    ref: '&#8804;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '&#8746;',
                    action: 'create'
                },
                {
                    ref: '&#8838;',
                    action: 'create'
                }, {
                    ref: '&#8712;',
                    action: 'create'
                },
                {
                    ref: '&#8745;',
                    action: 'create'
                },
                {
                    ref: '&#8839;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '&#8756;',
                    action: 'create'
                },
                {
                    ref: '&#8757;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '&#8736;',
                    action: 'create'
                },
                {
                    ref: '&#8741;',
                    action: 'create'
                },
                {
                    ref: '&#8869;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: '&#9651;',
                    action: 'create'
                }
            ],
            row: 3
        }, {
            section: [
                {
                    ref: '&#8853;',
                    action: 'create'
                },
                {
                    ref: '&#8857;',
                    action: 'create'
                },
                {
                    ref: '&#8861;',
                    action: 'create'
                },
                {
                    ref: '&#8729;',
                    action: 'create'
                }
            ],
            row: 3
        }
        // {
        //     ref: '&#8728;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8706;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8711;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8771;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#10878;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#10877;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8715;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8834;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8835;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8743;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8744;',
        //     action: 'remove'
        // }, {
        //     ref: '&#172;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8704;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8707;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8708;',
        //     action: 'remove'
        // }, {
        //     ref: '&#9633;',
        //     action: 'remove'
        // }, {
        //     ref: '&#9675;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8853;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8855;',
        //     action: 'remove'
        // }, {
        //     ref: '&#8857;',
        //     action: 'remove'
        // }
    ],
    empty: true
}, {
    tab: 'arrows',
    items: [
        {
            section: [
                {
                    ref: '&#8594;',
                    action: 'create'
                },
                {
                    ref: '&#8596;',
                    action: 'create'
                },
                {
                    ref: '&#8658;',
                    action: 'create'
                },
                {
                    ref: '&#8660;',
                    action: 'create'
                }
            ]
        },
        {
            section: [
                {
                    ref: '&#8230;',
                    action: 'create'
                },
                {
                    ref: '&#8944;',
                    action: 'create'
                },
                {
                    ref: '&#8942;',
                    action: 'create'
                },
                {
                    ref: '&#8943;',
                    action: 'create'
                },
                {
                    ref: '&#8945;',
                    action: 'create'
                }
            ],
            row: 3
        },
        {
            section: [
                {
                    ref: 'rightArrowWithOverScript',
                    action: 'create'
                },
                {
                    ref: 'rightArrowWithUnderAndOverScript',
                    action: 'create'
                },
                {
                    ref: 'rightArrowWithUnderScript',
                    action: 'create'
                }
            ]
        }
        // {
        //     ref: '&#8592;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8656;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8612;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8614;',
        //     action: 'remove'
        // },
        // {
        //     ref: '&#8208;',
        //     action: 'remove'
        // },
        // {
        //     ref: 'normalDash',
        //     action: 'remove'
        // },
        // {
        //     ref: 'leftArrowWithOverScript',
        //     action: 'remove'
        // },
        // {
        //     ref: 'leftArrowWithUnderScript',
        //     action: 'remove'
        // },
        // {
        //     ref: 'leftArrowWithUnderAndOverScript',
        //     action: 'remove'
        // },
        // {
        //     ref: 'vectorAccent',
        //     action: 'remove'
        // },
        // {
        //     ref: 'rightArrowAccent',
        //     action: 'remove'
        // },
        // {
        //     ref: 'rightLeftArrowAccent',
        //     action: 'remove'
        // },
        // {
        //     ref: 'barAccent',
        //     action: 'remove'
        // }
    ],
    empty: true
}, {
    tab: 'greek',
    items: [
        // {
        //     section: [
        //         {
        //             ref: '&#945;',
        //             action: 'create'
        //         }, {
        //             ref: '&#954;',
        //             action: 'create'
        //         }, {
        //             ref: '&#963;',
        //             action: 'create'
        //         }, {
        //             ref: '&#946;',
        //             action: 'create'
        //         }, {
        //             ref: '&#955;',
        //             action: 'create'
        //         }, {
        //             ref: '&#964;',
        //             action: 'create'
        //         }, {
        //             ref: '&#947;',
        //             action: 'create'
        //         }, {
        //             ref: '&#956;',
        //             action: 'create'
        //         }, {
        //             ref: '&#965;',
        //             action: 'create'
        //         }, {
        //             ref: '&#948;',
        //             action: 'create'
        //         }, {
        //             ref: '&#957;',
        //             action: 'create'
        //         }, {
        //             ref: '&#966;',
        //             action: 'create'
        //         }, {
        //             ref: '&#949;',
        //             action: 'create'
        //         }, {
        //             ref: '&#958;',
        //             action: 'create'
        //         }, {
        //             ref: '&#981;',
        //             action: 'create'
        //         }, {
        //             ref: '&#950;',
        //             action: 'create'
        //         }, {
        //             ref: '&#959;',
        //             action: 'create'
        //         }, {
        //             ref: '&#981;',
        //             action: 'create'
        //         }, {
        //             ref: '&#967;',
        //             action: 'create'
        //         }, {
        //             ref: '&#960;',
        //             action: 'create'
        //         }, {
        //             ref: '&#968;',
        //             action: 'create'
        //         }, {
        //             ref: '&#952;',
        //             action: 'create'
        //         }, {
        //             ref: '&#982;',
        //             action: 'create'
        //         }, {
        //             ref: '&#969;',
        //             action: 'create'
        //         }, {
        //             ref: '&#977;',
        //             action: 'create'
        //         }, {
        //             ref: '&#961;',
        //             action: 'create'
        //         }, {
        //             ref: '&#953;',
        //             action: 'create'
        //         }, {
        //             ref: '&#962;',
        //             action: 'create'
        //         },
        //
        //         //Chem
        //         {
        //             ref: 'hydrogen',
        //             action: 'create',
        //             extra: true
        //         }
        //     ],
        //     row: 3
        // }, {
        //     section: [
        //         {
        //             ref: 'naturals',
        //             action: 'create'
        //         },
        //         {
        //             ref: 'rationals',
        //             action: 'create'
        //         },
        //         {
        //             ref: 'complexes',
        //             action: 'create'
        //         },
        //         {
        //             ref: 'integers',
        //             action: 'create'
        //         },
        //         {
        //             ref: 'reals',
        //             action: 'create'
        //         }
        //     ],
        //     row: 3
        // }
        {
            section: [
                ...generateAlphabet('doubleStruck'),
                ...generateAlphabet('frakturCapital'),
                ...generateAlphabet('fraktur'),
                ...generateAlphabet('scriptCapital'),
                ...generateAlphabet('script')
            ]
        }
    ],
    empty: false
}, {
    tab: 'matrices',
    items: [
        {
            section: [
                {
                    ref: 'rCurlyColumn',
                    action: 'remove'
                },
                {
                    ref: 'equationAlign',
                    action: 'remove'
                }
            ]
        }
    ],
    empty: false
}, {
    tab: 'scriptsAndLayout',
    items: [
        {
            section: [
                {
                    ref: 'fraction',
                    action: 'create'
                }, {
                    ref: 'smallFraction',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'squareRoot',
                    action: 'create'
                }, {
                    ref: 'nRoot',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'superscript',
                    action: 'create'
                }, {
                    ref: 'subsuperscript',
                    action: 'create'
                }, {
                    ref: 'subscript',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'over',
                    action: 'create'
                }, {
                    ref: 'underover',
                    action: 'create'
                }, {
                    ref: 'under',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'underScriptWithBrace',
                    action: 'create'
                }, {
                    ref: 'overScriptWithBrace',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'digitSpace',
                    action: 'create'
                }, {
                    ref: 'backSpace',
                    action: 'create'
                }, {
                    ref: 'thinnerSpace',
                    action: 'create'
                }
            ]
        }
    ],
    empty: true
}, {
    tab: 'bracketsAndAccents',
    items: [
        {
            section: [
                {
                    ref: 'parenthesis',
                    action: 'create'
                },
                {
                    ref: 'squareBracket',
                    action: 'create'
                }, {
                    ref: 'verticalBar',
                    action: 'create'
                },
                {
                    ref: 'curlyBracket',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'upParenthesis',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'rightArrowAccent',
                    action: 'create'
                },
                {
                    ref: 'barAccent',
                    action: 'create'
                },
                {
                    ref: 'hatAccent',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'encloseRight',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'upDiagonalStrike',
                    action: 'create'
                }
            ]
        }
    ],
    empty: false
}, {
    tab: 'bigOps',
    items: [
        {
            section: [
                {
                    ref: 'sumUnderover',
                    action: 'create'
                },
                {
                    ref: 'sumUnder',
                    action: 'create'
                }
            ]
        }
    ],
    empty: false
}, {
    tab: 'calculus',
    items: [
        {
            section: [
                {
                    ref: 'integralSubsuperscript',
                    action: 'create'
                }, {
                    ref: 'integralSubsuperscriptD',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'differentialD',
                    action: 'create'
                }, {
                    ref: 'fracDiff',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'limitToInfinity',
                    action: 'create'
                }, {
                    ref: 'limitUnder',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: '&#8747;',
                    action: 'create'
                }
            ]
        }, {
            section: [
                {
                    ref: 'sinus',
                    action: 'create'
                },
                {
                    ref: 'cosinus',
                    action: 'create'
                },
                {
                    ref: 'tangent',
                    action: 'create'
                },
                {
                    ref: 'log',
                    action: 'create'
                },
                {
                    ref: 'nlog',
                    action: 'create'
                },
                {
                    ref: 'naturalLog',
                    action: 'create'
                },
                {
                    ref: 'cosecant',
                    action: 'create'
                },
                {
                    ref: 'secant',
                    action: 'create'
                },
                {
                    ref: 'cotangent',
                    action: 'create'
                },
                {
                    ref: 'arcsinus',
                    action: 'create'
                },
                {
                    ref: 'arccosinus',
                    action: 'create'
                },
                {
                    ref: 'arctangent',
                    action: 'create'
                }
            ]
        }
    ],
    empty: false
} ];


const renderItem = (refs) => {
    let result = '';
    let count = 0;
    if (refs) {
        for (let ref of refs) {
            const { section = [], row = 2 } = ref || {};
            if (section) {
                result += `<section rows='${ row }'>`;
                for (let sec of section) {
                    const { ref, action, extra = false } = sec;

                    if (ref) {
                        switch (action) {
                            case 'remove':
                                result += `<removeItem ref='${ ref }' extra='${ extra ? 'true' : 'false' }'/>`;
                                break;
                            case 'create':
                                result += `<item ref='${ ref }' extra='${ extra ? 'true' : 'false' }'/>`;
                        }
                    }

                }
                result += `</section>`;
            }
        }
    }
    return result;
};

const toolbarConfig = () => {
    let result = '';

    for (let setting of settings) {
        result += `<tab ref='${ setting.tab }' empty='${ setting.empty ? 'true' : 'false' }'>
                        ${ renderItem(setting.items) }
            </tab>`;
    }
    return result;
};

const mathConfig = {
    'language': 'en', 'toolbar': `<toolbar ref='general'>
${ toolbarConfig() }
<removeTab ref='contextual'/>
</toolbar>`
};

export default {
    mathConfig
};