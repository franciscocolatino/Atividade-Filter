const array = ['abacate',
'amora',
'ameixa',
'acerola',
'abacaxi',
'açai',
'banana',
'carambola',
'caju',
'cereja',
'cacau',
'caqui',
'cupuaçu',
'damasco',
'figo',
'framboesa',
'graviola',
'goiaba',
'groselia',
'guarana',
'jaca',
'kiwi',
'laranja',
'limao',
'lima',
'lixia',
'melancia',
'mamao',
'melao',
'maracuja',
'manga',
'maça',
'mexerica',
'morango',
'nectarina',
'pera',
'pessego',
'pitanga',
'pinha',
'quina',
'roma',
'tangerina',
'uva'];

export const Data = array.map((item, index) => ({key: index.toString(), name: item.toUpperCase()}));
