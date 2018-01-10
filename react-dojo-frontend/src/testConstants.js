module.exports = {
  mocks: {
    responseFromRandomUserApi: {
      success: {
        results: [
          {
            gender: "male",
            name: { title: "monsieur", first: "victor", last: "riviere" },
            location: {
              street: "2113 place des 44 enfants d'izieu",
              city: "savigny",
              state: "ticino",
              postcode: 5614
            },
            email: "victor.riviere@example.com",
            login: {
              username: "organiccat975",
              password: "base",
              salt: "q0IJerIY",
              md5: "6183c15acc40044097f248acb1d3da9f",
              sha1: "ce0bc4f0c22a390ad1b5e4c0ac6214745967105c",
              sha256:
                "6616ffb0fa7bf5dc13bb9aedc16b36d5f84bf49818e784ea58f342835b7876b2"
            },
            dob: "1955-06-08 23:49:32",
            registered: "2002-11-14 04:24:53",
            phone: "(704)-124-3808",
            cell: "(966)-638-1407",
            id: { name: "AVS", value: "756.RFRI.GUKM.93" },
            picture: {
              large: "https://randomuser.me/api/portraits/men/59.jpg",
              medium: "https://randomuser.me/api/portraits/med/men/59.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/men/59.jpg"
            },
            nat: "CH"
          }
        ],
        info: { seed: "fff763e9a0d04a5f", results: 1, page: 1, version: "1.1" }
      }
    }
  },
  expects: {
    requestsToRandomUserApi: {
      maleUrl: "https://randomuser.me/api/?results=1&gender=male",
      femaleUrl: "https://randomuser.me/api/?results=1&gender=female"
    }
  }
};
