import {DataManager} from './dataManager';

const userManager = new DataManager<{ id: number; name: string }>();
userManager.add({id: 1, name: "Alice"});
userManager.add({id: 2, name: "Bob"});

console.log(userManager.getAll());
userManager.remove(0);
console.log(userManager.getAll());
