const { app, BrowserWindow } = require("electron");

// 引入node的 path 和url模块
const path = require("path");
const url = require("url");
const mode = process.argv[2]; // 获取命令脚本参数

function createWindow() {
  const windowOptions = {
    width: 1000,
    height: 1600,
  };

  const mainWindow = new BrowserWindow(windowOptions);
  // 加载窗口，直接挂载REACT界面上
  if (mode === "dev") {
    mainWindow.loadURL("http://localhost:3000/");
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, "./build/index.html"),
        protocol: "file:",
        slashes: true,
      })
    );
  }
}

app.on("ready", () => {
  createWindow();
});
