class InMemorySearchEngine {
  constructor() {
    this.entities = new Map();
  }

  registerNameSpace(nameSpace) {
    this.entities.set(nameSpace, []);
  }
  addDocuments(nameSpace, ...docs) {
    const existing = this.entities.get(nameSpace);
    if (!existing) {
      this.entities.set(nameSpace, [...docs]);
    } else {
      this.entities.set(nameSpace, [...existing, ...docs]);
    }
  }

  search(nameSpace, filterFn, orderBy) {
    const docs = this.entities.get(nameSpace) ?? [];
    const filteredDocs = docs.filter((doc) => filterFn(doc));
    const { key, asc } = orderBy;
    const resultedDocs = filteredDocs.sort((docA, docB) => {
      const diff = docA[key] - docB[key];
      if (asc) {
        return diff > 0 ? 1 : -1;
      } else {
        return diff > 0 ? -1 : 1;
      }
    });
    return resultedDocs;
  }
}

// Input
const searchStore = new InMemorySearchEngine("Movies");
searchStore.registerNameSpace("Movies");
searchStore.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);
const result = searchStore.search("Movies", (e) => e.rating >= 8.5, {
  key: "rating",
  asc: true,
});
console.log(result);
