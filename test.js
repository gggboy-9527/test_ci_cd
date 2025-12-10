import * as fs from 'node:fs';
import path from 'node:path';

function printTree(dir, prefix = '') {
    const files = fs.readdirSync(dir);
    const filtered = files.filter(f =>
        !['node_modules', '.git', 'coverage'].includes(f)
    ).sort();

    filtered.forEach((file, i) => {
        const isLast = i === filtered.length - 1;
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        console.log(prefix + (isLast ? '└── ' : '├── ') + file);

        if (stat.isDirectory()) {
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            printTree(filePath, newPrefix);
        }
    });
}

console.log(path.basename(process.cwd()));
printTree('.', '');