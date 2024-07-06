import { readFile, writeFile } from 'fs/promises';
import { execSync } from 'child_process';

readFile('package.json', 'utf8')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const repoName = execSync("echo \"$GITHUB_REPOSITORY\" | sed 's/\\/.*//'").toString().trim();
        json.name = `@${repoName}/${json.name}`;
        console.info('Package name changed to %s', json.name);
        return writeFile('package.json', JSON.stringify(json, null, 2), 'utf8');
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });