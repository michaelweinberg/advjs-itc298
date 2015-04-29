fs.stat("folder", function(err, stat) {
  if (err) return console.log("no such directory");
  fs.readFile("folder/example.txt", "utf8", function(err, data) {
    data += "...";
    fs.writeFile("folder/newFile.txt", data, function(err, data) {
      console.log("Write complete");
    });
  });
});
