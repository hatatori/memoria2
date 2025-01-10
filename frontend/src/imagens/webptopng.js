const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const folder = './webp/'; // Diretório com os arquivos .webp

fs.readdir(folder, (err, files) => {
    if (err) throw err;

    files.filter(file => file.endsWith('.webp')).forEach(file => {
        const inputFile = path.join(folder, file);
        const outputFile = path.join(folder, file.replace('.webp', '.png'));

        exec(`ffmpeg -i "${inputFile}" "${outputFile}"`, (err, stdout, stderr) => {
            if (err) {
                console.error(`Erro ao converter ${file}:`, stderr);
            } else {
                console.log(`Convertido: ${file} -> ${outputFile}`);
            }
        });
    });
});