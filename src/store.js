import createStore from "redux-zero";

const result = [
  {
    pl_name: "jupiter",
    pl_disk: "123333",
    pl_dens: "8383"
  },
  {
    pl_name: "marte",
    pl_disk: "126773",
    pl_dens: "8233"
  },
  {
    pl_name: "saturno",
    pl_disk: "198878",
	  pl_dens: "9575"
  }
];
const initialState = {
  planet: result
};

const store = createStore(initialState);

export default store;
