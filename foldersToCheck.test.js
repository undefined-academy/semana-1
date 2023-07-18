const fs = require("fs");
const path = require("path");
const glob = require("glob");

const regularUsernameRegex = /(\w+|\(dot\))*/;
const discordUsernameRegex = /(\w+|\(dot\))*-\d{4}/;

// Define the array of folders and filenames to check
const foldersToCheck = [
  {
    name: "github-profiles",
    filenames: ["index.html", "README.md", "**/*.css"],
  },
];

// Define the array of folders to ignore
const foldersToIgnore = [".github", "node_modules", ".git"];

describe("Folder structure", () => {
  foldersToCheck.forEach((folderToCheck) => {
    // Get all folders in the current directory
    const folders = fs.readdirSync(path.join(__dirname, folderToCheck.name));

    folders.forEach((folder) => {
      describe(`Check folder ${folderToCheck.name}/${folder}`, () => {
        test(`name ${folder} is valid`, () => {
          const usernameRegex = new RegExp(
            `(${regularUsernameRegex.source})|(${discordUsernameRegex.source})`
          );
          expect(folder).toMatch(usernameRegex);
        });

        describe(`Check files in ${folderToCheck.name}/${folder}`, () => {
          // Check if each file in the filenames array exists in the folder
          folderToCheck.filenames.forEach((pattern) => {
            const files = glob.sync(
              path.join(__dirname, folderToCheck.name, folder, pattern),
              { nocase: false }
            );
            test(`file ${pattern} exists in ${folder}`, () => {
              expect(files.length).toBeGreaterThan(0);
            });
          });
        });
      });
    });
  });

  test("Check for unexpected folders", () => {
    // Get all folders in the parent directory
    const folders = fs.readdirSync(__dirname);

    folders.forEach((folder) => {
      // Check if the folder is either in foldersToCheck, foldersToIgnore, or is not a directory
      const isExpectedFolder =
        foldersToCheck.some((f) => f.name === folder) ||
        foldersToIgnore.includes(folder) ||
        !fs.lstatSync(path.join(__dirname, folder)).isDirectory();
      expect(isExpectedFolder).toBe(true);
    });
  });
});
