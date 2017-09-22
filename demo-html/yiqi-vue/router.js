const router = new VueRouter({
    routes: [
        {
          path: '/',
          component: test1
        },
        {
          path: '/test1',
          component: test1,
          children:[
            {
              path: '',
              component: test1_router1
            },
            {
              path: 'test1_router1',
              component: test1_router1
            },
            {
              path: 'test1_router2/:id',
              name: 'test1_router2',
              component: test1_router2
            },
            {
              path: 'test1_router3',
              component: test1_router3
            }
          ]
        },
        {
          path: '/test2',
          component: test2
        }
    ]

});
