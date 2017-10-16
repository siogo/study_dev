const { spawn } = require('child_process');

const subprocess = spawn(process.argv0, ['1.js'], {
  detached: true,
  stdio: ['pipe']
});

console.log(subprocess.stdin[0])

console.log(2);

// subprocess.unref();