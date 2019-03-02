export const  initState={
  category:{
    electronics:{
      name:'electronics',
      description:['Операционная система', 'Экран','Память','Камера',
        'Процессор','Микроархитектура ЦПУ','Материал','Вес','Ёмкость аккумулятора','Цена'],
      id:1,
      products:[
        {
          id:11,
          name:'Смартфон Honor 10 Lite 3GB/32GB HRX-LX1 (черный)',
          'Цена':'550 р.',
          'Операционная система':'Android 9.0 Pie',
          'Экран':'6.21"/1080x2340',
          'Память':'3 ГБ/32 ГБ',
          'Камера':'13 Мп, f/1.8, 26mm 2 Мп, f/2.4',
          'Процессор':'HiSilicon Kirin 710',
          'Микроархитектура ЦПУ':'ARM Cortex-A73 2200 МГц + Cortex-A53 1700 МГц',
          'Материал':'пластик',
          'Вес':'162 г',
          'Ёмкость аккумулятора':'3 400 мА·ч',

        },
      ]
    },
    
    computers:{
    },

    build:{
    },
    'house_gaden':{
    },
    car:{
    },
    sport:{
    },
  },
  
}

export let blockNews=[
  {text:'Buy  electronics',
    background:'magenta',
    category:'electronics',
    className:'Main__FlexContainer__News',
    id:1
  },
  {text:'Buy  computers',
  background:'blue',
  category:'computers',
  className:'Main__FlexContainer__News',
  id:2
  },

  {text:'Buy  builder',
  background:'aqua',
  category:'build',
  className:'Main__FlexContainer__News',
  id:3
  },
  {text:'Buy  house_gaden',
  background:'lightsalmon',
  category:'house_gaden',
  className:'Main__FlexContainer__News',
  id:4
  },
  {text:'Buy  car',
  background:'palegreen',
  category:'car',
  className:'Main__FlexContainer__News',
  id:5
  },

  {text:'Buy  sport',
  background:'darkviolet',
  category:'sport',
  className:'Main__FlexContainer__News',
  id:6
  },
]