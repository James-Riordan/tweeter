export const users = [
  {
    id: 1,
    username: "TestUser",
    firstName: "Test",
    lastName: "User",
    email: "testuseremail.com",
    isAdmin: false,
    tweets: [
      { id: 1, content: "Tweeter is better than Twitter!" },
      { id: 2, content: "Why is the former POTUS banned??" },
    ]
  },
  {
    id: 2,
    username: "OptimusPrime",
    firstName: "Optimus",
    lastName: "Prime",
    email: "transformers@optonline.com",
    isAdmin: false,
    tweets: [
        { id: 1, content: "Be gone decepticons.." },
        { id: 2, content: "Bumblebee!" },
      ],
  },
  {
    id: 3,
    username: "TheNotoriousMMA",
    firstName: "Conor",
    lastName: "McGregor",
    email: "thenotoriousmma@gmail.com",
    isAdmin: false,
    tweets: [],
  },
  {
    id: 4,
    username: "JackDenmoRulez",
    firstName: "Jack",
    lastName: "Denmo",
    email: "jackdenmovirgin@gmail.com",
    isAdmin: false,
    tweets: [{ id: 1, content: "Virgin Squad Part 3 OTW" }],
  },
];
