import store from "./store";
export async function buscar() {
  //const url = "data/earth-like-results.json";
  //const url = "data/planets/Kepler-22b.json";
  const url =["data/planets/Kepler-22b.json","data/planets/Kepler-62f.json","data/planets/Kepler-69c.json","data/planets/Kepler-186f.json"];
  url.map((item,index)=>{
    fetch(item)
      .then(res => res.json())
      .then(res => {
        let listPlanet = store.getState().planet;
        const newList = listPlanet.concat({
           id: listPlanet.length,
           name: res.pl_name,
           year: res.pl_disc,
           descrip: res.pl_telescope,
           dens: res.dec
        });
        store.setState({
           planet: newList
        });
        console.log(store.getState().planet);
      })
  })
}


