const receivesAFunction = (thing)=>{
  thing();
}
const returnsANamedFunction = () => {
  return function thing() {};
};
const returnsAnAnonymousFunction = () => {
  return function(){};
};
