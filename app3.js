const words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

const longWords = words.filter(word => word.length > 6);
// longWords is ["exuberant", "destruction", "present"]

const total = [0, 1, 2, 3].reduce((sum, value) => sum + value, 1);
// total is 7

let itemIDs = [1, 2, 3, 4, 5]; 
itemIDs.reduce((promise, itemID) => {
  return promise.then(_ => api.deleteItem(itemID));
}, Promise.resolve());

Promise.resolve()
.then(_ => api.deleteItem(1))
.then(_ => api.deleteItem(2))
.then(_ => api.deleteItem(3))
.then(_ => api.deleteItem(4))
.then(_ => api.deleteItem(5));
