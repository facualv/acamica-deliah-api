module.exports = {
  order: {
    _id: "5e8e09dc0cd35b0e004377e2",
    user: "5e8e09dc0cd35b0e004377e0",
    cart: [
      {
        _id: "5e973522e1299f048446e98e",
        product: "5e948f1bc998fd3e14c6099d",
        quantity: 1
      },
      {
        _id: "5e973522e1299f048446e98e",
        product: "5e948f1bc998fd3e14c6099d",
        quantity: 1
      }
    ],

    date: new Date(Date.now()).toISOString(),
    orderStatus: "recived",
    paymentMethod: "cash"
  },

  orders: [
    {
      _id: "5e8e09dc0cd35b0e004377a1",
      user: "5e8e09dc0cd35b0e004377e0",
      cart: [
        {
          _id: "5e973522e1299f048446e98e",
          product: "5e948f1bc998fd3e14c6099d",
          quantity: 1
        },
        {
          _id: "5e973522e1299f048446e98e",
          product: "5e948f1bc998fd3e14c6099d",
          quantity: 1
        }
      ],

      date: new Date(Date.now()).toISOString(),
      orderStatus: "sended",
      paymentMethod: "card"
    },

    {
      _id: "5e8e09dc0cd35b0e004377f2",
      user: "5e8e09dc0cd35b0e004377e0",
      cart: [
        {
          _id: "5e973522e1299f048446e98e",
          product: "5e948f1bc998fd3e14c6099d",
          quantity: 1
        },
        {
          _id: "5e973522e1299f048446e98e",
          product: "5e948f1bc998fd3e14c6099d",
          quantity: 1
        }
      ],
      date: new Date(Date.now()).toISOString(),
      orderStatus: "sended",
      paymentMethod: "card"
    }
  ]
};
