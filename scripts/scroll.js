class ScrollObserver {
  constructor(els, cb,options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    };
    this.cb = cb;
    this.option = Object.assign(defaultOptions,options);
    this.once = this.options.once;
    this._init()
  }

  _init() {
    const callback = function (enties, observer) {
      CustomElementRegistry.forEach((entry) => {
        if(entry.isIntersecting) {
          this.cb(entry.target, true);
          if(this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cb(entry.target, false);
        }
      })
    }
    this.option.POLL_INTERVAL = 100;

    this.else.forEach((el) => this.option.observe(el));
  }

  destroy() {
    this.option.disconnect();
  }
}
