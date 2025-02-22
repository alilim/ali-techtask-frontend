export const debounce = (func, wait, immediate) => {
  let timeout;

  return function executedFunction() {
    let context = this;
    let args = arguments;
	    
    let later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    let callNow = immediate && !timeout;
	
    clearTimeout(timeout);

    timeout = setTimeout(later, wait);
	
    if (callNow) func.apply(context, args);
  };
}

export const generateSlug = (text) => {
  return text.toString().toLowerCase()
      .replace(/^-+/, '')
      .replace(/-+$/, '')
      .replace(/\s+/g, '-')
      .replace(/\-\-+/g, '-')
      .replace(/[^\w\-]+/g, '');
}