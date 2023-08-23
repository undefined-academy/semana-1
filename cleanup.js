const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Define the target directories
const targetDirs = ["github-profiles"];

targetDirs.forEach(targetDir => {
    if (fs.existsSync(targetDir)) {
        const dirs = glob.sync(`${targetDir}/**/*.*`, { nodir: false });

        // Rename folder names, replacing '.' with '(dot)'
        dirs.forEach(dir => {
            if (fs.lstatSync(dir).isDirectory()) {
                const parentDir = path.dirname(dir);
                const baseName = path.basename(dir);
                const newName = baseName.replace('.', '(dot)');
                const newPath = path.join(parentDir, newName);

                if (dir !== newPath) {
                    fs.renameSync(dir, newPath);
                }
            }
        });

        // Delete files that match the .gitignore file
        const gitignorePath = path.join(targetDir, '.gitignore');

        if (fs.existsSync(gitignorePath)) {
            const gitignore = fs.readFileSync(gitignorePath, 'utf-8');
            const patterns = gitignore.split('\n').filter(pattern => pattern.trim() !== '');

            patterns.forEach(pattern => {
                const files = glob.sync(path.join(targetDir, pattern));

                files.forEach(file => {
                    if (fs.existsSync(file)) {
                        fs.unlinkSync(file);
                    }
                });
            });
        }
    } else {
        console.log(`The target directory "${targetDir}" does not exist. Please check the path.`);
    }
});
