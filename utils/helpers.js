module.exports = {

    format_date: (date) => {
      const year = new Date(date).getFullYear();
      const day = String(date.getDate());
      const month = String(date.getMonth() + 1); // Months are zero-based
      return `${month}/${day}/${year}`;
    },

    capitalize: (word)=> {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
  }
  