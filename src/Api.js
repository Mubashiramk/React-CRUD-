import USERS from "./data/users.json";

export const userLogin = (email, firstName) => {
  return new Promise((resolve, reject) => {
    let res = {};
    var check = USERS.filter(function (data) {
      return data.email === email;
    });
    if (check[0].firstName === firstName) {
      res = {
        data: {
          status: "success",
          user: {
            id: check[0].id,
            email: check[0].email,
            first_name: check[0].firstName,
            last_name: check[0].lastName,
            avatar: check[0].avatar,
          },
        },
      };
      // console.log(res);
      setTimeout(() => resolve(res), 250);
    } else {
      res = {
        data: {
          status: "failed",
        },
      };

      setTimeout(() => reject(new Error("Inalid data")), 250);
    }
  });
};

export const usersList = (page) => {
  return new Promise((resolve, reject) => {
    if (!USERS) {
      setTimeout(() => reject(new Error("No users found")), 250);
    }
    let res = {
      page: page,
      per_page: 6,
      total: USERS.length,
      totalPages: Math.ceil(USERS.length / 6),
      data: USERS.slice(page * 6 - 6, page * 6),
    };
    setTimeout(() => resolve(res), 250);
  });
};

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    let res = {};
    var check = USERS.filter(function (data) {
      return data.id === id;
    });
    if (!check) {
      setTimeout(() => reject(new Error("Inalid data")), 250);
    } else {
      res = {
        data: {
          id: check[0].id,
          email: check[0].email,
          first_name: check[0].firstName,
          last_name: check[0].lastName,
          avatar: check[0].avatar,
        },
      };
      // console.log(res);
      setTimeout(() => resolve(res), 250);
    }
  });
};
