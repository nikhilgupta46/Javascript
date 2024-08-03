class FileSystemCustom {
  constructor() {
    this.directory = { root: {} };
    this.currentDir = this.directory["root"];
    this.currentPath = "root";
  }
  createDirectory(name) {
    if (this.currentDir[name]) {
      throw new Error("Directory already exists with same name");
    } else {
      this.currentDir[name] = {};
    }
  }
  changeDirectory(name) {
    const path = name.split("-");
    let currentDir = this.directory;
    for (let key of path) {
      currentDir = currentDir[key];
    }
    if (currentDir) {
      this.currentDir = currentDir;
      this.currentPath = name;
    } else {
      return new TypeError("enter valid path");
    }
    return this.currentDir;
  }
}

// Input:
const dir = new FileSystemCustom();
dir.createDirectory("prashant");
dir.changeDirectory("root-prashants");
console.log("dir", dir.currentDir, dir.currentPath, dir.directory);
// dir.addFile("index.html");
// dir.addFile("app.js");
// dir.changeDirectory("root");
// dir.createDirectory("practice");
// dir.changeDirectory("root-practice");
// dir.addFile("index.html");
// dir.addFile("app.js");
// dir.createDirectory("build");
// dir.changeDirectory("root-practice-build");
// dir.addFile("a.png");
// dir.addFile("b.jpg");
// dir.deleteFile("a.png");
// dir.changeDirectory("root");
// dir.deleteDirectory("prashant");
// console.log(dir.getRootDirectory());

/* Output:
{
  "root": {
    "practice": {
      "files": [
        "index.html",
        "app.js"
      ],
      "build": {
        "files": [
          "b.jpg"
        ]
      }
    }
  }
}
  */
