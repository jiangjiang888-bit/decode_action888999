//Mon Jul 20 2026 15:44:40 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
!function () {
  async function _0x1c4b2f(_0x1e95d3) {
    {
      let _0xd3335a = null;
      const _0x27465a = 300000,
        _0x269425 = tt.env.microapp.appId,
        _0x33e240 = (_0x1ec5b5, _0x2fbf8b) => {
          tt.setStorageSync("loginFailureData", {
            "count": _0x1ec5b5,
            "time": _0x2fbf8b
          });
        },
        _0x128182 = async () => {
          let {
            count: _0x2bfb7a,
            time: _0x988746
          } = tt.getStorageSync("loginFailureData") || {
            "count": 0,
            "time": null
          };
          if (_0x2bfb7a >= 5) {
            {
              const _0x389dcd = Date.now() - _0x988746;
              if (_0x389dcd < _0x27465a) {
                const _0x149812 = Math.ceil((_0x27465a - _0x389dcd) / 1000 / 60);
                return void (await tt.showModal({
                  "title": "尝试次数过多",
                  "content": "登录失败次数过多，请" + _0x149812 + "分钟后重试",
                  "showCancel": false,
                  "confirmText": "确定"
                }));
              }
              _0x2bfb7a = 0;
              _0x988746 = null;
              _0x33e240(_0x2bfb7a, _0x988746);
            }
          }
          if (_0xd3335a = tt.getStorageSync("authId"), "expired" === _0xd3335a) return await tt.showModal({
            "title": "兑换码已过期",
            "content": "请重新输入兑换码",
            "confirmText": "确定",
            "showCancel": false
          }), void tt.setStorageSync("authId", "");
          if ("unauthorized" === _0xd3335a) return await tt.showModal({
            "title": "你的兑换码已在其他设备登录！",
            "content": "如果不是你本人操作，可能你的兑换码已泄漏，请勿将兑换码分享给其他人！",
            "confirmText": "确定",
            "showCancel": false
          }), void tt.setStorageSync("authId", "");
          if (!_0xd3335a) {
            const _0x4f9b40 = await envLibrary.uiManager.createInputModal({
              "title": "请输入兑换码"
            });
            return void (_0x4f9b40?.["confirm"] && tt.setStorageSync("authId", _0x4f9b40.value));
          }
          const _0x571959 = await envLibrary.rpcClient.call.loginUser(_0x269425, _0xd3335a);
          return _0x571959 ? (_0x2bfb7a = 0, _0x988746 = null, _0x33e240(_0x2bfb7a, _0x988746), _0x571959.code && (_0xd3335a = _0x571959.code, await tt.showModal({
            "title": "管理员兑换创建成功",
            "content": "你的管理员兑换码：创建成功！\n兑换码：" + _0x571959.code + "\n请勿将管理员兑换码分享给其他人！",
            "showCancel": false,
            "confirmText": "复制兑换码"
          }).then(() => {
            tt.setClipboardData({
              "data": _0x571959.code,
              "success": () => {
                tt.showToast({
                  "title": "兑换码已复制到剪贴板"
                });
              },
              "fail": () => {
                tt.showToast({
                  "title": "复制兑换码失败，请在查看兑换码菜单中截图保存！"
                });
              }
            });
          }), tt.setStorageSync("authId", _0x571959.code)), _0x571959) : (_0x2bfb7a++, _0x988746 = Date.now(), _0x33e240(_0x2bfb7a, _0x988746), await tt.showModal({
            "title": "无效兑换码",
            "content": "请检查你的兑换码是否正确！",
            "showCancel": false
          }), void tt.setStorageSync("authId", ""));
        };
      let _0xbfa35 = null;
      for (; !_0xbfa35;) _0xbfa35 = await _0x128182(), await new Promise(_0x5e69d9 => setTimeout(_0x5e69d9, 100));
      try {
        setInterval(() => {
          envLibrary.rpcClient.call.authorize(_0x269425, _0xd3335a, _0xbfa35.token).then(_0x55176c => {
            _0x55176c && _0x55176c.success && _0x55176c.token || (401 === _0x55176c.errCode ? tt.setStorageSync("authId", "unauthorized") : tt.setStorageSync("authId", "expired"), window.location.reload());
          });
        }, 10000);
        _0xbfa35?.["admin"] && envLibrary.uiManager.bottomMenu.addMenuItem("📄", "创建兑换码", async () => {
          const _0x19fc07 = await envLibrary.uiManager.createFormModal({
            "title": "创建兑换码",
            "fields": [{
              "name": "duration",
              "type": "number",
              "label": "使用期限（单位：天）",
              "placeholder": "请输入……"
            }]
          });
          if (_0x19fc07?.["confirm"]) {
            const _0x1ab5ee = await envLibrary.rpcClient.call.createRedempCode(_0x269425, _0xd3335a, _0xbfa35.token, parseFloat(_0x19fc07.formData.duration));
            _0x1ab5ee && _0x1ab5ee.success ? await tt.showModal({
              "title": "兑换码已生成",
              "content": "兑换码：" + _0x1ab5ee.code + "\n有效期：" + _0x1ab5ee.duration + "天",
              "confirmText": "复制代码",
              "showCancel": false
            }).then(() => {
              tt.setClipboardData({
                "data": _0x1ab5ee.code,
                "success": () => {
                  tt.showToast({
                    "title": "兑换码已复制到剪贴板"
                  });
                },
                "fail": () => {
                  tt.showToast({
                    "title": "复制兑换码失败，请截图保存！"
                  });
                }
              });
            }) : 400 === _0x1ab5ee?.["errCode"] ? await tt.showModal({
              "title": "创建兑换码失败",
              "content": "你输入的使用期限不是一个数字！",
              "confirmText": "确定",
              "showCancel": false
            }) : 404 === _0x1ab5ee?.["errCode"] ? await tt.showModal({
              "title": "创建兑换码失败",
              "content": "你没有配置挂载目录，无法创建兑换码！",
              "confirmText": "确定",
              "showCancel": false
            }) : 409 === _0x1ab5ee?.["errCode"] ? await tt.showModal({
              "title": "创建兑换码失败",
              "content": "兑换码冲突，该兑换码已存在，请重新创建！",
              "confirmText": "确定",
              "showCancel": false
            }) : 403 === _0x1ab5ee?.["errCode"] ? await tt.showModal({
              "title": "创建兑换码失败",
              "content": "你没有权限创建兑换码！",
              "confirmText": "确定",
              "showCancel": false
            }) : await tt.showModal({
              "title": "创建兑换码失败",
              "content": "创建兑换码失败，请稍后再试！",
              "confirmText": "确定",
              "showCancel": false
            });
          }
        });
        envLibrary.uiManager.bottomMenu.addMenuItem("🔍", "查看兑换码", async () => {
          envLibrary.uiManager.createFormModal({
            "title": "当前使用的兑换码",
            "fields": [{
              "name": "code",
              "type": "text",
              "label": "兑换码",
              "defaultValue": _0xd3335a
            }, {
              "name": "duration",
              "type": "text",
              "label": "到期时间",
              "defaultValue": (_0x1effbb => {
                {
                  if (!_0x1effbb) return "";
                  const _0x61408f = new Date(10 === _0x1effbb.toString().length ? 1000 * _0x1effbb : _0x1effbb);
                  return _0x61408f.getFullYear() + "-" + String(_0x61408f.getMonth() + 1).padStart(2, "0") + "-" + String(_0x61408f.getDate()).padStart(2, "0") + " " + String(_0x61408f.getHours()).padStart(2, "0") + ":" + String(_0x61408f.getMinutes()).padStart(2, "0") + ":" + String(_0x61408f.getSeconds()).padStart(2, "0");
                }
              })(_0xbfa35.expired)
            }],
            "showCancel": false
          });
        });
        window.screenOrientation = "portrait";
        require("./libs/min/laya.core.min.js");
        require("./libs/min/laya.ani.min.js");
        require("./libs/min/laya.ui.min.js");
        require("./js/bundle.js");
      } catch (_0x5ad3f7) {
        await tt.showModal({
          "title": "游戏启动失败",
          "content": _0x5ad3f7.message || _0x5ad3f7.error || _0x5ad3f7,
          "confirmText": "确定",
          "showCancel": false
        });
        window.location.reload();
      }
    }
  }
  envLibrary.rpcClient.call.getUserInfo().then(async _0x359735 => {
    const _0x43148c = _0x359735.data.id,
      _0x748e5d = tt.env.microapp.appId;
    let _0x121021;
    try {
      if (_0x121021 = await envLibrary.rpcClient.call.getMainAppVersion(), ((_0x4c82b6, _0x395001) => {
        const _0x4c8b7f = _0x4c82b6.split(".").map(Number),
          _0x1dafa8 = _0x395001.split(".").map(Number);
        for (let _0x35351d = 0; _0x35351d < Math.max(_0x4c8b7f.length, _0x1dafa8.length); _0x35351d++) {
          const _0x277554 = _0x4c8b7f[_0x35351d] || 0,
            _0x1ec038 = _0x1dafa8[_0x35351d] || 0;
          if (_0x277554 > _0x1ec038) return 1;
          if (_0x277554 < _0x1ec038) return -1;
        }
        return 0;
      })(_0x121021, "1.2.135") < 0) return void (await tt.showModal({
        "title": "请升级直播助手版本",
        "content": "当前直播助手版本过低，请升级至1.2.135以上版本！",
        "confirmText": "确定",
        "showCancel": false
      }));
    } catch (_0xb04e44) {
      return void (await tt.showModal({
        "title": "请升级直播助手版本",
        "content": "当前直播助手版本过低，请升级至1.2.135以上版本！",
        "confirmText": "确定",
        "showCancel": false
      }));
    }
    const _0x15bd55 = await envLibrary.rpcClient.call.getMountStatus();
    if (!_0x15bd55?.["exists"]) return void (await tt.showModal({
      "title": "未配置挂载文件夹路径",
      "content": "请创建一个文件夹(例如：D://mount)，并将文件夹路径保存在：直播助手->设置->挂载文件夹路径。否则无法使用代码修改能力！",
      "confirmText": "确定",
      "showCancel": false
    }));
    if (_0x15bd55?.["appInfo"]?.["appid"] && _0x15bd55.appInfo.appid != _0x748e5d) return void (await tt.showModal({
      "title": "挂载目录已被<" + (_0x15bd55.appInfo.name ?? "其他应用") + ">独占",
      "content": "请清空:<" + _0x15bd55.mountPath + ">，或创建新的挂载目录并在直播助手中更新配置！",
      "confirmText": "确定",
      "showCancel": false
    }));
    const _0x45ecb9 = await envLibrary.rpcClient.call.getAuthorization(),
      _0x112075 = _0x359735.data.id,
      _0x4aa43a = tt.getFileSystemManager(),
      _0x2bc95b = require("./RC4.js");
    try {
      {
        let _0x45da5f = null;
        if (_0x45ecb9) try {
          const _0x2fd2af = JSON.parse(_0x45ecb9);
          if ("string" == typeof _0x2fd2af.data && "string" == typeof _0x2fd2af.checksum) {
            if (_0x2bc95b.calculateChecksum(_0x2fd2af.data, _0x112075) === _0x2fd2af.checksum) {
              {
                const _0x1cbdbc = _0x2bc95b.base64ToArrayBuffer(_0x2fd2af.data);
                _0x45da5f = _0x2bc95b.crypt(_0x1cbdbc, _0x112075);
              }
            }
          }
        } catch (_0x4934b6) {}
        if (!_0x45da5f) {
          const _0x4662bf = await new Promise(async (_0xffc159, _0x14cf8a) => {
              try {
                const _0xeafd88 = await fetch("https://wgweb.cn/auth/" + _0x748e5d + "/" + _0x43148c + ".bin");
                _0xeafd88.ok ? _0xffc159({
                  "data": await _0xeafd88.arrayBuffer(),
                  "statusCode": _0xeafd88.status
                }) : _0x14cf8a(new Error("请求失败，状态码: " + _0xeafd88.status));
              } catch (_0x37e03f) {
                _0x14cf8a(_0x37e03f);
              }
            }),
            _0x47fdf8 = _0x2bc95b.arrayBufferToBase64(_0x4662bf.data),
            _0xa732ef = {
              "data": _0x47fdf8,
              "checksum": _0x2bc95b.calculateChecksum(_0x47fdf8, _0x112075),
              "authId": _0x112075,
              "timestamp": Date.now()
            };
          await envLibrary.rpcClient.call.setAuthorization(JSON.stringify(_0xa732ef));
          const _0x5dbd47 = _0x2bc95b.base64ToArrayBuffer(_0x47fdf8);
          _0x45da5f = _0x2bc95b.crypt(_0x5dbd47, _0x112075);
        }
        _0x4aa43a.writeFileSync("./tmp/js/plugin.js", _0x45da5f, "utf8");
        try {
          if (!(await fetch("/manage/exists?path=mapeditor").then(_0x28f644 => _0x28f644.json()))?.["exists"]) {
            const _0x4b041d = _0x4aa43a.readFileSync("mapeditor.zip"),
              _0x504349 = new Blob([_0x4b041d], {
                "type": "application/zip"
              }),
              _0x4320a7 = new FormData();
            _0x4320a7.append("zipFile", _0x504349, "mapeditor.zip");
            const _0x5e427d = await fetch("/manage/extract-zip", {
              "method": "POST",
              "body": _0x4320a7
            }).then(_0x1c55b6 => _0x1c55b6.ok ? _0x1c55b6.json() : 403 === _0x1c55b6.status ? {
              "success": false,
              "message": "请清空:<" + _0x15bd55.mountPath + ">，或创建新的挂载目录并在直播助手中更新配置！"
            } : {
              "success": false,
              "message": "未知错误！"
            });
            await fetch("/manage/add-to-whitelist", {
              "method": "POST",
              "headers": {
                "Content-Type": "application/json"
              },
              "body": JSON.stringify({
                "paths": ["mapeditor/maps.json", "mapeditor/maps", "mapeditor/icon"]
              })
            }).then(_0x37f0e8 => _0x37f0e8.text());
            _0x5e427d?.["success"] ? await tt.showModal({
              "title": "地图编辑器安装成功！",
              "content": "已成功安装自创地图编辑器！",
              "confirmText": "确定",
              "showCancel": false
            }) : await tt.showModal({
              "title": "地图编辑器安装失败！",
              "content": _0x5e427d.message,
              "confirmText": "确定",
              "showCancel": false
            });
          }
          _0x1c4b2f();
        } catch (_0x16ca13) {
          await tt.showModal({
            "title": "文件解压失败！",
            "content": "文件解压过程中出错！",
            "confirmText": "确定",
            "showCancel": false
          });
        }
      }
    } catch (_0x17b08c) {
      envLibrary.rpcClient.call.setAuthorization("");
      tt.showModal({
        "title": "未获得授权",
        "content": _0x43148c,
        "confirmText": "复制代码",
        "showCancel": false
      }).then(() => {
        tt.setClipboardData({
          "data": _0x43148c,
          "success": () => {
            tt.showToast({
              "title": "代码已复制，请联系作者授权！",
              "duration": 5000
            });
          },
          "fail": () => {
            tt.showToast({
              "title": "代码复制失败！请截图联系作者授权！",
              "duration": 5000
            });
          }
        });
      });
    }
  });
}();