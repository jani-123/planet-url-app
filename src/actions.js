import store from "./store";

export async function search() {
  const url = "data/Kepler-22b.json";
  fetch(url)
    .then(res => res.json())
    .then(res => {
      console.log(res.pl_name);
      let nuevo = [];
      store.setState({
        planet : res.pl_name
      });
    });
  
      // fetch(url)
      //     .then(response => response.json())
      //     .then(result => {
      //       console.log(result);
      //       //  const {hits, page} = result;
      //       //  console.log ('hits', hits)
      //       //  //this.result = hits;
      //       //  store.setState( {
      //       //     result : hits
      //       //  })
      //     })
      //     .catch(e => e);
  
}