export const  initState={
  category:{
    electronics:{
      name:'electronics',
      id:1,
      products:[
        {
          id:11,
          name:'Product 11',
          price:150,
          size:'big',
          isHave:true,
        },
        {
          id:12,
          name:'Product 21',
          price:199,
          size:'small',
          isHave:false,
        },
      ]
    },
    
    computers:{
      name:'computers',

      id:2,
      products:[
        {
          id:21,
          name:'Product 21',
          price:150,
          size:'big',
          isHave:false,
        },
        {
          id:22,
          name:'Product 22',
          price:299,
          size:'large',
          isHave:true,
        },
    
      ]
    },

    build:{
      name:'build',

      id:3,
      products:[
        {
          id:31,
          name:'Product 31',
          price:150,
          size:'big',
          isHave:false,
        },
        {
          id:32,
          name:'Product 32',
          price:299,
          size:'large',
          isHave:true,
        },
        {
          id:33,
          name:'Product 33',
          price:299,
          size:'large',
          isHave:true,
        },
        {
          id:34,
          name:'Product 34',
          price:150,
          size:'big',
          isHave:false,
        },
        {
          id:35,
          name:'Product 35',
          price:299,
          size:'large',
          isHave:true,
        },
        {
          id:36,
          name:'Product 36',
          price:299,
          size:'large',
          isHave:true,
        },
    
      ]
    },
    'house_gaden':{
      name:'house&gaden',
      id:4,
      products:[
        {
          id:41,
          name:'Product 41',
          price:150,
          size:'big',
          isHave:true,
        },
      
      ]
    },
    car:{
      name:'car',
      id:5,
      products:[
        {
          id:51,
          name:'Product 51',
          price:150,
          size:'big',
          isHave:true,
        },
        
      ]
    },
    sport:{
      name:'sport',
      id:6,
      products:[
        {
          id:61,
          name:'Product 61',
          price:150,
          size:'big',
          isHave:true,
        },
       
      ]
    },

    
  },
  activeProductId:'',
  checkCategoryName:''
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
  {text:'Buy  house&gaden',
  background:'lightsalmon',
  category:'house&gaden',
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