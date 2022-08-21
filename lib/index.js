/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 105:
/***/ ((module) => {

module.exports = eval("require")("@actions/core");


/***/ }),

/***/ 82:
/***/ ((module) => {

module.exports = eval("require")("@actions/github");


/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = eval("require")("@octokit/auth-action");


/***/ }),

/***/ 318:
/***/ ((module) => {

module.exports = eval("require")("@octokit/rest");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__nccwpck_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__nccwpck_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
// ESM COMPAT FLAG
__nccwpck_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: external "os"
const external_os_namespaceObject = require("os");
var external_os_default = /*#__PURE__*/__nccwpck_require__.n(external_os_namespaceObject);
;// CONCATENATED MODULE: external "fs"
const external_fs_namespaceObject = require("fs");
var external_fs_default = /*#__PURE__*/__nccwpck_require__.n(external_fs_namespaceObject);
;// CONCATENATED MODULE: external "path"
const external_path_namespaceObject = require("path");
var external_path_default = /*#__PURE__*/__nccwpck_require__.n(external_path_namespaceObject);
// EXTERNAL MODULE: ../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/core
var core = __nccwpck_require__(105);
// EXTERNAL MODULE: ../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@actions/github
var github = __nccwpck_require__(82);
// EXTERNAL MODULE: ../../../../usr/local/lib/node_modules/@vercel/ncc/dist/ncc/@@notfound.js?@octokit/rest
var rest = __nccwpck_require__(318);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
;// CONCATENATED MODULE: ./src/helpers.js


const execShellCommand = (cmd) => {
  return new Promise((resolve, reject) => {
    const process = (0,external_child_process_namespaceObject.spawn)(cmd, [], { shell: '/bin/bash' })
    let stdout = ""
    process.stdout.on('data', (data) => {
      console.log(data.toString());
      stdout += data.toString();
    });

    process.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    process.on('exit', (code) => {
      if (code !== 0) {
        reject(new Error(code ? code.toString() : undefined))
      }
      resolve(stdout)
    });
  });
}

;// CONCATENATED MODULE: ./src/index.js






const { createActionAuth } = __nccwpck_require__(261);



const UPTERM_VERSION = "v0.7.6"

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function run() {
  try {
    if (process.platform === "win32") {
      core.info("Windows is not supported by upterm, skipping...")
      return
    }

    core.info("JALLEN2112")

    core.debug("Installing dependencies")
    if (process.platform == "linux") {
      await execShellCommand(`curl -sL https://github.com/owenthereal/upterm/releases/download/${UPTERM_VERSION}/upterm_linux_amd64.tar.gz | tar zxvf - -C /tmp upterm && sudo install /tmp/upterm /usr/local/bin/`)
      await execShellCommand("if ! command -v tmux &>/dev/null; then sudo apt-get -y install tmux; fi")
    } else {
      await execShellCommand("brew install owenthereal/upterm/upterm")
      await execShellCommand("brew install tmux")
    }
    core.debug("Installed dependencies successfully")

    const sshPath = external_path_default().join(external_os_default().homedir(), ".ssh")
    if (!external_fs_default().existsSync(external_path_default().join(sshPath, "id_rsa"))) {
      core.debug("Generating SSH keys")
      external_fs_default().mkdirSync(sshPath, { recursive: true })
      try {
        await execShellCommand(`ssh-keygen -q -t rsa -N "" -f ~/.ssh/id_rsa; ssh-keygen -q -t ed25519 -N "" -f ~/.ssh/id_ed25519`);
      } catch { }    
      core.debug("Generated SSH keys successfully")
    } else {
      core.debug("SSH key already exists")
    }

    core.debug("Configuring ssh client")
    external_fs_default().appendFileSync(external_path_default().join(sshPath, "config"), "Host *\nStrictHostKeyChecking no\nCheckHostIP no\n" +
      "TCPKeepAlive yes\nServerAliveInterval 30\nServerAliveCountMax 180\nVerifyHostKeyDNS yes\nUpdateHostKeys yes\n")
    // entry in known hosts file in mandatory in upterm. attempt ssh connection to upterm server
    // to get the host key added to ~/.ssh/known_hosts
    if (core.getInput("ssh-known-hosts") && core.getInput("ssh-known-hosts") !== "") {
      core.info("Appending ssh-known-hosts to ~/.ssh/known_hosts. Contents of ~/.ssh/known_hosts:")
      external_fs_default().appendFileSync(external_path_default().join(sshPath, "known_hosts"), core.getInput("ssh-known-hosts"))
      core.info(await execShellCommand('cat ~/.ssh/known_hosts'))
    } else {
      core.info("Auto-generating ~/.ssh/known_hosts by attempting connection to uptermd.upterm.dev")
      try {
        await execShellCommand("ssh -i ~/.ssh/id_ed25519 uptermd.upterm.dev")
      } catch { }
      // @cert-authority entry is the mandatory entry. generate the entry based on the known_hosts entry key
      try {
        await execShellCommand('cat <(cat ~/.ssh/known_hosts | awk \'{ print "@cert-authority * " $2 " " $3 }\') >> ~/.ssh/known_hosts')
      } catch { }
    }

    let authorizedKeysParameter = ""

    let allowedUsers = core.getInput("limit-access-to-users").split(/[\s\n,]+/).filter(x => x !== "")
    if (core.getInput("limit-access-to-actor") === "true") {
      core.info(`Adding actor "${github.context.actor}" to allowed users.`)
      allowedUsers.push(github.context.actor)
    }
    const uniqueAllowedUsers = [...new Set(allowedUsers)]
    if (uniqueAllowedUsers.length > 0) {
      core.info(`Fetching SSH keys registered with GitHub profiles: ${uniqueAllowedUsers.join(', ')}`)
      const octokit = new rest.Octokit({
        authStrategy: createActionAuth
      })
      let allowedKeys = []
      for (const allowedUser of uniqueAllowedUsers) {
        if (allowedUser) {
          try {
            let keys = await octokit.users.listPublicKeysForUser({
              username: allowedUser
            })
            for (const item of keys.data) {
              allowedKeys.push(item.key)
            }
          } catch (error) {
            core.info(`Error fetching keys for ${allowedUser}. Error: ${error.message}`)
          }
        }
      }
      if (allowedKeys.length === 0) {
        throw new Error(`No public SSH keys registered with GitHub profiles: ${uniqueAllowedUsers.join(', ')}`)
      }
      core.info(`Fetched ${allowedKeys.length} ssh public keys`)
      const authorizedKeysPath = external_path_default().join(sshPath, "authorized_keys")
      external_fs_default().appendFileSync(authorizedKeysPath, allowedKeys.join('\n'))
      authorizedKeysParameter = `-a "${authorizedKeysPath}"`
    }

    const uptermServer = core.getInput("upterm-server")
    core.info(`Creating a new session. Connecting to upterm server ${uptermServer}`)
    await execShellCommand(`tmux new -d -s upterm-wrapper -x 132 -y 43 \"upterm host --server '${uptermServer}' ${authorizedKeysParameter} --force-command 'tmux attach -t upterm' -- tmux new -s upterm -x 132 -y 43\"`)
    await sleep(2000)
    await execShellCommand("tmux send-keys -t upterm-wrapper q C-m")
    // resize terminal for largest client by default
    await execShellCommand("tmux set -t upterm-wrapper window-size largest; tmux set -t upterm window-size largest")
    console.debug("Created new session successfully")

    core.debug("Fetching connection strings")
    await sleep(1000)

    console.debug("Entering main loop")
    while (true) {
      try {
        core.info(await execShellCommand('bash -c "upterm session current --admin-socket ~/.upterm/*.sock"'));
      } catch (error) {
        core.info(error.message);
        break
      }

      const skip = external_fs_default().existsSync("/continue") || external_fs_default().existsSync(external_path_default().join(process.env.GITHUB_WORKSPACE, "continue"))
      if (skip) {
        core.info("Exiting debugging session because '/continue' file was created")
        break
      }
      await sleep(30000)
    }
  } catch (error) {
    core.setFailed(error.message);
  }
}

;// CONCATENATED MODULE: ./src/main.js


run()
})();

module.exports = __webpack_exports__;
/******/ })()
;