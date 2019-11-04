export const posts = [
  {
    user: 'healthybts',
    liked: false,
    images: ['healthybts1.jpg'],
    caption: `Fluffy chocolate chip pancakes layered with banana slices and topped with a chocolate drizzle, raspberries, and cacao powder. Who’s a chocolate lover?

    1/2 c oats
    1/2 medium banana
    1/2 teaspoon vanilla extract
    1 tsp baking powder
    1/2 tsp cinnamon
    1 egg
    1 tbs almond milk
    blend ingredients
    mix in tsp apple cider vinegar
    Add on chocolate chips while cooking
    `,
    comments: [
      {
        user: "panaceas_pantry",
        comment: "Omg that is looking out of this world 🤤🤤"
      },
      {
        user: "healthybts",
        comment: `
        #foodie #thefeedfeed #healthy #healthyfood #workoutmotivation #healthymotivation #eatclean #cleaneating #tasty #nutrition #toneitup
#healthyinspo #food52grams #food52 #instagood #buzzfeedfood #foodstagram #yummy #food #cleanliving #healthandwellness #thektchen #wholefoods #cleanfoods
        `,

      }
    ]
  },
  {
    user: 'panaceas_pantry',
    liked: false,
    images: ['panaceas_pantry1.jpg'],
    caption: `
    No-bake choc hazelnut and coconut slice. Super simple, staple ingredients, totally yum! . .
    If you don’t have/like hazelnuts you could use pecans instead- or even almonds (but that would be my last choice- and you might need extra sweetener). I used vegan milk choc for the topping, and wouldn’t recommend subbing for a darker choc unless you add extra sweetener in- it’s needed to balance out the flavours x
    .
    Base
    .
    1 cup (activated or freshly roasted) hazelnuts
    2 Tbsp coconut flour
    1/4 cup raw cacao powder
    1/4 cup pure maple syrup
    2 Tbsp coconut oil, melted
    .
    1. Add nuts, flour and cacao to a food processor, and blitz until nuts are finely chopped.
    2. Add remaining ingredients and pulse to combine well. Press into the base of a small slice tin lined with baking powder (mine was 15cm square). Set aside.
    .
    Coconut layer.
    .
    3 cups shredded coconut
    1 tsp vanilla extract
    1/4 cup coconut oil, melted
    1/4 cup maple syrup
    1/4 cup coconut milk
    .
    1. Add all ingredients to a bowl and combine. Pour over base and set in fridge.
    .
    Choc ganache topping
    .
    100g vegan milk chocolate** 3 Tbsp coconut milk.
    .
    1. Finely chop up chocolate and set in a bowl (the finer, the better). Heat coconut milk (until hot, but NOT boiling point), pour over chocolate and whisk together. Pour over coconut layer, then set in the fridge. *Store in an airtight container, in the fridge/freezer. ** I would recommend using dark chocolate, as the extra sweetness is needed for this slice. If you DO use dark chocolate, then I’d recommend adding sweetener.`,
    comments: [
      {
        user: "panaceas_pantry",
        comment: `#foodphotography #foodphoto #foodstylist #veganinspo #veganrecipe #healthyvegan #healthyveganfood #veganblogger #veganvibes #chocolatey #nobake`
      },
      {
        user: "healthybts",
        comment: "These look so yummy 😍"
      }
    ]

  },
  {
    user: "illegalvegan",
    liked: false,
    images: ["illegalvegan1.jpg"],
    caption: `When classes are cancelled so you finally have time to put together a decent breakfast... 👏👏 My complete breakfast ritual includes a serving of fruit, a warm cup of water with lemon🍋, a cup of coffee/tea☕️🍵, and a carb with protein. @traderjoes crumpets are now my favorite treat. It soaks up butter sooo good!!! Which topping is your favorite😍? 1️⃣ @miyokoscreamery European style butter + @monsieurmarcelsm red raspberry preserve
    2️⃣ @costco kirkland almond butter + flaxseeds from @berkeleybowl and hemp hearts from @traderjoes
    3️⃣ @miyokoscreamery butter + almond butter on a piece of toast
    
    Don’t be like me eating breakfast at my work desk...`,
    comments: [
      {
        user: "illegalvegan",
        comment: `#illegalvegan #illegalvegans #vegan #veganfood #veganfoodie #whatveganseat #bayareavegan #sandiegovegan #veganeats #herbivore #plantbased #plantbasedfoods #veganrecipes #healthyvegan #veganinspo #veganvibes #veganlove #vegancommunity #veggies #poweredbyplants #vegansofinstagram #food #foodie #vegancook #healthy #nutrition #vegancommunity #forksoverknives #veganfoodspot #breakfast`
      },
      {
        user: "healthybts",
        comment: `I have to try the crumpets- didn’t know about those. So many vegan options at Trader Joes💚❤️💚❤️`
      }
    ]
  }
];

export const profiles = {
  "healthybts": {
    bio: `A healthy living
    📍LA`
  },
  "panaceas_pantry": {
    bio: `🍄 Simple, plant-filled Wholefood recipes
    📷 Food Photographer + naturopath
    ✉️ work Enquiries: panaceas.pantry@gmail.com`,
    website: "www.panaceaspantryblog.com"
  },
  "illegalvegan": {
    bio: `Designing a sustainable routine and philosophy of nutrition
    🌱 Plant-based Foods
    😈 So good it’s illegal
    😎 All original content
    Bay Area | San Diego`,
    website: "https://msha.ke/illegalvegan/"
  }
}

export const currentUser = {
  name: "illegalvegan"
}