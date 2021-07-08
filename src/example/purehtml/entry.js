const render = () => {
  document.getElementById('purehtml-container').innerHTML = 'Hello, rend12234231er with jQuery';
  console.log('Hello, render with jQuery');
  return Promise.resolve();
};

((global) => {
  global['purehtml'] = {
    bootstrap: () => {
      console.log('purehtml bootstrap');
      return Promise.resolve();
    },
    mount: () => {
      console.log('purehtml mount111');
      return render();
    },
    unmount: () => {
      console.log('purehtml unmount');
      return Promise.resolve();
    },
  };
})(window);
